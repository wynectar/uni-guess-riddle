
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import RIDDLE_LIBRARY, {GAME_MODES} from './mega-riddle-library'
import { Riddle } from './mega-riddle-library/types'

export const useRiddleStore = defineStore('riddle', () => {
  const riddles = ref<Riddle[]>([]) // 游戏题库
  const currentIndex = ref(0)
  const gameStarted = ref(false)
  const gameTimeLimit = ref(0)
  const gameMode = ref<'easy' | 'normal' | 'hard' | 'challenge'>('normal') // 游戏模式
  const totalQuestions = ref(10) // 每局题目数量
  const totalScore = ref(0)
  const score = ref(0)
  let timer: NodeJS.Timeout = null

  // 计算属性
  const currentRiddle = computed(() => riddles.value[currentIndex.value])
  const isLastQuestion = computed(() => currentIndex.value === totalQuestions.value - 1)
  const correctCount = computed(() => riddles.value.filter(r => r.userAnswer === r.answer).length)
  const accuracy = computed(() => {
    const correct = riddles.value.filter(r => r.userAnswer === r.answer).length
    return correct > 0 ? Math.round((correct / totalQuestions.value) * 100) : 0
  })

  // 随机选择题目
  const selectRandomRiddles = (count: number) => {
	// 根据难度筛选
    let pool = RIDDLE_LIBRARY.filter(r => GAME_MODES[gameMode.value].difficultyRange.includes(r.difficulty))

    // 随机打乱并选择
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count).map(r => ({ ...r, solved: false }))
  }

  // 根据游戏模式设置
  const setGameMode = (mode: 'easy' | 'normal' | 'hard') => {
    gameMode.value = mode
	totalQuestions.value = GAME_MODES[gameMode.value].questionCount
	totalScore.value = totalQuestions.value * GAME_MODES[gameMode.value].scoreMultiplier
	gameTimeLimit.value = GAME_MODES[gameMode.value].timeLimit
  }

  // 开始新游戏
  const startNewGame = (mode: 'easy' | 'normal' | 'hard' = 'normal') => {
    gameStarted.value = true
    totalScore.value = 0
	score.value = 0
    currentIndex.value = 0
    
    setGameMode(mode)
    // 随机选择题目
    riddles.value = selectRandomRiddles(totalQuestions.value)
    
    // 开始计时
    if (timer) clearInterval(timer)
    timer = setInterval(() => {
      gameTimeLimit.value--
	  if (gameTimeLimit.value === 0) {
		  // endGame()
	  }
    }, 1000)
  }
  
  // 选择当前答案
  const selectCurrentAnswer = (val:string) => {
	  currentRiddle.value.userAnswer = val
  }

  // 提交答案
  const submitAnswer = () => {
	const userAnswer = currentRiddle.value.userAnswer
    if (!userAnswer) return false
    
    const isCorrect = userAnswer === currentRiddle.value.answer
    
    // 更新当前灯谜状态
    riddles.value[currentIndex.value] = {
      ...currentRiddle.value,
      solved: true,
      userAnswer
    }
    
    // 计算得分
    if (isCorrect) {
		const hintScore = currentRiddle.value.showHint ? -0.5 : 0 // 提示扣分
		score.value += GAME_MODES[gameMode.value].scoreMultiplier + hintScore
    }
    
    return isCorrect
  }

  // 下一题
  const nextQuestion = () => {
    if (currentIndex.value < totalQuestions.value - 1) {
      currentIndex.value++
    } else {
      endGame()
    }
  }

  // 跳过本题
  const skipQuestion = () => {
    riddles.value[currentIndex.value] = {
      ...currentRiddle.value,
      solved: false,
      showHint: false,
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
    if (!currentRiddle.value.showHint) {
      currentRiddle.value.showHint = true
    }
  }

  return {
    // 状态
    riddles,
    currentIndex,
    gameStarted,
    gameTimeLimit,
    gameMode,
    totalQuestions,
	totalScore,
	score,
    
    // 计算属性
    currentRiddle,
    isLastQuestion,
    correctCount,
    accuracy,
    
    // 方法
    startNewGame,
	selectCurrentAnswer,
    submitAnswer,
    nextQuestion,
    skipQuestion,
    endGame,
    toggleHint
  }
})