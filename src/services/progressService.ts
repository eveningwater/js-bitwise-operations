// 进度管理服务

import { useStorage } from "ew-responsive-store";

// 本地存储键名
const STORAGE_KEY = "js-bitwise-operations-progress";

// 用户进度接口
export interface UserProgress {
  completedLevels: number[];
  currentLevel: number;
  lastVisit: string;
  solution: string;
}

// 默认进度
const defaultProgress: UserProgress = {
  completedLevels: [],
  currentLevel: 1,
  lastVisit: new Date().toISOString(),
  solution: "",
};

// 响应式进度状态
const userProgress = useStorage<UserProgress>(STORAGE_KEY, defaultProgress);

/**
 * 保存用户进度
 */
function saveProgress(solution: string) {
  userProgress.value.lastVisit = new Date().toISOString();
  userProgress.value.solution = solution;
}

/**
 * 标记关卡为已完成
 * @param levelId 关卡ID
 */
function completeLevel(levelId: number, solution: string) {
  if (!userProgress.value.completedLevels.includes(levelId)) {
    userProgress.value.completedLevels.push(levelId);
    saveProgress(solution);
  }
}

/**
 * 设置当前关卡
 * @param levelId 关卡ID
 */
function setCurrentLevel(levelId: number, solution: string) {
  userProgress.value.currentLevel = levelId;
  saveProgress(solution);
}

/**
 * 检查关卡是否已完成
 * @param levelId 关卡ID
 */
function isLevelCompleted(levelId: number): boolean {
  return userProgress.value.completedLevels.includes(levelId);
}

/**
 * 获取所有已完成的关卡ID
 */
function getCompletedLevels(): number[] {
  return [...userProgress.value.completedLevels];
}

/**
 * 获取当前关卡ID
 */
function getCurrentLevel(): number {
  return userProgress.value.currentLevel;
}

/**
 * 重置所有进度
 */
function resetProgress() {
  userProgress.value = { ...defaultProgress };
  saveProgress("");
}

export {
  userProgress,
  completeLevel,
  setCurrentLevel,
  isLevelCompleted,
  getCompletedLevels,
  getCurrentLevel,
  resetProgress,
};
