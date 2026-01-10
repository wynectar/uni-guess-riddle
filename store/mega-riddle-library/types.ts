export interface Riddle {
  id: number
  question: string
  answer: string
  options: Record<string, string>  // A-D选项
  hint?: string
  showHint?: boolean
  difficulty: number  // 1-简单, 2-中等, 3-困难
  category: string
  explanation?: string,
  solved?: boolean
  userAnswer?: string
}