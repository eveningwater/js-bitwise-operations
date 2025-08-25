"use strict";(self.webpackChunkjs_bitwise_operations=self.webpackChunkjs_bitwise_operations||[]).push([["493"],{537:function(e,l,t){t.r(l),t.d(l,{default:()=>el});var n=t(95),s=t(941),i=t(525),v=t(223);let a=e=>Function(`return ${e}`)();var o=t(797),u=t(768);let r=(0,n.aZ)({__name:"Editor",props:{modelValue:{type:String,default:""},options:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,l){let{emit:t}=l,s=(0,n.iH)(null),i=(0,n.iH)(null),v=(0,n.iH)(null),a=(0,o.Z)(()=>{t("update:modelValue",(0,n.IU)(v.value).getValue())},500);async function r(){if(await (0,n.Y3)(),i.value=u.Z.init(),s.value&&!v.value)try{v.value=(await i.value).editor.create(s.value,{value:e.modelValue,language:"javascript",...e.options}),v.value.onDidChangeModelContent(()=>{a()})}catch(e){console.error("Failed to load Monaco editor:",e)}}return(0,n.bv)(()=>{r()}),(0,n.YP)(()=>e.modelValue,e=>{var l,t;e!==(null==(l=(0,n.IU)(v.value))?void 0:l.getValue())&&(null==(t=(0,n.IU)(v.value))||t.setValue(e))},{deep:!0}),(0,n.SK)(()=>{var e;a.cancel(),null==(e=i.value)||e.cancel()}),(e,l)=>((0,n.wg)(),(0,n.iD)("div",{ref_key:"editorRef",ref:s,class:"monaco-editor-container"},null,512))}});var c=t(774);let p=(0,c.default)(r,[["__scopeId","data-v-3bdc9930"]]);var d=t(835),h=t(979);t(473);var y=t(15),m=t(963),g=t(753);let $={class:"level-detail"},f={class:"level-header"},w={class:"level-title"},b={class:"level-progress"},x={key:0,class:"completion-badge"},_=["data-mobile-view"],D={class:"theory-section"},U=["innerHTML"],k={class:"challenge-section"},C={class:"challenge-description"},S={class:"code-editor"},z={class:"editor-header"},T={class:"editor-actions"},L=["title"],H={class:"editor-container"},I={key:0,class:"result-section"},E={class:"result-icon"},j={class:"result-message"},V={key:0,class:"celebration-message"},M={key:1,class:"feedback-section"},Z={class:"feedback-options"},q={key:0,class:"solution-content"},A={class:"solution-code"},O=["innerHTML"],F={class:"solution-note"},P={class:"hint-section"},Y={key:0,class:"hint-content"},N={class:"hint-header"},B={class:"hint-text"},W={class:"mobile-view-toggle"},J={class:"level-navigation"},R=["disabled"],G=["disabled"],K=(0,n.aZ)({__name:"LevelDetail",props:{levelId:{}},setup(e){var l;d.Z.registerLanguage("javascript",h.Z);let{t}=(0,g.useLanguage)(),o=(0,s.tv)(),u=(0,n.Fl)(()=>(0,i.r)().length),r=(0,n.Fl)(()=>{let l=(0,i.r)();return l.find(l=>l.id===e.levelId)||l[0]}),c=(0,n.iH)((null==(l=r.value)?void 0:l.solutionTemplate)||""),K=(0,n.iH)(!1),Q=(0,n.iH)(!1),X=(0,n.iH)(""),ee=(0,n.iH)(!1),el=(0,n.iH)(!1),et=(0,n.iH)("theory"),en=(0,n.iH)(""),es=(0,n.iH)("");(0,n.YP)(()=>e.levelId,()=>{eo(),(0,v.xC)(e.levelId,c.value)});let ei=()=>{r.value&&r.value.solution&&(en.value=d.Z.highlight(r.value.solution,{language:"javascript"}).value)},ev=()=>{if(!r.value||!r.value.theory)return;let e=document.createElement("div");e.innerHTML=r.value.theory,e.querySelectorAll("pre code").forEach(e=>{let l=e.textContent||"";e.innerHTML=d.Z.highlight(l,{language:"javascript"}).value}),e.querySelectorAll("code:not(pre code)").forEach(e=>{let l=e.textContent||"";e.innerHTML=d.Z.highlight(l,{language:"javascript"}).value}),es.value=e.innerHTML},ea=()=>{window.innerWidth<=768&&(et.value="theory")},eo=()=>{var l,t;K.value=!1,Q.value=(0,v.ew)(e.levelId),X.value="",c.value=Q.value?null==(l=r.value)?void 0:l.solution:(null==(t=r.value)?void 0:t.solutionTemplate)||"",ee.value=!1,el.value=!1,(0,n.Y3)(()=>{ei(),ev()})},eu=()=>{K.value=!1,Q.value=!1,X.value=""},er=()=>{K.value=!0,window.innerWidth<=768&&(et.value="challenge");try{let l=r.value.testCases.map(e=>{try{let l,t=a(c.value);if(!(0,y.Z)(t))return;if(e.input.includes("[")){let n=(0,m.$I)(e.input,"json");l=t(n)}else if(e.input.includes(",")){let n=e.input.split(",");l=t(...n)}else l=t(e.input);return console.log("result",l),{passed:ec(l,e.expected),input:e.input,expected:e.expected,actual:l}}catch(l){return{passed:!1,input:e.input,error:l instanceof Error?l.message:String(l)}}}),n=l.every(e=>e.passed);if(Q.value=n,n)X.value=t("level.congratulations"),(0,v.qY)(e.levelId,c.value);else{let e=l.find(e=>!e.passed);e&&"error"in e?X.value=`${t("level.codeError")}: ${e.error}`:e&&(X.value=`${t("level.testFailed")}: ${t("level.input")} ${e.input}, ${t("level.expected")} ${e.expected}, ${t("level.actual")} ${e.actual}`)}}catch(e){Q.value=!1,X.value=`${t("level.codeError")}: ${e instanceof Error?e.message:String(e)}`}},ec=(e,l)=>{if(Array.isArray(l)&&Array.isArray(e))return l.length===e.length&&l.every((l,t)=>ec(e[t],l));if("object"==typeof l&&null!==l&&"object"==typeof e&&null!==e){let t=Object.keys(l),n=Object.keys(e);return t.length===n.length&&t.every(t=>ec(e[t],l[t]))}return e===l},ep=()=>{e.levelId<u.value&&o.push({name:"level",params:{id:e.levelId+1}})},ed=()=>{e.levelId>1&&o.push({name:"level",params:{id:e.levelId-1}})},eh=()=>{o.push({name:"home"})};return(0,n.bv)(()=>{eo(),(0,v.xC)(e.levelId,""),ei(),ev(),(0,v.ew)(e.levelId)&&(Q.value=!0),ea(),window.addEventListener("resize",ea)}),(0,n.Jd)(()=>{window.removeEventListener("resize",ea)}),(e,l)=>((0,n.wg)(),(0,n.iD)("div",$,[(0,n._)("div",f,[(0,n._)("h2",w,(0,n.zw)(r.value.name),1),(0,n._)("div",b,[(0,n._)("span",null,(0,n.zw)((0,n.SU)(t)("level.level"))+" "+(0,n.zw)(r.value.id)+"/"+(0,n.zw)(u.value),1),(0,n.SU)(v.ew)(r.value.id)?((0,n.wg)(),(0,n.iD)("div",x,[l[6]||(l[6]=(0,n._)("span",{class:"badge-icon"},"✓",-1)),(0,n.Uk)(" "+(0,n.zw)((0,n.SU)(t)("level.completed")),1)])):(0,n.kq)("",!0)])]),(0,n._)("div",{class:"level-content","data-mobile-view":et.value},[(0,n._)("div",D,[(0,n._)("h3",null,(0,n.zw)((0,n.SU)(t)("level.theory")),1),(0,n._)("div",{class:"theory-content",innerHTML:es.value},null,8,U)]),(0,n._)("div",k,[(0,n._)("h3",null,(0,n.zw)((0,n.SU)(t)("level.challenge")),1),(0,n._)("div",C,(0,n.zw)(r.value.challenge),1),(0,n._)("div",S,[(0,n._)("div",z,[l[7]||(l[7]=(0,n._)("span",null,"JavaScript",-1)),(0,n._)("div",T,[(0,n._)("button",{class:"reset-code-button",onClick:eu,title:(0,n.SU)(t)("level.resetCode")}," ↺ ",8,L),(0,n._)("button",{class:"run-button",onClick:er},(0,n.zw)((0,n.SU)(t)("level.runCode")),1)])]),(0,n._)("div",H,[(0,n.Wm)(p,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),options:{language:"javascript",theme:"vs-dark",automaticLayout:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:14,lineNumbers:"on",renderLineHighlight:"all",tabSize:2}},null,8,["modelValue"])])]),K.value?((0,n.wg)(),(0,n.iD)("div",I,[(0,n._)("h4",null,(0,n.zw)((0,n.SU)(t)("level.runResult")),1),(0,n._)("div",{class:(0,n.C_)(["result-output",{"result-success":Q.value,"result-error":!Q.value}])},[(0,n._)("div",E,(0,n.zw)(Q.value?"✓":"✗"),1),(0,n._)("div",j,[(0,n.Uk)((0,n.zw)(X.value)+" ",1),Q.value?((0,n.wg)(),(0,n.iD)("div",V,(0,n.zw)((0,n.SU)(t)("level.greatJob")),1)):(0,n.kq)("",!0)])],2)])):(0,n.kq)("",!0),K.value&&!Q.value?((0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("h4",null,(0,n.zw)((0,n.SU)(t)("level.needHelp")),1),(0,n._)("div",Z,[(0,n._)("button",{class:"feedback-button",onClick:l[1]||(l[1]=e=>ee.value=!0)},[l[8]||(l[8]=(0,n._)("span",{class:"feedback-icon"},"\uD83D\uDCA1",-1)),(0,n.Uk)(" "+(0,n.zw)((0,n.SU)(t)("level.viewHint")),1)]),(0,n._)("button",{class:"feedback-button",onClick:l[2]||(l[2]=e=>el.value=!el.value)},[l[9]||(l[9]=(0,n._)("span",{class:"feedback-icon"},"\uD83D\uDCDD",-1)),(0,n.Uk)(" "+(0,n.zw)(el.value?(0,n.SU)(t)("level.hideSolution"):(0,n.SU)(t)("level.viewSolution")),1)])]),el.value?((0,n.wg)(),(0,n.iD)("div",q,[(0,n._)("h5",null,(0,n.zw)((0,n.SU)(t)("level.referenceSolution")),1),(0,n._)("pre",A,[(0,n._)("code",{class:"language-javascript",innerHTML:en.value},null,8,O)]),(0,n._)("div",F,(0,n.zw)((0,n.SU)(t)("level.solutionNote")),1)])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),(0,n._)("div",P,[(0,n._)("button",{class:"hint-button",onClick:l[3]||(l[3]=e=>ee.value=!ee.value)},[l[10]||(l[10]=(0,n._)("span",{class:"hint-icon"},"\uD83D\uDCA1",-1)),(0,n.Uk)(" "+(0,n.zw)(ee.value?(0,n.SU)(t)("level.hideHint"):(0,n.SU)(t)("level.viewHint")),1)]),ee.value?((0,n.wg)(),(0,n.iD)("div",Y,[(0,n._)("div",N,(0,n.zw)((0,n.SU)(t)("level.hint")),1),(0,n._)("div",B,(0,n.zw)(r.value.hint),1)])):(0,n.kq)("",!0)])])],8,_),(0,n._)("div",W,[(0,n._)("button",{class:(0,n.C_)(["toggle-button",{active:"theory"===et.value}]),onClick:l[4]||(l[4]=e=>et.value="theory")},(0,n.zw)((0,n.SU)(t)("level.theory")),3),(0,n._)("button",{class:(0,n.C_)(["toggle-button",{active:"challenge"===et.value}]),onClick:l[5]||(l[5]=e=>et.value="challenge")},(0,n.zw)((0,n.SU)(t)("level.challenge")),3)]),(0,n._)("div",J,[(0,n._)("button",{class:"nav-button prev-button",disabled:1===r.value.id,onClick:ed},(0,n.zw)((0,n.SU)(t)("level.previousLevel")),9,R),(0,n._)("button",{class:"nav-button home-button",onClick:eh},(0,n.zw)((0,n.SU)(t)("level.returnHome")),1),(0,n._)("button",{class:"nav-button next-button",disabled:r.value.id===u.value||!(0,n.SU)(v.ew)(r.value.id),onClick:ep},(0,n.zw)((0,n.SU)(v.ew)(r.value.id)?(0,n.SU)(t)("level.nextLevel"):(0,n.SU)(t)("level.completeCurrentToContinue")),9,G)])]))}}),Q=(0,c.default)(K,[["__scopeId","data-v-cfc632e8"]]),X={class:"level-view"},ee=(0,n.aZ)({__name:"LevelView",props:{id:{}},setup:e=>(e,l)=>((0,n.wg)(),(0,n.iD)("div",X,[(0,n.Wm)(Q,{levelId:Number(e.id)},null,8,["levelId"])]))}),el=(0,c.default)(ee,[["__scopeId","data-v-7447aa80"]])},525:function(e,l,t){t.d(l,{r:()=>s});var n=t(753);function s(){let{t:e}=(0,n.useLanguage)(),l=[{id:1,name:e("levels.level1.name"),icon:"&",theory:`
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
}`,testCases:[{input:"10, 20",expected:15},{input:"5, 6",expected:5},{input:"0, 0",expected:0},{input:"-5, 5",expected:0}]}];return l.forEach(l=>{let t=l.solution.match(/function\s+\w+\s*\(.*?\)\s*{/);t&&t[0]&&(l.solutionTemplate=t[0]+"\n    "+e("level.implementCodeHere")+"\n}")}),l}s()},223:function(e,l,t){t.d(l,{Gk:()=>r,bo:()=>i,ew:()=>u,qY:()=>a,xC:()=>o,xQ:()=>c});var n=t(963);let s={completedLevels:[],currentLevel:1,lastVisit:new Date().toISOString(),solution:""},i=(0,n.y$)("js-bitwise-operations-progress",s);function v(e){i.value.lastVisit=new Date().toISOString(),i.value.solution=e}function a(e,l){i.value.completedLevels.includes(e)||(i.value.completedLevels.push(e),v(l))}function o(e,l){i.value.currentLevel=e,v(l)}function u(e){return i.value.completedLevels.includes(e)}function r(){return[...i.value.completedLevels]}function c(){i.value={...s},v("")}}}]);