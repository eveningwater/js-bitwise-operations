// 位运算关卡数据

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
  solutionTemplate?: string; // Add the new field
}

export const levelsData: Level[] = [
  {
    id: 1,
    name: "位运算基础",
    icon: "&",
    theory: `
      <h3>二进制基础</h3>
      <p>在计算机中，所有数据都以二进制形式存储。二进制只有0和1两个数字，分别代表关(off)和开(on)。</p>
      <p>十进制数字转换为二进制的方法是不断除以2，记录余数，然后从下往上读取余数。例如：</p>
      <pre><code>
      十进制10转二进制：
      10 ÷ 2 = 5 余 0
      5 ÷ 2 = 2 余 1
      2 ÷ 2 = 1 余 0
      1 ÷ 2 = 0 余 1
      从下往上读：1010
      </code></pre>
      <p>在JavaScript中，整数以32位二进制形式存储，最高位是符号位（0表示正数，1表示负数）。</p>
      <p>可以使用<pre><code>toString(2)</code></pre>方法将十进制数转换为二进制字符串：</p>
      <pre><code>
const num = 10;
console.log(num.toString(2)); // 输出: "1010"
      </code></pre>
      <p>也可以使用<pre><code>parseInt(str, 2)</code></pre>将二进制字符串转换为十进制数：</p>
      <pre><code>
const binary = "1010";
console.log(parseInt(binary, 2)); // 输出: 10
      </code></pre>
    `,
    challenge:
      "编写一个函数，接收一个十进制整数作为参数，返回它的二进制表示形式（字符串）。不要使用内置的toString方法。",
    hint: "可以使用除以2取余数的方法，将余数存入数组，最后反转数组并连接成字符串。",
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
    name: "按位与（AND）",
    icon: "&",
    theory: `
      <h3>按位与运算符 (&)</h3>
      <p>按位与运算符对两个操作数的每一位执行与操作。只有当两个相应的位都为1时，结果才为1，否则为0。</p>
      <p>按位与可以用来检查一个数的特定位是否为1，或者将某些位清零。</p>
      <pre><code>
      示例：5 & 3
      5 的二进制：101
      3 的二进制：011
      结果：       001 (十进制为1)
      </code></pre>
      <p>常见用途：</p>
      <ul>
        <li>检查一个数是奇数还是偶数：<pre><code>num & 1</code></pre>如果结果为1，则为奇数；如果为0，则为偶数。</li>
        <li>清除特定位：将想要保留的位设为1，其他位设为0，然后与原数进行按位与操作。</li>
        <li>判断两个数的符号是否相同：<pre><code>(a ^ b) >= 0</code></pre></li>
      </ul>
    `,
    challenge:
      "编写一个函数，判断一个数是否是2的幂（即2的n次方）。提示：2的幂在二进制中只有一个1。",
    hint: "如果一个数是2的幂，那么它的二进制表示中只有一个1。可以利用 n & (n-1) 来判断。",
    solution: `function isPowerOfTwo(n) {
  // 处理边界情况：0不是2的幂
  if (n <= 0) return false;
  
  // 2的幂的二进制只有一个1，如：
  // 2 = 10, 4 = 100, 8 = 1000
  // 如果n是2的幂，那么n & (n-1)应该等于0
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
    name: "按位或（OR）",
    icon: "|",
    theory: `
      <h3>按位或运算符 (|)</h3>
      <p>按位或运算符对两个操作数的每一位执行或操作。如果两个相应的位中至少有一个为1，则结果为1，否则为0。</p>
      <p>按位或可以用来将某些位设置为1，同时保留其他位不变。</p>
      <pre><code>
      示例：5 | 3
      5 的二进制：101
      3 的二进制：011
      结果：       111 (十进制为7)
      </code></pre>
      <p>常见用途：</p>
      <ul>
        <li>设置特定位：将想要设置的位设为1，其他位设为0，然后与原数进行按位或操作。</li>
        <li>合并标志位：在使用位掩码表示多个布尔值时，可以使用按位或来添加标志。</li>
      </ul>
    `,
    challenge:
      "编写一个函数，接收两个整数作为参数，返回将第一个整数的第n位（从右往左，从0开始计数）设置为1后的结果。",
    hint: "可以使用按位或运算符和左移运算符。创建一个只有第n位为1的掩码，然后与原数进行按位或操作。",
    solution: `function setBit(num, n) {
  // 创建一个掩码，只有第n位是1
  const mask = 1 << n;
  
  // 使用按位或将第n位设置为1
  return num | mask;
}`,
    testCases: [
      { input: "5, 1", expected: 7 }, // 5 (101) | (1<<1) = 7 (111)
      { input: "8, 0", expected: 9 }, // 8 (1000) | (1<<0) = 9 (1001)
      { input: "0, 3", expected: 8 }, // 0 (0000) | (1<<3) = 8 (1000)
      { input: "15, 4", expected: 31 }, // 15 (1111) | (1<<4) = 31 (11111)
    ],
  },
  {
    id: 4,
    name: "按位异或（XOR）",
    icon: "^",
    theory: `
      <h3>按位异或运算符 (^)</h3>
      <p>按位异或运算符对两个操作数的每一位执行异或操作。如果两个相应的位不同，则结果为1，如果相同则为0。</p>
      <p>按位异或有一些有趣的性质，例如：</p>
      <ul>
        <li>任何数与0异或，结果是数本身：<pre><code>a ^ 0 = a</code></pre></li>
        <li>任何数与自身异或，结果是0：<pre><code>a ^ a = 0</code></pre></li>
        <li>异或运算满足交换律和结合律：<pre><code>a ^ b = b ^ a</code></pre>和<pre><code>(a ^ b) ^ c = a ^ (b ^ c)</code></pre></li>
      </ul>
      <pre><code>
      示例：5 ^ 3
      5 的二进制：101
      3 的二进制：011
      结果：       110 (十进制为6)
      </code></pre>
      <p>常见用途：</p>
      <ul>
        <li>切换位的值：对一个数的特定位进行异或操作，可以切换该位的值（0变1，1变0）。</li>
        <li>不使用临时变量交换两个变量的值：<pre><code>a = a ^ b; b = a ^ b; a = a ^ b;</code></pre></li>
        <li>查找数组中只出现一次的数：如果一个数组中除了一个数字只出现一次外，其他数字都出现两次，那么对所有数字进行异或操作，结果就是那个只出现一次的数字。</li>
      </ul>
    `,
    challenge:
      "编写一个函数，接收一个整数数组，其中除了一个数字只出现一次外，其他数字都出现了两次。找出并返回那个只出现一次的数字。",
    hint: "利用异或运算的性质：a ^ a = 0 和 a ^ 0 = a。对数组中所有元素进行异或操作，最终结果就是只出现一次的数字。",
    solution: `function findSingleNumber(nums) {
  let result = 0;
  
  // 对数组中所有元素进行异或操作
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
    name: "按位非（NOT）",
    icon: "~",
    theory: `
      <h3>按位非运算符 (~)</h3>
      <p>按位非运算符对操作数的每一位执行非操作，即将0变为1，将1变为0。这相当于对数字取反再减1。</p>
      <p>在JavaScript中，数字以32位二进制形式存储，按位非运算会影响所有这32位。</p>
      <pre><code>
      示例：~5
      5 的二进制（32位）：00000000000000000000000000000101
      ~5 的结果：          11111111111111111111111111111010 (十进制为-6)
      </code></pre>
      <p>为什么~5等于-6？这是因为JavaScript使用二进制补码表示负数。对一个数取反再加1，就得到它的相反数。所以~n = -(n+1)。</p>
      <p>常见用途：</p>
      <ul>
        <li>快速取整：<pre><code>~~3.14</code></pre>等于3（相当于Math.floor对正数的效果）</li>
        <li>检查数组中是否存在某个元素：<pre><code>if(~arr.indexOf(item))</code></pre>比<pre><code>if(arr.indexOf(item) !== -1)</code></pre>更简洁</li>
      </ul>
    `,
    challenge:
      "编写一个函数，接收一个整数作为参数，返回将该整数所有位取反后的结果。",
    hint: "直接使用按位非运算符~，但要注意JavaScript中的数字表示方式。",
    solution: `function bitwiseNOT(num) {
  // 使用按位非运算符
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
    name: "左移（<<）",
    icon: "<<",
    theory: `
      <h3>左移运算符 (<<)</h3>
      <p>左移运算符将操作数的所有位向左移动指定的位数，右侧补0。这相当于将数字乘以2的n次方。</p>
      <pre><code>
      示例：5 << 1
      5 的二进制：101
      左移1位后：  1010 (十进制为10)
      
      示例：5 << 2
      5 的二进制：101
      左移2位后：  10100 (十进制为20)
      </code></pre>
      <p>左移n位相当于乘以2的n次方：<pre><code>x << n</code></pre>等价于<pre><code>x * Math.pow(2, n)</code></pre>，但位运算通常更高效。</p>
      <p>常见用途：</p>
      <ul>
        <li>快速乘法：当需要将一个数乘以2的幂时，使用左移运算更高效。</li>
        <li>创建掩码：生成特定位模式的掩码。</li>
      </ul>
    `,
    challenge:
      "编写一个函数，计算2的n次方（n为非负整数）。使用左移运算符实现，不要使用Math.pow()。",
    hint: "可以使用左移运算符，1 << n 相当于 2^n。",
    solution: `function powerOfTwo(n) {
  // 处理边界情况
  if (n < 0) return 0;
  
  // 1左移n位，相当于2的n次方
  return 1 << n;
}`,
    testCases: [
      { input: "0", expected: 1 }, // 2^0 = 1
      { input: "1", expected: 2 }, // 2^1 = 2
      { input: "3", expected: 8 }, // 2^3 = 8
      { input: "10", expected: 1024 }, // 2^10 = 1024
    ],
  },
  {
    id: 7,
    name: "右移（>>）",
    icon: ">>",
    theory: `
      <h3>右移运算符 (>>)</h3>
      <p>右移运算符将操作数的所有位向右移动指定的位数，丢弃移除的位。对于正数，左侧补0；对于负数，左侧补1（保持符号位）。</p>
      <p>这相当于将数字除以2的n次方并向下取整。</p>
      <pre><code>
      示例：10 >> 1
      10 的二进制：1010
      右移1位后：  0101 (十进制为5)
      
      示例：-10 >> 1
      -10 的二进制（简化表示）：...1111111111110110
      右移1位后：              ...1111111111111011 (十进制为-5)
      </code></pre>
      <p>右移n位相当于除以2的n次方并向下取整：<pre><code>x >> n</code></pre>近似等价于<pre><code>Math.floor(x / Math.pow(2, n))</code></pre>。</p>
      <p>常见用途：</p>
      <ul>
        <li>快速除法：当需要将一个数除以2的幂时，使用右移运算更高效。</li>
        <li>保持符号的整数除法。</li>
      </ul>
    `,
    challenge:
      "编写一个函数，接收一个整数作为参数，返回将该整数除以2并向下取整的结果。使用右移运算符实现。",
    hint: "使用右移1位运算符 >> 可以实现除以2并向下取整的效果。",
    solution: `function divideByTwo(num) {
  // 使用右移1位，相当于除以2并向下取整
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
    name: "无符号右移（>>>）",
    icon: ">>>",
    theory: `
      <h3>无符号右移运算符 (>>>)</h3>
      <p>无符号右移运算符将操作数的所有位向右移动指定的位数，丢弃移除的位，左侧始终补0，不考虑符号位。</p>
      <p>这与有符号右移(>>)的区别在于，无论操作数是正数还是负数，左侧都补0。</p>
      <pre><code>
      示例：10 >>> 1
      10 的二进制：00000000000000000000000000001010
      右移1位后：  00000000000000000000000000000101 (十进制为5)
      
      示例：-10 >>> 1
      -10 的二进制：11111111111111111111111111110110
      右移1位后：   01111111111111111111111111111011 (十进制为2147483643)
      </code></pre>
      <p>对于正数，>>> 和 >> 的结果相同。但对于负数，结果会非常不同，因为符号位也参与了移位。</p>
      <p>常见用途：</p>
      <ul>
        <li>处理无符号整数：在需要将负数视为大的无符号数时使用。</li>
        <li>实现无符号除法。</li>
      </ul>
    `,
    challenge:
      "编写一个函数，接收一个整数作为参数，返回将该整数的所有位向右移动1位，左侧补0的结果。",
    hint: "使用无符号右移运算符 >>> 可以实现向右移动并左侧补0的效果。",
    solution: `function unsignedRightShift(num) {
  // 使用无符号右移1位
  return num >>> 1;
}`,
    testCases: [
      { input: "10", expected: 5 },
      { input: "-10", expected: 2147483643 }, // 在32位系统上
      { input: "0", expected: 0 },
      { input: "-1", expected: 2147483647 }, // 在32位系统上
    ],
  },
  {
    id: 9,
    name: "位掩码应用",
    icon: "🎭",
    theory: `
      <h3>位掩码</h3>
      <p>位掩码是使用二进制位来存储多个布尔值（标志）的技术。每一位代表一个标志，可以通过位运算来设置、清除、切换或检查这些标志。</p>
      <p>位掩码在需要存储多个开关状态但又想节省内存时非常有用。例如，在权限系统、图形处理和游戏开发中经常使用。</p>
      <p>常用的位掩码操作：</p>
      <ul>
        <li>设置标志：<pre><code>flags |= mask</code></pre></li>
        <li>清除标志：<pre><code>flags &= ~mask</code></pre></li>
        <li>切换标志：<pre><code>flags ^= mask</code></pre></li>
        <li>检查标志：<pre><code>(flags & mask) !== 0</code></pre></li>
      </ul>
      <p>例如，我们可以用一个整数的不同位来表示用户的权限：</p>
      <pre><code>
      const READ = 1;          // 0001
      const WRITE = 2;         // 0010
      const EXECUTE = 4;       // 0100
      const ADMIN = 8;         // 1000
      
      // 授予用户读和写权限
      let userPermissions = READ | WRITE;  // 0011 (3)
      
      // 检查用户是否有读权限
      if (userPermissions & READ) {
        console.log("用户有读权限");
      }
      
      // 添加执行权限
      userPermissions |= EXECUTE;  // 0111 (7)
      
      // 移除写权限
      userPermissions &= ~WRITE;   // 0101 (5)
      </code></pre>
    `,
    challenge:
      "实现一个简单的权限系统。编写一个函数，接收用户当前权限和要检查的权限作为参数，返回用户是否拥有该权限。",
    hint: "使用按位与运算符检查特定权限位是否设置。如果 (userPermissions & permissionToCheck) !== 0，则用户拥有该权限。",
    solution: `function hasPermission(userPermissions, permissionToCheck) {
  // 使用按位与检查权限
  return (userPermissions & permissionToCheck) !== 0;
}`,
    testCases: [
      { input: "3, 1", expected: true }, // 3 (0011) 包含权限 1 (0001)
      { input: "3, 2", expected: true }, // 3 (0011) 包含权限 2 (0010)
      { input: "3, 4", expected: false }, // 3 (0011) 不包含权限 4 (0100)
      { input: "7, 4", expected: true }, // 7 (0111) 包含权限 4 (0100)
    ],
  },
  {
    id: 10,
    name: "位运算技巧",
    icon: "🧩",
    theory: `
      <h3>位运算技巧</h3>
      <p>位运算可以用来实现许多常见操作，通常比传统方法更高效。以下是一些常用的位运算技巧：</p>
      <ol>
        <li>
          <strong>判断奇偶性</strong><br>
          <pre><code>n & 1 === 0</code></pre>：偶数<br>
          <pre><code>n & 1 === 1</code></pre>：奇数
        </li>
        <li>
          <strong>交换两个变量的值（不使用临时变量）</strong><br>
          <pre><code>a ^= b; b ^= a; a ^= b;</code></pre>
        </li>
        <li>
          <strong>取绝对值（仅适用于32位整数）</strong><br>
          <pre><code>const abs = (n ^ (n >> 31)) - (n >> 31);</code></pre>
        </li>
        <li>
          <strong>取整（向下取整，仅适用于正数）</strong><br>
          <pre><code>const floor = n >> 0;</code></pre>
        </li>
        <li>
          <strong>计算2的幂</strong><br>
          <pre><code>const pow2 = 1 << n;</code></pre>（计算2的n次方）
        </li>
        <li>
          <strong>乘以/除以2的幂</strong><br>
          <pre><code>n << m</code></pre>（n乘以2的m次方）<br>
          <pre><code>n >> m</code></pre>（n除以2的m次方，向下取整）
        </li>
        <li>
          <strong>检查一个数是否是2的幂</strong><br>
          <pre><code>n & (n - 1) === 0 && n > 0</code></pre>
        </li>
        <li>
          <strong>计算平均值（避免溢出）</strong><br>
          <pre><code>const avg = (a & b) + ((a ^ b) >> 1);</code></pre>
        </li>
      </ol>
    `,
    challenge:
      "编写一个函数，接收两个整数作为参数，返回它们的平均值（向下取整）。使用位运算实现，避免可能的溢出问题。",
    hint: "可以使用 (a & b) + ((a ^ b) >> 1) 计算平均值，这种方法可以避免 (a + b) / 2 可能导致的溢出问题。",
    solution: `function average(a, b) {
  // 使用位运算计算平均值，避免溢出
  return (a & b) + ((a ^ b) >> 1);
}`,
    testCases: [
      { input: "10, 20", expected: 15 },
      { input: "5, 6", expected: 5 }, // 向下取整
      { input: "0, 0", expected: 0 },
      { input: "-5, 5", expected: 0 },
    ],
  },
];

levelsData.forEach((level) => {
  const solution = level.solution;
  const match = solution.match(/function\s+\w+\s*\(.*?\)\s*{/);
  if (match && match[0]) {
    level.solutionTemplate = match[0] + "\n    //...这里实现代码" + "\n}";
  }
});
