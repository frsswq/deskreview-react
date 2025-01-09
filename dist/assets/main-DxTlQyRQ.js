const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BlogPost-BIoaTgNB.js","assets/react-markdown-Cg8YTe_c.js","assets/vendor-D8cRFDWZ.js","assets/styled-components-BKmSLaRA.js","assets/@radix-ui/react-icons-BULlyilc.js","assets/date-fns-B4QYC8g5.js","assets/remark-gfm-BQxQwK4t.js"])))=>i.map(i=>d[i]);
import{p as b,M as jh}from"./react-markdown-Cg8YTe_c.js";import{a as Mh,b as Oh,u as Bh,c as Hh,r as kn,R as Uh,L as Rh,d as Tl,e as Nh,B as Ch}from"./vendor-D8cRFDWZ.js";import{f as qh,d as I}from"./styled-components-BKmSLaRA.js";import{C as Gh,E as Lh,a as Yh,I as Vh}from"./@radix-ui/react-icons-BULlyilc.js";import{f as Xh,c as Qh}from"./date-fns-B4QYC8g5.js";import{r as Zh}from"./remark-gfm-BQxQwK4t.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))h(A);new MutationObserver(A=>{for(const R of A)if(R.type==="childList")for(const O of R.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&h(O)}).observe(document,{childList:!0,subtree:!0});function z(A){const R={};return A.integrity&&(R.integrity=A.integrity),A.referrerPolicy&&(R.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?R.credentials="include":A.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function h(A){if(A.ep)return;A.ep=!0;const R=z(A);fetch(A.href,R)}})();var $s={exports:{}},kl={},Is={exports:{}},Ps={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function Kh(){return Lf||(Lf=1,function(k){function _(S,B){var j=S.length;S.push(B);t:for(;0<j;){var F=j-1>>>1,st=S[F];if(0<A(st,B))S[F]=B,S[j]=st,j=F;else break t}}function z(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var B=S[0],j=S.pop();if(j!==B){S[0]=j;t:for(var F=0,st=S.length,He=st>>>1;F<He;){var ce=2*(F+1)-1,ga=S[ce],G=ce+1,Ct=S[G];if(0>A(ga,j))G<st&&0>A(Ct,ga)?(S[F]=Ct,S[G]=j,F=G):(S[F]=ga,S[ce]=j,F=ce);else if(G<st&&0>A(Ct,j))S[F]=Ct,S[G]=j,F=G;else break t}}return B}function A(S,B){var j=S.sortIndex-B.sortIndex;return j!==0?j:S.id-B.id}if(k.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;k.unstable_now=function(){return R.now()}}else{var O=Date,et=O.now();k.unstable_now=function(){return O.now()-et}}var X=[],ot=[],da=1,P=null,ut=3,xt=!1,$t=!1,ma=!1,Me=typeof setTimeout=="function"?setTimeout:null,Oe=typeof clearTimeout=="function"?clearTimeout:null,It=typeof setImmediate<"u"?setImmediate:null;function ne(S){for(var B=z(ot);B!==null;){if(B.callback===null)h(ot);else if(B.startTime<=S)h(ot),B.sortIndex=B.expirationTime,_(X,B);else break;B=z(ot)}}function Sn(S){if(ma=!1,ne(S),!$t)if(z(X)!==null)$t=!0,ue();else{var B=z(ot);B!==null&&se(Sn,B.startTime-S)}}var le=!1,Pt=-1,Al=5,Be=-1;function D(){return!(k.unstable_now()-Be<Al)}function V(){if(le){var S=k.unstable_now();Be=S;var B=!0;try{t:{$t=!1,ma&&(ma=!1,Oe(Pt),Pt=-1),xt=!0;var j=ut;try{a:{for(ne(S),P=z(X);P!==null&&!(P.expirationTime>S&&D());){var F=P.callback;if(typeof F=="function"){P.callback=null,ut=P.priorityLevel;var st=F(P.expirationTime<=S);if(S=k.unstable_now(),typeof st=="function"){P.callback=st,ne(S),B=!0;break a}P===z(X)&&h(X),ne(S)}else h(X);P=z(X)}if(P!==null)B=!0;else{var He=z(ot);He!==null&&se(Sn,He.startTime-S),B=!1}}break t}finally{P=null,ut=j,xt=!1}B=void 0}}finally{B?ha():le=!1}}}var ha;if(typeof It=="function")ha=function(){It(V)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,ie=Tn.port2;Tn.port1.onmessage=V,ha=function(){ie.postMessage(null)}}else ha=function(){Me(V,0)};function ue(){le||(le=!0,ha())}function se(S,B){Pt=Me(function(){S(k.unstable_now())},B)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(S){S.callback=null},k.unstable_continueExecution=function(){$t||xt||($t=!0,ue())},k.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Al=0<S?Math.floor(1e3/S):5},k.unstable_getCurrentPriorityLevel=function(){return ut},k.unstable_getFirstCallbackNode=function(){return z(X)},k.unstable_next=function(S){switch(ut){case 1:case 2:case 3:var B=3;break;default:B=ut}var j=ut;ut=B;try{return S()}finally{ut=j}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=function(){},k.unstable_runWithPriority=function(S,B){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var j=ut;ut=S;try{return B()}finally{ut=j}},k.unstable_scheduleCallback=function(S,B,j){var F=k.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,S){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=j+st,S={id:da++,callback:B,priorityLevel:S,startTime:j,expirationTime:st,sortIndex:-1},j>F?(S.sortIndex=j,_(ot,S),z(X)===null&&S===z(ot)&&(ma?(Oe(Pt),Pt=-1):ma=!0,se(Sn,j-F))):(S.sortIndex=st,_(X,S),$t||xt||($t=!0,ue())),S},k.unstable_shouldYield=D,k.unstable_wrapCallback=function(S){var B=ut;return function(){var j=ut;ut=B;try{return S.apply(this,arguments)}finally{ut=j}}}}(Ps)),Ps}var Yf;function Jh(){return Yf||(Yf=1,Is.exports=Kh()),Is.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function Wh(){if(Vf)return kl;Vf=1;var k=Jh(),_=Mh(),z=Oh();function h(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var R=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),et=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),ut=Symbol.for("react.consumer"),xt=Symbol.for("react.context"),$t=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),Sn=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Pt(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var Al=Symbol.for("react.client.reference");function Be(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Al?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case et:return"Portal";case da:return"Profiler";case ot:return"StrictMode";case ma:return"Suspense";case Me:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xt:return(t.displayName||"Context")+".Provider";case ut:return(t._context.displayName||"Context")+".Consumer";case $t:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oe:return a=t.displayName||null,a!==null?a:Be(t.type)||"Memo";case It:a=t._payload,t=t._init;try{return Be(t(a))}catch{}}return null}var D=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=Object.assign,ha,Tn;function ie(t){if(ha===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);ha=a&&a[1]||"",Tn=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ha+t+Tn}var ue=!1;function se(t,a){if(!t||ue)return"";ue=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(g){var m=g}Reflect.construct(t,[],v)}else{try{v.call()}catch(g){m=g}t.call(v.prototype)}}else{try{throw Error()}catch(g){m=g}(v=t())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var c=u.split(`
`),r=s.split(`
`);for(l=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;if(n===c.length||l===r.length)for(n=c.length-1,l=r.length-1;1<=n&&0<=l&&c[n]!==r[l];)l--;for(;1<=n&&0<=l;n--,l--)if(c[n]!==r[l]){if(n!==1||l!==1)do if(n--,l--,0>l||c[n]!==r[l]){var p=`
`+c[n].replace(" at new "," at ");return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",t.displayName)),p}while(1<=n&&0<=l);break}}}finally{ue=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?ie(e):""}function S(t){switch(t.tag){case 26:case 27:case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function B(t){try{var a="";do a+=S(t),t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function j(t){var a=t,e=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,a.flags&4098&&(e=a.return),t=a.return;while(t)}return a.tag===3?e:null}function F(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function st(t){if(j(t)!==t)throw Error(h(188))}function He(t){var a=t.alternate;if(!a){if(a=j(t),a===null)throw Error(h(188));return a!==t?null:t}for(var e=t,n=a;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){e=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return st(l),t;if(i===n)return st(l),a;i=i.sibling}throw Error(h(188))}if(e.return!==n.return)e=l,n=i;else{for(var u=!1,s=l.child;s;){if(s===e){u=!0,e=l,n=i;break}if(s===n){u=!0,n=l,e=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===e){u=!0,e=i,n=l;break}if(s===n){u=!0,n=i,e=l;break}s=s.sibling}if(!u)throw Error(h(189))}}if(e.alternate!==n)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?t:a}function ce(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=ce(t),a!==null)return a;t=t.sibling}return null}var ga=Array.isArray,G=z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ct={pending:!1,data:null,method:null,action:null},Li=[],Ue=-1;function la(t){return{current:t}}function gt(t){0>Ue||(t.current=Li[Ue],Li[Ue]=null,Ue--)}function $(t,a){Ue++,Li[Ue]=t.current,t.current=a}var ia=la(null),xn=la(null),Ba=la(null),El=la(null);function _l(t,a){switch($(Ba,a),$(xn,t),$(ia,null),t=a.nodeType,t){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?pf(a):0;break;default:if(t=t===8?a.parentNode:a,a=t.tagName,t=t.namespaceURI)t=pf(t),a=bf(t,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}gt(ia),$(ia,a)}function Re(){gt(ia),gt(xn),gt(Ba)}function Yi(t){t.memoizedState!==null&&$(El,t);var a=ia.current,e=bf(a,t.type);a!==e&&($(xn,t),$(ia,e))}function zl(t){xn.current===t&&(gt(ia),gt(xn)),El.current===t&&(gt(El),gl._currentValue=Ct)}var Vi=Object.prototype.hasOwnProperty,Xi=k.unstable_scheduleCallback,Qi=k.unstable_cancelCallback,cd=k.unstable_shouldYield,od=k.unstable_requestPaint,ua=k.unstable_now,rd=k.unstable_getCurrentPriorityLevel,nc=k.unstable_ImmediatePriority,lc=k.unstable_UserBlockingPriority,Dl=k.unstable_NormalPriority,fd=k.unstable_LowPriority,ic=k.unstable_IdlePriority,dd=k.log,md=k.unstable_setDisableYieldValue,wn=null,Mt=null;function hd(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(wn,t,void 0,(t.current.flags&128)===128)}catch{}}function Ha(t){if(typeof dd=="function"&&md(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(wn,t)}catch{}}var Ot=Math.clz32?Math.clz32:bd,gd=Math.log,pd=Math.LN2;function bd(t){return t>>>=0,t===0?32:31-(gd(t)/pd|0)|0}var jl=128,Ml=4194304;function oe(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ol(t,a){var e=t.pendingLanes;if(e===0)return 0;var n=0,l=t.suspendedLanes,i=t.pingedLanes,u=t.warmLanes;t=t.finishedLanes!==0;var s=e&134217727;return s!==0?(e=s&~l,e!==0?n=oe(e):(i&=s,i!==0?n=oe(i):t||(u=s&~u,u!==0&&(n=oe(u))))):(s=e&~l,s!==0?n=oe(s):i!==0?n=oe(i):t||(u=e&~u,u!==0&&(n=oe(u)))),n===0?0:a!==0&&a!==n&&!(a&l)&&(l=n&-n,u=a&-a,l>=u||l===32&&(u&4194176)!==0)?a:n}function An(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function yd(t,a){switch(t){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uc(){var t=jl;return jl<<=1,!(jl&4194176)&&(jl=128),t}function sc(){var t=Ml;return Ml<<=1,!(Ml&62914560)&&(Ml=4194304),t}function Zi(t){for(var a=[],e=0;31>e;e++)a.push(t);return a}function En(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vd(t,a,e,n,l,i){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var s=t.entanglements,c=t.expirationTimes,r=t.hiddenUpdates;for(e=u&~e;0<e;){var p=31-Ot(e),v=1<<p;s[p]=0,c[p]=-1;var m=r[p];if(m!==null)for(r[p]=null,p=0;p<m.length;p++){var g=m[p];g!==null&&(g.lane&=-536870913)}e&=~v}n!==0&&cc(t,n,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~a))}function cc(t,a,e){t.pendingLanes|=a,t.suspendedLanes&=~a;var n=31-Ot(a);t.entangledLanes|=a,t.entanglements[n]=t.entanglements[n]|1073741824|e&4194218}function oc(t,a){var e=t.entangledLanes|=a;for(t=t.entanglements;e;){var n=31-Ot(e),l=1<<n;l&a|t[n]&a&&(t[n]|=a),e&=~l}}function rc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function fc(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Uf(t.type))}function kd(t,a){var e=G.p;try{return G.p=t,a()}finally{G.p=e}}var Ua=Math.random().toString(36).slice(2),wt="__reactFiber$"+Ua,zt="__reactProps$"+Ua,Ne="__reactContainer$"+Ua,Ki="__reactEvents$"+Ua,Sd="__reactListeners$"+Ua,Td="__reactHandles$"+Ua,dc="__reactResources$"+Ua,_n="__reactMarker$"+Ua;function Ji(t){delete t[wt],delete t[zt],delete t[Ki],delete t[Sd],delete t[Td]}function re(t){var a=t[wt];if(a)return a;for(var e=t.parentNode;e;){if(a=e[Ne]||e[wt]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(t=kf(t);t!==null;){if(e=t[wt])return e;t=kf(t)}return a}t=e,e=t.parentNode}return null}function Ce(t){if(t=t[wt]||t[Ne]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function zn(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(h(33))}function qe(t){var a=t[dc];return a||(a=t[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function pt(t){t[_n]=!0}var mc=new Set,hc={};function fe(t,a){Ge(t,a),Ge(t+"Capture",a)}function Ge(t,a){for(hc[t]=a,t=0;t<a.length;t++)mc.add(a[t])}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gc={},pc={};function wd(t){return Vi.call(pc,t)?!0:Vi.call(gc,t)?!1:xd.test(t)?pc[t]=!0:(gc[t]=!0,!1)}function Bl(t,a,e){if(wd(a))if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+e)}}function Hl(t,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+e)}}function ba(t,a,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(a,e,""+n)}}function qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bc(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ad(t){var a=bc(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),n=""+t[a];if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,i=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Ul(t){t._valueTracker||(t._valueTracker=Ad(t))}function yc(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var e=a.getValue(),n="";return t&&(n=bc(t)?t.checked?"true":"false":t.value),t=n,t!==e?(a.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ed=/[\n"\\]/g;function Gt(t){return t.replace(Ed,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Wi(t,a,e,n,l,i,u,s){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),a!=null?u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+qt(a)):t.value!==""+qt(a)&&(t.value=""+qt(a)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),a!=null?Fi(t,u,qt(a)):e!=null?Fi(t,u,qt(e)):n!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+qt(s):t.removeAttribute("name")}function vc(t,a,e,n,l,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),a!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||a!=null))return;e=e!=null?""+qt(e):"",a=a!=null?""+qt(a):e,s||a===t.value||(t.value=a),t.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=s?t.checked:!!n,t.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u)}function Fi(t,a,e){a==="number"&&Rl(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Le(t,a,e,n){if(t=t.options,a){a={};for(var l=0;l<e.length;l++)a["$"+e[l]]=!0;for(e=0;e<t.length;e++)l=a.hasOwnProperty("$"+t[e].value),t[e].selected!==l&&(t[e].selected=l),l&&n&&(t[e].defaultSelected=!0)}else{for(e=""+qt(e),a=null,l=0;l<t.length;l++){if(t[l].value===e){t[l].selected=!0,n&&(t[l].defaultSelected=!0);return}a!==null||t[l].disabled||(a=t[l])}a!==null&&(a.selected=!0)}}function kc(t,a,e){if(a!=null&&(a=""+qt(a),a!==t.value&&(t.value=a),e==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=e!=null?""+qt(e):""}function Sc(t,a,e,n){if(a==null){if(n!=null){if(e!=null)throw Error(h(92));if(ga(n)){if(1<n.length)throw Error(h(93));n=n[0]}e=n}e==null&&(e=""),a=e}e=qt(a),t.defaultValue=e,n=t.textContent,n===e&&n!==""&&n!==null&&(t.value=n)}function Ye(t,a){if(a){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=a;return}}t.textContent=a}var _d=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tc(t,a,e){var n=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":n?t.setProperty(a,e):typeof e!="number"||e===0||_d.has(a)?a==="float"?t.cssFloat=e:t[a]=(""+e).trim():t[a]=e+"px"}function xc(t,a,e){if(a!=null&&typeof a!="object")throw Error(h(62));if(t=t.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var l in a)n=a[l],a.hasOwnProperty(l)&&e[l]!==n&&Tc(t,l,n)}else for(var i in a)a.hasOwnProperty(i)&&Tc(t,i,a[i])}function $i(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return Dd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ii=null;function Pi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ve=null,Xe=null;function wc(t){var a=Ce(t);if(a&&(t=a.stateNode)){var e=t[zt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Wi(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Gt(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var n=e[a];if(n!==t&&n.form===t.form){var l=n[zt]||null;if(!l)throw Error(h(90));Wi(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<e.length;a++)n=e[a],n.form===t.form&&yc(n)}break t;case"textarea":kc(t,e.value,e.defaultValue);break t;case"select":a=e.value,a!=null&&Le(t,!!e.multiple,a,!1)}}}var tu=!1;function Ac(t,a,e){if(tu)return t(a,e);tu=!0;try{var n=t(a);return n}finally{if(tu=!1,(Ve!==null||Xe!==null)&&(ki(),Ve&&(a=Ve,t=Xe,Xe=Ve=null,wc(a),t)))for(a=0;a<t.length;a++)wc(t[a])}}function Dn(t,a){var e=t.stateNode;if(e===null)return null;var n=e[zt]||null;if(n===null)return null;e=n[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(h(231,a,typeof e));return e}var au=!1;if(pa)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){au=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{au=!1}var Ra=null,eu=null,Cl=null;function Ec(){if(Cl)return Cl;var t,a=eu,e=a.length,n,l="value"in Ra?Ra.value:Ra.textContent,i=l.length;for(t=0;t<e&&a[t]===l[t];t++);var u=e-t;for(n=1;n<=u&&a[e-n]===l[i-n];n++);return Cl=l.slice(t,1<n?1-n:void 0)}function ql(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function _c(){return!1}function Dt(t){function a(e,n,l,i,u){this._reactName=e,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(e=t[s],this[s]=e?e(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gl:_c,this.isPropagationStopped=_c,this}return V(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),a}var de={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Dt(de),Mn=V({},de,{view:0,detail:0}),jd=Dt(Mn),nu,lu,On,Yl=V({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==On&&(On&&t.type==="mousemove"?(nu=t.screenX-On.screenX,lu=t.screenY-On.screenY):lu=nu=0,On=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),zc=Dt(Yl),Md=V({},Yl,{dataTransfer:0}),Od=Dt(Md),Bd=V({},Mn,{relatedTarget:0}),iu=Dt(Bd),Hd=V({},de,{animationName:0,elapsedTime:0,pseudoElement:0}),Ud=Dt(Hd),Rd=V({},de,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nd=Dt(Rd),Cd=V({},de,{data:0}),Dc=Dt(Cd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=Ld[t])?!!a[t]:!1}function uu(){return Yd}var Vd=V({},Mn,{key:function(t){if(t.key){var a=qd[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xd=Dt(Vd),Qd=V({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=Dt(Qd),Zd=V({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),Kd=Dt(Zd),Jd=V({},de,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=Dt(Jd),Fd=V({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$d=Dt(Fd),Id=V({},de,{newState:0,oldState:0}),Pd=Dt(Id),tm=[9,13,27,32],su=pa&&"CompositionEvent"in window,Bn=null;pa&&"documentMode"in document&&(Bn=document.documentMode);var am=pa&&"TextEvent"in window&&!Bn,Mc=pa&&(!su||Bn&&8<Bn&&11>=Bn),Oc=" ",Bc=!1;function Hc(t,a){switch(t){case"keyup":return tm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qe=!1;function em(t,a){switch(t){case"compositionend":return Uc(a);case"keypress":return a.which!==32?null:(Bc=!0,Oc);case"textInput":return t=a.data,t===Oc&&Bc?null:t;default:return null}}function nm(t,a){if(Qe)return t==="compositionend"||!su&&Hc(t,a)?(t=Ec(),Cl=eu=Ra=null,Qe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Mc&&a.locale!=="ko"?null:a.data;default:return null}}var lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!lm[t.type]:a==="textarea"}function Nc(t,a,e,n){Ve?Xe?Xe.push(n):Xe=[n]:Ve=n,a=Ai(a,"onChange"),0<a.length&&(e=new Ll("onChange","change",null,e,n),t.push({event:e,listeners:a}))}var Hn=null,Un=null;function im(t){ff(t,0)}function Vl(t){var a=zn(t);if(yc(a))return t}function Cc(t,a){if(t==="change")return a}var qc=!1;if(pa){var cu;if(pa){var ou="oninput"in document;if(!ou){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),ou=typeof Gc.oninput=="function"}cu=ou}else cu=!1;qc=cu&&(!document.documentMode||9<document.documentMode)}function Lc(){Hn&&(Hn.detachEvent("onpropertychange",Yc),Un=Hn=null)}function Yc(t){if(t.propertyName==="value"&&Vl(Un)){var a=[];Nc(a,Un,t,Pi(t)),Ac(im,a)}}function um(t,a,e){t==="focusin"?(Lc(),Hn=a,Un=e,Hn.attachEvent("onpropertychange",Yc)):t==="focusout"&&Lc()}function sm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Un)}function cm(t,a){if(t==="click")return Vl(a)}function om(t,a){if(t==="input"||t==="change")return Vl(a)}function rm(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Bt=typeof Object.is=="function"?Object.is:rm;function Rn(t,a){if(Bt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var e=Object.keys(t),n=Object.keys(a);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var l=e[n];if(!Vi.call(a,l)||!Bt(t[l],a[l]))return!1}return!0}function Vc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xc(t,a){var e=Vc(t);t=0;for(var n;e;){if(e.nodeType===3){if(n=t+e.textContent.length,t<=a&&n>=a)return{node:e,offset:a-t};t=n}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Vc(e)}}function Qc(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Qc(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Zc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Rl(t.document);a instanceof t.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)t=a.contentWindow;else break;a=Rl(t.document)}return a}function ru(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}function fm(t,a){var e=Zc(a);a=t.focusedElem;var n=t.selectionRange;if(e!==a&&a&&a.ownerDocument&&Qc(a.ownerDocument.documentElement,a)){if(n!==null&&ru(a)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=a.textContent.length,i=Math.min(n.start,l);n=n.end===void 0?i:Math.min(n.end,l),!e.extend&&i>n&&(l=n,n=i,i=l),l=Xc(a,i);var u=Xc(a,n);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dm=pa&&"documentMode"in document&&11>=document.documentMode,Ze=null,fu=null,Nn=null,du=!1;function Kc(t,a,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;du||Ze==null||Ze!==Rl(n)||(n=Ze,"selectionStart"in n&&ru(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Nn&&Rn(Nn,n)||(Nn=n,n=Ai(fu,"onSelect"),0<n.length&&(a=new Ll("onSelect","select",null,a,e),t.push({event:a,listeners:n}),a.target=Ze)))}function me(t,a){var e={};return e[t.toLowerCase()]=a.toLowerCase(),e["Webkit"+t]="webkit"+a,e["Moz"+t]="moz"+a,e}var Ke={animationend:me("Animation","AnimationEnd"),animationiteration:me("Animation","AnimationIteration"),animationstart:me("Animation","AnimationStart"),transitionrun:me("Transition","TransitionRun"),transitionstart:me("Transition","TransitionStart"),transitioncancel:me("Transition","TransitionCancel"),transitionend:me("Transition","TransitionEnd")},mu={},Jc={};pa&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Ke.animationend.animation,delete Ke.animationiteration.animation,delete Ke.animationstart.animation),"TransitionEvent"in window||delete Ke.transitionend.transition);function he(t){if(mu[t])return mu[t];if(!Ke[t])return t;var a=Ke[t],e;for(e in a)if(a.hasOwnProperty(e)&&e in Jc)return mu[t]=a[e];return t}var Wc=he("animationend"),Fc=he("animationiteration"),$c=he("animationstart"),mm=he("transitionrun"),hm=he("transitionstart"),gm=he("transitioncancel"),Ic=he("transitionend"),Pc=new Map,to="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ta(t,a){Pc.set(t,a),fe(a,[t])}var Lt=[],Je=0,hu=0;function Xl(){for(var t=Je,a=hu=Je=0;a<t;){var e=Lt[a];Lt[a++]=null;var n=Lt[a];Lt[a++]=null;var l=Lt[a];Lt[a++]=null;var i=Lt[a];if(Lt[a++]=null,n!==null&&l!==null){var u=n.pending;u===null?l.next=l:(l.next=u.next,u.next=l),n.pending=l}i!==0&&ao(e,l,i)}}function Ql(t,a,e,n){Lt[Je++]=t,Lt[Je++]=a,Lt[Je++]=e,Lt[Je++]=n,hu|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function gu(t,a,e,n){return Ql(t,a,e,n),Zl(t)}function Na(t,a){return Ql(t,null,null,a),Zl(t)}function ao(t,a,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e);for(var l=!1,i=t.return;i!==null;)i.childLanes|=e,n=i.alternate,n!==null&&(n.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;l&&a!==null&&t.tag===3&&(i=t.stateNode,l=31-Ot(e),i=i.hiddenUpdates,t=i[l],t===null?i[l]=[a]:t.push(a),a.lane=e|536870912)}function Zl(t){if(50<cl)throw cl=0,Ss=null,Error(h(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var We={},eo=new WeakMap;function Yt(t,a){if(typeof t=="object"&&t!==null){var e=eo.get(t);return e!==void 0?e:(a={value:t,source:a,stack:B(a)},eo.set(t,a),a)}return{value:t,source:a,stack:B(a)}}var Fe=[],$e=0,Kl=null,Jl=0,Vt=[],Xt=0,ge=null,ya=1,va="";function pe(t,a){Fe[$e++]=Jl,Fe[$e++]=Kl,Kl=t,Jl=a}function no(t,a,e){Vt[Xt++]=ya,Vt[Xt++]=va,Vt[Xt++]=ge,ge=t;var n=ya;t=va;var l=32-Ot(n)-1;n&=~(1<<l),e+=1;var i=32-Ot(a)+l;if(30<i){var u=l-l%5;i=(n&(1<<u)-1).toString(32),n>>=u,l-=u,ya=1<<32-Ot(a)+l|e<<l|n,va=i+t}else ya=1<<i|e<<l|n,va=t}function pu(t){t.return!==null&&(pe(t,1),no(t,1,0))}function bu(t){for(;t===Kl;)Kl=Fe[--$e],Fe[$e]=null,Jl=Fe[--$e],Fe[$e]=null;for(;t===ge;)ge=Vt[--Xt],Vt[Xt]=null,va=Vt[--Xt],Vt[Xt]=null,ya=Vt[--Xt],Vt[Xt]=null}var Et=null,kt=null,L=!1,aa=null,sa=!1,yu=Error(h(519));function be(t){var a=Error(h(418,""));throw Gn(Yt(a,t)),yu}function lo(t){var a=t.stateNode,e=t.type,n=t.memoizedProps;switch(a[wt]=t,a[zt]=n,e){case"dialog":C("cancel",a),C("close",a);break;case"iframe":case"object":case"embed":C("load",a);break;case"video":case"audio":for(e=0;e<rl.length;e++)C(rl[e],a);break;case"source":C("error",a);break;case"img":case"image":case"link":C("error",a),C("load",a);break;case"details":C("toggle",a);break;case"input":C("invalid",a),vc(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ul(a);break;case"select":C("invalid",a);break;case"textarea":C("invalid",a),Sc(a,n.value,n.defaultValue,n.children),Ul(a)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||n.suppressHydrationWarning===!0||gf(a.textContent,e)?(n.popover!=null&&(C("beforetoggle",a),C("toggle",a)),n.onScroll!=null&&C("scroll",a),n.onScrollEnd!=null&&C("scrollend",a),n.onClick!=null&&(a.onclick=Ei),a=!0):a=!1,a||be(t)}function io(t){for(Et=t.return;Et;)switch(Et.tag){case 3:case 27:sa=!0;return;case 5:case 13:sa=!1;return;default:Et=Et.return}}function Cn(t){if(t!==Et)return!1;if(!L)return io(t),L=!0,!1;var a=!1,e;if((e=t.tag!==3&&t.tag!==27)&&((e=t.tag===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Cs(t.type,t.memoizedProps)),e=!e),e&&(a=!0),a&&kt&&be(t),io(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));t:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(e=t.data,e==="/$"){if(a===0){kt=na(t.nextSibling);break t}a--}else e!=="$"&&e!=="$!"&&e!=="$?"||a++;t=t.nextSibling}kt=null}}else kt=Et?na(t.stateNode.nextSibling):null;return!0}function qn(){kt=Et=null,L=!1}function Gn(t){aa===null?aa=[t]:aa.push(t)}var Ln=Error(h(460)),uo=Error(h(474)),vu={then:function(){}};function so(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wl(){}function co(t,a,e){switch(e=t[e],e===void 0?t.push(a):e!==a&&(a.then(Wl,Wl),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,t===Ln?Error(h(483)):t;default:if(typeof a.status=="string")a.then(Wl,Wl);else{if(t=J,t!==null&&100<t.shellSuspendCounter)throw Error(h(482));t=a,t.status="pending",t.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,t===Ln?Error(h(483)):t}throw Yn=a,Ln}}var Yn=null;function oo(){if(Yn===null)throw Error(h(459));var t=Yn;return Yn=null,t}var Ie=null,Vn=0;function Fl(t){var a=Vn;return Vn+=1,Ie===null&&(Ie=[]),co(Ie,t,a)}function Xn(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function $l(t,a){throw a.$$typeof===R?Error(h(525)):(t=Object.prototype.toString.call(a),Error(h(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function ro(t){var a=t._init;return a(t._payload)}function fo(t){function a(f,o){if(t){var d=f.deletions;d===null?(f.deletions=[o],f.flags|=16):d.push(o)}}function e(f,o){if(!t)return null;for(;o!==null;)a(f,o),o=o.sibling;return null}function n(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function l(f,o){return f=Wa(f,o),f.index=0,f.sibling=null,f}function i(f,o,d){return f.index=d,t?(d=f.alternate,d!==null?(d=d.index,d<o?(f.flags|=33554434,o):d):(f.flags|=33554434,o)):(f.flags|=1048576,o)}function u(f){return t&&f.alternate===null&&(f.flags|=33554434),f}function s(f,o,d,y){return o===null||o.tag!==6?(o=ms(d,f.mode,y),o.return=f,o):(o=l(o,d),o.return=f,o)}function c(f,o,d,y){var T=d.type;return T===X?p(f,o,d.props.children,y,d.key):o!==null&&(o.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===It&&ro(T)===o.type)?(o=l(o,d.props),Xn(o,d),o.return=f,o):(o=gi(d.type,d.key,d.props,null,f.mode,y),Xn(o,d),o.return=f,o)}function r(f,o,d,y){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=hs(d,f.mode,y),o.return=f,o):(o=l(o,d.children||[]),o.return=f,o)}function p(f,o,d,y,T){return o===null||o.tag!==7?(o=_e(d,f.mode,y,T),o.return=f,o):(o=l(o,d),o.return=f,o)}function v(f,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=ms(""+o,f.mode,d),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case O:return d=gi(o.type,o.key,o.props,null,f.mode,d),Xn(d,o),d.return=f,d;case et:return o=hs(o,f.mode,d),o.return=f,o;case It:var y=o._init;return o=y(o._payload),v(f,o,d)}if(ga(o)||Pt(o))return o=_e(o,f.mode,d,null),o.return=f,o;if(typeof o.then=="function")return v(f,Fl(o),d);if(o.$$typeof===xt)return v(f,di(f,o),d);$l(f,o)}return null}function m(f,o,d,y){var T=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return T!==null?null:s(f,o,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case O:return d.key===T?c(f,o,d,y):null;case et:return d.key===T?r(f,o,d,y):null;case It:return T=d._init,d=T(d._payload),m(f,o,d,y)}if(ga(d)||Pt(d))return T!==null?null:p(f,o,d,y,null);if(typeof d.then=="function")return m(f,o,Fl(d),y);if(d.$$typeof===xt)return m(f,o,di(f,d),y);$l(f,d)}return null}function g(f,o,d,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(d)||null,s(o,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case O:return f=f.get(y.key===null?d:y.key)||null,c(o,f,y,T);case et:return f=f.get(y.key===null?d:y.key)||null,r(o,f,y,T);case It:var U=y._init;return y=U(y._payload),g(f,o,d,y,T)}if(ga(y)||Pt(y))return f=f.get(d)||null,p(o,f,y,T,null);if(typeof y.then=="function")return g(f,o,d,Fl(y),T);if(y.$$typeof===xt)return g(f,o,d,di(o,y),T);$l(o,y)}return null}function x(f,o,d,y){for(var T=null,U=null,w=o,E=o=0,vt=null;w!==null&&E<d.length;E++){w.index>E?(vt=w,w=null):vt=w.sibling;var Y=m(f,w,d[E],y);if(Y===null){w===null&&(w=vt);break}t&&w&&Y.alternate===null&&a(f,w),o=i(Y,o,E),U===null?T=Y:U.sibling=Y,U=Y,w=vt}if(E===d.length)return e(f,w),L&&pe(f,E),T;if(w===null){for(;E<d.length;E++)w=v(f,d[E],y),w!==null&&(o=i(w,o,E),U===null?T=w:U.sibling=w,U=w);return L&&pe(f,E),T}for(w=n(w);E<d.length;E++)vt=g(w,f,E,d[E],y),vt!==null&&(t&&vt.alternate!==null&&w.delete(vt.key===null?E:vt.key),o=i(vt,o,E),U===null?T=vt:U.sibling=vt,U=vt);return t&&w.forEach(function(ee){return a(f,ee)}),L&&pe(f,E),T}function M(f,o,d,y){if(d==null)throw Error(h(151));for(var T=null,U=null,w=o,E=o=0,vt=null,Y=d.next();w!==null&&!Y.done;E++,Y=d.next()){w.index>E?(vt=w,w=null):vt=w.sibling;var ee=m(f,w,Y.value,y);if(ee===null){w===null&&(w=vt);break}t&&w&&ee.alternate===null&&a(f,w),o=i(ee,o,E),U===null?T=ee:U.sibling=ee,U=ee,w=vt}if(Y.done)return e(f,w),L&&pe(f,E),T;if(w===null){for(;!Y.done;E++,Y=d.next())Y=v(f,Y.value,y),Y!==null&&(o=i(Y,o,E),U===null?T=Y:U.sibling=Y,U=Y);return L&&pe(f,E),T}for(w=n(w);!Y.done;E++,Y=d.next())Y=g(w,f,E,Y.value,y),Y!==null&&(t&&Y.alternate!==null&&w.delete(Y.key===null?E:Y.key),o=i(Y,o,E),U===null?T=Y:U.sibling=Y,U=Y);return t&&w.forEach(function(Dh){return a(f,Dh)}),L&&pe(f,E),T}function it(f,o,d,y){if(typeof d=="object"&&d!==null&&d.type===X&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case O:t:{for(var T=d.key;o!==null;){if(o.key===T){if(T=d.type,T===X){if(o.tag===7){e(f,o.sibling),y=l(o,d.props.children),y.return=f,f=y;break t}}else if(o.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===It&&ro(T)===o.type){e(f,o.sibling),y=l(o,d.props),Xn(y,d),y.return=f,f=y;break t}e(f,o);break}else a(f,o);o=o.sibling}d.type===X?(y=_e(d.props.children,f.mode,y,d.key),y.return=f,f=y):(y=gi(d.type,d.key,d.props,null,f.mode,y),Xn(y,d),y.return=f,f=y)}return u(f);case et:t:{for(T=d.key;o!==null;){if(o.key===T)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){e(f,o.sibling),y=l(o,d.children||[]),y.return=f,f=y;break t}else{e(f,o);break}else a(f,o);o=o.sibling}y=hs(d,f.mode,y),y.return=f,f=y}return u(f);case It:return T=d._init,d=T(d._payload),it(f,o,d,y)}if(ga(d))return x(f,o,d,y);if(Pt(d)){if(T=Pt(d),typeof T!="function")throw Error(h(150));return d=T.call(d),M(f,o,d,y)}if(typeof d.then=="function")return it(f,o,Fl(d),y);if(d.$$typeof===xt)return it(f,o,di(f,d),y);$l(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(e(f,o.sibling),y=l(o,d),y.return=f,f=y):(e(f,o),y=ms(d,f.mode,y),y.return=f,f=y),u(f)):e(f,o)}return function(f,o,d,y){try{Vn=0;var T=it(f,o,d,y);return Ie=null,T}catch(w){if(w===Ln)throw w;var U=Jt(29,w,null,f.mode);return U.lanes=y,U.return=f,U}finally{}}}var ye=fo(!0),mo=fo(!1),Pe=la(null),Il=la(0);function ho(t,a){t=ja,$(Il,t),$(Pe,a),ja=t|a.baseLanes}function ku(){$(Il,ja),$(Pe,Pe.current)}function Su(){ja=Il.current,gt(Pe),gt(Il)}var Qt=la(null),ca=null;function Ca(t){var a=t.alternate;$(mt,mt.current&1),$(Qt,t),ca===null&&(a===null||Pe.current!==null||a.memoizedState!==null)&&(ca=t)}function go(t){if(t.tag===22){if($(mt,mt.current),$(Qt,t),ca===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(ca=t)}}else qa()}function qa(){$(mt,mt.current),$(Qt,Qt.current)}function ka(t){gt(Qt),ca===t&&(ca=null),gt(mt)}var mt=la(0);function Pl(t){for(var a=t;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var pm=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(e,n){t.push(n)}};this.abort=function(){a.aborted=!0,t.forEach(function(e){return e()})}},bm=k.unstable_scheduleCallback,ym=k.unstable_NormalPriority,ht={$$typeof:xt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new pm,data:new Map,refCount:0}}function Qn(t){t.refCount--,t.refCount===0&&bm(ym,function(){t.controller.abort()})}var Zn=null,xu=0,tn=0,an=null;function vm(t,a){if(Zn===null){var e=Zn=[];xu=0,tn=Ds(),an={status:"pending",value:void 0,then:function(n){e.push(n)}}}return xu++,a.then(po,po),a}function po(){if(--xu===0&&Zn!==null){an!==null&&(an.status="fulfilled");var t=Zn;Zn=null,tn=0,an=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function km(t,a){var e=[],n={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return t.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<e.length;l++)(0,e[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),n}var bo=D.S;D.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&vm(t,a),bo!==null&&bo(t,a)};var ve=la(null);function wu(){var t=ve.current;return t!==null?t:J.pooledCache}function ti(t,a){a===null?$(ve,ve.current):$(ve,a.pool)}function yo(){var t=wu();return t===null?null:{parent:ht._currentValue,pool:t}}var Ga=0,H=null,Q=null,rt=null,ai=!1,en=!1,ke=!1,ei=0,Kn=0,nn=null,Sm=0;function ct(){throw Error(h(321))}function Au(t,a){if(a===null)return!1;for(var e=0;e<a.length&&e<t.length;e++)if(!Bt(t[e],a[e]))return!1;return!0}function Eu(t,a,e,n,l,i){return Ga=i,H=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,D.H=t===null||t.memoizedState===null?Se:La,ke=!1,i=e(n,l),ke=!1,en&&(i=ko(a,e,n,l)),vo(t),i}function vo(t){D.H=oa;var a=Q!==null&&Q.next!==null;if(Ga=0,rt=Q=H=null,ai=!1,Kn=0,nn=null,a)throw Error(h(300));t===null||bt||(t=t.dependencies,t!==null&&fi(t)&&(bt=!0))}function ko(t,a,e,n){H=t;var l=0;do{if(en&&(nn=null),Kn=0,en=!1,25<=l)throw Error(h(301));if(l+=1,rt=Q=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Te,i=a(e,n)}while(en);return i}function Tm(){var t=D.H,a=t.useState()[0];return a=typeof a.then=="function"?Jn(a):a,t=t.useState()[0],(Q!==null?Q.memoizedState:null)!==t&&(H.flags|=1024),a}function _u(){var t=ei!==0;return ei=0,t}function zu(t,a,e){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~e}function Du(t){if(ai){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ai=!1}Ga=0,rt=Q=H=null,en=!1,Kn=ei=0,nn=null}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?H.memoizedState=rt=t:rt=rt.next=t,rt}function ft(){if(Q===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=Q.next;var a=rt===null?H.memoizedState:rt.next;if(a!==null)rt=a,Q=t;else{if(t===null)throw H.alternate===null?Error(h(467)):Error(h(310));Q=t,t={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},rt===null?H.memoizedState=rt=t:rt=rt.next=t}return rt}var ni;ni=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Jn(t){var a=Kn;return Kn+=1,nn===null&&(nn=[]),t=co(nn,t,a),a=H,(rt===null?a.memoizedState:rt.next)===null&&(a=a.alternate,D.H=a===null||a.memoizedState===null?Se:La),t}function li(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jn(t);if(t.$$typeof===xt)return At(t)}throw Error(h(438,String(t)))}function ju(t){var a=null,e=H.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var n=H.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=ni(),H.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(t),n=0;n<t;n++)e[n]=Sn;return a.index++,e}function Sa(t,a){return typeof a=="function"?a(t):a}function ii(t){var a=ft();return Mu(a,Q,t)}function Mu(t,a,e){var n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var l=t.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}a.baseQueue=l=i,n.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{a=l.next;var s=u=null,c=null,r=a,p=!1;do{var v=r.lane&-536870913;if(v!==r.lane?(q&v)===v:(Ga&v)===v){var m=r.revertLane;if(m===0)c!==null&&(c=c.next={lane:0,revertLane:0,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),v===tn&&(p=!0);else if((Ga&m)===m){r=r.next,m===tn&&(p=!0);continue}else v={lane:0,revertLane:r.revertLane,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},c===null?(s=c=v,u=i):c=c.next=v,H.lanes|=m,Fa|=m;v=r.action,ke&&e(i,v),i=r.hasEagerState?r.eagerState:e(i,v)}else m={lane:v,revertLane:r.revertLane,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},c===null?(s=c=m,u=i):c=c.next=m,H.lanes|=v,Fa|=v;r=r.next}while(r!==null&&r!==a);if(c===null?u=i:c.next=s,!Bt(i,t.memoizedState)&&(bt=!0,p&&(e=an,e!==null)))throw e;t.memoizedState=i,t.baseState=u,t.baseQueue=c,n.lastRenderedState=i}return l===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Ou(t){var a=ft(),e=a.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=t;var n=e.dispatch,l=e.pending,i=a.memoizedState;if(l!==null){e.pending=null;var u=l=l.next;do i=t(i,u.action),u=u.next;while(u!==l);Bt(i,a.memoizedState)||(bt=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),e.lastRenderedState=i}return[i,n]}function So(t,a,e){var n=H,l=ft(),i=L;if(i){if(e===void 0)throw Error(h(407));e=e()}else e=a();var u=!Bt((Q||l).memoizedState,e);if(u&&(l.memoizedState=e,bt=!0),l=l.queue,Uu(wo.bind(null,n,l,t),[t]),l.getSnapshot!==a||u||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,ln(9,xo.bind(null,n,l,e,a),{destroy:void 0},null),J===null)throw Error(h(349));i||Ga&60||To(n,a,e)}return e}function To(t,a,e){t.flags|=16384,t={getSnapshot:a,value:e},a=H.updateQueue,a===null?(a=ni(),H.updateQueue=a,a.stores=[t]):(e=a.stores,e===null?a.stores=[t]:e.push(t))}function xo(t,a,e,n){a.value=e,a.getSnapshot=n,Ao(a)&&Eo(t)}function wo(t,a,e){return e(function(){Ao(a)&&Eo(t)})}function Ao(t){var a=t.getSnapshot;t=t.value;try{var e=a();return!Bt(t,e)}catch{return!0}}function Eo(t){var a=Na(t,2);a!==null&&_t(a,t,2)}function Bu(t){var a=jt();if(typeof t=="function"){var e=t;if(t=e(),ke){Ha(!0);try{e()}finally{Ha(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},a}function _o(t,a,e,n){return t.baseState=e,Mu(t,Q,typeof n=="function"?n:Sa)}function xm(t,a,e,n,l){if(ci(t))throw Error(h(485));if(t=a.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};D.T!==null?e(!0):i.isTransition=!1,n(i),e=a.pending,e===null?(i.next=a.pending=i,zo(a,i)):(i.next=e.next,a.pending=e.next=i)}}function zo(t,a){var e=a.action,n=a.payload,l=t.state;if(a.isTransition){var i=D.T,u={};D.T=u;try{var s=e(l,n),c=D.S;c!==null&&c(u,s),Do(t,a,s)}catch(r){Hu(t,a,r)}finally{D.T=i}}else try{i=e(l,n),Do(t,a,i)}catch(r){Hu(t,a,r)}}function Do(t,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){jo(t,a,n)},function(n){return Hu(t,a,n)}):jo(t,a,e)}function jo(t,a,e){a.status="fulfilled",a.value=e,Mo(a),t.state=e,a=t.pending,a!==null&&(e=a.next,e===a?t.pending=null:(e=e.next,a.next=e,zo(t,e)))}function Hu(t,a,e){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=e,Mo(a),a=a.next;while(a!==n)}t.action=null}function Mo(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Oo(t,a){return a}function Bo(t,a){if(L){var e=J.formState;if(e!==null){t:{var n=H;if(L){if(kt){a:{for(var l=kt,i=sa;l.nodeType!==8;){if(!i){l=null;break a}if(l=na(l.nextSibling),l===null){l=null;break a}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){kt=na(l.nextSibling),n=l.data==="F!";break t}}be(n)}n=!1}n&&(a=e[0])}}return e=jt(),e.memoizedState=e.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:a},e.queue=n,e=$o.bind(null,H,n),n.dispatch=e,n=Bu(!1),i=Gu.bind(null,H,!1,n.queue),n=jt(),l={state:a,dispatch:null,action:t,pending:null},n.queue=l,e=xm.bind(null,H,l,i,e),l.dispatch=e,n.memoizedState=t,[a,e,!1]}function Ho(t){var a=ft();return Uo(a,Q,t)}function Uo(t,a,e){a=Mu(t,a,Oo)[0],t=ii(Sa)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Jn(a):a;var n=ft(),l=n.queue,i=l.dispatch;return e!==n.memoizedState&&(H.flags|=2048,ln(9,wm.bind(null,l,e),{destroy:void 0},null)),[a,i,t]}function wm(t,a){t.action=a}function Ro(t){var a=ft(),e=Q;if(e!==null)return Uo(a,e,t);ft(),a=a.memoizedState,e=ft();var n=e.queue.dispatch;return e.memoizedState=t,[a,n,!1]}function ln(t,a,e,n){return t={tag:t,create:a,inst:e,deps:n,next:null},a=H.updateQueue,a===null&&(a=ni(),H.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=t.next=t:(n=e.next,e.next=t,t.next=n,a.lastEffect=t),t}function No(){return ft().memoizedState}function ui(t,a,e,n){var l=jt();H.flags|=t,l.memoizedState=ln(1|a,e,{destroy:void 0},n===void 0?null:n)}function si(t,a,e,n){var l=ft();n=n===void 0?null:n;var i=l.memoizedState.inst;Q!==null&&n!==null&&Au(n,Q.memoizedState.deps)?l.memoizedState=ln(a,e,i,n):(H.flags|=t,l.memoizedState=ln(1|a,e,i,n))}function Co(t,a){ui(8390656,8,t,a)}function Uu(t,a){si(2048,8,t,a)}function qo(t,a){return si(4,2,t,a)}function Go(t,a){return si(4,4,t,a)}function Lo(t,a){if(typeof a=="function"){t=t();var e=a(t);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Yo(t,a,e){e=e!=null?e.concat([t]):null,si(4,4,Lo.bind(null,a,t),e)}function Ru(){}function Vo(t,a){var e=ft();a=a===void 0?null:a;var n=e.memoizedState;return a!==null&&Au(a,n[1])?n[0]:(e.memoizedState=[t,a],t)}function Xo(t,a){var e=ft();a=a===void 0?null:a;var n=e.memoizedState;if(a!==null&&Au(a,n[1]))return n[0];if(n=t(),ke){Ha(!0);try{t()}finally{Ha(!1)}}return e.memoizedState=[n,a],n}function Nu(t,a,e){return e===void 0||Ga&1073741824?t.memoizedState=a:(t.memoizedState=e,t=Zr(),H.lanes|=t,Fa|=t,e)}function Qo(t,a,e,n){return Bt(e,a)?e:Pe.current!==null?(t=Nu(t,e,n),Bt(t,a)||(bt=!0),t):Ga&42?(t=Zr(),H.lanes|=t,Fa|=t,a):(bt=!0,t.memoizedState=e)}function Zo(t,a,e,n,l){var i=G.p;G.p=i!==0&&8>i?i:8;var u=D.T,s={};D.T=s,Gu(t,!1,a,e);try{var c=l(),r=D.S;if(r!==null&&r(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=km(c,n);Wn(t,a,p,Nt(t))}else Wn(t,a,n,Nt(t))}catch(v){Wn(t,a,{then:function(){},status:"rejected",reason:v},Nt())}finally{G.p=i,D.T=u}}function Am(){}function Cu(t,a,e,n){if(t.tag!==5)throw Error(h(476));var l=Ko(t).queue;Zo(t,l,a,Ct,e===null?Am:function(){return Jo(t),e(n)})}function Ko(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Ct,baseState:Ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:Ct},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Jo(t){var a=Ko(t).next.queue;Wn(t,a,{},Nt())}function qu(){return At(gl)}function Wo(){return ft().memoizedState}function Fo(){return ft().memoizedState}function Em(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var e=Nt();t=Xa(e);var n=Qa(a,t,e);n!==null&&(_t(n,a,e),In(n,a,e)),a={cache:Tu()},t.payload=a;return}a=a.return}}function _m(t,a,e){var n=Nt();e={lane:n,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},ci(t)?Io(a,e):(e=gu(t,a,e,n),e!==null&&(_t(e,t,n),Po(e,a,n)))}function $o(t,a,e){var n=Nt();Wn(t,a,e,n)}function Wn(t,a,e,n){var l={lane:n,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(ci(t))Io(a,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var u=a.lastRenderedState,s=i(u,e);if(l.hasEagerState=!0,l.eagerState=s,Bt(s,u))return Ql(t,a,l,0),J===null&&Xl(),!1}catch{}finally{}if(e=gu(t,a,l,n),e!==null)return _t(e,t,n),Po(e,a,n),!0}return!1}function Gu(t,a,e,n){if(n={lane:2,revertLane:Ds(),action:n,hasEagerState:!1,eagerState:null,next:null},ci(t)){if(a)throw Error(h(479))}else a=gu(t,e,n,2),a!==null&&_t(a,t,2)}function ci(t){var a=t.alternate;return t===H||a!==null&&a===H}function Io(t,a){en=ai=!0;var e=t.pending;e===null?a.next=a:(a.next=e.next,e.next=a),t.pending=a}function Po(t,a,e){if(e&4194176){var n=a.lanes;n&=t.pendingLanes,e|=n,a.lanes=e,oc(t,e)}}var oa={readContext:At,use:li,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct};oa.useCacheRefresh=ct,oa.useMemoCache=ct,oa.useHostTransitionStatus=ct,oa.useFormState=ct,oa.useActionState=ct,oa.useOptimistic=ct;var Se={readContext:At,use:li,useCallback:function(t,a){return jt().memoizedState=[t,a===void 0?null:a],t},useContext:At,useEffect:Co,useImperativeHandle:function(t,a,e){e=e!=null?e.concat([t]):null,ui(4194308,4,Lo.bind(null,a,t),e)},useLayoutEffect:function(t,a){return ui(4194308,4,t,a)},useInsertionEffect:function(t,a){ui(4,2,t,a)},useMemo:function(t,a){var e=jt();a=a===void 0?null:a;var n=t();if(ke){Ha(!0);try{t()}finally{Ha(!1)}}return e.memoizedState=[n,a],n},useReducer:function(t,a,e){var n=jt();if(e!==void 0){var l=e(a);if(ke){Ha(!0);try{e(a)}finally{Ha(!1)}}}else l=a;return n.memoizedState=n.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},n.queue=t,t=t.dispatch=_m.bind(null,H,t),[n.memoizedState,t]},useRef:function(t){var a=jt();return t={current:t},a.memoizedState=t},useState:function(t){t=Bu(t);var a=t.queue,e=$o.bind(null,H,a);return a.dispatch=e,[t.memoizedState,e]},useDebugValue:Ru,useDeferredValue:function(t,a){var e=jt();return Nu(e,t,a)},useTransition:function(){var t=Bu(!1);return t=Zo.bind(null,H,t.queue,!0,!1),jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,e){var n=H,l=jt();if(L){if(e===void 0)throw Error(h(407));e=e()}else{if(e=a(),J===null)throw Error(h(349));q&60||To(n,a,e)}l.memoizedState=e;var i={value:e,getSnapshot:a};return l.queue=i,Co(wo.bind(null,n,i,t),[t]),n.flags|=2048,ln(9,xo.bind(null,n,i,e,a),{destroy:void 0},null),e},useId:function(){var t=jt(),a=J.identifierPrefix;if(L){var e=va,n=ya;e=(n&~(1<<32-Ot(n)-1)).toString(32)+e,a=":"+a+"R"+e,e=ei++,0<e&&(a+="H"+e.toString(32)),a+=":"}else e=Sm++,a=":"+a+"r"+e.toString(32)+":";return t.memoizedState=a},useCacheRefresh:function(){return jt().memoizedState=Em.bind(null,H)}};Se.useMemoCache=ju,Se.useHostTransitionStatus=qu,Se.useFormState=Bo,Se.useActionState=Bo,Se.useOptimistic=function(t){var a=jt();a.memoizedState=a.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=Gu.bind(null,H,!0,e),e.dispatch=a,[t,a]};var La={readContext:At,use:li,useCallback:Vo,useContext:At,useEffect:Uu,useImperativeHandle:Yo,useInsertionEffect:qo,useLayoutEffect:Go,useMemo:Xo,useReducer:ii,useRef:No,useState:function(){return ii(Sa)},useDebugValue:Ru,useDeferredValue:function(t,a){var e=ft();return Qo(e,Q.memoizedState,t,a)},useTransition:function(){var t=ii(Sa)[0],a=ft().memoizedState;return[typeof t=="boolean"?t:Jn(t),a]},useSyncExternalStore:So,useId:Wo};La.useCacheRefresh=Fo,La.useMemoCache=ju,La.useHostTransitionStatus=qu,La.useFormState=Ho,La.useActionState=Ho,La.useOptimistic=function(t,a){var e=ft();return _o(e,Q,t,a)};var Te={readContext:At,use:li,useCallback:Vo,useContext:At,useEffect:Uu,useImperativeHandle:Yo,useInsertionEffect:qo,useLayoutEffect:Go,useMemo:Xo,useReducer:Ou,useRef:No,useState:function(){return Ou(Sa)},useDebugValue:Ru,useDeferredValue:function(t,a){var e=ft();return Q===null?Nu(e,t,a):Qo(e,Q.memoizedState,t,a)},useTransition:function(){var t=Ou(Sa)[0],a=ft().memoizedState;return[typeof t=="boolean"?t:Jn(t),a]},useSyncExternalStore:So,useId:Wo};Te.useCacheRefresh=Fo,Te.useMemoCache=ju,Te.useHostTransitionStatus=qu,Te.useFormState=Ro,Te.useActionState=Ro,Te.useOptimistic=function(t,a){var e=ft();return Q!==null?_o(e,Q,t,a):(e.baseState=t,[t,e.queue.dispatch])};function Lu(t,a,e,n){a=t.memoizedState,e=e(n,a),e=e==null?a:V({},a,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Yu={isMounted:function(t){return(t=t._reactInternals)?j(t)===t:!1},enqueueSetState:function(t,a,e){t=t._reactInternals;var n=Nt(),l=Xa(n);l.payload=a,e!=null&&(l.callback=e),a=Qa(t,l,n),a!==null&&(_t(a,t,n),In(a,t,n))},enqueueReplaceState:function(t,a,e){t=t._reactInternals;var n=Nt(),l=Xa(n);l.tag=1,l.payload=a,e!=null&&(l.callback=e),a=Qa(t,l,n),a!==null&&(_t(a,t,n),In(a,t,n))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var e=Nt(),n=Xa(e);n.tag=2,a!=null&&(n.callback=a),a=Qa(t,n,e),a!==null&&(_t(a,t,e),In(a,t,e))}};function tr(t,a,e,n,l,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,u):a.prototype&&a.prototype.isPureReactComponent?!Rn(e,n)||!Rn(l,i):!0}function ar(t,a,e,n){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,n),a.state!==t&&Yu.enqueueReplaceState(a,a.state,null)}function xe(t,a){var e=a;if("ref"in a){e={};for(var n in a)n!=="ref"&&(e[n]=a[n])}if(t=t.defaultProps){e===a&&(e=V({},e));for(var l in t)e[l]===void 0&&(e[l]=t[l])}return e}var oi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function er(t){oi(t)}function nr(t){console.error(t)}function lr(t){oi(t)}function ri(t,a){try{var e=t.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function ir(t,a,e){try{var n=t.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Vu(t,a,e){return e=Xa(e),e.tag=3,e.payload={element:null},e.callback=function(){ri(t,a)},e}function ur(t){return t=Xa(t),t.tag=3,t}function sr(t,a,e,n){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;t.payload=function(){return l(i)},t.callback=function(){ir(a,e,n)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){ir(a,e,n),typeof l!="function"&&($a===null?$a=new Set([this]):$a.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function zm(t,a,e,n,l){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=e.alternate,a!==null&&$n(a,e,l,!0),e=Qt.current,e!==null){switch(e.tag){case 13:return ca===null?ws():e.alternate===null&&lt===0&&(lt=3),e.flags&=-257,e.flags|=65536,e.lanes=l,n===vu?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([n]):a.add(n),Es(t,n,l)),!1;case 22:return e.flags|=65536,n===vu?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([n]):e.add(n)),Es(t,n,l)),!1}throw Error(h(435,e.tag))}return Es(t,n,l),ws(),!1}if(L)return a=Qt.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==yu&&(t=Error(h(422),{cause:n}),Gn(Yt(t,e)))):(n!==yu&&(a=Error(h(423),{cause:n}),Gn(Yt(a,e))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,n=Yt(n,e),l=Vu(t.stateNode,n,l),ls(t,l),lt!==4&&(lt=2)),!1;var i=Error(h(520),{cause:n});if(i=Yt(i,e),ul===null?ul=[i]:ul.push(i),lt!==4&&(lt=2),a===null)return!0;n=Yt(n,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,t=l&-l,e.lanes|=t,t=Vu(e.stateNode,n,t),ls(e,t),!1;case 1:if(a=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&($a===null||!$a.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=ur(l),sr(l,t,e,n),ls(e,l),!1}e=e.return}while(e!==null);return!1}var cr=Error(h(461)),bt=!1;function St(t,a,e,n){a.child=t===null?mo(a,null,e,n):ye(a,t.child,e,n)}function or(t,a,e,n,l){e=e.render;var i=a.ref;if("ref"in n){var u={};for(var s in n)s!=="ref"&&(u[s]=n[s])}else u=n;return Ae(a),n=Eu(t,a,e,u,i,l),s=_u(),t!==null&&!bt?(zu(t,a,l),Ta(t,a,l)):(L&&s&&pu(a),a.flags|=1,St(t,a,n,l),a.child)}function rr(t,a,e,n,l){if(t===null){var i=e.type;return typeof i=="function"&&!ds(i)&&i.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=i,fr(t,a,i,n,l)):(t=gi(e.type,null,n,a,a.mode,l),t.ref=a.ref,t.return=a,a.child=t)}if(i=t.child,!Iu(t,l)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Rn,e(u,n)&&t.ref===a.ref)return Ta(t,a,l)}return a.flags|=1,t=Wa(i,n),t.ref=a.ref,t.return=a,a.child=t}function fr(t,a,e,n,l){if(t!==null){var i=t.memoizedProps;if(Rn(i,n)&&t.ref===a.ref)if(bt=!1,a.pendingProps=n=i,Iu(t,l))t.flags&131072&&(bt=!0);else return a.lanes=t.lanes,Ta(t,a,l)}return Xu(t,a,e,n,l)}function dr(t,a,e){var n=a.pendingProps,l=n.children,i=(a.stateNode._pendingVisibility&2)!==0,u=t!==null?t.memoizedState:null;if(Fn(t,a),n.mode==="hidden"||i){if(a.flags&128){if(n=u!==null?u.baseLanes|e:e,t!==null){for(l=a.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;a.childLanes=i&~n}else a.childLanes=0,a.child=null;return mr(t,a,n,e)}if(e&536870912)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&ti(a,u!==null?u.cachePool:null),u!==null?ho(a,u):ku(),go(a);else return a.lanes=a.childLanes=536870912,mr(t,a,u!==null?u.baseLanes|e:e,e)}else u!==null?(ti(a,u.cachePool),ho(a,u),qa(),a.memoizedState=null):(t!==null&&ti(a,null),ku(),qa());return St(t,a,l,e),a.child}function mr(t,a,e,n){var l=wu();return l=l===null?null:{parent:ht._currentValue,pool:l},a.memoizedState={baseLanes:e,cachePool:l},t!==null&&ti(a,null),ku(),go(a),t!==null&&$n(t,a,n,!0),null}function Fn(t,a){var e=a.ref;if(e===null)t!==null&&t.ref!==null&&(a.flags|=2097664);else{if(typeof e!="function"&&typeof e!="object")throw Error(h(284));(t===null||t.ref!==e)&&(a.flags|=2097664)}}function Xu(t,a,e,n,l){return Ae(a),e=Eu(t,a,e,n,void 0,l),n=_u(),t!==null&&!bt?(zu(t,a,l),Ta(t,a,l)):(L&&n&&pu(a),a.flags|=1,St(t,a,e,l),a.child)}function hr(t,a,e,n,l,i){return Ae(a),a.updateQueue=null,e=ko(a,n,e,l),vo(t),n=_u(),t!==null&&!bt?(zu(t,a,i),Ta(t,a,i)):(L&&n&&pu(a),a.flags|=1,St(t,a,e,i),a.child)}function gr(t,a,e,n,l){if(Ae(a),a.stateNode===null){var i=We,u=e.contextType;typeof u=="object"&&u!==null&&(i=At(u)),i=new e(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Yu,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},es(a),u=e.contextType,i.context=typeof u=="object"&&u!==null?At(u):We,i.state=a.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(Lu(a,e,u,n),i.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Yu.enqueueReplaceState(i,i.state,null),tl(a,n,i,l),Pn(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(t===null){i=a.stateNode;var s=a.memoizedProps,c=xe(e,s);i.props=c;var r=i.context,p=e.contextType;u=We,typeof p=="object"&&p!==null&&(u=At(p));var v=e.getDerivedStateFromProps;p=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||r!==u)&&ar(a,i,n,u),Va=!1;var m=a.memoizedState;i.state=m,tl(a,n,i,l),Pn(),r=a.memoizedState,s||m!==r||Va?(typeof v=="function"&&(Lu(a,e,v,n),r=a.memoizedState),(c=Va||tr(a,e,c,n,m,r,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=r),i.props=n,i.state=r,i.context=u,n=c):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,ns(t,a),u=a.memoizedProps,p=xe(e,u),i.props=p,v=a.pendingProps,m=i.context,r=e.contextType,c=We,typeof r=="object"&&r!==null&&(c=At(r)),s=e.getDerivedStateFromProps,(r=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==c)&&ar(a,i,n,c),Va=!1,m=a.memoizedState,i.state=m,tl(a,n,i,l),Pn();var g=a.memoizedState;u!==v||m!==g||Va||t!==null&&t.dependencies!==null&&fi(t.dependencies)?(typeof s=="function"&&(Lu(a,e,s,n),g=a.memoizedState),(p=Va||tr(a,e,p,n,m,g,c)||t!==null&&t.dependencies!==null&&fi(t.dependencies))?(r||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,g,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,g,c)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=g),i.props=n,i.state=g,i.context=c,n=p):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(a.flags|=1024),n=!1)}return i=n,Fn(t,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,t!==null&&n?(a.child=ye(a,t.child,null,l),a.child=ye(a,null,e,l)):St(t,a,e,l),a.memoizedState=i.state,t=a.child):t=Ta(t,a,l),t}function pr(t,a,e,n){return qn(),a.flags|=256,St(t,a,e,n),a.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function Zu(t){return{baseLanes:t,cachePool:yo()}}function Ku(t,a,e){return t=t!==null?t.childLanes&~e:0,a&&(t|=Wt),t}function br(t,a,e){var n=a.pendingProps,l=!1,i=(a.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(mt.current&2)!==0),u&&(l=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,t===null){if(L){if(l?Ca(a):qa(),L){var s=kt,c;if(c=s){t:{for(c=s,s=sa;c.nodeType!==8;){if(!s){s=null;break t}if(c=na(c.nextSibling),c===null){s=null;break t}}s=c}s!==null?(a.memoizedState={dehydrated:s,treeContext:ge!==null?{id:ya,overflow:va}:null,retryLane:536870912},c=Jt(18,null,null,0),c.stateNode=s,c.return=a,a.child=c,Et=a,kt=null,c=!0):c=!1}c||be(a)}if(s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return s.data==="$!"?a.lanes=16:a.lanes=536870912,null;ka(a)}return s=n.children,n=n.fallback,l?(qa(),l=a.mode,s=Wu({mode:"hidden",children:s},l),n=_e(n,l,e,null),s.return=a,n.return=a,s.sibling=n,a.child=s,l=a.child,l.memoizedState=Zu(e),l.childLanes=Ku(t,u,e),a.memoizedState=Qu,n):(Ca(a),Ju(a,s))}if(c=t.memoizedState,c!==null&&(s=c.dehydrated,s!==null)){if(i)a.flags&256?(Ca(a),a.flags&=-257,a=Fu(t,a,e)):a.memoizedState!==null?(qa(),a.child=t.child,a.flags|=128,a=null):(qa(),l=n.fallback,s=a.mode,n=Wu({mode:"visible",children:n.children},s),l=_e(l,s,e,null),l.flags|=2,n.return=a,l.return=a,n.sibling=l,a.child=n,ye(a,t.child,null,e),n=a.child,n.memoizedState=Zu(e),n.childLanes=Ku(t,u,e),a.memoizedState=Qu,a=l);else if(Ca(a),s.data==="$!"){if(u=s.nextSibling&&s.nextSibling.dataset,u)var r=u.dgst;u=r,n=Error(h(419)),n.stack="",n.digest=u,Gn({value:n,source:null,stack:null}),a=Fu(t,a,e)}else if(bt||$n(t,a,e,!1),u=(e&t.childLanes)!==0,bt||u){if(u=J,u!==null){if(n=e&-e,n&42)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=n&(u.suspendedLanes|e)?0:n,n!==0&&n!==c.retryLane)throw c.retryLane=n,Na(t,n),_t(u,t,n),cr}s.data==="$?"||ws(),a=Fu(t,a,e)}else s.data==="$?"?(a.flags|=128,a.child=t.child,a=Vm.bind(null,t),s._reactRetry=a,a=null):(t=c.treeContext,kt=na(s.nextSibling),Et=a,L=!0,aa=null,sa=!1,t!==null&&(Vt[Xt++]=ya,Vt[Xt++]=va,Vt[Xt++]=ge,ya=t.id,va=t.overflow,ge=a),a=Ju(a,n.children),a.flags|=4096);return a}return l?(qa(),l=n.fallback,s=a.mode,c=t.child,r=c.sibling,n=Wa(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&31457280,r!==null?l=Wa(r,l):(l=_e(l,s,e,null),l.flags|=2),l.return=a,n.return=a,n.sibling=l,a.child=n,n=l,l=a.child,s=t.child.memoizedState,s===null?s=Zu(e):(c=s.cachePool,c!==null?(r=ht._currentValue,c=c.parent!==r?{parent:r,pool:r}:c):c=yo(),s={baseLanes:s.baseLanes|e,cachePool:c}),l.memoizedState=s,l.childLanes=Ku(t,u,e),a.memoizedState=Qu,n):(Ca(a),e=t.child,t=e.sibling,e=Wa(e,{mode:"visible",children:n.children}),e.return=a,e.sibling=null,t!==null&&(u=a.deletions,u===null?(a.deletions=[t],a.flags|=16):u.push(t)),a.child=e,a.memoizedState=null,e)}function Ju(t,a){return a=Wu({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Wu(t,a){return Vr(t,a,0,null)}function Fu(t,a,e){return ye(a,t.child,null,e),t=Ju(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function yr(t,a,e){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a),ts(t.return,a,e)}function $u(t,a,e,n,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:l}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=e,i.tailMode=l)}function vr(t,a,e){var n=a.pendingProps,l=n.revealOrder,i=n.tail;if(St(t,a,n.children,e),n=mt.current,n&2)n=n&1|2,a.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yr(t,e,a);else if(t.tag===19)yr(t,e,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch($(mt,n),l){case"forwards":for(e=a.child,l=null;e!==null;)t=e.alternate,t!==null&&Pl(t)===null&&(l=e),e=e.sibling;e=l,e===null?(l=a.child,a.child=null):(l=e.sibling,e.sibling=null),$u(a,!1,l,e,i);break;case"backwards":for(e=null,l=a.child,a.child=null;l!==null;){if(t=l.alternate,t!==null&&Pl(t)===null){a.child=l;break}t=l.sibling,l.sibling=e,e=l,l=t}$u(a,!0,e,null,i);break;case"together":$u(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ta(t,a,e){if(t!==null&&(a.dependencies=t.dependencies),Fa|=a.lanes,!(e&a.childLanes))if(t!==null){if($n(t,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(h(153));if(a.child!==null){for(t=a.child,e=Wa(t,t.pendingProps),a.child=e,e.return=a;t.sibling!==null;)t=t.sibling,e=e.sibling=Wa(t,t.pendingProps),e.return=a;e.sibling=null}return a.child}function Iu(t,a){return t.lanes&a?!0:(t=t.dependencies,!!(t!==null&&fi(t)))}function Dm(t,a,e){switch(a.tag){case 3:_l(a,a.stateNode.containerInfo),Ya(a,ht,t.memoizedState.cache),qn();break;case 27:case 5:Yi(a);break;case 4:_l(a,a.stateNode.containerInfo);break;case 10:Ya(a,a.type,a.memoizedProps.value);break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(Ca(a),a.flags|=128,null):e&a.child.childLanes?br(t,a,e):(Ca(a),t=Ta(t,a,e),t!==null?t.sibling:null);Ca(a);break;case 19:var l=(t.flags&128)!==0;if(n=(e&a.childLanes)!==0,n||($n(t,a,e,!1),n=(e&a.childLanes)!==0),l){if(n)return vr(t,a,e);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(mt,mt.current),n)break;return null;case 22:case 23:return a.lanes=0,dr(t,a,e);case 24:Ya(a,ht,t.memoizedState.cache)}return Ta(t,a,e)}function kr(t,a,e){if(t!==null)if(t.memoizedProps!==a.pendingProps)bt=!0;else{if(!Iu(t,e)&&!(a.flags&128))return bt=!1,Dm(t,a,e);bt=!!(t.flags&131072)}else bt=!1,L&&a.flags&1048576&&no(a,Jl,a.index);switch(a.lanes=0,a.tag){case 16:t:{t=a.pendingProps;var n=a.elementType,l=n._init;if(n=l(n._payload),a.type=n,typeof n=="function")ds(n)?(t=xe(n,t),a.tag=1,a=gr(null,a,n,t,e)):(a.tag=0,a=Xu(null,a,n,t,e));else{if(n!=null){if(l=n.$$typeof,l===$t){a.tag=11,a=or(null,a,n,t,e);break t}else if(l===Oe){a.tag=14,a=rr(null,a,n,t,e);break t}}throw a=Be(n)||n,Error(h(306,a,""))}}return a;case 0:return Xu(t,a,a.type,a.pendingProps,e);case 1:return n=a.type,l=xe(n,a.pendingProps),gr(t,a,n,l,e);case 3:t:{if(_l(a,a.stateNode.containerInfo),t===null)throw Error(h(387));var i=a.pendingProps;l=a.memoizedState,n=l.element,ns(t,a),tl(a,i,null,e);var u=a.memoizedState;if(i=u.cache,Ya(a,ht,i),i!==l.cache&&as(a,[ht],e,!0),Pn(),i=u.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=pr(t,a,i,e);break t}else if(i!==n){n=Yt(Error(h(424)),a),Gn(n),a=pr(t,a,i,e);break t}else for(kt=na(a.stateNode.containerInfo.firstChild),Et=a,L=!0,aa=null,sa=!0,e=mo(a,null,i,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(qn(),i===n){a=Ta(t,a,e);break t}St(t,a,i,e)}a=a.child}return a;case 26:return Fn(t,a),t===null?(e=wf(a.type,null,a.pendingProps,null))?a.memoizedState=e:L||(e=a.type,t=a.pendingProps,n=_i(Ba.current).createElement(e),n[wt]=a,n[zt]=t,Tt(n,e,t),pt(n),a.stateNode=n):a.memoizedState=wf(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Yi(a),t===null&&L&&(n=a.stateNode=Sf(a.type,a.pendingProps,Ba.current),Et=a,sa=!0,kt=na(n.firstChild)),n=a.pendingProps.children,t!==null||L?St(t,a,n,e):a.child=ye(a,null,n,e),Fn(t,a),a.child;case 5:return t===null&&L&&((l=n=kt)&&(n=ih(n,a.type,a.pendingProps,sa),n!==null?(a.stateNode=n,Et=a,kt=na(n.firstChild),sa=!1,l=!0):l=!1),l||be(a)),Yi(a),l=a.type,i=a.pendingProps,u=t!==null?t.memoizedProps:null,n=i.children,Cs(l,i)?n=null:u!==null&&Cs(l,u)&&(a.flags|=32),a.memoizedState!==null&&(l=Eu(t,a,Tm,null,null,e),gl._currentValue=l),Fn(t,a),St(t,a,n,e),a.child;case 6:return t===null&&L&&((t=e=kt)&&(e=uh(e,a.pendingProps,sa),e!==null?(a.stateNode=e,Et=a,kt=null,t=!0):t=!1),t||be(a)),null;case 13:return br(t,a,e);case 4:return _l(a,a.stateNode.containerInfo),n=a.pendingProps,t===null?a.child=ye(a,null,n,e):St(t,a,n,e),a.child;case 11:return or(t,a,a.type,a.pendingProps,e);case 7:return St(t,a,a.pendingProps,e),a.child;case 8:return St(t,a,a.pendingProps.children,e),a.child;case 12:return St(t,a,a.pendingProps.children,e),a.child;case 10:return n=a.pendingProps,Ya(a,a.type,n.value),St(t,a,n.children,e),a.child;case 9:return l=a.type._context,n=a.pendingProps.children,Ae(a),l=At(l),n=n(l),a.flags|=1,St(t,a,n,e),a.child;case 14:return rr(t,a,a.type,a.pendingProps,e);case 15:return fr(t,a,a.type,a.pendingProps,e);case 19:return vr(t,a,e);case 22:return dr(t,a,e);case 24:return Ae(a),n=At(ht),t===null?(l=wu(),l===null&&(l=J,i=Tu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),a.memoizedState={parent:n,cache:l},es(a),Ya(a,ht,l)):(t.lanes&e&&(ns(t,a),tl(a,null,null,e),Pn()),l=t.memoizedState,i=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),Ya(a,ht,n)):(n=i.cache,Ya(a,ht,n),n!==l.cache&&as(a,[ht],e,!0))),St(t,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(h(156,a.tag))}var Pu=la(null),we=null,xa=null;function Ya(t,a,e){$(Pu,a._currentValue),a._currentValue=e}function wa(t){t._currentValue=Pu.current,gt(Pu)}function ts(t,a,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),t===e)break;t=t.return}}function as(t,a,e,n){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=l;for(var c=0;c<a.length;c++)if(s.context===a[c]){i.lanes|=e,s=i.alternate,s!==null&&(s.lanes|=e),ts(i.return,e,t),n||(u=null);break t}i=s.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(h(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),ts(u,e,t),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function $n(t,a,e,n){t=null;for(var l=a,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var s=l.type;Bt(l.pendingProps.value,u.value)||(t!==null?t.push(s):t=[s])}}else if(l===El.current){if(u=l.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}l=l.return}t!==null&&as(a,t,e,n),a.flags|=262144}function fi(t){for(t=t.firstContext;t!==null;){if(!Bt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ae(t){we=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function At(t){return Sr(we,t)}function di(t,a){return we===null&&Ae(t),Sr(t,a)}function Sr(t,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},xa===null){if(t===null)throw Error(h(308));xa=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else xa=xa.next=a;return e}var Va=!1;function es(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ns(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,a,e){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,at&2){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=Zl(t),ao(t,null,e),a}return Ql(t,n,a,e),Zl(t)}function In(t,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194176)!==0)){var n=a.lanes;n&=t.pendingLanes,e|=n,a.lanes=e,oc(t,e)}}function ls(t,a){var e=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?l=i=a:i=i.next=a}else l=i=a;e={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=a:t.next=a,e.lastBaseUpdate=a}var is=!1;function Pn(){if(is){var t=an;if(t!==null)throw t}}function tl(t,a,e,n){is=!1;var l=t.updateQueue;Va=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,r=c.next;c.next=null,u===null?i=r:u.next=r,u=c;var p=t.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==u&&(s===null?p.firstBaseUpdate=r:s.next=r,p.lastBaseUpdate=c))}if(i!==null){var v=l.baseState;u=0,p=r=c=null,s=i;do{var m=s.lane&-536870913,g=m!==s.lane;if(g?(q&m)===m:(n&m)===m){m!==0&&m===tn&&(is=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var x=t,M=s;m=a;var it=e;switch(M.tag){case 1:if(x=M.payload,typeof x=="function"){v=x.call(it,v,m);break t}v=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,m=typeof x=="function"?x.call(it,v,m):x,m==null)break t;v=V({},v,m);break t;case 2:Va=!0}}m=s.callback,m!==null&&(t.flags|=64,g&&(t.flags|=8192),g=l.callbacks,g===null?l.callbacks=[m]:g.push(m))}else g={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(r=p=g,c=v):p=p.next=g,u|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);p===null&&(c=v),l.baseState=c,l.firstBaseUpdate=r,l.lastBaseUpdate=p,i===null&&(l.shared.lanes=0),Fa|=u,t.lanes=u,t.memoizedState=v}}function Tr(t,a){if(typeof t!="function")throw Error(h(191,t));t.call(a)}function xr(t,a){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Tr(e[t],a)}function al(t,a){try{var e=a.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var l=n.next;e=l;do{if((e.tag&t)===t){n=void 0;var i=e.create,u=e.inst;n=i(),u.destroy=n}e=e.next}while(e!==l)}}catch(s){K(a,a.return,s)}}function Za(t,a,e){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&t)===t){var u=n.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,l=a;var c=e;try{s()}catch(r){K(l,c,r)}}}n=n.next}while(n!==i)}}catch(r){K(a,a.return,r)}}function wr(t){var a=t.updateQueue;if(a!==null){var e=t.stateNode;try{xr(a,e)}catch(n){K(t,t.return,n)}}}function Ar(t,a,e){e.props=xe(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(n){K(t,a,n)}}function Ee(t,a){try{var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 26:case 27:case 5:var l=n;break;default:l=n}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(i){K(t,a,i)}}function Ht(t,a){var e=t.ref,n=t.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(l){K(t,a,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){K(t,a,l)}else e.current=null}function Er(t){var a=t.type,e=t.memoizedProps,n=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break t;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(l){K(t,t.return,l)}}function _r(t,a,e){try{var n=t.stateNode;th(n,t.type,e,a),n[zt]=a}catch(l){K(t,t.return,l)}}function zr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function us(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||zr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ss(t,a,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,a?e.nodeType===8?e.parentNode.insertBefore(t,a):e.insertBefore(t,a):(e.nodeType===8?(a=e.parentNode,a.insertBefore(t,e)):(a=e,a.appendChild(t)),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=Ei));else if(n!==4&&n!==27&&(t=t.child,t!==null))for(ss(t,a,e),t=t.sibling;t!==null;)ss(t,a,e),t=t.sibling}function mi(t,a,e){var n=t.tag;if(n===5||n===6)t=t.stateNode,a?e.insertBefore(t,a):e.appendChild(t);else if(n!==4&&n!==27&&(t=t.child,t!==null))for(mi(t,a,e),t=t.sibling;t!==null;)mi(t,a,e),t=t.sibling}var Aa=!1,nt=!1,cs=!1,Dr=typeof WeakSet=="function"?WeakSet:Set,yt=null,jr=!1;function jm(t,a){if(t=t.containerInfo,Rs=Bi,t=Zc(t),ru(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var u=0,s=-1,c=-1,r=0,p=0,v=t,m=null;a:for(;;){for(var g;v!==e||l!==0&&v.nodeType!==3||(s=u+l),v!==i||n!==0&&v.nodeType!==3||(c=u+n),v.nodeType===3&&(u+=v.nodeValue.length),(g=v.firstChild)!==null;)m=v,v=g;for(;;){if(v===t)break a;if(m===e&&++r===l&&(s=u),m===i&&++p===n&&(c=u),(g=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=g}e=s===-1||c===-1?null:{start:s,end:c}}else e=null}e=e||{start:0,end:0}}else e=null;for(Ns={focusedElem:t,selectionRange:e},Bi=!1,yt=a;yt!==null;)if(a=yt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,yt=t;else for(;yt!==null;){switch(a=yt,i=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,e=a,l=i.memoizedProps,i=i.memoizedState,n=e.stateNode;try{var x=xe(e.type,l,e.elementType===e.type);t=n.getSnapshotBeforeUpdate(x,i),n.__reactInternalSnapshotBeforeUpdate=t}catch(M){K(e,e.return,M)}}break;case 3:if(t&1024){if(t=a.stateNode.containerInfo,e=t.nodeType,e===9)Ls(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ls(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(h(163))}if(t=a.sibling,t!==null){t.return=a.return,yt=t;break}yt=a.return}return x=jr,jr=!1,x}function Mr(t,a,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:_a(t,e),n&4&&al(5,e);break;case 1:if(_a(t,e),n&4)if(t=e.stateNode,a===null)try{t.componentDidMount()}catch(s){K(e,e.return,s)}else{var l=xe(e.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(l,a,t.__reactInternalSnapshotBeforeUpdate)}catch(s){K(e,e.return,s)}}n&64&&wr(e),n&512&&Ee(e,e.return);break;case 3:if(_a(t,e),n&64&&(n=e.updateQueue,n!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{xr(n,t)}catch(s){K(e,e.return,s)}}break;case 26:_a(t,e),n&512&&Ee(e,e.return);break;case 27:case 5:_a(t,e),a===null&&n&4&&Er(e),n&512&&Ee(e,e.return);break;case 12:_a(t,e);break;case 13:_a(t,e),n&4&&Hr(t,e);break;case 22:if(l=e.memoizedState!==null||Aa,!l){a=a!==null&&a.memoizedState!==null||nt;var i=Aa,u=nt;Aa=l,(nt=a)&&!u?Ka(t,e,(e.subtreeFlags&8772)!==0):_a(t,e),Aa=i,nt=u}n&512&&(e.memoizedProps.mode==="manual"?Ee(e,e.return):Ht(e,e.return));break;default:_a(t,e)}}function Or(t){var a=t.alternate;a!==null&&(t.alternate=null,Or(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Ji(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,Ut=!1;function Ea(t,a,e){for(e=e.child;e!==null;)Br(t,a,e),e=e.sibling}function Br(t,a,e){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(wn,e)}catch{}switch(e.tag){case 26:nt||Ht(e,a),Ea(t,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:nt||Ht(e,a);var n=dt,l=Ut;for(dt=e.stateNode,Ea(t,a,e),e=e.stateNode,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ji(e),dt=n,Ut=l;break;case 5:nt||Ht(e,a);case 6:l=dt;var i=Ut;if(dt=null,Ea(t,a,e),dt=l,Ut=i,dt!==null)if(Ut)try{t=dt,n=e.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)}catch(u){K(e,a,u)}else try{dt.removeChild(e.stateNode)}catch(u){K(e,a,u)}break;case 18:dt!==null&&(Ut?(a=dt,e=e.stateNode,a.nodeType===8?Gs(a.parentNode,e):a.nodeType===1&&Gs(a,e),vl(a)):Gs(dt,e.stateNode));break;case 4:n=dt,l=Ut,dt=e.stateNode.containerInfo,Ut=!0,Ea(t,a,e),dt=n,Ut=l;break;case 0:case 11:case 14:case 15:nt||Za(2,e,a),nt||Za(4,e,a),Ea(t,a,e);break;case 1:nt||(Ht(e,a),n=e.stateNode,typeof n.componentWillUnmount=="function"&&Ar(e,a,n)),Ea(t,a,e);break;case 21:Ea(t,a,e);break;case 22:nt||Ht(e,a),nt=(n=nt)||e.memoizedState!==null,Ea(t,a,e),nt=n;break;default:Ea(t,a,e)}}function Hr(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vl(t)}catch(e){K(a,a.return,e)}}function Mm(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Dr),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Dr),a;default:throw Error(h(435,t.tag))}}function os(t,a){var e=Mm(t);a.forEach(function(n){var l=Xm.bind(null,t,n);e.has(n)||(e.add(n),n.then(l,l))})}function Zt(t,a){var e=a.deletions;if(e!==null)for(var n=0;n<e.length;n++){var l=e[n],i=t,u=a,s=u;t:for(;s!==null;){switch(s.tag){case 27:case 5:dt=s.stateNode,Ut=!1;break t;case 3:dt=s.stateNode.containerInfo,Ut=!0;break t;case 4:dt=s.stateNode.containerInfo,Ut=!0;break t}s=s.return}if(dt===null)throw Error(h(160));Br(i,u,l),dt=null,Ut=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Ur(a,t),a=a.sibling}var ea=null;function Ur(t,a){var e=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(a,t),Kt(t),n&4&&(Za(3,t,t.return),al(3,t),Za(5,t,t.return));break;case 1:Zt(a,t),Kt(t),n&512&&(nt||e===null||Ht(e,e.return)),n&64&&Aa&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var l=ea;if(Zt(a,t),Kt(t),n&512&&(nt||e===null||Ht(e,e.return)),n&4){var i=e!==null?e.memoizedState:null;if(n=t.memoizedState,e===null)if(n===null)if(t.stateNode===null){t:{n=t.type,e=t.memoizedProps,l=l.ownerDocument||l;a:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[_n]||i[wt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Tt(i,n,e),i[wt]=t,pt(i),n=i;break t;case"link":var u=_f("link","href",l).get(n+(e.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(e.href==null?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(s,1);break a}}i=l.createElement(n),Tt(i,n,e),l.head.appendChild(i);break;case"meta":if(u=_f("meta","content",l).get(n+(e.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(s,1);break a}}i=l.createElement(n),Tt(i,n,e),l.head.appendChild(i);break;default:throw Error(h(468,n))}i[wt]=t,pt(i),n=i}t.stateNode=n}else zf(l,t.type,t.stateNode);else t.stateNode=Ef(l,n,t.memoizedProps);else i!==n?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,n===null?zf(l,t.type,t.stateNode):Ef(l,n,t.memoizedProps)):n===null&&t.stateNode!==null&&_r(t,t.memoizedProps,e.memoizedProps)}break;case 27:if(n&4&&t.alternate===null){l=t.stateNode,i=t.memoizedProps;try{for(var c=l.firstChild;c;){var r=c.nextSibling,p=c.nodeName;c[_n]||p==="HEAD"||p==="BODY"||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=r}for(var v=t.type,m=l.attributes;m.length;)l.removeAttributeNode(m[0]);Tt(l,v,i),l[wt]=t,l[zt]=i}catch(x){K(t,t.return,x)}}case 5:if(Zt(a,t),Kt(t),n&512&&(nt||e===null||Ht(e,e.return)),t.flags&32){l=t.stateNode;try{Ye(l,"")}catch(x){K(t,t.return,x)}}n&4&&t.stateNode!=null&&(l=t.memoizedProps,_r(t,l,e!==null?e.memoizedProps:l)),n&1024&&(cs=!0);break;case 6:if(Zt(a,t),Kt(t),n&4){if(t.stateNode===null)throw Error(h(162));n=t.memoizedProps,e=t.stateNode;try{e.nodeValue=n}catch(x){K(t,t.return,x)}}break;case 3:if(ji=null,l=ea,ea=zi(a.containerInfo),Zt(a,t),ea=l,Kt(t),n&4&&e!==null&&e.memoizedState.isDehydrated)try{vl(a.containerInfo)}catch(x){K(t,t.return,x)}cs&&(cs=!1,Rr(t));break;case 4:n=ea,ea=zi(t.stateNode.containerInfo),Zt(a,t),Kt(t),ea=n;break;case 12:Zt(a,t),Kt(t);break;case 13:Zt(a,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(ys=ua()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,os(t,n)));break;case 22:if(n&512&&(nt||e===null||Ht(e,e.return)),c=t.memoizedState!==null,r=e!==null&&e.memoizedState!==null,p=Aa,v=nt,Aa=p||c,nt=v||r,Zt(a,t),nt=v,Aa=p,Kt(t),a=t.stateNode,a._current=t,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,n&8192&&(a._visibility=c?a._visibility&-2:a._visibility|1,c&&(a=Aa||nt,e===null||r||a||un(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(e=null,a=t;;){if(a.tag===5||a.tag===26||a.tag===27){if(e===null){r=e=a;try{if(l=r.stateNode,c)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=r.stateNode,s=r.memoizedProps.style;var g=s!=null&&s.hasOwnProperty("display")?s.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(x){K(r,r.return,x)}}}else if(a.tag===6){if(e===null){r=a;try{r.stateNode.nodeValue=c?"":r.memoizedProps}catch(x){K(r,r.return,x)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=t.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,os(t,e))));break;case 19:Zt(a,t),Kt(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,os(t,n)));break;case 21:break;default:Zt(a,t),Kt(t)}}function Kt(t){var a=t.flags;if(a&2){try{if(t.tag!==27){t:{for(var e=t.return;e!==null;){if(zr(e)){var n=e;break t}e=e.return}throw Error(h(160))}switch(n.tag){case 27:var l=n.stateNode,i=us(t);mi(t,i,l);break;case 5:var u=n.stateNode;n.flags&32&&(Ye(u,""),n.flags&=-33);var s=us(t);mi(t,s,u);break;case 3:case 4:var c=n.stateNode.containerInfo,r=us(t);ss(t,r,c);break;default:throw Error(h(161))}}}catch(p){K(t,t.return,p)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Rr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Rr(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function _a(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Mr(t,a.alternate,a),a=a.sibling}function un(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Za(4,a,a.return),un(a);break;case 1:Ht(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&Ar(a,a.return,e),un(a);break;case 26:case 27:case 5:Ht(a,a.return),un(a);break;case 22:Ht(a,a.return),a.memoizedState===null&&un(a);break;default:un(a)}t=t.sibling}}function Ka(t,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,l=t,i=a,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ka(l,i,e),al(4,i);break;case 1:if(Ka(l,i,e),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(r){K(n,n.return,r)}if(n=i,l=n.updateQueue,l!==null){var s=n.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)Tr(c[l],s)}catch(r){K(n,n.return,r)}}e&&u&64&&wr(i),Ee(i,i.return);break;case 26:case 27:case 5:Ka(l,i,e),e&&n===null&&u&4&&Er(i),Ee(i,i.return);break;case 12:Ka(l,i,e);break;case 13:Ka(l,i,e),e&&u&4&&Hr(l,i);break;case 22:i.memoizedState===null&&Ka(l,i,e),Ee(i,i.return);break;default:Ka(l,i,e)}a=a.sibling}}function rs(t,a){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Qn(e))}function fs(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Qn(t))}function Ja(t,a,e,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Nr(t,a,e,n),a=a.sibling}function Nr(t,a,e,n){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ja(t,a,e,n),l&2048&&al(9,a);break;case 3:Ja(t,a,e,n),l&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Qn(t)));break;case 12:if(l&2048){Ja(t,a,e,n),t=a.stateNode;try{var i=a.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){K(a,a.return,c)}}else Ja(t,a,e,n);break;case 23:break;case 22:i=a.stateNode,a.memoizedState!==null?i._visibility&4?Ja(t,a,e,n):el(t,a):i._visibility&4?Ja(t,a,e,n):(i._visibility|=4,sn(t,a,e,n,(a.subtreeFlags&10256)!==0)),l&2048&&rs(a.alternate,a);break;case 24:Ja(t,a,e,n),l&2048&&fs(a.alternate,a);break;default:Ja(t,a,e,n)}}function sn(t,a,e,n,l){for(l=l&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var i=t,u=a,s=e,c=n,r=u.flags;switch(u.tag){case 0:case 11:case 15:sn(i,u,s,c,l),al(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&4?sn(i,u,s,c,l):el(i,u):(p._visibility|=4,sn(i,u,s,c,l)),l&&r&2048&&rs(u.alternate,u);break;case 24:sn(i,u,s,c,l),l&&r&2048&&fs(u.alternate,u);break;default:sn(i,u,s,c,l)}a=a.sibling}}function el(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=t,n=a,l=n.flags;switch(n.tag){case 22:el(e,n),l&2048&&rs(n.alternate,n);break;case 24:el(e,n),l&2048&&fs(n.alternate,n);break;default:el(e,n)}a=a.sibling}}var nl=8192;function cn(t){if(t.subtreeFlags&nl)for(t=t.child;t!==null;)Cr(t),t=t.sibling}function Cr(t){switch(t.tag){case 26:cn(t),t.flags&nl&&t.memoizedState!==null&&vh(ea,t.memoizedState,t.memoizedProps);break;case 5:cn(t);break;case 3:case 4:var a=ea;ea=zi(t.stateNode.containerInfo),cn(t),ea=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=nl,nl=16777216,cn(t),nl=a):cn(t));break;default:cn(t)}}function qr(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function ll(t){var a=t.deletions;if(t.flags&16){if(a!==null)for(var e=0;e<a.length;e++){var n=a[e];yt=n,Lr(n,t)}qr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gr(t),t=t.sibling}function Gr(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&Za(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&4&&(t.return===null||t.return.tag!==13)?(a._visibility&=-5,hi(t)):ll(t);break;default:ll(t)}}function hi(t){var a=t.deletions;if(t.flags&16){if(a!==null)for(var e=0;e<a.length;e++){var n=a[e];yt=n,Lr(n,t)}qr(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Za(8,a,a.return),hi(a);break;case 22:e=a.stateNode,e._visibility&4&&(e._visibility&=-5,hi(a));break;default:hi(a)}t=t.sibling}}function Lr(t,a){for(;yt!==null;){var e=yt;switch(e.tag){case 0:case 11:case 15:Za(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Qn(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,yt=n;else t:for(e=t;yt!==null;){n=yt;var l=n.sibling,i=n.return;if(Or(n),n===e){yt=null;break t}if(l!==null){l.return=i,yt=l;break t}yt=i}}}function Om(t,a,e,n){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,a,e,n){return new Om(t,a,e,n)}function ds(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wa(t,a){var e=t.alternate;return e===null?(e=Jt(t.tag,a,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=a,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&31457280,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Yr(t,a){t.flags&=31457282;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function gi(t,a,e,n,l,i){var u=0;if(n=t,typeof t=="function")ds(t)&&(u=1);else if(typeof t=="string")u=bh(t,e,ia.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case X:return _e(e.children,l,i,a);case ot:u=8,l|=24;break;case da:return t=Jt(12,e,a,l|2),t.elementType=da,t.lanes=i,t;case ma:return t=Jt(13,e,a,l),t.elementType=ma,t.lanes=i,t;case Me:return t=Jt(19,e,a,l),t.elementType=Me,t.lanes=i,t;case ne:return Vr(e,l,i,a);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:case xt:u=10;break t;case ut:u=9;break t;case $t:u=11;break t;case Oe:u=14;break t;case It:u=16,n=null;break t}u=29,e=Error(h(130,t===null?"null":typeof t,"")),n=null}return a=Jt(u,e,a,l),a.elementType=t,a.type=n,a.lanes=i,a}function _e(t,a,e,n){return t=Jt(7,t,n,a),t.lanes=e,t}function Vr(t,a,e,n){t=Jt(22,t,n,a),t.elementType=ne,t.lanes=e;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=l._current;if(i===null)throw Error(h(456));if(!(l._pendingVisibility&2)){var u=Na(i,2);u!==null&&(l._pendingVisibility|=2,_t(u,i,2))}},attach:function(){var i=l._current;if(i===null)throw Error(h(456));if(l._pendingVisibility&2){var u=Na(i,2);u!==null&&(l._pendingVisibility&=-3,_t(u,i,2))}}};return t.stateNode=l,t}function ms(t,a,e){return t=Jt(6,t,null,a),t.lanes=e,t}function hs(t,a,e){return a=Jt(4,t.children!==null?t.children:[],t.key,a),a.lanes=e,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}function za(t){t.flags|=4}function Xr(t,a){if(a.type!=="stylesheet"||a.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Df(a)){if(a=Qt.current,a!==null&&((q&4194176)===q?ca!==null:(q&62914560)!==q&&!(q&536870912)||a!==ca))throw Yn=vu,uo;t.flags|=8192}}function pi(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?sc():536870912,t.lanes|=a,rn|=a)}function il(t,a){if(!L)switch(t.tailMode){case"hidden":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function tt(t){var a=t.alternate!==null&&t.alternate.child===t.child,e=0,n=0;if(a)for(var l=t.child;l!==null;)e|=l.lanes|l.childLanes,n|=l.subtreeFlags&31457280,n|=l.flags&31457280,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)e|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=n,t.childLanes=e,a}function Bm(t,a,e){var n=a.pendingProps;switch(bu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(a),null;case 1:return tt(a),null;case 3:return e=a.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),wa(ht),Re(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(Cn(a)?za(a):t===null||t.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,aa!==null&&(Ts(aa),aa=null))),tt(a),null;case 26:return e=a.memoizedState,t===null?(za(a),e!==null?(tt(a),Xr(a,e)):(tt(a),a.flags&=-16777217)):e?e!==t.memoizedState?(za(a),tt(a),Xr(a,e)):(tt(a),a.flags&=-16777217):(t.memoizedProps!==n&&za(a),tt(a),a.flags&=-16777217),null;case 27:zl(a),e=Ba.current;var l=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==n&&za(a);else{if(!n){if(a.stateNode===null)throw Error(h(166));return tt(a),null}t=ia.current,Cn(a)?lo(a):(t=Sf(l,n,e),a.stateNode=t,za(a))}return tt(a),null;case 5:if(zl(a),e=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==n&&za(a);else{if(!n){if(a.stateNode===null)throw Error(h(166));return tt(a),null}if(t=ia.current,Cn(a))lo(a);else{switch(l=_i(Ba.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?l.createElement(e,{is:n.is}):l.createElement(e)}}t[wt]=a,t[zt]=n;t:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break t;for(;l.sibling===null;){if(l.return===null||l.return===a)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=t;t:switch(Tt(t,e,n),e){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&za(a)}}return tt(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==n&&za(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(h(166));if(t=Ba.current,Cn(a)){if(t=a.stateNode,e=a.memoizedProps,n=null,l=Et,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}t[wt]=a,t=!!(t.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||gf(t.nodeValue,e)),t||be(a)}else t=_i(t).createTextNode(n),t[wt]=a,a.stateNode=t}return tt(a),null;case 13:if(n=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Cn(a),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(h(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[wt]=a}else qn(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;tt(a),l=!1}else aa!==null&&(Ts(aa),aa=null),l=!0;if(!l)return a.flags&256?(ka(a),a):(ka(a),null)}if(ka(a),a.flags&128)return a.lanes=e,a;if(e=n!==null,t=t!==null&&t.memoizedState!==null,e){n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return e!==t&&e&&(a.child.flags|=8192),pi(a,a.updateQueue),tt(a),null;case 4:return Re(),t===null&&Bs(a.stateNode.containerInfo),tt(a),null;case 10:return wa(a.type),tt(a),null;case 19:if(gt(mt),l=a.memoizedState,l===null)return tt(a),null;if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)il(l,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=a.child;t!==null;){if(i=Pl(t),i!==null){for(a.flags|=128,il(l,!1),t=i.updateQueue,a.updateQueue=t,pi(a,t),a.subtreeFlags=0,t=e,e=a.child;e!==null;)Yr(e,t),e=e.sibling;return $(mt,mt.current&1|2),a.child}t=t.sibling}l.tail!==null&&ua()>bi&&(a.flags|=128,n=!0,il(l,!1),a.lanes=4194304)}else{if(!n)if(t=Pl(i),t!==null){if(a.flags|=128,n=!0,t=t.updateQueue,a.updateQueue=t,pi(a,t),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!L)return tt(a),null}else 2*ua()-l.renderingStartTime>bi&&e!==536870912&&(a.flags|=128,n=!0,il(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(t=l.last,t!==null?t.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(a=l.tail,l.rendering=a,l.tail=a.sibling,l.renderingStartTime=ua(),a.sibling=null,t=mt.current,$(mt,n?t&1|2:t&1),a):(tt(a),null);case 22:case 23:return ka(a),Su(),n=a.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?e&536870912&&!(a.flags&128)&&(tt(a),a.subtreeFlags&6&&(a.flags|=8192)):tt(a),e=a.updateQueue,e!==null&&pi(a,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==e&&(a.flags|=2048),t!==null&&gt(ve),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),wa(ht),tt(a),null;case 25:return null}throw Error(h(156,a.tag))}function Hm(t,a){switch(bu(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return wa(ht),Re(),t=a.flags,t&65536&&!(t&128)?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return zl(a),null;case 13:if(ka(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(h(340));qn()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return gt(mt),null;case 4:return Re(),null;case 10:return wa(a.type),null;case 22:case 23:return ka(a),Su(),t!==null&&gt(ve),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return wa(ht),null;case 25:return null;default:return null}}function Qr(t,a){switch(bu(a),a.tag){case 3:wa(ht),Re();break;case 26:case 27:case 5:zl(a);break;case 4:Re();break;case 13:ka(a);break;case 19:gt(mt);break;case 10:wa(a.type);break;case 22:case 23:ka(a),Su(),t!==null&&gt(ve);break;case 24:wa(ht)}}var Um={getCacheForType:function(t){var a=At(ht),e=a.data.get(t);return e===void 0&&(e=t(),a.data.set(t,e)),e}},Rm=typeof WeakMap=="function"?WeakMap:Map,at=0,J=null,N=null,q=0,W=0,Rt=null,Da=!1,on=!1,gs=!1,ja=0,lt=0,Fa=0,ze=0,ps=0,Wt=0,rn=0,ul=null,ra=null,bs=!1,ys=0,bi=1/0,yi=null,$a=null,vi=!1,De=null,sl=0,vs=0,ks=null,cl=0,Ss=null;function Nt(){if(at&2&&q!==0)return q&-q;if(D.T!==null){var t=tn;return t!==0?t:Ds()}return fc()}function Zr(){Wt===0&&(Wt=!(q&536870912)||L?uc():536870912);var t=Qt.current;return t!==null&&(t.flags|=32),Wt}function _t(t,a,e){(t===J&&W===2||t.cancelPendingCommit!==null)&&(fn(t,0),Ma(t,q,Wt,!1)),En(t,e),(!(at&2)||t!==J)&&(t===J&&(!(at&2)&&(ze|=e),lt===4&&Ma(t,q,Wt,!1)),fa(t))}function Kr(t,a,e){if(at&6)throw Error(h(327));var n=!e&&(a&60)===0&&(a&t.expiredLanes)===0||An(t,a),l=n?qm(t,a):As(t,a,!0),i=n;do{if(l===0){on&&!n&&Ma(t,a,0,!1);break}else if(l===6)Ma(t,a,0,!Da);else{if(e=t.current.alternate,i&&!Nm(e)){l=As(t,a,!1),i=!1;continue}if(l===2){if(i=a,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;t:{var s=t;l=ul;var c=s.current.memoizedState.isDehydrated;if(c&&(fn(s,u).flags|=256),u=As(s,u,!1),u!==2){if(gs&&!c){s.errorRecoveryDisabledLanes|=i,ze|=i,l=4;break t}i=ra,ra=l,i!==null&&Ts(i)}l=u}if(i=!1,l!==2)continue}}if(l===1){fn(t,0),Ma(t,a,0,!0);break}t:{switch(n=t,l){case 0:case 1:throw Error(h(345));case 4:if((a&4194176)===a){Ma(n,a,Wt,!Da);break t}break;case 2:ra=null;break;case 3:case 5:break;default:throw Error(h(329))}if(n.finishedWork=e,n.finishedLanes=a,(a&62914560)===a&&(i=ys+300-ua(),10<i)){if(Ma(n,a,Wt,!Da),Ol(n,0)!==0)break t;n.timeoutHandle=yf(Jr.bind(null,n,e,ra,yi,bs,a,Wt,ze,rn,Da,2,-0,0),i);break t}Jr(n,e,ra,yi,bs,a,Wt,ze,rn,Da,0,-0,0)}}break}while(!0);fa(t)}function Ts(t){ra===null?ra=t:ra.push.apply(ra,t)}function Jr(t,a,e,n,l,i,u,s,c,r,p,v,m){var g=a.subtreeFlags;if((g&8192||(g&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:yh},Cr(a),a=kh(),a!==null)){t.cancelPendingCommit=a(af.bind(null,t,e,n,l,u,s,c,1,v,m)),Ma(t,i,u,!r);return}af(t,e,n,l,u,s,c,p,v,m)}function Nm(t){for(var a=t;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var l=e[n],i=l.getSnapshot;l=l.value;try{if(!Bt(i(),l))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ma(t,a,e,n){a&=~ps,a&=~ze,t.suspendedLanes|=a,t.pingedLanes&=~a,n&&(t.warmLanes|=a),n=t.expirationTimes;for(var l=a;0<l;){var i=31-Ot(l),u=1<<i;n[i]=-1,l&=~u}e!==0&&cc(t,e,a)}function ki(){return at&6?!0:(ol(0),!1)}function xs(){if(N!==null){if(W===0)var t=N.return;else t=N,xa=we=null,Du(t),Ie=null,Vn=0,t=N;for(;t!==null;)Qr(t.alternate,t),t=t.return;N=null}}function fn(t,a){t.finishedWork=null,t.finishedLanes=0;var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,eh(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),xs(),J=t,N=e=Wa(t.current,null),q=a,W=0,Rt=null,Da=!1,on=An(t,a),gs=!1,rn=Wt=ps=ze=Fa=lt=0,ra=ul=null,bs=!1,a&8&&(a|=a&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=a;0<n;){var l=31-Ot(n),i=1<<l;a|=t[l],n&=~i}return ja=a,Xl(),e}function Wr(t,a){H=null,D.H=oa,a===Ln?(a=oo(),W=3):a===uo?(a=oo(),W=4):W=a===cr?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Rt=a,N===null&&(lt=1,ri(t,Yt(a,t.current)))}function Fr(){var t=D.H;return D.H=oa,t===null?oa:t}function $r(){var t=D.A;return D.A=Um,t}function ws(){lt=4,Da||(q&4194176)!==q&&Qt.current!==null||(on=!0),!(Fa&134217727)&&!(ze&134217727)||J===null||Ma(J,q,Wt,!1)}function As(t,a,e){var n=at;at|=2;var l=Fr(),i=$r();(J!==t||q!==a)&&(yi=null,fn(t,a)),a=!1;var u=lt;t:do try{if(W!==0&&N!==null){var s=N,c=Rt;switch(W){case 8:xs(),u=6;break t;case 3:case 2:case 6:Qt.current===null&&(a=!0);var r=W;if(W=0,Rt=null,dn(t,s,c,r),e&&on){u=0;break t}break;default:r=W,W=0,Rt=null,dn(t,s,c,r)}}Cm(),u=lt;break}catch(p){Wr(t,p)}while(!0);return a&&t.shellSuspendCounter++,xa=we=null,at=n,D.H=l,D.A=i,N===null&&(J=null,q=0,Xl()),u}function Cm(){for(;N!==null;)Ir(N)}function qm(t,a){var e=at;at|=2;var n=Fr(),l=$r();J!==t||q!==a?(yi=null,bi=ua()+500,fn(t,a)):on=An(t,a);t:do try{if(W!==0&&N!==null){a=N;var i=Rt;a:switch(W){case 1:W=0,Rt=null,dn(t,a,i,1);break;case 2:if(so(i)){W=0,Rt=null,Pr(a);break}a=function(){W===2&&J===t&&(W=7),fa(t)},i.then(a,a);break t;case 3:W=7;break t;case 4:W=5;break t;case 7:so(i)?(W=0,Rt=null,Pr(a)):(W=0,Rt=null,dn(t,a,i,7));break;case 5:var u=null;switch(N.tag){case 26:u=N.memoizedState;case 5:case 27:var s=N;if(!u||Df(u)){W=0,Rt=null;var c=s.sibling;if(c!==null)N=c;else{var r=s.return;r!==null?(N=r,Si(r)):N=null}break a}}W=0,Rt=null,dn(t,a,i,5);break;case 6:W=0,Rt=null,dn(t,a,i,6);break;case 8:xs(),lt=6;break t;default:throw Error(h(462))}}Gm();break}catch(p){Wr(t,p)}while(!0);return xa=we=null,D.H=n,D.A=l,at=e,N!==null?0:(J=null,q=0,Xl(),lt)}function Gm(){for(;N!==null&&!cd();)Ir(N)}function Ir(t){var a=kr(t.alternate,t,ja);t.memoizedProps=t.pendingProps,a===null?Si(t):N=a}function Pr(t){var a=t,e=a.alternate;switch(a.tag){case 15:case 0:a=hr(e,a,a.pendingProps,a.type,void 0,q);break;case 11:a=hr(e,a,a.pendingProps,a.type.render,a.ref,q);break;case 5:Du(a);default:Qr(e,a),a=N=Yr(a,ja),a=kr(e,a,ja)}t.memoizedProps=t.pendingProps,a===null?Si(t):N=a}function dn(t,a,e,n){xa=we=null,Du(a),Ie=null,Vn=0;var l=a.return;try{if(zm(t,l,a,e,q)){lt=1,ri(t,Yt(e,t.current)),N=null;return}}catch(i){if(l!==null)throw N=l,i;lt=1,ri(t,Yt(e,t.current)),N=null;return}a.flags&32768?(L||n===1?t=!0:on||q&536870912?t=!1:(Da=t=!0,(n===2||n===3||n===6)&&(n=Qt.current,n!==null&&n.tag===13&&(n.flags|=16384))),tf(a,t)):Si(a)}function Si(t){var a=t;do{if(a.flags&32768){tf(a,Da);return}t=a.return;var e=Bm(a.alternate,a,ja);if(e!==null){N=e;return}if(a=a.sibling,a!==null){N=a;return}N=a=t}while(a!==null);lt===0&&(lt=5)}function tf(t,a){do{var e=Hm(t.alternate,t);if(e!==null){e.flags&=32767,N=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(t=t.sibling,t!==null)){N=t;return}N=t=e}while(t!==null);lt=6,N=null}function af(t,a,e,n,l,i,u,s,c,r){var p=D.T,v=G.p;try{G.p=2,D.T=null,Lm(t,a,e,n,v,l,i,u,s,c,r)}finally{D.T=p,G.p=v}}function Lm(t,a,e,n,l,i,u,s){do mn();while(De!==null);if(at&6)throw Error(h(327));var c=t.finishedWork;if(n=t.finishedLanes,c===null)return null;if(t.finishedWork=null,t.finishedLanes=0,c===t.current)throw Error(h(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var r=c.lanes|c.childLanes;if(r|=hu,vd(t,n,r,i,u,s),t===J&&(N=J=null,q=0),!(c.subtreeFlags&10256)&&!(c.flags&10256)||vi||(vi=!0,vs=r,ks=e,Qm(Dl,function(){return mn(),null})),e=(c.flags&15990)!==0,c.subtreeFlags&15990||e?(e=D.T,D.T=null,i=G.p,G.p=2,u=at,at|=4,jm(t,c),Ur(c,t),fm(Ns,t.containerInfo),Bi=!!Rs,Ns=Rs=null,t.current=c,Mr(t,c.alternate,c),od(),at=u,G.p=i,D.T=e):t.current=c,vi?(vi=!1,De=t,sl=n):ef(t,r),r=t.pendingLanes,r===0&&($a=null),hd(c.stateNode),fa(t),a!==null)for(l=t.onRecoverableError,c=0;c<a.length;c++)r=a[c],l(r.value,{componentStack:r.stack});return sl&3&&mn(),r=t.pendingLanes,n&4194218&&r&42?t===Ss?cl++:(cl=0,Ss=t):cl=0,ol(0),null}function ef(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Qn(a)))}function mn(){if(De!==null){var t=De,a=vs;vs=0;var e=rc(sl),n=D.T,l=G.p;try{if(G.p=32>e?32:e,D.T=null,De===null)var i=!1;else{e=ks,ks=null;var u=De,s=sl;if(De=null,sl=0,at&6)throw Error(h(331));var c=at;if(at|=4,Gr(u.current),Nr(u,u.current,s,e),at=c,ol(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(wn,u)}catch{}i=!0}return i}finally{G.p=l,D.T=n,ef(t,a)}}return!1}function nf(t,a,e){a=Yt(e,a),a=Vu(t.stateNode,a,2),t=Qa(t,a,2),t!==null&&(En(t,2),fa(t))}function K(t,a,e){if(t.tag===3)nf(t,t,e);else for(;a!==null;){if(a.tag===3){nf(a,t,e);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($a===null||!$a.has(n))){t=Yt(e,t),e=ur(2),n=Qa(a,e,2),n!==null&&(sr(e,n,a,t),En(n,2),fa(n));break}}a=a.return}}function Es(t,a,e){var n=t.pingCache;if(n===null){n=t.pingCache=new Rm;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(e)||(gs=!0,l.add(e),t=Ym.bind(null,t,a,e),a.then(t,t))}function Ym(t,a,e){var n=t.pingCache;n!==null&&n.delete(a),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,J===t&&(q&e)===e&&(lt===4||lt===3&&(q&62914560)===q&&300>ua()-ys?!(at&2)&&fn(t,0):ps|=e,rn===q&&(rn=0)),fa(t)}function lf(t,a){a===0&&(a=sc()),t=Na(t,a),t!==null&&(En(t,a),fa(t))}function Vm(t){var a=t.memoizedState,e=0;a!==null&&(e=a.retryLane),lf(t,e)}function Xm(t,a){var e=0;switch(t.tag){case 13:var n=t.stateNode,l=t.memoizedState;l!==null&&(e=l.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(h(314))}n!==null&&n.delete(a),lf(t,e)}function Qm(t,a){return Xi(t,a)}var Ti=null,hn=null,_s=!1,xi=!1,zs=!1,je=0;function fa(t){t!==hn&&t.next===null&&(hn===null?Ti=hn=t:hn=hn.next=t),xi=!0,_s||(_s=!0,Km(Zm))}function ol(t,a){if(!zs&&xi){zs=!0;do for(var e=!1,n=Ti;n!==null;){if(t!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var u=n.suspendedLanes,s=n.pingedLanes;i=(1<<31-Ot(42|t)+1)-1,i&=l&~(u&~s),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(e=!0,cf(n,i))}else i=q,i=Ol(n,n===J?i:0),!(i&3)||An(n,i)||(e=!0,cf(n,i));n=n.next}while(e);zs=!1}}function Zm(){xi=_s=!1;var t=0;je!==0&&(ah()&&(t=je),je=0);for(var a=ua(),e=null,n=Ti;n!==null;){var l=n.next,i=uf(n,a);i===0?(n.next=null,e===null?Ti=l:e.next=l,l===null&&(hn=e)):(e=n,(t!==0||i&3)&&(xi=!0)),n=l}ol(t)}function uf(t,a){for(var e=t.suspendedLanes,n=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Ot(i),s=1<<u,c=l[u];c===-1?(!(s&e)||s&n)&&(l[u]=yd(s,a)):c<=a&&(t.expiredLanes|=s),i&=~s}if(a=J,e=q,e=Ol(t,t===a?e:0),n=t.callbackNode,e===0||t===a&&W===2||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Qi(n),t.callbackNode=null,t.callbackPriority=0;if(!(e&3)||An(t,e)){if(a=e&-e,a===t.callbackPriority)return a;switch(n!==null&&Qi(n),rc(e)){case 2:case 8:e=lc;break;case 32:e=Dl;break;case 268435456:e=ic;break;default:e=Dl}return n=sf.bind(null,t),e=Xi(e,n),t.callbackPriority=a,t.callbackNode=e,a}return n!==null&&n!==null&&Qi(n),t.callbackPriority=2,t.callbackNode=null,2}function sf(t,a){var e=t.callbackNode;if(mn()&&t.callbackNode!==e)return null;var n=q;return n=Ol(t,t===J?n:0),n===0?null:(Kr(t,n,a),uf(t,ua()),t.callbackNode!=null&&t.callbackNode===e?sf.bind(null,t):null)}function cf(t,a){if(mn())return null;Kr(t,a,!0)}function Km(t){nh(function(){at&6?Xi(nc,t):t()})}function Ds(){return je===0&&(je=uc()),je}function of(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(""+t)}function rf(t,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,t.id&&e.setAttribute("form",t.id),a.parentNode.insertBefore(e,a),t=new FormData(t),e.parentNode.removeChild(e),t}function Jm(t,a,e,n,l){if(a==="submit"&&e&&e.stateNode===l){var i=of((l[zt]||null).action),u=n.submitter;u&&(a=(a=u[zt]||null)?of(a.formAction):u.getAttribute("formAction"),a!==null&&(i=a,u=null));var s=new Ll("action","action",null,n,l);t.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(je!==0){var c=u?rf(l,u):new FormData(l);Cu(e,{pending:!0,data:c,method:l.method,action:i},null,c)}}else typeof i=="function"&&(s.preventDefault(),c=u?rf(l,u):new FormData(l),Cu(e,{pending:!0,data:c,method:l.method,action:i},i,c))},currentTarget:l}]})}}for(var js=0;js<to.length;js++){var Ms=to[js],Wm=Ms.toLowerCase(),Fm=Ms[0].toUpperCase()+Ms.slice(1);ta(Wm,"on"+Fm)}ta(Wc,"onAnimationEnd"),ta(Fc,"onAnimationIteration"),ta($c,"onAnimationStart"),ta("dblclick","onDoubleClick"),ta("focusin","onFocus"),ta("focusout","onBlur"),ta(mm,"onTransitionRun"),ta(hm,"onTransitionStart"),ta(gm,"onTransitionCancel"),ta(Ic,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$m=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function ff(t,a){a=(a&4)!==0;for(var e=0;e<t.length;e++){var n=t[e],l=n.event;n=n.listeners;t:{var i=void 0;if(a)for(var u=n.length-1;0<=u;u--){var s=n[u],c=s.instance,r=s.currentTarget;if(s=s.listener,c!==i&&l.isPropagationStopped())break t;i=s,l.currentTarget=r;try{i(l)}catch(p){oi(p)}l.currentTarget=null,i=c}else for(u=0;u<n.length;u++){if(s=n[u],c=s.instance,r=s.currentTarget,s=s.listener,c!==i&&l.isPropagationStopped())break t;i=s,l.currentTarget=r;try{i(l)}catch(p){oi(p)}l.currentTarget=null,i=c}}}}function C(t,a){var e=a[Ki];e===void 0&&(e=a[Ki]=new Set);var n=t+"__bubble";e.has(n)||(df(a,t,2,!1),e.add(n))}function Os(t,a,e){var n=0;a&&(n|=4),df(e,t,n,a)}var wi="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[wi]){t[wi]=!0,mc.forEach(function(e){e!=="selectionchange"&&($m.has(e)||Os(e,!1,t),Os(e,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[wi]||(a[wi]=!0,Os("selectionchange",!1,a))}}function df(t,a,e,n){switch(Uf(a)){case 2:var l=xh;break;case 8:l=wh;break;default:l=Zs}e=l.bind(null,a,e,t),l=void 0,!au||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?t.addEventListener(a,e,{capture:!0,passive:l}):t.addEventListener(a,e,!0):l!==void 0?t.addEventListener(a,e,{passive:l}):t.addEventListener(a,e,!1)}function Hs(t,a,e,n,l){var i=n;if(!(a&1)&&!(a&2)&&n!==null)t:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var s=n.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(u===4)for(u=n.return;u!==null;){var c=u.tag;if((c===3||c===4)&&(c=u.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;u=u.return}for(;s!==null;){if(u=re(s),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){n=i=u;continue t}s=s.parentNode}}n=n.return}Ac(function(){var r=i,p=Pi(e),v=[];t:{var m=Pc.get(t);if(m!==void 0){var g=Ll,x=t;switch(t){case"keypress":if(ql(e)===0)break t;case"keydown":case"keyup":g=Xd;break;case"focusin":x="focus",g=iu;break;case"focusout":x="blur",g=iu;break;case"beforeblur":case"afterblur":g=iu;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Kd;break;case Wc:case Fc:case $c:g=Ud;break;case Ic:g=Wd;break;case"scroll":case"scrollend":g=jd;break;case"wheel":g=$d;break;case"copy":case"cut":case"paste":g=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jc;break;case"toggle":case"beforetoggle":g=Pd}var M=(a&4)!==0,it=!M&&(t==="scroll"||t==="scrollend"),f=M?m!==null?m+"Capture":null:m;M=[];for(var o=r,d;o!==null;){var y=o;if(d=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||d===null||f===null||(y=Dn(o,f),y!=null&&M.push(fl(o,y,d))),it)break;o=o.return}0<M.length&&(m=new g(m,x,null,e,p),v.push({event:m,listeners:M}))}}if(!(a&7)){t:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&e!==Ii&&(x=e.relatedTarget||e.fromElement)&&(re(x)||x[Ne]))break t;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(x=e.relatedTarget||e.toElement,g=r,x=x?re(x):null,x!==null&&(it=j(x),M=x.tag,x!==it||M!==5&&M!==27&&M!==6)&&(x=null)):(g=null,x=r),g!==x)){if(M=zc,y="onMouseLeave",f="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(M=jc,y="onPointerLeave",f="onPointerEnter",o="pointer"),it=g==null?m:zn(g),d=x==null?m:zn(x),m=new M(y,o+"leave",g,e,p),m.target=it,m.relatedTarget=d,y=null,re(p)===r&&(M=new M(f,o+"enter",x,e,p),M.target=d,M.relatedTarget=it,y=M),it=y,g&&x)a:{for(M=g,f=x,o=0,d=M;d;d=gn(d))o++;for(d=0,y=f;y;y=gn(y))d++;for(;0<o-d;)M=gn(M),o--;for(;0<d-o;)f=gn(f),d--;for(;o--;){if(M===f||f!==null&&M===f.alternate)break a;M=gn(M),f=gn(f)}M=null}else M=null;g!==null&&mf(v,m,g,M,!1),x!==null&&it!==null&&mf(v,it,x,M,!0)}}t:{if(m=r?zn(r):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var T=Cc;else if(Rc(m))if(qc)T=om;else{T=sm;var U=um}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?r&&$i(r.elementType)&&(T=Cc):T=cm;if(T&&(T=T(t,r))){Nc(v,T,e,p);break t}U&&U(t,m,r),t==="focusout"&&r&&m.type==="number"&&r.memoizedProps.value!=null&&Fi(m,"number",m.value)}switch(U=r?zn(r):window,t){case"focusin":(Rc(U)||U.contentEditable==="true")&&(Ze=U,fu=r,Nn=null);break;case"focusout":Nn=fu=Ze=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Kc(v,e,p);break;case"selectionchange":if(dm)break;case"keydown":case"keyup":Kc(v,e,p)}var w;if(su)t:{switch(t){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Qe?Hc(t,e)&&(E="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(E="onCompositionStart");E&&(Mc&&e.locale!=="ko"&&(Qe||E!=="onCompositionStart"?E==="onCompositionEnd"&&Qe&&(w=Ec()):(Ra=p,eu="value"in Ra?Ra.value:Ra.textContent,Qe=!0)),U=Ai(r,E),0<U.length&&(E=new Dc(E,t,null,e,p),v.push({event:E,listeners:U}),w?E.data=w:(w=Uc(e),w!==null&&(E.data=w)))),(w=am?em(t,e):nm(t,e))&&(E=Ai(r,"onBeforeInput"),0<E.length&&(U=new Dc("onBeforeInput","beforeinput",null,e,p),v.push({event:U,listeners:E}),U.data=w)),Jm(v,t,r,e,p)}ff(v,a)})}function fl(t,a,e){return{instance:t,listener:a,currentTarget:e}}function Ai(t,a){for(var e=a+"Capture",n=[];t!==null;){var l=t,i=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Dn(t,e),l!=null&&n.unshift(fl(t,l,i)),l=Dn(t,a),l!=null&&n.push(fl(t,l,i))),t=t.return}return n}function gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function mf(t,a,e,n,l){for(var i=a._reactName,u=[];e!==null&&e!==n;){var s=e,c=s.alternate,r=s.stateNode;if(s=s.tag,c!==null&&c===n)break;s!==5&&s!==26&&s!==27||r===null||(c=r,l?(r=Dn(e,i),r!=null&&u.unshift(fl(e,r,c))):l||(r=Dn(e,i),r!=null&&u.push(fl(e,r,c)))),e=e.return}u.length!==0&&t.push({event:a,listeners:u})}var Im=/\r\n?/g,Pm=/\u0000|\uFFFD/g;function hf(t){return(typeof t=="string"?t:""+t).replace(Im,`
`).replace(Pm,"")}function gf(t,a){return a=hf(a),hf(t)===a}function Ei(){}function Z(t,a,e,n,l,i){switch(e){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||Ye(t,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&Ye(t,""+n);break;case"className":Hl(t,"class",n);break;case"tabIndex":Hl(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(t,e,n);break;case"style":xc(t,n,i);break;case"data":if(a!=="object"){Hl(t,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||e!=="href")){t.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(e);break}n=Nl(""+n),t.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(a!=="input"&&Z(t,a,"name",l.name,l,null),Z(t,a,"formEncType",l.formEncType,l,null),Z(t,a,"formMethod",l.formMethod,l,null),Z(t,a,"formTarget",l.formTarget,l,null)):(Z(t,a,"encType",l.encType,l,null),Z(t,a,"method",l.method,l,null),Z(t,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(e);break}n=Nl(""+n),t.setAttribute(e,n);break;case"onClick":n!=null&&(t.onclick=Ei);break;case"onScroll":n!=null&&C("scroll",t);break;case"onScrollEnd":n!=null&&C("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(e=n.__html,e!=null){if(l.children!=null)throw Error(h(60));t.innerHTML=e}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}e=Nl(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,""+n):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":n===!0?t.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(e,n):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(e,n):t.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(e):t.setAttribute(e,n);break;case"popover":C("beforetoggle",t),C("toggle",t),Bl(t,"popover",n);break;case"xlinkActuate":ba(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ba(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ba(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ba(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ba(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ba(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ba(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ba(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ba(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Bl(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=zd.get(e)||e,Bl(t,e,n))}}function Us(t,a,e,n,l,i){switch(e){case"style":xc(t,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(e=n.__html,e!=null){if(l.children!=null)throw Error(h(60));t.innerHTML=e}}break;case"children":typeof n=="string"?Ye(t,n):(typeof n=="number"||typeof n=="bigint")&&Ye(t,""+n);break;case"onScroll":n!=null&&C("scroll",t);break;case"onScrollEnd":n!=null&&C("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Ei);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hc.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),a=e.slice(2,l?e.length-7:void 0),i=t[zt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(a,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(a,n,l);break t}e in t?t[e]=n:n===!0?t.setAttribute(e,""):Bl(t,e,n)}}}function Tt(t,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C("error",t),C("load",t);var n=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,a));default:Z(t,a,i,u,e,null)}}l&&Z(t,a,"srcSet",e.srcSet,e,null),n&&Z(t,a,"src",e.src,e,null);return;case"input":C("invalid",t);var s=i=u=l=null,c=null,r=null;for(n in e)if(e.hasOwnProperty(n)){var p=e[n];if(p!=null)switch(n){case"name":l=p;break;case"type":u=p;break;case"checked":c=p;break;case"defaultChecked":r=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,a));break;default:Z(t,a,n,p,e,null)}}vc(t,i,s,c,r,u,l,!1),Ul(t);return;case"select":C("invalid",t),n=u=i=null;for(l in e)if(e.hasOwnProperty(l)&&(s=e[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":n=s;default:Z(t,a,l,s,e,null)}a=i,e=u,t.multiple=!!n,a!=null?Le(t,!!n,a,!1):e!=null&&Le(t,!!n,e,!0);return;case"textarea":C("invalid",t),i=l=n=null;for(u in e)if(e.hasOwnProperty(u)&&(s=e[u],s!=null))switch(u){case"value":n=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(h(91));break;default:Z(t,a,u,s,e,null)}Sc(t,n,l,i),Ul(t);return;case"option":for(c in e)if(e.hasOwnProperty(c)&&(n=e[c],n!=null))switch(c){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Z(t,a,c,n,e,null)}return;case"dialog":C("cancel",t),C("close",t);break;case"iframe":case"object":C("load",t);break;case"video":case"audio":for(n=0;n<rl.length;n++)C(rl[n],t);break;case"image":C("error",t),C("load",t);break;case"details":C("toggle",t);break;case"embed":case"source":case"link":C("error",t),C("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in e)if(e.hasOwnProperty(r)&&(n=e[r],n!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,a));default:Z(t,a,r,n,e,null)}return;default:if($i(a)){for(p in e)e.hasOwnProperty(p)&&(n=e[p],n!==void 0&&Us(t,a,p,n,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(n=e[s],n!=null&&Z(t,a,s,n,e,null))}function th(t,a,e,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,s=null,c=null,r=null,p=null;for(g in e){var v=e[g];if(e.hasOwnProperty(g)&&v!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":c=v;default:n.hasOwnProperty(g)||Z(t,a,g,null,n,v)}}for(var m in n){var g=n[m];if(v=e[m],n.hasOwnProperty(m)&&(g!=null||v!=null))switch(m){case"type":i=g;break;case"name":l=g;break;case"checked":r=g;break;case"defaultChecked":p=g;break;case"value":u=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,a));break;default:g!==v&&Z(t,a,m,g,n,v)}}Wi(t,u,s,c,r,p,i,l);return;case"select":g=u=s=m=null;for(i in e)if(c=e[i],e.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":g=c;default:n.hasOwnProperty(i)||Z(t,a,i,null,n,c)}for(l in n)if(i=n[l],c=e[l],n.hasOwnProperty(l)&&(i!=null||c!=null))switch(l){case"value":m=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==c&&Z(t,a,l,i,n,c)}a=s,e=u,n=g,m!=null?Le(t,!!e,m,!1):!!n!=!!e&&(a!=null?Le(t,!!e,a,!0):Le(t,!!e,e?[]:"",!1));return;case"textarea":g=m=null;for(s in e)if(l=e[s],e.hasOwnProperty(s)&&l!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Z(t,a,s,null,n,l)}for(u in n)if(l=n[u],i=e[u],n.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":m=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:l!==i&&Z(t,a,u,l,n,i)}kc(t,m,g);return;case"option":for(var x in e)if(m=e[x],e.hasOwnProperty(x)&&m!=null&&!n.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:Z(t,a,x,null,n,m)}for(c in n)if(m=n[c],g=e[c],n.hasOwnProperty(c)&&m!==g&&(m!=null||g!=null))switch(c){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:Z(t,a,c,m,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in e)m=e[M],e.hasOwnProperty(M)&&m!=null&&!n.hasOwnProperty(M)&&Z(t,a,M,null,n,m);for(r in n)if(m=n[r],g=e[r],n.hasOwnProperty(r)&&m!==g&&(m!=null||g!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,a));break;default:Z(t,a,r,m,n,g)}return;default:if($i(a)){for(var it in e)m=e[it],e.hasOwnProperty(it)&&m!==void 0&&!n.hasOwnProperty(it)&&Us(t,a,it,void 0,n,m);for(p in n)m=n[p],g=e[p],!n.hasOwnProperty(p)||m===g||m===void 0&&g===void 0||Us(t,a,p,m,n,g);return}}for(var f in e)m=e[f],e.hasOwnProperty(f)&&m!=null&&!n.hasOwnProperty(f)&&Z(t,a,f,null,n,m);for(v in n)m=n[v],g=e[v],!n.hasOwnProperty(v)||m===g||m==null&&g==null||Z(t,a,v,m,n,g)}var Rs=null,Ns=null;function _i(t){return t.nodeType===9?t:t.ownerDocument}function pf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bf(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Cs(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var qs=null;function ah(){var t=window.event;return t&&t.type==="popstate"?t===qs?!1:(qs=t,!0):(qs=null,!1)}var yf=typeof setTimeout=="function"?setTimeout:void 0,eh=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,nh=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(t){return vf.resolve(null).then(t).catch(lh)}:yf;function lh(t){setTimeout(function(){throw t})}function Gs(t,a){var e=a,n=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(n===0){t.removeChild(l),vl(a);return}n--}else e!=="$"&&e!=="$?"&&e!=="$!"||n++;e=l}while(e);vl(a)}function Ls(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Ls(e),Ji(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function ih(t,a,e,n){for(;t.nodeType===1;){var l=e;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[_n])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=na(t.nextSibling),t===null)break}return null}function uh(t,a,e){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=na(t.nextSibling),t===null))return null;return t}function na(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}function kf(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(a===0)return t;a--}else e==="/$"&&a++}t=t.previousSibling}return null}function Sf(t,a,e){switch(a=_i(e),t){case"html":if(t=a.documentElement,!t)throw Error(h(452));return t;case"head":if(t=a.head,!t)throw Error(h(453));return t;case"body":if(t=a.body,!t)throw Error(h(454));return t;default:throw Error(h(451))}}var Ft=new Map,Tf=new Set;function zi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Oa=G.d;G.d={f:sh,r:ch,D:oh,C:rh,L:fh,m:dh,X:hh,S:mh,M:gh};function sh(){var t=Oa.f(),a=ki();return t||a}function ch(t){var a=Ce(t);a!==null&&a.tag===5&&a.type==="form"?Jo(a):Oa.r(t)}var pn=typeof document>"u"?null:document;function xf(t,a,e){var n=pn;if(n&&typeof a=="string"&&a){var l=Gt(a);l='link[rel="'+t+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),Tf.has(l)||(Tf.add(l),t={rel:t,crossOrigin:e,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),Tt(a,"link",t),pt(a),n.head.appendChild(a)))}}function oh(t){Oa.D(t),xf("dns-prefetch",t,null)}function rh(t,a){Oa.C(t,a),xf("preconnect",t,a)}function fh(t,a,e){Oa.L(t,a,e);var n=pn;if(n&&t&&a){var l='link[rel="preload"][as="'+Gt(a)+'"]';a==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+Gt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+Gt(e.imageSizes)+'"]')):l+='[href="'+Gt(t)+'"]';var i=l;switch(a){case"style":i=bn(t);break;case"script":i=yn(t)}Ft.has(i)||(t=V({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:t,as:a},e),Ft.set(i,t),n.querySelector(l)!==null||a==="style"&&n.querySelector(dl(i))||a==="script"&&n.querySelector(ml(i))||(a=n.createElement("link"),Tt(a,"link",t),pt(a),n.head.appendChild(a)))}}function dh(t,a){Oa.m(t,a);var e=pn;if(e&&t){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+Gt(n)+'"][href="'+Gt(t)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=yn(t)}if(!Ft.has(i)&&(t=V({rel:"modulepreload",href:t},a),Ft.set(i,t),e.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ml(i)))return}n=e.createElement("link"),Tt(n,"link",t),pt(n),e.head.appendChild(n)}}}function mh(t,a,e){Oa.S(t,a,e);var n=pn;if(n&&t){var l=qe(n).hoistableStyles,i=bn(t);a=a||"default";var u=l.get(i);if(!u){var s={loading:0,preload:null};if(u=n.querySelector(dl(i)))s.loading=5;else{t=V({rel:"stylesheet",href:t,"data-precedence":a},e),(e=Ft.get(i))&&Ys(t,e);var c=u=n.createElement("link");pt(c),Tt(c,"link",t),c._p=new Promise(function(r,p){c.onload=r,c.onerror=p}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Di(u,a,n)}u={type:"stylesheet",instance:u,count:1,state:s},l.set(i,u)}}}function hh(t,a){Oa.X(t,a);var e=pn;if(e&&t){var n=qe(e).hoistableScripts,l=yn(t),i=n.get(l);i||(i=e.querySelector(ml(l)),i||(t=V({src:t,async:!0},a),(a=Ft.get(l))&&Vs(t,a),i=e.createElement("script"),pt(i),Tt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function gh(t,a){Oa.M(t,a);var e=pn;if(e&&t){var n=qe(e).hoistableScripts,l=yn(t),i=n.get(l);i||(i=e.querySelector(ml(l)),i||(t=V({src:t,async:!0,type:"module"},a),(a=Ft.get(l))&&Vs(t,a),i=e.createElement("script"),pt(i),Tt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function wf(t,a,e,n){var l=(l=Ba.current)?zi(l):null;if(!l)throw Error(h(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=bn(e.href),e=qe(l).hoistableStyles,n=e.get(a),n||(n={type:"style",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=bn(e.href);var i=qe(l).hoistableStyles,u=i.get(t);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=l.querySelector(dl(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Ft.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Ft.set(t,e),i||ph(l,t,e,u.state))),a&&n===null)throw Error(h(528,""));return u}if(a&&n!==null)throw Error(h(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=yn(e),e=qe(l).hoistableScripts,n=e.get(a),n||(n={type:"script",instance:null,count:0,state:null},e.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,t))}}function bn(t){return'href="'+Gt(t)+'"'}function dl(t){return'link[rel="stylesheet"]['+t+"]"}function Af(t){return V({},t,{"data-precedence":t.precedence,precedence:null})}function ph(t,a,e,n){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=t.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),Tt(a,"link",e),pt(a),t.head.appendChild(a))}function yn(t){return'[src="'+Gt(t)+'"]'}function ml(t){return"script[async]"+t}function Ef(t,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var n=t.querySelector('style[data-href~="'+Gt(e.href)+'"]');if(n)return a.instance=n,pt(n),n;var l=V({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),pt(n),Tt(n,"style",l),Di(n,e.precedence,t),a.instance=n;case"stylesheet":l=bn(e.href);var i=t.querySelector(dl(l));if(i)return a.state.loading|=4,a.instance=i,pt(i),i;n=Af(e),(l=Ft.get(l))&&Ys(n,l),i=(t.ownerDocument||t).createElement("link"),pt(i);var u=i;return u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Tt(i,"link",n),a.state.loading|=4,Di(i,e.precedence,t),a.instance=i;case"script":return i=yn(e.src),(l=t.querySelector(ml(i)))?(a.instance=l,pt(l),l):(n=e,(l=Ft.get(i))&&(n=V({},e),Vs(n,l)),t=t.ownerDocument||t,l=t.createElement("script"),pt(l),Tt(l,"link",n),t.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(h(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(n=a.instance,a.state.loading|=4,Di(n,e.precedence,t));return a.instance}function Di(t,a,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,u=0;u<n.length;u++){var s=n[u];if(s.dataset.precedence===a)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(t,a.firstChild))}function Ys(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Vs(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ji=null;function _f(t,a,e){if(ji===null){var n=new Map,l=ji=new Map;l.set(e,n)}else l=ji,n=l.get(e),n||(n=new Map,l.set(e,n));if(n.has(t))return n;for(n.set(t,null),e=e.getElementsByTagName(t),l=0;l<e.length;l++){var i=e[l];if(!(i[_n]||i[wt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(a)||"";u=t+u;var s=n.get(u);s?s.push(i):n.set(u,[i])}}return n}function zf(t,a,e){t=t.ownerDocument||t,t.head.insertBefore(e,a==="title"?t.querySelector("head > title"):null)}function bh(t,a,e){if(e===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Df(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var hl=null;function yh(){}function vh(t,a,e){if(hl===null)throw Error(h(475));var n=hl;if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var l=bn(e.href),i=t.querySelector(dl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Mi.bind(n),t.then(n,n)),a.state.loading|=4,a.instance=i,pt(i);return}i=t.ownerDocument||t,e=Af(e),(l=Ft.get(l))&&Ys(e,l),i=i.createElement("link"),pt(i);var u=i;u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Tt(i,"link",e),a.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(n.count++,a=Mi.bind(n),t.addEventListener("load",a),t.addEventListener("error",a))}}function kh(){if(hl===null)throw Error(h(475));var t=hl;return t.stylesheets&&t.count===0&&Xs(t,t.stylesheets),0<t.count?function(a){var e=setTimeout(function(){if(t.stylesheets&&Xs(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(e)}}:null}function Mi(){if(this.count--,this.count===0){if(this.stylesheets)Xs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oi=null;function Xs(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oi=new Map,a.forEach(Sh,t),Oi=null,Mi.call(t))}function Sh(t,a){if(!(a.state.loading&4)){var e=Oi.get(t);if(e)var n=e.get(null);else{e=new Map,Oi.set(t,e);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),n=u)}n&&e.set(null,n)}l=a.instance,u=l.getAttribute("data-precedence"),i=e.get(u)||n,i===n&&e.set(null,l),e.set(u,l),this.count++,n=Mi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),a.state.loading|=4}}var gl={$$typeof:xt,Provider:null,Consumer:null,_currentValue:Ct,_currentValue2:Ct,_threadCount:0};function Th(t,a,e,n,l,i,u,s){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.hiddenUpdates=Zi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function jf(t,a,e,n,l,i,u,s,c,r,p,v){return t=new Th(t,a,e,u,s,c,r,v),a=1,i===!0&&(a|=24),i=Jt(3,null,null,a),t.current=i,i.stateNode=t,a=Tu(),a.refCount++,t.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:e,cache:a},es(i),t}function Mf(t){return t?(t=We,t):We}function Of(t,a,e,n,l,i){l=Mf(l),n.context===null?n.context=l:n.pendingContext=l,n=Xa(a),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=Qa(t,n,a),e!==null&&(_t(e,t,a),In(e,t,a))}function Bf(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<a?e:a}}function Qs(t,a){Bf(t,a),(t=t.alternate)&&Bf(t,a)}function Hf(t){if(t.tag===13){var a=Na(t,67108864);a!==null&&_t(a,t,67108864),Qs(t,67108864)}}var Bi=!0;function xh(t,a,e,n){var l=D.T;D.T=null;var i=G.p;try{G.p=2,Zs(t,a,e,n)}finally{G.p=i,D.T=l}}function wh(t,a,e,n){var l=D.T;D.T=null;var i=G.p;try{G.p=8,Zs(t,a,e,n)}finally{G.p=i,D.T=l}}function Zs(t,a,e,n){if(Bi){var l=Ks(n);if(l===null)Hs(t,a,n,Hi,e),Rf(t,n);else if(Eh(l,t,a,e,n))n.stopPropagation();else if(Rf(t,n),a&4&&-1<Ah.indexOf(t)){for(;l!==null;){var i=Ce(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=oe(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var c=1<<31-Ot(u);s.entanglements[1]|=c,u&=~c}fa(i),!(at&6)&&(bi=ua()+500,ol(0))}}break;case 13:s=Na(i,2),s!==null&&_t(s,i,2),ki(),Qs(i,2)}if(i=Ks(n),i===null&&Hs(t,a,n,Hi,e),i===l)break;l=i}l!==null&&n.stopPropagation()}else Hs(t,a,n,null,e)}}function Ks(t){return t=Pi(t),Js(t)}var Hi=null;function Js(t){if(Hi=null,t=re(t),t!==null){var a=j(t);if(a===null)t=null;else{var e=a.tag;if(e===13){if(t=F(a),t!==null)return t;t=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Hi=t,null}function Uf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rd()){case nc:return 2;case lc:return 8;case Dl:case fd:return 32;case ic:return 268435456;default:return 32}default:return 32}}var Ws=!1,Ia=null,Pa=null,te=null,pl=new Map,bl=new Map,ae=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rf(t,a){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":te=null;break;case"pointerover":case"pointerout":pl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(a.pointerId)}}function yl(t,a,e,n,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:a,domEventName:e,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},a!==null&&(a=Ce(a),a!==null&&Hf(a)),t):(t.eventSystemFlags|=n,a=t.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),t)}function Eh(t,a,e,n,l){switch(a){case"focusin":return Ia=yl(Ia,t,a,e,n,l),!0;case"dragenter":return Pa=yl(Pa,t,a,e,n,l),!0;case"mouseover":return te=yl(te,t,a,e,n,l),!0;case"pointerover":var i=l.pointerId;return pl.set(i,yl(pl.get(i)||null,t,a,e,n,l)),!0;case"gotpointercapture":return i=l.pointerId,bl.set(i,yl(bl.get(i)||null,t,a,e,n,l)),!0}return!1}function Nf(t){var a=re(t.target);if(a!==null){var e=j(a);if(e!==null){if(a=e.tag,a===13){if(a=F(e),a!==null){t.blockedOn=a,kd(t.priority,function(){if(e.tag===13){var n=Nt(),l=Na(e,n);l!==null&&_t(l,e,n),Qs(e,n)}});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ui(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var e=Ks(t.nativeEvent);if(e===null){e=t.nativeEvent;var n=new e.constructor(e.type,e);Ii=n,e.target.dispatchEvent(n),Ii=null}else return a=Ce(e),a!==null&&Hf(a),t.blockedOn=e,!1;a.shift()}return!0}function Cf(t,a,e){Ui(t)&&e.delete(a)}function _h(){Ws=!1,Ia!==null&&Ui(Ia)&&(Ia=null),Pa!==null&&Ui(Pa)&&(Pa=null),te!==null&&Ui(te)&&(te=null),pl.forEach(Cf),bl.forEach(Cf)}function Ri(t,a){t.blockedOn===a&&(t.blockedOn=null,Ws||(Ws=!0,k.unstable_scheduleCallback(k.unstable_NormalPriority,_h)))}var Ni=null;function qf(t){Ni!==t&&(Ni=t,k.unstable_scheduleCallback(k.unstable_NormalPriority,function(){Ni===t&&(Ni=null);for(var a=0;a<t.length;a+=3){var e=t[a],n=t[a+1],l=t[a+2];if(typeof n!="function"){if(Js(n||e)===null)continue;break}var i=Ce(e);i!==null&&(t.splice(a,3),a-=3,Cu(i,{pending:!0,data:l,method:e.method,action:n},n,l))}}))}function vl(t){function a(c){return Ri(c,t)}Ia!==null&&Ri(Ia,t),Pa!==null&&Ri(Pa,t),te!==null&&Ri(te,t),pl.forEach(a),bl.forEach(a);for(var e=0;e<ae.length;e++){var n=ae[e];n.blockedOn===t&&(n.blockedOn=null)}for(;0<ae.length&&(e=ae[0],e.blockedOn===null);)Nf(e),e.blockedOn===null&&ae.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var l=e[n],i=e[n+1],u=l[zt]||null;if(typeof i=="function")u||qf(e);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[zt]||null)s=u.formAction;else if(Js(l)!==null)continue}else s=u.action;typeof s=="function"?e[n+1]=s:(e.splice(n,3),n-=3),qf(e)}}}function Fs(t){this._internalRoot=t}Ci.prototype.render=Fs.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(h(409));var e=a.current,n=Nt();Of(e,n,t,a,null,null)},Ci.prototype.unmount=Fs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;t.tag===0&&mn(),Of(t.current,2,null,t,null,null),ki(),a[Ne]=null}};function Ci(t){this._internalRoot=t}Ci.prototype.unstable_scheduleHydration=function(t){if(t){var a=fc();t={blockedOn:null,target:t,priority:a};for(var e=0;e<ae.length&&a!==0&&a<ae[e].priority;e++);ae.splice(e,0,t),e===0&&Nf(t)}};var Gf=_.version;if(Gf!=="19.0.0")throw Error(h(527,Gf,"19.0.0"));G.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(h(188)):(t=Object.keys(t).join(","),Error(h(268,t)));return t=He(a),t=t!==null?ce(t):null,t=t===null?null:t.stateNode,t};var zh={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:D,findFiberByHostInstance:re,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{wn=qi.inject(zh),Mt=qi}catch{}}return kl.createRoot=function(t,a){if(!A(t))throw Error(h(299));var e=!1,n="",l=er,i=nr,u=lr,s=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(s=a.unstable_transitionCallbacks)),a=jf(t,1,!1,null,null,e,n,l,i,u,s,null),t[Ne]=a.current,Bs(t.nodeType===8?t.parentNode:t),new Fs(a)},kl.hydrateRoot=function(t,a,e){if(!A(t))throw Error(h(299));var n=!1,l="",i=er,u=nr,s=lr,c=null,r=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks),e.formState!==void 0&&(r=e.formState)),a=jf(t,1,!0,a,e??null,n,l,i,u,s,c,r),a.context=Mf(null),e=a.current,n=Nt(),l=Xa(n),l.callback=null,Qa(e,l,n),a.current.lanes=n,En(a,n),fa(a),t[Ne]=a.current,Bs(t),new Ci(a)},kl.version="19.0.0",kl}var Xf;function Fh(){if(Xf)return $s.exports;Xf=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(_){console.error(_)}}return k(),$s.exports=Wh(),$s.exports}var $h=Fh();const Ih=qh`
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
`,Ph=I.nav`
  background-color: rgb(var(--desk-white));
  padding: 16px 20px;
  border-bottom: 1px solid rgb(var(--desk-gray-300));
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1000;

  @media (width <= 768px) {
    padding: 16px;
  }
