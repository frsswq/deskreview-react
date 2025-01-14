const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BlogPost-Dr3SAJx5.js","assets/react-markdown-CdbJyoHg.js","assets/vendor-CvfCuUZz.js","assets/styled-components-BOF5XIQs.js","assets/@radix-ui/react-icons-T6wVLuVb.js","assets/date-fns-B4QYC8g5.js","assets/remark-gfm-RXI-vKoo.js","assets/rehype-raw-B3D9AqIt.js"])))=>i.map(i=>d[i]);
import{G as y,M as Mh}from"./react-markdown-CdbJyoHg.js";import{a as Oh,b as Bh,u as Xd,r as Me,c as Hh,L as Qd,R as wl,d as Uh,B as Rh}from"./vendor-CvfCuUZz.js";import{f as Nh,d as I}from"./styled-components-BOF5XIQs.js";import{C as qh,E as Ch,a as Gh,I as Yh}from"./@radix-ui/react-icons-T6wVLuVb.js";import{f as Zd,c as Lh}from"./date-fns-B4QYC8g5.js";import{r as Vh}from"./remark-gfm-RXI-vKoo.js";import{r as Xh}from"./rehype-raw-B3D9AqIt.js";(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))h(A);new MutationObserver(A=>{for(const R of A)if(R.type==="childList")for(const O of R.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&h(O)}).observe(document,{childList:!0,subtree:!0});function E(A){const R={};return A.integrity&&(R.integrity=A.integrity),A.referrerPolicy&&(R.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?R.credentials="include":A.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function h(A){if(A.ep)return;A.ep=!0;const R=E(A);fetch(A.href,R)}})();var Ir={exports:{}},kl={},Pr={exports:{}},as={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function Qh(){return Cd||(Cd=1,function(v){function z(S,B){var _=S.length;S.push(B);a:for(;0<_;){var $=_-1>>>1,ra=S[$];if(0<A(ra,B))S[$]=B,S[_]=ra,_=$;else break a}}function E(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var B=S[0],_=S.pop();if(_!==B){S[0]=_;a:for(var $=0,ra=S.length,Ue=ra>>>1;$<Ue;){var se=2*($+1)-1,gt=S[se],G=se+1,qa=S[G];if(0>A(gt,_))G<ra&&0>A(qa,gt)?(S[$]=qa,S[G]=_,$=G):(S[$]=gt,S[se]=_,$=se);else if(G<ra&&0>A(qa,_))S[$]=qa,S[G]=_,$=G;else break a}}return B}function A(S,B){var _=S.sortIndex-B.sortIndex;return _!==0?_:S.id-B.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;v.unstable_now=function(){return R.now()}}else{var O=Date,ea=O.now();v.unstable_now=function(){return O.now()-ea}}var X=[],ca=[],ft=1,P=null,ua=3,Ta=!1,Fa=!1,mt=!1,Oe=typeof setTimeout=="function"?setTimeout:null,Be=typeof clearTimeout=="function"?clearTimeout:null,Ia=typeof setImmediate<"u"?setImmediate:null;function ne(S){for(var B=E(ca);B!==null;){if(B.callback===null)h(ca);else if(B.startTime<=S)h(ca),B.sortIndex=B.expirationTime,z(X,B);else break;B=E(ca)}}function Sn(S){if(mt=!1,ne(S),!Fa)if(E(X)!==null)Fa=!0,ue();else{var B=E(ca);B!==null&&re(Sn,B.startTime-S)}}var le=!1,Pa=-1,Al=5,He=-1;function D(){return!(v.unstable_now()-He<Al)}function V(){if(le){var S=v.unstable_now();He=S;var B=!0;try{a:{Fa=!1,mt&&(mt=!1,Be(Pa),Pa=-1),Ta=!0;var _=ua;try{t:{for(ne(S),P=E(X);P!==null&&!(P.expirationTime>S&&D());){var $=P.callback;if(typeof $=="function"){P.callback=null,ua=P.priorityLevel;var ra=$(P.expirationTime<=S);if(S=v.unstable_now(),typeof ra=="function"){P.callback=ra,ne(S),B=!0;break t}P===E(X)&&h(X),ne(S)}else h(X);P=E(X)}if(P!==null)B=!0;else{var Ue=E(ca);Ue!==null&&re(Sn,Ue.startTime-S),B=!1}}break a}finally{P=null,ua=_,Ta=!1}B=void 0}}finally{B?ht():le=!1}}}var ht;if(typeof Ia=="function")ht=function(){Ia(V)};else if(typeof MessageChannel<"u"){var wn=new MessageChannel,ie=wn.port2;wn.port1.onmessage=V,ht=function(){ie.postMessage(null)}}else ht=function(){Oe(V,0)};function ue(){le||(le=!0,ht())}function re(S,B){Pa=Oe(function(){S(v.unstable_now())},B)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(S){S.callback=null},v.unstable_continueExecution=function(){Fa||Ta||(Fa=!0,ue())},v.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Al=0<S?Math.floor(1e3/S):5},v.unstable_getCurrentPriorityLevel=function(){return ua},v.unstable_getFirstCallbackNode=function(){return E(X)},v.unstable_next=function(S){switch(ua){case 1:case 2:case 3:var B=3;break;default:B=ua}var _=ua;ua=B;try{return S()}finally{ua=_}},v.unstable_pauseExecution=function(){},v.unstable_requestPaint=function(){},v.unstable_runWithPriority=function(S,B){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var _=ua;ua=S;try{return B()}finally{ua=_}},v.unstable_scheduleCallback=function(S,B,_){var $=v.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?$+_:$):_=$,S){case 1:var ra=-1;break;case 2:ra=250;break;case 5:ra=1073741823;break;case 4:ra=1e4;break;default:ra=5e3}return ra=_+ra,S={id:ft++,callback:B,priorityLevel:S,startTime:_,expirationTime:ra,sortIndex:-1},_>$?(S.sortIndex=_,z(ca,S),E(X)===null&&S===E(ca)&&(mt?(Be(Pa),Pa=-1):mt=!0,re(Sn,_-$))):(S.sortIndex=ra,z(X,S),Fa||Ta||(Fa=!0,ue())),S},v.unstable_shouldYield=D,v.unstable_wrapCallback=function(S){var B=ua;return function(){var _=ua;ua=B;try{return S.apply(this,arguments)}finally{ua=_}}}}(as)),as}var Gd;function Zh(){return Gd||(Gd=1,Pr.exports=Qh()),Pr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Kh(){if(Yd)return kl;Yd=1;var v=Zh(),z=Oh(),E=Bh();function h(a){var t="https://react.dev/errors/"+a;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+a+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}var R=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),ea=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),ua=Symbol.for("react.consumer"),Ta=Symbol.for("react.context"),Fa=Symbol.for("react.forward_ref"),mt=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Be=Symbol.for("react.memo"),Ia=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),Sn=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Pa(a){return a===null||typeof a!="object"?null:(a=le&&a[le]||a["@@iterator"],typeof a=="function"?a:null)}var Al=Symbol.for("react.client.reference");function He(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===Al?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case X:return"Fragment";case ea:return"Portal";case ft:return"Profiler";case ca:return"StrictMode";case mt:return"Suspense";case Oe:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case Ta:return(a.displayName||"Context")+".Provider";case ua:return(a._context.displayName||"Context")+".Consumer";case Fa:var t=a.render;return a=a.displayName,a||(a=t.displayName||t.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case Be:return t=a.displayName||null,t!==null?t:He(a.type)||"Memo";case Ia:t=a._payload,a=a._init;try{return He(a(t))}catch{}}return null}var D=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=Object.assign,ht,wn;function ie(a){if(ht===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ht=t&&t[1]||"",wn=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+a+wn}var ue=!1;function re(a,t){if(!a||ue)return"";ue=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(g){var m=g}Reflect.construct(a,[],k)}else{try{k.call()}catch(g){m=g}a.call(k.prototype)}}else{try{throw Error()}catch(g){m=g}(k=a())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var s=u.split(`
`),o=r.split(`
`);for(l=n=0;n<s.length&&!s[n].includes("DetermineComponentFrameRoot");)n++;for(;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;if(n===s.length||l===o.length)for(n=s.length-1,l=o.length-1;1<=n&&0<=l&&s[n]!==o[l];)l--;for(;1<=n&&0<=l;n--,l--)if(s[n]!==o[l]){if(n!==1||l!==1)do if(n--,l--,0>l||s[n]!==o[l]){var p=`
`+s[n].replace(" at new "," at ");return a.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",a.displayName)),p}while(1<=n&&0<=l);break}}}finally{ue=!1,Error.prepareStackTrace=e}return(e=a?a.displayName||a.name:"")?ie(e):""}function S(a){switch(a.tag){case 26:case 27:case 5:return ie(a.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return a=re(a.type,!1),a;case 11:return a=re(a.type.render,!1),a;case 1:return a=re(a.type,!0),a;default:return""}}function B(a){try{var t="";do t+=S(a),a=a.return;while(a);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function _(a){var t=a,e=a;if(a.alternate)for(;t.return;)t=t.return;else{a=t;do t=a,t.flags&4098&&(e=t.return),a=t.return;while(a)}return t.tag===3?e:null}function $(a){if(a.tag===13){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function ra(a){if(_(a)!==a)throw Error(h(188))}function Ue(a){var t=a.alternate;if(!t){if(t=_(a),t===null)throw Error(h(188));return t!==a?null:a}for(var e=a,n=t;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){e=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return ra(l),a;if(i===n)return ra(l),t;i=i.sibling}throw Error(h(188))}if(e.return!==n.return)e=l,n=i;else{for(var u=!1,r=l.child;r;){if(r===e){u=!0,e=l,n=i;break}if(r===n){u=!0,n=l,e=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===e){u=!0,e=i,n=l;break}if(r===n){u=!0,n=i,e=l;break}r=r.sibling}if(!u)throw Error(h(189))}}if(e.alternate!==n)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?a:t}function se(a){var t=a.tag;if(t===5||t===26||t===27||t===6)return a;for(a=a.child;a!==null;){if(t=se(a),t!==null)return t;a=a.sibling}return null}var gt=Array.isArray,G=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qa={pending:!1,data:null,method:null,action:null},Li=[],Re=-1;function lt(a){return{current:a}}function ga(a){0>Re||(a.current=Li[Re],Li[Re]=null,Re--)}function F(a,t){Re++,Li[Re]=a.current,a.current=t}var it=lt(null),Tn=lt(null),Bt=lt(null),zl=lt(null);function El(a,t){switch(F(Bt,t),F(Tn,a),F(it,null),a=t.nodeType,a){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?hd(t):0;break;default:if(a=a===8?t.parentNode:t,t=a.tagName,a=a.namespaceURI)a=hd(a),t=gd(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ga(it),F(it,t)}function Ne(){ga(it),ga(Tn),ga(Bt)}function Vi(a){a.memoizedState!==null&&F(zl,a);var t=it.current,e=gd(t,a.type);t!==e&&(F(Tn,a),F(it,e))}function jl(a){Tn.current===a&&(ga(it),ga(Tn)),zl.current===a&&(ga(zl),gl._currentValue=qa)}var Xi=Object.prototype.hasOwnProperty,Qi=v.unstable_scheduleCallback,Zi=v.unstable_cancelCallback,cf=v.unstable_shouldYield,of=v.unstable_requestPaint,ut=v.unstable_now,df=v.unstable_getCurrentPriorityLevel,es=v.unstable_ImmediatePriority,ns=v.unstable_UserBlockingPriority,Dl=v.unstable_NormalPriority,ff=v.unstable_LowPriority,ls=v.unstable_IdlePriority,mf=v.log,hf=v.unstable_setDisableYieldValue,xn=null,Ma=null;function gf(a){if(Ma&&typeof Ma.onCommitFiberRoot=="function")try{Ma.onCommitFiberRoot(xn,a,void 0,(a.current.flags&128)===128)}catch{}}function Ht(a){if(typeof mf=="function"&&hf(a),Ma&&typeof Ma.setStrictMode=="function")try{Ma.setStrictMode(xn,a)}catch{}}var Oa=Math.clz32?Math.clz32:bf,pf=Math.log,yf=Math.LN2;function bf(a){return a>>>=0,a===0?32:31-(pf(a)/yf|0)|0}var _l=128,Ml=4194304;function ce(a){var t=a&42;if(t!==0)return t;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Ol(a,t){var e=a.pendingLanes;if(e===0)return 0;var n=0,l=a.suspendedLanes,i=a.pingedLanes,u=a.warmLanes;a=a.finishedLanes!==0;var r=e&134217727;return r!==0?(e=r&~l,e!==0?n=ce(e):(i&=r,i!==0?n=ce(i):a||(u=r&~u,u!==0&&(n=ce(u))))):(r=e&~l,r!==0?n=ce(r):i!==0?n=ce(i):a||(u=e&~u,u!==0&&(n=ce(u)))),n===0?0:t!==0&&t!==n&&!(t&l)&&(l=n&-n,u=t&-t,l>=u||l===32&&(u&4194176)!==0)?t:n}function An(a,t){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&t)===0}function vf(a,t){switch(a){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function is(){var a=_l;return _l<<=1,!(_l&4194176)&&(_l=128),a}function us(){var a=Ml;return Ml<<=1,!(Ml&62914560)&&(Ml=4194304),a}function Ki(a){for(var t=[],e=0;31>e;e++)t.push(a);return t}function zn(a,t){a.pendingLanes|=t,t!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function kf(a,t,e,n,l,i){var u=a.pendingLanes;a.pendingLanes=e,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=e,a.entangledLanes&=e,a.errorRecoveryDisabledLanes&=e,a.shellSuspendCounter=0;var r=a.entanglements,s=a.expirationTimes,o=a.hiddenUpdates;for(e=u&~e;0<e;){var p=31-Oa(e),k=1<<p;r[p]=0,s[p]=-1;var m=o[p];if(m!==null)for(o[p]=null,p=0;p<m.length;p++){var g=m[p];g!==null&&(g.lane&=-536870913)}e&=~k}n!==0&&rs(a,n,0),i!==0&&l===0&&a.tag!==0&&(a.suspendedLanes|=i&~(u&~t))}function rs(a,t,e){a.pendingLanes|=t,a.suspendedLanes&=~t;var n=31-Oa(t);a.entangledLanes|=t,a.entanglements[n]=a.entanglements[n]|1073741824|e&4194218}function ss(a,t){var e=a.entangledLanes|=t;for(a=a.entanglements;e;){var n=31-Oa(e),l=1<<n;l&t|a[n]&t&&(a[n]|=t),e&=~l}}function cs(a){return a&=-a,2<a?8<a?a&134217727?32:268435456:8:2}function os(){var a=G.p;return a!==0?a:(a=window.event,a===void 0?32:Bd(a.type))}function Sf(a,t){var e=G.p;try{return G.p=a,t()}finally{G.p=e}}var Ut=Math.random().toString(36).slice(2),xa="__reactFiber$"+Ut,ja="__reactProps$"+Ut,qe="__reactContainer$"+Ut,Ji="__reactEvents$"+Ut,wf="__reactListeners$"+Ut,Tf="__reactHandles$"+Ut,ds="__reactResources$"+Ut,En="__reactMarker$"+Ut;function Wi(a){delete a[xa],delete a[ja],delete a[Ji],delete a[wf],delete a[Tf]}function oe(a){var t=a[xa];if(t)return t;for(var e=a.parentNode;e;){if(t=e[qe]||e[xa]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(a=bd(a);a!==null;){if(e=a[xa])return e;a=bd(a)}return t}a=e,e=a.parentNode}return null}function Ce(a){if(a=a[xa]||a[qe]){var t=a.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return a}return null}function jn(a){var t=a.tag;if(t===5||t===26||t===27||t===6)return a.stateNode;throw Error(h(33))}function Ge(a){var t=a[ds];return t||(t=a[ds]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pa(a){a[En]=!0}var fs=new Set,ms={};function de(a,t){Ye(a,t),Ye(a+"Capture",t)}function Ye(a,t){for(ms[a]=t,a=0;a<t.length;a++)fs.add(t[a])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hs={},gs={};function Af(a){return Xi.call(gs,a)?!0:Xi.call(hs,a)?!1:xf.test(a)?gs[a]=!0:(hs[a]=!0,!1)}function Bl(a,t,e){if(Af(t))if(e===null)a.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":a.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){a.removeAttribute(t);return}}a.setAttribute(t,""+e)}}function Hl(a,t,e){if(e===null)a.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(t);return}a.setAttribute(t,""+e)}}function yt(a,t,e,n){if(n===null)a.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttributeNS(t,e,""+n)}}function Ca(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function ps(a){var t=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zf(a){var t=ps(a)?"checked":"value",e=Object.getOwnPropertyDescriptor(a.constructor.prototype,t),n=""+a[t];if(!a.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,i=e.set;return Object.defineProperty(a,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(a,t,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){a._valueTracker=null,delete a[t]}}}}function Ul(a){a._valueTracker||(a._valueTracker=zf(a))}function ys(a){if(!a)return!1;var t=a._valueTracker;if(!t)return!0;var e=t.getValue(),n="";return a&&(n=ps(a)?a.checked?"true":"false":a.value),a=n,a!==e?(t.setValue(a),!0):!1}function Rl(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var Ef=/[\n"\\]/g;function Ga(a){return a.replace(Ef,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $i(a,t,e,n,l,i,u,r){a.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?a.type=u:a.removeAttribute("type"),t!=null?u==="number"?(t===0&&a.value===""||a.value!=t)&&(a.value=""+Ca(t)):a.value!==""+Ca(t)&&(a.value=""+Ca(t)):u!=="submit"&&u!=="reset"||a.removeAttribute("value"),t!=null?Fi(a,u,Ca(t)):e!=null?Fi(a,u,Ca(e)):n!=null&&a.removeAttribute("value"),l==null&&i!=null&&(a.defaultChecked=!!i),l!=null&&(a.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?a.name=""+Ca(r):a.removeAttribute("name")}function bs(a,t,e,n,l,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(a.type=i),t!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;e=e!=null?""+Ca(e):"",t=t!=null?""+Ca(t):e,r||t===a.value||(a.value=t),a.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,a.checked=r?a.checked:!!n,a.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(a.name=u)}function Fi(a,t,e){t==="number"&&Rl(a.ownerDocument)===a||a.defaultValue===""+e||(a.defaultValue=""+e)}function Le(a,t,e,n){if(a=a.options,t){t={};for(var l=0;l<e.length;l++)t["$"+e[l]]=!0;for(e=0;e<a.length;e++)l=t.hasOwnProperty("$"+a[e].value),a[e].selected!==l&&(a[e].selected=l),l&&n&&(a[e].defaultSelected=!0)}else{for(e=""+Ca(e),t=null,l=0;l<a.length;l++){if(a[l].value===e){a[l].selected=!0,n&&(a[l].defaultSelected=!0);return}t!==null||a[l].disabled||(t=a[l])}t!==null&&(t.selected=!0)}}function vs(a,t,e){if(t!=null&&(t=""+Ca(t),t!==a.value&&(a.value=t),e==null)){a.defaultValue!==t&&(a.defaultValue=t);return}a.defaultValue=e!=null?""+Ca(e):""}function ks(a,t,e,n){if(t==null){if(n!=null){if(e!=null)throw Error(h(92));if(gt(n)){if(1<n.length)throw Error(h(93));n=n[0]}e=n}e==null&&(e=""),t=e}e=Ca(t),a.defaultValue=e,n=a.textContent,n===e&&n!==""&&n!==null&&(a.value=n)}function Ve(a,t){if(t){var e=a.firstChild;if(e&&e===a.lastChild&&e.nodeType===3){e.nodeValue=t;return}}a.textContent=t}var jf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ss(a,t,e){var n=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?a.setProperty(t,""):t==="float"?a.cssFloat="":a[t]="":n?a.setProperty(t,e):typeof e!="number"||e===0||jf.has(t)?t==="float"?a.cssFloat=e:a[t]=(""+e).trim():a[t]=e+"px"}function ws(a,t,e){if(t!=null&&typeof t!="object")throw Error(h(62));if(a=a.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?a.setProperty(n,""):n==="float"?a.cssFloat="":a[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&e[l]!==n&&Ss(a,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Ss(a,i,t[i])}function Ii(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Df=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_f=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(a){return _f.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var Pi=null;function au(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var Xe=null,Qe=null;function Ts(a){var t=Ce(a);if(t&&(a=t.stateNode)){var e=a[ja]||null;a:switch(a=t.stateNode,t.type){case"input":if($i(a,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=a;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Ga(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var n=e[t];if(n!==a&&n.form===a.form){var l=n[ja]||null;if(!l)throw Error(h(90));$i(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<e.length;t++)n=e[t],n.form===a.form&&ys(n)}break a;case"textarea":vs(a,e.value,e.defaultValue);break a;case"select":t=e.value,t!=null&&Le(a,!!e.multiple,t,!1)}}}var tu=!1;function xs(a,t,e){if(tu)return a(t,e);tu=!0;try{var n=a(t);return n}finally{if(tu=!1,(Xe!==null||Qe!==null)&&(ki(),Xe&&(t=Xe,a=Qe,Qe=Xe=null,Ts(t),a)))for(t=0;t<a.length;t++)Ts(a[t])}}function Dn(a,t){var e=a.stateNode;if(e===null)return null;var n=e[ja]||null;if(n===null)return null;e=n[t];a:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(a=a.type,n=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!n;break a;default:a=!1}if(a)return null;if(e&&typeof e!="function")throw Error(h(231,t,typeof e));return e}var eu=!1;if(pt)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){eu=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{eu=!1}var Rt=null,nu=null,ql=null;function As(){if(ql)return ql;var a,t=nu,e=t.length,n,l="value"in Rt?Rt.value:Rt.textContent,i=l.length;for(a=0;a<e&&t[a]===l[a];a++);var u=e-a;for(n=1;n<=u&&t[e-n]===l[i-n];n++);return ql=l.slice(a,1<n?1-n:void 0)}function Cl(a){var t=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&t===13&&(a=13)):a=t,a===10&&(a=13),32<=a||a===13?a:0}function Gl(){return!0}function zs(){return!1}function Da(a){function t(e,n,l,i,u){this._reactName=e,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in a)a.hasOwnProperty(r)&&(e=a[r],this[r]=e?e(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gl:zs,this.isPropagationStopped=zs,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),t}var fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Da(fe),Mn=V({},fe,{view:0,detail:0}),Mf=Da(Mn),lu,iu,On,Ll=V({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==On&&(On&&a.type==="mousemove"?(lu=a.screenX-On.screenX,iu=a.screenY-On.screenY):iu=lu=0,On=a),lu)},movementY:function(a){return"movementY"in a?a.movementY:iu}}),Es=Da(Ll),Of=V({},Ll,{dataTransfer:0}),Bf=Da(Of),Hf=V({},Mn,{relatedTarget:0}),uu=Da(Hf),Uf=V({},fe,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=Da(Uf),Nf=V({},fe,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),qf=Da(Nf),Cf=V({},fe,{data:0}),js=Da(Cf),Gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vf(a){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(a):(a=Lf[a])?!!t[a]:!1}function ru(){return Vf}var Xf=V({},Mn,{key:function(a){if(a.key){var t=Gf[a.key]||a.key;if(t!=="Unidentified")return t}return a.type==="keypress"?(a=Cl(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?Yf[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(a){return a.type==="keypress"?Cl(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Cl(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),Qf=Da(Xf),Zf=V({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=Da(Zf),Kf=V({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Jf=Da(Kf),Wf=V({},fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),$f=Da(Wf),Ff=V({},Ll,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),If=Da(Ff),Pf=V({},fe,{newState:0,oldState:0}),am=Da(Pf),tm=[9,13,27,32],su=pt&&"CompositionEvent"in window,Bn=null;pt&&"documentMode"in document&&(Bn=document.documentMode);var em=pt&&"TextEvent"in window&&!Bn,_s=pt&&(!su||Bn&&8<Bn&&11>=Bn),Ms=" ",Os=!1;function Bs(a,t){switch(a){case"keyup":return tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hs(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Ze=!1;function nm(a,t){switch(a){case"compositionend":return Hs(t);case"keypress":return t.which!==32?null:(Os=!0,Ms);case"textInput":return a=t.data,a===Ms&&Os?null:a;default:return null}}function lm(a,t){if(Ze)return a==="compositionend"||!su&&Bs(a,t)?(a=As(),ql=nu=Rt=null,Ze=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _s&&t.locale!=="ko"?null:t.data;default:return null}}var im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Us(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t==="input"?!!im[a.type]:t==="textarea"}function Rs(a,t,e,n){Xe?Qe?Qe.push(n):Qe=[n]:Xe=n,t=Ai(t,"onChange"),0<t.length&&(e=new Yl("onChange","change",null,e,n),a.push({event:e,listeners:t}))}var Hn=null,Un=null;function um(a){cd(a,0)}function Vl(a){var t=jn(a);if(ys(t))return a}function Ns(a,t){if(a==="change")return t}var qs=!1;if(pt){var cu;if(pt){var ou="oninput"in document;if(!ou){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),ou=typeof Cs.oninput=="function"}cu=ou}else cu=!1;qs=cu&&(!document.documentMode||9<document.documentMode)}function Gs(){Hn&&(Hn.detachEvent("onpropertychange",Ys),Un=Hn=null)}function Ys(a){if(a.propertyName==="value"&&Vl(Un)){var t=[];Rs(t,Un,a,au(a)),xs(um,t)}}function rm(a,t,e){a==="focusin"?(Gs(),Hn=t,Un=e,Hn.attachEvent("onpropertychange",Ys)):a==="focusout"&&Gs()}function sm(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Vl(Un)}function cm(a,t){if(a==="click")return Vl(t)}function om(a,t){if(a==="input"||a==="change")return Vl(t)}function dm(a,t){return a===t&&(a!==0||1/a===1/t)||a!==a&&t!==t}var Ba=typeof Object.is=="function"?Object.is:dm;function Rn(a,t){if(Ba(a,t))return!0;if(typeof a!="object"||a===null||typeof t!="object"||t===null)return!1;var e=Object.keys(a),n=Object.keys(t);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var l=e[n];if(!Xi.call(t,l)||!Ba(a[l],t[l]))return!1}return!0}function Ls(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Vs(a,t){var e=Ls(a);a=0;for(var n;e;){if(e.nodeType===3){if(n=a+e.textContent.length,a<=t&&n>=t)return{node:e,offset:t-a};a=n}a:{for(;e;){if(e.nextSibling){e=e.nextSibling;break a}e=e.parentNode}e=void 0}e=Ls(e)}}function Xs(a,t){return a&&t?a===t?!0:a&&a.nodeType===3?!1:t&&t.nodeType===3?Xs(a,t.parentNode):"contains"in a?a.contains(t):a.compareDocumentPosition?!!(a.compareDocumentPosition(t)&16):!1:!1}function Qs(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var t=Rl(a.document);t instanceof a.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)a=t.contentWindow;else break;t=Rl(a.document)}return t}function du(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t&&(t==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||t==="textarea"||a.contentEditable==="true")}function fm(a,t){var e=Qs(t);t=a.focusedElem;var n=a.selectionRange;if(e!==t&&t&&t.ownerDocument&&Xs(t.ownerDocument.documentElement,t)){if(n!==null&&du(t)){if(a=n.start,e=n.end,e===void 0&&(e=a),"selectionStart"in t)t.selectionStart=a,t.selectionEnd=Math.min(e,t.value.length);else if(e=(a=t.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(n.start,l);n=n.end===void 0?i:Math.min(n.end,l),!e.extend&&i>n&&(l=n,n=i,i=l),l=Vs(t,i);var u=Vs(t,n);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(a=a.createRange(),a.setStart(l.node,l.offset),e.removeAllRanges(),i>n?(e.addRange(a),e.extend(u.node,u.offset)):(a.setEnd(u.node,u.offset),e.addRange(a)))}}for(a=[],e=t;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<a.length;t++)e=a[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mm=pt&&"documentMode"in document&&11>=document.documentMode,Ke=null,fu=null,Nn=null,mu=!1;function Zs(a,t,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;mu||Ke==null||Ke!==Rl(n)||(n=Ke,"selectionStart"in n&&du(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Nn&&Rn(Nn,n)||(Nn=n,n=Ai(fu,"onSelect"),0<n.length&&(t=new Yl("onSelect","select",null,t,e),a.push({event:t,listeners:n}),t.target=Ke)))}function me(a,t){var e={};return e[a.toLowerCase()]=t.toLowerCase(),e["Webkit"+a]="webkit"+t,e["Moz"+a]="moz"+t,e}var Je={animationend:me("Animation","AnimationEnd"),animationiteration:me("Animation","AnimationIteration"),animationstart:me("Animation","AnimationStart"),transitionrun:me("Transition","TransitionRun"),transitionstart:me("Transition","TransitionStart"),transitioncancel:me("Transition","TransitionCancel"),transitionend:me("Transition","TransitionEnd")},hu={},Ks={};pt&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete Je.animationend.animation,delete Je.animationiteration.animation,delete Je.animationstart.animation),"TransitionEvent"in window||delete Je.transitionend.transition);function he(a){if(hu[a])return hu[a];if(!Je[a])return a;var t=Je[a],e;for(e in t)if(t.hasOwnProperty(e)&&e in Ks)return hu[a]=t[e];return a}var Js=he("animationend"),Ws=he("animationiteration"),$s=he("animationstart"),hm=he("transitionrun"),gm=he("transitionstart"),pm=he("transitioncancel"),Fs=he("transitionend"),Is=new Map,Ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function at(a,t){Is.set(a,t),de(t,[a])}var Ya=[],We=0,gu=0;function Xl(){for(var a=We,t=gu=We=0;t<a;){var e=Ya[t];Ya[t++]=null;var n=Ya[t];Ya[t++]=null;var l=Ya[t];Ya[t++]=null;var i=Ya[t];if(Ya[t++]=null,n!==null&&l!==null){var u=n.pending;u===null?l.next=l:(l.next=u.next,u.next=l),n.pending=l}i!==0&&ac(e,l,i)}}function Ql(a,t,e,n){Ya[We++]=a,Ya[We++]=t,Ya[We++]=e,Ya[We++]=n,gu|=n,a.lanes|=n,a=a.alternate,a!==null&&(a.lanes|=n)}function pu(a,t,e,n){return Ql(a,t,e,n),Zl(a)}function Nt(a,t){return Ql(a,null,null,t),Zl(a)}function ac(a,t,e){a.lanes|=e;var n=a.alternate;n!==null&&(n.lanes|=e);for(var l=!1,i=a.return;i!==null;)i.childLanes|=e,n=i.alternate,n!==null&&(n.childLanes|=e),i.tag===22&&(a=i.stateNode,a===null||a._visibility&1||(l=!0)),a=i,i=i.return;l&&t!==null&&a.tag===3&&(i=a.stateNode,l=31-Oa(e),i=i.hiddenUpdates,a=i[l],a===null?i[l]=[t]:a.push(t),t.lane=e|536870912)}function Zl(a){if(50<sl)throw sl=0,wr=null,Error(h(185));for(var t=a.return;t!==null;)a=t,t=a.return;return a.tag===3?a.stateNode:null}var $e={},tc=new WeakMap;function La(a,t){if(typeof a=="object"&&a!==null){var e=tc.get(a);return e!==void 0?e:(t={value:a,source:t,stack:B(t)},tc.set(a,t),t)}return{value:a,source:t,stack:B(t)}}var Fe=[],Ie=0,Kl=null,Jl=0,Va=[],Xa=0,ge=null,bt=1,vt="";function pe(a,t){Fe[Ie++]=Jl,Fe[Ie++]=Kl,Kl=a,Jl=t}function ec(a,t,e){Va[Xa++]=bt,Va[Xa++]=vt,Va[Xa++]=ge,ge=a;var n=bt;a=vt;var l=32-Oa(n)-1;n&=~(1<<l),e+=1;var i=32-Oa(t)+l;if(30<i){var u=l-l%5;i=(n&(1<<u)-1).toString(32),n>>=u,l-=u,bt=1<<32-Oa(t)+l|e<<l|n,vt=i+a}else bt=1<<i|e<<l|n,vt=a}function yu(a){a.return!==null&&(pe(a,1),ec(a,1,0))}function bu(a){for(;a===Kl;)Kl=Fe[--Ie],Fe[Ie]=null,Jl=Fe[--Ie],Fe[Ie]=null;for(;a===ge;)ge=Va[--Xa],Va[Xa]=null,vt=Va[--Xa],Va[Xa]=null,bt=Va[--Xa],Va[Xa]=null}var za=null,ka=null,Y=!1,tt=null,rt=!1,vu=Error(h(519));function ye(a){var t=Error(h(418,""));throw Gn(La(t,a)),vu}function nc(a){var t=a.stateNode,e=a.type,n=a.memoizedProps;switch(t[xa]=a,t[ja]=n,e){case"dialog":q("cancel",t),q("close",t);break;case"iframe":case"object":case"embed":q("load",t);break;case"video":case"audio":for(e=0;e<ol.length;e++)q(ol[e],t);break;case"source":q("error",t);break;case"img":case"image":case"link":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"input":q("invalid",t),bs(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ul(t);break;case"select":q("invalid",t);break;case"textarea":q("invalid",t),ks(t,n.value,n.defaultValue,n.children),Ul(t)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||n.suppressHydrationWarning===!0||md(t.textContent,e)?(n.popover!=null&&(q("beforetoggle",t),q("toggle",t)),n.onScroll!=null&&q("scroll",t),n.onScrollEnd!=null&&q("scrollend",t),n.onClick!=null&&(t.onclick=zi),t=!0):t=!1,t||ye(a)}function lc(a){for(za=a.return;za;)switch(za.tag){case 3:case 27:rt=!0;return;case 5:case 13:rt=!1;return;default:za=za.return}}function qn(a){if(a!==za)return!1;if(!Y)return lc(a),Y=!0,!1;var t=!1,e;if((e=a.tag!==3&&a.tag!==27)&&((e=a.tag===5)&&(e=a.type,e=!(e!=="form"&&e!=="button")||Cr(a.type,a.memoizedProps)),e=!e),e&&(t=!0),t&&ka&&ye(a),lc(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a:{for(a=a.nextSibling,t=0;a;){if(a.nodeType===8)if(e=a.data,e==="/$"){if(t===0){ka=nt(a.nextSibling);break a}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++;a=a.nextSibling}ka=null}}else ka=za?nt(a.stateNode.nextSibling):null;return!0}function Cn(){ka=za=null,Y=!1}function Gn(a){tt===null?tt=[a]:tt.push(a)}var Yn=Error(h(460)),ic=Error(h(474)),ku={then:function(){}};function uc(a){return a=a.status,a==="fulfilled"||a==="rejected"}function Wl(){}function rc(a,t,e){switch(e=a[e],e===void 0?a.push(t):e!==t&&(t.then(Wl,Wl),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw a=t.reason,a===Yn?Error(h(483)):a;default:if(typeof t.status=="string")t.then(Wl,Wl);else{if(a=J,a!==null&&100<a.shellSuspendCounter)throw Error(h(482));a=t,a.status="pending",a.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw a=t.reason,a===Yn?Error(h(483)):a}throw Ln=t,Yn}}var Ln=null;function sc(){if(Ln===null)throw Error(h(459));var a=Ln;return Ln=null,a}var Pe=null,Vn=0;function $l(a){var t=Vn;return Vn+=1,Pe===null&&(Pe=[]),rc(Pe,a,t)}function Xn(a,t){t=t.props.ref,a.ref=t!==void 0?t:null}function Fl(a,t){throw t.$$typeof===R?Error(h(525)):(a=Object.prototype.toString.call(t),Error(h(31,a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)))}function cc(a){var t=a._init;return t(a._payload)}function oc(a){function t(d,c){if(a){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function e(d,c){if(!a)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function n(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function l(d,c){return d=Wt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,a?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=33554434,c):f):(d.flags|=33554434,c)):(d.flags|=1048576,c)}function u(d){return a&&d.alternate===null&&(d.flags|=33554434),d}function r(d,c,f,b){return c===null||c.tag!==6?(c=hr(f,d.mode,b),c.return=d,c):(c=l(c,f),c.return=d,c)}function s(d,c,f,b){var w=f.type;return w===X?p(d,c,f.props.children,b,f.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ia&&cc(w)===c.type)?(c=l(c,f.props),Xn(c,f),c.return=d,c):(c=gi(f.type,f.key,f.props,null,d.mode,b),Xn(c,f),c.return=d,c)}function o(d,c,f,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=gr(f,d.mode,b),c.return=d,c):(c=l(c,f.children||[]),c.return=d,c)}function p(d,c,f,b,w){return c===null||c.tag!==7?(c=Ee(f,d.mode,b,w),c.return=d,c):(c=l(c,f),c.return=d,c)}function k(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=hr(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case O:return f=gi(c.type,c.key,c.props,null,d.mode,f),Xn(f,c),f.return=d,f;case ea:return c=gr(c,d.mode,f),c.return=d,c;case Ia:var b=c._init;return c=b(c._payload),k(d,c,f)}if(gt(c)||Pa(c))return c=Ee(c,d.mode,f,null),c.return=d,c;if(typeof c.then=="function")return k(d,$l(c),f);if(c.$$typeof===Ta)return k(d,fi(d,c),f);Fl(d,c)}return null}function m(d,c,f,b){var w=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return w!==null?null:r(d,c,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case O:return f.key===w?s(d,c,f,b):null;case ea:return f.key===w?o(d,c,f,b):null;case Ia:return w=f._init,f=w(f._payload),m(d,c,f,b)}if(gt(f)||Pa(f))return w!==null?null:p(d,c,f,b,null);if(typeof f.then=="function")return m(d,c,$l(f),b);if(f.$$typeof===Ta)return m(d,c,fi(d,f),b);Fl(d,f)}return null}function g(d,c,f,b,w){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(f)||null,r(c,d,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case O:return d=d.get(b.key===null?f:b.key)||null,s(c,d,b,w);case ea:return d=d.get(b.key===null?f:b.key)||null,o(c,d,b,w);case Ia:var U=b._init;return b=U(b._payload),g(d,c,f,b,w)}if(gt(b)||Pa(b))return d=d.get(f)||null,p(c,d,b,w,null);if(typeof b.then=="function")return g(d,c,f,$l(b),w);if(b.$$typeof===Ta)return g(d,c,f,fi(c,b),w);Fl(c,b)}return null}function T(d,c,f,b){for(var w=null,U=null,x=c,j=c=0,va=null;x!==null&&j<f.length;j++){x.index>j?(va=x,x=null):va=x.sibling;var L=m(d,x,f[j],b);if(L===null){x===null&&(x=va);break}a&&x&&L.alternate===null&&t(d,x),c=i(L,c,j),U===null?w=L:U.sibling=L,U=L,x=va}if(j===f.length)return e(d,x),Y&&pe(d,j),w;if(x===null){for(;j<f.length;j++)x=k(d,f[j],b),x!==null&&(c=i(x,c,j),U===null?w=x:U.sibling=x,U=x);return Y&&pe(d,j),w}for(x=n(x);j<f.length;j++)va=g(x,d,j,f[j],b),va!==null&&(a&&va.alternate!==null&&x.delete(va.key===null?j:va.key),c=i(va,c,j),U===null?w=va:U.sibling=va,U=va);return a&&x.forEach(function(ee){return t(d,ee)}),Y&&pe(d,j),w}function M(d,c,f,b){if(f==null)throw Error(h(151));for(var w=null,U=null,x=c,j=c=0,va=null,L=f.next();x!==null&&!L.done;j++,L=f.next()){x.index>j?(va=x,x=null):va=x.sibling;var ee=m(d,x,L.value,b);if(ee===null){x===null&&(x=va);break}a&&x&&ee.alternate===null&&t(d,x),c=i(ee,c,j),U===null?w=ee:U.sibling=ee,U=ee,x=va}if(L.done)return e(d,x),Y&&pe(d,j),w;if(x===null){for(;!L.done;j++,L=f.next())L=k(d,L.value,b),L!==null&&(c=i(L,c,j),U===null?w=L:U.sibling=L,U=L);return Y&&pe(d,j),w}for(x=n(x);!L.done;j++,L=f.next())L=g(x,d,j,L.value,b),L!==null&&(a&&L.alternate!==null&&x.delete(L.key===null?j:L.key),c=i(L,c,j),U===null?w=L:U.sibling=L,U=L);return a&&x.forEach(function(_h){return t(d,_h)}),Y&&pe(d,j),w}function ia(d,c,f,b){if(typeof f=="object"&&f!==null&&f.type===X&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case O:a:{for(var w=f.key;c!==null;){if(c.key===w){if(w=f.type,w===X){if(c.tag===7){e(d,c.sibling),b=l(c,f.props.children),b.return=d,d=b;break a}}else if(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ia&&cc(w)===c.type){e(d,c.sibling),b=l(c,f.props),Xn(b,f),b.return=d,d=b;break a}e(d,c);break}else t(d,c);c=c.sibling}f.type===X?(b=Ee(f.props.children,d.mode,b,f.key),b.return=d,d=b):(b=gi(f.type,f.key,f.props,null,d.mode,b),Xn(b,f),b.return=d,d=b)}return u(d);case ea:a:{for(w=f.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){e(d,c.sibling),b=l(c,f.children||[]),b.return=d,d=b;break a}else{e(d,c);break}else t(d,c);c=c.sibling}b=gr(f,d.mode,b),b.return=d,d=b}return u(d);case Ia:return w=f._init,f=w(f._payload),ia(d,c,f,b)}if(gt(f))return T(d,c,f,b);if(Pa(f)){if(w=Pa(f),typeof w!="function")throw Error(h(150));return f=w.call(f),M(d,c,f,b)}if(typeof f.then=="function")return ia(d,c,$l(f),b);if(f.$$typeof===Ta)return ia(d,c,fi(d,f),b);Fl(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,c!==null&&c.tag===6?(e(d,c.sibling),b=l(c,f),b.return=d,d=b):(e(d,c),b=hr(f,d.mode,b),b.return=d,d=b),u(d)):e(d,c)}return function(d,c,f,b){try{Vn=0;var w=ia(d,c,f,b);return Pe=null,w}catch(x){if(x===Yn)throw x;var U=Ja(29,x,null,d.mode);return U.lanes=b,U.return=d,U}finally{}}}var be=oc(!0),dc=oc(!1),an=lt(null),Il=lt(0);function fc(a,t){a=_t,F(Il,a),F(an,t),_t=a|t.baseLanes}function Su(){F(Il,_t),F(an,an.current)}function wu(){_t=Il.current,ga(an),ga(Il)}var Qa=lt(null),st=null;function qt(a){var t=a.alternate;F(ma,ma.current&1),F(Qa,a),st===null&&(t===null||an.current!==null||t.memoizedState!==null)&&(st=a)}function mc(a){if(a.tag===22){if(F(ma,ma.current),F(Qa,a),st===null){var t=a.alternate;t!==null&&t.memoizedState!==null&&(st=a)}}else Ct()}function Ct(){F(ma,ma.current),F(Qa,Qa.current)}function kt(a){ga(Qa),st===a&&(st=null),ga(ma)}var ma=lt(0);function Pl(a){for(var t=a;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ym=typeof AbortController<"u"?AbortController:function(){var a=[],t=this.signal={aborted:!1,addEventListener:function(e,n){a.push(n)}};this.abort=function(){t.aborted=!0,a.forEach(function(e){return e()})}},bm=v.unstable_scheduleCallback,vm=v.unstable_NormalPriority,ha={$$typeof:Ta,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new ym,data:new Map,refCount:0}}function Qn(a){a.refCount--,a.refCount===0&&bm(vm,function(){a.controller.abort()})}var Zn=null,xu=0,tn=0,en=null;function km(a,t){if(Zn===null){var e=Zn=[];xu=0,tn=_r(),en={status:"pending",value:void 0,then:function(n){e.push(n)}}}return xu++,t.then(hc,hc),t}function hc(){if(--xu===0&&Zn!==null){en!==null&&(en.status="fulfilled");var a=Zn;Zn=null,tn=0,en=null;for(var t=0;t<a.length;t++)(0,a[t])()}}function Sm(a,t){var e=[],n={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return a.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<e.length;l++)(0,e[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),n}var gc=D.S;D.S=function(a,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&km(a,t),gc!==null&&gc(a,t)};var ve=lt(null);function Au(){var a=ve.current;return a!==null?a:J.pooledCache}function ai(a,t){t===null?F(ve,ve.current):F(ve,t.pool)}function pc(){var a=Au();return a===null?null:{parent:ha._currentValue,pool:a}}var Gt=0,H=null,Q=null,oa=null,ti=!1,nn=!1,ke=!1,ei=0,Kn=0,ln=null,wm=0;function sa(){throw Error(h(321))}function zu(a,t){if(t===null)return!1;for(var e=0;e<t.length&&e<a.length;e++)if(!Ba(a[e],t[e]))return!1;return!0}function Eu(a,t,e,n,l,i){return Gt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=a===null||a.memoizedState===null?Se:Yt,ke=!1,i=e(n,l),ke=!1,nn&&(i=bc(t,e,n,l)),yc(a),i}function yc(a){D.H=ct;var t=Q!==null&&Q.next!==null;if(Gt=0,oa=Q=H=null,ti=!1,Kn=0,ln=null,t)throw Error(h(300));a===null||ya||(a=a.dependencies,a!==null&&di(a)&&(ya=!0))}function bc(a,t,e,n){H=a;var l=0;do{if(nn&&(ln=null),Kn=0,nn=!1,25<=l)throw Error(h(301));if(l+=1,oa=Q=null,a.updateQueue!=null){var i=a.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=we,i=t(e,n)}while(nn);return i}function Tm(){var a=D.H,t=a.useState()[0];return t=typeof t.then=="function"?Jn(t):t,a=a.useState()[0],(Q!==null?Q.memoizedState:null)!==a&&(H.flags|=1024),t}function ju(){var a=ei!==0;return ei=0,a}function Du(a,t,e){t.updateQueue=a.updateQueue,t.flags&=-2053,a.lanes&=~e}function _u(a){if(ti){for(a=a.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}ti=!1}Gt=0,oa=Q=H=null,nn=!1,Kn=ei=0,ln=null}function _a(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oa===null?H.memoizedState=oa=a:oa=oa.next=a,oa}function da(){if(Q===null){var a=H.alternate;a=a!==null?a.memoizedState:null}else a=Q.next;var t=oa===null?H.memoizedState:oa.next;if(t!==null)oa=t,Q=a;else{if(a===null)throw H.alternate===null?Error(h(467)):Error(h(310));Q=a,a={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},oa===null?H.memoizedState=oa=a:oa=oa.next=a}return oa}var ni;ni=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Jn(a){var t=Kn;return Kn+=1,ln===null&&(ln=[]),a=rc(ln,a,t),t=H,(oa===null?t.memoizedState:oa.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Se:Yt),a}function li(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return Jn(a);if(a.$$typeof===Ta)return Aa(a)}throw Error(h(438,String(a)))}function Mu(a){var t=null,e=H.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var n=H.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=ni(),H.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(a),n=0;n<a;n++)e[n]=Sn;return t.index++,e}function St(a,t){return typeof t=="function"?t(a):t}function ii(a){var t=da();return Ou(t,Q,a)}function Ou(a,t,e){var n=a.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var l=a.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}t.baseQueue=l=i,n.pending=null}if(i=a.baseState,l===null)a.memoizedState=i;else{t=l.next;var r=u=null,s=null,o=t,p=!1;do{var k=o.lane&-536870913;if(k!==o.lane?(C&k)===k:(Gt&k)===k){var m=o.revertLane;if(m===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),k===tn&&(p=!0);else if((Gt&m)===m){o=o.next,m===tn&&(p=!0);continue}else k={lane:0,revertLane:o.revertLane,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},s===null?(r=s=k,u=i):s=s.next=k,H.lanes|=m,$t|=m;k=o.action,ke&&e(i,k),i=o.hasEagerState?o.eagerState:e(i,k)}else m={lane:k,revertLane:o.revertLane,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},s===null?(r=s=m,u=i):s=s.next=m,H.lanes|=k,$t|=k;o=o.next}while(o!==null&&o!==t);if(s===null?u=i:s.next=r,!Ba(i,a.memoizedState)&&(ya=!0,p&&(e=en,e!==null)))throw e;a.memoizedState=i,a.baseState=u,a.baseQueue=s,n.lastRenderedState=i}return l===null&&(n.lanes=0),[a.memoizedState,n.dispatch]}function Bu(a){var t=da(),e=t.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=a;var n=e.dispatch,l=e.pending,i=t.memoizedState;if(l!==null){e.pending=null;var u=l=l.next;do i=a(i,u.action),u=u.next;while(u!==l);Ba(i,t.memoizedState)||(ya=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),e.lastRenderedState=i}return[i,n]}function vc(a,t,e){var n=H,l=da(),i=Y;if(i){if(e===void 0)throw Error(h(407));e=e()}else e=t();var u=!Ba((Q||l).memoizedState,e);if(u&&(l.memoizedState=e,ya=!0),l=l.queue,Ru(wc.bind(null,n,l,a),[a]),l.getSnapshot!==t||u||oa!==null&&oa.memoizedState.tag&1){if(n.flags|=2048,un(9,Sc.bind(null,n,l,e,t),{destroy:void 0},null),J===null)throw Error(h(349));i||Gt&60||kc(n,t,e)}return e}function kc(a,t,e){a.flags|=16384,a={getSnapshot:t,value:e},t=H.updateQueue,t===null?(t=ni(),H.updateQueue=t,t.stores=[a]):(e=t.stores,e===null?t.stores=[a]:e.push(a))}function Sc(a,t,e,n){t.value=e,t.getSnapshot=n,Tc(t)&&xc(a)}function wc(a,t,e){return e(function(){Tc(t)&&xc(a)})}function Tc(a){var t=a.getSnapshot;a=a.value;try{var e=t();return!Ba(a,e)}catch{return!0}}function xc(a){var t=Nt(a,2);t!==null&&Ea(t,a,2)}function Hu(a){var t=_a();if(typeof a=="function"){var e=a;if(a=e(),ke){Ht(!0);try{e()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=a,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:St,lastRenderedState:a},t}function Ac(a,t,e,n){return a.baseState=e,Ou(a,Q,typeof n=="function"?n:St)}function xm(a,t,e,n,l){if(si(a))throw Error(h(485));if(a=t.action,a!==null){var i={payload:l,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};D.T!==null?e(!0):i.isTransition=!1,n(i),e=t.pending,e===null?(i.next=t.pending=i,zc(t,i)):(i.next=e.next,t.pending=e.next=i)}}function zc(a,t){var e=t.action,n=t.payload,l=a.state;if(t.isTransition){var i=D.T,u={};D.T=u;try{var r=e(l,n),s=D.S;s!==null&&s(u,r),Ec(a,t,r)}catch(o){Uu(a,t,o)}finally{D.T=i}}else try{i=e(l,n),Ec(a,t,i)}catch(o){Uu(a,t,o)}}function Ec(a,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){jc(a,t,n)},function(n){return Uu(a,t,n)}):jc(a,t,e)}function jc(a,t,e){t.status="fulfilled",t.value=e,Dc(t),a.state=e,t=a.pending,t!==null&&(e=t.next,e===t?a.pending=null:(e=e.next,t.next=e,zc(a,e)))}function Uu(a,t,e){var n=a.pending;if(a.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=e,Dc(t),t=t.next;while(t!==n)}a.action=null}function Dc(a){a=a.listeners;for(var t=0;t<a.length;t++)(0,a[t])()}function _c(a,t){return t}function Mc(a,t){if(Y){var e=J.formState;if(e!==null){a:{var n=H;if(Y){if(ka){t:{for(var l=ka,i=rt;l.nodeType!==8;){if(!i){l=null;break t}if(l=nt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){ka=nt(l.nextSibling),n=l.data==="F!";break a}}ye(n)}n=!1}n&&(t=e[0])}}return e=_a(),e.memoizedState=e.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_c,lastRenderedState:t},e.queue=n,e=Wc.bind(null,H,n),n.dispatch=e,n=Hu(!1),i=Yu.bind(null,H,!1,n.queue),n=_a(),l={state:t,dispatch:null,action:a,pending:null},n.queue=l,e=xm.bind(null,H,l,i,e),l.dispatch=e,n.memoizedState=a,[t,e,!1]}function Oc(a){var t=da();return Bc(t,Q,a)}function Bc(a,t,e){t=Ou(a,t,_c)[0],a=ii(St)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Jn(t):t;var n=da(),l=n.queue,i=l.dispatch;return e!==n.memoizedState&&(H.flags|=2048,un(9,Am.bind(null,l,e),{destroy:void 0},null)),[t,i,a]}function Am(a,t){a.action=t}function Hc(a){var t=da(),e=Q;if(e!==null)return Bc(t,e,a);da(),t=t.memoizedState,e=da();var n=e.queue.dispatch;return e.memoizedState=a,[t,n,!1]}function un(a,t,e,n){return a={tag:a,create:t,inst:e,deps:n,next:null},t=H.updateQueue,t===null&&(t=ni(),H.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=a.next=a:(n=e.next,e.next=a,a.next=n,t.lastEffect=a),a}function Uc(){return da().memoizedState}function ui(a,t,e,n){var l=_a();H.flags|=a,l.memoizedState=un(1|t,e,{destroy:void 0},n===void 0?null:n)}function ri(a,t,e,n){var l=da();n=n===void 0?null:n;var i=l.memoizedState.inst;Q!==null&&n!==null&&zu(n,Q.memoizedState.deps)?l.memoizedState=un(t,e,i,n):(H.flags|=a,l.memoizedState=un(1|t,e,i,n))}function Rc(a,t){ui(8390656,8,a,t)}function Ru(a,t){ri(2048,8,a,t)}function Nc(a,t){return ri(4,2,a,t)}function qc(a,t){return ri(4,4,a,t)}function Cc(a,t){if(typeof t=="function"){a=a();var e=t(a);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return a=a(),t.current=a,function(){t.current=null}}function Gc(a,t,e){e=e!=null?e.concat([a]):null,ri(4,4,Cc.bind(null,t,a),e)}function Nu(){}function Yc(a,t){var e=da();t=t===void 0?null:t;var n=e.memoizedState;return t!==null&&zu(t,n[1])?n[0]:(e.memoizedState=[a,t],a)}function Lc(a,t){var e=da();t=t===void 0?null:t;var n=e.memoizedState;if(t!==null&&zu(t,n[1]))return n[0];if(n=a(),ke){Ht(!0);try{a()}finally{Ht(!1)}}return e.memoizedState=[n,t],n}function qu(a,t,e){return e===void 0||Gt&1073741824?a.memoizedState=t:(a.memoizedState=e,a=Qo(),H.lanes|=a,$t|=a,e)}function Vc(a,t,e,n){return Ba(e,t)?e:an.current!==null?(a=qu(a,e,n),Ba(a,t)||(ya=!0),a):Gt&42?(a=Qo(),H.lanes|=a,$t|=a,t):(ya=!0,a.memoizedState=e)}function Xc(a,t,e,n,l){var i=G.p;G.p=i!==0&&8>i?i:8;var u=D.T,r={};D.T=r,Yu(a,!1,t,e);try{var s=l(),o=D.S;if(o!==null&&o(r,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=Sm(s,n);Wn(a,t,p,Na(a))}else Wn(a,t,n,Na(a))}catch(k){Wn(a,t,{then:function(){},status:"rejected",reason:k},Na())}finally{G.p=i,D.T=u}}function zm(){}function Cu(a,t,e,n){if(a.tag!==5)throw Error(h(476));var l=Qc(a).queue;Xc(a,l,t,qa,e===null?zm:function(){return Zc(a),e(n)})}function Qc(a){var t=a.memoizedState;if(t!==null)return t;t={memoizedState:qa,baseState:qa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:St,lastRenderedState:qa},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:St,lastRenderedState:e},next:null},a.memoizedState=t,a=a.alternate,a!==null&&(a.memoizedState=t),t}function Zc(a){var t=Qc(a).next.queue;Wn(a,t,{},Na())}function Gu(){return Aa(gl)}function Kc(){return da().memoizedState}function Jc(){return da().memoizedState}function Em(a){for(var t=a.return;t!==null;){switch(t.tag){case 24:case 3:var e=Na();a=Xt(e);var n=Qt(t,a,e);n!==null&&(Ea(n,t,e),In(n,t,e)),t={cache:Tu()},a.payload=t;return}t=t.return}}function jm(a,t,e){var n=Na();e={lane:n,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},si(a)?$c(t,e):(e=pu(a,t,e,n),e!==null&&(Ea(e,a,n),Fc(e,t,n)))}function Wc(a,t,e){var n=Na();Wn(a,t,e,n)}function Wn(a,t,e,n){var l={lane:n,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(si(a))$c(t,l);else{var i=a.alternate;if(a.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,r=i(u,e);if(l.hasEagerState=!0,l.eagerState=r,Ba(r,u))return Ql(a,t,l,0),J===null&&Xl(),!1}catch{}finally{}if(e=pu(a,t,l,n),e!==null)return Ea(e,a,n),Fc(e,t,n),!0}return!1}function Yu(a,t,e,n){if(n={lane:2,revertLane:_r(),action:n,hasEagerState:!1,eagerState:null,next:null},si(a)){if(t)throw Error(h(479))}else t=pu(a,e,n,2),t!==null&&Ea(t,a,2)}function si(a){var t=a.alternate;return a===H||t!==null&&t===H}function $c(a,t){nn=ti=!0;var e=a.pending;e===null?t.next=t:(t.next=e.next,e.next=t),a.pending=t}function Fc(a,t,e){if(e&4194176){var n=t.lanes;n&=a.pendingLanes,e|=n,t.lanes=e,ss(a,e)}}var ct={readContext:Aa,use:li,useCallback:sa,useContext:sa,useEffect:sa,useImperativeHandle:sa,useLayoutEffect:sa,useInsertionEffect:sa,useMemo:sa,useReducer:sa,useRef:sa,useState:sa,useDebugValue:sa,useDeferredValue:sa,useTransition:sa,useSyncExternalStore:sa,useId:sa};ct.useCacheRefresh=sa,ct.useMemoCache=sa,ct.useHostTransitionStatus=sa,ct.useFormState=sa,ct.useActionState=sa,ct.useOptimistic=sa;var Se={readContext:Aa,use:li,useCallback:function(a,t){return _a().memoizedState=[a,t===void 0?null:t],a},useContext:Aa,useEffect:Rc,useImperativeHandle:function(a,t,e){e=e!=null?e.concat([a]):null,ui(4194308,4,Cc.bind(null,t,a),e)},useLayoutEffect:function(a,t){return ui(4194308,4,a,t)},useInsertionEffect:function(a,t){ui(4,2,a,t)},useMemo:function(a,t){var e=_a();t=t===void 0?null:t;var n=a();if(ke){Ht(!0);try{a()}finally{Ht(!1)}}return e.memoizedState=[n,t],n},useReducer:function(a,t,e){var n=_a();if(e!==void 0){var l=e(t);if(ke){Ht(!0);try{e(t)}finally{Ht(!1)}}}else l=t;return n.memoizedState=n.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},n.queue=a,a=a.dispatch=jm.bind(null,H,a),[n.memoizedState,a]},useRef:function(a){var t=_a();return a={current:a},t.memoizedState=a},useState:function(a){a=Hu(a);var t=a.queue,e=Wc.bind(null,H,t);return t.dispatch=e,[a.memoizedState,e]},useDebugValue:Nu,useDeferredValue:function(a,t){var e=_a();return qu(e,a,t)},useTransition:function(){var a=Hu(!1);return a=Xc.bind(null,H,a.queue,!0,!1),_a().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,t,e){var n=H,l=_a();if(Y){if(e===void 0)throw Error(h(407));e=e()}else{if(e=t(),J===null)throw Error(h(349));C&60||kc(n,t,e)}l.memoizedState=e;var i={value:e,getSnapshot:t};return l.queue=i,Rc(wc.bind(null,n,i,a),[a]),n.flags|=2048,un(9,Sc.bind(null,n,i,e,t),{destroy:void 0},null),e},useId:function(){var a=_a(),t=J.identifierPrefix;if(Y){var e=vt,n=bt;e=(n&~(1<<32-Oa(n)-1)).toString(32)+e,t=":"+t+"R"+e,e=ei++,0<e&&(t+="H"+e.toString(32)),t+=":"}else e=wm++,t=":"+t+"r"+e.toString(32)+":";return a.memoizedState=t},useCacheRefresh:function(){return _a().memoizedState=Em.bind(null,H)}};Se.useMemoCache=Mu,Se.useHostTransitionStatus=Gu,Se.useFormState=Mc,Se.useActionState=Mc,Se.useOptimistic=function(a){var t=_a();t.memoizedState=t.baseState=a;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=Yu.bind(null,H,!0,e),e.dispatch=t,[a,t]};var Yt={readContext:Aa,use:li,useCallback:Yc,useContext:Aa,useEffect:Ru,useImperativeHandle:Gc,useInsertionEffect:Nc,useLayoutEffect:qc,useMemo:Lc,useReducer:ii,useRef:Uc,useState:function(){return ii(St)},useDebugValue:Nu,useDeferredValue:function(a,t){var e=da();return Vc(e,Q.memoizedState,a,t)},useTransition:function(){var a=ii(St)[0],t=da().memoizedState;return[typeof a=="boolean"?a:Jn(a),t]},useSyncExternalStore:vc,useId:Kc};Yt.useCacheRefresh=Jc,Yt.useMemoCache=Mu,Yt.useHostTransitionStatus=Gu,Yt.useFormState=Oc,Yt.useActionState=Oc,Yt.useOptimistic=function(a,t){var e=da();return Ac(e,Q,a,t)};var we={readContext:Aa,use:li,useCallback:Yc,useContext:Aa,useEffect:Ru,useImperativeHandle:Gc,useInsertionEffect:Nc,useLayoutEffect:qc,useMemo:Lc,useReducer:Bu,useRef:Uc,useState:function(){return Bu(St)},useDebugValue:Nu,useDeferredValue:function(a,t){var e=da();return Q===null?qu(e,a,t):Vc(e,Q.memoizedState,a,t)},useTransition:function(){var a=Bu(St)[0],t=da().memoizedState;return[typeof a=="boolean"?a:Jn(a),t]},useSyncExternalStore:vc,useId:Kc};we.useCacheRefresh=Jc,we.useMemoCache=Mu,we.useHostTransitionStatus=Gu,we.useFormState=Hc,we.useActionState=Hc,we.useOptimistic=function(a,t){var e=da();return Q!==null?Ac(e,Q,a,t):(e.baseState=a,[a,e.queue.dispatch])};function Lu(a,t,e,n){t=a.memoizedState,e=e(n,t),e=e==null?t:V({},t,e),a.memoizedState=e,a.lanes===0&&(a.updateQueue.baseState=e)}var Vu={isMounted:function(a){return(a=a._reactInternals)?_(a)===a:!1},enqueueSetState:function(a,t,e){a=a._reactInternals;var n=Na(),l=Xt(n);l.payload=t,e!=null&&(l.callback=e),t=Qt(a,l,n),t!==null&&(Ea(t,a,n),In(t,a,n))},enqueueReplaceState:function(a,t,e){a=a._reactInternals;var n=Na(),l=Xt(n);l.tag=1,l.payload=t,e!=null&&(l.callback=e),t=Qt(a,l,n),t!==null&&(Ea(t,a,n),In(t,a,n))},enqueueForceUpdate:function(a,t){a=a._reactInternals;var e=Na(),n=Xt(e);n.tag=2,t!=null&&(n.callback=t),t=Qt(a,n,e),t!==null&&(Ea(t,a,e),In(t,a,e))}};function Ic(a,t,e,n,l,i,u){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(n,i,u):t.prototype&&t.prototype.isPureReactComponent?!Rn(e,n)||!Rn(l,i):!0}function Pc(a,t,e,n){a=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,n),t.state!==a&&Vu.enqueueReplaceState(t,t.state,null)}function Te(a,t){var e=t;if("ref"in t){e={};for(var n in t)n!=="ref"&&(e[n]=t[n])}if(a=a.defaultProps){e===t&&(e=V({},e));for(var l in a)e[l]===void 0&&(e[l]=a[l])}return e}var ci=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)};function ao(a){ci(a)}function to(a){console.error(a)}function eo(a){ci(a)}function oi(a,t){try{var e=a.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function no(a,t,e){try{var n=a.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xu(a,t,e){return e=Xt(e),e.tag=3,e.payload={element:null},e.callback=function(){oi(a,t)},e}function lo(a){return a=Xt(a),a.tag=3,a}function io(a,t,e,n){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;a.payload=function(){return l(i)},a.callback=function(){no(t,e,n)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(a.callback=function(){no(t,e,n),typeof l!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Dm(a,t,e,n,l){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=e.alternate,t!==null&&Fn(t,e,l,!0),e=Qa.current,e!==null){switch(e.tag){case 13:return st===null?Ar():e.alternate===null&&la===0&&(la=3),e.flags&=-257,e.flags|=65536,e.lanes=l,n===ku?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([n]):t.add(n),Er(a,n,l)),!1;case 22:return e.flags|=65536,n===ku?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([n]):e.add(n)),Er(a,n,l)),!1}throw Error(h(435,e.tag))}return Er(a,n,l),Ar(),!1}if(Y)return t=Qa.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==vu&&(a=Error(h(422),{cause:n}),Gn(La(a,e)))):(n!==vu&&(t=Error(h(423),{cause:n}),Gn(La(t,e))),a=a.current.alternate,a.flags|=65536,l&=-l,a.lanes|=l,n=La(n,e),l=Xu(a.stateNode,n,l),ir(a,l),la!==4&&(la=2)),!1;var i=Error(h(520),{cause:n});if(i=La(i,e),ul===null?ul=[i]:ul.push(i),la!==4&&(la=2),t===null)return!0;n=La(n,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,a=l&-l,e.lanes|=a,a=Xu(e.stateNode,n,a),ir(e,a),!1;case 1:if(t=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ft===null||!Ft.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=lo(l),io(l,a,e,n),ir(e,l),!1}e=e.return}while(e!==null);return!1}var uo=Error(h(461)),ya=!1;function Sa(a,t,e,n){t.child=a===null?dc(t,null,e,n):be(t,a.child,e,n)}function ro(a,t,e,n,l){e=e.render;var i=t.ref;if("ref"in n){var u={};for(var r in n)r!=="ref"&&(u[r]=n[r])}else u=n;return Ae(t),n=Eu(a,t,e,u,i,l),r=ju(),a!==null&&!ya?(Du(a,t,l),wt(a,t,l)):(Y&&r&&yu(t),t.flags|=1,Sa(a,t,n,l),t.child)}function so(a,t,e,n,l){if(a===null){var i=e.type;return typeof i=="function"&&!mr(i)&&i.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=i,co(a,t,i,n,l)):(a=gi(e.type,null,n,t,t.mode,l),a.ref=t.ref,a.return=t,t.child=a)}if(i=a.child,!Pu(a,l)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Rn,e(u,n)&&a.ref===t.ref)return wt(a,t,l)}return t.flags|=1,a=Wt(i,n),a.ref=t.ref,a.return=t,t.child=a}function co(a,t,e,n,l){if(a!==null){var i=a.memoizedProps;if(Rn(i,n)&&a.ref===t.ref)if(ya=!1,t.pendingProps=n=i,Pu(a,l))a.flags&131072&&(ya=!0);else return t.lanes=a.lanes,wt(a,t,l)}return Qu(a,t,e,n,l)}function oo(a,t,e){var n=t.pendingProps,l=n.children,i=(t.stateNode._pendingVisibility&2)!==0,u=a!==null?a.memoizedState:null;if($n(a,t),n.mode==="hidden"||i){if(t.flags&128){if(n=u!==null?u.baseLanes|e:e,a!==null){for(l=t.child=a.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;t.childLanes=i&~n}else t.childLanes=0,t.child=null;return fo(a,t,n,e)}if(e&536870912)t.memoizedState={baseLanes:0,cachePool:null},a!==null&&ai(t,u!==null?u.cachePool:null),u!==null?fc(t,u):Su(),mc(t);else return t.lanes=t.childLanes=536870912,fo(a,t,u!==null?u.baseLanes|e:e,e)}else u!==null?(ai(t,u.cachePool),fc(t,u),Ct(),t.memoizedState=null):(a!==null&&ai(t,null),Su(),Ct());return Sa(a,t,l,e),t.child}function fo(a,t,e,n){var l=Au();return l=l===null?null:{parent:ha._currentValue,pool:l},t.memoizedState={baseLanes:e,cachePool:l},a!==null&&ai(t,null),Su(),mc(t),a!==null&&Fn(a,t,n,!0),null}function $n(a,t){var e=t.ref;if(e===null)a!==null&&a.ref!==null&&(t.flags|=2097664);else{if(typeof e!="function"&&typeof e!="object")throw Error(h(284));(a===null||a.ref!==e)&&(t.flags|=2097664)}}function Qu(a,t,e,n,l){return Ae(t),e=Eu(a,t,e,n,void 0,l),n=ju(),a!==null&&!ya?(Du(a,t,l),wt(a,t,l)):(Y&&n&&yu(t),t.flags|=1,Sa(a,t,e,l),t.child)}function mo(a,t,e,n,l,i){return Ae(t),t.updateQueue=null,e=bc(t,n,e,l),yc(a),n=ju(),a!==null&&!ya?(Du(a,t,i),wt(a,t,i)):(Y&&n&&yu(t),t.flags|=1,Sa(a,t,e,i),t.child)}function ho(a,t,e,n,l){if(Ae(t),t.stateNode===null){var i=$e,u=e.contextType;typeof u=="object"&&u!==null&&(i=Aa(u)),i=new e(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},nr(t),u=e.contextType,i.context=typeof u=="object"&&u!==null?Aa(u):$e,i.state=t.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(Lu(t,e,u,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Vu.enqueueReplaceState(i,i.state,null),al(t,n,i,l),Pn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(a===null){i=t.stateNode;var r=t.memoizedProps,s=Te(e,r);i.props=s;var o=i.context,p=e.contextType;u=$e,typeof p=="object"&&p!==null&&(u=Aa(p));var k=e.getDerivedStateFromProps;p=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||o!==u)&&Pc(t,i,n,u),Vt=!1;var m=t.memoizedState;i.state=m,al(t,n,i,l),Pn(),o=t.memoizedState,r||m!==o||Vt?(typeof k=="function"&&(Lu(t,e,k,n),o=t.memoizedState),(s=Vt||Ic(t,e,s,n,m,o,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=o),i.props=n,i.state=o,i.context=u,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,lr(a,t),u=t.memoizedProps,p=Te(e,u),i.props=p,k=t.pendingProps,m=i.context,o=e.contextType,s=$e,typeof o=="object"&&o!==null&&(s=Aa(o)),r=e.getDerivedStateFromProps,(o=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==k||m!==s)&&Pc(t,i,n,s),Vt=!1,m=t.memoizedState,i.state=m,al(t,n,i,l),Pn();var g=t.memoizedState;u!==k||m!==g||Vt||a!==null&&a.dependencies!==null&&di(a.dependencies)?(typeof r=="function"&&(Lu(t,e,r,n),g=t.memoizedState),(p=Vt||Ic(t,e,p,n,m,g,s)||a!==null&&a.dependencies!==null&&di(a.dependencies))?(o||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,g,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===a.memoizedProps&&m===a.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===a.memoizedProps&&m===a.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),i.props=n,i.state=g,i.context=s,n=p):(typeof i.componentDidUpdate!="function"||u===a.memoizedProps&&m===a.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===a.memoizedProps&&m===a.memoizedState||(t.flags|=1024),n=!1)}return i=n,$n(a,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,a!==null&&n?(t.child=be(t,a.child,null,l),t.child=be(t,null,e,l)):Sa(a,t,e,l),t.memoizedState=i.state,a=t.child):a=wt(a,t,l),a}function go(a,t,e,n){return Cn(),t.flags|=256,Sa(a,t,e,n),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Ku(a){return{baseLanes:a,cachePool:pc()}}function Ju(a,t,e){return a=a!==null?a.childLanes&~e:0,t&&(a|=Wa),a}function po(a,t,e){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=a!==null&&a.memoizedState===null?!1:(ma.current&2)!==0),u&&(l=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,a===null){if(Y){if(l?qt(t):Ct(),Y){var r=ka,s;if(s=r){a:{for(s=r,r=rt;s.nodeType!==8;){if(!r){r=null;break a}if(s=nt(s.nextSibling),s===null){r=null;break a}}r=s}r!==null?(t.memoizedState={dehydrated:r,treeContext:ge!==null?{id:bt,overflow:vt}:null,retryLane:536870912},s=Ja(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,za=t,ka=null,s=!0):s=!1}s||ye(t)}if(r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return r.data==="$!"?t.lanes=16:t.lanes=536870912,null;kt(t)}return r=n.children,n=n.fallback,l?(Ct(),l=t.mode,r=$u({mode:"hidden",children:r},l),n=Ee(n,l,e,null),r.return=t,n.return=t,r.sibling=n,t.child=r,l=t.child,l.memoizedState=Ku(e),l.childLanes=Ju(a,u,e),t.memoizedState=Zu,n):(qt(t),Wu(t,r))}if(s=a.memoizedState,s!==null&&(r=s.dehydrated,r!==null)){if(i)t.flags&256?(qt(t),t.flags&=-257,t=Fu(a,t,e)):t.memoizedState!==null?(Ct(),t.child=a.child,t.flags|=128,t=null):(Ct(),l=n.fallback,r=t.mode,n=$u({mode:"visible",children:n.children},r),l=Ee(l,r,e,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,be(t,a.child,null,e),n=t.child,n.memoizedState=Ku(e),n.childLanes=Ju(a,u,e),t.memoizedState=Zu,t=l);else if(qt(t),r.data==="$!"){if(u=r.nextSibling&&r.nextSibling.dataset,u)var o=u.dgst;u=o,n=Error(h(419)),n.stack="",n.digest=u,Gn({value:n,source:null,stack:null}),t=Fu(a,t,e)}else if(ya||Fn(a,t,e,!1),u=(e&a.childLanes)!==0,ya||u){if(u=J,u!==null){if(n=e&-e,n&42)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=n&(u.suspendedLanes|e)?0:n,n!==0&&n!==s.retryLane)throw s.retryLane=n,Nt(a,n),Ea(u,a,n),uo}r.data==="$?"||Ar(),t=Fu(a,t,e)}else r.data==="$?"?(t.flags|=128,t.child=a.child,t=Xm.bind(null,a),r._reactRetry=t,t=null):(a=s.treeContext,ka=nt(r.nextSibling),za=t,Y=!0,tt=null,rt=!1,a!==null&&(Va[Xa++]=bt,Va[Xa++]=vt,Va[Xa++]=ge,bt=a.id,vt=a.overflow,ge=t),t=Wu(t,n.children),t.flags|=4096);return t}return l?(Ct(),l=n.fallback,r=t.mode,s=a.child,o=s.sibling,n=Wt(s,{mode:"hidden",children:n.children}),n.subtreeFlags=s.subtreeFlags&31457280,o!==null?l=Wt(o,l):(l=Ee(l,r,e,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,r=a.child.memoizedState,r===null?r=Ku(e):(s=r.cachePool,s!==null?(o=ha._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=pc(),r={baseLanes:r.baseLanes|e,cachePool:s}),l.memoizedState=r,l.childLanes=Ju(a,u,e),t.memoizedState=Zu,n):(qt(t),e=a.child,a=e.sibling,e=Wt(e,{mode:"visible",children:n.children}),e.return=t,e.sibling=null,a!==null&&(u=t.deletions,u===null?(t.deletions=[a],t.flags|=16):u.push(a)),t.child=e,t.memoizedState=null,e)}function Wu(a,t){return t=$u({mode:"visible",children:t},a.mode),t.return=a,a.child=t}function $u(a,t){return Lo(a,t,0,null)}function Fu(a,t,e){return be(t,a.child,null,e),a=Wu(t,t.pendingProps.children),a.flags|=2,t.memoizedState=null,a}function yo(a,t,e){a.lanes|=t;var n=a.alternate;n!==null&&(n.lanes|=t),tr(a.return,t,e)}function Iu(a,t,e,n,l){var i=a.memoizedState;i===null?a.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=e,i.tailMode=l)}function bo(a,t,e){var n=t.pendingProps,l=n.revealOrder,i=n.tail;if(Sa(a,t,n.children,e),n=ma.current,n&2)n=n&1|2,t.flags|=128;else{if(a!==null&&a.flags&128)a:for(a=t.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&yo(a,e,t);else if(a.tag===19)yo(a,e,t);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break a;for(;a.sibling===null;){if(a.return===null||a.return===t)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}n&=1}switch(F(ma,n),l){case"forwards":for(e=t.child,l=null;e!==null;)a=e.alternate,a!==null&&Pl(a)===null&&(l=e),e=e.sibling;e=l,e===null?(l=t.child,t.child=null):(l=e.sibling,e.sibling=null),Iu(t,!1,l,e,i);break;case"backwards":for(e=null,l=t.child,t.child=null;l!==null;){if(a=l.alternate,a!==null&&Pl(a)===null){t.child=l;break}a=l.sibling,l.sibling=e,e=l,l=a}Iu(t,!0,e,null,i);break;case"together":Iu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wt(a,t,e){if(a!==null&&(t.dependencies=a.dependencies),$t|=t.lanes,!(e&t.childLanes))if(a!==null){if(Fn(a,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(a!==null&&t.child!==a.child)throw Error(h(153));if(t.child!==null){for(a=t.child,e=Wt(a,a.pendingProps),t.child=e,e.return=t;a.sibling!==null;)a=a.sibling,e=e.sibling=Wt(a,a.pendingProps),e.return=t;e.sibling=null}return t.child}function Pu(a,t){return a.lanes&t?!0:(a=a.dependencies,!!(a!==null&&di(a)))}function _m(a,t,e){switch(t.tag){case 3:El(t,t.stateNode.containerInfo),Lt(t,ha,a.memoizedState.cache),Cn();break;case 27:case 5:Vi(t);break;case 4:El(t,t.stateNode.containerInfo);break;case 10:Lt(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(qt(t),t.flags|=128,null):e&t.child.childLanes?po(a,t,e):(qt(t),a=wt(a,t,e),a!==null?a.sibling:null);qt(t);break;case 19:var l=(a.flags&128)!==0;if(n=(e&t.childLanes)!==0,n||(Fn(a,t,e,!1),n=(e&t.childLanes)!==0),l){if(n)return bo(a,t,e);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(ma,ma.current),n)break;return null;case 22:case 23:return t.lanes=0,oo(a,t,e);case 24:Lt(t,ha,a.memoizedState.cache)}return wt(a,t,e)}function vo(a,t,e){if(a!==null)if(a.memoizedProps!==t.pendingProps)ya=!0;else{if(!Pu(a,e)&&!(t.flags&128))return ya=!1,_m(a,t,e);ya=!!(a.flags&131072)}else ya=!1,Y&&t.flags&1048576&&ec(t,Jl,t.index);switch(t.lanes=0,t.tag){case 16:a:{a=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")mr(n)?(a=Te(n,a),t.tag=1,t=ho(null,t,n,a,e)):(t.tag=0,t=Qu(null,t,n,a,e));else{if(n!=null){if(l=n.$$typeof,l===Fa){t.tag=11,t=ro(null,t,n,a,e);break a}else if(l===Be){t.tag=14,t=so(null,t,n,a,e);break a}}throw t=He(n)||n,Error(h(306,t,""))}}return t;case 0:return Qu(a,t,t.type,t.pendingProps,e);case 1:return n=t.type,l=Te(n,t.pendingProps),ho(a,t,n,l,e);case 3:a:{if(El(t,t.stateNode.containerInfo),a===null)throw Error(h(387));var i=t.pendingProps;l=t.memoizedState,n=l.element,lr(a,t),al(t,i,null,e);var u=t.memoizedState;if(i=u.cache,Lt(t,ha,i),i!==l.cache&&er(t,[ha],e,!0),Pn(),i=u.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=go(a,t,i,e);break a}else if(i!==n){n=La(Error(h(424)),t),Gn(n),t=go(a,t,i,e);break a}else for(ka=nt(t.stateNode.containerInfo.firstChild),za=t,Y=!0,tt=null,rt=!0,e=dc(t,null,i,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Cn(),i===n){t=wt(a,t,e);break a}Sa(a,t,i,e)}t=t.child}return t;case 26:return $n(a,t),a===null?(e=wd(t.type,null,t.pendingProps,null))?t.memoizedState=e:Y||(e=t.type,a=t.pendingProps,n=Ei(Bt.current).createElement(e),n[xa]=t,n[ja]=a,wa(n,e,a),pa(n),t.stateNode=n):t.memoizedState=wd(t.type,a.memoizedProps,t.pendingProps,a.memoizedState),null;case 27:return Vi(t),a===null&&Y&&(n=t.stateNode=vd(t.type,t.pendingProps,Bt.current),za=t,rt=!0,ka=nt(n.firstChild)),n=t.pendingProps.children,a!==null||Y?Sa(a,t,n,e):t.child=be(t,null,n,e),$n(a,t),t.child;case 5:return a===null&&Y&&((l=n=ka)&&(n=uh(n,t.type,t.pendingProps,rt),n!==null?(t.stateNode=n,za=t,ka=nt(n.firstChild),rt=!1,l=!0):l=!1),l||ye(t)),Vi(t),l=t.type,i=t.pendingProps,u=a!==null?a.memoizedProps:null,n=i.children,Cr(l,i)?n=null:u!==null&&Cr(l,u)&&(t.flags|=32),t.memoizedState!==null&&(l=Eu(a,t,Tm,null,null,e),gl._currentValue=l),$n(a,t),Sa(a,t,n,e),t.child;case 6:return a===null&&Y&&((a=e=ka)&&(e=rh(e,t.pendingProps,rt),e!==null?(t.stateNode=e,za=t,ka=null,a=!0):a=!1),a||ye(t)),null;case 13:return po(a,t,e);case 4:return El(t,t.stateNode.containerInfo),n=t.pendingProps,a===null?t.child=be(t,null,n,e):Sa(a,t,n,e),t.child;case 11:return ro(a,t,t.type,t.pendingProps,e);case 7:return Sa(a,t,t.pendingProps,e),t.child;case 8:return Sa(a,t,t.pendingProps.children,e),t.child;case 12:return Sa(a,t,t.pendingProps.children,e),t.child;case 10:return n=t.pendingProps,Lt(t,t.type,n.value),Sa(a,t,n.children,e),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ae(t),l=Aa(l),n=n(l),t.flags|=1,Sa(a,t,n,e),t.child;case 14:return so(a,t,t.type,t.pendingProps,e);case 15:return co(a,t,t.type,t.pendingProps,e);case 19:return bo(a,t,e);case 22:return oo(a,t,e);case 24:return Ae(t),n=Aa(ha),a===null?(l=Au(),l===null&&(l=J,i=Tu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),t.memoizedState={parent:n,cache:l},nr(t),Lt(t,ha,l)):(a.lanes&e&&(lr(a,t),al(t,null,null,e),Pn()),l=a.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Lt(t,ha,n)):(n=i.cache,Lt(t,ha,n),n!==l.cache&&er(t,[ha],e,!0))),Sa(a,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}var ar=lt(null),xe=null,Tt=null;function Lt(a,t,e){F(ar,t._currentValue),t._currentValue=e}function xt(a){a._currentValue=ar.current,ga(ar)}function tr(a,t,e){for(;a!==null;){var n=a.alternate;if((a.childLanes&t)!==t?(a.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),a===e)break;a=a.return}}function er(a,t,e,n){var l=a.child;for(l!==null&&(l.return=a);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;a:for(;i!==null;){var r=i;i=l;for(var s=0;s<t.length;s++)if(r.context===t[s]){i.lanes|=e,r=i.alternate,r!==null&&(r.lanes|=e),tr(i.return,e,a),n||(u=null);break a}i=r.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(h(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),tr(u,e,a),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===a){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function Fn(a,t,e,n){a=null;for(var l=t,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var r=l.type;Ba(l.pendingProps.value,u.value)||(a!==null?a.push(r):a=[r])}}else if(l===zl.current){if(u=l.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(a!==null?a.push(gl):a=[gl])}l=l.return}a!==null&&er(t,a,e,n),t.flags|=262144}function di(a){for(a=a.firstContext;a!==null;){if(!Ba(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Ae(a){xe=a,Tt=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Aa(a){return ko(xe,a)}function fi(a,t){return xe===null&&Ae(a),ko(a,t)}function ko(a,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Tt===null){if(a===null)throw Error(h(308));Tt=t,a.dependencies={lanes:0,firstContext:t},a.flags|=524288}else Tt=Tt.next=t;return e}var Vt=!1;function nr(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lr(a,t){a=a.updateQueue,t.updateQueue===a&&(t.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function Xt(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function Qt(a,t,e){var n=a.updateQueue;if(n===null)return null;if(n=n.shared,ta&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Zl(a),ac(a,null,e),t}return Ql(a,n,t,e),Zl(a)}function In(a,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194176)!==0)){var n=t.lanes;n&=a.pendingLanes,e|=n,t.lanes=e,ss(a,e)}}function ir(a,t){var e=a.updateQueue,n=a.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?l=i=t:i=i.next=t}else l=i=t;e={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},a.updateQueue=e;return}a=e.lastBaseUpdate,a===null?e.firstBaseUpdate=t:a.next=t,e.lastBaseUpdate=t}var ur=!1;function Pn(){if(ur){var a=en;if(a!==null)throw a}}function al(a,t,e,n){ur=!1;var l=a.updateQueue;Vt=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var s=r,o=s.next;s.next=null,u===null?i=o:u.next=o,u=s;var p=a.alternate;p!==null&&(p=p.updateQueue,r=p.lastBaseUpdate,r!==u&&(r===null?p.firstBaseUpdate=o:r.next=o,p.lastBaseUpdate=s))}if(i!==null){var k=l.baseState;u=0,p=o=s=null,r=i;do{var m=r.lane&-536870913,g=m!==r.lane;if(g?(C&m)===m:(n&m)===m){m!==0&&m===tn&&(ur=!0),p!==null&&(p=p.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});a:{var T=a,M=r;m=t;var ia=e;switch(M.tag){case 1:if(T=M.payload,typeof T=="function"){k=T.call(ia,k,m);break a}k=T;break a;case 3:T.flags=T.flags&-65537|128;case 0:if(T=M.payload,m=typeof T=="function"?T.call(ia,k,m):T,m==null)break a;k=V({},k,m);break a;case 2:Vt=!0}}m=r.callback,m!==null&&(a.flags|=64,g&&(a.flags|=8192),g=l.callbacks,g===null?l.callbacks=[m]:g.push(m))}else g={lane:m,tag:r.tag,payload:r.payload,callback:r.callback,next:null},p===null?(o=p=g,s=k):p=p.next=g,u|=m;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;g=r,r=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);p===null&&(s=k),l.baseState=s,l.firstBaseUpdate=o,l.lastBaseUpdate=p,i===null&&(l.shared.lanes=0),$t|=u,a.lanes=u,a.memoizedState=k}}function So(a,t){if(typeof a!="function")throw Error(h(191,a));a.call(t)}function wo(a,t){var e=a.callbacks;if(e!==null)for(a.callbacks=null,a=0;a<e.length;a++)So(e[a],t)}function tl(a,t){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var l=n.next;e=l;do{if((e.tag&a)===a){n=void 0;var i=e.create,u=e.inst;n=i(),u.destroy=n}e=e.next}while(e!==l)}}catch(r){K(t,t.return,r)}}function Zt(a,t,e){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&a)===a){var u=n.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,l=t;var s=e;try{r()}catch(o){K(l,s,o)}}}n=n.next}while(n!==i)}}catch(o){K(t,t.return,o)}}function To(a){var t=a.updateQueue;if(t!==null){var e=a.stateNode;try{wo(t,e)}catch(n){K(a,a.return,n)}}}function xo(a,t,e){e.props=Te(a.type,a.memoizedProps),e.state=a.memoizedState;try{e.componentWillUnmount()}catch(n){K(a,t,n)}}function ze(a,t){try{var e=a.ref;if(e!==null){var n=a.stateNode;switch(a.tag){case 26:case 27:case 5:var l=n;break;default:l=n}typeof e=="function"?a.refCleanup=e(l):e.current=l}}catch(i){K(a,t,i)}}function Ha(a,t){var e=a.ref,n=a.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(l){K(a,t,l)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){K(a,t,l)}else e.current=null}function Ao(a){var t=a.type,e=a.memoizedProps,n=a.stateNode;try{a:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break a;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(l){K(a,a.return,l)}}function zo(a,t,e){try{var n=a.stateNode;th(n,a.type,e,t),n[ja]=t}catch(l){K(a,a.return,l)}}function Eo(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27||a.tag===4}function rr(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Eo(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==27&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function sr(a,t,e){var n=a.tag;if(n===5||n===6)a=a.stateNode,t?e.nodeType===8?e.parentNode.insertBefore(a,t):e.insertBefore(a,t):(e.nodeType===8?(t=e.parentNode,t.insertBefore(a,e)):(t=e,t.appendChild(a)),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=zi));else if(n!==4&&n!==27&&(a=a.child,a!==null))for(sr(a,t,e),a=a.sibling;a!==null;)sr(a,t,e),a=a.sibling}function mi(a,t,e){var n=a.tag;if(n===5||n===6)a=a.stateNode,t?e.insertBefore(a,t):e.appendChild(a);else if(n!==4&&n!==27&&(a=a.child,a!==null))for(mi(a,t,e),a=a.sibling;a!==null;)mi(a,t,e),a=a.sibling}var At=!1,na=!1,cr=!1,jo=typeof WeakSet=="function"?WeakSet:Set,ba=null,Do=!1;function Mm(a,t){if(a=a.containerInfo,Nr=Bi,a=Qs(a),du(a)){if("selectionStart"in a)var e={start:a.selectionStart,end:a.selectionEnd};else a:{e=(e=a.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break a}var u=0,r=-1,s=-1,o=0,p=0,k=a,m=null;t:for(;;){for(var g;k!==e||l!==0&&k.nodeType!==3||(r=u+l),k!==i||n!==0&&k.nodeType!==3||(s=u+n),k.nodeType===3&&(u+=k.nodeValue.length),(g=k.firstChild)!==null;)m=k,k=g;for(;;){if(k===a)break t;if(m===e&&++o===l&&(r=u),m===i&&++p===n&&(s=u),(g=k.nextSibling)!==null)break;k=m,m=k.parentNode}k=g}e=r===-1||s===-1?null:{start:r,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(qr={focusedElem:a,selectionRange:e},Bi=!1,ba=t;ba!==null;)if(t=ba,a=t.child,(t.subtreeFlags&1028)!==0&&a!==null)a.return=t,ba=a;else for(;ba!==null;){switch(t=ba,i=t.alternate,a=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(a&1024&&i!==null){a=void 0,e=t,l=i.memoizedProps,i=i.memoizedState,n=e.stateNode;try{var T=Te(e.type,l,e.elementType===e.type);a=n.getSnapshotBeforeUpdate(T,i),n.__reactInternalSnapshotBeforeUpdate=a}catch(M){K(e,e.return,M)}}break;case 3:if(a&1024){if(a=t.stateNode.containerInfo,e=a.nodeType,e===9)Lr(a);else if(e===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Lr(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(a&1024)throw Error(h(163))}if(a=t.sibling,a!==null){a.return=t.return,ba=a;break}ba=t.return}return T=Do,Do=!1,T}function _o(a,t,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Et(a,e),n&4&&tl(5,e);break;case 1:if(Et(a,e),n&4)if(a=e.stateNode,t===null)try{a.componentDidMount()}catch(r){K(e,e.return,r)}else{var l=Te(e.type,t.memoizedProps);t=t.memoizedState;try{a.componentDidUpdate(l,t,a.__reactInternalSnapshotBeforeUpdate)}catch(r){K(e,e.return,r)}}n&64&&To(e),n&512&&ze(e,e.return);break;case 3:if(Et(a,e),n&64&&(n=e.updateQueue,n!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{wo(n,a)}catch(r){K(e,e.return,r)}}break;case 26:Et(a,e),n&512&&ze(e,e.return);break;case 27:case 5:Et(a,e),t===null&&n&4&&Ao(e),n&512&&ze(e,e.return);break;case 12:Et(a,e);break;case 13:Et(a,e),n&4&&Bo(a,e);break;case 22:if(l=e.memoizedState!==null||At,!l){t=t!==null&&t.memoizedState!==null||na;var i=At,u=na;At=l,(na=t)&&!u?Kt(a,e,(e.subtreeFlags&8772)!==0):Et(a,e),At=i,na=u}n&512&&(e.memoizedProps.mode==="manual"?ze(e,e.return):Ha(e,e.return));break;default:Et(a,e)}}function Mo(a){var t=a.alternate;t!==null&&(a.alternate=null,Mo(t)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(t=a.stateNode,t!==null&&Wi(t)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var fa=null,Ua=!1;function zt(a,t,e){for(e=e.child;e!==null;)Oo(a,t,e),e=e.sibling}function Oo(a,t,e){if(Ma&&typeof Ma.onCommitFiberUnmount=="function")try{Ma.onCommitFiberUnmount(xn,e)}catch{}switch(e.tag){case 26:na||Ha(e,t),zt(a,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:na||Ha(e,t);var n=fa,l=Ua;for(fa=e.stateNode,zt(a,t,e),e=e.stateNode,t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wi(e),fa=n,Ua=l;break;case 5:na||Ha(e,t);case 6:l=fa;var i=Ua;if(fa=null,zt(a,t,e),fa=l,Ua=i,fa!==null)if(Ua)try{a=fa,n=e.stateNode,a.nodeType===8?a.parentNode.removeChild(n):a.removeChild(n)}catch(u){K(e,t,u)}else try{fa.removeChild(e.stateNode)}catch(u){K(e,t,u)}break;case 18:fa!==null&&(Ua?(t=fa,e=e.stateNode,t.nodeType===8?Yr(t.parentNode,e):t.nodeType===1&&Yr(t,e),vl(t)):Yr(fa,e.stateNode));break;case 4:n=fa,l=Ua,fa=e.stateNode.containerInfo,Ua=!0,zt(a,t,e),fa=n,Ua=l;break;case 0:case 11:case 14:case 15:na||Zt(2,e,t),na||Zt(4,e,t),zt(a,t,e);break;case 1:na||(Ha(e,t),n=e.stateNode,typeof n.componentWillUnmount=="function"&&xo(e,t,n)),zt(a,t,e);break;case 21:zt(a,t,e);break;case 22:na||Ha(e,t),na=(n=na)||e.memoizedState!==null,zt(a,t,e),na=n;break;default:zt(a,t,e)}}function Bo(a,t){if(t.memoizedState===null&&(a=t.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{vl(a)}catch(e){K(t,t.return,e)}}function Om(a){switch(a.tag){case 13:case 19:var t=a.stateNode;return t===null&&(t=a.stateNode=new jo),t;case 22:return a=a.stateNode,t=a._retryCache,t===null&&(t=a._retryCache=new jo),t;default:throw Error(h(435,a.tag))}}function or(a,t){var e=Om(a);t.forEach(function(n){var l=Qm.bind(null,a,n);e.has(n)||(e.add(n),n.then(l,l))})}function Za(a,t){var e=t.deletions;if(e!==null)for(var n=0;n<e.length;n++){var l=e[n],i=a,u=t,r=u;a:for(;r!==null;){switch(r.tag){case 27:case 5:fa=r.stateNode,Ua=!1;break a;case 3:fa=r.stateNode.containerInfo,Ua=!0;break a;case 4:fa=r.stateNode.containerInfo,Ua=!0;break a}r=r.return}if(fa===null)throw Error(h(160));Oo(i,u,l),fa=null,Ua=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ho(t,a),t=t.sibling}var et=null;function Ho(a,t){var e=a.alternate,n=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Za(t,a),Ka(a),n&4&&(Zt(3,a,a.return),tl(3,a),Zt(5,a,a.return));break;case 1:Za(t,a),Ka(a),n&512&&(na||e===null||Ha(e,e.return)),n&64&&At&&(a=a.updateQueue,a!==null&&(n=a.callbacks,n!==null&&(e=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var l=et;if(Za(t,a),Ka(a),n&512&&(na||e===null||Ha(e,e.return)),n&4){var i=e!==null?e.memoizedState:null;if(n=a.memoizedState,e===null)if(n===null)if(a.stateNode===null){a:{n=a.type,e=a.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[En]||i[xa]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),wa(i,n,e),i[xa]=a,pa(i),n=i;break a;case"link":var u=Ad("link","href",l).get(n+(e.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(e.href==null?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(r,1);break t}}i=l.createElement(n),wa(i,n,e),l.head.appendChild(i);break;case"meta":if(u=Ad("meta","content",l).get(n+(e.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(r,1);break t}}i=l.createElement(n),wa(i,n,e),l.head.appendChild(i);break;default:throw Error(h(468,n))}i[xa]=a,pa(i),n=i}a.stateNode=n}else zd(l,a.type,a.stateNode);else a.stateNode=xd(l,n,a.memoizedProps);else i!==n?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,n===null?zd(l,a.type,a.stateNode):xd(l,n,a.memoizedProps)):n===null&&a.stateNode!==null&&zo(a,a.memoizedProps,e.memoizedProps)}break;case 27:if(n&4&&a.alternate===null){l=a.stateNode,i=a.memoizedProps;try{for(var s=l.firstChild;s;){var o=s.nextSibling,p=s.nodeName;s[En]||p==="HEAD"||p==="BODY"||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=o}for(var k=a.type,m=l.attributes;m.length;)l.removeAttributeNode(m[0]);wa(l,k,i),l[xa]=a,l[ja]=i}catch(T){K(a,a.return,T)}}case 5:if(Za(t,a),Ka(a),n&512&&(na||e===null||Ha(e,e.return)),a.flags&32){l=a.stateNode;try{Ve(l,"")}catch(T){K(a,a.return,T)}}n&4&&a.stateNode!=null&&(l=a.memoizedProps,zo(a,l,e!==null?e.memoizedProps:l)),n&1024&&(cr=!0);break;case 6:if(Za(t,a),Ka(a),n&4){if(a.stateNode===null)throw Error(h(162));n=a.memoizedProps,e=a.stateNode;try{e.nodeValue=n}catch(T){K(a,a.return,T)}}break;case 3:if(_i=null,l=et,et=ji(t.containerInfo),Za(t,a),et=l,Ka(a),n&4&&e!==null&&e.memoizedState.isDehydrated)try{vl(t.containerInfo)}catch(T){K(a,a.return,T)}cr&&(cr=!1,Uo(a));break;case 4:n=et,et=ji(a.stateNode.containerInfo),Za(t,a),Ka(a),et=n;break;case 12:Za(t,a),Ka(a);break;case 13:Za(t,a),Ka(a),a.child.flags&8192&&a.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(vr=ut()),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,or(a,n)));break;case 22:if(n&512&&(na||e===null||Ha(e,e.return)),s=a.memoizedState!==null,o=e!==null&&e.memoizedState!==null,p=At,k=na,At=p||s,na=k||o,Za(t,a),na=k,At=p,Ka(a),t=a.stateNode,t._current=a,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,n&8192&&(t._visibility=s?t._visibility&-2:t._visibility|1,s&&(t=At||na,e===null||o||t||rn(a)),a.memoizedProps===null||a.memoizedProps.mode!=="manual"))a:for(e=null,t=a;;){if(t.tag===5||t.tag===26||t.tag===27){if(e===null){o=e=t;try{if(l=o.stateNode,s)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=o.stateNode,r=o.memoizedProps.style;var g=r!=null&&r.hasOwnProperty("display")?r.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(T){K(o,o.return,T)}}}else if(t.tag===6){if(e===null){o=t;try{o.stateNode.nodeValue=s?"":o.memoizedProps}catch(T){K(o,o.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===a)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break a;for(;t.sibling===null;){if(t.return===null||t.return===a)break a;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=a.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,or(a,e))));break;case 19:Za(t,a),Ka(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,or(a,n)));break;case 21:break;default:Za(t,a),Ka(a)}}function Ka(a){var t=a.flags;if(t&2){try{if(a.tag!==27){a:{for(var e=a.return;e!==null;){if(Eo(e)){var n=e;break a}e=e.return}throw Error(h(160))}switch(n.tag){case 27:var l=n.stateNode,i=rr(a);mi(a,i,l);break;case 5:var u=n.stateNode;n.flags&32&&(Ve(u,""),n.flags&=-33);var r=rr(a);mi(a,r,u);break;case 3:case 4:var s=n.stateNode.containerInfo,o=rr(a);sr(a,o,s);break;default:throw Error(h(161))}}}catch(p){K(a,a.return,p)}a.flags&=-3}t&4096&&(a.flags&=-4097)}function Uo(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var t=a;Uo(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),a=a.sibling}}function Et(a,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_o(a,t.alternate,t),t=t.sibling}function rn(a){for(a=a.child;a!==null;){var t=a;switch(t.tag){case 0:case 11:case 14:case 15:Zt(4,t,t.return),rn(t);break;case 1:Ha(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&xo(t,t.return,e),rn(t);break;case 26:case 27:case 5:Ha(t,t.return),rn(t);break;case 22:Ha(t,t.return),t.memoizedState===null&&rn(t);break;default:rn(t)}a=a.sibling}}function Kt(a,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=a,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Kt(l,i,e),tl(4,i);break;case 1:if(Kt(l,i,e),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(o){K(n,n.return,o)}if(n=i,l=n.updateQueue,l!==null){var r=n.stateNode;try{var s=l.shared.hiddenCallbacks;if(s!==null)for(l.shared.hiddenCallbacks=null,l=0;l<s.length;l++)So(s[l],r)}catch(o){K(n,n.return,o)}}e&&u&64&&To(i),ze(i,i.return);break;case 26:case 27:case 5:Kt(l,i,e),e&&n===null&&u&4&&Ao(i),ze(i,i.return);break;case 12:Kt(l,i,e);break;case 13:Kt(l,i,e),e&&u&4&&Bo(l,i);break;case 22:i.memoizedState===null&&Kt(l,i,e),ze(i,i.return);break;default:Kt(l,i,e)}t=t.sibling}}function dr(a,t){var e=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(a!=null&&a.refCount++,e!=null&&Qn(e))}function fr(a,t){a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Qn(a))}function Jt(a,t,e,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ro(a,t,e,n),t=t.sibling}function Ro(a,t,e,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(a,t,e,n),l&2048&&tl(9,t);break;case 3:Jt(a,t,e,n),l&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Qn(a)));break;case 12:if(l&2048){Jt(a,t,e,n),a=t.stateNode;try{var i=t.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(s){K(t,t.return,s)}}else Jt(a,t,e,n);break;case 23:break;case 22:i=t.stateNode,t.memoizedState!==null?i._visibility&4?Jt(a,t,e,n):el(a,t):i._visibility&4?Jt(a,t,e,n):(i._visibility|=4,sn(a,t,e,n,(t.subtreeFlags&10256)!==0)),l&2048&&dr(t.alternate,t);break;case 24:Jt(a,t,e,n),l&2048&&fr(t.alternate,t);break;default:Jt(a,t,e,n)}}function sn(a,t,e,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=a,u=t,r=e,s=n,o=u.flags;switch(u.tag){case 0:case 11:case 15:sn(i,u,r,s,l),tl(8,u);break;case 23:break;case 22:var p=u.stateNode;u.memoizedState!==null?p._visibility&4?sn(i,u,r,s,l):el(i,u):(p._visibility|=4,sn(i,u,r,s,l)),l&&o&2048&&dr(u.alternate,u);break;case 24:sn(i,u,r,s,l),l&&o&2048&&fr(u.alternate,u);break;default:sn(i,u,r,s,l)}t=t.sibling}}function el(a,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=a,n=t,l=n.flags;switch(n.tag){case 22:el(e,n),l&2048&&dr(n.alternate,n);break;case 24:el(e,n),l&2048&&fr(n.alternate,n);break;default:el(e,n)}t=t.sibling}}var nl=8192;function cn(a){if(a.subtreeFlags&nl)for(a=a.child;a!==null;)No(a),a=a.sibling}function No(a){switch(a.tag){case 26:cn(a),a.flags&nl&&a.memoizedState!==null&&kh(et,a.memoizedState,a.memoizedProps);break;case 5:cn(a);break;case 3:case 4:var t=et;et=ji(a.stateNode.containerInfo),cn(a),et=t;break;case 22:a.memoizedState===null&&(t=a.alternate,t!==null&&t.memoizedState!==null?(t=nl,nl=16777216,cn(a),nl=t):cn(a));break;default:cn(a)}}function qo(a){var t=a.alternate;if(t!==null&&(a=t.child,a!==null)){t.child=null;do t=a.sibling,a.sibling=null,a=t;while(a!==null)}}function ll(a){var t=a.deletions;if(a.flags&16){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];ba=n,Go(n,a)}qo(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Co(a),a=a.sibling}function Co(a){switch(a.tag){case 0:case 11:case 15:ll(a),a.flags&2048&&Zt(9,a,a.return);break;case 3:ll(a);break;case 12:ll(a);break;case 22:var t=a.stateNode;a.memoizedState!==null&&t._visibility&4&&(a.return===null||a.return.tag!==13)?(t._visibility&=-5,hi(a)):ll(a);break;default:ll(a)}}function hi(a){var t=a.deletions;if(a.flags&16){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];ba=n,Go(n,a)}qo(a)}for(a=a.child;a!==null;){switch(t=a,t.tag){case 0:case 11:case 15:Zt(8,t,t.return),hi(t);break;case 22:e=t.stateNode,e._visibility&4&&(e._visibility&=-5,hi(t));break;default:hi(t)}a=a.sibling}}function Go(a,t){for(;ba!==null;){var e=ba;switch(e.tag){case 0:case 11:case 15:Zt(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Qn(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,ba=n;else a:for(e=a;ba!==null;){n=ba;var l=n.sibling,i=n.return;if(Mo(n),n===e){ba=null;break a}if(l!==null){l.return=i,ba=l;break a}ba=i}}}function Bm(a,t,e,n){this.tag=a,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ja(a,t,e,n){return new Bm(a,t,e,n)}function mr(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Wt(a,t){var e=a.alternate;return e===null?(e=Ja(a.tag,t,a.key,a.mode),e.elementType=a.elementType,e.type=a.type,e.stateNode=a.stateNode,e.alternate=a,a.alternate=e):(e.pendingProps=t,e.type=a.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=a.flags&31457280,e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=a.sibling,e.index=a.index,e.ref=a.ref,e.refCleanup=a.refCleanup,e}function Yo(a,t){a.flags&=31457282;var e=a.alternate;return e===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,a.type=e.type,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a}function gi(a,t,e,n,l,i){var u=0;if(n=a,typeof a=="function")mr(a)&&(u=1);else if(typeof a=="string")u=bh(a,e,it.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case X:return Ee(e.children,l,i,t);case ca:u=8,l|=24;break;case ft:return a=Ja(12,e,t,l|2),a.elementType=ft,a.lanes=i,a;case mt:return a=Ja(13,e,t,l),a.elementType=mt,a.lanes=i,a;case Oe:return a=Ja(19,e,t,l),a.elementType=Oe,a.lanes=i,a;case ne:return Lo(e,l,i,t);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case P:case Ta:u=10;break a;case ua:u=9;break a;case Fa:u=11;break a;case Be:u=14;break a;case Ia:u=16,n=null;break a}u=29,e=Error(h(130,a===null?"null":typeof a,"")),n=null}return t=Ja(u,e,t,l),t.elementType=a,t.type=n,t.lanes=i,t}function Ee(a,t,e,n){return a=Ja(7,a,n,t),a.lanes=e,a}function Lo(a,t,e,n){a=Ja(22,a,n,t),a.elementType=ne,a.lanes=e;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=l._current;if(i===null)throw Error(h(456));if(!(l._pendingVisibility&2)){var u=Nt(i,2);u!==null&&(l._pendingVisibility|=2,Ea(u,i,2))}},attach:function(){var i=l._current;if(i===null)throw Error(h(456));if(l._pendingVisibility&2){var u=Nt(i,2);u!==null&&(l._pendingVisibility&=-3,Ea(u,i,2))}}};return a.stateNode=l,a}function hr(a,t,e){return a=Ja(6,a,null,t),a.lanes=e,a}function gr(a,t,e){return t=Ja(4,a.children!==null?a.children:[],a.key,t),t.lanes=e,t.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},t}function jt(a){a.flags|=4}function Vo(a,t){if(t.type!=="stylesheet"||t.state.loading&4)a.flags&=-16777217;else if(a.flags|=16777216,!Ed(t)){if(t=Qa.current,t!==null&&((C&4194176)===C?st!==null:(C&62914560)!==C&&!(C&536870912)||t!==st))throw Ln=ku,ic;a.flags|=8192}}function pi(a,t){t!==null&&(a.flags|=4),a.flags&16384&&(t=a.tag!==22?us():536870912,a.lanes|=t,dn|=t)}function il(a,t){if(!Y)switch(a.tailMode){case"hidden":t=a.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?a.tail=null:e.sibling=null;break;case"collapsed":e=a.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t||a.tail===null?a.tail=null:a.tail.sibling=null:n.sibling=null}}function aa(a){var t=a.alternate!==null&&a.alternate.child===a.child,e=0,n=0;if(t)for(var l=a.child;l!==null;)e|=l.lanes|l.childLanes,n|=l.subtreeFlags&31457280,n|=l.flags&31457280,l.return=a,l=l.sibling;else for(l=a.child;l!==null;)e|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=a,l=l.sibling;return a.subtreeFlags|=n,a.childLanes=e,t}function Hm(a,t,e){var n=t.pendingProps;switch(bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aa(t),null;case 1:return aa(t),null;case 3:return e=t.stateNode,n=null,a!==null&&(n=a.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xt(ha),Ne(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(a===null||a.child===null)&&(qn(t)?jt(t):a===null||a.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(Tr(tt),tt=null))),aa(t),null;case 26:return e=t.memoizedState,a===null?(jt(t),e!==null?(aa(t),Vo(t,e)):(aa(t),t.flags&=-16777217)):e?e!==a.memoizedState?(jt(t),aa(t),Vo(t,e)):(aa(t),t.flags&=-16777217):(a.memoizedProps!==n&&jt(t),aa(t),t.flags&=-16777217),null;case 27:jl(t),e=Bt.current;var l=t.type;if(a!==null&&t.stateNode!=null)a.memoizedProps!==n&&jt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return aa(t),null}a=it.current,qn(t)?nc(t):(a=vd(l,n,e),t.stateNode=a,jt(t))}return aa(t),null;case 5:if(jl(t),e=t.type,a!==null&&t.stateNode!=null)a.memoizedProps!==n&&jt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return aa(t),null}if(a=it.current,qn(t))nc(t);else{switch(l=Ei(Bt.current),a){case 1:a=l.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:a=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":a=l.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":a=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":a=l.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?a.multiple=!0:n.size&&(a.size=n.size);break;default:a=typeof n.is=="string"?l.createElement(e,{is:n.is}):l.createElement(e)}}a[xa]=t,a[ja]=n;a:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)a.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break a;for(;l.sibling===null;){if(l.return===null||l.return===t)break a;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=a;a:switch(wa(a,e,n),e){case"button":case"input":case"select":case"textarea":a=!!n.autoFocus;break a;case"img":a=!0;break a;default:a=!1}a&&jt(t)}}return aa(t),t.flags&=-16777217,null;case 6:if(a&&t.stateNode!=null)a.memoizedProps!==n&&jt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(h(166));if(a=Bt.current,qn(t)){if(a=t.stateNode,e=t.memoizedProps,n=null,l=za,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}a[xa]=t,a=!!(a.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||md(a.nodeValue,e)),a||ye(t)}else a=Ei(a).createTextNode(n),a[xa]=t,t.stateNode=a}return aa(t),null;case 13:if(n=t.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(l=qn(t),n!==null&&n.dehydrated!==null){if(a===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[xa]=t}else Cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;aa(t),l=!1}else tt!==null&&(Tr(tt),tt=null),l=!0;if(!l)return t.flags&256?(kt(t),t):(kt(t),null)}if(kt(t),t.flags&128)return t.lanes=e,t;if(e=n!==null,a=a!==null&&a.memoizedState!==null,e){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return e!==a&&e&&(t.child.flags|=8192),pi(t,t.updateQueue),aa(t),null;case 4:return Ne(),a===null&&Hr(t.stateNode.containerInfo),aa(t),null;case 10:return xt(t.type),aa(t),null;case 19:if(ga(ma),l=t.memoizedState,l===null)return aa(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)il(l,!1);else{if(la!==0||a!==null&&a.flags&128)for(a=t.child;a!==null;){if(i=Pl(a),i!==null){for(t.flags|=128,il(l,!1),a=i.updateQueue,t.updateQueue=a,pi(t,a),t.subtreeFlags=0,a=e,e=t.child;e!==null;)Yo(e,a),e=e.sibling;return F(ma,ma.current&1|2),t.child}a=a.sibling}l.tail!==null&&ut()>yi&&(t.flags|=128,n=!0,il(l,!1),t.lanes=4194304)}else{if(!n)if(a=Pl(i),a!==null){if(t.flags|=128,n=!0,a=a.updateQueue,t.updateQueue=a,pi(t,a),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Y)return aa(t),null}else 2*ut()-l.renderingStartTime>yi&&e!==536870912&&(t.flags|=128,n=!0,il(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(a=l.last,a!==null?a.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ut(),t.sibling=null,a=ma.current,F(ma,n?a&1|2:a&1),t):(aa(t),null);case 22:case 23:return kt(t),wu(),n=t.memoizedState!==null,a!==null?a.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?e&536870912&&!(t.flags&128)&&(aa(t),t.subtreeFlags&6&&(t.flags|=8192)):aa(t),e=t.updateQueue,e!==null&&pi(t,e.retryQueue),e=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(t.flags|=2048),a!==null&&ga(ve),null;case 24:return e=null,a!==null&&(e=a.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),xt(ha),aa(t),null;case 25:return null}throw Error(h(156,t.tag))}function Um(a,t){switch(bu(t),t.tag){case 1:return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 3:return xt(ha),Ne(),a=t.flags,a&65536&&!(a&128)?(t.flags=a&-65537|128,t):null;case 26:case 27:case 5:return jl(t),null;case 13:if(kt(t),a=t.memoizedState,a!==null&&a.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Cn()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 19:return ga(ma),null;case 4:return Ne(),null;case 10:return xt(t.type),null;case 22:case 23:return kt(t),wu(),a!==null&&ga(ve),a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 24:return xt(ha),null;case 25:return null;default:return null}}function Xo(a,t){switch(bu(t),t.tag){case 3:xt(ha),Ne();break;case 26:case 27:case 5:jl(t);break;case 4:Ne();break;case 13:kt(t);break;case 19:ga(ma);break;case 10:xt(t.type);break;case 22:case 23:kt(t),wu(),a!==null&&ga(ve);break;case 24:xt(ha)}}var Rm={getCacheForType:function(a){var t=Aa(ha),e=t.data.get(a);return e===void 0&&(e=a(),t.data.set(a,e)),e}},Nm=typeof WeakMap=="function"?WeakMap:Map,ta=0,J=null,N=null,C=0,W=0,Ra=null,Dt=!1,on=!1,pr=!1,_t=0,la=0,$t=0,je=0,yr=0,Wa=0,dn=0,ul=null,ot=null,br=!1,vr=0,yi=1/0,bi=null,Ft=null,vi=!1,De=null,rl=0,kr=0,Sr=null,sl=0,wr=null;function Na(){if(ta&2&&C!==0)return C&-C;if(D.T!==null){var a=tn;return a!==0?a:_r()}return os()}function Qo(){Wa===0&&(Wa=!(C&536870912)||Y?is():536870912);var a=Qa.current;return a!==null&&(a.flags|=32),Wa}function Ea(a,t,e){(a===J&&W===2||a.cancelPendingCommit!==null)&&(fn(a,0),Mt(a,C,Wa,!1)),zn(a,e),(!(ta&2)||a!==J)&&(a===J&&(!(ta&2)&&(je|=e),la===4&&Mt(a,C,Wa,!1)),dt(a))}function Zo(a,t,e){if(ta&6)throw Error(h(327));var n=!e&&(t&60)===0&&(t&a.expiredLanes)===0||An(a,t),l=n?Gm(a,t):zr(a,t,!0),i=n;do{if(l===0){on&&!n&&Mt(a,t,0,!1);break}else if(l===6)Mt(a,t,0,!Dt);else{if(e=a.current.alternate,i&&!qm(e)){l=zr(a,t,!1),i=!1;continue}if(l===2){if(i=t,a.errorRecoveryDisabledLanes&i)var u=0;else u=a.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;a:{var r=a;l=ul;var s=r.current.memoizedState.isDehydrated;if(s&&(fn(r,u).flags|=256),u=zr(r,u,!1),u!==2){if(pr&&!s){r.errorRecoveryDisabledLanes|=i,je|=i,l=4;break a}i=ot,ot=l,i!==null&&Tr(i)}l=u}if(i=!1,l!==2)continue}}if(l===1){fn(a,0),Mt(a,t,0,!0);break}a:{switch(n=a,l){case 0:case 1:throw Error(h(345));case 4:if((t&4194176)===t){Mt(n,t,Wa,!Dt);break a}break;case 2:ot=null;break;case 3:case 5:break;default:throw Error(h(329))}if(n.finishedWork=e,n.finishedLanes=t,(t&62914560)===t&&(i=vr+300-ut(),10<i)){if(Mt(n,t,Wa,!Dt),Ol(n,0)!==0)break a;n.timeoutHandle=pd(Ko.bind(null,n,e,ot,bi,br,t,Wa,je,dn,Dt,2,-0,0),i);break a}Ko(n,e,ot,bi,br,t,Wa,je,dn,Dt,0,-0,0)}}break}while(!0);dt(a)}function Tr(a){ot===null?ot=a:ot.push.apply(ot,a)}function Ko(a,t,e,n,l,i,u,r,s,o,p,k,m){var g=t.subtreeFlags;if((g&8192||(g&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:vh},No(t),t=Sh(),t!==null)){a.cancelPendingCommit=t(ad.bind(null,a,e,n,l,u,r,s,1,k,m)),Mt(a,i,u,!o);return}ad(a,e,n,l,u,r,s,p,k,m)}function qm(a){for(var t=a;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var l=e[n],i=l.getSnapshot;l=l.value;try{if(!Ba(i(),l))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(a,t,e,n){t&=~yr,t&=~je,a.suspendedLanes|=t,a.pingedLanes&=~t,n&&(a.warmLanes|=t),n=a.expirationTimes;for(var l=t;0<l;){var i=31-Oa(l),u=1<<i;n[i]=-1,l&=~u}e!==0&&rs(a,e,t)}function ki(){return ta&6?!0:(cl(0),!1)}function xr(){if(N!==null){if(W===0)var a=N.return;else a=N,Tt=xe=null,_u(a),Pe=null,Vn=0,a=N;for(;a!==null;)Xo(a.alternate,a),a=a.return;N=null}}function fn(a,t){a.finishedWork=null,a.finishedLanes=0;var e=a.timeoutHandle;e!==-1&&(a.timeoutHandle=-1,nh(e)),e=a.cancelPendingCommit,e!==null&&(a.cancelPendingCommit=null,e()),xr(),J=a,N=e=Wt(a.current,null),C=t,W=0,Ra=null,Dt=!1,on=An(a,t),pr=!1,dn=Wa=yr=je=$t=la=0,ot=ul=null,br=!1,t&8&&(t|=t&32);var n=a.entangledLanes;if(n!==0)for(a=a.entanglements,n&=t;0<n;){var l=31-Oa(n),i=1<<l;t|=a[l],n&=~i}return _t=t,Xl(),e}function Jo(a,t){H=null,D.H=ct,t===Yn?(t=sc(),W=3):t===ic?(t=sc(),W=4):W=t===uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ra=t,N===null&&(la=1,oi(a,La(t,a.current)))}function Wo(){var a=D.H;return D.H=ct,a===null?ct:a}function $o(){var a=D.A;return D.A=Rm,a}function Ar(){la=4,Dt||(C&4194176)!==C&&Qa.current!==null||(on=!0),!($t&134217727)&&!(je&134217727)||J===null||Mt(J,C,Wa,!1)}function zr(a,t,e){var n=ta;ta|=2;var l=Wo(),i=$o();(J!==a||C!==t)&&(bi=null,fn(a,t)),t=!1;var u=la;a:do try{if(W!==0&&N!==null){var r=N,s=Ra;switch(W){case 8:xr(),u=6;break a;case 3:case 2:case 6:Qa.current===null&&(t=!0);var o=W;if(W=0,Ra=null,mn(a,r,s,o),e&&on){u=0;break a}break;default:o=W,W=0,Ra=null,mn(a,r,s,o)}}Cm(),u=la;break}catch(p){Jo(a,p)}while(!0);return t&&a.shellSuspendCounter++,Tt=xe=null,ta=n,D.H=l,D.A=i,N===null&&(J=null,C=0,Xl()),u}function Cm(){for(;N!==null;)Fo(N)}function Gm(a,t){var e=ta;ta|=2;var n=Wo(),l=$o();J!==a||C!==t?(bi=null,yi=ut()+500,fn(a,t)):on=An(a,t);a:do try{if(W!==0&&N!==null){t=N;var i=Ra;t:switch(W){case 1:W=0,Ra=null,mn(a,t,i,1);break;case 2:if(uc(i)){W=0,Ra=null,Io(t);break}t=function(){W===2&&J===a&&(W=7),dt(a)},i.then(t,t);break a;case 3:W=7;break a;case 4:W=5;break a;case 7:uc(i)?(W=0,Ra=null,Io(t)):(W=0,Ra=null,mn(a,t,i,7));break;case 5:var u=null;switch(N.tag){case 26:u=N.memoizedState;case 5:case 27:var r=N;if(!u||Ed(u)){W=0,Ra=null;var s=r.sibling;if(s!==null)N=s;else{var o=r.return;o!==null?(N=o,Si(o)):N=null}break t}}W=0,Ra=null,mn(a,t,i,5);break;case 6:W=0,Ra=null,mn(a,t,i,6);break;case 8:xr(),la=6;break a;default:throw Error(h(462))}}Ym();break}catch(p){Jo(a,p)}while(!0);return Tt=xe=null,D.H=n,D.A=l,ta=e,N!==null?0:(J=null,C=0,Xl(),la)}function Ym(){for(;N!==null&&!cf();)Fo(N)}function Fo(a){var t=vo(a.alternate,a,_t);a.memoizedProps=a.pendingProps,t===null?Si(a):N=t}function Io(a){var t=a,e=t.alternate;switch(t.tag){case 15:case 0:t=mo(e,t,t.pendingProps,t.type,void 0,C);break;case 11:t=mo(e,t,t.pendingProps,t.type.render,t.ref,C);break;case 5:_u(t);default:Xo(e,t),t=N=Yo(t,_t),t=vo(e,t,_t)}a.memoizedProps=a.pendingProps,t===null?Si(a):N=t}function mn(a,t,e,n){Tt=xe=null,_u(t),Pe=null,Vn=0;var l=t.return;try{if(Dm(a,l,t,e,C)){la=1,oi(a,La(e,a.current)),N=null;return}}catch(i){if(l!==null)throw N=l,i;la=1,oi(a,La(e,a.current)),N=null;return}t.flags&32768?(Y||n===1?a=!0:on||C&536870912?a=!1:(Dt=a=!0,(n===2||n===3||n===6)&&(n=Qa.current,n!==null&&n.tag===13&&(n.flags|=16384))),Po(t,a)):Si(t)}function Si(a){var t=a;do{if(t.flags&32768){Po(t,Dt);return}a=t.return;var e=Hm(t.alternate,t,_t);if(e!==null){N=e;return}if(t=t.sibling,t!==null){N=t;return}N=t=a}while(t!==null);la===0&&(la=5)}function Po(a,t){do{var e=Um(a.alternate,a);if(e!==null){e.flags&=32767,N=e;return}if(e=a.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(a=a.sibling,a!==null)){N=a;return}N=a=e}while(a!==null);la=6,N=null}function ad(a,t,e,n,l,i,u,r,s,o){var p=D.T,k=G.p;try{G.p=2,D.T=null,Lm(a,t,e,n,k,l,i,u,r,s,o)}finally{D.T=p,G.p=k}}function Lm(a,t,e,n,l,i,u,r){do hn();while(De!==null);if(ta&6)throw Error(h(327));var s=a.finishedWork;if(n=a.finishedLanes,s===null)return null;if(a.finishedWork=null,a.finishedLanes=0,s===a.current)throw Error(h(177));a.callbackNode=null,a.callbackPriority=0,a.cancelPendingCommit=null;var o=s.lanes|s.childLanes;if(o|=gu,kf(a,n,o,i,u,r),a===J&&(N=J=null,C=0),!(s.subtreeFlags&10256)&&!(s.flags&10256)||vi||(vi=!0,kr=o,Sr=e,Zm(Dl,function(){return hn(),null})),e=(s.flags&15990)!==0,s.subtreeFlags&15990||e?(e=D.T,D.T=null,i=G.p,G.p=2,u=ta,ta|=4,Mm(a,s),Ho(s,a),fm(qr,a.containerInfo),Bi=!!Nr,qr=Nr=null,a.current=s,_o(a,s.alternate,s),of(),ta=u,G.p=i,D.T=e):a.current=s,vi?(vi=!1,De=a,rl=n):td(a,o),o=a.pendingLanes,o===0&&(Ft=null),gf(s.stateNode),dt(a),t!==null)for(l=a.onRecoverableError,s=0;s<t.length;s++)o=t[s],l(o.value,{componentStack:o.stack});return rl&3&&hn(),o=a.pendingLanes,n&4194218&&o&42?a===wr?sl++:(sl=0,wr=a):sl=0,cl(0),null}function td(a,t){(a.pooledCacheLanes&=t)===0&&(t=a.pooledCache,t!=null&&(a.pooledCache=null,Qn(t)))}function hn(){if(De!==null){var a=De,t=kr;kr=0;var e=cs(rl),n=D.T,l=G.p;try{if(G.p=32>e?32:e,D.T=null,De===null)var i=!1;else{e=Sr,Sr=null;var u=De,r=rl;if(De=null,rl=0,ta&6)throw Error(h(331));var s=ta;if(ta|=4,Co(u.current),Ro(u,u.current,r,e),ta=s,cl(0,!1),Ma&&typeof Ma.onPostCommitFiberRoot=="function")try{Ma.onPostCommitFiberRoot(xn,u)}catch{}i=!0}return i}finally{G.p=l,D.T=n,td(a,t)}}return!1}function ed(a,t,e){t=La(e,t),t=Xu(a.stateNode,t,2),a=Qt(a,t,2),a!==null&&(zn(a,2),dt(a))}function K(a,t,e){if(a.tag===3)ed(a,a,e);else for(;t!==null;){if(t.tag===3){ed(t,a,e);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ft===null||!Ft.has(n))){a=La(e,a),e=lo(2),n=Qt(t,e,2),n!==null&&(io(e,n,t,a),zn(n,2),dt(n));break}}t=t.return}}function Er(a,t,e){var n=a.pingCache;if(n===null){n=a.pingCache=new Nm;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(e)||(pr=!0,l.add(e),a=Vm.bind(null,a,t,e),t.then(a,a))}function Vm(a,t,e){var n=a.pingCache;n!==null&&n.delete(t),a.pingedLanes|=a.suspendedLanes&e,a.warmLanes&=~e,J===a&&(C&e)===e&&(la===4||la===3&&(C&62914560)===C&&300>ut()-vr?!(ta&2)&&fn(a,0):yr|=e,dn===C&&(dn=0)),dt(a)}function nd(a,t){t===0&&(t=us()),a=Nt(a,t),a!==null&&(zn(a,t),dt(a))}function Xm(a){var t=a.memoizedState,e=0;t!==null&&(e=t.retryLane),nd(a,e)}function Qm(a,t){var e=0;switch(a.tag){case 13:var n=a.stateNode,l=a.memoizedState;l!==null&&(e=l.retryLane);break;case 19:n=a.stateNode;break;case 22:n=a.stateNode._retryCache;break;default:throw Error(h(314))}n!==null&&n.delete(t),nd(a,e)}function Zm(a,t){return Qi(a,t)}var wi=null,gn=null,jr=!1,Ti=!1,Dr=!1,_e=0;function dt(a){a!==gn&&a.next===null&&(gn===null?wi=gn=a:gn=gn.next=a),Ti=!0,jr||(jr=!0,Jm(Km))}function cl(a,t){if(!Dr&&Ti){Dr=!0;do for(var e=!1,n=wi;n!==null;){if(a!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var u=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-Oa(42|a)+1)-1,i&=l&~(u&~r),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(e=!0,ud(n,i))}else i=C,i=Ol(n,n===J?i:0),!(i&3)||An(n,i)||(e=!0,ud(n,i));n=n.next}while(e);Dr=!1}}function Km(){Ti=jr=!1;var a=0;_e!==0&&(eh()&&(a=_e),_e=0);for(var t=ut(),e=null,n=wi;n!==null;){var l=n.next,i=ld(n,t);i===0?(n.next=null,e===null?wi=l:e.next=l,l===null&&(gn=e)):(e=n,(a!==0||i&3)&&(Ti=!0)),n=l}cl(a)}function ld(a,t){for(var e=a.suspendedLanes,n=a.pingedLanes,l=a.expirationTimes,i=a.pendingLanes&-62914561;0<i;){var u=31-Oa(i),r=1<<u,s=l[u];s===-1?(!(r&e)||r&n)&&(l[u]=vf(r,t)):s<=t&&(a.expiredLanes|=r),i&=~r}if(t=J,e=C,e=Ol(a,a===t?e:0),n=a.callbackNode,e===0||a===t&&W===2||a.cancelPendingCommit!==null)return n!==null&&n!==null&&Zi(n),a.callbackNode=null,a.callbackPriority=0;if(!(e&3)||An(a,e)){if(t=e&-e,t===a.callbackPriority)return t;switch(n!==null&&Zi(n),cs(e)){case 2:case 8:e=ns;break;case 32:e=Dl;break;case 268435456:e=ls;break;default:e=Dl}return n=id.bind(null,a),e=Qi(e,n),a.callbackPriority=t,a.callbackNode=e,t}return n!==null&&n!==null&&Zi(n),a.callbackPriority=2,a.callbackNode=null,2}function id(a,t){var e=a.callbackNode;if(hn()&&a.callbackNode!==e)return null;var n=C;return n=Ol(a,a===J?n:0),n===0?null:(Zo(a,n,t),ld(a,ut()),a.callbackNode!=null&&a.callbackNode===e?id.bind(null,a):null)}function ud(a,t){if(hn())return null;Zo(a,t,!0)}function Jm(a){lh(function(){ta&6?Qi(es,a):a()})}function _r(){return _e===0&&(_e=is()),_e}function rd(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Nl(""+a)}function sd(a,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,a.id&&e.setAttribute("form",a.id),t.parentNode.insertBefore(e,t),a=new FormData(a),e.parentNode.removeChild(e),a}function Wm(a,t,e,n,l){if(t==="submit"&&e&&e.stateNode===l){var i=rd((l[ja]||null).action),u=n.submitter;u&&(t=(t=u[ja]||null)?rd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var r=new Yl("action","action",null,n,l);a.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(_e!==0){var s=u?sd(l,u):new FormData(l);Cu(e,{pending:!0,data:s,method:l.method,action:i},null,s)}}else typeof i=="function"&&(r.preventDefault(),s=u?sd(l,u):new FormData(l),Cu(e,{pending:!0,data:s,method:l.method,action:i},i,s))},currentTarget:l}]})}}for(var Mr=0;Mr<Ps.length;Mr++){var Or=Ps[Mr],$m=Or.toLowerCase(),Fm=Or[0].toUpperCase()+Or.slice(1);at($m,"on"+Fm)}at(Js,"onAnimationEnd"),at(Ws,"onAnimationIteration"),at($s,"onAnimationStart"),at("dblclick","onDoubleClick"),at("focusin","onFocus"),at("focusout","onBlur"),at(hm,"onTransitionRun"),at(gm,"onTransitionStart"),at(pm,"onTransitionCancel"),at(Fs,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),de("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),de("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),de("onBeforeInput",["compositionend","keypress","textInput","paste"]),de("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),de("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),de("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Im=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function cd(a,t){t=(t&4)!==0;for(var e=0;e<a.length;e++){var n=a[e],l=n.event;n=n.listeners;a:{var i=void 0;if(t)for(var u=n.length-1;0<=u;u--){var r=n[u],s=r.instance,o=r.currentTarget;if(r=r.listener,s!==i&&l.isPropagationStopped())break a;i=r,l.currentTarget=o;try{i(l)}catch(p){ci(p)}l.currentTarget=null,i=s}else for(u=0;u<n.length;u++){if(r=n[u],s=r.instance,o=r.currentTarget,r=r.listener,s!==i&&l.isPropagationStopped())break a;i=r,l.currentTarget=o;try{i(l)}catch(p){ci(p)}l.currentTarget=null,i=s}}}}function q(a,t){var e=t[Ji];e===void 0&&(e=t[Ji]=new Set);var n=a+"__bubble";e.has(n)||(od(t,a,2,!1),e.add(n))}function Br(a,t,e){var n=0;t&&(n|=4),od(e,a,n,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Hr(a){if(!a[xi]){a[xi]=!0,fs.forEach(function(e){e!=="selectionchange"&&(Im.has(e)||Br(e,!1,a),Br(e,!0,a))});var t=a.nodeType===9?a:a.ownerDocument;t===null||t[xi]||(t[xi]=!0,Br("selectionchange",!1,t))}}function od(a,t,e,n){switch(Bd(t)){case 2:var l=xh;break;case 8:l=Ah;break;default:l=Kr}e=l.bind(null,t,e,a),l=void 0,!eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?a.addEventListener(t,e,{capture:!0,passive:l}):a.addEventListener(t,e,!0):l!==void 0?a.addEventListener(t,e,{passive:l}):a.addEventListener(t,e,!1)}function Ur(a,t,e,n,l){var i=n;if(!(t&1)&&!(t&2)&&n!==null)a:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var r=n.stateNode.containerInfo;if(r===l||r.nodeType===8&&r.parentNode===l)break;if(u===4)for(u=n.return;u!==null;){var s=u.tag;if((s===3||s===4)&&(s=u.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;u=u.return}for(;r!==null;){if(u=oe(r),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){n=i=u;continue a}r=r.parentNode}}n=n.return}xs(function(){var o=i,p=au(e),k=[];a:{var m=Is.get(a);if(m!==void 0){var g=Yl,T=a;switch(a){case"keypress":if(Cl(e)===0)break a;case"keydown":case"keyup":g=Qf;break;case"focusin":T="focus",g=uu;break;case"focusout":T="blur",g=uu;break;case"beforeblur":case"afterblur":g=uu;break;case"click":if(e.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Bf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Jf;break;case Js:case Ws:case $s:g=Rf;break;case Fs:g=$f;break;case"scroll":case"scrollend":g=Mf;break;case"wheel":g=If;break;case"copy":case"cut":case"paste":g=qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ds;break;case"toggle":case"beforetoggle":g=am}var M=(t&4)!==0,ia=!M&&(a==="scroll"||a==="scrollend"),d=M?m!==null?m+"Capture":null:m;M=[];for(var c=o,f;c!==null;){var b=c;if(f=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||f===null||d===null||(b=Dn(c,d),b!=null&&M.push(dl(c,b,f))),ia)break;c=c.return}0<M.length&&(m=new g(m,T,null,e,p),k.push({event:m,listeners:M}))}}if(!(t&7)){a:{if(m=a==="mouseover"||a==="pointerover",g=a==="mouseout"||a==="pointerout",m&&e!==Pi&&(T=e.relatedTarget||e.fromElement)&&(oe(T)||T[qe]))break a;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(T=e.relatedTarget||e.toElement,g=o,T=T?oe(T):null,T!==null&&(ia=_(T),M=T.tag,T!==ia||M!==5&&M!==27&&M!==6)&&(T=null)):(g=null,T=o),g!==T)){if(M=Es,b="onMouseLeave",d="onMouseEnter",c="mouse",(a==="pointerout"||a==="pointerover")&&(M=Ds,b="onPointerLeave",d="onPointerEnter",c="pointer"),ia=g==null?m:jn(g),f=T==null?m:jn(T),m=new M(b,c+"leave",g,e,p),m.target=ia,m.relatedTarget=f,b=null,oe(p)===o&&(M=new M(d,c+"enter",T,e,p),M.target=f,M.relatedTarget=ia,b=M),ia=b,g&&T)t:{for(M=g,d=T,c=0,f=M;f;f=pn(f))c++;for(f=0,b=d;b;b=pn(b))f++;for(;0<c-f;)M=pn(M),c--;for(;0<f-c;)d=pn(d),f--;for(;c--;){if(M===d||d!==null&&M===d.alternate)break t;M=pn(M),d=pn(d)}M=null}else M=null;g!==null&&dd(k,m,g,M,!1),T!==null&&ia!==null&&dd(k,ia,T,M,!0)}}a:{if(m=o?jn(o):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var w=Ns;else if(Us(m))if(qs)w=om;else{w=sm;var U=rm}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?o&&Ii(o.elementType)&&(w=Ns):w=cm;if(w&&(w=w(a,o))){Rs(k,w,e,p);break a}U&&U(a,m,o),a==="focusout"&&o&&m.type==="number"&&o.memoizedProps.value!=null&&Fi(m,"number",m.value)}switch(U=o?jn(o):window,a){case"focusin":(Us(U)||U.contentEditable==="true")&&(Ke=U,fu=o,Nn=null);break;case"focusout":Nn=fu=Ke=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Zs(k,e,p);break;case"selectionchange":if(mm)break;case"keydown":case"keyup":Zs(k,e,p)}var x;if(su)a:{switch(a){case"compositionstart":var j="onCompositionStart";break a;case"compositionend":j="onCompositionEnd";break a;case"compositionupdate":j="onCompositionUpdate";break a}j=void 0}else Ze?Bs(a,e)&&(j="onCompositionEnd"):a==="keydown"&&e.keyCode===229&&(j="onCompositionStart");j&&(_s&&e.locale!=="ko"&&(Ze||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ze&&(x=As()):(Rt=p,nu="value"in Rt?Rt.value:Rt.textContent,Ze=!0)),U=Ai(o,j),0<U.length&&(j=new js(j,a,null,e,p),k.push({event:j,listeners:U}),x?j.data=x:(x=Hs(e),x!==null&&(j.data=x)))),(x=em?nm(a,e):lm(a,e))&&(j=Ai(o,"onBeforeInput"),0<j.length&&(U=new js("onBeforeInput","beforeinput",null,e,p),k.push({event:U,listeners:j}),U.data=x)),Wm(k,a,o,e,p)}cd(k,t)})}function dl(a,t,e){return{instance:a,listener:t,currentTarget:e}}function Ai(a,t){for(var e=t+"Capture",n=[];a!==null;){var l=a,i=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Dn(a,e),l!=null&&n.unshift(dl(a,l,i)),l=Dn(a,t),l!=null&&n.push(dl(a,l,i))),a=a.return}return n}function pn(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function dd(a,t,e,n,l){for(var i=t._reactName,u=[];e!==null&&e!==n;){var r=e,s=r.alternate,o=r.stateNode;if(r=r.tag,s!==null&&s===n)break;r!==5&&r!==26&&r!==27||o===null||(s=o,l?(o=Dn(e,i),o!=null&&u.unshift(dl(e,o,s))):l||(o=Dn(e,i),o!=null&&u.push(dl(e,o,s)))),e=e.return}u.length!==0&&a.push({event:t,listeners:u})}var Pm=/\r\n?/g,ah=/\u0000|\uFFFD/g;function fd(a){return(typeof a=="string"?a:""+a).replace(Pm,`
`).replace(ah,"")}function md(a,t){return t=fd(t),fd(a)===t}function zi(){}function Z(a,t,e,n,l,i){switch(e){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ve(a,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ve(a,""+n);break;case"className":Hl(a,"class",n);break;case"tabIndex":Hl(a,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(a,e,n);break;case"style":ws(a,n,i);break;case"data":if(t!=="object"){Hl(a,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||e!=="href")){a.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(e);break}n=Nl(""+n),a.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){a.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(t!=="input"&&Z(a,t,"name",l.name,l,null),Z(a,t,"formEncType",l.formEncType,l,null),Z(a,t,"formMethod",l.formMethod,l,null),Z(a,t,"formTarget",l.formTarget,l,null)):(Z(a,t,"encType",l.encType,l,null),Z(a,t,"method",l.method,l,null),Z(a,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(e);break}n=Nl(""+n),a.setAttribute(e,n);break;case"onClick":n!=null&&(a.onclick=zi);break;case"onScroll":n!=null&&q("scroll",a);break;case"onScrollEnd":n!=null&&q("scrollend",a);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(e=n.__html,e!=null){if(l.children!=null)throw Error(h(60));a.innerHTML=e}}break;case"multiple":a.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":a.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){a.removeAttribute("xlink:href");break}e=Nl(""+n),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,""+n):a.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,""):a.removeAttribute(e);break;case"capture":case"download":n===!0?a.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(e,n):a.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?a.setAttribute(e,n):a.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?a.removeAttribute(e):a.setAttribute(e,n);break;case"popover":q("beforetoggle",a),q("toggle",a),Bl(a,"popover",n);break;case"xlinkActuate":yt(a,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":yt(a,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":yt(a,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":yt(a,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":yt(a,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":yt(a,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":yt(a,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":yt(a,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":yt(a,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Bl(a,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Df.get(e)||e,Bl(a,e,n))}}function Rr(a,t,e,n,l,i){switch(e){case"style":ws(a,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(e=n.__html,e!=null){if(l.children!=null)throw Error(h(60));a.innerHTML=e}}break;case"children":typeof n=="string"?Ve(a,n):(typeof n=="number"||typeof n=="bigint")&&Ve(a,""+n);break;case"onScroll":n!=null&&q("scroll",a);break;case"onScrollEnd":n!=null&&q("scrollend",a);break;case"onClick":n!=null&&(a.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ms.hasOwnProperty(e))a:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),t=e.slice(2,l?e.length-7:void 0),i=a[ja]||null,i=i!=null?i[e]:null,typeof i=="function"&&a.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(e in a?a[e]=null:a.hasAttribute(e)&&a.removeAttribute(e)),a.addEventListener(t,n,l);break a}e in a?a[e]=n:n===!0?a.setAttribute(e,""):Bl(a,e,n)}}}function wa(a,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",a),q("load",a);var n=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:Z(a,t,i,u,e,null)}}l&&Z(a,t,"srcSet",e.srcSet,e,null),n&&Z(a,t,"src",e.src,e,null);return;case"input":q("invalid",a);var r=i=u=l=null,s=null,o=null;for(n in e)if(e.hasOwnProperty(n)){var p=e[n];if(p!=null)switch(n){case"name":l=p;break;case"type":u=p;break;case"checked":s=p;break;case"defaultChecked":o=p;break;case"value":i=p;break;case"defaultValue":r=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:Z(a,t,n,p,e,null)}}bs(a,i,r,s,o,u,l,!1),Ul(a);return;case"select":q("invalid",a),n=u=i=null;for(l in e)if(e.hasOwnProperty(l)&&(r=e[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":n=r;default:Z(a,t,l,r,e,null)}t=i,e=u,a.multiple=!!n,t!=null?Le(a,!!n,t,!1):e!=null&&Le(a,!!n,e,!0);return;case"textarea":q("invalid",a),i=l=n=null;for(u in e)if(e.hasOwnProperty(u)&&(r=e[u],r!=null))switch(u){case"value":n=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(h(91));break;default:Z(a,t,u,r,e,null)}ks(a,n,l,i),Ul(a);return;case"option":for(s in e)if(e.hasOwnProperty(s)&&(n=e[s],n!=null))switch(s){case"selected":a.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Z(a,t,s,n,e,null)}return;case"dialog":q("cancel",a),q("close",a);break;case"iframe":case"object":q("load",a);break;case"video":case"audio":for(n=0;n<ol.length;n++)q(ol[n],a);break;case"image":q("error",a),q("load",a);break;case"details":q("toggle",a);break;case"embed":case"source":case"link":q("error",a),q("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in e)if(e.hasOwnProperty(o)&&(n=e[o],n!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:Z(a,t,o,n,e,null)}return;default:if(Ii(t)){for(p in e)e.hasOwnProperty(p)&&(n=e[p],n!==void 0&&Rr(a,t,p,n,e,void 0));return}}for(r in e)e.hasOwnProperty(r)&&(n=e[r],n!=null&&Z(a,t,r,n,e,null))}function th(a,t,e,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,r=null,s=null,o=null,p=null;for(g in e){var k=e[g];if(e.hasOwnProperty(g)&&k!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=k;default:n.hasOwnProperty(g)||Z(a,t,g,null,n,k)}}for(var m in n){var g=n[m];if(k=e[m],n.hasOwnProperty(m)&&(g!=null||k!=null))switch(m){case"type":i=g;break;case"name":l=g;break;case"checked":o=g;break;case"defaultChecked":p=g;break;case"value":u=g;break;case"defaultValue":r=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==k&&Z(a,t,m,g,n,k)}}$i(a,u,r,s,o,p,i,l);return;case"select":g=u=r=m=null;for(i in e)if(s=e[i],e.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":g=s;default:n.hasOwnProperty(i)||Z(a,t,i,null,n,s)}for(l in n)if(i=n[l],s=e[l],n.hasOwnProperty(l)&&(i!=null||s!=null))switch(l){case"value":m=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==s&&Z(a,t,l,i,n,s)}t=r,e=u,n=g,m!=null?Le(a,!!e,m,!1):!!n!=!!e&&(t!=null?Le(a,!!e,t,!0):Le(a,!!e,e?[]:"",!1));return;case"textarea":g=m=null;for(r in e)if(l=e[r],e.hasOwnProperty(r)&&l!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Z(a,t,r,null,n,l)}for(u in n)if(l=n[u],i=e[u],n.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":m=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:l!==i&&Z(a,t,u,l,n,i)}vs(a,m,g);return;case"option":for(var T in e)if(m=e[T],e.hasOwnProperty(T)&&m!=null&&!n.hasOwnProperty(T))switch(T){case"selected":a.selected=!1;break;default:Z(a,t,T,null,n,m)}for(s in n)if(m=n[s],g=e[s],n.hasOwnProperty(s)&&m!==g&&(m!=null||g!=null))switch(s){case"selected":a.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:Z(a,t,s,m,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in e)m=e[M],e.hasOwnProperty(M)&&m!=null&&!n.hasOwnProperty(M)&&Z(a,t,M,null,n,m);for(o in n)if(m=n[o],g=e[o],n.hasOwnProperty(o)&&m!==g&&(m!=null||g!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,t));break;default:Z(a,t,o,m,n,g)}return;default:if(Ii(t)){for(var ia in e)m=e[ia],e.hasOwnProperty(ia)&&m!==void 0&&!n.hasOwnProperty(ia)&&Rr(a,t,ia,void 0,n,m);for(p in n)m=n[p],g=e[p],!n.hasOwnProperty(p)||m===g||m===void 0&&g===void 0||Rr(a,t,p,m,n,g);return}}for(var d in e)m=e[d],e.hasOwnProperty(d)&&m!=null&&!n.hasOwnProperty(d)&&Z(a,t,d,null,n,m);for(k in n)m=n[k],g=e[k],!n.hasOwnProperty(k)||m===g||m==null&&g==null||Z(a,t,k,m,n,g)}var Nr=null,qr=null;function Ei(a){return a.nodeType===9?a:a.ownerDocument}function hd(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gd(a,t){if(a===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&t==="foreignObject"?0:a}function Cr(a,t){return a==="textarea"||a==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gr=null;function eh(){var a=window.event;return a&&a.type==="popstate"?a===Gr?!1:(Gr=a,!0):(Gr=null,!1)}var pd=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,lh=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(a){return yd.resolve(null).then(a).catch(ih)}:pd;function ih(a){setTimeout(function(){throw a})}function Yr(a,t){var e=t,n=0;do{var l=e.nextSibling;if(a.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(n===0){a.removeChild(l),vl(t);return}n--}else e!=="$"&&e!=="$?"&&e!=="$!"||n++;e=l}while(e);vl(t)}function Lr(a){var t=a.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Lr(e),Wi(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}a.removeChild(e)}}function uh(a,t,e,n){for(;a.nodeType===1;){var l=e;if(a.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(n){if(!a[En])switch(t){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(i=a.getAttribute("rel"),i==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(i!==l.rel||a.getAttribute("href")!==(l.href==null?null:l.href)||a.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||a.getAttribute("title")!==(l.title==null?null:l.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(i=a.getAttribute("src"),(i!==(l.src==null?null:l.src)||a.getAttribute("type")!==(l.type==null?null:l.type)||a.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(t==="input"&&a.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&a.getAttribute("name")===i)return a}else return a;if(a=nt(a.nextSibling),a===null)break}return null}function rh(a,t,e){if(t==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=nt(a.nextSibling),a===null))return null;return a}function nt(a){for(;a!=null;a=a.nextSibling){var t=a.nodeType;if(t===1||t===3)break;if(t===8){if(t=a.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return a}function bd(a){a=a.previousSibling;for(var t=0;a;){if(a.nodeType===8){var e=a.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return a;t--}else e==="/$"&&t++}a=a.previousSibling}return null}function vd(a,t,e){switch(t=Ei(e),a){case"html":if(a=t.documentElement,!a)throw Error(h(452));return a;case"head":if(a=t.head,!a)throw Error(h(453));return a;case"body":if(a=t.body,!a)throw Error(h(454));return a;default:throw Error(h(451))}}var $a=new Map,kd=new Set;function ji(a){return typeof a.getRootNode=="function"?a.getRootNode():a.ownerDocument}var Ot=G.d;G.d={f:sh,r:ch,D:oh,C:dh,L:fh,m:mh,X:gh,S:hh,M:ph};function sh(){var a=Ot.f(),t=ki();return a||t}function ch(a){var t=Ce(a);t!==null&&t.tag===5&&t.type==="form"?Zc(t):Ot.r(a)}var yn=typeof document>"u"?null:document;function Sd(a,t,e){var n=yn;if(n&&typeof t=="string"&&t){var l=Ga(t);l='link[rel="'+a+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),kd.has(l)||(kd.add(l),a={rel:a,crossOrigin:e,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),wa(t,"link",a),pa(t),n.head.appendChild(t)))}}function oh(a){Ot.D(a),Sd("dns-prefetch",a,null)}function dh(a,t){Ot.C(a,t),Sd("preconnect",a,t)}function fh(a,t,e){Ot.L(a,t,e);var n=yn;if(n&&a&&t){var l='link[rel="preload"][as="'+Ga(t)+'"]';t==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+Ga(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+Ga(e.imageSizes)+'"]')):l+='[href="'+Ga(a)+'"]';var i=l;switch(t){case"style":i=bn(a);break;case"script":i=vn(a)}$a.has(i)||(a=V({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:a,as:t},e),$a.set(i,a),n.querySelector(l)!==null||t==="style"&&n.querySelector(fl(i))||t==="script"&&n.querySelector(ml(i))||(t=n.createElement("link"),wa(t,"link",a),pa(t),n.head.appendChild(t)))}}function mh(a,t){Ot.m(a,t);var e=yn;if(e&&a){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ga(n)+'"][href="'+Ga(a)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=vn(a)}if(!$a.has(i)&&(a=V({rel:"modulepreload",href:a},t),$a.set(i,a),e.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ml(i)))return}n=e.createElement("link"),wa(n,"link",a),pa(n),e.head.appendChild(n)}}}function hh(a,t,e){Ot.S(a,t,e);var n=yn;if(n&&a){var l=Ge(n).hoistableStyles,i=bn(a);t=t||"default";var u=l.get(i);if(!u){var r={loading:0,preload:null};if(u=n.querySelector(fl(i)))r.loading=5;else{a=V({rel:"stylesheet",href:a,"data-precedence":t},e),(e=$a.get(i))&&Vr(a,e);var s=u=n.createElement("link");pa(s),wa(s,"link",a),s._p=new Promise(function(o,p){s.onload=o,s.onerror=p}),s.addEventListener("load",function(){r.loading|=1}),s.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Di(u,t,n)}u={type:"stylesheet",instance:u,count:1,state:r},l.set(i,u)}}}function gh(a,t){Ot.X(a,t);var e=yn;if(e&&a){var n=Ge(e).hoistableScripts,l=vn(a),i=n.get(l);i||(i=e.querySelector(ml(l)),i||(a=V({src:a,async:!0},t),(t=$a.get(l))&&Xr(a,t),i=e.createElement("script"),pa(i),wa(i,"link",a),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function ph(a,t){Ot.M(a,t);var e=yn;if(e&&a){var n=Ge(e).hoistableScripts,l=vn(a),i=n.get(l);i||(i=e.querySelector(ml(l)),i||(a=V({src:a,async:!0,type:"module"},t),(t=$a.get(l))&&Xr(a,t),i=e.createElement("script"),pa(i),wa(i,"link",a),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function wd(a,t,e,n){var l=(l=Bt.current)?ji(l):null;if(!l)throw Error(h(446));switch(a){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=bn(e.href),e=Ge(l).hoistableStyles,n=e.get(t),n||(n={type:"style",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){a=bn(e.href);var i=Ge(l).hoistableStyles,u=i.get(a);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(a,u),(i=l.querySelector(fl(a)))&&!i._p&&(u.instance=i,u.state.loading=5),$a.has(a)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},$a.set(a,e),i||yh(l,a,e,u.state))),t&&n===null)throw Error(h(528,""));return u}if(t&&n!==null)throw Error(h(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vn(e),e=Ge(l).hoistableScripts,n=e.get(t),n||(n={type:"script",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,a))}}function bn(a){return'href="'+Ga(a)+'"'}function fl(a){return'link[rel="stylesheet"]['+a+"]"}function Td(a){return V({},a,{"data-precedence":a.precedence,precedence:null})}function yh(a,t,e,n){a.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=a.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),wa(t,"link",e),pa(t),a.head.appendChild(t))}function vn(a){return'[src="'+Ga(a)+'"]'}function ml(a){return"script[async]"+a}function xd(a,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var n=a.querySelector('style[data-href~="'+Ga(e.href)+'"]');if(n)return t.instance=n,pa(n),n;var l=V({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(a.ownerDocument||a).createElement("style"),pa(n),wa(n,"style",l),Di(n,e.precedence,a),t.instance=n;case"stylesheet":l=bn(e.href);var i=a.querySelector(fl(l));if(i)return t.state.loading|=4,t.instance=i,pa(i),i;n=Td(e),(l=$a.get(l))&&Vr(n,l),i=(a.ownerDocument||a).createElement("link"),pa(i);var u=i;return u._p=new Promise(function(r,s){u.onload=r,u.onerror=s}),wa(i,"link",n),t.state.loading|=4,Di(i,e.precedence,a),t.instance=i;case"script":return i=vn(e.src),(l=a.querySelector(ml(i)))?(t.instance=l,pa(l),l):(n=e,(l=$a.get(i))&&(n=V({},e),Xr(n,l)),a=a.ownerDocument||a,l=a.createElement("script"),pa(l),wa(l,"link",n),a.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(n=t.instance,t.state.loading|=4,Di(n,e.precedence,a));return t.instance}function Di(a,t,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,u=0;u<n.length;u++){var r=n[u];if(r.dataset.precedence===t)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(a,i.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(a,t.firstChild))}function Vr(a,t){a.crossOrigin==null&&(a.crossOrigin=t.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=t.referrerPolicy),a.title==null&&(a.title=t.title)}function Xr(a,t){a.crossOrigin==null&&(a.crossOrigin=t.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=t.referrerPolicy),a.integrity==null&&(a.integrity=t.integrity)}var _i=null;function Ad(a,t,e){if(_i===null){var n=new Map,l=_i=new Map;l.set(e,n)}else l=_i,n=l.get(e),n||(n=new Map,l.set(e,n));if(n.has(a))return n;for(n.set(a,null),e=e.getElementsByTagName(a),l=0;l<e.length;l++){var i=e[l];if(!(i[En]||i[xa]||a==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=a+u;var r=n.get(u);r?r.push(i):n.set(u,[i])}}return n}function zd(a,t,e){a=a.ownerDocument||a,a.head.insertBefore(e,t==="title"?a.querySelector("head > title"):null)}function bh(a,t,e){if(e===1||t.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return a=t.disabled,typeof t.precedence=="string"&&a==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ed(a){return!(a.type==="stylesheet"&&!(a.state.loading&3))}var hl=null;function vh(){}function kh(a,t,e){if(hl===null)throw Error(h(475));var n=hl;if(t.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var l=bn(e.href),i=a.querySelector(fl(l));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=Mi.bind(n),a.then(n,n)),t.state.loading|=4,t.instance=i,pa(i);return}i=a.ownerDocument||a,e=Td(e),(l=$a.get(l))&&Vr(e,l),i=i.createElement("link"),pa(i);var u=i;u._p=new Promise(function(r,s){u.onload=r,u.onerror=s}),wa(i,"link",e),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,a),(a=t.state.preload)&&!(t.state.loading&3)&&(n.count++,t=Mi.bind(n),a.addEventListener("load",t),a.addEventListener("error",t))}}function Sh(){if(hl===null)throw Error(h(475));var a=hl;return a.stylesheets&&a.count===0&&Qr(a,a.stylesheets),0<a.count?function(t){var e=setTimeout(function(){if(a.stylesheets&&Qr(a,a.stylesheets),a.unsuspend){var n=a.unsuspend;a.unsuspend=null,n()}},6e4);return a.unsuspend=t,function(){a.unsuspend=null,clearTimeout(e)}}:null}function Mi(){if(this.count--,this.count===0){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Oi=null;function Qr(a,t){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Oi=new Map,t.forEach(wh,a),Oi=null,Mi.call(a))}function wh(a,t){if(!(t.state.loading&4)){var e=Oi.get(a);if(e)var n=e.get(null);else{e=new Map,Oi.set(a,e);for(var l=a.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),n=u)}n&&e.set(null,n)}l=t.instance,u=l.getAttribute("data-precedence"),i=e.get(u)||n,i===n&&e.set(null,l),e.set(u,l),this.count++,n=Mi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(l,a.firstChild)),t.state.loading|=4}}var gl={$$typeof:Ta,Provider:null,Consumer:null,_currentValue:qa,_currentValue2:qa,_threadCount:0};function Th(a,t,e,n,l,i,u,r){this.tag=1,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function jd(a,t,e,n,l,i,u,r,s,o,p,k){return a=new Th(a,t,e,u,r,s,o,k),t=1,i===!0&&(t|=24),i=Ja(3,null,null,t),a.current=i,i.stateNode=a,t=Tu(),t.refCount++,a.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:e,cache:t},nr(i),a}function Dd(a){return a?(a=$e,a):$e}function _d(a,t,e,n,l,i){l=Dd(l),n.context===null?n.context=l:n.pendingContext=l,n=Xt(t),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=Qt(a,n,t),e!==null&&(Ea(e,a,t),In(e,a,t))}function Md(a,t){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var e=a.retryLane;a.retryLane=e!==0&&e<t?e:t}}function Zr(a,t){Md(a,t),(a=a.alternate)&&Md(a,t)}function Od(a){if(a.tag===13){var t=Nt(a,67108864);t!==null&&Ea(t,a,67108864),Zr(a,67108864)}}var Bi=!0;function xh(a,t,e,n){var l=D.T;D.T=null;var i=G.p;try{G.p=2,Kr(a,t,e,n)}finally{G.p=i,D.T=l}}function Ah(a,t,e,n){var l=D.T;D.T=null;var i=G.p;try{G.p=8,Kr(a,t,e,n)}finally{G.p=i,D.T=l}}function Kr(a,t,e,n){if(Bi){var l=Jr(n);if(l===null)Ur(a,t,n,Hi,e),Hd(a,n);else if(Eh(l,a,t,e,n))n.stopPropagation();else if(Hd(a,n),t&4&&-1<zh.indexOf(a)){for(;l!==null;){var i=Ce(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=ce(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var s=1<<31-Oa(u);r.entanglements[1]|=s,u&=~s}dt(i),!(ta&6)&&(yi=ut()+500,cl(0))}}break;case 13:r=Nt(i,2),r!==null&&Ea(r,i,2),ki(),Zr(i,2)}if(i=Jr(n),i===null&&Ur(a,t,n,Hi,e),i===l)break;l=i}l!==null&&n.stopPropagation()}else Ur(a,t,n,null,e)}}function Jr(a){return a=au(a),Wr(a)}var Hi=null;function Wr(a){if(Hi=null,a=oe(a),a!==null){var t=_(a);if(t===null)a=null;else{var e=t.tag;if(e===13){if(a=$(t),a!==null)return a;a=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;a=null}else t!==a&&(a=null)}}return Hi=a,null}function Bd(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(df()){case es:return 2;case ns:return 8;case Dl:case ff:return 32;case ls:return 268435456;default:return 32}default:return 32}}var $r=!1,It=null,Pt=null,ae=null,pl=new Map,yl=new Map,te=[],zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hd(a,t){switch(a){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":ae=null;break;case"pointerover":case"pointerout":pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(t.pointerId)}}function bl(a,t,e,n,l,i){return a===null||a.nativeEvent!==i?(a={blockedOn:t,domEventName:e,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Ce(t),t!==null&&Od(t)),a):(a.eventSystemFlags|=n,t=a.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),a)}function Eh(a,t,e,n,l){switch(t){case"focusin":return It=bl(It,a,t,e,n,l),!0;case"dragenter":return Pt=bl(Pt,a,t,e,n,l),!0;case"mouseover":return ae=bl(ae,a,t,e,n,l),!0;case"pointerover":var i=l.pointerId;return pl.set(i,bl(pl.get(i)||null,a,t,e,n,l)),!0;case"gotpointercapture":return i=l.pointerId,yl.set(i,bl(yl.get(i)||null,a,t,e,n,l)),!0}return!1}function Ud(a){var t=oe(a.target);if(t!==null){var e=_(t);if(e!==null){if(t=e.tag,t===13){if(t=$(e),t!==null){a.blockedOn=t,Sf(a.priority,function(){if(e.tag===13){var n=Na(),l=Nt(e,n);l!==null&&Ea(l,e,n),Zr(e,n)}});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){a.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Ui(a){if(a.blockedOn!==null)return!1;for(var t=a.targetContainers;0<t.length;){var e=Jr(a.nativeEvent);if(e===null){e=a.nativeEvent;var n=new e.constructor(e.type,e);Pi=n,e.target.dispatchEvent(n),Pi=null}else return t=Ce(e),t!==null&&Od(t),a.blockedOn=e,!1;t.shift()}return!0}function Rd(a,t,e){Ui(a)&&e.delete(t)}function jh(){$r=!1,It!==null&&Ui(It)&&(It=null),Pt!==null&&Ui(Pt)&&(Pt=null),ae!==null&&Ui(ae)&&(ae=null),pl.forEach(Rd),yl.forEach(Rd)}function Ri(a,t){a.blockedOn===t&&(a.blockedOn=null,$r||($r=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,jh)))}var Ni=null;function Nd(a){Ni!==a&&(Ni=a,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Ni===a&&(Ni=null);for(var t=0;t<a.length;t+=3){var e=a[t],n=a[t+1],l=a[t+2];if(typeof n!="function"){if(Wr(n||e)===null)continue;break}var i=Ce(e);i!==null&&(a.splice(t,3),t-=3,Cu(i,{pending:!0,data:l,method:e.method,action:n},n,l))}}))}function vl(a){function t(s){return Ri(s,a)}It!==null&&Ri(It,a),Pt!==null&&Ri(Pt,a),ae!==null&&Ri(ae,a),pl.forEach(t),yl.forEach(t);for(var e=0;e<te.length;e++){var n=te[e];n.blockedOn===a&&(n.blockedOn=null)}for(;0<te.length&&(e=te[0],e.blockedOn===null);)Ud(e),e.blockedOn===null&&te.shift();if(e=(a.ownerDocument||a).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var l=e[n],i=e[n+1],u=l[ja]||null;if(typeof i=="function")u||Nd(e);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[ja]||null)r=u.formAction;else if(Wr(l)!==null)continue}else r=u.action;typeof r=="function"?e[n+1]=r:(e.splice(n,3),n-=3),Nd(e)}}}function Fr(a){this._internalRoot=a}qi.prototype.render=Fr.prototype.render=function(a){var t=this._internalRoot;if(t===null)throw Error(h(409));var e=t.current,n=Na();_d(e,n,a,t,null,null)},qi.prototype.unmount=Fr.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var t=a.containerInfo;a.tag===0&&hn(),_d(a.current,2,null,a,null,null),ki(),t[qe]=null}};function qi(a){this._internalRoot=a}qi.prototype.unstable_scheduleHydration=function(a){if(a){var t=os();a={blockedOn:null,target:a,priority:t};for(var e=0;e<te.length&&t!==0&&t<te[e].priority;e++);te.splice(e,0,a),e===0&&Ud(a)}};var qd=z.version;if(qd!=="19.0.0")throw Error(h(527,qd,"19.0.0"));G.findDOMNode=function(a){var t=a._reactInternals;if(t===void 0)throw typeof a.render=="function"?Error(h(188)):(a=Object.keys(a).join(","),Error(h(268,a)));return a=Ue(t),a=a!==null?se(a):null,a=a===null?null:a.stateNode,a};var Dh={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:D,findFiberByHostInstance:oe,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{xn=Ci.inject(Dh),Ma=Ci}catch{}}return kl.createRoot=function(a,t){if(!A(a))throw Error(h(299));var e=!1,n="",l=ao,i=to,u=eo,r=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(r=t.unstable_transitionCallbacks)),t=jd(a,1,!1,null,null,e,n,l,i,u,r,null),a[qe]=t.current,Hr(a.nodeType===8?a.parentNode:a),new Fr(t)},kl.hydrateRoot=function(a,t,e){if(!A(a))throw Error(h(299));var n=!1,l="",i=ao,u=to,r=eo,s=null,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks),e.formState!==void 0&&(o=e.formState)),t=jd(a,1,!0,t,e??null,n,l,i,u,r,s,o),t.context=Dd(null),e=t.current,n=Na(),l=Xt(n),l.callback=null,Qt(e,l,n),t.current.lanes=n,zn(t,n),dt(t),a[qe]=t.current,Hr(a),new qi(t)},kl.version="19.0.0",kl}var Ld;function Jh(){if(Ld)return Ir.exports;Ld=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(z){console.error(z)}}return v(),Ir.exports=Kh(),Ir.exports}var Wh=Jh();function $h(){const{pathname:v}=Xd();return Me.useEffect(()=>{window.scrollTo(0,0)},[v]),null}const Fh=Nh` 
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

  a {
    color: black;
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
`,Ih=I.nav`
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
`,Ph=I.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`,ag=I.img`
  width: 120px;
  height: 22px;
  display: block;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,tg=I.menu`
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
`;function eg(){const v=Hh(),z=Xd(),E=R=>{const O=document.getElementById(R);O==null||O.scrollIntoView({behavior:"smooth"})},h=R=>{z.pathname===R?window.scrollTo({top:0,behavior:"smooth"}):v(R)},A=(R,O)=>{if(R.preventDefault(),O.startsWith("#")){const ea=O.slice(1);z.pathname!=="/"?v("/",{state:{scrollTo:ea}}):E(ea)}else h(O)};return Me.useEffect(()=>{var O;const R=(O=z.state)==null?void 0:O.scrollTo;R&&E(R)},[z.state]),{handleClick:A}}const ng="/deskreview-react/svg/logo_full_navbar.svg";function Kd(){const{handleClick:v}=eg(),z=[{href:"#work",label:"Work"},{href:"/",label:"Home"},{href:"/blog",label:"Study"},{href:"#contact",label:"Contact"}];return y.jsx(Ih,{children:y.jsxs(Ph,{children:[y.jsx(ag,{src:ng,alt:"Navbar_Logo",width:"120",height:"22",onClick:E=>v(E,"/")}),y.jsx(tg,{children:z.map(E=>y.jsx(Qd,{to:E.href,onClick:h=>v(h,E.href),children:E.label},E.href))})]})})}const lg=I.footer`
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
`;function ig(){const z=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hourCycle:"h23"});return y.jsx(lg,{children:y.jsxs("p",{children:["© 2025, Deskreview - ",z]})})}function Jd({children:v}){return y.jsxs(y.Fragment,{children:[y.jsx(Kd,{}),v,y.jsx(ig,{})]})}const Wd=I.main`
  padding: 16px 16px 32px;
`;I.div`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;
`;const Tl=I.section`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;

  @media (width <= 768px) {
    margin: 0px auto 30px;
  }
`,xl=I.h1`
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
`,kn=I.hr`
  border: 1px solid rgba(var(--desk-gray-500), 0.6);
`,$d=I.h2`
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-base);
  font-weight: 300;
  padding: 4px 0;

  @media (width <= 768px) {
    font-size: var(--text-xs);
  }
`,Fd=I.p`
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
    transform: ${({$isOpen:v})=>v?"rotate(180deg)":"rotate(0deg)"};
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
    transition-duration: 300ms;
  }
`;function rg({companyName:v,isOpen:z,onClick:E}){return y.jsxs(ug,{onClick:E,$isOpen:z,children:[y.jsx(Fd,{children:v}),y.jsx(qh,{})]})}const sg=I.div`
  max-height: ${({$isOpen:v})=>v?"3000px":"0"};
  visibility: ${({$isOpen:v})=>v?"visible":"hidden"};
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
`;function cg(v){Me.useEffect(()=>{v.forEach(z=>{const E=new Image;E.src=z})},[v])}function og({servicesItems:v=[],year:z,industry:E,detail:h,images:A=[],isOpen:R}){const[O,ea]=Me.useState(0);cg(A);const X=()=>{A.length>0&&ea(ca=>(ca+1)%A.length)};return y.jsxs(sg,{$isOpen:R,children:[y.jsxs(Sl,{children:[y.jsx("p",{className:"title",children:"Services"}),y.jsx("ul",{children:v.map((ca,ft)=>y.jsx("li",{className:"text",children:ca},ft))})]}),y.jsxs(Sl,{children:[y.jsx("p",{className:"title",children:"Year"}),y.jsx("p",{className:"text",children:z})]}),y.jsxs(Sl,{children:[y.jsx("p",{className:"title",children:"Industry"}),y.jsx("p",{className:"text",children:E})]}),y.jsxs(Sl,{children:[y.jsx("p",{className:"title",children:"Description"}),y.jsx("p",{className:"text",children:h})]}),A.length>0&&y.jsxs(Sl,{children:[y.jsxs("p",{className:"title",children:[A.length===1?"Picture":"Pictures"," ",y.jsx("br",{}),O+1," ⁄ ",A.length]}),y.jsx("img",{src:A[O],onClick:X,width:"340",height:"425",loading:"eager"})]})]})}const dg=[{companyName:"Astra Honda",servicesItems:["Content Research & Analytic","Digital Trend Analytic"],year:"2023",industry:"Vehicle Manufacture",detail:"As their effort to gain trust with local wisdom and the spirit of #OneHeart, Honda aims to reach more trust and connection withing Indonesia market.",images:["img/home/work/astra_1.webp","img/home/work/astra_2.webp","img/home/work/astra_3.webp"]},{companyName:"Telkomsel",servicesItems:["Campaign Strategy & Development","Social Media Strategy","Online Activation Development"],year:"2023",industry:"Telecommunication",detail:"After their merger with IndiHome, Telkomsel aimed to create a nationwide corporate messaging campaign under #BersatuLebihMaju, resulting in +1 million impression, 20% increase of Engagement Rate, and more than 3000 followers.",images:["img/home/work/telkomsel_1.webp","img/home/work/telkomsel_2.webp","img/home/work/telkomsel_3.webp"]},{companyName:"Salam Ganesha Academy",servicesItems:["Campaign Strategy & Development","Social Media Development","Kol Management"],year:"2024",industry:"Education Tech",detail:"As an education startup, Salam Ganesha Academy transitioned to targeting a more mature senior executive market. Several digital strategies were executed to ensure a smooth transition.",images:["img/home/work/ganesha_1.webp","img/home/work/ganesha_2.webp","img/home/work/ganesha_3.webp"]},{companyName:"Rococo Group Indonesia",servicesItems:["Campaign Strategy & Development","Social Media Development","Kol Management"],year:"2023",industry:"Luxury Fashion Retail",detail:"Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong.",images:["img/home/work/rococo_1.webp","img/home/work/rococo_2.webp","img/home/work/rococo_3.webp"]},{companyName:"Hayati Karya Lestari",servicesItems:["Branding Strategy","Social Media & Website","Brand Architecture"],year:"2023",industry:"NGO",detail:"Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia."}];function fg(){const[v,z]=Me.useState(null),E=h=>{z(A=>A===h?null:h)};return y.jsxs(Tl,{children:[y.jsx(xl,{style:{textIndent:"-0.15em"},children:"Works"}),y.jsx($d,{children:"Company"}),y.jsx(kn,{}),dg.map((h,A)=>y.jsxs("div",{children:[y.jsx(rg,{isOpen:v===A,onClick:()=>E(A),companyName:h.companyName}),y.jsx(og,{servicesItems:h.servicesItems,year:h.year,industry:h.industry,detail:h.detail,images:h.images,isOpen:v===A}),y.jsx(kn,{})]},A))]})}const Gi=I.p`
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
`;function hg(){return y.jsxs(Tl,{children:[y.jsx(xl,{children:"Manifesto"}),y.jsxs(Gi,{children:[y.jsx("span",{children:"To Seek for The Sun"}),"–A commitment to constantly exploring innovative and emerging sciences in marketing and branding. We focus on crafting strategies that seamlessly position brands within the hearts and minds of society, ensuring they resonate deeply with their audience. Each project we undertake is a journey—an exploration for the"," ",y.jsx("span",{children:"“ideal truth”"})," : we are inspired by the understanding that the branding and marketing science is ever-evolving and dynamic."]}),y.jsxs(Gi,{children:["Our mission transcends traditional branding; we aim to harmonize the rationality of the left brain with the creativity of the right brain, empowering businesses to navigate the complexities of modern markets. In today’s fast-paced, information-rich, and time-poor world, a brand’s value is determined by how effortlessly it enables customers to say"," ",y.jsx("span",{children:"“yes.”"})]}),y.jsx(Gi,{children:"Branding, as we see it, is the art of connecting sound strategy with brilliant creativity. A strong brand pairs these elements to create symbols and messages that resonate with customers, far beyond product features, benefits, or price."}),y.jsxs(Gi,{children:["Our ultimate goal is to help brands become charismatic entities that inspire belief in their uniqueness. A charismatic brand is irreplaceable in the eyes of its audience, and we firmly believe that with the right approach, any brand—",y.jsx("span",{children:"yours included"}),"—can achieve this distinction."]}),y.jsxs(mg,{children:[y.jsxs("p",{children:["A brand is not what you say it is; ",y.jsx("br",{}),"It's what they say it is"]}),y.jsx("p",{id:"work",children:"- Marty Neumeier"})]})]})}const gg=I.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`,pg=[{type:"Digital Campaign",service:["Social Media Handling","Digital Campaign Set-up","Digital Ads Handling","Digital Trend Analysis & Research"]},{type:"Brand Strategy",service:["Visual Identity Development","Branding Communication Set-up","Branding Implementation Set-up"]}];function yg(){return y.jsxs(Tl,{children:[y.jsx(xl,{children:"Services"}),y.jsx(gg,{children:pg.map(v=>y.jsxs("div",{children:[y.jsx($d,{children:v.type}),y.jsx(kn,{}),v.service.map(z=>y.jsxs("div",{children:[y.jsx(Fd,{children:z}),y.jsx(kn,{})]},`${v.type}-${z}`))]},v.type))})]})}const ts=I.a`
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
`,bg=I.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  padding-top: 8px;

  @media (width <= 768px) {
    gap: 12px 0;
  }
`;function vg(){return y.jsxs(Tl,{children:[y.jsx(xl,{id:"contact",children:"Get in touch"}),y.jsxs(bg,{children:[y.jsxs(ts,{href:"mailto:zaidandzaki@gmail.com",target:"_blank",children:[y.jsx("p",{children:"Email us"}),y.jsx(Ch,{})]}),y.jsxs(ts,{href:"https://wa.me/+6285159177206",target:"_blank",children:[y.jsx("p",{children:"Chat with us"}),y.jsx(Gh,{})]}),y.jsxs(ts,{href:"https://www.instagram.com/deskreview/",target:"_blank",children:[y.jsx("p",{children:"Follow us"}),y.jsx(Yh,{})]})]})]})}function kg(){return y.jsxs(Wd,{children:[y.jsx(hg,{}),y.jsx(fg,{}),y.jsx(yg,{}),y.jsx(vg,{})]})}function Sg(){return y.jsx(Jd,{children:y.jsx(kg,{})})}const wg=I.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`,Tg=I(Qd)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;

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
`,xg={title:"Mengatur Custom Domain .tech di Github Pages",filename:"membangun-custom-domain",date:"03-01-2023",tag:"On-Review",author:"Abdullah Ammar",description:"Mengatur custom domain .tech di Github Pages secara gampang"},Ag=`Sebelumnya pastikan kamu sudah mempunyai domain .tech, domain .tech sendiri bisa didapatkan gratis selama 1 tahun jika kamu sudah mendaftar Github Student Pack. Jika kamu sudah mendaftar Github Student Pack, langsung saja kunjungi [https://get.tech/github-student-developer-pack](https://get.tech/github-student-developer-pack) untuk mendapatkan domain yang kamu inginkan. Setelah mendapatkan domain yang kamu inginkan, selanjutnya langkah-langkah yang dilakukan yaitu:\r
\r
1.  Login ke dalam Dashboard\r
2.  Jika sudah, pindah ke halaman List of Order dan pilih domain kamu\r
3.  Dibagian DNS Management, pilih Manage DNS\r
4.  Setelah halaman terbuka di jendela baru, klik tombol CNAME Record, dan tambahkan CNAME Record dengan name = www dan value = domaingithubkamu.github.io, kemudian Save\r
5.  Setelah itu tambahkan beberapa A Records:\r
    *   Host Name = @ dan Destination IP Address 185.199.108.153\r
    *   Host Name = @ dan Destination IP Address 185.199.109.153\r
    *   Host Name = @ dan Destination IP Address 185.199.110.153\r
    *   Host Name = @ dan Destination IP Address 185.199.111.153\r
6.  Jika sudah, buka repository github kamu dan buka halaman Setting, pergi ke bagian Github Pages dan masukkan custom domain yang sudah kamu dapatkan tadi dan beri tanda ceklis pada Enforce HTTPS, jika tanda ceklis belum aktif, tunggu beberapa jam hingga muncul fitur ceklis tersebut.\r
7.  Selesai, selamat kamu sudah mempunyai domain kamu sendiri, yeay!`,Id=Object.freeze(Object.defineProperty({__proto__:null,content:Ag,frontmatter:xg},Symbol.toStringTag,{value:"Module"})),zg={title:"Media Review: Monster (2023) and Human Instinct",linkname:"monster-and-human-instinct",date:"01-02-2024",tag:"Method Review",author:"Dzaki Zaidan"},Eg=`![](https://miro.medium.com/v2/resize:fit:1050/1*bMfostBlTBswS6WzPdSF-Q.jpeg)\r
\r
<p style="text-align: center"><a href="https://mubi.com/en/id/films/monster-2023"><u>https://mubi.com/en/id/films/monster-2023</u></a></p>\r
\r
As human behaviorist Dr. John Demartini stated about judgment, our minds have an urge to seek information as fast as possible by reflecting something to ourselves, as if something is blatantly more superior or inferior to us. “Monster” (2023), with its methodical POV-changing scenes, elegantly proves that avoiding judging behaviors is simply an attempt to live life and see things from others’ perspectives. But hold up there; we also need to feel the guilt of previously misunderstanding before eventually putting ourselves in their shoes. This guiltiness is crucial as the transitional point of judging-to-realizing cycles, making us aware of what matters in this movie.\r
\r
It seems very natural for us to despise Mr. Hori (Eita Nagayama) in the first few minutes of the movie. We position ourselves to be more superior and “judge” Mr. Hori based on what Minato’s Mom (Sakura Ando) perceives, assuming that Mr. Hori is an unethical teacher caught walking with a “karaoke girl.” Morally, we and Minato’s Mom take a higher position to quickly judge the current condition. We judge and generalize Mr. Hori to be objectively bad and unethical. However, this perspective shifts when we switch to Mr. Hori’s POV and see life through his eyes; we feel a slight guilt for not knowing what’s on his side. This judging-realizing cycle repeats throughout the whole movie, leading to the central moral conflict of the story: the complex emotions of a couple of pre-teen boys.\r
\r
It’s humbling and devastating to see how the judging method we usually employ as humans clearly fails to face the complex nature of human emotions, especially when it comes to understanding children as adults. The storytelling flow of the movie is like telling us that there’s an invisible upside-down pyramid of this conflict, and at the very bottom of it is a confused little boy dealing with his own emotions. He becomes so confused with himself that it confuses and messes with others’ perceptions about the people surrounding them — Minato’s Mom to Mr. Hori, Mr. Hori to Minato, and ultimately Minato to himself. Apparently, what Minato experiences emotionally not only confuses the character but also creates a sporadic buzz among its audience about who exactly the “monster” is and, specifically, whether it’s appropriate to even start a conversation about homosexuality in pre-teen age.\r
\r
Lately, there have been online discourses in Indonesia about how Monster is basically a movie about everything other than homosexuality. Some argue that it is a movie about a family wrecking, and others argue that it is as simple as childhood friendship. When asked about the homosexuality theme, Hirokazu Kore-eda, the movie director, doesn’t want Monster to be viewed as a homosexual-romance genre simplicite. Rather, he wants to focus on the inner struggle that the children had in response to their surroundings. During the pre-production, Kore-eda even consulted with the LGBTQ community after reading the script written by Yuji Sakamoto. Seeing this discourse happening in the real-world situation, it becomes more surreal how the movie has successfully brought discussions and talks, at least by making the audience a little confused with themselves; just as confused as Minato did to himself. Seeing this, I am just very grateful that this coming-of-age drama film has finally reached a more mainstream audience.\r
\r
Noticing the “monster” in the title, it’s worth noting that many audiences have cited the title to help them narrate the movie on how Yori Hoshikawa (Hinata Hiigari) was repeatedly called “pig brain.” This slur was initially conveyed by Yori’s alcoholic father before Yori innocently internalized the slur, believing that there was something terribly wrong with him caused by the pig brain in his head. Later, we find out that the slur was just Yori’s father’s desperate expression of how he found his son “abnormal” about his sexuality, not mentioning the violent marks on his hand. In many cases, Yori is also often seen being numb facing the various violence and bullying he receives every day. Seeing the emotional complexity happening to a kid has brought tears to my eyes, realizing that as adults, we are often judged for who we are and forced to adjust to normality.\r
\r
This alienation of being ourselves apparently happens because of human brain judgment behavior, to rapidly respond by evaluating whether something is more superior or inferior. This behavior more accurately explains what is inside ourselves rather than what we are judging. We judge people based on our own reflection of our deficiencies and lack. We judge because we want to be superior, as a natural instinct to survive. In order to make ourselves more non-monster and more human, the sense of empathy is crucial. To empathize with others is to reject our primal instinct to instantly judge and degrade others, rather than taking some more time to be fully aware and at least trying to change our POV. Being patient and taking more time is, I think, the most humane thing possible. Other animals and living things rely on their spontaneous instinct to survive and think fast. When we take time and empathize, we have taken a step further towards humanity. Even if we can’t literally change our POV like the movie does, we can try to think and talk as our attempt to take more time.\r
\r
Sources:\r
\r
*   [https://timesofindia.indiatimes.com/readersblog/mycosmos/the-real-reason-we-judge-other-people-what-it-says-about-us-28804/](https://timesofindia.indiatimes.com/readersblog/mycosmos/the-real-reason-we-judge-other-people-what-it-says-about-us-28804/)\r
    \r
*   [https://www.reuters.com/lifestyle/japans-kore-eda-sexual-identity-not-focus-film-monster-2023-05-18/](https://www.reuters.com/lifestyle/japans-kore-eda-sexual-identity-not-focus-film-monster-2023-05-18/)\r
    \r
*   [https://deadline.com/2023/05/hirokazu-kore-eda-monster-lgbtq-themes-cannes-1235371202/](https://deadline.com/2023/05/hirokazu-kore-eda-monster-lgbtq-themes-cannes-1235371202/)`,Pd=Object.freeze(Object.defineProperty({__proto__:null,content:Eg,frontmatter:zg},Symbol.toStringTag,{value:"Module"})),jg={title:"Integration Test in React",description:"Practical exploration of integration testing in React by learning to simulate user behavior, add mocks, and assert client-side form native validation.",tag:"Blog",keywords:["React","Integration Test","Vitest"],status:"Finished",publishedAt:"2024-01-14",updatedAt:"2024-01-15",image:"../../assets/blog/integration-test-in-react/integration-test-in-react.webp",imageAlt:"Form with white background and several fields to add collection",author:"Abdullah Ammar"},Dg=`\r
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
`,af=Object.freeze(Object.defineProperty({__proto__:null,content:Dg,frontmatter:jg},Symbol.toStringTag,{value:"Module"})),_g={title:"Fiction: Kau dan Aku jadi Jazz",linkname:"kau-aku-jazz",date:"10-05-2024",tag:"Method Review",author:"Dzaki Zaidan"},Mg=`kenapa hidup ini harus beraspek lain selain sonik musik dan romansa puan?\r
\r
kenapa sih hidup kita harus _ngikutin_ hukum fisika dan harus _menuhin_ gizi untuk keperluan biologis organ tubuh? atau bahkan, kenapa sih jiwa kita perlu dipenjara dalam seonggok daging jelek yang kita sama-sama ingin keluar ini? Kenapa kau dan aku tak bisa langsung saja transenden menjadi sonik; kulit kita menyublim, kita pelan-pelan menguap, dan menyatu bersama arus frekuensi lagu jazz yang sekarang sedang kita putar dengan punggung telanjang yang menyentuh lantai kamarku yang dingin, dan asap kretek yang kita hembuskan bergantian.\r
\r
kalau kita sudah menyatu bersama sonik musik, kan enak. kita bisa terlepas dari beban kerja kapitalisma jam 8 pagi itu, kita bisa sepanjang hari berlarian bersama lembaran partitur nada saxophone John Coltrane yang menjelma karpet ajaib – terbang meliuk berkejaran, kita bisa duduk-duduk santai sambil menunggangi awan nada suara Sarah Vaughan yang melayang lembut, atau bahkan sekalian saja kita bisa bercinta di dalam setiap track pertama dan terakhir album “Sketches of Spain” sambil terus mengingat bahwa hidup kita sudah abadi karena akan mengulang dari akhir ke awal lagi; on repeat. Dan aku bisa mengajakmu tidur berpelukan pasrah-terhanyut dalam frekuensi bunyi yang mencari reseptor indra pendengarannya, sambil berharap bahwa tidak pernah akan ada telinga yang mendengar suara cinta kita. Karena sebaiknya segala suara cinta itu aku tutup di dalam sebuah peredam yang bernama nyawa.`,tf=Object.freeze(Object.defineProperty({__proto__:null,content:Mg,frontmatter:_g},Symbol.toStringTag,{value:"Module"})),Og={title:"Membangun Kebun Digital",description:"Membangun sebuah tempat untuk belajar dan menumbuhkan ide-ide baru di ruang publik",date:"06-09-2021",author:"Abdullah Ammar"},Bg=`\r
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
`,ef=Object.freeze(Object.defineProperty({__proto__:null,content:Bg,frontmatter:Og},Symbol.toStringTag,{value:"Module"})),Hg={title:"Opinion: Aesthetica of (my) Human Experience at Kongsi 8",linkname:"opinion-aesthetica",date:"10-07-2024",tag:"On-Review",author:"Dzaki Zaidan"},Ug=`\r
![](https://miro.medium.com/v2/resize:fit:1050/1*pAzBw_LDYxRENlhXAMy0zg.jpeg)\r
\r
<p style="text-align: center">Bottlesmokers performed their plant-sourced synth set at Irama Sunyi by Kongsi 8.</p>\r
\r
Have you ever had a sudden, almost lightning-bolt-like existential crisis? Moments when you stand still on both of your feet, realizing that every muscle in your body is literally pulled and released by the order of your brain, and then realizing what a brain even is and what consciousness even is? Layer upon layer of that realization until it makes you nauseous (in the Sartrean sense) and dizzy from your own condition.\r
\r
I was at a far-left cafe/communal space called Kongsi 8 in East Jakarta, wearing Silent Disco shiny green headphones and listening to weird “bio-sonic” synth music produced by plant electrical waves transmitted by sophisticated wires and machines when it happened. As quirky and unreal as it sounds, I felt like I was experiencing an absolute “human experience” in the most concrete way possible. Choreographed by the previously meditated affirmation of total human expression, I found myself dancing and jumping in a small sweaty dark room with ten other people. I gazed around the room and witnessed at least three people in a transcendental arm-swaying dance, two people standing still with their eyes closed, a mother and daughter dancing and laughing joyfully while holding hands, and three more dancing in more socially acceptable club-ready moves. Nobody was under the influence of substances (as written and announced in the house rules), but in many senses, it seemed too “liberalized” and too expressive for the mundane everyday Muslim-populated country norm I witnessed every day. At the end of my gaze, I already felt like ‘this is the exact photographic memory I’ll remember as my “human experience” milliseconds before I die.’ It’s hard to keep this writing objective when what I experienced was as chilling as what I just said.\r
\r
Human culture, in general, is a very complicated topic. It is unfair to even start the notion of “which is better, STEM or Social Science?”. Anyone sensitive to social phenomena is equally blessed as anyone studying physics or AI. In a fully conscious mind: Aesthetica and the sensation of human beauty transcend beyond those boring academic debates. It is beyond good or bad, right or wrong, tasteful or disgusting, beautiful or ugly, stupid or smart, or any other dualism that has ever existed. Aesthetica itself was described etymologically as “stimulation of the five senses,” and primarily explained by Alexander Gottlieb as “study about good and bad ‘taste’”. Aesthetica defines the unexplainable sensory sensations a human can receive without any unnecessary rational process; you are supposed to just surrender to the beauty of it. “Surrender” is a beautiful word, isn’t it?\r
\r
> “Surrender” is a beautiful word, isn’t it?\r
\r
The aesthetic experience I had back at Kongsi 8 was highly triggered by the music, the method, the place, and the people I met there. It was hardly explainable and undeniably will never happen again in the exact same form. That’s the sort of beauty of Aesthetica, I suppose: every sensation is a complex stimulant produced by millions of almost-random stimulus variables miraculously happening at that very moment. It was purely a gift from God, which we have to embrace and celebrate as part of the daily chores of being a mortal human.\r
\r
> Every sensation is a complex stimulant produced by millions of almost-random stimulus variables miraculously happening at that very moment\r
`,nf=Object.freeze(Object.defineProperty({__proto__:null,content:Ug,frontmatter:Hg},Symbol.toStringTag,{value:"Module"})),Rg={title:"Organizing React Code",description:"How I code in React",tag:"Blog",keywords:["React","State Mangement","User Interface"],status:"Draft",publishedAt:"2024-06-14",author:"Abdullah Ammar"},Ng=`\r
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
`,lf=Object.freeze(Object.defineProperty({__proto__:null,content:Ng,frontmatter:Rg},Symbol.toStringTag,{value:"Module"})),qg={title:"Pengujian Web Component",description:"Tutorial singkat pengujian web component menggunakan AVA dan Happy DOM",tag:"Blog",keywords:["Testing","Custom Elements","Web Components"],status:"In Progress",publishedAt:"2021-12-23",image:"../../assets/blog/pengujian-ce/pengujian-ce.webp",imageAlt:"Ilustrasi Testing",author:"Abdullah Ammar"},Cg=`\r
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
`,uf=Object.freeze(Object.defineProperty({__proto__:null,content:Cg,frontmatter:qg},Symbol.toStringTag,{value:"Module"})),Gg={title:"Tailwind Prose"},Yg=`\r
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
`,rf=Object.freeze(Object.defineProperty({__proto__:null,content:Yg,frontmatter:Gg},Symbol.toStringTag,{value:"Module"})),Lg={title:"Testing dan Test-Driven Development",subtitle:'"Kenapa kode harus dites? memang perlu? memang ngga makan banyak waktu?"',description:"Rangkuman pembelajaran saya mengenai Testing dan Test-Driven Development menggunakan Jest dan React Testing Library ",tag:"Blog",keywords:["Testing","TDD","Learning","Jest","React Testing Library"],status:"In Progress",publishedAt:"2021-09-12",updatedAt:"2021-09-12",image:"../../assets/blog/testing-dan-tdd/testing-dan-tdd.webp",imageAlt:"Ilustrasi botol kaca lab sebagai logo",author:"Abdullah Ammar"},Vg=`\r
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
`,sf=Object.freeze(Object.defineProperty({__proto__:null,content:Vg,frontmatter:Lg},Symbol.toStringTag,{value:"Module"})),Yi=v=>{const[z,E,h]=v.split("-");return new Date(`${h}-${E}-${z}`)},Xg=v=>Zd(Yi(v),"dd/MM/yyyy"),hp=v=>Zd(Yi(v),"MMMM dd, yyyy"),Qg=v=>{var z;return((z=v.match(/\/([^/]+)\.md$/))==null?void 0:z[1])||""},Zg=()=>Object.assign({"../contents/custom-domain-tech.md":Id,"../contents/field.linkname.md":Pd,"../contents/integration-test-in-react.md":af,"../contents/kau-aku-jazz.md":tf,"../contents/membangun-kebun-digital.md":ef,"../contents/opinion-aesthetica.md":nf,"../contents/organizing-react-code.md":lf,"../contents/pengujian-ce.md":uf,"../contents/tailwind-prose.md":rf,"../contents/testing-dan-tdd.md":sf}),Kg=v=>Object.entries(v).sort(([,z],[,E])=>{const h=z.frontmatter.date?Yi(z.frontmatter.date):new Date(0),A=E.frontmatter.date?Yi(E.frontmatter.date):new Date(0);return Lh(h,A)}),Jg=v=>v.map(([z,E])=>{const h=Qg(z),{frontmatter:A}=E,R=A.title||"Untitled",O=A.date?Xg(A.date):null;return{title:R,path:`/blog/${h}`,date:O}});function Wg(){const v=Zg(),z=Kg(v),E=Jg(z);return y.jsx(Wd,{children:y.jsxs(Tl,{children:[y.jsx(xl,{children:"Study"}),y.jsxs(wg,{children:[y.jsx(kn,{}),E.map(({title:h,path:A,date:R})=>y.jsxs(y.Fragment,{children:[y.jsxs(Tg,{to:A,children:[y.jsx("p",{children:h}),y.jsx("p",{children:R&&`${R}`})]},A),y.jsx(kn,{})]}))]})]})})}function $g(){return y.jsx(Jd,{children:y.jsx(Wg,{})})}function Fg(){return y.jsxs(y.Fragment,{children:[y.jsx(Ig,{children:y.jsx(Kd,{})}),y.jsxs(Pg,{children:[y.jsx("p",{children:"404"}),y.jsx("p",{children:"Not Found"})]})]})}const Ig=I.div`
  nav {
    position: fixed;
  }
`,Pg=I.main`
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
`,ap="modulepreload",tp=function(v){return"/deskreview-react/"+v},Vd={},ep=function(z,E,h){let A=Promise.resolve();if(E&&E.length>0){document.getElementsByTagName("link");const O=document.querySelector("meta[property=csp-nonce]"),ea=(O==null?void 0:O.nonce)||(O==null?void 0:O.getAttribute("nonce"));A=Promise.allSettled(E.map(X=>{if(X=tp(X),X in Vd)return;Vd[X]=!0;const ca=X.endsWith(".css"),ft=ca?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${X}"]${ft}`))return;const P=document.createElement("link");if(P.rel=ca?"stylesheet":ap,ca||(P.as="script"),P.crossOrigin="",P.href=X,ea&&P.setAttribute("nonce",ea),document.head.appendChild(P),ca)return new Promise((ua,Ta)=>{P.addEventListener("load",ua),P.addEventListener("error",()=>Ta(new Error(`Unable to preload CSS for ${X}`)))})}))}function R(O){const ea=new Event("vite:preloadError",{cancelable:!0});if(ea.payload=O,window.dispatchEvent(ea),!ea.defaultPrevented)throw O}return A.then(O=>{for(const ea of O||[])ea.status==="rejected"&&R(ea.reason);return z().catch(R)})};function np(){return Object.entries(Object.assign({"../contents/custom-domain-tech.md":Id,"../contents/field.linkname.md":Pd,"../contents/integration-test-in-react.md":af,"../contents/kau-aku-jazz.md":tf,"../contents/membangun-kebun-digital.md":ef,"../contents/opinion-aesthetica.md":nf,"../contents/organizing-react-code.md":lf,"../contents/pengujian-ce.md":uf,"../contents/tailwind-prose.md":rf,"../contents/testing-dan-tdd.md":sf})).map(([z,E])=>{var O;const h=((O=z.match(/\/([^/]+)\.md$/))==null?void 0:O[1])||"",{frontmatter:A,content:R}=E;return{path:h,frontmatter:A,content:R}})}const lp=Me.lazy(()=>ep(()=>import("./BlogPost-Dr3SAJx5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])));function ip(){return np().map(({path:z,frontmatter:E,content:h})=>y.jsx(wl,{path:z,element:y.jsx(lp,{frontmatter:E,children:y.jsx(Mh,{children:h,remarkPlugins:[Vh],rehypePlugins:[Xh]})})},z))}function up(){const v=ip();return y.jsxs(y.Fragment,{children:[y.jsx(Fh,{}),y.jsxs(Uh,{children:[y.jsx(wl,{path:"/",element:y.jsx(Sg,{})}),y.jsxs(wl,{path:"/blog",children:[y.jsx(wl,{index:!0,element:y.jsx($g,{})}),v]}),y.jsx(wl,{path:"*",element:y.jsx(Fg,{})})]})]})}Wh.createRoot(document.getElementById("root")).render(y.jsx(Me.StrictMode,{children:y.jsxs(Rh,{basename:"/deskreview-react/",children:[y.jsx($h,{}),y.jsx(up,{})]})}));export{Wd as M,Tl as S,Jd as a,hp as f};
