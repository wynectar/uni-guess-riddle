// 导入各个分类
import astronomyGeographyRiddles from './astronomy-geography-riddles'; // 天文地理 100条
import historyCultureRiddles from './history-culture-riddles'; // 历史文化 120条
import biographyRiddles from './biography-riddles'; // 人物传记 100条
import landmarksRiddles from './landmarks-riddles'; // 名胜古迹 80条
import solarTermsRiddles from './solar-terms-riddles'; // 节气 50条
import fruitsVegetablesRiddles from './fruits-vegetables-riddles'; // 水果蔬菜 80条
import naturalScienceRiddles from './natural-science-riddles'; // 自然科学 100条
import chineseCharRiddles from './chinese-char-riddles'; // 汉字谜语 120条
import animalsPlantsRiddles from './animals-plants-riddles'; // 动植物 100条
import literatureArtRiddles from './literature-art-riddles'; // 文学艺术 80条
import sportsHealthRiddles from './sports-health-riddles'; // 体育健康 60条
import technologyRiddles from './technology-riddles'; // 科学技术 70条
import commonSenseRiddles from './common-sense-riddles'; // 生活常识 80条
import mathematicalLogicRiddles from './mathematical-logic-riddles'; // 数学逻辑 60条
import languageLiteratureRiddles from './language-literature-riddles'; // 语言文学 60条

// 合并所有题库
import { Riddle } from './types'
export const MEGA_RIDDLE_COMPLETE: Riddle[] = [
  ...astronomyGeographyRiddles, // 100
  ...historyCultureRiddles,     // 120 → 220
  ...biographyRiddles,          // 100 → 320
  ...landmarksRiddles,          // 80 → 400
  ...solarTermsRiddles,         // 50 → 450
  ...fruitsVegetablesRiddles,   // 80 → 530
  ...naturalScienceRiddles,     // 100 → 630
  ...chineseCharRiddles,        // 120 → 750
  ...animalsPlantsRiddles,      // 100 → 850
  ...literatureArtRiddles,      // 80 → 930
  ...sportsHealthRiddles,       // 60 → 990
  ...technologyRiddles,         // 70 → 1060
  ...commonSenseRiddles,         // 80 → 1140
  ...mathematicalLogicRiddles,
  ...languageLiteratureRiddles
];

// 为每个题目重新编号并确保唯一ID
export const getCompleteRiddleLibrary = () => {
  return MEGA_RIDDLE_COMPLETE.map((riddle, index) => ({
    ...riddle,
    id: index + 1 // 重新编号为1-1140
  }));
};

const MEGA_RIDDLE_LIBRARY = getCompleteRiddleLibrary()

// 导出题库操作函数
export const getRiddlesByCategory = (category: string) => {
  return MEGA_RIDDLE_LIBRARY.filter(riddle => riddle.category === category);
};

export const getRiddlesByDifficulty = (difficulty: number) => {
  return MEGA_RIDDLE_LIBRARY.filter(riddle => riddle.difficulty === difficulty);
};

export const getRandomRiddles = (count: number, category?: string, difficulty?: number) => {
  let pool = MEGA_RIDDLE_LIBRARY;
  
  if (category) {
    pool = pool.filter(riddle => riddle.category === category);
  }
  
  if (difficulty) {
    pool = pool.filter(riddle => riddle.difficulty === difficulty);
  }
  
  // Fisher-Yates洗牌算法
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getAllCategories = () => {
  const categories = new Set(MEGA_RIDDLE_LIBRARY.map(riddle => riddle.category));
  return Array.from(categories);
};

export const getLibraryStats = () => {
  const stats = {
    total: MEGA_RIDDLE_LIBRARY.length,
    byCategory: {} as Record<string, number>,
    byDifficulty: {
      简单: 0,
      中等: 0,
      困难: 0
    }
  };
  
  // 统计各分类数量
  MEGA_RIDDLE_LIBRARY.forEach(riddle => {
    stats.byCategory[riddle.category] = (stats.byCategory[riddle.category] || 0) + 1;
    
    if (riddle.difficulty === 1) stats.byDifficulty.简单++;
    if (riddle.difficulty === 2) stats.byDifficulty.中等++;
    if (riddle.difficulty === 3) stats.byDifficulty.困难++;
  });
  
  return stats;
};

// 游戏模式配置
export const GAME_MODES = {
  easy: {
    name: '简单模式',
    questionCount: 8,
    difficultyRange: [1, 2], // 只包含简单和中等难度
    timeLimit: 600, // 10分钟
    scoreMultiplier: 1.0
  },
  normal: {
    name: '普通模式',
    questionCount: 10,
    difficultyRange: [1, 2, 3], // 全难度
    timeLimit: 480, // 8分钟
    scoreMultiplier: 1.2
  },
  hard: {
    name: '困难模式',
    questionCount: 12,
    difficultyRange: [2, 3], // 主要中等和困难
    timeLimit: 360, // 6分钟
    scoreMultiplier: 1.5
  },
  challenge: {
    name: '挑战模式',
    questionCount: 15,
    difficultyRange: [3], // 只包含困难
    timeLimit: 300, // 5分钟
    scoreMultiplier: 2.0
  }
};

export default MEGA_RIDDLE_LIBRARY