`,tg=I.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`,ag=I.img`
  width: 120px;
  height: auto;
  display: block;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,eg=I.menu`
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
    padding-left: 12px;
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
`;function ng(){const k=Bh(),_=Hh(),z=R=>{const O=document.getElementById(R);O==null||O.scrollIntoView({behavior:"smooth"})},h=R=>{_.pathname===R?window.scrollTo({top:0,behavior:"smooth"}):k(R)},A=(R,O)=>{if(R.preventDefault(),O.startsWith("#")){const et=O.slice(1);_.pathname!=="/"?k("/",{state:{scrollTo:et}}):z(et)}else h(O)};return kn.useEffect(()=>{var O;const R=(O=_.state)==null?void 0:O.scrollTo;R&&z(R)},[_.state]),{handleClick:A}}const lg="/deskreview-react/svg/logo_full_navbar.svg";function ec(){const{handleClick:k}=ng(),_=[{href:"#work",label:"Work"},{href:"/",label:"Home"},{href:"/blog",label:"Study"},{href:"#contact",label:"Contact"}];return b.jsx(Ph,{children:b.jsxs(tg,{children:[b.jsx("a",{href:"/",onClick:z=>k(z,"/"),children:b.jsx(ag,{src:lg,alt:"Navbar_Logo",width:"120",height:"30"})}),b.jsx(eg,{children:_.map(z=>b.jsx("a",{href:z.href,onClick:h=>k(h,z.href),children:z.label},z.href))})]})})}const ig=I.footer`
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
`;function Zf(){const _=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hourCycle:"h23"});return b.jsx(ig,{children:b.jsxs("p",{children:["© 2025, Deskreview - ",_]})})}const Kf=I.main`
  padding: 16px 16px 32px;
