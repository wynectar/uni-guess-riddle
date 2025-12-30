
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import RIDDLE_LIBRARY, {Riddle} from './riddle-lib'

export const useRiddleStore = defineStore('riddle', () => {
  const riddles = ref<Riddle[]>([]) // 游戏题库
  const currentIndex = ref(0)
  const score = ref(0)
  const showHint = ref(false) // 显示提示
  const userAnswer = ref('')
  const gameStarted = ref(false)
  const gameTime = ref(0)
  const gameMode = ref<'easy' | 'normal' | 'hard'>('normal') // 游戏模式
  const totalQuestions = ref(10) // 每局题目数量
  let timer: NodeJS.Timeout = null

  // 计算属性
  const currentRiddle = computed(() => riddles.value[currentIndex.value])
  const isLastQuestion = computed(() => currentIndex.value === totalQuestions.value - 1)
  const solvedCount = computed(() => riddles.value.filter(r => r.solved).length)
  const accuracy = computed(() => {
    const answered = riddles.value.filter(r => r.userAnswer !== undefined).length
    const correct = riddles.value.filter(r => r.solved).length
    return answered > 0 ? Math.round((correct / answered) * 100) : 0
  })
  const normalScore = computed(() => {
	  let num = 0
	  riddles.value.forEach((v) => {
		  num += v.difficulty * 10
	  })
	  return num
  })

  // 随机选择题目
  const selectRandomRiddles = (count: number, difficulty?: number) => {
    let pool = RIDDLE_LIBRARY
    
    // 根据难度筛选
    if (difficulty === 1) {
      pool = pool.filter(r => r.difficulty === 1)
    } else if (difficulty === 2) {
      pool = pool.filter(r => r.difficulty <= 2)
    } else if (difficulty === 3) {
      pool = pool
    }
    
    // 随机打乱并选择
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count).map(r => ({ ...r, solved: false }))
  }

  // 根据游戏模式设置
  const setGameMode = (mode: 'easy' | 'normal' | 'hard') => {
    gameMode.value = mode
    switch (mode) {
      case 'easy':
        totalQuestions.value = 8
        break
      case 'normal':
        totalQuestions.value = 10
        break
      case 'hard':
        totalQuestions.value = 12
        break
    }
  }

  // 开始新游戏
  const startNewGame = (mode: 'easy' | 'normal' | 'hard' = 'normal') => {
    gameStarted.value = true
    gameTime.value = 0
    score.value = 0
    currentIndex.value = 0
    showHint.value = false
    userAnswer.value = ''
    
    // 根据模式选择题目难度
    let difficulty: number | undefined
    switch (mode) {
      case 'easy': difficulty = 1; break
      case 'normal': difficulty = undefined; break // 全难度
      case 'hard': difficulty = 3; break
    }
    setGameMode(mode)
    // 随机选择题目
    riddles.value = selectRandomRiddles(totalQuestions.value, difficulty)
    
    // 开始计时
    if (timer) clearInterval(timer)
    timer = setInterval(() => {
      gameTime.value++
    }, 1000)
  }

  // 提交答案
  const submitAnswer = () => {
    if (!userAnswer.value.trim()) return false
    
    const isCorrect = userAnswer.value.trim() === currentRiddle.value.answer
    
    // 更新当前灯谜状态
    riddles.value[currentIndex.value] = {
      ...currentRiddle.value,
      solved: isCorrect,
      userAnswer: userAnswer.value.trim()
    }
    
    // 计算得分
    if (isCorrect) {
      const baseScore = currentRiddle.value.difficulty * 10
      const timeBonus = Math.max(0, 30 - Math.floor(gameTime.value)) // 时间奖励
	  const hintScore = showHint.value ? -5 : 0 // 提示扣分
      score.value += baseScore + timeBonus + hintScore
    }
    
    userAnswer.value = ''
    showHint.value = false
    
    return isCorrect
  }

  // 下一题
  const nextQuestion = () => {
    if (currentIndex.value < totalQuestions.value - 1) {
      currentIndex.value++
      showHint.value = false
      userAnswer.value = ''
    } else {
      endGame()
    }
  }

  // 跳过本题
  const skipQuestion = () => {
    riddles.value[currentIndex.value] = {
      ...currentRiddle.value,
      solved: false,
      userAnswer: '',
    }
    nextQuestion()
  }

  // 结束游戏
  const endGame = () => {
    gameStarted.value = false
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  // 切换提示
  const toggleHint = () => {
    if (!showHint.value) {
      showHint.value = true
      score.value = Math.max(0, score.value - 5) // 使用提示扣5分
    }
  }

  return {
    // 状态
    riddles,
    currentIndex,
    score,
    showHint,
    userAnswer,
    gameStarted,
    gameTime,
    gameMode,
    totalQuestions,
    
    // 计算属性
    currentRiddle,
    isLastQuestion,
    solvedCount,
    accuracy,
	normalScore,
    
    // 方法
    startNewGame,
    submitAnswer,
    nextQuestion,
    skipQuestion,
    endGame,
    toggleHint
  }
})