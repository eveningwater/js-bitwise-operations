"use strict";(self.webpackChunkjs_bitwise_operations=self.webpackChunkjs_bitwise_operations||[]).push([["823"],{315:function(e,l,t){t.r(l),t.d(l,{default:()=>A});var s=t(95),n=t(941),o=t(645),i=t(753);let v={class:"level-icon"},a={class:"level-name"},c={class:"status-icon"},u=(0,s.aZ)({__name:"LevelCard",props:{level:{}},emits:["select"],setup(e){let{t:l}=(0,i.useLanguage)();return(e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,s.C_)(["level-card",{"level-completed":e.level.completed}]),onClick:t[0]||(t[0]=l=>{var t;return e.$emit("select",null==(t=e.level)?void 0:t.id)})},[(0,s._)("div",v,(0,s.zw)(e.level.icon),1),(0,s._)("div",a,(0,s.zw)(e.level.name),1),(0,s._)("div",{class:(0,s.C_)(["level-status",{"completed-status":e.level.completed}])},[(0,s._)("span",c,(0,s.zw)(e.level.completed?"✓":"○"),1),(0,s._)("span",null,(0,s.zw)(e.level.completed?(0,s.SU)(l)("level.completed"):(0,s.SU)(l)("level.notCompleted")),1)],2)],2))}});var p=t(774);let r=(0,p.default)(u,[["__scopeId","data-v-ddf87e76"]]),h={class:"select-value"},d={key:0,class:"option-flag"},m={class:"option-text"},y={key:0,class:"select-dropdown"},g={class:"select-options"},$=["onClick"],f={key:0,class:"option-flag"},w={class:"option-text"},_=(0,s.aZ)({__name:"Select",props:{modelValue:{},options:{},placeholder:{default:"请选择"},disabled:{type:Boolean,default:!1},showFlag:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,l){let{emit:t}=l,n=(0,s.iH)(!1),o=(0,s.Fl)(()=>e.options.find(l=>l.value===e.modelValue)),i=()=>{e.disabled||(n.value=!n.value)},v=e=>{t("update:modelValue",e.value),t("change",e.value),n.value=!1},a=e=>{e.target.closest(".select-container")||(n.value=!1)},c=e=>{"Escape"===e.key&&(n.value=!1)},u=()=>{n.value=!1};return(0,s.bv)(()=>{document.addEventListener("click",a),document.addEventListener("keydown",c),window.addEventListener("languageChanged",u)}),(0,s.SK)(()=>{document.removeEventListener("click",a),document.removeEventListener("keydown",c),window.removeEventListener("languageChanged",u)}),(0,s.YP)(()=>e.modelValue,l=>{e.options.some(e=>e.value===l)||(n.value=!1)}),(e,l)=>{var t,a;return(0,s.wg)(),(0,s.iD)("div",{class:(0,s.C_)(["select-container",{"is-open":n.value,"is-disabled":e.disabled}])},[(0,s._)("div",{class:(0,s.C_)(["select-trigger",{"is-open":n.value}]),onClick:i},[(0,s._)("div",h,[e.showFlag?((0,s.wg)(),(0,s.iD)("span",d,(0,s.zw)(null==(t=o.value)?void 0:t.flag),1)):(0,s.kq)("",!0),(0,s._)("span",m,(0,s.zw)((null==(a=o.value)?void 0:a.name)||e.placeholder),1)]),(0,s._)("div",{class:(0,s.C_)(["select-arrow",{"is-open":n.value}])},l[0]||(l[0]=[(0,s._)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},[(0,s._)("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)],2),n.value?((0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.options,l=>((0,s.wg)(),(0,s.iD)("div",{key:l.value,class:(0,s.C_)(["select-option",{"is-selected":l.value===e.modelValue}]),onClick:e=>v(l)},[e.showFlag?((0,s.wg)(),(0,s.iD)("span",f,(0,s.zw)(l.flag),1)):(0,s.kq)("",!0),(0,s._)("span",w,(0,s.zw)(l.name),1)],10,$))),128))])])):(0,s.kq)("",!0)],2)}}}),x=(0,p.default)(_,[["__scopeId","data-v-4feef09c"]]);var D=t(525),b=t(223);let U={class:"home-page"},k={class:"header"},C={class:"logo-text"},S=["lang"],z={class:"header-controls"},T={class:"language-selector"},E={class:"nav-buttons"},L={class:"main-content"},V={key:0},j={key:1},F={class:"welcome-section"},B={class:"title"},H=["lang"],I={class:"subtitle"},P={class:"progress-container"},M={class:"progress-bar"},O={class:"progress-text"},q={class:"action-buttons"},N={id:"levels",class:"levels-section"},Y={class:"section-title"},Z={class:"levels-grid"},G={key:0,class:"modal"},K={class:"modal-content"},Q={class:"modal-buttons"},R={class:"footer"},W=(0,s.aZ)({__name:"HomePage",setup(e){let l=(0,n.tv)(),{currentLang:t,setLanguage:v,t:a}=(0,i.useLanguage)(),c=(0,s.iH)(!1),u=(0,s.iH)(!1),p=(0,s.Fl)({get:()=>t.value,set:e=>v(e)}),h=(0,s.Fl)(()=>Object.entries(i.Mj).map(e=>{let[l,t]=e;return{value:l,name:t.name,flag:t.flag}})),d=e=>{v(e)},m=(0,s.Fl)(()=>(0,D.r)().map(e=>({...e,completed:(0,b.ew)(e.id)}))),y=(0,s.Fl)(()=>Math.round((0,b.Gk)().length/(0,D.r)().length*100)||0);function g(){c.value=!0}function $(){var e;null==(e=document.getElementById("levels"))||e.scrollIntoView({behavior:"smooth"})}function f(e){l.push(`/level/${e}`)}function w(){u.value=!0}function _(){(0,b.xQ)(),u.value=!1}function W(){"home"===l.currentRoute.value.name?(window.scrollTo({top:0,behavior:"smooth"}),c.value=!1):l.push({name:"home"})}function A(){window.open("https://github.com/eveningwater/js-bitwise-operations","_blank")}return(0,s.bv)(()=>{console.log("用户进度:",b.bo.value)}),(e,l)=>((0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("header",k,[(0,s._)("div",{class:"logo",onClick:W},[(0,s._)("span",C,[(0,s.Uk)((0,s.zw)((0,s.SU)(a)("home.title")),1),(0,s._)("span",{class:"highlight",lang:p.value},(0,s.zw)((0,s.SU)(a)("home.appName")),9,S)])]),(0,s._)("div",z,[(0,s._)("div",T,[(0,s.Wm)(x,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=e=>p.value=e),options:h.value,"show-flag":!0,onChange:d},null,8,["modelValue","options"])]),(0,s._)("div",E,[(0,s._)("button",{class:"nav-button",onClick:g},(0,s.zw)((0,s.SU)(a)("nav.about")),1),(0,s._)("button",{class:"github-button",onClick:A},"GitHub")])])]),(0,s._)("main",L,[c.value?((0,s.wg)(),(0,s.iD)("div",V,[(0,s.Wm)(o.Z,{onBack:l[1]||(l[1]=e=>c.value=!1)})])):((0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("section",F,[(0,s._)("h1",B,[(0,s.Uk)((0,s.zw)((0,s.SU)(a)("home.title")),1),(0,s._)("span",{class:"highlight",lang:p.value},(0,s.zw)((0,s.SU)(a)("home.appName")),9,H)]),(0,s._)("p",I,(0,s.zw)((0,s.SU)(a)("home.subtitle")),1),(0,s._)("div",P,[(0,s._)("div",M,[(0,s._)("div",{class:"progress-fill",style:(0,s.j5)({width:y.value+"%"})},null,4)]),(0,s._)("div",O,(0,s.zw)((0,s.SU)(a)("home.progressText"))+": "+(0,s.zw)(y.value)+"%",1)]),(0,s._)("div",q,[(0,s._)("button",{class:"cta-button",onClick:$},(0,s.zw)((0,s.SU)(a)("home.startLearning")),1),(0,s._)("button",{class:"reset-button",onClick:w},(0,s.zw)((0,s.SU)(a)("home.resetProgress")),1)])]),(0,s._)("section",N,[(0,s._)("h2",Y,(0,s.zw)((0,s.SU)(a)("home.levelsTitle")),1),(0,s._)("div",Z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.value,e=>((0,s.wg)(),(0,s.j4)(r,{key:e.id,level:e,onSelect:f},null,8,["level"]))),128))])]),u.value?((0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("div",K,[(0,s._)("h3",null,(0,s.zw)((0,s.SU)(a)("home.resetConfirmTitle")),1),(0,s._)("p",null,(0,s.zw)((0,s.SU)(a)("home.resetConfirmMessage")),1),(0,s._)("div",Q,[(0,s._)("button",{class:"cancel-button",onClick:l[2]||(l[2]=e=>u.value=!1)},(0,s.zw)((0,s.SU)(a)("home.cancel")),1),(0,s._)("button",{class:"confirm-button",onClick:_},(0,s.zw)((0,s.SU)(a)("home.confirm")),1)])])])):(0,s.kq)("",!0)]))]),(0,s._)("footer",R,[(0,s._)("p",null,"\xa9 "+(0,s.zw)(new Date().getFullYear())+" "+(0,s.zw)((0,s.SU)(a)("home.appName"))+" | "+(0,s.zw)((0,s.SU)(a)("home.subtitle")),1)])]))}}),A=(0,p.default)(W,[["__scopeId","data-v-42d1ae54"]])},525:function(e,l,t){t.d(l,{r:()=>n});var s=t(753);function n(){let{t:e}=(0,s.useLanguage)(),l=[{id:1,name:e("levels.level1.name"),icon:"&",theory:`
        <h3>${e("levels.level1.theoryTitle")}</h3>
        <p>${e("levels.level1.theoryDesc1")}</p>
        <p>${e("levels.level1.theoryDesc2")}</p>
        <pre><code>${e("levels.level1.theoryExample")}</code></pre>
        <p>${e("levels.level1.theoryDesc3")}</p>
        <p>${e("levels.level1.theoryDesc4")}</p>
        <pre><code>${e("levels.level1.theoryCode1")}</code></pre>
        <p>${e("levels.level1.theoryDesc5")}</p>
        <pre><code>${e("levels.level1.theoryCode2")}</code></pre>
      `,challenge:e("levels.level1.challenge"),hint:e("levels.level1.hint"),solution:`function decimalToBinary(num) {
  if (+num === 0) return "0";
  
  let binary = [];
  let temp = Math.abs(num);
  
  while (temp > 0) {
    binary.push(temp % 2);
    temp = Math.floor(temp / 2);
  }
  
  return binary.reverse().join("");
}`,testCases:[{input:"10",expected:"1010"},{input:"42",expected:"101010"},{input:"0",expected:"0"},{input:"255",expected:"11111111"}]},{id:2,name:e("levels.level2.name"),icon:"&",theory:`
        <h3>${e("levels.level2.theoryTitle")}</h3>
        <p>${e("levels.level2.theoryDesc1")}</p>
        <p>${e("levels.level2.theoryDesc2")}</p>
        <pre><code>${e("levels.level2.theoryExample")}</code></pre>
        <p>${e("levels.level2.theoryDesc3")}</p>
        <ul>
          <li>${e("levels.level2.theoryUse1")}</li>
          <li>${e("levels.level2.theoryUse2")}</li>
          <li>${e("levels.level2.theoryUse3")}</li>
        </ul>
      `,challenge:e("levels.level2.challenge"),hint:e("levels.level2.hint"),solution:`function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n-1)) === 0;
}`,testCases:[{input:"1",expected:!0},{input:"2",expected:!0},{input:"3",expected:!1},{input:"4",expected:!0},{input:"5",expected:!1},{input:"16",expected:!0}]},{id:3,name:e("levels.level3.name"),icon:"|",theory:`
        <h3>${e("levels.level3.theoryTitle")}</h3>
        <p>${e("levels.level3.theoryDesc1")}</p>
        <p>${e("levels.level3.theoryDesc2")}</p>
        <pre><code>${e("levels.level3.theoryExample")}</code></pre>
        <p>${e("levels.level3.theoryDesc3")}</p>
        <ul>
          <li>${e("levels.level3.theoryUse1")}</li>
          <li>${e("levels.level3.theoryUse2")}</li>
        </ul>
      `,challenge:e("levels.level3.challenge"),hint:e("levels.level3.hint"),solution:`function setBit(num, n) {
  const mask = 1 << n;
  return num | mask;
}`,testCases:[{input:"5, 1",expected:7},{input:"8, 0",expected:9},{input:"0, 3",expected:8},{input:"15, 4",expected:31}]},{id:4,name:e("levels.level4.name"),icon:"^",theory:`
        <h3>${e("levels.level4.theoryTitle")}</h3>
        <p>${e("levels.level4.theoryDesc1")}</p>
        <p>${e("levels.level4.theoryDesc2")}</p>
        <pre><code>${e("levels.level4.theoryExample")}</code></pre>
        <p>${e("levels.level4.theoryDesc3")}</p>
        <ul>
          <li>${e("levels.level4.theoryUse1")}</li>
          <li>${e("levels.level4.theoryUse2")}</li>
          <li>${e("levels.level4.theoryUse3")}</li>
        </ul>
      `,challenge:e("levels.level4.challenge"),hint:e("levels.level4.hint"),solution:`function findSingleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}`,testCases:[{input:"[2,2,1]",expected:1},{input:"[4,1,2,1,2]",expected:4},{input:"[1]",expected:1},{input:"[7,3,5,7,5,3,9]",expected:9}]},{id:5,name:e("levels.level5.name"),icon:"~",theory:`
        <h3>${e("levels.level5.theoryTitle")}</h3>
        <p>${e("levels.level5.theoryDesc1")}</p>
        <p>${e("levels.level5.theoryDesc2")}</p>
        <pre><code>${e("levels.level5.theoryExample")}</code></pre>
        <p>${e("levels.level5.theoryDesc3")}</p>
        <p>${e("levels.level5.theoryDesc4")}</p>
        <ul>
          <li>${e("levels.level5.theoryUse1")}</li>
          <li>${e("levels.level5.theoryUse2")}</li>
        </ul>
      `,challenge:e("levels.level5.challenge"),hint:e("levels.level5.hint"),solution:`function bitwiseNOT(num) {
  return ~num;
}`,testCases:[{input:"5",expected:-6},{input:"-3",expected:2},{input:"0",expected:-1},{input:"-1",expected:0}]},{id:6,name:e("levels.level6.name"),icon:"<<",theory:`
        <h3>${e("levels.level6.theoryTitle")}</h3>
        <p>${e("levels.level6.theoryDesc1")}</p>
        <pre><code>${e("levels.level6.theoryExample")}</code></pre>
        <p>${e("levels.level6.theoryDesc2")}</p>
        <p>${e("levels.level6.theoryDesc3")}</p>
        <ul>
          <li>${e("levels.level6.theoryUse1")}</li>
          <li>${e("levels.level6.theoryUse2")}</li>
        </ul>
      `,challenge:e("levels.level6.challenge"),hint:e("levels.level6.hint"),solution:`function powerOfTwo(n) {
  if (n < 0) return 0;
  return 1 << n;
}`,testCases:[{input:"0",expected:1},{input:"1",expected:2},{input:"3",expected:8},{input:"10",expected:1024}]},{id:7,name:e("levels.level7.name"),icon:">>",theory:`
        <h3>${e("levels.level7.theoryTitle")}</h3>
        <p>${e("levels.level7.theoryDesc1")}</p>
        <p>${e("levels.level7.theoryDesc2")}</p>
        <pre><code>${e("levels.level7.theoryExample")}</code></pre>
        <p>${e("levels.level7.theoryDesc3")}</p>
        <p>${e("levels.level7.theoryDesc4")}</p>
        <ul>
          <li>${e("levels.level7.theoryUse1")}</li>
          <li>${e("levels.level7.theoryUse2")}</li>
        </ul>
      `,challenge:e("levels.level7.challenge"),hint:e("levels.level7.hint"),solution:`function divideByTwo(num) {
  return num >> 1;
}`,testCases:[{input:"10",expected:5},{input:"7",expected:3},{input:"-5",expected:-3},{input:"0",expected:0}]},{id:8,name:e("levels.level8.name"),icon:">>>",theory:`
        <h3>${e("levels.level8.theoryTitle")}</h3>
        <p>${e("levels.level8.theoryDesc1")}</p>
        <p>${e("levels.level8.theoryDesc2")}</p>
        <pre><code>${e("levels.level8.theoryExample")}</code></pre>
        <p>${e("levels.level8.theoryDesc3")}</p>
        <p>${e("levels.level8.theoryDesc4")}</p>
        <ul>
          <li>${e("levels.level8.theoryUse1")}</li>
          <li>${e("levels.level8.theoryUse2")}</li>
        </ul>
      `,challenge:e("levels.level8.challenge"),hint:e("levels.level8.hint"),solution:`function unsignedRightShift(num) {
  return num >>> 1;
}`,testCases:[{input:"10",expected:5},{input:"-10",expected:0x7ffffffb},{input:"0",expected:0},{input:"-1",expected:0x7fffffff}]},{id:9,name:e("levels.level9.name"),icon:"\uD83C\uDFAD",theory:`
        <h3>${e("levels.level9.theoryTitle")}</h3>
        <p>${e("levels.level9.theoryDesc1")}</p>
        <p>${e("levels.level9.theoryDesc2")}</p>
        <p>${e("levels.level9.theoryDesc3")}</p>
        <ul>
          <li>${e("levels.level9.theoryUse1")}</li>
          <li>${e("levels.level9.theoryUse2")}</li>
          <li>${e("levels.level9.theoryUse3")}</li>
          <li>${e("levels.level9.theoryUse4")}</li>
        </ul>
        <pre><code>${e("levels.level9.theoryExample")}</code></pre>
      `,challenge:e("levels.level9.challenge"),hint:e("levels.level9.hint"),solution:`function hasPermission(userPermissions, permissionToCheck) {
  return (userPermissions & permissionToCheck) !== 0;
}`,testCases:[{input:"3, 1",expected:!0},{input:"3, 2",expected:!0},{input:"3, 4",expected:!1},{input:"7, 4",expected:!0}]},{id:10,name:e("levels.level10.name"),icon:"\uD83E\uDDE9",theory:`
        <h3>${e("levels.level10.theoryTitle")}</h3>
        <p>${e("levels.level10.theoryDesc1")}</p>
        <p>${e("levels.level10.theoryDesc2")}</p>
        <ul>
          <li>${e("levels.level10.theoryUse1")}</li>
          <li>${e("levels.level10.theoryUse2")}</li>
          <li>${e("levels.level10.theoryUse3")}</li>
          <li>${e("levels.level10.theoryUse4")}</li>
          <li>${e("levels.level10.theoryUse5")}</li>
          <li>${e("levels.level10.theoryUse6")}</li>
          <li>${e("levels.level10.theoryUse7")}</li>
          <li>${e("levels.level10.theoryUse8")}</li>
        </ul>
      `,challenge:e("levels.level10.challenge"),hint:e("levels.level10.hint"),solution:`function average(a, b) {
  return (a & b) + ((a ^ b) >> 1);
}`,testCases:[{input:"10, 20",expected:15},{input:"5, 6",expected:5},{input:"0, 0",expected:0},{input:"-5, 5",expected:0}]}];return l.forEach(l=>{let t=l.solution.match(/function\s+\w+\s*\(.*?\)\s*{/);t&&t[0]&&(l.solutionTemplate=t[0]+"\n    "+e("level.implementCodeHere")+"\n}")}),l}n()},223:function(e,l,t){t.d(l,{Gk:()=>u,bo:()=>o,ew:()=>c,qY:()=>v,xC:()=>a,xQ:()=>p});var s=t(963);let n={completedLevels:[],currentLevel:1,lastVisit:new Date().toISOString(),solution:""},o=(0,s.y$)("js-bitwise-operations-progress",n);function i(e){o.value.lastVisit=new Date().toISOString(),o.value.solution=e}function v(e,l){o.value.completedLevels.includes(e)||(o.value.completedLevels.push(e),i(l))}function a(e,l){o.value.currentLevel=e,i(l)}function c(e){return o.value.completedLevels.includes(e)}function u(){return[...o.value.completedLevels]}function p(){o.value={...n},i("")}}}]);