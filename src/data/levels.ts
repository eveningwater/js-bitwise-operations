// 位运算关卡数据

import { useLanguage } from '../i18n';

export interface TestCase {
  input: string;
  expected: any;
}

export interface Level {
  id: number;
  name: string;
  icon: string;
  completed?: boolean;
  theory: string;
  challenge: string;
  hint: string;
  solution: string;
  testCases: TestCase[];
  solutionTemplate?: string;
}

// 创建关卡数据的函数，支持国际化
export function createLevelsData(): Level[] {
  const { t } = useLanguage();
  
  const levels = [
    {
      id: 1,
      name: t('levels.level1.name'),
      icon: "&",
      theory: `
        <h3>${t('levels.level1.theoryTitle')}</h3>
        <p>${t('levels.level1.theoryDesc1')}</p>
        <p>${t('levels.level1.theoryDesc2')}</p>
        <pre><code>${t('levels.level1.theoryExample')}</code></pre>
        <p>${t('levels.level1.theoryDesc3')}</p>
        <p>${t('levels.level1.theoryDesc4')}</p>
        <pre><code>${t('levels.level1.theoryCode1')}</code></pre>
        <p>${t('levels.level1.theoryDesc5')}</p>
        <pre><code>${t('levels.level1.theoryCode2')}</code></pre>
      `,
      challenge: t('levels.level1.challenge'),
      hint: t('levels.level1.hint'),
      solution: `function decimalToBinary(num) {
  if (+num === 0) return "0";
  
  let binary = [];
  let temp = Math.abs(num);
  
  while (temp > 0) {
    binary.push(temp % 2);
    temp = Math.floor(temp / 2);
  }
  
  return binary.reverse().join("");
}`,
      testCases: [
        { input: "10", expected: "1010" },
        { input: "42", expected: "101010" },
        { input: "0", expected: "0" },
        { input: "255", expected: "11111111" },
      ],
    },
    {
      id: 2,
      name: t('levels.level2.name'),
      icon: "&",
      theory: `
        <h3>${t('levels.level2.theoryTitle')}</h3>
        <p>${t('levels.level2.theoryDesc1')}</p>
        <p>${t('levels.level2.theoryDesc2')}</p>
        <pre><code>${t('levels.level2.theoryExample')}</code></pre>
        <p>${t('levels.level2.theoryDesc3')}</p>
        <ul>
          <li>${t('levels.level2.theoryUse1')}</li>
          <li>${t('levels.level2.theoryUse2')}</li>
          <li>${t('levels.level2.theoryUse3')}</li>
        </ul>
      `,
      challenge: t('levels.level2.challenge'),
      hint: t('levels.level2.hint'),
      solution: `function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n-1)) === 0;
}`,
      testCases: [
        { input: "1", expected: true },
        { input: "2", expected: true },
        { input: "3", expected: false },
        { input: "4", expected: true },
        { input: "5", expected: false },
        { input: "16", expected: true },
      ],
    },
    {
      id: 3,
      name: t('levels.level3.name'),
      icon: "|",
      theory: `
        <h3>${t('levels.level3.theoryTitle')}</h3>
        <p>${t('levels.level3.theoryDesc1')}</p>
        <p>${t('levels.level3.theoryDesc2')}</p>
        <pre><code>${t('levels.level3.theoryExample')}</code></pre>
        <p>${t('levels.level3.theoryDesc3')}</p>
        <ul>
          <li>${t('levels.level3.theoryUse1')}</li>
          <li>${t('levels.level3.theoryUse2')}</li>
        </ul>
      `,
      challenge: t('levels.level3.challenge'),
      hint: t('levels.level3.hint'),
      solution: `function setBit(num, n) {
  const mask = 1 << n;
  return num | mask;
}`,
      testCases: [
        { input: "5, 1", expected: 7 },
        { input: "8, 0", expected: 9 },
        { input: "0, 3", expected: 8 },
        { input: "15, 4", expected: 31 },
      ],
    },
    {
      id: 4,
      name: t('levels.level4.name'),
      icon: "^",
      theory: `
        <h3>${t('levels.level4.theoryTitle')}</h3>
        <p>${t('levels.level4.theoryDesc1')}</p>
        <p>${t('levels.level4.theoryDesc2')}</p>
        <pre><code>${t('levels.level4.theoryExample')}</code></pre>
        <p>${t('levels.level4.theoryDesc3')}</p>
        <ul>
          <li>${t('levels.level4.theoryUse1')}</li>
          <li>${t('levels.level4.theoryUse2')}</li>
          <li>${t('levels.level4.theoryUse3')}</li>
        </ul>
      `,
      challenge: t('levels.level4.challenge'),
      hint: t('levels.level4.hint'),
      solution: `function findSingleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}`,
      testCases: [
        { input: "[2,2,1]", expected: 1 },
        { input: "[4,1,2,1,2]", expected: 4 },
        { input: "[1]", expected: 1 },
        { input: "[7,3,5,7,5,3,9]", expected: 9 },
      ],
    },
    {
      id: 5,
      name: t('levels.level5.name'),
      icon: "~",
      theory: `
        <h3>${t('levels.level5.theoryTitle')}</h3>
        <p>${t('levels.level5.theoryDesc1')}</p>
        <p>${t('levels.level5.theoryDesc2')}</p>
        <pre><code>${t('levels.level5.theoryExample')}</code></pre>
        <p>${t('levels.level5.theoryDesc3')}</p>
        <p>${t('levels.level5.theoryDesc4')}</p>
        <ul>
          <li>${t('levels.level5.theoryUse1')}</li>
          <li>${t('levels.level5.theoryUse2')}</li>
        </ul>
      `,
      challenge: t('levels.level5.challenge'),
      hint: t('levels.level5.hint'),
      solution: `function bitwiseNOT(num) {
  return ~num;
}`,
      testCases: [
        { input: "5", expected: -6 },
        { input: "-3", expected: 2 },
        { input: "0", expected: -1 },
        { input: "-1", expected: 0 },
      ],
    },
    {
      id: 6,
      name: t('levels.level6.name'),
      icon: "<<",
      theory: `
        <h3>${t('levels.level6.theoryTitle')}</h3>
        <p>${t('levels.level6.theoryDesc1')}</p>
        <pre><code>${t('levels.level6.theoryExample')}</code></pre>
        <p>${t('levels.level6.theoryDesc2')}</p>
        <p>${t('levels.level6.theoryDesc3')}</p>
        <ul>
          <li>${t('levels.level6.theoryUse1')}</li>
          <li>${t('levels.level6.theoryUse2')}</li>
        </ul>
      `,
      challenge: t('levels.level6.challenge'),
      hint: t('levels.level6.hint'),
      solution: `function powerOfTwo(n) {
  if (n < 0) return 0;
  return 1 << n;
}`,
      testCases: [
        { input: "0", expected: 1 },
        { input: "1", expected: 2 },
        { input: "3", expected: 8 },
        { input: "10", expected: 1024 },
      ],
    },
    {
      id: 7,
      name: t('levels.level7.name'),
      icon: ">>",
      theory: `
        <h3>${t('levels.level7.theoryTitle')}</h3>
        <p>${t('levels.level7.theoryDesc1')}</p>
        <p>${t('levels.level7.theoryDesc2')}</p>
        <pre><code>${t('levels.level7.theoryExample')}</code></pre>
        <p>${t('levels.level7.theoryDesc3')}</p>
        <p>${t('levels.level7.theoryDesc4')}</p>
        <ul>
          <li>${t('levels.level7.theoryUse1')}</li>
          <li>${t('levels.level7.theoryUse2')}</li>
        </ul>
      `,
      challenge: t('levels.level7.challenge'),
      hint: t('levels.level7.hint'),
      solution: `function divideByTwo(num) {
  return num >> 1;
}`,
      testCases: [
        { input: "10", expected: 5 },
        { input: "7", expected: 3 },
        { input: "-5", expected: -3 },
        { input: "0", expected: 0 },
      ],
    },
    {
      id: 8,
      name: t('levels.level8.name'),
      icon: ">>>",
      theory: `
        <h3>${t('levels.level8.theoryTitle')}</h3>
        <p>${t('levels.level8.theoryDesc1')}</p>
        <p>${t('levels.level8.theoryDesc2')}</p>
        <pre><code>${t('levels.level8.theoryExample')}</code></pre>
        <p>${t('levels.level8.theoryDesc3')}</p>
        <p>${t('levels.level8.theoryDesc4')}</p>
        <ul>
          <li>${t('levels.level8.theoryUse1')}</li>
          <li>${t('levels.level8.theoryUse2')}</li>
        </ul>
      `,
      challenge: t('levels.level8.challenge'),
      hint: t('levels.level8.hint'),
      solution: `function unsignedRightShift(num) {
  return num >>> 1;
}`,
      testCases: [
        { input: "10", expected: 5 },
        { input: "-10", expected: 2147483643 },
        { input: "0", expected: 0 },
        { input: "-1", expected: 2147483647 },
      ],
    },
    {
      id: 9,
      name: t('levels.level9.name'),
      icon: "🎭",
      theory: `
        <h3>${t('levels.level9.theoryTitle')}</h3>
        <p>${t('levels.level9.theoryDesc1')}</p>
        <p>${t('levels.level9.theoryDesc2')}</p>
        <p>${t('levels.level9.theoryDesc3')}</p>
        <ul>
          <li>${t('levels.level9.theoryUse1')}</li>
          <li>${t('levels.level9.theoryUse2')}</li>
          <li>${t('levels.level9.theoryUse3')}</li>
          <li>${t('levels.level9.theoryUse4')}</li>
        </ul>
        <pre><code>${t('levels.level9.theoryExample')}</code></pre>
      `,
      challenge: t('levels.level9.challenge'),
      hint: t('levels.level9.hint'),
      solution: `function hasPermission(userPermissions, permissionToCheck) {
  return (userPermissions & permissionToCheck) !== 0;
}`,
      testCases: [
        { input: "3, 1", expected: true },
        { input: "3, 2", expected: true },
        { input: "3, 4", expected: false },
        { input: "7, 4", expected: true },
      ],
    },
    {
      id: 10,
      name: t('levels.level10.name'),
      icon: "🧩",
      theory: `
        <h3>${t('levels.level10.theoryTitle')}</h3>
        <p>${t('levels.level10.theoryDesc1')}</p>
        <p>${t('levels.level10.theoryDesc2')}</p>
        <ul>
          <li>${t('levels.level10.theoryUse1')}</li>
          <li>${t('levels.level10.theoryUse2')}</li>
          <li>${t('levels.level10.theoryUse3')}</li>
          <li>${t('levels.level10.theoryUse4')}</li>
          <li>${t('levels.level10.theoryUse5')}</li>
          <li>${t('levels.level10.theoryUse6')}</li>
          <li>${t('levels.level10.theoryUse7')}</li>
          <li>${t('levels.level10.theoryUse8')}</li>
        </ul>
      `,
      challenge: t('levels.level10.challenge'),
      hint: t('levels.level10.hint'),
      solution: `function average(a, b) {
  return (a & b) + ((a ^ b) >> 1);
}`,
      testCases: [
        { input: "10, 20", expected: 15 },
        { input: "5, 6", expected: 5 },
        { input: "0, 0", expected: 0 },
        { input: "-5, 5", expected: 0 },
      ],
    },
  ];

  // 为每个关卡生成solutionTemplate
  levels.forEach((level: any) => {
    const solution = level.solution;
    const match = solution.match(/function\s+\w+\s*\(.*?\)\s*{/);
    if (match && match[0]) {
      level.solutionTemplate = match[0] + "\n    " + t('level.implementCodeHere') + "\n}";
    }
  });

  return levels;
}

// 导出关卡数据（保持向后兼容）
export const levelsData: Level[] = createLevelsData();