"use strict";(self.webpackChunkjs_bitwise_operations=self.webpackChunkjs_bitwise_operations||[]).push([["82"],{525:function(u,F,E){E.d(F,{U:()=>e});let e=[{id:1,name:"位运算基础",icon:"&",theory:`
      <h3>\u{4E8C}\u{8FDB}\u{5236}\u{57FA}\u{7840}</h3>
      <p>\u{5728}\u{8BA1}\u{7B97}\u{673A}\u{4E2D}\u{FF0C}\u{6240}\u{6709}\u{6570}\u{636E}\u{90FD}\u{4EE5}\u{4E8C}\u{8FDB}\u{5236}\u{5F62}\u{5F0F}\u{5B58}\u{50A8}\u{3002}\u{4E8C}\u{8FDB}\u{5236}\u{53EA}\u{6709}0\u{548C}1\u{4E24}\u{4E2A}\u{6570}\u{5B57}\u{FF0C}\u{5206}\u{522B}\u{4EE3}\u{8868}\u{5173}(off)\u{548C}\u{5F00}(on)\u{3002}</p>
      <p>\u{5341}\u{8FDB}\u{5236}\u{6570}\u{5B57}\u{8F6C}\u{6362}\u{4E3A}\u{4E8C}\u{8FDB}\u{5236}\u{7684}\u{65B9}\u{6CD5}\u{662F}\u{4E0D}\u{65AD}\u{9664}\u{4EE5}2\u{FF0C}\u{8BB0}\u{5F55}\u{4F59}\u{6570}\u{FF0C}\u{7136}\u{540E}\u{4ECE}\u{4E0B}\u{5F80}\u{4E0A}\u{8BFB}\u{53D6}\u{4F59}\u{6570}\u{3002}\u{4F8B}\u{5982}\u{FF1A}</p>
      <pre><code>
      \u{5341}\u{8FDB}\u{5236}10\u{8F6C}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}
      10 \xf7 2 = 5 \u{4F59} 0
      5 \xf7 2 = 2 \u{4F59} 1
      2 \xf7 2 = 1 \u{4F59} 0
      1 \xf7 2 = 0 \u{4F59} 1
      \u{4ECE}\u{4E0B}\u{5F80}\u{4E0A}\u{8BFB}\u{FF1A}1010
      </code></pre>
      <p>\u{5728}JavaScript\u{4E2D}\u{FF0C}\u{6574}\u{6570}\u{4EE5}32\u{4F4D}\u{4E8C}\u{8FDB}\u{5236}\u{5F62}\u{5F0F}\u{5B58}\u{50A8}\u{FF0C}\u{6700}\u{9AD8}\u{4F4D}\u{662F}\u{7B26}\u{53F7}\u{4F4D}\u{FF08}0\u{8868}\u{793A}\u{6B63}\u{6570}\u{FF0C}1\u{8868}\u{793A}\u{8D1F}\u{6570}\u{FF09}\u{3002}</p>
      <p>\u{53EF}\u{4EE5}\u{4F7F}\u{7528}<pre><code>toString(2)</code></pre>\u{65B9}\u{6CD5}\u{5C06}\u{5341}\u{8FDB}\u{5236}\u{6570}\u{8F6C}\u{6362}\u{4E3A}\u{4E8C}\u{8FDB}\u{5236}\u{5B57}\u{7B26}\u{4E32}\u{FF1A}</p>
      <pre><code>
const num = 10;
console.log(num.toString(2)); // \u{8F93}\u{51FA}: "1010"
      </code></pre>
      <p>\u{4E5F}\u{53EF}\u{4EE5}\u{4F7F}\u{7528}<pre><code>parseInt(str, 2)</code></pre>\u{5C06}\u{4E8C}\u{8FDB}\u{5236}\u{5B57}\u{7B26}\u{4E32}\u{8F6C}\u{6362}\u{4E3A}\u{5341}\u{8FDB}\u{5236}\u{6570}\u{FF1A}</p>
      <pre><code>
const binary = "1010";
console.log(parseInt(binary, 2)); // \u{8F93}\u{51FA}: 10
      </code></pre>
    `,challenge:"编写一个函数，接收一个十进制整数作为参数，返回它的二进制表示形式（字符串）。不要使用内置的toString方法。",hint:"可以使用除以2取余数的方法，将余数存入数组，最后反转数组并连接成字符串。",solution:`function decimalToBinary(num) {
  if (+num === 0) return "0";
  
  let binary = [];
  let temp = Math.abs(num);
  
  while (temp > 0) {
    binary.push(temp % 2);
    temp = Math.floor(temp / 2);
  }
  
  return binary.reverse().join("");
}`,testCases:[{input:"10",expected:"1010"},{input:"42",expected:"101010"},{input:"0",expected:"0"},{input:"255",expected:"11111111"}]},{id:2,name:"按位与（AND）",icon:"&",theory:`
      <h3>\u{6309}\u{4F4D}\u{4E0E}\u{8FD0}\u{7B97}\u{7B26} (&)</h3>
      <p>\u{6309}\u{4F4D}\u{4E0E}\u{8FD0}\u{7B97}\u{7B26}\u{5BF9}\u{4E24}\u{4E2A}\u{64CD}\u{4F5C}\u{6570}\u{7684}\u{6BCF}\u{4E00}\u{4F4D}\u{6267}\u{884C}\u{4E0E}\u{64CD}\u{4F5C}\u{3002}\u{53EA}\u{6709}\u{5F53}\u{4E24}\u{4E2A}\u{76F8}\u{5E94}\u{7684}\u{4F4D}\u{90FD}\u{4E3A}1\u{65F6}\u{FF0C}\u{7ED3}\u{679C}\u{624D}\u{4E3A}1\u{FF0C}\u{5426}\u{5219}\u{4E3A}0\u{3002}</p>
      <p>\u{6309}\u{4F4D}\u{4E0E}\u{53EF}\u{4EE5}\u{7528}\u{6765}\u{68C0}\u{67E5}\u{4E00}\u{4E2A}\u{6570}\u{7684}\u{7279}\u{5B9A}\u{4F4D}\u{662F}\u{5426}\u{4E3A}1\u{FF0C}\u{6216}\u{8005}\u{5C06}\u{67D0}\u{4E9B}\u{4F4D}\u{6E05}\u{96F6}\u{3002}</p>
      <pre><code>
      \u{793A}\u{4F8B}\u{FF1A}5 & 3
      5 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}101
      3 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}011
      \u{7ED3}\u{679C}\u{FF1A}       001 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}1)
      </code></pre>
      <p>\u{5E38}\u{89C1}\u{7528}\u{9014}\u{FF1A}</p>
      <ul>
        <li>\u{68C0}\u{67E5}\u{4E00}\u{4E2A}\u{6570}\u{662F}\u{5947}\u{6570}\u{8FD8}\u{662F}\u{5076}\u{6570}\u{FF1A}<pre><code>num & 1</code></pre>\u{5982}\u{679C}\u{7ED3}\u{679C}\u{4E3A}1\u{FF0C}\u{5219}\u{4E3A}\u{5947}\u{6570}\u{FF1B}\u{5982}\u{679C}\u{4E3A}0\u{FF0C}\u{5219}\u{4E3A}\u{5076}\u{6570}\u{3002}</li>
        <li>\u{6E05}\u{9664}\u{7279}\u{5B9A}\u{4F4D}\u{FF1A}\u{5C06}\u{60F3}\u{8981}\u{4FDD}\u{7559}\u{7684}\u{4F4D}\u{8BBE}\u{4E3A}1\u{FF0C}\u{5176}\u{4ED6}\u{4F4D}\u{8BBE}\u{4E3A}0\u{FF0C}\u{7136}\u{540E}\u{4E0E}\u{539F}\u{6570}\u{8FDB}\u{884C}\u{6309}\u{4F4D}\u{4E0E}\u{64CD}\u{4F5C}\u{3002}</li>
        <li>\u{5224}\u{65AD}\u{4E24}\u{4E2A}\u{6570}\u{7684}\u{7B26}\u{53F7}\u{662F}\u{5426}\u{76F8}\u{540C}\u{FF1A}<pre><code>(a ^ b) >= 0</code></pre></li>
      </ul>
    `,challenge:"编写一个函数，判断一个数是否是2的幂（即2的n次方）。提示：2的幂在二进制中只有一个1。",hint:"如果一个数是2的幂，那么它的二进制表示中只有一个1。可以利用 n & (n-1) 来判断。",solution:`function isPowerOfTwo(n) {
  // \u{5904}\u{7406}\u{8FB9}\u{754C}\u{60C5}\u{51B5}\u{FF1A}0\u{4E0D}\u{662F}2\u{7684}\u{5E42}
  if (n <= 0) return false;
  
  // 2\u{7684}\u{5E42}\u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{53EA}\u{6709}\u{4E00}\u{4E2A}1\u{FF0C}\u{5982}\u{FF1A}
  // 2 = 10, 4 = 100, 8 = 1000
  // \u{5982}\u{679C}n\u{662F}2\u{7684}\u{5E42}\u{FF0C}\u{90A3}\u{4E48}n & (n-1)\u{5E94}\u{8BE5}\u{7B49}\u{4E8E}0
  return (n & (n-1)) === 0;
}`,testCases:[{input:"1",expected:!0},{input:"2",expected:!0},{input:"3",expected:!1},{input:"4",expected:!0},{input:"5",expected:!1},{input:"16",expected:!0}]},{id:3,name:"按位或（OR）",icon:"|",theory:`
      <h3>\u{6309}\u{4F4D}\u{6216}\u{8FD0}\u{7B97}\u{7B26} (|)</h3>
      <p>\u{6309}\u{4F4D}\u{6216}\u{8FD0}\u{7B97}\u{7B26}\u{5BF9}\u{4E24}\u{4E2A}\u{64CD}\u{4F5C}\u{6570}\u{7684}\u{6BCF}\u{4E00}\u{4F4D}\u{6267}\u{884C}\u{6216}\u{64CD}\u{4F5C}\u{3002}\u{5982}\u{679C}\u{4E24}\u{4E2A}\u{76F8}\u{5E94}\u{7684}\u{4F4D}\u{4E2D}\u{81F3}\u{5C11}\u{6709}\u{4E00}\u{4E2A}\u{4E3A}1\u{FF0C}\u{5219}\u{7ED3}\u{679C}\u{4E3A}1\u{FF0C}\u{5426}\u{5219}\u{4E3A}0\u{3002}</p>
      <p>\u{6309}\u{4F4D}\u{6216}\u{53EF}\u{4EE5}\u{7528}\u{6765}\u{5C06}\u{67D0}\u{4E9B}\u{4F4D}\u{8BBE}\u{7F6E}\u{4E3A}1\u{FF0C}\u{540C}\u{65F6}\u{4FDD}\u{7559}\u{5176}\u{4ED6}\u{4F4D}\u{4E0D}\u{53D8}\u{3002}</p>
      <pre><code>
      \u{793A}\u{4F8B}\u{FF1A}5 | 3
      5 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}101
      3 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}011
      \u{7ED3}\u{679C}\u{FF1A}       111 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}7)
      </code></pre>
      <p>\u{5E38}\u{89C1}\u{7528}\u{9014}\u{FF1A}</p>
      <ul>
        <li>\u{8BBE}\u{7F6E}\u{7279}\u{5B9A}\u{4F4D}\u{FF1A}\u{5C06}\u{60F3}\u{8981}\u{8BBE}\u{7F6E}\u{7684}\u{4F4D}\u{8BBE}\u{4E3A}1\u{FF0C}\u{5176}\u{4ED6}\u{4F4D}\u{8BBE}\u{4E3A}0\u{FF0C}\u{7136}\u{540E}\u{4E0E}\u{539F}\u{6570}\u{8FDB}\u{884C}\u{6309}\u{4F4D}\u{6216}\u{64CD}\u{4F5C}\u{3002}</li>
        <li>\u{5408}\u{5E76}\u{6807}\u{5FD7}\u{4F4D}\u{FF1A}\u{5728}\u{4F7F}\u{7528}\u{4F4D}\u{63A9}\u{7801}\u{8868}\u{793A}\u{591A}\u{4E2A}\u{5E03}\u{5C14}\u{503C}\u{65F6}\u{FF0C}\u{53EF}\u{4EE5}\u{4F7F}\u{7528}\u{6309}\u{4F4D}\u{6216}\u{6765}\u{6DFB}\u{52A0}\u{6807}\u{5FD7}\u{3002}</li>
      </ul>
    `,challenge:"编写一个函数，接收两个整数作为参数，返回将第一个整数的第n位（从右往左，从0开始计数）设置为1后的结果。",hint:"可以使用按位或运算符和左移运算符。创建一个只有第n位为1的掩码，然后与原数进行按位或操作。",solution:`function setBit(num, n) {
  // \u{521B}\u{5EFA}\u{4E00}\u{4E2A}\u{63A9}\u{7801}\u{FF0C}\u{53EA}\u{6709}\u{7B2C}n\u{4F4D}\u{662F}1
  const mask = 1 << n;
  
  // \u{4F7F}\u{7528}\u{6309}\u{4F4D}\u{6216}\u{5C06}\u{7B2C}n\u{4F4D}\u{8BBE}\u{7F6E}\u{4E3A}1
  return num | mask;
}`,testCases:[{input:"5, 1",expected:7},{input:"8, 0",expected:9},{input:"0, 3",expected:8},{input:"15, 4",expected:31}]},{id:4,name:"按位异或（XOR）",icon:"^",theory:`
      <h3>\u{6309}\u{4F4D}\u{5F02}\u{6216}\u{8FD0}\u{7B97}\u{7B26} (^)</h3>
      <p>\u{6309}\u{4F4D}\u{5F02}\u{6216}\u{8FD0}\u{7B97}\u{7B26}\u{5BF9}\u{4E24}\u{4E2A}\u{64CD}\u{4F5C}\u{6570}\u{7684}\u{6BCF}\u{4E00}\u{4F4D}\u{6267}\u{884C}\u{5F02}\u{6216}\u{64CD}\u{4F5C}\u{3002}\u{5982}\u{679C}\u{4E24}\u{4E2A}\u{76F8}\u{5E94}\u{7684}\u{4F4D}\u{4E0D}\u{540C}\u{FF0C}\u{5219}\u{7ED3}\u{679C}\u{4E3A}1\u{FF0C}\u{5982}\u{679C}\u{76F8}\u{540C}\u{5219}\u{4E3A}0\u{3002}</p>
      <p>\u{6309}\u{4F4D}\u{5F02}\u{6216}\u{6709}\u{4E00}\u{4E9B}\u{6709}\u{8DA3}\u{7684}\u{6027}\u{8D28}\u{FF0C}\u{4F8B}\u{5982}\u{FF1A}</p>
      <ul>
        <li>\u{4EFB}\u{4F55}\u{6570}\u{4E0E}0\u{5F02}\u{6216}\u{FF0C}\u{7ED3}\u{679C}\u{662F}\u{6570}\u{672C}\u{8EAB}\u{FF1A}<pre><code>a ^ 0 = a</code></pre></li>
        <li>\u{4EFB}\u{4F55}\u{6570}\u{4E0E}\u{81EA}\u{8EAB}\u{5F02}\u{6216}\u{FF0C}\u{7ED3}\u{679C}\u{662F}0\u{FF1A}<pre><code>a ^ a = 0</code></pre></li>
        <li>\u{5F02}\u{6216}\u{8FD0}\u{7B97}\u{6EE1}\u{8DB3}\u{4EA4}\u{6362}\u{5F8B}\u{548C}\u{7ED3}\u{5408}\u{5F8B}\u{FF1A}<pre><code>a ^ b = b ^ a</code></pre>\u{548C}<pre><code>(a ^ b) ^ c = a ^ (b ^ c)</code></pre></li>
      </ul>
      <pre><code>
      \u{793A}\u{4F8B}\u{FF1A}5 ^ 3
      5 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}101
      3 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}011
      \u{7ED3}\u{679C}\u{FF1A}       110 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}6)
      </code></pre>
      <p>\u{5E38}\u{89C1}\u{7528}\u{9014}\u{FF1A}</p>
      <ul>
        <li>\u{5207}\u{6362}\u{4F4D}\u{7684}\u{503C}\u{FF1A}\u{5BF9}\u{4E00}\u{4E2A}\u{6570}\u{7684}\u{7279}\u{5B9A}\u{4F4D}\u{8FDB}\u{884C}\u{5F02}\u{6216}\u{64CD}\u{4F5C}\u{FF0C}\u{53EF}\u{4EE5}\u{5207}\u{6362}\u{8BE5}\u{4F4D}\u{7684}\u{503C}\u{FF08}0\u{53D8}1\u{FF0C}1\u{53D8}0\u{FF09}\u{3002}</li>
        <li>\u{4E0D}\u{4F7F}\u{7528}\u{4E34}\u{65F6}\u{53D8}\u{91CF}\u{4EA4}\u{6362}\u{4E24}\u{4E2A}\u{53D8}\u{91CF}\u{7684}\u{503C}\u{FF1A}<pre><code>a = a ^ b; b = a ^ b; a = a ^ b;</code></pre></li>
        <li>\u{67E5}\u{627E}\u{6570}\u{7EC4}\u{4E2D}\u{53EA}\u{51FA}\u{73B0}\u{4E00}\u{6B21}\u{7684}\u{6570}\u{FF1A}\u{5982}\u{679C}\u{4E00}\u{4E2A}\u{6570}\u{7EC4}\u{4E2D}\u{9664}\u{4E86}\u{4E00}\u{4E2A}\u{6570}\u{5B57}\u{53EA}\u{51FA}\u{73B0}\u{4E00}\u{6B21}\u{5916}\u{FF0C}\u{5176}\u{4ED6}\u{6570}\u{5B57}\u{90FD}\u{51FA}\u{73B0}\u{4E24}\u{6B21}\u{FF0C}\u{90A3}\u{4E48}\u{5BF9}\u{6240}\u{6709}\u{6570}\u{5B57}\u{8FDB}\u{884C}\u{5F02}\u{6216}\u{64CD}\u{4F5C}\u{FF0C}\u{7ED3}\u{679C}\u{5C31}\u{662F}\u{90A3}\u{4E2A}\u{53EA}\u{51FA}\u{73B0}\u{4E00}\u{6B21}\u{7684}\u{6570}\u{5B57}\u{3002}</li>
      </ul>
    `,challenge:"编写一个函数，接收一个整数数组，其中除了一个数字只出现一次外，其他数字都出现了两次。找出并返回那个只出现一次的数字。",hint:"利用异或运算的性质：a ^ a = 0 和 a ^ 0 = a。对数组中所有元素进行异或操作，最终结果就是只出现一次的数字。",solution:`function findSingleNumber(nums) {
  let result = 0;
  
  // \u{5BF9}\u{6570}\u{7EC4}\u{4E2D}\u{6240}\u{6709}\u{5143}\u{7D20}\u{8FDB}\u{884C}\u{5F02}\u{6216}\u{64CD}\u{4F5C}
  for (let num of nums) {
    result ^= num;
  }
  
  return result;
}`,testCases:[{input:"[2,2,1]",expected:1},{input:"[4,1,2,1,2]",expected:4},{input:"[1]",expected:1},{input:"[7,3,5,7,5,3,9]",expected:9}]},{id:5,name:"按位非（NOT）",icon:"~",theory:`
      <h3>\u{6309}\u{4F4D}\u{975E}\u{8FD0}\u{7B97}\u{7B26} (~)</h3>
      <p>\u{6309}\u{4F4D}\u{975E}\u{8FD0}\u{7B97}\u{7B26}\u{5BF9}\u{64CD}\u{4F5C}\u{6570}\u{7684}\u{6BCF}\u{4E00}\u{4F4D}\u{6267}\u{884C}\u{975E}\u{64CD}\u{4F5C}\u{FF0C}\u{5373}\u{5C06}0\u{53D8}\u{4E3A}1\u{FF0C}\u{5C06}1\u{53D8}\u{4E3A}0\u{3002}\u{8FD9}\u{76F8}\u{5F53}\u{4E8E}\u{5BF9}\u{6570}\u{5B57}\u{53D6}\u{53CD}\u{518D}\u{51CF}1\u{3002}</p>
      <p>\u{5728}JavaScript\u{4E2D}\u{FF0C}\u{6570}\u{5B57}\u{4EE5}32\u{4F4D}\u{4E8C}\u{8FDB}\u{5236}\u{5F62}\u{5F0F}\u{5B58}\u{50A8}\u{FF0C}\u{6309}\u{4F4D}\u{975E}\u{8FD0}\u{7B97}\u{4F1A}\u{5F71}\u{54CD}\u{6240}\u{6709}\u{8FD9}32\u{4F4D}\u{3002}</p>
      <pre><code>
      \u{793A}\u{4F8B}\u{FF1A}~5
      5 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF08}32\u{4F4D}\u{FF09}\u{FF1A}00000000000000000000000000000101
      ~5 \u{7684}\u{7ED3}\u{679C}\u{FF1A}          11111111111111111111111111111010 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}-6)
      </code></pre>
      <p>\u{4E3A}\u{4EC0}\u{4E48}~5\u{7B49}\u{4E8E}-6\u{FF1F}\u{8FD9}\u{662F}\u{56E0}\u{4E3A}JavaScript\u{4F7F}\u{7528}\u{4E8C}\u{8FDB}\u{5236}\u{8865}\u{7801}\u{8868}\u{793A}\u{8D1F}\u{6570}\u{3002}\u{5BF9}\u{4E00}\u{4E2A}\u{6570}\u{53D6}\u{53CD}\u{518D}\u{52A0}1\u{FF0C}\u{5C31}\u{5F97}\u{5230}\u{5B83}\u{7684}\u{76F8}\u{53CD}\u{6570}\u{3002}\u{6240}\u{4EE5}~n = -(n+1)\u{3002}</p>
      <p>\u{5E38}\u{89C1}\u{7528}\u{9014}\u{FF1A}</p>
      <ul>
        <li>\u{5FEB}\u{901F}\u{53D6}\u{6574}\u{FF1A}<pre><code>~~3.14</code></pre>\u{7B49}\u{4E8E}3\u{FF08}\u{76F8}\u{5F53}\u{4E8E}Math.floor\u{5BF9}\u{6B63}\u{6570}\u{7684}\u{6548}\u{679C}\u{FF09}</li>
        <li>\u{68C0}\u{67E5}\u{6570}\u{7EC4}\u{4E2D}\u{662F}\u{5426}\u{5B58}\u{5728}\u{67D0}\u{4E2A}\u{5143}\u{7D20}\u{FF1A}<pre><code>if(~arr.indexOf(item))</code></pre>\u{6BD4}<pre><code>if(arr.indexOf(item) !== -1)</code></pre>\u{66F4}\u{7B80}\u{6D01}</li>
      </ul>
    `,challenge:"编写一个函数，接收一个整数作为参数，返回将该整数所有位取反后的结果。",hint:"直接使用按位非运算符~，但要注意JavaScript中的数字表示方式。",solution:`function bitwiseNOT(num) {
  // \u{4F7F}\u{7528}\u{6309}\u{4F4D}\u{975E}\u{8FD0}\u{7B97}\u{7B26}
  return ~num;
}`,testCases:[{input:"5",expected:-6},{input:"-3",expected:2},{input:"0",expected:-1},{input:"-1",expected:0}]},{id:6,name:"左移（<<）",icon:"<<",theory:`
      <h3>\u{5DE6}\u{79FB}\u{8FD0}\u{7B97}\u{7B26} (<<)</h3>
      <p>\u{5DE6}\u{79FB}\u{8FD0}\u{7B97}\u{7B26}\u{5C06}\u{64CD}\u{4F5C}\u{6570}\u{7684}\u{6240}\u{6709}\u{4F4D}\u{5411}\u{5DE6}\u{79FB}\u{52A8}\u{6307}\u{5B9A}\u{7684}\u{4F4D}\u{6570}\u{FF0C}\u{53F3}\u{4FA7}\u{8865}0\u{3002}\u{8FD9}\u{76F8}\u{5F53}\u{4E8E}\u{5C06}\u{6570}\u{5B57}\u{4E58}\u{4EE5}2\u{7684}n\u{6B21}\u{65B9}\u{3002}</p>
      <pre><code>
      \u{793A}\u{4F8B}\u{FF1A}5 << 1
      5 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}101
      \u{5DE6}\u{79FB}1\u{4F4D}\u{540E}\u{FF1A}  1010 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}10)
      
      \u{793A}\u{4F8B}\u{FF1A}5 << 2
      5 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}101
      \u{5DE6}\u{79FB}2\u{4F4D}\u{540E}\u{FF1A}  10100 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}20)
      </code></pre>
      <p>\u{5DE6}\u{79FB}n\u{4F4D}\u{76F8}\u{5F53}\u{4E8E}\u{4E58}\u{4EE5}2\u{7684}n\u{6B21}\u{65B9}\u{FF1A}<pre><code>x << n</code></pre>\u{7B49}\u{4EF7}\u{4E8E}<pre><code>x * Math.pow(2, n)</code></pre>\u{FF0C}\u{4F46}\u{4F4D}\u{8FD0}\u{7B97}\u{901A}\u{5E38}\u{66F4}\u{9AD8}\u{6548}\u{3002}</p>
      <p>\u{5E38}\u{89C1}\u{7528}\u{9014}\u{FF1A}</p>
      <ul>
        <li>\u{5FEB}\u{901F}\u{4E58}\u{6CD5}\u{FF1A}\u{5F53}\u{9700}\u{8981}\u{5C06}\u{4E00}\u{4E2A}\u{6570}\u{4E58}\u{4EE5}2\u{7684}\u{5E42}\u{65F6}\u{FF0C}\u{4F7F}\u{7528}\u{5DE6}\u{79FB}\u{8FD0}\u{7B97}\u{66F4}\u{9AD8}\u{6548}\u{3002}</li>
        <li>\u{521B}\u{5EFA}\u{63A9}\u{7801}\u{FF1A}\u{751F}\u{6210}\u{7279}\u{5B9A}\u{4F4D}\u{6A21}\u{5F0F}\u{7684}\u{63A9}\u{7801}\u{3002}</li>
      </ul>
    `,challenge:"编写一个函数，计算2的n次方（n为非负整数）。使用左移运算符实现，不要使用Math.pow()。",hint:"可以使用左移运算符，1 << n 相当于 2^n。",solution:`function powerOfTwo(n) {
  // \u{5904}\u{7406}\u{8FB9}\u{754C}\u{60C5}\u{51B5}
  if (n < 0) return 0;
  
  // 1\u{5DE6}\u{79FB}n\u{4F4D}\u{FF0C}\u{76F8}\u{5F53}\u{4E8E}2\u{7684}n\u{6B21}\u{65B9}
  return 1 << n;
}`,testCases:[{input:"0",expected:1},{input:"1",expected:2},{input:"3",expected:8},{input:"10",expected:1024}]},{id:7,name:"右移（>>）",icon:">>",theory:`
      <h3>\u{53F3}\u{79FB}\u{8FD0}\u{7B97}\u{7B26} (>>)</h3>
      <p>\u{53F3}\u{79FB}\u{8FD0}\u{7B97}\u{7B26}\u{5C06}\u{64CD}\u{4F5C}\u{6570}\u{7684}\u{6240}\u{6709}\u{4F4D}\u{5411}\u{53F3}\u{79FB}\u{52A8}\u{6307}\u{5B9A}\u{7684}\u{4F4D}\u{6570}\u{FF0C}\u{4E22}\u{5F03}\u{79FB}\u{9664}\u{7684}\u{4F4D}\u{3002}\u{5BF9}\u{4E8E}\u{6B63}\u{6570}\u{FF0C}\u{5DE6}\u{4FA7}\u{8865}0\u{FF1B}\u{5BF9}\u{4E8E}\u{8D1F}\u{6570}\u{FF0C}\u{5DE6}\u{4FA7}\u{8865}1\u{FF08}\u{4FDD}\u{6301}\u{7B26}\u{53F7}\u{4F4D}\u{FF09}\u{3002}</p>
      <p>\u{8FD9}\u{76F8}\u{5F53}\u{4E8E}\u{5C06}\u{6570}\u{5B57}\u{9664}\u{4EE5}2\u{7684}n\u{6B21}\u{65B9}\u{5E76}\u{5411}\u{4E0B}\u{53D6}\u{6574}\u{3002}</p>
      <pre><code>
      \u{793A}\u{4F8B}\u{FF1A}10 >> 1
      10 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}1010
      \u{53F3}\u{79FB}1\u{4F4D}\u{540E}\u{FF1A}  0101 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}5)
      
      \u{793A}\u{4F8B}\u{FF1A}-10 >> 1
      -10 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF08}\u{7B80}\u{5316}\u{8868}\u{793A}\u{FF09}\u{FF1A}...1111111111110110
      \u{53F3}\u{79FB}1\u{4F4D}\u{540E}\u{FF1A}              ...1111111111111011 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}-5)
      </code></pre>
      <p>\u{53F3}\u{79FB}n\u{4F4D}\u{76F8}\u{5F53}\u{4E8E}\u{9664}\u{4EE5}2\u{7684}n\u{6B21}\u{65B9}\u{5E76}\u{5411}\u{4E0B}\u{53D6}\u{6574}\u{FF1A}<pre><code>x >> n</code></pre>\u{8FD1}\u{4F3C}\u{7B49}\u{4EF7}\u{4E8E}<pre><code>Math.floor(x / Math.pow(2, n))</code></pre>\u{3002}</p>
      <p>\u{5E38}\u{89C1}\u{7528}\u{9014}\u{FF1A}</p>
      <ul>
        <li>\u{5FEB}\u{901F}\u{9664}\u{6CD5}\u{FF1A}\u{5F53}\u{9700}\u{8981}\u{5C06}\u{4E00}\u{4E2A}\u{6570}\u{9664}\u{4EE5}2\u{7684}\u{5E42}\u{65F6}\u{FF0C}\u{4F7F}\u{7528}\u{53F3}\u{79FB}\u{8FD0}\u{7B97}\u{66F4}\u{9AD8}\u{6548}\u{3002}</li>
        <li>\u{4FDD}\u{6301}\u{7B26}\u{53F7}\u{7684}\u{6574}\u{6570}\u{9664}\u{6CD5}\u{3002}</li>
      </ul>
    `,challenge:"编写一个函数，接收一个整数作为参数，返回将该整数除以2并向下取整的结果。使用右移运算符实现。",hint:"使用右移1位运算符 >> 可以实现除以2并向下取整的效果。",solution:`function divideByTwo(num) {
  // \u{4F7F}\u{7528}\u{53F3}\u{79FB}1\u{4F4D}\u{FF0C}\u{76F8}\u{5F53}\u{4E8E}\u{9664}\u{4EE5}2\u{5E76}\u{5411}\u{4E0B}\u{53D6}\u{6574}
  return num >> 1;
}`,testCases:[{input:"10",expected:5},{input:"7",expected:3},{input:"-5",expected:-3},{input:"0",expected:0}]},{id:8,name:"无符号右移（>>>）",icon:">>>",theory:`
      <h3>\u{65E0}\u{7B26}\u{53F7}\u{53F3}\u{79FB}\u{8FD0}\u{7B97}\u{7B26} (>>>)</h3>
      <p>\u{65E0}\u{7B26}\u{53F7}\u{53F3}\u{79FB}\u{8FD0}\u{7B97}\u{7B26}\u{5C06}\u{64CD}\u{4F5C}\u{6570}\u{7684}\u{6240}\u{6709}\u{4F4D}\u{5411}\u{53F3}\u{79FB}\u{52A8}\u{6307}\u{5B9A}\u{7684}\u{4F4D}\u{6570}\u{FF0C}\u{4E22}\u{5F03}\u{79FB}\u{9664}\u{7684}\u{4F4D}\u{FF0C}\u{5DE6}\u{4FA7}\u{59CB}\u{7EC8}\u{8865}0\u{FF0C}\u{4E0D}\u{8003}\u{8651}\u{7B26}\u{53F7}\u{4F4D}\u{3002}</p>
      <p>\u{8FD9}\u{4E0E}\u{6709}\u{7B26}\u{53F7}\u{53F3}\u{79FB}(>>)\u{7684}\u{533A}\u{522B}\u{5728}\u{4E8E}\u{FF0C}\u{65E0}\u{8BBA}\u{64CD}\u{4F5C}\u{6570}\u{662F}\u{6B63}\u{6570}\u{8FD8}\u{662F}\u{8D1F}\u{6570}\u{FF0C}\u{5DE6}\u{4FA7}\u{90FD}\u{8865}0\u{3002}</p>
      <pre><code>
      \u{793A}\u{4F8B}\u{FF1A}10 >>> 1
      10 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}00000000000000000000000000001010
      \u{53F3}\u{79FB}1\u{4F4D}\u{540E}\u{FF1A}  00000000000000000000000000000101 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}5)
      
      \u{793A}\u{4F8B}\u{FF1A}-10 >>> 1
      -10 \u{7684}\u{4E8C}\u{8FDB}\u{5236}\u{FF1A}11111111111111111111111111110110
      \u{53F3}\u{79FB}1\u{4F4D}\u{540E}\u{FF1A}   01111111111111111111111111111011 (\u{5341}\u{8FDB}\u{5236}\u{4E3A}2147483643)
      </code></pre>
      <p>\u{5BF9}\u{4E8E}\u{6B63}\u{6570}\u{FF0C}>>> \u{548C} >> \u{7684}\u{7ED3}\u{679C}\u{76F8}\u{540C}\u{3002}\u{4F46}\u{5BF9}\u{4E8E}\u{8D1F}\u{6570}\u{FF0C}\u{7ED3}\u{679C}\u{4F1A}\u{975E}\u{5E38}\u{4E0D}\u{540C}\u{FF0C}\u{56E0}\u{4E3A}\u{7B26}\u{53F7}\u{4F4D}\u{4E5F}\u{53C2}\u{4E0E}\u{4E86}\u{79FB}\u{4F4D}\u{3002}</p>
      <p>\u{5E38}\u{89C1}\u{7528}\u{9014}\u{FF1A}</p>
      <ul>
        <li>\u{5904}\u{7406}\u{65E0}\u{7B26}\u{53F7}\u{6574}\u{6570}\u{FF1A}\u{5728}\u{9700}\u{8981}\u{5C06}\u{8D1F}\u{6570}\u{89C6}\u{4E3A}\u{5927}\u{7684}\u{65E0}\u{7B26}\u{53F7}\u{6570}\u{65F6}\u{4F7F}\u{7528}\u{3002}</li>
        <li>\u{5B9E}\u{73B0}\u{65E0}\u{7B26}\u{53F7}\u{9664}\u{6CD5}\u{3002}</li>
      </ul>
    `,challenge:"编写一个函数，接收一个整数作为参数，返回将该整数的所有位向右移动1位，左侧补0的结果。",hint:"使用无符号右移运算符 >>> 可以实现向右移动并左侧补0的效果。",solution:`function unsignedRightShift(num) {
  // \u{4F7F}\u{7528}\u{65E0}\u{7B26}\u{53F7}\u{53F3}\u{79FB}1\u{4F4D}
  return num >>> 1;
}`,testCases:[{input:"10",expected:5},{input:"-10",expected:0x7ffffffb},{input:"0",expected:0},{input:"-1",expected:0x7fffffff}]},{id:9,name:"位掩码应用",icon:"\uD83C\uDFAD",theory:`
      <h3>\u{4F4D}\u{63A9}\u{7801}</h3>
      <p>\u{4F4D}\u{63A9}\u{7801}\u{662F}\u{4F7F}\u{7528}\u{4E8C}\u{8FDB}\u{5236}\u{4F4D}\u{6765}\u{5B58}\u{50A8}\u{591A}\u{4E2A}\u{5E03}\u{5C14}\u{503C}\u{FF08}\u{6807}\u{5FD7}\u{FF09}\u{7684}\u{6280}\u{672F}\u{3002}\u{6BCF}\u{4E00}\u{4F4D}\u{4EE3}\u{8868}\u{4E00}\u{4E2A}\u{6807}\u{5FD7}\u{FF0C}\u{53EF}\u{4EE5}\u{901A}\u{8FC7}\u{4F4D}\u{8FD0}\u{7B97}\u{6765}\u{8BBE}\u{7F6E}\u{3001}\u{6E05}\u{9664}\u{3001}\u{5207}\u{6362}\u{6216}\u{68C0}\u{67E5}\u{8FD9}\u{4E9B}\u{6807}\u{5FD7}\u{3002}</p>
      <p>\u{4F4D}\u{63A9}\u{7801}\u{5728}\u{9700}\u{8981}\u{5B58}\u{50A8}\u{591A}\u{4E2A}\u{5F00}\u{5173}\u{72B6}\u{6001}\u{4F46}\u{53C8}\u{60F3}\u{8282}\u{7701}\u{5185}\u{5B58}\u{65F6}\u{975E}\u{5E38}\u{6709}\u{7528}\u{3002}\u{4F8B}\u{5982}\u{FF0C}\u{5728}\u{6743}\u{9650}\u{7CFB}\u{7EDF}\u{3001}\u{56FE}\u{5F62}\u{5904}\u{7406}\u{548C}\u{6E38}\u{620F}\u{5F00}\u{53D1}\u{4E2D}\u{7ECF}\u{5E38}\u{4F7F}\u{7528}\u{3002}</p>
      <p>\u{5E38}\u{7528}\u{7684}\u{4F4D}\u{63A9}\u{7801}\u{64CD}\u{4F5C}\u{FF1A}</p>
      <ul>
        <li>\u{8BBE}\u{7F6E}\u{6807}\u{5FD7}\u{FF1A}<pre><code>flags |= mask</code></pre></li>
        <li>\u{6E05}\u{9664}\u{6807}\u{5FD7}\u{FF1A}<pre><code>flags &= ~mask</code></pre></li>
        <li>\u{5207}\u{6362}\u{6807}\u{5FD7}\u{FF1A}<pre><code>flags ^= mask</code></pre></li>
        <li>\u{68C0}\u{67E5}\u{6807}\u{5FD7}\u{FF1A}<pre><code>(flags & mask) !== 0</code></pre></li>
      </ul>
      <p>\u{4F8B}\u{5982}\u{FF0C}\u{6211}\u{4EEC}\u{53EF}\u{4EE5}\u{7528}\u{4E00}\u{4E2A}\u{6574}\u{6570}\u{7684}\u{4E0D}\u{540C}\u{4F4D}\u{6765}\u{8868}\u{793A}\u{7528}\u{6237}\u{7684}\u{6743}\u{9650}\u{FF1A}</p>
      <pre><code>
      const READ = 1;          // 0001
      const WRITE = 2;         // 0010
      const EXECUTE = 4;       // 0100
      const ADMIN = 8;         // 1000
      
      // \u{6388}\u{4E88}\u{7528}\u{6237}\u{8BFB}\u{548C}\u{5199}\u{6743}\u{9650}
      let userPermissions = READ | WRITE;  // 0011 (3)
      
      // \u{68C0}\u{67E5}\u{7528}\u{6237}\u{662F}\u{5426}\u{6709}\u{8BFB}\u{6743}\u{9650}
      if (userPermissions & READ) {
        console.log("\u{7528}\u{6237}\u{6709}\u{8BFB}\u{6743}\u{9650}");
      }
      
      // \u{6DFB}\u{52A0}\u{6267}\u{884C}\u{6743}\u{9650}
      userPermissions |= EXECUTE;  // 0111 (7)
      
      // \u{79FB}\u{9664}\u{5199}\u{6743}\u{9650}
      userPermissions &= ~WRITE;   // 0101 (5)
      </code></pre>
    `,challenge:"实现一个简单的权限系统。编写一个函数，接收用户当前权限和要检查的权限作为参数，返回用户是否拥有该权限。",hint:"使用按位与运算符检查特定权限位是否设置。如果 (userPermissions & permissionToCheck) !== 0，则用户拥有该权限。",solution:`function hasPermission(userPermissions, permissionToCheck) {
  // \u{4F7F}\u{7528}\u{6309}\u{4F4D}\u{4E0E}\u{68C0}\u{67E5}\u{6743}\u{9650}
  return (userPermissions & permissionToCheck) !== 0;
}`,testCases:[{input:"3, 1",expected:!0},{input:"3, 2",expected:!0},{input:"3, 4",expected:!1},{input:"7, 4",expected:!0}]},{id:10,name:"位运算技巧",icon:"\uD83E\uDDE9",theory:`
      <h3>\u{4F4D}\u{8FD0}\u{7B97}\u{6280}\u{5DE7}</h3>
      <p>\u{4F4D}\u{8FD0}\u{7B97}\u{53EF}\u{4EE5}\u{7528}\u{6765}\u{5B9E}\u{73B0}\u{8BB8}\u{591A}\u{5E38}\u{89C1}\u{64CD}\u{4F5C}\u{FF0C}\u{901A}\u{5E38}\u{6BD4}\u{4F20}\u{7EDF}\u{65B9}\u{6CD5}\u{66F4}\u{9AD8}\u{6548}\u{3002}\u{4EE5}\u{4E0B}\u{662F}\u{4E00}\u{4E9B}\u{5E38}\u{7528}\u{7684}\u{4F4D}\u{8FD0}\u{7B97}\u{6280}\u{5DE7}\u{FF1A}</p>
      <ol>
        <li>
          <strong>\u{5224}\u{65AD}\u{5947}\u{5076}\u{6027}</strong><br>
          <pre><code>n & 1 === 0</code></pre>\u{FF1A}\u{5076}\u{6570}<br>
          <pre><code>n & 1 === 1</code></pre>\u{FF1A}\u{5947}\u{6570}
        </li>
        <li>
          <strong>\u{4EA4}\u{6362}\u{4E24}\u{4E2A}\u{53D8}\u{91CF}\u{7684}\u{503C}\u{FF08}\u{4E0D}\u{4F7F}\u{7528}\u{4E34}\u{65F6}\u{53D8}\u{91CF}\u{FF09}</strong><br>
          <pre><code>a ^= b; b ^= a; a ^= b;</code></pre>
        </li>
        <li>
          <strong>\u{53D6}\u{7EDD}\u{5BF9}\u{503C}\u{FF08}\u{4EC5}\u{9002}\u{7528}\u{4E8E}32\u{4F4D}\u{6574}\u{6570}\u{FF09}</strong><br>
          <pre><code>const abs = (n ^ (n >> 31)) - (n >> 31);</code></pre>
        </li>
        <li>
          <strong>\u{53D6}\u{6574}\u{FF08}\u{5411}\u{4E0B}\u{53D6}\u{6574}\u{FF0C}\u{4EC5}\u{9002}\u{7528}\u{4E8E}\u{6B63}\u{6570}\u{FF09}</strong><br>
          <pre><code>const floor = n >> 0;</code></pre>
        </li>
        <li>
          <strong>\u{8BA1}\u{7B97}2\u{7684}\u{5E42}</strong><br>
          <pre><code>const pow2 = 1 << n;</code></pre>\u{FF08}\u{8BA1}\u{7B97}2\u{7684}n\u{6B21}\u{65B9}\u{FF09}
        </li>
        <li>
          <strong>\u{4E58}\u{4EE5}/\u{9664}\u{4EE5}2\u{7684}\u{5E42}</strong><br>
          <pre><code>n << m</code></pre>\u{FF08}n\u{4E58}\u{4EE5}2\u{7684}m\u{6B21}\u{65B9}\u{FF09}<br>
          <pre><code>n >> m</code></pre>\u{FF08}n\u{9664}\u{4EE5}2\u{7684}m\u{6B21}\u{65B9}\u{FF0C}\u{5411}\u{4E0B}\u{53D6}\u{6574}\u{FF09}
        </li>
        <li>
          <strong>\u{68C0}\u{67E5}\u{4E00}\u{4E2A}\u{6570}\u{662F}\u{5426}\u{662F}2\u{7684}\u{5E42}</strong><br>
          <pre><code>n & (n - 1) === 0 && n > 0</code></pre>
        </li>
        <li>
          <strong>\u{8BA1}\u{7B97}\u{5E73}\u{5747}\u{503C}\u{FF08}\u{907F}\u{514D}\u{6EA2}\u{51FA}\u{FF09}</strong><br>
          <pre><code>const avg = (a & b) + ((a ^ b) >> 1);</code></pre>
        </li>
      </ol>
    `,challenge:"编写一个函数，接收两个整数作为参数，返回它们的平均值（向下取整）。使用位运算实现，避免可能的溢出问题。",hint:"可以使用 (a & b) + ((a ^ b) >> 1) 计算平均值，这种方法可以避免 (a + b) / 2 可能导致的溢出问题。",solution:`function average(a, b) {
  // \u{4F7F}\u{7528}\u{4F4D}\u{8FD0}\u{7B97}\u{8BA1}\u{7B97}\u{5E73}\u{5747}\u{503C}\u{FF0C}\u{907F}\u{514D}\u{6EA2}\u{51FA}
  return (a & b) + ((a ^ b) >> 1);
}`,testCases:[{input:"10, 20",expected:15},{input:"5, 6",expected:5},{input:"0, 0",expected:0},{input:"-5, 5",expected:0}]}];e.forEach(u=>{let F=u.solution.match(/function\s+\w+\s*\(.*?\)\s*{/);F&&F[0]&&(u.solutionTemplate=F[0]+"\n    //...这里实现代码\n}")})},223:function(u,F,E){E.d(F,{Gk:()=>A,bo:()=>B,ew:()=>p,qY:()=>C,xC:()=>t,xQ:()=>i});var e=E(963);let D={completedLevels:[],currentLevel:1,lastVisit:new Date().toISOString(),solution:""},B=(0,e.y$)("js-bitwise-operations-progress",D);function n(u){B.value.lastVisit=new Date().toISOString(),B.value.solution=u}function C(u,F){B.value.completedLevels.includes(u)||(B.value.completedLevels.push(u),n(F))}function t(u,F){B.value.currentLevel=u,n(F)}function p(u){return B.value.completedLevels.includes(u)}function A(){return[...B.value.completedLevels]}function i(){B.value={...D},n("")}}}]);