`;I.div`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;
`;const xl=I.section`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;

  @media (width <= 768px) {
    margin: 0px auto 30px;
  }
`,wl=I.h1`
  font-family: "EB Garamond", serif;
  font-weight: 500;
  font-style: oblique;
  font-size: 70px;
  letter-spacing: -0.06em;
  margin-bottom: 16px;

  @media (width <= 768px) {
    font-size: 50px;
    margin-bottom: 8px;
  }
`,vn=I.hr`
  border: 1px solid rgba(var(--desk-gray-500), 0.6);
`,Jf=I.h2`
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-base);
  font-weight: 300;
  padding: 4px 0;

  @media (width <= 768px) {
    font-size: var(--text-xs);
  }
`,Wf=I.p`
  font-size: var(--text-2xl);
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  letter-spacing: -0.025em;
  padding: 8px 0;

  @media (width <= 768px) {
    padding: 4px 0;
    font-size: var(--text-base);
  }
`,ug=I.button`
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
`;function sg({companyName:k,isOpen:_,onClick:z}){return b.jsxs(ug,{onClick:z,$isOpen:_,children:[b.jsx(Wf,{children:k}),b.jsx(Gh,{})]})}const cg=I.div`
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
`,Sl=I.div`
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
`;function og(k){kn.useEffect(()=>{k.forEach(_=>{const z=new Image;z.src=_})},[k])}function rg({servicesItems:k=[],year:_,industry:z,detail:h,images:A=[],isOpen:R}){const[O,et]=kn.useState(0);og(A);const X=()=>{A.length>0&&et(ot=>(ot+1)%A.length)};return b.jsxs(cg,{$isOpen:R,children:[b.jsxs(Sl,{children:[b.jsx("p",{className:"title",children:"Services"}),b.jsx("ul",{children:k.map((ot,da)=>b.jsx("li",{className:"text",children:ot},da))})]}),b.jsxs(Sl,{children:[b.jsx("p",{className:"title",children:"Year"}),b.jsx("p",{className:"text",children:_})]}),b.jsxs(Sl,{children:[b.jsx("p",{className:"title",children:"Industry"}),b.jsx("p",{className:"text",children:z})]}),b.jsxs(Sl,{children:[b.jsx("p",{className:"title",children:"Description"}),b.jsx("p",{className:"text",children:h})]}),A.length>0&&b.jsxs(Sl,{children:[b.jsxs("p",{className:"title",children:[A.length===1?"Picture":"Pictures"," ",b.jsx("br",{}),O+1," ⁄ ",A.length]}),b.jsx("img",{src:A[O],onClick:X,width:"340",height:"425",loading:"eager"})]})]})}const fg=[{companyName:"Astra Honda",servicesItems:["Content Research & Analytic","Digital Trend Analytic"],year:"2023",industry:"Vehicle Manufacture",detail:"As their effort to gain trust with local wisdom and the spirit of #OneHeart, Honda aims to reach more trust and connection withing Indonesia market.",images:["img/home/work/astra_1.webp","img/home/work/astra_2.webp","img/home/work/astra_3.webp"]},{companyName:"Telkomsel",servicesItems:["Campaign Strategy & Development","Social Media Strategy","Online Activation Development"],year:"2023",industry:"Telecommunication",detail:"After their merger with IndiHome, Telkomsel aimed to create a nationwide corporate messaging campaign under #BersatuLebihMaju, resulting in +1 million impression, 20% increase of Engagement Rate, and more than 3000 followers.",images:["img/home/work/telkomsel_1.webp","img/home/work/telkomsel_2.webp","img/home/work/telkomsel_3.webp"]},{companyName:"Salam Ganesha Academy",servicesItems:["Campaign Strategy & Development","Social Media Development","Kol Management"],year:"2024",industry:"Education Tech",detail:"As an education startup, Salam Ganesha Academy transitioned to targeting a more mature senior executive market. Several digital strategies were executed to ensure a smooth transition.",images:["img/home/work/ganesha_1.webp","img/home/work/ganesha_2.webp","img/home/work/ganesha_3.webp"]},{companyName:"Rococo Group Indonesia",servicesItems:["Campaign Strategy & Development","Social Media Development","Kol Management"],year:"2023",industry:"Luxury Fashion Retail",detail:"Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong.",images:["img/home/work/rococo_1.webp","img/home/work/rococo_2.webp","img/home/work/rococo_3.webp"]},{companyName:"Hayati Karya Lestari",servicesItems:["Branding Strategy","Social Media & Website","Brand Architecture"],year:"2023",industry:"NGO",detail:"Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia."}];function dg(){const[k,_]=kn.useState(null),z=h=>{_(A=>A===h?null:h)};return b.jsxs(xl,{children:[b.jsx(wl,{style:{textIndent:"-0.15em"},children:"Works"}),b.jsx(Jf,{children:"Company"}),b.jsx(vn,{}),fg.map((h,A)=>b.jsxs("div",{children:[b.jsx(sg,{isOpen:k===A,onClick:()=>z(A),companyName:h.companyName}),b.jsx(rg,{servicesItems:h.servicesItems,year:h.year,industry:h.industry,detail:h.detail,images:h.images,isOpen:k===A}),b.jsx(vn,{})]},A))]})}const Gi=I.p`
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
`,mg=I.blockquote`
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
`;function hg(){return b.jsxs(xl,{children:[b.jsx(wl,{children:"Manifesto"}),b.jsxs(Gi,{children:[b.jsx("span",{children:"To Seek for The Sun"}),"–A commitment to constantly exploring innovative and emerging sciences in marketing and branding. We focus on crafting strategies that seamlessly position brands within the hearts and minds of society, ensuring they resonate deeply with their audience. Each project we undertake is a journey—an exploration for the"," ",b.jsx("span",{children:"“ideal truth”"})," : we are inspired by the understanding that the branding and marketing science is ever-evolving and dynamic."]}),b.jsxs(Gi,{children:["Our mission transcends traditional branding; we aim to harmonize the rationality of the left brain with the creativity of the right brain, empowering businesses to navigate the complexities of modern markets. In today’s fast-paced, information-rich, and time-poor world, a brand’s value is determined by how effortlessly it enables customers to say"," ",b.jsx("span",{children:"“yes.”"})]}),b.jsx(Gi,{children:"Branding, as we see it, is the art of connecting sound strategy with brilliant creativity. A strong brand pairs these elements to create symbols and messages that resonate with customers, far beyond product features, benefits, or price."}),b.jsxs(Gi,{children:["Our ultimate goal is to help brands become charismatic entities that inspire belief in their uniqueness. A charismatic brand is irreplaceable in the eyes of its audience, and we firmly believe that with the right approach, any brand—",b.jsx("span",{children:"yours included"}),"—can achieve this distinction."]}),b.jsxs(mg,{children:[b.jsxs("p",{children:["A brand is not what you say it is; ",b.jsx("br",{}),"It's what they say it is"]}),b.jsx("p",{id:"work",children:"- Marty Neumeier"})]})]})}const gg=I.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`,pg=[{type:"Digital Campaign",service:["Social Media Handling","Digital Campaign Set-up","Digital Ads Handling","Digital Trend Analysis & Research"]},{type:"Brand Strategy",service:["Visual Identity Development","Branding Communication Set-up","Branding Implementation Set-up"]}];function bg(){return b.jsxs(xl,{children:[b.jsx(wl,{children:"Services"}),b.jsx(gg,{children:pg.map(k=>b.jsxs("div",{children:[b.jsx(Jf,{children:k.type}),b.jsx(vn,{}),k.service.map(_=>b.jsxs("div",{children:[b.jsx(Wf,{children:_}),b.jsx(vn,{})]},`${k.type}-${_}`))]},k.type))})]})}const tc=I.a`
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
`,yg=I.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  padding-top: 8px;

  @media (width <= 768px) {
    gap: 12px 0;
  }
