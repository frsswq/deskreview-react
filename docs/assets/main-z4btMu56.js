const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BlogPost-CV5G3frd.js","assets/react-markdown-DL4AOBV-.js","assets/vendor-C-q9OyUs.js","assets/styled-components-CgetkSgC.js","assets/@radix-ui/react-icons-88m-rOiV.js","assets/date-fns-B4QYC8g5.js","assets/remark-gfm-ClnCoDhK.js"])))=>i.map(i=>d[i]);
import{p as y,M as zh}from"./react-markdown-DL4AOBV-.js";import{a as Dh,b as _h,u as Zf,r as Me,c as jh,R as Mh,L as Oh,d as Tl,e as Bh,B as Hh}from"./vendor-C-q9OyUs.js";import{f as Uh,d as F}from"./styled-components-CgetkSgC.js";import{C as Rh,E as Nh,a as qh,I as Ch}from"./@radix-ui/react-icons-88m-rOiV.js";import{f as Kf,c as Gh}from"./date-fns-B4QYC8g5.js";import{r as Yh}from"./remark-gfm-ClnCoDhK.js";(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))h(A);new MutationObserver(A=>{for(const R of A)if(R.type==="childList")for(const O of R.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&h(O)}).observe(document,{childList:!0,subtree:!0});function z(A){const R={};return A.integrity&&(R.integrity=A.integrity),A.referrerPolicy&&(R.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?R.credentials="include":A.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function h(A){if(A.ep)return;A.ep=!0;const R=z(A);fetch(A.href,R)}})();var Ir={exports:{}},kl={},Pr={exports:{}},tc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Lh(){return Yf||(Yf=1,function(k){function E(S,B){var j=S.length;S.push(B);t:for(;0<j;){var $=j-1>>>1,rt=S[$];if(0<A(rt,B))S[$]=B,S[j]=rt,j=$;else break t}}function z(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var B=S[0],j=S.pop();if(j!==B){S[0]=j;t:for(var $=0,rt=S.length,Ue=rt>>>1;$<Ue;){var ce=2*($+1)-1,ga=S[ce],G=ce+1,qt=S[G];if(0>A(ga,j))G<rt&&0>A(qt,ga)?(S[$]=qt,S[G]=j,$=G):(S[$]=ga,S[ce]=j,$=ce);else if(G<rt&&0>A(qt,j))S[$]=qt,S[G]=j,$=G;else break t}}return B}function A(S,B){var j=S.sortIndex-B.sortIndex;return j!==0?j:S.id-B.id}if(k.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;k.unstable_now=function(){return R.now()}}else{var O=Date,et=O.now();k.unstable_now=function(){return O.now()-et}}var X=[],st=[],da=1,P=null,ut=3,xt=!1,$t=!1,ma=!1,Oe=typeof setTimeout=="function"?setTimeout:null,Be=typeof clearTimeout=="function"?clearTimeout:null,It=typeof setImmediate<"u"?setImmediate:null;function ne(S){for(var B=z(st);B!==null;){if(B.callback===null)h(st);else if(B.startTime<=S)h(st),B.sortIndex=B.expirationTime,E(X,B);else break;B=z(st)}}function Sn(S){if(ma=!1,ne(S),!$t)if(z(X)!==null)$t=!0,ue();else{var B=z(st);B!==null&&re(Sn,B.startTime-S)}}var le=!1,Pt=-1,Al=5,He=-1;function _(){return!(k.unstable_now()-He<Al)}function V(){if(le){var S=k.unstable_now();He=S;var B=!0;try{t:{$t=!1,ma&&(ma=!1,Be(Pt),Pt=-1),xt=!0;var j=ut;try{a:{for(ne(S),P=z(X);P!==null&&!(P.expirationTime>S&&_());){var $=P.callback;if(typeof $=="function"){P.callback=null,ut=P.priorityLevel;var rt=$(P.expirationTime<=S);if(S=k.unstable_now(),typeof rt=="function"){P.callback=rt,ne(S),B=!0;break a}P===z(X)&&h(X),ne(S)}else h(X);P=z(X)}if(P!==null)B=!0;else{var Ue=z(st);Ue!==null&&re(Sn,Ue.startTime-S),B=!1}}break t}finally{P=null,ut=j,xt=!1}B=void 0}}finally{B?ha():le=!1}}}var ha;if(typeof It=="function")ha=function(){It(V)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,ie=Tn.port2;Tn.port1.onmessage=V,ha=function(){ie.postMessage(null)}}else ha=function(){Oe(V,0)};function ue(){le||(le=!0,ha())}function re(S,B){Pt=Oe(function(){S(k.unstable_now())},B)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(S){S.callback=null},k.unstable_continueExecution=function(){$t||xt||($t=!0,ue())},k.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Al=0<S?Math.floor(1e3/S):5},k.unstable_getCurrentPriorityLevel=function(){return ut},k.unstable_getFirstCallbackNode=function(){return z(X)},k.unstable_next=function(S){switch(ut){case 1:case 2:case 3:var B=3;break;default:B=ut}var j=ut;ut=B;try{return S()}finally{ut=j}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=function(){},k.unstable_runWithPriority=function(S,B){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var j=ut;ut=S;try{return B()}finally{ut=j}},k.unstable_scheduleCallback=function(S,B,j){var $=k.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?$+j:$):j=$,S){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=j+rt,S={id:da++,callback:B,priorityLevel:S,startTime:j,expirationTime:rt,sortIndex:-1},j>$?(S.sortIndex=j,E(st,S),z(X)===null&&S===z(st)&&(ma?(Be(Pt),Pt=-1):ma=!0,re(Sn,j-$))):(S.sortIndex=rt,E(X,S),$t||xt||($t=!0,ue())),S},k.unstable_shouldYield=_,k.unstable_wrapCallback=function(S){var B=ut;return function(){var j=ut;ut=B;try{return S.apply(this,arguments)}finally{ut=j}}}}(tc)),tc}var Lf;function Vh(){return Lf||(Lf=1,Pr.exports=Lh()),Pr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function Xh(){if(Vf)return kl;Vf=1;var k=Vh(),E=Dh(),z=_h();function h(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var R=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),et=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),ut=Symbol.for("react.consumer"),xt=Symbol.for("react.context"),$t=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Be=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),Sn=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Pt(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var Al=Symbol.for("react.client.reference");function He(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Al?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case et:return"Portal";case da:return"Profiler";case st:return"StrictMode";case ma:return"Suspense";case Oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xt:return(t.displayName||"Context")+".Provider";case ut:return(t._context.displayName||"Context")+".Consumer";case $t:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Be:return a=t.displayName||null,a!==null?a:He(t.type)||"Memo";case It:a=t._payload,t=t._init;try{return He(t(a))}catch{}}return null}var _=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=Object.assign,ha,Tn;function ie(t){if(ha===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);ha=a&&a[1]||"",Tn=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ha+t+Tn}var ue=!1;function re(t,a){if(!t||ue)return"";ue=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(g){var m=g}Reflect.construct(t,[],v)}else{try{v.call()}catch(g){m=g}t.call(v.prototype)}}else{try{throw Error()}catch(g){m=g}(v=t())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var c=u.split(`
`),o=r.split(`
`);for(l=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;if(n===c.length||l===o.length)for(n=c.length-1,l=o.length-1;1<=n&&0<=l&&c[n]!==o[l];)l--;for(;1<=n&&0<=l;n--,l--)if(c[n]!==o[l]){if(n!==1||l!==1)do if(n--,l--,0>l||c[n]!==o[l]){var p=`
`+c[n].replace(" at new "," at ");return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",t.displayName)),p}while(1<=n&&0<=l);break}}}finally{ue=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?ie(e):""}function S(t){switch(t.tag){case 26:case 27:case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function B(t){try{var a="";do a+=S(t),t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function j(t){var a=t,e=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,a.flags&4098&&(e=a.return),t=a.return;while(t)}return a.tag===3?e:null}function $(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function rt(t){if(j(t)!==t)throw Error(h(188))}function Ue(t){var a=t.alternate;if(!a){if(a=j(t),a===null)throw Error(h(188));return a!==t?null:t}for(var e=t,n=a;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){e=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return rt(l),t;if(i===n)return rt(l),a;i=i.sibling}throw Error(h(188))}if(e.return!==n.return)e=l,n=i;else{for(var u=!1,r=l.child;r;){if(r===e){u=!0,e=l,n=i;break}if(r===n){u=!0,n=l,e=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===e){u=!0,e=i,n=l;break}if(r===n){u=!0,n=i,e=l;break}r=r.sibling}if(!u)throw Error(h(189))}}if(e.alternate!==n)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?t:a}function ce(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=ce(t),a!==null)return a;t=t.sibling}return null}var ga=Array.isArray,G=z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt={pending:!1,data:null,method:null,action:null},Li=[],Re=-1;function la(t){return{current:t}}function gt(t){0>Re||(t.current=Li[Re],Li[Re]=null,Re--)}function I(t,a){Re++,Li[Re]=t.current,t.current=a}var ia=la(null),xn=la(null),Ba=la(null),El=la(null);function zl(t,a){switch(I(Ba,a),I(xn,t),I(ia,null),t=a.nodeType,t){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?pf(a):0;break;default:if(t=t===8?a.parentNode:a,a=t.tagName,t=t.namespaceURI)t=pf(t),a=yf(t,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}gt(ia),I(ia,a)}function Ne(){gt(ia),gt(xn),gt(Ba)}function Vi(t){t.memoizedState!==null&&I(El,t);var a=ia.current,e=yf(a,t.type);a!==e&&(I(xn,t),I(ia,e))}function Dl(t){xn.current===t&&(gt(ia),gt(xn)),El.current===t&&(gt(El),gl._currentValue=qt)}var Xi=Object.prototype.hasOwnProperty,Qi=k.unstable_scheduleCallback,Zi=k.unstable_cancelCallback,id=k.unstable_shouldYield,ud=k.unstable_requestPaint,ua=k.unstable_now,rd=k.unstable_getCurrentPriorityLevel,nc=k.unstable_ImmediatePriority,lc=k.unstable_UserBlockingPriority,_l=k.unstable_NormalPriority,cd=k.unstable_LowPriority,ic=k.unstable_IdlePriority,sd=k.log,od=k.unstable_setDisableYieldValue,wn=null,Mt=null;function fd(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(wn,t,void 0,(t.current.flags&128)===128)}catch{}}function Ha(t){if(typeof sd=="function"&&od(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(wn,t)}catch{}}var Ot=Math.clz32?Math.clz32:hd,dd=Math.log,md=Math.LN2;function hd(t){return t>>>=0,t===0?32:31-(dd(t)/md|0)|0}var jl=128,Ml=4194304;function se(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ol(t,a){var e=t.pendingLanes;if(e===0)return 0;var n=0,l=t.suspendedLanes,i=t.pingedLanes,u=t.warmLanes;t=t.finishedLanes!==0;var r=e&134217727;return r!==0?(e=r&~l,e!==0?n=se(e):(i&=r,i!==0?n=se(i):t||(u=r&~u,u!==0&&(n=se(u))))):(r=e&~l,r!==0?n=se(r):i!==0?n=se(i):t||(u=e&~u,u!==0&&(n=se(u)))),n===0?0:a!==0&&a!==n&&!(a&l)&&(l=n&-n,u=a&-a,l>=u||l===32&&(u&4194176)!==0)?a:n}function An(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function gd(t,a){switch(t){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uc(){var t=jl;return jl<<=1,!(jl&4194176)&&(jl=128),t}function rc(){var t=Ml;return Ml<<=1,!(Ml&62914560)&&(Ml=4194304),t}function Ki(t){for(var a=[],e=0;31>e;e++)a.push(t);return a}function En(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pd(t,a,e,n,l,i){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var r=t.entanglements,c=t.expirationTimes,o=t.hiddenUpdates;for(e=u&~e;0<e;){var p=31-Ot(e),v=1<<p;r[p]=0,c[p]=-1;var m=o[p];if(m!==null)for(o[p]=null,p=0;p<m.length;p++){var g=m[p];g!==null&&(g.lane&=-536870913)}e&=~v}n!==0&&cc(t,n,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~a))}function cc(t,a,e){t.pendingLanes|=a,t.suspendedLanes&=~a;var n=31-Ot(a);t.entangledLanes|=a,t.entanglements[n]=t.entanglements[n]|1073741824|e&4194218}function sc(t,a){var e=t.entangledLanes|=a;for(t=t.entanglements;e;){var n=31-Ot(e),l=1<<n;l&a|t[n]&a&&(t[n]|=a),e&=~l}}function oc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function fc(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Uf(t.type))}function yd(t,a){var e=G.p;try{return G.p=t,a()}finally{G.p=e}}var Ua=Math.random().toString(36).slice(2),wt="__reactFiber$"+Ua,Dt="__reactProps$"+Ua,qe="__reactContainer$"+Ua,Ji="__reactEvents$"+Ua,bd="__reactListeners$"+Ua,vd="__reactHandles$"+Ua,dc="__reactResources$"+Ua,zn="__reactMarker$"+Ua;function Wi(t){delete t[wt],delete t[Dt],delete t[Ji],delete t[bd],delete t[vd]}function oe(t){var a=t[wt];if(a)return a;for(var e=t.parentNode;e;){if(a=e[qe]||e[wt]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(t=kf(t);t!==null;){if(e=t[wt])return e;t=kf(t)}return a}t=e,e=t.parentNode}return null}function Ce(t){if(t=t[wt]||t[qe]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function Dn(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(h(33))}function Ge(t){var a=t[dc];return a||(a=t[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function pt(t){t[zn]=!0}var mc=new Set,hc={};function fe(t,a){Ye(t,a),Ye(t+"Capture",a)}function Ye(t,a){for(hc[t]=a,t=0;t<a.length;t++)mc.add(a[t])}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gc={},pc={};function Sd(t){return Xi.call(pc,t)?!0:Xi.call(gc,t)?!1:kd.test(t)?pc[t]=!0:(gc[t]=!0,!1)}function Bl(t,a,e){if(Sd(a))if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+e)}}function Hl(t,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+e)}}function ya(t,a,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(a,e,""+n)}}function Ct(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yc(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Td(t){var a=yc(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),n=""+t[a];if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,i=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Ul(t){t._valueTracker||(t._valueTracker=Td(t))}function bc(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var e=a.getValue(),n="";return t&&(n=yc(t)?t.checked?"true":"false":t.value),t=n,t!==e?(a.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xd=/[\n"\\]/g;function Gt(t){return t.replace(xd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Fi(t,a,e,n,l,i,u,r){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),a!=null?u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Ct(a)):t.value!==""+Ct(a)&&(t.value=""+Ct(a)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),a!=null?$i(t,u,Ct(a)):e!=null?$i(t,u,Ct(e)):n!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+Ct(r):t.removeAttribute("name")}function vc(t,a,e,n,l,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),a!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||a!=null))return;e=e!=null?""+Ct(e):"",a=a!=null?""+Ct(a):e,r||a===t.value||(t.value=a),t.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=r?t.checked:!!n,t.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u)}function $i(t,a,e){a==="number"&&Rl(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Le(t,a,e,n){if(t=t.options,a){a={};for(var l=0;l<e.length;l++)a["$"+e[l]]=!0;for(e=0;e<t.length;e++)l=a.hasOwnProperty("$"+t[e].value),t[e].selected!==l&&(t[e].selected=l),l&&n&&(t[e].defaultSelected=!0)}else{for(e=""+Ct(e),a=null,l=0;l<t.length;l++){if(t[l].value===e){t[l].selected=!0,n&&(t[l].defaultSelected=!0);return}a!==null||t[l].disabled||(a=t[l])}a!==null&&(a.selected=!0)}}function kc(t,a,e){if(a!=null&&(a=""+Ct(a),a!==t.value&&(t.value=a),e==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=e!=null?""+Ct(e):""}function Sc(t,a,e,n){if(a==null){if(n!=null){if(e!=null)throw Error(h(92));if(ga(n)){if(1<n.length)throw Error(h(93));n=n[0]}e=n}e==null&&(e=""),a=e}e=Ct(a),t.defaultValue=e,n=t.textContent,n===e&&n!==""&&n!==null&&(t.value=n)}function Ve(t,a){if(a){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=a;return}}t.textContent=a}var wd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tc(t,a,e){var n=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":n?t.setProperty(a,e):typeof e!="number"||e===0||wd.has(a)?a==="float"?t.cssFloat=e:t[a]=(""+e).trim():t[a]=e+"px"}function xc(t,a,e){if(a!=null&&typeof a!="object")throw Error(h(62));if(t=t.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var l in a)n=a[l],a.hasOwnProperty(l)&&e[l]!==n&&Tc(t,l,n)}else for(var i in a)a.hasOwnProperty(i)&&Tc(t,i,a[i])}function Ii(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ed=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return Ed.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Pi=null;function tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xe=null,Qe=null;function wc(t){var a=Ce(t);if(a&&(t=a.stateNode)){var e=t[Dt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Fi(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Gt(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var n=e[a];if(n!==t&&n.form===t.form){var l=n[Dt]||null;if(!l)throw Error(h(90));Fi(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<e.length;a++)n=e[a],n.form===t.form&&bc(n)}break t;case"textarea":kc(t,e.value,e.defaultValue);break t;case"select":a=e.value,a!=null&&Le(t,!!e.multiple,a,!1)}}}var au=!1;function Ac(t,a,e){if(au)return t(a,e);au=!0;try{var n=t(a);return n}finally{if(au=!1,(Xe!==null||Qe!==null)&&(ki(),Xe&&(a=Xe,t=Qe,Qe=Xe=null,wc(a),t)))for(a=0;a<t.length;a++)wc(t[a])}}function _n(t,a){var e=t.stateNode;if(e===null)return null;var n=e[Dt]||null;if(n===null)return null;e=n[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(h(231,a,typeof e));return e}var eu=!1;if(pa)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){eu=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{eu=!1}var Ra=null,nu=null,ql=null;function Ec(){if(ql)return ql;var t,a=nu,e=a.length,n,l="value"in Ra?Ra.value:Ra.textContent,i=l.length;for(t=0;t<e&&a[t]===l[t];t++);var u=e-t;for(n=1;n<=u&&a[e-n]===l[i-n];n++);return ql=l.slice(t,1<n?1-n:void 0)}function Cl(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function zc(){return!1}function _t(t){function a(e,n,l,i,u){this._reactName=e,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(e=t[r],this[r]=e?e(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gl:zc,this.isPropagationStopped=zc,this}return V(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),a}var de={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=_t(de),Mn=V({},de,{view:0,detail:0}),zd=_t(Mn),lu,iu,On,Ll=V({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==On&&(On&&t.type==="mousemove"?(lu=t.screenX-On.screenX,iu=t.screenY-On.screenY):iu=lu=0,On=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),Dc=_t(Ll),Dd=V({},Ll,{dataTransfer:0}),_d=_t(Dd),jd=V({},Mn,{relatedTarget:0}),uu=_t(jd),Md=V({},de,{animationName:0,elapsedTime:0,pseudoElement:0}),Od=_t(Md),Bd=V({},de,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hd=_t(Bd),Ud=V({},de,{data:0}),_c=_t(Ud),Rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=qd[t])?!!a[t]:!1}function ru(){return Cd}var Gd=V({},Mn,{key:function(t){if(t.key){var a=Rd[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Yd=_t(Gd),Ld=V({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=_t(Ld),Vd=V({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Xd=_t(Vd),Qd=V({},de,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zd=_t(Qd),Kd=V({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=_t(Kd),Wd=V({},de,{newState:0,oldState:0}),Fd=_t(Wd),$d=[9,13,27,32],cu=pa&&"CompositionEvent"in window,Bn=null;pa&&"documentMode"in document&&(Bn=document.documentMode);var Id=pa&&"TextEvent"in window&&!Bn,Mc=pa&&(!cu||Bn&&8<Bn&&11>=Bn),Oc=" ",Bc=!1;function Hc(t,a){switch(t){case"keyup":return $d.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ze=!1;function Pd(t,a){switch(t){case"compositionend":return Uc(a);case"keypress":return a.which!==32?null:(Bc=!0,Oc);case"textInput":return t=a.data,t===Oc&&Bc?null:t;default:return null}}function tm(t,a){if(Ze)return t==="compositionend"||!cu&&Hc(t,a)?(t=Ec(),ql=nu=Ra=null,Ze=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Mc&&a.locale!=="ko"?null:a.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!am[t.type]:a==="textarea"}function Nc(t,a,e,n){Xe?Qe?Qe.push(n):Qe=[n]:Xe=n,a=Ai(a,"onChange"),0<a.length&&(e=new Yl("onChange","change",null,e,n),t.push({event:e,listeners:a}))}var Hn=null,Un=null;function em(t){ff(t,0)}function Vl(t){var a=Dn(t);if(bc(a))return t}function qc(t,a){if(t==="change")return a}var Cc=!1;if(pa){var su;if(pa){var ou="oninput"in document;if(!ou){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),ou=typeof Gc.oninput=="function"}su=ou}else su=!1;Cc=su&&(!document.documentMode||9<document.documentMode)}function Yc(){Hn&&(Hn.detachEvent("onpropertychange",Lc),Un=Hn=null)}function Lc(t){if(t.propertyName==="value"&&Vl(Un)){var a=[];Nc(a,Un,t,tu(t)),Ac(em,a)}}function nm(t,a,e){t==="focusin"?(Yc(),Hn=a,Un=e,Hn.attachEvent("onpropertychange",Lc)):t==="focusout"&&Yc()}function lm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Un)}function im(t,a){if(t==="click")return Vl(a)}function um(t,a){if(t==="input"||t==="change")return Vl(a)}function rm(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Bt=typeof Object.is=="function"?Object.is:rm;function Rn(t,a){if(Bt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var e=Object.keys(t),n=Object.keys(a);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var l=e[n];if(!Xi.call(a,l)||!Bt(t[l],a[l]))return!1}return!0}function Vc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xc(t,a){var e=Vc(t);t=0;for(var n;e;){if(e.nodeType===3){if(n=t+e.textContent.length,t<=a&&n>=a)return{node:e,offset:a-t};t=n}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Vc(e)}}function Qc(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Qc(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Zc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Rl(t.document);a instanceof t.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)t=a.contentWindow;else break;a=Rl(t.document)}return a}function fu(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}function cm(t,a){var e=Zc(a);a=t.focusedElem;var n=t.selectionRange;if(e!==a&&a&&a.ownerDocument&&Qc(a.ownerDocument.documentElement,a)){if(n!==null&&fu(a)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=a.textContent.length,i=Math.min(n.start,l);n=n.end===void 0?i:Math.min(n.end,l),!e.extend&&i>n&&(l=n,n=i,i=l),l=Xc(a,i);var u=Xc(a,n);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sm=pa&&"documentMode"in document&&11>=document.documentMode,Ke=null,du=null,Nn=null,mu=!1;function Kc(t,a,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;mu||Ke==null||Ke!==Rl(n)||(n=Ke,"selectionStart"in n&&fu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Nn&&Rn(Nn,n)||(Nn=n,n=Ai(du,"onSelect"),0<n.length&&(a=new Yl("onSelect","select",null,a,e),t.push({event:a,listeners:n}),a.target=Ke)))}function me(t,a){var e={};return e[t.toLowerCase()]=a.toLowerCase(),e["Webkit"+t]="webkit"+a,e["Moz"+t]="moz"+a,e}var Je={animationend:me("Animation","AnimationEnd"),animationiteration:me("Animation","AnimationIteration"),animationstart:me("Animation","AnimationStart"),transitionrun:me("Transition","TransitionRun"),transitionstart:me("Transition","TransitionStart"),transitioncancel:me("Transition","TransitionCancel"),transitionend:me("Transition","TransitionEnd")},hu={},Jc={};pa&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Je.animationend.animation,delete Je.animationiteration.animation,delete Je.animationstart.animation),"TransitionEvent"in window||delete Je.transitionend.transition);function he(t){if(hu[t])return hu[t];if(!Je[t])return t;var a=Je[t],e;for(e in a)if(a.hasOwnProperty(e)&&e in Jc)return hu[t]=a[e];return t}var Wc=he("animationend"),Fc=he("animationiteration"),$c=he("animationstart"),om=he("transitionrun"),fm=he("transitionstart"),dm=he("transitioncancel"),Ic=he("transitionend"),Pc=new Map,ts="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ta(t,a){Pc.set(t,a),fe(a,[t])}var Yt=[],We=0,gu=0;function Xl(){for(var t=We,a=gu=We=0;a<t;){var e=Yt[a];Yt[a++]=null;var n=Yt[a];Yt[a++]=null;var l=Yt[a];Yt[a++]=null;var i=Yt[a];if(Yt[a++]=null,n!==null&&l!==null){var u=n.pending;u===null?l.next=l:(l.next=u.next,u.next=l),n.pending=l}i!==0&&as(e,l,i)}}function Ql(t,a,e,n){Yt[We++]=t,Yt[We++]=a,Yt[We++]=e,Yt[We++]=n,gu|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function pu(t,a,e,n){return Ql(t,a,e,n),Zl(t)}function Na(t,a){return Ql(t,null,null,a),Zl(t)}function as(t,a,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e);for(var l=!1,i=t.return;i!==null;)i.childLanes|=e,n=i.alternate,n!==null&&(n.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;l&&a!==null&&t.tag===3&&(i=t.stateNode,l=31-Ot(e),i=i.hiddenUpdates,t=i[l],t===null?i[l]=[a]:t.push(a),a.lane=e|536870912)}function Zl(t){if(50<cl)throw cl=0,Tr=null,Error(h(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Fe={},es=new WeakMap;function Lt(t,a){if(typeof t=="object"&&t!==null){var e=es.get(t);return e!==void 0?e:(a={value:t,source:a,stack:B(a)},es.set(t,a),a)}return{value:t,source:a,stack:B(a)}}var $e=[],Ie=0,Kl=null,Jl=0,Vt=[],Xt=0,ge=null,ba=1,va="";function pe(t,a){$e[Ie++]=Jl,$e[Ie++]=Kl,Kl=t,Jl=a}function ns(t,a,e){Vt[Xt++]=ba,Vt[Xt++]=va,Vt[Xt++]=ge,ge=t;var n=ba;t=va;var l=32-Ot(n)-1;n&=~(1<<l),e+=1;var i=32-Ot(a)+l;if(30<i){var u=l-l%5;i=(n&(1<<u)-1).toString(32),n>>=u,l-=u,ba=1<<32-Ot(a)+l|e<<l|n,va=i+t}else ba=1<<i|e<<l|n,va=t}function yu(t){t.return!==null&&(pe(t,1),ns(t,1,0))}function bu(t){for(;t===Kl;)Kl=$e[--Ie],$e[Ie]=null,Jl=$e[--Ie],$e[Ie]=null;for(;t===ge;)ge=Vt[--Xt],Vt[Xt]=null,va=Vt[--Xt],Vt[Xt]=null,ba=Vt[--Xt],Vt[Xt]=null}var Et=null,kt=null,Y=!1,aa=null,ra=!1,vu=Error(h(519));function ye(t){var a=Error(h(418,""));throw Gn(Lt(a,t)),vu}function ls(t){var a=t.stateNode,e=t.type,n=t.memoizedProps;switch(a[wt]=t,a[Dt]=n,e){case"dialog":q("cancel",a),q("close",a);break;case"iframe":case"object":case"embed":q("load",a);break;case"video":case"audio":for(e=0;e<ol.length;e++)q(ol[e],a);break;case"source":q("error",a);break;case"img":case"image":case"link":q("error",a),q("load",a);break;case"details":q("toggle",a);break;case"input":q("invalid",a),vc(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ul(a);break;case"select":q("invalid",a);break;case"textarea":q("invalid",a),Sc(a,n.value,n.defaultValue,n.children),Ul(a)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||n.suppressHydrationWarning===!0||gf(a.textContent,e)?(n.popover!=null&&(q("beforetoggle",a),q("toggle",a)),n.onScroll!=null&&q("scroll",a),n.onScrollEnd!=null&&q("scrollend",a),n.onClick!=null&&(a.onclick=Ei),a=!0):a=!1,a||ye(t)}function is(t){for(Et=t.return;Et;)switch(Et.tag){case 3:case 27:ra=!0;return;case 5:case 13:ra=!1;return;default:Et=Et.return}}function qn(t){if(t!==Et)return!1;if(!Y)return is(t),Y=!0,!1;var a=!1,e;if((e=t.tag!==3&&t.tag!==27)&&((e=t.tag===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Cr(t.type,t.memoizedProps)),e=!e),e&&(a=!0),a&&kt&&ye(t),is(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));t:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(e=t.data,e==="/$"){if(a===0){kt=na(t.nextSibling);break t}a--}else e!=="$"&&e!=="$!"&&e!=="$?"||a++;t=t.nextSibling}kt=null}}else kt=Et?na(t.stateNode.nextSibling):null;return!0}function Cn(){kt=Et=null,Y=!1}function Gn(t){aa===null?aa=[t]:aa.push(t)}var Yn=Error(h(460)),us=Error(h(474)),ku={then:function(){}};function rs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wl(){}function cs(t,a,e){switch(e=t[e],e===void 0?t.push(a):e!==a&&(a.then(Wl,Wl),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,t===Yn?Error(h(483)):t;default:if(typeof a.status=="string")a.then(Wl,Wl);else{if(t=J,t!==null&&100<t.shellSuspendCounter)throw Error(h(482));t=a,t.status="pending",t.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,t===Yn?Error(h(483)):t}throw Ln=a,Yn}}var Ln=null;function ss(){if(Ln===null)throw Error(h(459));var t=Ln;return Ln=null,t}var Pe=null,Vn=0;function Fl(t){var a=Vn;return Vn+=1,Pe===null&&(Pe=[]),cs(Pe,t,a)}function Xn(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function $l(t,a){throw a.$$typeof===R?Error(h(525)):(t=Object.prototype.toString.call(a),Error(h(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function os(t){var a=t._init;return a(t._payload)}function fs(t){function a(f,s){if(t){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function e(f,s){if(!t)return null;for(;s!==null;)a(f,s),s=s.sibling;return null}function n(f){for(var s=new Map;f!==null;)f.key!==null?s.set(f.key,f):s.set(f.index,f),f=f.sibling;return s}function l(f,s){return f=Wa(f,s),f.index=0,f.sibling=null,f}function i(f,s,d){return f.index=d,t?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=33554434,s):d):(f.flags|=33554434,s)):(f.flags|=1048576,s)}function u(f){return t&&f.alternate===null&&(f.flags|=33554434),f}function r(f,s,d,b){return s===null||s.tag!==6?(s=hr(d,f.mode,b),s.return=f,s):(s=l(s,d),s.return=f,s)}function c(f,s,d,b){var T=d.type;return T===X?p(f,s,d.props.children,b,d.key):s!==null&&(s.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===It&&os(T)===s.type)?(s=l(s,d.props),Xn(s,d),s.return=f,s):(s=gi(d.type,d.key,d.props,null,f.mode,b),Xn(s,d),s.return=f,s)}function o(f,s,d,b){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=gr(d,f.mode,b),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function p(f,s,d,b,T){return s===null||s.tag!==7?(s=ze(d,f.mode,b,T),s.return=f,s):(s=l(s,d),s.return=f,s)}function v(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=hr(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case O:return d=gi(s.type,s.key,s.props,null,f.mode,d),Xn(d,s),d.return=f,d;case et:return s=gr(s,f.mode,d),s.return=f,s;case It:var b=s._init;return s=b(s._payload),v(f,s,d)}if(ga(s)||Pt(s))return s=ze(s,f.mode,d,null),s.return=f,s;if(typeof s.then=="function")return v(f,Fl(s),d);if(s.$$typeof===xt)return v(f,di(f,s),d);$l(f,s)}return null}function m(f,s,d,b){var T=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return T!==null?null:r(f,s,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case O:return d.key===T?c(f,s,d,b):null;case et:return d.key===T?o(f,s,d,b):null;case It:return T=d._init,d=T(d._payload),m(f,s,d,b)}if(ga(d)||Pt(d))return T!==null?null:p(f,s,d,b,null);if(typeof d.then=="function")return m(f,s,Fl(d),b);if(d.$$typeof===xt)return m(f,s,di(f,d),b);$l(f,d)}return null}function g(f,s,d,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(d)||null,r(s,f,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case O:return f=f.get(b.key===null?d:b.key)||null,c(s,f,b,T);case et:return f=f.get(b.key===null?d:b.key)||null,o(s,f,b,T);case It:var U=b._init;return b=U(b._payload),g(f,s,d,b,T)}if(ga(b)||Pt(b))return f=f.get(d)||null,p(s,f,b,T,null);if(typeof b.then=="function")return g(f,s,d,Fl(b),T);if(b.$$typeof===xt)return g(f,s,d,di(s,b),T);$l(s,b)}return null}function x(f,s,d,b){for(var T=null,U=null,w=s,D=s=0,vt=null;w!==null&&D<d.length;D++){w.index>D?(vt=w,w=null):vt=w.sibling;var L=m(f,w,d[D],b);if(L===null){w===null&&(w=vt);break}t&&w&&L.alternate===null&&a(f,w),s=i(L,s,D),U===null?T=L:U.sibling=L,U=L,w=vt}if(D===d.length)return e(f,w),Y&&pe(f,D),T;if(w===null){for(;D<d.length;D++)w=v(f,d[D],b),w!==null&&(s=i(w,s,D),U===null?T=w:U.sibling=w,U=w);return Y&&pe(f,D),T}for(w=n(w);D<d.length;D++)vt=g(w,f,D,d[D],b),vt!==null&&(t&&vt.alternate!==null&&w.delete(vt.key===null?D:vt.key),s=i(vt,s,D),U===null?T=vt:U.sibling=vt,U=vt);return t&&w.forEach(function(ee){return a(f,ee)}),Y&&pe(f,D),T}function M(f,s,d,b){if(d==null)throw Error(h(151));for(var T=null,U=null,w=s,D=s=0,vt=null,L=d.next();w!==null&&!L.done;D++,L=d.next()){w.index>D?(vt=w,w=null):vt=w.sibling;var ee=m(f,w,L.value,b);if(ee===null){w===null&&(w=vt);break}t&&w&&ee.alternate===null&&a(f,w),s=i(ee,s,D),U===null?T=ee:U.sibling=ee,U=ee,w=vt}if(L.done)return e(f,w),Y&&pe(f,D),T;if(w===null){for(;!L.done;D++,L=d.next())L=v(f,L.value,b),L!==null&&(s=i(L,s,D),U===null?T=L:U.sibling=L,U=L);return Y&&pe(f,D),T}for(w=n(w);!L.done;D++,L=d.next())L=g(w,f,D,L.value,b),L!==null&&(t&&L.alternate!==null&&w.delete(L.key===null?D:L.key),s=i(L,s,D),U===null?T=L:U.sibling=L,U=L);return t&&w.forEach(function(Eh){return a(f,Eh)}),Y&&pe(f,D),T}function it(f,s,d,b){if(typeof d=="object"&&d!==null&&d.type===X&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case O:t:{for(var T=d.key;s!==null;){if(s.key===T){if(T=d.type,T===X){if(s.tag===7){e(f,s.sibling),b=l(s,d.props.children),b.return=f,f=b;break t}}else if(s.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===It&&os(T)===s.type){e(f,s.sibling),b=l(s,d.props),Xn(b,d),b.return=f,f=b;break t}e(f,s);break}else a(f,s);s=s.sibling}d.type===X?(b=ze(d.props.children,f.mode,b,d.key),b.return=f,f=b):(b=gi(d.type,d.key,d.props,null,f.mode,b),Xn(b,d),b.return=f,f=b)}return u(f);case et:t:{for(T=d.key;s!==null;){if(s.key===T)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){e(f,s.sibling),b=l(s,d.children||[]),b.return=f,f=b;break t}else{e(f,s);break}else a(f,s);s=s.sibling}b=gr(d,f.mode,b),b.return=f,f=b}return u(f);case It:return T=d._init,d=T(d._payload),it(f,s,d,b)}if(ga(d))return x(f,s,d,b);if(Pt(d)){if(T=Pt(d),typeof T!="function")throw Error(h(150));return d=T.call(d),M(f,s,d,b)}if(typeof d.then=="function")return it(f,s,Fl(d),b);if(d.$$typeof===xt)return it(f,s,di(f,d),b);$l(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,s!==null&&s.tag===6?(e(f,s.sibling),b=l(s,d),b.return=f,f=b):(e(f,s),b=hr(d,f.mode,b),b.return=f,f=b),u(f)):e(f,s)}return function(f,s,d,b){try{Vn=0;var T=it(f,s,d,b);return Pe=null,T}catch(w){if(w===Yn)throw w;var U=Jt(29,w,null,f.mode);return U.lanes=b,U.return=f,U}finally{}}}var be=fs(!0),ds=fs(!1),tn=la(null),Il=la(0);function ms(t,a){t=ja,I(Il,t),I(tn,a),ja=t|a.baseLanes}function Su(){I(Il,ja),I(tn,tn.current)}function Tu(){ja=Il.current,gt(tn),gt(Il)}var Qt=la(null),ca=null;function qa(t){var a=t.alternate;I(mt,mt.current&1),I(Qt,t),ca===null&&(a===null||tn.current!==null||a.memoizedState!==null)&&(ca=t)}function hs(t){if(t.tag===22){if(I(mt,mt.current),I(Qt,t),ca===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(ca=t)}}else Ca()}function Ca(){I(mt,mt.current),I(Qt,Qt.current)}function ka(t){gt(Qt),ca===t&&(ca=null),gt(mt)}var mt=la(0);function Pl(t){for(var a=t;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var mm=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(e,n){t.push(n)}};this.abort=function(){a.aborted=!0,t.forEach(function(e){return e()})}},hm=k.unstable_scheduleCallback,gm=k.unstable_NormalPriority,ht={$$typeof:xt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new mm,data:new Map,refCount:0}}function Qn(t){t.refCount--,t.refCount===0&&hm(gm,function(){t.controller.abort()})}var Zn=null,wu=0,an=0,en=null;function pm(t,a){if(Zn===null){var e=Zn=[];wu=0,an=jr(),en={status:"pending",value:void 0,then:function(n){e.push(n)}}}return wu++,a.then(gs,gs),a}function gs(){if(--wu===0&&Zn!==null){en!==null&&(en.status="fulfilled");var t=Zn;Zn=null,an=0,en=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function ym(t,a){var e=[],n={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return t.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<e.length;l++)(0,e[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),n}var ps=_.S;_.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&pm(t,a),ps!==null&&ps(t,a)};var ve=la(null);function Au(){var t=ve.current;return t!==null?t:J.pooledCache}function ti(t,a){a===null?I(ve,ve.current):I(ve,a.pool)}function ys(){var t=Au();return t===null?null:{parent:ht._currentValue,pool:t}}var Ga=0,H=null,Q=null,ot=null,ai=!1,nn=!1,ke=!1,ei=0,Kn=0,ln=null,bm=0;function ct(){throw Error(h(321))}function Eu(t,a){if(a===null)return!1;for(var e=0;e<a.length&&e<t.length;e++)if(!Bt(t[e],a[e]))return!1;return!0}function zu(t,a,e,n,l,i){return Ga=i,H=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,_.H=t===null||t.memoizedState===null?Se:Ya,ke=!1,i=e(n,l),ke=!1,nn&&(i=vs(a,e,n,l)),bs(t),i}function bs(t){_.H=sa;var a=Q!==null&&Q.next!==null;if(Ga=0,ot=Q=H=null,ai=!1,Kn=0,ln=null,a)throw Error(h(300));t===null||yt||(t=t.dependencies,t!==null&&fi(t)&&(yt=!0))}function vs(t,a,e,n){H=t;var l=0;do{if(nn&&(ln=null),Kn=0,nn=!1,25<=l)throw Error(h(301));if(l+=1,ot=Q=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=Te,i=a(e,n)}while(nn);return i}function vm(){var t=_.H,a=t.useState()[0];return a=typeof a.then=="function"?Jn(a):a,t=t.useState()[0],(Q!==null?Q.memoizedState:null)!==t&&(H.flags|=1024),a}function Du(){var t=ei!==0;return ei=0,t}function _u(t,a,e){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~e}function ju(t){if(ai){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ai=!1}Ga=0,ot=Q=H=null,nn=!1,Kn=ei=0,ln=null}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?H.memoizedState=ot=t:ot=ot.next=t,ot}function ft(){if(Q===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=Q.next;var a=ot===null?H.memoizedState:ot.next;if(a!==null)ot=a,Q=t;else{if(t===null)throw H.alternate===null?Error(h(467)):Error(h(310));Q=t,t={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},ot===null?H.memoizedState=ot=t:ot=ot.next=t}return ot}var ni;ni=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Jn(t){var a=Kn;return Kn+=1,ln===null&&(ln=[]),t=cs(ln,t,a),a=H,(ot===null?a.memoizedState:ot.next)===null&&(a=a.alternate,_.H=a===null||a.memoizedState===null?Se:Ya),t}function li(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jn(t);if(t.$$typeof===xt)return At(t)}throw Error(h(438,String(t)))}function Mu(t){var a=null,e=H.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var n=H.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=ni(),H.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(t),n=0;n<t;n++)e[n]=Sn;return a.index++,e}function Sa(t,a){return typeof a=="function"?a(t):a}function ii(t){var a=ft();return Ou(a,Q,t)}function Ou(t,a,e){var n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var l=t.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}a.baseQueue=l=i,n.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{a=l.next;var r=u=null,c=null,o=a,p=!1;do{var v=o.lane&-536870913;if(v!==o.lane?(C&v)===v:(Ga&v)===v){var m=o.revertLane;if(m===0)c!==null&&(c=c.next={lane:0,revertLane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),v===an&&(p=!0);else if((Ga&m)===m){o=o.next,m===an&&(p=!0);continue}else v={lane:0,revertLane:o.revertLane,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},c===null?(r=c=v,u=i):c=c.next=v,H.lanes|=m,Fa|=m;v=o.action,ke&&e(i,v),i=o.hasEagerState?o.eagerState:e(i,v)}else m={lane:v,revertLane:o.revertLane,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},c===null?(r=c=m,u=i):c=c.next=m,H.lanes|=v,Fa|=v;o=o.next}while(o!==null&&o!==a);if(c===null?u=i:c.next=r,!Bt(i,t.memoizedState)&&(yt=!0,p&&(e=en,e!==null)))throw e;t.memoizedState=i,t.baseState=u,t.baseQueue=c,n.lastRenderedState=i}return l===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Bu(t){var a=ft(),e=a.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=t;var n=e.dispatch,l=e.pending,i=a.memoizedState;if(l!==null){e.pending=null;var u=l=l.next;do i=t(i,u.action),u=u.next;while(u!==l);Bt(i,a.memoizedState)||(yt=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),e.lastRenderedState=i}return[i,n]}function ks(t,a,e){var n=H,l=ft(),i=Y;if(i){if(e===void 0)throw Error(h(407));e=e()}else e=a();var u=!Bt((Q||l).memoizedState,e);if(u&&(l.memoizedState=e,yt=!0),l=l.queue,Ru(xs.bind(null,n,l,t),[t]),l.getSnapshot!==a||u||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,un(9,Ts.bind(null,n,l,e,a),{destroy:void 0},null),J===null)throw Error(h(349));i||Ga&60||Ss(n,a,e)}return e}function Ss(t,a,e){t.flags|=16384,t={getSnapshot:a,value:e},a=H.updateQueue,a===null?(a=ni(),H.updateQueue=a,a.stores=[t]):(e=a.stores,e===null?a.stores=[t]:e.push(t))}function Ts(t,a,e,n){a.value=e,a.getSnapshot=n,ws(a)&&As(t)}function xs(t,a,e){return e(function(){ws(a)&&As(t)})}function ws(t){var a=t.getSnapshot;t=t.value;try{var e=a();return!Bt(t,e)}catch{return!0}}function As(t){var a=Na(t,2);a!==null&&zt(a,t,2)}function Hu(t){var a=jt();if(typeof t=="function"){var e=t;if(t=e(),ke){Ha(!0);try{e()}finally{Ha(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},a}function Es(t,a,e,n){return t.baseState=e,Ou(t,Q,typeof n=="function"?n:Sa)}function km(t,a,e,n,l){if(ci(t))throw Error(h(485));if(t=a.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};_.T!==null?e(!0):i.isTransition=!1,n(i),e=a.pending,e===null?(i.next=a.pending=i,zs(a,i)):(i.next=e.next,a.pending=e.next=i)}}function zs(t,a){var e=a.action,n=a.payload,l=t.state;if(a.isTransition){var i=_.T,u={};_.T=u;try{var r=e(l,n),c=_.S;c!==null&&c(u,r),Ds(t,a,r)}catch(o){Uu(t,a,o)}finally{_.T=i}}else try{i=e(l,n),Ds(t,a,i)}catch(o){Uu(t,a,o)}}function Ds(t,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){_s(t,a,n)},function(n){return Uu(t,a,n)}):_s(t,a,e)}function _s(t,a,e){a.status="fulfilled",a.value=e,js(a),t.state=e,a=t.pending,a!==null&&(e=a.next,e===a?t.pending=null:(e=e.next,a.next=e,zs(t,e)))}function Uu(t,a,e){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=e,js(a),a=a.next;while(a!==n)}t.action=null}function js(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Ms(t,a){return a}function Os(t,a){if(Y){var e=J.formState;if(e!==null){t:{var n=H;if(Y){if(kt){a:{for(var l=kt,i=ra;l.nodeType!==8;){if(!i){l=null;break a}if(l=na(l.nextSibling),l===null){l=null;break a}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){kt=na(l.nextSibling),n=l.data==="F!";break t}}ye(n)}n=!1}n&&(a=e[0])}}return e=jt(),e.memoizedState=e.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:a},e.queue=n,e=Fs.bind(null,H,n),n.dispatch=e,n=Hu(!1),i=Yu.bind(null,H,!1,n.queue),n=jt(),l={state:a,dispatch:null,action:t,pending:null},n.queue=l,e=km.bind(null,H,l,i,e),l.dispatch=e,n.memoizedState=t,[a,e,!1]}function Bs(t){var a=ft();return Hs(a,Q,t)}function Hs(t,a,e){a=Ou(t,a,Ms)[0],t=ii(Sa)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Jn(a):a;var n=ft(),l=n.queue,i=l.dispatch;return e!==n.memoizedState&&(H.flags|=2048,un(9,Sm.bind(null,l,e),{destroy:void 0},null)),[a,i,t]}function Sm(t,a){t.action=a}function Us(t){var a=ft(),e=Q;if(e!==null)return Hs(a,e,t);ft(),a=a.memoizedState,e=ft();var n=e.queue.dispatch;return e.memoizedState=t,[a,n,!1]}function un(t,a,e,n){return t={tag:t,create:a,inst:e,deps:n,next:null},a=H.updateQueue,a===null&&(a=ni(),H.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=t.next=t:(n=e.next,e.next=t,t.next=n,a.lastEffect=t),t}function Rs(){return ft().memoizedState}function ui(t,a,e,n){var l=jt();H.flags|=t,l.memoizedState=un(1|a,e,{destroy:void 0},n===void 0?null:n)}function ri(t,a,e,n){var l=ft();n=n===void 0?null:n;var i=l.memoizedState.inst;Q!==null&&n!==null&&Eu(n,Q.memoizedState.deps)?l.memoizedState=un(a,e,i,n):(H.flags|=t,l.memoizedState=un(1|a,e,i,n))}function Ns(t,a){ui(8390656,8,t,a)}function Ru(t,a){ri(2048,8,t,a)}function qs(t,a){return ri(4,2,t,a)}function Cs(t,a){return ri(4,4,t,a)}function Gs(t,a){if(typeof a=="function"){t=t();var e=a(t);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Ys(t,a,e){e=e!=null?e.concat([t]):null,ri(4,4,Gs.bind(null,a,t),e)}function Nu(){}function Ls(t,a){var e=ft();a=a===void 0?null:a;var n=e.memoizedState;return a!==null&&Eu(a,n[1])?n[0]:(e.memoizedState=[t,a],t)}function Vs(t,a){var e=ft();a=a===void 0?null:a;var n=e.memoizedState;if(a!==null&&Eu(a,n[1]))return n[0];if(n=t(),ke){Ha(!0);try{t()}finally{Ha(!1)}}return e.memoizedState=[n,a],n}function qu(t,a,e){return e===void 0||Ga&1073741824?t.memoizedState=a:(t.memoizedState=e,t=Zo(),H.lanes|=t,Fa|=t,e)}function Xs(t,a,e,n){return Bt(e,a)?e:tn.current!==null?(t=qu(t,e,n),Bt(t,a)||(yt=!0),t):Ga&42?(t=Zo(),H.lanes|=t,Fa|=t,a):(yt=!0,t.memoizedState=e)}function Qs(t,a,e,n,l){var i=G.p;G.p=i!==0&&8>i?i:8;var u=_.T,r={};_.T=r,Yu(t,!1,a,e);try{var c=l(),o=_.S;if(o!==null&&o(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=ym(c,n);Wn(t,a,p,Nt(t))}else Wn(t,a,n,Nt(t))}catch(v){Wn(t,a,{then:function(){},status:"rejected",reason:v},Nt())}finally{G.p=i,_.T=u}}function Tm(){}function Cu(t,a,e,n){if(t.tag!==5)throw Error(h(476));var l=Zs(t).queue;Qs(t,l,a,qt,e===null?Tm:function(){return Ks(t),e(n)})}function Zs(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:qt,baseState:qt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:qt},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Ks(t){var a=Zs(t).next.queue;Wn(t,a,{},Nt())}function Gu(){return At(gl)}function Js(){return ft().memoizedState}function Ws(){return ft().memoizedState}function xm(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var e=Nt();t=Xa(e);var n=Qa(a,t,e);n!==null&&(zt(n,a,e),In(n,a,e)),a={cache:xu()},t.payload=a;return}a=a.return}}function wm(t,a,e){var n=Nt();e={lane:n,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},ci(t)?$s(a,e):(e=pu(t,a,e,n),e!==null&&(zt(e,t,n),Is(e,a,n)))}function Fs(t,a,e){var n=Nt();Wn(t,a,e,n)}function Wn(t,a,e,n){var l={lane:n,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(ci(t))$s(a,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var u=a.lastRenderedState,r=i(u,e);if(l.hasEagerState=!0,l.eagerState=r,Bt(r,u))return Ql(t,a,l,0),J===null&&Xl(),!1}catch{}finally{}if(e=pu(t,a,l,n),e!==null)return zt(e,t,n),Is(e,a,n),!0}return!1}function Yu(t,a,e,n){if(n={lane:2,revertLane:jr(),action:n,hasEagerState:!1,eagerState:null,next:null},ci(t)){if(a)throw Error(h(479))}else a=pu(t,e,n,2),a!==null&&zt(a,t,2)}function ci(t){var a=t.alternate;return t===H||a!==null&&a===H}function $s(t,a){nn=ai=!0;var e=t.pending;e===null?a.next=a:(a.next=e.next,e.next=a),t.pending=a}function Is(t,a,e){if(e&4194176){var n=a.lanes;n&=t.pendingLanes,e|=n,a.lanes=e,sc(t,e)}}var sa={readContext:At,use:li,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct};sa.useCacheRefresh=ct,sa.useMemoCache=ct,sa.useHostTransitionStatus=ct,sa.useFormState=ct,sa.useActionState=ct,sa.useOptimistic=ct;var Se={readContext:At,use:li,useCallback:function(t,a){return jt().memoizedState=[t,a===void 0?null:a],t},useContext:At,useEffect:Ns,useImperativeHandle:function(t,a,e){e=e!=null?e.concat([t]):null,ui(4194308,4,Gs.bind(null,a,t),e)},useLayoutEffect:function(t,a){return ui(4194308,4,t,a)},useInsertionEffect:function(t,a){ui(4,2,t,a)},useMemo:function(t,a){var e=jt();a=a===void 0?null:a;var n=t();if(ke){Ha(!0);try{t()}finally{Ha(!1)}}return e.memoizedState=[n,a],n},useReducer:function(t,a,e){var n=jt();if(e!==void 0){var l=e(a);if(ke){Ha(!0);try{e(a)}finally{Ha(!1)}}}else l=a;return n.memoizedState=n.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},n.queue=t,t=t.dispatch=wm.bind(null,H,t),[n.memoizedState,t]},useRef:function(t){var a=jt();return t={current:t},a.memoizedState=t},useState:function(t){t=Hu(t);var a=t.queue,e=Fs.bind(null,H,a);return a.dispatch=e,[t.memoizedState,e]},useDebugValue:Nu,useDeferredValue:function(t,a){var e=jt();return qu(e,t,a)},useTransition:function(){var t=Hu(!1);return t=Qs.bind(null,H,t.queue,!0,!1),jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,e){var n=H,l=jt();if(Y){if(e===void 0)throw Error(h(407));e=e()}else{if(e=a(),J===null)throw Error(h(349));C&60||Ss(n,a,e)}l.memoizedState=e;var i={value:e,getSnapshot:a};return l.queue=i,Ns(xs.bind(null,n,i,t),[t]),n.flags|=2048,un(9,Ts.bind(null,n,i,e,a),{destroy:void 0},null),e},useId:function(){var t=jt(),a=J.identifierPrefix;if(Y){var e=va,n=ba;e=(n&~(1<<32-Ot(n)-1)).toString(32)+e,a=":"+a+"R"+e,e=ei++,0<e&&(a+="H"+e.toString(32)),a+=":"}else e=bm++,a=":"+a+"r"+e.toString(32)+":";return t.memoizedState=a},useCacheRefresh:function(){return jt().memoizedState=xm.bind(null,H)}};Se.useMemoCache=Mu,Se.useHostTransitionStatus=Gu,Se.useFormState=Os,Se.useActionState=Os,Se.useOptimistic=function(t){var a=jt();a.memoizedState=a.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=Yu.bind(null,H,!0,e),e.dispatch=a,[t,a]};var Ya={readContext:At,use:li,useCallback:Ls,useContext:At,useEffect:Ru,useImperativeHandle:Ys,useInsertionEffect:qs,useLayoutEffect:Cs,useMemo:Vs,useReducer:ii,useRef:Rs,useState:function(){return ii(Sa)},useDebugValue:Nu,useDeferredValue:function(t,a){var e=ft();return Xs(e,Q.memoizedState,t,a)},useTransition:function(){var t=ii(Sa)[0],a=ft().memoizedState;return[typeof t=="boolean"?t:Jn(t),a]},useSyncExternalStore:ks,useId:Js};Ya.useCacheRefresh=Ws,Ya.useMemoCache=Mu,Ya.useHostTransitionStatus=Gu,Ya.useFormState=Bs,Ya.useActionState=Bs,Ya.useOptimistic=function(t,a){var e=ft();return Es(e,Q,t,a)};var Te={readContext:At,use:li,useCallback:Ls,useContext:At,useEffect:Ru,useImperativeHandle:Ys,useInsertionEffect:qs,useLayoutEffect:Cs,useMemo:Vs,useReducer:Bu,useRef:Rs,useState:function(){return Bu(Sa)},useDebugValue:Nu,useDeferredValue:function(t,a){var e=ft();return Q===null?qu(e,t,a):Xs(e,Q.memoizedState,t,a)},useTransition:function(){var t=Bu(Sa)[0],a=ft().memoizedState;return[typeof t=="boolean"?t:Jn(t),a]},useSyncExternalStore:ks,useId:Js};Te.useCacheRefresh=Ws,Te.useMemoCache=Mu,Te.useHostTransitionStatus=Gu,Te.useFormState=Us,Te.useActionState=Us,Te.useOptimistic=function(t,a){var e=ft();return Q!==null?Es(e,Q,t,a):(e.baseState=t,[t,e.queue.dispatch])};function Lu(t,a,e,n){a=t.memoizedState,e=e(n,a),e=e==null?a:V({},a,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Vu={isMounted:function(t){return(t=t._reactInternals)?j(t)===t:!1},enqueueSetState:function(t,a,e){t=t._reactInternals;var n=Nt(),l=Xa(n);l.payload=a,e!=null&&(l.callback=e),a=Qa(t,l,n),a!==null&&(zt(a,t,n),In(a,t,n))},enqueueReplaceState:function(t,a,e){t=t._reactInternals;var n=Nt(),l=Xa(n);l.tag=1,l.payload=a,e!=null&&(l.callback=e),a=Qa(t,l,n),a!==null&&(zt(a,t,n),In(a,t,n))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var e=Nt(),n=Xa(e);n.tag=2,a!=null&&(n.callback=a),a=Qa(t,n,e),a!==null&&(zt(a,t,e),In(a,t,e))}};function Ps(t,a,e,n,l,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,u):a.prototype&&a.prototype.isPureReactComponent?!Rn(e,n)||!Rn(l,i):!0}function to(t,a,e,n){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,n),a.state!==t&&Vu.enqueueReplaceState(a,a.state,null)}function xe(t,a){var e=a;if("ref"in a){e={};for(var n in a)n!=="ref"&&(e[n]=a[n])}if(t=t.defaultProps){e===a&&(e=V({},e));for(var l in t)e[l]===void 0&&(e[l]=t[l])}return e}var si=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ao(t){si(t)}function eo(t){console.error(t)}function no(t){si(t)}function oi(t,a){try{var e=t.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function lo(t,a,e){try{var n=t.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xu(t,a,e){return e=Xa(e),e.tag=3,e.payload={element:null},e.callback=function(){oi(t,a)},e}function io(t){return t=Xa(t),t.tag=3,t}function uo(t,a,e,n){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){lo(a,e,n)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){lo(a,e,n),typeof l!="function"&&($a===null?$a=new Set([this]):$a.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Am(t,a,e,n,l){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=e.alternate,a!==null&&$n(a,e,l,!0),e=Qt.current,e!==null){switch(e.tag){case 13:return ca===null?Ar():e.alternate===null&&lt===0&&(lt=3),e.flags&=-257,e.flags|=65536,e.lanes=l,n===ku?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([n]):a.add(n),zr(t,n,l)),!1;case 22:return e.flags|=65536,n===ku?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([n]):e.add(n)),zr(t,n,l)),!1}throw Error(h(435,e.tag))}return zr(t,n,l),Ar(),!1}if(Y)return a=Qt.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==vu&&(t=Error(h(422),{cause:n}),Gn(Lt(t,e)))):(n!==vu&&(a=Error(h(423),{cause:n}),Gn(Lt(a,e))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,n=Lt(n,e),l=Xu(t.stateNode,n,l),ir(t,l),lt!==4&&(lt=2)),!1;var i=Error(h(520),{cause:n});if(i=Lt(i,e),ul===null?ul=[i]:ul.push(i),lt!==4&&(lt=2),a===null)return!0;n=Lt(n,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,t=l&-l,e.lanes|=t,t=Xu(e.stateNode,n,t),ir(e,t),!1;case 1:if(a=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&($a===null||!$a.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=io(l),uo(l,t,e,n),ir(e,l),!1}e=e.return}while(e!==null);return!1}var ro=Error(h(461)),yt=!1;function St(t,a,e,n){a.child=t===null?ds(a,null,e,n):be(a,t.child,e,n)}function co(t,a,e,n,l){e=e.render;var i=a.ref;if("ref"in n){var u={};for(var r in n)r!=="ref"&&(u[r]=n[r])}else u=n;return Ae(a),n=zu(t,a,e,u,i,l),r=Du(),t!==null&&!yt?(_u(t,a,l),Ta(t,a,l)):(Y&&r&&yu(a),a.flags|=1,St(t,a,n,l),a.child)}function so(t,a,e,n,l){if(t===null){var i=e.type;return typeof i=="function"&&!mr(i)&&i.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=i,oo(t,a,i,n,l)):(t=gi(e.type,null,n,a,a.mode,l),t.ref=a.ref,t.return=a,a.child=t)}if(i=t.child,!Pu(t,l)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Rn,e(u,n)&&t.ref===a.ref)return Ta(t,a,l)}return a.flags|=1,t=Wa(i,n),t.ref=a.ref,t.return=a,a.child=t}function oo(t,a,e,n,l){if(t!==null){var i=t.memoizedProps;if(Rn(i,n)&&t.ref===a.ref)if(yt=!1,a.pendingProps=n=i,Pu(t,l))t.flags&131072&&(yt=!0);else return a.lanes=t.lanes,Ta(t,a,l)}return Qu(t,a,e,n,l)}function fo(t,a,e){var n=a.pendingProps,l=n.children,i=(a.stateNode._pendingVisibility&2)!==0,u=t!==null?t.memoizedState:null;if(Fn(t,a),n.mode==="hidden"||i){if(a.flags&128){if(n=u!==null?u.baseLanes|e:e,t!==null){for(l=a.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;a.childLanes=i&~n}else a.childLanes=0,a.child=null;return mo(t,a,n,e)}if(e&536870912)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&ti(a,u!==null?u.cachePool:null),u!==null?ms(a,u):Su(),hs(a);else return a.lanes=a.childLanes=536870912,mo(t,a,u!==null?u.baseLanes|e:e,e)}else u!==null?(ti(a,u.cachePool),ms(a,u),Ca(),a.memoizedState=null):(t!==null&&ti(a,null),Su(),Ca());return St(t,a,l,e),a.child}function mo(t,a,e,n){var l=Au();return l=l===null?null:{parent:ht._currentValue,pool:l},a.memoizedState={baseLanes:e,cachePool:l},t!==null&&ti(a,null),Su(),hs(a),t!==null&&$n(t,a,n,!0),null}function Fn(t,a){var e=a.ref;if(e===null)t!==null&&t.ref!==null&&(a.flags|=2097664);else{if(typeof e!="function"&&typeof e!="object")throw Error(h(284));(t===null||t.ref!==e)&&(a.flags|=2097664)}}function Qu(t,a,e,n,l){return Ae(a),e=zu(t,a,e,n,void 0,l),n=Du(),t!==null&&!yt?(_u(t,a,l),Ta(t,a,l)):(Y&&n&&yu(a),a.flags|=1,St(t,a,e,l),a.child)}function ho(t,a,e,n,l,i){return Ae(a),a.updateQueue=null,e=vs(a,n,e,l),bs(t),n=Du(),t!==null&&!yt?(_u(t,a,i),Ta(t,a,i)):(Y&&n&&yu(a),a.flags|=1,St(t,a,e,i),a.child)}function go(t,a,e,n,l){if(Ae(a),a.stateNode===null){var i=Fe,u=e.contextType;typeof u=="object"&&u!==null&&(i=At(u)),i=new e(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vu,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},nr(a),u=e.contextType,i.context=typeof u=="object"&&u!==null?At(u):Fe,i.state=a.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(Lu(a,e,u,n),i.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Vu.enqueueReplaceState(i,i.state,null),tl(a,n,i,l),Pn(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(t===null){i=a.stateNode;var r=a.memoizedProps,c=xe(e,r);i.props=c;var o=i.context,p=e.contextType;u=Fe,typeof p=="object"&&p!==null&&(u=At(p));var v=e.getDerivedStateFromProps;p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=a.pendingProps!==r,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||o!==u)&&to(a,i,n,u),Va=!1;var m=a.memoizedState;i.state=m,tl(a,n,i,l),Pn(),o=a.memoizedState,r||m!==o||Va?(typeof v=="function"&&(Lu(a,e,v,n),o=a.memoizedState),(c=Va||Ps(a,e,c,n,m,o,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=o),i.props=n,i.state=o,i.context=u,n=c):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,lr(t,a),u=a.memoizedProps,p=xe(e,u),i.props=p,v=a.pendingProps,m=i.context,o=e.contextType,c=Fe,typeof o=="object"&&o!==null&&(c=At(o)),r=e.getDerivedStateFromProps,(o=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==c)&&to(a,i,n,c),Va=!1,m=a.memoizedState,i.state=m,tl(a,n,i,l),Pn();var g=a.memoizedState;u!==v||m!==g||Va||t!==null&&t.dependencies!==null&&fi(t.dependencies)?(typeof r=="function"&&(Lu(a,e,r,n),g=a.memoizedState),(p=Va||Ps(a,e,p,n,m,g,c)||t!==null&&t.dependencies!==null&&fi(t.dependencies))?(o||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,g,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,g,c)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=g),i.props=n,i.state=g,i.context=c,n=p):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=1024),n=!1)}return i=n,Fn(t,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,t!==null&&n?(a.child=be(a,t.child,null,l),a.child=be(a,null,e,l)):St(t,a,e,l),a.memoizedState=i.state,t=a.child):t=Ta(t,a,l),t}function po(t,a,e,n){return Cn(),a.flags|=256,St(t,a,e,n),a.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:ys()}}function Ju(t,a,e){return t=t!==null?t.childLanes&~e:0,a&&(t|=Wt),t}function yo(t,a,e){var n=a.pendingProps,l=!1,i=(a.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(mt.current&2)!==0),u&&(l=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,t===null){if(Y){if(l?qa(a):Ca(),Y){var r=kt,c;if(c=r){t:{for(c=r,r=ra;c.nodeType!==8;){if(!r){r=null;break t}if(c=na(c.nextSibling),c===null){r=null;break t}}r=c}r!==null?(a.memoizedState={dehydrated:r,treeContext:ge!==null?{id:ba,overflow:va}:null,retryLane:536870912},c=Jt(18,null,null,0),c.stateNode=r,c.return=a,a.child=c,Et=a,kt=null,c=!0):c=!1}c||ye(a)}if(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return r.data==="$!"?a.lanes=16:a.lanes=536870912,null;ka(a)}return r=n.children,n=n.fallback,l?(Ca(),l=a.mode,r=Fu({mode:"hidden",children:r},l),n=ze(n,l,e,null),r.return=a,n.return=a,r.sibling=n,a.child=r,l=a.child,l.memoizedState=Ku(e),l.childLanes=Ju(t,u,e),a.memoizedState=Zu,n):(qa(a),Wu(a,r))}if(c=t.memoizedState,c!==null&&(r=c.dehydrated,r!==null)){if(i)a.flags&256?(qa(a),a.flags&=-257,a=$u(t,a,e)):a.memoizedState!==null?(Ca(),a.child=t.child,a.flags|=128,a=null):(Ca(),l=n.fallback,r=a.mode,n=Fu({mode:"visible",children:n.children},r),l=ze(l,r,e,null),l.flags|=2,n.return=a,l.return=a,n.sibling=l,a.child=n,be(a,t.child,null,e),n=a.child,n.memoizedState=Ku(e),n.childLanes=Ju(t,u,e),a.memoizedState=Zu,a=l);else if(qa(a),r.data==="$!"){if(u=r.nextSibling&&r.nextSibling.dataset,u)var o=u.dgst;u=o,n=Error(h(419)),n.stack="",n.digest=u,Gn({value:n,source:null,stack:null}),a=$u(t,a,e)}else if(yt||$n(t,a,e,!1),u=(e&t.childLanes)!==0,yt||u){if(u=J,u!==null){if(n=e&-e,n&42)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=n&(u.suspendedLanes|e)?0:n,n!==0&&n!==c.retryLane)throw c.retryLane=n,Na(t,n),zt(u,t,n),ro}r.data==="$?"||Ar(),a=$u(t,a,e)}else r.data==="$?"?(a.flags|=128,a.child=t.child,a=Gm.bind(null,t),r._reactRetry=a,a=null):(t=c.treeContext,kt=na(r.nextSibling),Et=a,Y=!0,aa=null,ra=!1,t!==null&&(Vt[Xt++]=ba,Vt[Xt++]=va,Vt[Xt++]=ge,ba=t.id,va=t.overflow,ge=a),a=Wu(a,n.children),a.flags|=4096);return a}return l?(Ca(),l=n.fallback,r=a.mode,c=t.child,o=c.sibling,n=Wa(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&31457280,o!==null?l=Wa(o,l):(l=ze(l,r,e,null),l.flags|=2),l.return=a,n.return=a,n.sibling=l,a.child=n,n=l,l=a.child,r=t.child.memoizedState,r===null?r=Ku(e):(c=r.cachePool,c!==null?(o=ht._currentValue,c=c.parent!==o?{parent:o,pool:o}:c):c=ys(),r={baseLanes:r.baseLanes|e,cachePool:c}),l.memoizedState=r,l.childLanes=Ju(t,u,e),a.memoizedState=Zu,n):(qa(a),e=t.child,t=e.sibling,e=Wa(e,{mode:"visible",children:n.children}),e.return=a,e.sibling=null,t!==null&&(u=a.deletions,u===null?(a.deletions=[t],a.flags|=16):u.push(t)),a.child=e,a.memoizedState=null,e)}function Wu(t,a){return a=Fu({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Fu(t,a){return Vo(t,a,0,null)}function $u(t,a,e){return be(a,t.child,null,e),t=Wu(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function bo(t,a,e){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a),ar(t.return,a,e)}function Iu(t,a,e,n,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:l}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=e,i.tailMode=l)}function vo(t,a,e){var n=a.pendingProps,l=n.revealOrder,i=n.tail;if(St(t,a,n.children,e),n=mt.current,n&2)n=n&1|2,a.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bo(t,e,a);else if(t.tag===19)bo(t,e,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(I(mt,n),l){case"forwards":for(e=a.child,l=null;e!==null;)t=e.alternate,t!==null&&Pl(t)===null&&(l=e),e=e.sibling;e=l,e===null?(l=a.child,a.child=null):(l=e.sibling,e.sibling=null),Iu(a,!1,l,e,i);break;case"backwards":for(e=null,l=a.child,a.child=null;l!==null;){if(t=l.alternate,t!==null&&Pl(t)===null){a.child=l;break}t=l.sibling,l.sibling=e,e=l,l=t}Iu(a,!0,e,null,i);break;case"together":Iu(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ta(t,a,e){if(t!==null&&(a.dependencies=t.dependencies),Fa|=a.lanes,!(e&a.childLanes))if(t!==null){if($n(t,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(h(153));if(a.child!==null){for(t=a.child,e=Wa(t,t.pendingProps),a.child=e,e.return=a;t.sibling!==null;)t=t.sibling,e=e.sibling=Wa(t,t.pendingProps),e.return=a;e.sibling=null}return a.child}function Pu(t,a){return t.lanes&a?!0:(t=t.dependencies,!!(t!==null&&fi(t)))}function Em(t,a,e){switch(a.tag){case 3:zl(a,a.stateNode.containerInfo),La(a,ht,t.memoizedState.cache),Cn();break;case 27:case 5:Vi(a);break;case 4:zl(a,a.stateNode.containerInfo);break;case 10:La(a,a.type,a.memoizedProps.value);break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(qa(a),a.flags|=128,null):e&a.child.childLanes?yo(t,a,e):(qa(a),t=Ta(t,a,e),t!==null?t.sibling:null);qa(a);break;case 19:var l=(t.flags&128)!==0;if(n=(e&a.childLanes)!==0,n||($n(t,a,e,!1),n=(e&a.childLanes)!==0),l){if(n)return vo(t,a,e);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(mt,mt.current),n)break;return null;case 22:case 23:return a.lanes=0,fo(t,a,e);case 24:La(a,ht,t.memoizedState.cache)}return Ta(t,a,e)}function ko(t,a,e){if(t!==null)if(t.memoizedProps!==a.pendingProps)yt=!0;else{if(!Pu(t,e)&&!(a.flags&128))return yt=!1,Em(t,a,e);yt=!!(t.flags&131072)}else yt=!1,Y&&a.flags&1048576&&ns(a,Jl,a.index);switch(a.lanes=0,a.tag){case 16:t:{t=a.pendingProps;var n=a.elementType,l=n._init;if(n=l(n._payload),a.type=n,typeof n=="function")mr(n)?(t=xe(n,t),a.tag=1,a=go(null,a,n,t,e)):(a.tag=0,a=Qu(null,a,n,t,e));else{if(n!=null){if(l=n.$$typeof,l===$t){a.tag=11,a=co(null,a,n,t,e);break t}else if(l===Be){a.tag=14,a=so(null,a,n,t,e);break t}}throw a=He(n)||n,Error(h(306,a,""))}}return a;case 0:return Qu(t,a,a.type,a.pendingProps,e);case 1:return n=a.type,l=xe(n,a.pendingProps),go(t,a,n,l,e);case 3:t:{if(zl(a,a.stateNode.containerInfo),t===null)throw Error(h(387));var i=a.pendingProps;l=a.memoizedState,n=l.element,lr(t,a),tl(a,i,null,e);var u=a.memoizedState;if(i=u.cache,La(a,ht,i),i!==l.cache&&er(a,[ht],e,!0),Pn(),i=u.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=po(t,a,i,e);break t}else if(i!==n){n=Lt(Error(h(424)),a),Gn(n),a=po(t,a,i,e);break t}else for(kt=na(a.stateNode.containerInfo.firstChild),Et=a,Y=!0,aa=null,ra=!0,e=ds(a,null,i,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Cn(),i===n){a=Ta(t,a,e);break t}St(t,a,i,e)}a=a.child}return a;case 26:return Fn(t,a),t===null?(e=wf(a.type,null,a.pendingProps,null))?a.memoizedState=e:Y||(e=a.type,t=a.pendingProps,n=zi(Ba.current).createElement(e),n[wt]=a,n[Dt]=t,Tt(n,e,t),pt(n),a.stateNode=n):a.memoizedState=wf(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Vi(a),t===null&&Y&&(n=a.stateNode=Sf(a.type,a.pendingProps,Ba.current),Et=a,ra=!0,kt=na(n.firstChild)),n=a.pendingProps.children,t!==null||Y?St(t,a,n,e):a.child=be(a,null,n,e),Fn(t,a),a.child;case 5:return t===null&&Y&&((l=n=kt)&&(n=eh(n,a.type,a.pendingProps,ra),n!==null?(a.stateNode=n,Et=a,kt=na(n.firstChild),ra=!1,l=!0):l=!1),l||ye(a)),Vi(a),l=a.type,i=a.pendingProps,u=t!==null?t.memoizedProps:null,n=i.children,Cr(l,i)?n=null:u!==null&&Cr(l,u)&&(a.flags|=32),a.memoizedState!==null&&(l=zu(t,a,vm,null,null,e),gl._currentValue=l),Fn(t,a),St(t,a,n,e),a.child;case 6:return t===null&&Y&&((t=e=kt)&&(e=nh(e,a.pendingProps,ra),e!==null?(a.stateNode=e,Et=a,kt=null,t=!0):t=!1),t||ye(a)),null;case 13:return yo(t,a,e);case 4:return zl(a,a.stateNode.containerInfo),n=a.pendingProps,t===null?a.child=be(a,null,n,e):St(t,a,n,e),a.child;case 11:return co(t,a,a.type,a.pendingProps,e);case 7:return St(t,a,a.pendingProps,e),a.child;case 8:return St(t,a,a.pendingProps.children,e),a.child;case 12:return St(t,a,a.pendingProps.children,e),a.child;case 10:return n=a.pendingProps,La(a,a.type,n.value),St(t,a,n.children,e),a.child;case 9:return l=a.type._context,n=a.pendingProps.children,Ae(a),l=At(l),n=n(l),a.flags|=1,St(t,a,n,e),a.child;case 14:return so(t,a,a.type,a.pendingProps,e);case 15:return oo(t,a,a.type,a.pendingProps,e);case 19:return vo(t,a,e);case 22:return fo(t,a,e);case 24:return Ae(a),n=At(ht),t===null?(l=Au(),l===null&&(l=J,i=xu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),a.memoizedState={parent:n,cache:l},nr(a),La(a,ht,l)):(t.lanes&e&&(lr(t,a),tl(a,null,null,e),Pn()),l=t.memoizedState,i=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),La(a,ht,n)):(n=i.cache,La(a,ht,n),n!==l.cache&&er(a,[ht],e,!0))),St(t,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(h(156,a.tag))}var tr=la(null),we=null,xa=null;function La(t,a,e){I(tr,a._currentValue),a._currentValue=e}function wa(t){t._currentValue=tr.current,gt(tr)}function ar(t,a,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),t===e)break;t=t.return}}function er(t,a,e,n){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;t:for(;i!==null;){var r=i;i=l;for(var c=0;c<a.length;c++)if(r.context===a[c]){i.lanes|=e,r=i.alternate,r!==null&&(r.lanes|=e),ar(i.return,e,t),n||(u=null);break t}i=r.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(h(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),ar(u,e,t),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function $n(t,a,e,n){t=null;for(var l=a,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var r=l.type;Bt(l.pendingProps.value,u.value)||(t!==null?t.push(r):t=[r])}}else if(l===El.current){if(u=l.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}l=l.return}t!==null&&er(a,t,e,n),a.flags|=262144}function fi(t){for(t=t.firstContext;t!==null;){if(!Bt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ae(t){we=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function At(t){return So(we,t)}function di(t,a){return we===null&&Ae(t),So(t,a)}function So(t,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},xa===null){if(t===null)throw Error(h(308));xa=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else xa=xa.next=a;return e}var Va=!1;function nr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lr(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,a,e){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,at&2){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=Zl(t),as(t,null,e),a}return Ql(t,n,a,e),Zl(t)}function In(t,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194176)!==0)){var n=a.lanes;n&=t.pendingLanes,e|=n,a.lanes=e,sc(t,e)}}function ir(t,a){var e=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?l=i=a:i=i.next=a}else l=i=a;e={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=a:t.next=a,e.lastBaseUpdate=a}var ur=!1;function Pn(){if(ur){var t=en;if(t!==null)throw t}}function tl(t,a,e,n){ur=!1;var l=t.updateQueue;Va=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var c=r,o=c.next;c.next=null,u===null?i=o:u.next=o,u=c;var p=t.alternate;p!==null&&(p=p.updateQueue,r=p.lastBaseUpdate,r!==u&&(r===null?p.firstBaseUpdate=o:r.next=o,p.lastBaseUpdate=c))}if(i!==null){var v=l.baseState;u=0,p=o=c=null,r=i;do{var m=r.lane&-536870913,g=m!==r.lane;if(g?(C&m)===m:(n&m)===m){m!==0&&m===an&&(ur=!0),p!==null&&(p=p.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var x=t,M=r;m=a;var it=e;switch(M.tag){case 1:if(x=M.payload,typeof x=="function"){v=x.call(it,v,m);break t}v=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,m=typeof x=="function"?x.call(it,v,m):x,m==null)break t;v=V({},v,m);break t;case 2:Va=!0}}m=r.callback,m!==null&&(t.flags|=64,g&&(t.flags|=8192),g=l.callbacks,g===null?l.callbacks=[m]:g.push(m))}else g={lane:m,tag:r.tag,payload:r.payload,callback:r.callback,next:null},p===null?(o=p=g,c=v):p=p.next=g,u|=m;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;g=r,r=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);p===null&&(c=v),l.baseState=c,l.firstBaseUpdate=o,l.lastBaseUpdate=p,i===null&&(l.shared.lanes=0),Fa|=u,t.lanes=u,t.memoizedState=v}}function To(t,a){if(typeof t!="function")throw Error(h(191,t));t.call(a)}function xo(t,a){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)To(e[t],a)}function al(t,a){try{var e=a.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var l=n.next;e=l;do{if((e.tag&t)===t){n=void 0;var i=e.create,u=e.inst;n=i(),u.destroy=n}e=e.next}while(e!==l)}}catch(r){K(a,a.return,r)}}function Za(t,a,e){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&t)===t){var u=n.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,l=a;var c=e;try{r()}catch(o){K(l,c,o)}}}n=n.next}while(n!==i)}}catch(o){K(a,a.return,o)}}function wo(t){var a=t.updateQueue;if(a!==null){var e=t.stateNode;try{xo(a,e)}catch(n){K(t,t.return,n)}}}function Ao(t,a,e){e.props=xe(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(n){K(t,a,n)}}function Ee(t,a){try{var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 26:case 27:case 5:var l=n;break;default:l=n}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(i){K(t,a,i)}}function Ht(t,a){var e=t.ref,n=t.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(l){K(t,a,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){K(t,a,l)}else e.current=null}function Eo(t){var a=t.type,e=t.memoizedProps,n=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break t;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(l){K(t,t.return,l)}}function zo(t,a,e){try{var n=t.stateNode;$m(n,t.type,e,a),n[Dt]=a}catch(l){K(t,t.return,l)}}function Do(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function rr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Do(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cr(t,a,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,a?e.nodeType===8?e.parentNode.insertBefore(t,a):e.insertBefore(t,a):(e.nodeType===8?(a=e.parentNode,a.insertBefore(t,e)):(a=e,a.appendChild(t)),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=Ei));else if(n!==4&&n!==27&&(t=t.child,t!==null))for(cr(t,a,e),t=t.sibling;t!==null;)cr(t,a,e),t=t.sibling}function mi(t,a,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,a?e.insertBefore(t,a):e.appendChild(t);else if(n!==4&&n!==27&&(t=t.child,t!==null))for(mi(t,a,e),t=t.sibling;t!==null;)mi(t,a,e),t=t.sibling}var Aa=!1,nt=!1,sr=!1,_o=typeof WeakSet=="function"?WeakSet:Set,bt=null,jo=!1;function zm(t,a){if(t=t.containerInfo,Nr=Bi,t=Zc(t),fu(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var u=0,r=-1,c=-1,o=0,p=0,v=t,m=null;a:for(;;){for(var g;v!==e||l!==0&&v.nodeType!==3||(r=u+l),v!==i||n!==0&&v.nodeType!==3||(c=u+n),v.nodeType===3&&(u+=v.nodeValue.length),(g=v.firstChild)!==null;)m=v,v=g;for(;;){if(v===t)break a;if(m===e&&++o===l&&(r=u),m===i&&++p===n&&(c=u),(g=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=g}e=r===-1||c===-1?null:{start:r,end:c}}else e=null}e=e||{start:0,end:0}}else e=null;for(qr={focusedElem:t,selectionRange:e},Bi=!1,bt=a;bt!==null;)if(a=bt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,bt=t;else for(;bt!==null;){switch(a=bt,i=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,e=a,l=i.memoizedProps,i=i.memoizedState,n=e.stateNode;try{var x=xe(e.type,l,e.elementType===e.type);t=n.getSnapshotBeforeUpdate(x,i),n.__reactInternalSnapshotBeforeUpdate=t}catch(M){K(e,e.return,M)}}break;case 3:if(t&1024){if(t=a.stateNode.containerInfo,e=t.nodeType,e===9)Lr(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(h(163))}if(t=a.sibling,t!==null){t.return=a.return,bt=t;break}bt=a.return}return x=jo,jo=!1,x}function Mo(t,a,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:za(t,e),n&4&&al(5,e);break;case 1:if(za(t,e),n&4)if(t=e.stateNode,a===null)try{t.componentDidMount()}catch(r){K(e,e.return,r)}else{var l=xe(e.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(l,a,t.__reactInternalSnapshotBeforeUpdate)}catch(r){K(e,e.return,r)}}n&64&&wo(e),n&512&&Ee(e,e.return);break;case 3:if(za(t,e),n&64&&(n=e.updateQueue,n!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{xo(n,t)}catch(r){K(e,e.return,r)}}break;case 26:za(t,e),n&512&&Ee(e,e.return);break;case 27:case 5:za(t,e),a===null&&n&4&&Eo(e),n&512&&Ee(e,e.return);break;case 12:za(t,e);break;case 13:za(t,e),n&4&&Ho(t,e);break;case 22:if(l=e.memoizedState!==null||Aa,!l){a=a!==null&&a.memoizedState!==null||nt;var i=Aa,u=nt;Aa=l,(nt=a)&&!u?Ka(t,e,(e.subtreeFlags&8772)!==0):za(t,e),Aa=i,nt=u}n&512&&(e.memoizedProps.mode==="manual"?Ee(e,e.return):Ht(e,e.return));break;default:za(t,e)}}function Oo(t){var a=t.alternate;a!==null&&(t.alternate=null,Oo(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Wi(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,Ut=!1;function Ea(t,a,e){for(e=e.child;e!==null;)Bo(t,a,e),e=e.sibling}function Bo(t,a,e){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(wn,e)}catch{}switch(e.tag){case 26:nt||Ht(e,a),Ea(t,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:nt||Ht(e,a);var n=dt,l=Ut;for(dt=e.stateNode,Ea(t,a,e),e=e.stateNode,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Wi(e),dt=n,Ut=l;break;case 5:nt||Ht(e,a);case 6:l=dt;var i=Ut;if(dt=null,Ea(t,a,e),dt=l,Ut=i,dt!==null)if(Ut)try{t=dt,n=e.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)}catch(u){K(e,a,u)}else try{dt.removeChild(e.stateNode)}catch(u){K(e,a,u)}break;case 18:dt!==null&&(Ut?(a=dt,e=e.stateNode,a.nodeType===8?Yr(a.parentNode,e):a.nodeType===1&&Yr(a,e),vl(a)):Yr(dt,e.stateNode));break;case 4:n=dt,l=Ut,dt=e.stateNode.containerInfo,Ut=!0,Ea(t,a,e),dt=n,Ut=l;break;case 0:case 11:case 14:case 15:nt||Za(2,e,a),nt||Za(4,e,a),Ea(t,a,e);break;case 1:nt||(Ht(e,a),n=e.stateNode,typeof n.componentWillUnmount=="function"&&Ao(e,a,n)),Ea(t,a,e);break;case 21:Ea(t,a,e);break;case 22:nt||Ht(e,a),nt=(n=nt)||e.memoizedState!==null,Ea(t,a,e),nt=n;break;default:Ea(t,a,e)}}function Ho(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vl(t)}catch(e){K(a,a.return,e)}}function Dm(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new _o),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new _o),a;default:throw Error(h(435,t.tag))}}function or(t,a){var e=Dm(t);a.forEach(function(n){var l=Ym.bind(null,t,n);e.has(n)||(e.add(n),n.then(l,l))})}function Zt(t,a){var e=a.deletions;if(e!==null)for(var n=0;n<e.length;n++){var l=e[n],i=t,u=a,r=u;t:for(;r!==null;){switch(r.tag){case 27:case 5:dt=r.stateNode,Ut=!1;break t;case 3:dt=r.stateNode.containerInfo,Ut=!0;break t;case 4:dt=r.stateNode.containerInfo,Ut=!0;break t}r=r.return}if(dt===null)throw Error(h(160));Bo(i,u,l),dt=null,Ut=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Uo(a,t),a=a.sibling}var ea=null;function Uo(t,a){var e=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(a,t),Kt(t),n&4&&(Za(3,t,t.return),al(3,t),Za(5,t,t.return));break;case 1:Zt(a,t),Kt(t),n&512&&(nt||e===null||Ht(e,e.return)),n&64&&Aa&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var l=ea;if(Zt(a,t),Kt(t),n&512&&(nt||e===null||Ht(e,e.return)),n&4){var i=e!==null?e.memoizedState:null;if(n=t.memoizedState,e===null)if(n===null)if(t.stateNode===null){t:{n=t.type,e=t.memoizedProps,l=l.ownerDocument||l;a:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[zn]||i[wt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Tt(i,n,e),i[wt]=t,pt(i),n=i;break t;case"link":var u=zf("link","href",l).get(n+(e.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(e.href==null?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(r,1);break a}}i=l.createElement(n),Tt(i,n,e),l.head.appendChild(i);break;case"meta":if(u=zf("meta","content",l).get(n+(e.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(r,1);break a}}i=l.createElement(n),Tt(i,n,e),l.head.appendChild(i);break;default:throw Error(h(468,n))}i[wt]=t,pt(i),n=i}t.stateNode=n}else Df(l,t.type,t.stateNode);else t.stateNode=Ef(l,n,t.memoizedProps);else i!==n?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,n===null?Df(l,t.type,t.stateNode):Ef(l,n,t.memoizedProps)):n===null&&t.stateNode!==null&&zo(t,t.memoizedProps,e.memoizedProps)}break;case 27:if(n&4&&t.alternate===null){l=t.stateNode,i=t.memoizedProps;try{for(var c=l.firstChild;c;){var o=c.nextSibling,p=c.nodeName;c[zn]||p==="HEAD"||p==="BODY"||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=o}for(var v=t.type,m=l.attributes;m.length;)l.removeAttributeNode(m[0]);Tt(l,v,i),l[wt]=t,l[Dt]=i}catch(x){K(t,t.return,x)}}case 5:if(Zt(a,t),Kt(t),n&512&&(nt||e===null||Ht(e,e.return)),t.flags&32){l=t.stateNode;try{Ve(l,"")}catch(x){K(t,t.return,x)}}n&4&&t.stateNode!=null&&(l=t.memoizedProps,zo(t,l,e!==null?e.memoizedProps:l)),n&1024&&(sr=!0);break;case 6:if(Zt(a,t),Kt(t),n&4){if(t.stateNode===null)throw Error(h(162));n=t.memoizedProps,e=t.stateNode;try{e.nodeValue=n}catch(x){K(t,t.return,x)}}break;case 3:if(ji=null,l=ea,ea=Di(a.containerInfo),Zt(a,t),ea=l,Kt(t),n&4&&e!==null&&e.memoizedState.isDehydrated)try{vl(a.containerInfo)}catch(x){K(t,t.return,x)}sr&&(sr=!1,Ro(t));break;case 4:n=ea,ea=Di(t.stateNode.containerInfo),Zt(a,t),Kt(t),ea=n;break;case 12:Zt(a,t),Kt(t);break;case 13:Zt(a,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(vr=ua()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,or(t,n)));break;case 22:if(n&512&&(nt||e===null||Ht(e,e.return)),c=t.memoizedState!==null,o=e!==null&&e.memoizedState!==null,p=Aa,v=nt,Aa=p||c,nt=v||o,Zt(a,t),nt=v,Aa=p,Kt(t),a=t.stateNode,a._current=t,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,n&8192&&(a._visibility=c?a._visibility&-2:a._visibility|1,c&&(a=Aa||nt,e===null||o||a||rn(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(e=null,a=t;;){if(a.tag===5||a.tag===26||a.tag===27){if(e===null){o=e=a;try{if(l=o.stateNode,c)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=o.stateNode,r=o.memoizedProps.style;var g=r!=null&&r.hasOwnProperty("display")?r.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(x){K(o,o.return,x)}}}else if(a.tag===6){if(e===null){o=a;try{o.stateNode.nodeValue=c?"":o.memoizedProps}catch(x){K(o,o.return,x)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=t.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,or(t,e))));break;case 19:Zt(a,t),Kt(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,or(t,n)));break;case 21:break;default:Zt(a,t),Kt(t)}}function Kt(t){var a=t.flags;if(a&2){try{if(t.tag!==27){t:{for(var e=t.return;e!==null;){if(Do(e)){var n=e;break t}e=e.return}throw Error(h(160))}switch(n.tag){case 27:var l=n.stateNode,i=rr(t);mi(t,i,l);break;case 5:var u=n.stateNode;n.flags&32&&(Ve(u,""),n.flags&=-33);var r=rr(t);mi(t,r,u);break;case 3:case 4:var c=n.stateNode.containerInfo,o=rr(t);cr(t,o,c);break;default:throw Error(h(161))}}}catch(p){K(t,t.return,p)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Ro(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Ro(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function za(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Mo(t,a.alternate,a),a=a.sibling}function rn(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Za(4,a,a.return),rn(a);break;case 1:Ht(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&Ao(a,a.return,e),rn(a);break;case 26:case 27:case 5:Ht(a,a.return),rn(a);break;case 22:Ht(a,a.return),a.memoizedState===null&&rn(a);break;default:rn(a)}t=t.sibling}}function Ka(t,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,l=t,i=a,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ka(l,i,e),al(4,i);break;case 1:if(Ka(l,i,e),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(o){K(n,n.return,o)}if(n=i,l=n.updateQueue,l!==null){var r=n.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)To(c[l],r)}catch(o){K(n,n.return,o)}}e&&u&64&&wo(i),Ee(i,i.return);break;case 26:case 27:case 5:Ka(l,i,e),e&&n===null&&u&4&&Eo(i),Ee(i,i.return);break;case 12:Ka(l,i,e);break;case 13:Ka(l,i,e),e&&u&4&&Ho(l,i);break;case 22:i.memoizedState===null&&Ka(l,i,e),Ee(i,i.return);break;default:Ka(l,i,e)}a=a.sibling}}function fr(t,a){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Qn(e))}function dr(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Qn(t))}function Ja(t,a,e,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)No(t,a,e,n),a=a.sibling}function No(t,a,e,n){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ja(t,a,e,n),l&2048&&al(9,a);break;case 3:Ja(t,a,e,n),l&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Qn(t)));break;case 12:if(l&2048){Ja(t,a,e,n),t=a.stateNode;try{var i=a.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){K(a,a.return,c)}}else Ja(t,a,e,n);break;case 23:break;case 22:i=a.stateNode,a.memoizedState!==null?i._visibility&4?Ja(t,a,e,n):el(t,a):i._visibility&4?Ja(t,a,e,n):(i._visibility|=4,cn(t,a,e,n,(a.subtreeFlags&10256)!==0)),l&2048&&fr(a.alternate,a);break;case 24:Ja(t,a,e,n),l&2048&&dr(a.alternate,a);break;default:Ja(t,a,e,n)}}function cn(t,a,e,n,l){for(l=l&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var i=t,u=a,r=e,c=n,o=u.flags;switch(u.tag){case 0:case 11:case 15:cn(i,u,r,c,l),al(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&4?cn(i,u,r,c,l):el(i,u):(p._visibility|=4,cn(i,u,r,c,l)),l&&o&2048&&fr(u.alternate,u);break;case 24:cn(i,u,r,c,l),l&&o&2048&&dr(u.alternate,u);break;default:cn(i,u,r,c,l)}a=a.sibling}}function el(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=t,n=a,l=n.flags;switch(n.tag){case 22:el(e,n),l&2048&&fr(n.alternate,n);break;case 24:el(e,n),l&2048&&dr(n.alternate,n);break;default:el(e,n)}a=a.sibling}}var nl=8192;function sn(t){if(t.subtreeFlags&nl)for(t=t.child;t!==null;)qo(t),t=t.sibling}function qo(t){switch(t.tag){case 26:sn(t),t.flags&nl&&t.memoizedState!==null&&ph(ea,t.memoizedState,t.memoizedProps);break;case 5:sn(t);break;case 3:case 4:var a=ea;ea=Di(t.stateNode.containerInfo),sn(t),ea=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=nl,nl=16777216,sn(t),nl=a):sn(t));break;default:sn(t)}}function Co(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function ll(t){var a=t.deletions;if(t.flags&16){if(a!==null)for(var e=0;e<a.length;e++){var n=a[e];bt=n,Yo(n,t)}Co(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Go(t),t=t.sibling}function Go(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&Za(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&4&&(t.return===null||t.return.tag!==13)?(a._visibility&=-5,hi(t)):ll(t);break;default:ll(t)}}function hi(t){var a=t.deletions;if(t.flags&16){if(a!==null)for(var e=0;e<a.length;e++){var n=a[e];bt=n,Yo(n,t)}Co(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Za(8,a,a.return),hi(a);break;case 22:e=a.stateNode,e._visibility&4&&(e._visibility&=-5,hi(a));break;default:hi(a)}t=t.sibling}}function Yo(t,a){for(;bt!==null;){var e=bt;switch(e.tag){case 0:case 11:case 15:Za(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Qn(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,bt=n;else t:for(e=t;bt!==null;){n=bt;var l=n.sibling,i=n.return;if(Oo(n),n===e){bt=null;break t}if(l!==null){l.return=i,bt=l;break t}bt=i}}}function _m(t,a,e,n){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,a,e,n){return new _m(t,a,e,n)}function mr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wa(t,a){var e=t.alternate;return e===null?(e=Jt(t.tag,a,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=a,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&31457280,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Lo(t,a){t.flags&=31457282;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function gi(t,a,e,n,l,i){var u=0;if(n=t,typeof t=="function")mr(t)&&(u=1);else if(typeof t=="string")u=hh(t,e,ia.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case X:return ze(e.children,l,i,a);case st:u=8,l|=24;break;case da:return t=Jt(12,e,a,l|2),t.elementType=da,t.lanes=i,t;case ma:return t=Jt(13,e,a,l),t.elementType=ma,t.lanes=i,t;case Oe:return t=Jt(19,e,a,l),t.elementType=Oe,t.lanes=i,t;case ne:return Vo(e,l,i,a);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:case xt:u=10;break t;case ut:u=9;break t;case $t:u=11;break t;case Be:u=14;break t;case It:u=16,n=null;break t}u=29,e=Error(h(130,t===null?"null":typeof t,"")),n=null}return a=Jt(u,e,a,l),a.elementType=t,a.type=n,a.lanes=i,a}function ze(t,a,e,n){return t=Jt(7,t,n,a),t.lanes=e,t}function Vo(t,a,e,n){t=Jt(22,t,n,a),t.elementType=ne,t.lanes=e;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=l._current;if(i===null)throw Error(h(456));if(!(l._pendingVisibility&2)){var u=Na(i,2);u!==null&&(l._pendingVisibility|=2,zt(u,i,2))}},attach:function(){var i=l._current;if(i===null)throw Error(h(456));if(l._pendingVisibility&2){var u=Na(i,2);u!==null&&(l._pendingVisibility&=-3,zt(u,i,2))}}};return t.stateNode=l,t}function hr(t,a,e){return t=Jt(6,t,null,a),t.lanes=e,t}function gr(t,a,e){return a=Jt(4,t.children!==null?t.children:[],t.key,a),a.lanes=e,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}function Da(t){t.flags|=4}function Xo(t,a){if(a.type!=="stylesheet"||a.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!_f(a)){if(a=Qt.current,a!==null&&((C&4194176)===C?ca!==null:(C&62914560)!==C&&!(C&536870912)||a!==ca))throw Ln=ku,us;t.flags|=8192}}function pi(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?rc():536870912,t.lanes|=a,fn|=a)}function il(t,a){if(!Y)switch(t.tailMode){case"hidden":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function tt(t){var a=t.alternate!==null&&t.alternate.child===t.child,e=0,n=0;if(a)for(var l=t.child;l!==null;)e|=l.lanes|l.childLanes,n|=l.subtreeFlags&31457280,n|=l.flags&31457280,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)e|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=n,t.childLanes=e,a}function jm(t,a,e){var n=a.pendingProps;switch(bu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(a),null;case 1:return tt(a),null;case 3:return e=a.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),wa(ht),Ne(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(qn(a)?Da(a):t===null||t.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,aa!==null&&(xr(aa),aa=null))),tt(a),null;case 26:return e=a.memoizedState,t===null?(Da(a),e!==null?(tt(a),Xo(a,e)):(tt(a),a.flags&=-16777217)):e?e!==t.memoizedState?(Da(a),tt(a),Xo(a,e)):(tt(a),a.flags&=-16777217):(t.memoizedProps!==n&&Da(a),tt(a),a.flags&=-16777217),null;case 27:Dl(a),e=Ba.current;var l=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==n&&Da(a);else{if(!n){if(a.stateNode===null)throw Error(h(166));return tt(a),null}t=ia.current,qn(a)?ls(a):(t=Sf(l,n,e),a.stateNode=t,Da(a))}return tt(a),null;case 5:if(Dl(a),e=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==n&&Da(a);else{if(!n){if(a.stateNode===null)throw Error(h(166));return tt(a),null}if(t=ia.current,qn(a))ls(a);else{switch(l=zi(Ba.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?l.createElement(e,{is:n.is}):l.createElement(e)}}t[wt]=a,t[Dt]=n;t:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break t;for(;l.sibling===null;){if(l.return===null||l.return===a)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=t;t:switch(Tt(t,e,n),e){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Da(a)}}return tt(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==n&&Da(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(h(166));if(t=Ba.current,qn(a)){if(t=a.stateNode,e=a.memoizedProps,n=null,l=Et,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}t[wt]=a,t=!!(t.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||gf(t.nodeValue,e)),t||ye(a)}else t=zi(t).createTextNode(n),t[wt]=a,a.stateNode=t}return tt(a),null;case 13:if(n=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=qn(a),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(h(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[wt]=a}else Cn(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;tt(a),l=!1}else aa!==null&&(xr(aa),aa=null),l=!0;if(!l)return a.flags&256?(ka(a),a):(ka(a),null)}if(ka(a),a.flags&128)return a.lanes=e,a;if(e=n!==null,t=t!==null&&t.memoizedState!==null,e){n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return e!==t&&e&&(a.child.flags|=8192),pi(a,a.updateQueue),tt(a),null;case 4:return Ne(),t===null&&Hr(a.stateNode.containerInfo),tt(a),null;case 10:return wa(a.type),tt(a),null;case 19:if(gt(mt),l=a.memoizedState,l===null)return tt(a),null;if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)il(l,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=a.child;t!==null;){if(i=Pl(t),i!==null){for(a.flags|=128,il(l,!1),t=i.updateQueue,a.updateQueue=t,pi(a,t),a.subtreeFlags=0,t=e,e=a.child;e!==null;)Lo(e,t),e=e.sibling;return I(mt,mt.current&1|2),a.child}t=t.sibling}l.tail!==null&&ua()>yi&&(a.flags|=128,n=!0,il(l,!1),a.lanes=4194304)}else{if(!n)if(t=Pl(i),t!==null){if(a.flags|=128,n=!0,t=t.updateQueue,a.updateQueue=t,pi(a,t),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Y)return tt(a),null}else 2*ua()-l.renderingStartTime>yi&&e!==536870912&&(a.flags|=128,n=!0,il(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(t=l.last,t!==null?t.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(a=l.tail,l.rendering=a,l.tail=a.sibling,l.renderingStartTime=ua(),a.sibling=null,t=mt.current,I(mt,n?t&1|2:t&1),a):(tt(a),null);case 22:case 23:return ka(a),Tu(),n=a.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?e&536870912&&!(a.flags&128)&&(tt(a),a.subtreeFlags&6&&(a.flags|=8192)):tt(a),e=a.updateQueue,e!==null&&pi(a,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==e&&(a.flags|=2048),t!==null&&gt(ve),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),wa(ht),tt(a),null;case 25:return null}throw Error(h(156,a.tag))}function Mm(t,a){switch(bu(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return wa(ht),Ne(),t=a.flags,t&65536&&!(t&128)?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Dl(a),null;case 13:if(ka(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(h(340));Cn()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return gt(mt),null;case 4:return Ne(),null;case 10:return wa(a.type),null;case 22:case 23:return ka(a),Tu(),t!==null&&gt(ve),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return wa(ht),null;case 25:return null;default:return null}}function Qo(t,a){switch(bu(a),a.tag){case 3:wa(ht),Ne();break;case 26:case 27:case 5:Dl(a);break;case 4:Ne();break;case 13:ka(a);break;case 19:gt(mt);break;case 10:wa(a.type);break;case 22:case 23:ka(a),Tu(),t!==null&&gt(ve);break;case 24:wa(ht)}}var Om={getCacheForType:function(t){var a=At(ht),e=a.data.get(t);return e===void 0&&(e=t(),a.data.set(t,e)),e}},Bm=typeof WeakMap=="function"?WeakMap:Map,at=0,J=null,N=null,C=0,W=0,Rt=null,_a=!1,on=!1,pr=!1,ja=0,lt=0,Fa=0,De=0,yr=0,Wt=0,fn=0,ul=null,oa=null,br=!1,vr=0,yi=1/0,bi=null,$a=null,vi=!1,_e=null,rl=0,kr=0,Sr=null,cl=0,Tr=null;function Nt(){if(at&2&&C!==0)return C&-C;if(_.T!==null){var t=an;return t!==0?t:jr()}return fc()}function Zo(){Wt===0&&(Wt=!(C&536870912)||Y?uc():536870912);var t=Qt.current;return t!==null&&(t.flags|=32),Wt}function zt(t,a,e){(t===J&&W===2||t.cancelPendingCommit!==null)&&(dn(t,0),Ma(t,C,Wt,!1)),En(t,e),(!(at&2)||t!==J)&&(t===J&&(!(at&2)&&(De|=e),lt===4&&Ma(t,C,Wt,!1)),fa(t))}function Ko(t,a,e){if(at&6)throw Error(h(327));var n=!e&&(a&60)===0&&(a&t.expiredLanes)===0||An(t,a),l=n?Rm(t,a):Er(t,a,!0),i=n;do{if(l===0){on&&!n&&Ma(t,a,0,!1);break}else if(l===6)Ma(t,a,0,!_a);else{if(e=t.current.alternate,i&&!Hm(e)){l=Er(t,a,!1),i=!1;continue}if(l===2){if(i=a,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;t:{var r=t;l=ul;var c=r.current.memoizedState.isDehydrated;if(c&&(dn(r,u).flags|=256),u=Er(r,u,!1),u!==2){if(pr&&!c){r.errorRecoveryDisabledLanes|=i,De|=i,l=4;break t}i=oa,oa=l,i!==null&&xr(i)}l=u}if(i=!1,l!==2)continue}}if(l===1){dn(t,0),Ma(t,a,0,!0);break}t:{switch(n=t,l){case 0:case 1:throw Error(h(345));case 4:if((a&4194176)===a){Ma(n,a,Wt,!_a);break t}break;case 2:oa=null;break;case 3:case 5:break;default:throw Error(h(329))}if(n.finishedWork=e,n.finishedLanes=a,(a&62914560)===a&&(i=vr+300-ua(),10<i)){if(Ma(n,a,Wt,!_a),Ol(n,0)!==0)break t;n.timeoutHandle=bf(Jo.bind(null,n,e,oa,bi,br,a,Wt,De,fn,_a,2,-0,0),i);break t}Jo(n,e,oa,bi,br,a,Wt,De,fn,_a,0,-0,0)}}break}while(!0);fa(t)}function xr(t){oa===null?oa=t:oa.push.apply(oa,t)}function Jo(t,a,e,n,l,i,u,r,c,o,p,v,m){var g=a.subtreeFlags;if((g&8192||(g&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:gh},qo(a),a=yh(),a!==null)){t.cancelPendingCommit=a(af.bind(null,t,e,n,l,u,r,c,1,v,m)),Ma(t,i,u,!o);return}af(t,e,n,l,u,r,c,p,v,m)}function Hm(t){for(var a=t;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var l=e[n],i=l.getSnapshot;l=l.value;try{if(!Bt(i(),l))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ma(t,a,e,n){a&=~yr,a&=~De,t.suspendedLanes|=a,t.pingedLanes&=~a,n&&(t.warmLanes|=a),n=t.expirationTimes;for(var l=a;0<l;){var i=31-Ot(l),u=1<<i;n[i]=-1,l&=~u}e!==0&&cc(t,e,a)}function ki(){return at&6?!0:(sl(0),!1)}function wr(){if(N!==null){if(W===0)var t=N.return;else t=N,xa=we=null,ju(t),Pe=null,Vn=0,t=N;for(;t!==null;)Qo(t.alternate,t),t=t.return;N=null}}function dn(t,a){t.finishedWork=null,t.finishedLanes=0;var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Pm(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),wr(),J=t,N=e=Wa(t.current,null),C=a,W=0,Rt=null,_a=!1,on=An(t,a),pr=!1,fn=Wt=yr=De=Fa=lt=0,oa=ul=null,br=!1,a&8&&(a|=a&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=a;0<n;){var l=31-Ot(n),i=1<<l;a|=t[l],n&=~i}return ja=a,Xl(),e}function Wo(t,a){H=null,_.H=sa,a===Yn?(a=ss(),W=3):a===us?(a=ss(),W=4):W=a===ro?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Rt=a,N===null&&(lt=1,oi(t,Lt(a,t.current)))}function Fo(){var t=_.H;return _.H=sa,t===null?sa:t}function $o(){var t=_.A;return _.A=Om,t}function Ar(){lt=4,_a||(C&4194176)!==C&&Qt.current!==null||(on=!0),!(Fa&134217727)&&!(De&134217727)||J===null||Ma(J,C,Wt,!1)}function Er(t,a,e){var n=at;at|=2;var l=Fo(),i=$o();(J!==t||C!==a)&&(bi=null,dn(t,a)),a=!1;var u=lt;t:do try{if(W!==0&&N!==null){var r=N,c=Rt;switch(W){case 8:wr(),u=6;break t;case 3:case 2:case 6:Qt.current===null&&(a=!0);var o=W;if(W=0,Rt=null,mn(t,r,c,o),e&&on){u=0;break t}break;default:o=W,W=0,Rt=null,mn(t,r,c,o)}}Um(),u=lt;break}catch(p){Wo(t,p)}while(!0);return a&&t.shellSuspendCounter++,xa=we=null,at=n,_.H=l,_.A=i,N===null&&(J=null,C=0,Xl()),u}function Um(){for(;N!==null;)Io(N)}function Rm(t,a){var e=at;at|=2;var n=Fo(),l=$o();J!==t||C!==a?(bi=null,yi=ua()+500,dn(t,a)):on=An(t,a);t:do try{if(W!==0&&N!==null){a=N;var i=Rt;a:switch(W){case 1:W=0,Rt=null,mn(t,a,i,1);break;case 2:if(rs(i)){W=0,Rt=null,Po(a);break}a=function(){W===2&&J===t&&(W=7),fa(t)},i.then(a,a);break t;case 3:W=7;break t;case 4:W=5;break t;case 7:rs(i)?(W=0,Rt=null,Po(a)):(W=0,Rt=null,mn(t,a,i,7));break;case 5:var u=null;switch(N.tag){case 26:u=N.memoizedState;case 5:case 27:var r=N;if(!u||_f(u)){W=0,Rt=null;var c=r.sibling;if(c!==null)N=c;else{var o=r.return;o!==null?(N=o,Si(o)):N=null}break a}}W=0,Rt=null,mn(t,a,i,5);break;case 6:W=0,Rt=null,mn(t,a,i,6);break;case 8:wr(),lt=6;break t;default:throw Error(h(462))}}Nm();break}catch(p){Wo(t,p)}while(!0);return xa=we=null,_.H=n,_.A=l,at=e,N!==null?0:(J=null,C=0,Xl(),lt)}function Nm(){for(;N!==null&&!id();)Io(N)}function Io(t){var a=ko(t.alternate,t,ja);t.memoizedProps=t.pendingProps,a===null?Si(t):N=a}function Po(t){var a=t,e=a.alternate;switch(a.tag){case 15:case 0:a=ho(e,a,a.pendingProps,a.type,void 0,C);break;case 11:a=ho(e,a,a.pendingProps,a.type.render,a.ref,C);break;case 5:ju(a);default:Qo(e,a),a=N=Lo(a,ja),a=ko(e,a,ja)}t.memoizedProps=t.pendingProps,a===null?Si(t):N=a}function mn(t,a,e,n){xa=we=null,ju(a),Pe=null,Vn=0;var l=a.return;try{if(Am(t,l,a,e,C)){lt=1,oi(t,Lt(e,t.current)),N=null;return}}catch(i){if(l!==null)throw N=l,i;lt=1,oi(t,Lt(e,t.current)),N=null;return}a.flags&32768?(Y||n===1?t=!0:on||C&536870912?t=!1:(_a=t=!0,(n===2||n===3||n===6)&&(n=Qt.current,n!==null&&n.tag===13&&(n.flags|=16384))),tf(a,t)):Si(a)}function Si(t){var a=t;do{if(a.flags&32768){tf(a,_a);return}t=a.return;var e=jm(a.alternate,a,ja);if(e!==null){N=e;return}if(a=a.sibling,a!==null){N=a;return}N=a=t}while(a!==null);lt===0&&(lt=5)}function tf(t,a){do{var e=Mm(t.alternate,t);if(e!==null){e.flags&=32767,N=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(t=t.sibling,t!==null)){N=t;return}N=t=e}while(t!==null);lt=6,N=null}function af(t,a,e,n,l,i,u,r,c,o){var p=_.T,v=G.p;try{G.p=2,_.T=null,qm(t,a,e,n,v,l,i,u,r,c,o)}finally{_.T=p,G.p=v}}function qm(t,a,e,n,l,i,u,r){do hn();while(_e!==null);if(at&6)throw Error(h(327));var c=t.finishedWork;if(n=t.finishedLanes,c===null)return null;if(t.finishedWork=null,t.finishedLanes=0,c===t.current)throw Error(h(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var o=c.lanes|c.childLanes;if(o|=gu,pd(t,n,o,i,u,r),t===J&&(N=J=null,C=0),!(c.subtreeFlags&10256)&&!(c.flags&10256)||vi||(vi=!0,kr=o,Sr=e,Lm(_l,function(){return hn(),null})),e=(c.flags&15990)!==0,c.subtreeFlags&15990||e?(e=_.T,_.T=null,i=G.p,G.p=2,u=at,at|=4,zm(t,c),Uo(c,t),cm(qr,t.containerInfo),Bi=!!Nr,qr=Nr=null,t.current=c,Mo(t,c.alternate,c),ud(),at=u,G.p=i,_.T=e):t.current=c,vi?(vi=!1,_e=t,rl=n):ef(t,o),o=t.pendingLanes,o===0&&($a=null),fd(c.stateNode),fa(t),a!==null)for(l=t.onRecoverableError,c=0;c<a.length;c++)o=a[c],l(o.value,{componentStack:o.stack});return rl&3&&hn(),o=t.pendingLanes,n&4194218&&o&42?t===Tr?cl++:(cl=0,Tr=t):cl=0,sl(0),null}function ef(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Qn(a)))}function hn(){if(_e!==null){var t=_e,a=kr;kr=0;var e=oc(rl),n=_.T,l=G.p;try{if(G.p=32>e?32:e,_.T=null,_e===null)var i=!1;else{e=Sr,Sr=null;var u=_e,r=rl;if(_e=null,rl=0,at&6)throw Error(h(331));var c=at;if(at|=4,Go(u.current),No(u,u.current,r,e),at=c,sl(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(wn,u)}catch{}i=!0}return i}finally{G.p=l,_.T=n,ef(t,a)}}return!1}function nf(t,a,e){a=Lt(e,a),a=Xu(t.stateNode,a,2),t=Qa(t,a,2),t!==null&&(En(t,2),fa(t))}function K(t,a,e){if(t.tag===3)nf(t,t,e);else for(;a!==null;){if(a.tag===3){nf(a,t,e);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($a===null||!$a.has(n))){t=Lt(e,t),e=io(2),n=Qa(a,e,2),n!==null&&(uo(e,n,a,t),En(n,2),fa(n));break}}a=a.return}}function zr(t,a,e){var n=t.pingCache;if(n===null){n=t.pingCache=new Bm;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(e)||(pr=!0,l.add(e),t=Cm.bind(null,t,a,e),a.then(t,t))}function Cm(t,a,e){var n=t.pingCache;n!==null&&n.delete(a),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,J===t&&(C&e)===e&&(lt===4||lt===3&&(C&62914560)===C&&300>ua()-vr?!(at&2)&&dn(t,0):yr|=e,fn===C&&(fn=0)),fa(t)}function lf(t,a){a===0&&(a=rc()),t=Na(t,a),t!==null&&(En(t,a),fa(t))}function Gm(t){var a=t.memoizedState,e=0;a!==null&&(e=a.retryLane),lf(t,e)}function Ym(t,a){var e=0;switch(t.tag){case 13:var n=t.stateNode,l=t.memoizedState;l!==null&&(e=l.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(h(314))}n!==null&&n.delete(a),lf(t,e)}function Lm(t,a){return Qi(t,a)}var Ti=null,gn=null,Dr=!1,xi=!1,_r=!1,je=0;function fa(t){t!==gn&&t.next===null&&(gn===null?Ti=gn=t:gn=gn.next=t),xi=!0,Dr||(Dr=!0,Xm(Vm))}function sl(t,a){if(!_r&&xi){_r=!0;do for(var e=!1,n=Ti;n!==null;){if(t!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var u=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-Ot(42|t)+1)-1,i&=l&~(u&~r),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(e=!0,cf(n,i))}else i=C,i=Ol(n,n===J?i:0),!(i&3)||An(n,i)||(e=!0,cf(n,i));n=n.next}while(e);_r=!1}}function Vm(){xi=Dr=!1;var t=0;je!==0&&(Im()&&(t=je),je=0);for(var a=ua(),e=null,n=Ti;n!==null;){var l=n.next,i=uf(n,a);i===0?(n.next=null,e===null?Ti=l:e.next=l,l===null&&(gn=e)):(e=n,(t!==0||i&3)&&(xi=!0)),n=l}sl(t)}function uf(t,a){for(var e=t.suspendedLanes,n=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Ot(i),r=1<<u,c=l[u];c===-1?(!(r&e)||r&n)&&(l[u]=gd(r,a)):c<=a&&(t.expiredLanes|=r),i&=~r}if(a=J,e=C,e=Ol(t,t===a?e:0),n=t.callbackNode,e===0||t===a&&W===2||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Zi(n),t.callbackNode=null,t.callbackPriority=0;if(!(e&3)||An(t,e)){if(a=e&-e,a===t.callbackPriority)return a;switch(n!==null&&Zi(n),oc(e)){case 2:case 8:e=lc;break;case 32:e=_l;break;case 268435456:e=ic;break;default:e=_l}return n=rf.bind(null,t),e=Qi(e,n),t.callbackPriority=a,t.callbackNode=e,a}return n!==null&&n!==null&&Zi(n),t.callbackPriority=2,t.callbackNode=null,2}function rf(t,a){var e=t.callbackNode;if(hn()&&t.callbackNode!==e)return null;var n=C;return n=Ol(t,t===J?n:0),n===0?null:(Ko(t,n,a),uf(t,ua()),t.callbackNode!=null&&t.callbackNode===e?rf.bind(null,t):null)}function cf(t,a){if(hn())return null;Ko(t,a,!0)}function Xm(t){th(function(){at&6?Qi(nc,t):t()})}function jr(){return je===0&&(je=uc()),je}function sf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(""+t)}function of(t,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,t.id&&e.setAttribute("form",t.id),a.parentNode.insertBefore(e,a),t=new FormData(t),e.parentNode.removeChild(e),t}function Qm(t,a,e,n,l){if(a==="submit"&&e&&e.stateNode===l){var i=sf((l[Dt]||null).action),u=n.submitter;u&&(a=(a=u[Dt]||null)?sf(a.formAction):u.getAttribute("formAction"),a!==null&&(i=a,u=null));var r=new Yl("action","action",null,n,l);t.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(je!==0){var c=u?of(l,u):new FormData(l);Cu(e,{pending:!0,data:c,method:l.method,action:i},null,c)}}else typeof i=="function"&&(r.preventDefault(),c=u?of(l,u):new FormData(l),Cu(e,{pending:!0,data:c,method:l.method,action:i},i,c))},currentTarget:l}]})}}for(var Mr=0;Mr<ts.length;Mr++){var Or=ts[Mr],Zm=Or.toLowerCase(),Km=Or[0].toUpperCase()+Or.slice(1);ta(Zm,"on"+Km)}ta(Wc,"onAnimationEnd"),ta(Fc,"onAnimationIteration"),ta($c,"onAnimationStart"),ta("dblclick","onDoubleClick"),ta("focusin","onFocus"),ta("focusout","onBlur"),ta(om,"onTransitionRun"),ta(fm,"onTransitionStart"),ta(dm,"onTransitionCancel"),ta(Ic,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function ff(t,a){a=(a&4)!==0;for(var e=0;e<t.length;e++){var n=t[e],l=n.event;n=n.listeners;t:{var i=void 0;if(a)for(var u=n.length-1;0<=u;u--){var r=n[u],c=r.instance,o=r.currentTarget;if(r=r.listener,c!==i&&l.isPropagationStopped())break t;i=r,l.currentTarget=o;try{i(l)}catch(p){si(p)}l.currentTarget=null,i=c}else for(u=0;u<n.length;u++){if(r=n[u],c=r.instance,o=r.currentTarget,r=r.listener,c!==i&&l.isPropagationStopped())break t;i=r,l.currentTarget=o;try{i(l)}catch(p){si(p)}l.currentTarget=null,i=c}}}}function q(t,a){var e=a[Ji];e===void 0&&(e=a[Ji]=new Set);var n=t+"__bubble";e.has(n)||(df(a,t,2,!1),e.add(n))}function Br(t,a,e){var n=0;a&&(n|=4),df(e,t,n,a)}var wi="_reactListening"+Math.random().toString(36).slice(2);function Hr(t){if(!t[wi]){t[wi]=!0,mc.forEach(function(e){e!=="selectionchange"&&(Jm.has(e)||Br(e,!1,t),Br(e,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[wi]||(a[wi]=!0,Br("selectionchange",!1,a))}}function df(t,a,e,n){switch(Uf(a)){case 2:var l=kh;break;case 8:l=Sh;break;default:l=Kr}e=l.bind(null,a,e,t),l=void 0,!eu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?t.addEventListener(a,e,{capture:!0,passive:l}):t.addEventListener(a,e,!0):l!==void 0?t.addEventListener(a,e,{passive:l}):t.addEventListener(a,e,!1)}function Ur(t,a,e,n,l){var i=n;if(!(a&1)&&!(a&2)&&n!==null)t:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var r=n.stateNode.containerInfo;if(r===l||r.nodeType===8&&r.parentNode===l)break;if(u===4)for(u=n.return;u!==null;){var c=u.tag;if((c===3||c===4)&&(c=u.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;u=u.return}for(;r!==null;){if(u=oe(r),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){n=i=u;continue t}r=r.parentNode}}n=n.return}Ac(function(){var o=i,p=tu(e),v=[];t:{var m=Pc.get(t);if(m!==void 0){var g=Yl,x=t;switch(t){case"keypress":if(Cl(e)===0)break t;case"keydown":case"keyup":g=Yd;break;case"focusin":x="focus",g=uu;break;case"focusout":x="blur",g=uu;break;case"beforeblur":case"afterblur":g=uu;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Xd;break;case Wc:case Fc:case $c:g=Od;break;case Ic:g=Zd;break;case"scroll":case"scrollend":g=zd;break;case"wheel":g=Jd;break;case"copy":case"cut":case"paste":g=Hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jc;break;case"toggle":case"beforetoggle":g=Fd}var M=(a&4)!==0,it=!M&&(t==="scroll"||t==="scrollend"),f=M?m!==null?m+"Capture":null:m;M=[];for(var s=o,d;s!==null;){var b=s;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||f===null||(b=_n(s,f),b!=null&&M.push(fl(s,b,d))),it)break;s=s.return}0<M.length&&(m=new g(m,x,null,e,p),v.push({event:m,listeners:M}))}}if(!(a&7)){t:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&e!==Pi&&(x=e.relatedTarget||e.fromElement)&&(oe(x)||x[qe]))break t;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(x=e.relatedTarget||e.toElement,g=o,x=x?oe(x):null,x!==null&&(it=j(x),M=x.tag,x!==it||M!==5&&M!==27&&M!==6)&&(x=null)):(g=null,x=o),g!==x)){if(M=Dc,b="onMouseLeave",f="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(M=jc,b="onPointerLeave",f="onPointerEnter",s="pointer"),it=g==null?m:Dn(g),d=x==null?m:Dn(x),m=new M(b,s+"leave",g,e,p),m.target=it,m.relatedTarget=d,b=null,oe(p)===o&&(M=new M(f,s+"enter",x,e,p),M.target=d,M.relatedTarget=it,b=M),it=b,g&&x)a:{for(M=g,f=x,s=0,d=M;d;d=pn(d))s++;for(d=0,b=f;b;b=pn(b))d++;for(;0<s-d;)M=pn(M),s--;for(;0<d-s;)f=pn(f),d--;for(;s--;){if(M===f||f!==null&&M===f.alternate)break a;M=pn(M),f=pn(f)}M=null}else M=null;g!==null&&mf(v,m,g,M,!1),x!==null&&it!==null&&mf(v,it,x,M,!0)}}t:{if(m=o?Dn(o):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var T=qc;else if(Rc(m))if(Cc)T=um;else{T=lm;var U=nm}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?o&&Ii(o.elementType)&&(T=qc):T=im;if(T&&(T=T(t,o))){Nc(v,T,e,p);break t}U&&U(t,m,o),t==="focusout"&&o&&m.type==="number"&&o.memoizedProps.value!=null&&$i(m,"number",m.value)}switch(U=o?Dn(o):window,t){case"focusin":(Rc(U)||U.contentEditable==="true")&&(Ke=U,du=o,Nn=null);break;case"focusout":Nn=du=Ke=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Kc(v,e,p);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":Kc(v,e,p)}var w;if(cu)t:{switch(t){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Ze?Hc(t,e)&&(D="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(D="onCompositionStart");D&&(Mc&&e.locale!=="ko"&&(Ze||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ze&&(w=Ec()):(Ra=p,nu="value"in Ra?Ra.value:Ra.textContent,Ze=!0)),U=Ai(o,D),0<U.length&&(D=new _c(D,t,null,e,p),v.push({event:D,listeners:U}),w?D.data=w:(w=Uc(e),w!==null&&(D.data=w)))),(w=Id?Pd(t,e):tm(t,e))&&(D=Ai(o,"onBeforeInput"),0<D.length&&(U=new _c("onBeforeInput","beforeinput",null,e,p),v.push({event:U,listeners:D}),U.data=w)),Qm(v,t,o,e,p)}ff(v,a)})}function fl(t,a,e){return{instance:t,listener:a,currentTarget:e}}function Ai(t,a){for(var e=a+"Capture",n=[];t!==null;){var l=t,i=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=_n(t,e),l!=null&&n.unshift(fl(t,l,i)),l=_n(t,a),l!=null&&n.push(fl(t,l,i))),t=t.return}return n}function pn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function mf(t,a,e,n,l){for(var i=a._reactName,u=[];e!==null&&e!==n;){var r=e,c=r.alternate,o=r.stateNode;if(r=r.tag,c!==null&&c===n)break;r!==5&&r!==26&&r!==27||o===null||(c=o,l?(o=_n(e,i),o!=null&&u.unshift(fl(e,o,c))):l||(o=_n(e,i),o!=null&&u.push(fl(e,o,c)))),e=e.return}u.length!==0&&t.push({event:a,listeners:u})}var Wm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function hf(t){return(typeof t=="string"?t:""+t).replace(Wm,`
`).replace(Fm,"")}function gf(t,a){return a=hf(a),hf(t)===a}function Ei(){}function Z(t,a,e,n,l,i){switch(e){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||Ve(t,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&Ve(t,""+n);break;case"className":Hl(t,"class",n);break;case"tabIndex":Hl(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(t,e,n);break;case"style":xc(t,n,i);break;case"data":if(a!=="object"){Hl(t,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||e!=="href")){t.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(e);break}n=Nl(""+n),t.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(a!=="input"&&Z(t,a,"name",l.name,l,null),Z(t,a,"formEncType",l.formEncType,l,null),Z(t,a,"formMethod",l.formMethod,l,null),Z(t,a,"formTarget",l.formTarget,l,null)):(Z(t,a,"encType",l.encType,l,null),Z(t,a,"method",l.method,l,null),Z(t,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(e);break}n=Nl(""+n),t.setAttribute(e,n);break;case"onClick":n!=null&&(t.onclick=Ei);break;case"onScroll":n!=null&&q("scroll",t);break;case"onScrollEnd":n!=null&&q("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(e=n.__html,e!=null){if(l.children!=null)throw Error(h(60));t.innerHTML=e}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}e=Nl(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,""+n):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":n===!0?t.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,n):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(e,n):t.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(e):t.setAttribute(e,n);break;case"popover":q("beforetoggle",t),q("toggle",t),Bl(t,"popover",n);break;case"xlinkActuate":ya(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ya(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ya(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ya(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ya(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ya(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ya(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ya(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ya(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Bl(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Ad.get(e)||e,Bl(t,e,n))}}function Rr(t,a,e,n,l,i){switch(e){case"style":xc(t,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(e=n.__html,e!=null){if(l.children!=null)throw Error(h(60));t.innerHTML=e}}break;case"children":typeof n=="string"?Ve(t,n):(typeof n=="number"||typeof n=="bigint")&&Ve(t,""+n);break;case"onScroll":n!=null&&q("scroll",t);break;case"onScrollEnd":n!=null&&q("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Ei);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hc.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),a=e.slice(2,l?e.length-7:void 0),i=t[Dt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(a,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(a,n,l);break t}e in t?t[e]=n:n===!0?t.setAttribute(e,""):Bl(t,e,n)}}}function Tt(t,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",t),q("load",t);var n=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,a));default:Z(t,a,i,u,e,null)}}l&&Z(t,a,"srcSet",e.srcSet,e,null),n&&Z(t,a,"src",e.src,e,null);return;case"input":q("invalid",t);var r=i=u=l=null,c=null,o=null;for(n in e)if(e.hasOwnProperty(n)){var p=e[n];if(p!=null)switch(n){case"name":l=p;break;case"type":u=p;break;case"checked":c=p;break;case"defaultChecked":o=p;break;case"value":i=p;break;case"defaultValue":r=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,a));break;default:Z(t,a,n,p,e,null)}}vc(t,i,r,c,o,u,l,!1),Ul(t);return;case"select":q("invalid",t),n=u=i=null;for(l in e)if(e.hasOwnProperty(l)&&(r=e[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":n=r;default:Z(t,a,l,r,e,null)}a=i,e=u,t.multiple=!!n,a!=null?Le(t,!!n,a,!1):e!=null&&Le(t,!!n,e,!0);return;case"textarea":q("invalid",t),i=l=n=null;for(u in e)if(e.hasOwnProperty(u)&&(r=e[u],r!=null))switch(u){case"value":n=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(h(91));break;default:Z(t,a,u,r,e,null)}Sc(t,n,l,i),Ul(t);return;case"option":for(c in e)if(e.hasOwnProperty(c)&&(n=e[c],n!=null))switch(c){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Z(t,a,c,n,e,null)}return;case"dialog":q("cancel",t),q("close",t);break;case"iframe":case"object":q("load",t);break;case"video":case"audio":for(n=0;n<ol.length;n++)q(ol[n],t);break;case"image":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"embed":case"source":case"link":q("error",t),q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in e)if(e.hasOwnProperty(o)&&(n=e[o],n!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,a));default:Z(t,a,o,n,e,null)}return;default:if(Ii(a)){for(p in e)e.hasOwnProperty(p)&&(n=e[p],n!==void 0&&Rr(t,a,p,n,e,void 0));return}}for(r in e)e.hasOwnProperty(r)&&(n=e[r],n!=null&&Z(t,a,r,n,e,null))}function $m(t,a,e,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,r=null,c=null,o=null,p=null;for(g in e){var v=e[g];if(e.hasOwnProperty(g)&&v!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":c=v;default:n.hasOwnProperty(g)||Z(t,a,g,null,n,v)}}for(var m in n){var g=n[m];if(v=e[m],n.hasOwnProperty(m)&&(g!=null||v!=null))switch(m){case"type":i=g;break;case"name":l=g;break;case"checked":o=g;break;case"defaultChecked":p=g;break;case"value":u=g;break;case"defaultValue":r=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,a));break;default:g!==v&&Z(t,a,m,g,n,v)}}Fi(t,u,r,c,o,p,i,l);return;case"select":g=u=r=m=null;for(i in e)if(c=e[i],e.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":g=c;default:n.hasOwnProperty(i)||Z(t,a,i,null,n,c)}for(l in n)if(i=n[l],c=e[l],n.hasOwnProperty(l)&&(i!=null||c!=null))switch(l){case"value":m=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==c&&Z(t,a,l,i,n,c)}a=r,e=u,n=g,m!=null?Le(t,!!e,m,!1):!!n!=!!e&&(a!=null?Le(t,!!e,a,!0):Le(t,!!e,e?[]:"",!1));return;case"textarea":g=m=null;for(r in e)if(l=e[r],e.hasOwnProperty(r)&&l!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Z(t,a,r,null,n,l)}for(u in n)if(l=n[u],i=e[u],n.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":m=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:l!==i&&Z(t,a,u,l,n,i)}kc(t,m,g);return;case"option":for(var x in e)if(m=e[x],e.hasOwnProperty(x)&&m!=null&&!n.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:Z(t,a,x,null,n,m)}for(c in n)if(m=n[c],g=e[c],n.hasOwnProperty(c)&&m!==g&&(m!=null||g!=null))switch(c){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:Z(t,a,c,m,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in e)m=e[M],e.hasOwnProperty(M)&&m!=null&&!n.hasOwnProperty(M)&&Z(t,a,M,null,n,m);for(o in n)if(m=n[o],g=e[o],n.hasOwnProperty(o)&&m!==g&&(m!=null||g!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,a));break;default:Z(t,a,o,m,n,g)}return;default:if(Ii(a)){for(var it in e)m=e[it],e.hasOwnProperty(it)&&m!==void 0&&!n.hasOwnProperty(it)&&Rr(t,a,it,void 0,n,m);for(p in n)m=n[p],g=e[p],!n.hasOwnProperty(p)||m===g||m===void 0&&g===void 0||Rr(t,a,p,m,n,g);return}}for(var f in e)m=e[f],e.hasOwnProperty(f)&&m!=null&&!n.hasOwnProperty(f)&&Z(t,a,f,null,n,m);for(v in n)m=n[v],g=e[v],!n.hasOwnProperty(v)||m===g||m==null&&g==null||Z(t,a,v,m,n,g)}var Nr=null,qr=null;function zi(t){return t.nodeType===9?t:t.ownerDocument}function pf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yf(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Cr(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Gr=null;function Im(){var t=window.event;return t&&t.type==="popstate"?t===Gr?!1:(Gr=t,!0):(Gr=null,!1)}var bf=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,th=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(t){return vf.resolve(null).then(t).catch(ah)}:bf;function ah(t){setTimeout(function(){throw t})}function Yr(t,a){var e=a,n=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(n===0){t.removeChild(l),vl(a);return}n--}else e!=="$"&&e!=="$?"&&e!=="$!"||n++;e=l}while(e);vl(a)}function Lr(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Lr(e),Wi(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function eh(t,a,e,n){for(;t.nodeType===1;){var l=e;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[zn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=na(t.nextSibling),t===null)break}return null}function nh(t,a,e){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=na(t.nextSibling),t===null))return null;return t}function na(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}function kf(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(a===0)return t;a--}else e==="/$"&&a++}t=t.previousSibling}return null}function Sf(t,a,e){switch(a=zi(e),t){case"html":if(t=a.documentElement,!t)throw Error(h(452));return t;case"head":if(t=a.head,!t)throw Error(h(453));return t;case"body":if(t=a.body,!t)throw Error(h(454));return t;default:throw Error(h(451))}}var Ft=new Map,Tf=new Set;function Di(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Oa=G.d;G.d={f:lh,r:ih,D:uh,C:rh,L:ch,m:sh,X:fh,S:oh,M:dh};function lh(){var t=Oa.f(),a=ki();return t||a}function ih(t){var a=Ce(t);a!==null&&a.tag===5&&a.type==="form"?Ks(a):Oa.r(t)}var yn=typeof document>"u"?null:document;function xf(t,a,e){var n=yn;if(n&&typeof a=="string"&&a){var l=Gt(a);l='link[rel="'+t+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),Tf.has(l)||(Tf.add(l),t={rel:t,crossOrigin:e,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),Tt(a,"link",t),pt(a),n.head.appendChild(a)))}}function uh(t){Oa.D(t),xf("dns-prefetch",t,null)}function rh(t,a){Oa.C(t,a),xf("preconnect",t,a)}function ch(t,a,e){Oa.L(t,a,e);var n=yn;if(n&&t&&a){var l='link[rel="preload"][as="'+Gt(a)+'"]';a==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+Gt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+Gt(e.imageSizes)+'"]')):l+='[href="'+Gt(t)+'"]';var i=l;switch(a){case"style":i=bn(t);break;case"script":i=vn(t)}Ft.has(i)||(t=V({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:t,as:a},e),Ft.set(i,t),n.querySelector(l)!==null||a==="style"&&n.querySelector(dl(i))||a==="script"&&n.querySelector(ml(i))||(a=n.createElement("link"),Tt(a,"link",t),pt(a),n.head.appendChild(a)))}}function sh(t,a){Oa.m(t,a);var e=yn;if(e&&t){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+Gt(n)+'"][href="'+Gt(t)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=vn(t)}if(!Ft.has(i)&&(t=V({rel:"modulepreload",href:t},a),Ft.set(i,t),e.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ml(i)))return}n=e.createElement("link"),Tt(n,"link",t),pt(n),e.head.appendChild(n)}}}function oh(t,a,e){Oa.S(t,a,e);var n=yn;if(n&&t){var l=Ge(n).hoistableStyles,i=bn(t);a=a||"default";var u=l.get(i);if(!u){var r={loading:0,preload:null};if(u=n.querySelector(dl(i)))r.loading=5;else{t=V({rel:"stylesheet",href:t,"data-precedence":a},e),(e=Ft.get(i))&&Vr(t,e);var c=u=n.createElement("link");pt(c),Tt(c,"link",t),c._p=new Promise(function(o,p){c.onload=o,c.onerror=p}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,_i(u,a,n)}u={type:"stylesheet",instance:u,count:1,state:r},l.set(i,u)}}}function fh(t,a){Oa.X(t,a);var e=yn;if(e&&t){var n=Ge(e).hoistableScripts,l=vn(t),i=n.get(l);i||(i=e.querySelector(ml(l)),i||(t=V({src:t,async:!0},a),(a=Ft.get(l))&&Xr(t,a),i=e.createElement("script"),pt(i),Tt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function dh(t,a){Oa.M(t,a);var e=yn;if(e&&t){var n=Ge(e).hoistableScripts,l=vn(t),i=n.get(l);i||(i=e.querySelector(ml(l)),i||(t=V({src:t,async:!0,type:"module"},a),(a=Ft.get(l))&&Xr(t,a),i=e.createElement("script"),pt(i),Tt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function wf(t,a,e,n){var l=(l=Ba.current)?Di(l):null;if(!l)throw Error(h(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=bn(e.href),e=Ge(l).hoistableStyles,n=e.get(a),n||(n={type:"style",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=bn(e.href);var i=Ge(l).hoistableStyles,u=i.get(t);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=l.querySelector(dl(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Ft.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Ft.set(t,e),i||mh(l,t,e,u.state))),a&&n===null)throw Error(h(528,""));return u}if(a&&n!==null)throw Error(h(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=vn(e),e=Ge(l).hoistableScripts,n=e.get(a),n||(n={type:"script",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,t))}}function bn(t){return'href="'+Gt(t)+'"'}function dl(t){return'link[rel="stylesheet"]['+t+"]"}function Af(t){return V({},t,{"data-precedence":t.precedence,precedence:null})}function mh(t,a,e,n){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=t.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),Tt(a,"link",e),pt(a),t.head.appendChild(a))}function vn(t){return'[src="'+Gt(t)+'"]'}function ml(t){return"script[async]"+t}function Ef(t,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var n=t.querySelector('style[data-href~="'+Gt(e.href)+'"]');if(n)return a.instance=n,pt(n),n;var l=V({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),pt(n),Tt(n,"style",l),_i(n,e.precedence,t),a.instance=n;case"stylesheet":l=bn(e.href);var i=t.querySelector(dl(l));if(i)return a.state.loading|=4,a.instance=i,pt(i),i;n=Af(e),(l=Ft.get(l))&&Vr(n,l),i=(t.ownerDocument||t).createElement("link"),pt(i);var u=i;return u._p=new Promise(function(r,c){u.onload=r,u.onerror=c}),Tt(i,"link",n),a.state.loading|=4,_i(i,e.precedence,t),a.instance=i;case"script":return i=vn(e.src),(l=t.querySelector(ml(i)))?(a.instance=l,pt(l),l):(n=e,(l=Ft.get(i))&&(n=V({},e),Xr(n,l)),t=t.ownerDocument||t,l=t.createElement("script"),pt(l),Tt(l,"link",n),t.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(h(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(n=a.instance,a.state.loading|=4,_i(n,e.precedence,t));return a.instance}function _i(t,a,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,u=0;u<n.length;u++){var r=n[u];if(r.dataset.precedence===a)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(t,a.firstChild))}function Vr(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Xr(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ji=null;function zf(t,a,e){if(ji===null){var n=new Map,l=ji=new Map;l.set(e,n)}else l=ji,n=l.get(e),n||(n=new Map,l.set(e,n));if(n.has(t))return n;for(n.set(t,null),e=e.getElementsByTagName(t),l=0;l<e.length;l++){var i=e[l];if(!(i[zn]||i[wt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(a)||"";u=t+u;var r=n.get(u);r?r.push(i):n.set(u,[i])}}return n}function Df(t,a,e){t=t.ownerDocument||t,t.head.insertBefore(e,a==="title"?t.querySelector("head > title"):null)}function hh(t,a,e){if(e===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function _f(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var hl=null;function gh(){}function ph(t,a,e){if(hl===null)throw Error(h(475));var n=hl;if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var l=bn(e.href),i=t.querySelector(dl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Mi.bind(n),t.then(n,n)),a.state.loading|=4,a.instance=i,pt(i);return}i=t.ownerDocument||t,e=Af(e),(l=Ft.get(l))&&Vr(e,l),i=i.createElement("link"),pt(i);var u=i;u._p=new Promise(function(r,c){u.onload=r,u.onerror=c}),Tt(i,"link",e),a.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(n.count++,a=Mi.bind(n),t.addEventListener("load",a),t.addEventListener("error",a))}}function yh(){if(hl===null)throw Error(h(475));var t=hl;return t.stylesheets&&t.count===0&&Qr(t,t.stylesheets),0<t.count?function(a){var e=setTimeout(function(){if(t.stylesheets&&Qr(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(e)}}:null}function Mi(){if(this.count--,this.count===0){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oi=null;function Qr(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oi=new Map,a.forEach(bh,t),Oi=null,Mi.call(t))}function bh(t,a){if(!(a.state.loading&4)){var e=Oi.get(t);if(e)var n=e.get(null);else{e=new Map,Oi.set(t,e);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),n=u)}n&&e.set(null,n)}l=a.instance,u=l.getAttribute("data-precedence"),i=e.get(u)||n,i===n&&e.set(null,l),e.set(u,l),this.count++,n=Mi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),a.state.loading|=4}}var gl={$$typeof:xt,Provider:null,Consumer:null,_currentValue:qt,_currentValue2:qt,_threadCount:0};function vh(t,a,e,n,l,i,u,r){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function jf(t,a,e,n,l,i,u,r,c,o,p,v){return t=new vh(t,a,e,u,r,c,o,v),a=1,i===!0&&(a|=24),i=Jt(3,null,null,a),t.current=i,i.stateNode=t,a=xu(),a.refCount++,t.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:e,cache:a},nr(i),t}function Mf(t){return t?(t=Fe,t):Fe}function Of(t,a,e,n,l,i){l=Mf(l),n.context===null?n.context=l:n.pendingContext=l,n=Xa(a),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=Qa(t,n,a),e!==null&&(zt(e,t,a),In(e,t,a))}function Bf(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<a?e:a}}function Zr(t,a){Bf(t,a),(t=t.alternate)&&Bf(t,a)}function Hf(t){if(t.tag===13){var a=Na(t,67108864);a!==null&&zt(a,t,67108864),Zr(t,67108864)}}var Bi=!0;function kh(t,a,e,n){var l=_.T;_.T=null;var i=G.p;try{G.p=2,Kr(t,a,e,n)}finally{G.p=i,_.T=l}}function Sh(t,a,e,n){var l=_.T;_.T=null;var i=G.p;try{G.p=8,Kr(t,a,e,n)}finally{G.p=i,_.T=l}}function Kr(t,a,e,n){if(Bi){var l=Jr(n);if(l===null)Ur(t,a,n,Hi,e),Rf(t,n);else if(xh(l,t,a,e,n))n.stopPropagation();else if(Rf(t,n),a&4&&-1<Th.indexOf(t)){for(;l!==null;){var i=Ce(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=se(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var c=1<<31-Ot(u);r.entanglements[1]|=c,u&=~c}fa(i),!(at&6)&&(yi=ua()+500,sl(0))}}break;case 13:r=Na(i,2),r!==null&&zt(r,i,2),ki(),Zr(i,2)}if(i=Jr(n),i===null&&Ur(t,a,n,Hi,e),i===l)break;l=i}l!==null&&n.stopPropagation()}else Ur(t,a,n,null,e)}}function Jr(t){return t=tu(t),Wr(t)}var Hi=null;function Wr(t){if(Hi=null,t=oe(t),t!==null){var a=j(t);if(a===null)t=null;else{var e=a.tag;if(e===13){if(t=$(a),t!==null)return t;t=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Hi=t,null}function Uf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rd()){case nc:return 2;case lc:return 8;case _l:case cd:return 32;case ic:return 268435456;default:return 32}default:return 32}}var Fr=!1,Ia=null,Pa=null,te=null,pl=new Map,yl=new Map,ae=[],Th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rf(t,a){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":te=null;break;case"pointerover":case"pointerout":pl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(a.pointerId)}}function bl(t,a,e,n,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:a,domEventName:e,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},a!==null&&(a=Ce(a),a!==null&&Hf(a)),t):(t.eventSystemFlags|=n,a=t.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),t)}function xh(t,a,e,n,l){switch(a){case"focusin":return Ia=bl(Ia,t,a,e,n,l),!0;case"dragenter":return Pa=bl(Pa,t,a,e,n,l),!0;case"mouseover":return te=bl(te,t,a,e,n,l),!0;case"pointerover":var i=l.pointerId;return pl.set(i,bl(pl.get(i)||null,t,a,e,n,l)),!0;case"gotpointercapture":return i=l.pointerId,yl.set(i,bl(yl.get(i)||null,t,a,e,n,l)),!0}return!1}function Nf(t){var a=oe(t.target);if(a!==null){var e=j(a);if(e!==null){if(a=e.tag,a===13){if(a=$(e),a!==null){t.blockedOn=a,yd(t.priority,function(){if(e.tag===13){var n=Nt(),l=Na(e,n);l!==null&&zt(l,e,n),Zr(e,n)}});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ui(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var e=Jr(t.nativeEvent);if(e===null){e=t.nativeEvent;var n=new e.constructor(e.type,e);Pi=n,e.target.dispatchEvent(n),Pi=null}else return a=Ce(e),a!==null&&Hf(a),t.blockedOn=e,!1;a.shift()}return!0}function qf(t,a,e){Ui(t)&&e.delete(a)}function wh(){Fr=!1,Ia!==null&&Ui(Ia)&&(Ia=null),Pa!==null&&Ui(Pa)&&(Pa=null),te!==null&&Ui(te)&&(te=null),pl.forEach(qf),yl.forEach(qf)}function Ri(t,a){t.blockedOn===a&&(t.blockedOn=null,Fr||(Fr=!0,k.unstable_scheduleCallback(k.unstable_NormalPriority,wh)))}var Ni=null;function Cf(t){Ni!==t&&(Ni=t,k.unstable_scheduleCallback(k.unstable_NormalPriority,function(){Ni===t&&(Ni=null);for(var a=0;a<t.length;a+=3){var e=t[a],n=t[a+1],l=t[a+2];if(typeof n!="function"){if(Wr(n||e)===null)continue;break}var i=Ce(e);i!==null&&(t.splice(a,3),a-=3,Cu(i,{pending:!0,data:l,method:e.method,action:n},n,l))}}))}function vl(t){function a(c){return Ri(c,t)}Ia!==null&&Ri(Ia,t),Pa!==null&&Ri(Pa,t),te!==null&&Ri(te,t),pl.forEach(a),yl.forEach(a);for(var e=0;e<ae.length;e++){var n=ae[e];n.blockedOn===t&&(n.blockedOn=null)}for(;0<ae.length&&(e=ae[0],e.blockedOn===null);)Nf(e),e.blockedOn===null&&ae.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var l=e[n],i=e[n+1],u=l[Dt]||null;if(typeof i=="function")u||Cf(e);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[Dt]||null)r=u.formAction;else if(Wr(l)!==null)continue}else r=u.action;typeof r=="function"?e[n+1]=r:(e.splice(n,3),n-=3),Cf(e)}}}function $r(t){this._internalRoot=t}qi.prototype.render=$r.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(h(409));var e=a.current,n=Nt();Of(e,n,t,a,null,null)},qi.prototype.unmount=$r.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;t.tag===0&&hn(),Of(t.current,2,null,t,null,null),ki(),a[qe]=null}};function qi(t){this._internalRoot=t}qi.prototype.unstable_scheduleHydration=function(t){if(t){var a=fc();t={blockedOn:null,target:t,priority:a};for(var e=0;e<ae.length&&a!==0&&a<ae[e].priority;e++);ae.splice(e,0,t),e===0&&Nf(t)}};var Gf=E.version;if(Gf!=="19.0.0")throw Error(h(527,Gf,"19.0.0"));G.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(h(188)):(t=Object.keys(t).join(","),Error(h(268,t)));return t=Ue(a),t=t!==null?ce(t):null,t=t===null?null:t.stateNode,t};var Ah={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:_,findFiberByHostInstance:oe,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{wn=Ci.inject(Ah),Mt=Ci}catch{}}return kl.createRoot=function(t,a){if(!A(t))throw Error(h(299));var e=!1,n="",l=ao,i=eo,u=no,r=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(r=a.unstable_transitionCallbacks)),a=jf(t,1,!1,null,null,e,n,l,i,u,r,null),t[qe]=a.current,Hr(t.nodeType===8?t.parentNode:t),new $r(a)},kl.hydrateRoot=function(t,a,e){if(!A(t))throw Error(h(299));var n=!1,l="",i=ao,u=eo,r=no,c=null,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks),e.formState!==void 0&&(o=e.formState)),a=jf(t,1,!0,a,e??null,n,l,i,u,r,c,o),a.context=Mf(null),e=a.current,n=Nt(),l=Xa(n),l.callback=null,Qa(e,l,n),a.current.lanes=n,En(a,n),fa(a),t[qe]=a.current,Hr(t),new qi(a)},kl.version="19.0.0",kl}var Xf;function Qh(){if(Xf)return Ir.exports;Xf=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(E){console.error(E)}}return k(),Ir.exports=Xh(),Ir.exports}var Zh=Qh();function Kh(){const{pathname:k}=Zf();return Me.useEffect(()=>{window.scrollTo(0,0)},[k]),null}const Jh=Uh`
  /* colours */
  :root {
    --desk-gray-300: 234, 236, 236;
    --desk-gray-500: 187, 189, 191;
    --desk-gray-700: 52, 53, 53;
    --desk-blue: 46, 89, 169;
    --desk-brown: 87, 74, 67;
    --desk-orange: 227, 108, 42;
    --desk-white: 255, 255, 255;
    --desk-black: 5, 5, 5;
  }

  /* font sizes */
  :root {
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.375rem;
    --text-3xl: 1.5rem;
  }

  /* others */
  :root {
    --max-w: 600px;
  }

  /* global styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #ffffff;
    overflow-y: scroll;
    scrollbar-gutter: stable;
  }

  p,
  li {
    font-family: "DM Sans", sans-serif;
    font-weight: 300;
    font-size: var(--text-xl);
    line-height: 1.333;
    letter-spacing: -0.025em;

    @media (width <= 768px) {
      font-size: var(--text-base);
    }
  }

  main {
    padding: 0 16px;
  }

  /* scrollbar */
  body::-webkit-scrollbar {
    width: 0.8vw;
  }

  body::-webkit-scrollbar-track {
    background-color: rgb(var(--desk-gray-300));
  }

  body::-webkit-scrollbar-thumb {
    background-color: rgba(var(--desk-gray-500), 0.8);
    border-radius: 1em;

    &:hover {
      background-color: rgba(var(--desk-gray-500), 1);
    }
  } 
`,Wh=F.nav`
  background-color: rgb(var(--desk-white));
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgb(var(--desk-gray-300));
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1000;

  @media (width <= 768px) {
    padding: 1rem;
  }
`,Fh=F.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`,$h=F.img`
  width: 120px;
  height: auto;
  display: block;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,Ih=F.menu`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  a {
    display: flex;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: var(--text-base);
    color: rgba(var(--desk-gray-700), 0.8);
    line-height: 1;
    text-decoration-line: none;
    padding-left: 0.75rem;
    letter-spacing: -0.025em;

    &:hover {
      color: rgba(var(--desk-black));
    }

    &:not(:nth-child(3)) {
      @media (width <= 768px) {
        display: none;
      }
    }
  }
`;function Ph(){const k=jh(),E=Zf(),z=R=>{const O=document.getElementById(R);O==null||O.scrollIntoView({behavior:"smooth"})},h=R=>{E.pathname===R?window.scrollTo({top:0,behavior:"smooth"}):k(R)},A=(R,O)=>{if(R.preventDefault(),O.startsWith("#")){const et=O.slice(1);E.pathname!=="/"?k("/",{state:{scrollTo:et}}):z(et)}else h(O)};return Me.useEffect(()=>{var O;const R=(O=E.state)==null?void 0:O.scrollTo;R&&z(R)},[E.state]),{handleClick:A}}const tg="/deskreview-react/svg/logo_full_navbar.svg";function ec(){const{handleClick:k}=Ph(),E=[{href:"#work",label:"Work"},{href:"/",label:"Home"},{href:"/blog",label:"Study"},{href:"#contact",label:"Contact"}];return y.jsx(Wh,{children:y.jsxs(Fh,{children:[y.jsx("a",{href:"/",onClick:z=>k(z,"/"),children:y.jsx($h,{src:tg,alt:"Navbar_Logo",width:"120",height:"30"})}),y.jsx(Ih,{children:E.map(z=>y.jsx("a",{href:z.href,onClick:h=>k(h,z.href),children:z.label},z.href))})]})})}const ag=F.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 48px auto;

  p {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-base);
    color: rgba(var(--desk-gray-700));
    text-align: center;
    line-height: 1;
  }

  @media (width <= 768px) {
    margin: 32px auto;

    p {
      font-size: var(--text-sm);
    }
  }
`;function Jf(){const E=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hourCycle:"h23"});return y.jsx(ag,{children:y.jsxs("p",{children:["© 2025, Deskreview - ",E]})})}const Wf=F.main`
  padding: 16px 16px 32px;
`;F.div`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;
`;const xl=F.section`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;

  @media (width <= 768px) {
    margin: 0px auto 30px;
  }
`,wl=F.h1`
  font-family: "EB Garamond", serif;
  font-weight: 500;
  font-style: oblique;
  font-size: 4.375rem;
  letter-spacing: -0.06em;
  margin-bottom: 16px;

  @media (width <= 768px) {
    font-size: 3.125rem;
    margin-bottom: 8px;
  }
`,kn=F.hr`
  border: 1px solid rgba(var(--desk-gray-500), 0.6);
`,Ff=F.h2`
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-base);
  font-weight: 300;
  padding: 4px 0;

  @media (width <= 768px) {
    font-size: var(--text-xs);
  }
`,$f=F.p`
  font-size: var(--text-2xl);
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  letter-spacing: -0.025em;
  padding: 8px 0;

  @media (width <= 768px) {
    padding: 4px 0;
    font-size: var(--text-base);
  }
`,eg=F.button`
  display: grid;
  cursor: pointer;
  grid-template-columns: 8fr 2fr;
  padding-right: 8px;
  align-items: center;
  text-align: left;
  width: 100%;
  background-color: transparent;
  border: none;

  svg {
    margin-left: auto;
    transform: ${({$isOpen:k})=>k?"rotate(180deg)":"rotate(0deg)"};
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
    transition-duration: 300ms;
  }
`;function ng({companyName:k,isOpen:E,onClick:z}){return y.jsxs(eg,{onClick:z,$isOpen:E,children:[y.jsx($f,{children:k}),y.jsx(Rh,{})]})}const lg=F.div`
  max-height: ${({$isOpen:k})=>k?"3000px":"0"};
  visibility: ${({$isOpen:k})=>k?"visible":"hidden"};
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  transition-duration: 300ms;
  display: flex;
  flex-direction: column;
  gap: 12px 0;

  @media (width <= 768px) {
    gap: 8px 0;
  }
`,Sl=F.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  img {
    object-fit: contain;
    cursor: pointer;
    max-width: 85%;
    height: auto;
    max-height: 100%;
    margin-right: auto;
    border: 1.5px solid rgb(var(--desk-gray-700));
    border-radius: 8px;
  }

  ul {
    display: grid;
    gap: 4px 0;
  }

  li {
    list-style-type: none;
  }

  &:first-of-type {
    margin-top: 16px;
  }

  &:last-of-type {
    margin-bottom: 24px;
  }

  &:nth-of-type(5) {
    margin: 8px 0 32px;
  }

  .text,
  .title {
    font-size: var(--text-lg);
  }

  .title {
    font-weight: 400;
  }

  .text {
    overflow-wrap: break-word;
    max-width: 27ch;
  }

  @media (width <= 768px) {
    img {
      max-width: 95%;
    }

    ul {
      gap: 2px 0;
    }

    &:first-of-type {
      margin-top: 8px;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }

    &:nth-of-type(5) {
      margin: 8px 0 24px;
    }

    .text,
    .title {
      font-size: var(--text-sm);
    }
  }
`;function ig(k){Me.useEffect(()=>{k.forEach(E=>{const z=new Image;z.src=E})},[k])}function ug({servicesItems:k=[],year:E,industry:z,detail:h,images:A=[],isOpen:R}){const[O,et]=Me.useState(0);ig(A);const X=()=>{A.length>0&&et(st=>(st+1)%A.length)};return y.jsxs(lg,{$isOpen:R,children:[y.jsxs(Sl,{children:[y.jsx("p",{className:"title",children:"Services"}),y.jsx("ul",{children:k.map((st,da)=>y.jsx("li",{className:"text",children:st},da))})]}),y.jsxs(Sl,{children:[y.jsx("p",{className:"title",children:"Year"}),y.jsx("p",{className:"text",children:E})]}),y.jsxs(Sl,{children:[y.jsx("p",{className:"title",children:"Industry"}),y.jsx("p",{className:"text",children:z})]}),y.jsxs(Sl,{children:[y.jsx("p",{className:"title",children:"Description"}),y.jsx("p",{className:"text",children:h})]}),A.length>0&&y.jsxs(Sl,{children:[y.jsxs("p",{className:"title",children:[A.length===1?"Picture":"Pictures"," ",y.jsx("br",{}),O+1," ⁄ ",A.length]}),y.jsx("img",{src:A[O],onClick:X,width:"340",height:"425",loading:"eager"})]})]})}const rg=[{companyName:"Astra Honda",servicesItems:["Content Research & Analytic","Digital Trend Analytic"],year:"2023",industry:"Vehicle Manufacture",detail:"As their effort to gain trust with local wisdom and the spirit of #OneHeart, Honda aims to reach more trust and connection withing Indonesia market.",images:["img/home/work/astra_1.webp","img/home/work/astra_2.webp","img/home/work/astra_3.webp"]},{companyName:"Telkomsel",servicesItems:["Campaign Strategy & Development","Social Media Strategy","Online Activation Development"],year:"2023",industry:"Telecommunication",detail:"After their merger with IndiHome, Telkomsel aimed to create a nationwide corporate messaging campaign under #BersatuLebihMaju, resulting in +1 million impression, 20% increase of Engagement Rate, and more than 3000 followers.",images:["img/home/work/telkomsel_1.webp","img/home/work/telkomsel_2.webp","img/home/work/telkomsel_3.webp"]},{companyName:"Salam Ganesha Academy",servicesItems:["Campaign Strategy & Development","Social Media Development","Kol Management"],year:"2024",industry:"Education Tech",detail:"As an education startup, Salam Ganesha Academy transitioned to targeting a more mature senior executive market. Several digital strategies were executed to ensure a smooth transition.",images:["img/home/work/ganesha_1.webp","img/home/work/ganesha_2.webp","img/home/work/ganesha_3.webp"]},{companyName:"Rococo Group Indonesia",servicesItems:["Campaign Strategy & Development","Social Media Development","Kol Management"],year:"2023",industry:"Luxury Fashion Retail",detail:"Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong.",images:["img/home/work/rococo_1.webp","img/home/work/rococo_2.webp","img/home/work/rococo_3.webp"]},{companyName:"Hayati Karya Lestari",servicesItems:["Branding Strategy","Social Media & Website","Brand Architecture"],year:"2023",industry:"NGO",detail:"Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia."}];function cg(){const[k,E]=Me.useState(null),z=h=>{E(A=>A===h?null:h)};return y.jsxs(xl,{children:[y.jsx(wl,{style:{textIndent:"-0.15em"},children:"Works"}),y.jsx(Ff,{children:"Company"}),y.jsx(kn,{}),rg.map((h,A)=>y.jsxs("div",{children:[y.jsx(ng,{isOpen:k===A,onClick:()=>z(A),companyName:h.companyName}),y.jsx(ug,{servicesItems:h.servicesItems,year:h.year,industry:h.industry,detail:h.detail,images:h.images,isOpen:k===A}),y.jsx(kn,{})]},A))]})}const Gi=F.p`
  font-size: var(--text-xl);
  overflow-wrap: break-word;
  margin-bottom: 16px;

  span {
    font-family: "EB Garamond", serif;
    font-style: oblique;
    font-size: var(--text-xl);
    line-height: 1;
  }

  @media (width <= 768px) {
    font-size: var(--text-base);

    span {
      font-size: var(--text-base);
    }
  }
`,sg=F.blockquote`
  margin-top: 20px;

  p {
    font-family: "EB Garamond", serif;
    line-height: 1.2;
    text-align: left;
    max-width: 100%;
    margin-bottom: 0;
    font-size: var(--text-3xl);

    &:last-of-type {
      font-style: italic;
      text-align: right;
    }
  }

  @media (width <= 768px) {
    p {
      font-size: var(--text-xl);
    }
  }
`;function og(){return y.jsxs(xl,{children:[y.jsx(wl,{children:"Manifesto"}),y.jsxs(Gi,{children:[y.jsx("span",{children:"To Seek for The Sun"}),"–A commitment to constantly exploring innovative and emerging sciences in marketing and branding. We focus on crafting strategies that seamlessly position brands within the hearts and minds of society, ensuring they resonate deeply with their audience. Each project we undertake is a journey—an exploration for the"," ",y.jsx("span",{children:"“ideal truth”"})," : we are inspired by the understanding that the branding and marketing science is ever-evolving and dynamic."]}),y.jsxs(Gi,{children:["Our mission transcends traditional branding; we aim to harmonize the rationality of the left brain with the creativity of the right brain, empowering businesses to navigate the complexities of modern markets. In today’s fast-paced, information-rich, and time-poor world, a brand’s value is determined by how effortlessly it enables customers to say"," ",y.jsx("span",{children:"“yes.”"})]}),y.jsx(Gi,{children:"Branding, as we see it, is the art of connecting sound strategy with brilliant creativity. A strong brand pairs these elements to create symbols and messages that resonate with customers, far beyond product features, benefits, or price."}),y.jsxs(Gi,{children:["Our ultimate goal is to help brands become charismatic entities that inspire belief in their uniqueness. A charismatic brand is irreplaceable in the eyes of its audience, and we firmly believe that with the right approach, any brand—",y.jsx("span",{children:"yours included"}),"—can achieve this distinction."]}),y.jsxs(sg,{children:[y.jsxs("p",{children:["A brand is not what you say it is; ",y.jsx("br",{}),"It's what they say it is"]}),y.jsx("p",{id:"work",children:"- Marty Neumeier"})]})]})}const fg=F.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`,dg=[{type:"Digital Campaign",service:["Social Media Handling","Digital Campaign Set-up","Digital Ads Handling","Digital Trend Analysis & Research"]},{type:"Brand Strategy",service:["Visual Identity Development","Branding Communication Set-up","Branding Implementation Set-up"]}];function mg(){return y.jsxs(xl,{children:[y.jsx(wl,{children:"Services"}),y.jsx(fg,{children:dg.map(k=>y.jsxs("div",{children:[y.jsx(Ff,{children:k.type}),y.jsx(kn,{}),k.service.map(E=>y.jsxs("div",{children:[y.jsx($f,{children:E}),y.jsx(kn,{})]},`${k.type}-${E}`))]},k.type))})]})}const ac=F.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(var(--desk-gray-300), 0.5);
  color: rgba(var(--text-black));
  text-decoration: none;
  width: 100%;
  padding: 24px 24px;
  border: 1px solid rgba(var(--desk-gray-300));
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border: 1px solid rgba(var(--desk-gray-500), 0.5);

    p {
      color: rgba(var(--desk-black));
    }

    svg {
      color: rgba(var(--desk-gray-700), 0.5);
    }
  }

  p {
    color: rgba(var(--desk-gray-700));
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
    font-weight: 400;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.025em;
  }

  svg {
    scale: 2;
    color: rgba(var(--desk-gray-500));
    transform: translate(-25%, 0);
  }

  @media (width <= 768px) {
    padding: 16px 16px;

    p {
      font-size: var(--text-sm);
    }

    svg {
      scale: 1.5;
      transform: translate(-25%, 0);
    }
  }
`,hg=F.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  padding-top: 8px;

  @media (width <= 768px) {
    gap: 12px 0;
  }
`;function gg(){return y.jsxs(xl,{children:[y.jsx(wl,{id:"contact",children:"Get in touch"}),y.jsxs(hg,{children:[y.jsxs(ac,{href:"mailto:zaidandzaki@gmail.com",target:"_blank",children:[y.jsx("p",{children:"Email us"}),y.jsx(Nh,{})]}),y.jsxs(ac,{href:"https://wa.me/+6285159177206",target:"_blank",children:[y.jsx("p",{children:"Chat with us"}),y.jsx(qh,{})]}),y.jsxs(ac,{href:"https://www.instagram.com/deskreview/",target:"_blank",children:[y.jsx("p",{children:"Follow us"}),y.jsx(Ch,{})]})]})]})}function pg(){return y.jsxs(Wf,{children:[y.jsx(og,{}),y.jsx(cg,{}),y.jsx(mg,{}),y.jsx(gg,{})]})}function yg(){return y.jsxs(y.Fragment,{children:[y.jsx(ec,{}),y.jsx(pg,{}),y.jsx(Jf,{})]})}F.section`
  max-width: 500px;
  width: 100%;
  margin: 0px auto 40px;

  @media (width <= 768px) {
    margin: 0px auto 30px;
  }
`;const bg=F.div`
  display: flex;
  flex-direction: column;
`,vg={title:"Mengatur Custom Domain .tech di Github Pages",description:"Mengatur custom domain .tech di Github Pages secara gampang",tag:"On-Review",date:"03-01-2023",author:"Abdullah Ammar"},kg=`\r
Sebelumnya pastikan kamu sudah mempunyai domain .tech, domain .tech sendiri bisa didapatkan gratis\r
selama 1 tahun jika kamu sudah mendaftar Github Student Pack. Jika kamu sudah mendaftar Github\r
Student Pack, langsung saja kunjungi\r
[https://get.tech/github-student-developer-pack](https://get.tech/github-student-developer-pack)\r
untuk mendapatkan domain yang kamu inginkan. Setelah mendapatkan domain yang kamu inginkan,\r
selanjutnya langkah-langkah yang dilakukan yaitu:\r
\r
1. Login ke dalam Dashboard\r
2. Jika sudah, pindah ke halaman List of Order dan pilih domain kamu\r
3. Dibagian DNS Management, pilih Manage DNS\r
4. Setelah halaman terbuka di jendela baru, klik tombol CNAME Record, dan tambahkan CNAME Record\r
   dengan name = www dan value = domaingithubkamu.github.io, kemudian Save\r
5. Setelah itu tambahkan beberapa A Records:\r
   - Host Name = @ dan Destination IP Address 185.199.108.153\r
   - Host Name = @ dan Destination IP Address 185.199.109.153\r
   - Host Name = @ dan Destination IP Address 185.199.110.153\r
   - Host Name = @ dan Destination IP Address 185.199.111.153\r
6. Jika sudah, buka repository github kamu dan buka halaman Setting, pergi ke bagian Github Pages\r
   dan masukkan custom domain yang sudah kamu dapatkan tadi dan beri tanda ceklis pada Enforce\r
   HTTPS, jika tanda ceklis belum aktif, tunggu beberapa jam hingga muncul fitur ceklis tersebut.\r
7. Selesai, selamat kamu sudah mempunyai domain kamu sendiri, yeay!\r
`,If=Object.freeze(Object.defineProperty({__proto__:null,content:kg,frontmatter:vg},Symbol.toStringTag,{value:"Module"})),Sg={title:"Integration Test in React",description:"Practical exploration of integration testing in React by learning to simulate user behavior, add mocks, and assert client-side form native validation.",tag:"Blog",keywords:["React","Integration Test","Vitest"],status:"Finished",publishedAt:"2024-01-14",updatedAt:"2024-01-15",image:"../../assets/blog/integration-test-in-react/integration-test-in-react.webp",imageAlt:"Form with white background and several fields to add collection",author:"Abdullah Ammar"},Tg=`\r
## Introduction\r
\r
Testing is an integral part of software development, providing developers with confidence when making additions, changes, or refactors to the codebase. As I've embarked on my journey to learn frontend development, I often found myself pondering what to test first—utility functions, query calls, components, form schemas, or pages. Typically, I start by testing utility functions, such as date or number formatting, mappers, and other pure functions. These are easy, cost-effective, and quick to test. Then, I proceed with integration tests for more complex scenarios, like data creation involving multiple components: input forms, form schemas, confirmation dialogs, and toast notifications. While integration testing is more challenging, costly, and time-consuming compared to unit testing, it provides immense confidence when introducing changes to the application.\r
\r
Over the past few months, I've been learning into integration testing for forms and several pages in my application using Jest and React Testing Library, but for learning purpose, I’ll try to use Vitest here since it's compatible with Jest. I've found this process enjoyable and worthwhile, so I'm documenting it for my own learning purposes.\r
\r
## Project Overview\r
\r
For this tutorial, I'll show how to test a form that uses several types of components with client-side validation. I've used Vitest as a test runner, and mainly use native component and Radix UI for building this form, which affects what we need to mock and how to test the component.\r
\r
## Testing Criteria\r
\r
When conducting integration tests, I've set some criteria to guide my approach:\r
\r
- Minimize the use of mocks: Reducing the reliance on mocks ensures that tests closely resemble user behavior.\r
- Mimic user behavior as closely as possible: The goal is to replicate real-world interactions with the application.\r
- Avoid testing implementation details: Instead of testing how things are implemented, focus on testing the functionality and behavior.\r
\r
## Setup\r
\r
Before diving into integration testing, several configurations must be set up, depending on the components and libraries used in your forms or pages. This might involve:\r
\r
- Mocking various DOM APIs, when using UI components that utilize Browser APIs that not yet implemented in JSDOM.\r
- Generating mock data to be used across test cases.\r
- Developing wrappers for our test renderer.\r
\r
## Mock\r
\r
**ResizeObserver**\r
\r
\`\`\`sh\r
ReferenceError: ResizeObserver is not defined\r
 ❯ node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/packages/react/use-size/src/useSize.tsx:14:30\r
\`\`\`\r
\r
Many component in Radix UI use \`useSize\` hook that implement \`ResizeObserver\` under the hood, thus it will give an error when we run test in JSDOM environment, it’s because JSDOM currently doesn’t implement \`ResizeObserver\`. Therefore, we must add mock to emulate \`ResizeObserver\` behavior.\r
\r
\`\`\`tsx\r
// Mock the ResizeObserver\r
const ResizeObserverMock = vi.fn(() => ({\r
  observe: vi.fn(),\r
  unobserve: vi.fn(),\r
  disconnect: vi.fn(),\r
}));\r
\r
// Stub the global ResizeObserver\r
vi.stubGlobal("ResizeObserver", ResizeObserverMock);\r
\`\`\`\r
\r
## Why Do We Need Mocks?\r
\r
In software development, external components such as APIs or databases aren't always reliable. Mock data allows us to isolate the behavior of these dependencies, ensuring that our code is tested independently without being influenced by these external components. By using mock data, we can precisely control the scenarios and conditions that our code interacts with. This enables us to test specific functionalities, error cases, or edge scenarios without needing access to the actual external components.\r
\r
For example, consider a scenario where we want to test a plant's growth under different watering conditions: three times a day, once a day, and no water at all. Plant growth depends on various factors, including temperature and soil quality. Without controlling these variables, we might get inaccurate results due to their dynamic nature. Factors like cloudy weather affecting temperature or soil contamination can introduce unwanted variability. To evaluate the plant's behavior solely based on water intake, we must simulate or "mock" temperature and soil conditions, ensuring they remain constant and standardized.\r
\r
## Writing Tests\r
\r
Here, we test a form to add a new gallery collection. This form use native validation and consists of several components, including text input, file, date, number, select, checkbox, and radio button.\r
\r
This test case focuses on validating the behavior of the \`CollectionForm\`. It aims to ensure that the form successfully submits when provided with valid input. The test covers user interactions, form submission, and the expected outcomes, including proper rendering and validation of form elements. Here we use Arrange, Act, Assert to structure the test.\r
\r
### Arrange\r
\r
\`\`\`tsx\r
const collection = {\r
  title: "Kapal Karam Dilanda Badai",\r
  description:\r
    "Layaknya karya-karya bercorak Romantisisme, Raden Saleh mengungkapkan gejolak jiwanya yang terombang-ambing antara keinginan menghayati dunia imajinasi dan menyatakan dunia nyata. Perpaduan keduanya terwujud dalam ekspresi visual yang dramatis, emosional, sekaligus misterius. Meski demikian, para seniman romantisis sering juga berkarya berdasarkan pada kenyataan aktual. Dalam lukisan Kapal Dilanda Badai, dapat dilihat bagaimana Raden Saleh mengungkapkan perjuangan dramatis dua buah kapal dalam hempasan badai dahsyat di tengah lautan. Suasana mencekam diekspresikan lewat awan tebal yang gelap dan ombak-ombak tinggi yang menghancurkan salah satu kapal. Dari sudut atas, secercah sinar matahari tampak memantul ke gulungan ombak—menambah kesan dramatis.",\r
  artist: "Raden Saleh",\r
  creationDate: "1840-01-01",\r
  classification: { value: "painting", label: "Painting" },\r
  medium: { value: "oil-on-canvas", label: "Oil on Canvas" },\r
  photo: new File(["Kapal Karam Dilanda Badai"], "kapalKaramDilandaBadai.png", {\r
    type: "image/png",\r
  }),\r
  size: {\r
    width: 98,\r
    height: 74,\r
  },\r
  type: "physical",\r
  isPrivate: false,\r
  terms: true,\r
};\r
\r
describe("CollectionForm", () => {\r
  it("should successfully submit on valid input", async () => {\r
    const onSubmitMockFn = vi.fn();\r
    const user = userEvent.setup();\r
    render(<CollectionForm onSubmit={onSubmitMockFn} />);\r
    const formElements = {\r
      titleInput: screen.getByLabelText(/title/i),\r
      descriptionInput: screen.getByLabelText(/description/i),\r
      artistInput: screen.getByLabelText(/artist/i),\r
      creationDateInput: screen.getByLabelText(/creation date/i),\r
      classificationInput: screen.getByLabelText(/classification/i),\r
      mediumInput: screen.getByLabelText(/medium/i),\r
      sizeWidthInput: screen.getByLabelText(/size \\(cm\\)/i),\r
      sizeHeightInput: screen.getByLabelText(/height/i),\r
      sizeLengthInput: screen.getByLabelText(/length/i),\r
      physicalTypeInput: screen.getByLabelText(/physical/i),\r
      digitalTypeInput: screen.getByLabelText(/digital/i),\r
      photoInput: screen.getByLabelText(/photo/i) as HTMLInputElement,\r
      isPrivateInput: screen.getByLabelText(/private collection/i),\r
      termsInput: screen.getByLabelText(/accept terms and conditions/i),\r
      addCollectionButton: screen.getByRole("button", {\r
        name: /add collection/i,\r
      }),\r
    };\r
  });\r
});\r
\`\`\`\r
\r
Here what we do in Arrange phase:\r
\r
1. Create mock to represent sample data that would typically be entered into the form.\r
2. Add **\`onSubmitMockFn\`** function as a mock function to simulate the form submission callback.\r
3. Render the **\`CollectionForm\`** component into JSDOM.\r
4. Get all component need to be tested by calling **\`screen.getByLabelText\`** and **\`screen.getByRole\`** to interact with input fields and buttons and make sure it's accessible.\r
5. Setup **\`userEvent\`** to simulate user interactions with the form.\r
\r
### Act\r
\r
\`\`\`tsx\r
await user.type(formElements.titleInput, collection.title);\r
await user.type(formElements.descriptionInput, collection.description);\r
await user.type(formElements.artistInput, collection.artist);\r
await user.type(formElements.creationDateInput, collection.creationDate);\r
await user.selectOptions(\r
  formElements.classificationInput,\r
  collection.classification.label\r
);\r
await user.selectOptions(formElements.mediumInput, collection.medium.label);\r
await user.type(formElements.sizeWidthInput, collection.size.width.toString());\r
await user.type(\r
  formElements.sizeHeightInput,\r
  collection.size.height.toString()\r
);\r
await user.click(formElements.physicalTypeInput);\r
await user.upload(formElements.photoInput, collection.photo);\r
await user.click(formElements.isPrivateInput);\r
await user.click(formElements.termsInput);\r
await user.click(formElements.addCollectionButton);\r
\`\`\`\r
\r
There several input interactions simulation here:\r
\r
- \`type\` to simulates user input\r
- \`selectOptions\` to simulate selecting option from \`select\` component\r
- \`click\` to simulate click on input radio, checkbox, and submit button\r
- \`upload\` to simulate adding a photo file\r
\r
### Assert\r
\r
\`\`\`tsx\r
expect(formElements.titleInput).toHaveValue(collection.title);\r
expect(formElements.descriptionInput).toHaveValue(collection.description);\r
expect(formElements.artistInput).toHaveValue(collection.artist);\r
expect(formElements.classificationInput).toHaveValue(\r
  collection.classification.value\r
);\r
expect(formElements.mediumInput).toHaveValue(collection.medium.value);\r
expect(formElements.sizeWidthInput).toHaveValue(collection.size.width);\r
expect(formElements.sizeHeightInput).toHaveValue(collection.size.height);\r
expect(formElements.digitalTypeInput).not.toBeChecked();\r
expect(formElements.physicalTypeInput).toBeChecked();\r
expect(formElements.photoInput.files?.[0]).toBe(collection.photo);\r
expect(formElements.photoInput.files).toHaveLength(1);\r
expect(formElements.isPrivateInput).toBeChecked();\r
expect(formElements.termsInput).toBeChecked();\r
\r
expect(formElements.titleInput).toBeValid();\r
expect(formElements.descriptionInput).toBeValid();\r
expect(formElements.artistInput).toBeValid();\r
expect(formElements.creationDateInput).toBeValid();\r
expect(formElements.classificationInput).toBeValid();\r
expect(formElements.mediumInput).toBeValid();\r
expect(formElements.sizeWidthInput).toBeValid();\r
expect(formElements.sizeHeightInput).toBeValid();\r
expect(formElements.photoInput).toBeValid();\r
expect(formElements.isPrivateInput).toBeValid();\r
expect(formElements.termsInput).toBeValid();\r
\r
expect(onSubmitMockFn).toBeCalledTimes(1);\r
\`\`\`\r
\r
This assertion to ensure that the rendered form matches the expected state after user interactions. This includes checking the accuracy of form element values, validating the correctness of checkbox and radio button states, confirming the invocation of the form submission callback (onSubmitMockFn), and ensuring that all form elements are in a valid state. Any deviation from the expected outcomes during this phase indicates potential issues in the form's functionality or user interface\r
\r
Here our complete test case:\r
\r
\`\`\`tsx\r
import App from "./app";\r
import CollectionForm from "./form";\r
import { cleanup, render, screen, userEvent, within } from "./utils/test-utils";\r
\r
const collection = {\r
  title: "Kapal Karam Dilanda Badai",\r
  description:\r
    "Layaknya karya-karya bercorak Romantisisme, Raden Saleh mengungkapkan gejolak jiwanya yang terombang-ambing antara keinginan menghayati dunia imajinasi dan menyatakan dunia nyata. Perpaduan keduanya terwujud dalam ekspresi visual yang dramatis, emosional, sekaligus misterius. Meski demikian, para seniman romantisis sering juga berkarya berdasarkan pada kenyataan aktual. Dalam lukisan Kapal Dilanda Badai, dapat dilihat bagaimana Raden Saleh mengungkapkan perjuangan dramatis dua buah kapal dalam hempasan badai dahsyat di tengah lautan. Suasana mencekam diekspresikan lewat awan tebal yang gelap dan ombak-ombak tinggi yang menghancurkan salah satu kapal. Dari sudut atas, secercah sinar matahari tampak memantul ke gulungan ombak—menambah kesan dramatis.",\r
  artist: "Raden Saleh",\r
  creationDate: "1840-01-01",\r
  classification: { value: "painting", label: "Painting" },\r
  medium: { value: "oil-on-canvas", label: "Oil on Canvas" },\r
  photo: new File(["Kapal Karam Dilanda Badai"], "kapalKaramDilandaBadai.png", {\r
    type: "image/png",\r
  }),\r
  size: {\r
    width: 98,\r
    height: 74,\r
  },\r
  type: "physical",\r
  isPrivate: false,\r
  terms: true,\r
};\r
\r
describe("CollectionForm", () => {\r
  it("should successfully submit on valid input", async () => {\r
    const onSubmitMockFn = vi.fn();\r
    const user = userEvent.setup();\r
    render(<CollectionForm onSubmit={onSubmitMockFn} />);\r
    const formElements = {\r
      titleInput: screen.getByLabelText(/title/i),\r
      descriptionInput: screen.getByLabelText(/description/i),\r
      artistInput: screen.getByLabelText(/artist/i),\r
      creationDateInput: screen.getByLabelText(/creation date/i),\r
      classificationInput: screen.getByLabelText(/classification/i),\r
      mediumInput: screen.getByLabelText(/medium/i),\r
      sizeWidthInput: screen.getByLabelText(/size \\(cm\\)/i),\r
      sizeHeightInput: screen.getByLabelText(/height/i),\r
      sizeLengthInput: screen.getByLabelText(/length/i),\r
      physicalTypeInput: screen.getByLabelText(/physical/i),\r
      digitalTypeInput: screen.getByLabelText(/digital/i),\r
      photoInput: screen.getByLabelText(/photo/i) as HTMLInputElement,\r
      isPrivateInput: screen.getByLabelText(/private collection/i),\r
      termsInput: screen.getByLabelText(/accept terms and conditions/i),\r
      addCollectionButton: screen.getByRole("button", {\r
        name: /add collection/i,\r
      }),\r
    };\r
\r
    await user.type(formElements.titleInput, collection.title);\r
    await user.type(formElements.descriptionInput, collection.description);\r
    await user.type(formElements.artistInput, collection.artist);\r
    await user.type(formElements.creationDateInput, collection.creationDate);\r
    await user.selectOptions(\r
      formElements.classificationInput,\r
      collection.classification.label\r
    );\r
    await user.selectOptions(formElements.mediumInput, collection.medium.label);\r
    await user.type(\r
      formElements.sizeWidthInput,\r
      collection.size.width.toString()\r
    );\r
    await user.type(\r
      formElements.sizeHeightInput,\r
      collection.size.height.toString()\r
    );\r
    await user.click(formElements.physicalTypeInput);\r
    await user.upload(formElements.photoInput, collection.photo);\r
    await user.click(formElements.isPrivateInput);\r
    await user.click(formElements.termsInput);\r
    await user.click(formElements.addCollectionButton);\r
\r
    expect(formElements.titleInput).toHaveValue(collection.title);\r
    expect(formElements.descriptionInput).toHaveValue(collection.description);\r
    expect(formElements.artistInput).toHaveValue(collection.artist);\r
    expect(formElements.classificationInput).toHaveValue(\r
      collection.classification.value\r
    );\r
    expect(formElements.mediumInput).toHaveValue(collection.medium.value);\r
    expect(formElements.sizeWidthInput).toHaveValue(collection.size.width);\r
    expect(formElements.sizeHeightInput).toHaveValue(collection.size.height);\r
    expect(formElements.digitalTypeInput).not.toBeChecked();\r
    expect(formElements.physicalTypeInput).toBeChecked();\r
    expect(formElements.photoInput.files?.[0]).toBe(collection.photo);\r
    expect(formElements.photoInput.files).toHaveLength(1);\r
    expect(formElements.isPrivateInput).toBeChecked();\r
    expect(formElements.termsInput).toBeChecked();\r
\r
    expect(formElements.titleInput).toBeValid();\r
    expect(formElements.descriptionInput).toBeValid();\r
    expect(formElements.artistInput).toBeValid();\r
    expect(formElements.creationDateInput).toBeValid();\r
    expect(formElements.classificationInput).toBeValid();\r
    expect(formElements.mediumInput).toBeValid();\r
    expect(formElements.sizeWidthInput).toBeValid();\r
    expect(formElements.sizeHeightInput).toBeValid();\r
    expect(formElements.photoInput).toBeValid();\r
    expect(formElements.isPrivateInput).toBeValid();\r
    expect(formElements.termsInput).toBeValid();\r
\r
    expect(onSubmitMockFn).toBeCalledTimes(1);\r
  });\r
});\r
\`\`\`\r
\r
The last step is to run the test by calling \`pnpm test\` and make sure it's all good.\r
\r
![test passed](../../assets/blog/integration-test-in-react/test-result.webp)\r
\r
## Conclusion\r
\r
Remember that testing is an ongoing process and add more test to cover more cases. As your codebase evolves, make sure to update and expand your tests accordingly. Regularly review and refactor your tests to keep them effective and maintainable.\r
\r
## References\r
\r
- https://vitest.dev/\r
- https://testing-library.com/\r
- https://kentcdodds.com/blog/write-tests\r
`,Pf=Object.freeze(Object.defineProperty({__proto__:null,content:Tg,frontmatter:Sg},Symbol.toStringTag,{value:"Module"})),xg={title:"Membangun Kebun Digital",description:"Membangun sebuah tempat untuk belajar dan menumbuhkan ide-ide baru di ruang publik",date:"06-09-2021",author:"Abdullah Ammar"},wg=`\r
Sudah beberapa kali saya mengembangkan website portofolio saya sendiri dengan tujuan untuk menunjukkan hasil implementasi hal-hal yang sedang ataupun sudah saya pelajari dari bangku perkuliahan ataupun _course_ yang saya ambil. Website ini juga sudah beberapa kali saya rombak, mulai dari menggunakan HTML dan CSS, kemudian PHP (mata kuliah pemrograman web), sampai saya ubah lagi menggunakan HTML, CSS, dan JavaScript dengan Web Componentnya.\r
\r
![](/deskreview-react/img/blog/on_review/02/DR%20_%20Social%20Media-24.png)\r
\r
Tujuan pengembangan website saya yang baru ini sebenarnya sama, dengan beberapa tujuan tambahan, salah satunya adalah agar saya bebas berbagi dan beropini tentang hal-hal yang saya buat dan pelajari saat ini, terutama tentang teknologi. Beberapa hal yang menjadi pertimbangan saya ketika mengembangkan website ini, yaitu:\r
\r
1.  _Performance_ - Lighthouse score ≥ 90\r
2.  _Accessible_ - Sebuah website memang sudah seharusnya mudah digunakan oleh semua orang\r
3.  _Maintainable_ - Kode yang ada sebisa mungkin dibuat sesederhana mungkin sehingga mudah ditambahkan, sunting, dan hapus.\r
\r
## Proses\r
\r
Dari ketiga hal diatas, saya menentukan beberapa teknologi yang akhirnya saya pakai untuk mengembangkan website ini.\r
\r
1.  _Performance_\r
\r
    Hal yang pertama saya pikirkan adalah _perfomance_, tujuannya tentu saja agar pengunjung tidak perlu nunggu lama hanya untuk membuka website ini. Pilihan saya jatuh sama Next.js, selain karena saya sudah berniat menggunakan Next.js karena _learning curve_ yang cukup landai (dokumentasi dan tutorialnya mantap) dan kemudahan buat make MDX sebagai _content management system_\\-nya, Next.js juga punya fitur-fitur bawaan yang mendukung optimisasi seperti Automatic Image Optimization dan Font Optimization\r
\r
2.  _Accessible_\r
\r
    Dari komponen yang ada, beberapa komponen saya memilih untuk pakai Reach UI karena jika saya membuatnya sendiri, belum tentu saya bisa memastikan komponen tersebut memiliki aksesibilitas yang baik, contohnya komponen Modal dan Menu, selain itu karena setiap komponen yang ada di Reach UI udah diuji menggunakan berbagai macam peramban beserta _screen reader_\\-nya seperti Safari dengan VoiceOver, Firefox dengan NVDA, dan Edge dengan JAWS.\r
\r
3.  _Maintainable_\r
\r
    Jujur sampai saat ini saya masih belum tau untuk membangun sebuah struktur folder dan mengatur aplikasi skala produksi yang _scalable_ dan _maintanable_, yang menjadi patokan saya saat ini untuk membangun struktur folder adalah artikel yang ditulis oleh Tania Rascia yaitu [React Architecture: How to Structure and Organize a React Application](https://www.taniarascia.com/react-architecture-directory-structure/). Untuk mengatur kodenya saya dibantu oleh ESLint bawaan Next.js sebagai _static code analysis_ dengan sedikit _rules_ tambahan dan Prettier sebagai _code formatter._\r
\r
### Antarmuka Pengguna\r
\r
#### Rancangan\r
\r
Berbekal sedikit pengalaman saya yang sering kali ditunjuk sebagai seorang "desainer grafis" dalam sebuah organisasi dan sedikit pengalaman sebagai _layouter_ di majalah sekolah dan majalah dinding dulu (haha), saya mencoba merancang beberapa halaman website ini menggunakan Figma. Berikut beberapa hasil rancangan tersebut:\r
\r
##### Halaman Home dengan tema _light_\r
\r
![Halaman Home dengan tema _light_](../../assets/blog/membangun-kebun-digital/design-home.webp)\r
\r
##### Halaman Detail Blog di desktop dengan tema _light_\r
\r
![Halaman Detail Blog di desktop dengan tema light](../../assets/blog/membangun-kebun-digital/design-detail.webp)\r
\r
##### Halaman Detail Blog di desktop dengan tema _dark_\r
\r
![Halaman Detail Blog di desktop dengan tema dark](../../assets/blog/membangun-kebun-digital/design-detail-dark.webp)\r
\r
#### Implementasi\r
\r
Karena berbagai alasan, ada beberapa perubahan yang saya lakukan ketika mengimplementasikan rancangan tampilan antarmuka pengguna ini, contohnya seperti pada halaman _home_ yang saya buat menjadi lebih sederhana karena saya kesulitan untuk memilih dan mengkombinasikan warna, namun karena terlalu sederhana dan terkesan membosankan saya mencoba menambahkan fitur interaktif yang terinspirasi dari [taliacotton.com](https://taliacotton.com/) agar tidak terlalu membosankan\r
\r
### Konten\r
\r
Karena tujuan saya mengembangkan website ini adalah berbagi, maka konten yang ada adalah tentang berbagi apa yang menjadi passion saya saat ini dan berbagi ke komunitas tentang apa yang sedang saya alami, pelajari, dan kerjakan, walaupun saya sadar bahwa apa yang saya kerjakan mungkin tidak terlalu berguna untuk orang lain setidaknya website ini, buat saya, bisa jadi wadah arsip untuk proses yang telah saya lalui dan sedikit hasil yang pernah saya dapat.\r
\r
## Tech Stack\r
\r
Dalam mengembangkan website ini, saya memilih Next.js, SCSS Modules, MDX, dan Vercel sebagai kekuatan utama untuk mempersenjatai ~buruh tani~ website ini. Adapun teknologi tambahan yang saya pakai, yaitu:\r
\r
#### Web Technologies\r
\r
1.  [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)\r
2.  [Font Loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API)\r
3.  [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)\r
4.  [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)\r
\r
#### Syntax Highlighting\r
\r
1.  [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)\r
2.  [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)\r
3.  [rehype-code-titles](https://github.com/josestg/rehype-code-title)\r
4.  [rehype-slug](https://github.com/rehypejs/rehype-slug)\r
\r
#### UI Component\r
\r
1.  [@reach/dialog](https://reach.tech/dialog)\r
2.  [@reach/menu-button](https://reach.tech/menu-button)\r
\r
#### Utility\r
\r
1.  [classnames](https://www.npmjs.com/package/classnames)\r
2.  [reading-time](https://www.npmjs.com/package/reading-time)\r
3.  [sharp](https://www.npmjs.com/package/sharp)\r
4.  [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)\r
\r
## Bantuan\r
\r
Beberapa artikel/issues/code snippet/website yang sangat membantu saya dalam mengembangkan website ini:\r
\r
#### Markdown\r
\r
1.  [MDX Bundler with Next.JS](https://www.arcath.net/2021/03/mdx-bundler) by Adam Laycock\r
2.  [MDX in Next.js using mdx-bundler](https://dipeshwagle.com/blog/use-mdx-bundler-next-js) by Dipesh Wagle\r
\r
#### Dark Mode\r
\r
1.  [Dark Mode on the Web](https://fatihkalifa.com/dark-mode-web) by Fatih Kalifa\r
2.  [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) by Adhuham\r
3.  [Emulate dark or light schemes in the rendered page](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/accessibility/preferred-color-scheme-simulation)\r
4.  [Disable theme transitions on theme toggle](https://paco.sh/blog/disable-theme-transitions) by Paco Coursey\r
\r
#### Syntax Highlighting\r
\r
1.  [Code blocks, but better](https://ped.ro/blog/code-blocks-but-better) by Pedro Duarte\r
\r
#### Web Share\r
\r
1.  [How to Use the Web Share API](https://css-tricks.com/how-to-use-the-web-share-api/) by Ayooluwa Isaiah\r
2.  [The Simplest (and Most Performant) Way to Offer Sharing Links for Social Media](https://css-tricks.com/simple-social-sharing-links/) by Adam Coti\r
\r
#### Open Graph\r
\r
1.  [Open Graph Meta Tags: Everything You Need to Know](https://ahrefs.com/blog/open-graph-meta-tags/) by Michal Pecánek\r
\r
#### Favicon\r
\r
1.  [Favicon Generator](https://realfavicongenerator.net/)\r
2.  [SVG, Favicons, and All the Fun Things We Can Do With Them](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/) by Eric Bailey\r
\r
#### Typography\r
\r
1.  [Type Scale - A Visual Calculator](https://type-scale.com/)\r
2.  [Fluid typography](https://fluid-typography.netlify.app/)\r
\r
#### Webmention\r
\r
1.  [Webmention](https://indieweb.org/Webmention)\r
2.  [Into Webmentions With NextJS (or Not)](https://css-tricks.com/jumping-into-webmentions-with-nextjs-or-not/) by Atila Fassina\r
3.  [Using Webmentions in Eleventy](https://mxb.dev/blog/using-webmentions-on-static-sites/) by Max Böck\r
4.  [A Short History of Bi-Directional Links](https://maggieappleton.com/bidirectionals) by Maggie Appleton\r
\r
#### Code Snippet\r
\r
1.  Outline focus by Adam Argyle (@argyleink)\r
\r
    \`\`\`css\r
    @media (prefers-reduced-motion: no-preference) {\r
      :focus {\r
        transition: outline-offset 0.25s ease;\r
        outline-offset: 3px;\r
        outline-color: var(--accent-color-1);\r
      }\r
\r
      html {\r
        scroll-behavior: smooth;\r
      }\r
    }\r
    \`\`\`\r
\r
2.  [Mouse in-out transition](https://codepen.io/argyleink/pen/poEjvpd) by Adam Argyle\r
\r
saya ucapkan terima kasih untuk semua _author_ yang sangat baik hati karena sudah mau berbagi ilmunya secara cuma-cuma :)\r
\r
## Inspirasi\r
\r
Beberapa website yang menjadi inspirasi desain website ini:\r
\r
- [Home](https://eyeondesign.aiga.org/)\r
- [It's Nice That](https://www.itsnicethat.com/)\r
- [Thinking\\*Room](https://www.thinkingroominc.com/)\r
- [Fatih Kalifa | Interface Engineer](http://fatihkalifa.com/)\r
- [We are COLLINS](https://www.wearecollins.com/)\r
- [archives.design](https://archives.design/)\r
- [Experiments with Google](https://experiments.withgoogle.com/)\r
- [Dwinawan - User Interface Designer](http://dwinawan.com/)\r
- [Maggie Appleton](https://maggieappleton.com/)\r
- [Talia Cotton, designer & coder](https://taliacotton.com/)\r
\r
## Hasil\r
\r
Dari beberapa proses yang udah saya jalani tadi, berikut hasil dari pengukuran performa website saya menggunakan Lighthouse:\r
\r
### Desktop\r
\r
![Performa website ketika diakses melalui perangkat desktop yang diukur menggunakan Lighthouse](../../assets/blog/membangun-kebun-digital/lighthouse-desktop.png)\r
\r
![Pengaturan yang dijalankan untuk perangkat desktop ketika diukur menggunakan Lighthouse](../../assets/blog/membangun-kebun-digital/lighthouse-desktop-settings.png)\r
\r
### Mobile\r
\r
![Performa website ketika diakses melalui perangkat mobile yang diukur menggunakan Lighthouse](../../assets/blog/membangun-kebun-digital/lighthouse-mobile.png)\r
\r
![Pengaturan yang dijalankan untuk perangkat mobile ketika diukur menggunakan Lighthouse](../../assets/blog/membangun-kebun-digital/lighthouse-mobile-settings.png)\r
\r
Seperti yang terlihat di atas, bahwa di sisi performa website saya saat ini, terutama pada perangkat _mobile_—yang saya duga karena banyaknya font yang digunakan dan fitur interaktif yang ada pada halaman home—, masih perlu adanya sebuah perbaikan, namun sejauh ini saya cukup puas dengan keseluruhan hasilnya :)\r
\r
## What's Next?\r
\r
Mencoba untuk mulai belajar menulis seputar software engineering dan teknologi, yang semoga saja bisa bermanfaat bagi diri sendiri dan orang lain.\r
\r
Jika kalian punya pertanyaan seputar website ini, atau sekedar ngobrol, maupun berkolaborasi, bisa sapa saya di [Twitter](https://twitter.com/abdmmar)\r
`,td=Object.freeze(Object.defineProperty({__proto__:null,content:wg,frontmatter:xg},Symbol.toStringTag,{value:"Module"})),Ag={title:"Organizing React Code",description:"How I code in React",tag:"Blog",keywords:["React","State Mangement","User Interface"],status:"Draft",publishedAt:"2024-06-14",author:"Abdullah Ammar"},Eg=`\r
There's a lot of ways to handle states in React, either local or server state, \r
from using React Context to share state and Reducer to manage state to use third party library like Redux or Jotai.\r
I feel using both approach can create maintainable code if we have the right mental model.\r
Usually when developing a features, there's data involved, both local and server. \r
From here, we can determine which component that should manage the data and only show the data.\r
I often called it smart and dumb component. Dumb component should "only" handle data rendering and styling, where smart component handle the state management.\r
Handle server and local state management can have many approaches, it depends on what developer choose and prefer.\r
I usually choose React Query if the data served using REST API or Apollo if the data served using GraphQL.\r
Both library "simplify" the application codebase by providing cache management, parallel queries, devtools, and other stuff.\r
So we doesn't need to manually writing the abstractions that often ended up as a spaghetti code, no documentation, hard to extend, lack of features, and boilerplate-y code.\r
\r
Great! server-state management simplified, how about local-state management? Using React Context + Provider might suit your preference and need, \r
but using third party library that can handle state outside React is really helpful. \r
But, the main problem is not the tool per se, if you doesn't know how to wire it together, your code could easily become mess, hard to read, refactor, and test, nightmare.\r
I don't mind if one file has 1000 LoC, if it's  organized well. \r
Fortunately, React support this kind of approach, allowing developer to separate the mapper, constants value, component and data type, dumb and smart component, data-fetching hook, and local-state management in one file, close to each other :D.\r
Here's what I feel a decent code:\r
\r
\`\`\`ts\r
// 3rd part lib\r
import { Table } from '@shadcn/ui'\r
// common\r
import {validation} from '@utils/validation'\r
// local\r
import styles from './styles.module.scss'\r
\r
const CONSTANT_VALUE = 'CONSTANT'\r
\r
const useGetDataQuery = () => {}\r
const useCreateDataMutation = () => {}\r
\r
const mapToOptions = (data: Data[]) => data.map(item => ({label: item.name, value: item.id}))\r
\r
const useModal = () => useAtom(modalAtom)\r
const useItem = () => useAtom(itemAtom)\r
// ...\r
\r
const columns = [\r
  {\r
    key: 'name',\r
    title: 'Name',\r
    render: (value) => <span>{value}</span>\r
  },\r
  {\r
    title: 'Action',\r
    render: (value) => {\r
      const open = useOpenModal()\r
      const setItem = useSetItem()\r
\r
      return (\r
        <div>\r
          <a href="">View</a>\r
          <button onClick={() => {\r
            setItem(value)\r
            open('delete')\r
          }}>Delete</button>\r
        </div>\r
      )\r
    }\r
  }\r
]\r
\r
const DeleteModal = () => {\r
  const form = useForm()\r
  const createMutation = useMutation()\r
  const [item] = useItem()\r
\r
  const onSubmit = async (data) => {\r
    try {\r
      const result = await createMutation(data)\r
      toast.success('success')\r
    } catch (error) {\r
      toast.error(error)\r
    }\r
  }\r
\r
  return (\r
    <Modal>\r
      <Form form={form} onSubmit={onSubmit}>\r
        <Input />\r
        <Button>Submit</Button>\r
      </Form>\r
    </Modal>\r
  )\r
}\r
\r
const Page = () => {\r
  return (\r
    <div>\r
      <Table columns={columns} data={data} />\r
      <AddModal open={} />\r
      <DeleteModal open={} />\r
      <CreateModal open={} />\r
    </div>\r
  )\r
}\r
\`\`\`\r
\r
`,ad=Object.freeze(Object.defineProperty({__proto__:null,content:Eg,frontmatter:Ag},Symbol.toStringTag,{value:"Module"})),zg={title:"Pengujian Web Component",description:"Tutorial singkat pengujian web component menggunakan AVA dan Happy DOM",tag:"Blog",keywords:["Testing","Custom Elements","Web Components"],status:"In Progress",publishedAt:"2021-12-23",image:"../../assets/blog/pengujian-ce/pengujian-ce.webp",imageAlt:"Ilustrasi Testing",author:"Abdullah Ammar"},Dg=`\r
Beberapa minggu yang lalu, saya coba membuat sebuah user interface menggunakan salah satu Web API\r
yaitu Custom Elements API. Dengan API ini memungkinkan kita untuk membuat sebuah komponen web yang\r
mampu berjalan di laman berbasis JavaScript manapun. Apakah proyek web kamu pakai React? Vue?\r
Svelte? Tentu saja bisa, selama _library_ atau _framework_ tersebut mendukung. Untuk memastikan\r
bahwa _custom elements_ atau yang biasa dikenal sebagai _web components_ ini berjalan sebagaimana\r
mestinya—atau setidaknya ketika ada fitur baru ditambahkan kita tidak perlu repot-repot melakukan\r
pengujian secara manual—, tentu saja kita harus melakukan sebuah 😱**pengujian**😱. Tapi sebelum\r
itu, mari kita buat sebuah _custom elements_ sederhana terlebih dahulu, yeay!.\r
\r
## Membuat Komponen\r
\r
Pertama, buat sebuah file baru di root direktori kalian dengan nama \`print-text.js\`. Lalu tambahkan\r
kode berikut:\r
\r
\`\`\`js\r
class PrintText extends HTMLElement {\r
  constructor() {\r
    super();\r
    this.attachShadow({ mode: "open" });\r
    this.template = document.createElement("template");\r
    this.template.innerHTML = PrintText.template();\r
    this.shadowRoot.append(this.template.content.cloneNode(true));\r
  }\r
\r
  connectedCallback() {\r
    this.message = this.getAttribute("message") || "Hello World!";\r
    this.shadowRoot.querySelector("h1").textContent = this.message;\r
  }\r
\r
  static template() {\r
    return \`\r
      <style>\r
        :host {\r
          display: block;\r
          padding: 1rem;\r
          background: #f0f0f0;\r
        }\r
      </style>\r
      <h1></h1>\r
    \`;\r
  }\r
}\r
\r
customElements.define("print-text", PrintText);\r
\`\`\`\r
\r
Kemudian. _import_ file \`print-text.js\` tersebut ke dalam file HTML dan gunakan komponen yang telah\r
dibuat tadi dengan menggunakan tag \`<print-text></print-text>\` di dalam file HTML.\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>Hello World</title>\r
    <script type="module" src="print-text.js"><\/script>\r
  </head>\r
  <body>\r
    <print-text message="Hello World!"></print-text>\r
  </body>\r
</html>\r
\`\`\`\r
\r
Setelah selesai membuat komponen \`print-text\`, mari kita lanjutkan untuk melakukan pengujian.\r
\r
## Konfigurasi Alat Pengujian\r
\r
Pertama-tama kita harus menginstal AVA dan Happy DOM.\r
\r
\`\`\`bash\r
npm install --save-dev ava happy-dom\r
\`\`\`\r
\r
Setelah itu, buat sebuah folder \`__tests__\` di _root_ direktori kamu, buat sebuah file JavaScript\r
baru, dan _import_ AVA serta Happy DOM yang telah kita install.\r
\r
\`\`\`js\r
import test from "ava";\r
import { Window } from "happy-dom";\r
\`\`\`\r
\r
Tambahkan konfigurasi berikut\r
\r
\`\`\`js\r
import test from "ava";\r
import { Window } from "happy-dom";\r
\r
test.before(() => {\r
  const window = new Window();\r
  globalThis.window = window;\r
  globalThis.document = window.document;\r
  globalThis.HTMLElement = window.HTMLElement;\r
  globalThis.customElements = window.customElements;\r
});\r
\`\`\`\r
\r
Import secara dinamis komponen \`print-text\` yang telah kita buat tadi, setiap sebelum kita melakukan\r
pengujian.\r
\r
\`\`\`js\r
import test from "ava";\r
import { Window } from "happy-dom";\r
\r
test.before(() => {\r
  const window = new Window();\r
  globalThis.window = window;\r
  globalThis.document = window.document;\r
  globalThis.HTMLElement = window.HTMLElement;\r
  globalThis.customElements = window.customElements;\r
});\r
\r
test.beforeEach(() => {\r
  import("../print-text.js");\r
});\r
\`\`\`\r
\r
## Pengujian\r
\r
Setelah semua konfigurasi di atas, kita bisa mulai pengujian. Disini kita ingin menguji bahwa\r
komponen \`print-text\` berjalan dengan baik dan mencetak kalimat 'Hello World!' pada DOM.\r
\r
\`\`\`js\r
import test from "ava";\r
import { Window } from "happy-dom";\r
\r
test.before(() => {\r
  const window = new Window();\r
\r
  globalThis.window = window;\r
  globalThis.document = window.document;\r
  globalThis.HTMLElement = window.HTMLElement;\r
  globalThis.customElements = window.customElements;\r
});\r
\r
test.beforeEach(() => {\r
  import("../print-text.js");\r
});\r
\r
test("print-text", (t) => {\r
  const document = globalThis.document;\r
  const printText = document.createElement("print-text");\r
  printText.setAttribute("message", "Hello World!");\r
\r
  document.body.appendChild(printText);\r
\r
  const helloWorld = document.querySelector("print-text");\r
\r
  t.is(helloWorld.tagName, "PRINT-TEXT");\r
  t.is(helloWorld.getAttribute("message"), "Hello World!");\r
});\r
\`\`\`\r
\r
Kemudian jalankan pengujian tersebut menggunakan AVA dengan mejalankan perintah \`ava\` pada terminal\r
\r
\`\`\`bash\r
ava\r
\`\`\`\r
\r
Maka akan terlihat hasil pengujian yang telah kita buat.\r
\r
![print-text is passed the test](../../assets/blog/pengujian-ce/test-passed.webp)\r
\r
Selesai 🎉, kita telah memastikan bahwa komponen \`print-text\` berjalan dengan baik menggunakan AVA\r
dan Happy DOM.\r
\r
## Referensi\r
\r
- [AVA](https://github.com/avajs/ava)\r
- [Happy DOM](https://github.com/capricorn86/happy-dom/tree/master/packages/happy-dom)\r
- [Unit testing web components with ava and jsdom](https://dev.to/ficusjs/unit-testing-web-components-with-ava-and-jsdom-2ofp)\r
`,ed=Object.freeze(Object.defineProperty({__proto__:null,content:Dg,frontmatter:zg},Symbol.toStringTag,{value:"Module"})),_g={title:"Tailwind Prose"},jg=`\r
By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you _really are_ just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.\r
\r
We get lots of complaints about it actually, with people regularly asking us things like:\r
\r
> Why is Tailwind removing the default styles on my \`h1\` elements? How do I disable this? What do you mean I lose all the other base styles too?\r
\r
We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a \`p\` element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look _awesome_, not awful.\r
\r
The \`@tailwindcss/typography\` plugin is our attempt to give you what you _actually_ want, without any of the downsides of doing something stupid like disabling our base styles.\r
\r
It adds a new \`prose\` class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:\r
\r
\`\`\`html\r
<article class="prose">\r
  <h1>Garlic bread with cheese: What the science tells us</h1>\r
  <p>\r
    For years parents have espoused the health benefits of eating garlic bread\r
    with cheese to their children, with the food earning such an iconic status\r
    in our culture that kids will often dress up as warm, cheesy loaf for\r
    Halloween.\r
  </p>\r
  <p>\r
    But a recent study shows that the celebrated appetizer may be linked to a\r
    series of rabies cases springing up around the country.\r
  </p>\r
  <!-- ... -->\r
</article>\r
\`\`\`\r
\r
For more information about how to use the plugin and the features it includes, [read the documentation](https://github.com/tailwindcss/typography/blob/main/README.md).\r
\r
---\r
\r
## What to expect from here on out\r
\r
What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like **bold text**, unordered lists, ordered lists, code blocks, block quotes, _and even italics_.\r
\r
It's important to cover all of these use cases for a few reasons:\r
\r
1. We want everything to look good out of the box.\r
2. Really just the first reason, that's the whole point of the plugin.\r
3. Here's a third pretend reason though a list with three items looks more realistic than a list with two items.\r
\r
Now we're going to try out another header style.\r
\r
### Typography should be easy\r
\r
So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.\r
\r
Something a wise person once told me about typography is:\r
\r
> Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.\r
\r
It's probably important that images look okay here by default as well:\r
\r
Now I'm going to show you an example of an unordered list to make sure that looks good, too:\r
\r
- So here is the first item in this list.\r
- In this example we're keeping the items short.\r
- Later, we'll use longer, more complex list items.\r
\r
And that's the end of this section.\r
\r
## What if we stack headings?\r
\r
### We should make sure that looks good, too.\r
\r
Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.\r
\r
### When a heading comes after a paragraph …\r
\r
When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.\r
\r
- **I often do this thing where list items have headings.**\r
\r
  For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.\r
\r
  I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.\r
\r
- **Since this is a list, I need at least two items.**\r
\r
  I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.\r
\r
- **It's not a bad idea to add a third item either.**\r
\r
  I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it. I'm going to press <kbd>Enter</kbd> now.\r
\r
After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.\r
\r
## Code should look okay by default.\r
\r
I think most people are going to use [highlight.js](https://highlightjs.org/) or [Prism](https://prismjs.com/) or something if they want to style their code blocks but it wouldn't hurt to make them look _okay_ out of the box, even with no syntax highlighting.\r
\r
Here's what a default \`tailwind.config.js\` file looks like at the time of writing:\r
\r
\`\`\`js\r
module.exports = {\r
  purge: [],\r
  theme: {\r
    extend: {},\r
  },\r
  variants: {},\r
  plugins: [],\r
};\r
\`\`\`\r
\r
Hopefully that looks good enough to you.\r
\r
### What about nested lists?\r
\r
Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.\r
\r
1. **Nested lists are rarely a good idea.**\r
   - You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.\r
   - Nested navigation in UIs is a bad idea too, keep things as flat as possible.\r
   - Nesting tons of folders in your source code is also not helpful.\r
2. **Since we need to have more items, here's another one.**\r
   - I'm not sure if we'll bother styling more than two levels deep.\r
   - Two is already too much, three is guaranteed to be a bad idea.\r
   - If you nest four levels deep you belong in prison.\r
3. **Two items isn't really a list, three is good though.**\r
   - Again please don't nest lists if you want people to actually read your content.\r
   - Nobody wants to look at this.\r
   - I'm upset that we even have to bother styling this.\r
\r
The most annoying thing about lists in Markdown is that \`<li>\` elements aren't given a child \`<p>\` tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.\r
\r
- **For example, here's another nested list.**\r
\r
  But this time with a second paragraph.\r
\r
  - These list items won't have \`<p>\` tags\r
  - Because they are only one line each\r
\r
- **But in this second top-level list item, they will.**\r
\r
  This is especially annoying because of the spacing on this paragraph.\r
\r
  - As you can see here, because I've added a second line, this list item now has a \`<p>\` tag.\r
\r
    This is the second line I'm talking about by the way.\r
\r
  - Finally here's another list item so it's more like a list.\r
\r
- A closing list item, but with no nested list, because why not?\r
\r
And finally a sentence to close off this section.\r
\r
## We didn't forget about description lists\r
\r
Well, that's not exactly true, we first released this plugin back in 2020 and it took three years before we added description lists. But they're here now, so let's just be happy about that&hellip;okay? They can be great for things like FAQs.\r
\r
## There are other elements we need to style\r
\r
I almost forgot to mention links, like [this link to the Tailwind CSS website](https://tailwindcss.com). We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.\r
\r
We even included table styles, check it out:\r
\r
| Wrestler                | Origin       | Finisher           |\r
| ----------------------- | ------------ | ------------------ |\r
| Bret "The Hitman" Hart  | Calgary, AB  | Sharpshooter       |\r
| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner |\r
| Randy Savage            | Sarasota, FL | Elbow Drop         |\r
| Vader                   | Boulder, CO  | Vader Bomb         |\r
| Razor Ramon             | Chuluota, FL | Razor's Edge       |\r
\r
We also need to make sure inline code looks good, like if I wanted to talk about \`<span>\` elements or tell you the good news about \`@tailwindcss/typography\`.\r
\r
### Sometimes I even use \`code\` in headings\r
\r
Even though it's probably a bad idea, and historically I've had a hard time making it look good. This _"wrap the code blocks in backticks"_ trick works pretty well though really.\r
\r
Another thing I've done in the past is put a \`code\` tag inside of a link, like if I wanted to tell you about the [\`tailwindcss/docs\`](https://github.com/tailwindcss/docs) repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.\r
\r
#### We haven't used an \`h4\` yet\r
\r
But now we have. Please don't use \`h5\` or \`h6\` in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a \`before\` pseudo-element to scream at you if you use an \`h5\` or \`h6\`.\r
\r
We don't style them at all out of the box because \`h4\` elements are already so small that they are the same size as the body copy. What are we supposed to do with an \`h5\`, make it _smaller_ than the body copy? No thanks.\r
\r
### We still need to think about stacked headings though.\r
\r
#### Let's make sure we don't screw that up with \`h4\` elements, either.\r
\r
Phew, with any luck we have styled the headings above this text and they look pretty good.\r
\r
Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.\r
\r
What I've written here is probably long enough, but adding this final sentence can't hurt.\r
`,nd=Object.freeze(Object.defineProperty({__proto__:null,content:jg,frontmatter:_g},Symbol.toStringTag,{value:"Module"})),Mg={title:"Testing dan Test-Driven Development",subtitle:'"Kenapa kode harus dites? memang perlu? memang ngga makan banyak waktu?"',description:"Rangkuman pembelajaran saya mengenai Testing dan Test-Driven Development menggunakan Jest dan React Testing Library ",tag:"Blog",keywords:["Testing","TDD","Learning","Jest","React Testing Library"],status:"In Progress",publishedAt:"2021-09-12",updatedAt:"2021-09-12",image:"../../assets/blog/testing-dan-tdd/testing-dan-tdd.webp",imageAlt:"Ilustrasi botol kaca lab sebagai logo",author:"Abdullah Ammar"},Og=`\r
Pertanyaan tersebut adalah pertanyaan yang muncul dibenak saya ketika pertama kali mendengar kata\r
_testing_ atau pengujian. Kita tau bahwa manusia adalah tempatnya salah dan lupa, beberapa dari\r
kesalahan itu mungkin tidak penting, tetapi ada juga yang memiliki dampak yang tidak kecil, tentunya\r
banyak sekali faktor yang bisa membuat kita salah maupun lupa, seperti tidak fokus karena\r
membayangkan "apa jadinya jika koruptor tidak ada di Indonesia?" atau mungkin karena hal kecil dan\r
sepele lainnya, apalagi sebagai seorang developer/engineer/programmer yang selalu berurusan dengan\r
kode berbuntut nan rumit yang tak jarang membuat kepala pusing, duh. Sebelum menjawab pertanyaan\r
diatas itu, mari kita sedikit berkenalan dengan _testing_.\r
\r
## Apa itu Testing?\r
\r
Testing atau dalam konteks ini _software testing_ adalah proses untuk memastikan bahwa sebuah produk\r
perangkat lunak atau aplikasi melakukan apa yang seharusnya dilakukan.\r
[Menurut Kent C. Dodds](https://kentcdodds.com/blog//static-vs-unit-vs-integration-vs-e2e-tests),\r
ada 4 jenis tes dalam pengujian perangkat lunak:\r
\r
- **Static**: untuk menangkap typo (kesalahan ketik) dan _type errors_ saat menulis kode. _tools_ yang bisa digunakan: ESLint\r
- **Unit Test**: untuk memastikan unit individu terkecil dalam kode seperti function, method, ataupun class bisa\r
  berjalan semestinya. _tools_ yang bisa digunakan: Mocha + Chai, Enzyme, Jest, dan React Testing Library\r
- **Integration Test**: untuk memastikan setiap unit berjalan secara harmonis. _tools_ yang bisa digunakan: Jest dan React Testing Library\r
- **End-to-End Test**: untuk memastikan aplikasi berjalan dengan benar, biasanya dilakukan oleh sebuah robot yang\r
  bertindak layaknya pengguna. _tools_ yang bisa digunakan: Cypress dan Selenium\r
\r
## Kenapa Testing?\r
\r
Dalam sebuah pengembangan perangkat lunak, biasanya ada sebuah _requirement_ yang harus dipenuhi,\r
dan seringkali _requirement_ tersebut berubah, hari ini pengguna ingin A, besok pengguna ingin A+B,\r
dan lusa A+B+C+D, tentu kita harus memastikan bahwa ketika ada fitur baru ditambahkan,\r
fungsionalitas pada fitur sebelumnya masih berjalan seperti sedia kala, karena itulah maka\r
diperlukannya sebuah pengujian otomatis.\r
\r
Dari sedikit artikel yang saya baca, ada 2 keuntungan utama kenapa pengujian dilakukan, yaitu:\r
\r
#### Mengidentifikasi dan mengurangi/mencegah cacat/bugs pada aplikasi\r
\r
![A guy from history.com with text: "I read my code and it seemed just fine, Developers"](../../assets/blog/testing-dan-tdd/its-fine.webp)\r
Apa jadinya jika sistem error karena sebuah kesalahan kecil seperti salah ketik?\r
\r
#### Memastikan bahwa aplikasi berjalan semestinya\r
\r
![A girl smiling while a house burning in the background with text: pushes code to prod without testing leaves for vacation](../../assets/blog/testing-dan-tdd/pushes-code-to-prod-without-testing-leaves-for-vacation.webp)\r
\r
Tentu semua hal ada konsekuensinya, dalam _testing_, hal yang harus dikorbankan adalah waktu, karena\r
kita perlu menulis tes, namun banyak yang beranggapan bahwa waktu dan effort yang diperlukan untuk\r
menulis tes jauh lebih sedikit ketimbang menghabiskan waktu dan tenaga untuk mengatasi _bugs_ secara\r
manual karena tidak dilakukannya pengujian.\r
\r
## Apa itu Test-Driven Development?\r
\r
Sesuai dengan namanya, Test-Driven Development adalah pengembangan yang berbasiskan tes, artinya\r
kita harus menuliskan sebuah test—biasanya disebut _test case_ atau _test suite_—terlebih dahulu\r
kemudian merancang dan menuliskan implementasi kode untuk memenuhi ekspektasi tes tersebut, proses\r
ini biasanya dikenal dengan nama _red_, _green_, _refactor_ yang membagi fokus menjadi 3 fase:\r
\r
- **Red**: menuliskan sebuah _test case_ dan berfokus mengenai fitur _apa_ yang ingin dibuat—biasanya dari\r
  _requirement_ yang ada\r
- **Green**: menuliskan implementasi kode minimal dan berfokus _bagaimana_ agar implementasi kode tersebut\r
  memenuhi ekspektasi _test_ yang ada\r
- **Refactor**: berfokus _bagaimana_ untuk meningkatkan kualitas implementasi kode yang ada, seperti meningkatkan\r
  performa aplikasi dan meningkatkan keterbacaan kode yang telah dibuat—implementasi _clean code._\r
\r
## Kenapa Test-Driven Development?\r
\r
Ada beberapa keuntungan yang didapatkan ketika melakukan praktik TDD ini, diantaranya yaitu:\r
\r
1. Dapat dengan mudah untuk mengidentifikasi masalah saat perangkat lunak sedang dikembangkan yang\r
   memungkinkan masalah ini ditangani dengan lebih cepat karena adanya proses red-green-refactor ini\r
2. Praktik TDD mengharuskan pengembang menulis kode untuk memenuhi kebutuhan test yang ada, dengan\r
   pendekatan ini, kode yang dibuat menjadi lebih sederhana dan mudah untuk diuji, karena kode yang\r
   sederhana juga, maka kode yang ada juga lebih mudah dibaca dan di-_mantain_.\r
\r
## Implementasi Test-Driven Development\r
\r
Setelah sedikit mempelajari mengenai Testing dan Test-Driven Development, saatnya _hands-on,_ mari\r
kita mencoba untuk mempraktekan sedikit ilmu yang sudah kita dapat tadi menggunakan React\r
(create-react-app), Jest, dan React Testing Library.\r
\r
### Requirement\r
\r
- npm atau yarn\r
- Pemahaman fundamental tentang JavaScript dan React\r
\r
### User Story\r
\r
\`\`\`txt\r
AS A: BLOGGER\r
\r
I WANT TO: DISPLAY LIST OF POST WITH TITLE, DATE, AND DESCRIPTION\r
\r
SO THAT: I CAN SEE ALL OF MY POST EASILY\r
\`\`\`\r
\r
### Implementasi\r
\r
Diasumsikan kita sudah mempunyai sebuah data berformat JSON seperti berikut\r
\r
\`\`\`jsx\r
[\r
  {\r
    title: 'Testing dan Test-Driven Development',\r
    description:\r
      'Rangkuman singkat pembelajaran mengenai testing dan test-driven development di JavaScript',\r
    publishedAt: '2021-09-11',\r
    author: 'Abdullah Ammar',\r
    tag: 'Testing',\r
    tags: ['Learning', 'JavaScript', 'React'],\r
    image: 'https://abdmmar.com../../assets/belajar_testing/meta.webp',\r
    imageAlt: 'Illustration of red, green, refactor, approaches',\r
  },\r
  ...\r
]\r
\`\`\`\r
\r
Dan dari contoh _user story_ diatas, diasumsikan juga kita akan membuat sebuah komponen \`Card\` yang\r
menampilkan \`title\`, \`publishedAt\`, dan \`description\` dari sebuah tulisan yang telah dipublish\r
yang nantinya akan digunakan di halaman utama.\r
\r
#### Memasang Jest dan React Testing Library\r
\r
Sebelum mulai menulis _test,_ terlebih dahulu kita pasang Jest dan React Testing Library yang sudah\r
tersedia di dalam create-react-app, oleh karena itu jalankan perintah dibawah untuk membuat sebuah\r
proyek bernama \`testing-and-tdd\`\r
\r
\`\`\`bash\r
npx create-react-app testing-and-tdd\r
\`\`\`\r
\r
Setelah selesai dijalankan, maka proyek kamu akan terlihat seperti ini:\r
\r
\`\`\`jsx\r
testing-dan-tdd/\r
  README.md\r
  node_modules/\r
  package.json\r
  public/\r
    index.html\r
    favicon.ico\r
  src/\r
    App.css\r
    App.js\r
    App.test.js\r
    index.css\r
    index.js\r
    logo.svg\r
  ...\r
\`\`\`\r
\r
Lalu buat sebuah folder dan tambahkan beberapa file baru seperti dibawah:\r
\r
\`\`\`jsx\r
testing-and-tdd/\r
  src/\r
    components/\r
      Card/\r
        Card.js\r
        Card.test.js\r
        Card.module.css\r
      index.js\r
    ...\r
  ...\r
\`\`\`\r
\r
#### Menulis Unit Test\r
\r
Mari kita mulai menulis sebuah _test case_ dengan menjalankan kerangka kerja red, green, refactor\r
\r
##### Red\r
\r
Pertama kita import terlebih dahulu function \`render\` dan objeck \`screen\` dari React Testing Library\r
dan import komponen Card yang akan kita test.\r
\r
\`\`\`jsx\r
import { render, screen } from "@testing-library/react";\r
import Card from "./Card";\r
\`\`\`\r
\r
**Penjelasan**\r
\r
- function \`render\` digunakan untuk merender komponen \`Card\` ke dalam dokumen\r
- objek \`screen\` digunakan untuk memanggil query, query ini digunakan untuk menemukan elemen di\r
  halaman seperti query \`getByText()\` untuk menemukan elemen berdasarkan teks dan query\r
  \`getByLabelText()\` untuk menemukan elemen berdasarkan label atau aria-label. Untuk detail query\r
  apa saja yang tersedia, kalian dapat melihatnya\r
  [di sini](https://testing-library.com/docs/queries/about/) atau\r
  [di sini](https://testing-library.com/docs/react-testing-library/cheatsheet)\r
\r
Setelah itu, kita buat objek \`data\` yang berisikan detail informasi sebuah post yang akan digunakan\r
untuk mengetes komponen card ini\r
\r
\`\`\`jsx\r
const data = {\r
  title: "Testing dan Test-Driven Development",\r
  description:\r
    "Rangkuman singkat pembelajaran testing dan test-driven development di JavaScript",\r
  publishedAt: "2021-09-11",\r
  author: "Abdullah Ammar",\r
  tag: "Testing",\r
  tags: ["Learning", "JavaScript", "React"],\r
  image: "https://abdmmar.com../../assets/belajar_testing/meta.webp",\r
  imageAlt: "Illustration of red, green, refactor, approaches",\r
};\r
\`\`\`\r
\r
Lalu tambahkan kode berikut:\r
\r
\`\`\`jsx\r
describe('Card', () => {\r
  test('render Card with title, description, and published date', () => {\r
\r
  }\r
})\r
\r
\`\`\`\r
\r
Kemudian kita panggil method \`render()\` untuk mencetak komponen card ke dalam dokumen dan tambahkan\r
value dari objek \`data\` yang telah dibuat tadi kedalam atribut yang dibutuhkan oleh komponen card.\r
\r
\`\`\`jsx\r
describe('Card', () => {\r
  test('render Card with title, description, and published date', () => {\r
    // Arrange\r
    render(<Card\r
      title={data.title}\r
      description={data.description}\r
      date={data.publishedAt}/>)\r
  }\r
})\r
\r
\`\`\`\r
\r
Lalu kita panggil query \`getByText()\` untuk menemukan elemen title, description, dan date\r
\r
\`\`\`jsx\r
describe('Card', () => {\r
  test('render Card with title, description, and published date', () => {\r
    // Arrange\r
    render(<Card\r
      title={data.title}\r
      description={data.description}\r
      date={data.publishedAt}/>)\r
\r
    // Assert\r
    const title = screen.getByText(data.title)\r
    const description = screen.getByText(data.description)\r
    const date = screen.getByText(data.publishedAt)\r
  }\r
})\r
\r
\`\`\`\r
\r
Setelah itu kita tes apakah elemen _title_, _description_, dan _date_ ada di dalam dokumen dan\r
mempunyai value yang sama dengan value yang diberikan tadi.\r
\r
\`\`\`jsx\r
describe('Card', () => {\r
  test('render Card with title, description, and published date', () => {\r
    // Arrange\r
    render(<Card\r
      title={data.title}\r
      description={data.description}\r
      date={data.publishedAt}/>)\r
\r
    // Assert\r
    const title = screen.getByText(data.title)\r
    const description = screen.getByText(data.description)\r
    const date = screen.getByText(data.publishedAt)\r
\r
    expect(title).toBeInTheDocument()\r
    expect(description).toBeInTheDocument()\r
    expect(date).toBeInTheDocument()\r
    expect(title.textContent).toEqual(data.title)\r
    expect(description.textContent).toEqual(data.description)\r
    expect(date.textContent).toEqual(data.publishedAt)\r
  }\r
})\r
\`\`\`\r
\r
Sampai sejauh ini, maka kode kita akan terlihat seperti ini:\r
\r
\`\`\`jsx\r
import { render, screen } from "@testing-library/react";\r
import Card from "./Card";\r
\r
const data = {\r
  title: "Testing dan Test-Driven Development",\r
  description:\r
    "Rangkuman singkat pembelajaran testing dan test-driven development di JavaScript",\r
  publishedAt: "2021-09-11",\r
  author: "Abdullah Ammar",\r
  tag: "Testing",\r
  tags: ["Learning", "JavaScript", "React"],\r
  image: "https://abdmmar.com../../assets/belajar_testing/meta.webp",\r
  imageAlt: "Illustration of red, green, refactor, approaches",\r
};\r
\r
describe("Card", () => {\r
  test("render Card with title, description, and published date", () => {\r
    // Arrange\r
    render(\r
      <Card\r
        title={data.title}\r
        description={data.description}\r
        date={data.publishedAt}\r
      />\r
    );\r
\r
    // Assert\r
    const title = screen.getByText(data.title);\r
    const description = screen.getByText(data.description);\r
    const date = screen.getByText(data.publishedAt);\r
\r
    expect(title).toBeInTheDocument();\r
    expect(description).toBeInTheDocument();\r
    expect(date).toBeInTheDocument();\r
    expect(title.textContent).toEqual(data.title);\r
    expect(description.textContent).toEqual(data.description);\r
    expect(date.textContent).toEqual(data.publishedAt);\r
  });\r
});\r
\`\`\`\r
\r
Lalu kita coba jalankan tesnya menggunakan perintah:\r
\r
\`\`\`jsx\r
yarn start //atau npm start\r
\`\`\`\r
\r
![test error component undefined](../../assets/blog/testing-dan-tdd/test-error-component-undefined.webp)\r
\r
Maka akan muncul pesan kesalahan karena kita belum membuat komponen \`Card\`, oleh karena itu mari\r
kita membuat komponen Card menggunakan function component\r
\r
\`\`\`jsx\r
export default function Card(props) {\r
  return <div>Hi!</div>;\r
}\r
\`\`\`\r
\r
Setelah itu kita coba jalankan kembali tesnya\r
\r
![test error element not found](../../assets/blog/testing-dan-tdd/test-error-element-not-found.webp)\r
\r
Maka akan muncul pesan kesalahan karena kita elemen dengan teks yang diberikan tidak ditemukan, oleh\r
karena itu mari ke tahap selanjutnya untuk memenuhi ekspektasi tes ini.\r
\r
##### Green\r
\r
Tambahkan beberapa tag dan props title, description, dan date\r
\r
\`\`\`jsx\r
export default function Card({ title, description, date }) {\r
  return (\r
    <div>\r
      <small>{date}</small>\r
      <strong>{title}</strong>\r
      <p>{description}</p>\r
    </div>\r
  );\r
}\r
\`\`\`\r
\r
Lalu kita jalankan kembali tesnya dan terlihat bahwa tes telah berhasil atau _pass_\r
\r
![test is passing](../../assets/blog/testing-dan-tdd/test-pass-card.webp)\r
\r
##### Refactor\r
\r
Setelah itu kalian bisa merefactor kode seperti menambahkan styling ataupun merubah tag sesuai\r
dengan yang dibutuhkan.\r
\r
## Kesimpulan\r
\r
Demikian sedikit rangkuman pembelajaran saya mengenai Testing dan Test-Driven Development\r
menggunakan Jest dan React Testing Library. Kita sudah membahas apa itu testing, kenapa perlu\r
testing, hingga implementasi sederhana Test-Driven Development.\r
\r
Jika teman-teman mempunyai kritik dan saran bisa kirimkan issue di\r
[GitHub](https://github.com/abdmmar/website/issues) maupun ke akun twitter saya di\r
[@abdmmar](https://www.twitter.com/abdmmar), terima kasih :)\r
\r
## Referensi\r
\r
1. [Introduction | Testing Library](https://testing-library.com/docs/)\r
2. [Getting Started · Jest](https://jestjs.io/docs/getting-started)\r
3. [What is software testing?](https://www.ibm.com/topics/software-testing)\r
4. [Red, Green, Refactor | Codecademy](https://www.codecademy.com/articles/tdd-red-green-refactor)\r
5. [TDD the Series : Part 1 - Apa itu Test Driven Development (TDD)](https://medium.com/koding-kala-weekend/tdd-the-series-part-1-apa-itu-test-driven-development-tdd-ff92c95c945f)\r
6. [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog//static-vs-unit-vs-integration-vs-e2e-tests)\r
7. [Why Test-Driven Development (TDD) | Marsner Technologies](https://marsner.com/blog/why-test-driven-development-tdd/)\r
8. [Arrange-Act-Assert: A Pattern for Blog Good Tests](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)\r
9. [How to Write Tests with React Testing Library and TypeScript](https://javascript.plainenglish.io/how-to-write-the-basic-aaa-pattern-tests-with-react-testing-library-and-typescript-6836173d656b)\r
10. [Kupas Tuntas Binary Search Tree dengan Test-Driven Development](https://www.youtube.com/watch?v=4tZDfvfXBb4)\r
`,ld=Object.freeze(Object.defineProperty({__proto__:null,content:Og,frontmatter:Mg},Symbol.toStringTag,{value:"Module"})),Yi=k=>{const[E,z,h]=k.split("-");return new Date(`${h}-${z}-${E}`)},Bg=k=>Kf(Yi(k),"dd/MM/yyyy"),np=k=>Kf(Yi(k),"MMMM dd, yyyy"),Hg=k=>{var E;return((E=k.match(/\/([^/]+)\.md$/))==null?void 0:E[1])||""},Ug=()=>Object.assign({"../contents/custom-domain-tech.md":If,"../contents/integration-test-in-react.md":Pf,"../contents/membangun-kebun-digital.md":td,"../contents/organizing-react-code.md":ad,"../contents/pengujian-ce.md":ed,"../contents/tailwind-prose.md":nd,"../contents/testing-dan-tdd.md":ld}),Rg=k=>Object.entries(k).sort(([,E],[,z])=>{const h=E.frontmatter.date?Yi(E.frontmatter.date):new Date(0),A=z.frontmatter.date?Yi(z.frontmatter.date):new Date(0);return Gh(h,A)}),Ng=k=>k.map(([E,z])=>{const h=Hg(E),{frontmatter:A}=z,R=A.title||"Untitled",O=A.date?Bg(A.date):null;return{title:R,path:`/blog/${h}`,date:O}});function qg(){const k=Ug(),E=Rg(k),z=Ng(E);return y.jsx(Wf,{children:y.jsxs(xl,{children:[y.jsx(wl,{children:"Study"}),y.jsxs(bg,{children:[y.jsx(kn,{}),z.map(({title:h,path:A,date:R})=>y.jsxs(Mh.Fragment,{children:[y.jsxs(Cg,{to:A,children:[y.jsx("p",{children:h}),y.jsx("p",{children:R&&`${R}`})]}),y.jsx(kn,{})]},A))]})]})})}const Cg=F(Oh)`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;

  p {
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);
  }

  @media (width <= 768px) {
    padding: 8px 0;

    p {
      font-size: var(--text-base);
    }
  }
`;function Gg(){return y.jsxs(y.Fragment,{children:[y.jsx(ec,{}),y.jsx(qg,{}),y.jsx(Jf,{})]})}function Yg(){return y.jsxs(y.Fragment,{children:[y.jsx(Lg,{children:y.jsx(ec,{})}),y.jsxs(Vg,{children:[y.jsx("p",{children:"404"}),y.jsx("p",{children:"Not Found"})]})]})}const Lg=F.div`
  nav {
    position: fixed;
  }
`,Vg=F.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    font-family: "DM Sans", sans-serif;
    font-weight: 300;
    letter-spacing: -0.025em;
    font-size: 4rem;
    line-height: 1;

    &:first-of-type {
      font-weight: 400;
      font-size: 5rem;
      margin-right: 30px;
    }
  }

  @media (width <= 768px) {
    flex-direction: column;
    p {
      font-size: 2rem;

      &:first-of-type {
        margin-right: 0;
        line-height: 1;
        font-size: 5rem;
      }
    }
  }
`,Xg="modulepreload",Qg=function(k){return"/deskreview-react/"+k},Qf={},Zg=function(E,z,h){let A=Promise.resolve();if(z&&z.length>0){document.getElementsByTagName("link");const O=document.querySelector("meta[property=csp-nonce]"),et=(O==null?void 0:O.nonce)||(O==null?void 0:O.getAttribute("nonce"));A=Promise.allSettled(z.map(X=>{if(X=Qg(X),X in Qf)return;Qf[X]=!0;const st=X.endsWith(".css"),da=st?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${X}"]${da}`))return;const P=document.createElement("link");if(P.rel=st?"stylesheet":Xg,st||(P.as="script"),P.crossOrigin="",P.href=X,et&&P.setAttribute("nonce",et),document.head.appendChild(P),st)return new Promise((ut,xt)=>{P.addEventListener("load",ut),P.addEventListener("error",()=>xt(new Error(`Unable to preload CSS for ${X}`)))})}))}function R(O){const et=new Event("vite:preloadError",{cancelable:!0});if(et.payload=O,window.dispatchEvent(et),!et.defaultPrevented)throw O}return A.then(O=>{for(const et of O||[])et.status==="rejected"&&R(et.reason);return E().catch(R)})};function Kg(){return Object.entries(Object.assign({"../contents/custom-domain-tech.md":If,"../contents/integration-test-in-react.md":Pf,"../contents/membangun-kebun-digital.md":td,"../contents/organizing-react-code.md":ad,"../contents/pengujian-ce.md":ed,"../contents/tailwind-prose.md":nd,"../contents/testing-dan-tdd.md":ld})).map(([E,z])=>{var O;const h=((O=E.match(/\/([^/]+)\.md$/))==null?void 0:O[1])||"",{frontmatter:A,content:R}=z;return{path:h,frontmatter:A,content:R}})}const Jg=Me.lazy(()=>Zg(()=>import("./BlogPost-CV5G3frd.js"),__vite__mapDeps([0,1,2,3,4,5,6])));function Wg(){return Kg().map(({path:E,frontmatter:z,content:h})=>y.jsx(Tl,{path:E,element:y.jsx(Jg,{frontmatter:z,children:y.jsx(zh,{children:h,remarkPlugins:[Yh]})})},E))}function Fg(){const k=Wg();return y.jsxs(y.Fragment,{children:[y.jsx(Jh,{}),y.jsxs(Bh,{children:[y.jsx(Tl,{path:"/",element:y.jsx(yg,{})}),y.jsxs(Tl,{path:"/blog",children:[y.jsx(Tl,{index:!0,element:y.jsx(Gg,{})}),k]}),y.jsx(Tl,{path:"*",element:y.jsx(Yg,{})})]})]})}Zh.createRoot(document.getElementById("root")).render(y.jsx(Me.StrictMode,{children:y.jsxs(Hh,{basename:"/deskreview-react/",children:[y.jsx(Kh,{}),y.jsx(Fg,{})]})}));export{Jf as F,Wf as M,ec as N,xl as S,np as f};
