function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},s=e.parcelRequire72fe;null==s&&((s=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var s={id:n,exports:{}};return t[n]=s,e.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},e.parcelRequire72fe=s),s.register("27Lyk",(function(e,t){var o,s;n(e.exports,"register",(()=>o),(n=>o=n)),n(e.exports,"resolve",(()=>s),(n=>s=n));var a={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},s=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),s.register("99MHT",(function(n,e){n.exports=new URL(s("27Lyk").resolve("bUnx8"),import.meta.url).toString()})),s.register("2Xbar",(function(n,e){n.exports=new URL(s("27Lyk").resolve("2qMS6"),import.meta.url).toString()})),s.register("k3V2l",(function(n,e){n.exports=new URL(s("27Lyk").resolve("jPdlM"),import.meta.url).toString()})),s.register("9YnJC",(function(n,e){n.exports=new URL(s("27Lyk").resolve("eKR93"),import.meta.url).toString()})),s.register("fxDpH",(function(n,e){n.exports=new URL(s("27Lyk").resolve("5uXOC"),import.meta.url).toString()})),s.register("l9mqm",(function(n,e){n.exports=new URL(s("27Lyk").resolve("52wjt"),import.meta.url).toString()})),s("27Lyk").register(JSON.parse('{"dZpbI":"index.69a4dfde.js","bUnx8":"StarTie.1cb971e6.svg","2qMS6":"StarWins.925a67b3.svg","jPdlM":"StarLoss.9846907e.svg","eKR93":"rock.2312c16f.png","5uXOC":"paper.343f43f3.png","52wjt":"scissors.ad4321ba.png"}'));const a={data:{currentGame:{computerPlay:"",myPlay:""},history:{myScore:0,computerScore:0}},getState(){return this.data},getStorage(){const n=localStorage,e=JSON.parse(n.getItem("data"));if(e)return this.data.history=e},setState(n){console.log("soy state.setState, y mi newState es:",n),this.data=n,this.saveDataInLocalStorage()},setScore(){console.log("soy state.setScore()");const n=this.getState(),e=n.currentGame.myPlay,t=n.currentGame.computerPlay,o=this.whoWins(e,t),s=n.history.myScore,a=n.history.computerScore;return"wins"===o?this.setState({...n,history:{myScore:s+1,computerScore:a}}):"loss"===o?this.setState({...n,history:{myScore:s,computerScore:a+1}}):void 0},setMove(n){console.log("soy setMove y mi move es: ",n);const e=this.getState();e.currentGame.myPlay=n;e.currentGame.computerPlay=["hands","rock","scissors"][Math.floor(3*Math.random())],this.setScore()},whoWins(n,e){if(["scissors"==n&&"scissors"==e,"paper"==n&&"paper"==e,"rock"==n&&"rock"==e].includes(!0))return"tie";return["scissors"==n&&"paper"==e,"paper"==n&&"rock"==e,"rock"==n&&"scissors"==e].includes(!0)?"wins":"loss"},saveDataInLocalStorage(){const n=this.getState().history;localStorage.setItem("data",JSON.stringify(n))}};const r=[{path:/welcome/,component:function(n){console.log("soy initWelcome y mi param es: ",n);const e=document.createElement("div");return e.className="container",e.innerHTML='\n  <text-comp variant=\'title\'>¿Piedra, papel, o tijera?</text-comp>\n  <button-comp class=\'button\'>Empezar</button-comp>\n  \n  <div class="container__hand">\n      <hands-comp hand="scissors"></hands-comp>\n      <hands-comp hand="rock"></hands-comp>\n      <hands-comp hand="paper"></hands-comp>\n  </div>',e.querySelector(".button").addEventListener("click",(()=>{n.goTo("/instructions")})),e}},{path:/instructions/,component:function(n){console.log("soy initInstructions y mi param es: ",n);const e=document.createElement("div");return e.className="container",e.innerHTML='\n  <text-comp variant=\'large\'>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-comp>\n  <button-comp class=\'button\'>Jugar</button-comp>\n  \n  <div class="container__hand">\n      <hands-comp hand="scissors"></hands-comp>\n      <hands-comp hand="rock"></hands-comp>\n      <hands-comp hand="paper"></hands-comp>\n  </div>',e.querySelector(".button").addEventListener("click",(()=>{n.goTo("/game")})),e}},{path:/game/,component:function(n){console.log("soy initGame y mi param es: ",n);let e=3;const t=setInterval((()=>{const s=o.querySelector(".master-circle");e--,s.textContent=String(e),console.log("counter: ",e),e<0&&(clearInterval(t),n.goTo("/instructions"))}),1e3),o=document.createElement("div");o.className="container",o.innerHTML=`\n    <div class="hands__top">\n      <hands-comp hand="rock" class="rock__top hand-display-none"></hands-comp>\n      <hands-comp hand="paper" class="paper__top hand-display-none"></hands-comp>\n      <hands-comp hand="scissors" class="scissors__top hand-display-none"></hands-comp>\n    </div>\n\n    <div class="master-circle">${e}</div>\n    \n    \n    <div class="container__hand">\n      <hands-comp hand="scissors" class="scissors__bottom disabled"></hands-comp>\n      <hands-comp hand="rock" class="rock__bottom disabled"></hands-comp>\n      <hands-comp hand="paper" class="paper__bottom disabled"></hands-comp>\n    </div>\n    `;const s=o.querySelector(".container__hand").children;for(const n of s)n.addEventListener("click",(()=>{const e=n.getAttribute("hand");clearInterval(t),"scissors"===e?(a.setMove("scissors"),d("scissors")):"rock"===e?(a.setMove("rock"),d("rock")):"paper"===e&&(a.setMove("paper"),d("paper"))}));const r=o.querySelector(".scissors__bottom"),i=o.querySelector(".paper__bottom"),c=o.querySelector(".rock__bottom");function d(n){"scissors"===n?(r.classList.remove("disabled"),r.classList.add("actived"),setTimeout((()=>{i.classList.add("hand-display-none"),c.classList.add("hand-display-none")}),3500)):"rock"===n?(c.classList.remove("disabled"),c.classList.add("actived"),setTimeout((()=>{i.classList.add("hand-display-none"),r.classList.add("hand-display-none")}),3500)):"paper"===n&&(i.classList.remove("disabled"),i.classList.add("actived"),setTimeout((()=>{r.classList.add("hand-display-none"),c.classList.add("hand-display-none")}),3500))}const l=o.querySelector(".master-circle"),p=o.querySelector(".container__hand"),m=o.querySelector(".rock__top"),h=o.querySelector(".paper__top"),u=o.querySelector(".scissors__top");setTimeout((()=>{const e=a.getState().currentGame.computerPlay;l.remove(),p.classList.add("active-hands"),p.classList.add("actived-hands-top"),"scissors"==e&&u.classList.add("actived-hand-top"),"rock"==e&&m.classList.add("actived-hand-top"),"paper"==e&&h.classList.add("actived-hand-top"),setTimeout((()=>{n.goTo("./results")}),4e3)}),4e3);const g=document.createElement("style");return g.innerHTML='\n  .hands__top {\n    transform: rotate(180deg);\n    display: flex;\n    align-items: center;\n    position: relative;\n    top: -35px;\n    background-red: red;\n  }\n  .actived {\n    display: inherit;\n    transform: translateY(-30px);\n    transition: all 0.5s;\n  }\n  .disabled {\n    opacity: 60%;\n  }\n  .hand-display-none {\n    display: none;\n  }\n  .active-hands{\n    width\n  }\n  .actived-hands-top {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  .actived-hand-top {\n    display: flex;\n    transform: translateY(-30px);\n    transition: all 0.5s;\n  }\n  hands-comp:hover {\n    cursor:pointer\n  }\n\n  .master-circle {\n    width: 150px;\n    height: 150px;\n    box-shadow: 0 0 0 1.875vmin, inset 3.75vmin 3.75vmin 7.5vmin rgba(0, 0, 0, 0.125), 3.75vmin 3.75vmin 7.5vmin rgba(0, 0, 0, 0.125);\n    font-size: 100px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    color: #000;\n    border-radius: 50%;\n    border: 30px;\n    font-weight: 700;\n  }\n\n  @media (min-width: 420px) {\n    .master-circle {\n      width: 250px;\n      height: 250px;\n      box-shadow: 0 0 0 1.25vmin, inset 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125), 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125);\n      font-size: 25vmin;\n      text-shadow: 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125);\n    }\n  }\n\n  .master-circle:before {\n    content: "";\n    -webkit-animation: 5s 1s forwards timer_countdown, 1s 0.875s 15 timer_beat;\n            animation: 5s 1s forwards timer_countdown, 1s 0.875s 15 timer_beat;\n    color: #000;\n  }\n  @-webkit-keyframes timer_beat {\n    40%, 80% {\n      transform: none;\n    }\n    50% {\n      transform: scale(1.125);\n    }\n  }\n  @keyframes timer_beat {\n    40%, 80% {\n      transform: none;\n    }\n    50% {\n      transform: scale(1.125);\n    }\n  }\n  .master-circle:after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -100;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.125);\n    -webkit-animation: 5s 1s linear forwards timer_indicator;\n            animation: 5s 1s linear forwards timer_indicator;\n  }\n  @-webkit-keyframes timer_indicator {\n    100% {\n      transform: translateY(100%);\n    }\n  }\n  @keyframes timer_indicator {\n    100% {\n      transform: translateY(100%);\n    }\n  }\n}\n',o.appendChild(g),o}},{path:/results/,component:function(n){console.log("soy initResults y mi param es: ",n);const e=document.createElement("div");e.className="container__results";const t=a.getState(),o=t.currentGame,r=o.myPlay,i=o.computerPlay,c=a.whoWins(r,i);let d,l;const p={tie:s("99MHT"),wins:s("2Xbar"),loss:s("k3V2l")};"wins"===c?(l=p.wins,d="rgba(136, 137, 73, 0.6)"):"loss"===c?(l=p.loss,d="rgba(137, 73, 73, 0.6)"):(l=p.tie,d="rgba(106, 112, 101, 0.6)"),e.innerHTML=`\n  <div>\n    <img class="img__result" src="${l}">\n  </div>\n\n  <div class="board">\n\n    <div>\n        <h3>Score</h3>\n    </div>\n\n    <text-comp>Vos: ${t.history.myScore}</text-comp>\n    <text-comp>Maquina: ${t.history.computerScore}</text-comp>\n    \n  </div>\n\n  <button-comp class="button">Volver a Jugar</button-comp>\n  <button-comp class="button back">Volver al Inicio</button-comp>\n  `,e.querySelector(".button").addEventListener("click",(()=>{n.goTo("./game")})),e.querySelector(".back").addEventListener("click",(()=>{n.goTo("./welcome")}));const m=document.createElement("style");return m.innerHTML=`\n    .container__results {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100vh;\n      justify-content: center;\n      padding-top: 40px;\n      background-color: ${d};\n    }\n    .img__result {\n      height: 180px;\n    }\n    .board {\n      height: 190px;\n      width: 230px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      border: 10px solid #000;\n      border-radius: 10px;\n      margin: 5px 0;\n      background-color: #fff;\n    }\n    .board  h3 {\n      text-align: center;\n      font-size: 40px;\n      font-weight: 700;\n      height: 100%;\n    }\n    .board > text-comp {\n      align-self: flex-end;\n    }\n    .back {\n      margin-top: 10px;\n    }\n  `,e.appendChild(m),e}}];customElements.define("text-comp",class extends HTMLElement{constructor(){super(),this.render(),console.log("soy text-comp")}render(){const n=this.attachShadow({mode:"open"}),e=this.getAttribute("variant")||"body",t=document.createElement("div"),o=document.createElement("style");o.innerHTML="\n      .text {\n        padding-top: 40px;\n        text-align: center\n      }\n\n      .title {\n        font-size: 80px;\n        margin-bottom: 100px;\n        color: #009048;\n        max-width: 350px;\n        line-height: 85px;\n        font-family: 'Fredoka One', cursive;\n      }\n\n      @media only screen and (min-width: 300px) {\n        .title {\n          margin-bottom: 50px;\n        }\n      }\n\n      .body {\n        font-size: 30px;\n        padding-right: 20px;\n        padding-top: 0;\n      }\n\n      .large {\n        font-size: 40px;\n        line-height: 60px;\n        margin-bottom: 30px;\n        max-width: 400px;\n      }\n      \n      @media only screen and (min-width: 426px) {\n        .large {\n          font-size: 50px;\n        }\n      }\n      ",t.textContent=this.textContent,t.className=e+" text",n.appendChild(t),n.appendChild(o)}}),customElements.define("button-comp",class extends HTMLElement{constructor(){super(),this.render(),console.log("soy button-comp")}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("button"),t=document.createElement("style");e.textContent=this.textContent,e.className="btn",t.innerHTML='\n      .btn{\n        width: 322px;\n        height: 87px;\n        background-color: #006CFC;\n        color: #ffff;\n        font-size: 40px;\n        font-family: "Patrick Hand", sans-serif;\n        border: 10px solid #001997;\n        border-radius: 10px;\n      }\n\n      .btn:hover {\n        cursor: pointer;\n      }\n    \n      ',n.appendChild(e),n.appendChild(t)}});const i={rock:s("9YnJC"),paper:s("fxDpH"),scissors:s("l9mqm")};customElements.define("hands-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style"),o=this.getAttribute("hand");e.innerHTML=`\n      <img class="hand" src="${i[o]}" />\n      `,t.innerHTML="\n      .hand {\n        width: 40px;\n      }\n      @media only screen and (min-width: 370px) {\n        .hand {\n          width: 60px;\n        }\n      }\n      @media only screen and (min-width: 420px) {\n        .hand {\n          width: 80px;\n        }\n      }\n      \n        ",n.appendChild(e),n.appendChild(t)}}),function(){a.getStorage();!function(n){function e(n){history.pushState({},"",n),t(n)}function t(t){for(const o of r)if(o.path.test(t)){const t=o.component({goTo:e});n.firstChild?.remove(),n.appendChild(t)}}"/"==location.pathname||"/welcome"==location.pathname||"/desafio-final-mod5"==location.pathname?e("/welcome"):t(location.pathname),window.onpopstate=()=>{t(location.pathname)}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.69a4dfde.js.map