`;function vg(){return b.jsxs(xl,{children:[b.jsx(wl,{id:"contact",children:"Get in touch"}),b.jsxs(yg,{children:[b.jsxs(tc,{href:"mailto:zaidandzaki@gmail.com",target:"_blank",children:[b.jsx("p",{children:"Email us"}),b.jsx(Lh,{})]}),b.jsxs(tc,{href:"https://wa.me/+6285159177206",target:"_blank",children:[b.jsx("p",{children:"Chat with us"}),b.jsx(Yh,{})]}),b.jsxs(tc,{href:"https://www.instagram.com/deskreview/",target:"_blank",children:[b.jsx("p",{children:"Follow us"}),b.jsx(Vh,{})]})]})]})}function kg(){return b.jsxs(Kf,{children:[b.jsx(hg,{}),b.jsx(dg,{}),b.jsx(bg,{}),b.jsx(vg,{})]})}function Sg(){return b.jsxs(b.Fragment,{children:[b.jsx(ec,{}),b.jsx(kg,{}),b.jsx(Zf,{})]})}I.button`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;

  p {
    font-weight: 300;
    font-size: var(--text-sm);

    &:hover {
      font-weight: 400;
    }

    &:first-of-type {
      text-align: left;
    }

    &:last-of-type {
      text-align: right;
    }
  }
`;const Tg=I.div`
  display: flex;
  flex-direction: column;
`,xg={title:"Mengatur Custom Domain .tech di Github Pages",description:"Mengatur custom domain .tech di Github Pages secara gampang",category:"Blog",tags:["Tutorial","Custom Domain","Github"],status:"Finished",date:"2021-01-03",author:"Abdullah Ammar"},wg=`
Sebelumnya pastikan kamu sudah mempunyai domain .tech, domain .tech sendiri bisa didapatkan gratis
selama 1 tahun jika kamu sudah mendaftar Github Student Pack. Jika kamu sudah mendaftar Github
Student Pack, langsung saja kunjungi
[https://get.tech/github-student-developer-pack](https://get.tech/github-student-developer-pack)
untuk mendapatkan domain yang kamu inginkan. Setelah mendapatkan domain yang kamu inginkan,
selanjutnya langkah-langkah yang dilakukan yaitu:

1. Login ke dalam Dashboard
2. Jika sudah, pindah ke halaman List of Order dan pilih domain kamu
3. Dibagian DNS Management, pilih Manage DNS
4. Setelah halaman terbuka di jendela baru, klik tombol CNAME Record, dan tambahkan CNAME Record
   dengan name = www dan value = domaingithubkamu.github.io, kemudian Save
5. Setelah itu tambahkan beberapa A Records:
   - Host Name = @ dan Destination IP Address 185.199.108.153
   - Host Name = @ dan Destination IP Address 185.199.109.153
   - Host Name = @ dan Destination IP Address 185.199.110.153
   - Host Name = @ dan Destination IP Address 185.199.111.153
6. Jika sudah, buka repository github kamu dan buka halaman Setting, pergi ke bagian Github Pages
   dan masukkan custom domain yang sudah kamu dapatkan tadi dan beri tanda ceklis pada Enforce
   HTTPS, jika tanda ceklis belum aktif, tunggu beberapa jam hingga muncul fitur ceklis tersebut.
7. Selesai, selamat kamu sudah mempunyai domain kamu sendiri, yeay!
`,Ff=Object.freeze(Object.defineProperty({__proto__:null,content:wg,frontmatter:xg},Symbol.toStringTag,{value:"Module"})),Ag={title:"Integration Test in React",description:"Practical exploration of integration testing in React by learning to simulate user behavior, add mocks, and assert client-side form native validation.",tag:"Blog",keywords:["React","Integration Test","Vitest"],status:"Finished",publishedAt:"2024-01-14",updatedAt:"2024-01-15",image:"../../assets/blog/integration-test-in-react/integration-test-in-react.webp",imageAlt:"Form with white background and several fields to add collection",author:"Abdullah Ammar"},Eg=`
## Introduction

Testing is an integral part of software development, providing developers with confidence when making additions, changes, or refactors to the codebase. As I've embarked on my journey to learn frontend development, I often found myself pondering what to test first—utility functions, query calls, components, form schemas, or pages. Typically, I start by testing utility functions, such as date or number formatting, mappers, and other pure functions. These are easy, cost-effective, and quick to test. Then, I proceed with integration tests for more complex scenarios, like data creation involving multiple components: input forms, form schemas, confirmation dialogs, and toast notifications. While integration testing is more challenging, costly, and time-consuming compared to unit testing, it provides immense confidence when introducing changes to the application.

Over the past few months, I've been learning into integration testing for forms and several pages in my application using Jest and React Testing Library, but for learning purpose, I’ll try to use Vitest here since it's compatible with Jest. I've found this process enjoyable and worthwhile, so I'm documenting it for my own learning purposes.

## Project Overview

For this tutorial, I'll show how to test a form that uses several types of components with client-side validation. I've used Vitest as a test runner, and mainly use native component and Radix UI for building this form, which affects what we need to mock and how to test the component.

## Testing Criteria

When conducting integration tests, I've set some criteria to guide my approach:

- Minimize the use of mocks: Reducing the reliance on mocks ensures that tests closely resemble user behavior.
- Mimic user behavior as closely as possible: The goal is to replicate real-world interactions with the application.
- Avoid testing implementation details: Instead of testing how things are implemented, focus on testing the functionality and behavior.

## Setup

Before diving into integration testing, several configurations must be set up, depending on the components and libraries used in your forms or pages. This might involve:

- Mocking various DOM APIs, when using UI components that utilize Browser APIs that not yet implemented in JSDOM.
- Generating mock data to be used across test cases.
- Developing wrappers for our test renderer.

## Mock

**ResizeObserver**

\`\`\`sh
ReferenceError: ResizeObserver is not defined
 ❯ node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/packages/react/use-size/src/useSize.tsx:14:30
\`\`\`

Many component in Radix UI use \`useSize\` hook that implement \`ResizeObserver\` under the hood, thus it will give an error when we run test in JSDOM environment, it’s because JSDOM currently doesn’t implement \`ResizeObserver\`. Therefore, we must add mock to emulate \`ResizeObserver\` behavior.

\`\`\`tsx
// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Stub the global ResizeObserver
vi.stubGlobal("ResizeObserver", ResizeObserverMock);
\`\`\`

## Why Do We Need Mocks?

In software development, external components such as APIs or databases aren't always reliable. Mock data allows us to isolate the behavior of these dependencies, ensuring that our code is tested independently without being influenced by these external components. By using mock data, we can precisely control the scenarios and conditions that our code interacts with. This enables us to test specific functionalities, error cases, or edge scenarios without needing access to the actual external components.

For example, consider a scenario where we want to test a plant's growth under different watering conditions: three times a day, once a day, and no water at all. Plant growth depends on various factors, including temperature and soil quality. Without controlling these variables, we might get inaccurate results due to their dynamic nature. Factors like cloudy weather affecting temperature or soil contamination can introduce unwanted variability. To evaluate the plant's behavior solely based on water intake, we must simulate or "mock" temperature and soil conditions, ensuring they remain constant and standardized.

## Writing Tests

Here, we test a form to add a new gallery collection. This form use native validation and consists of several components, including text input, file, date, number, select, checkbox, and radio button.

This test case focuses on validating the behavior of the \`CollectionForm\`. It aims to ensure that the form successfully submits when provided with valid input. The test covers user interactions, form submission, and the expected outcomes, including proper rendering and validation of form elements. Here we use Arrange, Act, Assert to structure the test.

### Arrange

\`\`\`tsx
const collection = {
  title: "Kapal Karam Dilanda Badai",
  description:
    "Layaknya karya-karya bercorak Romantisisme, Raden Saleh mengungkapkan gejolak jiwanya yang terombang-ambing antara keinginan menghayati dunia imajinasi dan menyatakan dunia nyata. Perpaduan keduanya terwujud dalam ekspresi visual yang dramatis, emosional, sekaligus misterius. Meski demikian, para seniman romantisis sering juga berkarya berdasarkan pada kenyataan aktual. Dalam lukisan Kapal Dilanda Badai, dapat dilihat bagaimana Raden Saleh mengungkapkan perjuangan dramatis dua buah kapal dalam hempasan badai dahsyat di tengah lautan. Suasana mencekam diekspresikan lewat awan tebal yang gelap dan ombak-ombak tinggi yang menghancurkan salah satu kapal. Dari sudut atas, secercah sinar matahari tampak memantul ke gulungan ombak—menambah kesan dramatis.",
  artist: "Raden Saleh",
  creationDate: "1840-01-01",
  classification: { value: "painting", label: "Painting" },
  medium: { value: "oil-on-canvas", label: "Oil on Canvas" },
  photo: new File(["Kapal Karam Dilanda Badai"], "kapalKaramDilandaBadai.png", {
    type: "image/png",
  }),
  size: {
    width: 98,
    height: 74,
  },
  type: "physical",
  isPrivate: false,
  terms: true,
};

describe("CollectionForm", () => {
  it("should successfully submit on valid input", async () => {
    const onSubmitMockFn = vi.fn();
    const user = userEvent.setup();
    render(<CollectionForm onSubmit={onSubmitMockFn} />);
    const formElements = {
      titleInput: screen.getByLabelText(/title/i),
      descriptionInput: screen.getByLabelText(/description/i),
      artistInput: screen.getByLabelText(/artist/i),
      creationDateInput: screen.getByLabelText(/creation date/i),
      classificationInput: screen.getByLabelText(/classification/i),
      mediumInput: screen.getByLabelText(/medium/i),
      sizeWidthInput: screen.getByLabelText(/size \\(cm\\)/i),
      sizeHeightInput: screen.getByLabelText(/height/i),
      sizeLengthInput: screen.getByLabelText(/length/i),
      physicalTypeInput: screen.getByLabelText(/physical/i),
      digitalTypeInput: screen.getByLabelText(/digital/i),
      photoInput: screen.getByLabelText(/photo/i) as HTMLInputElement,
      isPrivateInput: screen.getByLabelText(/private collection/i),
      termsInput: screen.getByLabelText(/accept terms and conditions/i),
      addCollectionButton: screen.getByRole("button", {
        name: /add collection/i,
      }),
    };
  });
});
\`\`\`

Here what we do in Arrange phase:

1. Create mock to represent sample data that would typically be entered into the form.
2. Add **\`onSubmitMockFn\`** function as a mock function to simulate the form submission callback.
3. Render the **\`CollectionForm\`** component into JSDOM.
4. Get all component need to be tested by calling **\`screen.getByLabelText\`** and **\`screen.getByRole\`** to interact with input fields and buttons and make sure it's accessible.
5. Setup **\`userEvent\`** to simulate user interactions with the form.

### Act

\`\`\`tsx
await user.type(formElements.titleInput, collection.title);
await user.type(formElements.descriptionInput, collection.description);
await user.type(formElements.artistInput, collection.artist);
await user.type(formElements.creationDateInput, collection.creationDate);
await user.selectOptions(
  formElements.classificationInput,
  collection.classification.label
);
await user.selectOptions(formElements.mediumInput, collection.medium.label);
await user.type(formElements.sizeWidthInput, collection.size.width.toString());
await user.type(
  formElements.sizeHeightInput,
  collection.size.height.toString()
);
await user.click(formElements.physicalTypeInput);
await user.upload(formElements.photoInput, collection.photo);
await user.click(formElements.isPrivateInput);
await user.click(formElements.termsInput);
await user.click(formElements.addCollectionButton);
\`\`\`

There several input interactions simulation here:

- \`type\` to simulates user input
- \`selectOptions\` to simulate selecting option from \`select\` component
- \`click\` to simulate click on input radio, checkbox, and submit button
- \`upload\` to simulate adding a photo file

### Assert

\`\`\`tsx
expect(formElements.titleInput).toHaveValue(collection.title);
expect(formElements.descriptionInput).toHaveValue(collection.description);
expect(formElements.artistInput).toHaveValue(collection.artist);
expect(formElements.classificationInput).toHaveValue(
  collection.classification.value
);
expect(formElements.mediumInput).toHaveValue(collection.medium.value);
expect(formElements.sizeWidthInput).toHaveValue(collection.size.width);
expect(formElements.sizeHeightInput).toHaveValue(collection.size.height);
expect(formElements.digitalTypeInput).not.toBeChecked();
expect(formElements.physicalTypeInput).toBeChecked();
expect(formElements.photoInput.files?.[0]).toBe(collection.photo);
expect(formElements.photoInput.files).toHaveLength(1);
expect(formElements.isPrivateInput).toBeChecked();
expect(formElements.termsInput).toBeChecked();

expect(formElements.titleInput).toBeValid();
expect(formElements.descriptionInput).toBeValid();
expect(formElements.artistInput).toBeValid();
expect(formElements.creationDateInput).toBeValid();
expect(formElements.classificationInput).toBeValid();
expect(formElements.mediumInput).toBeValid();
expect(formElements.sizeWidthInput).toBeValid();
expect(formElements.sizeHeightInput).toBeValid();
expect(formElements.photoInput).toBeValid();
expect(formElements.isPrivateInput).toBeValid();
expect(formElements.termsInput).toBeValid();

expect(onSubmitMockFn).toBeCalledTimes(1);
\`\`\`

This assertion to ensure that the rendered form matches the expected state after user interactions. This includes checking the accuracy of form element values, validating the correctness of checkbox and radio button states, confirming the invocation of the form submission callback (onSubmitMockFn), and ensuring that all form elements are in a valid state. Any deviation from the expected outcomes during this phase indicates potential issues in the form's functionality or user interface

Here our complete test case:

\`\`\`tsx
import App from "./app";
import CollectionForm from "./form";
import { cleanup, render, screen, userEvent, within } from "./utils/test-utils";

const collection = {
  title: "Kapal Karam Dilanda Badai",
  description:
    "Layaknya karya-karya bercorak Romantisisme, Raden Saleh mengungkapkan gejolak jiwanya yang terombang-ambing antara keinginan menghayati dunia imajinasi dan menyatakan dunia nyata. Perpaduan keduanya terwujud dalam ekspresi visual yang dramatis, emosional, sekaligus misterius. Meski demikian, para seniman romantisis sering juga berkarya berdasarkan pada kenyataan aktual. Dalam lukisan Kapal Dilanda Badai, dapat dilihat bagaimana Raden Saleh mengungkapkan perjuangan dramatis dua buah kapal dalam hempasan badai dahsyat di tengah lautan. Suasana mencekam diekspresikan lewat awan tebal yang gelap dan ombak-ombak tinggi yang menghancurkan salah satu kapal. Dari sudut atas, secercah sinar matahari tampak memantul ke gulungan ombak—menambah kesan dramatis.",
  artist: "Raden Saleh",
  creationDate: "1840-01-01",
  classification: { value: "painting", label: "Painting" },
  medium: { value: "oil-on-canvas", label: "Oil on Canvas" },
  photo: new File(["Kapal Karam Dilanda Badai"], "kapalKaramDilandaBadai.png", {
    type: "image/png",
  }),
  size: {
    width: 98,
    height: 74,
  },
  type: "physical",
  isPrivate: false,
  terms: true,
};

describe("CollectionForm", () => {
  it("should successfully submit on valid input", async () => {
    const onSubmitMockFn = vi.fn();
    const user = userEvent.setup();
    render(<CollectionForm onSubmit={onSubmitMockFn} />);
    const formElements = {
      titleInput: screen.getByLabelText(/title/i),
      descriptionInput: screen.getByLabelText(/description/i),
      artistInput: screen.getByLabelText(/artist/i),
      creationDateInput: screen.getByLabelText(/creation date/i),
      classificationInput: screen.getByLabelText(/classification/i),
      mediumInput: screen.getByLabelText(/medium/i),
      sizeWidthInput: screen.getByLabelText(/size \\(cm\\)/i),
      sizeHeightInput: screen.getByLabelText(/height/i),
      sizeLengthInput: screen.getByLabelText(/length/i),
      physicalTypeInput: screen.getByLabelText(/physical/i),
      digitalTypeInput: screen.getByLabelText(/digital/i),
      photoInput: screen.getByLabelText(/photo/i) as HTMLInputElement,
      isPrivateInput: screen.getByLabelText(/private collection/i),
      termsInput: screen.getByLabelText(/accept terms and conditions/i),
      addCollectionButton: screen.getByRole("button", {
        name: /add collection/i,
      }),
    };

    await user.type(formElements.titleInput, collection.title);
    await user.type(formElements.descriptionInput, collection.description);
    await user.type(formElements.artistInput, collection.artist);
    await user.type(formElements.creationDateInput, collection.creationDate);
    await user.selectOptions(
      formElements.classificationInput,
      collection.classification.label
    );
    await user.selectOptions(formElements.mediumInput, collection.medium.label);
    await user.type(
      formElements.sizeWidthInput,
      collection.size.width.toString()
    );
    await user.type(
      formElements.sizeHeightInput,
      collection.size.height.toString()
    );
    await user.click(formElements.physicalTypeInput);
    await user.upload(formElements.photoInput, collection.photo);
    await user.click(formElements.isPrivateInput);
    await user.click(formElements.termsInput);
    await user.click(formElements.addCollectionButton);

    expect(formElements.titleInput).toHaveValue(collection.title);
    expect(formElements.descriptionInput).toHaveValue(collection.description);
    expect(formElements.artistInput).toHaveValue(collection.artist);
    expect(formElements.classificationInput).toHaveValue(
      collection.classification.value
    );
    expect(formElements.mediumInput).toHaveValue(collection.medium.value);
    expect(formElements.sizeWidthInput).toHaveValue(collection.size.width);
    expect(formElements.sizeHeightInput).toHaveValue(collection.size.height);
    expect(formElements.digitalTypeInput).not.toBeChecked();
    expect(formElements.physicalTypeInput).toBeChecked();
    expect(formElements.photoInput.files?.[0]).toBe(collection.photo);
    expect(formElements.photoInput.files).toHaveLength(1);
    expect(formElements.isPrivateInput).toBeChecked();
    expect(formElements.termsInput).toBeChecked();

    expect(formElements.titleInput).toBeValid();
    expect(formElements.descriptionInput).toBeValid();
    expect(formElements.artistInput).toBeValid();
    expect(formElements.creationDateInput).toBeValid();
    expect(formElements.classificationInput).toBeValid();
    expect(formElements.mediumInput).toBeValid();
    expect(formElements.sizeWidthInput).toBeValid();
    expect(formElements.sizeHeightInput).toBeValid();
    expect(formElements.photoInput).toBeValid();
    expect(formElements.isPrivateInput).toBeValid();
    expect(formElements.termsInput).toBeValid();

    expect(onSubmitMockFn).toBeCalledTimes(1);
  });
});
\`\`\`

The last step is to run the test by calling \`pnpm test\` and make sure it's all good.

![test passed](../../assets/blog/integration-test-in-react/test-result.webp)

## Conclusion

Remember that testing is an ongoing process and add more test to cover more cases. As your codebase evolves, make sure to update and expand your tests accordingly. Regularly review and refactor your tests to keep them effective and maintainable.

## References

- https://vitest.dev/
- https://testing-library.com/
- https://kentcdodds.com/blog/write-tests
`,$f=Object.freeze(Object.defineProperty({__proto__:null,content:Eg,frontmatter:Ag},Symbol.toStringTag,{value:"Module"})),_g={title:"Membangun Kebun Digital",subtitle:"Membangun sebuah tempat untuk belajar dan menumbuhkan ide-ide baru di ruang publik",description:"Membangun sebuah tempat untuk belajar dan menumbuhkan ide-ide baru di ruang publik",tag:"Blog",keywords:["Blogging","Blog","Thinking","Learning"],status:"Finished",publishedAt:"2021-09-06",updatedAt:"2021-09-09",image:"../../assets/blog/membangun-kebun-digital/membangun-kebun-digital.webp",imageAlt:"Ilustrasi konten sebagai sebuah kebun digital",author:"Abdullah Ammar"},zg=`
Sudah beberapa kali saya mengembangkan website portofolio saya sendiri dengan tujuan untuk
menunjukkan hasil implementasi hal-hal yang sedang ataupun sudah saya pelajari dari bangku
perkuliahan ataupun _course_ yang saya ambil. Website ini juga sudah beberapa kali saya rombak,
mulai dari menggunakan HTML dan CSS, kemudian PHP (mata kuliah pemrograman web), sampai saya ubah
lagi menggunakan HTML, CSS, dan JavaScript dengan Web Componentnya.

Tujuan pengembangan website saya yang baru ini sebenarnya sama, dengan beberapa tujuan tambahan,
salah satunya adalah agar saya bebas berbagi dan beropini tentang hal-hal yang saya buat dan
pelajari saat ini, terutama tentang teknologi. Beberapa hal yang menjadi pertimbangan saya ketika
mengembangkan website ini, yaitu:

1. _Performance_ - Lighthouse score ≥ 90
2. _Accessible_ - Sebuah website memang sudah seharusnya mudah digunakan oleh semua orang
3. _Maintainable_ - Kode yang ada sebisa mungkin dibuat sesederhana mungkin sehingga mudah
   ditambahkan, sunting, dan hapus.

## Proses

Dari ketiga hal diatas, saya menentukan beberapa teknologi yang akhirnya saya pakai untuk
mengembangkan website ini.

1. _Performance_

   Hal yang pertama saya pikirkan adalah _perfomance_, tujuannya tentu saja agar pengunjung tidak
   perlu nunggu lama hanya untuk membuka website ini. Pilihan saya jatuh sama Next.js, selain karena
   saya sudah berniat menggunakan Next.js karena _learning curve_ yang cukup landai (dokumentasi dan
   tutorialnya mantap) dan kemudahan buat make MDX sebagai _content management system_-nya, Next.js
   juga punya fitur-fitur bawaan yang mendukung optimisasi seperti Automatic Image Optimization dan
   Font Optimization

2. _Accessible_

   Dari komponen yang ada, beberapa komponen saya memilih untuk pakai Reach UI karena jika saya
   membuatnya sendiri, belum tentu saya bisa memastikan komponen tersebut memiliki aksesibilitas
   yang baik, contohnya komponen Modal dan Menu, selain itu karena setiap komponen yang ada di Reach
   UI udah diuji menggunakan berbagai macam peramban beserta _screen reader_-nya seperti Safari
   dengan VoiceOver, Firefox dengan NVDA, dan Edge dengan JAWS.

3. _Maintainable_

   Jujur sampai saat ini saya masih belum tau untuk membangun sebuah struktur folder dan mengatur
   aplikasi skala produksi yang _scalable_ dan _maintanable_, yang menjadi patokan saya saat ini
   untuk membangun struktur folder adalah artikel yang ditulis oleh Tania Rascia yaitu
   [React Architecture: How to Structure and Organize a React Application](https://www.taniarascia.com/react-architecture-directory-structure/).
   Untuk mengatur kodenya saya dibantu oleh ESLint bawaan Next.js sebagai _static code analysis_
   dengan sedikit _rules_ tambahan dan Prettier sebagai _code formatter._

### Antarmuka Pengguna

#### Rancangan

Berbekal sedikit pengalaman saya yang sering kali ditunjuk sebagai seorang "desainer grafis" dalam
sebuah organisasi dan sedikit pengalaman sebagai _layouter_ di majalah sekolah dan majalah dinding
dulu (haha), saya mencoba merancang beberapa halaman website ini menggunakan Figma. Berikut beberapa
hasil rancangan tersebut:

##### Halaman Home dengan tema _light_

![Halaman Home dengan tema _light_](../../assets/blog/membangun-kebun-digital/design-home.webp)

##### Halaman Detail Blog di desktop dengan tema _light_

![Halaman Detail Blog di desktop dengan tema light](../../assets/blog/membangun-kebun-digital/design-detail.webp)

##### Halaman Detail Blog di desktop dengan tema _dark_

![Halaman Detail Blog di desktop dengan tema dark](../../assets/blog/membangun-kebun-digital/design-detail-dark.webp)

#### Implementasi

Karena berbagai alasan, ada beberapa perubahan yang saya lakukan ketika mengimplementasikan
rancangan tampilan antarmuka pengguna ini, contohnya seperti pada halaman _home_ yang saya buat
menjadi lebih sederhana karena saya kesulitan untuk memilih dan mengkombinasikan warna, namun karena
terlalu sederhana dan terkesan membosankan saya mencoba menambahkan fitur interaktif yang
terinspirasi dari [taliacotton.com](https://taliacotton.com/) agar tidak terlalu membosankan

### Konten

Karena tujuan saya mengembangkan website ini adalah berbagi, maka konten yang ada adalah tentang
berbagi apa yang menjadi passion saya saat ini dan berbagi ke komunitas tentang apa yang sedang saya
alami, pelajari, dan kerjakan, walaupun saya sadar bahwa apa yang saya kerjakan mungkin tidak
terlalu berguna untuk orang lain setidaknya website ini, buat saya, bisa jadi wadah arsip untuk
proses yang telah saya lalui dan sedikit hasil yang pernah saya dapat.

## Tech Stack

Dalam mengembangkan website ini, saya memilih Next.js, SCSS Modules, MDX, dan Vercel sebagai
kekuatan utama untuk mempersenjatai ~~buruh tani~~ website ini. Adapun teknologi tambahan yang saya
pakai, yaitu:

#### Web Technologies

1. [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
2. [Font Loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API)
3. [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
4. [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

#### Syntax Highlighting

1. [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
2. [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)
3. [rehype-code-titles](https://github.com/josestg/rehype-code-title)
4. [rehype-slug](https://github.com/rehypejs/rehype-slug)

#### UI Component

1. [@reach/dialog](https://reach.tech/dialog)
2. [@reach/menu-button](https://reach.tech/menu-button)

#### Utility

1. [classnames](https://www.npmjs.com/package/classnames)
2. [reading-time](https://www.npmjs.com/package/reading-time)
3. [sharp](https://www.npmjs.com/package/sharp)
4. [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)

## Bantuan

Beberapa artikel/issues/code snippet/website yang sangat membantu saya dalam mengembangkan website
ini:

#### Markdown

1. [MDX Bundler with Next.JS](https://www.arcath.net/2021/03/mdx-bundler) by Adam Laycock
2. [MDX in Next.js using mdx-bundler](https://dipeshwagle.com/blog/use-mdx-bundler-next-js) by
   Dipesh Wagle

#### Dark Mode

1. [Dark Mode on the Web](https://fatihkalifa.com/dark-mode-web) by Fatih Kalifa
2. [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
   by Adhuham
3. [Emulate dark or light schemes in the rendered page](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/accessibility/preferred-color-scheme-simulation)
4. [Disable theme transitions on theme toggle](https://paco.sh/blog/disable-theme-transitions) by
   Paco Coursey

#### Syntax Highlighting

1. [Code blocks, but better](https://ped.ro/blog/code-blocks-but-better) by Pedro Duarte

#### Web Share

1. [How to Use the Web Share API](https://css-tricks.com/how-to-use-the-web-share-api/) by Ayooluwa
   Isaiah
2. [The Simplest (and Most Performant) Way to Offer Sharing Links for Social Media](https://css-tricks.com/simple-social-sharing-links/)
   by Adam Coti

#### Open Graph

1. [Open Graph Meta Tags: Everything You Need to Know](https://ahrefs.com/blog/open-graph-meta-tags/)
   by Michal Pecánek

#### Favicon

1. [Favicon Generator](https://realfavicongenerator.net/)
2. [SVG, Favicons, and All the Fun Things We Can Do With Them](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/)
   by Eric Bailey

#### Typography

1. [Type Scale - A Visual Calculator](https://type-scale.com/)
2. [Fluid typography](https://fluid-typography.netlify.app/)

#### Webmention

1. [Webmention](https://indieweb.org/Webmention)
2. [Into Webmentions With NextJS (or Not)](https://css-tricks.com/jumping-into-webmentions-with-nextjs-or-not/)
   by Atila Fassina
3. [Using Webmentions in Eleventy](https://mxb.dev/blog/using-webmentions-on-static-sites/) by Max
   Böck
4. [A Short History of Bi-Directional Links](https://maggieappleton.com/bidirectionals) by Maggie
   Appleton

#### Code Snippet

1. Outline focus by Adam Argyle (@argyleink)

   \`\`\`css
   @media (prefers-reduced-motion: no-preference) {
     :focus {
       transition: outline-offset 0.25s ease;
       outline-offset: 3px;
       outline-color: var(--accent-color-1);
     }

     html {
       scroll-behavior: smooth;
     }
   }
   \`\`\`

2. [Mouse in-out transition](https://codepen.io/argyleink/pen/poEjvpd) by Adam Argyle

saya ucapkan terima kasih untuk semua _author_ yang sangat baik hati karena sudah mau berbagi
ilmunya secara cuma-cuma :)

## Inspirasi

Beberapa website yang menjadi inspirasi desain website ini:

- [Home](https://eyeondesign.aiga.org/)
- [It's Nice That](https://www.itsnicethat.com/)
- [Thinking\\*Room](https://www.thinkingroominc.com/)
- [Fatih Kalifa | Interface Engineer](http://fatihkalifa.com/)
- [We are COLLINS](https://www.wearecollins.com/)
- [archives.design](https://archives.design/)
- [Experiments with Google](https://experiments.withgoogle.com/)
- [Dwinawan - User Interface Designer](http://dwinawan.com/)
- [Maggie Appleton](https://maggieappleton.com/)
- [Talia Cotton, designer & coder](https://taliacotton.com/)

## Hasil

Dari beberapa proses yang udah saya jalani tadi, berikut hasil dari pengukuran performa website saya
menggunakan Lighthouse:

### Desktop

![Performa website ketika diakses melalui perangkat desktop yang diukur menggunakan Lighthouse](../../assets/blog/membangun-kebun-digital/lighthouse-desktop.png)

![Pengaturan yang dijalankan untuk perangkat desktop ketika diukur menggunakan Lighthouse](../../assets/blog/membangun-kebun-digital/lighthouse-desktop-settings.png)

### Mobile

![Performa website ketika diakses melalui perangkat mobile yang diukur menggunakan Lighthouse](../../assets/blog/membangun-kebun-digital/lighthouse-mobile.png)

![Pengaturan yang dijalankan untuk perangkat mobile ketika diukur menggunakan Lighthouse](../../assets/blog/membangun-kebun-digital/lighthouse-mobile-settings.png)

Seperti yang terlihat di atas, bahwa di sisi performa website saya saat ini, terutama pada perangkat
_mobile_—yang saya duga karena banyaknya font yang digunakan dan fitur interaktif yang ada pada
halaman home—, masih perlu adanya sebuah perbaikan, namun sejauh ini saya cukup puas dengan
keseluruhan hasilnya :)

## What's Next?

Mencoba untuk mulai belajar menulis seputar software engineering dan teknologi, yang semoga saja
bisa bermanfaat bagi diri sendiri dan orang lain.

Jika kalian punya pertanyaan seputar website ini, atau sekedar ngobrol, maupun berkolaborasi, bisa
sapa saya di [Twitter](https://twitter.com/abdmmar)
`,If=Object.freeze(Object.defineProperty({__proto__:null,content:zg,frontmatter:_g},Symbol.toStringTag,{value:"Module"})),Dg={title:"Organizing React Code",description:"How I code in React",tag:"Blog",keywords:["React","State Mangement","User Interface"],status:"Draft",publishedAt:"2024-06-14",author:"Abdullah Ammar"},jg=`
There's a lot of ways to handle states in React, either local or server state, 
from using React Context to share state and Reducer to manage state to use third party library like Redux or Jotai.
I feel using both approach can create maintainable code if we have the right mental model.
Usually when developing a features, there's data involved, both local and server. 
From here, we can determine which component that should manage the data and only show the data.
I often called it smart and dumb component. Dumb component should "only" handle data rendering and styling, where smart component handle the state management.
Handle server and local state management can have many approaches, it depends on what developer choose and prefer.
I usually choose React Query if the data served using REST API or Apollo if the data served using GraphQL.
Both library "simplify" the application codebase by providing cache management, parallel queries, devtools, and other stuff.
So we doesn't need to manually writing the abstractions that often ended up as a spaghetti code, no documentation, hard to extend, lack of features, and boilerplate-y code.

Great! server-state management simplified, how about local-state management? Using React Context + Provider might suit your preference and need, 
but using third party library that can handle state outside React is really helpful. 
But, the main problem is not the tool per se, if you doesn't know how to wire it together, your code could easily become mess, hard to read, refactor, and test, nightmare.
I don't mind if one file has 1000 LoC, if it's  organized well. 
Fortunately, React support this kind of approach, allowing developer to separate the mapper, constants value, component and data type, dumb and smart component, data-fetching hook, and local-state management in one file, close to each other :D.
Here's what I feel a decent code:

\`\`\`ts
// 3rd part lib
import { Table } from '@shadcn/ui'
// common
import {validation} from '@utils/validation'
// local
import styles from './styles.module.scss'

const CONSTANT_VALUE = 'CONSTANT'

const useGetDataQuery = () => {}
const useCreateDataMutation = () => {}

const mapToOptions = (data: Data[]) => data.map(item => ({label: item.name, value: item.id}))

const useModal = () => useAtom(modalAtom)
const useItem = () => useAtom(itemAtom)
// ...

const columns = [
  {
    key: 'name',
    title: 'Name',
    render: (value) => <span>{value}</span>
  },
  {
    title: 'Action',
    render: (value) => {
      const open = useOpenModal()
      const setItem = useSetItem()

      return (
        <div>
          <a href="">View</a>
          <button onClick={() => {
            setItem(value)
            open('delete')
          }}>Delete</button>
        </div>
      )
    }
  }
]

const DeleteModal = () => {
  const form = useForm()
  const createMutation = useMutation()
  const [item] = useItem()

  const onSubmit = async (data) => {
    try {
      const result = await createMutation(data)
      toast.success('success')
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <Modal>
      <Form form={form} onSubmit={onSubmit}>
        <Input />
        <Button>Submit</Button>
      </Form>
    </Modal>
  )
}

const Page = () => {
  return (
    <div>
      <Table columns={columns} data={data} />
      <AddModal open={} />
      <DeleteModal open={} />
      <CreateModal open={} />
    </div>
  )
}
\`\`\`

`,Pf=Object.freeze(Object.defineProperty({__proto__:null,content:jg,frontmatter:Dg},Symbol.toStringTag,{value:"Module"})),Mg={title:"Pengujian Web Component",description:"Tutorial singkat pengujian web component menggunakan AVA dan Happy DOM",tag:"Blog",keywords:["Testing","Custom Elements","Web Components"],status:"In Progress",publishedAt:"2021-12-23",image:"../../assets/blog/pengujian-ce/pengujian-ce.webp",imageAlt:"Ilustrasi Testing",author:"Abdullah Ammar"},Og=`
Beberapa minggu yang lalu, saya coba membuat sebuah user interface menggunakan salah satu Web API
yaitu Custom Elements API. Dengan API ini memungkinkan kita untuk membuat sebuah komponen web yang
mampu berjalan di laman berbasis JavaScript manapun. Apakah proyek web kamu pakai React? Vue?
Svelte? Tentu saja bisa, selama _library_ atau _framework_ tersebut mendukung. Untuk memastikan
bahwa _custom elements_ atau yang biasa dikenal sebagai _web components_ ini berjalan sebagaimana
mestinya—atau setidaknya ketika ada fitur baru ditambahkan kita tidak perlu repot-repot melakukan
pengujian secara manual—, tentu saja kita harus melakukan sebuah 😱**pengujian**😱. Tapi sebelum
itu, mari kita buat sebuah _custom elements_ sederhana terlebih dahulu, yeay!.

## Membuat Komponen

Pertama, buat sebuah file baru di root direktori kalian dengan nama \`print-text.js\`. Lalu tambahkan
kode berikut:

\`\`\`js
class PrintText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");
    this.template.innerHTML = PrintText.template();
    this.shadowRoot.append(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    this.message = this.getAttribute("message") || "Hello World!";
    this.shadowRoot.querySelector("h1").textContent = this.message;
  }

  static template() {
    return \`
      <style>
        :host {
          display: block;
          padding: 1rem;
          background: #f0f0f0;
        }
      </style>
      <h1></h1>
    \`;
  }
}

customElements.define("print-text", PrintText);
\`\`\`

Kemudian. _import_ file \`print-text.js\` tersebut ke dalam file HTML dan gunakan komponen yang telah
dibuat tadi dengan menggunakan tag \`<print-text></print-text>\` di dalam file HTML.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
    <script type="module" src="print-text.js"><\/script>
  </head>
  <body>
    <print-text message="Hello World!"></print-text>
  </body>
</html>
\`\`\`

Setelah selesai membuat komponen \`print-text\`, mari kita lanjutkan untuk melakukan pengujian.

## Konfigurasi Alat Pengujian

Pertama-tama kita harus menginstal AVA dan Happy DOM.

\`\`\`bash
npm install --save-dev ava happy-dom
\`\`\`

Setelah itu, buat sebuah folder \`__tests__\` di _root_ direktori kamu, buat sebuah file JavaScript
baru, dan _import_ AVA serta Happy DOM yang telah kita install.

\`\`\`js
import test from "ava";
import { Window } from "happy-dom";
\`\`\`

Tambahkan konfigurasi berikut

\`\`\`js
import test from "ava";
import { Window } from "happy-dom";

test.before(() => {
  const window = new Window();
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.customElements = window.customElements;
});
\`\`\`

Import secara dinamis komponen \`print-text\` yang telah kita buat tadi, setiap sebelum kita melakukan
pengujian.

\`\`\`js
import test from "ava";
import { Window } from "happy-dom";

test.before(() => {
  const window = new Window();
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.customElements = window.customElements;
});

test.beforeEach(() => {
  import("../print-text.js");
});
\`\`\`

## Pengujian

Setelah semua konfigurasi di atas, kita bisa mulai pengujian. Disini kita ingin menguji bahwa
komponen \`print-text\` berjalan dengan baik dan mencetak kalimat 'Hello World!' pada DOM.

\`\`\`js
import test from "ava";
import { Window } from "happy-dom";

test.before(() => {
  const window = new Window();

  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.customElements = window.customElements;
});

test.beforeEach(() => {
  import("../print-text.js");
});

test("print-text", (t) => {
  const document = globalThis.document;
  const printText = document.createElement("print-text");
  printText.setAttribute("message", "Hello World!");

  document.body.appendChild(printText);

  const helloWorld = document.querySelector("print-text");

  t.is(helloWorld.tagName, "PRINT-TEXT");
  t.is(helloWorld.getAttribute("message"), "Hello World!");
});
\`\`\`

Kemudian jalankan pengujian tersebut menggunakan AVA dengan mejalankan perintah \`ava\` pada terminal

\`\`\`bash
ava
\`\`\`

Maka akan terlihat hasil pengujian yang telah kita buat.

![print-text is passed the test](../../assets/blog/pengujian-ce/test-passed.webp)

Selesai 🎉, kita telah memastikan bahwa komponen \`print-text\` berjalan dengan baik menggunakan AVA
dan Happy DOM.

## Referensi

- [AVA](https://github.com/avajs/ava)
- [Happy DOM](https://github.com/capricorn86/happy-dom/tree/master/packages/happy-dom)
- [Unit testing web components with ava and jsdom](https://dev.to/ficusjs/unit-testing-web-components-with-ava-and-jsdom-2ofp)
`,td=Object.freeze(Object.defineProperty({__proto__:null,content:Og,frontmatter:Mg},Symbol.toStringTag,{value:"Module"})),Bg={title:"Introduction to Machine Learning",description:"A beginner's guide to understanding the basics of machine learning.",date:"01-10-2023",tags:["machine-learning","artificial-intelligence","data-science","beginners"],category:"Technology",author:"John Doe"},Hg=`\r
# Introduction to Machine Learning\r
\r
Machine learning is a subset of artificial intelligence that focuses on building systems that can learn from data...\r
`,ad=Object.freeze(Object.defineProperty({__proto__:null,content:Hg,frontmatter:Bg},Symbol.toStringTag,{value:"Module"})),Ug={title:"The Art of Gardening",description:"Learn how to create and maintain a beautiful garden.",date:"05-10-2023",tags:["gardening","plants","outdoor-activities","sustainability"],category:"Lifestyle",author:"Jane Smith"},Rg=`\r
# The Art of Gardening\r
\r
Gardening is not just about planting seeds; it's about nurturing life and creating a space of beauty and tranquility...\r
`,ed=Object.freeze(Object.defineProperty({__proto__:null,content:Rg,frontmatter:Ug},Symbol.toStringTag,{value:"Module"})),Ng={title:"Exploring the Cosmos",description:"A journey through the wonders of the universe.",date:"10-10-2023",tags:["astronomy","space","science","exploration"],category:"Science",author:"Carl Sagan"},Cg=`\r
# Exploring the Cosmos\r
\r
The universe is vast and full of mysteries waiting to be uncovered. From the birth of stars to the formation of galaxies...\r
\r
YOOOOOOOOO ITS WORKINGGGGGGGGG\r
`,nd=Object.freeze(Object.defineProperty({__proto__:null,content:Cg,frontmatter:Ng},Symbol.toStringTag,{value:"Module"})),qg={title:"Healthy Eating Habits",description:"Tips and tricks for maintaining a balanced diet.",date:"15-10-2023",tags:["nutrition","health","wellness","food"],category:"Health",author:"Emily Davis"},Gg=`\r
# Healthy Eating Habits\r
\r
Eating healthy doesn't have to be complicated. With a few simple changes, you can transform your diet and improve your overall well-being...\r
`,ld=Object.freeze(Object.defineProperty({__proto__:null,content:Gg,frontmatter:qg},Symbol.toStringTag,{value:"Module"})),Lg={title:"The Future of Renewable Energy",description:"How renewable energy is shaping the future of our planet.",date:"20-10-2023",tags:["renewable-energy","sustainability","environment","technology"],category:"Environment",author:"Michael Green"},Yg=`\r
# The Future of Renewable Energy\r
\r
As the world moves towards a more sustainable future, renewable energy sources like solar, wind, and hydro are becoming increasingly important...\r
`,id=Object.freeze(Object.defineProperty({__proto__:null,content:Yg,frontmatter:Lg},Symbol.toStringTag,{value:"Module"})),Vg={title:"Tailwind Prose"},Xg=`\r
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
`,ud=Object.freeze(Object.defineProperty({__proto__:null,content:Xg,frontmatter:Vg},Symbol.toStringTag,{value:"Module"})),Qg={title:"Testing dan Test-Driven Development",subtitle:'"Kenapa kode harus dites? memang perlu? memang ngga makan banyak waktu?"',description:"Rangkuman pembelajaran saya mengenai Testing dan Test-Driven Development menggunakan Jest dan React Testing Library ",tag:"Blog",keywords:["Testing","TDD","Learning","Jest","React Testing Library"],status:"In Progress",publishedAt:"2021-09-12",updatedAt:"2021-09-12",image:"../../assets/blog/testing-dan-tdd/testing-dan-tdd.webp",imageAlt:"Ilustrasi botol kaca lab sebagai logo",author:"Abdullah Ammar"},Zg=`
Pertanyaan tersebut adalah pertanyaan yang muncul dibenak saya ketika pertama kali mendengar kata
_testing_ atau pengujian. Kita tau bahwa manusia adalah tempatnya salah dan lupa, beberapa dari
kesalahan itu mungkin tidak penting, tetapi ada juga yang memiliki dampak yang tidak kecil, tentunya
banyak sekali faktor yang bisa membuat kita salah maupun lupa, seperti tidak fokus karena
membayangkan "apa jadinya jika koruptor tidak ada di Indonesia?" atau mungkin karena hal kecil dan
sepele lainnya, apalagi sebagai seorang developer/engineer/programmer yang selalu berurusan dengan
kode berbuntut nan rumit yang tak jarang membuat kepala pusing, duh. Sebelum menjawab pertanyaan
diatas itu, mari kita sedikit berkenalan dengan _testing_.

## Apa itu Testing?

Testing atau dalam konteks ini _software testing_ adalah proses untuk memastikan bahwa sebuah produk
perangkat lunak atau aplikasi melakukan apa yang seharusnya dilakukan.
[Menurut Kent C. Dodds](https://kentcdodds.com/blog//static-vs-unit-vs-integration-vs-e2e-tests),
ada 4 jenis tes dalam pengujian perangkat lunak:

- **Static**: untuk menangkap typo (kesalahan ketik) dan _type errors_ saat menulis kode. _tools_ yang bisa digunakan: ESLint
- **Unit Test**: untuk memastikan unit individu terkecil dalam kode seperti function, method, ataupun class bisa
  berjalan semestinya. _tools_ yang bisa digunakan: Mocha + Chai, Enzyme, Jest, dan React Testing Library
- **Integration Test**: untuk memastikan setiap unit berjalan secara harmonis. _tools_ yang bisa digunakan: Jest dan React Testing Library
- **End-to-End Test**: untuk memastikan aplikasi berjalan dengan benar, biasanya dilakukan oleh sebuah robot yang
  bertindak layaknya pengguna. _tools_ yang bisa digunakan: Cypress dan Selenium

## Kenapa Testing?

Dalam sebuah pengembangan perangkat lunak, biasanya ada sebuah _requirement_ yang harus dipenuhi,
dan seringkali _requirement_ tersebut berubah, hari ini pengguna ingin A, besok pengguna ingin A+B,
dan lusa A+B+C+D, tentu kita harus memastikan bahwa ketika ada fitur baru ditambahkan,
fungsionalitas pada fitur sebelumnya masih berjalan seperti sedia kala, karena itulah maka
diperlukannya sebuah pengujian otomatis.

Dari sedikit artikel yang saya baca, ada 2 keuntungan utama kenapa pengujian dilakukan, yaitu:

#### Mengidentifikasi dan mengurangi/mencegah cacat/bugs pada aplikasi

![A guy from history.com with text: "I read my code and it seemed just fine, Developers"](../../assets/blog/testing-dan-tdd/its-fine.webp)
Apa jadinya jika sistem error karena sebuah kesalahan kecil seperti salah ketik?

#### Memastikan bahwa aplikasi berjalan semestinya

![A girl smiling while a house burning in the background with text: pushes code to prod without testing leaves for vacation](../../assets/blog/testing-dan-tdd/pushes-code-to-prod-without-testing-leaves-for-vacation.webp)

Tentu semua hal ada konsekuensinya, dalam _testing_, hal yang harus dikorbankan adalah waktu, karena
kita perlu menulis tes, namun banyak yang beranggapan bahwa waktu dan effort yang diperlukan untuk
menulis tes jauh lebih sedikit ketimbang menghabiskan waktu dan tenaga untuk mengatasi _bugs_ secara
manual karena tidak dilakukannya pengujian.

## Apa itu Test-Driven Development?

Sesuai dengan namanya, Test-Driven Development adalah pengembangan yang berbasiskan tes, artinya
kita harus menuliskan sebuah test—biasanya disebut _test case_ atau _test suite_—terlebih dahulu
kemudian merancang dan menuliskan implementasi kode untuk memenuhi ekspektasi tes tersebut, proses
ini biasanya dikenal dengan nama _red_, _green_, _refactor_ yang membagi fokus menjadi 3 fase:

- **Red**: menuliskan sebuah _test case_ dan berfokus mengenai fitur _apa_ yang ingin dibuat—biasanya dari
  _requirement_ yang ada
- **Green**: menuliskan implementasi kode minimal dan berfokus _bagaimana_ agar implementasi kode tersebut
  memenuhi ekspektasi _test_ yang ada
- **Refactor**: berfokus _bagaimana_ untuk meningkatkan kualitas implementasi kode yang ada, seperti meningkatkan
  performa aplikasi dan meningkatkan keterbacaan kode yang telah dibuat—implementasi _clean code._

## Kenapa Test-Driven Development?

Ada beberapa keuntungan yang didapatkan ketika melakukan praktik TDD ini, diantaranya yaitu:

1. Dapat dengan mudah untuk mengidentifikasi masalah saat perangkat lunak sedang dikembangkan yang
   memungkinkan masalah ini ditangani dengan lebih cepat karena adanya proses red-green-refactor ini
2. Praktik TDD mengharuskan pengembang menulis kode untuk memenuhi kebutuhan test yang ada, dengan
   pendekatan ini, kode yang dibuat menjadi lebih sederhana dan mudah untuk diuji, karena kode yang
   sederhana juga, maka kode yang ada juga lebih mudah dibaca dan di-_mantain_.

## Implementasi Test-Driven Development

Setelah sedikit mempelajari mengenai Testing dan Test-Driven Development, saatnya _hands-on,_ mari
kita mencoba untuk mempraktekan sedikit ilmu yang sudah kita dapat tadi menggunakan React
(create-react-app), Jest, dan React Testing Library.

### Requirement

- npm atau yarn
- Pemahaman fundamental tentang JavaScript dan React

### User Story

\`\`\`txt
AS A: BLOGGER

I WANT TO: DISPLAY LIST OF POST WITH TITLE, DATE, AND DESCRIPTION

SO THAT: I CAN SEE ALL OF MY POST EASILY
\`\`\`

### Implementasi

Diasumsikan kita sudah mempunyai sebuah data berformat JSON seperti berikut

\`\`\`jsx
[
  {
    title: 'Testing dan Test-Driven Development',
    description:
      'Rangkuman singkat pembelajaran mengenai testing dan test-driven development di JavaScript',
    publishedAt: '2021-09-11',
    author: 'Abdullah Ammar',
    tag: 'Testing',
    tags: ['Learning', 'JavaScript', 'React'],
    image: 'https://abdmmar.com../../assets/belajar_testing/meta.webp',
    imageAlt: 'Illustration of red, green, refactor, approaches',
  },
  ...
]
\`\`\`

Dan dari contoh _user story_ diatas, diasumsikan juga kita akan membuat sebuah komponen \`Card\` yang
menampilkan \`title\`, \`publishedAt\`, dan \`description\` dari sebuah tulisan yang telah dipublish
yang nantinya akan digunakan di halaman utama.

#### Memasang Jest dan React Testing Library

Sebelum mulai menulis _test,_ terlebih dahulu kita pasang Jest dan React Testing Library yang sudah
tersedia di dalam create-react-app, oleh karena itu jalankan perintah dibawah untuk membuat sebuah
proyek bernama \`testing-and-tdd\`

\`\`\`bash
npx create-react-app testing-and-tdd
\`\`\`

Setelah selesai dijalankan, maka proyek kamu akan terlihat seperti ini:

\`\`\`jsx
testing-dan-tdd/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
  ...
\`\`\`

Lalu buat sebuah folder dan tambahkan beberapa file baru seperti dibawah:

\`\`\`jsx
testing-and-tdd/
  src/
    components/
      Card/
        Card.js
        Card.test.js
        Card.module.css
      index.js
    ...
  ...
\`\`\`

#### Menulis Unit Test

Mari kita mulai menulis sebuah _test case_ dengan menjalankan kerangka kerja red, green, refactor

##### Red

Pertama kita import terlebih dahulu function \`render\` dan objeck \`screen\` dari React Testing Library
dan import komponen Card yang akan kita test.

\`\`\`jsx
import { render, screen } from "@testing-library/react";
import Card from "./Card";
\`\`\`

**Penjelasan**

- function \`render\` digunakan untuk merender komponen \`Card\` ke dalam dokumen
- objek \`screen\` digunakan untuk memanggil query, query ini digunakan untuk menemukan elemen di
  halaman seperti query \`getByText()\` untuk menemukan elemen berdasarkan teks dan query
  \`getByLabelText()\` untuk menemukan elemen berdasarkan label atau aria-label. Untuk detail query
  apa saja yang tersedia, kalian dapat melihatnya
  [di sini](https://testing-library.com/docs/queries/about/) atau
  [di sini](https://testing-library.com/docs/react-testing-library/cheatsheet)

Setelah itu, kita buat objek \`data\` yang berisikan detail informasi sebuah post yang akan digunakan
untuk mengetes komponen card ini

\`\`\`jsx
const data = {
  title: "Testing dan Test-Driven Development",
  description:
    "Rangkuman singkat pembelajaran testing dan test-driven development di JavaScript",
  publishedAt: "2021-09-11",
  author: "Abdullah Ammar",
  tag: "Testing",
  tags: ["Learning", "JavaScript", "React"],
  image: "https://abdmmar.com../../assets/belajar_testing/meta.webp",
  imageAlt: "Illustration of red, green, refactor, approaches",
};
\`\`\`

Lalu tambahkan kode berikut:

\`\`\`jsx
describe('Card', () => {
  test('render Card with title, description, and published date', () => {

  }
})

\`\`\`

Kemudian kita panggil method \`render()\` untuk mencetak komponen card ke dalam dokumen dan tambahkan
value dari objek \`data\` yang telah dibuat tadi kedalam atribut yang dibutuhkan oleh komponen card.

\`\`\`jsx
describe('Card', () => {
  test('render Card with title, description, and published date', () => {
    // Arrange
    render(<Card
      title={data.title}
      description={data.description}
      date={data.publishedAt}/>)
  }
})

\`\`\`

Lalu kita panggil query \`getByText()\` untuk menemukan elemen title, description, dan date

\`\`\`jsx
describe('Card', () => {
  test('render Card with title, description, and published date', () => {
    // Arrange
    render(<Card
      title={data.title}
      description={data.description}
      date={data.publishedAt}/>)

    // Assert
    const title = screen.getByText(data.title)
    const description = screen.getByText(data.description)
    const date = screen.getByText(data.publishedAt)
  }
})

\`\`\`

Setelah itu kita tes apakah elemen _title_, _description_, dan _date_ ada di dalam dokumen dan
mempunyai value yang sama dengan value yang diberikan tadi.

\`\`\`jsx
describe('Card', () => {
  test('render Card with title, description, and published date', () => {
    // Arrange
    render(<Card
      title={data.title}
      description={data.description}
      date={data.publishedAt}/>)

    // Assert
    const title = screen.getByText(data.title)
    const description = screen.getByText(data.description)
    const date = screen.getByText(data.publishedAt)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(title.textContent).toEqual(data.title)
    expect(description.textContent).toEqual(data.description)
    expect(date.textContent).toEqual(data.publishedAt)
  }
})
\`\`\`

Sampai sejauh ini, maka kode kita akan terlihat seperti ini:

\`\`\`jsx
import { render, screen } from "@testing-library/react";
import Card from "./Card";

const data = {
  title: "Testing dan Test-Driven Development",
  description:
    "Rangkuman singkat pembelajaran testing dan test-driven development di JavaScript",
  publishedAt: "2021-09-11",
  author: "Abdullah Ammar",
  tag: "Testing",
  tags: ["Learning", "JavaScript", "React"],
  image: "https://abdmmar.com../../assets/belajar_testing/meta.webp",
  imageAlt: "Illustration of red, green, refactor, approaches",
};

describe("Card", () => {
  test("render Card with title, description, and published date", () => {
    // Arrange
    render(
      <Card
        title={data.title}
        description={data.description}
        date={data.publishedAt}
      />
    );

    // Assert
    const title = screen.getByText(data.title);
    const description = screen.getByText(data.description);
    const date = screen.getByText(data.publishedAt);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(title.textContent).toEqual(data.title);
    expect(description.textContent).toEqual(data.description);
    expect(date.textContent).toEqual(data.publishedAt);
  });
});
\`\`\`

Lalu kita coba jalankan tesnya menggunakan perintah:

\`\`\`jsx
yarn start //atau npm start
\`\`\`

![test error component undefined](../../assets/blog/testing-dan-tdd/test-error-component-undefined.webp)

Maka akan muncul pesan kesalahan karena kita belum membuat komponen \`Card\`, oleh karena itu mari
kita membuat komponen Card menggunakan function component

\`\`\`jsx
export default function Card(props) {
  return <div>Hi!</div>;
}
\`\`\`

Setelah itu kita coba jalankan kembali tesnya

![test error element not found](../../assets/blog/testing-dan-tdd/test-error-element-not-found.webp)

Maka akan muncul pesan kesalahan karena kita elemen dengan teks yang diberikan tidak ditemukan, oleh
karena itu mari ke tahap selanjutnya untuk memenuhi ekspektasi tes ini.

##### Green

Tambahkan beberapa tag dan props title, description, dan date

\`\`\`jsx
export default function Card({ title, description, date }) {
  return (
    <div>
      <small>{date}</small>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}
\`\`\`

Lalu kita jalankan kembali tesnya dan terlihat bahwa tes telah berhasil atau _pass_

![test is passing](../../assets/blog/testing-dan-tdd/test-pass-card.webp)

##### Refactor

Setelah itu kalian bisa merefactor kode seperti menambahkan styling ataupun merubah tag sesuai
dengan yang dibutuhkan.

## Kesimpulan

Demikian sedikit rangkuman pembelajaran saya mengenai Testing dan Test-Driven Development
menggunakan Jest dan React Testing Library. Kita sudah membahas apa itu testing, kenapa perlu
testing, hingga implementasi sederhana Test-Driven Development.

Jika teman-teman mempunyai kritik dan saran bisa kirimkan issue di
[GitHub](https://github.com/abdmmar/website/issues) maupun ke akun twitter saya di
[@abdmmar](https://www.twitter.com/abdmmar), terima kasih :)

## Referensi

1. [Introduction | Testing Library](https://testing-library.com/docs/)
2. [Getting Started · Jest](https://jestjs.io/docs/getting-started)
3. [What is software testing?](https://www.ibm.com/topics/software-testing)
4. [Red, Green, Refactor | Codecademy](https://www.codecademy.com/articles/tdd-red-green-refactor)
5. [TDD the Series : Part 1 - Apa itu Test Driven Development (TDD)](https://medium.com/koding-kala-weekend/tdd-the-series-part-1-apa-itu-test-driven-development-tdd-ff92c95c945f)
6. [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog//static-vs-unit-vs-integration-vs-e2e-tests)
7. [Why Test-Driven Development (TDD) | Marsner Technologies](https://marsner.com/blog/why-test-driven-development-tdd/)
8. [Arrange-Act-Assert: A Pattern for Blog Good Tests](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
9. [How to Write Tests with React Testing Library and TypeScript](https://javascript.plainenglish.io/how-to-write-the-basic-aaa-pattern-tests-with-react-testing-library-and-typescript-6836173d656b)
10. [Kupas Tuntas Binary Search Tree dengan Test-Driven Development](https://www.youtube.com/watch?v=4tZDfvfXBb4)
`,sd=Object.freeze(Object.defineProperty({__proto__:null,content:Zg,frontmatter:Qg},Symbol.toStringTag,{value:"Module"})),ac=k=>{const[_,z,h]=k.split("-");return new Date(`${h}-${z}-${_}`)},Kg=k=>Xh(ac(k),"dd/MM/yyyy"),Jg=k=>{var _;return((_=k.match(/\/([^/]+)\.md$/))==null?void 0:_[1])||""},Wg=()=>Object.assign({"../contents/custom-domain-tech.md":Ff,"../contents/integration-test-in-react.md":$f,"../contents/membangun-kebun-digital.md":If,"../contents/organizing-react-code.md":Pf,"../contents/pengujian-ce.md":td,"../contents/post1.md":ad,"../contents/post2.md":ed,"../contents/post3.md":nd,"../contents/post4.md":ld,"../contents/post5.md":id,"../contents/tailwind-prose.md":ud,"../contents/testing-dan-tdd.md":sd}),Fg=k=>Object.entries(k).sort(([,_],[,z])=>{const h=_.frontmatter.date?ac(_.frontmatter.date):new Date(0),A=z.frontmatter.date?ac(z.frontmatter.date):new Date(0);return Qh(h,A)}),$g=k=>k.map(([_,z])=>{const h=Jg(_),{frontmatter:A}=z,R=A.title||"Untitled",O=A.date?Kg(A.date):null;return{title:R,path:`/blog/${h}`,date:O}});function Ig(){const k=Wg(),_=Fg(k),z=$g(_);return b.jsx(Kf,{children:b.jsxs(xl,{children:[b.jsx(wl,{children:"Study"}),b.jsxs(Tg,{children:[b.jsx(vn,{}),z.map(({title:h,path:A,date:R})=>b.jsxs(Uh.Fragment,{children:[b.jsxs(Rh,{to:A,style:{margin:"0.5rem"},children:[h," ",R&&`(${R})`]}),b.jsx(vn,{})]},A))]})]})})}function Pg(){return b.jsxs(b.Fragment,{children:[b.jsx(ec,{}),b.jsx(Ig,{}),b.jsx(Zf,{})]})}function tp(){return b.jsxs(b.Fragment,{children:[b.jsx(ap,{children:b.jsx(ec,{})}),b.jsxs(ep,{children:[b.jsx("p",{children:"404"}),b.jsx("p",{children:"Not Found"})]})]})}const ap=I.div`
  nav {
    position: fixed;
  }
`,ep=I.main`
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
`,np="modulepreload",lp=function(k){return"/deskreview-react/"+k},Qf={},ip=function(_,z,h){let A=Promise.resolve();if(z&&z.length>0){document.getElementsByTagName("link");const O=document.querySelector("meta[property=csp-nonce]"),et=(O==null?void 0:O.nonce)||(O==null?void 0:O.getAttribute("nonce"));A=Promise.allSettled(z.map(X=>{if(X=lp(X),X in Qf)return;Qf[X]=!0;const ot=X.endsWith(".css"),da=ot?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${X}"]${da}`))return;const P=document.createElement("link");if(P.rel=ot?"stylesheet":np,ot||(P.as="script"),P.crossOrigin="",P.href=X,et&&P.setAttribute("nonce",et),document.head.appendChild(P),ot)return new Promise((ut,xt)=>{P.addEventListener("load",ut),P.addEventListener("error",()=>xt(new Error(`Unable to preload CSS for ${X}`)))})}))}function R(O){const et=new Event("vite:preloadError",{cancelable:!0});if(et.payload=O,window.dispatchEvent(et),!et.defaultPrevented)throw O}return A.then(O=>{for(const et of O||[])et.status==="rejected"&&R(et.reason);return _().catch(R)})},up=kn.lazy(()=>ip(()=>import("./BlogPost-BIoaTgNB.js"),__vite__mapDeps([0,1,2,3,4,5,6])));function sp(){return Object.entries(Object.assign({"../contents/custom-domain-tech.md":Ff,"../contents/integration-test-in-react.md":$f,"../contents/membangun-kebun-digital.md":If,"../contents/organizing-react-code.md":Pf,"../contents/pengujian-ce.md":td,"../contents/post1.md":ad,"../contents/post2.md":ed,"../contents/post3.md":nd,"../contents/post4.md":ld,"../contents/post5.md":id,"../contents/tailwind-prose.md":ud,"../contents/testing-dan-tdd.md":sd})).map(([_,z])=>{var O;const h=((O=_.match(/\/([^/]+)\.md$/))==null?void 0:O[1])||"",{frontmatter:A,content:R}=z;return b.jsx(Tl,{path:h,element:b.jsx(up,{frontmatter:A,children:b.jsx(jh,{children:R,remarkPlugins:[Zh]})})},h)})}function cp(){const k=sp();return b.jsxs(b.Fragment,{children:[b.jsx(Ih,{}),b.jsxs(Nh,{children:[b.jsx(Tl,{path:"/",element:b.jsx(Sg,{})}),b.jsxs(Tl,{path:"/blog",children:[b.jsx(Tl,{index:!0,element:b.jsx(Pg,{})}),k]}),b.jsx(Tl,{path:"*",element:b.jsx(tp,{})})]})]})}$h.createRoot(document.getElementById("root")).render(b.jsx(kn.StrictMode,{children:b.jsx(Ch,{basename:"/deskreview-react/",children:b.jsx(cp,{})})}));export{Zf as F,Kf as M,ec as N,xl as S,Kg as f};
