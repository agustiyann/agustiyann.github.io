function lk(t,i){for(var r=0;r<i.length;r++){const l=i[r];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in t)){const o=Object.getOwnPropertyDescriptor(l,u);o&&Object.defineProperty(t,u,o.get?o:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerPolicy&&(o.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?o.credentials="include":u.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(u){if(u.ep)return;u.ep=!0;const o=r(u);fetch(u.href,o)}})();function Fi(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bc={exports:{}},Fr={};var ag;function sk(){if(ag)return Fr;ag=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(l,u,o){var c=null;if(o!==void 0&&(c=""+o),u.key!==void 0&&(c=""+u.key),"key"in u){o={};for(var p in u)p!=="key"&&(o[p]=u[p])}else o=u;return u=o.ref,{$$typeof:t,type:l,key:c,ref:u!==void 0?u:null,props:o}}return Fr.Fragment=i,Fr.jsx=r,Fr.jsxs=r,Fr}var ig;function ok(){return ig||(ig=1,bc.exports=sk()),bc.exports}var v=ok(),vc={exports:{}},ye={};var rg;function uk(){if(rg)return ye;rg=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=S&&C[S]||C["@@iterator"],typeof C=="function"?C:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,_={};function E(C,H,w){this.props=C,this.context=H,this.refs=_,this.updater=w||A}E.prototype.isReactComponent={},E.prototype.setState=function(C,H){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,H,"setState")},E.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function q(){}q.prototype=E.prototype;function U(C,H,w){this.props=C,this.context=H,this.refs=_,this.updater=w||A}var K=U.prototype=new q;K.constructor=U,L(K,E.prototype),K.isPureReactComponent=!0;var te=Array.isArray;function D(){}var $={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function de(C,H,w){var ie=w.ref;return{$$typeof:t,type:C,key:H,ref:ie!==void 0?ie:null,props:w}}function R(C,H){return de(C.type,H,C.props)}function ee(C){return typeof C=="object"&&C!==null&&C.$$typeof===t}function J(C){var H={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(w){return H[w]})}var re=/\/+/g;function ae(C,H){return typeof C=="object"&&C!==null&&C.key!=null?J(""+C.key):H.toString(36)}function Z(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(D,D):(C.status="pending",C.then(function(H){C.status==="pending"&&(C.status="fulfilled",C.value=H)},function(H){C.status==="pending"&&(C.status="rejected",C.reason=H)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function B(C,H,w,ie,pe){var ce=typeof C;(ce==="undefined"||ce==="boolean")&&(C=null);var ke=!1;if(C===null)ke=!0;else switch(ce){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(C.$$typeof){case t:case i:ke=!0;break;case g:return ke=C._init,B(ke(C._payload),H,w,ie,pe)}}if(ke)return pe=pe(C),ke=ie===""?"."+ae(C,0):ie,te(pe)?(w="",ke!=null&&(w=ke.replace(re,"$&/")+"/"),B(pe,H,w,"",function(Et){return Et})):pe!=null&&(ee(pe)&&(pe=R(pe,w+(pe.key==null||C&&C.key===pe.key?"":(""+pe.key).replace(re,"$&/")+"/")+ke)),H.push(pe)),1;ke=0;var Ie=ie===""?".":ie+":";if(te(C))for(var Me=0;Me<C.length;Me++)ie=C[Me],ce=Ie+ae(ie,Me),ke+=B(ie,H,w,ce,pe);else if(Me=x(C),typeof Me=="function")for(C=Me.call(C),Me=0;!(ie=C.next()).done;)ie=ie.value,ce=Ie+ae(ie,Me++),ke+=B(ie,H,w,ce,pe);else if(ce==="object"){if(typeof C.then=="function")return B(Z(C),H,w,ie,pe);throw H=String(C),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ke}function Q(C,H,w){if(C==null)return C;var ie=[],pe=0;return B(C,ie,"","",function(ce){return H.call(w,ce,pe++)}),ie}function se(C){if(C._status===-1){var H=C._result;H=H(),H.then(function(w){(C._status===0||C._status===-1)&&(C._status=1,C._result=w)},function(w){(C._status===0||C._status===-1)&&(C._status=2,C._result=w)}),C._status===-1&&(C._status=0,C._result=H)}if(C._status===1)return C._result.default;throw C._result}var be=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},j={map:Q,forEach:function(C,H,w){Q(C,function(){H.apply(this,arguments)},w)},count:function(C){var H=0;return Q(C,function(){H++}),H},toArray:function(C){return Q(C,function(H){return H})||[]},only:function(C){if(!ee(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ye.Activity=y,ye.Children=j,ye.Component=E,ye.Fragment=r,ye.Profiler=u,ye.PureComponent=U,ye.StrictMode=l,ye.Suspense=m,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ye.__COMPILER_RUNTIME={__proto__:null,c:function(C){return $.H.useMemoCache(C)}},ye.cache=function(C){return function(){return C.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(C,H,w){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ie=L({},C.props),pe=C.key;if(H!=null)for(ce in H.key!==void 0&&(pe=""+H.key),H)!le.call(H,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&H.ref===void 0||(ie[ce]=H[ce]);var ce=arguments.length-2;if(ce===1)ie.children=w;else if(1<ce){for(var ke=Array(ce),Ie=0;Ie<ce;Ie++)ke[Ie]=arguments[Ie+2];ie.children=ke}return de(C.type,pe,ie)},ye.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:o,_context:C},C},ye.createElement=function(C,H,w){var ie,pe={},ce=null;if(H!=null)for(ie in H.key!==void 0&&(ce=""+H.key),H)le.call(H,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(pe[ie]=H[ie]);var ke=arguments.length-2;if(ke===1)pe.children=w;else if(1<ke){for(var Ie=Array(ke),Me=0;Me<ke;Me++)Ie[Me]=arguments[Me+2];pe.children=Ie}if(C&&C.defaultProps)for(ie in ke=C.defaultProps,ke)pe[ie]===void 0&&(pe[ie]=ke[ie]);return de(C,ce,pe)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(C){return{$$typeof:p,render:C}},ye.isValidElement=ee,ye.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:se}},ye.memo=function(C,H){return{$$typeof:h,type:C,compare:H===void 0?null:H}},ye.startTransition=function(C){var H=$.T,w={};$.T=w;try{var ie=C(),pe=$.S;pe!==null&&pe(w,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(D,be)}catch(ce){be(ce)}finally{H!==null&&w.types!==null&&(H.types=w.types),$.T=H}},ye.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ye.use=function(C){return $.H.use(C)},ye.useActionState=function(C,H,w){return $.H.useActionState(C,H,w)},ye.useCallback=function(C,H){return $.H.useCallback(C,H)},ye.useContext=function(C){return $.H.useContext(C)},ye.useDebugValue=function(){},ye.useDeferredValue=function(C,H){return $.H.useDeferredValue(C,H)},ye.useEffect=function(C,H){return $.H.useEffect(C,H)},ye.useEffectEvent=function(C){return $.H.useEffectEvent(C)},ye.useId=function(){return $.H.useId()},ye.useImperativeHandle=function(C,H,w){return $.H.useImperativeHandle(C,H,w)},ye.useInsertionEffect=function(C,H){return $.H.useInsertionEffect(C,H)},ye.useLayoutEffect=function(C,H){return $.H.useLayoutEffect(C,H)},ye.useMemo=function(C,H){return $.H.useMemo(C,H)},ye.useOptimistic=function(C,H){return $.H.useOptimistic(C,H)},ye.useReducer=function(C,H,w){return $.H.useReducer(C,H,w)},ye.useRef=function(C){return $.H.useRef(C)},ye.useState=function(C){return $.H.useState(C)},ye.useSyncExternalStore=function(C,H,w){return $.H.useSyncExternalStore(C,H,w)},ye.useTransition=function(){return $.H.useTransition()},ye.version="19.2.4",ye}var lg;function Ad(){return lg||(lg=1,vc.exports=uk()),vc.exports}var X=Ad();const Re=Fi(X),ck=lk({__proto__:null,default:Re},[X]);var xc={exports:{}},Vr={},Sc={exports:{}},kc={};var sg;function dk(){return sg||(sg=1,(function(t){function i(B,Q){var se=B.length;B.push(Q);e:for(;0<se;){var be=se-1>>>1,j=B[be];if(0<u(j,Q))B[be]=Q,B[se]=j,se=be;else break e}}function r(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var Q=B[0],se=B.pop();if(se!==Q){B[0]=se;e:for(var be=0,j=B.length,C=j>>>1;be<C;){var H=2*(be+1)-1,w=B[H],ie=H+1,pe=B[ie];if(0>u(w,se))ie<j&&0>u(pe,w)?(B[be]=pe,B[ie]=se,be=ie):(B[be]=w,B[H]=se,be=H);else if(ie<j&&0>u(pe,se))B[be]=pe,B[ie]=se,be=ie;else break e}}return Q}function u(B,Q){var se=B.sortIndex-Q.sortIndex;return se!==0?se:B.id-Q.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var c=Date,p=c.now();t.unstable_now=function(){return c.now()-p}}var m=[],h=[],g=1,y=null,S=3,x=!1,A=!1,L=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function K(B){for(var Q=r(h);Q!==null;){if(Q.callback===null)l(h);else if(Q.startTime<=B)l(h),Q.sortIndex=Q.expirationTime,i(m,Q);else break;Q=r(h)}}function te(B){if(L=!1,K(B),!A)if(r(m)!==null)A=!0,D||(D=!0,J());else{var Q=r(h);Q!==null&&Z(te,Q.startTime-B)}}var D=!1,$=-1,le=5,de=-1;function R(){return _?!0:!(t.unstable_now()-de<le)}function ee(){if(_=!1,D){var B=t.unstable_now();de=B;var Q=!0;try{e:{A=!1,L&&(L=!1,q($),$=-1),x=!0;var se=S;try{t:{for(K(B),y=r(m);y!==null&&!(y.expirationTime>B&&R());){var be=y.callback;if(typeof be=="function"){y.callback=null,S=y.priorityLevel;var j=be(y.expirationTime<=B);if(B=t.unstable_now(),typeof j=="function"){y.callback=j,K(B),Q=!0;break t}y===r(m)&&l(m),K(B)}else l(m);y=r(m)}if(y!==null)Q=!0;else{var C=r(h);C!==null&&Z(te,C.startTime-B),Q=!1}}break e}finally{y=null,S=se,x=!1}Q=void 0}}finally{Q?J():D=!1}}}var J;if(typeof U=="function")J=function(){U(ee)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ae=re.port2;re.port1.onmessage=ee,J=function(){ae.postMessage(null)}}else J=function(){E(ee,0)};function Z(B,Q){$=E(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(B){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var se=S;S=Q;try{return B()}finally{S=se}},t.unstable_requestPaint=function(){_=!0},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=S;S=B;try{return Q()}finally{S=se}},t.unstable_scheduleCallback=function(B,Q,se){var be=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?be+se:be):se=be,B){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=se+j,B={id:g++,callback:Q,priorityLevel:B,startTime:se,expirationTime:j,sortIndex:-1},se>be?(B.sortIndex=se,i(h,B),r(m)===null&&B===r(h)&&(L?(q($),$=-1):L=!0,Z(te,se-be))):(B.sortIndex=j,i(m,B),A||x||(A=!0,D||(D=!0,J()))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var Q=S;return function(){var se=S;S=Q;try{return B.apply(this,arguments)}finally{S=se}}}})(kc)),kc}var og;function fk(){return og||(og=1,Sc.exports=dk()),Sc.exports}var wc={exports:{}},xt={};var ug;function pk(){if(ug)return xt;ug=1;var t=Ad();function i(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function o(m,h,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:m,containerInfo:h,implementation:g}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,xt.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return o(m,h,null,g)},xt.flushSync=function(m){var h=c.T,g=l.p;try{if(c.T=null,l.p=2,m)return m()}finally{c.T=h,l.p=g,l.d.f()}},xt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,l.d.C(m,h))},xt.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},xt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,y=p(g,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?l.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:x}):g==="script"&&l.d.X(m,{crossOrigin:y,integrity:S,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},xt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);l.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&l.d.M(m)},xt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,y=p(g,h.crossOrigin);l.d.L(m,g,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},xt.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);l.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else l.d.m(m)},xt.requestFormReset=function(m){l.d.r(m)},xt.unstable_batchedUpdates=function(m,h){return m(h)},xt.useFormState=function(m,h,g){return c.H.useFormState(m,h,g)},xt.useFormStatus=function(){return c.H.useHostTransitionStatus()},xt.version="19.2.4",xt}var cg;function $y(){if(cg)return wc.exports;cg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),wc.exports=pk(),wc.exports}var dg;function mk(){if(dg)return Vr;dg=1;var t=fk(),i=Ad(),r=$y();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function c(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(o(e)!==e)throw Error(l(188))}function h(e){var n=e.alternate;if(!n){if(n=o(e),n===null)throw Error(l(188));return n!==e?null:e}for(var a=e,s=n;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(s=d.return,s!==null){a=s;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return m(d),e;if(f===s)return m(d),n;f=f.sibling}throw Error(l(188))}if(a.return!==s.return)a=d,s=f;else{for(var b=!1,k=d.child;k;){if(k===a){b=!0,a=d,s=f;break}if(k===s){b=!0,s=d,a=f;break}k=k.sibling}if(!b){for(k=f.child;k;){if(k===a){b=!0,a=f,s=d;break}if(k===s){b=!0,s=f,a=d;break}k=k.sibling}if(!b)throw Error(l(189))}}if(a.alternate!==s)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),U=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case E:return"Profiler";case _:return"StrictMode";case te:return"Suspense";case D:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case U:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case K:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case le:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var Z=Array.isArray,B=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},be=[],j=-1;function C(e){return{current:e}}function H(e){0>j||(e.current=be[j],be[j]=null,j--)}function w(e,n){j++,be[j]=e.current,e.current=n}var ie=C(null),pe=C(null),ce=C(null),ke=C(null);function Ie(e,n){switch(w(ce,n),w(pe,e),w(ie,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Th(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Th(n),e=Ch(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(ie),w(ie,e)}function Me(){H(ie),H(pe),H(ce)}function Et(e){e.memoizedState!==null&&w(ke,e);var n=ie.current,a=Ch(n,e.type);n!==a&&(w(pe,e),w(ie,a))}function un(e){pe.current===e&&(H(ie),H(pe)),ke.current===e&&(H(ke),Ir._currentValue=se)}var Xi,fl;function An(e){if(Xi===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xi=n&&n[1]||"",fl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+e+fl}var Ya=!1;function $a(e,n){if(!e||Ya)return"";Ya=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(P){var I=P}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(P){I=P}e.call(Y.prototype)}}else{try{throw Error()}catch(P){I=P}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(P){if(P&&I&&typeof P.stack=="string")return[P.stack,I.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),b=f[0],k=f[1];if(b&&k){var T=b.split(`
`),z=k.split(`
`);for(d=s=0;s<T.length&&!T[s].includes("DetermineComponentFrameRoot");)s++;for(;d<z.length&&!z[d].includes("DetermineComponentFrameRoot");)d++;if(s===T.length||d===z.length)for(s=T.length-1,d=z.length-1;1<=s&&0<=d&&T[s]!==z[d];)d--;for(;1<=s&&0<=d;s--,d--)if(T[s]!==z[d]){if(s!==1||d!==1)do if(s--,d--,0>d||T[s]!==z[d]){var F=`
`+T[s].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=s&&0<=d);break}}}finally{Ya=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?An(a):""}function pl(e,n){switch(e.tag){case 26:case 27:case 5:return An(e.type);case 16:return An("Lazy");case 13:return e.child!==n&&n!==null?An("Suspense Fallback"):An("Suspense");case 19:return An("SuspenseList");case 0:case 15:return $a(e.type,!1);case 11:return $a(e.type.render,!1);case 1:return $a(e.type,!0);case 31:return An("Activity");default:return""}}function ml(e){try{var n="",a=null;do n+=pl(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ka=Object.prototype.hasOwnProperty,Qa=t.unstable_scheduleCallback,Zi=t.unstable_cancelCallback,no=t.unstable_shouldYield,ao=t.unstable_requestPaint,At=t.unstable_now,io=t.unstable_getCurrentPriorityLevel,V=t.unstable_ImmediatePriority,ne=t.unstable_UserBlockingPriority,ge=t.unstable_NormalPriority,we=t.unstable_LowPriority,ze=t.unstable_IdlePriority,It=t.log,jn=t.unstable_setDisableYieldValue,jt=null,ot=null;function Ot(e){if(typeof It=="function"&&jn(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(jt,e)}catch{}}var Fe=Math.clz32?Math.clz32:Yv,Gn=Math.log,cn=Math.LN2;function Yv(e){return e>>>=0,e===0?32:31-(Gn(e)/cn|0)|0}var hl=256,gl=262144,yl=4194304;function wa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bl(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var d=0,f=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var k=s&134217727;return k!==0?(s=k&~f,s!==0?d=wa(s):(b&=k,b!==0?d=wa(b):a||(a=k&~e,a!==0&&(d=wa(a))))):(k=s&~f,k!==0?d=wa(k):b!==0?d=wa(b):a||(a=s&~e,a!==0&&(d=wa(a)))),d===0?0:n!==0&&n!==d&&(n&f)===0&&(f=d&-d,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:d}function Wi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function $v(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sf(){var e=yl;return yl<<=1,(yl&62914560)===0&&(yl=4194304),e}function ro(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ji(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kv(e,n,a,s,d,f){var b=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var k=e.entanglements,T=e.expirationTimes,z=e.hiddenUpdates;for(a=b&~a;0<a;){var F=31-Fe(a),Y=1<<F;k[F]=0,T[F]=-1;var I=z[F];if(I!==null)for(z[F]=null,F=0;F<I.length;F++){var P=I[F];P!==null&&(P.lane&=-536870913)}a&=~Y}s!==0&&of(e,s,0),f!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=f&~(b&~n))}function of(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Fe(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function uf(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Fe(a),d=1<<s;d&n|e[s]&n&&(e[s]|=n),a&=~d}}function cf(e,n){var a=n&-n;return a=(a&42)!==0?1:lo(a),(a&(e.suspendedLanes|n))!==0?0:a}function lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function so(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function df(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Xh(e.type))}function ff(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var Yn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Yn,_t="__reactProps$"+Yn,Xa="__reactContainer$"+Yn,oo="__reactEvents$"+Yn,Qv="__reactListeners$"+Yn,Xv="__reactHandles$"+Yn,pf="__reactResources$"+Yn,er="__reactMarker$"+Yn;function uo(e){delete e[mt],delete e[_t],delete e[oo],delete e[Qv],delete e[Xv]}function Za(e){var n=e[mt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Xa]||a[mt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Mh(e);e!==null;){if(a=e[mt])return a;e=Mh(e)}return n}e=a,a=e.parentNode}return null}function Wa(e){if(e=e[mt]||e[Xa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function tr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function Ja(e){var n=e[pf];return n||(n=e[pf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dt(e){e[er]=!0}var mf=new Set,hf={};function Aa(e,n){ei(e,n),ei(e+"Capture",n)}function ei(e,n){for(hf[e]=n,e=0;e<n.length;e++)mf.add(n[e])}var Zv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gf={},yf={};function Wv(e){return Ka.call(yf,e)?!0:Ka.call(gf,e)?!1:Zv.test(e)?yf[e]=!0:(gf[e]=!0,!1)}function vl(e,n,a){if(Wv(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function xl(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Tn(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jv(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(b){a=""+b,f.call(this,b)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function co(e){if(!e._valueTracker){var n=bf(e)?"checked":"value";e._valueTracker=Jv(e,n,""+e[n])}}function vf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=bf(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ex=/[\n"\\]/g;function Zt(e){return e.replace(ex,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function fo(e,n,a,s,d,f,b,k){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?po(e,b,Xt(n)):a!=null?po(e,b,Xt(a)):s!=null&&e.removeAttribute("value"),d==null&&f!=null&&(e.defaultChecked=!!f),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?e.name=""+Xt(k):e.removeAttribute("name")}function xf(e,n,a,s,d,f,b,k){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){co(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,k||n===e.value||(e.value=n),e.defaultValue=n}s=s??d,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=k?e.checked:!!s,e.defaultChecked=!!s,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),co(e)}function po(e,n,a){n==="number"&&Sl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ti(e,n,a,s){if(e=e.options,n){n={};for(var d=0;d<a.length;d++)n["$"+a[d]]=!0;for(a=0;a<e.length;a++)d=n.hasOwnProperty("$"+e[a].value),e[a].selected!==d&&(e[a].selected=d),d&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,d=0;d<e.length;d++){if(e[d].value===a){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function Sf(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function kf(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(l(92));if(Z(s)){if(1<s.length)throw Error(l(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),co(e)}function ni(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var tx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wf(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||tx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Af(e,n,a){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var d in n)s=n[d],n.hasOwnProperty(d)&&a[d]!==s&&wf(e,d,s)}else for(var f in n)n.hasOwnProperty(f)&&wf(e,f,n[f])}function mo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(e){return ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Cn(){}var ho=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,ii=null;function jf(e){var n=Wa(e);if(n&&(e=n.stateNode)){var a=e[_t]||null;e:switch(e=n.stateNode,n.type){case"input":if(fo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var d=s[_t]||null;if(!d)throw Error(l(90));fo(s,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&vf(s)}break e;case"textarea":Sf(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ti(e,!!a.multiple,n,!1)}}}var yo=!1;function Tf(e,n,a){if(yo)return e(n,a);yo=!0;try{var s=e(n);return s}finally{if(yo=!1,(ai!==null||ii!==null)&&(us(),ai&&(n=ai,e=ii,ii=ai=null,jf(n),e)))for(n=0;n<e.length;n++)jf(e[n])}}function nr(e,n){var a=e.stateNode;if(a===null)return null;var s=a[_t]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,n,typeof a));return a}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(En)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){bo=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{bo=!1}var $n=null,vo=null,wl=null;function Cf(){if(wl)return wl;var e,n=vo,a=n.length,s,d="value"in $n?$n.value:$n.textContent,f=d.length;for(e=0;e<a&&n[e]===d[e];e++);var b=a-e;for(s=1;s<=b&&n[a-s]===d[f-s];s++);return wl=d.slice(e,1<s?1-s:void 0)}function Al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function Ef(){return!1}function Dt(e){function n(a,s,d,f,b){this._reactName=a,this._targetInst=d,this.type=s,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(a=e[k],this[k]=a?a(f):f[k]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jl:Ef,this.isPropagationStopped=Ef,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Dt(ja),ir=y({},ja,{view:0,detail:0}),ix=Dt(ir),xo,So,rr,Cl=y({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(xo=e.screenX-rr.screenX,So=e.screenY-rr.screenY):So=xo=0,rr=e),xo)},movementY:function(e){return"movementY"in e?e.movementY:So}}),Of=Dt(Cl),rx=y({},Cl,{dataTransfer:0}),lx=Dt(rx),sx=y({},ir,{relatedTarget:0}),ko=Dt(sx),ox=y({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Dt(ox),cx=y({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dx=Dt(cx),fx=y({},ja,{data:0}),_f=Dt(fx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hx[e])?!!n[e]:!1}function wo(){return gx}var yx=y({},ir,{key:function(e){if(e.key){var n=px[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bx=Dt(yx),vx=y({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=Dt(vx),xx=y({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),Sx=Dt(xx),kx=y({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=Dt(kx),Ax=y({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=Dt(Ax),Tx=y({},ja,{newState:0,oldState:0}),Cx=Dt(Tx),Ex=[9,13,27,32],Ao=En&&"CompositionEvent"in window,lr=null;En&&"documentMode"in document&&(lr=document.documentMode);var Ox=En&&"TextEvent"in window&&!lr,Nf=En&&(!Ao||lr&&8<lr&&11>=lr),Lf=" ",Mf=!1;function zf(e,n){switch(e){case"keyup":return Ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function _x(e,n){switch(e){case"compositionend":return Rf(n);case"keypress":return n.which!==32?null:(Mf=!0,Lf);case"textInput":return e=n.data,e===Lf&&Mf?null:e;default:return null}}function Dx(e,n){if(ri)return e==="compositionend"||!Ao&&zf(e,n)?(e=Cf(),wl=vo=$n=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nf&&n.locale!=="ko"?null:n.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nx[e.type]:n==="textarea"}function Uf(e,n,a,s){ai?ii?ii.push(s):ii=[s]:ai=s,n=gs(n,"onChange"),0<n.length&&(a=new Tl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var sr=null,or=null;function Lx(e){xh(e,0)}function El(e){var n=tr(e);if(vf(n))return e}function If(e,n){if(e==="change")return n}var Pf=!1;if(En){var jo;if(En){var To="oninput"in document;if(!To){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),To=typeof qf.oninput=="function"}jo=To}else jo=!1;Pf=jo&&(!document.documentMode||9<document.documentMode)}function Hf(){sr&&(sr.detachEvent("onpropertychange",Ff),or=sr=null)}function Ff(e){if(e.propertyName==="value"&&El(or)){var n=[];Uf(n,or,e,go(e)),Tf(Lx,n)}}function Mx(e,n,a){e==="focusin"?(Hf(),sr=n,or=a,sr.attachEvent("onpropertychange",Ff)):e==="focusout"&&Hf()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(or)}function Rx(e,n){if(e==="click")return El(n)}function Bx(e,n){if(e==="input"||e==="change")return El(n)}function Ux(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Pt=typeof Object.is=="function"?Object.is:Ux;function ur(e,n){if(Pt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var d=a[s];if(!Ka.call(n,d)||!Pt(e[d],n[d]))return!1}return!0}function Vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gf(e,n){var a=Vf(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vf(a)}}function Yf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $f(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sl(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Sl(e.document)}return n}function Co(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ix=En&&"documentMode"in document&&11>=document.documentMode,li=null,Eo=null,cr=null,Oo=!1;function Kf(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oo||li==null||li!==Sl(s)||(s=li,"selectionStart"in s&&Co(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),cr&&ur(cr,s)||(cr=s,s=gs(Eo,"onSelect"),0<s.length&&(n=new Tl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=li)))}function Ta(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var si={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},_o={},Qf={};En&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Ca(e){if(_o[e])return _o[e];if(!si[e])return e;var n=si[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qf)return _o[e]=n[a];return e}var Xf=Ca("animationend"),Zf=Ca("animationiteration"),Wf=Ca("animationstart"),Px=Ca("transitionrun"),qx=Ca("transitionstart"),Hx=Ca("transitioncancel"),Jf=Ca("transitionend"),ep=new Map,Do="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Do.push("scrollEnd");function dn(e,n){ep.set(e,n),Aa(n,[e])}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],oi=0,No=0;function _l(){for(var e=oi,n=No=oi=0;n<e;){var a=Wt[n];Wt[n++]=null;var s=Wt[n];Wt[n++]=null;var d=Wt[n];Wt[n++]=null;var f=Wt[n];if(Wt[n++]=null,s!==null&&d!==null){var b=s.pending;b===null?d.next=d:(d.next=b.next,b.next=d),s.pending=d}f!==0&&tp(a,d,f)}}function Dl(e,n,a,s){Wt[oi++]=e,Wt[oi++]=n,Wt[oi++]=a,Wt[oi++]=s,No|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Lo(e,n,a,s){return Dl(e,n,a,s),Nl(e)}function Ea(e,n){return Dl(e,null,null,n),Nl(e)}function tp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var d=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(d=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,d&&n!==null&&(d=31-Fe(a),e=f.hiddenUpdates,s=e[d],s===null?e[d]=[n]:s.push(n),n.lane=a|536870912),f):null}function Nl(e){if(50<Nr)throw Nr=0,Hu=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ui={};function Fx(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,n,a,s){return new Fx(e,n,a,s)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function On(e,n){var a=e.alternate;return a===null?(a=qt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function np(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ll(e,n,a,s,d,f){var b=0;if(s=e,typeof e=="function")Mo(e)&&(b=1);else if(typeof e=="string")b=KS(e,a,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=qt(31,a,n,d),e.elementType=de,e.lanes=f,e;case L:return Oa(a.children,d,f,n);case _:b=8,d|=24;break;case E:return e=qt(12,a,n,d|2),e.elementType=E,e.lanes=f,e;case te:return e=qt(13,a,n,d),e.elementType=te,e.lanes=f,e;case D:return e=qt(19,a,n,d),e.elementType=D,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:b=10;break e;case q:b=9;break e;case K:b=11;break e;case $:b=14;break e;case le:b=16,s=null;break e}b=29,a=Error(l(130,e===null?"null":typeof e,"")),s=null}return n=qt(b,a,n,d),n.elementType=e,n.type=s,n.lanes=f,n}function Oa(e,n,a,s){return e=qt(7,e,s,n),e.lanes=a,e}function zo(e,n,a){return e=qt(6,e,null,n),e.lanes=a,e}function ap(e){var n=qt(18,null,null,0);return n.stateNode=e,n}function Ro(e,n,a){return n=qt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ip=new WeakMap;function Jt(e,n){if(typeof e=="object"&&e!==null){var a=ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ml(n)},ip.set(e,n),n)}return{value:e,source:n,stack:ml(n)}}var ci=[],di=0,Ml=null,dr=0,en=[],tn=0,Kn=null,yn=1,bn="";function _n(e,n){ci[di++]=dr,ci[di++]=Ml,Ml=e,dr=n}function rp(e,n,a){en[tn++]=yn,en[tn++]=bn,en[tn++]=Kn,Kn=e;var s=yn;e=bn;var d=32-Fe(s)-1;s&=~(1<<d),a+=1;var f=32-Fe(n)+d;if(30<f){var b=d-d%5;f=(s&(1<<b)-1).toString(32),s>>=b,d-=b,yn=1<<32-Fe(n)+d|a<<d|s,bn=f+e}else yn=1<<f|a<<d|s,bn=e}function Bo(e){e.return!==null&&(_n(e,1),rp(e,1,0))}function Uo(e){for(;e===Ml;)Ml=ci[--di],ci[di]=null,dr=ci[--di],ci[di]=null;for(;e===Kn;)Kn=en[--tn],en[tn]=null,bn=en[--tn],en[tn]=null,yn=en[--tn],en[tn]=null}function lp(e,n){en[tn++]=yn,en[tn++]=bn,en[tn++]=Kn,yn=n.id,bn=n.overflow,Kn=e}var ht=null,$e=null,Oe=!1,Qn=null,nn=!1,Io=Error(l(519));function Xn(e){var n=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fr(Jt(n,e)),Io}function sp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[mt]=e,n[_t]=s,a){case"dialog":je("cancel",n),je("close",n);break;case"iframe":case"object":case"embed":je("load",n);break;case"video":case"audio":for(a=0;a<Mr.length;a++)je(Mr[a],n);break;case"source":je("error",n);break;case"img":case"image":case"link":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"input":je("invalid",n),xf(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":je("invalid",n);break;case"textarea":je("invalid",n),kf(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ah(n.textContent,a)?(s.popover!=null&&(je("beforetoggle",n),je("toggle",n)),s.onScroll!=null&&je("scroll",n),s.onScrollEnd!=null&&je("scrollend",n),s.onClick!=null&&(n.onclick=Cn),n=!0):n=!1,n||Xn(e,!0)}function op(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 31:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:ht=ht.return}}function fi(e){if(e!==ht)return!1;if(!Oe)return op(e),Oe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ac(e.type,e.memoizedProps)),a=!a),a&&$e&&Xn(e),op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));$e=Lh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));$e=Lh(e)}else n===27?(n=$e,ca(e.type)?(e=oc,oc=null,$e=e):$e=n):$e=ht?rn(e.stateNode.nextSibling):null;return!0}function _a(){$e=ht=null,Oe=!1}function Po(){var e=Qn;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),Qn=null),e}function fr(e){Qn===null?Qn=[e]:Qn.push(e)}var qo=C(null),Da=null,Dn=null;function Zn(e,n,a){w(qo,n._currentValue),n._currentValue=a}function Nn(e){e._currentValue=qo.current,H(qo)}function Ho(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Fo(e,n,a,s){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var f=d.dependencies;if(f!==null){var b=d.child;f=f.firstContext;e:for(;f!==null;){var k=f;f=d;for(var T=0;T<n.length;T++)if(k.context===n[T]){f.lanes|=a,k=f.alternate,k!==null&&(k.lanes|=a),Ho(f.return,a,e),s||(b=null);break e}f=k.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(l(341));b.lanes|=a,f=b.alternate,f!==null&&(f.lanes|=a),Ho(b,a,e),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===e){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function pi(e,n,a,s){e=null;for(var d=n,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(l(387));if(b=b.memoizedProps,b!==null){var k=d.type;Pt(d.pendingProps.value,b.value)||(e!==null?e.push(k):e=[k])}}else if(d===ke.current){if(b=d.alternate,b===null)throw Error(l(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Ir):e=[Ir])}d=d.return}e!==null&&Fo(n,e,a,s),n.flags|=262144}function zl(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){Da=e,Dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function gt(e){return up(Da,e)}function Rl(e,n){return Da===null&&Na(e),up(e,n)}function up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Dn===null){if(e===null)throw Error(l(308));Dn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Dn=Dn.next=n;return a}var Vx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Gx=t.unstable_scheduleCallback,Yx=t.unstable_NormalPriority,nt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vo(){return{controller:new Vx,data:new Map,refCount:0}}function pr(e){e.refCount--,e.refCount===0&&Gx(Yx,function(){e.controller.abort()})}var mr=null,Go=0,mi=0,hi=null;function $x(e,n){if(mr===null){var a=mr=[];Go=0,mi=Ku(),hi={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Go++,n.then(cp,cp),n}function cp(){if(--Go===0&&mr!==null){hi!==null&&(hi.status="fulfilled");var e=mr;mr=null,mi=0,hi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Kx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var d=0;d<a.length;d++)(0,a[d])(n)},function(d){for(s.status="rejected",s.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),s}var dp=B.S;B.S=function(e,n){Km=At(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$x(e,n),dp!==null&&dp(e,n)};var La=C(null);function Yo(){var e=La.current;return e!==null?e:Ve.pooledCache}function Bl(e,n){n===null?w(La,La.current):w(La,n.pool)}function fp(){var e=Yo();return e===null?null:{parent:nt._currentValue,pool:e}}var gi=Error(l(460)),$o=Error(l(474)),Ul=Error(l(542)),Il={then:function(){}};function pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Cn,Cn),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gp(e),e;default:if(typeof n.status=="string")n.then(Cn,Cn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=s}},function(s){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gp(e),e}throw za=n,gi}}function Ma(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(za=a,gi):a}}var za=null;function hp(){if(za===null)throw Error(l(459));var e=za;return za=null,e}function gp(e){if(e===gi||e===Ul)throw Error(l(483))}var yi=null,hr=0;function Pl(e){var n=hr;return hr+=1,yi===null&&(yi=[]),mp(yi,e,n)}function gr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ql(e,n){throw n.$$typeof===S?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function yp(e){function n(N,O){if(e){var M=N.deletions;M===null?(N.deletions=[O],N.flags|=16):M.push(O)}}function a(N,O){if(!e)return null;for(;O!==null;)n(N,O),O=O.sibling;return null}function s(N){for(var O=new Map;N!==null;)N.key!==null?O.set(N.key,N):O.set(N.index,N),N=N.sibling;return O}function d(N,O){return N=On(N,O),N.index=0,N.sibling=null,N}function f(N,O,M){return N.index=M,e?(M=N.alternate,M!==null?(M=M.index,M<O?(N.flags|=67108866,O):M):(N.flags|=67108866,O)):(N.flags|=1048576,O)}function b(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function k(N,O,M,G){return O===null||O.tag!==6?(O=zo(M,N.mode,G),O.return=N,O):(O=d(O,M),O.return=N,O)}function T(N,O,M,G){var fe=M.type;return fe===L?F(N,O,M.props.children,G,M.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===le&&Ma(fe)===O.type)?(O=d(O,M.props),gr(O,M),O.return=N,O):(O=Ll(M.type,M.key,M.props,null,N.mode,G),gr(O,M),O.return=N,O)}function z(N,O,M,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==M.containerInfo||O.stateNode.implementation!==M.implementation?(O=Ro(M,N.mode,G),O.return=N,O):(O=d(O,M.children||[]),O.return=N,O)}function F(N,O,M,G,fe){return O===null||O.tag!==7?(O=Oa(M,N.mode,G,fe),O.return=N,O):(O=d(O,M),O.return=N,O)}function Y(N,O,M){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=zo(""+O,N.mode,M),O.return=N,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case x:return M=Ll(O.type,O.key,O.props,null,N.mode,M),gr(M,O),M.return=N,M;case A:return O=Ro(O,N.mode,M),O.return=N,O;case le:return O=Ma(O),Y(N,O,M)}if(Z(O)||J(O))return O=Oa(O,N.mode,M,null),O.return=N,O;if(typeof O.then=="function")return Y(N,Pl(O),M);if(O.$$typeof===U)return Y(N,Rl(N,O),M);ql(N,O)}return null}function I(N,O,M,G){var fe=O!==null?O.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return fe!==null?null:k(N,O,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case x:return M.key===fe?T(N,O,M,G):null;case A:return M.key===fe?z(N,O,M,G):null;case le:return M=Ma(M),I(N,O,M,G)}if(Z(M)||J(M))return fe!==null?null:F(N,O,M,G,null);if(typeof M.then=="function")return I(N,O,Pl(M),G);if(M.$$typeof===U)return I(N,O,Rl(N,M),G);ql(N,M)}return null}function P(N,O,M,G,fe){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return N=N.get(M)||null,k(O,N,""+G,fe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return N=N.get(G.key===null?M:G.key)||null,T(O,N,G,fe);case A:return N=N.get(G.key===null?M:G.key)||null,z(O,N,G,fe);case le:return G=Ma(G),P(N,O,M,G,fe)}if(Z(G)||J(G))return N=N.get(M)||null,F(O,N,G,fe,null);if(typeof G.then=="function")return P(N,O,M,Pl(G),fe);if(G.$$typeof===U)return P(N,O,M,Rl(O,G),fe);ql(O,G)}return null}function oe(N,O,M,G){for(var fe=null,De=null,ue=O,xe=O=0,Ee=null;ue!==null&&xe<M.length;xe++){ue.index>xe?(Ee=ue,ue=null):Ee=ue.sibling;var Ne=I(N,ue,M[xe],G);if(Ne===null){ue===null&&(ue=Ee);break}e&&ue&&Ne.alternate===null&&n(N,ue),O=f(Ne,O,xe),De===null?fe=Ne:De.sibling=Ne,De=Ne,ue=Ee}if(xe===M.length)return a(N,ue),Oe&&_n(N,xe),fe;if(ue===null){for(;xe<M.length;xe++)ue=Y(N,M[xe],G),ue!==null&&(O=f(ue,O,xe),De===null?fe=ue:De.sibling=ue,De=ue);return Oe&&_n(N,xe),fe}for(ue=s(ue);xe<M.length;xe++)Ee=P(ue,N,xe,M[xe],G),Ee!==null&&(e&&Ee.alternate!==null&&ue.delete(Ee.key===null?xe:Ee.key),O=f(Ee,O,xe),De===null?fe=Ee:De.sibling=Ee,De=Ee);return e&&ue.forEach(function(ha){return n(N,ha)}),Oe&&_n(N,xe),fe}function he(N,O,M,G){if(M==null)throw Error(l(151));for(var fe=null,De=null,ue=O,xe=O=0,Ee=null,Ne=M.next();ue!==null&&!Ne.done;xe++,Ne=M.next()){ue.index>xe?(Ee=ue,ue=null):Ee=ue.sibling;var ha=I(N,ue,Ne.value,G);if(ha===null){ue===null&&(ue=Ee);break}e&&ue&&ha.alternate===null&&n(N,ue),O=f(ha,O,xe),De===null?fe=ha:De.sibling=ha,De=ha,ue=Ee}if(Ne.done)return a(N,ue),Oe&&_n(N,xe),fe;if(ue===null){for(;!Ne.done;xe++,Ne=M.next())Ne=Y(N,Ne.value,G),Ne!==null&&(O=f(Ne,O,xe),De===null?fe=Ne:De.sibling=Ne,De=Ne);return Oe&&_n(N,xe),fe}for(ue=s(ue);!Ne.done;xe++,Ne=M.next())Ne=P(ue,N,xe,Ne.value,G),Ne!==null&&(e&&Ne.alternate!==null&&ue.delete(Ne.key===null?xe:Ne.key),O=f(Ne,O,xe),De===null?fe=Ne:De.sibling=Ne,De=Ne);return e&&ue.forEach(function(rk){return n(N,rk)}),Oe&&_n(N,xe),fe}function He(N,O,M,G){if(typeof M=="object"&&M!==null&&M.type===L&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case x:e:{for(var fe=M.key;O!==null;){if(O.key===fe){if(fe=M.type,fe===L){if(O.tag===7){a(N,O.sibling),G=d(O,M.props.children),G.return=N,N=G;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===le&&Ma(fe)===O.type){a(N,O.sibling),G=d(O,M.props),gr(G,M),G.return=N,N=G;break e}a(N,O);break}else n(N,O);O=O.sibling}M.type===L?(G=Oa(M.props.children,N.mode,G,M.key),G.return=N,N=G):(G=Ll(M.type,M.key,M.props,null,N.mode,G),gr(G,M),G.return=N,N=G)}return b(N);case A:e:{for(fe=M.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===M.containerInfo&&O.stateNode.implementation===M.implementation){a(N,O.sibling),G=d(O,M.children||[]),G.return=N,N=G;break e}else{a(N,O);break}else n(N,O);O=O.sibling}G=Ro(M,N.mode,G),G.return=N,N=G}return b(N);case le:return M=Ma(M),He(N,O,M,G)}if(Z(M))return oe(N,O,M,G);if(J(M)){if(fe=J(M),typeof fe!="function")throw Error(l(150));return M=fe.call(M),he(N,O,M,G)}if(typeof M.then=="function")return He(N,O,Pl(M),G);if(M.$$typeof===U)return He(N,O,Rl(N,M),G);ql(N,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,O!==null&&O.tag===6?(a(N,O.sibling),G=d(O,M),G.return=N,N=G):(a(N,O),G=zo(M,N.mode,G),G.return=N,N=G),b(N)):a(N,O)}return function(N,O,M,G){try{hr=0;var fe=He(N,O,M,G);return yi=null,fe}catch(ue){if(ue===gi||ue===Ul)throw ue;var De=qt(29,ue,null,N.mode);return De.lanes=G,De.return=N,De}}}var Ra=yp(!0),bp=yp(!1),Wn=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ea(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var d=s.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),s.pending=n,n=Nl(e),tp(e,null,a),n}return Dl(e,s,n,a),Nl(e)}function yr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,uf(e,a)}}function Xo(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?d=f=b:f=f.next=b,a=a.next}while(a!==null);f===null?d=f=n:f=f.next=n}else d=f=n;a={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Zo=!1;function br(){if(Zo){var e=hi;if(e!==null)throw e}}function vr(e,n,a,s){Zo=!1;var d=e.updateQueue;Wn=!1;var f=d.firstBaseUpdate,b=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var T=k,z=T.next;T.next=null,b===null?f=z:b.next=z,b=T;var F=e.alternate;F!==null&&(F=F.updateQueue,k=F.lastBaseUpdate,k!==b&&(k===null?F.firstBaseUpdate=z:k.next=z,F.lastBaseUpdate=T))}if(f!==null){var Y=d.baseState;b=0,F=z=T=null,k=f;do{var I=k.lane&-536870913,P=I!==k.lane;if(P?(Ce&I)===I:(s&I)===I){I!==0&&I===mi&&(Zo=!0),F!==null&&(F=F.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var oe=e,he=k;I=n;var He=a;switch(he.tag){case 1:if(oe=he.payload,typeof oe=="function"){Y=oe.call(He,Y,I);break e}Y=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=he.payload,I=typeof oe=="function"?oe.call(He,Y,I):oe,I==null)break e;Y=y({},Y,I);break e;case 2:Wn=!0}}I=k.callback,I!==null&&(e.flags|=64,P&&(e.flags|=8192),P=d.callbacks,P===null?d.callbacks=[I]:P.push(I))}else P={lane:I,tag:k.tag,payload:k.payload,callback:k.callback,next:null},F===null?(z=F=P,T=Y):F=F.next=P,b|=I;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;P=k,k=P.next,P.next=null,d.lastBaseUpdate=P,d.shared.pending=null}}while(!0);F===null&&(T=Y),d.baseState=T,d.firstBaseUpdate=z,d.lastBaseUpdate=F,f===null&&(d.shared.lanes=0),ra|=b,e.lanes=b,e.memoizedState=Y}}function vp(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function xp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vp(a[e],n)}var bi=C(null),Hl=C(0);function Sp(e,n){e=qn,w(Hl,e),w(bi,n),qn=e|n.baseLanes}function Wo(){w(Hl,qn),w(bi,bi.current)}function Jo(){qn=Hl.current,H(bi),H(Hl)}var Ht=C(null),an=null;function ta(e){var n=e.alternate;w(Je,Je.current&1),w(Ht,e),an===null&&(n===null||bi.current!==null||n.memoizedState!==null)&&(an=e)}function eu(e){w(Je,Je.current),w(Ht,e),an===null&&(an=e)}function kp(e){e.tag===22?(w(Je,Je.current),w(Ht,e),an===null&&(an=e)):na()}function na(){w(Je,Je.current),w(Ht,Ht.current)}function Ft(e){H(Ht),an===e&&(an=null),H(Je)}var Je=C(0);function Fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lc(a)||sc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ln=0,ve=null,Pe=null,at=null,Vl=!1,vi=!1,Ba=!1,Gl=0,xr=0,xi=null,Qx=0;function Ze(){throw Error(l(321))}function tu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Pt(e[a],n[a]))return!1;return!0}function nu(e,n,a,s,d,f){return Ln=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?rm:yu,Ba=!1,f=a(s,d),Ba=!1,vi&&(f=Ap(n,a,s,d)),wp(e),f}function wp(e){B.H=wr;var n=Pe!==null&&Pe.next!==null;if(Ln=0,at=Pe=ve=null,Vl=!1,xr=0,xi=null,n)throw Error(l(300));e===null||it||(e=e.dependencies,e!==null&&zl(e)&&(it=!0))}function Ap(e,n,a,s){ve=e;var d=0;do{if(vi&&(xi=null),xr=0,vi=!1,25<=d)throw Error(l(301));if(d+=1,at=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=lm,f=n(a,s)}while(vi);return f}function Xx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?Sr(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(ve.flags|=1024),n}function au(){var e=Gl!==0;return Gl=0,e}function iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ru(e){if(Vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Vl=!1}Ln=0,at=Pe=ve=null,vi=!1,xr=Gl=0,xi=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?ve.memoizedState=at=e:at=at.next=e,at}function et(){if(Pe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=at===null?ve.memoizedState:at.next;if(n!==null)at=n,Pe=e;else{if(e===null)throw ve.alternate===null?Error(l(467)):Error(l(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},at===null?ve.memoizedState=at=e:at=at.next=e}return at}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sr(e){var n=xr;return xr+=1,xi===null&&(xi=[]),e=mp(xi,e,n),n=ve,(at===null?n.memoizedState:at.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?rm:yu),e}function $l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sr(e);if(e.$$typeof===U)return gt(e)}throw Error(l(438,String(e)))}function lu(e){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ve.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yl(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=R;return n.index++,a}function Mn(e,n){return typeof n=="function"?n(e):n}function Kl(e){var n=et();return su(n,Pe,e)}function su(e,n,a){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=a;var d=e.baseQueue,f=s.pending;if(f!==null){if(d!==null){var b=d.next;d.next=f.next,f.next=b}n.baseQueue=d=f,s.pending=null}if(f=e.baseState,d===null)e.memoizedState=f;else{n=d.next;var k=b=null,T=null,z=n,F=!1;do{var Y=z.lane&-536870913;if(Y!==z.lane?(Ce&Y)===Y:(Ln&Y)===Y){var I=z.revertLane;if(I===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Y===mi&&(F=!0);else if((Ln&I)===I){z=z.next,I===mi&&(F=!0);continue}else Y={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},T===null?(k=T=Y,b=f):T=T.next=Y,ve.lanes|=I,ra|=I;Y=z.action,Ba&&a(f,Y),f=z.hasEagerState?z.eagerState:a(f,Y)}else I={lane:Y,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},T===null?(k=T=I,b=f):T=T.next=I,ve.lanes|=Y,ra|=Y;z=z.next}while(z!==null&&z!==n);if(T===null?b=f:T.next=k,!Pt(f,e.memoizedState)&&(it=!0,F&&(a=hi,a!==null)))throw a;e.memoizedState=f,e.baseState=b,e.baseQueue=T,s.lastRenderedState=f}return d===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ou(e){var n=et(),a=n.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var s=a.dispatch,d=a.pending,f=n.memoizedState;if(d!==null){a.pending=null;var b=d=d.next;do f=e(f,b.action),b=b.next;while(b!==d);Pt(f,n.memoizedState)||(it=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function jp(e,n,a){var s=ve,d=et(),f=Oe;if(f){if(a===void 0)throw Error(l(407));a=a()}else a=n();var b=!Pt((Pe||d).memoizedState,a);if(b&&(d.memoizedState=a,it=!0),d=d.queue,du(Ep.bind(null,s,d,e),[e]),d.getSnapshot!==n||b||at!==null&&at.memoizedState.tag&1){if(s.flags|=2048,Si(9,{destroy:void 0},Cp.bind(null,s,d,a,n),null),Ve===null)throw Error(l(349));f||(Ln&127)!==0||Tp(s,n,a)}return a}function Tp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=Yl(),ve.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Cp(e,n,a,s){n.value=a,n.getSnapshot=s,Op(n)&&_p(e)}function Ep(e,n,a){return a(function(){Op(n)&&_p(e)})}function Op(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Pt(e,a)}catch{return!0}}function _p(e){var n=Ea(e,2);n!==null&&Rt(n,e,2)}function uu(e){var n=Tt();if(typeof e=="function"){var a=e;if(e=a(),Ba){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},n}function Dp(e,n,a,s){return e.baseState=a,su(e,Pe,typeof s=="function"?s:Mn)}function Zx(e,n,a,s,d){if(Zl(e))throw Error(l(485));if(e=n.action,e!==null){var f={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Np(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Np(e,n){var a=n.action,s=n.payload,d=e.state;if(n.isTransition){var f=B.T,b={};B.T=b;try{var k=a(d,s),T=B.S;T!==null&&T(b,k),Lp(e,n,k)}catch(z){cu(e,n,z)}finally{f!==null&&b.types!==null&&(f.types=b.types),B.T=f}}else try{f=a(d,s),Lp(e,n,f)}catch(z){cu(e,n,z)}}function Lp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Mp(e,n,s)},function(s){return cu(e,n,s)}):Mp(e,n,a)}function Mp(e,n,a){n.status="fulfilled",n.value=a,zp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Np(e,a)))}function cu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,zp(n),n=n.next;while(n!==s)}e.action=null}function zp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rp(e,n){return n}function Bp(e,n){if(Oe){var a=Ve.formState;if(a!==null){e:{var s=ve;if(Oe){if($e){t:{for(var d=$e,f=nn;d.nodeType!==8;){if(!f){d=null;break t}if(d=rn(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){$e=rn(d.nextSibling),s=d.data==="F!";break e}}Xn(s)}s=!1}s&&(n=a[0])}}return a=Tt(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rp,lastRenderedState:n},a.queue=s,a=nm.bind(null,ve,s),s.dispatch=a,s=uu(!1),f=gu.bind(null,ve,!1,s.queue),s=Tt(),d={state:n,dispatch:null,action:e,pending:null},s.queue=d,a=Zx.bind(null,ve,d,f,a),d.dispatch=a,s.memoizedState=e,[n,a,!1]}function Up(e){var n=et();return Ip(n,Pe,e)}function Ip(e,n,a){if(n=su(e,n,Rp)[0],e=Kl(Mn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Sr(n)}catch(b){throw b===gi?Ul:b}else s=n;n=et();var d=n.queue,f=d.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Si(9,{destroy:void 0},Wx.bind(null,d,a),null)),[s,f,e]}function Wx(e,n){e.action=n}function Pp(e){var n=et(),a=Pe;if(a!==null)return Ip(n,a,e);et(),n=n.memoizedState,a=et();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Si(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ve.updateQueue,n===null&&(n=Yl(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function qp(){return et().memoizedState}function Ql(e,n,a,s){var d=Tt();ve.flags|=e,d.memoizedState=Si(1|n,{destroy:void 0},a,s===void 0?null:s)}function Xl(e,n,a,s){var d=et();s=s===void 0?null:s;var f=d.memoizedState.inst;Pe!==null&&s!==null&&tu(s,Pe.memoizedState.deps)?d.memoizedState=Si(n,f,a,s):(ve.flags|=e,d.memoizedState=Si(1|n,f,a,s))}function Hp(e,n){Ql(8390656,8,e,n)}function du(e,n){Xl(2048,8,e,n)}function Jx(e){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=Yl(),ve.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Fp(e){var n=et().memoizedState;return Jx({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}function Vp(e,n){return Xl(4,2,e,n)}function Gp(e,n){return Xl(4,4,e,n)}function Yp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $p(e,n,a){a=a!=null?a.concat([e]):null,Xl(4,4,Yp.bind(null,n,e),a)}function fu(){}function Kp(e,n){var a=et();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&tu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Qp(e,n){var a=et();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&tu(n,s[1]))return s[0];if(s=e(),Ba){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[s,n],s}function pu(e,n,a){return a===void 0||(Ln&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Xm(),ve.lanes|=e,ra|=e,a)}function Xp(e,n,a,s){return Pt(a,n)?a:bi.current!==null?(e=pu(e,a,s),Pt(e,n)||(it=!0),e):(Ln&42)===0||(Ln&1073741824)!==0&&(Ce&261930)===0?(it=!0,e.memoizedState=a):(e=Xm(),ve.lanes|=e,ra|=e,n)}function Zp(e,n,a,s,d){var f=Q.p;Q.p=f!==0&&8>f?f:8;var b=B.T,k={};B.T=k,gu(e,!1,n,a);try{var T=d(),z=B.S;if(z!==null&&z(k,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var F=Kx(T,s);kr(e,n,F,Yt(e))}else kr(e,n,s,Yt(e))}catch(Y){kr(e,n,{then:function(){},status:"rejected",reason:Y},Yt())}finally{Q.p=f,b!==null&&k.types!==null&&(b.types=k.types),B.T=b}}function eS(){}function mu(e,n,a,s){if(e.tag!==5)throw Error(l(476));var d=Wp(e).queue;Zp(e,d,n,se,a===null?eS:function(){return Jp(e),a(s)})}function Wp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:se},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jp(e){var n=Wp(e);n.next===null&&(n=e.alternate.memoizedState),kr(e,n.next.queue,{},Yt())}function hu(){return gt(Ir)}function em(){return et().memoizedState}function tm(){return et().memoizedState}function tS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yt();e=Jn(a);var s=ea(n,e,a);s!==null&&(Rt(s,n,a),yr(s,n,a)),n={cache:Vo()},e.payload=n;return}n=n.return}}function nS(e,n,a){var s=Yt();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(e)?am(n,a):(a=Lo(e,n,a,s),a!==null&&(Rt(a,e,s),im(a,n,s)))}function nm(e,n,a){var s=Yt();kr(e,n,a,s)}function kr(e,n,a,s){var d={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(e))am(n,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var b=n.lastRenderedState,k=f(b,a);if(d.hasEagerState=!0,d.eagerState=k,Pt(k,b))return Dl(e,n,d,0),Ve===null&&_l(),!1}catch{}if(a=Lo(e,n,d,s),a!==null)return Rt(a,e,s),im(a,n,s),!0}return!1}function gu(e,n,a,s){if(s={lane:2,revertLane:Ku(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Zl(e)){if(n)throw Error(l(479))}else n=Lo(e,a,s,2),n!==null&&Rt(n,e,2)}function Zl(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function am(e,n){vi=Vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function im(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,uf(e,a)}}var wr={readContext:gt,use:$l,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};wr.useEffectEvent=Ze;var rm={readContext:gt,use:$l,useCallback:function(e,n){return Tt().memoizedState=[e,n===void 0?null:n],e},useContext:gt,useEffect:Hp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ql(4194308,4,Yp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ql(4194308,4,e,n)},useInsertionEffect:function(e,n){Ql(4,2,e,n)},useMemo:function(e,n){var a=Tt();n=n===void 0?null:n;var s=e();if(Ba){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Tt();if(a!==void 0){var d=a(n);if(Ba){Ot(!0);try{a(n)}finally{Ot(!1)}}}else d=n;return s.memoizedState=s.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},s.queue=e,e=e.dispatch=nS.bind(null,ve,e),[s.memoizedState,e]},useRef:function(e){var n=Tt();return e={current:e},n.memoizedState=e},useState:function(e){e=uu(e);var n=e.queue,a=nm.bind(null,ve,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:fu,useDeferredValue:function(e,n){var a=Tt();return pu(a,e,n)},useTransition:function(){var e=uu(!1);return e=Zp.bind(null,ve,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ve,d=Tt();if(Oe){if(a===void 0)throw Error(l(407));a=a()}else{if(a=n(),Ve===null)throw Error(l(349));(Ce&127)!==0||Tp(s,n,a)}d.memoizedState=a;var f={value:a,getSnapshot:n};return d.queue=f,Hp(Ep.bind(null,s,f,e),[e]),s.flags|=2048,Si(9,{destroy:void 0},Cp.bind(null,s,f,a,n),null),a},useId:function(){var e=Tt(),n=Ve.identifierPrefix;if(Oe){var a=bn,s=yn;a=(s&~(1<<32-Fe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Qx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hu,useFormState:Bp,useActionState:Bp,useOptimistic:function(e){var n=Tt();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gu.bind(null,ve,!0,a),a.dispatch=n,[e,n]},useMemoCache:lu,useCacheRefresh:function(){return Tt().memoizedState=tS.bind(null,ve)},useEffectEvent:function(e){var n=Tt(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},yu={readContext:gt,use:$l,useCallback:Kp,useContext:gt,useEffect:du,useImperativeHandle:$p,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Qp,useReducer:Kl,useRef:qp,useState:function(){return Kl(Mn)},useDebugValue:fu,useDeferredValue:function(e,n){var a=et();return Xp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Kl(Mn)[0],n=et().memoizedState;return[typeof e=="boolean"?e:Sr(e),n]},useSyncExternalStore:jp,useId:em,useHostTransitionStatus:hu,useFormState:Up,useActionState:Up,useOptimistic:function(e,n){var a=et();return Dp(a,Pe,e,n)},useMemoCache:lu,useCacheRefresh:tm};yu.useEffectEvent=Fp;var lm={readContext:gt,use:$l,useCallback:Kp,useContext:gt,useEffect:du,useImperativeHandle:$p,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Qp,useReducer:ou,useRef:qp,useState:function(){return ou(Mn)},useDebugValue:fu,useDeferredValue:function(e,n){var a=et();return Pe===null?pu(a,e,n):Xp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=ou(Mn)[0],n=et().memoizedState;return[typeof e=="boolean"?e:Sr(e),n]},useSyncExternalStore:jp,useId:em,useHostTransitionStatus:hu,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var a=et();return Pe!==null?Dp(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lu,useCacheRefresh:tm};lm.useEffectEvent=Fp;function bu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Yt(),d=Jn(s);d.payload=n,a!=null&&(d.callback=a),n=ea(e,d,s),n!==null&&(Rt(n,e,s),yr(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Yt(),d=Jn(s);d.tag=1,d.payload=n,a!=null&&(d.callback=a),n=ea(e,d,s),n!==null&&(Rt(n,e,s),yr(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Yt(),s=Jn(a);s.tag=2,n!=null&&(s.callback=n),n=ea(e,s,a),n!==null&&(Rt(n,e,a),yr(n,e,a))}};function sm(e,n,a,s,d,f,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,b):n.prototype&&n.prototype.isPureReactComponent?!ur(a,s)||!ur(d,f):!0}function om(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&vu.enqueueReplaceState(n,n.state,null)}function Ua(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var d in e)a[d]===void 0&&(a[d]=e[d])}return a}function um(e){Ol(e)}function cm(e){console.error(e)}function dm(e){Ol(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function fm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function xu(e,n,a){return a=Jn(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function pm(e){return e=Jn(e),e.tag=3,e}function mm(e,n,a,s){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;e.payload=function(){return d(f)},e.callback=function(){fm(n,a,s)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){fm(n,a,s),typeof d!="function"&&(la===null?la=new Set([this]):la.add(this));var k=s.stack;this.componentDidCatch(s.value,{componentStack:k!==null?k:""})})}function aS(e,n,a,s,d){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&pi(n,a,d,!0),a=Ht.current,a!==null){switch(a.tag){case 31:case 13:return an===null?cs():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=d,s===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Gu(e,s,d)),!1;case 22:return a.flags|=65536,s===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Gu(e,s,d)),!1}throw Error(l(435,a.tag))}return Gu(e,s,d),cs(),!1}if(Oe)return n=Ht.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,s!==Io&&(e=Error(l(422),{cause:s}),fr(Jt(e,a)))):(s!==Io&&(n=Error(l(423),{cause:s}),fr(Jt(n,a))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,s=Jt(s,a),d=xu(e.stateNode,s,d),Xo(e,d),We!==4&&(We=2)),!1;var f=Error(l(520),{cause:s});if(f=Jt(f,a),Dr===null?Dr=[f]:Dr.push(f),We!==4&&(We=2),n===null)return!0;s=Jt(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=d&-d,a.lanes|=e,e=xu(a.stateNode,s,e),Xo(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(la===null||!la.has(f))))return a.flags|=65536,d&=-d,a.lanes|=d,d=pm(d),mm(d,e,a,s),Xo(a,d),!1}a=a.return}while(a!==null);return!1}var Su=Error(l(461)),it=!1;function yt(e,n,a,s){n.child=e===null?bp(n,null,a,s):Ra(n,e.child,a,s)}function hm(e,n,a,s,d){a=a.render;var f=n.ref;if("ref"in s){var b={};for(var k in s)k!=="ref"&&(b[k]=s[k])}else b=s;return Na(n),s=nu(e,n,a,b,f,d),k=au(),e!==null&&!it?(iu(e,n,d),zn(e,n,d)):(Oe&&k&&Bo(n),n.flags|=1,yt(e,n,s,d),n.child)}function gm(e,n,a,s,d){if(e===null){var f=a.type;return typeof f=="function"&&!Mo(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ym(e,n,f,s,d)):(e=Ll(a.type,null,s,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ou(e,d)){var b=f.memoizedProps;if(a=a.compare,a=a!==null?a:ur,a(b,s)&&e.ref===n.ref)return zn(e,n,d)}return n.flags|=1,e=On(f,s),e.ref=n.ref,e.return=n,n.child=e}function ym(e,n,a,s,d){if(e!==null){var f=e.memoizedProps;if(ur(f,s)&&e.ref===n.ref)if(it=!1,n.pendingProps=s=f,Ou(e,d))(e.flags&131072)!==0&&(it=!0);else return n.lanes=e.lanes,zn(e,n,d)}return ku(e,n,a,s,d)}function bm(e,n,a,s){var d=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,d=0;s!==null;)d=d|s.lanes|s.childLanes,s=s.sibling;s=d&~f}else s=0,n.child=null;return vm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(n,f!==null?f.cachePool:null),f!==null?Sp(n,f):Wo(),kp(n);else return s=n.lanes=536870912,vm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Bl(n,f.cachePool),Sp(n,f),na(),n.memoizedState=null):(e!==null&&Bl(n,null),Wo(),na());return yt(e,n,d,a),n.child}function Ar(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vm(e,n,a,s,d){var f=Yo();return f=f===null?null:{parent:nt._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Bl(n,null),Wo(),kp(n),e!==null&&pi(e,n,s,!0),n.childLanes=d,null}function Jl(e,n){return n=ts({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function xm(e,n,a){return Ra(n,e.child,null,a),e=Jl(n,n.pendingProps),e.flags|=2,Ft(n),n.memoizedState=null,e}function iS(e,n,a){var s=n.pendingProps,d=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Oe){if(s.mode==="hidden")return e=Jl(n,s),n.lanes=536870912,Ar(null,e);if(eu(n),(e=$e)?(e=Nh(e,nn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:yn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},a=ap(e),a.return=n,n.child=a,ht=n,$e=null)):e=null,e===null)throw Xn(n);return n.lanes=536870912,null}return Jl(n,s)}var f=e.memoizedState;if(f!==null){var b=f.dehydrated;if(eu(n),d)if(n.flags&256)n.flags&=-257,n=xm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(l(558));else if(it||pi(e,n,a,!1),d=(a&e.childLanes)!==0,it||d){if(s=Ve,s!==null&&(b=cf(s,a),b!==0&&b!==f.retryLane))throw f.retryLane=b,Ea(e,b),Rt(s,e,b),Su;cs(),n=xm(e,n,a)}else e=f.treeContext,$e=rn(b.nextSibling),ht=n,Oe=!0,Qn=null,nn=!1,e!==null&&lp(n,e),n=Jl(n,s),n.flags|=4096;return n}return e=On(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function es(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ku(e,n,a,s,d){return Na(n),a=nu(e,n,a,s,void 0,d),s=au(),e!==null&&!it?(iu(e,n,d),zn(e,n,d)):(Oe&&s&&Bo(n),n.flags|=1,yt(e,n,a,d),n.child)}function Sm(e,n,a,s,d,f){return Na(n),n.updateQueue=null,a=Ap(n,s,a,d),wp(e),s=au(),e!==null&&!it?(iu(e,n,f),zn(e,n,f)):(Oe&&s&&Bo(n),n.flags|=1,yt(e,n,a,f),n.child)}function km(e,n,a,s,d){if(Na(n),n.stateNode===null){var f=ui,b=a.contextType;typeof b=="object"&&b!==null&&(f=gt(b)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=vu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Ko(n),b=a.contextType,f.context=typeof b=="object"&&b!==null?gt(b):ui,f.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(bu(n,a,b,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&vu.enqueueReplaceState(f,f.state,null),vr(n,s,f,d),br(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var k=n.memoizedProps,T=Ua(a,k);f.props=T;var z=f.context,F=a.contextType;b=ui,typeof F=="object"&&F!==null&&(b=gt(F));var Y=a.getDerivedStateFromProps;F=typeof Y=="function"||typeof f.getSnapshotBeforeUpdate=="function",k=n.pendingProps!==k,F||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(k||z!==b)&&om(n,f,s,b),Wn=!1;var I=n.memoizedState;f.state=I,vr(n,s,f,d),br(),z=n.memoizedState,k||I!==z||Wn?(typeof Y=="function"&&(bu(n,a,Y,s),z=n.memoizedState),(T=Wn||sm(n,a,T,s,I,z,b))?(F||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=z),f.props=s,f.state=z,f.context=b,s=T):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Qo(e,n),b=n.memoizedProps,F=Ua(a,b),f.props=F,Y=n.pendingProps,I=f.context,z=a.contextType,T=ui,typeof z=="object"&&z!==null&&(T=gt(z)),k=a.getDerivedStateFromProps,(z=typeof k=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==Y||I!==T)&&om(n,f,s,T),Wn=!1,I=n.memoizedState,f.state=I,vr(n,s,f,d),br();var P=n.memoizedState;b!==Y||I!==P||Wn||e!==null&&e.dependencies!==null&&zl(e.dependencies)?(typeof k=="function"&&(bu(n,a,k,s),P=n.memoizedState),(F=Wn||sm(n,a,F,s,I,P,T)||e!==null&&e.dependencies!==null&&zl(e.dependencies))?(z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,P,T),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,P,T)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=P),f.props=s,f.state=P,f.context=T,s=F):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,es(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Ra(n,e.child,null,d),n.child=Ra(n,null,a,d)):yt(e,n,a,d),n.memoizedState=f.state,e=n.child):e=zn(e,n,d),e}function wm(e,n,a,s){return _a(),n.flags|=256,yt(e,n,a,s),n.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Au(e){return{baseLanes:e,cachePool:fp()}}function ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Gt),e}function Am(e,n,a){var s=n.pendingProps,d=!1,f=(n.flags&128)!==0,b;if((b=f)||(b=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),b&&(d=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if(Oe){if(d?ta(n):na(),(e=$e)?(e=Nh(e,nn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:yn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},a=ap(e),a.return=n,n.child=a,ht=n,$e=null)):e=null,e===null)throw Xn(n);return sc(e)?n.lanes=32:n.lanes=536870912,null}var k=s.children;return s=s.fallback,d?(na(),d=n.mode,k=ts({mode:"hidden",children:k},d),s=Oa(s,d,a,null),k.return=n,s.return=n,k.sibling=s,n.child=k,s=n.child,s.memoizedState=Au(a),s.childLanes=ju(e,b,a),n.memoizedState=wu,Ar(null,s)):(ta(n),Tu(n,k))}var T=e.memoizedState;if(T!==null&&(k=T.dehydrated,k!==null)){if(f)n.flags&256?(ta(n),n.flags&=-257,n=Cu(e,n,a)):n.memoizedState!==null?(na(),n.child=e.child,n.flags|=128,n=null):(na(),k=s.fallback,d=n.mode,s=ts({mode:"visible",children:s.children},d),k=Oa(k,d,a,null),k.flags|=2,s.return=n,k.return=n,s.sibling=k,n.child=s,Ra(n,e.child,null,a),s=n.child,s.memoizedState=Au(a),s.childLanes=ju(e,b,a),n.memoizedState=wu,n=Ar(null,s));else if(ta(n),sc(k)){if(b=k.nextSibling&&k.nextSibling.dataset,b)var z=b.dgst;b=z,s=Error(l(419)),s.stack="",s.digest=b,fr({value:s,source:null,stack:null}),n=Cu(e,n,a)}else if(it||pi(e,n,a,!1),b=(a&e.childLanes)!==0,it||b){if(b=Ve,b!==null&&(s=cf(b,a),s!==0&&s!==T.retryLane))throw T.retryLane=s,Ea(e,s),Rt(b,e,s),Su;lc(k)||cs(),n=Cu(e,n,a)}else lc(k)?(n.flags|=192,n.child=e.child,n=null):(e=T.treeContext,$e=rn(k.nextSibling),ht=n,Oe=!0,Qn=null,nn=!1,e!==null&&lp(n,e),n=Tu(n,s.children),n.flags|=4096);return n}return d?(na(),k=s.fallback,d=n.mode,T=e.child,z=T.sibling,s=On(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&65011712,z!==null?k=On(z,k):(k=Oa(k,d,a,null),k.flags|=2),k.return=n,s.return=n,s.sibling=k,n.child=s,Ar(null,s),s=n.child,k=e.child.memoizedState,k===null?k=Au(a):(d=k.cachePool,d!==null?(T=nt._currentValue,d=d.parent!==T?{parent:T,pool:T}:d):d=fp(),k={baseLanes:k.baseLanes|a,cachePool:d}),s.memoizedState=k,s.childLanes=ju(e,b,a),n.memoizedState=wu,Ar(e.child,s)):(ta(n),a=e.child,e=a.sibling,a=On(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=a,n.memoizedState=null,a)}function Tu(e,n){return n=ts({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ts(e,n){return e=qt(22,e,null,n),e.lanes=0,e}function Cu(e,n,a){return Ra(n,e.child,null,a),e=Tu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ho(e.return,n,a)}function Eu(e,n,a,s,d,f){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:d,treeForkCount:f}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=s,b.tail=a,b.tailMode=d,b.treeForkCount=f)}function Tm(e,n,a){var s=n.pendingProps,d=s.revealOrder,f=s.tail;s=s.children;var b=Je.current,k=(b&2)!==0;if(k?(b=b&1|2,n.flags|=128):b&=1,w(Je,b),yt(e,n,s,a),s=Oe?dr:0,!k&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,a,n);else if(e.tag===19)jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(a=n.child,d=null;a!==null;)e=a.alternate,e!==null&&Fl(e)===null&&(d=a),a=a.sibling;a=d,a===null?(d=n.child,n.child=null):(d=a.sibling,a.sibling=null),Eu(n,!1,d,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Fl(e)===null){n.child=d;break}e=d.sibling,d.sibling=a,a=d,d=e}Eu(n,!0,a,null,f,s);break;case"together":Eu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function zn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(pi(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,a=On(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=On(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ou(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&zl(e)))}function rS(e,n,a){switch(n.tag){case 3:Ie(n,n.stateNode.containerInfo),Zn(n,nt,e.memoizedState.cache),_a();break;case 27:case 5:Et(n);break;case 4:Ie(n,n.stateNode.containerInfo);break;case 10:Zn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,eu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Am(e,n,a):(ta(n),e=zn(e,n,a),e!==null?e.sibling:null);ta(n);break;case 19:var d=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(pi(e,n,a,!1),s=(a&n.childLanes)!==0),d){if(s)return Tm(e,n,a);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),w(Je,Je.current),s)break;return null;case 22:return n.lanes=0,bm(e,n,a,n.pendingProps);case 24:Zn(n,nt,e.memoizedState.cache)}return zn(e,n,a)}function Cm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)it=!0;else{if(!Ou(e,a)&&(n.flags&128)===0)return it=!1,rS(e,n,a);it=(e.flags&131072)!==0}else it=!1,Oe&&(n.flags&1048576)!==0&&rp(n,dr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=Ma(n.elementType),n.type=e,typeof e=="function")Mo(e)?(s=Ua(e,s),n.tag=1,n=km(null,n,e,s,a)):(n.tag=0,n=ku(null,n,e,s,a));else{if(e!=null){var d=e.$$typeof;if(d===K){n.tag=11,n=hm(null,n,e,s,a);break e}else if(d===$){n.tag=14,n=gm(null,n,e,s,a);break e}}throw n=ae(e)||e,Error(l(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,d=Ua(s,n.pendingProps),km(e,n,s,d,a);case 3:e:{if(Ie(n,n.stateNode.containerInfo),e===null)throw Error(l(387));s=n.pendingProps;var f=n.memoizedState;d=f.element,Qo(e,n),vr(n,s,null,a);var b=n.memoizedState;if(s=b.cache,Zn(n,nt,s),s!==f.cache&&Fo(n,[nt],a,!0),br(),s=b.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wm(e,n,s,a);break e}else if(s!==d){d=Jt(Error(l(424)),n),fr(d),n=wm(e,n,s,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,$e=rn(e.firstChild),ht=n,Oe=!0,Qn=null,nn=!0,a=bp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_a(),s===d){n=zn(e,n,a);break e}yt(e,n,s,a)}n=n.child}return n;case 26:return es(e,n),e===null?(a=Uh(n.type,null,n.pendingProps,null))?n.memoizedState=a:Oe||(a=n.type,e=n.pendingProps,s=ys(ce.current).createElement(a),s[mt]=n,s[_t]=e,bt(s,a,e),dt(s),n.stateNode=s):n.memoizedState=Uh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Et(n),e===null&&Oe&&(s=n.stateNode=zh(n.type,n.pendingProps,ce.current),ht=n,nn=!0,d=$e,ca(n.type)?(oc=d,$e=rn(s.firstChild)):$e=d),yt(e,n,n.pendingProps.children,a),es(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Oe&&((d=s=$e)&&(s=zS(s,n.type,n.pendingProps,nn),s!==null?(n.stateNode=s,ht=n,$e=rn(s.firstChild),nn=!1,d=!0):d=!1),d||Xn(n)),Et(n),d=n.type,f=n.pendingProps,b=e!==null?e.memoizedProps:null,s=f.children,ac(d,f)?s=null:b!==null&&ac(d,b)&&(n.flags|=32),n.memoizedState!==null&&(d=nu(e,n,Xx,null,null,a),Ir._currentValue=d),es(e,n),yt(e,n,s,a),n.child;case 6:return e===null&&Oe&&((e=a=$e)&&(a=RS(a,n.pendingProps,nn),a!==null?(n.stateNode=a,ht=n,$e=null,e=!0):e=!1),e||Xn(n)),null;case 13:return Am(e,n,a);case 4:return Ie(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ra(n,null,s,a):yt(e,n,s,a),n.child;case 11:return hm(e,n,n.type,n.pendingProps,a);case 7:return yt(e,n,n.pendingProps,a),n.child;case 8:return yt(e,n,n.pendingProps.children,a),n.child;case 12:return yt(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Zn(n,n.type,s.value),yt(e,n,s.children,a),n.child;case 9:return d=n.type._context,s=n.pendingProps.children,Na(n),d=gt(d),s=s(d),n.flags|=1,yt(e,n,s,a),n.child;case 14:return gm(e,n,n.type,n.pendingProps,a);case 15:return ym(e,n,n.type,n.pendingProps,a);case 19:return Tm(e,n,a);case 31:return iS(e,n,a);case 22:return bm(e,n,a,n.pendingProps);case 24:return Na(n),s=gt(nt),e===null?(d=Yo(),d===null&&(d=Ve,f=Vo(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=a),d=f),n.memoizedState={parent:s,cache:d},Ko(n),Zn(n,nt,d)):((e.lanes&a)!==0&&(Qo(e,n),vr(n,null,null,a),br()),d=e.memoizedState,f=n.memoizedState,d.parent!==s?(d={parent:s,cache:s},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),Zn(n,nt,s)):(s=f.cache,Zn(n,nt,s),s!==d.cache&&Fo(n,[nt],a,!0))),yt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function Rn(e){e.flags|=4}function _u(e,n,a,s,d){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(eh())e.flags|=8192;else throw za=Il,$o}else e.flags&=-16777217}function Em(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fh(n))if(eh())e.flags|=8192;else throw za=Il,$o}function ns(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?sf():536870912,e.lanes|=n,ji|=n)}function jr(e,n){if(!Oe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var d=e.child;d!==null;)a|=d.lanes|d.childLanes,s|=d.subtreeFlags&65011712,s|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)a|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function lS(e,n,a){var s=n.pendingProps;switch(Uo(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Nn(nt),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fi(n)?Rn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Po())),Ke(n),null;case 26:var d=n.type,f=n.memoizedState;return e===null?(Rn(n),f!==null?(Ke(n),Em(n,f)):(Ke(n),_u(n,d,null,s,a))):f?f!==e.memoizedState?(Rn(n),Ke(n),Em(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Rn(n),Ke(n),_u(n,d,e,s,a)),null;case 27:if(un(n),a=ce.current,d=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Rn(n);else{if(!s){if(n.stateNode===null)throw Error(l(166));return Ke(n),null}e=ie.current,fi(n)?sp(n):(e=zh(d,s,a),n.stateNode=e,Rn(n))}return Ke(n),null;case 5:if(un(n),d=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Rn(n);else{if(!s){if(n.stateNode===null)throw Error(l(166));return Ke(n),null}if(f=ie.current,fi(n))sp(n);else{var b=ys(ce.current);switch(f){case 1:f=b.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:f=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":f=b.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":f=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":f=b.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?b.createElement("select",{is:s.is}):b.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?b.createElement(d,{is:s.is}):b.createElement(d)}}f[mt]=n,f[_t]=s;e:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)f.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break e;for(;b.sibling===null;){if(b.return===null||b.return===n)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=f;e:switch(bt(f,d,s),d){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Rn(n)}}return Ke(n),_u(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Rn(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(l(166));if(e=ce.current,fi(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,d=ht,d!==null)switch(d.tag){case 27:case 5:s=d.memoizedProps}e[mt]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ah(e.nodeValue,a)),e||Xn(n,!0)}else e=ys(e).createTextNode(s),e[mt]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=fi(n),a!==null){if(e===null){if(!s)throw Error(l(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[mt]=n}else _a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Ft(n),n):(Ft(n),null);if((n.flags&128)!==0)throw Error(l(558))}return Ke(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=fi(n),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(l(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[mt]=n}else _a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),d=!1}else d=Po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?(Ft(n),n):(Ft(n),null)}return Ft(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,d=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(d=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==d&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ns(n,n.updateQueue),Ke(n),null);case 4:return Me(),e===null&&Wu(n.stateNode.containerInfo),Ke(n),null;case 10:return Nn(n.type),Ke(n),null;case 19:if(H(Je),s=n.memoizedState,s===null)return Ke(n),null;if(d=(n.flags&128)!==0,f=s.rendering,f===null)if(d)jr(s,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Fl(e),f!==null){for(n.flags|=128,jr(s,!1),e=f.updateQueue,n.updateQueue=e,ns(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)np(a,e),a=a.sibling;return w(Je,Je.current&1|2),Oe&&_n(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&At()>ss&&(n.flags|=128,d=!0,jr(s,!1),n.lanes=4194304)}else{if(!d)if(e=Fl(f),e!==null){if(n.flags|=128,d=!0,e=e.updateQueue,n.updateQueue=e,ns(n,e),jr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Oe)return Ke(n),null}else 2*At()-s.renderingStartTime>ss&&a!==536870912&&(n.flags|=128,d=!0,jr(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,a=Je.current,w(Je,d?a&1|2:a&1),Oe&&_n(n,s.treeForkCount),e):(Ke(n),null);case 22:case 23:return Ft(n),Jo(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ns(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&H(La),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Nn(nt),Ke(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function sS(e,n){switch(Uo(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Nn(nt),Me(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return un(n),null;case 31:if(n.memoizedState!==null){if(Ft(n),n.alternate===null)throw Error(l(340));_a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ft(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));_a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(Je),null;case 4:return Me(),null;case 10:return Nn(n.type),null;case 22:case 23:return Ft(n),Jo(),e!==null&&H(La),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Nn(nt),null;case 25:return null;default:return null}}function Om(e,n){switch(Uo(n),n.tag){case 3:Nn(nt),Me();break;case 26:case 27:case 5:un(n);break;case 4:Me();break;case 31:n.memoizedState!==null&&Ft(n);break;case 13:Ft(n);break;case 19:H(Je);break;case 10:Nn(n.type);break;case 22:case 23:Ft(n),Jo(),e!==null&&H(La);break;case 24:Nn(nt)}}function Tr(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var d=s.next;a=d;do{if((a.tag&e)===e){s=void 0;var f=a.create,b=a.inst;s=f(),b.destroy=s}a=a.next}while(a!==d)}}catch(k){Ue(n,n.return,k)}}function aa(e,n,a){try{var s=n.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var f=d.next;s=f;do{if((s.tag&e)===e){var b=s.inst,k=b.destroy;if(k!==void 0){b.destroy=void 0,d=n;var T=a,z=k;try{z()}catch(F){Ue(d,T,F)}}}s=s.next}while(s!==f)}}catch(F){Ue(n,n.return,F)}}function _m(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xp(n,a)}catch(s){Ue(e,e.return,s)}}}function Dm(e,n,a){a.props=Ua(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ue(e,n,s)}}function Cr(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(d){Ue(e,n,d)}}function vn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(d){Ue(e,n,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){Ue(e,n,d)}else a.current=null}function Nm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(d){Ue(e,e.return,d)}}function Du(e,n,a){try{var s=e.stateNode;OS(s,e.type,a,n),s[_t]=n}catch(d){Ue(e,e.return,d)}}function Lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ca(e.type)||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Cn));else if(s!==4&&(s===27&&ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Lu(e,n,a),e=e.sibling;e!==null;)Lu(e,n,a),e=e.sibling}function as(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(as(e,n,a),e=e.sibling;e!==null;)as(e,n,a),e=e.sibling}function Mm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);bt(n,s,a),n[mt]=e,n[_t]=a}catch(f){Ue(e,e.return,f)}}var Bn=!1,rt=!1,Mu=!1,zm=typeof WeakSet=="function"?WeakSet:Set,ft=null;function oS(e,n){if(e=e.containerInfo,tc=As,e=$f(e),Co(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var d=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var b=0,k=-1,T=-1,z=0,F=0,Y=e,I=null;t:for(;;){for(var P;Y!==a||d!==0&&Y.nodeType!==3||(k=b+d),Y!==f||s!==0&&Y.nodeType!==3||(T=b+s),Y.nodeType===3&&(b+=Y.nodeValue.length),(P=Y.firstChild)!==null;)I=Y,Y=P;for(;;){if(Y===e)break t;if(I===a&&++z===d&&(k=b),I===f&&++F===s&&(T=b),(P=Y.nextSibling)!==null)break;Y=I,I=Y.parentNode}Y=P}a=k===-1||T===-1?null:{start:k,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(nc={focusedElem:e,selectionRange:a},As=!1,ft=n;ft!==null;)if(n=ft,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ft=e;else for(;ft!==null;){switch(n=ft,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)d=e[a],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,d=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var oe=Ua(a.type,d);e=s.getSnapshotBeforeUpdate(oe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(he){Ue(a,a.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)rc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=n.sibling,e!==null){e.return=n.return,ft=e;break}ft=n.return}}function Rm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:In(e,a),s&4&&Tr(5,a);break;case 1:if(In(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Ue(a,a.return,b)}else{var d=Ua(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(d,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ue(a,a.return,b)}}s&64&&_m(a),s&512&&Cr(a,a.return);break;case 3:if(In(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xp(e,n)}catch(b){Ue(a,a.return,b)}}break;case 27:n===null&&s&4&&Mm(a);case 26:case 5:In(e,a),n===null&&s&4&&Nm(a),s&512&&Cr(a,a.return);break;case 12:In(e,a);break;case 31:In(e,a),s&4&&Im(e,a);break;case 13:In(e,a),s&4&&Pm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yS.bind(null,a),BS(e,a))));break;case 22:if(s=a.memoizedState!==null||Bn,!s){n=n!==null&&n.memoizedState!==null||rt,d=Bn;var f=rt;Bn=s,(rt=n)&&!f?Pn(e,a,(a.subtreeFlags&8772)!==0):In(e,a),Bn=d,rt=f}break;case 30:break;default:In(e,a)}}function Bm(e){var n=e.alternate;n!==null&&(e.alternate=null,Bm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&uo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Nt=!1;function Un(e,n,a){for(a=a.child;a!==null;)Um(e,n,a),a=a.sibling}function Um(e,n,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:rt||vn(a,n),Un(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rt||vn(a,n);var s=Xe,d=Nt;ca(a.type)&&(Xe=a.stateNode,Nt=!1),Un(e,n,a),Rr(a.stateNode),Xe=s,Nt=d;break;case 5:rt||vn(a,n);case 6:if(s=Xe,d=Nt,Xe=null,Un(e,n,a),Xe=s,Nt=d,Xe!==null)if(Nt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Ue(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Ue(a,n,f)}break;case 18:Xe!==null&&(Nt?(e=Xe,_h(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Li(e)):_h(Xe,a.stateNode));break;case 4:s=Xe,d=Nt,Xe=a.stateNode.containerInfo,Nt=!0,Un(e,n,a),Xe=s,Nt=d;break;case 0:case 11:case 14:case 15:aa(2,a,n),rt||aa(4,a,n),Un(e,n,a);break;case 1:rt||(vn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Dm(a,n,s)),Un(e,n,a);break;case 21:Un(e,n,a);break;case 22:rt=(s=rt)||a.memoizedState!==null,Un(e,n,a),rt=s;break;default:Un(e,n,a)}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Li(e)}catch(a){Ue(n,n.return,a)}}}function Pm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Li(e)}catch(a){Ue(n,n.return,a)}}function uS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zm),n;default:throw Error(l(435,e.tag))}}function is(e,n){var a=uS(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var d=bS.bind(null,e,s);s.then(d,d)}})}function Lt(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var d=a[s],f=e,b=n,k=b;e:for(;k!==null;){switch(k.tag){case 27:if(ca(k.type)){Xe=k.stateNode,Nt=!1;break e}break;case 5:Xe=k.stateNode,Nt=!1;break e;case 3:case 4:Xe=k.stateNode.containerInfo,Nt=!0;break e}k=k.return}if(Xe===null)throw Error(l(160));Um(f,b,d),Xe=null,Nt=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)qm(n,e),n=n.sibling}var fn=null;function qm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Lt(n,e),Mt(e),s&4&&(aa(3,e,e.return),Tr(3,e),aa(5,e,e.return));break;case 1:Lt(n,e),Mt(e),s&512&&(rt||a===null||vn(a,a.return)),s&64&&Bn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var d=fn;if(Lt(n,e),Mt(e),s&512&&(rt||a===null||vn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,d=d.ownerDocument||d;t:switch(s){case"title":f=d.getElementsByTagName("title")[0],(!f||f[er]||f[mt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(s),d.head.insertBefore(f,d.querySelector("head > title"))),bt(f,s,a),f[mt]=e,dt(f),s=f;break e;case"link":var b=qh("link","href",d).get(s+(a.href||""));if(b){for(var k=0;k<b.length;k++)if(f=b[k],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(k,1);break t}}f=d.createElement(s),bt(f,s,a),d.head.appendChild(f);break;case"meta":if(b=qh("meta","content",d).get(s+(a.content||""))){for(k=0;k<b.length;k++)if(f=b[k],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(k,1);break t}}f=d.createElement(s),bt(f,s,a),d.head.appendChild(f);break;default:throw Error(l(468,s))}f[mt]=e,dt(f),s=f}e.stateNode=s}else Hh(d,e.type,e.stateNode);else e.stateNode=Ph(d,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Hh(d,e.type,e.stateNode):Ph(d,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Du(e,e.memoizedProps,a.memoizedProps)}break;case 27:Lt(n,e),Mt(e),s&512&&(rt||a===null||vn(a,a.return)),a!==null&&s&4&&Du(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Lt(n,e),Mt(e),s&512&&(rt||a===null||vn(a,a.return)),e.flags&32){d=e.stateNode;try{ni(d,"")}catch(oe){Ue(e,e.return,oe)}}s&4&&e.stateNode!=null&&(d=e.memoizedProps,Du(e,d,a!==null?a.memoizedProps:d)),s&1024&&(Mu=!0);break;case 6:if(Lt(n,e),Mt(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(oe){Ue(e,e.return,oe)}}break;case 3:if(xs=null,d=fn,fn=bs(n.containerInfo),Lt(n,e),fn=d,Mt(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Li(n.containerInfo)}catch(oe){Ue(e,e.return,oe)}Mu&&(Mu=!1,Hm(e));break;case 4:s=fn,fn=bs(e.stateNode.containerInfo),Lt(n,e),Mt(e),fn=s;break;case 12:Lt(n,e),Mt(e);break;case 31:Lt(n,e),Mt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,is(e,s)));break;case 13:Lt(n,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ls=At()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,is(e,s)));break;case 22:d=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,z=Bn,F=rt;if(Bn=z||d,rt=F||T,Lt(n,e),rt=F,Bn=z,Mt(e),s&8192)e:for(n=e.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(a===null||T||Bn||rt||Ia(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){T=a=n;try{if(f=T.stateNode,d)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{k=T.stateNode;var Y=T.memoizedProps.style,I=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;k.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(oe){Ue(T,T.return,oe)}}}else if(n.tag===6){if(a===null){T=n;try{T.stateNode.nodeValue=d?"":T.memoizedProps}catch(oe){Ue(T,T.return,oe)}}}else if(n.tag===18){if(a===null){T=n;try{var P=T.stateNode;d?Dh(P,!0):Dh(T.stateNode,!1)}catch(oe){Ue(T,T.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,is(e,a))));break;case 19:Lt(n,e),Mt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,is(e,s)));break;case 30:break;case 21:break;default:Lt(n,e),Mt(e)}}function Mt(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Lm(s)){a=s;break}s=s.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var d=a.stateNode,f=Nu(e);as(e,f,d);break;case 5:var b=a.stateNode;a.flags&32&&(ni(b,""),a.flags&=-33);var k=Nu(e);as(e,k,b);break;case 3:case 4:var T=a.stateNode.containerInfo,z=Nu(e);Lu(e,z,T);break;default:throw Error(l(161))}}catch(F){Ue(e,e.return,F)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function In(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rm(e,n.alternate,n),n=n.sibling}function Ia(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:aa(4,n,n.return),Ia(n);break;case 1:vn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dm(n,n.return,a),Ia(n);break;case 27:Rr(n.stateNode);case 26:case 5:vn(n,n.return),Ia(n);break;case 22:n.memoizedState===null&&Ia(n);break;case 30:Ia(n);break;default:Ia(n)}e=e.sibling}}function Pn(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,d=e,f=n,b=f.flags;switch(f.tag){case 0:case 11:case 15:Pn(d,f,a),Tr(4,f);break;case 1:if(Pn(d,f,a),s=f,d=s.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(z){Ue(s,s.return,z)}if(s=f,d=s.updateQueue,d!==null){var k=s.stateNode;try{var T=d.shared.hiddenCallbacks;if(T!==null)for(d.shared.hiddenCallbacks=null,d=0;d<T.length;d++)vp(T[d],k)}catch(z){Ue(s,s.return,z)}}a&&b&64&&_m(f),Cr(f,f.return);break;case 27:Mm(f);case 26:case 5:Pn(d,f,a),a&&s===null&&b&4&&Nm(f),Cr(f,f.return);break;case 12:Pn(d,f,a);break;case 31:Pn(d,f,a),a&&b&4&&Im(d,f);break;case 13:Pn(d,f,a),a&&b&4&&Pm(d,f);break;case 22:f.memoizedState===null&&Pn(d,f,a),Cr(f,f.return);break;case 30:break;default:Pn(d,f,a)}n=n.sibling}}function zu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&pr(a))}function Ru(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pr(e))}function pn(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fm(e,n,a,s),n=n.sibling}function Fm(e,n,a,s){var d=n.flags;switch(n.tag){case 0:case 11:case 15:pn(e,n,a,s),d&2048&&Tr(9,n);break;case 1:pn(e,n,a,s);break;case 3:pn(e,n,a,s),d&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pr(e)));break;case 12:if(d&2048){pn(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,b=f.id,k=f.onPostCommit;typeof k=="function"&&k(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ue(n,n.return,T)}}else pn(e,n,a,s);break;case 31:pn(e,n,a,s);break;case 13:pn(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,b=n.alternate,n.memoizedState!==null?f._visibility&2?pn(e,n,a,s):Er(e,n):f._visibility&2?pn(e,n,a,s):(f._visibility|=2,ki(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),d&2048&&zu(b,n);break;case 24:pn(e,n,a,s),d&2048&&Ru(n.alternate,n);break;default:pn(e,n,a,s)}}function ki(e,n,a,s,d){for(d=d&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,b=n,k=a,T=s,z=b.flags;switch(b.tag){case 0:case 11:case 15:ki(f,b,k,T,d),Tr(8,b);break;case 23:break;case 22:var F=b.stateNode;b.memoizedState!==null?F._visibility&2?ki(f,b,k,T,d):Er(f,b):(F._visibility|=2,ki(f,b,k,T,d)),d&&z&2048&&zu(b.alternate,b);break;case 24:ki(f,b,k,T,d),d&&z&2048&&Ru(b.alternate,b);break;default:ki(f,b,k,T,d)}n=n.sibling}}function Er(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,d=s.flags;switch(s.tag){case 22:Er(a,s),d&2048&&zu(s.alternate,s);break;case 24:Er(a,s),d&2048&&Ru(s.alternate,s);break;default:Er(a,s)}n=n.sibling}}var Or=8192;function wi(e,n,a){if(e.subtreeFlags&Or)for(e=e.child;e!==null;)Vm(e,n,a),e=e.sibling}function Vm(e,n,a){switch(e.tag){case 26:wi(e,n,a),e.flags&Or&&e.memoizedState!==null&&QS(a,fn,e.memoizedState,e.memoizedProps);break;case 5:wi(e,n,a);break;case 3:case 4:var s=fn;fn=bs(e.stateNode.containerInfo),wi(e,n,a),fn=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Or,Or=16777216,wi(e,n,a),Or=s):wi(e,n,a));break;default:wi(e,n,a)}}function Gm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _r(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];ft=s,$m(s,e)}Gm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ym(e),e=e.sibling}function Ym(e){switch(e.tag){case 0:case 11:case 15:_r(e),e.flags&2048&&aa(9,e,e.return);break;case 3:_r(e);break;case 12:_r(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,rs(e)):_r(e);break;default:_r(e)}}function rs(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];ft=s,$m(s,e)}Gm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:aa(8,n,n.return),rs(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,rs(n));break;default:rs(n)}e=e.sibling}}function $m(e,n){for(;ft!==null;){var a=ft;switch(a.tag){case 0:case 11:case 15:aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:pr(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,ft=s;else e:for(a=e;ft!==null;){s=ft;var d=s.sibling,f=s.return;if(Bm(s),s===a){ft=null;break e}if(d!==null){d.return=f,ft=d;break e}ft=f}}}var cS={getCacheForType:function(e){var n=gt(nt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return gt(nt).controller.signal}},dS=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ve=null,Ae=null,Ce=0,Be=0,Vt=null,ia=!1,Ai=!1,Bu=!1,qn=0,We=0,ra=0,Pa=0,Uu=0,Gt=0,ji=0,Dr=null,zt=null,Iu=!1,ls=0,Km=0,ss=1/0,os=null,la=null,ut=0,sa=null,Ti=null,Hn=0,Pu=0,qu=null,Qm=null,Nr=0,Hu=null;function Yt(){return(Le&2)!==0&&Ce!==0?Ce&-Ce:B.T!==null?Ku():df()}function Xm(){if(Gt===0)if((Ce&536870912)===0||Oe){var e=gl;gl<<=1,(gl&3932160)===0&&(gl=262144),Gt=e}else Gt=536870912;return e=Ht.current,e!==null&&(e.flags|=32),Gt}function Rt(e,n,a){(e===Ve&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Ci(e,0),oa(e,Ce,Gt,!1)),Ji(e,a),((Le&2)===0||e!==Ve)&&(e===Ve&&((Le&2)===0&&(Pa|=a),We===4&&oa(e,Ce,Gt,!1)),xn(e))}function Zm(e,n,a){if((Le&6)!==0)throw Error(l(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Wi(e,n),d=s?mS(e,n):Vu(e,n,!0),f=s;do{if(d===0){Ai&&!s&&oa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!fS(a)){d=Vu(e,n,!1),f=!1;continue}if(d===2){if(f=n,e.errorRecoveryDisabledLanes&f)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var k=e;d=Dr;var T=k.current.memoizedState.isDehydrated;if(T&&(Ci(k,b).flags|=256),b=Vu(k,b,!1),b!==2){if(Bu&&!T){k.errorRecoveryDisabledLanes|=f,Pa|=f,d=4;break e}f=zt,zt=d,f!==null&&(zt===null?zt=f:zt.push.apply(zt,f))}d=b}if(f=!1,d!==2)continue}}if(d===1){Ci(e,0),oa(e,n,0,!0);break}e:{switch(s=e,f=d,f){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:oa(s,n,Gt,!ia);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(d=ls+300-At(),10<d)){if(oa(s,n,Gt,!ia),bl(s,0,!0)!==0)break e;Hn=n,s.timeoutHandle=Eh(Wm.bind(null,s,a,zt,os,Iu,n,Gt,Pa,ji,ia,f,"Throttled",-0,0),d);break e}Wm(s,a,zt,os,Iu,n,Gt,Pa,ji,ia,f,null,-0,0)}}break}while(!0);xn(e)}function Wm(e,n,a,s,d,f,b,k,T,z,F,Y,I,P){if(e.timeoutHandle=-1,Y=n.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Cn},Vm(n,f,Y);var oe=(f&62914560)===f?ls-At():(f&4194048)===f?Km-At():0;if(oe=XS(Y,oe),oe!==null){Hn=f,e.cancelPendingCommit=oe(lh.bind(null,e,n,f,a,s,d,b,k,T,F,Y,null,I,P)),oa(e,f,b,!z);return}}lh(e,n,f,a,s,d,b,k,T)}function fS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var d=a[s],f=d.getSnapshot;d=d.value;try{if(!Pt(f(),d))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function oa(e,n,a,s){n&=~Uu,n&=~Pa,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var d=n;0<d;){var f=31-Fe(d),b=1<<f;s[f]=-1,d&=~b}a!==0&&of(e,a,n)}function us(){return(Le&6)===0?(Lr(0),!1):!0}function Fu(){if(Ae!==null){if(Be===0)var e=Ae.return;else e=Ae,Dn=Da=null,ru(e),yi=null,hr=0,e=Ae;for(;e!==null;)Om(e.alternate,e),e=e.return;Ae=null}}function Ci(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,NS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Hn=0,Fu(),Ve=e,Ae=a=On(e.current,null),Ce=n,Be=0,Vt=null,ia=!1,Ai=Wi(e,n),Bu=!1,ji=Gt=Uu=Pa=ra=We=0,zt=Dr=null,Iu=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var d=31-Fe(s),f=1<<d;n|=e[d],s&=~f}return qn=n,_l(),a}function Jm(e,n){ve=null,B.H=wr,n===gi||n===Ul?(n=hp(),Be=3):n===$o?(n=hp(),Be=4):Be=n===Su?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vt=n,Ae===null&&(We=1,Wl(e,Jt(n,e.current)))}function eh(){var e=Ht.current;return e===null?!0:(Ce&4194048)===Ce?an===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===an:!1}function th(){var e=B.H;return B.H=wr,e===null?wr:e}function nh(){var e=B.A;return B.A=cS,e}function cs(){We=4,ia||(Ce&4194048)!==Ce&&Ht.current!==null||(Ai=!0),(ra&134217727)===0&&(Pa&134217727)===0||Ve===null||oa(Ve,Ce,Gt,!1)}function Vu(e,n,a){var s=Le;Le|=2;var d=th(),f=nh();(Ve!==e||Ce!==n)&&(os=null,Ci(e,n)),n=!1;var b=We;e:do try{if(Be!==0&&Ae!==null){var k=Ae,T=Vt;switch(Be){case 8:Fu(),b=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(n=!0);var z=Be;if(Be=0,Vt=null,Ei(e,k,T,z),a&&Ai){b=0;break e}break;default:z=Be,Be=0,Vt=null,Ei(e,k,T,z)}}pS(),b=We;break}catch(F){Jm(e,F)}while(!0);return n&&e.shellSuspendCounter++,Dn=Da=null,Le=s,B.H=d,B.A=f,Ae===null&&(Ve=null,Ce=0,_l()),b}function pS(){for(;Ae!==null;)ah(Ae)}function mS(e,n){var a=Le;Le|=2;var s=th(),d=nh();Ve!==e||Ce!==n?(os=null,ss=At()+500,Ci(e,n)):Ai=Wi(e,n);e:do try{if(Be!==0&&Ae!==null){n=Ae;var f=Vt;t:switch(Be){case 1:Be=0,Vt=null,Ei(e,n,f,1);break;case 2:case 9:if(pp(f)){Be=0,Vt=null,ih(n);break}n=function(){Be!==2&&Be!==9||Ve!==e||(Be=7),xn(e)},f.then(n,n);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:pp(f)?(Be=0,Vt=null,ih(n)):(Be=0,Vt=null,Ei(e,n,f,7));break;case 5:var b=null;switch(Ae.tag){case 26:b=Ae.memoizedState;case 5:case 27:var k=Ae;if(b?Fh(b):k.stateNode.complete){Be=0,Vt=null;var T=k.sibling;if(T!==null)Ae=T;else{var z=k.return;z!==null?(Ae=z,ds(z)):Ae=null}break t}}Be=0,Vt=null,Ei(e,n,f,5);break;case 6:Be=0,Vt=null,Ei(e,n,f,6);break;case 8:Fu(),We=6;break e;default:throw Error(l(462))}}hS();break}catch(F){Jm(e,F)}while(!0);return Dn=Da=null,B.H=s,B.A=d,Le=a,Ae!==null?0:(Ve=null,Ce=0,_l(),We)}function hS(){for(;Ae!==null&&!no();)ah(Ae)}function ah(e){var n=Cm(e.alternate,e,qn);e.memoizedProps=e.pendingProps,n===null?ds(e):Ae=n}function ih(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Sm(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Sm(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:ru(n);default:Om(a,n),n=Ae=np(n,qn),n=Cm(a,n,qn)}e.memoizedProps=e.pendingProps,n===null?ds(e):Ae=n}function Ei(e,n,a,s){Dn=Da=null,ru(n),yi=null,hr=0;var d=n.return;try{if(aS(e,d,n,a,Ce)){We=1,Wl(e,Jt(a,e.current)),Ae=null;return}}catch(f){if(d!==null)throw Ae=d,f;We=1,Wl(e,Jt(a,e.current)),Ae=null;return}n.flags&32768?(Oe||s===1?e=!0:Ai||(Ce&536870912)!==0?e=!1:(ia=e=!0,(s===2||s===9||s===3||s===6)&&(s=Ht.current,s!==null&&s.tag===13&&(s.flags|=16384))),rh(n,e)):ds(n)}function ds(e){var n=e;do{if((n.flags&32768)!==0){rh(n,ia);return}e=n.return;var a=lS(n.alternate,n,qn);if(a!==null){Ae=a;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=e}while(n!==null);We===0&&(We=5)}function rh(e,n){do{var a=sS(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);We=6,Ae=null}function lh(e,n,a,s,d,f,b,k,T){e.cancelPendingCommit=null;do fs();while(ut!==0);if((Le&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));if(f=n.lanes|n.childLanes,f|=No,Kv(e,a,f,b,k,T),e===Ve&&(Ae=Ve=null,Ce=0),Ti=n,sa=e,Hn=a,Pu=f,qu=d,Qm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vS(ge,function(){return dh(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,d=Q.p,Q.p=2,b=Le,Le|=4;try{oS(e,n,a)}finally{Le=b,Q.p=d,B.T=s}}ut=1,sh(),oh(),uh()}}function sh(){if(ut===1){ut=0;var e=sa,n=Ti,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=Q.p;Q.p=2;var d=Le;Le|=4;try{qm(n,e);var f=nc,b=$f(e.containerInfo),k=f.focusedElem,T=f.selectionRange;if(b!==k&&k&&k.ownerDocument&&Yf(k.ownerDocument.documentElement,k)){if(T!==null&&Co(k)){var z=T.start,F=T.end;if(F===void 0&&(F=z),"selectionStart"in k)k.selectionStart=z,k.selectionEnd=Math.min(F,k.value.length);else{var Y=k.ownerDocument||document,I=Y&&Y.defaultView||window;if(I.getSelection){var P=I.getSelection(),oe=k.textContent.length,he=Math.min(T.start,oe),He=T.end===void 0?he:Math.min(T.end,oe);!P.extend&&he>He&&(b=He,He=he,he=b);var N=Gf(k,he),O=Gf(k,He);if(N&&O&&(P.rangeCount!==1||P.anchorNode!==N.node||P.anchorOffset!==N.offset||P.focusNode!==O.node||P.focusOffset!==O.offset)){var M=Y.createRange();M.setStart(N.node,N.offset),P.removeAllRanges(),he>He?(P.addRange(M),P.extend(O.node,O.offset)):(M.setEnd(O.node,O.offset),P.addRange(M))}}}}for(Y=[],P=k;P=P.parentNode;)P.nodeType===1&&Y.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<Y.length;k++){var G=Y[k];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}As=!!tc,nc=tc=null}finally{Le=d,Q.p=s,B.T=a}}e.current=n,ut=2}}function oh(){if(ut===2){ut=0;var e=sa,n=Ti,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=Q.p;Q.p=2;var d=Le;Le|=4;try{Rm(e,n.alternate,n)}finally{Le=d,Q.p=s,B.T=a}}ut=3}}function uh(){if(ut===4||ut===3){ut=0,ao();var e=sa,n=Ti,a=Hn,s=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ut=5:(ut=0,Ti=sa=null,ch(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(la=null),so(a),n=n.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,d=Q.p,Q.p=2,B.T=null;try{for(var f=e.onRecoverableError,b=0;b<s.length;b++){var k=s[b];f(k.value,{componentStack:k.stack})}}finally{B.T=n,Q.p=d}}(Hn&3)!==0&&fs(),xn(e),d=e.pendingLanes,(a&261930)!==0&&(d&42)!==0?e===Hu?Nr++:(Nr=0,Hu=e):Nr=0,Lr(0)}}function ch(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,pr(n)))}function fs(){return sh(),oh(),uh(),dh()}function dh(){if(ut!==5)return!1;var e=sa,n=Pu;Pu=0;var a=so(Hn),s=B.T,d=Q.p;try{Q.p=32>a?32:a,B.T=null,a=qu,qu=null;var f=sa,b=Hn;if(ut=0,Ti=sa=null,Hn=0,(Le&6)!==0)throw Error(l(331));var k=Le;if(Le|=4,Ym(f.current),Fm(f,f.current,b,a),Le=k,Lr(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{Q.p=d,B.T=s,ch(e,n)}}function fh(e,n,a){n=Jt(a,n),n=xu(e.stateNode,n,2),e=ea(e,n,2),e!==null&&(Ji(e,2),xn(e))}function Ue(e,n,a){if(e.tag===3)fh(e,e,a);else for(;n!==null;){if(n.tag===3){fh(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(la===null||!la.has(s))){e=Jt(a,e),a=pm(2),s=ea(n,a,2),s!==null&&(mm(a,s,n,e),Ji(s,2),xn(s));break}}n=n.return}}function Gu(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new dS;var d=new Set;s.set(n,d)}else d=s.get(n),d===void 0&&(d=new Set,s.set(n,d));d.has(a)||(Bu=!0,d.add(a),e=gS.bind(null,e,n,a),n.then(e,e))}function gS(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Ce&a)===a&&(We===4||We===3&&(Ce&62914560)===Ce&&300>At()-ls?(Le&2)===0&&Ci(e,0):Uu|=a,ji===Ce&&(ji=0)),xn(e)}function ph(e,n){n===0&&(n=sf()),e=Ea(e,n),e!==null&&(Ji(e,n),xn(e))}function yS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ph(e,a)}function bS(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(a=d.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(n),ph(e,a)}function vS(e,n){return Qa(e,n)}var ps=null,Oi=null,Yu=!1,ms=!1,$u=!1,ua=0;function xn(e){e!==Oi&&e.next===null&&(Oi===null?ps=Oi=e:Oi=Oi.next=e),ms=!0,Yu||(Yu=!0,SS())}function Lr(e,n){if(!$u&&ms){$u=!0;do for(var a=!1,s=ps;s!==null;){if(e!==0){var d=s.pendingLanes;if(d===0)var f=0;else{var b=s.suspendedLanes,k=s.pingedLanes;f=(1<<31-Fe(42|e)+1)-1,f&=d&~(b&~k),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,yh(s,f))}else f=Ce,f=bl(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Wi(s,f)||(a=!0,yh(s,f));s=s.next}while(a);$u=!1}}function xS(){mh()}function mh(){ms=Yu=!1;var e=0;ua!==0&&DS()&&(e=ua);for(var n=At(),a=null,s=ps;s!==null;){var d=s.next,f=hh(s,n);f===0?(s.next=null,a===null?ps=d:a.next=d,d===null&&(Oi=a)):(a=s,(e!==0||(f&3)!==0)&&(ms=!0)),s=d}ut!==0&&ut!==5||Lr(e),ua!==0&&(ua=0)}function hh(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var b=31-Fe(f),k=1<<b,T=d[b];T===-1?((k&a)===0||(k&s)!==0)&&(d[b]=$v(k,n)):T<=n&&(e.expiredLanes|=k),f&=~k}if(n=Ve,a=Ce,a=bl(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Zi(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wi(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Zi(s),so(a)){case 2:case 8:a=ne;break;case 32:a=ge;break;case 268435456:a=ze;break;default:a=ge}return s=gh.bind(null,e),a=Qa(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Zi(s),e.callbackPriority=2,e.callbackNode=null,2}function gh(e,n){if(ut!==0&&ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(fs()&&e.callbackNode!==a)return null;var s=Ce;return s=bl(e,e===Ve?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Zm(e,s,n),hh(e,At()),e.callbackNode!=null&&e.callbackNode===a?gh.bind(null,e):null)}function yh(e,n){if(fs())return null;Zm(e,n,!0)}function SS(){LS(function(){(Le&6)!==0?Qa(V,xS):mh()})}function Ku(){if(ua===0){var e=mi;e===0&&(e=hl,hl<<=1,(hl&261888)===0&&(hl=256)),ua=e}return ua}function bh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kl(""+e)}function vh(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function kS(e,n,a,s,d){if(n==="submit"&&a&&a.stateNode===d){var f=bh((d[_t]||null).action),b=s.submitter;b&&(n=(n=b[_t]||null)?bh(n.formAction):b.getAttribute("formAction"),n!==null&&(f=n,b=null));var k=new Tl("action","action",null,s,d);e.push({event:k,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ua!==0){var T=b?vh(d,b):new FormData(d);mu(a,{pending:!0,data:T,method:d.method,action:f},null,T)}}else typeof f=="function"&&(k.preventDefault(),T=b?vh(d,b):new FormData(d),mu(a,{pending:!0,data:T,method:d.method,action:f},f,T))},currentTarget:d}]})}}for(var Qu=0;Qu<Do.length;Qu++){var Xu=Do[Qu],wS=Xu.toLowerCase(),AS=Xu[0].toUpperCase()+Xu.slice(1);dn(wS,"on"+AS)}dn(Xf,"onAnimationEnd"),dn(Zf,"onAnimationIteration"),dn(Wf,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Px,"onTransitionRun"),dn(qx,"onTransitionStart"),dn(Hx,"onTransitionCancel"),dn(Jf,"onTransitionEnd"),ei("onMouseEnter",["mouseout","mouseover"]),ei("onMouseLeave",["mouseout","mouseover"]),ei("onPointerEnter",["pointerout","pointerover"]),ei("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mr));function xh(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],d=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var b=s.length-1;0<=b;b--){var k=s[b],T=k.instance,z=k.currentTarget;if(k=k.listener,T!==f&&d.isPropagationStopped())break e;f=k,d.currentTarget=z;try{f(d)}catch(F){Ol(F)}d.currentTarget=null,f=T}else for(b=0;b<s.length;b++){if(k=s[b],T=k.instance,z=k.currentTarget,k=k.listener,T!==f&&d.isPropagationStopped())break e;f=k,d.currentTarget=z;try{f(d)}catch(F){Ol(F)}d.currentTarget=null,f=T}}}}function je(e,n){var a=n[oo];a===void 0&&(a=n[oo]=new Set);var s=e+"__bubble";a.has(s)||(Sh(n,e,2,!1),a.add(s))}function Zu(e,n,a){var s=0;n&&(s|=4),Sh(a,e,s,n)}var hs="_reactListening"+Math.random().toString(36).slice(2);function Wu(e){if(!e[hs]){e[hs]=!0,mf.forEach(function(a){a!=="selectionchange"&&(jS.has(a)||Zu(a,!1,e),Zu(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hs]||(n[hs]=!0,Zu("selectionchange",!1,n))}}function Sh(e,n,a,s){switch(Xh(n)){case 2:var d=JS;break;case 8:d=ek;break;default:d=pc}a=d.bind(null,n,a,e),d=void 0,!bo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(n,a,{capture:!0,passive:d}):e.addEventListener(n,a,!0):d!==void 0?e.addEventListener(n,a,{passive:d}):e.addEventListener(n,a,!1)}function Ju(e,n,a,s,d){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var b=s.tag;if(b===3||b===4){var k=s.stateNode.containerInfo;if(k===d)break;if(b===4)for(b=s.return;b!==null;){var T=b.tag;if((T===3||T===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;k!==null;){if(b=Za(k),b===null)return;if(T=b.tag,T===5||T===6||T===26||T===27){s=f=b;continue e}k=k.parentNode}}s=s.return}Tf(function(){var z=f,F=go(a),Y=[];e:{var I=ep.get(e);if(I!==void 0){var P=Tl,oe=e;switch(e){case"keypress":if(Al(a)===0)break e;case"keydown":case"keyup":P=bx;break;case"focusin":oe="focus",P=ko;break;case"focusout":oe="blur",P=ko;break;case"beforeblur":case"afterblur":P=ko;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Sx;break;case Xf:case Zf:case Wf:P=ux;break;case Jf:P=wx;break;case"scroll":case"scrollend":P=ix;break;case"wheel":P=jx;break;case"copy":case"cut":case"paste":P=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Df;break;case"toggle":case"beforetoggle":P=Cx}var he=(n&4)!==0,He=!he&&(e==="scroll"||e==="scrollend"),N=he?I!==null?I+"Capture":null:I;he=[];for(var O=z,M;O!==null;){var G=O;if(M=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||M===null||N===null||(G=nr(O,N),G!=null&&he.push(zr(O,G,M))),He)break;O=O.return}0<he.length&&(I=new P(I,oe,null,a,F),Y.push({event:I,listeners:he}))}}if((n&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",I&&a!==ho&&(oe=a.relatedTarget||a.fromElement)&&(Za(oe)||oe[Xa]))break e;if((P||I)&&(I=F.window===F?F:(I=F.ownerDocument)?I.defaultView||I.parentWindow:window,P?(oe=a.relatedTarget||a.toElement,P=z,oe=oe?Za(oe):null,oe!==null&&(He=o(oe),he=oe.tag,oe!==He||he!==5&&he!==27&&he!==6)&&(oe=null)):(P=null,oe=z),P!==oe)){if(he=Of,G="onMouseLeave",N="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(he=Df,G="onPointerLeave",N="onPointerEnter",O="pointer"),He=P==null?I:tr(P),M=oe==null?I:tr(oe),I=new he(G,O+"leave",P,a,F),I.target=He,I.relatedTarget=M,G=null,Za(F)===z&&(he=new he(N,O+"enter",oe,a,F),he.target=M,he.relatedTarget=He,G=he),He=G,P&&oe)t:{for(he=TS,N=P,O=oe,M=0,G=N;G;G=he(G))M++;G=0;for(var fe=O;fe;fe=he(fe))G++;for(;0<M-G;)N=he(N),M--;for(;0<G-M;)O=he(O),G--;for(;M--;){if(N===O||O!==null&&N===O.alternate){he=N;break t}N=he(N),O=he(O)}he=null}else he=null;P!==null&&kh(Y,I,P,he,!1),oe!==null&&He!==null&&kh(Y,He,oe,he,!0)}}e:{if(I=z?tr(z):window,P=I.nodeName&&I.nodeName.toLowerCase(),P==="select"||P==="input"&&I.type==="file")var De=If;else if(Bf(I))if(Pf)De=Bx;else{De=zx;var ue=Mx}else P=I.nodeName,!P||P.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?z&&mo(z.elementType)&&(De=If):De=Rx;if(De&&(De=De(e,z))){Uf(Y,De,a,F);break e}ue&&ue(e,I,z),e==="focusout"&&z&&I.type==="number"&&z.memoizedProps.value!=null&&po(I,"number",I.value)}switch(ue=z?tr(z):window,e){case"focusin":(Bf(ue)||ue.contentEditable==="true")&&(li=ue,Eo=z,cr=null);break;case"focusout":cr=Eo=li=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,Kf(Y,a,F);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":Kf(Y,a,F)}var xe;if(Ao)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ri?zf(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Nf&&a.locale!=="ko"&&(ri||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ri&&(xe=Cf()):($n=F,vo="value"in $n?$n.value:$n.textContent,ri=!0)),ue=gs(z,Ee),0<ue.length&&(Ee=new _f(Ee,e,null,a,F),Y.push({event:Ee,listeners:ue}),xe?Ee.data=xe:(xe=Rf(a),xe!==null&&(Ee.data=xe)))),(xe=Ox?_x(e,a):Dx(e,a))&&(Ee=gs(z,"onBeforeInput"),0<Ee.length&&(ue=new _f("onBeforeInput","beforeinput",null,a,F),Y.push({event:ue,listeners:Ee}),ue.data=xe)),kS(Y,e,z,a,F)}xh(Y,n)})}function zr(e,n,a){return{instance:e,listener:n,currentTarget:a}}function gs(e,n){for(var a=n+"Capture",s=[];e!==null;){var d=e,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=nr(e,a),d!=null&&s.unshift(zr(e,d,f)),d=nr(e,n),d!=null&&s.push(zr(e,d,f))),e.tag===3)return s;e=e.return}return[]}function TS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kh(e,n,a,s,d){for(var f=n._reactName,b=[];a!==null&&a!==s;){var k=a,T=k.alternate,z=k.stateNode;if(k=k.tag,T!==null&&T===s)break;k!==5&&k!==26&&k!==27||z===null||(T=z,d?(z=nr(a,f),z!=null&&b.unshift(zr(a,z,T))):d||(z=nr(a,f),z!=null&&b.push(zr(a,z,T)))),a=a.return}b.length!==0&&e.push({event:n,listeners:b})}var CS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function wh(e){return(typeof e=="string"?e:""+e).replace(CS,`
`).replace(ES,"")}function Ah(e,n){return n=wh(n),wh(e)===n}function qe(e,n,a,s,d,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ni(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ni(e,""+s);break;case"className":xl(e,"class",s);break;case"tabIndex":xl(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":xl(e,a,s);break;case"style":Af(e,s,f);break;case"data":if(n!=="object"){xl(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=kl(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",d.name,d,null),qe(e,n,"formEncType",d.formEncType,d,null),qe(e,n,"formMethod",d.formMethod,d,null),qe(e,n,"formTarget",d.formTarget,d,null)):(qe(e,n,"encType",d.encType,d,null),qe(e,n,"method",d.method,d,null),qe(e,n,"target",d.target,d,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=kl(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Cn);break;case"onScroll":s!=null&&je("scroll",e);break;case"onScrollEnd":s!=null&&je("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=kl(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":je("beforetoggle",e),je("toggle",e),vl(e,"popover",s);break;case"xlinkActuate":Tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Tn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Tn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Tn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Tn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":vl(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=nx.get(a)||a,vl(e,a,s))}}function ec(e,n,a,s,d,f){switch(a){case"style":Af(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof s=="string"?ni(e,s):(typeof s=="number"||typeof s=="bigint")&&ni(e,""+s);break;case"onScroll":s!=null&&je("scroll",e);break;case"onScrollEnd":s!=null&&je("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Cn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),n=a.slice(2,d?a.length-7:void 0),f=e[_t]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,d),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,d);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):vl(e,a,s)}}}function bt(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",e),je("load",e);var s=!1,d=!1,f;for(f in a)if(a.hasOwnProperty(f)){var b=a[f];if(b!=null)switch(f){case"src":s=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:qe(e,n,f,b,a,null)}}d&&qe(e,n,"srcSet",a.srcSet,a,null),s&&qe(e,n,"src",a.src,a,null);return;case"input":je("invalid",e);var k=f=b=d=null,T=null,z=null;for(s in a)if(a.hasOwnProperty(s)){var F=a[s];if(F!=null)switch(s){case"name":d=F;break;case"type":b=F;break;case"checked":T=F;break;case"defaultChecked":z=F;break;case"value":f=F;break;case"defaultValue":k=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(l(137,n));break;default:qe(e,n,s,F,a,null)}}xf(e,f,k,T,z,b,d,!1);return;case"select":je("invalid",e),s=b=f=null;for(d in a)if(a.hasOwnProperty(d)&&(k=a[d],k!=null))switch(d){case"value":f=k;break;case"defaultValue":b=k;break;case"multiple":s=k;default:qe(e,n,d,k,a,null)}n=f,a=b,e.multiple=!!s,n!=null?ti(e,!!s,n,!1):a!=null&&ti(e,!!s,a,!0);return;case"textarea":je("invalid",e),f=d=s=null;for(b in a)if(a.hasOwnProperty(b)&&(k=a[b],k!=null))switch(b){case"value":s=k;break;case"defaultValue":d=k;break;case"children":f=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(91));break;default:qe(e,n,b,k,a,null)}kf(e,s,d,f);return;case"option":for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null)&&(T==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":qe(e,n,T,s,a,null));return;case"dialog":je("beforetoggle",e),je("toggle",e),je("cancel",e),je("close",e);break;case"iframe":case"object":je("load",e);break;case"video":case"audio":for(s=0;s<Mr.length;s++)je(Mr[s],e);break;case"image":je("error",e),je("load",e);break;case"details":je("toggle",e);break;case"embed":case"source":case"link":je("error",e),je("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:qe(e,n,z,s,a,null)}return;default:if(mo(n)){for(F in a)a.hasOwnProperty(F)&&(s=a[F],s!==void 0&&ec(e,n,F,s,a,void 0));return}}for(k in a)a.hasOwnProperty(k)&&(s=a[k],s!=null&&qe(e,n,k,s,a,null))}function OS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,b=null,k=null,T=null,z=null,F=null;for(P in a){var Y=a[P];if(a.hasOwnProperty(P)&&Y!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":T=Y;default:s.hasOwnProperty(P)||qe(e,n,P,null,s,Y)}}for(var I in s){var P=s[I];if(Y=a[I],s.hasOwnProperty(I)&&(P!=null||Y!=null))switch(I){case"type":f=P;break;case"name":d=P;break;case"checked":z=P;break;case"defaultChecked":F=P;break;case"value":b=P;break;case"defaultValue":k=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(l(137,n));break;default:P!==Y&&qe(e,n,I,P,s,Y)}}fo(e,b,k,T,z,F,f,d);return;case"select":P=b=k=I=null;for(f in a)if(T=a[f],a.hasOwnProperty(f)&&T!=null)switch(f){case"value":break;case"multiple":P=T;default:s.hasOwnProperty(f)||qe(e,n,f,null,s,T)}for(d in s)if(f=s[d],T=a[d],s.hasOwnProperty(d)&&(f!=null||T!=null))switch(d){case"value":I=f;break;case"defaultValue":k=f;break;case"multiple":b=f;default:f!==T&&qe(e,n,d,f,s,T)}n=k,a=b,s=P,I!=null?ti(e,!!a,I,!1):!!s!=!!a&&(n!=null?ti(e,!!a,n,!0):ti(e,!!a,a?[]:"",!1));return;case"textarea":P=I=null;for(k in a)if(d=a[k],a.hasOwnProperty(k)&&d!=null&&!s.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:qe(e,n,k,null,s,d)}for(b in s)if(d=s[b],f=a[b],s.hasOwnProperty(b)&&(d!=null||f!=null))switch(b){case"value":I=d;break;case"defaultValue":P=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(l(91));break;default:d!==f&&qe(e,n,b,d,s,f)}Sf(e,I,P);return;case"option":for(var oe in a)I=a[oe],a.hasOwnProperty(oe)&&I!=null&&!s.hasOwnProperty(oe)&&(oe==="selected"?e.selected=!1:qe(e,n,oe,null,s,I));for(T in s)I=s[T],P=a[T],s.hasOwnProperty(T)&&I!==P&&(I!=null||P!=null)&&(T==="selected"?e.selected=I&&typeof I!="function"&&typeof I!="symbol":qe(e,n,T,I,s,P));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)I=a[he],a.hasOwnProperty(he)&&I!=null&&!s.hasOwnProperty(he)&&qe(e,n,he,null,s,I);for(z in s)if(I=s[z],P=a[z],s.hasOwnProperty(z)&&I!==P&&(I!=null||P!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(l(137,n));break;default:qe(e,n,z,I,s,P)}return;default:if(mo(n)){for(var He in a)I=a[He],a.hasOwnProperty(He)&&I!==void 0&&!s.hasOwnProperty(He)&&ec(e,n,He,void 0,s,I);for(F in s)I=s[F],P=a[F],!s.hasOwnProperty(F)||I===P||I===void 0&&P===void 0||ec(e,n,F,I,s,P);return}}for(var N in a)I=a[N],a.hasOwnProperty(N)&&I!=null&&!s.hasOwnProperty(N)&&qe(e,n,N,null,s,I);for(Y in s)I=s[Y],P=a[Y],!s.hasOwnProperty(Y)||I===P||I==null&&P==null||qe(e,n,Y,I,s,P)}function jh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _S(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var d=a[s],f=d.transferSize,b=d.initiatorType,k=d.duration;if(f&&k&&jh(b)){for(b=0,k=d.responseEnd,s+=1;s<a.length;s++){var T=a[s],z=T.startTime;if(z>k)break;var F=T.transferSize,Y=T.initiatorType;F&&jh(Y)&&(T=T.responseEnd,b+=F*(T<k?1:(k-z)/(T-z)))}if(--s,n+=8*(f+b)/(d.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tc=null,nc=null;function ys(e){return e.nodeType===9?e:e.ownerDocument}function Th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ch(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ac(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ic=null;function DS(){var e=window.event;return e&&e.type==="popstate"?e===ic?!1:(ic=e,!0):(ic=null,!1)}var Eh=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(e){return Oh.resolve(null).then(e).catch(MS)}:Eh;function MS(e){setTimeout(function(){throw e})}function ca(e){return e==="head"}function _h(e,n){var a=n,s=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(d),Li(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rr(a);for(var f=a.firstChild;f;){var b=f.nextSibling,k=f.nodeName;f[er]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=b}}else a==="body"&&Rr(e.ownerDocument.body);a=d}while(a);Li(n)}function Dh(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function rc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rc(a),uo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zS(e,n,a,s){for(;e.nodeType===1;){var d=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[er])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function RS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=rn(e.nextSibling),e===null))return null;return e}function Nh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rn(e.nextSibling),e===null))return null;return e}function lc(e){return e.data==="$?"||e.data==="$~"}function sc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function BS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var oc=null;function Lh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return rn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Mh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function zh(e,n,a){switch(n=ys(a),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Rr(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);uo(e)}var ln=new Map,Rh=new Set;function bs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fn=Q.d;Q.d={f:US,r:IS,D:PS,C:qS,L:HS,m:FS,X:GS,S:VS,M:YS};function US(){var e=Fn.f(),n=us();return e||n}function IS(e){var n=Wa(e);n!==null&&n.tag===5&&n.type==="form"?Jp(n):Fn.r(e)}var _i=typeof document>"u"?null:document;function Bh(e,n,a){var s=_i;if(s&&typeof n=="string"&&n){var d=Zt(n);d='link[rel="'+e+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),Rh.has(d)||(Rh.add(d),e={rel:e,crossOrigin:a,href:n},s.querySelector(d)===null&&(n=s.createElement("link"),bt(n,"link",e),dt(n),s.head.appendChild(n)))}}function PS(e){Fn.D(e),Bh("dns-prefetch",e,null)}function qS(e,n){Fn.C(e,n),Bh("preconnect",e,n)}function HS(e,n,a){Fn.L(e,n,a);var s=_i;if(s&&e&&n){var d='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+Zt(a.imageSizes)+'"]')):d+='[href="'+Zt(e)+'"]';var f=d;switch(n){case"style":f=Di(e);break;case"script":f=Ni(e)}ln.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ln.set(f,e),s.querySelector(d)!==null||n==="style"&&s.querySelector(Br(f))||n==="script"&&s.querySelector(Ur(f))||(n=s.createElement("link"),bt(n,"link",e),dt(n),s.head.appendChild(n)))}}function FS(e,n){Fn.m(e,n);var a=_i;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+Zt(s)+'"][href="'+Zt(e)+'"]',f=d;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ni(e)}if(!ln.has(f)&&(e=y({rel:"modulepreload",href:e},n),ln.set(f,e),a.querySelector(d)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ur(f)))return}s=a.createElement("link"),bt(s,"link",e),dt(s),a.head.appendChild(s)}}}function VS(e,n,a){Fn.S(e,n,a);var s=_i;if(s&&e){var d=Ja(s).hoistableStyles,f=Di(e);n=n||"default";var b=d.get(f);if(!b){var k={loading:0,preload:null};if(b=s.querySelector(Br(f)))k.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ln.get(f))&&uc(e,a);var T=b=s.createElement("link");dt(T),bt(T,"link",e),T._p=new Promise(function(z,F){T.onload=z,T.onerror=F}),T.addEventListener("load",function(){k.loading|=1}),T.addEventListener("error",function(){k.loading|=2}),k.loading|=4,vs(b,n,s)}b={type:"stylesheet",instance:b,count:1,state:k},d.set(f,b)}}}function GS(e,n){Fn.X(e,n);var a=_i;if(a&&e){var s=Ja(a).hoistableScripts,d=Ni(e),f=s.get(d);f||(f=a.querySelector(Ur(d)),f||(e=y({src:e,async:!0},n),(n=ln.get(d))&&cc(e,n),f=a.createElement("script"),dt(f),bt(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(d,f))}}function YS(e,n){Fn.M(e,n);var a=_i;if(a&&e){var s=Ja(a).hoistableScripts,d=Ni(e),f=s.get(d);f||(f=a.querySelector(Ur(d)),f||(e=y({src:e,async:!0,type:"module"},n),(n=ln.get(d))&&cc(e,n),f=a.createElement("script"),dt(f),bt(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(d,f))}}function Uh(e,n,a,s){var d=(d=ce.current)?bs(d):null;if(!d)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Di(a.href),a=Ja(d).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Di(a.href);var f=Ja(d).hoistableStyles,b=f.get(e);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,b),(f=d.querySelector(Br(e)))&&!f._p&&(b.instance=f,b.state.loading=5),ln.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ln.set(e,a),f||$S(d,e,a,b.state))),n&&s===null)throw Error(l(528,""));return b}if(n&&s!==null)throw Error(l(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ni(a),a=Ja(d).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Di(e){return'href="'+Zt(e)+'"'}function Br(e){return'link[rel="stylesheet"]['+e+"]"}function Ih(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function $S(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bt(n,"link",a),dt(n),e.head.appendChild(n))}function Ni(e){return'[src="'+Zt(e)+'"]'}function Ur(e){return"script[async]"+e}function Ph(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(s)return n.instance=s,dt(s),s;var d=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),dt(s),bt(s,"style",d),vs(s,a.precedence,e),n.instance=s;case"stylesheet":d=Di(a.href);var f=e.querySelector(Br(d));if(f)return n.state.loading|=4,n.instance=f,dt(f),f;s=Ih(a),(d=ln.get(d))&&uc(s,d),f=(e.ownerDocument||e).createElement("link"),dt(f);var b=f;return b._p=new Promise(function(k,T){b.onload=k,b.onerror=T}),bt(f,"link",s),n.state.loading|=4,vs(f,a.precedence,e),n.instance=f;case"script":return f=Ni(a.src),(d=e.querySelector(Ur(f)))?(n.instance=d,dt(d),d):(s=a,(d=ln.get(f))&&(s=y({},a),cc(s,d)),e=e.ownerDocument||e,d=e.createElement("script"),dt(d),bt(d,"link",s),e.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,vs(s,a.precedence,e));return n.instance}function vs(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=s.length?s[s.length-1]:null,f=d,b=0;b<s.length;b++){var k=s[b];if(k.dataset.precedence===n)f=k;else if(f!==d)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function uc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function cc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var xs=null;function qh(e,n,a){if(xs===null){var s=new Map,d=xs=new Map;d.set(a,s)}else d=xs,s=d.get(a),s||(s=new Map,d.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),d=0;d<a.length;d++){var f=a[d];if(!(f[er]||f[mt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(n)||"";b=e+b;var k=s.get(b);k?k.push(f):s.set(b,[f])}}return s}function Hh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function KS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function QS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=Di(s.href),f=n.querySelector(Br(d));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ss.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,dt(f);return}f=n.ownerDocument||n,s=Ih(s),(d=ln.get(d))&&uc(s,d),f=f.createElement("link"),dt(f);var b=f;b._p=new Promise(function(k,T){b.onload=k,b.onerror=T}),bt(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ss.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var dc=0;function XS(e,n){return e.stylesheets&&e.count===0&&ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&ws(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&dc===0&&(dc=62500*_S());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ws(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>dc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(d)}}:null}function Ss(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ws(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ks=null;function ws(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ks=new Map,n.forEach(ZS,e),ks=null,Ss.call(e))}function ZS(e,n){if(!(n.state.loading&4)){var a=ks.get(e);if(a)var s=a.get(null);else{a=new Map,ks.set(e,a);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var b=d[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),s=b)}s&&a.set(null,s)}d=n.instance,b=d.getAttribute("data-precedence"),f=a.get(b)||s,f===s&&a.set(null,d),a.set(b,d),this.count++,s=Ss.bind(this),d.addEventListener("load",s),d.addEventListener("error",s),f?f.parentNode.insertBefore(d,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),n.state.loading|=4}}var Ir={$$typeof:U,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function WS(e,n,a,s,d,f,b,k,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ro(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ro(0),this.hiddenUpdates=ro(null),this.identifierPrefix=s,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Vh(e,n,a,s,d,f,b,k,T,z,F,Y){return e=new WS(e,n,a,b,T,z,F,Y,k),n=1,f===!0&&(n|=24),f=qt(3,null,null,n),e.current=f,f.stateNode=e,n=Vo(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Ko(f),e}function Gh(e){return e?(e=ui,e):ui}function Yh(e,n,a,s,d,f){d=Gh(d),s.context===null?s.context=d:s.pendingContext=d,s=Jn(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ea(e,s,n),a!==null&&(Rt(a,e,n),yr(a,e,n))}function $h(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function fc(e,n){$h(e,n),(e=e.alternate)&&$h(e,n)}function Kh(e){if(e.tag===13||e.tag===31){var n=Ea(e,67108864);n!==null&&Rt(n,e,67108864),fc(e,67108864)}}function Qh(e){if(e.tag===13||e.tag===31){var n=Yt();n=lo(n);var a=Ea(e,n);a!==null&&Rt(a,e,n),fc(e,n)}}var As=!0;function JS(e,n,a,s){var d=B.T;B.T=null;var f=Q.p;try{Q.p=2,pc(e,n,a,s)}finally{Q.p=f,B.T=d}}function ek(e,n,a,s){var d=B.T;B.T=null;var f=Q.p;try{Q.p=8,pc(e,n,a,s)}finally{Q.p=f,B.T=d}}function pc(e,n,a,s){if(As){var d=mc(s);if(d===null)Ju(e,n,s,js,a),Zh(e,s);else if(nk(d,e,n,a,s))s.stopPropagation();else if(Zh(e,s),n&4&&-1<tk.indexOf(e)){for(;d!==null;){var f=Wa(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=wa(f.pendingLanes);if(b!==0){var k=f;for(k.pendingLanes|=2,k.entangledLanes|=2;b;){var T=1<<31-Fe(b);k.entanglements[1]|=T,b&=~T}xn(f),(Le&6)===0&&(ss=At()+500,Lr(0))}}break;case 31:case 13:k=Ea(f,2),k!==null&&Rt(k,f,2),us(),fc(f,2)}if(f=mc(s),f===null&&Ju(e,n,s,js,a),f===d)break;d=f}d!==null&&s.stopPropagation()}else Ju(e,n,s,null,a)}}function mc(e){return e=go(e),hc(e)}var js=null;function hc(e){if(js=null,e=Za(e),e!==null){var n=o(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=c(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return js=e,null}function Xh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(io()){case V:return 2;case ne:return 8;case ge:case we:return 32;case ze:return 268435456;default:return 32}default:return 32}}var gc=!1,da=null,fa=null,pa=null,Pr=new Map,qr=new Map,ma=[],tk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zh(e,n){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":Pr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(n.pointerId)}}function Hr(e,n,a,s,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[d]},n!==null&&(n=Wa(n),n!==null&&Kh(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function nk(e,n,a,s,d){switch(n){case"focusin":return da=Hr(da,e,n,a,s,d),!0;case"dragenter":return fa=Hr(fa,e,n,a,s,d),!0;case"mouseover":return pa=Hr(pa,e,n,a,s,d),!0;case"pointerover":var f=d.pointerId;return Pr.set(f,Hr(Pr.get(f)||null,e,n,a,s,d)),!0;case"gotpointercapture":return f=d.pointerId,qr.set(f,Hr(qr.get(f)||null,e,n,a,s,d)),!0}return!1}function Wh(e){var n=Za(e.target);if(n!==null){var a=o(n);if(a!==null){if(n=a.tag,n===13){if(n=c(a),n!==null){e.blockedOn=n,ff(e.priority,function(){Qh(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,ff(e.priority,function(){Qh(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=mc(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);ho=s,a.target.dispatchEvent(s),ho=null}else return n=Wa(a),n!==null&&Kh(n),e.blockedOn=a,!1;n.shift()}return!0}function Jh(e,n,a){Ts(e)&&a.delete(n)}function ak(){gc=!1,da!==null&&Ts(da)&&(da=null),fa!==null&&Ts(fa)&&(fa=null),pa!==null&&Ts(pa)&&(pa=null),Pr.forEach(Jh),qr.forEach(Jh)}function Cs(e,n){e.blockedOn===n&&(e.blockedOn=null,gc||(gc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,ak)))}var Es=null;function eg(e){Es!==e&&(Es=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Es===e&&(Es=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],d=e[n+2];if(typeof s!="function"){if(hc(s||a)===null)continue;break}var f=Wa(a);f!==null&&(e.splice(n,3),n-=3,mu(f,{pending:!0,data:d,method:a.method,action:s},s,d))}}))}function Li(e){function n(T){return Cs(T,e)}da!==null&&Cs(da,e),fa!==null&&Cs(fa,e),pa!==null&&Cs(pa,e),Pr.forEach(n),qr.forEach(n);for(var a=0;a<ma.length;a++){var s=ma[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ma.length&&(a=ma[0],a.blockedOn===null);)Wh(a),a.blockedOn===null&&ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var d=a[s],f=a[s+1],b=d[_t]||null;if(typeof f=="function")b||eg(a);else if(b){var k=null;if(f&&f.hasAttribute("formAction")){if(d=f,b=f[_t]||null)k=b.formAction;else if(hc(d)!==null)continue}else k=b.action;typeof k=="function"?a[s+1]=k:(a.splice(s,3),s-=3),eg(a)}}}function tg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(b){return d=b})},focusReset:"manual",scroll:"manual"})}function n(){d!==null&&(d(),d=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),d!==null&&(d(),d=null)}}}function yc(e){this._internalRoot=e}Os.prototype.render=yc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var a=n.current,s=Yt();Yh(a,s,e,n,null,null)},Os.prototype.unmount=yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yh(e.current,2,null,e,null,null),us(),n[Xa]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var n=df();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ma.length&&n!==0&&n<ma[a].priority;a++);ma.splice(a,0,e),a===0&&Wh(e)}};var ng=i.version;if(ng!=="19.2.4")throw Error(l(527,ng,"19.2.4"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ik={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{jt=_s.inject(ik),ot=_s}catch{}}return Vr.createRoot=function(e,n){if(!u(e))throw Error(l(299));var a=!1,s="",d=um,f=cm,b=dm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=Vh(e,1,!1,null,null,a,s,null,d,f,b,tg),e[Xa]=n.current,Wu(e),new yc(n)},Vr.hydrateRoot=function(e,n,a){if(!u(e))throw Error(l(299));var s=!1,d="",f=um,b=cm,k=dm,T=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(k=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),n=Vh(e,1,!0,n,a??null,s,d,T,f,b,k,tg),n.context=Gh(null),a=n.current,s=Yt(),s=lo(s),d=Jn(s),d.callback=null,ea(a,d,s),a=s,n.current.lanes=a,Ji(n,a),xn(n),e[Xa]=n.current,Wu(e),new Os(n)},Vr.version="19.2.4",Vr}var fg;function hk(){if(fg)return xc.exports;fg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),xc.exports=mk(),xc.exports}var pg=hk();$y();function tl(){return tl=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},tl.apply(this,arguments)}var ya;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ya||(ya={}));const mg="popstate";function gk(t){t===void 0&&(t={});function i(l,u){let{pathname:o,search:c,hash:p}=l.location;return Wc("",{pathname:o,search:c,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function r(l,u){return typeof u=="string"?u:Hs(u)}return bk(i,r,null,t)}function tt(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function jd(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function yk(){return Math.random().toString(36).substr(2,8)}function hg(t,i){return{usr:t.state,key:t.key,idx:i}}function Wc(t,i,r,l){return r===void 0&&(r=null),tl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof i=="string"?Vi(i):i,{state:r,key:i&&i.key||l||yk()})}function Hs(t){let{pathname:i="/",search:r="",hash:l=""}=t;return r&&r!=="?"&&(i+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(i+=l.charAt(0)==="#"?l:"#"+l),i}function Vi(t){let i={};if(t){let r=t.indexOf("#");r>=0&&(i.hash=t.substr(r),t=t.substr(0,r));let l=t.indexOf("?");l>=0&&(i.search=t.substr(l),t=t.substr(0,l)),t&&(i.pathname=t)}return i}function bk(t,i,r,l){l===void 0&&(l={});let{window:u=document.defaultView,v5Compat:o=!1}=l,c=u.history,p=ya.Pop,m=null,h=g();h==null&&(h=0,c.replaceState(tl({},c.state,{idx:h}),""));function g(){return(c.state||{idx:null}).idx}function y(){p=ya.Pop;let _=g(),E=_==null?null:_-h;h=_,m&&m({action:p,location:L.location,delta:E})}function S(_,E){p=ya.Push;let q=Wc(L.location,_,E);h=g()+1;let U=hg(q,h),K=L.createHref(q);try{c.pushState(U,"",K)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;u.location.assign(K)}o&&m&&m({action:p,location:L.location,delta:1})}function x(_,E){p=ya.Replace;let q=Wc(L.location,_,E);h=g();let U=hg(q,h),K=L.createHref(q);c.replaceState(U,"",K),o&&m&&m({action:p,location:L.location,delta:0})}function A(_){let E=u.location.origin!=="null"?u.location.origin:u.location.href,q=typeof _=="string"?_:Hs(_);return q=q.replace(/ $/,"%20"),tt(E,"No window.location.(origin|href) available to create URL for href: "+q),new URL(q,E)}let L={get action(){return p},get location(){return t(u,c)},listen(_){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(mg,y),m=_,()=>{u.removeEventListener(mg,y),m=null}},createHref(_){return i(u,_)},createURL:A,encodeLocation(_){let E=A(_);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:S,replace:x,go(_){return c.go(_)}};return L}var gg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gg||(gg={}));function vk(t,i,r){return r===void 0&&(r="/"),xk(t,i,r)}function xk(t,i,r,l){let u=typeof i=="string"?Vi(i):i,o=Td(u.pathname||"/",r);if(o==null)return null;let c=Ky(t);Sk(c);let p=null;for(let m=0;p==null&&m<c.length;++m){let h=Lk(o);p=_k(c[m],h)}return p}function Ky(t,i,r,l){i===void 0&&(i=[]),r===void 0&&(r=[]),l===void 0&&(l="");let u=(o,c,p)=>{let m={relativePath:p===void 0?o.path||"":p,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};m.relativePath.startsWith("/")&&(tt(m.relativePath.startsWith(l),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(l.length));let h=va([l,m.relativePath]),g=r.concat(m);o.children&&o.children.length>0&&(tt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Ky(o.children,i,g,h)),!(o.path==null&&!o.index)&&i.push({path:h,score:Ek(h,o.index),routesMeta:g})};return t.forEach((o,c)=>{var p;if(o.path===""||!((p=o.path)!=null&&p.includes("?")))u(o,c);else for(let m of Qy(o.path))u(o,c,m)}),i}function Qy(t){let i=t.split("/");if(i.length===0)return[];let[r,...l]=i,u=r.endsWith("?"),o=r.replace(/\?$/,"");if(l.length===0)return u?[o,""]:[o];let c=Qy(l.join("/")),p=[];return p.push(...c.map(m=>m===""?o:[o,m].join("/"))),u&&p.push(...c),p.map(m=>t.startsWith("/")&&m===""?"/":m)}function Sk(t){t.sort((i,r)=>i.score!==r.score?r.score-i.score:Ok(i.routesMeta.map(l=>l.childrenIndex),r.routesMeta.map(l=>l.childrenIndex)))}const kk=/^:[\w-]+$/,wk=3,Ak=2,jk=1,Tk=10,Ck=-2,yg=t=>t==="*";function Ek(t,i){let r=t.split("/"),l=r.length;return r.some(yg)&&(l+=Ck),i&&(l+=Ak),r.filter(u=>!yg(u)).reduce((u,o)=>u+(kk.test(o)?wk:o===""?jk:Tk),l)}function Ok(t,i){return t.length===i.length&&t.slice(0,-1).every((l,u)=>l===i[u])?t[t.length-1]-i[i.length-1]:0}function _k(t,i,r){let{routesMeta:l}=t,u={},o="/",c=[];for(let p=0;p<l.length;++p){let m=l[p],h=p===l.length-1,g=o==="/"?i:i.slice(o.length)||"/",y=Dk({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g),S=m.route;if(!y)return null;Object.assign(u,y.params),c.push({params:u,pathname:va([o,y.pathname]),pathnameBase:Uk(va([o,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(o=va([o,y.pathnameBase]))}return c}function Dk(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,l]=Nk(t.path,t.caseSensitive,t.end),u=i.match(r);if(!u)return null;let o=u[0],c=o.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:l.reduce((h,g,y)=>{let{paramName:S,isOptional:x}=g;if(S==="*"){let L=p[y]||"";c=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const A=p[y];return x&&!A?h[S]=void 0:h[S]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:c,pattern:t}}function Nk(t,i,r){i===void 0&&(i=!1),r===void 0&&(r=!0),jd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let l=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,p,m)=>(l.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),l]}function Lk(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return jd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),t}}function Td(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,l=t.charAt(r);return l&&l!=="/"?null:t.slice(r)||"/"}const Mk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zk=t=>Mk.test(t);function Rk(t,i){i===void 0&&(i="/");let{pathname:r,search:l="",hash:u=""}=typeof t=="string"?Vi(t):t,o;if(r)if(zk(r))o=r;else{if(r.includes("//")){let c=r;r=r.replace(/\/\/+/g,"/"),jd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+r))}r.startsWith("/")?o=bg(r.substring(1),"/"):o=bg(r,i)}else o=i;return{pathname:o,search:Ik(l),hash:Pk(u)}}function bg(t,i){let r=i.replace(/\/+$/,"").split("/");return t.split("/").forEach(u=>{u===".."?r.length>1&&r.pop():u!=="."&&r.push(u)}),r.length>1?r.join("/"):"/"}function Ac(t,i,r,l){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bk(t){return t.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function Cd(t,i){let r=Bk(t);return i?r.map((l,u)=>u===r.length-1?l.pathname:l.pathnameBase):r.map(l=>l.pathnameBase)}function Ed(t,i,r,l){l===void 0&&(l=!1);let u;typeof t=="string"?u=Vi(t):(u=tl({},t),tt(!u.pathname||!u.pathname.includes("?"),Ac("?","pathname","search",u)),tt(!u.pathname||!u.pathname.includes("#"),Ac("#","pathname","hash",u)),tt(!u.search||!u.search.includes("#"),Ac("#","search","hash",u)));let o=t===""||u.pathname==="",c=o?"/":u.pathname,p;if(c==null)p=r;else{let y=i.length-1;if(!l&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),y-=1;u.pathname=S.join("/")}p=y>=0?i[y]:"/"}let m=Rk(u,p),h=c&&c!=="/"&&c.endsWith("/"),g=(o||c===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}const va=t=>t.join("/").replace(/\/\/+/g,"/"),Uk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ik=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Pk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Xy=["post","put","patch","delete"];new Set(Xy);const Hk=["get",...Xy];new Set(Hk);function nl(){return nl=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},nl.apply(this,arguments)}const Od=X.createContext(null),Fk=X.createContext(null),xa=X.createContext(null),$s=X.createContext(null),kn=X.createContext({outlet:null,matches:[],isDataRoute:!1}),Zy=X.createContext(null);function Vk(t,i){let{relative:r}=i===void 0?{}:i;Gi()||tt(!1);let{basename:l,navigator:u}=X.useContext(xa),{hash:o,pathname:c,search:p}=eb(t,{relative:r}),m=c;return l!=="/"&&(m=c==="/"?l:va([l,c])),u.createHref({pathname:m,search:p,hash:o})}function Gi(){return X.useContext($s)!=null}function Sa(){return Gi()||tt(!1),X.useContext($s).location}function Wy(t){X.useContext(xa).static||X.useLayoutEffect(t)}function Jy(){let{isDataRoute:t}=X.useContext(kn);return t?r1():Gk()}function Gk(){Gi()||tt(!1);let t=X.useContext(Od),{basename:i,future:r,navigator:l}=X.useContext(xa),{matches:u}=X.useContext(kn),{pathname:o}=Sa(),c=JSON.stringify(Cd(u,r.v7_relativeSplatPath)),p=X.useRef(!1);return Wy(()=>{p.current=!0}),X.useCallback(function(h,g){if(g===void 0&&(g={}),!p.current)return;if(typeof h=="number"){l.go(h);return}let y=Ed(h,JSON.parse(c),o,g.relative==="path");t==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:va([i,y.pathname])),(g.replace?l.replace:l.push)(y,g.state,g)},[i,l,c,o,t])}const Yk=X.createContext(null);function $k(t){let i=X.useContext(kn).outlet;return i&&X.createElement(Yk.Provider,{value:t},i)}function Yi(){let{matches:t}=X.useContext(kn),i=t[t.length-1];return i?i.params:{}}function eb(t,i){let{relative:r}=i===void 0?{}:i,{future:l}=X.useContext(xa),{matches:u}=X.useContext(kn),{pathname:o}=Sa(),c=JSON.stringify(Cd(u,l.v7_relativeSplatPath));return X.useMemo(()=>Ed(t,JSON.parse(c),o,r==="path"),[t,c,o,r])}function Kk(t,i){return Qk(t,i)}function Qk(t,i,r,l){Gi()||tt(!1);let{navigator:u}=X.useContext(xa),{matches:o}=X.useContext(kn),c=o[o.length-1],p=c?c.params:{};c&&c.pathname;let m=c?c.pathnameBase:"/";c&&c.route;let h=Sa(),g;if(i){var y;let _=typeof i=="string"?Vi(i):i;m==="/"||(y=_.pathname)!=null&&y.startsWith(m)||tt(!1),g=_}else g=h;let S=g.pathname||"/",x=S;if(m!=="/"){let _=m.replace(/^\//,"").split("/");x="/"+S.replace(/^\//,"").split("/").slice(_.length).join("/")}let A=vk(t,{pathname:x}),L=e1(A&&A.map(_=>Object.assign({},_,{params:Object.assign({},p,_.params),pathname:va([m,u.encodeLocation?u.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?m:va([m,u.encodeLocation?u.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,r,l);return i&&L?X.createElement($s.Provider,{value:{location:nl({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ya.Pop}},L):L}function Xk(){let t=i1(),i=qk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},i),r?X.createElement("pre",{style:u},r):null,null)}const Zk=X.createElement(Xk,null);class Wk extends X.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,r){return r.location!==i.location||r.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:r.error,location:r.location,revalidation:i.revalidation||r.revalidation}}componentDidCatch(i,r){console.error("React Router caught the following error during render",i,r)}render(){return this.state.error!==void 0?X.createElement(kn.Provider,{value:this.props.routeContext},X.createElement(Zy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jk(t){let{routeContext:i,match:r,children:l}=t,u=X.useContext(Od);return u&&u.static&&u.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=r.route.id),X.createElement(kn.Provider,{value:i},l)}function e1(t,i,r,l){var u;if(i===void 0&&(i=[]),r===void 0&&(r=null),l===void 0&&(l=null),t==null){var o;if(!r)return null;if(r.errors)t=r.matches;else if((o=l)!=null&&o.v7_partialHydration&&i.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let c=t,p=(u=r)==null?void 0:u.errors;if(p!=null){let g=c.findIndex(y=>y.route.id&&p?.[y.route.id]!==void 0);g>=0||tt(!1),c=c.slice(0,Math.min(c.length,g+1))}let m=!1,h=-1;if(r&&l&&l.v7_partialHydration)for(let g=0;g<c.length;g++){let y=c[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=g),y.route.id){let{loaderData:S,errors:x}=r,A=y.route.loader&&S[y.route.id]===void 0&&(!x||x[y.route.id]===void 0);if(y.route.lazy||A){m=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}return c.reduceRight((g,y,S)=>{let x,A=!1,L=null,_=null;r&&(x=p&&y.route.id?p[y.route.id]:void 0,L=y.route.errorElement||Zk,m&&(h<0&&S===0?(l1("route-fallback"),A=!0,_=null):h===S&&(A=!0,_=y.route.hydrateFallbackElement||null)));let E=i.concat(c.slice(0,S+1)),q=()=>{let U;return x?U=L:A?U=_:y.route.Component?U=X.createElement(y.route.Component,null):y.route.element?U=y.route.element:U=g,X.createElement(Jk,{match:y,routeContext:{outlet:g,matches:E,isDataRoute:r!=null},children:U})};return r&&(y.route.ErrorBoundary||y.route.errorElement||S===0)?X.createElement(Wk,{location:r.location,revalidation:r.revalidation,component:L,error:x,children:q(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):q()},null)}var tb=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(tb||{}),nb=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(nb||{});function t1(t){let i=X.useContext(Od);return i||tt(!1),i}function n1(t){let i=X.useContext(Fk);return i||tt(!1),i}function a1(t){let i=X.useContext(kn);return i||tt(!1),i}function ab(t){let i=a1(),r=i.matches[i.matches.length-1];return r.route.id||tt(!1),r.route.id}function i1(){var t;let i=X.useContext(Zy),r=n1(),l=ab();return i!==void 0?i:(t=r.errors)==null?void 0:t[l]}function r1(){let{router:t}=t1(tb.UseNavigateStable),i=ab(nb.UseNavigateStable),r=X.useRef(!1);return Wy(()=>{r.current=!0}),X.useCallback(function(u,o){o===void 0&&(o={}),r.current&&(typeof u=="number"?t.navigate(u):t.navigate(u,nl({fromRouteId:i},o)))},[t,i])}const vg={};function l1(t,i,r){vg[t]||(vg[t]=!0)}function s1(t,i){t?.v7_startTransition,t?.v7_relativeSplatPath}function ib(t){let{to:i,replace:r,state:l,relative:u}=t;Gi()||tt(!1);let{future:o,static:c}=X.useContext(xa),{matches:p}=X.useContext(kn),{pathname:m}=Sa(),h=Jy(),g=Ed(i,Cd(p,o.v7_relativeSplatPath),m,u==="path"),y=JSON.stringify(g);return X.useEffect(()=>h(JSON.parse(y),{replace:r,state:l,relative:u}),[h,y,u,r,l]),null}function o1(t){return $k(t.context)}function St(t){tt(!1)}function u1(t){let{basename:i="/",children:r=null,location:l,navigationType:u=ya.Pop,navigator:o,static:c=!1,future:p}=t;Gi()&&tt(!1);let m=i.replace(/^\/*/,"/"),h=X.useMemo(()=>({basename:m,navigator:o,static:c,future:nl({v7_relativeSplatPath:!1},p)}),[m,p,o,c]);typeof l=="string"&&(l=Vi(l));let{pathname:g="/",search:y="",hash:S="",state:x=null,key:A="default"}=l,L=X.useMemo(()=>{let _=Td(g,m);return _==null?null:{location:{pathname:_,search:y,hash:S,state:x,key:A},navigationType:u}},[m,g,y,S,x,A,u]);return L==null?null:X.createElement(xa.Provider,{value:h},X.createElement($s.Provider,{children:r,value:L}))}function c1(t){let{children:i,location:r}=t;return Kk(Jc(i),r)}new Promise(()=>{});function Jc(t,i){i===void 0&&(i=[]);let r=[];return X.Children.forEach(t,(l,u)=>{if(!X.isValidElement(l))return;let o=[...i,u];if(l.type===X.Fragment){r.push.apply(r,Jc(l.props.children,o));return}l.type!==St&&tt(!1),!l.props.index||!l.props.children||tt(!1);let c={id:l.props.id||o.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(c.children=Jc(l.props.children,o)),r.push(c)}),r}function ed(){return ed=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},ed.apply(this,arguments)}function d1(t,i){if(t==null)return{};var r={},l=Object.keys(t),u,o;for(o=0;o<l.length;o++)u=l[o],!(i.indexOf(u)>=0)&&(r[u]=t[u]);return r}function f1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function p1(t,i){return t.button===0&&(!i||i==="_self")&&!f1(t)}const m1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],h1="6";try{window.__reactRouterVersion=h1}catch{}const g1="startTransition",xg=ck[g1];function y1(t){let{basename:i,children:r,future:l,window:u}=t,o=X.useRef();o.current==null&&(o.current=gk({window:u,v5Compat:!0}));let c=o.current,[p,m]=X.useState({action:c.action,location:c.location}),{v7_startTransition:h}=l||{},g=X.useCallback(y=>{h&&xg?xg(()=>m(y)):m(y)},[m,h]);return X.useLayoutEffect(()=>c.listen(g),[c,g]),X.useEffect(()=>s1(l),[l]),X.createElement(u1,{basename:i,children:r,location:p.location,navigationType:p.action,navigator:c,future:l})}const b1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,st=X.forwardRef(function(i,r){let{onClick:l,relative:u,reloadDocument:o,replace:c,state:p,target:m,to:h,preventScrollReset:g,viewTransition:y}=i,S=d1(i,m1),{basename:x}=X.useContext(xa),A,L=!1;if(typeof h=="string"&&v1.test(h)&&(A=h,b1))try{let U=new URL(window.location.href),K=h.startsWith("//")?new URL(U.protocol+h):new URL(h),te=Td(K.pathname,x);K.origin===U.origin&&te!=null?h=te+K.search+K.hash:L=!0}catch{}let _=Vk(h,{relative:u}),E=x1(h,{replace:c,state:p,target:m,preventScrollReset:g,relative:u,viewTransition:y});function q(U){l&&l(U),U.defaultPrevented||E(U)}return X.createElement("a",ed({},S,{href:A||_,onClick:L||o?l:q,ref:r,target:m}))});var Sg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Sg||(Sg={}));var kg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kg||(kg={}));function x1(t,i){let{target:r,replace:l,state:u,preventScrollReset:o,relative:c,viewTransition:p}=i===void 0?{}:i,m=Jy(),h=Sa(),g=eb(t,{relative:c});return X.useCallback(y=>{if(p1(y,r)){y.preventDefault();let S=l!==void 0?l:Hs(h)===Hs(g);m(t,{replace:S,state:u,preventScrollReset:o,relative:c,viewTransition:p})}},[h,m,g,l,u,r,t,o,c,p])}var jc,wg;function S1(){if(wg)return jc;wg=1;var t=typeof Element<"u",i=typeof Map=="function",r=typeof Set=="function",l=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function u(o,c){if(o===c)return!0;if(o&&c&&typeof o=="object"&&typeof c=="object"){if(o.constructor!==c.constructor)return!1;var p,m,h;if(Array.isArray(o)){if(p=o.length,p!=c.length)return!1;for(m=p;m--!==0;)if(!u(o[m],c[m]))return!1;return!0}var g;if(i&&o instanceof Map&&c instanceof Map){if(o.size!==c.size)return!1;for(g=o.entries();!(m=g.next()).done;)if(!c.has(m.value[0]))return!1;for(g=o.entries();!(m=g.next()).done;)if(!u(m.value[1],c.get(m.value[0])))return!1;return!0}if(r&&o instanceof Set&&c instanceof Set){if(o.size!==c.size)return!1;for(g=o.entries();!(m=g.next()).done;)if(!c.has(m.value[0]))return!1;return!0}if(l&&ArrayBuffer.isView(o)&&ArrayBuffer.isView(c)){if(p=o.length,p!=c.length)return!1;for(m=p;m--!==0;)if(o[m]!==c[m])return!1;return!0}if(o.constructor===RegExp)return o.source===c.source&&o.flags===c.flags;if(o.valueOf!==Object.prototype.valueOf&&typeof o.valueOf=="function"&&typeof c.valueOf=="function")return o.valueOf()===c.valueOf();if(o.toString!==Object.prototype.toString&&typeof o.toString=="function"&&typeof c.toString=="function")return o.toString()===c.toString();if(h=Object.keys(o),p=h.length,p!==Object.keys(c).length)return!1;for(m=p;m--!==0;)if(!Object.prototype.hasOwnProperty.call(c,h[m]))return!1;if(t&&o instanceof Element)return!1;for(m=p;m--!==0;)if(!((h[m]==="_owner"||h[m]==="__v"||h[m]==="__o")&&o.$$typeof)&&!u(o[h[m]],c[h[m]]))return!1;return!0}return o!==o&&c!==c}return jc=function(c,p){try{return u(c,p)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},jc}var k1=S1();const w1=Fi(k1);var Tc,Ag;function A1(){if(Ag)return Tc;Ag=1;var t=function(i,r,l,u,o,c,p,m){if(!i){var h;if(r===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[l,u,o,c,p,m],y=0;h=new Error(r.replace(/%s/g,function(){return g[y++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};return Tc=t,Tc}var j1=A1();const jg=Fi(j1);var Cc,Tg;function T1(){return Tg||(Tg=1,Cc=function(i,r,l,u){var o=l?l.call(u,i,r):void 0;if(o!==void 0)return!!o;if(i===r)return!0;if(typeof i!="object"||!i||typeof r!="object"||!r)return!1;var c=Object.keys(i),p=Object.keys(r);if(c.length!==p.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(r),h=0;h<c.length;h++){var g=c[h];if(!m(g))return!1;var y=i[g],S=r[g];if(o=l?l.call(u,y,S,g):void 0,o===!1||o===void 0&&y!==S)return!1}return!0}),Cc}var C1=T1();const E1=Fi(C1);var rb=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(rb||{}),Ec={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Cg=Object.values(rb),Ks={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},lb=Object.entries(Ks).reduce((t,[i,r])=>(t[r]=i,t),{}),mn="data-rh",Ii={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Pi=(t,i)=>{for(let r=t.length-1;r>=0;r-=1){const l=t[r];if(Object.prototype.hasOwnProperty.call(l,i))return l[i]}return null},O1=t=>{let i=Pi(t,"title");const r=Pi(t,Ii.TITLE_TEMPLATE);if(Array.isArray(i)&&(i=i.join("")),r&&i)return r.replace(/%s/g,()=>i);const l=Pi(t,Ii.DEFAULT_TITLE);return i||l||void 0},_1=t=>Pi(t,Ii.ON_CHANGE_CLIENT_STATE)||(()=>{}),Oc=(t,i)=>i.filter(r=>typeof r[t]<"u").map(r=>r[t]).reduce((r,l)=>({...r,...l}),{}),D1=(t,i)=>i.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,l)=>{if(!r.length){const u=Object.keys(l);for(let o=0;o<u.length;o+=1){const p=u[o].toLowerCase();if(t.indexOf(p)!==-1&&l[p])return r.concat(l)}}return r},[]),N1=t=>console&&typeof console.warn=="function"&&console.warn(t),Gr=(t,i,r)=>{const l={};return r.filter(u=>Array.isArray(u[t])?!0:(typeof u[t]<"u"&&N1(`Helmet: ${t} should be of type "Array". Instead found type "${typeof u[t]}"`),!1)).map(u=>u[t]).reverse().reduce((u,o)=>{const c={};o.filter(m=>{let h;const g=Object.keys(m);for(let S=0;S<g.length;S+=1){const x=g[S],A=x.toLowerCase();i.indexOf(A)!==-1&&!(h==="rel"&&m[h].toLowerCase()==="canonical")&&!(A==="rel"&&m[A].toLowerCase()==="stylesheet")&&(h=A),i.indexOf(x)!==-1&&(x==="innerHTML"||x==="cssText"||x==="itemprop")&&(h=x)}if(!h||!m[h])return!1;const y=m[h].toLowerCase();return l[h]||(l[h]={}),c[h]||(c[h]={}),l[h][y]?!1:(c[h][y]=!0,!0)}).reverse().forEach(m=>u.push(m));const p=Object.keys(c);for(let m=0;m<p.length;m+=1){const h=p[m],g={...l[h],...c[h]};l[h]=g}return u},[]).reverse()},L1=(t,i)=>{if(Array.isArray(t)&&t.length){for(let r=0;r<t.length;r+=1)if(t[r][i])return!0}return!1},M1=t=>({baseTag:D1(["href"],t),bodyAttributes:Oc("bodyAttributes",t),defer:Pi(t,Ii.DEFER),encode:Pi(t,Ii.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Oc("htmlAttributes",t),linkTags:Gr("link",["rel","href"],t),metaTags:Gr("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Gr("noscript",["innerHTML"],t),onChangeClientState:_1(t),scriptTags:Gr("script",["src","innerHTML"],t),styleTags:Gr("style",["cssText"],t),title:O1(t),titleAttributes:Oc("titleAttributes",t),prioritizeSeoTags:L1(t,Ii.PRIORITIZE_SEO_TAGS)}),sb=t=>Array.isArray(t)?t.join(""):t,z1=(t,i)=>{const r=Object.keys(t);for(let l=0;l<r.length;l+=1)if(i[r[l]]&&i[r[l]].includes(t[r[l]]))return!0;return!1},_c=(t,i)=>Array.isArray(t)?t.reduce((r,l)=>(z1(l,i)?r.priority.push(l):r.default.push(l),r),{priority:[],default:[]}):{default:t,priority:[]},Eg=(t,i)=>({...t,[i]:void 0}),R1=["noscript","script","style"],td=(t,i=!0)=>i===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ob=t=>Object.keys(t).reduce((i,r)=>{const l=typeof t[r]<"u"?`${r}="${t[r]}"`:`${r}`;return i?`${i} ${l}`:l},""),B1=(t,i,r,l)=>{const u=ob(r),o=sb(i);return u?`<${t} ${mn}="true" ${u}>${td(o,l)}</${t}>`:`<${t} ${mn}="true">${td(o,l)}</${t}>`},U1=(t,i,r=!0)=>i.reduce((l,u)=>{const o=u,c=Object.keys(o).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,g)=>{const y=typeof o[g]>"u"?g:`${g}="${td(o[g],r)}"`;return h?`${h} ${y}`:y},""),p=o.innerHTML||o.cssText||"",m=R1.indexOf(t)===-1;return`${l}<${t} ${mn}="true" ${c}${m?"/>":`>${p}</${t}>`}`},""),ub=(t,i={})=>Object.keys(t).reduce((r,l)=>{const u=Ks[l];return r[u||l]=t[l],r},i),I1=(t,i,r)=>{const l={key:i,[mn]:!0},u=ub(r,l);return[Re.createElement("title",u,i)]},Bs=(t,i)=>i.map((r,l)=>{const u={key:l,[mn]:!0};return Object.keys(r).forEach(o=>{const p=Ks[o]||o;if(p==="innerHTML"||p==="cssText"){const m=r.innerHTML||r.cssText;u.dangerouslySetInnerHTML={__html:m}}else u[p]=r[o]}),Re.createElement(t,u)}),sn=(t,i,r=!0)=>{switch(t){case"title":return{toComponent:()=>I1(t,i.title,i.titleAttributes),toString:()=>B1(t,i.title,i.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ub(i),toString:()=>ob(i)};default:return{toComponent:()=>Bs(t,i),toString:()=>U1(t,i,r)}}},P1=({metaTags:t,linkTags:i,scriptTags:r,encode:l})=>{const u=_c(t,Ec.meta),o=_c(i,Ec.link),c=_c(r,Ec.script);return{priorityMethods:{toComponent:()=>[...Bs("meta",u.priority),...Bs("link",o.priority),...Bs("script",c.priority)],toString:()=>`${sn("meta",u.priority,l)} ${sn("link",o.priority,l)} ${sn("script",c.priority,l)}`},metaTags:u.default,linkTags:o.default,scriptTags:c.default}},q1=t=>{const{baseTag:i,bodyAttributes:r,encode:l=!0,htmlAttributes:u,noscriptTags:o,styleTags:c,title:p="",titleAttributes:m,prioritizeSeoTags:h}=t;let{linkTags:g,metaTags:y,scriptTags:S}=t,x={toComponent:()=>[],toString:()=>""};return h&&({priorityMethods:x,linkTags:g,metaTags:y,scriptTags:S}=P1(t)),{priority:x,base:sn("base",i,l),bodyAttributes:sn("bodyAttributes",r,l),htmlAttributes:sn("htmlAttributes",u,l),link:sn("link",g,l),meta:sn("meta",y,l),noscript:sn("noscript",o,l),script:sn("script",S,l),style:sn("style",c,l),title:sn("title",{title:p,titleAttributes:m},l)}},nd=q1,Ds=[],_d=!!(typeof window<"u"&&window.document&&window.document.createElement),ad=class{instances=[];canUseDOM=_d;context;value={setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Ds:this.instances,add:t=>{(this.canUseDOM?Ds:this.instances).push(t)},remove:t=>{const i=(this.canUseDOM?Ds:this.instances).indexOf(t);(this.canUseDOM?Ds:this.instances).splice(i,1)}}};constructor(t,i){this.context=t,this.canUseDOM=i||!1,i||(t.helmet=nd({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},H1=parseInt(Re.version.split(".")[0],10),id=H1>=19,F1={},cb=Re.createContext(F1),db=class fb extends X.Component{static canUseDOM=_d;helmetData;constructor(i){super(i),id?this.helmetData=null:this.helmetData=new ad(this.props.context||{},fb.canUseDOM)}render(){return id?Re.createElement(Re.Fragment,null,this.props.children):Re.createElement(cb.Provider,{value:this.helmetData.value},this.props.children)}},Mi=(t,i)=>{const r=document.head||document.querySelector("head"),l=r.querySelectorAll(`${t}[${mn}]`),u=[].slice.call(l),o=[];let c;return i&&i.length&&i.forEach(p=>{const m=document.createElement(t);for(const h in p)if(Object.prototype.hasOwnProperty.call(p,h))if(h==="innerHTML")m.innerHTML=p.innerHTML;else if(h==="cssText"){const g=p.cssText;m.appendChild(document.createTextNode(g))}else{const g=h,y=typeof p[g]>"u"?"":p[g];m.setAttribute(h,y)}m.setAttribute(mn,"true"),u.some((h,g)=>(c=g,m.isEqualNode(h)))?u.splice(c,1):o.push(m)}),u.forEach(p=>p.parentNode?.removeChild(p)),o.forEach(p=>r.appendChild(p)),{oldTags:u,newTags:o}},rd=(t,i)=>{const r=document.getElementsByTagName(t)[0];if(!r)return;const l=r.getAttribute(mn),u=l?l.split(","):[],o=[...u],c=Object.keys(i);for(const p of c){const m=i[p]||"";r.getAttribute(p)!==m&&r.setAttribute(p,m),u.indexOf(p)===-1&&u.push(p);const h=o.indexOf(p);h!==-1&&o.splice(h,1)}for(let p=o.length-1;p>=0;p-=1)r.removeAttribute(o[p]);u.length===o.length?r.removeAttribute(mn):r.getAttribute(mn)!==c.join(",")&&r.setAttribute(mn,c.join(","))},V1=(t,i)=>{typeof t<"u"&&document.title!==t&&(document.title=sb(t)),rd("title",i)},Og=(t,i)=>{const{baseTag:r,bodyAttributes:l,htmlAttributes:u,linkTags:o,metaTags:c,noscriptTags:p,onChangeClientState:m,scriptTags:h,styleTags:g,title:y,titleAttributes:S}=t;rd("body",l),rd("html",u),V1(y,S);const x={baseTag:Mi("base",r),linkTags:Mi("link",o),metaTags:Mi("meta",c),noscriptTags:Mi("noscript",p),scriptTags:Mi("script",h),styleTags:Mi("style",g)},A={},L={};Object.keys(x).forEach(_=>{const{newTags:E,oldTags:q}=x[_];E.length&&(A[_]=E),q.length&&(L[_]=x[_].oldTags)}),i&&i(),m(t,A,L)},Yr=null,G1=t=>{Yr&&cancelAnimationFrame(Yr),t.defer?Yr=requestAnimationFrame(()=>{Og(t,()=>{Yr=null})}):(Og(t),Yr=null)},Y1=G1,_g=class extends X.Component{rendered=!1;shouldComponentUpdate(t){return!E1(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:i}=this.props.context;let r=null;const l=M1(t.get().map(u=>{const{context:o,...c}=u.props;return c}));db.canUseDOM?Y1(l):nd&&(r=nd(l)),i(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Us=[],Dg=t=>{const i={};for(const r of Object.keys(t))i[lb[r]||r]=t[r];return i},qa=t=>{const i={};for(const r of Object.keys(t)){const l=Ks[r];i[l||r]=t[r]}return i},Ng=(t,i)=>{if(!_d)return;const r=document.getElementsByTagName(t)[0];if(!r)return;const l="data-rh-managed",u=r.getAttribute(l),o=u?u.split(","):[],c=Object.keys(i);for(const p of o)c.includes(p)||r.removeAttribute(p);for(const p of c){const m=i[p];m==null||m===!1?r.removeAttribute(p):m===!0?r.setAttribute(p,""):r.setAttribute(p,String(m))}c.length>0?r.setAttribute(l,c.join(",")):r.removeAttribute(l)},Dc=()=>{const t={},i={};for(const r of Us){const{htmlAttributes:l,bodyAttributes:u}=r.props;l&&Object.assign(t,Dg(l)),u&&Object.assign(i,Dg(u))}Ng("html",t),Ng("body",i)},$1=class extends X.Component{componentDidMount(){Us.push(this),Dc()}componentDidUpdate(){Dc()}componentWillUnmount(){const t=Us.indexOf(this);t!==-1&&Us.splice(t,1),Dc()}resolveTitle(){const{title:t,titleTemplate:i,defaultTitle:r}=this.props;return t&&i?i.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||r||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const i=this.props.titleAttributes||{};return Re.createElement("title",qa(i),t)}renderBase(){const{base:t}=this.props;return t?Re.createElement("base",qa(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((i,r)=>Re.createElement("meta",{key:r,...qa(i)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((i,r)=>Re.createElement("link",{key:r,...qa(i)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((i,r)=>{const{innerHTML:l,...u}=i,o=qa(u);return l&&(o.dangerouslySetInnerHTML={__html:l}),Re.createElement("script",{key:r,...o})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((i,r)=>{const{cssText:l,...u}=i,o=qa(u);return l&&(o.dangerouslySetInnerHTML={__html:l}),Re.createElement("style",{key:r,...o})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((i,r)=>{const{innerHTML:l,...u}=i,o=qa(u);return l&&(o.dangerouslySetInnerHTML={__html:l}),Re.createElement("noscript",{key:r,...o})})}render(){return Re.createElement(Re.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},gn=class extends X.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(t){return!w1(Eg(this.props,"helmetData"),Eg(t,"helmetData"))}mapNestedChildrenToProps(t,i){if(!i)return null;switch(t.type){case"script":case"noscript":return{innerHTML:i};case"style":return{cssText:i};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,i,r,l){return{...i,[t.type]:[...i[t.type]||[],{...r,...this.mapNestedChildrenToProps(t,l)}]}}mapObjectTypeChildren(t,i,r,l){switch(t.type){case"title":return{...i,[t.type]:l,titleAttributes:{...r}};case"body":return{...i,bodyAttributes:{...r}};case"html":return{...i,htmlAttributes:{...r}};default:return{...i,[t.type]:{...r}}}}mapArrayTypeChildrenToProps(t,i){let r={...i};return Object.keys(t).forEach(l=>{r={...r,[l]:t[l]}}),r}warnOnInvalidChildren(t,i){return jg(Cg.some(r=>t.type===r),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Cg.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),jg(!i||typeof i=="string"||Array.isArray(i)&&!i.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,i){let r={};return Re.Children.forEach(t,l=>{if(!l||!l.props)return;const{children:u,...o}=l.props,c=Object.keys(o).reduce((m,h)=>(m[lb[h]||h]=o[h],m),{});let{type:p}=l;switch(typeof p=="symbol"?p=p.toString():this.warnOnInvalidChildren(l,u),p){case"Symbol(react.fragment)":i=this.mapChildrenToProps(u,i);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(l,r,c,u);break;default:i=this.mapObjectTypeChildren(l,i,c,u);break}}),this.mapArrayTypeChildrenToProps(r,i)}render(){const{children:t,...i}=this.props;let r={...i},{helmetData:l}=i;if(t&&(r=this.mapChildrenToProps(t,r)),l&&!(l instanceof ad)){const u=l;l=new ad(u.context,!0),delete r.helmetData}return id?Re.createElement($1,{...r}):l?Re.createElement(_g,{...r,context:l.value}):Re.createElement(cb.Consumer,null,u=>Re.createElement(_g,{...r,context:u}))}};const Qe="Agus Dev Notes",Nc="https://agustiyann.github.io",K1={site:{description:"Learn data structures, algorithms, design patterns and OOP with interactive visualizations and code examples in Swift, Kotlin, TypeScript, Python and Java."},nav:{dsa:"DSA",patterns:"Patterns",oop:"OOP",articles:"Articles",toggleTheme:"Toggle light/dark mode",switchLanguage:"Switch language"},footer:{builtBy:"Built by"},home:{hero:"Learn the fundamentals every software engineer relies on: data structures, algorithms, design patterns and object-oriented design. Every topic comes with visual explanations and code in Swift, Kotlin, TypeScript, Python & Java.",dsaTitle:"Data Structures & Algorithms",dsaDescription:"Arrays to graphs, sorting to searching, with complexity tables, visualizers and practice problems.",dsaUnit:"topics",patternsTitle:"Design Patterns",patternsDescription:"Creational, structural and behavioral patterns with real-world examples from mobile and web apps.",patternsUnit:"patterns",oopTitle:"OOP Concepts",oopDescription:"The four pillars, object relationships and SOLID principles explained with runnable code.",oopUnit:"concepts",articlesTitle:"Articles",articlesDescription:"Hands-on write-ups on Swift, SwiftUI, iOS and everyday engineering problems.",articlesUnit:"articles",latestArticles:"Latest articles",viewAll:"View all →"},dsa:{title:"Data Structures & Algorithms",metaDescription:"Interactive data structures and algorithms learning hub with visualizations, code examples in Swift, Kotlin, TypeScript and Python, and curated practice problems.",ogDescription:"Learn data structures and algorithms interactively.",intro:"Interactive visualizations, code examples in Swift, Kotlin, TypeScript, Python & Java, and curated LeetCode problems, one topic at a time.",notFound:"Topic not found.",back:"← Back to DSA",visualizerBadge:"Visualizer",time:"Time",space:"Space",complexity:"Complexity",timeBest:"Time (Best)",timeAvg:"Time (Avg)",timeWorst:"Time (Worst)",keyPoints:"Key Points",interactiveVisualizer:"Interactive Visualizer",practiceProblems:"Practice Problems",difficulty:{easy:"Easy",medium:"Medium",hard:"Hard"}},patterns:{title:"Design Patterns",metaDescription:"Gang of Four design patterns with code examples in Swift, Kotlin, TypeScript and Python. Creational, Structural, and Behavioral patterns.",ogDescription:"Learn GoF design patterns interactively.",intro:"Gang of Four patterns with real-world context, code examples in Swift, Kotlin, TypeScript, Python & Java, and practical use cases for every scenario.",notFound:"Pattern not found.",back:"← Back to Design Patterns",titleSuffix:"Pattern"},oop:{title:"OOP Concepts",metaDescription:"Object-oriented programming concepts with code examples in Swift, Kotlin, TypeScript, Python and Java. The 4 pillars, object relationships, and SOLID principles.",ogDescription:"Learn object-oriented programming concepts interactively.",intro:"Core object-oriented programming concepts with real-world context, code examples in Swift, Kotlin, TypeScript, Python & Java, and practical guidance for every scenario.",notFound:"Concept not found.",back:"← Back to OOP Concepts"},concept:{problem:"The Problem",howItWorks:"How It Works",whenToUse:"When to Use",realWorldExamples:"Real-World Examples",codeExamples:"Code Examples"},articles:{title:"Articles",metaDescription:"Hands-on articles on Swift, SwiftUI, iOS and software engineering.",noArticlesForTag:"No articles for this tag.",notFound:"Article not found.",backShort:"Back to articles",back:"← Back to articles",englishOnly:"This article is only available in English."},apps:{notFound:"App not found.",backShort:"Back to home",back:"← Back to home",viewOnAppStore:"View on App Store",englishOnly:"This page is only available in English."},visualizer:{step:"Step",sorted:"✓ Sorted!",reset:"Reset",play:"▶ Play",pause:"⏸ Pause",newArray:"New Array",slow:"Slow",fast:"Fast",legendDefault:"Default",legendComparing:"Comparing",legendSwapping:"Swapping",legendSorted:"Sorted"}},Q1={site:{description:"Belajar struktur data, algoritma, design pattern, dan OOP lewat visualisasi interaktif dan contoh kode dalam Swift, Kotlin, TypeScript, Python, dan Java."},nav:{dsa:"DSA",patterns:"Pattern",oop:"OOP",articles:"Artikel",toggleTheme:"Ganti mode terang/gelap",switchLanguage:"Ganti bahasa"},footer:{builtBy:"Dibuat oleh"},home:{hero:"Pelajari dasar-dasar yang diandalkan setiap software engineer: struktur data, algoritma, design pattern, dan desain berorientasi objek. Setiap topik dilengkapi penjelasan visual dan kode dalam Swift, Kotlin, TypeScript, Python & Java.",dsaTitle:"Struktur Data & Algoritma",dsaDescription:"Dari array hingga graph, dari sorting hingga searching, lengkap dengan tabel kompleksitas, visualizer, dan latihan soal.",dsaUnit:"topik",patternsTitle:"Design Pattern",patternsDescription:"Pattern creational, structural, dan behavioral dengan contoh nyata dari aplikasi mobile dan web.",patternsUnit:"pattern",oopTitle:"Konsep OOP",oopDescription:"Empat pilar, relasi antar objek, dan prinsip SOLID, dijelaskan dengan kode yang bisa dijalankan.",oopUnit:"konsep",articlesTitle:"Artikel",articlesDescription:"Tulisan praktis seputar Swift, SwiftUI, iOS, dan masalah engineering sehari-hari.",articlesUnit:"artikel",latestArticles:"Artikel terbaru",viewAll:"Lihat semua →"},dsa:{title:"Struktur Data & Algoritma",metaDescription:"Tempat belajar struktur data dan algoritma secara interaktif, dengan visualisasi, contoh kode dalam Swift, Kotlin, TypeScript, dan Python, serta kumpulan latihan soal.",ogDescription:"Belajar struktur data dan algoritma secara interaktif.",intro:"Visualisasi interaktif, contoh kode dalam Swift, Kotlin, TypeScript, Python & Java, serta soal LeetCode pilihan, satu topik dalam satu waktu.",notFound:"Topik tidak ditemukan.",back:"← Kembali ke DSA",visualizerBadge:"Visualizer",time:"Waktu",space:"Memori",complexity:"Kompleksitas",timeBest:"Waktu (Terbaik)",timeAvg:"Waktu (Rata-rata)",timeWorst:"Waktu (Terburuk)",keyPoints:"Poin Penting",interactiveVisualizer:"Visualizer Interaktif",practiceProblems:"Latihan Soal",difficulty:{easy:"Mudah",medium:"Sedang",hard:"Sulit"}},patterns:{title:"Design Pattern",metaDescription:"Design pattern Gang of Four dengan contoh kode dalam Swift, Kotlin, TypeScript, dan Python. Pattern Creational, Structural, dan Behavioral.",ogDescription:"Belajar design pattern GoF secara interaktif.",intro:"Pattern Gang of Four dengan konteks dunia nyata, contoh kode dalam Swift, Kotlin, TypeScript, Python & Java, serta kasus penggunaan praktis untuk setiap skenario.",notFound:"Pattern tidak ditemukan.",back:"← Kembali ke Design Pattern",titleSuffix:"Pattern"},oop:{title:"Konsep OOP",metaDescription:"Konsep pemrograman berorientasi objek dengan contoh kode dalam Swift, Kotlin, TypeScript, Python, dan Java. Empat pilar, relasi antar objek, dan prinsip SOLID.",ogDescription:"Belajar konsep pemrograman berorientasi objek secara interaktif.",intro:"Konsep inti pemrograman berorientasi objek dengan konteks dunia nyata, contoh kode dalam Swift, Kotlin, TypeScript, Python & Java, serta panduan praktis untuk setiap skenario.",notFound:"Konsep tidak ditemukan.",back:"← Kembali ke Konsep OOP"},concept:{problem:"Masalahnya",howItWorks:"Cara Kerja",whenToUse:"Kapan Digunakan",realWorldExamples:"Contoh di Dunia Nyata",codeExamples:"Contoh Kode"},articles:{title:"Artikel",metaDescription:"Artikel praktis seputar Swift, SwiftUI, iOS, dan software engineering.",noArticlesForTag:"Belum ada artikel untuk tag ini.",notFound:"Artikel tidak ditemukan.",backShort:"Kembali ke artikel",back:"← Kembali ke artikel",englishOnly:"Artikel ini hanya tersedia dalam bahasa Inggris."},apps:{notFound:"Aplikasi tidak ditemukan.",backShort:"Kembali ke beranda",back:"← Kembali ke beranda",viewOnAppStore:"Lihat di App Store",englishOnly:"Halaman ini hanya tersedia dalam bahasa Inggris."},visualizer:{step:"Langkah",sorted:"✓ Selesai diurutkan!",reset:"Reset",play:"▶ Putar",pause:"⏸ Jeda",newArray:"Array Baru",slow:"Lambat",fast:"Cepat",legendDefault:"Normal",legendComparing:"Dibandingkan",legendSwapping:"Ditukar",legendSorted:"Terurut"}},pb=["en","id"],X1="locale",Z1={en:K1,id:Q1},mb=X.createContext("en");function hb(t){return t==="/id"?"/":t.startsWith("/id/")?t.slice(3):t}function Dd(t,i){return i==="en"?t:t==="/"?"/id":`/id${t}`}function Qt(){const t=X.useContext(mb);return{locale:t,t:Z1[t],path:i=>Dd(i,t)}}function W1(t){try{localStorage.setItem(X1,t)}catch{}}function J1({onToggle:t}){const{pathname:i}=Sa(),{locale:r,t:l,path:u}=Qt(),o=hb(i),c=[{to:"/dsa",label:l.nav.dsa},{to:"/patterns",label:l.nav.patterns},{to:"/oop",label:l.nav.oop},{to:"/articles",label:l.nav.articles}];return v.jsx("nav",{className:"backdrop-blur-md bg-cardBackground border-b border-cardBorder px-2.5 min-[360px]:px-3 py-4 sm:p-4 fixed w-full top-0 z-10",children:v.jsxs("div",{className:"max-w-3xl mx-auto flex items-center justify-between gap-1.5 min-[360px]:gap-2 sm:gap-4",children:[v.jsxs(st,{to:u("/"),className:"font-semibold whitespace-nowrap hover:text-accent","aria-label":Qe,children:[v.jsx("span",{className:"hidden sm:inline",children:Qe}),v.jsx("span",{className:"sm:hidden",children:"🎓"})]}),v.jsx("ul",{className:"flex space-x-2 min-[360px]:space-x-3 sm:space-x-6 items-center text-sm sm:text-base",children:c.map(p=>v.jsx("li",{children:v.jsx(st,{to:u(p.to),className:`transition-colors ${o.startsWith(p.to)?"text-accent":"hover:text-accent"}`,children:p.label})},p.to))}),v.jsxs("div",{className:"flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 shrink-0",children:[v.jsx("div",{role:"group","aria-label":l.nav.switchLanguage,className:"flex rounded-full border border-cardBorder bg-cardBackground p-px text-xs font-medium",children:pb.map(p=>v.jsx(st,{to:Dd(o,p),onClick:()=>W1(p),hrefLang:p,"aria-current":p===r?"true":void 0,className:`px-1.5 sm:px-2 py-0.5 rounded-full uppercase transition-colors ${p===r?"bg-accent text-white":"text-textTertiary hover:text-accent"}`,children:p},p))}),v.jsx("button",{onClick:t,"aria-label":l.nav.toggleTheme,className:"cursor-pointer shrink-0 flex",children:v.jsx("span",{className:"relative inline-flex h-6 w-11 rounded-full border border-cardBorder bg-cardBackground",children:v.jsxs("span",{className:"absolute top-px flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-300 translate-x-0.5 bg-accent text-white dark:translate-x-5 dark:bg-textTertiary dark:text-backgroundTop",children:[v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"hidden dark:block",children:v.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"dark:hidden",children:[v.jsx("circle",{cx:"12",cy:"12",r:"5"}),v.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),v.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),v.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),v.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),v.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),v.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),v.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),v.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})]})})})]})]})})}function ew(){const{t}=Qt();return v.jsx("footer",{className:"mt-16 border-t border-cardBorder",children:v.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-8 text-center text-textTertiary text-sm space-y-3",children:[v.jsxs("p",{suppressHydrationWarning:!0,children:["© ",new Date().getFullYear()," ",Qe," · ",t.footer.builtBy," Agustiyansyah Syam"]}),v.jsxs("div",{className:"flex justify-center gap-4",children:[v.jsx("a",{href:"https://github.com/agustiyann",target:"_blank",rel:"noopener noreferrer",className:"text-textTertiary hover:text-textPrimary transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})})}),v.jsx("a",{href:"https://www.upwork.com/freelancers/~01ce2a8efb8a027bd1",target:"_blank",rel:"noopener noreferrer",className:"text-textTertiary hover:text-textPrimary transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295 2.913 0 5.283-2.378 5.283-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"})})}),v.jsx("a",{href:"https://www.linkedin.com/in/agustiyan/",target:"_blank",rel:"noopener noreferrer",className:"text-textTertiary hover:text-textPrimary transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),v.jsx("a",{href:"https://www.youtube.com/c/agustiyan",target:"_blank",rel:"noopener noreferrer",className:"text-textTertiary hover:text-textPrimary transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})}),v.jsx("a",{href:"https://www.instagram.com/agustiyan.dev/",target:"_blank",rel:"noopener noreferrer",className:"text-textTertiary hover:text-textPrimary transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"})})}),v.jsx("a",{href:"https://x.com/SyamTiyansyah",target:"_blank",rel:"noopener noreferrer",className:"text-textTertiary hover:text-textPrimary transition-colors",children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"})})})]})]})})}const Qs=[{slug:"array",title:"Array",emoji:"📦",category:"Data Structures",description:"A contiguous block of memory storing elements of the same type, accessible by index in O(1) time.",complexity:{time:{best:"O(1)",average:"O(n)",worst:"O(n)"},space:"O(n)"},keyPoints:["Random access in O(1) — any element by index instantly","Cache-friendly: elements stored contiguously in memory","Insertion/deletion at the front is O(n) — all elements must shift","Dynamic arrays (ArrayList, Vec) double capacity when full — O(1) amortized append","Best choice when index-based access is the primary operation"],codeExamples:[{language:"swift",code:`var arr = [1, 2, 3, 4, 5]

// Access — O(1)
let val = arr[2]           // 3

// Append — O(1) amortized
arr.append(6)

// Insert at index — O(n)
arr.insert(0, at: 0)

// Remove at index — O(n)
arr.remove(at: 0)

// Search — O(n)
if let idx = arr.firstIndex(of: 3) {
    print("Found at index \\(idx)")
}

// Slice
let sub = arr[1...3]       // [2, 3, 4]

// Iterate — O(n)
for num in arr { print(num) }`},{language:"kotlin",code:`val arr = mutableListOf(1, 2, 3, 4, 5)

// Access — O(1)
val val_ = arr[2]          // 3

// Append — O(1) amortized
arr.add(6)

// Insert at index — O(n)
arr.add(0, 0)

// Remove at index — O(n)
arr.removeAt(0)

// Search — O(n)
val idx = arr.indexOf(3)
if (idx != -1) println("Found at index $idx")

// Slice
val sub = arr.subList(1, 4) // [2, 3, 4]

// Iterate — O(n)
for (num in arr) println(num)`},{language:"typescript",code:`const arr: number[] = [1, 2, 3, 4, 5];

// Access — O(1)
const val = arr[2];           // 3

// Append — O(1) amortized
arr.push(6);

// Insert at index — O(n)
arr.splice(0, 0, 0);

// Remove at index — O(n)
arr.splice(0, 1);

// Search — O(n)
const idx = arr.indexOf(3);
if (idx !== -1) console.log(\`Found at index \${idx}\`);

// Slice
const sub = arr.slice(1, 4); // [2, 3, 4]

// Iterate — O(n)
for (const num of arr) console.log(num);`},{language:"python",code:`arr = [1, 2, 3, 4, 5]

# Access — O(1)
val = arr[2]               # 3

# Append — O(1) amortized
arr.append(6)

# Insert at index — O(n)
arr.insert(0, 0)

# Remove at index — O(n)
arr.pop(0)

# Search — O(n)
try:
    idx = arr.index(3)
    print(f"Found at index {idx}")
except ValueError:
    pass

# Slice
sub = arr[1:4]             # [2, 3, 4]

# Iterate — O(n)
for num in arr:
    print(num)`},{language:"java",code:`import java.util.*;

int[] arr = {1, 2, 3, 4, 5};

// Access — O(1)
int val = arr[2];           // 3

// Append — use ArrayList for dynamic arrays — O(1) amortized
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
list.add(6);

// Insert at index — O(n)
list.add(0, 0);

// Remove at index — O(n)
list.remove(0);

// Search — O(n)
int idx = list.indexOf(3);
if (idx != -1) System.out.println("Found at index " + idx);

// Slice
List<Integer> sub = list.subList(1, 4); // [2, 3, 4]

// Iterate — O(n)
for (int num : list) System.out.println(num);`}],problems:[{title:"Two Sum",difficulty:"easy",link:"https://leetcode.com/problems/two-sum/"},{title:"Best Time to Buy and Sell Stock",difficulty:"easy",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},{title:"Maximum Subarray",difficulty:"medium",link:"https://leetcode.com/problems/maximum-subarray/"},{title:"Product of Array Except Self",difficulty:"medium",link:"https://leetcode.com/problems/product-of-array-except-self/"}]},{slug:"linked-list",title:"Linked List",emoji:"🔗",category:"Data Structures",description:"A sequence of nodes where each node holds a value and a pointer to the next node.",complexity:{time:{best:"O(1)",average:"O(n)",worst:"O(n)"},space:"O(n)"},keyPoints:["O(1) insertion/deletion at head (or any node with a pointer)","O(n) search — must traverse from head, no random access","More memory per element than arrays (extra pointer per node)","No shifting required for insertion/deletion — just re-link pointers","Doubly linked list adds prev pointer for O(1) backwards traversal"],codeExamples:[{language:"swift",code:`class Node<T> {
    var value: T
    var next: Node<T>?
    init(_ value: T) { self.value = value }
}

class LinkedList<T: Equatable> {
    var head: Node<T>?

    func append(_ value: T) {
        let node = Node(value)
        guard var curr = head else { head = node; return }
        while curr.next != nil { curr = curr.next! }
        curr.next = node
    }

    func prepend(_ value: T) {
        let node = Node(value)
        node.next = head
        head = node
    }

    func delete(_ value: T) {
        if head?.value == value { head = head?.next; return }
        var curr = head
        while curr?.next != nil {
            if curr?.next?.value == value {
                curr?.next = curr?.next?.next; return
            }
            curr = curr?.next
        }
    }
}`},{language:"kotlin",code:`class Node<T>(var value: T, var next: Node<T>? = null)

class LinkedList<T> {
    var head: Node<T>? = null

    fun append(value: T) {
        val node = Node(value)
        if (head == null) { head = node; return }
        var curr = head
        while (curr?.next != null) curr = curr?.next
        curr?.next = node
    }

    fun prepend(value: T) {
        head = Node(value, head)
    }

    fun delete(value: T) {
        if (head?.value == value) { head = head?.next; return }
        var curr = head
        while (curr?.next != null) {
            if (curr?.next?.value == value) {
                curr?.next = curr?.next?.next; return
            }
            curr = curr?.next
        }
    }
}`},{language:"typescript",code:`class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;
    constructor(value: T) { this.value = value; }
}

class LinkedList<T> {
    head: ListNode<T> | null = null;

    append(value: T): void {
        const node = new ListNode(value);
        if (!this.head) { this.head = node; return; }
        let curr = this.head;
        while (curr.next) curr = curr.next;
        curr.next = node;
    }

    prepend(value: T): void {
        const node = new ListNode(value);
        node.next = this.head;
        this.head = node;
    }

    delete(value: T): void {
        if (this.head?.value === value) { this.head = this.head.next; return; }
        let curr = this.head;
        while (curr?.next) {
            if (curr.next.value === value) { curr.next = curr.next.next; return; }
            curr = curr.next;
        }
    }
}`},{language:"python",code:`class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        node = Node(value)
        if not self.head:
            self.head = node; return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = node

    def prepend(self, value):
        node = Node(value)
        node.next = self.head
        self.head = node

    def delete(self, value):
        if self.head and self.head.value == value:
            self.head = self.head.next; return
        curr = self.head
        while curr and curr.next:
            if curr.next.value == value:
                curr.next = curr.next.next; return
            curr = curr.next`},{language:"java",code:`class Node<T> {
    T value;
    Node<T> next;
    Node(T value) { this.value = value; }
}

class LinkedList<T> {
    Node<T> head;

    void append(T value) {
        Node<T> node = new Node<>(value);
        if (head == null) { head = node; return; }
        Node<T> curr = head;
        while (curr.next != null) curr = curr.next;
        curr.next = node;
    }

    void prepend(T value) {
        Node<T> node = new Node<>(value);
        node.next = head;
        head = node;
    }

    void delete(T value) {
        if (head != null && head.value.equals(value)) { head = head.next; return; }
        Node<T> curr = head;
        while (curr != null && curr.next != null) {
            if (curr.next.value.equals(value)) { curr.next = curr.next.next; return; }
            curr = curr.next;
        }
    }
}`}],problems:[{title:"Reverse Linked List",difficulty:"easy",link:"https://leetcode.com/problems/reverse-linked-list/"},{title:"Linked List Cycle",difficulty:"easy",link:"https://leetcode.com/problems/linked-list-cycle/"},{title:"Merge Two Sorted Lists",difficulty:"easy",link:"https://leetcode.com/problems/merge-two-sorted-lists/"},{title:"Remove Nth Node From End of List",difficulty:"medium",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"}]},{slug:"stack",title:"Stack",emoji:"📚",category:"Data Structures",description:"A LIFO (Last In, First Out) structure where elements are added and removed from the same end (top).",complexity:{time:{best:"O(1)",average:"O(1)",worst:"O(1)"},space:"O(n)"},keyPoints:["LIFO: the last element pushed is the first popped","Push, Pop, and Peek are all O(1)","Typically implemented with a dynamic array or linked list","Powers the function call stack, undo/redo, and expression evaluation","Many recursive problems can be rewritten iteratively using an explicit stack"],codeExamples:[{language:"swift",code:`struct Stack<T> {
    private var elements: [T] = []

    mutating func push(_ element: T) {
        elements.append(element)
    }

    @discardableResult
    mutating func pop() -> T? {
        elements.popLast()
    }

    func peek() -> T? { elements.last }
    var isEmpty: Bool { elements.isEmpty }
    var count: Int { elements.count }
}

var stack = Stack<Int>()
stack.push(1); stack.push(2); stack.push(3)
print(stack.peek()!)  // 3
stack.pop()
print(stack.count)    // 2`},{language:"kotlin",code:`class Stack<T> {
    private val elements = mutableListOf<T>()

    fun push(element: T) = elements.add(element)

    fun pop(): T? = if (isEmpty()) null else elements.removeLast()

    fun peek(): T? = elements.lastOrNull()

    fun isEmpty() = elements.isEmpty()

    val size get() = elements.size
}

val stack = Stack<Int>()
stack.push(1); stack.push(2); stack.push(3)
println(stack.peek())  // 3
stack.pop()
println(stack.size)    // 2`},{language:"typescript",code:`class Stack<T> {
    private elements: T[] = [];

    push(element: T): void {
        this.elements.push(element);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }

    peek(): T | undefined {
        return this.elements[this.elements.length - 1];
    }

    get isEmpty(): boolean { return this.elements.length === 0; }
    get size(): number { return this.elements.length; }
}

const stack = new Stack<number>();
stack.push(1); stack.push(2); stack.push(3);
console.log(stack.peek()); // 3
stack.pop();
console.log(stack.size);   // 2`},{language:"python",code:`class Stack:
    def __init__(self):
        self._elements = []

    def push(self, element):
        self._elements.append(element)

    def pop(self):
        return self._elements.pop() if self._elements else None

    def peek(self):
        return self._elements[-1] if self._elements else None

    def is_empty(self):
        return len(self._elements) == 0

    @property
    def size(self):
        return len(self._elements)

stack = Stack()
stack.push(1); stack.push(2); stack.push(3)
print(stack.peek())  # 3
stack.pop()
print(stack.size)    # 2`},{language:"java",code:`import java.util.*;

Deque<Integer> stack = new ArrayDeque<>();

stack.push(1); stack.push(2); stack.push(3);
System.out.println(stack.peek());  // 3
stack.pop();
System.out.println(stack.size());  // 2

// Custom generic stack
class Stack<T> {
    private final List<T> elements = new ArrayList<>();

    void push(T element) { elements.add(element); }

    T pop() {
        return elements.isEmpty() ? null : elements.remove(elements.size() - 1);
    }

    T peek() {
        return elements.isEmpty() ? null : elements.get(elements.size() - 1);
    }

    boolean isEmpty() { return elements.isEmpty(); }
    int size() { return elements.size(); }
}`}],problems:[{title:"Valid Parentheses",difficulty:"easy",link:"https://leetcode.com/problems/valid-parentheses/"},{title:"Min Stack",difficulty:"medium",link:"https://leetcode.com/problems/min-stack/"},{title:"Evaluate Reverse Polish Notation",difficulty:"medium",link:"https://leetcode.com/problems/evaluate-reverse-polish-notation/"},{title:"Daily Temperatures",difficulty:"medium",link:"https://leetcode.com/problems/daily-temperatures/"}]},{slug:"queue",title:"Queue",emoji:"🚦",category:"Data Structures",description:"A FIFO (First In, First Out) structure where elements are added at the back and removed from the front.",complexity:{time:{best:"O(1)",average:"O(1)",worst:"O(1)"},space:"O(n)"},keyPoints:["FIFO: first element enqueued is the first dequeued","Enqueue (add to back) and Dequeue (remove from front) are O(1)","Use a deque (double-ended queue) for O(1) on both ends","Array-based queue has O(n) dequeue unless using a circular buffer or deque","Essential for BFS, task scheduling, and buffering"],codeExamples:[{language:"swift",code:`struct Queue<T> {
    private var elements: [T] = []

    mutating func enqueue(_ element: T) {
        elements.append(element)
    }

    @discardableResult
    mutating func dequeue() -> T? {
        guard !elements.isEmpty else { return nil }
        return elements.removeFirst()  // O(n) — use a proper deque for O(1)
    }

    func peek() -> T? { elements.first }
    var isEmpty: Bool { elements.isEmpty }
    var count: Int { elements.count }
}

var queue = Queue<Int>()
queue.enqueue(1); queue.enqueue(2); queue.enqueue(3)
print(queue.peek()!)  // 1
queue.dequeue()
print(queue.count)    // 2`},{language:"kotlin",code:`import java.util.ArrayDeque

// Kotlin: use ArrayDeque for O(1) both ends
val queue = ArrayDeque<Int>()

queue.addLast(1)    // enqueue
queue.addLast(2)
queue.addLast(3)
println(queue.first())   // peek: 1
queue.removeFirst()      // dequeue
println(queue.size)      // 2

// Custom generic queue
class Queue<T> {
    private val elements = ArrayDeque<T>()
    fun enqueue(e: T) = elements.addLast(e)
    fun dequeue(): T? = elements.removeFirstOrNull()
    fun peek(): T? = elements.firstOrNull()
    fun isEmpty() = elements.isEmpty()
}`},{language:"typescript",code:`class Queue<T> {
    private elements: T[] = [];

    enqueue(element: T): void {
        this.elements.push(element);
    }

    dequeue(): T | undefined {
        return this.elements.shift(); // O(n) — consider a linked-list queue for O(1)
    }

    peek(): T | undefined {
        return this.elements[0];
    }

    get isEmpty(): boolean { return this.elements.length === 0; }
    get size(): number { return this.elements.length; }
}

const queue = new Queue<number>();
queue.enqueue(1); queue.enqueue(2); queue.enqueue(3);
console.log(queue.peek()); // 1
queue.dequeue();
console.log(queue.size);   // 2`},{language:"python",code:`from collections import deque

# Use deque for O(1) append and popleft
queue = deque()
queue.append(1)     # enqueue
queue.append(2)
queue.append(3)
print(queue[0])     # peek: 1
queue.popleft()     # dequeue
print(len(queue))   # 2

# Custom class
class Queue:
    def __init__(self):
        self._q = deque()

    def enqueue(self, element):
        self._q.append(element)

    def dequeue(self):
        return self._q.popleft() if self._q else None

    def peek(self):
        return self._q[0] if self._q else None

    def is_empty(self):
        return len(self._q) == 0`},{language:"java",code:`import java.util.*;

Deque<Integer> queue = new ArrayDeque<>();

queue.addLast(1);   // enqueue
queue.addLast(2);
queue.addLast(3);
System.out.println(queue.peekFirst());  // peek: 1
queue.removeFirst();                    // dequeue
System.out.println(queue.size());       // 2

// Custom generic queue
class Queue<T> {
    private final Deque<T> elements = new ArrayDeque<>();
    void enqueue(T e) { elements.addLast(e); }
    T dequeue() { return elements.pollFirst(); }
    T peek() { return elements.peekFirst(); }
    boolean isEmpty() { return elements.isEmpty(); }
}`}],problems:[{title:"Implement Queue using Stacks",difficulty:"easy",link:"https://leetcode.com/problems/implement-queue-using-stacks/"},{title:"Design Circular Queue",difficulty:"medium",link:"https://leetcode.com/problems/design-circular-queue/"},{title:"Number of Recent Calls",difficulty:"easy",link:"https://leetcode.com/problems/number-of-recent-calls/"},{title:"Sliding Window Maximum",difficulty:"hard",link:"https://leetcode.com/problems/sliding-window-maximum/"}]},{slug:"hash-table",title:"Hash Table",emoji:"#️⃣",category:"Data Structures",description:"A key-value store that uses a hash function to map keys to bucket indices, enabling O(1) average lookups.",complexity:{time:{best:"O(1)",average:"O(1)",worst:"O(n)"},space:"O(n)"},keyPoints:["O(1) average for insert, delete, and lookup","Hash collisions (two keys → same bucket) degrade to O(n) in the worst case","Common collision strategies: chaining (linked list per bucket) or open addressing","Load factor (n/capacity) triggers a resize when too high (typically > 0.75)","Keys must be hashable; order is not guaranteed (use LinkedHashMap for insertion order)"],codeExamples:[{language:"swift",code:`// Swift uses Dictionary as its hash table
var table: [String: Int] = [:]

// Insert/Update — O(1) avg
table["apple"] = 5
table["banana"] = 3
table["cherry"] = 8

// Lookup — O(1) avg
if let count = table["apple"] {
    print("apple: \\(count)")   // apple: 5
}

// Delete — O(1) avg
table.removeValue(forKey: "banana")

// Check existence — O(1) avg
let exists = table["cherry"] != nil

// Iterate — O(n)
for (key, value) in table {
    print("\\(key): \\(value)")
}

print(table.count)  // 2`},{language:"kotlin",code:`// Kotlin uses HashMap
val table = HashMap<String, Int>()

// Insert/Update — O(1) avg
table["apple"] = 5
table["banana"] = 3
table["cherry"] = 8

// Lookup — O(1) avg
table["apple"]?.let { println("apple: $it") }  // apple: 5

// Delete — O(1) avg
table.remove("banana")

// Check existence — O(1) avg
val exists = table.containsKey("cherry")

// Iterate — O(n)
for ((key, value) in table) {
    println("$key: $value")
}

println(table.size)  // 2`},{language:"typescript",code:`// TypeScript uses Map for proper hash table behavior
const table = new Map<string, number>();

// Insert/Update — O(1) avg
table.set("apple", 5);
table.set("banana", 3);
table.set("cherry", 8);

// Lookup — O(1) avg
const count = table.get("apple");
if (count !== undefined) console.log(\`apple: \${count}\`); // apple: 5

// Delete — O(1) avg
table.delete("banana");

// Check existence — O(1) avg
const exists = table.has("cherry");

// Iterate — O(n)
for (const [key, value] of table) {
    console.log(\`\${key}: \${value}\`);
}

console.log(table.size);  // 2`},{language:"python",code:`# Python dict is a hash table
table = {}

# Insert/Update — O(1) avg
table["apple"] = 5
table["banana"] = 3
table["cherry"] = 8

# Lookup — O(1) avg
count = table.get("apple")
if count is not None:
    print(f"apple: {count}")   # apple: 5

# Delete — O(1) avg
del table["banana"]

# Check existence — O(1) avg
exists = "cherry" in table

# Iterate — O(n)
for key, value in table.items():
    print(f"{key}: {value}")

print(len(table))  # 2`},{language:"java",code:`import java.util.*;

Map<String, Integer> table = new HashMap<>();

// Insert/Update — O(1) avg
table.put("apple", 5);
table.put("banana", 3);
table.put("cherry", 8);

// Lookup — O(1) avg
Integer count = table.get("apple");
if (count != null) System.out.println("apple: " + count);  // apple: 5

// Delete — O(1) avg
table.remove("banana");

// Check existence — O(1) avg
boolean exists = table.containsKey("cherry");

// Iterate — O(n)
for (Map.Entry<String, Integer> entry : table.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

System.out.println(table.size());  // 2`}],problems:[{title:"Two Sum",difficulty:"easy",link:"https://leetcode.com/problems/two-sum/"},{title:"Contains Duplicate",difficulty:"easy",link:"https://leetcode.com/problems/contains-duplicate/"},{title:"Group Anagrams",difficulty:"medium",link:"https://leetcode.com/problems/group-anagrams/"},{title:"Longest Consecutive Sequence",difficulty:"medium",link:"https://leetcode.com/problems/longest-consecutive-sequence/"}]},{slug:"bubble-sort",title:"Bubble Sort",emoji:"🫧",category:"Sorting",description:'Repeatedly swaps adjacent elements that are out of order, "bubbling" the largest unsorted element to its correct position each pass.',complexity:{time:{best:"O(n)",average:"O(n²)",worst:"O(n²)"},space:"O(1)"},keyPoints:["Simple to implement but inefficient for large datasets","Each full pass places one more element in its final sorted position","Optimizable: if no swaps occur in a pass, the array is already sorted — exit early","Stable sort: preserves relative order of equal elements","In-place: requires only O(1) extra space"],hasVisualizer:!0,codeExamples:[{language:"swift",code:`func bubbleSort(_ arr: inout [Int]) {
    let n = arr.count
    for i in 0..<n - 1 {
        var swapped = false
        for j in 0..<n - i - 1 {
            if arr[j] > arr[j + 1] {
                arr.swapAt(j, j + 1)
                swapped = true
            }
        }
        if !swapped { break }  // early exit optimisation
    }
}

var nums = [64, 34, 25, 12, 22, 11, 90]
bubbleSort(&nums)
print(nums)  // [11, 12, 22, 25, 34, 64, 90]`},{language:"kotlin",code:`fun bubbleSort(arr: IntArray) {
    val n = arr.size
    for (i in 0 until n - 1) {
        var swapped = false
        for (j in 0 until n - i - 1) {
            if (arr[j] > arr[j + 1]) {
                val tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp
                swapped = true
            }
        }
        if (!swapped) break  // early exit optimisation
    }
}

val nums = intArrayOf(64, 34, 25, 12, 22, 11, 90)
bubbleSort(nums)
println(nums.toList())  // [11, 12, 22, 25, 34, 64, 90]`},{language:"typescript",code:`function bubbleSort(arr: number[]): number[] {
    const a = [...arr];
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }
        if (!swapped) break;  // early exit optimisation
    }
    return a;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]`},{language:"python",code:`def bubble_sort(arr):
    a = arr.copy()
    n = len(a)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
                swapped = True
        if not swapped:
            break  # early exit optimisation
    return a

print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))
# [11, 12, 22, 25, 34, 64, 90]`},{language:"java",code:`static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        boolean swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
                swapped = true;
            }
        }
        if (!swapped) break;  // early exit optimisation
    }
}

int[] nums = {64, 34, 25, 12, 22, 11, 90};
bubbleSort(nums);
System.out.println(Arrays.toString(nums));  // [11, 12, 22, 25, 34, 64, 90]`}],problems:[{title:"Sort Colors",difficulty:"medium",link:"https://leetcode.com/problems/sort-colors/"},{title:"Sort an Array",difficulty:"medium",link:"https://leetcode.com/problems/sort-an-array/"}]},{slug:"selection-sort",title:"Selection Sort",emoji:"🎯",category:"Sorting",description:"Repeatedly finds the minimum element from the unsorted portion and moves it to the sorted boundary.",complexity:{time:{best:"O(n²)",average:"O(n²)",worst:"O(n²)"},space:"O(1)"},keyPoints:["Makes exactly n−1 swaps regardless of input — useful when writes are expensive","Always O(n²) — does not benefit from pre-sorted data","In-place and simple to implement","Not stable by default (swapping can change relative order of equal elements)","Best suited for small arrays or when minimising swaps matters"],hasVisualizer:!0,codeExamples:[{language:"swift",code:`func selectionSort(_ arr: inout [Int]) {
    let n = arr.count
    for i in 0..<n - 1 {
        var minIdx = i
        for j in i + 1..<n {
            if arr[j] < arr[minIdx] { minIdx = j }
        }
        if minIdx != i { arr.swapAt(i, minIdx) }
    }
}

var nums = [64, 25, 12, 22, 11]
selectionSort(&nums)
print(nums)  // [11, 12, 22, 25, 64]`},{language:"kotlin",code:`fun selectionSort(arr: IntArray) {
    val n = arr.size
    for (i in 0 until n - 1) {
        var minIdx = i
        for (j in i + 1 until n) {
            if (arr[j] < arr[minIdx]) minIdx = j
        }
        if (minIdx != i) {
            val tmp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = tmp
        }
    }
}

val nums = intArrayOf(64, 25, 12, 22, 11)
selectionSort(nums)
println(nums.toList())  // [11, 12, 22, 25, 64]`},{language:"typescript",code:`function selectionSort(arr: number[]): number[] {
    const a = [...arr];
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[minIdx]) minIdx = j;
        }
        if (minIdx !== i) [a[i], a[minIdx]] = [a[minIdx], a[i]];
    }
    return a;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
// [11, 12, 22, 25, 64]`},{language:"python",code:`def selection_sort(arr):
    a = arr.copy()
    n = len(a)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if a[j] < a[min_idx]:
                min_idx = j
        if min_idx != i:
            a[i], a[min_idx] = a[min_idx], a[i]
    return a

print(selection_sort([64, 25, 12, 22, 11]))
# [11, 12, 22, 25, 64]`},{language:"java",code:`static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (minIdx != i) {
            int tmp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = tmp;
        }
    }
}

int[] nums = {64, 25, 12, 22, 11};
selectionSort(nums);
System.out.println(Arrays.toString(nums));  // [11, 12, 22, 25, 64]`}],problems:[{title:"Sort Colors",difficulty:"medium",link:"https://leetcode.com/problems/sort-colors/"},{title:"Sort an Array",difficulty:"medium",link:"https://leetcode.com/problems/sort-an-array/"}]},{slug:"insertion-sort",title:"Insertion Sort",emoji:"🃏",category:"Sorting",description:"Builds a sorted sub-array one element at a time by inserting each new element into its correct position.",complexity:{time:{best:"O(n)",average:"O(n²)",worst:"O(n²)"},space:"O(1)"},keyPoints:["Best case O(n) on nearly sorted data — very practical","Online algorithm: can sort elements as they arrive one by one","Stable sort: equal elements retain their original order","Used as the final pass in hybrid sorts like Timsort (Python, Java) for small subarrays","Efficient for small inputs (n < 20) due to low overhead"],hasVisualizer:!0,codeExamples:[{language:"swift",code:`func insertionSort(_ arr: inout [Int]) {
    let n = arr.count
    for i in 1..<n {
        let key = arr[i]
        var j = i - 1
        while j >= 0 && arr[j] > key {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = key
    }
}

var nums = [12, 11, 13, 5, 6]
insertionSort(&nums)
print(nums)  // [5, 6, 11, 12, 13]`},{language:"kotlin",code:`fun insertionSort(arr: IntArray) {
    val n = arr.size
    for (i in 1 until n) {
        val key = arr[i]
        var j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
}

val nums = intArrayOf(12, 11, 13, 5, 6)
insertionSort(nums)
println(nums.toList())  // [5, 6, 11, 12, 13]`},{language:"typescript",code:`function insertionSort(arr: number[]): number[] {
    const a = [...arr];
    const n = a.length;
    for (let i = 1; i < n; i++) {
        const key = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
// [5, 6, 11, 12, 13]`},{language:"python",code:`def insertion_sort(arr):
    a = arr.copy()
    n = len(a)
    for i in range(1, n):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j + 1] = a[j]
            j -= 1
        a[j + 1] = key
    return a

print(insertion_sort([12, 11, 13, 5, 6]))
# [5, 6, 11, 12, 13]`},{language:"java",code:`static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int[] nums = {12, 11, 13, 5, 6};
insertionSort(nums);
System.out.println(Arrays.toString(nums));  // [5, 6, 11, 12, 13]`}],problems:[{title:"Insertion Sort List",difficulty:"medium",link:"https://leetcode.com/problems/insertion-sort-list/"},{title:"Sort an Array",difficulty:"medium",link:"https://leetcode.com/problems/sort-an-array/"}]},{slug:"merge-sort",title:"Merge Sort",emoji:"🔀",category:"Sorting",description:"A divide-and-conquer algorithm that recursively splits the array in half, sorts each half, then merges them back.",complexity:{time:{best:"O(n log n)",average:"O(n log n)",worst:"O(n log n)"},space:"O(n)"},keyPoints:["Guaranteed O(n log n) in all cases — no worst-case degradation","Stable sort: preserves relative order of equal elements","Requires O(n) extra space for the merge step","Preferred for sorting linked lists (no random access needed)","Basis for external sorting (sorting data too large for RAM)"],hasVisualizer:!0,codeExamples:[{language:"swift",code:`func mergeSort(_ arr: [Int]) -> [Int] {
    guard arr.count > 1 else { return arr }
    let mid = arr.count / 2
    let left  = mergeSort(Array(arr[..<mid]))
    let right = mergeSort(Array(arr[mid...]))
    return merge(left, right)
}

func merge(_ left: [Int], _ right: [Int]) -> [Int] {
    var result = [Int]()
    var i = 0, j = 0
    while i < left.count && j < right.count {
        if left[i] <= right[j] { result.append(left[i]); i += 1 }
        else                   { result.append(right[j]); j += 1 }
    }
    return result + Array(left[i...]) + Array(right[j...])
}

print(mergeSort([38, 27, 43, 3, 9, 82, 10]))
// [3, 9, 10, 27, 38, 43, 82]`},{language:"kotlin",code:`fun mergeSort(arr: IntArray): IntArray {
    if (arr.size <= 1) return arr
    val mid = arr.size / 2
    val left  = mergeSort(arr.copyOfRange(0, mid))
    val right = mergeSort(arr.copyOfRange(mid, arr.size))
    return merge(left, right)
}

fun merge(left: IntArray, right: IntArray): IntArray {
    val result = mutableListOf<Int>()
    var i = 0; var j = 0
    while (i < left.size && j < right.size) {
        if (left[i] <= right[j]) result.add(left[i++])
        else                     result.add(right[j++])
    }
    while (i < left.size)  result.add(left[i++])
    while (j < right.size) result.add(right[j++])
    return result.toIntArray()
}

println(mergeSort(intArrayOf(38, 27, 43, 3, 9, 82, 10)).toList())
// [3, 9, 10, 27, 38, 43, 82]`},{language:"typescript",code:`function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left  = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) result.push(left[i++]);
        else                     result.push(right[j++]);
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
// [3, 9, 10, 27, 38, 43, 82]`},{language:"python",code:`def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left  = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    return result + left[i:] + right[j:]

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))
# [3, 9, 10, 27, 38, 43, 82]`},{language:"java",code:`static int[] mergeSort(int[] arr) {
    if (arr.length <= 1) return arr;
    int mid = arr.length / 2;
    int[] left  = mergeSort(Arrays.copyOfRange(arr, 0, mid));
    int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));
    return merge(left, right);
}

static int[] merge(int[] left, int[] right) {
    int[] result = new int[left.length + right.length];
    int i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length) {
        result[k++] = left[i] <= right[j] ? left[i++] : right[j++];
    }
    while (i < left.length)  result[k++] = left[i++];
    while (j < right.length) result[k++] = right[j++];
    return result;
}

int[] nums = {38, 27, 43, 3, 9, 82, 10};
System.out.println(Arrays.toString(mergeSort(nums)));
// [3, 9, 10, 27, 38, 43, 82]`}],problems:[{title:"Sort List",difficulty:"medium",link:"https://leetcode.com/problems/sort-list/"},{title:"Merge Sorted Array",difficulty:"easy",link:"https://leetcode.com/problems/merge-sorted-array/"},{title:"Merge k Sorted Lists",difficulty:"hard",link:"https://leetcode.com/problems/merge-k-sorted-lists/"}]},{slug:"quick-sort",title:"Quick Sort",emoji:"⚡",category:"Sorting",description:"A divide-and-conquer algorithm that picks a pivot, partitions elements around it, then recursively sorts each partition.",complexity:{time:{best:"O(n log n)",average:"O(n log n)",worst:"O(n²)"},space:"O(log n)"},keyPoints:["Average O(n log n) with very low constant factor — fastest in practice for most inputs","Worst case O(n²) occurs with sorted/reverse-sorted input and a bad pivot choice","Randomized pivot or median-of-three strategy prevents worst case","In-place: O(log n) stack space from recursion only","Not stable by default; used in most standard library sort implementations"],hasVisualizer:!0,codeExamples:[{language:"swift",code:`func quickSort(_ arr: inout [Int], _ low: Int, _ high: Int) {
    guard low < high else { return }
    let pi = partition(&arr, low, high)
    quickSort(&arr, low, pi - 1)
    quickSort(&arr, pi + 1, high)
}

func partition(_ arr: inout [Int], _ low: Int, _ high: Int) -> Int {
    let pivot = arr[high]
    var i = low - 1
    for j in low..<high {
        if arr[j] <= pivot { i += 1; arr.swapAt(i, j) }
    }
    arr.swapAt(i + 1, high)
    return i + 1
}

var nums = [10, 7, 8, 9, 1, 5]
quickSort(&nums, 0, nums.count - 1)
print(nums)  // [1, 5, 7, 8, 9, 10]`},{language:"kotlin",code:`fun quickSort(arr: IntArray, low: Int, high: Int) {
    if (low < high) {
        val pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
    }
}

fun partition(arr: IntArray, low: Int, high: Int): Int {
    val pivot = arr[high]; var i = low - 1
    for (j in low until high) {
        if (arr[j] <= pivot) {
            i++
            val tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp
        }
    }
    val tmp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = tmp
    return i + 1
}

val nums = intArrayOf(10, 7, 8, 9, 1, 5)
quickSort(nums, 0, nums.size - 1)
println(nums.toList())  // [1, 5, 7, 8, 9, 10]`},{language:"typescript",code:`function quickSort(arr: number[], low: number, high: number): void {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) { i++; [arr[i], arr[j]] = [arr[j], arr[i]]; }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const nums = [10, 7, 8, 9, 1, 5];
quickSort(nums, 0, nums.length - 1);
console.log(nums);  // [1, 5, 7, 8, 9, 10]`},{language:"python",code:`def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]; i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

nums = [10, 7, 8, 9, 1, 5]
quick_sort(nums, 0, len(nums) - 1)
print(nums)  # [1, 5, 7, 8, 9, 10]`},{language:"java",code:`static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
    }
    int tmp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = tmp;
    return i + 1;
}

int[] nums = {10, 7, 8, 9, 1, 5};
quickSort(nums, 0, nums.length - 1);
System.out.println(Arrays.toString(nums));  // [1, 5, 7, 8, 9, 10]`}],problems:[{title:"Kth Largest Element in an Array",difficulty:"medium",link:"https://leetcode.com/problems/kth-largest-element-in-an-array/"},{title:"Sort an Array",difficulty:"medium",link:"https://leetcode.com/problems/sort-an-array/"},{title:"Wiggle Sort II",difficulty:"medium",link:"https://leetcode.com/problems/wiggle-sort-ii/"}]},{slug:"linear-search",title:"Linear Search",emoji:"🔍",category:"Searching",description:"Scans every element from the start until the target is found or the end is reached. Works on any unsorted collection.",complexity:{time:{best:"O(1)",average:"O(n)",worst:"O(n)"},space:"O(1)"},keyPoints:["Works on unsorted data — no preprocessing required","O(1) space — no additional memory needed","Simple and reliable but slow for large datasets","Best when the list is small or you expect the element near the front","Necessary when the collection cannot be sorted"],codeExamples:[{language:"swift",code:`func linearSearch<T: Equatable>(_ arr: [T], target: T) -> Int? {
    for (index, element) in arr.enumerated() {
        if element == target { return index }
    }
    return nil
}

let nums = [4, 2, 7, 1, 9, 3, 5]
if let idx = linearSearch(nums, target: 7) {
    print("Found at index \\(idx)")  // Found at index 2
} else {
    print("Not found")
}`},{language:"kotlin",code:`fun <T> linearSearch(arr: List<T>, target: T): Int {
    for (i in arr.indices) {
        if (arr[i] == target) return i
    }
    return -1
}

val nums = listOf(4, 2, 7, 1, 9, 3, 5)
val idx = linearSearch(nums, 7)
if (idx != -1) println("Found at index $idx")  // Found at index 2
else           println("Not found")`},{language:"typescript",code:`function linearSearch<T>(arr: T[], target: T): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

const nums = [4, 2, 7, 1, 9, 3, 5];
const idx = linearSearch(nums, 7);
if (idx !== -1) console.log(\`Found at index \${idx}\`);  // Found at index 2
else            console.log("Not found");`},{language:"python",code:`def linear_search(arr, target):
    for i, element in enumerate(arr):
        if element == target:
            return i
    return -1

nums = [4, 2, 7, 1, 9, 3, 5]
idx = linear_search(nums, 7)
if idx != -1:
    print(f"Found at index {idx}")  # Found at index 2
else:
    print("Not found")`},{language:"java",code:`static <T> int linearSearch(T[] arr, T target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i].equals(target)) return i;
    }
    return -1;
}

Integer[] nums = {4, 2, 7, 1, 9, 3, 5};
int idx = linearSearch(nums, 7);
if (idx != -1) System.out.println("Found at index " + idx);  // Found at index 2
else           System.out.println("Not found");`}],problems:[{title:"Find the Index of the First Occurrence in a String",difficulty:"easy",link:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"},{title:"Search in a Binary Search Tree",difficulty:"easy",link:"https://leetcode.com/problems/search-in-a-binary-search-tree/"}]},{slug:"binary-search",title:"Binary Search",emoji:"🎯",category:"Searching",description:"Halves the search space each step by comparing the target to the middle element. Requires a sorted collection.",complexity:{time:{best:"O(1)",average:"O(log n)",worst:"O(log n)"},space:"O(1)"},keyPoints:["Requires sorted input — cannot work on unsorted data","Eliminates half the remaining search space every comparison","O(log n) is dramatically faster than O(n) for large inputs","Calculate mid as low + (high - low) / 2 to avoid integer overflow","Template applies to many problems: find first/last occurrence, boundary conditions"],codeExamples:[{language:"swift",code:`func binarySearch(_ arr: [Int], target: Int) -> Int? {
    var low = 0, high = arr.count - 1
    while low <= high {
        let mid = low + (high - low) / 2
        if      arr[mid] == target { return mid }
        else if arr[mid] < target  { low  = mid + 1 }
        else                       { high = mid - 1 }
    }
    return nil
}

let sorted = [1, 3, 5, 7, 9, 11, 13, 15]
if let idx = binarySearch(sorted, target: 7) {
    print("Found at index \\(idx)")  // Found at index 3
}`},{language:"kotlin",code:`fun binarySearch(arr: IntArray, target: Int): Int {
    var low = 0; var high = arr.size - 1
    while (low <= high) {
        val mid = low + (high - low) / 2
        when {
            arr[mid] == target -> return mid
            arr[mid] < target  -> low  = mid + 1
            else               -> high = mid - 1
        }
    }
    return -1
}

val sorted = intArrayOf(1, 3, 5, 7, 9, 11, 13, 15)
val idx = binarySearch(sorted, 7)
if (idx != -1) println("Found at index $idx")  // Found at index 3`},{language:"typescript",code:`function binarySearch(arr: number[], target: number): number {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if      (arr[mid] === target) return mid;
        else if (arr[mid] < target)   low  = mid + 1;
        else                          high = mid - 1;
    }
    return -1;
}

const sorted = [1, 3, 5, 7, 9, 11, 13, 15];
const idx = binarySearch(sorted, 7);
if (idx !== -1) console.log(\`Found at index \${idx}\`);  // Found at index 3`},{language:"python",code:`def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if   arr[mid] == target: return mid
        elif arr[mid] < target:  low  = mid + 1
        else:                    high = mid - 1
    return -1

sorted_arr = [1, 3, 5, 7, 9, 11, 13, 15]
idx = binary_search(sorted_arr, 7)
if idx != -1:
    print(f"Found at index {idx}")  # Found at index 3`},{language:"java",code:`static int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if      (arr[mid] == target) return mid;
        else if (arr[mid] < target)  low  = mid + 1;
        else                          high = mid - 1;
    }
    return -1;
}

int[] sorted = {1, 3, 5, 7, 9, 11, 13, 15};
int idx = binarySearch(sorted, 7);
if (idx != -1) System.out.println("Found at index " + idx);  // Found at index 3`}],problems:[{title:"Binary Search",difficulty:"easy",link:"https://leetcode.com/problems/binary-search/"},{title:"First Bad Version",difficulty:"easy",link:"https://leetcode.com/problems/first-bad-version/"},{title:"Search a 2D Matrix",difficulty:"medium",link:"https://leetcode.com/problems/search-a-2d-matrix/"},{title:"Find Minimum in Rotated Sorted Array",difficulty:"medium",link:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"}]},{slug:"bfs",title:"Breadth-First Search",emoji:"🌊",category:"Graph Algorithms",description:"Explores all neighbors at the current depth before moving deeper, using a queue to process nodes level by level.",complexity:{time:{worst:"O(V + E)"},space:"O(V)"},keyPoints:["Processes nodes level by level — guarantees shortest path in unweighted graphs","Uses a queue (FIFO) to maintain the frontier","Mark nodes as visited before enqueuing to avoid processing the same node twice","Space O(V) — the queue can hold up to all vertices in the worst case","Applications: shortest path, level-order traversal, nearest neighbor, bipartiteness check"],codeExamples:[{language:"swift",code:`func bfs(graph: [Int: [Int]], start: Int) -> [Int] {
    var visited = Set<Int>()
    var queue = [start]
    var result = [Int]()

    visited.insert(start)

    while !queue.isEmpty {
        let node = queue.removeFirst()
        result.append(node)
        for neighbor in graph[node] ?? [] where !visited.contains(neighbor) {
            visited.insert(neighbor)
            queue.append(neighbor)
        }
    }
    return result
}

let graph = [0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1], 4: [1], 5: [2]]
print(bfs(graph: graph, start: 0))  // [0, 1, 2, 3, 4, 5]`},{language:"kotlin",code:`fun bfs(graph: Map<Int, List<Int>>, start: Int): List<Int> {
    val visited = mutableSetOf<Int>()
    val queue   = ArrayDeque<Int>()
    val result  = mutableListOf<Int>()

    queue.add(start); visited.add(start)

    while (queue.isNotEmpty()) {
        val node = queue.removeFirst()
        result.add(node)
        for (neighbor in graph[node] ?: emptyList()) {
            if (neighbor !in visited) {
                visited.add(neighbor); queue.add(neighbor)
            }
        }
    }
    return result
}

val graph = mapOf(0 to listOf(1, 2), 1 to listOf(0, 3, 4),
                  2 to listOf(0, 5), 3 to listOf(1), 4 to listOf(1), 5 to listOf(2))
println(bfs(graph, 0))  // [0, 1, 2, 3, 4, 5]`},{language:"typescript",code:`function bfs(graph: Map<number, number[]>, start: number): number[] {
    const visited = new Set<number>();
    const queue: number[] = [start];
    const result: number[] = [];

    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);
        for (const neighbor of graph.get(node) ?? []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}

const graph = new Map([[0,[1,2]],[1,[0,3,4]],[2,[0,5]],[3,[1]],[4,[1]],[5,[2]]]);
console.log(bfs(graph, 0));  // [0, 1, 2, 3, 4, 5]`},{language:"python",code:`from collections import deque

def bfs(graph, start):
    visited = set()
    queue   = deque([start])
    result  = []

    visited.add(start)

    while queue:
        node = queue.popleft()
        result.append(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return result

graph = {0:[1,2], 1:[0,3,4], 2:[0,5], 3:[1], 4:[1], 5:[2]}
print(bfs(graph, 0))  # [0, 1, 2, 3, 4, 5]`},{language:"java",code:`import java.util.*;

static List<Integer> bfs(Map<Integer, List<Integer>> graph, int start) {
    Set<Integer> visited = new HashSet<>();
    Deque<Integer> queue = new ArrayDeque<>();
    List<Integer> result = new ArrayList<>();

    queue.add(start); visited.add(start);

    while (!queue.isEmpty()) {
        int node = queue.poll();
        result.add(node);
        for (int neighbor : graph.getOrDefault(node, List.of())) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor); queue.add(neighbor);
            }
        }
    }
    return result;
}

Map<Integer, List<Integer>> graph = Map.of(
    0, List.of(1, 2), 1, List.of(0, 3, 4),
    2, List.of(0, 5), 3, List.of(1), 4, List.of(1), 5, List.of(2));
System.out.println(bfs(graph, 0));  // [0, 1, 2, 3, 4, 5]`}],problems:[{title:"Binary Tree Level Order Traversal",difficulty:"medium",link:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},{title:"Number of Islands",difficulty:"medium",link:"https://leetcode.com/problems/number-of-islands/"},{title:"Course Schedule",difficulty:"medium",link:"https://leetcode.com/problems/course-schedule/"},{title:"Word Ladder",difficulty:"hard",link:"https://leetcode.com/problems/word-ladder/"}]},{slug:"dfs",title:"Depth-First Search",emoji:"🕳️",category:"Graph Algorithms",description:"Explores as deep as possible along each branch before backtracking, using recursion or an explicit stack.",complexity:{time:{worst:"O(V + E)"},space:"O(V)"},keyPoints:["Explores one path completely before exploring alternatives","Can be implemented recursively (call stack) or with an explicit stack","O(V) space for the recursion stack in the worst case (path graph)","Does not guarantee shortest path — use BFS for that","Applications: topological sort, cycle detection, connected components, maze solving"],codeExamples:[{language:"swift",code:`func dfs(graph: [Int: [Int]], start: Int) -> [Int] {
    var visited = Set<Int>()
    var result  = [Int]()

    func explore(_ node: Int) {
        visited.insert(node)
        result.append(node)
        for neighbor in graph[node] ?? [] where !visited.contains(neighbor) {
            explore(neighbor)
        }
    }

    explore(start)
    return result
}

let graph = [0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1], 4: [1], 5: [2]]
print(dfs(graph: graph, start: 0))  // [0, 1, 3, 4, 2, 5]`},{language:"kotlin",code:`fun dfs(graph: Map<Int, List<Int>>, start: Int): List<Int> {
    val visited = mutableSetOf<Int>()
    val result  = mutableListOf<Int>()

    fun explore(node: Int) {
        visited.add(node); result.add(node)
        for (neighbor in graph[node] ?: emptyList()) {
            if (neighbor !in visited) explore(neighbor)
        }
    }

    explore(start)
    return result
}

val graph = mapOf(0 to listOf(1, 2), 1 to listOf(0, 3, 4),
                  2 to listOf(0, 5), 3 to listOf(1), 4 to listOf(1), 5 to listOf(2))
println(dfs(graph, 0))  // [0, 1, 3, 4, 2, 5]`},{language:"typescript",code:`function dfs(graph: Map<number, number[]>, start: number): number[] {
    const visited = new Set<number>();
    const result: number[] = [];

    function explore(node: number): void {
        visited.add(node);
        result.push(node);
        for (const neighbor of graph.get(node) ?? []) {
            if (!visited.has(neighbor)) explore(neighbor);
        }
    }

    explore(start);
    return result;
}

const graph = new Map([[0,[1,2]],[1,[0,3,4]],[2,[0,5]],[3,[1]],[4,[1]],[5,[2]]]);
console.log(dfs(graph, 0));  // [0, 1, 3, 4, 2, 5]`},{language:"python",code:`def dfs(graph, start):
    visited = set()
    result  = []

    def explore(node):
        visited.add(node)
        result.append(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                explore(neighbor)

    explore(start)
    return result

graph = {0:[1,2], 1:[0,3,4], 2:[0,5], 3:[1], 4:[1], 5:[2]}
print(dfs(graph, 0))  # [0, 1, 3, 4, 2, 5]`},{language:"java",code:`import java.util.*;

static List<Integer> dfs(Map<Integer, List<Integer>> graph, int start) {
    Set<Integer> visited = new HashSet<>();
    List<Integer> result = new ArrayList<>();
    explore(graph, start, visited, result);
    return result;
}

static void explore(Map<Integer, List<Integer>> graph, int node,
                     Set<Integer> visited, List<Integer> result) {
    visited.add(node);
    result.add(node);
    for (int neighbor : graph.getOrDefault(node, List.of())) {
        if (!visited.contains(neighbor)) explore(graph, neighbor, visited, result);
    }
}

Map<Integer, List<Integer>> graph = Map.of(
    0, List.of(1, 2), 1, List.of(0, 3, 4),
    2, List.of(0, 5), 3, List.of(1), 4, List.of(1), 5, List.of(2));
System.out.println(dfs(graph, 0));  // [0, 1, 3, 4, 2, 5]`}],problems:[{title:"Number of Islands",difficulty:"medium",link:"https://leetcode.com/problems/number-of-islands/"},{title:"Clone Graph",difficulty:"medium",link:"https://leetcode.com/problems/clone-graph/"},{title:"Path Sum",difficulty:"easy",link:"https://leetcode.com/problems/path-sum/"},{title:"Course Schedule II",difficulty:"medium",link:"https://leetcode.com/problems/course-schedule-ii/"}]}],Lg=[...new Set(Qs.map(t=>t.category))],Nd=[{slug:"singleton",title:"Singleton",emoji:"🔒",category:"Creational",intent:"Ensures a class has only one instance and provides a global access point to it.",problem:"Some resources — database connections, configuration, caches — should exist only once. Without Singleton, calling `new Manager()` in multiple places creates separate instances that can get out of sync.",keyPoints:["Only one instance exists for the entire application lifetime","Lazy initialization: the instance is created on first access","Thread safety is required in concurrent environments — use dispatch queues or synchronized blocks","Difficult to unit-test because it carries global state across tests","Prefer dependency injection over Singleton where testability matters"],whenToUse:["Shared resources like a database connection, logger, or analytics tracker","Configuration managers that should read settings only once","In-memory cache shared across the whole app","Hardware interface wrappers (serial port, Bluetooth manager)"],realWorldExamples:[{platform:"iOS",example:"URLSession.shared, UserDefaults.standard, NotificationCenter.default"},{platform:"Android",example:"Room database instance, Retrofit client, SharedPreferences"},{platform:"Web",example:"Database connection pool, logger instance, event bus"}],codeExamples:[{language:"swift",code:`final class AppSettings {
    static let shared = AppSettings()
    private init() {}   // prevents external instantiation

    var theme: String = "light"
    var language: String = "en"
}

// Usage — always the same instance
AppSettings.shared.theme = "dark"
print(AppSettings.shared.theme) // "dark"

// Real-world equivalents:
// URLSession.shared
// UserDefaults.standard
// NotificationCenter.default`},{language:"kotlin",code:`// Kotlin object declaration is a Singleton by definition
object AppSettings {
    var theme: String = "light"
    var language: String = "en"
}

// Usage
AppSettings.theme = "dark"
println(AppSettings.theme) // "dark"

// Companion object factory for lazy initialization
class Database private constructor() {
    companion object {
        @Volatile private var instance: Database? = null
        fun getInstance() = instance ?: synchronized(this) {
            instance ?: Database().also { instance = it }
        }
    }
}`},{language:"typescript",code:`class AppSettings {
    private static instance: AppSettings;
    private constructor() {}

    static getInstance(): AppSettings {
        if (!AppSettings.instance) {
            AppSettings.instance = new AppSettings();
        }
        return AppSettings.instance;
    }

    theme: string = "light";
    language: string = "en";
}

// Usage — always the same instance
const s1 = AppSettings.getInstance();
const s2 = AppSettings.getInstance();
s1.theme = "dark";
console.log(s2.theme);         // "dark" — same object
console.log(s1 === s2);        // true`},{language:"python",code:`class AppSettings:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.theme = "light"
            cls._instance.language = "en"
        return cls._instance

# Usage — always the same instance
s1 = AppSettings()
s2 = AppSettings()
s1.theme = "dark"
print(s2.theme)        # "dark" — same object
print(s1 is s2)        # True`},{language:"java",code:`public final class AppSettings {
    private static volatile AppSettings instance;

    public String theme = "light";
    public String language = "en";

    private AppSettings() {}

    public static AppSettings getInstance() {
        if (instance == null) {
            synchronized (AppSettings.class) {
                if (instance == null) instance = new AppSettings();
            }
        }
        return instance;
    }
}

// Usage — always the same instance
AppSettings s1 = AppSettings.getInstance();
AppSettings s2 = AppSettings.getInstance();
s1.theme = "dark";
System.out.println(s2.theme);        // "dark" — same object
System.out.println(s1 == s2);        // true`}]},{slug:"factory-method",title:"Factory Method",emoji:"🏭",category:"Creational",intent:"Defines an interface for creating objects but lets subclasses or a factory function decide which class to instantiate.",problem:"Client code needs objects but shouldn't be coupled to their concrete classes. Hard-coding `new ConcreteType()` everywhere makes switching implementations painful.",keyPoints:["Decouples client code from concrete class implementations","Open/Closed: add new product types without modifying existing code","The factory encapsulates all knowledge of which class to create","Can return different subclasses based on input parameters","Abstract Factory extends this by creating families of related objects"],whenToUse:["When you don't know ahead of time which class to instantiate","When you want to centralize and control object creation logic","When subclasses should decide what objects to create","When creating objects of different types based on runtime config or environment"],realWorldExamples:[{platform:"iOS",example:"UITableView.dequeueReusableCell(withIdentifier:), UICollectionView cell registration"},{platform:"Android",example:"ViewModelProvider.Factory, RecyclerView.ViewHolder creation in onCreateViewHolder"},{platform:"Web",example:"React.createElement, document.createElement, Knex query builder"}],codeExamples:[{language:"swift",code:`protocol Notification {
    func send(to recipient: String)
}

struct EmailNotification: Notification {
    func send(to recipient: String) { print("Email → \\(recipient)") }
}

struct PushNotification: Notification {
    func send(to recipient: String) { print("Push → \\(recipient)") }
}

struct SMSNotification: Notification {
    func send(to recipient: String) { print("SMS → \\(recipient)") }
}

// Factory function
enum Channel { case email, push, sms }

func makeNotification(for channel: Channel) -> Notification {
    switch channel {
    case .email: return EmailNotification()
    case .push:  return PushNotification()
    case .sms:   return SMSNotification()
    }
}

let n = makeNotification(for: .push)
n.send(to: "agus@example.com")  // "Push → agus@example.com"`},{language:"kotlin",code:`interface Notification {
    fun send(recipient: String)
}

class EmailNotification : Notification {
    override fun send(recipient: String) = println("Email → $recipient")
}

class PushNotification : Notification {
    override fun send(recipient: String) = println("Push → $recipient")
}

class SMSNotification : Notification {
    override fun send(recipient: String) = println("SMS → $recipient")
}

enum class Channel { EMAIL, PUSH, SMS }

fun createNotification(channel: Channel): Notification = when (channel) {
    Channel.EMAIL -> EmailNotification()
    Channel.PUSH  -> PushNotification()
    Channel.SMS   -> SMSNotification()
}

val notification = createNotification(Channel.PUSH)
notification.send("agus@example.com")  // "Push → agus@example.com"`},{language:"typescript",code:`interface Notification {
    send(recipient: string): void;
}

class EmailNotification implements Notification {
    send(recipient: string) { console.log(\`Email → \${recipient}\`); }
}

class PushNotification implements Notification {
    send(recipient: string) { console.log(\`Push → \${recipient}\`); }
}

class SMSNotification implements Notification {
    send(recipient: string) { console.log(\`SMS → \${recipient}\`); }
}

type Channel = "email" | "push" | "sms";

function createNotification(channel: Channel): Notification {
    const map: Record<Channel, new () => Notification> = {
        email: EmailNotification,
        push:  PushNotification,
        sms:   SMSNotification,
    };
    return new map[channel]();
}

const n = createNotification("push");
n.send("agus@example.com");  // "Push → agus@example.com"`},{language:"python",code:`from abc import ABC, abstractmethod

class Notification(ABC):
    @abstractmethod
    def send(self, recipient: str) -> None: pass

class EmailNotification(Notification):
    def send(self, recipient: str) -> None:
        print(f"Email → {recipient}")

class PushNotification(Notification):
    def send(self, recipient: str) -> None:
        print(f"Push → {recipient}")

class SMSNotification(Notification):
    def send(self, recipient: str) -> None:
        print(f"SMS → {recipient}")

def create_notification(channel: str) -> Notification:
    registry = {
        "email": EmailNotification,
        "push":  PushNotification,
        "sms":   SMSNotification,
    }
    cls = registry.get(channel)
    if not cls: raise ValueError(f"Unknown channel: {channel}")
    return cls()

n = create_notification("push")
n.send("agus@example.com")  # "Push → agus@example.com"`},{language:"java",code:`interface Notification {
    void send(String recipient);
}

class EmailNotification implements Notification {
    public void send(String recipient) { System.out.println("Email → " + recipient); }
}

class PushNotification implements Notification {
    public void send(String recipient) { System.out.println("Push → " + recipient); }
}

class SMSNotification implements Notification {
    public void send(String recipient) { System.out.println("SMS → " + recipient); }
}

enum Channel { EMAIL, PUSH, SMS }

class NotificationFactory {
    static Notification create(Channel channel) {
        switch (channel) {
            case EMAIL: return new EmailNotification();
            case PUSH:  return new PushNotification();
            case SMS:   return new SMSNotification();
            default: throw new IllegalArgumentException("Unknown channel");
        }
    }
}

Notification n = NotificationFactory.create(Channel.PUSH);
n.send("agus@example.com");  // "Push → agus@example.com"`}]},{slug:"builder",title:"Builder",emoji:"🔨",category:"Creational",intent:"Constructs complex objects step by step using a fluent interface, separating construction from representation.",problem:"A class with many optional parameters leads to telescoping constructors or long init calls that are hard to read. You need a clean way to build objects incrementally.",keyPoints:["Method chaining (fluent interface) makes construction readable","Same builder can produce different representations","Validates required fields only at build() time","Immutable result: once built, the object is complete",'Avoids the "telescoping constructor" anti-pattern'],whenToUse:["Objects with many optional or configurable fields","When the object requires multi-step construction","When you want to create different configurations of the same object type","HTTP request builders, query builders, notification payloads"],realWorldExamples:[{platform:"iOS",example:"URLComponents, NSAttributedString, UIAlertController + addAction calls"},{platform:"Android",example:"AlertDialog.Builder, Notification.Builder, OkHttpClient.Builder"},{platform:"Web",example:"URLSearchParams, axios config, Knex/TypeORM query builders"}],codeExamples:[{language:"swift",code:`struct PushPayload {
    let title: String
    let body: String
    let badge: Int
    let sound: String
    let category: String?
}

final class PushPayloadBuilder {
    private var title = ""
    private var body  = ""
    private var badge = 0
    private var sound = "default"
    private var category: String?

    func title(_ v: String)    -> Self { title    = v; return self }
    func body(_ v: String)     -> Self { body     = v; return self }
    func badge(_ v: Int)       -> Self { badge    = v; return self }
    func sound(_ v: String)    -> Self { sound    = v; return self }
    func category(_ v: String) -> Self { category = v; return self }

    func build() -> PushPayload {
        PushPayload(title: title, body: body, badge: badge,
                    sound: sound, category: category)
    }
}

let payload = PushPayloadBuilder()
    .title("New Message")
    .body("You have 3 unread messages")
    .badge(3)
    .category("MESSAGE")
    .build()`},{language:"kotlin",code:`data class PushPayload(
    val title: String,
    val body: String,
    val badge: Int = 0,
    val sound: String = "default",
    val category: String? = null
)

class PushPayloadBuilder {
    private var title    = ""
    private var body     = ""
    private var badge    = 0
    private var sound    = "default"
    private var category: String? = null

    fun title(v: String)    = apply { title    = v }
    fun body(v: String)     = apply { body     = v }
    fun badge(v: Int)       = apply { badge    = v }
    fun sound(v: String)    = apply { sound    = v }
    fun category(v: String) = apply { category = v }

    fun build() = PushPayload(title, body, badge, sound, category)
}

val payload = PushPayloadBuilder()
    .title("New Message")
    .body("You have 3 unread messages")
    .badge(3)
    .category("MESSAGE")
    .build()`},{language:"typescript",code:`interface PushPayload {
    title: string;
    body: string;
    badge: number;
    sound: string;
    category?: string;
}

class PushPayloadBuilder {
    private config: Partial<PushPayload> = { badge: 0, sound: "default" };

    title(v: string): this    { this.config.title    = v; return this; }
    body(v: string): this     { this.config.body     = v; return this; }
    badge(v: number): this    { this.config.badge    = v; return this; }
    sound(v: string): this    { this.config.sound    = v; return this; }
    category(v: string): this { this.config.category = v; return this; }

    build(): PushPayload {
        if (!this.config.title || !this.config.body)
            throw new Error("title and body are required");
        return this.config as PushPayload;
    }
}

const payload = new PushPayloadBuilder()
    .title("New Message")
    .body("You have 3 unread messages")
    .badge(3)
    .category("MESSAGE")
    .build();`},{language:"python",code:`from dataclasses import dataclass
from typing import Optional

@dataclass
class PushPayload:
    title: str
    body: str
    badge: int = 0
    sound: str = "default"
    category: Optional[str] = None

class PushPayloadBuilder:
    def __init__(self):
        self._title    = ""
        self._body     = ""
        self._badge    = 0
        self._sound    = "default"
        self._category = None

    def title(self, v: str) -> "PushPayloadBuilder":
        self._title = v; return self

    def body(self, v: str) -> "PushPayloadBuilder":
        self._body = v; return self

    def badge(self, v: int) -> "PushPayloadBuilder":
        self._badge = v; return self

    def category(self, v: str) -> "PushPayloadBuilder":
        self._category = v; return self

    def build(self) -> PushPayload:
        return PushPayload(self._title, self._body,
                           self._badge, self._sound, self._category)

payload = (PushPayloadBuilder()
    .title("New Message")
    .body("You have 3 unread messages")
    .badge(3)
    .category("MESSAGE")
    .build())`},{language:"java",code:`class PushPayload {
    final String title, body, sound, category;
    final int badge;

    private PushPayload(Builder b) {
        this.title = b.title; this.body = b.body;
        this.badge = b.badge; this.sound = b.sound; this.category = b.category;
    }

    static class Builder {
        private String title = "", body = "", sound = "default", category;
        private int badge = 0;

        Builder title(String v)    { this.title = v; return this; }
        Builder body(String v)     { this.body = v; return this; }
        Builder badge(int v)       { this.badge = v; return this; }
        Builder sound(String v)    { this.sound = v; return this; }
        Builder category(String v) { this.category = v; return this; }

        PushPayload build() {
            if (title.isEmpty() || body.isEmpty())
                throw new IllegalStateException("title and body are required");
            return new PushPayload(this);
        }
    }
}

PushPayload payload = new PushPayload.Builder()
    .title("New Message")
    .body("You have 3 unread messages")
    .badge(3)
    .category("MESSAGE")
    .build();`}]},{slug:"prototype",title:"Prototype",emoji:"🧬",category:"Creational",intent:"Creates new objects by cloning an existing instance rather than constructing from scratch.",problem:"Creating a new object is expensive or complex. You need a copy that starts as an exact replica of an existing one, with only a few differences.",keyPoints:["Cloning is often faster than constructing from scratch","Deep copy duplicates nested objects; shallow copy shares them — know the difference","Clone preserves the internal state that may be hard to reconstruct externally","The client does not need to know the concrete class of the object",'Useful for creating "template" objects with preset defaults'],whenToUse:["Object construction is costly and a similar object already exists","Config or template objects shared as a starting point with minor variations","When you need to copy objects without depending on their concrete classes","Undo/redo — snapshot the state by cloning before modification"],realWorldExamples:[{platform:"iOS",example:"NSCopying / NSMutableCopying, UIImage copy, deep copy via NSKeyedArchiver"},{platform:"Android",example:"Kotlin data class .copy(), Parcelable, Bundle.clone()"},{platform:"Web",example:"structuredClone(), spread { ...obj }, Object.assign({}, obj)"}],codeExamples:[{language:"swift",code:`final class Theme: NSCopying {
    var primaryColor: String
    var font: String
    var isDark: Bool

    init(color: String, font: String, dark: Bool) {
        primaryColor = color; self.font = font; isDark = dark
    }

    func copy(with zone: NSZone? = nil) -> Any {
        Theme(color: primaryColor, font: font, dark: isDark)
    }
}

let light = Theme(color: "#FF4D1C", font: "SF Pro", dark: false)
let dark   = light.copy() as! Theme
dark.isDark       = true
dark.primaryColor = "#FF6B47"

print(light.isDark)        // false — original unchanged
print(dark.isDark)         // true`},{language:"kotlin",code:`// Kotlin data classes get copy() for free
data class Theme(
    val primaryColor: String,
    val font: String,
    val isDark: Boolean
)

val light = Theme("#FF4D1C", "Roboto", isDark = false)

// copy() creates a shallow clone with optional overrides
val dark = light.copy(isDark = true, primaryColor = "#FF6B47")

println(light.isDark)        // false — original unchanged
println(dark.isDark)         // true
println(light === dark)      // false — different objects`},{language:"typescript",code:`interface Theme {
    primaryColor: string;
    font: string;
    isDark: boolean;
}

class ThemePrototype implements Theme {
    constructor(
        public primaryColor: string,
        public font: string,
        public isDark: boolean
    ) {}

    clone(): ThemePrototype {
        return new ThemePrototype(this.primaryColor, this.font, this.isDark);
    }
}

const light = new ThemePrototype("#FF4D1C", "Inter", false);
const dark   = light.clone();
dark.isDark       = true;
dark.primaryColor = "#FF6B47";

console.log(light.isDark);   // false — original unchanged
console.log(dark.isDark);    // true`},{language:"python",code:`import copy
from dataclasses import dataclass

@dataclass
class Theme:
    primary_color: str
    font: str
    is_dark: bool

    def clone(self) -> "Theme":
        return copy.deepcopy(self)

light = Theme("#FF4D1C", "Inter", is_dark=False)
dark  = light.clone()
dark.is_dark       = True
dark.primary_color = "#FF6B47"

print(light.is_dark)    # False — original unchanged
print(dark.is_dark)     # True
print(light is dark)    # False — different objects`},{language:"java",code:`class Theme implements Cloneable {
    String primaryColor;
    String font;
    boolean isDark;

    Theme(String color, String font, boolean dark) {
        this.primaryColor = color; this.font = font; this.isDark = dark;
    }

    @Override
    public Theme clone() {
        try {
            return (Theme) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new AssertionError(e);
        }
    }
}

Theme light = new Theme("#FF4D1C", "Roboto", false);
Theme dark  = light.clone();
dark.isDark       = true;
dark.primaryColor = "#FF6B47";

System.out.println(light.isDark);   // false — original unchanged
System.out.println(dark.isDark);    // true
System.out.println(light == dark);  // false — different objects`}]},{slug:"adapter",title:"Adapter",emoji:"🔌",category:"Structural",intent:"Wraps an incompatible interface so it can work with existing code without modification.",problem:"You want to use a third-party library or legacy class, but its interface doesn't match what your code expects. You can't (or don't want to) modify either side.",keyPoints:["Bridges two incompatible interfaces without changing their source code","Object adapter wraps the instance (composition); class adapter uses inheritance","The client only ever sees the target interface — not the adapted class","Common when integrating third-party SDKs or legacy code","Can adapt multiple adaptees if needed (multi-adapter)"],whenToUse:["Using a third-party library with a different interface than what your code expects","Reusing legacy code that cannot be modified","Multiple classes with incompatible interfaces need to collaborate","Providing a stable interface while underlying implementations change"],realWorldExamples:[{platform:"iOS",example:"UITableViewDataSource & UICollectionViewDataSource adapting model arrays to views"},{platform:"Android",example:"RecyclerView.Adapter adapting List<T> to RecyclerView cells"},{platform:"Web",example:"Axios adapters (browser/node), ORM adapters for different databases"}],codeExamples:[{language:"swift",code:`// Legacy payment SDK (cannot modify)
class LegacyPaymentSDK {
    func makePayment(amount: Double, cardNumber: String) -> Bool {
        print("Legacy: charging $\\(amount) to \\(cardNumber)")
        return true
    }
}

// Modern interface our app depends on
protocol PaymentProcessor {
    func process(amount: Double, method: String) -> Bool
}

// Adapter: wraps legacy to match our interface
class PaymentAdapter: PaymentProcessor {
    private let sdk = LegacyPaymentSDK()

    func process(amount: Double, method: String) -> Bool {
        sdk.makePayment(amount: amount, cardNumber: method)
    }
}

// App code only knows about PaymentProcessor
let processor: PaymentProcessor = PaymentAdapter()
processor.process(amount: 99.99, method: "4111-1111-1111-1111")`},{language:"kotlin",code:`// Legacy SDK
class LegacyPaymentSDK {
    fun makePayment(amount: Double, cardNumber: String): Boolean {
        println("Legacy: charging $$amount to $cardNumber")
        return true
    }
}

// Modern interface
interface PaymentProcessor {
    fun process(amount: Double, method: String): Boolean
}

// Adapter
class PaymentAdapter : PaymentProcessor {
    private val sdk = LegacyPaymentSDK()
    override fun process(amount: Double, method: String) =
        sdk.makePayment(amount, method)
}

// Usage
val processor: PaymentProcessor = PaymentAdapter()
processor.process(99.99, "4111-1111-1111-1111")`},{language:"typescript",code:`// Legacy logger (cannot modify)
class LegacyLogger {
    log(severity: number, message: string): void {
        console.log(\`[\${severity}] \${message}\`);
    }
}

// Modern interface our app expects
interface AppLogger {
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
}

// Adapter
class LoggerAdapter implements AppLogger {
    constructor(private legacy: LegacyLogger) {}

    info(msg: string): void  { this.legacy.log(1, msg); }
    warn(msg: string): void  { this.legacy.log(2, msg); }
    error(msg: string): void { this.legacy.log(3, msg); }
}

const logger: AppLogger = new LoggerAdapter(new LegacyLogger());
logger.info("App started");   // [1] App started
logger.error("Crash!");       // [3] Crash!`},{language:"python",code:`# Legacy SDK
class LegacyPaymentSDK:
    def make_payment(self, amount: float, card_number: str) -> bool:
        print(f"Legacy: charging \${amount} to {card_number}")
        return True

# Modern interface
class PaymentProcessor:
    def process(self, amount: float, method: str) -> bool:
        raise NotImplementedError

# Adapter
class PaymentAdapter(PaymentProcessor):
    def __init__(self):
        self._sdk = LegacyPaymentSDK()

    def process(self, amount: float, method: str) -> bool:
        return self._sdk.make_payment(amount, method)

processor = PaymentAdapter()
processor.process(99.99, "4111-1111-1111-1111")`},{language:"java",code:`// Legacy SDK (cannot modify)
class LegacyPaymentSDK {
    boolean makePayment(double amount, String cardNumber) {
        System.out.println("Legacy: charging $" + amount + " to " + cardNumber);
        return true;
    }
}

// Modern interface our app depends on
interface PaymentProcessor {
    boolean process(double amount, String method);
}

// Adapter
class PaymentAdapter implements PaymentProcessor {
    private final LegacyPaymentSDK sdk = new LegacyPaymentSDK();

    public boolean process(double amount, String method) {
        return sdk.makePayment(amount, method);
    }
}

PaymentProcessor processor = new PaymentAdapter();
processor.process(99.99, "4111-1111-1111-1111");`}]},{slug:"decorator",title:"Decorator",emoji:"🎀",category:"Structural",intent:"Wraps an object to add new behavior dynamically, without subclassing.",problem:"You need to add responsibilities to individual objects, not the whole class. Subclassing leads to a combinatorial explosion when features are mixed (e.g. bold + italic + underline text).",keyPoints:["Each decorator wraps the component and delegates the core call to it","Decorators can be stacked in any order — highly composable","Follows Open/Closed Principle: extend behavior without modifying existing code","More flexible than inheritance — applied at runtime per object, not per class","Watch for deep nesting — too many layers can be hard to debug"],whenToUse:["Adding behavior to individual objects at runtime without affecting others","When subclassing would produce an explosion of classes for every combination","When extending with inheritance isn't possible (sealed/final classes)","Logging, validation, caching, and compression wrappers"],realWorldExamples:[{platform:"iOS",example:"Combine operators (.map, .filter, .debounce chain), SwiftUI view modifiers"},{platform:"Android",example:"Compose Modifier chaining, Kotlin extension functions, OkHttp interceptors"},{platform:"Web",example:"Express middleware, React Higher-Order Components, Redux enhancers"}],codeExamples:[{language:"swift",code:`protocol DataSource {
    func fetchData() -> String
}

class RemoteDataSource: DataSource {
    func fetchData() -> String { "raw data" }
}

class CachingDecorator: DataSource {
    private let wrapped: DataSource
    private var cache: String?
    init(_ ds: DataSource) { wrapped = ds }

    func fetchData() -> String {
        if let cached = cache { print("Cache hit"); return cached }
        let data = wrapped.fetchData()
        cache = data; return data
    }
}

class LoggingDecorator: DataSource {
    private let wrapped: DataSource
    init(_ ds: DataSource) { wrapped = ds }

    func fetchData() -> String {
        print("Fetching data...")
        let data = wrapped.fetchData()
        print("Got: \\(data)")
        return data
    }
}

// Stack decorators — order matters
let source: DataSource = LoggingDecorator(CachingDecorator(RemoteDataSource()))
_ = source.fetchData()  // "Fetching..." → cache miss → "Got: raw data"
_ = source.fetchData()  // "Fetching..." → Cache hit → "Got: raw data"`},{language:"kotlin",code:`interface DataSource {
    fun fetchData(): String
}

class RemoteDataSource : DataSource {
    override fun fetchData() = "raw data"
}

class CachingDecorator(private val wrapped: DataSource) : DataSource {
    private var cache: String? = null
    override fun fetchData(): String {
        return cache ?: run {
            println("Cache miss")
            wrapped.fetchData().also { cache = it }
        }
    }
}

class LoggingDecorator(private val wrapped: DataSource) : DataSource {
    override fun fetchData(): String {
        println("Fetching data...")
        return wrapped.fetchData().also { println("Got: $it") }
    }
}

val source: DataSource = LoggingDecorator(CachingDecorator(RemoteDataSource()))
source.fetchData()  // miss → logs
source.fetchData()  // cache hit → logs`},{language:"typescript",code:`interface DataSource {
    fetchData(): string;
}

class RemoteDataSource implements DataSource {
    fetchData(): string { return "raw data"; }
}

class CachingDecorator implements DataSource {
    private cache: string | null = null;
    constructor(private wrapped: DataSource) {}

    fetchData(): string {
        if (this.cache) { console.log("Cache hit"); return this.cache; }
        this.cache = this.wrapped.fetchData();
        return this.cache;
    }
}

class LoggingDecorator implements DataSource {
    constructor(private wrapped: DataSource) {}

    fetchData(): string {
        console.log("Fetching...");
        const data = this.wrapped.fetchData();
        console.log(\`Got: \${data}\`);
        return data;
    }
}

const source: DataSource = new LoggingDecorator(new CachingDecorator(new RemoteDataSource()));
source.fetchData(); // miss
source.fetchData(); // cache hit`},{language:"python",code:`from abc import ABC, abstractmethod

class DataSource(ABC):
    @abstractmethod
    def fetch_data(self) -> str: pass

class RemoteDataSource(DataSource):
    def fetch_data(self) -> str: return "raw data"

class CachingDecorator(DataSource):
    def __init__(self, wrapped: DataSource):
        self._wrapped = wrapped
        self._cache: str | None = None

    def fetch_data(self) -> str:
        if self._cache is not None:
            print("Cache hit"); return self._cache
        self._cache = self._wrapped.fetch_data()
        return self._cache

class LoggingDecorator(DataSource):
    def __init__(self, wrapped: DataSource):
        self._wrapped = wrapped

    def fetch_data(self) -> str:
        print("Fetching...")
        data = self._wrapped.fetch_data()
        print(f"Got: {data}"); return data

source = LoggingDecorator(CachingDecorator(RemoteDataSource()))
source.fetch_data()  # miss
source.fetch_data()  # cache hit`},{language:"java",code:`interface DataSource {
    String fetchData();
}

class RemoteDataSource implements DataSource {
    public String fetchData() { return "raw data"; }
}

class CachingDecorator implements DataSource {
    private final DataSource wrapped;
    private String cache;
    CachingDecorator(DataSource ds) { this.wrapped = ds; }

    public String fetchData() {
        if (cache != null) { System.out.println("Cache hit"); return cache; }
        cache = wrapped.fetchData();
        return cache;
    }
}

class LoggingDecorator implements DataSource {
    private final DataSource wrapped;
    LoggingDecorator(DataSource ds) { this.wrapped = ds; }

    public String fetchData() {
        System.out.println("Fetching...");
        String data = wrapped.fetchData();
        System.out.println("Got: " + data);
        return data;
    }
}

DataSource source = new LoggingDecorator(new CachingDecorator(new RemoteDataSource()));
source.fetchData();  // miss
source.fetchData();  // cache hit`}]},{slug:"facade",title:"Facade",emoji:"🏛️",category:"Structural",intent:"Provides a simplified interface to a complex subsystem, hiding its internals.",problem:"A complex library or set of services has many classes, configurations, and entry points. Client code becomes tangled managing all of them directly.",keyPoints:["Reduces coupling between client and complex subsystem","Doesn't seal the subsystem — advanced users can bypass the facade when needed","Single entry point makes the subsystem easier to use correctly","Simplifies testing — you can mock the facade instead of every subsystem class","Common when wrapping third-party SDKs to limit exposure to your app"],whenToUse:["Simplifying a complex library or set of services behind one clean interface","Layering subsystems to reduce dependencies between them","Providing sensible defaults for the common case","Wrapping a third-party SDK so your app is not tightly coupled to it"],realWorldExamples:[{platform:"iOS",example:"Alamofire (facade over URLSession stack), AVPlayer wrapper classes"},{platform:"Android",example:"Glide/Picasso (facade over Bitmap/network ops), Retrofit"},{platform:"Web",example:"jQuery (facade over DOM APIs), axios (facade over XMLHttpRequest/fetch)"}],codeExamples:[{language:"swift",code:`// Complex subsystems
class AuthService {
    func login(user: String, pass: String) -> String { "token_abc" }
}
class ProfileService {
    func fetch(token: String) -> [String: String] { ["name": "Agus"] }
}
class CacheService {
    func store(_ key: String, _ value: Any) { }
}

// Facade: one entry point for the whole auth + profile flow
class AppFacade {
    private let auth    = AuthService()
    private let profile = ProfileService()
    private let cache   = CacheService()

    func signIn(username: String, password: String) -> [String: String] {
        let token   = auth.login(user: username, pass: password)
        let data    = profile.fetch(token: token)
        cache.store("profile", data)
        return data
    }
}

// Client only deals with one object
let app = AppFacade()
print(app.signIn(username: "agus", password: "secret"))
// ["name": "Agus"]`},{language:"kotlin",code:`class AuthService {
    fun login(user: String, pass: String) = "token_abc"
}
class ProfileService {
    fun fetch(token: String) = mapOf("name" to "Agus")
}
class CacheService {
    fun store(key: String, value: Any) {}
}

class AppFacade {
    private val auth    = AuthService()
    private val profile = ProfileService()
    private val cache   = CacheService()

    fun signIn(username: String, password: String): Map<String, String> {
        val token = auth.login(username, password)
        val data  = profile.fetch(token)
        cache.store("profile", data)
        return data
    }
}

val app = AppFacade()
println(app.signIn("agus", "secret"))  // {name=Agus}`},{language:"typescript",code:`class AuthService {
    login(user: string, pass: string): string { return "token_abc"; }
}
class ProfileService {
    fetch(token: string): Record<string, string> { return { name: "Agus" }; }
}
class CacheService {
    store(key: string, value: unknown): void {}
}

class AppFacade {
    private auth    = new AuthService();
    private profile = new ProfileService();
    private cache   = new CacheService();

    signIn(username: string, password: string): Record<string, string> {
        const token = this.auth.login(username, password);
        const data  = this.profile.fetch(token);
        this.cache.store("profile", data);
        return data;
    }
}

const app = new AppFacade();
console.log(app.signIn("agus", "secret"));  // { name: "Agus" }`},{language:"python",code:`class AuthService:
    def login(self, user: str, password: str) -> str:
        return "token_abc"

class ProfileService:
    def fetch(self, token: str) -> dict:
        return {"name": "Agus"}

class CacheService:
    def store(self, key: str, value) -> None:
        pass

class AppFacade:
    def __init__(self):
        self._auth    = AuthService()
        self._profile = ProfileService()
        self._cache   = CacheService()

    def sign_in(self, username: str, password: str) -> dict:
        token = self._auth.login(username, password)
        data  = self._profile.fetch(token)
        self._cache.store("profile", data)
        return data

app = AppFacade()
print(app.sign_in("agus", "secret"))  # {"name": "Agus"}`},{language:"java",code:`import java.util.*;

class AuthService {
    String login(String user, String pass) { return "token_abc"; }
}
class ProfileService {
    Map<String, String> fetch(String token) { return Map.of("name", "Agus"); }
}
class CacheService {
    void store(String key, Object value) {}
}

class AppFacade {
    private final AuthService auth = new AuthService();
    private final ProfileService profile = new ProfileService();
    private final CacheService cache = new CacheService();

    Map<String, String> signIn(String username, String password) {
        String token = auth.login(username, password);
        Map<String, String> data = profile.fetch(token);
        cache.store("profile", data);
        return data;
    }
}

AppFacade app = new AppFacade();
System.out.println(app.signIn("agus", "secret"));  // {name=Agus}`}]},{slug:"proxy",title:"Proxy",emoji:"🪞",category:"Structural",intent:"Provides a placeholder that controls access to another object — adding lazy loading, caching, or access checks.",problem:"A heavyweight object (network call, database, large file) should not be created or accessed until absolutely needed. You want to add access control or caching without touching the original class.",keyPoints:["Client talks to the proxy through the same interface as the real object","Virtual proxy: defers expensive creation until first use (lazy initialization)","Caching proxy: remembers results and returns cached copies","Protection proxy: checks permissions before delegating","Remote proxy: represents an object in a different address space"],whenToUse:["Lazy initialization of a resource-heavy object","Caching to avoid repeated expensive operations","Access control — verify permissions before allowing an operation","Logging or monitoring access to a sensitive object"],realWorldExamples:[{platform:"iOS",example:"lazy var properties, SDWebImage lazy image loading, CoreData faulting"},{platform:"Android",example:"by lazy delegate, Glide placeholder images, ViewModel lazy init"},{platform:"Web",example:"ES6 Proxy, service workers as network proxies, memoization helpers"}],codeExamples:[{language:"swift",code:`protocol ImageLoader {
    func load(url: String) -> String
}

class RealImageLoader: ImageLoader {
    func load(url: String) -> String {
        print("Network: loading \\(url)")
        return "ImageData(\\(url))"
    }
}

// Caching proxy
class ImageLoaderProxy: ImageLoader {
    private let real  = RealImageLoader()
    private var cache = [String: String]()

    func load(url: String) -> String {
        if let cached = cache[url] { print("Cache hit"); return cached }
        let data = real.load(url: url)
        cache[url] = data
        return data
    }
}

let loader: ImageLoader = ImageLoaderProxy()
loader.load(url: "https://example.com/photo.jpg")  // Network load
loader.load(url: "https://example.com/photo.jpg")  // Cache hit`},{language:"kotlin",code:`interface ImageLoader {
    fun load(url: String): String
}

class RealImageLoader : ImageLoader {
    override fun load(url: String): String {
        println("Network: loading $url")
        return "ImageData($url)"
    }
}

class ImageLoaderProxy : ImageLoader {
    private val real  = RealImageLoader()
    private val cache = mutableMapOf<String, String>()

    override fun load(url: String): String =
        cache.getOrPut(url) {
            println("Cache miss"); real.load(url)
        }.also { println("Returning cached") }
}

val loader: ImageLoader = ImageLoaderProxy()
loader.load("https://example.com/photo.jpg")  // network
loader.load("https://example.com/photo.jpg")  // cached`},{language:"typescript",code:`interface ImageLoader {
    load(url: string): string;
}

class RealImageLoader implements ImageLoader {
    load(url: string): string {
        console.log(\`Network: loading \${url}\`);
        return \`ImageData(\${url})\`;
    }
}

class ImageLoaderProxy implements ImageLoader {
    private real  = new RealImageLoader();
    private cache = new Map<string, string>();

    load(url: string): string {
        if (this.cache.has(url)) {
            console.log("Cache hit");
            return this.cache.get(url)!;
        }
        const data = this.real.load(url);
        this.cache.set(url, data);
        return data;
    }
}

const loader: ImageLoader = new ImageLoaderProxy();
loader.load("https://example.com/photo.jpg");  // network
loader.load("https://example.com/photo.jpg");  // cached`},{language:"python",code:`from abc import ABC, abstractmethod

class ImageLoader(ABC):
    @abstractmethod
    def load(self, url: str) -> str: pass

class RealImageLoader(ImageLoader):
    def load(self, url: str) -> str:
        print(f"Network: loading {url}")
        return f"ImageData({url})"

class ImageLoaderProxy(ImageLoader):
    def __init__(self):
        self._real  = RealImageLoader()
        self._cache: dict[str, str] = {}

    def load(self, url: str) -> str:
        if url in self._cache:
            print("Cache hit"); return self._cache[url]
        data = self._real.load(url)
        self._cache[url] = data
        return data

loader = ImageLoaderProxy()
loader.load("https://example.com/photo.jpg")  # network
loader.load("https://example.com/photo.jpg")  # cached`},{language:"java",code:`import java.util.*;

interface ImageLoader {
    String load(String url);
}

class RealImageLoader implements ImageLoader {
    public String load(String url) {
        System.out.println("Network: loading " + url);
        return "ImageData(" + url + ")";
    }
}

class ImageLoaderProxy implements ImageLoader {
    private final RealImageLoader real = new RealImageLoader();
    private final Map<String, String> cache = new HashMap<>();

    public String load(String url) {
        if (cache.containsKey(url)) { System.out.println("Cache hit"); return cache.get(url); }
        String data = real.load(url);
        cache.put(url, data);
        return data;
    }
}

ImageLoader loader = new ImageLoaderProxy();
loader.load("https://example.com/photo.jpg");  // network
loader.load("https://example.com/photo.jpg");  // cached`}]},{slug:"composite",title:"Composite",emoji:"🌳",category:"Structural",intent:"Composes objects into tree structures and lets clients treat individual objects and compositions uniformly.",problem:"You have a tree hierarchy (UI components, file system, org chart) where operations should work the same way on both leaf nodes and containers, without special-casing in client code.",keyPoints:["Leaf and Composite share the same interface — clients need no instanceof checks","Recursive structure: containers can hold both leaves and other containers","Simplifies client code that works with tree structures","Easy to add new kinds of components without changing client code","May be overly general when you need restrictions on what can compose what"],whenToUse:["UI component trees, file system trees, org charts, menu hierarchies","When client code should treat individual items and groups identically","Any recursive part-whole hierarchy","Rendering nested components uniformly"],realWorldExamples:[{platform:"iOS",example:"UIView hierarchy (every UIView can contain child views), SwiftUI View tree"},{platform:"Android",example:"ViewGroup containing Views and other ViewGroups, Jetpack Compose UI tree"},{platform:"Web",example:"DOM tree, React component tree, virtual DOM diffing"}],codeExamples:[{language:"swift",code:`protocol UIComponent {
    var name: String { get }
    func render(indent: String)
}

class UILeaf: UIComponent {
    let name: String
    init(_ name: String) { self.name = name }
    func render(indent: String = "") { print("\\(indent)[\\(name)]") }
}

class UIContainer: UIComponent {
    let name: String
    private var children = [UIComponent]()
    init(_ name: String) { self.name = name }

    func add(_ child: UIComponent) { children.append(child) }

    func render(indent: String = "") {
        print("\\(indent)<\\(name)>")
        children.forEach { $0.render(indent: indent + "  ") }
    }
}

let screen = UIContainer("Screen")
let header = UIContainer("Header")
header.add(UILeaf("Logo")); header.add(UILeaf("NavTitle"))
screen.add(header)
screen.add(UILeaf("HeroImage"))
screen.add(UILeaf("CTAButton"))
screen.render()
// <Screen>
//   <Header>
//     [Logo]
//     [NavTitle]
//   [HeroImage]
//   [CTAButton]`},{language:"kotlin",code:`interface UIComponent {
    val name: String
    fun render(indent: String = "")
}

class UILeaf(override val name: String) : UIComponent {
    override fun render(indent: String) = println("$indent[$name]")
}

class UIContainer(override val name: String) : UIComponent {
    private val children = mutableListOf<UIComponent>()

    fun add(child: UIComponent) = children.add(child)

    override fun render(indent: String) {
        println("$indent<$name>")
        children.forEach { it.render("$indent  ") }
    }
}

val screen = UIContainer("Screen")
val header = UIContainer("Header")
header.add(UILeaf("Logo")); header.add(UILeaf("NavTitle"))
screen.add(header)
screen.add(UILeaf("HeroImage"))
screen.render()`},{language:"typescript",code:`interface UIComponent {
    name: string;
    render(indent?: string): void;
}

class UILeaf implements UIComponent {
    constructor(public name: string) {}
    render(indent = ""): void { console.log(\`\${indent}[\${this.name}]\`); }
}

class UIContainer implements UIComponent {
    private children: UIComponent[] = [];
    constructor(public name: string) {}

    add(child: UIComponent): void { this.children.push(child); }

    render(indent = ""): void {
        console.log(\`\${indent}<\${this.name}>\`);
        this.children.forEach(c => c.render(indent + "  "));
    }
}

const screen = new UIContainer("Screen");
const header = new UIContainer("Header");
header.add(new UILeaf("Logo")); header.add(new UILeaf("NavTitle"));
screen.add(header);
screen.add(new UILeaf("HeroImage"));
screen.render();`},{language:"python",code:`from abc import ABC, abstractmethod

class UIComponent(ABC):
    def __init__(self, name: str): self.name = name
    @abstractmethod
    def render(self, indent: str = "") -> None: pass

class UILeaf(UIComponent):
    def render(self, indent: str = "") -> None:
        print(f"{indent}[{self.name}]")

class UIContainer(UIComponent):
    def __init__(self, name: str):
        super().__init__(name)
        self._children: list[UIComponent] = []

    def add(self, child: UIComponent) -> None:
        self._children.append(child)

    def render(self, indent: str = "") -> None:
        print(f"{indent}<{self.name}>")
        for child in self._children:
            child.render(indent + "  ")

screen = UIContainer("Screen")
header = UIContainer("Header")
header.add(UILeaf("Logo")); header.add(UILeaf("NavTitle"))
screen.add(header); screen.add(UILeaf("HeroImage"))
screen.render()`},{language:"java",code:`import java.util.*;

interface UIComponent {
    String getName();
    void render(String indent);
}

class UILeaf implements UIComponent {
    private final String name;
    UILeaf(String name) { this.name = name; }
    public String getName() { return name; }
    public void render(String indent) { System.out.println(indent + "[" + name + "]"); }
}

class UIContainer implements UIComponent {
    private final String name;
    private final List<UIComponent> children = new ArrayList<>();
    UIContainer(String name) { this.name = name; }
    public String getName() { return name; }
    void add(UIComponent child) { children.add(child); }

    public void render(String indent) {
        System.out.println(indent + "<" + name + ">");
        for (UIComponent child : children) child.render(indent + "  ");
    }
}

UIContainer screen = new UIContainer("Screen");
UIContainer header = new UIContainer("Header");
header.add(new UILeaf("Logo")); header.add(new UILeaf("NavTitle"));
screen.add(header);
screen.add(new UILeaf("HeroImage"));
screen.render("");`}]},{slug:"observer",title:"Observer",emoji:"👁️",category:"Behavioral",intent:"Defines a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.",problem:"Multiple parts of an app need to react when some shared data changes, but you don't want the data source to be aware of or tightly coupled to its consumers.",keyPoints:["Subject (publisher) maintains a list of observers (subscribers)","Loose coupling: subject does not know concrete observer classes","Push model sends data with the notification; pull model lets observers fetch it","Risk of memory leaks if observers are not unsubscribed (use weak references)","Also known as Publish/Subscribe or Event Listener pattern"],whenToUse:["UI that must update when underlying data changes (data binding)","Event systems where multiple components react to the same event","Notification systems, analytics tracking, logging across multiple targets","Reactive programming foundations (Combine, RxSwift, LiveData)"],realWorldExamples:[{platform:"iOS",example:"NotificationCenter, Combine Publisher/Subscriber, KVO, @Published + @ObservedObject"},{platform:"Android",example:"LiveData.observe(), StateFlow.collect(), RxJava Observable, EventBus"},{platform:"Web",example:"EventEmitter (Node.js), RxJS Observable, Vue reactivity, React useEffect"}],codeExamples:[{language:"swift",code:`protocol StoreObserver: AnyObject {
    func storeDidUpdate<T>(_ newValue: T)
}

class Store<T> {
    private var observers = [WeakBox]()
    var value: T { didSet { notify(value) } }

    init(_ value: T) { self.value = value }

    func subscribe(_ observer: StoreObserver) {
        observers.append(WeakBox(observer))
    }

    private func notify(_ newValue: T) {
        observers.forEach { $0.value?.storeDidUpdate(newValue) }
    }

    private class WeakBox {
        weak var value: StoreObserver?
        init(_ v: StoreObserver) { value = v }
    }
}

class CounterLabel: StoreObserver {
    func storeDidUpdate<T>(_ newValue: T) {
        print("Label updated: \\(newValue)")
    }
}

let store = Store(0)
let label = CounterLabel()
store.subscribe(label)
store.value = 5   // "Label updated: 5"
store.value = 10  // "Label updated: 10"`},{language:"kotlin",code:`interface StoreObserver<T> {
    fun onUpdate(value: T)
}

class Store<T>(initialValue: T) {
    private val observers = mutableListOf<StoreObserver<T>>()

    var value: T = initialValue
        set(new) { field = new; observers.forEach { it.onUpdate(new) } }

    fun subscribe(observer: StoreObserver<T>) = observers.add(observer)
    fun unsubscribe(observer: StoreObserver<T>) = observers.remove(observer)
}

class CounterLabel : StoreObserver<Int> {
    override fun onUpdate(value: Int) = println("Label updated: $value")
}

val store = Store(0)
val label = CounterLabel()
store.subscribe(label)
store.value = 5   // "Label updated: 5"
store.value = 10  // "Label updated: 10"`},{language:"typescript",code:`type Observer<T> = (value: T) => void;

class Store<T> {
    private observers: Observer<T>[] = [];
    private _value: T;

    constructor(initial: T) { this._value = initial; }

    subscribe(observer: Observer<T>): () => void {
        this.observers.push(observer);
        return () => { this.observers = this.observers.filter(o => o !== observer); };
    }

    set value(newValue: T) {
        this._value = newValue;
        this.observers.forEach(o => o(newValue));
    }
    get value(): T { return this._value; }
}

const store = new Store<number>(0);
const unsub = store.subscribe(v => console.log(\`Updated: \${v}\`));

store.value = 5;   // "Updated: 5"
store.value = 10;  // "Updated: 10"
unsub();
store.value = 99;  // (silent — unsubscribed)`},{language:"python",code:`from typing import Callable, Generic, TypeVar

T = TypeVar("T")

class Store(Generic[T]):
    def __init__(self, initial: T):
        self._value = initial
        self._observers: list[Callable[[T], None]] = []

    def subscribe(self, observer: Callable[[T], None]) -> Callable:
        self._observers.append(observer)
        return lambda: self._observers.remove(observer)

    @property
    def value(self) -> T: return self._value

    @value.setter
    def value(self, new_value: T) -> None:
        self._value = new_value
        for obs in self._observers: obs(new_value)

store: Store[int] = Store(0)
unsub = store.subscribe(lambda v: print(f"Updated: {v}"))

store.value = 5   # Updated: 5
store.value = 10  # Updated: 10
unsub()
store.value = 99  # (silent — unsubscribed)`},{language:"java",code:`import java.util.*;
import java.util.function.Consumer;

class Store<T> {
    private T value;
    private final List<Consumer<T>> observers = new ArrayList<>();

    Store(T initial) { this.value = initial; }

    Runnable subscribe(Consumer<T> observer) {
        observers.add(observer);
        return () -> observers.remove(observer);
    }

    void setValue(T newValue) {
        this.value = newValue;
        for (Consumer<T> obs : observers) obs.accept(newValue);
    }

    T getValue() { return value; }
}

Store<Integer> store = new Store<>(0);
Runnable unsub = store.subscribe(v -> System.out.println("Updated: " + v));

store.setValue(5);   // "Updated: 5"
store.setValue(10);  // "Updated: 10"
unsub.run();
store.setValue(99);  // (silent — unsubscribed)`}]},{slug:"strategy",title:"Strategy",emoji:"♟️",category:"Behavioral",intent:"Defines a family of interchangeable algorithms and lets you swap them at runtime.",problem:"A class has multiple variants of an algorithm, selected with a big if/else or switch. Adding a new variant requires modifying the class itself.",keyPoints:["Encapsulates each algorithm behind a common interface","Algorithms can be swapped at runtime without changing the context class","Eliminates large conditional blocks for algorithm selection","Context delegates work to the strategy — it does not perform the algorithm itself","Closely related to dependency injection — inject the strategy from outside"],whenToUse:["Multiple related algorithms that differ only in their behavior","Swappable behaviors: sorting, compression, payment, validation","Replacing large if/else chains that select an algorithm","When you want to let users configure or extend behavior"],realWorldExamples:[{platform:"iOS",example:"JSONEncoder.dateEncodingStrategy, URLSessionConfiguration, UICollectionViewLayout"},{platform:"Android",example:"RecyclerView.LayoutManager (Linear/Grid/Staggered), Room TypeConverter"},{platform:"Web",example:"Passport.js strategies (local, OAuth), webpack's loader config, sorting comparators"}],codeExamples:[{language:"swift",code:`protocol ValidationStrategy {
    func validate(_ input: String) -> Bool
}

struct EmailValidator: ValidationStrategy {
    func validate(_ input: String) -> Bool {
        input.contains("@") && input.contains(".")
    }
}

struct PhoneValidator: ValidationStrategy {
    func validate(_ input: String) -> Bool {
        input.allSatisfy { $0.isNumber } && input.count >= 10
    }
}

struct MinLengthValidator: ValidationStrategy {
    let minLength: Int
    func validate(_ input: String) -> Bool { input.count >= minLength }
}

class InputField {
    var strategy: ValidationStrategy

    init(strategy: ValidationStrategy) { self.strategy = strategy }

    func isValid(_ input: String) -> Bool { strategy.validate(input) }
}

let emailField = InputField(strategy: EmailValidator())
print(emailField.isValid("agus@example.com"))  // true
print(emailField.isValid("not-an-email"))      // false

emailField.strategy = MinLengthValidator(minLength: 6)
print(emailField.isValid("hello"))             // false`},{language:"kotlin",code:`fun interface ValidationStrategy {
    fun validate(input: String): Boolean
}

val emailValidator    = ValidationStrategy { it.contains("@") && it.contains(".") }
val phoneValidator    = ValidationStrategy { it.all(Char::isDigit) && it.length >= 10 }
val minLength6        = ValidationStrategy { it.length >= 6 }

class InputField(var strategy: ValidationStrategy) {
    fun isValid(input: String) = strategy.validate(input)
}

val emailField = InputField(emailValidator)
println(emailField.isValid("agus@example.com"))  // true
println(emailField.isValid("not-an-email"))      // false

emailField.strategy = minLength6
println(emailField.isValid("hello"))             // false`},{language:"typescript",code:`type ValidationStrategy = (input: string) => boolean;

const emailValidator: ValidationStrategy = (s) =>
    s.includes("@") && s.includes(".");

const phoneValidator: ValidationStrategy = (s) =>
    /^d{10,}$/.test(s);

const minLength = (n: number): ValidationStrategy => (s) => s.length >= n;

class InputField {
    constructor(private strategy: ValidationStrategy) {}

    setStrategy(strategy: ValidationStrategy): void { this.strategy = strategy; }
    isValid(input: string): boolean { return this.strategy(input); }
}

const field = new InputField(emailValidator);
console.log(field.isValid("agus@example.com"));  // true
console.log(field.isValid("not-an-email"));      // false

field.setStrategy(minLength(6));
console.log(field.isValid("hello"));             // false`},{language:"python",code:`from typing import Callable

ValidationStrategy = Callable[[str], bool]

def email_validator(s: str) -> bool:
    return "@" in s and "." in s

def phone_validator(s: str) -> bool:
    return s.isdigit() and len(s) >= 10

def min_length(n: int) -> ValidationStrategy:
    return lambda s: len(s) >= n

class InputField:
    def __init__(self, strategy: ValidationStrategy):
        self._strategy = strategy

    def set_strategy(self, strategy: ValidationStrategy) -> None:
        self._strategy = strategy

    def is_valid(self, input_: str) -> bool:
        return self._strategy(input_)

field = InputField(email_validator)
print(field.is_valid("agus@example.com"))  # True
print(field.is_valid("not-an-email"))      # False

field.set_strategy(min_length(6))
print(field.is_valid("hello"))             # False`},{language:"java",code:`interface ValidationStrategy {
    boolean validate(String input);
}

class InputField {
    private ValidationStrategy strategy;
    InputField(ValidationStrategy strategy) { this.strategy = strategy; }

    void setStrategy(ValidationStrategy strategy) { this.strategy = strategy; }
    boolean isValid(String input) { return strategy.validate(input); }
}

ValidationStrategy emailValidator = s -> s.contains("@") && s.contains(".");
ValidationStrategy minLength6     = s -> s.length() >= 6;

InputField field = new InputField(emailValidator);
System.out.println(field.isValid("agus@example.com"));  // true
System.out.println(field.isValid("not-an-email"));      // false

field.setStrategy(minLength6);
System.out.println(field.isValid("hello"));             // false`}]},{slug:"command",title:"Command",emoji:"📜",category:"Behavioral",intent:"Encapsulates a request as an object, enabling undo/redo, queuing, and logging of operations.",problem:"You need to issue requests without knowing what operation is performed, who performs it, or when. You also want to support undo/redo.",keyPoints:["Request is wrapped as an object with execute() and undo() methods","Decouples the invoker (who sends the command) from the receiver (who handles it)","Commands can be queued, logged, or replayed","undo() reverses the effect of execute() — enables full history management","Macro commands compose multiple commands into one"],whenToUse:["Undo/redo functionality (text editors, drawing apps)","Transaction-based systems where rollback is needed","Queuing or scheduling actions for deferred execution","Logging and auditing all operations performed"],realWorldExamples:[{platform:"iOS",example:"NSUndoManager, UIAction, SwiftUI .onTapGesture closures"},{platform:"Android",example:"Room database transactions, WorkManager Tasks, MenuItem.setOnMenuItemClickListener"},{platform:"Web",example:"Redux actions & reducers, CQRS command objects, job queues (Bull, Celery)"}],codeExamples:[{language:"swift",code:`protocol Command {
    func execute()
    func undo()
}

class TextEditor {
    private(set) var content = ""
    private var history = [Command]()

    func run(_ cmd: Command) { cmd.execute(); history.append(cmd) }
    func undoLast() { history.popLast()?.undo() }

    func appendCommand(_ text: String) -> Command {
        AppendCommand(editor: self, text: text)
    }

    fileprivate func append(_ t: String)    { content += t }
    fileprivate func removeLast(_ n: Int)   { content = String(content.dropLast(n)) }
}

class AppendCommand: Command {
    private let editor: TextEditor
    private let text: String
    init(editor: TextEditor, text: String) { self.editor = editor; self.text = text }
    func execute() { editor.append(text) }
    func undo()    { editor.removeLast(text.count) }
}

let ed = TextEditor()
ed.run(ed.appendCommand("Hello"))
ed.run(ed.appendCommand(" World"))
print(ed.content)   // "Hello World"
ed.undoLast()
print(ed.content)   // "Hello"`},{language:"kotlin",code:`interface Command {
    fun execute()
    fun undo()
}

class TextEditor {
    private val sb      = StringBuilder()
    private val history = mutableListOf<Command>()

    fun run(cmd: Command) { cmd.execute(); history.add(cmd) }
    fun undoLast() = history.removeLastOrNull()?.undo()
    fun content()  = sb.toString()

    internal fun append(text: String)     { sb.append(text) }
    internal fun removeLast(n: Int)       { sb.delete(sb.length - n, sb.length) }
}

class AppendCommand(private val editor: TextEditor, private val text: String) : Command {
    override fun execute() = editor.append(text)
    override fun undo()    = editor.removeLast(text.length)
}

val ed = TextEditor()
ed.run(AppendCommand(ed, "Hello"))
ed.run(AppendCommand(ed, " World"))
println(ed.content())  // "Hello World"
ed.undoLast()
println(ed.content())  // "Hello"`},{language:"typescript",code:`interface Command {
    execute(): void;
    undo(): void;
}

class TextEditor {
    private _content = "";
    private history: Command[] = [];

    run(cmd: Command): void { cmd.execute(); this.history.push(cmd); }
    undoLast(): void { this.history.pop()?.undo(); }
    get content(): string { return this._content; }

    append(text: string): void    { this._content += text; }
    removeLast(n: number): void   { this._content = this._content.slice(0, -n); }
}

class AppendCommand implements Command {
    constructor(private editor: TextEditor, private text: string) {}
    execute(): void { this.editor.append(this.text); }
    undo(): void    { this.editor.removeLast(this.text.length); }
}

const ed = new TextEditor();
ed.run(new AppendCommand(ed, "Hello"));
ed.run(new AppendCommand(ed, " World"));
console.log(ed.content);  // "Hello World"
ed.undoLast();
console.log(ed.content);  // "Hello"`},{language:"python",code:`from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self) -> None: pass
    @abstractmethod
    def undo(self) -> None: pass

class TextEditor:
    def __init__(self):
        self._content = ""
        self._history: list[Command] = []

    def run(self, cmd: Command) -> None:
        cmd.execute(); self._history.append(cmd)

    def undo_last(self) -> None:
        if self._history: self._history.pop().undo()

    @property
    def content(self) -> str: return self._content

    def append(self, text: str) -> None: self._content += text
    def remove_last(self, n: int) -> None: self._content = self._content[:-n]

class AppendCommand(Command):
    def __init__(self, editor: TextEditor, text: str):
        self._editor = editor; self._text = text
    def execute(self) -> None: self._editor.append(self._text)
    def undo(self)    -> None: self._editor.remove_last(len(self._text))

ed = TextEditor()
ed.run(AppendCommand(ed, "Hello"))
ed.run(AppendCommand(ed, " World"))
print(ed.content)   # "Hello World"
ed.undo_last()
print(ed.content)   # "Hello"`},{language:"java",code:`import java.util.*;

interface Command {
    void execute();
    void undo();
}

class TextEditor {
    private final StringBuilder content = new StringBuilder();
    private final Deque<Command> history = new ArrayDeque<>();

    void run(Command cmd) { cmd.execute(); history.push(cmd); }
    void undoLast() { if (!history.isEmpty()) history.pop().undo(); }
    String getContent() { return content.toString(); }

    void append(String text) { content.append(text); }
    void removeLast(int n)    { content.delete(content.length() - n, content.length()); }
}

class AppendCommand implements Command {
    private final TextEditor editor;
    private final String text;
    AppendCommand(TextEditor editor, String text) { this.editor = editor; this.text = text; }
    public void execute() { editor.append(text); }
    public void undo()    { editor.removeLast(text.length()); }
}

TextEditor ed = new TextEditor();
ed.run(new AppendCommand(ed, "Hello"));
ed.run(new AppendCommand(ed, " World"));
System.out.println(ed.getContent());  // "Hello World"
ed.undoLast();
System.out.println(ed.getContent());  // "Hello"`}]},{slug:"state",title:"State",emoji:"🚦",category:"Behavioral",intent:"Allows an object to change its behavior when its internal state changes — appears to change class.",problem:"An object's behavior depends on its current state, leading to large if/else or switch statements scattered throughout methods that all check the current state.",keyPoints:["Each state is a separate class that encapsulates behavior for that state","State transitions happen by replacing the current state object","Eliminates complex conditional logic scattered across methods","New states can be added without modifying existing state classes (Open/Closed)","Context delegates all state-dependent behavior to the current state object"],whenToUse:["Object's behavior must change based on its state at runtime","Finite state machines: order lifecycle, connection states, player states","When state-specific code is duplicated across many conditional branches","When transitions between states need to be explicit and well-defined"],realWorldExamples:[{platform:"iOS",example:"UIViewController lifecycle (viewDidLoad → viewWillAppear → viewDidAppear), AVPlayer state"},{platform:"Android",example:"Fragment backstack, MediaPlayer states (Idle→Initialized→Prepared→Started), ViewModel state flows"},{platform:"Web",example:"Promise states (pending/fulfilled/rejected), XState FSM, React component lifecycle"}],codeExamples:[{language:"swift",code:`protocol OrderState {
    var label: String { get }
    func next(order: Order)
}

class Order {
    var state: OrderState = PendingState()
    func advance() { state.next(order: self) }
    func status()  { print("Order: \\(state.label)") }
}

class PendingState: OrderState {
    var label = "Pending"
    func next(order: Order) { order.state = ProcessingState() }
}
class ProcessingState: OrderState {
    var label = "Processing"
    func next(order: Order) { order.state = ShippedState() }
}
class ShippedState: OrderState {
    var label = "Shipped"
    func next(order: Order) { order.state = DeliveredState() }
}
class DeliveredState: OrderState {
    var label = "Delivered"
    func next(order: Order) { print("Already delivered") }
}

let order = Order()
order.status()   // "Order: Pending"
order.advance(); order.status()   // "Order: Processing"
order.advance(); order.status()   // "Order: Shipped"
order.advance(); order.status()   // "Order: Delivered"`},{language:"kotlin",code:`interface OrderState {
    val label: String
    fun next(order: Order)
}

class Order {
    var state: OrderState = PendingState()
    fun advance() = state.next(this)
    fun status()  = println("Order: \${state.label}")
}

class PendingState : OrderState {
    override val label = "Pending"
    override fun next(order: Order) { order.state = ProcessingState() }
}
class ProcessingState : OrderState {
    override val label = "Processing"
    override fun next(order: Order) { order.state = ShippedState() }
}
class ShippedState : OrderState {
    override val label = "Shipped"
    override fun next(order: Order) { order.state = DeliveredState() }
}
class DeliveredState : OrderState {
    override val label = "Delivered"
    override fun next(order: Order) = println("Already delivered")
}

val order = Order()
repeat(4) { order.status(); order.advance() }`},{language:"typescript",code:`interface OrderState {
    readonly label: string;
    next(order: Order): void;
}

class Order {
    state: OrderState = new PendingState();
    advance(): void { this.state.next(this); }
    status(): void  { console.log(\`Order: \${this.state.label}\`); }
}

class PendingState implements OrderState {
    readonly label = "Pending";
    next(o: Order) { o.state = new ProcessingState(); }
}
class ProcessingState implements OrderState {
    readonly label = "Processing";
    next(o: Order) { o.state = new ShippedState(); }
}
class ShippedState implements OrderState {
    readonly label = "Shipped";
    next(o: Order) { o.state = new DeliveredState(); }
}
class DeliveredState implements OrderState {
    readonly label = "Delivered";
    next(o: Order) { console.log("Already delivered"); }
}

const order = new Order();
for (let i = 0; i < 4; i++) { order.status(); order.advance(); }`},{language:"python",code:`from __future__ import annotations
from abc import ABC, abstractmethod

class OrderState(ABC):
    @property
    @abstractmethod
    def label(self) -> str: pass
    @abstractmethod
    def next(self, order: "Order") -> None: pass

class Order:
    def __init__(self): self.state: OrderState = PendingState()
    def advance(self) -> None: self.state.next(self)
    def status(self)  -> None: print(f"Order: {self.state.label}")

class PendingState(OrderState):
    @property
    def label(self) -> str: return "Pending"
    def next(self, o: Order) -> None: o.state = ProcessingState()

class ProcessingState(OrderState):
    @property
    def label(self) -> str: return "Processing"
    def next(self, o: Order) -> None: o.state = ShippedState()

class ShippedState(OrderState):
    @property
    def label(self) -> str: return "Shipped"
    def next(self, o: Order) -> None: o.state = DeliveredState()

class DeliveredState(OrderState):
    @property
    def label(self) -> str: return "Delivered"
    def next(self, o: Order) -> None: print("Already delivered")

order = Order()
for _ in range(4): order.status(); order.advance()`},{language:"java",code:`interface OrderState {
    String getLabel();
    void next(Order order);
}

class Order {
    OrderState state = new PendingState();
    void advance() { state.next(this); }
    void status()  { System.out.println("Order: " + state.getLabel()); }
}

class PendingState implements OrderState {
    public String getLabel() { return "Pending"; }
    public void next(Order order) { order.state = new ProcessingState(); }
}
class ProcessingState implements OrderState {
    public String getLabel() { return "Processing"; }
    public void next(Order order) { order.state = new ShippedState(); }
}
class ShippedState implements OrderState {
    public String getLabel() { return "Shipped"; }
    public void next(Order order) { order.state = new DeliveredState(); }
}
class DeliveredState implements OrderState {
    public String getLabel() { return "Delivered"; }
    public void next(Order order) { System.out.println("Already delivered"); }
}

Order order = new Order();
for (int i = 0; i < 4; i++) { order.status(); order.advance(); }`}]},{slug:"chain-of-responsibility",title:"Chain of Responsibility",emoji:"⛓️",category:"Behavioral",intent:"Passes a request along a chain of handlers; each handler decides whether to handle it or forward it.",problem:"Multiple objects may handle a request, but you don't know which one ahead of time. You want to avoid coupling the sender to a specific receiver.",keyPoints:["Each handler has a reference to the next handler in the chain","A handler either handles the request or passes it to the next","The sender does not need to know which handler will process the request","Handlers can be added, removed, or reordered at runtime","Request may go unhandled if no handler processes it — decide on a default"],whenToUse:["More than one handler can process a request (middleware pipelines)","Which handler to use should be determined at runtime","Permission checks, validation chains, event bubbling","Logging pipelines, request interceptors"],realWorldExamples:[{platform:"iOS",example:"UIResponder chain (touch events bubble up from subview to window), URLProtocol subclasses"},{platform:"Android",example:"OkHttp Interceptor chain, View.onTouchEvent propagation, Compose event handling"},{platform:"Web",example:"Express.js middleware (next()), Koa.js, DOM event bubbling, NestJS guards/interceptors"}],codeExamples:[{language:"swift",code:`protocol RequestHandler: AnyObject {
    var next: RequestHandler? { get set }
    func handle(request: Int) -> String?
}

class LowHandler: RequestHandler {
    var next: RequestHandler?
    func handle(request: Int) -> String? {
        guard request > 10 else { return "Low handled \\(request)" }
        return next?.handle(request: request)
    }
}

class MediumHandler: RequestHandler {
    var next: RequestHandler?
    func handle(request: Int) -> String? {
        guard request > 50 else { return "Medium handled \\(request)" }
        return next?.handle(request: request)
    }
}

class HighHandler: RequestHandler {
    var next: RequestHandler?
    func handle(request: Int) -> String? { "High handled \\(request)" }
}

let low = LowHandler(); let med = MediumHandler(); let high = HighHandler()
low.next = med; med.next = high

print(low.handle(request: 5)!)   // "Low handled 5"
print(low.handle(request: 30)!)  // "Medium handled 30"
print(low.handle(request: 99)!)  // "High handled 99"`},{language:"kotlin",code:`abstract class RequestHandler {
    var next: RequestHandler? = null
    abstract fun handle(request: Int): String?
}

class LowHandler : RequestHandler() {
    override fun handle(request: Int) =
        if (request <= 10) "Low handled $request" else next?.handle(request)
}

class MediumHandler : RequestHandler() {
    override fun handle(request: Int) =
        if (request <= 50) "Medium handled $request" else next?.handle(request)
}

class HighHandler : RequestHandler() {
    override fun handle(request: Int) = "High handled $request"
}

val low = LowHandler(); val med = MediumHandler()
low.next = med; med.next = HighHandler()

println(low.handle(5))   // "Low handled 5"
println(low.handle(30))  // "Medium handled 30"
println(low.handle(99))  // "High handled 99"`},{language:"typescript",code:`abstract class RequestHandler {
    protected next: RequestHandler | null = null;

    setNext(handler: RequestHandler): RequestHandler {
        this.next = handler; return handler;
    }

    abstract handle(request: number): string | null;
}

class LowHandler extends RequestHandler {
    handle(n: number): string | null {
        return n <= 10 ? \`Low handled \${n}\` : this.next?.handle(n) ?? null;
    }
}

class MediumHandler extends RequestHandler {
    handle(n: number): string | null {
        return n <= 50 ? \`Medium handled \${n}\` : this.next?.handle(n) ?? null;
    }
}

class HighHandler extends RequestHandler {
    handle(n: number): string | null { return \`High handled \${n}\`; }
}

const low = new LowHandler();
low.setNext(new MediumHandler()).setNext(new HighHandler());

console.log(low.handle(5));   // "Low handled 5"
console.log(low.handle(30));  // "Medium handled 30"
console.log(low.handle(99));  // "High handled 99"`},{language:"python",code:`from abc import ABC, abstractmethod

class RequestHandler(ABC):
    def __init__(self):
        self._next: "RequestHandler | None" = None

    def set_next(self, handler: "RequestHandler") -> "RequestHandler":
        self._next = handler; return handler

    @abstractmethod
    def handle(self, request: int) -> str | None: pass

class LowHandler(RequestHandler):
    def handle(self, n: int) -> str | None:
        if n <= 10: return f"Low handled {n}"
        return self._next.handle(n) if self._next else None

class MediumHandler(RequestHandler):
    def handle(self, n: int) -> str | None:
        if n <= 50: return f"Medium handled {n}"
        return self._next.handle(n) if self._next else None

class HighHandler(RequestHandler):
    def handle(self, n: int) -> str | None:
        return f"High handled {n}"

low = LowHandler()
low.set_next(MediumHandler()).set_next(HighHandler())

print(low.handle(5))   # "Low handled 5"
print(low.handle(30))  # "Medium handled 30"
print(low.handle(99))  # "High handled 99"`},{language:"java",code:`abstract class RequestHandler {
    protected RequestHandler next;

    RequestHandler setNext(RequestHandler handler) { this.next = handler; return handler; }

    abstract String handle(int request);
}

class LowHandler extends RequestHandler {
    String handle(int n) {
        return n <= 10 ? "Low handled " + n : (next != null ? next.handle(n) : null);
    }
}

class MediumHandler extends RequestHandler {
    String handle(int n) {
        return n <= 50 ? "Medium handled " + n : (next != null ? next.handle(n) : null);
    }
}

class HighHandler extends RequestHandler {
    String handle(int n) { return "High handled " + n; }
}

RequestHandler low = new LowHandler();
low.setNext(new MediumHandler()).setNext(new HighHandler());

System.out.println(low.handle(5));   // "Low handled 5"
System.out.println(low.handle(30));  // "Medium handled 30"
System.out.println(low.handle(99));  // "High handled 99"`}]},{slug:"template-method",title:"Template Method",emoji:"📋",category:"Behavioral",intent:"Defines the skeleton of an algorithm in a base class, deferring specific steps to subclasses.",problem:"Multiple classes implement similar algorithms with the same structure but different steps. Duplicated scaffolding code exists in every class.",keyPoints:["Base class defines the algorithm's skeleton — the overall sequence of steps","Subclasses override specific steps without changing the overall structure","final on the template method prevents subclasses from altering the sequence","Hook methods are optional overrides that provide extension points","Hollywood Principle: 'Don't call us, we'll call you' — the base class drives"],whenToUse:["Multiple classes share the same algorithm structure with only some steps differing","Framework code that calls user-defined steps at specific points","Eliminating code duplication across similar classes","Data processing pipelines: fetch → parse → format → store"],realWorldExamples:[{platform:"iOS",example:"UIViewController lifecycle (viewDidLoad, viewWillAppear, viewDidAppear), UIView draw(_:)"},{platform:"Android",example:"Fragment lifecycle (onCreate, onCreateView, onResume), Activity onCreate flow"},{platform:"Web",example:"React component lifecycle, Express route handler flow, Jest test lifecycle (beforeEach / afterEach)"}],codeExamples:[{language:"swift",code:`class ReportGenerator {
    // Template method — final so subclasses can't change the sequence
    final func generate() -> String {
        let data    = fetchData()
        let parsed  = parseData(data)
        let report  = formatReport(parsed)
        return report
    }

    func fetchData() -> String { "raw:server" }
    func parseData(_ raw: String) -> [String] { [raw] }
    func formatReport(_ items: [String]) -> String { items.joined(separator: "\\n") }
}

class JSONReport: ReportGenerator {
    override func parseData(_ raw: String) -> [String] { ["JSON:\\(raw)"] }
    override func formatReport(_ items: [String]) -> String {
        "{\\(items.joined(separator: ","))}"
    }
}

class CSVReport: ReportGenerator {
    override func formatReport(_ items: [String]) -> String {
        items.joined(separator: ",")
    }
}

print(JSONReport().generate())  // {JSON:raw:server}
print(CSVReport().generate())   // raw:server`},{language:"kotlin",code:`abstract class ReportGenerator {
    // Template method
    fun generate(): String {
        val data   = fetchData()
        val parsed = parseData(data)
        return formatReport(parsed)
    }

    open fun fetchData() = "raw:server"
    abstract fun parseData(raw: String): List<String>
    abstract fun formatReport(items: List<String>): String
}

class JSONReport : ReportGenerator() {
    override fun parseData(raw: String) = listOf("JSON:$raw")
    override fun formatReport(items: List<String>) = "{\${items.joinToString()}}"
}

class CSVReport : ReportGenerator() {
    override fun parseData(raw: String) = listOf(raw)
    override fun formatReport(items: List<String>) = items.joinToString(",")
}

println(JSONReport().generate())  // {JSON:raw:server}
println(CSVReport().generate())   // raw:server`},{language:"typescript",code:`abstract class ReportGenerator {
    // Template method
    generate(): string {
        const data   = this.fetchData();
        const parsed = this.parseData(data);
        return this.formatReport(parsed);
    }

    protected fetchData(): string { return "raw:server"; }
    protected abstract parseData(raw: string): string[];
    protected abstract formatReport(items: string[]): string;
}

class JSONReport extends ReportGenerator {
    protected parseData(raw: string): string[] { return [\`JSON:\${raw}\`]; }
    protected formatReport(items: string[]): string { return \`{\${items.join()}}\`; }
}

class CSVReport extends ReportGenerator {
    protected parseData(raw: string): string[] { return [raw]; }
    protected formatReport(items: string[]): string { return items.join(","); }
}

console.log(new JSONReport().generate()); // {JSON:raw:server}
console.log(new CSVReport().generate());  // raw:server`},{language:"python",code:`from abc import ABC, abstractmethod

class ReportGenerator(ABC):
    def generate(self) -> str:
        """Template method — defines the algorithm skeleton."""
        data   = self.fetch_data()
        parsed = self.parse_data(data)
        return self.format_report(parsed)

    def fetch_data(self) -> str:
        return "raw:server"

    @abstractmethod
    def parse_data(self, raw: str) -> list[str]: pass

    @abstractmethod
    def format_report(self, items: list[str]) -> str: pass

class JSONReport(ReportGenerator):
    def parse_data(self, raw: str) -> list[str]:
        return [f"JSON:{raw}"]
    def format_report(self, items: list[str]) -> str:
        return "{" + ",".join(items) + "}"

class CSVReport(ReportGenerator):
    def parse_data(self, raw: str) -> list[str]: return [raw]
    def format_report(self, items: list[str]) -> str: return ",".join(items)

print(JSONReport().generate())  # {JSON:raw:server}
print(CSVReport().generate())   # raw:server`},{language:"java",code:`import java.util.*;

abstract class ReportGenerator {
    // Template method
    final String generate() {
        String data = fetchData();
        List<String> parsed = parseData(data);
        return formatReport(parsed);
    }

    String fetchData() { return "raw:server"; }
    abstract List<String> parseData(String raw);
    abstract String formatReport(List<String> items);
}

class JSONReport extends ReportGenerator {
    List<String> parseData(String raw) { return List.of("JSON:" + raw); }
    String formatReport(List<String> items) { return "{" + String.join(",", items) + "}"; }
}

class CSVReport extends ReportGenerator {
    List<String> parseData(String raw) { return List.of(raw); }
    String formatReport(List<String> items) { return String.join(",", items); }
}

System.out.println(new JSONReport().generate());  // {JSON:raw:server}
System.out.println(new CSVReport().generate());   // raw:server`}]},{slug:"iterator",title:"Iterator",emoji:"🔄",category:"Behavioral",intent:"Provides a way to sequentially access elements of a collection without exposing its underlying representation.",problem:"A collection has a complex internal structure (tree, graph, ring buffer). You want to iterate over it without exposing how the data is stored.",keyPoints:["Separates traversal logic from the collection class","Supports multiple simultaneous independent traversals of the same collection","Enables a unified for-in / for-of interface across all collections","Lazy iterators (Kotlin Sequences, Python generators) compute elements on demand","Internal iterator hides the loop; external iterator gives the caller control"],whenToUse:["Custom collections that need to support for-in/for-of loops","When you need multiple traversal strategies for the same collection","Hiding complex traversal logic (tree traversal, pagination)","Lazy sequences where computing all elements upfront is expensive"],realWorldExamples:[{platform:"iOS",example:"IteratorProtocol + Sequence, IndexingIterator, for-in on any Collection type"},{platform:"Android",example:"Iterable<T>, Kotlin Sequences for lazy evaluation, Cursor for database rows"},{platform:"Web",example:"Symbol.iterator, Generator functions (function*), built-in Array/Map/Set iterators"}],codeExamples:[{language:"swift",code:`struct Countdown: Sequence {
    let from: Int

    func makeIterator() -> CountdownIterator {
        CountdownIterator(current: from)
    }

    struct CountdownIterator: IteratorProtocol {
        var current: Int
        mutating func next() -> Int? {
            guard current >= 0 else { return nil }
            defer { current -= 1 }
            return current
        }
    }
}

let countdown = Countdown(from: 5)
for n in countdown { print(n) }  // 5, 4, 3, 2, 1, 0

// Works with all Sequence methods
print(countdown.contains(3))      // true
print(Array(countdown))           // [5, 4, 3, 2, 1, 0]`},{language:"kotlin",code:`class Countdown(private val from: Int) : Iterable<Int> {
    override fun iterator(): Iterator<Int> = object : Iterator<Int> {
        var current = from
        override fun hasNext() = current >= 0
        override fun next()    = current--
    }
}

for (n in Countdown(5)) print("$n ")  // 5 4 3 2 1 0
println()

// Lazy Sequence version — computes on demand
val lazyCountdown = generateSequence(5) { if (it > 0) it - 1 else null }
println(lazyCountdown.toList())  // [5, 4, 3, 2, 1, 0]`},{language:"typescript",code:`class Countdown implements Iterable<number> {
    constructor(private from: number) {}

    [Symbol.iterator](): Iterator<number> {
        let current = this.from;
        return {
            next(): IteratorResult<number> {
                if (current >= 0)
                    return { value: current--, done: false };
                return { value: undefined as never, done: true };
            }
        };
    }
}

for (const n of new Countdown(5)) process.stdout.write(\`\${n} \`);
// 5 4 3 2 1 0
console.log();
console.log([...new Countdown(5)]);  // [5, 4, 3, 2, 1, 0]

// Generator alternative
function* countdown(from: number) {
    while (from >= 0) yield from--;
}
console.log([...countdown(5)]);      // [5, 4, 3, 2, 1, 0]`},{language:"python",code:`class Countdown:
    def __init__(self, start: int):
        self.start = start

    def __iter__(self):
        return self._Iterator(self.start)

    class _Iterator:
        def __init__(self, current: int):
            self.current = current

        def __iter__(self): return self

        def __next__(self) -> int:
            if self.current < 0:
                raise StopIteration
            value = self.current
            self.current -= 1
            return value

for n in Countdown(5):
    print(n, end=" ")  # 5 4 3 2 1 0
print()

# Generator alternative
def countdown(start: int):
    while start >= 0:
        yield start; start -= 1

print(list(countdown(5)))  # [5, 4, 3, 2, 1, 0]`},{language:"java",code:`import java.util.*;

class Countdown implements Iterable<Integer> {
    private final int from;
    Countdown(int from) { this.from = from; }

    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            int current = from;
            public boolean hasNext() { return current >= 0; }
            public Integer next() { return current--; }
        };
    }
}

for (int n : new Countdown(5)) System.out.print(n + " ");  // 5 4 3 2 1 0
System.out.println();`}]}],Mg=["Creational","Structural","Behavioral"],Ld=[{slug:"encapsulation",title:"Encapsulation",emoji:"🔐",category:"Pillars",intent:"Bundles data and the methods that operate on that data within a single unit, restricting direct access to an object's internal state.",problem:"Without encapsulation, external code can directly read and mutate an object's fields, leading to invalid states, broken invariants, and tight coupling between callers and internal implementation details.",keyPoints:["Fields are kept private; access is mediated through public methods or computed properties","Internal representation can change without breaking external code","Validation and invariant-checking logic lives in one place — setters enforce the rules","Reduces coupling: callers depend on behavior, not on internal structure"],whenToUse:["Protecting invariants (e.g., a balance can never go negative)","Hiding implementation details that may change later","Exposing a controlled, minimal API surface for a class"],realWorldExamples:[{platform:"iOS",example:"private(set) properties and computed properties with custom setters"},{platform:"Android",example:"Kotlin private fields exposed via custom getters/setters or data class validation"},{platform:"Web",example:"JavaScript private class fields (#balance) accessible only through methods"}],codeExamples:[{language:"swift",code:`class BankAccount {
    private var balance: Double = 0

    init(initialBalance: Double) {
        balance = initialBalance
    }

    func deposit(_ amount: Double) {
        guard amount > 0 else { return }
        balance += amount
    }

    func withdraw(_ amount: Double) -> Bool {
        guard amount > 0, amount <= balance else { return false }
        balance -= amount
        return true
    }

    var currentBalance: Double { balance }
}

let account = BankAccount(initialBalance: 100)
account.deposit(50)
print(account.currentBalance)  // 150`},{language:"kotlin",code:`class BankAccount(initialBalance: Double) {
    private var balance: Double = initialBalance

    fun deposit(amount: Double) {
        require(amount > 0)
        balance += amount
    }

    fun withdraw(amount: Double): Boolean {
        if (amount <= 0 || amount > balance) return false
        balance -= amount
        return true
    }

    val currentBalance: Double
        get() = balance
}

fun main() {
    val account = BankAccount(100.0)
    account.deposit(50.0)
    println(account.currentBalance)  // 150.0
}`},{language:"typescript",code:`class BankAccount {
  #balance: number;

  constructor(initialBalance: number) {
    this.#balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) return;
    this.#balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount <= 0 || amount > this.#balance) return false;
    this.#balance -= amount;
    return true;
  }

  get currentBalance(): number {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.currentBalance); // 150`},{language:"python",code:`class BankAccount:
    def __init__(self, initial_balance: float):
        self.__balance = initial_balance

    def deposit(self, amount: float) -> None:
        if amount <= 0:
            return
        self.__balance += amount

    def withdraw(self, amount: float) -> bool:
        if amount <= 0 or amount > self.__balance:
            return False
        self.__balance -= amount
        return True

    @property
    def balance(self) -> float:
        return self.__balance


account = BankAccount(100)
account.deposit(50)
print(account.balance)  # 150`},{language:"java",code:`public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount <= 0) return;
        balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount <= 0 || amount > balance) return false;
        balance -= amount;
        return true;
    }

    public double getBalance() {
        return balance;
    }
}

BankAccount account = new BankAccount(100);
account.deposit(50);
System.out.println(account.getBalance()); // 150.0`}]},{slug:"abstraction",title:"Abstraction",emoji:"🎭",category:"Pillars",intent:"Hides complex implementation details behind a simple, well-defined interface, exposing only what the caller needs.",problem:"Without abstraction, callers must understand and depend on every implementation detail of a system, making code harder to use, change, and test — and impossible to swap implementations.",keyPoints:["Abstract classes/protocols/interfaces describe *what* an object does, not *how*",'Concrete implementations fill in the "how" behind the abstraction',"Callers program against the abstraction, enabling swappable implementations","Reduces cognitive load by exposing only relevant operations"],whenToUse:["Designing public APIs or libraries","Supporting multiple implementations behind one interface (e.g., payment providers)","Isolating volatile subsystems behind a stable boundary"],realWorldExamples:[{platform:"iOS",example:"Protocols like Codable and Equatable hide conformance details from callers"},{platform:"Android",example:"Repository interfaces hide whether data comes from Room or a network call"},{platform:"Web",example:"A Storage interface abstracting over localStorage, sessionStorage, or IndexedDB"}],codeExamples:[{language:"swift",code:`protocol PaymentProcessor {
    func pay(amount: Double)
}

class CreditCardProcessor: PaymentProcessor {
    func pay(amount: Double) {
        print("Charging $\\(amount) to credit card")
    }
}

class PayPalProcessor: PaymentProcessor {
    func pay(amount: Double) {
        print("Sending $\\(amount) via PayPal")
    }
}

func checkout(amount: Double, processor: PaymentProcessor) {
    processor.pay(amount: amount)
}

checkout(amount: 49.99, processor: PayPalProcessor())`},{language:"kotlin",code:`interface PaymentProcessor {
    fun pay(amount: Double)
}

class CreditCardProcessor : PaymentProcessor {
    override fun pay(amount: Double) {
        println("Charging \\$$amount to credit card")
    }
}

class PayPalProcessor : PaymentProcessor {
    override fun pay(amount: Double) {
        println("Sending \\$$amount via PayPal")
    }
}

fun checkout(amount: Double, processor: PaymentProcessor) {
    processor.pay(amount)
}

fun main() {
    checkout(49.99, PayPalProcessor())
}`},{language:"typescript",code:`interface PaymentProcessor {
  pay(amount: number): void;
}

class CreditCardProcessor implements PaymentProcessor {
  pay(amount: number): void {
    console.log(\`Charging $\${amount} to credit card\`);
  }
}

class PayPalProcessor implements PaymentProcessor {
  pay(amount: number): void {
    console.log(\`Sending $\${amount} via PayPal\`);
  }
}

function checkout(amount: number, processor: PaymentProcessor): void {
  processor.pay(amount);
}

checkout(49.99, new PayPalProcessor());`},{language:"python",code:`from abc import ABC, abstractmethod


class PaymentProcessor(ABC):
    @abstractmethod
    def pay(self, amount: float) -> None:
        ...


class CreditCardProcessor(PaymentProcessor):
    def pay(self, amount: float) -> None:
        print(f"Charging \${amount} to credit card")


class PayPalProcessor(PaymentProcessor):
    def pay(self, amount: float) -> None:
        print(f"Sending \${amount} via PayPal")


def checkout(amount: float, processor: PaymentProcessor) -> None:
    processor.pay(amount)


checkout(49.99, PayPalProcessor())`},{language:"java",code:`interface PaymentProcessor {
    void pay(double amount);
}

class CreditCardProcessor implements PaymentProcessor {
    public void pay(double amount) {
        System.out.println("Charging $" + amount + " to credit card");
    }
}

class PayPalProcessor implements PaymentProcessor {
    public void pay(double amount) {
        System.out.println("Sending $" + amount + " via PayPal");
    }
}

class Checkout {
    static void process(double amount, PaymentProcessor processor) {
        processor.pay(amount);
    }
}

Checkout.process(49.99, new PayPalProcessor());`}]},{slug:"inheritance",title:"Inheritance",emoji:"🌳",category:"Pillars",intent:'Allows a class to derive shared state and behavior from a parent class, forming an "is-a" relationship.',problem:"Duplicating fields and methods across similar classes leads to maintenance headaches — a fix or feature added in one place must be manually copied everywhere else.",keyPoints:["A subclass inherits fields and methods from its superclass and can override behavior",'Models "is-a" relationships, e.g., a Dog is an Animal',`Deep hierarchies can become rigid and fragile — prefer composition when the relationship isn't truly "is-a"`,"Abstract base classes define shared contracts that subclasses must fulfill"],whenToUse:["Multiple types share common fields/behavior with specialization (Shape → Circle, Square)","Framework base classes that provide default behavior (UIViewController, Activity)",'Modeling natural taxonomies with clear "is-a" relationships'],realWorldExamples:[{platform:"iOS",example:"UIButton inherits from UIControl, which inherits from UIView"},{platform:"Android",example:"AppCompatActivity extends FragmentActivity extends Activity"},{platform:"Web",example:"HTMLInputElement and HTMLButtonElement both extend HTMLElement"}],codeExamples:[{language:"swift",code:`class Animal {
    let name: String
    init(name: String) { self.name = name }

    func makeSound() -> String {
        return "..."
    }
}

class Dog: Animal {
    override func makeSound() -> String {
        return "Woof!"
    }
}

class Cat: Animal {
    override func makeSound() -> String {
        return "Meow!"
    }
}

let animals: [Animal] = [Dog(name: "Rex"), Cat(name: "Whiskers")]
for animal in animals {
    print("\\(animal.name): \\(animal.makeSound())")
}`},{language:"kotlin",code:`open class Animal(val name: String) {
    open fun makeSound(): String = "..."
}

class Dog(name: String) : Animal(name) {
    override fun makeSound(): String = "Woof!"
}

class Cat(name: String) : Animal(name) {
    override fun makeSound(): String = "Meow!"
}

fun main() {
    val animals = listOf(Dog("Rex"), Cat("Whiskers"))
    for (animal in animals) {
        println("\${animal.name}: \${animal.makeSound()}")
    }
}`},{language:"typescript",code:`class Animal {
  constructor(public name: string) {}

  makeSound(): string {
    return '...';
  }
}

class Dog extends Animal {
  makeSound(): string {
    return 'Woof!';
  }
}

class Cat extends Animal {
  makeSound(): string {
    return 'Meow!';
  }
}

const animals: Animal[] = [new Dog('Rex'), new Cat('Whiskers')];
for (const animal of animals) {
  console.log(\`\${animal.name}: \${animal.makeSound()}\`);
}`},{language:"python",code:`class Animal:
    def __init__(self, name: str):
        self.name = name

    def make_sound(self) -> str:
        return "..."


class Dog(Animal):
    def make_sound(self) -> str:
        return "Woof!"


class Cat(Animal):
    def make_sound(self) -> str:
        return "Meow!"


animals = [Dog("Rex"), Cat("Whiskers")]
for animal in animals:
    print(f"{animal.name}: {animal.make_sound()}")`},{language:"java",code:`class Animal {
    protected final String name;
    Animal(String name) { this.name = name; }

    String makeSound() {
        return "...";
    }
}

class Dog extends Animal {
    Dog(String name) { super(name); }
    @Override String makeSound() { return "Woof!"; }
}

class Cat extends Animal {
    Cat(String name) { super(name); }
    @Override String makeSound() { return "Meow!"; }
}

List<Animal> animals = List.of(new Dog("Rex"), new Cat("Whiskers"));
for (Animal animal : animals) {
    System.out.println(animal.name + ": " + animal.makeSound());
}`}]},{slug:"polymorphism",title:"Polymorphism",emoji:"🔀",category:"Pillars",intent:"Allows objects of different types to be treated through a common interface, with each type providing its own behavior for the same call.",problem:"Without polymorphism, code must use type-checks and branching (if/else or switch on type) to handle different object types — logic that grows and becomes error-prone every time a new type is added.",keyPoints:["The same method call produces different behavior depending on the runtime type of the object","Achieved via method overriding (subtype polymorphism) or interfaces/protocols","Eliminates type-checking conditionals — the right implementation is dispatched automatically","Enables writing generic code that works with any conforming type"],whenToUse:["Processing heterogeneous collections uniformly (e.g., an array of Shape)","Plugin or strategy systems where behavior varies by type","Replacing switch-on-type logic with dynamic dispatch"],realWorldExamples:[{platform:"iOS",example:"draw() called on any UIView subclass renders that subclass's own appearance"},{platform:"Android",example:"onClick() behaves differently depending on the View subclass's listener"},{platform:"Web",example:"toString() overridden per class to produce custom string representations"}],codeExamples:[{language:"swift",code:`protocol Shape {
    func area() -> Double
}

struct Circle: Shape {
    let radius: Double
    func area() -> Double { .pi * radius * radius }
}

struct Rectangle: Shape {
    let width: Double
    let height: Double
    func area() -> Double { width * height }
}

let shapes: [Shape] = [Circle(radius: 2), Rectangle(width: 3, height: 4)]
for shape in shapes {
    print("Area: \\(shape.area())")
}`},{language:"kotlin",code:`interface Shape {
    fun area(): Double
}

class Circle(val radius: Double) : Shape {
    override fun area(): Double = Math.PI * radius * radius
}

class Rectangle(val width: Double, val height: Double) : Shape {
    override fun area(): Double = width * height
}

fun main() {
    val shapes: List<Shape> = listOf(Circle(2.0), Rectangle(3.0, 4.0))
    for (shape in shapes) {
        println("Area: \${shape.area()}")
    }
}`},{language:"typescript",code:`interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(2), new Rectangle(3, 4)];
for (const shape of shapes) {
  console.log(\`Area: \${shape.area()}\`);
}`},{language:"python",code:`from abc import ABC, abstractmethod
import math


class Shape(ABC):
    @abstractmethod
    def area(self) -> float:
        ...


class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius

    def area(self) -> float:
        return math.pi * self.radius ** 2


class Rectangle(Shape):
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def area(self) -> float:
        return self.width * self.height


shapes: list[Shape] = [Circle(2), Rectangle(3, 4)]
for shape in shapes:
    print(f"Area: {shape.area()}")`},{language:"java",code:`interface Shape {
    double area();
}

class Circle implements Shape {
    private final double radius;
    Circle(double radius) { this.radius = radius; }
    public double area() { return Math.PI * radius * radius; }
}

class Rectangle implements Shape {
    private final double width, height;
    Rectangle(double width, double height) { this.width = width; this.height = height; }
    public double area() { return width * height; }
}

List<Shape> shapes = List.of(new Circle(2), new Rectangle(3, 4));
for (Shape shape : shapes) {
    System.out.println("Area: " + shape.area());
}`}]},{slug:"association",title:"Association",emoji:"🔗",category:"Relationships",intent:"A general relationship where one object uses or interacts with another, without ownership — both objects can exist independently.",problem:"Modeling real-world interactions, like a Teacher teaching Students, requires representing a relationship between objects without implying that one controls the other's lifecycle.",keyPoints:["Objects hold references to each other but each has an independent lifecycle","Can be one-to-one, one-to-many, or many-to-many","Can be unidirectional (one object knows about the other) or bidirectional",'The weakest form of relationship — simply "knows about" or "uses"'],whenToUse:["Modeling collaborations between independent entities (Driver and Car)","When neither object owns or controls the other's lifecycle","Representing references/links between domain objects"],realWorldExamples:[{platform:"iOS",example:"A delegate property pointing to an independent, unowned object"},{platform:"Android",example:"A ViewModel holding a reference to a Repository it does not own"},{platform:"Web",example:"A User object referencing a Department by ID, both stored independently"}],codeExamples:[{language:"swift",code:`class Student {
    let name: String
    init(name: String) { self.name = name }
}

class Teacher {
    let name: String
    private var students: [Student] = []

    init(name: String) { self.name = name }

    func assign(_ student: Student) {
        students.append(student)
    }

    func roster() -> [String] {
        students.map { $0.name }
    }
}

let teacher = Teacher(name: "Ms. Lee")
teacher.assign(Student(name: "Alice"))
teacher.assign(Student(name: "Bob"))
print(teacher.roster())  // ["Alice", "Bob"]`},{language:"kotlin",code:`class Student(val name: String)

class Teacher(val name: String) {
    private val students = mutableListOf<Student>()

    fun assign(student: Student) {
        students.add(student)
    }

    fun roster(): List<String> = students.map { it.name }
}

fun main() {
    val teacher = Teacher("Ms. Lee")
    teacher.assign(Student("Alice"))
    teacher.assign(Student("Bob"))
    println(teacher.roster())  // [Alice, Bob]
}`},{language:"typescript",code:`class Student {
  constructor(public name: string) {}
}

class Teacher {
  private students: Student[] = [];

  constructor(public name: string) {}

  assign(student: Student): void {
    this.students.push(student);
  }

  roster(): string[] {
    return this.students.map((s) => s.name);
  }
}

const teacher = new Teacher('Ms. Lee');
teacher.assign(new Student('Alice'));
teacher.assign(new Student('Bob'));
console.log(teacher.roster()); // ['Alice', 'Bob']`},{language:"python",code:`class Student:
    def __init__(self, name: str):
        self.name = name


class Teacher:
    def __init__(self, name: str):
        self.name = name
        self._students: list[Student] = []

    def assign(self, student: Student) -> None:
        self._students.append(student)

    def roster(self) -> list[str]:
        return [s.name for s in self._students]


teacher = Teacher("Ms. Lee")
teacher.assign(Student("Alice"))
teacher.assign(Student("Bob"))
print(teacher.roster())  # ['Alice', 'Bob']`},{language:"java",code:`class Student {
    final String name;
    Student(String name) { this.name = name; }
}

class Teacher {
    final String name;
    private final List<Student> students = new ArrayList<>();

    Teacher(String name) { this.name = name; }

    void assign(Student student) {
        students.add(student);
    }

    List<String> roster() {
        return students.stream().map(s -> s.name).collect(Collectors.toList());
    }
}

Teacher teacher = new Teacher("Ms. Lee");
teacher.assign(new Student("Alice"));
teacher.assign(new Student("Bob"));
System.out.println(teacher.roster()); // [Alice, Bob]`}]},{slug:"aggregation",title:"Aggregation",emoji:"🧩",category:"Relationships",intent:'A "has-a" relationship where a container holds references to objects that can exist independently of it — a whole-part relationship without ownership.',problem:"Some objects logically belong to a group, but shouldn't be destroyed when the group is destroyed — deleting a Playlist shouldn't delete the Songs it contains.",keyPoints:['The "part" can exist independently of the "whole" and can be shared across multiple wholes',"Represented as a collection of references, not owned instances","Destroying the container does not destroy its parts","A weaker form of ownership than composition"],whenToUse:["A Playlist containing Songs that also exist outside the playlist","A Department containing Employees who could move to another department","A Team referencing Players who exist independently of the team"],realWorldExamples:[{platform:"iOS",example:"An array of shared model objects referenced by multiple view controllers"},{platform:"Android",example:"A Playlist entity referencing Song IDs stored in a Room database"},{platform:"Web",example:"A shopping cart holding references to Product objects from a catalog"}],codeExamples:[{language:"swift",code:`class Song {
    let title: String
    init(title: String) { self.title = title }
}

class Playlist {
    let name: String
    private(set) var songs: [Song] = []

    init(name: String) { self.name = name }

    func add(_ song: Song) {
        songs.append(song)
    }
}

let bohemianRhapsody = Song(title: "Bohemian Rhapsody")
let playlist = Playlist(name: "Road Trip")
playlist.add(bohemianRhapsody)
// bohemianRhapsody still exists even if \`playlist\` is deallocated`},{language:"kotlin",code:`class Song(val title: String)

class Playlist(val name: String) {
    private val _songs = mutableListOf<Song>()
    val songs: List<Song> get() = _songs

    fun add(song: Song) {
        _songs.add(song)
    }
}

fun main() {
    val bohemianRhapsody = Song("Bohemian Rhapsody")
    val playlist = Playlist("Road Trip")
    playlist.add(bohemianRhapsody)
    // bohemianRhapsody still exists even if playlist is discarded
}`},{language:"typescript",code:`class Song {
  constructor(public title: string) {}
}

class Playlist {
  private songs: Song[] = [];

  constructor(public name: string) {}

  add(song: Song): void {
    this.songs.push(song);
  }

  getSongs(): Song[] {
    return this.songs;
  }
}

const bohemianRhapsody = new Song('Bohemian Rhapsody');
const playlist = new Playlist('Road Trip');
playlist.add(bohemianRhapsody);
// bohemianRhapsody still exists even if \`playlist\` is discarded`},{language:"python",code:`class Song:
    def __init__(self, title: str):
        self.title = title


class Playlist:
    def __init__(self, name: str):
        self.name = name
        self.songs: list[Song] = []

    def add(self, song: Song) -> None:
        self.songs.append(song)


bohemian_rhapsody = Song("Bohemian Rhapsody")
playlist = Playlist("Road Trip")
playlist.add(bohemian_rhapsody)
# bohemian_rhapsody still exists even if playlist is discarded`},{language:"java",code:`class Song {
    final String title;
    Song(String title) { this.title = title; }
}

class Playlist {
    final String name;
    private final List<Song> songs = new ArrayList<>();

    Playlist(String name) { this.name = name; }

    void add(Song song) {
        songs.add(song);
    }

    List<Song> getSongs() {
        return songs;
    }
}

Song bohemianRhapsody = new Song("Bohemian Rhapsody");
Playlist playlist = new Playlist("Road Trip");
playlist.add(bohemianRhapsody);
// bohemianRhapsody still exists even if playlist is discarded`}]},{slug:"composition",title:"Composition",emoji:"🧱",category:"Relationships",intent:`A strong "has-a" relationship where the part's lifecycle is bound to the whole — when the container is destroyed, so are its parts.`,problem:"Some objects are meaningless without their owner — an Engine doesn't make sense detached from its Car. Modeling this with plain shared references doesn't express that lifecycle dependency.",keyPoints:["The contained object is created and destroyed along with its owner","The part typically has no independent identity outside the whole","Favor composition over inheritance for flexible, loosely-coupled designs","Usually implemented by instantiating the part directly inside the whole's constructor"],whenToUse:["An object owns components that are integral to it (Car → Engine, House → Rooms)","Building complex behavior by combining smaller objects rather than subclassing",'When the "part" should never be shared between multiple "wholes"'],realWorldExamples:[{platform:"iOS",example:"A view controller owning and managing the lifecycle of its child views"},{platform:"Android",example:"An Activity owning Fragments that are created and destroyed with it"},{platform:"Web",example:"A Car class instantiating its own Engine instance in its constructor"}],codeExamples:[{language:"swift",code:`class Engine {
    let horsepower: Int
    init(horsepower: Int) { self.horsepower = horsepower }

    func start() -> String { "Engine roaring with \\(horsepower) hp" }
}

class Car {
    private let engine: Engine  // owned — created and destroyed with the Car

    init(horsepower: Int) {
        engine = Engine(horsepower: horsepower)
    }

    func start() -> String {
        engine.start()
    }
}

let car = Car(horsepower: 300)
print(car.start())  // "Engine roaring with 300 hp"`},{language:"kotlin",code:`class Engine(val horsepower: Int) {
    fun start(): String = "Engine roaring with $horsepower hp"
}

class Car(horsepower: Int) {
    private val engine = Engine(horsepower)  // owned by Car

    fun start(): String = engine.start()
}

fun main() {
    val car = Car(300)
    println(car.start())  // Engine roaring with 300 hp
}`},{language:"typescript",code:`class Engine {
  constructor(public horsepower: number) {}

  start(): string {
    return \`Engine roaring with \${this.horsepower} hp\`;
  }
}

class Car {
  private engine: Engine; // owned — created with the Car

  constructor(horsepower: number) {
    this.engine = new Engine(horsepower);
  }

  start(): string {
    return this.engine.start();
  }
}

const car = new Car(300);
console.log(car.start()); // "Engine roaring with 300 hp"`},{language:"python",code:`class Engine:
    def __init__(self, horsepower: int):
        self.horsepower = horsepower

    def start(self) -> str:
        return f"Engine roaring with {self.horsepower} hp"


class Car:
    def __init__(self, horsepower: int):
        self._engine = Engine(horsepower)  # owned by Car

    def start(self) -> str:
        return self._engine.start()


car = Car(300)
print(car.start())  # "Engine roaring with 300 hp"`},{language:"java",code:`class Engine {
    final int horsepower;
    Engine(int horsepower) { this.horsepower = horsepower; }

    String start() { return "Engine roaring with " + horsepower + " hp"; }
}

class Car {
    private final Engine engine; // owned — created with the Car

    Car(int horsepower) {
        this.engine = new Engine(horsepower);
    }

    String start() {
        return engine.start();
    }
}

Car car = new Car(300);
System.out.println(car.start()); // "Engine roaring with 300 hp"`}]},{slug:"single-responsibility",title:"Single Responsibility",emoji:"1️⃣",category:"Principles",intent:"A class should have only one reason to change — it should do one thing and do it well.",problem:"Classes that handle multiple responsibilities (e.g., business logic, persistence, and formatting all in one) become fragile: a tweak to one responsibility risks breaking another, and the class becomes a magnet for further unrelated changes.",keyPoints:["Each class or module encapsulates a single piece of functionality","Responsibilities are split into separate classes, each with a focused purpose","Improves testability — smaller classes with fewer dependencies are easier to test in isolation",'"Reason to change" is the key heuristic, not "number of methods"'],whenToUse:["A class mixes data access, business rules, and presentation logic",'Refactoring "god classes" that have grown to do everything',`Designing new classes — ask "what is this class's one job?"`],realWorldExamples:[{platform:"iOS",example:"Separating networking (APIClient), persistence (Storage), and presentation (ViewModel)"},{platform:"Android",example:"Splitting a fat Activity into ViewModel, Repository, and UI layers"},{platform:"Web",example:"Separating route handlers, business/service logic, and data-access layers"}],codeExamples:[{language:"swift",code:`// Each type has exactly one responsibility
struct Invoice {
    let id: String
    let amount: Double
}

struct InvoiceCalculator {
    func total(for invoice: Invoice, taxRate: Double) -> Double {
        invoice.amount * (1 + taxRate)
    }
}

struct InvoicePrinter {
    func format(_ invoice: Invoice) -> String {
        "Invoice #\\(invoice.id): $\\(invoice.amount)"
    }
}

struct InvoiceRepository {
    func save(_ invoice: Invoice) {
        // persist to database
        print("Saved invoice \\(invoice.id)")
    }
}`},{language:"kotlin",code:`// Each type has exactly one responsibility
data class Invoice(val id: String, val amount: Double)

class InvoiceCalculator {
    fun total(invoice: Invoice, taxRate: Double): Double =
        invoice.amount * (1 + taxRate)
}

class InvoicePrinter {
    fun format(invoice: Invoice): String =
        "Invoice #\${invoice.id}: $\${invoice.amount}"
}

class InvoiceRepository {
    fun save(invoice: Invoice) {
        // persist to database
        println("Saved invoice \${invoice.id}")
    }
}`},{language:"typescript",code:`// Each type has exactly one responsibility
interface Invoice {
  id: string;
  amount: number;
}

class InvoiceCalculator {
  total(invoice: Invoice, taxRate: number): number {
    return invoice.amount * (1 + taxRate);
  }
}

class InvoicePrinter {
  format(invoice: Invoice): string {
    return \`Invoice #\${invoice.id}: $\${invoice.amount}\`;
  }
}

class InvoiceRepository {
  save(invoice: Invoice): void {
    // persist to database
    console.log(\`Saved invoice \${invoice.id}\`);
  }
}`},{language:"python",code:`# Each class has exactly one responsibility
from dataclasses import dataclass


@dataclass
class Invoice:
    id: str
    amount: float


class InvoiceCalculator:
    def total(self, invoice: Invoice, tax_rate: float) -> float:
        return invoice.amount * (1 + tax_rate)


class InvoicePrinter:
    def format(self, invoice: Invoice) -> str:
        return f"Invoice #{invoice.id}: \${invoice.amount}"


class InvoiceRepository:
    def save(self, invoice: Invoice) -> None:
        # persist to database
        print(f"Saved invoice {invoice.id}")`},{language:"java",code:`// Each class has exactly one responsibility
class Invoice {
    final String id;
    final double amount;
    Invoice(String id, double amount) { this.id = id; this.amount = amount; }
}

class InvoiceCalculator {
    double total(Invoice invoice, double taxRate) {
        return invoice.amount * (1 + taxRate);
    }
}

class InvoicePrinter {
    String format(Invoice invoice) {
        return "Invoice #" + invoice.id + ": $" + invoice.amount;
    }
}

class InvoiceRepository {
    void save(Invoice invoice) {
        // persist to database
        System.out.println("Saved invoice " + invoice.id);
    }
}`}]},{slug:"open-closed",title:"Open/Closed",emoji:"🔓",category:"Principles",intent:"Software entities should be open for extension but closed for modification — add new behavior without changing existing, tested code.",problem:"When new requirements are handled by editing existing classes — e.g., adding another `if` branch for each new type — every change risks breaking existing functionality and requires re-testing the whole class.",keyPoints:["New behavior is added by creating new classes/implementations, not by editing existing ones","Achieved through abstraction — interfaces or protocols that existing code depends on","Existing, tested code remains untouched and stable","Often realized via the Strategy pattern, polymorphism, or plugin architectures"],whenToUse:["Systems that frequently need new variants (payment methods, file exporters, discount rules)","Avoiding long if/else or switch chains that grow with each new type","Designing plugin-based architectures"],realWorldExamples:[{platform:"iOS",example:"Adding a new UIView subclass without modifying UIKit itself"},{platform:"Android",example:"Adding a new PaymentMethod implementation without touching the checkout flow"},{platform:"Web",example:"Adding a new export format by implementing an Exporter interface"}],codeExamples:[{language:"swift",code:`protocol DiscountStrategy {
    func apply(to price: Double) -> Double
}

struct NoDiscount: DiscountStrategy {
    func apply(to price: Double) -> Double { price }
}

struct PercentageDiscount: DiscountStrategy {
    let percent: Double
    func apply(to price: Double) -> Double { price * (1 - percent / 100) }
}

// New discount types are added without modifying PriceCalculator
struct PriceCalculator {
    let strategy: DiscountStrategy
    func finalPrice(for price: Double) -> Double {
        strategy.apply(to: price)
    }
}

let calculator = PriceCalculator(strategy: PercentageDiscount(percent: 20))
print(calculator.finalPrice(for: 100))  // 80.0`},{language:"kotlin",code:`interface DiscountStrategy {
    fun apply(price: Double): Double
}

class NoDiscount : DiscountStrategy {
    override fun apply(price: Double) = price
}

class PercentageDiscount(val percent: Double) : DiscountStrategy {
    override fun apply(price: Double) = price * (1 - percent / 100)
}

// New discount types are added without modifying PriceCalculator
class PriceCalculator(private val strategy: DiscountStrategy) {
    fun finalPrice(price: Double) = strategy.apply(price)
}

fun main() {
    val calculator = PriceCalculator(PercentageDiscount(20.0))
    println(calculator.finalPrice(100.0))  // 80.0
}`},{language:"typescript",code:`interface DiscountStrategy {
  apply(price: number): number;
}

class NoDiscount implements DiscountStrategy {
  apply(price: number): number {
    return price;
  }
}

class PercentageDiscount implements DiscountStrategy {
  constructor(private percent: number) {}
  apply(price: number): number {
    return price * (1 - this.percent / 100);
  }
}

// New discount types are added without modifying PriceCalculator
class PriceCalculator {
  constructor(private strategy: DiscountStrategy) {}
  finalPrice(price: number): number {
    return this.strategy.apply(price);
  }
}

const calculator = new PriceCalculator(new PercentageDiscount(20));
console.log(calculator.finalPrice(100)); // 80`},{language:"python",code:`from abc import ABC, abstractmethod


class DiscountStrategy(ABC):
    @abstractmethod
    def apply(self, price: float) -> float:
        ...


class NoDiscount(DiscountStrategy):
    def apply(self, price: float) -> float:
        return price


class PercentageDiscount(DiscountStrategy):
    def __init__(self, percent: float):
        self.percent = percent

    def apply(self, price: float) -> float:
        return price * (1 - self.percent / 100)


# New discount types are added without modifying PriceCalculator
class PriceCalculator:
    def __init__(self, strategy: DiscountStrategy):
        self.strategy = strategy

    def final_price(self, price: float) -> float:
        return self.strategy.apply(price)


calculator = PriceCalculator(PercentageDiscount(20))
print(calculator.final_price(100))  # 80.0`},{language:"java",code:`interface DiscountStrategy {
    double apply(double price);
}

class NoDiscount implements DiscountStrategy {
    public double apply(double price) { return price; }
}

class PercentageDiscount implements DiscountStrategy {
    private final double percent;
    PercentageDiscount(double percent) { this.percent = percent; }
    public double apply(double price) { return price * (1 - percent / 100); }
}

// New discount types are added without modifying PriceCalculator
class PriceCalculator {
    private final DiscountStrategy strategy;
    PriceCalculator(DiscountStrategy strategy) { this.strategy = strategy; }
    double finalPrice(double price) { return strategy.apply(price); }
}

PriceCalculator calculator = new PriceCalculator(new PercentageDiscount(20));
System.out.println(calculator.finalPrice(100)); // 80.0`}]},{slug:"liskov-substitution",title:"Liskov Substitution",emoji:"🔄",category:"Principles",intent:"Subtypes must be substitutable for their base types without altering the correctness of the program.",problem:"If a subclass overrides behavior in ways that violate the expectations of its base class — e.g., throwing for operations the base class supports, or returning unexpected results — code that relies on the base type breaks when given the subtype.",keyPoints:["A subclass should honor the contracts (preconditions, postconditions, invariants) of its superclass","Overridden methods should accept at least as much input and return at least as little as the base method","Classic violation: Square extends Rectangle but breaks the independence of setWidth/setHeight","If a subtype can't fully honor the base type's contract, reconsider the inheritance relationship"],whenToUse:["Designing class hierarchies where subclasses must be drop-in replacements","Reviewing inheritance to check for surprising overridden behavior",'Choosing between inheritance and composition for an "almost is-a" relationship'],realWorldExamples:[{platform:"iOS",example:"Any UIView subclass must work correctly anywhere a UIView is expected"},{platform:"Android",example:"Any RecyclerView.ViewHolder subclass must behave correctly within the adapter"},{platform:"Web",example:"Any Storage implementation (localStorage/sessionStorage) must support the same get/set/remove contract"}],codeExamples:[{language:"swift",code:`// ❌ Violation: Penguin can't fly, breaking the Bird contract
// class Penguin: Bird { override func fly() { fatalError("can't fly") } }

// ✅ Fix: separate flying ability into its own protocol
protocol Bird {
    func eat()
}

protocol FlyingBird: Bird {
    func fly()
}

struct Sparrow: FlyingBird {
    func eat() { print("Sparrow eating") }
    func fly() { print("Sparrow flying") }
}

struct Penguin: Bird {
    func eat() { print("Penguin eating") }
    // no fly() — Penguin is not a FlyingBird, and that's fine
}

func feed(_ bird: Bird) { bird.eat() }
feed(Penguin())   // works correctly for any Bird`},{language:"kotlin",code:`// ❌ Violation: Penguin can't fly, breaking the Bird contract
// class Penguin : Bird { override fun fly() = throw UnsupportedOperationException() }

// ✅ Fix: separate flying ability into its own interface
interface Bird {
    fun eat()
}

interface FlyingBird : Bird {
    fun fly()
}

class Sparrow : FlyingBird {
    override fun eat() = println("Sparrow eating")
    override fun fly() = println("Sparrow flying")
}

class Penguin : Bird {
    override fun eat() = println("Penguin eating")
    // no fly() — Penguin is not a FlyingBird, and that's fine
}

fun feed(bird: Bird) = bird.eat()
fun main() { feed(Penguin()) }  // works correctly for any Bird`},{language:"typescript",code:`// ❌ Violation: Penguin can't fly, breaking the Bird contract
// class Penguin implements Bird { fly() { throw new Error("can't fly"); } }

// ✅ Fix: separate flying ability into its own interface
interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  eat(): void { console.log('Sparrow eating'); }
  fly(): void { console.log('Sparrow flying'); }
}

class Penguin implements Bird {
  eat(): void { console.log('Penguin eating'); }
  // no fly() — Penguin is not a FlyingBird, and that's fine
}

function feed(bird: Bird): void { bird.eat(); }
feed(new Penguin()); // works correctly for any Bird`},{language:"python",code:`# ❌ Violation: Penguin can't fly, breaking the Bird contract
# class Penguin(Bird):
#     def fly(self): raise NotImplementedError("can't fly")

# ✅ Fix: separate flying ability into its own protocol
from abc import ABC, abstractmethod


class Bird(ABC):
    @abstractmethod
    def eat(self) -> None: ...


class FlyingBird(Bird):
    @abstractmethod
    def fly(self) -> None: ...


class Sparrow(FlyingBird):
    def eat(self) -> None: print("Sparrow eating")
    def fly(self) -> None: print("Sparrow flying")


class Penguin(Bird):
    def eat(self) -> None: print("Penguin eating")
    # no fly() — Penguin is not a FlyingBird, and that's fine


def feed(bird: Bird) -> None:
    bird.eat()


feed(Penguin())  # works correctly for any Bird`},{language:"java",code:`// ❌ Violation: Penguin can't fly, breaking the Bird contract
// class Penguin implements Bird { public void fly() { throw new UnsupportedOperationException(); } }

// ✅ Fix: separate flying ability into its own interface
interface Bird {
    void eat();
}

interface FlyingBird extends Bird {
    void fly();
}

class Sparrow implements FlyingBird {
    public void eat() { System.out.println("Sparrow eating"); }
    public void fly() { System.out.println("Sparrow flying"); }
}

class Penguin implements Bird {
    public void eat() { System.out.println("Penguin eating"); }
    // no fly() — Penguin is not a FlyingBird, and that's fine
}

static void feed(Bird bird) { bird.eat(); }
feed(new Penguin()); // works correctly for any Bird`}]},{slug:"interface-segregation",title:"Interface Segregation",emoji:"✂️",category:"Principles",intent:"Clients should not be forced to depend on interfaces or methods they do not use — prefer many small, focused interfaces over one large general-purpose one.",problem:`A "fat" interface with many unrelated methods forces every implementing class to provide (or stub out) methods it doesn't need, leading to empty or throwing implementations and tight coupling between unrelated clients.`,keyPoints:["Split large interfaces into smaller, role-specific ones (e.g., Printable, Scannable instead of one Machine interface)","Classes implement only the interfaces relevant to their behavior","Clients depend only on the methods they actually call","Reduces ripple effects — changes to an unused method no longer force changes in unrelated classes"],whenToUse:["An interface has methods that only some implementers need",'Implementing classes throw "not supported" for some interface methods',"Designing plugin/capability systems (e.g., a printer that can print but not scan)"],realWorldExamples:[{platform:"iOS",example:"Separate protocols like UITableViewDataSource and UITableViewDelegate instead of one giant protocol"},{platform:"Android",example:"Separate listener interfaces like OnClickListener and OnLongClickListener"},{platform:"Web",example:"Splitting a generic Repository interface into separate Readable and Writable interfaces"}],codeExamples:[{language:"swift",code:`// ❌ Fat interface forces SimplePrinter to implement scan()/fax() too
// protocol Machine { func print(); func scan(); func fax() }

// ✅ Segregated interfaces — implement only what you support
protocol Printer {
    func print(_ document: String)
}

protocol Scanner {
    func scan() -> String
}

struct SimplePrinter: Printer {
    func print(_ document: String) {
        print("Printing: \\(document)")
    }
}

struct AllInOnePrinter: Printer, Scanner {
    func print(_ document: String) { print("Printing: \\(document)") }
    func scan() -> String { "Scanned document" }
}`},{language:"kotlin",code:`// ❌ Fat interface forces SimplePrinter to implement scan()/fax() too
// interface Machine { fun print(doc: String); fun scan(): String; fun fax() }

// ✅ Segregated interfaces — implement only what you support
interface Printer {
    fun print(document: String)
}

interface Scanner {
    fun scan(): String
}

class SimplePrinter : Printer {
    override fun print(document: String) = println("Printing: $document")
}

class AllInOnePrinter : Printer, Scanner {
    override fun print(document: String) = println("Printing: $document")
    override fun scan(): String = "Scanned document"
}`},{language:"typescript",code:`// ❌ Fat interface forces SimplePrinter to implement scan()/fax() too
// interface Machine { print(doc: string): void; scan(): string; fax(): void; }

// ✅ Segregated interfaces — implement only what you support
interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(): string;
}

class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(\`Printing: \${document}\`);
  }
}

class AllInOnePrinter implements Printer, Scanner {
  print(document: string): void {
    console.log(\`Printing: \${document}\`);
  }
  scan(): string {
    return 'Scanned document';
  }
}`},{language:"python",code:`# ❌ Fat interface forces SimplePrinter to implement scan()/fax() too
# class Machine(ABC):
#     def print(self, doc): ...
#     def scan(self): ...
#     def fax(self): ...

# ✅ Segregated interfaces — implement only what you support
from abc import ABC, abstractmethod


class Printer(ABC):
    @abstractmethod
    def print(self, document: str) -> None: ...


class Scanner(ABC):
    @abstractmethod
    def scan(self) -> str: ...


class SimplePrinter(Printer):
    def print(self, document: str) -> None:
        print(f"Printing: {document}")


class AllInOnePrinter(Printer, Scanner):
    def print(self, document: str) -> None:
        print(f"Printing: {document}")

    def scan(self) -> str:
        return "Scanned document"`},{language:"java",code:`// ❌ Fat interface forces SimplePrinter to implement scan()/fax() too
// interface Machine { void print(String doc); String scan(); void fax(); }

// ✅ Segregated interfaces — implement only what you support
interface Printer {
    void print(String document);
}

interface Scanner {
    String scan();
}

class SimplePrinter implements Printer {
    public void print(String document) {
        System.out.println("Printing: " + document);
    }
}

class AllInOnePrinter implements Printer, Scanner {
    public void print(String document) {
        System.out.println("Printing: " + document);
    }
    public String scan() {
        return "Scanned document";
    }
}`}]},{slug:"dependency-inversion",title:"Dependency Inversion",emoji:"🔌",category:"Principles",intent:"High-level modules should not depend on low-level modules directly — both should depend on abstractions.",problem:"When high-level business logic directly instantiates and depends on concrete low-level classes (e.g., a specific email client), it becomes rigid, hard to test, and tightly coupled to implementation details that may change.",keyPoints:["Both high-level and low-level modules depend on shared abstractions (interfaces/protocols)",'Concrete implementations are "injected" into high-level modules via constructor or property injection',"Enables swapping implementations (e.g., real sender vs. mock) without changing business logic","Underpins dependency injection frameworks and testable, layered architectures"],whenToUse:["Business logic needs to be testable with mocked dependencies","Swapping infrastructure (database, network client, file system) without touching domain logic","Decoupling layers in clean or hexagonal architecture"],realWorldExamples:[{platform:"iOS",example:"Injecting a NetworkServiceProtocol into a ViewModel instead of using URLSession directly"},{platform:"Android",example:"Hilt/Dagger injecting a Repository interface implementation into a ViewModel"},{platform:"Web",example:"Passing a database interface into a service constructor, swappable with an in-memory implementation for tests"}],codeExamples:[{language:"swift",code:`protocol MessageSender {
    func send(_ message: String)
}

struct EmailSender: MessageSender {
    func send(_ message: String) { print("Email: \\(message)") }
}

struct SMSSender: MessageSender {
    func send(_ message: String) { print("SMS: \\(message)") }
}

// High-level module depends on the abstraction, not a concrete sender
struct NotificationService {
    let sender: MessageSender

    func notify(_ message: String) {
        sender.send(message)
    }
}

let service = NotificationService(sender: SMSSender())
service.notify("Your order has shipped")`},{language:"kotlin",code:`interface MessageSender {
    fun send(message: String)
}

class EmailSender : MessageSender {
    override fun send(message: String) = println("Email: $message")
}

class SMSSender : MessageSender {
    override fun send(message: String) = println("SMS: $message")
}

// High-level module depends on the abstraction, not a concrete sender
class NotificationService(private val sender: MessageSender) {
    fun notify(message: String) = sender.send(message)
}

fun main() {
    val service = NotificationService(SMSSender())
    service.notify("Your order has shipped")
}`},{language:"typescript",code:`interface MessageSender {
  send(message: string): void;
}

class EmailSender implements MessageSender {
  send(message: string): void {
    console.log(\`Email: \${message}\`);
  }
}

class SMSSender implements MessageSender {
  send(message: string): void {
    console.log(\`SMS: \${message}\`);
  }
}

// High-level module depends on the abstraction, not a concrete sender
class NotificationService {
  constructor(private sender: MessageSender) {}

  notify(message: string): void {
    this.sender.send(message);
  }
}

const service = new NotificationService(new SMSSender());
service.notify('Your order has shipped');`},{language:"python",code:`from abc import ABC, abstractmethod


class MessageSender(ABC):
    @abstractmethod
    def send(self, message: str) -> None: ...


class EmailSender(MessageSender):
    def send(self, message: str) -> None:
        print(f"Email: {message}")


class SMSSender(MessageSender):
    def send(self, message: str) -> None:
        print(f"SMS: {message}")


# High-level module depends on the abstraction, not a concrete sender
class NotificationService:
    def __init__(self, sender: MessageSender):
        self.sender = sender

    def notify(self, message: str) -> None:
        self.sender.send(message)


service = NotificationService(SMSSender())
service.notify("Your order has shipped")`},{language:"java",code:`interface MessageSender {
    void send(String message);
}

class EmailSender implements MessageSender {
    public void send(String message) { System.out.println("Email: " + message); }
}

class SMSSender implements MessageSender {
    public void send(String message) { System.out.println("SMS: " + message); }
}

// High-level module depends on the abstraction, not a concrete sender
class NotificationService {
    private final MessageSender sender;
    NotificationService(MessageSender sender) { this.sender = sender; }

    void notify(String message) {
        sender.send(message);
    }
}

NotificationService service = new NotificationService(new SMSSender());
service.notify("Your order has shipped");`}]}],zg=["Pillars","Relationships","Principles"],tw=`---
date: 2022-10-05 22:15
description: Create wrap view horizontaly.
tags: uikit, ios
---
 # How to create TagView: similar to FlexBox's flex-wrap property in Swift

 There are several ways to make a tagview, or make a view wrap like the flex-wrap property of flexbox in css.

One approach is with calculating width value of each item, and move item to the next row if the item past the edge of the container.

Here is the example:

First of all, create \`UIView\` container

\`\`\`swift
private let containerView: UIView = {
    let view = UIView()
    // use auto layout
    view.translatesAutoresizingMaskIntoConstraints = false
    // give it a background color so we can see it
    view.backgroundColor = .secondarySystemBackground
    return view
}()

...
\`\`\`

Prepare data in the form of a string array that you will display as tags, you can also get it from your API.

\`\`\`swift
...

private let tagNames: [String] = [
    "Swift",
    "iOS",
    "XCode",
    "Objective-C",
    "UIKit",
    "SwiftUI",
    "Core Data",
    "Realm",
    "Combine",
    "RxSwift",
    "Clean Architecture",
    "MVVM",
    "MVC",
    "MVP",
    "VIPER",
    "TCA",
    "Algorithm",
    "Data Structure"
]

...
\`\`\`

Declare a new array in the form of a view, you can create it using a \`UILabel\`, in this tutorial I'm using the \`UIButton\` array

\`\`\`swift
...

private var tagButtons = [UIButton]()

private let tagHeight:CGFloat = 30
private let tagPadding: CGFloat = 16
private let tagSpacingX: CGFloat = 8
private let tagSpacingY: CGFloat = 8

...
\`\`\`

Declare the container height constraint, this will be updated along with the tagview item

\`\`\`swift
...

// container view height will be modified when laying out subviews
private var containerHeightConstraint: NSLayoutConstraint = NSLayoutConstraint()

...
\`\`\`

Then in \`viewDidLoad()\` write like this

\`\`\`swift
...

override func viewDidLoad() {
    super.viewDidLoad()

    // add the container view
    view.addSubview(containerView)

    // initialize height constraint - actual height will be set later
    containerHeightConstraint = containerView.heightAnchor.constraint(equalToConstant: 10.0)

    // constrain container safe-area top / leading / trailing to view with 20-pts padding
    let g = view.safeAreaLayoutGuide

    NSLayoutConstraint.activate([
        containerView.topAnchor.constraint(equalTo: g.topAnchor, constant: 20.0),
        containerView.leadingAnchor.constraint(equalTo: g.leadingAnchor, constant: 20.0),
        containerView.trailingAnchor.constraint(equalTo: g.trailingAnchor, constant: -20.0),
        containerHeightConstraint,
    ])

    // add the buttons to the scroll view
    addTagButtons()
}

...
\`\`\`

Calculate the frame size and update the container in \`viewDidLayoutSubviews()\`

\`\`\`swift
...

override func viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews()

    // call this here, after views have been laid-out
    // this will also be called when the size changes, such as device rotation,
    // so the buttons will "re-layout"
    displayTagButtons()

}

...
\`\`\`

At this point you will definitely get an error, because the \`addTagButtons()\` and \`displayTagButtons()\` functions have not been created, the last step is to make that functions

\`\`\`swift
...

private func addTagButtons() -> Void {

    for j in 0..<self.tagNames.count {

        // create a new button
        let newButton = UIButton(type: .system)

        // set its properties (title, colors, corners, etc)
        newButton.setTitle(tagNames[j], for: .normal)
        newButton.layer.masksToBounds = true
        newButton.layer.cornerRadius = 8
        newButton.layer.borderWidth = 1
        newButton.tintColor = .systemBlue
        newButton.configuration = .filled()

        // set its frame width and height
        newButton.frame.size.width = newButton.intrinsicContentSize.width + tagPadding
        newButton.frame.size.height = tagHeight

        // add it to the scroll view
        containerView.addSubview(newButton)

        // append it to tagButtons array
        tagButtons.append(newButton)

    }

}

private func displayTagButtons() {

    let containerWidth = containerView.frame.size.width

    var currentOriginX: CGFloat = 0
    var currentOriginY: CGFloat = 0

    // for each button in the array
    tagButtons.forEach { button in

        // if current X + button width will be greater than container view width
        //  "move to next row"
        if currentOriginX + button.frame.width > containerWidth {
            currentOriginX = 0
            currentOriginY += tagHeight + tagSpacingY
        }

        // set the btn frame origin
        button.frame.origin.x = currentOriginX
        button.frame.origin.y = currentOriginY

        // increment current X by btn width + spacing
        currentOriginX += button.frame.width + tagSpacingX

    }

    // update container view height
    containerHeightConstraint.constant = currentOriginY + tagHeight

}
\`\`\`

The result should look like this

![Simulator Screen Shot - iPhone 14 Pro - 2022-12-01 at 20 27 40](https://user-images.githubusercontent.com/47731450/205067487-16c316bd-7295-46f6-8bca-d7cb3064fbed.jpeg)

Find the entire code on my github [here](https://github.com/agustiyann/FlexWrapSwiftTutorial).`,nw=`---
date: 2023-02-20 22:15
description: Delve into the concept of property wrappers, explore their usage, and demonstrate how they enhance Swift programming.
tags: swift, swiftui
---
# Property Wrappers in Swift

Property wrappers are a powerful feature introduced in Swift 5.1, offering a convenient and flexible way to add custom behavior to properties. In this article, we'll delve into the concept of property wrappers, explore their usage, and demonstrate how they enhance Swift programming.

## 1. Understanding Property Wrappers

At its core, a property wrapper is a type that encapsulates the logic for accessing and mutating a property's value. It allows you to define custom behavior around property access and modification without cluttering your code with repetitive boilerplate.

## 2. Declaration Syntax

In Swift, you declare a property wrapper using the \`@propertyWrapper\` attribute. Here's a basic example of a property wrapper:

\`\`\`swift
@propertyWrapper
struct Capitalized {
    private(set) var value: String = ""

    var wrappedValue: String {
        get { value }
        set { value = newValue.capitalized }
    }

    init(initialValue: String) {
        self.value = initialValue.capitalized
    }
}
\`\`\`

## 3. Usage of Property Wrappers

Once you've defined a property wrapper, you can apply it to properties in your code using the \`@\` symbol. Here's how you use the \`Capitalized\` property wrapper:

\`\`\`swift
struct User {
    @Capitalized var name: String
}

var user = User(name: "john doe")
print(user.name) // Output: "John Doe"
\`\`\`

## 4. Built-in Property Wrappers

Swift provides several built-in property wrappers that you can use out of the box:

   - \`@State\`: Manages state in SwiftUI views.
   - \`@Published\`: Automatically publishes property changes in Combine publishers.
   - \`@Environment\`: Retrieves values from the SwiftUI environment.
   - \`@Binding\`: Facilitates two-way binding between SwiftUI views and their data.

## 5. Custom Property Wrappers

You can also create your custom property wrappers tailored to your specific requirements. This allows you to encapsulate complex logic and behavior within a reusable component.

## 6. Benefits of Property Wrappers

   - **Encapsulation:** Property wrappers encapsulate complex behavior, promoting code reuse and maintainability.
   - **Readability:** By abstracting implementation details, property wrappers enhance the readability of your code.
   - **Flexibility:** Property wrappers offer a flexible mechanism for adding custom behavior to properties, adapting to diverse use cases.

## 7. Best Practices

When using property wrappers, consider the following best practices:

   - **Naming:** Choose descriptive names for your property wrappers to convey their purpose effectively.
   - **Documentation:** Document the behavior and usage of your property wrappers to aid other developers in understanding your code.
   - **Testing:** Write unit tests to ensure the correctness and robustness of your property wrapper implementations.

## 8. Conclusion

Property wrappers are a versatile and powerful feature in Swift, enabling you to encapsulate behavior, enhance readability, and streamline your code. By leveraging property wrappers effectively, you can write cleaner, more expressive code and unlock new possibilities in Swift programming.

Whether you're working on SwiftUI views, Combine publishers, or any other Swift project, property wrappers offer a valuable toolset for building robust and maintainable applications. Embrace the power of property wrappers and elevate your Swift programming experience to new heights.
`,aw=`---
date: 2022-12-14 14:32
description: My notes about array in Swift and why they are so powerful.
tags: swift, data structure
---
# Swift Array: a Powerful Data Structure

Arrays stand as the cornerstone of data structures, ubiquitous across programming languages, including Swift. These versatile structures facilitate the storage and retrieval of elements through sequential integers known as indices or indexes. Here's an in-depth exploration of Swift arrays:

## 1. Versatility in Data Types

One of the key strengths of arrays in Swift is their ability to accommodate a wide range of data types, from fundamental types like integers and strings to complex types such as classes.

\`\`\`swift
let ints = [Int]()
let strings = [String]()
let people = [Person]()
let arrays = [[Int]]()
\`\`\`

## 2. Dynamic Sizing

Unlike some other languages, Swift arrays do not require a predefined size upon initialization. This flexibility simplifies array management and removes the need to specify a fixed capacity. In many other languages, when initialize an array, we need give it an initial size, e.g in C++

\`\`\`cpp
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
int myNum[3] = {10, 20, 30};
\`\`\`

## 3. Efficient Random Access

Swift arrays excel in providing efficient random access to elements, a feature absent in data structures like linked lists, stacks, and queues. Regardless of array size, accessing elements remains a constant-time operation (\`O(1)\`).

\`\`\`swift
var array = [1, 2, 3, 4, 5]

// Random access: O(1)
let element = array[2]
print(element) // "3"

// Modification: O(1)
array[3] = 6
print(array) // [1, 2, 3, 6, 5]
\`\`\`

## Conclusion

Swift arrays emerge as versatile and efficient data structures, capable of accommodating diverse data types while offering dynamic sizing and swift random access. Their ability to provide constant-time access and modification operations makes them indispensable for a wide array of programming tasks. Understanding and leveraging the power of Swift arrays can significantly enhance your coding experience and productivity.
`,iw=`---
date: 2023-03-10 20:32
description: Explore SwiftUI's built-in property wrappers and demonstrate how they can enhance your app development experience.
tags: swiftui
image: /images/blog/swiftui's-built-in-property-wrapper.webp
---
# SwiftUI's Built-in Property Wrappers: Simplifying State Management

SwiftUI's built-in property wrappers offer a streamlined approach to managing state and data flow within your app. These wrappers encapsulate common functionality and enable you to write cleaner, more concise code. In this article, we'll explore SwiftUI's built-in property wrappers and demonstrate how they can enhance your app development experience.

## @State: Managing Mutable State

The \`@State\` property wrapper is one of the fundamental building blocks of SwiftUI. It allows you to declare a mutable state within a view, which SwiftUI manages and updates automatically. Here's a simple example:

\`\`\`swift
struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        Button(action: {
            count += 1
        }) {
            Text("Increment")
        }
    }
}
\`\`\`

In this example, \`@State\` is used to declare the \`count\` variable, which tracks the number of button taps. Whenever the button is tapped, SwiftUI automatically updates the view to reflect the new value of \`count\`.

## @Binding: Sharing State Between Views

The \`@Binding\` property wrapper allows you to create a two-way binding between a property in one view and its source of truth in another view. This enables changes made in one view to be reflected in another view. Here's how it works:

\`\`\`swift
struct DetailView: View {
    @Binding var count: Int
    
    var body: some View {
        Text("Count: \\(count)")
    }
}

struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Main View: \\(count)")
            DetailView(count: $count)
        }
    }
}
\`\`\`

In this example, the \`DetailView\` displays the value of \`count\` from the \`ContentView\`, and any changes made to \`count\` in \`DetailView\` will be reflected in \`ContentView\`.

## @ObservedObject and @EnvironmentObject: Managing External State

The \`@ObservedObject\` and \`@EnvironmentObject\` property wrappers are used to manage external state within SwiftUI views. They allow you to observe changes to an object and react accordingly. Here's a brief overview:

- \`@ObservedObject\`: Used to observe changes to an instance of an \`ObservableObject\` class or struct within a view.
- \`@EnvironmentObject\`: Similar to \`@ObservedObject\`, but allows you to inject an object into the environment of a view hierarchy, making it accessible to all child views.

## Conclusion

SwiftUI's built-in property wrappers are powerful tools for managing state and data flow within your app. By leveraging \`@State\`, \`@Binding\`, \`@ObservedObject\`, and \`@EnvironmentObject\`, you can create dynamic, responsive user interfaces with minimal effort. Experiment with these property wrappers in your own projects to unlock their full potential and streamline your SwiftUI development workflow. Happy coding!
`,rw=`---
date: 2024-11-22 14:32
description: Simple way to implement independent language settings in SwiftUI.
tags: ios, swiftui
image: /images/blog/swiftui-independent-language-settings.webp
---
# Independent Language Settings in SwiftUI (Without Changing iPhone System Language)

Many iOS apps rely on the device's system language.\\
However, sometimes users want to choose a **different language inside
the app** without changing their entire iPhone language.

For example:

-   iPhone language: English
-   App language: Arabic

In this article, I will show a **simple way to implement independent
language settings in SwiftUI** using a \`LanguageManager\`.

The idea is:

1.  Store the selected language in \`UserDefaults\`
2.  Manage the language using a centralized manager
3.  Inject the manager into the SwiftUI environment
4.  Update \`Locale\` and \`LayoutDirection\` dynamically

------------------------------------------------------------------------

# 1. Inject the Language Manager into the App Environment

First, create the manager and inject it into the environment so it can
be accessed anywhere in the app.

\`\`\` swift
@Bindable private var languageManager = LanguageManager()

var body: some Scene {
    WindowGroup {
        MainView()
            .environment(languageManager)
            .environment(\\.locale, languageManager.locale)
            .environment(\\.layoutDirection, languageManager.layoutDirection)
    }
}
\`\`\`

Now every view can access the language manager using:

\`\`\` swift
@Environment(LanguageManager.self) private var languageManager
\`\`\`

------------------------------------------------------------------------

# 2. Create the LanguageManager

The \`LanguageManager\` is responsible for:

-   storing the current language
-   updating \`Locale\`
-   updating \`LayoutDirection\` (important for RTL languages like Arabic)

\`\`\` swift
@MainActor
@Observable
final class LanguageManager {

    var locale: Locale
    var layoutDirection: LayoutDirection

    private(set) var currentLanguage: LanguageType {
        get { GetCurrentLanguage.value }
        set {
            GetCurrentLanguage.value = newValue
            updateState(for: newValue)
        }
    }

    init() {
        let localeString = GetCurrentLanguage.value.rawValue
        locale = Locale(identifier: localeString)
        layoutDirection = LanguageType(rawValue: localeString) == .arabic
            ? .rightToLeft
            : .leftToRight
    }

    func setLanguage(_ language: LanguageType) {
        guard currentLanguage != language else { return }
        currentLanguage = language
    }

    private func updateState(for language: LanguageType) {
        locale = Locale(identifier: language.rawValue)
        layoutDirection = language == .arabic
            ? .rightToLeft
            : .leftToRight
    }
}
\`\`\`

Key points:

-   \`@Observable\` allows SwiftUI to automatically update views
-   \`Locale\` controls localization
-   \`LayoutDirection\` ensures proper RTL support

------------------------------------------------------------------------

# 3. Persist Language Using UserDefaults

Next, we store the selected language so it persists between app
launches.

\`\`\` swift
struct GetCurrentLanguage {
    private init() {}

    static var value: LanguageType {
        get {
            let localeString = UserDefaults.standard.string(forKey: "AppLanguage") ?? "en"
            return LanguageType(rawValue: localeString) ?? .english
        }
        set {
            UserDefaults.standard.set(newValue.rawValue, forKey: "AppLanguage")
        }
    }
}
\`\`\`

This ensures that when the app restarts, it remembers the user's
language preference.

------------------------------------------------------------------------

# 4. Define Supported Languages

Create an enum to represent the supported languages.

\`\`\` swift
enum LanguageType: String {
    case english = "en"
    case arabic = "ar"
}
\`\`\`

You can easily add more languages later.

Example:

\`\`\` swift
case indonesian = "id"
case french = "fr"
\`\`\`

------------------------------------------------------------------------

# 5. Access the Language Manager in Any View

Now any view can access and change the language.

\`\`\` swift
@Environment(LanguageManager.self) private var languageManager
\`\`\`

Example usage:

\`\`\` swift
Button("Switch to Arabic") {
    languageManager.setLanguage(.arabic)
}
\`\`\`

When the language changes:

-   \`Locale\` updates
-   \`LayoutDirection\` updates
-   SwiftUI views automatically refresh

------------------------------------------------------------------------

# 6. Supporting Right-to-Left Languages

Languages like Arabic require **RTL layout direction**.

This is why the manager also controls:

\`\`\` swift
LayoutDirection.rightToLeft
\`\`\`

Without this, the UI layout would remain left-to-right and look
incorrect.

------------------------------------------------------------------------

# Why This Approach Works Well

Advantages of this pattern:

✅ Users can change language inside the app\\
✅ No need to change iPhone system language\\
✅ Works naturally with SwiftUI\\
✅ Supports RTL languages\\
✅ Centralized language management

------------------------------------------------------------------------

# Final Thoughts

Handling localization in SwiftUI becomes much easier when using a
**dedicated language manager**.\\
This pattern keeps your code clean and allows the app to support
**dynamic language switching**.

If you're building international apps, this approach gives you **full
control over localization behavior** while keeping SwiftUI reactive and
simple.
`;function lw(t){const i=t.match(/^---\r?\n([\s\S]*?)\r?\n---/);if(!i)return{meta:{},content:t};const r={};for(const l of i[1].split(`
`)){const u=l.indexOf(":");if(u===-1)continue;const o=l.slice(0,u).trim(),c=l.slice(u+1).trim();o&&(r[o]=c)}return{meta:r,content:t.slice(i[0].length).trim()}}const sw=Object.assign({"../blog/how-to-create-tagview-similar-to-flexboxs-flex-wrap-property-in-swift.md":tw,"../blog/property-wrappers-in-swift.md":nw,"../blog/swift-array-a-powerful-data-structure.md":aw,"../blog/swiftui's-built-in-property-wrapper.md":iw,"../blog/swiftui-independent-language-settings.md":rw});function Rg(t,i){const{meta:r,content:l}=lw(i),u=l.match(/^#\s+(.+)/m),o=u?u[1]:t;return{slug:t,title:o,date:r.date?r.date.split(" ")[0]:"",tags:r.tags?r.tags.split(",").map(c=>c.trim()):[],content:l,image:r.image||void 0,description:r.description||void 0}}const gb=[],yb=new Map;for(const[t,i]of Object.entries(sw)){const r=t.split("/").pop();if(r.endsWith(".id.md")){const l=r.replace(".id.md","");yb.set(l,Rg(l,i))}else gb.push(Rg(r.replace(".md",""),i))}const ld=gb.sort((t,i)=>t.date<i.date?1:t.date>i.date?-1:0);function Md(t){return t==="en"?ld:ld.map(i=>yb.get(i.slug)??{...i,isFallback:!0})}function ow(t,i){return Md(i).find(r=>r.slug===t)}function Bg(){const{locale:t,t:i,path:r}=Qt(),l=Md(t),u=l.slice(0,3),o=[{to:"/dsa",emoji:"🧮",title:i.home.dsaTitle,description:i.home.dsaDescription,count:Qs.length,unit:i.home.dsaUnit},{to:"/patterns",emoji:"🧩",title:i.home.patternsTitle,description:i.home.patternsDescription,count:Nd.length,unit:i.home.patternsUnit},{to:"/oop",emoji:"🏗️",title:i.home.oopTitle,description:i.home.oopDescription,count:Ld.length,unit:i.home.oopUnit},{to:"/articles",emoji:"📝",title:i.home.articlesTitle,description:i.home.articlesDescription,count:l.length,unit:i.home.articlesUnit}];return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-12 pb-16",children:[v.jsxs(gn,{children:[v.jsx("title",{children:Qe}),v.jsx("meta",{name:"description",content:i.site.description}),v.jsx("meta",{property:"og:title",content:Qe}),v.jsx("meta",{property:"og:description",content:i.site.description}),v.jsx("meta",{property:"og:type",content:"website"}),v.jsx("meta",{name:"twitter:card",content:"summary"}),v.jsx("meta",{name:"twitter:title",content:Qe}),v.jsx("meta",{name:"twitter:description",content:i.site.description})]}),v.jsxs("section",{className:"text-center space-y-3",children:[v.jsx("h1",{className:"text-3xl font-bold",children:Qe}),v.jsx("p",{className:"text-textSecondary leading-relaxed",children:i.home.hero})]}),v.jsx("section",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:o.map(c=>v.jsx(st,{to:r(c.to),className:"group",children:v.jsxs("div",{className:"h-full bg-cardBackground border border-cardBorder rounded-xl p-4 hover:border-accent transition-colors space-y-2",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-xl",children:c.emoji}),v.jsx("span",{className:"font-semibold text-textPrimary group-hover:text-accent transition-colors",children:c.title})]}),v.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full border bg-accent/10 text-accent border-accent/30 whitespace-nowrap",children:[c.count," ",c.unit]})]}),v.jsx("p",{className:"text-textSecondary text-sm leading-relaxed",children:c.description})]})},c.to))}),u.length>0&&v.jsxs("section",{children:[v.jsxs("div",{className:"flex items-baseline justify-between mb-4",children:[v.jsx("h2",{className:"text-xl font-semibold",children:i.home.latestArticles}),v.jsx(st,{to:r("/articles"),className:"text-sm text-textTertiary hover:text-accent transition-colors",children:i.home.viewAll})]}),v.jsx("ul",{className:"space-y-3",children:u.map(c=>v.jsx("li",{children:v.jsx(st,{to:r(`/articles/${c.slug}`),className:"group block",children:v.jsxs("div",{className:"bg-cardBackground border border-cardBorder rounded-lg p-4 hover:border-accent transition-colors",children:[v.jsx("h3",{className:"font-semibold text-textPrimary group-hover:text-accent transition-colors",children:c.title}),c.description&&v.jsx("p",{className:"text-textSecondary text-sm mt-1 line-clamp-2",children:c.description}),c.date&&v.jsx("p",{className:"text-textTertiary text-xs mt-2",children:c.date})]})})},c.slug))})]})]})}function Ug(t){const i=[],r=String(t||"");let l=r.indexOf(","),u=0,o=!1;for(;!o;){l===-1&&(l=r.length,o=!0);const c=r.slice(u,l).trim();(c||!o)&&i.push(c),u=l+1,l=r.indexOf(",",u)}return i}function uw(t,i){const r={};return(t[t.length-1]===""?[...t,""]:t).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const cw=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,dw=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,fw={};function Ig(t,i){return(fw.jsx?dw:cw).test(t)}const pw=/[ \t\n\f\r]/g;function mw(t){return typeof t=="object"?t.type==="text"?Pg(t.value):!1:Pg(t)}function Pg(t){return t.replace(pw,"")===""}class ol{constructor(i,r,l){this.normal=r,this.property=i,l&&(this.space=l)}}ol.prototype.normal={};ol.prototype.property={};ol.prototype.space=void 0;function bb(t,i){const r={},l={};for(const u of t)Object.assign(r,u.property),Object.assign(l,u.normal);return new ol(r,l,i)}function al(t){return t.toLowerCase()}class Ut{constructor(i,r){this.attribute=r,this.property=i}}Ut.prototype.attribute="";Ut.prototype.booleanish=!1;Ut.prototype.boolean=!1;Ut.prototype.commaOrSpaceSeparated=!1;Ut.prototype.commaSeparated=!1;Ut.prototype.defined=!1;Ut.prototype.mustUseProperty=!1;Ut.prototype.number=!1;Ut.prototype.overloadedBoolean=!1;Ut.prototype.property="";Ut.prototype.spaceSeparated=!1;Ut.prototype.space=void 0;let hw=0;const Se=Va(),lt=Va(),sd=Va(),W=Va(),Ye=Va(),qi=Va(),$t=Va();function Va(){return 2**++hw}const od=Object.freeze(Object.defineProperty({__proto__:null,boolean:Se,booleanish:lt,commaOrSpaceSeparated:$t,commaSeparated:qi,number:W,overloadedBoolean:sd,spaceSeparated:Ye},Symbol.toStringTag,{value:"Module"})),Lc=Object.keys(od);class zd extends Ut{constructor(i,r,l,u){let o=-1;if(super(i,r),qg(this,"space",u),typeof l=="number")for(;++o<Lc.length;){const c=Lc[o];qg(this,Lc[o],(l&od[c])===od[c])}}}zd.prototype.defined=!0;function qg(t,i,r){r&&(t[i]=r)}function $i(t){const i={},r={};for(const[l,u]of Object.entries(t.properties)){const o=new zd(l,t.transform(t.attributes||{},l),u,t.space);t.mustUseProperty&&t.mustUseProperty.includes(l)&&(o.mustUseProperty=!0),i[l]=o,r[al(l)]=l,r[al(o.attribute)]=l}return new ol(i,r,t.space)}const vb=$i({properties:{ariaActiveDescendant:null,ariaAtomic:lt,ariaAutoComplete:null,ariaBusy:lt,ariaChecked:lt,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:lt,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:lt,ariaFlowTo:Ye,ariaGrabbed:lt,ariaHasPopup:null,ariaHidden:lt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:W,ariaLive:null,ariaModal:lt,ariaMultiLine:lt,ariaMultiSelectable:lt,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:lt,ariaReadOnly:lt,ariaRelevant:null,ariaRequired:lt,ariaRoleDescription:Ye,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:lt,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null},transform(t,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function xb(t,i){return i in t?t[i]:i}function Sb(t,i){return xb(t,i.toLowerCase())}const gw=$i({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:qi,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:Se,allowPaymentRequest:Se,allowUserMedia:Se,alt:null,as:null,async:Se,autoCapitalize:null,autoComplete:Ye,autoFocus:Se,autoPlay:Se,blocking:Ye,capture:null,charSet:null,checked:Se,cite:null,className:Ye,cols:W,colSpan:null,content:null,contentEditable:lt,controls:Se,controlsList:Ye,coords:W|qi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Se,defer:Se,dir:null,dirName:null,disabled:Se,download:sd,draggable:lt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Se,formTarget:null,headers:Ye,height:W,hidden:sd,high:W,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:Se,inputMode:null,integrity:null,is:null,isMap:Se,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:Se,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Se,low:W,manifest:null,max:null,maxLength:W,media:null,method:null,min:null,minLength:W,multiple:Se,muted:Se,name:null,nonce:null,noModule:Se,noValidate:Se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Se,optimum:W,pattern:null,ping:Ye,placeholder:null,playsInline:Se,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Se,referrerPolicy:null,rel:Ye,required:Se,reversed:Se,rows:W,rowSpan:W,sandbox:Ye,scope:null,scoped:Se,seamless:Se,selected:Se,shadowRootClonable:Se,shadowRootDelegatesFocus:Se,shadowRootMode:null,shape:null,size:W,sizes:null,slot:null,span:W,spellCheck:lt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:W,step:null,style:null,tabIndex:W,target:null,title:null,translate:null,type:null,typeMustMatch:Se,useMap:null,value:lt,width:W,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:W,borderColor:null,bottomMargin:W,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Se,declare:Se,event:null,face:null,frame:null,frameBorder:null,hSpace:W,leftMargin:W,link:null,longDesc:null,lowSrc:null,marginHeight:W,marginWidth:W,noResize:Se,noHref:Se,noShade:Se,noWrap:Se,object:null,profile:null,prompt:null,rev:null,rightMargin:W,rules:null,scheme:null,scrolling:lt,standby:null,summary:null,text:null,topMargin:W,valueType:null,version:null,vAlign:null,vLink:null,vSpace:W,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Se,disableRemotePlayback:Se,prefix:null,property:null,results:W,security:null,unselectable:null},space:"html",transform:Sb}),yw=$i({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:$t,accentHeight:W,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:W,amplitude:W,arabicForm:null,ascent:W,attributeName:null,attributeType:null,azimuth:W,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:W,by:null,calcMode:null,capHeight:W,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:W,diffuseConstant:W,direction:null,display:null,dur:null,divisor:W,dominantBaseline:null,download:Se,dx:null,dy:null,edgeMode:null,editable:null,elevation:W,enableBackground:null,end:null,event:null,exponent:W,externalResourcesRequired:null,fill:null,fillOpacity:W,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:qi,g2:qi,glyphName:qi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:W,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:W,horizOriginX:W,horizOriginY:W,id:null,ideographic:W,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:W,k:W,k1:W,k2:W,k3:W,k4:W,kernelMatrix:$t,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:W,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:W,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:W,overlineThickness:W,paintOrder:null,panose1:null,path:null,pathLength:W,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:W,pointsAtY:W,pointsAtZ:W,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:$t,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:$t,rev:$t,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:$t,requiredFeatures:$t,requiredFonts:$t,requiredFormats:$t,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:W,specularExponent:W,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:W,strikethroughThickness:W,string:null,stroke:null,strokeDashArray:$t,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:W,strokeOpacity:W,strokeWidth:null,style:null,surfaceScale:W,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:$t,tabIndex:W,tableValues:null,target:null,targetX:W,targetY:W,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:$t,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:W,underlineThickness:W,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:W,values:null,vAlphabetic:W,vMathematical:W,vectorEffect:null,vHanging:W,vIdeographic:W,version:null,vertAdvY:W,vertOriginX:W,vertOriginY:W,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:W,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:xb}),kb=$i({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,i){return"xlink:"+i.slice(5).toLowerCase()}}),wb=$i({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Sb}),Ab=$i({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,i){return"xml:"+i.slice(3).toLowerCase()}}),bw={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},vw=/[A-Z]/g,Hg=/-[a-z]/g,xw=/^data[-\w.:]+$/i;function jb(t,i){const r=al(i);let l=i,u=Ut;if(r in t.normal)return t.property[t.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&xw.test(i)){if(i.charAt(4)==="-"){const o=i.slice(5).replace(Hg,kw);l="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=i.slice(4);if(!Hg.test(o)){let c=o.replace(vw,Sw);c.charAt(0)!=="-"&&(c="-"+c),i="data"+c}}u=zd}return new u(l,i)}function Sw(t){return"-"+t.toLowerCase()}function kw(t){return t.charAt(1).toUpperCase()}const Tb=bb([vb,gw,kb,wb,Ab],"html"),Xs=bb([vb,yw,kb,wb,Ab],"svg");function Fg(t){const i=String(t||"").trim();return i?i.split(/[ \t\n\r\f]+/g):[]}function ww(t){return t.join(" ").trim()}var zi={},Mc,Vg;function Aw(){if(Vg)return Mc;Vg=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,r=/^\s*/,l=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,u=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,p=/^\s+|\s+$/g,m=`
`,h="/",g="*",y="",S="comment",x="declaration";function A(_,E){if(typeof _!="string")throw new TypeError("First argument must be a string");if(!_)return[];E=E||{};var q=1,U=1;function K(ae){var Z=ae.match(i);Z&&(q+=Z.length);var B=ae.lastIndexOf(m);U=~B?ae.length-B:U+ae.length}function te(){var ae={line:q,column:U};return function(Z){return Z.position=new D(ae),de(),Z}}function D(ae){this.start=ae,this.end={line:q,column:U},this.source=E.source}D.prototype.content=_;function $(ae){var Z=new Error(E.source+":"+q+":"+U+": "+ae);if(Z.reason=ae,Z.filename=E.source,Z.line=q,Z.column=U,Z.source=_,!E.silent)throw Z}function le(ae){var Z=ae.exec(_);if(Z){var B=Z[0];return K(B),_=_.slice(B.length),Z}}function de(){le(r)}function R(ae){var Z;for(ae=ae||[];Z=ee();)Z!==!1&&ae.push(Z);return ae}function ee(){var ae=te();if(!(h!=_.charAt(0)||g!=_.charAt(1))){for(var Z=2;y!=_.charAt(Z)&&(g!=_.charAt(Z)||h!=_.charAt(Z+1));)++Z;if(Z+=2,y===_.charAt(Z-1))return $("End of comment missing");var B=_.slice(2,Z-2);return U+=2,K(B),_=_.slice(Z),U+=2,ae({type:S,comment:B})}}function J(){var ae=te(),Z=le(l);if(Z){if(ee(),!le(u))return $("property missing ':'");var B=le(o),Q=ae({type:x,property:L(Z[0].replace(t,y)),value:B?L(B[0].replace(t,y)):y});return le(c),Q}}function re(){var ae=[];R(ae);for(var Z;Z=J();)Z!==!1&&(ae.push(Z),R(ae));return ae}return de(),re()}function L(_){return _?_.replace(p,y):y}return Mc=A,Mc}var Gg;function jw(){if(Gg)return zi;Gg=1;var t=zi&&zi.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(zi,"__esModule",{value:!0}),zi.default=r;const i=t(Aw());function r(l,u){let o=null;if(!l||typeof l!="string")return o;const c=(0,i.default)(l),p=typeof u=="function";return c.forEach(m=>{if(m.type!=="declaration")return;const{property:h,value:g}=m;p?u(h,g,m):g&&(o=o||{},o[h]=g)}),o}return zi}var $r={},Yg;function Tw(){if(Yg)return $r;Yg=1,Object.defineProperty($r,"__esModule",{value:!0}),$r.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,r=/^[^-]+$/,l=/^-(webkit|moz|ms|o|khtml)-/,u=/^-(ms)-/,o=function(h){return!h||r.test(h)||t.test(h)},c=function(h,g){return g.toUpperCase()},p=function(h,g){return"".concat(g,"-")},m=function(h,g){return g===void 0&&(g={}),o(h)?h:(h=h.toLowerCase(),g.reactCompat?h=h.replace(u,p):h=h.replace(l,p),h.replace(i,c))};return $r.camelCase=m,$r}var Kr,$g;function Cw(){if($g)return Kr;$g=1;var t=Kr&&Kr.__importDefault||function(u){return u&&u.__esModule?u:{default:u}},i=t(jw()),r=Tw();function l(u,o){var c={};return!u||typeof u!="string"||(0,i.default)(u,function(p,m){p&&m&&(c[(0,r.camelCase)(p,o)]=m)}),c}return l.default=l,Kr=l,Kr}var Ew=Cw();const Ow=Fi(Ew),Cb=Eb("end"),Rd=Eb("start");function Eb(t){return i;function i(r){const l=r&&r.position&&r.position[t]||{};if(typeof l.line=="number"&&l.line>0&&typeof l.column=="number"&&l.column>0)return{line:l.line,column:l.column,offset:typeof l.offset=="number"&&l.offset>-1?l.offset:void 0}}}function _w(t){const i=Rd(t),r=Cb(t);if(i&&r)return{start:i,end:r}}function Zr(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Kg(t.position):"start"in t||"end"in t?Kg(t):"line"in t||"column"in t?ud(t):""}function ud(t){return Qg(t&&t.line)+":"+Qg(t&&t.column)}function Kg(t){return ud(t&&t.start)+"-"+ud(t&&t.end)}function Qg(t){return t&&typeof t=="number"?t:1}class wt extends Error{constructor(i,r,l){super(),typeof r=="string"&&(l=r,r=void 0);let u="",o={},c=!1;if(r&&("line"in r&&"column"in r?o={place:r}:"start"in r&&"end"in r?o={place:r}:"type"in r?o={ancestors:[r],place:r.position}:o={...r}),typeof i=="string"?u=i:!o.cause&&i&&(c=!0,u=i.message,o.cause=i),!o.ruleId&&!o.source&&typeof l=="string"){const m=l.indexOf(":");m===-1?o.ruleId=l:(o.source=l.slice(0,m),o.ruleId=l.slice(m+1))}if(!o.place&&o.ancestors&&o.ancestors){const m=o.ancestors[o.ancestors.length-1];m&&(o.place=m.position)}const p=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=p?p.column:void 0,this.fatal=void 0,this.file="",this.message=u,this.line=p?p.line:void 0,this.name=Zr(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=c&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}wt.prototype.file="";wt.prototype.name="";wt.prototype.reason="";wt.prototype.message="";wt.prototype.stack="";wt.prototype.column=void 0;wt.prototype.line=void 0;wt.prototype.ancestors=void 0;wt.prototype.cause=void 0;wt.prototype.fatal=void 0;wt.prototype.place=void 0;wt.prototype.ruleId=void 0;wt.prototype.source=void 0;const Bd={}.hasOwnProperty,Dw=new Map,Nw=/[A-Z]/g,Lw=new Set(["table","tbody","thead","tfoot","tr"]),Mw=new Set(["td","th"]),Ob="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function zw(t,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=i.filePath||void 0;let l;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");l=Fw(r,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");l=Hw(r,i.jsx,i.jsxs)}const u={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:l,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?Xs:Tb,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},o=_b(u,t,void 0);return o&&typeof o!="string"?o:u.create(t,u.Fragment,{children:o||void 0},void 0)}function _b(t,i,r){if(i.type==="element")return Rw(t,i,r);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return Bw(t,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return Iw(t,i,r);if(i.type==="mdxjsEsm")return Uw(t,i);if(i.type==="root")return Pw(t,i,r);if(i.type==="text")return qw(t,i)}function Rw(t,i,r){const l=t.schema;let u=l;i.tagName.toLowerCase()==="svg"&&l.space==="html"&&(u=Xs,t.schema=u),t.ancestors.push(i);const o=Nb(t,i.tagName,!1),c=Vw(t,i);let p=Id(t,i);return Lw.has(i.tagName)&&(p=p.filter(function(m){return typeof m=="string"?!mw(m):!0})),Db(t,c,o,i),Ud(c,p),t.ancestors.pop(),t.schema=l,t.create(i,o,c,r)}function Bw(t,i){if(i.data&&i.data.estree&&t.evaluater){const l=i.data.estree.body[0];return l.type,t.evaluater.evaluateExpression(l.expression)}il(t,i.position)}function Uw(t,i){if(i.data&&i.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(i.data.estree);il(t,i.position)}function Iw(t,i,r){const l=t.schema;let u=l;i.name==="svg"&&l.space==="html"&&(u=Xs,t.schema=u),t.ancestors.push(i);const o=i.name===null?t.Fragment:Nb(t,i.name,!0),c=Gw(t,i),p=Id(t,i);return Db(t,c,o,i),Ud(c,p),t.ancestors.pop(),t.schema=l,t.create(i,o,c,r)}function Pw(t,i,r){const l={};return Ud(l,Id(t,i)),t.create(i,t.Fragment,l,r)}function qw(t,i){return i.value}function Db(t,i,r,l){typeof r!="string"&&r!==t.Fragment&&t.passNode&&(i.node=l)}function Ud(t,i){if(i.length>0){const r=i.length>1?i:i[0];r&&(t.children=r)}}function Hw(t,i,r){return l;function l(u,o,c,p){const h=Array.isArray(c.children)?r:i;return p?h(o,c,p):h(o,c)}}function Fw(t,i){return r;function r(l,u,o,c){const p=Array.isArray(o.children),m=Rd(l);return i(u,o,c,p,{columnNumber:m?m.column-1:void 0,fileName:t,lineNumber:m?m.line:void 0},void 0)}}function Vw(t,i){const r={};let l,u;for(u in i.properties)if(u!=="children"&&Bd.call(i.properties,u)){const o=Yw(t,u,i.properties[u]);if(o){const[c,p]=o;t.tableCellAlignToStyle&&c==="align"&&typeof p=="string"&&Mw.has(i.tagName)?l=p:r[c]=p}}if(l){const o=r.style||(r.style={});o[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=l}return r}function Gw(t,i){const r={};for(const l of i.attributes)if(l.type==="mdxJsxExpressionAttribute")if(l.data&&l.data.estree&&t.evaluater){const o=l.data.estree.body[0];o.type;const c=o.expression;c.type;const p=c.properties[0];p.type,Object.assign(r,t.evaluater.evaluateExpression(p.argument))}else il(t,i.position);else{const u=l.name;let o;if(l.value&&typeof l.value=="object")if(l.value.data&&l.value.data.estree&&t.evaluater){const p=l.value.data.estree.body[0];p.type,o=t.evaluater.evaluateExpression(p.expression)}else il(t,i.position);else o=l.value===null?!0:l.value;r[u]=o}return r}function Id(t,i){const r=[];let l=-1;const u=t.passKeys?new Map:Dw;for(;++l<i.children.length;){const o=i.children[l];let c;if(t.passKeys){const m=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(m){const h=u.get(m)||0;c=m+"-"+h,u.set(m,h+1)}}const p=_b(t,o,c);p!==void 0&&r.push(p)}return r}function Yw(t,i,r){const l=jb(t.schema,i);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=l.commaSeparated?uw(r):ww(r)),l.property==="style"){let u=typeof r=="object"?r:$w(t,String(r));return t.stylePropertyNameCase==="css"&&(u=Kw(u)),["style",u]}return[t.elementAttributeNameCase==="react"&&l.space?bw[l.property]||l.property:l.attribute,r]}}function $w(t,i){try{return Ow(i,{reactCompat:!0})}catch(r){if(t.ignoreInvalidStyle)return{};const l=r,u=new wt("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:l,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw u.file=t.filePath||void 0,u.url=Ob+"#cannot-parse-style-attribute",u}}function Nb(t,i,r){let l;if(!r)l={type:"Literal",value:i};else if(i.includes(".")){const u=i.split(".");let o=-1,c;for(;++o<u.length;){const p=Ig(u[o])?{type:"Identifier",name:u[o]}:{type:"Literal",value:u[o]};c=c?{type:"MemberExpression",object:c,property:p,computed:!!(o&&p.type==="Literal"),optional:!1}:p}l=c}else l=Ig(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(l.type==="Literal"){const u=l.value;return Bd.call(t.components,u)?t.components[u]:u}if(t.evaluater)return t.evaluater.evaluateExpression(l);il(t)}function il(t,i){const r=new wt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=Ob+"#cannot-handle-mdx-estrees-without-createevaluater",r}function Kw(t){const i={};let r;for(r in t)Bd.call(t,r)&&(i[Qw(r)]=t[r]);return i}function Qw(t){let i=t.replace(Nw,Xw);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function Xw(t){return"-"+t.toLowerCase()}const zc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Zw={};function Pd(t,i){const r=Zw,l=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,u=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return Lb(t,l,u)}function Lb(t,i,r){if(Ww(t)){if("value"in t)return t.type==="html"&&!r?"":t.value;if(i&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Xg(t.children,i,r)}return Array.isArray(t)?Xg(t,i,r):""}function Xg(t,i,r){const l=[];let u=-1;for(;++u<t.length;)l[u]=Lb(t[u],i,r);return l.join("")}function Ww(t){return!!(t&&typeof t=="object")}const Zg=document.createElement("i");function rl(t){const i="&"+t+";";Zg.innerHTML=i;const r=Zg.textContent;return r.charCodeAt(r.length-1)===59&&t!=="semi"||r===i?!1:r}function Kt(t,i,r,l){const u=t.length;let o=0,c;if(i<0?i=-i>u?0:u+i:i=i>u?u:i,r=r>0?r:0,l.length<1e4)c=Array.from(l),c.unshift(i,r),t.splice(...c);else for(r&&t.splice(i,r);o<l.length;)c=l.slice(o,o+1e4),c.unshift(i,0),t.splice(...c),o+=1e4,i+=1e4}function on(t,i){return t.length>0?(Kt(t,t.length,0,i),t):i}const Wg={}.hasOwnProperty;function Mb(t){const i={};let r=-1;for(;++r<t.length;)Jw(i,t[r]);return i}function Jw(t,i){let r;for(r in i){const u=(Wg.call(t,r)?t[r]:void 0)||(t[r]={}),o=i[r];let c;if(o)for(c in o){Wg.call(u,c)||(u[c]=[]);const p=o[c];e0(u[c],Array.isArray(p)?p:p?[p]:[])}}}function e0(t,i){let r=-1;const l=[];for(;++r<i.length;)(i[r].add==="after"?t:l).push(i[r]);Kt(t,0,0,l)}function zb(t,i){const r=Number.parseInt(t,i);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function hn(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Ct=ka(/[A-Za-z]/),kt=ka(/[\dA-Za-z]/),t0=ka(/[#-'*+\--9=?A-Z^-~]/);function Fs(t){return t!==null&&(t<32||t===127)}const cd=ka(/\d/),n0=ka(/[\dA-Fa-f]/),a0=ka(/[!-/:-@[-`{-~]/);function me(t){return t!==null&&t<-2}function Ge(t){return t!==null&&(t<0||t===32)}function Te(t){return t===-2||t===-1||t===32}const Zs=ka(new RegExp("\\p{P}|\\p{S}","u")),Fa=ka(/\s/);function ka(t){return i;function i(r){return r!==null&&r>-1&&t.test(String.fromCharCode(r))}}function Ki(t){const i=[];let r=-1,l=0,u=0;for(;++r<t.length;){const o=t.charCodeAt(r);let c="";if(o===37&&kt(t.charCodeAt(r+1))&&kt(t.charCodeAt(r+2)))u=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(c=String.fromCharCode(o));else if(o>55295&&o<57344){const p=t.charCodeAt(r+1);o<56320&&p>56319&&p<57344?(c=String.fromCharCode(o,p),u=1):c="�"}else c=String.fromCharCode(o);c&&(i.push(t.slice(l,r),encodeURIComponent(c)),l=r+u+1,c=""),u&&(r+=u,u=0)}return i.join("")+t.slice(l)}function _e(t,i,r,l){const u=l?l-1:Number.POSITIVE_INFINITY;let o=0;return c;function c(m){return Te(m)?(t.enter(r),p(m)):i(m)}function p(m){return Te(m)&&o++<u?(t.consume(m),p):(t.exit(r),i(m))}}const i0={tokenize:r0};function r0(t){const i=t.attempt(this.parser.constructs.contentInitial,l,u);let r;return i;function l(p){if(p===null){t.consume(p);return}return t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),_e(t,i,"linePrefix")}function u(p){return t.enter("paragraph"),o(p)}function o(p){const m=t.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=m),r=m,c(p)}function c(p){if(p===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(p);return}return me(p)?(t.consume(p),t.exit("chunkText"),o):(t.consume(p),c)}}const l0={tokenize:s0},Jg={tokenize:o0};function s0(t){const i=this,r=[];let l=0,u,o,c;return p;function p(U){if(l<r.length){const K=r[l];return i.containerState=K[1],t.attempt(K[0].continuation,m,h)(U)}return h(U)}function m(U){if(l++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,u&&q();const K=i.events.length;let te=K,D;for(;te--;)if(i.events[te][0]==="exit"&&i.events[te][1].type==="chunkFlow"){D=i.events[te][1].end;break}E(l);let $=K;for(;$<i.events.length;)i.events[$][1].end={...D},$++;return Kt(i.events,te+1,0,i.events.slice(K)),i.events.length=$,h(U)}return p(U)}function h(U){if(l===r.length){if(!u)return S(U);if(u.currentConstruct&&u.currentConstruct.concrete)return A(U);i.interrupt=!!(u.currentConstruct&&!u._gfmTableDynamicInterruptHack)}return i.containerState={},t.check(Jg,g,y)(U)}function g(U){return u&&q(),E(l),S(U)}function y(U){return i.parser.lazy[i.now().line]=l!==r.length,c=i.now().offset,A(U)}function S(U){return i.containerState={},t.attempt(Jg,x,A)(U)}function x(U){return l++,r.push([i.currentConstruct,i.containerState]),S(U)}function A(U){if(U===null){u&&q(),E(0),t.consume(U);return}return u=u||i.parser.flow(i.now()),t.enter("chunkFlow",{_tokenizer:u,contentType:"flow",previous:o}),L(U)}function L(U){if(U===null){_(t.exit("chunkFlow"),!0),E(0),t.consume(U);return}return me(U)?(t.consume(U),_(t.exit("chunkFlow")),l=0,i.interrupt=void 0,p):(t.consume(U),L)}function _(U,K){const te=i.sliceStream(U);if(K&&te.push(null),U.previous=o,o&&(o.next=U),o=U,u.defineSkip(U.start),u.write(te),i.parser.lazy[U.start.line]){let D=u.events.length;for(;D--;)if(u.events[D][1].start.offset<c&&(!u.events[D][1].end||u.events[D][1].end.offset>c))return;const $=i.events.length;let le=$,de,R;for(;le--;)if(i.events[le][0]==="exit"&&i.events[le][1].type==="chunkFlow"){if(de){R=i.events[le][1].end;break}de=!0}for(E(l),D=$;D<i.events.length;)i.events[D][1].end={...R},D++;Kt(i.events,le+1,0,i.events.slice($)),i.events.length=D}}function E(U){let K=r.length;for(;K-- >U;){const te=r[K];i.containerState=te[1],te[0].exit.call(i,t)}r.length=U}function q(){u.write([null]),o=void 0,u=void 0,i.containerState._closeFlow=void 0}}function o0(t,i,r){return _e(t,t.attempt(this.parser.constructs.document,i,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Hi(t){if(t===null||Ge(t)||Fa(t))return 1;if(Zs(t))return 2}function Ws(t,i,r){const l=[];let u=-1;for(;++u<t.length;){const o=t[u].resolveAll;o&&!l.includes(o)&&(i=o(i,r),l.push(o))}return i}const dd={name:"attention",resolveAll:u0,tokenize:c0};function u0(t,i){let r=-1,l,u,o,c,p,m,h,g;for(;++r<t.length;)if(t[r][0]==="enter"&&t[r][1].type==="attentionSequence"&&t[r][1]._close){for(l=r;l--;)if(t[l][0]==="exit"&&t[l][1].type==="attentionSequence"&&t[l][1]._open&&i.sliceSerialize(t[l][1]).charCodeAt(0)===i.sliceSerialize(t[r][1]).charCodeAt(0)){if((t[l][1]._close||t[r][1]._open)&&(t[r][1].end.offset-t[r][1].start.offset)%3&&!((t[l][1].end.offset-t[l][1].start.offset+t[r][1].end.offset-t[r][1].start.offset)%3))continue;m=t[l][1].end.offset-t[l][1].start.offset>1&&t[r][1].end.offset-t[r][1].start.offset>1?2:1;const y={...t[l][1].end},S={...t[r][1].start};ey(y,-m),ey(S,m),c={type:m>1?"strongSequence":"emphasisSequence",start:y,end:{...t[l][1].end}},p={type:m>1?"strongSequence":"emphasisSequence",start:{...t[r][1].start},end:S},o={type:m>1?"strongText":"emphasisText",start:{...t[l][1].end},end:{...t[r][1].start}},u={type:m>1?"strong":"emphasis",start:{...c.start},end:{...p.end}},t[l][1].end={...c.start},t[r][1].start={...p.end},h=[],t[l][1].end.offset-t[l][1].start.offset&&(h=on(h,[["enter",t[l][1],i],["exit",t[l][1],i]])),h=on(h,[["enter",u,i],["enter",c,i],["exit",c,i],["enter",o,i]]),h=on(h,Ws(i.parser.constructs.insideSpan.null,t.slice(l+1,r),i)),h=on(h,[["exit",o,i],["enter",p,i],["exit",p,i],["exit",u,i]]),t[r][1].end.offset-t[r][1].start.offset?(g=2,h=on(h,[["enter",t[r][1],i],["exit",t[r][1],i]])):g=0,Kt(t,l-1,r-l+3,h),r=l+h.length-g-2;break}}for(r=-1;++r<t.length;)t[r][1].type==="attentionSequence"&&(t[r][1].type="data");return t}function c0(t,i){const r=this.parser.constructs.attentionMarkers.null,l=this.previous,u=Hi(l);let o;return c;function c(m){return o=m,t.enter("attentionSequence"),p(m)}function p(m){if(m===o)return t.consume(m),p;const h=t.exit("attentionSequence"),g=Hi(m),y=!g||g===2&&u||r.includes(m),S=!u||u===2&&g||r.includes(l);return h._open=!!(o===42?y:y&&(u||!S)),h._close=!!(o===42?S:S&&(g||!y)),i(m)}}function ey(t,i){t.column+=i,t.offset+=i,t._bufferIndex+=i}const d0={name:"autolink",tokenize:f0};function f0(t,i,r){let l=0;return u;function u(x){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),o}function o(x){return Ct(x)?(t.consume(x),c):x===64?r(x):h(x)}function c(x){return x===43||x===45||x===46||kt(x)?(l=1,p(x)):h(x)}function p(x){return x===58?(t.consume(x),l=0,m):(x===43||x===45||x===46||kt(x))&&l++<32?(t.consume(x),p):(l=0,h(x))}function m(x){return x===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.exit("autolink"),i):x===null||x===32||x===60||Fs(x)?r(x):(t.consume(x),m)}function h(x){return x===64?(t.consume(x),g):t0(x)?(t.consume(x),h):r(x)}function g(x){return kt(x)?y(x):r(x)}function y(x){return x===46?(t.consume(x),l=0,g):x===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.exit("autolink"),i):S(x)}function S(x){if((x===45||kt(x))&&l++<63){const A=x===45?S:y;return t.consume(x),A}return r(x)}}const ul={partial:!0,tokenize:p0};function p0(t,i,r){return l;function l(o){return Te(o)?_e(t,u,"linePrefix")(o):u(o)}function u(o){return o===null||me(o)?i(o):r(o)}}const Rb={continuation:{tokenize:h0},exit:g0,name:"blockQuote",tokenize:m0};function m0(t,i,r){const l=this;return u;function u(c){if(c===62){const p=l.containerState;return p.open||(t.enter("blockQuote",{_container:!0}),p.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(c),t.exit("blockQuoteMarker"),o}return r(c)}function o(c){return Te(c)?(t.enter("blockQuotePrefixWhitespace"),t.consume(c),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),i):(t.exit("blockQuotePrefix"),i(c))}}function h0(t,i,r){const l=this;return u;function u(c){return Te(c)?_e(t,o,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):o(c)}function o(c){return t.attempt(Rb,i,r)(c)}}function g0(t){t.exit("blockQuote")}const Bb={name:"characterEscape",tokenize:y0};function y0(t,i,r){return l;function l(o){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(o),t.exit("escapeMarker"),u}function u(o){return a0(o)?(t.enter("characterEscapeValue"),t.consume(o),t.exit("characterEscapeValue"),t.exit("characterEscape"),i):r(o)}}const Ub={name:"characterReference",tokenize:b0};function b0(t,i,r){const l=this;let u=0,o,c;return p;function p(y){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(y),t.exit("characterReferenceMarker"),m}function m(y){return y===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(y),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),o=31,c=kt,g(y))}function h(y){return y===88||y===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(y),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),o=6,c=n0,g):(t.enter("characterReferenceValue"),o=7,c=cd,g(y))}function g(y){if(y===59&&u){const S=t.exit("characterReferenceValue");return c===kt&&!rl(l.sliceSerialize(S))?r(y):(t.enter("characterReferenceMarker"),t.consume(y),t.exit("characterReferenceMarker"),t.exit("characterReference"),i)}return c(y)&&u++<o?(t.consume(y),g):r(y)}}const ty={partial:!0,tokenize:x0},ny={concrete:!0,name:"codeFenced",tokenize:v0};function v0(t,i,r){const l=this,u={partial:!0,tokenize:te};let o=0,c=0,p;return m;function m(D){return h(D)}function h(D){const $=l.events[l.events.length-1];return o=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,p=D,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),g(D)}function g(D){return D===p?(c++,t.consume(D),g):c<3?r(D):(t.exit("codeFencedFenceSequence"),Te(D)?_e(t,y,"whitespace")(D):y(D))}function y(D){return D===null||me(D)?(t.exit("codeFencedFence"),l.interrupt?i(D):t.check(ty,L,K)(D)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),S(D))}function S(D){return D===null||me(D)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),y(D)):Te(D)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),_e(t,x,"whitespace")(D)):D===96&&D===p?r(D):(t.consume(D),S)}function x(D){return D===null||me(D)?y(D):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),A(D))}function A(D){return D===null||me(D)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),y(D)):D===96&&D===p?r(D):(t.consume(D),A)}function L(D){return t.attempt(u,K,_)(D)}function _(D){return t.enter("lineEnding"),t.consume(D),t.exit("lineEnding"),E}function E(D){return o>0&&Te(D)?_e(t,q,"linePrefix",o+1)(D):q(D)}function q(D){return D===null||me(D)?t.check(ty,L,K)(D):(t.enter("codeFlowValue"),U(D))}function U(D){return D===null||me(D)?(t.exit("codeFlowValue"),q(D)):(t.consume(D),U)}function K(D){return t.exit("codeFenced"),i(D)}function te(D,$,le){let de=0;return R;function R(Z){return D.enter("lineEnding"),D.consume(Z),D.exit("lineEnding"),ee}function ee(Z){return D.enter("codeFencedFence"),Te(Z)?_e(D,J,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Z):J(Z)}function J(Z){return Z===p?(D.enter("codeFencedFenceSequence"),re(Z)):le(Z)}function re(Z){return Z===p?(de++,D.consume(Z),re):de>=c?(D.exit("codeFencedFenceSequence"),Te(Z)?_e(D,ae,"whitespace")(Z):ae(Z)):le(Z)}function ae(Z){return Z===null||me(Z)?(D.exit("codeFencedFence"),$(Z)):le(Z)}}}function x0(t,i,r){const l=this;return u;function u(c){return c===null?r(c):(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),o)}function o(c){return l.parser.lazy[l.now().line]?r(c):i(c)}}const Rc={name:"codeIndented",tokenize:k0},S0={partial:!0,tokenize:w0};function k0(t,i,r){const l=this;return u;function u(h){return t.enter("codeIndented"),_e(t,o,"linePrefix",5)(h)}function o(h){const g=l.events[l.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?c(h):r(h)}function c(h){return h===null?m(h):me(h)?t.attempt(S0,c,m)(h):(t.enter("codeFlowValue"),p(h))}function p(h){return h===null||me(h)?(t.exit("codeFlowValue"),c(h)):(t.consume(h),p)}function m(h){return t.exit("codeIndented"),i(h)}}function w0(t,i,r){const l=this;return u;function u(c){return l.parser.lazy[l.now().line]?r(c):me(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),u):_e(t,o,"linePrefix",5)(c)}function o(c){const p=l.events[l.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(c):me(c)?u(c):r(c)}}const A0={name:"codeText",previous:T0,resolve:j0,tokenize:C0};function j0(t){let i=t.length-4,r=3,l,u;if((t[r][1].type==="lineEnding"||t[r][1].type==="space")&&(t[i][1].type==="lineEnding"||t[i][1].type==="space")){for(l=r;++l<i;)if(t[l][1].type==="codeTextData"){t[r][1].type="codeTextPadding",t[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(l=r-1,i++;++l<=i;)u===void 0?l!==i&&t[l][1].type!=="lineEnding"&&(u=l):(l===i||t[l][1].type==="lineEnding")&&(t[u][1].type="codeTextData",l!==u+2&&(t[u][1].end=t[l-1][1].end,t.splice(u+2,l-u-2),i-=l-u-2,l=u+2),u=void 0);return t}function T0(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function C0(t,i,r){let l=0,u,o;return c;function c(y){return t.enter("codeText"),t.enter("codeTextSequence"),p(y)}function p(y){return y===96?(t.consume(y),l++,p):(t.exit("codeTextSequence"),m(y))}function m(y){return y===null?r(y):y===32?(t.enter("space"),t.consume(y),t.exit("space"),m):y===96?(o=t.enter("codeTextSequence"),u=0,g(y)):me(y)?(t.enter("lineEnding"),t.consume(y),t.exit("lineEnding"),m):(t.enter("codeTextData"),h(y))}function h(y){return y===null||y===32||y===96||me(y)?(t.exit("codeTextData"),m(y)):(t.consume(y),h)}function g(y){return y===96?(t.consume(y),u++,g):u===l?(t.exit("codeTextSequence"),t.exit("codeText"),i(y)):(o.type="codeTextData",h(y))}}class E0{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,r){const l=r??Number.POSITIVE_INFINITY;return l<this.left.length?this.left.slice(i,l):i>this.left.length?this.right.slice(this.right.length-l+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-l+this.left.length).reverse())}splice(i,r,l){const u=r||0;this.setCursor(Math.trunc(i));const o=this.right.splice(this.right.length-u,Number.POSITIVE_INFINITY);return l&&Qr(this.left,l),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),Qr(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),Qr(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const r=this.left.splice(i,Number.POSITIVE_INFINITY);Qr(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);Qr(this.left,r.reverse())}}}function Qr(t,i){let r=0;if(i.length<1e4)t.push(...i);else for(;r<i.length;)t.push(...i.slice(r,r+1e4)),r+=1e4}function Ib(t){const i={};let r=-1,l,u,o,c,p,m,h;const g=new E0(t);for(;++r<g.length;){for(;r in i;)r=i[r];if(l=g.get(r),r&&l[1].type==="chunkFlow"&&g.get(r-1)[1].type==="listItemPrefix"&&(m=l[1]._tokenizer.events,o=0,o<m.length&&m[o][1].type==="lineEndingBlank"&&(o+=2),o<m.length&&m[o][1].type==="content"))for(;++o<m.length&&m[o][1].type!=="content";)m[o][1].type==="chunkText"&&(m[o][1]._isInFirstContentOfListItem=!0,o++);if(l[0]==="enter")l[1].contentType&&(Object.assign(i,O0(g,r)),r=i[r],h=!0);else if(l[1]._container){for(o=r,u=void 0;o--;)if(c=g.get(o),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(u&&(g.get(u)[1].type="lineEndingBlank"),c[1].type="lineEnding",u=o);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;u&&(l[1].end={...g.get(u)[1].start},p=g.slice(u,r),p.unshift(l),g.splice(u,r-u+1,p))}}return Kt(t,0,Number.POSITIVE_INFINITY,g.slice(0)),!h}function O0(t,i){const r=t.get(i)[1],l=t.get(i)[2];let u=i-1;const o=[];let c=r._tokenizer;c||(c=l.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const p=c.events,m=[],h={};let g,y,S=-1,x=r,A=0,L=0;const _=[L];for(;x;){for(;t.get(++u)[1]!==x;);o.push(u),x._tokenizer||(g=l.sliceStream(x),x.next||g.push(null),y&&c.defineSkip(x.start),x._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(g),x._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),y=x,x=x.next}for(x=r;++S<p.length;)p[S][0]==="exit"&&p[S-1][0]==="enter"&&p[S][1].type===p[S-1][1].type&&p[S][1].start.line!==p[S][1].end.line&&(L=S+1,_.push(L),x._tokenizer=void 0,x.previous=void 0,x=x.next);for(c.events=[],x?(x._tokenizer=void 0,x.previous=void 0):_.pop(),S=_.length;S--;){const E=p.slice(_[S],_[S+1]),q=o.pop();m.push([q,q+E.length-1]),t.splice(q,2,E)}for(m.reverse(),S=-1;++S<m.length;)h[A+m[S][0]]=A+m[S][1],A+=m[S][1]-m[S][0]-1;return h}const _0={resolve:N0,tokenize:L0},D0={partial:!0,tokenize:M0};function N0(t){return Ib(t),t}function L0(t,i){let r;return l;function l(p){return t.enter("content"),r=t.enter("chunkContent",{contentType:"content"}),u(p)}function u(p){return p===null?o(p):me(p)?t.check(D0,c,o)(p):(t.consume(p),u)}function o(p){return t.exit("chunkContent"),t.exit("content"),i(p)}function c(p){return t.consume(p),t.exit("chunkContent"),r.next=t.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,u}}function M0(t,i,r){const l=this;return u;function u(c){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),_e(t,o,"linePrefix")}function o(c){if(c===null||me(c))return r(c);const p=l.events[l.events.length-1];return!l.parser.constructs.disable.null.includes("codeIndented")&&p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?i(c):t.interrupt(l.parser.constructs.flow,r,i)(c)}}function Pb(t,i,r,l,u,o,c,p,m){const h=m||Number.POSITIVE_INFINITY;let g=0;return y;function y(E){return E===60?(t.enter(l),t.enter(u),t.enter(o),t.consume(E),t.exit(o),S):E===null||E===32||E===41||Fs(E)?r(E):(t.enter(l),t.enter(c),t.enter(p),t.enter("chunkString",{contentType:"string"}),L(E))}function S(E){return E===62?(t.enter(o),t.consume(E),t.exit(o),t.exit(u),t.exit(l),i):(t.enter(p),t.enter("chunkString",{contentType:"string"}),x(E))}function x(E){return E===62?(t.exit("chunkString"),t.exit(p),S(E)):E===null||E===60||me(E)?r(E):(t.consume(E),E===92?A:x)}function A(E){return E===60||E===62||E===92?(t.consume(E),x):x(E)}function L(E){return!g&&(E===null||E===41||Ge(E))?(t.exit("chunkString"),t.exit(p),t.exit(c),t.exit(l),i(E)):g<h&&E===40?(t.consume(E),g++,L):E===41?(t.consume(E),g--,L):E===null||E===32||E===40||Fs(E)?r(E):(t.consume(E),E===92?_:L)}function _(E){return E===40||E===41||E===92?(t.consume(E),L):L(E)}}function qb(t,i,r,l,u,o){const c=this;let p=0,m;return h;function h(x){return t.enter(l),t.enter(u),t.consume(x),t.exit(u),t.enter(o),g}function g(x){return p>999||x===null||x===91||x===93&&!m||x===94&&!p&&"_hiddenFootnoteSupport"in c.parser.constructs?r(x):x===93?(t.exit(o),t.enter(u),t.consume(x),t.exit(u),t.exit(l),i):me(x)?(t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),g):(t.enter("chunkString",{contentType:"string"}),y(x))}function y(x){return x===null||x===91||x===93||me(x)||p++>999?(t.exit("chunkString"),g(x)):(t.consume(x),m||(m=!Te(x)),x===92?S:y)}function S(x){return x===91||x===92||x===93?(t.consume(x),p++,y):y(x)}}function Hb(t,i,r,l,u,o){let c;return p;function p(S){return S===34||S===39||S===40?(t.enter(l),t.enter(u),t.consume(S),t.exit(u),c=S===40?41:S,m):r(S)}function m(S){return S===c?(t.enter(u),t.consume(S),t.exit(u),t.exit(l),i):(t.enter(o),h(S))}function h(S){return S===c?(t.exit(o),m(c)):S===null?r(S):me(S)?(t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),_e(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),g(S))}function g(S){return S===c||S===null||me(S)?(t.exit("chunkString"),h(S)):(t.consume(S),S===92?y:g)}function y(S){return S===c||S===92?(t.consume(S),g):g(S)}}function Wr(t,i){let r;return l;function l(u){return me(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),r=!0,l):Te(u)?_e(t,l,r?"linePrefix":"lineSuffix")(u):i(u)}}const z0={name:"definition",tokenize:B0},R0={partial:!0,tokenize:U0};function B0(t,i,r){const l=this;let u;return o;function o(x){return t.enter("definition"),c(x)}function c(x){return qb.call(l,t,p,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(x)}function p(x){return u=hn(l.sliceSerialize(l.events[l.events.length-1][1]).slice(1,-1)),x===58?(t.enter("definitionMarker"),t.consume(x),t.exit("definitionMarker"),m):r(x)}function m(x){return Ge(x)?Wr(t,h)(x):h(x)}function h(x){return Pb(t,g,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(x)}function g(x){return t.attempt(R0,y,y)(x)}function y(x){return Te(x)?_e(t,S,"whitespace")(x):S(x)}function S(x){return x===null||me(x)?(t.exit("definition"),l.parser.defined.push(u),i(x)):r(x)}}function U0(t,i,r){return l;function l(p){return Ge(p)?Wr(t,u)(p):r(p)}function u(p){return Hb(t,o,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(p)}function o(p){return Te(p)?_e(t,c,"whitespace")(p):c(p)}function c(p){return p===null||me(p)?i(p):r(p)}}const I0={name:"hardBreakEscape",tokenize:P0};function P0(t,i,r){return l;function l(o){return t.enter("hardBreakEscape"),t.consume(o),u}function u(o){return me(o)?(t.exit("hardBreakEscape"),i(o)):r(o)}}const q0={name:"headingAtx",resolve:H0,tokenize:F0};function H0(t,i){let r=t.length-2,l=3,u,o;return t[l][1].type==="whitespace"&&(l+=2),r-2>l&&t[r][1].type==="whitespace"&&(r-=2),t[r][1].type==="atxHeadingSequence"&&(l===r-1||r-4>l&&t[r-2][1].type==="whitespace")&&(r-=l+1===r?2:4),r>l&&(u={type:"atxHeadingText",start:t[l][1].start,end:t[r][1].end},o={type:"chunkText",start:t[l][1].start,end:t[r][1].end,contentType:"text"},Kt(t,l,r-l+1,[["enter",u,i],["enter",o,i],["exit",o,i],["exit",u,i]])),t}function F0(t,i,r){let l=0;return u;function u(g){return t.enter("atxHeading"),o(g)}function o(g){return t.enter("atxHeadingSequence"),c(g)}function c(g){return g===35&&l++<6?(t.consume(g),c):g===null||Ge(g)?(t.exit("atxHeadingSequence"),p(g)):r(g)}function p(g){return g===35?(t.enter("atxHeadingSequence"),m(g)):g===null||me(g)?(t.exit("atxHeading"),i(g)):Te(g)?_e(t,p,"whitespace")(g):(t.enter("atxHeadingText"),h(g))}function m(g){return g===35?(t.consume(g),m):(t.exit("atxHeadingSequence"),p(g))}function h(g){return g===null||g===35||Ge(g)?(t.exit("atxHeadingText"),p(g)):(t.consume(g),h)}}const V0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ay=["pre","script","style","textarea"],G0={concrete:!0,name:"htmlFlow",resolveTo:K0,tokenize:Q0},Y0={partial:!0,tokenize:Z0},$0={partial:!0,tokenize:X0};function K0(t){let i=t.length;for(;i--&&!(t[i][0]==="enter"&&t[i][1].type==="htmlFlow"););return i>1&&t[i-2][1].type==="linePrefix"&&(t[i][1].start=t[i-2][1].start,t[i+1][1].start=t[i-2][1].start,t.splice(i-2,2)),t}function Q0(t,i,r){const l=this;let u,o,c,p,m;return h;function h(w){return g(w)}function g(w){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(w),y}function y(w){return w===33?(t.consume(w),S):w===47?(t.consume(w),o=!0,L):w===63?(t.consume(w),u=3,l.interrupt?i:j):Ct(w)?(t.consume(w),c=String.fromCharCode(w),_):r(w)}function S(w){return w===45?(t.consume(w),u=2,x):w===91?(t.consume(w),u=5,p=0,A):Ct(w)?(t.consume(w),u=4,l.interrupt?i:j):r(w)}function x(w){return w===45?(t.consume(w),l.interrupt?i:j):r(w)}function A(w){const ie="CDATA[";return w===ie.charCodeAt(p++)?(t.consume(w),p===ie.length?l.interrupt?i:J:A):r(w)}function L(w){return Ct(w)?(t.consume(w),c=String.fromCharCode(w),_):r(w)}function _(w){if(w===null||w===47||w===62||Ge(w)){const ie=w===47,pe=c.toLowerCase();return!ie&&!o&&ay.includes(pe)?(u=1,l.interrupt?i(w):J(w)):V0.includes(c.toLowerCase())?(u=6,ie?(t.consume(w),E):l.interrupt?i(w):J(w)):(u=7,l.interrupt&&!l.parser.lazy[l.now().line]?r(w):o?q(w):U(w))}return w===45||kt(w)?(t.consume(w),c+=String.fromCharCode(w),_):r(w)}function E(w){return w===62?(t.consume(w),l.interrupt?i:J):r(w)}function q(w){return Te(w)?(t.consume(w),q):R(w)}function U(w){return w===47?(t.consume(w),R):w===58||w===95||Ct(w)?(t.consume(w),K):Te(w)?(t.consume(w),U):R(w)}function K(w){return w===45||w===46||w===58||w===95||kt(w)?(t.consume(w),K):te(w)}function te(w){return w===61?(t.consume(w),D):Te(w)?(t.consume(w),te):U(w)}function D(w){return w===null||w===60||w===61||w===62||w===96?r(w):w===34||w===39?(t.consume(w),m=w,$):Te(w)?(t.consume(w),D):le(w)}function $(w){return w===m?(t.consume(w),m=null,de):w===null||me(w)?r(w):(t.consume(w),$)}function le(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Ge(w)?te(w):(t.consume(w),le)}function de(w){return w===47||w===62||Te(w)?U(w):r(w)}function R(w){return w===62?(t.consume(w),ee):r(w)}function ee(w){return w===null||me(w)?J(w):Te(w)?(t.consume(w),ee):r(w)}function J(w){return w===45&&u===2?(t.consume(w),B):w===60&&u===1?(t.consume(w),Q):w===62&&u===4?(t.consume(w),C):w===63&&u===3?(t.consume(w),j):w===93&&u===5?(t.consume(w),be):me(w)&&(u===6||u===7)?(t.exit("htmlFlowData"),t.check(Y0,H,re)(w)):w===null||me(w)?(t.exit("htmlFlowData"),re(w)):(t.consume(w),J)}function re(w){return t.check($0,ae,H)(w)}function ae(w){return t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),Z}function Z(w){return w===null||me(w)?re(w):(t.enter("htmlFlowData"),J(w))}function B(w){return w===45?(t.consume(w),j):J(w)}function Q(w){return w===47?(t.consume(w),c="",se):J(w)}function se(w){if(w===62){const ie=c.toLowerCase();return ay.includes(ie)?(t.consume(w),C):J(w)}return Ct(w)&&c.length<8?(t.consume(w),c+=String.fromCharCode(w),se):J(w)}function be(w){return w===93?(t.consume(w),j):J(w)}function j(w){return w===62?(t.consume(w),C):w===45&&u===2?(t.consume(w),j):J(w)}function C(w){return w===null||me(w)?(t.exit("htmlFlowData"),H(w)):(t.consume(w),C)}function H(w){return t.exit("htmlFlow"),i(w)}}function X0(t,i,r){const l=this;return u;function u(c){return me(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),o):r(c)}function o(c){return l.parser.lazy[l.now().line]?r(c):i(c)}}function Z0(t,i,r){return l;function l(u){return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),t.attempt(ul,i,r)}}const W0={name:"htmlText",tokenize:J0};function J0(t,i,r){const l=this;let u,o,c;return p;function p(j){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(j),m}function m(j){return j===33?(t.consume(j),h):j===47?(t.consume(j),te):j===63?(t.consume(j),U):Ct(j)?(t.consume(j),le):r(j)}function h(j){return j===45?(t.consume(j),g):j===91?(t.consume(j),o=0,A):Ct(j)?(t.consume(j),q):r(j)}function g(j){return j===45?(t.consume(j),x):r(j)}function y(j){return j===null?r(j):j===45?(t.consume(j),S):me(j)?(c=y,Q(j)):(t.consume(j),y)}function S(j){return j===45?(t.consume(j),x):y(j)}function x(j){return j===62?B(j):j===45?S(j):y(j)}function A(j){const C="CDATA[";return j===C.charCodeAt(o++)?(t.consume(j),o===C.length?L:A):r(j)}function L(j){return j===null?r(j):j===93?(t.consume(j),_):me(j)?(c=L,Q(j)):(t.consume(j),L)}function _(j){return j===93?(t.consume(j),E):L(j)}function E(j){return j===62?B(j):j===93?(t.consume(j),E):L(j)}function q(j){return j===null||j===62?B(j):me(j)?(c=q,Q(j)):(t.consume(j),q)}function U(j){return j===null?r(j):j===63?(t.consume(j),K):me(j)?(c=U,Q(j)):(t.consume(j),U)}function K(j){return j===62?B(j):U(j)}function te(j){return Ct(j)?(t.consume(j),D):r(j)}function D(j){return j===45||kt(j)?(t.consume(j),D):$(j)}function $(j){return me(j)?(c=$,Q(j)):Te(j)?(t.consume(j),$):B(j)}function le(j){return j===45||kt(j)?(t.consume(j),le):j===47||j===62||Ge(j)?de(j):r(j)}function de(j){return j===47?(t.consume(j),B):j===58||j===95||Ct(j)?(t.consume(j),R):me(j)?(c=de,Q(j)):Te(j)?(t.consume(j),de):B(j)}function R(j){return j===45||j===46||j===58||j===95||kt(j)?(t.consume(j),R):ee(j)}function ee(j){return j===61?(t.consume(j),J):me(j)?(c=ee,Q(j)):Te(j)?(t.consume(j),ee):de(j)}function J(j){return j===null||j===60||j===61||j===62||j===96?r(j):j===34||j===39?(t.consume(j),u=j,re):me(j)?(c=J,Q(j)):Te(j)?(t.consume(j),J):(t.consume(j),ae)}function re(j){return j===u?(t.consume(j),u=void 0,Z):j===null?r(j):me(j)?(c=re,Q(j)):(t.consume(j),re)}function ae(j){return j===null||j===34||j===39||j===60||j===61||j===96?r(j):j===47||j===62||Ge(j)?de(j):(t.consume(j),ae)}function Z(j){return j===47||j===62||Ge(j)?de(j):r(j)}function B(j){return j===62?(t.consume(j),t.exit("htmlTextData"),t.exit("htmlText"),i):r(j)}function Q(j){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(j),t.exit("lineEnding"),se}function se(j){return Te(j)?_e(t,be,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):be(j)}function be(j){return t.enter("htmlTextData"),c(j)}}const qd={name:"labelEnd",resolveAll:a2,resolveTo:i2,tokenize:r2},e2={tokenize:l2},t2={tokenize:s2},n2={tokenize:o2};function a2(t){let i=-1;const r=[];for(;++i<t.length;){const l=t[i][1];if(r.push(t[i]),l.type==="labelImage"||l.type==="labelLink"||l.type==="labelEnd"){const u=l.type==="labelImage"?4:2;l.type="data",i+=u}}return t.length!==r.length&&Kt(t,0,t.length,r),t}function i2(t,i){let r=t.length,l=0,u,o,c,p;for(;r--;)if(u=t[r][1],o){if(u.type==="link"||u.type==="labelLink"&&u._inactive)break;t[r][0]==="enter"&&u.type==="labelLink"&&(u._inactive=!0)}else if(c){if(t[r][0]==="enter"&&(u.type==="labelImage"||u.type==="labelLink")&&!u._balanced&&(o=r,u.type!=="labelLink")){l=2;break}}else u.type==="labelEnd"&&(c=r);const m={type:t[o][1].type==="labelLink"?"link":"image",start:{...t[o][1].start},end:{...t[t.length-1][1].end}},h={type:"label",start:{...t[o][1].start},end:{...t[c][1].end}},g={type:"labelText",start:{...t[o+l+2][1].end},end:{...t[c-2][1].start}};return p=[["enter",m,i],["enter",h,i]],p=on(p,t.slice(o+1,o+l+3)),p=on(p,[["enter",g,i]]),p=on(p,Ws(i.parser.constructs.insideSpan.null,t.slice(o+l+4,c-3),i)),p=on(p,[["exit",g,i],t[c-2],t[c-1],["exit",h,i]]),p=on(p,t.slice(c+1)),p=on(p,[["exit",m,i]]),Kt(t,o,t.length,p),t}function r2(t,i,r){const l=this;let u=l.events.length,o,c;for(;u--;)if((l.events[u][1].type==="labelImage"||l.events[u][1].type==="labelLink")&&!l.events[u][1]._balanced){o=l.events[u][1];break}return p;function p(S){return o?o._inactive?y(S):(c=l.parser.defined.includes(hn(l.sliceSerialize({start:o.end,end:l.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(S),t.exit("labelMarker"),t.exit("labelEnd"),m):r(S)}function m(S){return S===40?t.attempt(e2,g,c?g:y)(S):S===91?t.attempt(t2,g,c?h:y)(S):c?g(S):y(S)}function h(S){return t.attempt(n2,g,y)(S)}function g(S){return i(S)}function y(S){return o._balanced=!0,r(S)}}function l2(t,i,r){return l;function l(y){return t.enter("resource"),t.enter("resourceMarker"),t.consume(y),t.exit("resourceMarker"),u}function u(y){return Ge(y)?Wr(t,o)(y):o(y)}function o(y){return y===41?g(y):Pb(t,c,p,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(y)}function c(y){return Ge(y)?Wr(t,m)(y):g(y)}function p(y){return r(y)}function m(y){return y===34||y===39||y===40?Hb(t,h,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(y):g(y)}function h(y){return Ge(y)?Wr(t,g)(y):g(y)}function g(y){return y===41?(t.enter("resourceMarker"),t.consume(y),t.exit("resourceMarker"),t.exit("resource"),i):r(y)}}function s2(t,i,r){const l=this;return u;function u(p){return qb.call(l,t,o,c,"reference","referenceMarker","referenceString")(p)}function o(p){return l.parser.defined.includes(hn(l.sliceSerialize(l.events[l.events.length-1][1]).slice(1,-1)))?i(p):r(p)}function c(p){return r(p)}}function o2(t,i,r){return l;function l(o){return t.enter("reference"),t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),u}function u(o){return o===93?(t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),t.exit("reference"),i):r(o)}}const u2={name:"labelStartImage",resolveAll:qd.resolveAll,tokenize:c2};function c2(t,i,r){const l=this;return u;function u(p){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(p),t.exit("labelImageMarker"),o}function o(p){return p===91?(t.enter("labelMarker"),t.consume(p),t.exit("labelMarker"),t.exit("labelImage"),c):r(p)}function c(p){return p===94&&"_hiddenFootnoteSupport"in l.parser.constructs?r(p):i(p)}}const d2={name:"labelStartLink",resolveAll:qd.resolveAll,tokenize:f2};function f2(t,i,r){const l=this;return u;function u(c){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelLink"),o}function o(c){return c===94&&"_hiddenFootnoteSupport"in l.parser.constructs?r(c):i(c)}}const Bc={name:"lineEnding",tokenize:p2};function p2(t,i){return r;function r(l){return t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),_e(t,i,"linePrefix")}}const Is={name:"thematicBreak",tokenize:m2};function m2(t,i,r){let l=0,u;return o;function o(h){return t.enter("thematicBreak"),c(h)}function c(h){return u=h,p(h)}function p(h){return h===u?(t.enter("thematicBreakSequence"),m(h)):l>=3&&(h===null||me(h))?(t.exit("thematicBreak"),i(h)):r(h)}function m(h){return h===u?(t.consume(h),l++,m):(t.exit("thematicBreakSequence"),Te(h)?_e(t,p,"whitespace")(h):p(h))}}const Bt={continuation:{tokenize:b2},exit:x2,name:"list",tokenize:y2},h2={partial:!0,tokenize:S2},g2={partial:!0,tokenize:v2};function y2(t,i,r){const l=this,u=l.events[l.events.length-1];let o=u&&u[1].type==="linePrefix"?u[2].sliceSerialize(u[1],!0).length:0,c=0;return p;function p(x){const A=l.containerState.type||(x===42||x===43||x===45?"listUnordered":"listOrdered");if(A==="listUnordered"?!l.containerState.marker||x===l.containerState.marker:cd(x)){if(l.containerState.type||(l.containerState.type=A,t.enter(A,{_container:!0})),A==="listUnordered")return t.enter("listItemPrefix"),x===42||x===45?t.check(Is,r,h)(x):h(x);if(!l.interrupt||x===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),m(x)}return r(x)}function m(x){return cd(x)&&++c<10?(t.consume(x),m):(!l.interrupt||c<2)&&(l.containerState.marker?x===l.containerState.marker:x===41||x===46)?(t.exit("listItemValue"),h(x)):r(x)}function h(x){return t.enter("listItemMarker"),t.consume(x),t.exit("listItemMarker"),l.containerState.marker=l.containerState.marker||x,t.check(ul,l.interrupt?r:g,t.attempt(h2,S,y))}function g(x){return l.containerState.initialBlankLine=!0,o++,S(x)}function y(x){return Te(x)?(t.enter("listItemPrefixWhitespace"),t.consume(x),t.exit("listItemPrefixWhitespace"),S):r(x)}function S(x){return l.containerState.size=o+l.sliceSerialize(t.exit("listItemPrefix"),!0).length,i(x)}}function b2(t,i,r){const l=this;return l.containerState._closeFlow=void 0,t.check(ul,u,o);function u(p){return l.containerState.furtherBlankLines=l.containerState.furtherBlankLines||l.containerState.initialBlankLine,_e(t,i,"listItemIndent",l.containerState.size+1)(p)}function o(p){return l.containerState.furtherBlankLines||!Te(p)?(l.containerState.furtherBlankLines=void 0,l.containerState.initialBlankLine=void 0,c(p)):(l.containerState.furtherBlankLines=void 0,l.containerState.initialBlankLine=void 0,t.attempt(g2,i,c)(p))}function c(p){return l.containerState._closeFlow=!0,l.interrupt=void 0,_e(t,t.attempt(Bt,i,r),"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p)}}function v2(t,i,r){const l=this;return _e(t,u,"listItemIndent",l.containerState.size+1);function u(o){const c=l.events[l.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===l.containerState.size?i(o):r(o)}}function x2(t){t.exit(this.containerState.type)}function S2(t,i,r){const l=this;return _e(t,u,"listItemPrefixWhitespace",l.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function u(o){const c=l.events[l.events.length-1];return!Te(o)&&c&&c[1].type==="listItemPrefixWhitespace"?i(o):r(o)}}const iy={name:"setextUnderline",resolveTo:k2,tokenize:w2};function k2(t,i){let r=t.length,l,u,o;for(;r--;)if(t[r][0]==="enter"){if(t[r][1].type==="content"){l=r;break}t[r][1].type==="paragraph"&&(u=r)}else t[r][1].type==="content"&&t.splice(r,1),!o&&t[r][1].type==="definition"&&(o=r);const c={type:"setextHeading",start:{...t[l][1].start},end:{...t[t.length-1][1].end}};return t[u][1].type="setextHeadingText",o?(t.splice(u,0,["enter",c,i]),t.splice(o+1,0,["exit",t[l][1],i]),t[l][1].end={...t[o][1].end}):t[l][1]=c,t.push(["exit",c,i]),t}function w2(t,i,r){const l=this;let u;return o;function o(h){let g=l.events.length,y;for(;g--;)if(l.events[g][1].type!=="lineEnding"&&l.events[g][1].type!=="linePrefix"&&l.events[g][1].type!=="content"){y=l.events[g][1].type==="paragraph";break}return!l.parser.lazy[l.now().line]&&(l.interrupt||y)?(t.enter("setextHeadingLine"),u=h,c(h)):r(h)}function c(h){return t.enter("setextHeadingLineSequence"),p(h)}function p(h){return h===u?(t.consume(h),p):(t.exit("setextHeadingLineSequence"),Te(h)?_e(t,m,"lineSuffix")(h):m(h))}function m(h){return h===null||me(h)?(t.exit("setextHeadingLine"),i(h)):r(h)}}const A2={tokenize:j2};function j2(t){const i=this,r=t.attempt(ul,l,t.attempt(this.parser.constructs.flowInitial,u,_e(t,t.attempt(this.parser.constructs.flow,u,t.attempt(_0,u)),"linePrefix")));return r;function l(o){if(o===null){t.consume(o);return}return t.enter("lineEndingBlank"),t.consume(o),t.exit("lineEndingBlank"),i.currentConstruct=void 0,r}function u(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i.currentConstruct=void 0,r}}const T2={resolveAll:Vb()},C2=Fb("string"),E2=Fb("text");function Fb(t){return{resolveAll:Vb(t==="text"?O2:void 0),tokenize:i};function i(r){const l=this,u=this.parser.constructs[t],o=r.attempt(u,c,p);return c;function c(g){return h(g)?o(g):p(g)}function p(g){if(g===null){r.consume(g);return}return r.enter("data"),r.consume(g),m}function m(g){return h(g)?(r.exit("data"),o(g)):(r.consume(g),m)}function h(g){if(g===null)return!0;const y=u[g];let S=-1;if(y)for(;++S<y.length;){const x=y[S];if(!x.previous||x.previous.call(l,l.previous))return!0}return!1}}}function Vb(t){return i;function i(r,l){let u=-1,o;for(;++u<=r.length;)o===void 0?r[u]&&r[u][1].type==="data"&&(o=u,u++):(!r[u]||r[u][1].type!=="data")&&(u!==o+2&&(r[o][1].end=r[u-1][1].end,r.splice(o+2,u-o-2),u=o+2),o=void 0);return t?t(r,l):r}}function O2(t,i){let r=0;for(;++r<=t.length;)if((r===t.length||t[r][1].type==="lineEnding")&&t[r-1][1].type==="data"){const l=t[r-1][1],u=i.sliceStream(l);let o=u.length,c=-1,p=0,m;for(;o--;){const h=u[o];if(typeof h=="string"){for(c=h.length;h.charCodeAt(c-1)===32;)p++,c--;if(c)break;c=-1}else if(h===-2)m=!0,p++;else if(h!==-1){o++;break}}if(i._contentTypeTextTrailing&&r===t.length&&(p=0),p){const h={type:r===t.length||m||p<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?c:l.start._bufferIndex+c,_index:l.start._index+o,line:l.end.line,column:l.end.column-p,offset:l.end.offset-p},end:{...l.end}};l.end={...h.start},l.start.offset===l.end.offset?Object.assign(l,h):(t.splice(r,0,["enter",h,i],["exit",h,i]),r+=2)}r++}return t}const _2={42:Bt,43:Bt,45:Bt,48:Bt,49:Bt,50:Bt,51:Bt,52:Bt,53:Bt,54:Bt,55:Bt,56:Bt,57:Bt,62:Rb},D2={91:z0},N2={[-2]:Rc,[-1]:Rc,32:Rc},L2={35:q0,42:Is,45:[iy,Is],60:G0,61:iy,95:Is,96:ny,126:ny},M2={38:Ub,92:Bb},z2={[-5]:Bc,[-4]:Bc,[-3]:Bc,33:u2,38:Ub,42:dd,60:[d0,W0],91:d2,92:[I0,Bb],93:qd,95:dd,96:A0},R2={null:[dd,T2]},B2={null:[42,95]},U2={null:[]},I2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:B2,contentInitial:D2,disable:U2,document:_2,flow:L2,flowInitial:N2,insideSpan:R2,string:M2,text:z2},Symbol.toStringTag,{value:"Module"}));function P2(t,i,r){let l={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const u={},o=[];let c=[],p=[];const m={attempt:$(te),check:$(D),consume:q,enter:U,exit:K,interrupt:$(D,{interrupt:!0})},h={code:null,containerState:{},defineSkip:L,events:[],now:A,parser:t,previous:null,sliceSerialize:S,sliceStream:x,write:y};let g=i.tokenize.call(h,m);return i.resolveAll&&o.push(i),h;function y(ee){return c=on(c,ee),_(),c[c.length-1]!==null?[]:(le(i,0),h.events=Ws(o,h.events,h),h.events)}function S(ee,J){return H2(x(ee),J)}function x(ee){return q2(c,ee)}function A(){const{_bufferIndex:ee,_index:J,line:re,column:ae,offset:Z}=l;return{_bufferIndex:ee,_index:J,line:re,column:ae,offset:Z}}function L(ee){u[ee.line]=ee.column,R()}function _(){let ee;for(;l._index<c.length;){const J=c[l._index];if(typeof J=="string")for(ee=l._index,l._bufferIndex<0&&(l._bufferIndex=0);l._index===ee&&l._bufferIndex<J.length;)E(J.charCodeAt(l._bufferIndex));else E(J)}}function E(ee){g=g(ee)}function q(ee){me(ee)?(l.line++,l.column=1,l.offset+=ee===-3?2:1,R()):ee!==-1&&(l.column++,l.offset++),l._bufferIndex<0?l._index++:(l._bufferIndex++,l._bufferIndex===c[l._index].length&&(l._bufferIndex=-1,l._index++)),h.previous=ee}function U(ee,J){const re=J||{};return re.type=ee,re.start=A(),h.events.push(["enter",re,h]),p.push(re),re}function K(ee){const J=p.pop();return J.end=A(),h.events.push(["exit",J,h]),J}function te(ee,J){le(ee,J.from)}function D(ee,J){J.restore()}function $(ee,J){return re;function re(ae,Z,B){let Q,se,be,j;return Array.isArray(ae)?H(ae):"tokenize"in ae?H([ae]):C(ae);function C(ce){return ke;function ke(Ie){const Me=Ie!==null&&ce[Ie],Et=Ie!==null&&ce.null,un=[...Array.isArray(Me)?Me:Me?[Me]:[],...Array.isArray(Et)?Et:Et?[Et]:[]];return H(un)(Ie)}}function H(ce){return Q=ce,se=0,ce.length===0?B:w(ce[se])}function w(ce){return ke;function ke(Ie){return j=de(),be=ce,ce.partial||(h.currentConstruct=ce),ce.name&&h.parser.constructs.disable.null.includes(ce.name)?pe():ce.tokenize.call(J?Object.assign(Object.create(h),J):h,m,ie,pe)(Ie)}}function ie(ce){return ee(be,j),Z}function pe(ce){return j.restore(),++se<Q.length?w(Q[se]):B}}}function le(ee,J){ee.resolveAll&&!o.includes(ee)&&o.push(ee),ee.resolve&&Kt(h.events,J,h.events.length-J,ee.resolve(h.events.slice(J),h)),ee.resolveTo&&(h.events=ee.resolveTo(h.events,h))}function de(){const ee=A(),J=h.previous,re=h.currentConstruct,ae=h.events.length,Z=Array.from(p);return{from:ae,restore:B};function B(){l=ee,h.previous=J,h.currentConstruct=re,h.events.length=ae,p=Z,R()}}function R(){l.line in u&&l.column<2&&(l.column=u[l.line],l.offset+=u[l.line]-1)}}function q2(t,i){const r=i.start._index,l=i.start._bufferIndex,u=i.end._index,o=i.end._bufferIndex;let c;if(r===u)c=[t[r].slice(l,o)];else{if(c=t.slice(r,u),l>-1){const p=c[0];typeof p=="string"?c[0]=p.slice(l):c.shift()}o>0&&c.push(t[u].slice(0,o))}return c}function H2(t,i){let r=-1;const l=[];let u;for(;++r<t.length;){const o=t[r];let c;if(typeof o=="string")c=o;else switch(o){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=i?" ":"	";break}case-1:{if(!i&&u)continue;c=" ";break}default:c=String.fromCharCode(o)}u=o===-2,l.push(c)}return l.join("")}function F2(t){const l={constructs:Mb([I2,...(t||{}).extensions||[]]),content:u(i0),defined:[],document:u(l0),flow:u(A2),lazy:{},string:u(C2),text:u(E2)};return l;function u(o){return c;function c(p){return P2(l,o,p)}}}function V2(t){for(;!Ib(t););return t}const ry=/[\0\t\n\r]/g;function G2(){let t=1,i="",r=!0,l;return u;function u(o,c,p){const m=[];let h,g,y,S,x;for(o=i+(typeof o=="string"?o.toString():new TextDecoder(c||void 0).decode(o)),y=0,i="",r&&(o.charCodeAt(0)===65279&&y++,r=void 0);y<o.length;){if(ry.lastIndex=y,h=ry.exec(o),S=h&&h.index!==void 0?h.index:o.length,x=o.charCodeAt(S),!h){i=o.slice(y);break}if(x===10&&y===S&&l)m.push(-3),l=void 0;else switch(l&&(m.push(-5),l=void 0),y<S&&(m.push(o.slice(y,S)),t+=S-y),x){case 0:{m.push(65533),t++;break}case 9:{for(g=Math.ceil(t/4)*4,m.push(-2);t++<g;)m.push(-1);break}case 10:{m.push(-4),t=1;break}default:l=!0,t=1}y=S+1}return p&&(l&&m.push(-5),i&&m.push(i),m.push(null)),m}}const Y2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function $2(t){return t.replace(Y2,K2)}function K2(t,i,r){if(i)return i;if(r.charCodeAt(0)===35){const u=r.charCodeAt(1),o=u===120||u===88;return zb(r.slice(o?2:1),o?16:10)}return rl(r)||t}const Gb={}.hasOwnProperty;function Q2(t,i,r){return i&&typeof i=="object"&&(r=i,i=void 0),X2(r)(V2(F2(r).document().write(G2()(t,i,!0))))}function X2(t){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Ka),autolinkProtocol:de,autolinkEmail:de,atxHeading:o(Ya),blockQuote:o(Et),characterEscape:de,characterReference:de,codeFenced:o(un),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:o(un,c),codeText:o(Xi,c),codeTextData:de,data:de,codeFlowValue:de,definition:o(fl),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:o(An),hardBreakEscape:o($a),hardBreakTrailing:o($a),htmlFlow:o(pl,c),htmlFlowData:de,htmlText:o(pl,c),htmlTextData:de,image:o(ml),label:c,link:o(Ka),listItem:o(Zi),listItemValue:S,listOrdered:o(Qa,y),listUnordered:o(Qa),paragraph:o(no),reference:w,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:o(Ya),strong:o(ao),thematicBreak:o(io)},exit:{atxHeading:m(),atxHeadingSequence:te,autolink:m(),autolinkEmail:Me,autolinkProtocol:Ie,blockQuote:m(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:pe,characterReferenceMarkerNumeric:pe,characterReferenceValue:ce,characterReference:ke,codeFenced:m(_),codeFencedFence:L,codeFencedFenceInfo:x,codeFencedFenceMeta:A,codeFlowValue:R,codeIndented:m(E),codeText:m(Z),codeTextData:R,data:R,definition:m(),definitionDestinationString:K,definitionLabelString:q,definitionTitleString:U,emphasis:m(),hardBreakEscape:m(J),hardBreakTrailing:m(J),htmlFlow:m(re),htmlFlowData:R,htmlText:m(ae),htmlTextData:R,image:m(Q),label:be,labelText:se,lineEnding:ee,link:m(B),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:ie,resourceDestinationString:j,resourceTitleString:C,resource:H,setextHeading:m(le),setextHeadingLineSequence:$,setextHeadingText:D,strong:m(),thematicBreak:m()}};Yb(i,(t||{}).mdastExtensions||[]);const r={};return l;function l(V){let ne={type:"root",children:[]};const ge={stack:[ne],tokenStack:[],config:i,enter:p,exit:h,buffer:c,resume:g,data:r},we=[];let ze=-1;for(;++ze<V.length;)if(V[ze][1].type==="listOrdered"||V[ze][1].type==="listUnordered")if(V[ze][0]==="enter")we.push(ze);else{const It=we.pop();ze=u(V,It,ze)}for(ze=-1;++ze<V.length;){const It=i[V[ze][0]];Gb.call(It,V[ze][1].type)&&It[V[ze][1].type].call(Object.assign({sliceSerialize:V[ze][2].sliceSerialize},ge),V[ze][1])}if(ge.tokenStack.length>0){const It=ge.tokenStack[ge.tokenStack.length-1];(It[1]||ly).call(ge,void 0,It[0])}for(ne.position={start:ga(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:ga(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},ze=-1;++ze<i.transforms.length;)ne=i.transforms[ze](ne)||ne;return ne}function u(V,ne,ge){let we=ne-1,ze=-1,It=!1,jn,jt,ot,Ot;for(;++we<=ge;){const Fe=V[we];switch(Fe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Fe[0]==="enter"?ze++:ze--,Ot=void 0;break}case"lineEndingBlank":{Fe[0]==="enter"&&(jn&&!Ot&&!ze&&!ot&&(ot=we),Ot=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ot=void 0}if(!ze&&Fe[0]==="enter"&&Fe[1].type==="listItemPrefix"||ze===-1&&Fe[0]==="exit"&&(Fe[1].type==="listUnordered"||Fe[1].type==="listOrdered")){if(jn){let Gn=we;for(jt=void 0;Gn--;){const cn=V[Gn];if(cn[1].type==="lineEnding"||cn[1].type==="lineEndingBlank"){if(cn[0]==="exit")continue;jt&&(V[jt][1].type="lineEndingBlank",It=!0),cn[1].type="lineEnding",jt=Gn}else if(!(cn[1].type==="linePrefix"||cn[1].type==="blockQuotePrefix"||cn[1].type==="blockQuotePrefixWhitespace"||cn[1].type==="blockQuoteMarker"||cn[1].type==="listItemIndent"))break}ot&&(!jt||ot<jt)&&(jn._spread=!0),jn.end=Object.assign({},jt?V[jt][1].start:Fe[1].end),V.splice(jt||we,0,["exit",jn,Fe[2]]),we++,ge++}if(Fe[1].type==="listItemPrefix"){const Gn={type:"listItem",_spread:!1,start:Object.assign({},Fe[1].start),end:void 0};jn=Gn,V.splice(we,0,["enter",Gn,Fe[2]]),we++,ge++,ot=void 0,Ot=!0}}}return V[ne][1]._spread=It,ge}function o(V,ne){return ge;function ge(we){p.call(this,V(we),we),ne&&ne.call(this,we)}}function c(){this.stack.push({type:"fragment",children:[]})}function p(V,ne,ge){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([ne,ge||void 0]),V.position={start:ga(ne.start),end:void 0}}function m(V){return ne;function ne(ge){V&&V.call(this,ge),h.call(this,ge)}}function h(V,ne){const ge=this.stack.pop(),we=this.tokenStack.pop();if(we)we[0].type!==V.type&&(ne?ne.call(this,V,we[0]):(we[1]||ly).call(this,V,we[0]));else throw new Error("Cannot close `"+V.type+"` ("+Zr({start:V.start,end:V.end})+"): it’s not open");ge.position.end=ga(V.end)}function g(){return Pd(this.stack.pop())}function y(){this.data.expectingFirstListItemValue=!0}function S(V){if(this.data.expectingFirstListItemValue){const ne=this.stack[this.stack.length-2];ne.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function x(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.lang=V}function A(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.meta=V}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function E(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.value=V.replace(/(\r?\n|\r)$/g,"")}function q(V){const ne=this.resume(),ge=this.stack[this.stack.length-1];ge.label=ne,ge.identifier=hn(this.sliceSerialize(V)).toLowerCase()}function U(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.title=V}function K(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.url=V}function te(V){const ne=this.stack[this.stack.length-1];if(!ne.depth){const ge=this.sliceSerialize(V).length;ne.depth=ge}}function D(){this.data.setextHeadingSlurpLineEnding=!0}function $(V){const ne=this.stack[this.stack.length-1];ne.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function le(){this.data.setextHeadingSlurpLineEnding=void 0}function de(V){const ge=this.stack[this.stack.length-1].children;let we=ge[ge.length-1];(!we||we.type!=="text")&&(we=At(),we.position={start:ga(V.start),end:void 0},ge.push(we)),this.stack.push(we)}function R(V){const ne=this.stack.pop();ne.value+=this.sliceSerialize(V),ne.position.end=ga(V.end)}function ee(V){const ne=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ge=ne.children[ne.children.length-1];ge.position.end=ga(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(ne.type)&&(de.call(this,V),R.call(this,V))}function J(){this.data.atHardBreak=!0}function re(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.value=V}function ae(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.value=V}function Z(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.value=V}function B(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const ne=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=ne,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function Q(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const ne=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=ne,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function se(V){const ne=this.sliceSerialize(V),ge=this.stack[this.stack.length-2];ge.label=$2(ne),ge.identifier=hn(ne).toLowerCase()}function be(){const V=this.stack[this.stack.length-1],ne=this.resume(),ge=this.stack[this.stack.length-1];if(this.data.inReference=!0,ge.type==="link"){const we=V.children;ge.children=we}else ge.alt=ne}function j(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.url=V}function C(){const V=this.resume(),ne=this.stack[this.stack.length-1];ne.title=V}function H(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function ie(V){const ne=this.resume(),ge=this.stack[this.stack.length-1];ge.label=ne,ge.identifier=hn(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function pe(V){this.data.characterReferenceType=V.type}function ce(V){const ne=this.sliceSerialize(V),ge=this.data.characterReferenceType;let we;ge?(we=zb(ne,ge==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):we=rl(ne);const ze=this.stack[this.stack.length-1];ze.value+=we}function ke(V){const ne=this.stack.pop();ne.position.end=ga(V.end)}function Ie(V){R.call(this,V);const ne=this.stack[this.stack.length-1];ne.url=this.sliceSerialize(V)}function Me(V){R.call(this,V);const ne=this.stack[this.stack.length-1];ne.url="mailto:"+this.sliceSerialize(V)}function Et(){return{type:"blockquote",children:[]}}function un(){return{type:"code",lang:null,meta:null,value:""}}function Xi(){return{type:"inlineCode",value:""}}function fl(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function An(){return{type:"emphasis",children:[]}}function Ya(){return{type:"heading",depth:0,children:[]}}function $a(){return{type:"break"}}function pl(){return{type:"html",value:""}}function ml(){return{type:"image",title:null,url:"",alt:null}}function Ka(){return{type:"link",title:null,url:"",children:[]}}function Qa(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function Zi(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function no(){return{type:"paragraph",children:[]}}function ao(){return{type:"strong",children:[]}}function At(){return{type:"text",value:""}}function io(){return{type:"thematicBreak"}}}function ga(t){return{line:t.line,column:t.column,offset:t.offset}}function Yb(t,i){let r=-1;for(;++r<i.length;){const l=i[r];Array.isArray(l)?Yb(t,l):Z2(t,l)}}function Z2(t,i){let r;for(r in i)if(Gb.call(i,r))switch(r){case"canContainEols":{const l=i[r];l&&t[r].push(...l);break}case"transforms":{const l=i[r];l&&t[r].push(...l);break}case"enter":case"exit":{const l=i[r];l&&Object.assign(t[r],l);break}}}function ly(t,i){throw t?new Error("Cannot close `"+t.type+"` ("+Zr({start:t.start,end:t.end})+"): a different token (`"+i.type+"`, "+Zr({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+Zr({start:i.start,end:i.end})+") is still open")}function W2(t){const i=this;i.parser=r;function r(l){return Q2(l,{...i.data("settings"),...t,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function J2(t,i){const r={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(i),!0)};return t.patch(i,r),t.applyData(i,r)}function eA(t,i){const r={type:"element",tagName:"br",properties:{},children:[]};return t.patch(i,r),[t.applyData(i,r),{type:"text",value:`
`}]}function tA(t,i){const r=i.value?i.value+`
`:"",l={},u=i.lang?i.lang.split(/\s+/):[];u.length>0&&(l.className=["language-"+u[0]]);let o={type:"element",tagName:"code",properties:l,children:[{type:"text",value:r}]};return i.meta&&(o.data={meta:i.meta}),t.patch(i,o),o=t.applyData(i,o),o={type:"element",tagName:"pre",properties:{},children:[o]},t.patch(i,o),o}function nA(t,i){const r={type:"element",tagName:"del",properties:{},children:t.all(i)};return t.patch(i,r),t.applyData(i,r)}function aA(t,i){const r={type:"element",tagName:"em",properties:{},children:t.all(i)};return t.patch(i,r),t.applyData(i,r)}function iA(t,i){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",l=String(i.identifier).toUpperCase(),u=Ki(l.toLowerCase()),o=t.footnoteOrder.indexOf(l);let c,p=t.footnoteCounts.get(l);p===void 0?(p=0,t.footnoteOrder.push(l),c=t.footnoteOrder.length):c=o+1,p+=1,t.footnoteCounts.set(l,p);const m={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+u,id:r+"fnref-"+u+(p>1?"-"+p:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};t.patch(i,m);const h={type:"element",tagName:"sup",properties:{},children:[m]};return t.patch(i,h),t.applyData(i,h)}function rA(t,i){const r={type:"element",tagName:"h"+i.depth,properties:{},children:t.all(i)};return t.patch(i,r),t.applyData(i,r)}function lA(t,i){if(t.options.allowDangerousHtml){const r={type:"raw",value:i.value};return t.patch(i,r),t.applyData(i,r)}}function $b(t,i){const r=i.referenceType;let l="]";if(r==="collapsed"?l+="[]":r==="full"&&(l+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+l}];const u=t.all(i),o=u[0];o&&o.type==="text"?o.value="["+o.value:u.unshift({type:"text",value:"["});const c=u[u.length-1];return c&&c.type==="text"?c.value+=l:u.push({type:"text",value:l}),u}function sA(t,i){const r=String(i.identifier).toUpperCase(),l=t.definitionById.get(r);if(!l)return $b(t,i);const u={src:Ki(l.url||""),alt:i.alt};l.title!==null&&l.title!==void 0&&(u.title=l.title);const o={type:"element",tagName:"img",properties:u,children:[]};return t.patch(i,o),t.applyData(i,o)}function oA(t,i){const r={src:Ki(i.url)};i.alt!==null&&i.alt!==void 0&&(r.alt=i.alt),i.title!==null&&i.title!==void 0&&(r.title=i.title);const l={type:"element",tagName:"img",properties:r,children:[]};return t.patch(i,l),t.applyData(i,l)}function uA(t,i){const r={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};t.patch(i,r);const l={type:"element",tagName:"code",properties:{},children:[r]};return t.patch(i,l),t.applyData(i,l)}function cA(t,i){const r=String(i.identifier).toUpperCase(),l=t.definitionById.get(r);if(!l)return $b(t,i);const u={href:Ki(l.url||"")};l.title!==null&&l.title!==void 0&&(u.title=l.title);const o={type:"element",tagName:"a",properties:u,children:t.all(i)};return t.patch(i,o),t.applyData(i,o)}function dA(t,i){const r={href:Ki(i.url)};i.title!==null&&i.title!==void 0&&(r.title=i.title);const l={type:"element",tagName:"a",properties:r,children:t.all(i)};return t.patch(i,l),t.applyData(i,l)}function fA(t,i,r){const l=t.all(i),u=r?pA(r):Kb(i),o={},c=[];if(typeof i.checked=="boolean"){const g=l[0];let y;g&&g.type==="element"&&g.tagName==="p"?y=g:(y={type:"element",tagName:"p",properties:{},children:[]},l.unshift(y)),y.children.length>0&&y.children.unshift({type:"text",value:" "}),y.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let p=-1;for(;++p<l.length;){const g=l[p];(u||p!==0||g.type!=="element"||g.tagName!=="p")&&c.push({type:"text",value:`
`}),g.type==="element"&&g.tagName==="p"&&!u?c.push(...g.children):c.push(g)}const m=l[l.length-1];m&&(u||m.type!=="element"||m.tagName!=="p")&&c.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:o,children:c};return t.patch(i,h),t.applyData(i,h)}function pA(t){let i=!1;if(t.type==="list"){i=t.spread||!1;const r=t.children;let l=-1;for(;!i&&++l<r.length;)i=Kb(r[l])}return i}function Kb(t){const i=t.spread;return i??t.children.length>1}function mA(t,i){const r={},l=t.all(i);let u=-1;for(typeof i.start=="number"&&i.start!==1&&(r.start=i.start);++u<l.length;){const c=l[u];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const o={type:"element",tagName:i.ordered?"ol":"ul",properties:r,children:t.wrap(l,!0)};return t.patch(i,o),t.applyData(i,o)}function hA(t,i){const r={type:"element",tagName:"p",properties:{},children:t.all(i)};return t.patch(i,r),t.applyData(i,r)}function gA(t,i){const r={type:"root",children:t.wrap(t.all(i))};return t.patch(i,r),t.applyData(i,r)}function yA(t,i){const r={type:"element",tagName:"strong",properties:{},children:t.all(i)};return t.patch(i,r),t.applyData(i,r)}function bA(t,i){const r=t.all(i),l=r.shift(),u=[];if(l){const c={type:"element",tagName:"thead",properties:{},children:t.wrap([l],!0)};t.patch(i.children[0],c),u.push(c)}if(r.length>0){const c={type:"element",tagName:"tbody",properties:{},children:t.wrap(r,!0)},p=Rd(i.children[1]),m=Cb(i.children[i.children.length-1]);p&&m&&(c.position={start:p,end:m}),u.push(c)}const o={type:"element",tagName:"table",properties:{},children:t.wrap(u,!0)};return t.patch(i,o),t.applyData(i,o)}function vA(t,i,r){const l=r?r.children:void 0,o=(l?l.indexOf(i):1)===0?"th":"td",c=r&&r.type==="table"?r.align:void 0,p=c?c.length:i.children.length;let m=-1;const h=[];for(;++m<p;){const y=i.children[m],S={},x=c?c[m]:void 0;x&&(S.align=x);let A={type:"element",tagName:o,properties:S,children:[]};y&&(A.children=t.all(y),t.patch(y,A),A=t.applyData(y,A)),h.push(A)}const g={type:"element",tagName:"tr",properties:{},children:t.wrap(h,!0)};return t.patch(i,g),t.applyData(i,g)}function xA(t,i){const r={type:"element",tagName:"td",properties:{},children:t.all(i)};return t.patch(i,r),t.applyData(i,r)}const sy=9,oy=32;function SA(t){const i=String(t),r=/\r?\n|\r/g;let l=r.exec(i),u=0;const o=[];for(;l;)o.push(uy(i.slice(u,l.index),u>0,!0),l[0]),u=l.index+l[0].length,l=r.exec(i);return o.push(uy(i.slice(u),u>0,!1)),o.join("")}function uy(t,i,r){let l=0,u=t.length;if(i){let o=t.codePointAt(l);for(;o===sy||o===oy;)l++,o=t.codePointAt(l)}if(r){let o=t.codePointAt(u-1);for(;o===sy||o===oy;)u--,o=t.codePointAt(u-1)}return u>l?t.slice(l,u):""}function kA(t,i){const r={type:"text",value:SA(String(i.value))};return t.patch(i,r),t.applyData(i,r)}function wA(t,i){const r={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(i,r),t.applyData(i,r)}const AA={blockquote:J2,break:eA,code:tA,delete:nA,emphasis:aA,footnoteReference:iA,heading:rA,html:lA,imageReference:sA,image:oA,inlineCode:uA,linkReference:cA,link:dA,listItem:fA,list:mA,paragraph:hA,root:gA,strong:yA,table:bA,tableCell:xA,tableRow:vA,text:kA,thematicBreak:wA,toml:Ns,yaml:Ns,definition:Ns,footnoteDefinition:Ns};function Ns(){}const Qb=-1,Js=0,Jr=1,Vs=2,Hd=3,Fd=4,Vd=5,Gd=6,Xb=7,Zb=8,cy=typeof self=="object"?self:globalThis,jA=(t,i)=>{const r=(u,o)=>(t.set(o,u),u),l=u=>{if(t.has(u))return t.get(u);const[o,c]=i[u];switch(o){case Js:case Qb:return r(c,u);case Jr:{const p=r([],u);for(const m of c)p.push(l(m));return p}case Vs:{const p=r({},u);for(const[m,h]of c)p[l(m)]=l(h);return p}case Hd:return r(new Date(c),u);case Fd:{const{source:p,flags:m}=c;return r(new RegExp(p,m),u)}case Vd:{const p=r(new Map,u);for(const[m,h]of c)p.set(l(m),l(h));return p}case Gd:{const p=r(new Set,u);for(const m of c)p.add(l(m));return p}case Xb:{const{name:p,message:m}=c;return r(new cy[p](m),u)}case Zb:return r(BigInt(c),u);case"BigInt":return r(Object(BigInt(c)),u);case"ArrayBuffer":return r(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:p}=new Uint8Array(c);return r(new DataView(p),c)}}return r(new cy[o](c),u)};return l},dy=t=>jA(new Map,t)(0),Ri="",{toString:TA}={},{keys:CA}=Object,Xr=t=>{const i=typeof t;if(i!=="object"||!t)return[Js,i];const r=TA.call(t).slice(8,-1);switch(r){case"Array":return[Jr,Ri];case"Object":return[Vs,Ri];case"Date":return[Hd,Ri];case"RegExp":return[Fd,Ri];case"Map":return[Vd,Ri];case"Set":return[Gd,Ri];case"DataView":return[Jr,r]}return r.includes("Array")?[Jr,r]:r.includes("Error")?[Xb,r]:[Vs,r]},Ls=([t,i])=>t===Js&&(i==="function"||i==="symbol"),EA=(t,i,r,l)=>{const u=(c,p)=>{const m=l.push(c)-1;return r.set(p,m),m},o=c=>{if(r.has(c))return r.get(c);let[p,m]=Xr(c);switch(p){case Js:{let g=c;switch(m){case"bigint":p=Zb,g=c.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+m);g=null;break;case"undefined":return u([Qb],c)}return u([p,g],c)}case Jr:{if(m){let S=c;return m==="DataView"?S=new Uint8Array(c.buffer):m==="ArrayBuffer"&&(S=new Uint8Array(c)),u([m,[...S]],c)}const g=[],y=u([p,g],c);for(const S of c)g.push(o(S));return y}case Vs:{if(m)switch(m){case"BigInt":return u([m,c.toString()],c);case"Boolean":case"Number":case"String":return u([m,c.valueOf()],c)}if(i&&"toJSON"in c)return o(c.toJSON());const g=[],y=u([p,g],c);for(const S of CA(c))(t||!Ls(Xr(c[S])))&&g.push([o(S),o(c[S])]);return y}case Hd:return u([p,c.toISOString()],c);case Fd:{const{source:g,flags:y}=c;return u([p,{source:g,flags:y}],c)}case Vd:{const g=[],y=u([p,g],c);for(const[S,x]of c)(t||!(Ls(Xr(S))||Ls(Xr(x))))&&g.push([o(S),o(x)]);return y}case Gd:{const g=[],y=u([p,g],c);for(const S of c)(t||!Ls(Xr(S)))&&g.push(o(S));return y}}const{message:h}=c;return u([p,{name:m,message:h}],c)};return o},fy=(t,{json:i,lossy:r}={})=>{const l=[];return EA(!(i||r),!!i,new Map,l)(t),l},Gs=typeof structuredClone=="function"?(t,i)=>i&&("json"in i||"lossy"in i)?dy(fy(t,i)):structuredClone(t):(t,i)=>dy(fy(t,i));function OA(t,i){const r=[{type:"text",value:"↩"}];return i>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),r}function _A(t,i){return"Back to reference "+(t+1)+(i>1?"-"+i:"")}function DA(t){const i=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=t.options.footnoteBackContent||OA,l=t.options.footnoteBackLabel||_A,u=t.options.footnoteLabel||"Footnotes",o=t.options.footnoteLabelTagName||"h2",c=t.options.footnoteLabelProperties||{className:["sr-only"]},p=[];let m=-1;for(;++m<t.footnoteOrder.length;){const h=t.footnoteById.get(t.footnoteOrder[m]);if(!h)continue;const g=t.all(h),y=String(h.identifier).toUpperCase(),S=Ki(y.toLowerCase());let x=0;const A=[],L=t.footnoteCounts.get(y);for(;L!==void 0&&++x<=L;){A.length>0&&A.push({type:"text",value:" "});let q=typeof r=="string"?r:r(m,x);typeof q=="string"&&(q={type:"text",value:q}),A.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+S+(x>1?"-"+x:""),dataFootnoteBackref:"",ariaLabel:typeof l=="string"?l:l(m,x),className:["data-footnote-backref"]},children:Array.isArray(q)?q:[q]})}const _=g[g.length-1];if(_&&_.type==="element"&&_.tagName==="p"){const q=_.children[_.children.length-1];q&&q.type==="text"?q.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...A)}else g.push(...A);const E={type:"element",tagName:"li",properties:{id:i+"fn-"+S},children:t.wrap(g,!0)};t.patch(h,E),p.push(E)}if(p.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Gs(c),id:"footnote-label"},children:[{type:"text",value:u}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(p,!0)},{type:"text",value:`
`}]}}const eo=(function(t){if(t==null)return zA;if(typeof t=="function")return to(t);if(typeof t=="object")return Array.isArray(t)?NA(t):LA(t);if(typeof t=="string")return MA(t);throw new Error("Expected function, string, or object as test")});function NA(t){const i=[];let r=-1;for(;++r<t.length;)i[r]=eo(t[r]);return to(l);function l(...u){let o=-1;for(;++o<i.length;)if(i[o].apply(this,u))return!0;return!1}}function LA(t){const i=t;return to(r);function r(l){const u=l;let o;for(o in t)if(u[o]!==i[o])return!1;return!0}}function MA(t){return to(i);function i(r){return r&&r.type===t}}function to(t){return i;function i(r,l,u){return!!(RA(r)&&t.call(this,r,typeof l=="number"?l:void 0,u||void 0))}}function zA(){return!0}function RA(t){return t!==null&&typeof t=="object"&&"type"in t}const Wb=[],BA=!0,fd=!1,UA="skip";function Jb(t,i,r,l){let u;typeof i=="function"&&typeof r!="function"?(l=r,r=i):u=i;const o=eo(u),c=l?-1:1;p(t,void 0,[])();function p(m,h,g){const y=m&&typeof m=="object"?m:{};if(typeof y.type=="string"){const x=typeof y.tagName=="string"?y.tagName:typeof y.name=="string"?y.name:void 0;Object.defineProperty(S,"name",{value:"node ("+(m.type+(x?"<"+x+">":""))+")"})}return S;function S(){let x=Wb,A,L,_;if((!i||o(m,h,g[g.length-1]||void 0))&&(x=IA(r(m,g)),x[0]===fd))return x;if("children"in m&&m.children){const E=m;if(E.children&&x[0]!==UA)for(L=(l?E.children.length:-1)+c,_=g.concat(E);L>-1&&L<E.children.length;){const q=E.children[L];if(A=p(q,L,_)(),A[0]===fd)return A;L=typeof A[1]=="number"?A[1]:L+c}}return x}}}function IA(t){return Array.isArray(t)?t:typeof t=="number"?[BA,t]:t==null?Wb:[t]}function Yd(t,i,r,l){let u,o,c;typeof i=="function"&&typeof r!="function"?(o=void 0,c=i,u=r):(o=i,c=r,u=l),Jb(t,o,p,u);function p(m,h){const g=h[h.length-1],y=g?g.children.indexOf(m):void 0;return c(m,y,g)}}const pd={}.hasOwnProperty,PA={};function qA(t,i){const r=i||PA,l=new Map,u=new Map,o=new Map,c={...AA,...r.handlers},p={all:h,applyData:FA,definitionById:l,footnoteById:u,footnoteCounts:o,footnoteOrder:[],handlers:c,one:m,options:r,patch:HA,wrap:GA};return Yd(t,function(g){if(g.type==="definition"||g.type==="footnoteDefinition"){const y=g.type==="definition"?l:u,S=String(g.identifier).toUpperCase();y.has(S)||y.set(S,g)}}),p;function m(g,y){const S=g.type,x=p.handlers[S];if(pd.call(p.handlers,S)&&x)return x(p,g,y);if(p.options.passThrough&&p.options.passThrough.includes(S)){if("children"in g){const{children:L,..._}=g,E=Gs(_);return E.children=p.all(g),E}return Gs(g)}return(p.options.unknownHandler||VA)(p,g,y)}function h(g){const y=[];if("children"in g){const S=g.children;let x=-1;for(;++x<S.length;){const A=p.one(S[x],g);if(A){if(x&&S[x-1].type==="break"&&(!Array.isArray(A)&&A.type==="text"&&(A.value=py(A.value)),!Array.isArray(A)&&A.type==="element")){const L=A.children[0];L&&L.type==="text"&&(L.value=py(L.value))}Array.isArray(A)?y.push(...A):y.push(A)}}}return y}}function HA(t,i){t.position&&(i.position=_w(t))}function FA(t,i){let r=i;if(t&&t.data){const l=t.data.hName,u=t.data.hChildren,o=t.data.hProperties;if(typeof l=="string")if(r.type==="element")r.tagName=l;else{const c="children"in r?r.children:[r];r={type:"element",tagName:l,properties:{},children:c}}r.type==="element"&&o&&Object.assign(r.properties,Gs(o)),"children"in r&&r.children&&u!==null&&u!==void 0&&(r.children=u)}return r}function VA(t,i){const r=i.data||{},l="value"in i&&!(pd.call(r,"hProperties")||pd.call(r,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:t.all(i)};return t.patch(i,l),t.applyData(i,l)}function GA(t,i){const r=[];let l=-1;for(i&&r.push({type:"text",value:`
`});++l<t.length;)l&&r.push({type:"text",value:`
`}),r.push(t[l]);return i&&t.length>0&&r.push({type:"text",value:`
`}),r}function py(t){let i=0,r=t.charCodeAt(i);for(;r===9||r===32;)i++,r=t.charCodeAt(i);return t.slice(i)}function my(t,i){const r=qA(t,i),l=r.one(t,void 0),u=DA(r),o=Array.isArray(l)?{type:"root",children:l}:l||{type:"root",children:[]};return u&&o.children.push({type:"text",value:`
`},u),o}function YA(t,i){return t&&"run"in t?async function(r,l){const u=my(r,{file:l,...i});await t.run(u,l)}:function(r,l){return my(r,{file:l,...t||i})}}function hy(t){if(t)throw t}var Uc,gy;function $A(){if(gy)return Uc;gy=1;var t=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=function(h){return typeof Array.isArray=="function"?Array.isArray(h):i.call(h)==="[object Array]"},o=function(h){if(!h||i.call(h)!=="[object Object]")return!1;var g=t.call(h,"constructor"),y=h.constructor&&h.constructor.prototype&&t.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!g&&!y)return!1;var S;for(S in h);return typeof S>"u"||t.call(h,S)},c=function(h,g){r&&g.name==="__proto__"?r(h,g.name,{enumerable:!0,configurable:!0,value:g.newValue,writable:!0}):h[g.name]=g.newValue},p=function(h,g){if(g==="__proto__")if(t.call(h,g)){if(l)return l(h,g).value}else return;return h[g]};return Uc=function m(){var h,g,y,S,x,A,L=arguments[0],_=1,E=arguments.length,q=!1;for(typeof L=="boolean"&&(q=L,L=arguments[1]||{},_=2),(L==null||typeof L!="object"&&typeof L!="function")&&(L={});_<E;++_)if(h=arguments[_],h!=null)for(g in h)y=p(L,g),S=p(h,g),L!==S&&(q&&S&&(o(S)||(x=u(S)))?(x?(x=!1,A=y&&u(y)?y:[]):A=y&&o(y)?y:{},c(L,{name:g,newValue:m(q,A,S)})):typeof S<"u"&&c(L,{name:g,newValue:S}));return L},Uc}var KA=$A();const Ic=Fi(KA);function md(t){if(typeof t!="object"||t===null)return!1;const i=Object.getPrototypeOf(t);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function QA(){const t=[],i={run:r,use:l};return i;function r(...u){let o=-1;const c=u.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);p(null,...u);function p(m,...h){const g=t[++o];let y=-1;if(m){c(m);return}for(;++y<u.length;)(h[y]===null||h[y]===void 0)&&(h[y]=u[y]);u=h,g?XA(g,p)(...h):c(null,...h)}}function l(u){if(typeof u!="function")throw new TypeError("Expected `middelware` to be a function, not "+u);return t.push(u),i}}function XA(t,i){let r;return l;function l(...c){const p=t.length>c.length;let m;p&&c.push(u);try{m=t.apply(this,c)}catch(h){const g=h;if(p&&r)throw g;return u(g)}p||(m&&m.then&&typeof m.then=="function"?m.then(o,u):m instanceof Error?u(m):o(m))}function u(c,...p){r||(r=!0,i(c,...p))}function o(c){u(null,c)}}const Sn={basename:ZA,dirname:WA,extname:JA,join:ej,sep:"/"};function ZA(t,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');cl(t);let r=0,l=-1,u=t.length,o;if(i===void 0||i.length===0||i.length>t.length){for(;u--;)if(t.codePointAt(u)===47){if(o){r=u+1;break}}else l<0&&(o=!0,l=u+1);return l<0?"":t.slice(r,l)}if(i===t)return"";let c=-1,p=i.length-1;for(;u--;)if(t.codePointAt(u)===47){if(o){r=u+1;break}}else c<0&&(o=!0,c=u+1),p>-1&&(t.codePointAt(u)===i.codePointAt(p--)?p<0&&(l=u):(p=-1,l=c));return r===l?l=c:l<0&&(l=t.length),t.slice(r,l)}function WA(t){if(cl(t),t.length===0)return".";let i=-1,r=t.length,l;for(;--r;)if(t.codePointAt(r)===47){if(l){i=r;break}}else l||(l=!0);return i<0?t.codePointAt(0)===47?"/":".":i===1&&t.codePointAt(0)===47?"//":t.slice(0,i)}function JA(t){cl(t);let i=t.length,r=-1,l=0,u=-1,o=0,c;for(;i--;){const p=t.codePointAt(i);if(p===47){if(c){l=i+1;break}continue}r<0&&(c=!0,r=i+1),p===46?u<0?u=i:o!==1&&(o=1):u>-1&&(o=-1)}return u<0||r<0||o===0||o===1&&u===r-1&&u===l+1?"":t.slice(u,r)}function ej(...t){let i=-1,r;for(;++i<t.length;)cl(t[i]),t[i]&&(r=r===void 0?t[i]:r+"/"+t[i]);return r===void 0?".":tj(r)}function tj(t){cl(t);const i=t.codePointAt(0)===47;let r=nj(t,!i);return r.length===0&&!i&&(r="."),r.length>0&&t.codePointAt(t.length-1)===47&&(r+="/"),i?"/"+r:r}function nj(t,i){let r="",l=0,u=-1,o=0,c=-1,p,m;for(;++c<=t.length;){if(c<t.length)p=t.codePointAt(c);else{if(p===47)break;p=47}if(p===47){if(!(u===c-1||o===1))if(u!==c-1&&o===2){if(r.length<2||l!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(m=r.lastIndexOf("/"),m!==r.length-1){m<0?(r="",l=0):(r=r.slice(0,m),l=r.length-1-r.lastIndexOf("/")),u=c,o=0;continue}}else if(r.length>0){r="",l=0,u=c,o=0;continue}}i&&(r=r.length>0?r+"/..":"..",l=2)}else r.length>0?r+="/"+t.slice(u+1,c):r=t.slice(u+1,c),l=c-u-1;u=c,o=0}else p===46&&o>-1?o++:o=-1}return r}function cl(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const aj={cwd:ij};function ij(){return"/"}function hd(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function rj(t){if(typeof t=="string")t=new URL(t);else if(!hd(t)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(t.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return lj(t)}function lj(t){if(t.hostname!==""){const l=new TypeError('File URL host must be "localhost" or empty on darwin');throw l.code="ERR_INVALID_FILE_URL_HOST",l}const i=t.pathname;let r=-1;for(;++r<i.length;)if(i.codePointAt(r)===37&&i.codePointAt(r+1)===50){const l=i.codePointAt(r+2);if(l===70||l===102){const u=new TypeError("File URL path must not include encoded / characters");throw u.code="ERR_INVALID_FILE_URL_PATH",u}}return decodeURIComponent(i)}const Pc=["history","path","basename","stem","extname","dirname"];class ev{constructor(i){let r;i?hd(i)?r={path:i}:typeof i=="string"||sj(i)?r={value:i}:r=i:r={},this.cwd="cwd"in r?"":aj.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let l=-1;for(;++l<Pc.length;){const o=Pc[l];o in r&&r[o]!==void 0&&r[o]!==null&&(this[o]=o==="history"?[...r[o]]:r[o])}let u;for(u in r)Pc.includes(u)||(this[u]=r[u])}get basename(){return typeof this.path=="string"?Sn.basename(this.path):void 0}set basename(i){Hc(i,"basename"),qc(i,"basename"),this.path=Sn.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?Sn.dirname(this.path):void 0}set dirname(i){yy(this.basename,"dirname"),this.path=Sn.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?Sn.extname(this.path):void 0}set extname(i){if(qc(i,"extname"),yy(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Sn.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){hd(i)&&(i=rj(i)),Hc(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?Sn.basename(this.path,this.extname):void 0}set stem(i){Hc(i,"stem"),qc(i,"stem"),this.path=Sn.join(this.dirname||"",i+(this.extname||""))}fail(i,r,l){const u=this.message(i,r,l);throw u.fatal=!0,u}info(i,r,l){const u=this.message(i,r,l);return u.fatal=void 0,u}message(i,r,l){const u=new wt(i,r,l);return this.path&&(u.name=this.path+":"+u.name,u.file=this.path),u.fatal=!1,this.messages.push(u),u}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function qc(t,i){if(t&&t.includes(Sn.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+Sn.sep+"`")}function Hc(t,i){if(!t)throw new Error("`"+i+"` cannot be empty")}function yy(t,i){if(!t)throw new Error("Setting `"+i+"` requires `path` to be set too")}function sj(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const oj=(function(t){const l=this.constructor.prototype,u=l[t],o=function(){return u.apply(o,arguments)};return Object.setPrototypeOf(o,l),o}),uj={}.hasOwnProperty;class $d extends oj{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=QA()}copy(){const i=new $d;let r=-1;for(;++r<this.attachers.length;){const l=this.attachers[r];i.use(...l)}return i.data(Ic(!0,{},this.namespace)),i}data(i,r){return typeof i=="string"?arguments.length===2?(Gc("data",this.frozen),this.namespace[i]=r,this):uj.call(this.namespace,i)&&this.namespace[i]||void 0:i?(Gc("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...l]=this.attachers[this.freezeIndex];if(l[0]===!1)continue;l[0]===!0&&(l[0]=void 0);const u=r.call(i,...l);typeof u=="function"&&this.transformers.use(u)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const r=Ms(i),l=this.parser||this.Parser;return Fc("parse",l),l(String(r),r)}process(i,r){const l=this;return this.freeze(),Fc("process",this.parser||this.Parser),Vc("process",this.compiler||this.Compiler),r?u(void 0,r):new Promise(u);function u(o,c){const p=Ms(i),m=l.parse(p);l.run(m,p,function(g,y,S){if(g||!y||!S)return h(g);const x=y,A=l.stringify(x,S);fj(A)?S.value=A:S.result=A,h(g,S)});function h(g,y){g||!y?c(g):o?o(y):r(void 0,y)}}}processSync(i){let r=!1,l;return this.freeze(),Fc("processSync",this.parser||this.Parser),Vc("processSync",this.compiler||this.Compiler),this.process(i,u),vy("processSync","process",r),l;function u(o,c){r=!0,hy(o),l=c}}run(i,r,l){by(i),this.freeze();const u=this.transformers;return!l&&typeof r=="function"&&(l=r,r=void 0),l?o(void 0,l):new Promise(o);function o(c,p){const m=Ms(r);u.run(i,m,h);function h(g,y,S){const x=y||i;g?p(g):c?c(x):l(void 0,x,S)}}}runSync(i,r){let l=!1,u;return this.run(i,r,o),vy("runSync","run",l),u;function o(c,p){hy(c),u=p,l=!0}}stringify(i,r){this.freeze();const l=Ms(r),u=this.compiler||this.Compiler;return Vc("stringify",u),by(i),u(i,l)}use(i,...r){const l=this.attachers,u=this.namespace;if(Gc("use",this.frozen),i!=null)if(typeof i=="function")m(i,r);else if(typeof i=="object")Array.isArray(i)?p(i):c(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function o(h){if(typeof h=="function")m(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[g,...y]=h;m(g,y)}else c(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function c(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");p(h.plugins),h.settings&&(u.settings=Ic(!0,u.settings,h.settings))}function p(h){let g=-1;if(h!=null)if(Array.isArray(h))for(;++g<h.length;){const y=h[g];o(y)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function m(h,g){let y=-1,S=-1;for(;++y<l.length;)if(l[y][0]===h){S=y;break}if(S===-1)l.push([h,...g]);else if(g.length>0){let[x,...A]=g;const L=l[S][1];md(L)&&md(x)&&(x=Ic(!0,L,x)),l[S]=[h,x,...A]}}}}const cj=new $d().freeze();function Fc(t,i){if(typeof i!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Vc(t,i){if(typeof i!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Gc(t,i){if(i)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function by(t){if(!md(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function vy(t,i,r){if(!r)throw new Error("`"+t+"` finished async. Use `"+i+"` instead")}function Ms(t){return dj(t)?t:new ev(t)}function dj(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function fj(t){return typeof t=="string"||pj(t)}function pj(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const mj="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",xy=[],Sy={allowDangerousHtml:!0},hj=/^(https?|ircs?|mailto|xmpp)$/i,gj=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function tv(t){const i=yj(t),r=bj(t);return vj(i.runSync(i.parse(r),r),t)}function yj(t){const i=t.rehypePlugins||xy,r=t.remarkPlugins||xy,l=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...Sy}:Sy;return cj().use(W2).use(r).use(YA,l).use(i)}function bj(t){const i=t.children||"",r=new ev;return typeof i=="string"&&(r.value=i),r}function vj(t,i){const r=i.allowedElements,l=i.allowElement,u=i.components,o=i.disallowedElements,c=i.skipHtml,p=i.unwrapDisallowed,m=i.urlTransform||xj;for(const g of gj)Object.hasOwn(i,g.from)&&(""+g.from+(g.to?"use `"+g.to+"` instead":"remove it")+mj+g.id,void 0);return Yd(t,h),zw(t,{Fragment:v.Fragment,components:u,ignoreInvalidStyle:!0,jsx:v.jsx,jsxs:v.jsxs,passKeys:!0,passNode:!0});function h(g,y,S){if(g.type==="raw"&&S&&typeof y=="number")return c?S.children.splice(y,1):S.children[y]={type:"text",value:g.value},y;if(g.type==="element"){let x;for(x in zc)if(Object.hasOwn(zc,x)&&Object.hasOwn(g.properties,x)){const A=g.properties[x],L=zc[x];(L===null||L.includes(g.tagName))&&(g.properties[x]=m(String(A||""),x,g))}}if(g.type==="element"){let x=r?!r.includes(g.tagName):o?o.includes(g.tagName):!1;if(!x&&l&&typeof y=="number"&&(x=!l(g,y,S)),x&&S&&typeof y=="number")return p&&g.children?S.children.splice(y,1,...g.children):S.children.splice(y,1),y}}}function xj(t){const i=t.indexOf(":"),r=t.indexOf("?"),l=t.indexOf("#"),u=t.indexOf("/");return i===-1||u!==-1&&i>u||r!==-1&&i>r||l!==-1&&i>l||hj.test(t.slice(0,i))?t:""}function ky(t,i){const r=String(t);if(typeof i!="string")throw new TypeError("Expected character");let l=0,u=r.indexOf(i);for(;u!==-1;)l++,u=r.indexOf(i,u+i.length);return l}function Sj(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function kj(t,i,r){const u=eo((r||{}).ignore||[]),o=wj(i);let c=-1;for(;++c<o.length;)Jb(t,"text",p);function p(h,g){let y=-1,S;for(;++y<g.length;){const x=g[y],A=S?S.children:void 0;if(u(x,A?A.indexOf(x):void 0,S))return;S=x}if(S)return m(h,g)}function m(h,g){const y=g[g.length-1],S=o[c][0],x=o[c][1];let A=0;const _=y.children.indexOf(h);let E=!1,q=[];S.lastIndex=0;let U=S.exec(h.value);for(;U;){const K=U.index,te={index:U.index,input:U.input,stack:[...g,h]};let D=x(...U,te);if(typeof D=="string"&&(D=D.length>0?{type:"text",value:D}:void 0),D===!1?S.lastIndex=K+1:(A!==K&&q.push({type:"text",value:h.value.slice(A,K)}),Array.isArray(D)?q.push(...D):D&&q.push(D),A=K+U[0].length,E=!0),!S.global)break;U=S.exec(h.value)}return E?(A<h.value.length&&q.push({type:"text",value:h.value.slice(A)}),y.children.splice(_,1,...q)):q=[h],_+q.length}}function wj(t){const i=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const r=!t[0]||Array.isArray(t[0])?t:[t];let l=-1;for(;++l<r.length;){const u=r[l];i.push([Aj(u[0]),jj(u[1])])}return i}function Aj(t){return typeof t=="string"?new RegExp(Sj(t),"g"):t}function jj(t){return typeof t=="function"?t:function(){return t}}const Yc="phrasing",$c=["autolink","link","image","label"];function Tj(){return{transforms:[Lj],enter:{literalAutolink:Ej,literalAutolinkEmail:Kc,literalAutolinkHttp:Kc,literalAutolinkWww:Kc},exit:{literalAutolink:Nj,literalAutolinkEmail:Dj,literalAutolinkHttp:Oj,literalAutolinkWww:_j}}}function Cj(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Yc,notInConstruct:$c},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Yc,notInConstruct:$c},{character:":",before:"[ps]",after:"\\/",inConstruct:Yc,notInConstruct:$c}]}}function Ej(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Kc(t){this.config.enter.autolinkProtocol.call(this,t)}function Oj(t){this.config.exit.autolinkProtocol.call(this,t)}function _j(t){this.config.exit.data.call(this,t);const i=this.stack[this.stack.length-1];i.type,i.url="http://"+this.sliceSerialize(t)}function Dj(t){this.config.exit.autolinkEmail.call(this,t)}function Nj(t){this.exit(t)}function Lj(t){kj(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Mj],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),zj]],{ignore:["link","linkReference"]})}function Mj(t,i,r,l,u){let o="";if(!nv(u)||(/^w/i.test(i)&&(r=i+r,i="",o="http://"),!Rj(r)))return!1;const c=Bj(r+l);if(!c[0])return!1;const p={type:"link",title:null,url:o+i+c[0],children:[{type:"text",value:i+c[0]}]};return c[1]?[p,{type:"text",value:c[1]}]:p}function zj(t,i,r,l){return!nv(l,!0)||/[-\d_]$/.test(r)?!1:{type:"link",title:null,url:"mailto:"+i+"@"+r,children:[{type:"text",value:i+"@"+r}]}}function Rj(t){const i=t.split(".");return!(i.length<2||i[i.length-1]&&(/_/.test(i[i.length-1])||!/[a-zA-Z\d]/.test(i[i.length-1]))||i[i.length-2]&&(/_/.test(i[i.length-2])||!/[a-zA-Z\d]/.test(i[i.length-2])))}function Bj(t){const i=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!i)return[t,void 0];t=t.slice(0,i.index);let r=i[0],l=r.indexOf(")");const u=ky(t,"(");let o=ky(t,")");for(;l!==-1&&u>o;)t+=r.slice(0,l+1),r=r.slice(l+1),l=r.indexOf(")"),o++;return[t,r]}function nv(t,i){const r=t.input.charCodeAt(t.index-1);return(t.index===0||Fa(r)||Zs(r))&&(!i||r!==47)}av.peek=Yj;function Uj(){this.buffer()}function Ij(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function Pj(){this.buffer()}function qj(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function Hj(t){const i=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=hn(this.sliceSerialize(t)).toLowerCase(),r.label=i}function Fj(t){this.exit(t)}function Vj(t){const i=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=hn(this.sliceSerialize(t)).toLowerCase(),r.label=i}function Gj(t){this.exit(t)}function Yj(){return"["}function av(t,i,r,l){const u=r.createTracker(l);let o=u.move("[^");const c=r.enter("footnoteReference"),p=r.enter("reference");return o+=u.move(r.safe(r.associationId(t),{after:"]",before:o})),p(),c(),o+=u.move("]"),o}function $j(){return{enter:{gfmFootnoteCallString:Uj,gfmFootnoteCall:Ij,gfmFootnoteDefinitionLabelString:Pj,gfmFootnoteDefinition:qj},exit:{gfmFootnoteCallString:Hj,gfmFootnoteCall:Fj,gfmFootnoteDefinitionLabelString:Vj,gfmFootnoteDefinition:Gj}}}function Kj(t){let i=!1;return t&&t.firstLineBlank&&(i=!0),{handlers:{footnoteDefinition:r,footnoteReference:av},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function r(l,u,o,c){const p=o.createTracker(c);let m=p.move("[^");const h=o.enter("footnoteDefinition"),g=o.enter("label");return m+=p.move(o.safe(o.associationId(l),{before:m,after:"]"})),g(),m+=p.move("]:"),l.children&&l.children.length>0&&(p.shift(4),m+=p.move((i?`
`:" ")+o.indentLines(o.containerFlow(l,p.current()),i?iv:Qj))),h(),m}}function Qj(t,i,r){return i===0?t:iv(t,i,r)}function iv(t,i,r){return(r?"":"    ")+t}const Xj=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];rv.peek=tT;function Zj(){return{canContainEols:["delete"],enter:{strikethrough:Jj},exit:{strikethrough:eT}}}function Wj(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Xj}],handlers:{delete:rv}}}function Jj(t){this.enter({type:"delete",children:[]},t)}function eT(t){this.exit(t)}function rv(t,i,r,l){const u=r.createTracker(l),o=r.enter("strikethrough");let c=u.move("~~");return c+=r.containerPhrasing(t,{...u.current(),before:c,after:"~"}),c+=u.move("~~"),o(),c}function tT(){return"~"}function nT(t){return t.length}function aT(t,i){const r=i||{},l=(r.align||[]).concat(),u=r.stringLength||nT,o=[],c=[],p=[],m=[];let h=0,g=-1;for(;++g<t.length;){const L=[],_=[];let E=-1;for(t[g].length>h&&(h=t[g].length);++E<t[g].length;){const q=iT(t[g][E]);if(r.alignDelimiters!==!1){const U=u(q);_[E]=U,(m[E]===void 0||U>m[E])&&(m[E]=U)}L.push(q)}c[g]=L,p[g]=_}let y=-1;if(typeof l=="object"&&"length"in l)for(;++y<h;)o[y]=wy(l[y]);else{const L=wy(l);for(;++y<h;)o[y]=L}y=-1;const S=[],x=[];for(;++y<h;){const L=o[y];let _="",E="";L===99?(_=":",E=":"):L===108?_=":":L===114&&(E=":");let q=r.alignDelimiters===!1?1:Math.max(1,m[y]-_.length-E.length);const U=_+"-".repeat(q)+E;r.alignDelimiters!==!1&&(q=_.length+q+E.length,q>m[y]&&(m[y]=q),x[y]=q),S[y]=U}c.splice(1,0,S),p.splice(1,0,x),g=-1;const A=[];for(;++g<c.length;){const L=c[g],_=p[g];y=-1;const E=[];for(;++y<h;){const q=L[y]||"";let U="",K="";if(r.alignDelimiters!==!1){const te=m[y]-(_[y]||0),D=o[y];D===114?U=" ".repeat(te):D===99?te%2?(U=" ".repeat(te/2+.5),K=" ".repeat(te/2-.5)):(U=" ".repeat(te/2),K=U):K=" ".repeat(te)}r.delimiterStart!==!1&&!y&&E.push("|"),r.padding!==!1&&!(r.alignDelimiters===!1&&q==="")&&(r.delimiterStart!==!1||y)&&E.push(" "),r.alignDelimiters!==!1&&E.push(U),E.push(q),r.alignDelimiters!==!1&&E.push(K),r.padding!==!1&&E.push(" "),(r.delimiterEnd!==!1||y!==h-1)&&E.push("|")}A.push(r.delimiterEnd===!1?E.join("").replace(/ +$/,""):E.join(""))}return A.join(`
`)}function iT(t){return t==null?"":String(t)}function wy(t){const i=typeof t=="string"?t.codePointAt(0):0;return i===67||i===99?99:i===76||i===108?108:i===82||i===114?114:0}function rT(t,i,r,l){const u=r.enter("blockquote"),o=r.createTracker(l);o.move("> "),o.shift(2);const c=r.indentLines(r.containerFlow(t,o.current()),lT);return u(),c}function lT(t,i,r){return">"+(r?"":" ")+t}function sT(t,i){return Ay(t,i.inConstruct,!0)&&!Ay(t,i.notInConstruct,!1)}function Ay(t,i,r){if(typeof i=="string"&&(i=[i]),!i||i.length===0)return r;let l=-1;for(;++l<i.length;)if(t.includes(i[l]))return!0;return!1}function jy(t,i,r,l){let u=-1;for(;++u<r.unsafe.length;)if(r.unsafe[u].character===`
`&&sT(r.stack,r.unsafe[u]))return/[ \t]/.test(l.before)?"":" ";return`\\
`}function oT(t,i){const r=String(t);let l=r.indexOf(i),u=l,o=0,c=0;if(typeof i!="string")throw new TypeError("Expected substring");for(;l!==-1;)l===u?++o>c&&(c=o):o=1,u=l+i.length,l=r.indexOf(i,u);return c}function uT(t,i){return!!(i.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function cT(t){const i=t.options.fence||"`";if(i!=="`"&&i!=="~")throw new Error("Cannot serialize code with `"+i+"` for `options.fence`, expected `` ` `` or `~`");return i}function dT(t,i,r,l){const u=cT(r),o=t.value||"",c=u==="`"?"GraveAccent":"Tilde";if(uT(t,r)){const y=r.enter("codeIndented"),S=r.indentLines(o,fT);return y(),S}const p=r.createTracker(l),m=u.repeat(Math.max(oT(o,u)+1,3)),h=r.enter("codeFenced");let g=p.move(m);if(t.lang){const y=r.enter(`codeFencedLang${c}`);g+=p.move(r.safe(t.lang,{before:g,after:" ",encode:["`"],...p.current()})),y()}if(t.lang&&t.meta){const y=r.enter(`codeFencedMeta${c}`);g+=p.move(" "),g+=p.move(r.safe(t.meta,{before:g,after:`
`,encode:["`"],...p.current()})),y()}return g+=p.move(`
`),o&&(g+=p.move(o+`
`)),g+=p.move(m),h(),g}function fT(t,i,r){return(r?"":"    ")+t}function Kd(t){const i=t.options.quote||'"';if(i!=='"'&&i!=="'")throw new Error("Cannot serialize title with `"+i+"` for `options.quote`, expected `\"`, or `'`");return i}function pT(t,i,r,l){const u=Kd(r),o=u==='"'?"Quote":"Apostrophe",c=r.enter("definition");let p=r.enter("label");const m=r.createTracker(l);let h=m.move("[");return h+=m.move(r.safe(r.associationId(t),{before:h,after:"]",...m.current()})),h+=m.move("]: "),p(),!t.url||/[\0- \u007F]/.test(t.url)?(p=r.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(r.safe(t.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(p=r.enter("destinationRaw"),h+=m.move(r.safe(t.url,{before:h,after:t.title?" ":`
`,...m.current()}))),p(),t.title&&(p=r.enter(`title${o}`),h+=m.move(" "+u),h+=m.move(r.safe(t.title,{before:h,after:u,...m.current()})),h+=m.move(u),p()),c(),h}function mT(t){const i=t.options.emphasis||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize emphasis with `"+i+"` for `options.emphasis`, expected `*`, or `_`");return i}function ll(t){return"&#x"+t.toString(16).toUpperCase()+";"}function Ys(t,i,r){const l=Hi(t),u=Hi(i);return l===void 0?u===void 0?r==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:u===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:l===1?u===void 0?{inside:!1,outside:!1}:u===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:u===void 0?{inside:!1,outside:!1}:u===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}lv.peek=hT;function lv(t,i,r,l){const u=mT(r),o=r.enter("emphasis"),c=r.createTracker(l),p=c.move(u);let m=c.move(r.containerPhrasing(t,{after:u,before:p,...c.current()}));const h=m.charCodeAt(0),g=Ys(l.before.charCodeAt(l.before.length-1),h,u);g.inside&&(m=ll(h)+m.slice(1));const y=m.charCodeAt(m.length-1),S=Ys(l.after.charCodeAt(0),y,u);S.inside&&(m=m.slice(0,-1)+ll(y));const x=c.move(u);return o(),r.attentionEncodeSurroundingInfo={after:S.outside,before:g.outside},p+m+x}function hT(t,i,r){return r.options.emphasis||"*"}function gT(t,i){let r=!1;return Yd(t,function(l){if("value"in l&&/\r?\n|\r/.test(l.value)||l.type==="break")return r=!0,fd}),!!((!t.depth||t.depth<3)&&Pd(t)&&(i.options.setext||r))}function yT(t,i,r,l){const u=Math.max(Math.min(6,t.depth||1),1),o=r.createTracker(l);if(gT(t,r)){const g=r.enter("headingSetext"),y=r.enter("phrasing"),S=r.containerPhrasing(t,{...o.current(),before:`
`,after:`
`});return y(),g(),S+`
`+(u===1?"=":"-").repeat(S.length-(Math.max(S.lastIndexOf("\r"),S.lastIndexOf(`
`))+1))}const c="#".repeat(u),p=r.enter("headingAtx"),m=r.enter("phrasing");o.move(c+" ");let h=r.containerPhrasing(t,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(h)&&(h=ll(h.charCodeAt(0))+h.slice(1)),h=h?c+" "+h:c,r.options.closeAtx&&(h+=" "+c),m(),p(),h}sv.peek=bT;function sv(t){return t.value||""}function bT(){return"<"}ov.peek=vT;function ov(t,i,r,l){const u=Kd(r),o=u==='"'?"Quote":"Apostrophe",c=r.enter("image");let p=r.enter("label");const m=r.createTracker(l);let h=m.move("![");return h+=m.move(r.safe(t.alt,{before:h,after:"]",...m.current()})),h+=m.move("]("),p(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(p=r.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(r.safe(t.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(p=r.enter("destinationRaw"),h+=m.move(r.safe(t.url,{before:h,after:t.title?" ":")",...m.current()}))),p(),t.title&&(p=r.enter(`title${o}`),h+=m.move(" "+u),h+=m.move(r.safe(t.title,{before:h,after:u,...m.current()})),h+=m.move(u),p()),h+=m.move(")"),c(),h}function vT(){return"!"}uv.peek=xT;function uv(t,i,r,l){const u=t.referenceType,o=r.enter("imageReference");let c=r.enter("label");const p=r.createTracker(l);let m=p.move("![");const h=r.safe(t.alt,{before:m,after:"]",...p.current()});m+=p.move(h+"]["),c();const g=r.stack;r.stack=[],c=r.enter("reference");const y=r.safe(r.associationId(t),{before:m,after:"]",...p.current()});return c(),r.stack=g,o(),u==="full"||!h||h!==y?m+=p.move(y+"]"):u==="shortcut"?m=m.slice(0,-1):m+=p.move("]"),m}function xT(){return"!"}cv.peek=ST;function cv(t,i,r){let l=t.value||"",u="`",o=-1;for(;new RegExp("(^|[^`])"+u+"([^`]|$)").test(l);)u+="`";for(/[^ \r\n]/.test(l)&&(/^[ \r\n]/.test(l)&&/[ \r\n]$/.test(l)||/^`|`$/.test(l))&&(l=" "+l+" ");++o<r.unsafe.length;){const c=r.unsafe[o],p=r.compilePattern(c);let m;if(c.atBreak)for(;m=p.exec(l);){let h=m.index;l.charCodeAt(h)===10&&l.charCodeAt(h-1)===13&&h--,l=l.slice(0,h)+" "+l.slice(m.index+1)}}return u+l+u}function ST(){return"`"}function dv(t,i){const r=Pd(t);return!!(!i.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(r===t.url||"mailto:"+r===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}fv.peek=kT;function fv(t,i,r,l){const u=Kd(r),o=u==='"'?"Quote":"Apostrophe",c=r.createTracker(l);let p,m;if(dv(t,r)){const g=r.stack;r.stack=[],p=r.enter("autolink");let y=c.move("<");return y+=c.move(r.containerPhrasing(t,{before:y,after:">",...c.current()})),y+=c.move(">"),p(),r.stack=g,y}p=r.enter("link"),m=r.enter("label");let h=c.move("[");return h+=c.move(r.containerPhrasing(t,{before:h,after:"](",...c.current()})),h+=c.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=r.enter("destinationLiteral"),h+=c.move("<"),h+=c.move(r.safe(t.url,{before:h,after:">",...c.current()})),h+=c.move(">")):(m=r.enter("destinationRaw"),h+=c.move(r.safe(t.url,{before:h,after:t.title?" ":")",...c.current()}))),m(),t.title&&(m=r.enter(`title${o}`),h+=c.move(" "+u),h+=c.move(r.safe(t.title,{before:h,after:u,...c.current()})),h+=c.move(u),m()),h+=c.move(")"),p(),h}function kT(t,i,r){return dv(t,r)?"<":"["}pv.peek=wT;function pv(t,i,r,l){const u=t.referenceType,o=r.enter("linkReference");let c=r.enter("label");const p=r.createTracker(l);let m=p.move("[");const h=r.containerPhrasing(t,{before:m,after:"]",...p.current()});m+=p.move(h+"]["),c();const g=r.stack;r.stack=[],c=r.enter("reference");const y=r.safe(r.associationId(t),{before:m,after:"]",...p.current()});return c(),r.stack=g,o(),u==="full"||!h||h!==y?m+=p.move(y+"]"):u==="shortcut"?m=m.slice(0,-1):m+=p.move("]"),m}function wT(){return"["}function Qd(t){const i=t.options.bullet||"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bullet`, expected `*`, `+`, or `-`");return i}function AT(t){const i=Qd(t),r=t.options.bulletOther;if(!r)return i==="*"?"-":"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(r===i)throw new Error("Expected `bullet` (`"+i+"`) and `bulletOther` (`"+r+"`) to be different");return r}function jT(t){const i=t.options.bulletOrdered||".";if(i!=="."&&i!==")")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOrdered`, expected `.` or `)`");return i}function mv(t){const i=t.options.rule||"*";if(i!=="*"&&i!=="-"&&i!=="_")throw new Error("Cannot serialize rules with `"+i+"` for `options.rule`, expected `*`, `-`, or `_`");return i}function TT(t,i,r,l){const u=r.enter("list"),o=r.bulletCurrent;let c=t.ordered?jT(r):Qd(r);const p=t.ordered?c==="."?")":".":AT(r);let m=i&&r.bulletLastUsed?c===r.bulletLastUsed:!1;if(!t.ordered){const g=t.children?t.children[0]:void 0;if((c==="*"||c==="-")&&g&&(!g.children||!g.children[0])&&r.stack[r.stack.length-1]==="list"&&r.stack[r.stack.length-2]==="listItem"&&r.stack[r.stack.length-3]==="list"&&r.stack[r.stack.length-4]==="listItem"&&r.indexStack[r.indexStack.length-1]===0&&r.indexStack[r.indexStack.length-2]===0&&r.indexStack[r.indexStack.length-3]===0&&(m=!0),mv(r)===c&&g){let y=-1;for(;++y<t.children.length;){const S=t.children[y];if(S&&S.type==="listItem"&&S.children&&S.children[0]&&S.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(c=p),r.bulletCurrent=c;const h=r.containerFlow(t,l);return r.bulletLastUsed=c,r.bulletCurrent=o,u(),h}function CT(t){const i=t.options.listItemIndent||"one";if(i!=="tab"&&i!=="one"&&i!=="mixed")throw new Error("Cannot serialize items with `"+i+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return i}function ET(t,i,r,l){const u=CT(r);let o=r.bulletCurrent||Qd(r);i&&i.type==="list"&&i.ordered&&(o=(typeof i.start=="number"&&i.start>-1?i.start:1)+(r.options.incrementListMarker===!1?0:i.children.indexOf(t))+o);let c=o.length+1;(u==="tab"||u==="mixed"&&(i&&i.type==="list"&&i.spread||t.spread))&&(c=Math.ceil(c/4)*4);const p=r.createTracker(l);p.move(o+" ".repeat(c-o.length)),p.shift(c);const m=r.enter("listItem"),h=r.indentLines(r.containerFlow(t,p.current()),g);return m(),h;function g(y,S,x){return S?(x?"":" ".repeat(c))+y:(x?o:o+" ".repeat(c-o.length))+y}}function OT(t,i,r,l){const u=r.enter("paragraph"),o=r.enter("phrasing"),c=r.containerPhrasing(t,l);return o(),u(),c}const _T=eo(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function DT(t,i,r,l){return(t.children.some(function(c){return _T(c)})?r.containerPhrasing:r.containerFlow).call(r,t,l)}function NT(t){const i=t.options.strong||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize strong with `"+i+"` for `options.strong`, expected `*`, or `_`");return i}hv.peek=LT;function hv(t,i,r,l){const u=NT(r),o=r.enter("strong"),c=r.createTracker(l),p=c.move(u+u);let m=c.move(r.containerPhrasing(t,{after:u,before:p,...c.current()}));const h=m.charCodeAt(0),g=Ys(l.before.charCodeAt(l.before.length-1),h,u);g.inside&&(m=ll(h)+m.slice(1));const y=m.charCodeAt(m.length-1),S=Ys(l.after.charCodeAt(0),y,u);S.inside&&(m=m.slice(0,-1)+ll(y));const x=c.move(u+u);return o(),r.attentionEncodeSurroundingInfo={after:S.outside,before:g.outside},p+m+x}function LT(t,i,r){return r.options.strong||"*"}function MT(t,i,r,l){return r.safe(t.value,l)}function zT(t){const i=t.options.ruleRepetition||3;if(i<3)throw new Error("Cannot serialize rules with repetition `"+i+"` for `options.ruleRepetition`, expected `3` or more");return i}function RT(t,i,r){const l=(mv(r)+(r.options.ruleSpaces?" ":"")).repeat(zT(r));return r.options.ruleSpaces?l.slice(0,-1):l}const gv={blockquote:rT,break:jy,code:dT,definition:pT,emphasis:lv,hardBreak:jy,heading:yT,html:sv,image:ov,imageReference:uv,inlineCode:cv,link:fv,linkReference:pv,list:TT,listItem:ET,paragraph:OT,root:DT,strong:hv,text:MT,thematicBreak:RT};function BT(){return{enter:{table:UT,tableData:Ty,tableHeader:Ty,tableRow:PT},exit:{codeText:qT,table:IT,tableData:Qc,tableHeader:Qc,tableRow:Qc}}}function UT(t){const i=t._align;this.enter({type:"table",align:i.map(function(r){return r==="none"?null:r}),children:[]},t),this.data.inTable=!0}function IT(t){this.exit(t),this.data.inTable=void 0}function PT(t){this.enter({type:"tableRow",children:[]},t)}function Qc(t){this.exit(t)}function Ty(t){this.enter({type:"tableCell",children:[]},t)}function qT(t){let i=this.resume();this.data.inTable&&(i=i.replace(/\\([\\|])/g,HT));const r=this.stack[this.stack.length-1];r.type,r.value=i,this.exit(t)}function HT(t,i){return i==="|"?i:t}function FT(t){const i=t||{},r=i.tableCellPadding,l=i.tablePipeAlign,u=i.stringLength,o=r?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:S,table:c,tableCell:m,tableRow:p}};function c(x,A,L,_){return h(g(x,L,_),x.align)}function p(x,A,L,_){const E=y(x,L,_),q=h([E]);return q.slice(0,q.indexOf(`
`))}function m(x,A,L,_){const E=L.enter("tableCell"),q=L.enter("phrasing"),U=L.containerPhrasing(x,{..._,before:o,after:o});return q(),E(),U}function h(x,A){return aT(x,{align:A,alignDelimiters:l,padding:r,stringLength:u})}function g(x,A,L){const _=x.children;let E=-1;const q=[],U=A.enter("table");for(;++E<_.length;)q[E]=y(_[E],A,L);return U(),q}function y(x,A,L){const _=x.children;let E=-1;const q=[],U=A.enter("tableRow");for(;++E<_.length;)q[E]=m(_[E],x,A,L);return U(),q}function S(x,A,L){let _=gv.inlineCode(x,A,L);return L.stack.includes("tableCell")&&(_=_.replace(/\|/g,"\\$&")),_}}function VT(){return{exit:{taskListCheckValueChecked:Cy,taskListCheckValueUnchecked:Cy,paragraph:YT}}}function GT(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:$T}}}function Cy(t){const i=this.stack[this.stack.length-2];i.type,i.checked=t.type==="taskListCheckValueChecked"}function YT(t){const i=this.stack[this.stack.length-2];if(i&&i.type==="listItem"&&typeof i.checked=="boolean"){const r=this.stack[this.stack.length-1];r.type;const l=r.children[0];if(l&&l.type==="text"){const u=i.children;let o=-1,c;for(;++o<u.length;){const p=u[o];if(p.type==="paragraph"){c=p;break}}c===r&&(l.value=l.value.slice(1),l.value.length===0?r.children.shift():r.position&&l.position&&typeof l.position.start.offset=="number"&&(l.position.start.column++,l.position.start.offset++,r.position.start=Object.assign({},l.position.start)))}}this.exit(t)}function $T(t,i,r,l){const u=t.children[0],o=typeof t.checked=="boolean"&&u&&u.type==="paragraph",c="["+(t.checked?"x":" ")+"] ",p=r.createTracker(l);o&&p.move(c);let m=gv.listItem(t,i,r,{...l,...p.current()});return o&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),m;function h(g){return g+c}}function KT(){return[Tj(),$j(),Zj(),BT(),VT()]}function QT(t){return{extensions:[Cj(),Kj(t),Wj(),FT(t),GT()]}}const XT={tokenize:nC,partial:!0},yv={tokenize:aC,partial:!0},bv={tokenize:iC,partial:!0},vv={tokenize:rC,partial:!0},ZT={tokenize:lC,partial:!0},xv={name:"wwwAutolink",tokenize:eC,previous:kv},Sv={name:"protocolAutolink",tokenize:tC,previous:wv},Vn={name:"emailAutolink",tokenize:JT,previous:Av},wn={};function WT(){return{text:wn}}let Ha=48;for(;Ha<123;)wn[Ha]=Vn,Ha++,Ha===58?Ha=65:Ha===91&&(Ha=97);wn[43]=Vn;wn[45]=Vn;wn[46]=Vn;wn[95]=Vn;wn[72]=[Vn,Sv];wn[104]=[Vn,Sv];wn[87]=[Vn,xv];wn[119]=[Vn,xv];function JT(t,i,r){const l=this;let u,o;return c;function c(y){return!gd(y)||!Av.call(l,l.previous)||Xd(l.events)?r(y):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),p(y))}function p(y){return gd(y)?(t.consume(y),p):y===64?(t.consume(y),m):r(y)}function m(y){return y===46?t.check(ZT,g,h)(y):y===45||y===95||kt(y)?(o=!0,t.consume(y),m):g(y)}function h(y){return t.consume(y),u=!0,m}function g(y){return o&&u&&Ct(l.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),i(y)):r(y)}}function eC(t,i,r){const l=this;return u;function u(c){return c!==87&&c!==119||!kv.call(l,l.previous)||Xd(l.events)?r(c):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(XT,t.attempt(yv,t.attempt(bv,o),r),r)(c))}function o(c){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),i(c)}}function tC(t,i,r){const l=this;let u="",o=!1;return c;function c(y){return(y===72||y===104)&&wv.call(l,l.previous)&&!Xd(l.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),u+=String.fromCodePoint(y),t.consume(y),p):r(y)}function p(y){if(Ct(y)&&u.length<5)return u+=String.fromCodePoint(y),t.consume(y),p;if(y===58){const S=u.toLowerCase();if(S==="http"||S==="https")return t.consume(y),m}return r(y)}function m(y){return y===47?(t.consume(y),o?h:(o=!0,m)):r(y)}function h(y){return y===null||Fs(y)||Ge(y)||Fa(y)||Zs(y)?r(y):t.attempt(yv,t.attempt(bv,g),r)(y)}function g(y){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),i(y)}}function nC(t,i,r){let l=0;return u;function u(c){return(c===87||c===119)&&l<3?(l++,t.consume(c),u):c===46&&l===3?(t.consume(c),o):r(c)}function o(c){return c===null?r(c):i(c)}}function aC(t,i,r){let l,u,o;return c;function c(h){return h===46||h===95?t.check(vv,m,p)(h):h===null||Ge(h)||Fa(h)||h!==45&&Zs(h)?m(h):(o=!0,t.consume(h),c)}function p(h){return h===95?l=!0:(u=l,l=void 0),t.consume(h),c}function m(h){return u||l||!o?r(h):i(h)}}function iC(t,i){let r=0,l=0;return u;function u(c){return c===40?(r++,t.consume(c),u):c===41&&l<r?o(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?t.check(vv,i,o)(c):c===null||Ge(c)||Fa(c)?i(c):(t.consume(c),u)}function o(c){return c===41&&l++,t.consume(c),u}}function rC(t,i,r){return l;function l(p){return p===33||p===34||p===39||p===41||p===42||p===44||p===46||p===58||p===59||p===63||p===95||p===126?(t.consume(p),l):p===38?(t.consume(p),o):p===93?(t.consume(p),u):p===60||p===null||Ge(p)||Fa(p)?i(p):r(p)}function u(p){return p===null||p===40||p===91||Ge(p)||Fa(p)?i(p):l(p)}function o(p){return Ct(p)?c(p):r(p)}function c(p){return p===59?(t.consume(p),l):Ct(p)?(t.consume(p),c):r(p)}}function lC(t,i,r){return l;function l(o){return t.consume(o),u}function u(o){return kt(o)?r(o):i(o)}}function kv(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Ge(t)}function wv(t){return!Ct(t)}function Av(t){return!(t===47||gd(t))}function gd(t){return t===43||t===45||t===46||t===95||kt(t)}function Xd(t){let i=t.length,r=!1;for(;i--;){const l=t[i][1];if((l.type==="labelLink"||l.type==="labelImage")&&!l._balanced){r=!0;break}if(l._gfmAutolinkLiteralWalkedInto){r=!1;break}}return t.length>0&&!r&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),r}const sC={tokenize:hC,partial:!0};function oC(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:fC,continuation:{tokenize:pC},exit:mC}},text:{91:{name:"gfmFootnoteCall",tokenize:dC},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:uC,resolveTo:cC}}}}function uC(t,i,r){const l=this;let u=l.events.length;const o=l.parser.gfmFootnotes||(l.parser.gfmFootnotes=[]);let c;for(;u--;){const m=l.events[u][1];if(m.type==="labelImage"){c=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return p;function p(m){if(!c||!c._balanced)return r(m);const h=hn(l.sliceSerialize({start:c.end,end:l.now()}));return h.codePointAt(0)!==94||!o.includes(h.slice(1))?r(m):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(m),t.exit("gfmFootnoteCallLabelMarker"),i(m))}}function cC(t,i){let r=t.length;for(;r--;)if(t[r][1].type==="labelImage"&&t[r][0]==="enter"){t[r][1];break}t[r+1][1].type="data",t[r+3][1].type="gfmFootnoteCallLabelMarker";const l={type:"gfmFootnoteCall",start:Object.assign({},t[r+3][1].start),end:Object.assign({},t[t.length-1][1].end)},u={type:"gfmFootnoteCallMarker",start:Object.assign({},t[r+3][1].end),end:Object.assign({},t[r+3][1].end)};u.end.column++,u.end.offset++,u.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},u.end),end:Object.assign({},t[t.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},p=[t[r+1],t[r+2],["enter",l,i],t[r+3],t[r+4],["enter",u,i],["exit",u,i],["enter",o,i],["enter",c,i],["exit",c,i],["exit",o,i],t[t.length-2],t[t.length-1],["exit",l,i]];return t.splice(r,t.length-r+1,...p),t}function dC(t,i,r){const l=this,u=l.parser.gfmFootnotes||(l.parser.gfmFootnotes=[]);let o=0,c;return p;function p(y){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(y),t.exit("gfmFootnoteCallLabelMarker"),m}function m(y){return y!==94?r(y):(t.enter("gfmFootnoteCallMarker"),t.consume(y),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",h)}function h(y){if(o>999||y===93&&!c||y===null||y===91||Ge(y))return r(y);if(y===93){t.exit("chunkString");const S=t.exit("gfmFootnoteCallString");return u.includes(hn(l.sliceSerialize(S)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(y),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),i):r(y)}return Ge(y)||(c=!0),o++,t.consume(y),y===92?g:h}function g(y){return y===91||y===92||y===93?(t.consume(y),o++,h):h(y)}}function fC(t,i,r){const l=this,u=l.parser.gfmFootnotes||(l.parser.gfmFootnotes=[]);let o,c=0,p;return m;function m(A){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(A),t.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(A){return A===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(A),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",g):r(A)}function g(A){if(c>999||A===93&&!p||A===null||A===91||Ge(A))return r(A);if(A===93){t.exit("chunkString");const L=t.exit("gfmFootnoteDefinitionLabelString");return o=hn(l.sliceSerialize(L)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(A),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),S}return Ge(A)||(p=!0),c++,t.consume(A),A===92?y:g}function y(A){return A===91||A===92||A===93?(t.consume(A),c++,g):g(A)}function S(A){return A===58?(t.enter("definitionMarker"),t.consume(A),t.exit("definitionMarker"),u.includes(o)||u.push(o),_e(t,x,"gfmFootnoteDefinitionWhitespace")):r(A)}function x(A){return i(A)}}function pC(t,i,r){return t.check(ul,i,t.attempt(sC,i,r))}function mC(t){t.exit("gfmFootnoteDefinition")}function hC(t,i,r){const l=this;return _e(t,u,"gfmFootnoteDefinitionIndent",5);function u(o){const c=l.events[l.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?i(o):r(o)}}function gC(t){let r=(t||{}).singleTilde;const l={name:"strikethrough",tokenize:o,resolveAll:u};return r==null&&(r=!0),{text:{126:l},insideSpan:{null:[l]},attentionMarkers:{null:[126]}};function u(c,p){let m=-1;for(;++m<c.length;)if(c[m][0]==="enter"&&c[m][1].type==="strikethroughSequenceTemporary"&&c[m][1]._close){let h=m;for(;h--;)if(c[h][0]==="exit"&&c[h][1].type==="strikethroughSequenceTemporary"&&c[h][1]._open&&c[m][1].end.offset-c[m][1].start.offset===c[h][1].end.offset-c[h][1].start.offset){c[m][1].type="strikethroughSequence",c[h][1].type="strikethroughSequence";const g={type:"strikethrough",start:Object.assign({},c[h][1].start),end:Object.assign({},c[m][1].end)},y={type:"strikethroughText",start:Object.assign({},c[h][1].end),end:Object.assign({},c[m][1].start)},S=[["enter",g,p],["enter",c[h][1],p],["exit",c[h][1],p],["enter",y,p]],x=p.parser.constructs.insideSpan.null;x&&Kt(S,S.length,0,Ws(x,c.slice(h+1,m),p)),Kt(S,S.length,0,[["exit",y,p],["enter",c[m][1],p],["exit",c[m][1],p],["exit",g,p]]),Kt(c,h-1,m-h+3,S),m=h+S.length-2;break}}for(m=-1;++m<c.length;)c[m][1].type==="strikethroughSequenceTemporary"&&(c[m][1].type="data");return c}function o(c,p,m){const h=this.previous,g=this.events;let y=0;return S;function S(A){return h===126&&g[g.length-1][1].type!=="characterEscape"?m(A):(c.enter("strikethroughSequenceTemporary"),x(A))}function x(A){const L=Hi(h);if(A===126)return y>1?m(A):(c.consume(A),y++,x);if(y<2&&!r)return m(A);const _=c.exit("strikethroughSequenceTemporary"),E=Hi(A);return _._open=!E||E===2&&!!L,_._close=!L||L===2&&!!E,p(A)}}}class yC{constructor(){this.map=[]}add(i,r,l){bC(this,i,r,l)}consume(i){if(this.map.sort(function(o,c){return o[0]-c[0]}),this.map.length===0)return;let r=this.map.length;const l=[];for(;r>0;)r-=1,l.push(i.slice(this.map[r][0]+this.map[r][1]),this.map[r][2]),i.length=this.map[r][0];l.push(i.slice()),i.length=0;let u=l.pop();for(;u;){for(const o of u)i.push(o);u=l.pop()}this.map.length=0}}function bC(t,i,r,l){let u=0;if(!(r===0&&l.length===0)){for(;u<t.map.length;){if(t.map[u][0]===i){t.map[u][1]+=r,t.map[u][2].push(...l);return}u+=1}t.map.push([i,r,l])}}function vC(t,i){let r=!1;const l=[];for(;i<t.length;){const u=t[i];if(r){if(u[0]==="enter")u[1].type==="tableContent"&&l.push(t[i+1][1].type==="tableDelimiterMarker"?"left":"none");else if(u[1].type==="tableContent"){if(t[i-1][1].type==="tableDelimiterMarker"){const o=l.length-1;l[o]=l[o]==="left"?"center":"right"}}else if(u[1].type==="tableDelimiterRow")break}else u[0]==="enter"&&u[1].type==="tableDelimiterRow"&&(r=!0);i+=1}return l}function xC(){return{flow:{null:{name:"table",tokenize:SC,resolveAll:kC}}}}function SC(t,i,r){const l=this;let u=0,o=0,c;return p;function p(R){let ee=l.events.length-1;for(;ee>-1;){const ae=l.events[ee][1].type;if(ae==="lineEnding"||ae==="linePrefix")ee--;else break}const J=ee>-1?l.events[ee][1].type:null,re=J==="tableHead"||J==="tableRow"?D:m;return re===D&&l.parser.lazy[l.now().line]?r(R):re(R)}function m(R){return t.enter("tableHead"),t.enter("tableRow"),h(R)}function h(R){return R===124||(c=!0,o+=1),g(R)}function g(R){return R===null?r(R):me(R)?o>1?(o=0,l.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(R),t.exit("lineEnding"),x):r(R):Te(R)?_e(t,g,"whitespace")(R):(o+=1,c&&(c=!1,u+=1),R===124?(t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),c=!0,g):(t.enter("data"),y(R)))}function y(R){return R===null||R===124||Ge(R)?(t.exit("data"),g(R)):(t.consume(R),R===92?S:y)}function S(R){return R===92||R===124?(t.consume(R),y):y(R)}function x(R){return l.interrupt=!1,l.parser.lazy[l.now().line]?r(R):(t.enter("tableDelimiterRow"),c=!1,Te(R)?_e(t,A,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):A(R))}function A(R){return R===45||R===58?_(R):R===124?(c=!0,t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),L):te(R)}function L(R){return Te(R)?_e(t,_,"whitespace")(R):_(R)}function _(R){return R===58?(o+=1,c=!0,t.enter("tableDelimiterMarker"),t.consume(R),t.exit("tableDelimiterMarker"),E):R===45?(o+=1,E(R)):R===null||me(R)?K(R):te(R)}function E(R){return R===45?(t.enter("tableDelimiterFiller"),q(R)):te(R)}function q(R){return R===45?(t.consume(R),q):R===58?(c=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(R),t.exit("tableDelimiterMarker"),U):(t.exit("tableDelimiterFiller"),U(R))}function U(R){return Te(R)?_e(t,K,"whitespace")(R):K(R)}function K(R){return R===124?A(R):R===null||me(R)?!c||u!==o?te(R):(t.exit("tableDelimiterRow"),t.exit("tableHead"),i(R)):te(R)}function te(R){return r(R)}function D(R){return t.enter("tableRow"),$(R)}function $(R){return R===124?(t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),$):R===null||me(R)?(t.exit("tableRow"),i(R)):Te(R)?_e(t,$,"whitespace")(R):(t.enter("data"),le(R))}function le(R){return R===null||R===124||Ge(R)?(t.exit("data"),$(R)):(t.consume(R),R===92?de:le)}function de(R){return R===92||R===124?(t.consume(R),le):le(R)}}function kC(t,i){let r=-1,l=!0,u=0,o=[0,0,0,0],c=[0,0,0,0],p=!1,m=0,h,g,y;const S=new yC;for(;++r<t.length;){const x=t[r],A=x[1];x[0]==="enter"?A.type==="tableHead"?(p=!1,m!==0&&(Ey(S,i,m,h,g),g=void 0,m=0),h={type:"table",start:Object.assign({},A.start),end:Object.assign({},A.end)},S.add(r,0,[["enter",h,i]])):A.type==="tableRow"||A.type==="tableDelimiterRow"?(l=!0,y=void 0,o=[0,0,0,0],c=[0,r+1,0,0],p&&(p=!1,g={type:"tableBody",start:Object.assign({},A.start),end:Object.assign({},A.end)},S.add(r,0,[["enter",g,i]])),u=A.type==="tableDelimiterRow"?2:g?3:1):u&&(A.type==="data"||A.type==="tableDelimiterMarker"||A.type==="tableDelimiterFiller")?(l=!1,c[2]===0&&(o[1]!==0&&(c[0]=c[1],y=zs(S,i,o,u,void 0,y),o=[0,0,0,0]),c[2]=r)):A.type==="tableCellDivider"&&(l?l=!1:(o[1]!==0&&(c[0]=c[1],y=zs(S,i,o,u,void 0,y)),o=c,c=[o[1],r,0,0])):A.type==="tableHead"?(p=!0,m=r):A.type==="tableRow"||A.type==="tableDelimiterRow"?(m=r,o[1]!==0?(c[0]=c[1],y=zs(S,i,o,u,r,y)):c[1]!==0&&(y=zs(S,i,c,u,r,y)),u=0):u&&(A.type==="data"||A.type==="tableDelimiterMarker"||A.type==="tableDelimiterFiller")&&(c[3]=r)}for(m!==0&&Ey(S,i,m,h,g),S.consume(i.events),r=-1;++r<i.events.length;){const x=i.events[r];x[0]==="enter"&&x[1].type==="table"&&(x[1]._align=vC(i.events,r))}return t}function zs(t,i,r,l,u,o){const c=l===1?"tableHeader":l===2?"tableDelimiter":"tableData",p="tableContent";r[0]!==0&&(o.end=Object.assign({},Bi(i.events,r[0])),t.add(r[0],0,[["exit",o,i]]));const m=Bi(i.events,r[1]);if(o={type:c,start:Object.assign({},m),end:Object.assign({},m)},t.add(r[1],0,[["enter",o,i]]),r[2]!==0){const h=Bi(i.events,r[2]),g=Bi(i.events,r[3]),y={type:p,start:Object.assign({},h),end:Object.assign({},g)};if(t.add(r[2],0,[["enter",y,i]]),l!==2){const S=i.events[r[2]],x=i.events[r[3]];if(S[1].end=Object.assign({},x[1].end),S[1].type="chunkText",S[1].contentType="text",r[3]>r[2]+1){const A=r[2]+1,L=r[3]-r[2]-1;t.add(A,L,[])}}t.add(r[3]+1,0,[["exit",y,i]])}return u!==void 0&&(o.end=Object.assign({},Bi(i.events,u)),t.add(u,0,[["exit",o,i]]),o=void 0),o}function Ey(t,i,r,l,u){const o=[],c=Bi(i.events,r);u&&(u.end=Object.assign({},c),o.push(["exit",u,i])),l.end=Object.assign({},c),o.push(["exit",l,i]),t.add(r+1,0,o)}function Bi(t,i){const r=t[i],l=r[0]==="enter"?"start":"end";return r[1][l]}const wC={name:"tasklistCheck",tokenize:jC};function AC(){return{text:{91:wC}}}function jC(t,i,r){const l=this;return u;function u(m){return l.previous!==null||!l._gfmTasklistFirstContentOfListItem?r(m):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),o)}function o(m){return Ge(m)?(t.enter("taskListCheckValueUnchecked"),t.consume(m),t.exit("taskListCheckValueUnchecked"),c):m===88||m===120?(t.enter("taskListCheckValueChecked"),t.consume(m),t.exit("taskListCheckValueChecked"),c):r(m)}function c(m){return m===93?(t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),p):r(m)}function p(m){return me(m)?i(m):Te(m)?t.check({tokenize:TC},i,r)(m):r(m)}}function TC(t,i,r){return _e(t,l,"whitespace");function l(u){return u===null?r(u):i(u)}}function CC(t){return Mb([WT(),oC(),gC(t),xC(),AC()])}const EC={};function jv(t){const i=this,r=t||EC,l=i.data(),u=l.micromarkExtensions||(l.micromarkExtensions=[]),o=l.fromMarkdownExtensions||(l.fromMarkdownExtensions=[]),c=l.toMarkdownExtensions||(l.toMarkdownExtensions=[]);u.push(CC(r)),o.push(KT()),c.push(QT(r))}function OC(){const{id:t}=Yi(),{locale:i,t:r,path:l}=Qt(),u=ow(t,i);return u?v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-6 pb-12",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`${u.title} · ${Qe}`}),v.jsx("meta",{name:"description",content:`${u.title} - ${u.tags.join(", ")}`}),v.jsx("meta",{property:"og:title",content:`${u.title} · ${Qe}`}),v.jsx("meta",{property:"og:description",content:`${u.title} - ${u.tags.join(", ")}`}),v.jsx("meta",{property:"og:type",content:"article"}),u.date&&v.jsx("meta",{property:"article:published_time",content:u.date}),u.image&&v.jsx("meta",{property:"og:image",content:u.image}),v.jsx("meta",{name:"twitter:card",content:u.image?"summary_large_image":"summary"}),v.jsx("meta",{name:"twitter:title",content:`${u.title} · ${Qe}`}),v.jsx("meta",{name:"twitter:description",content:`${u.title} - ${u.tags.join(", ")}`}),u.image&&v.jsx("meta",{name:"twitter:image",content:u.image})]}),v.jsx("div",{className:"mb-4",children:v.jsx(st,{to:l("/articles"),className:"text-textTertiary hover:text-textPrimary text-sm transition-colors",children:r.articles.back})}),u.isFallback&&v.jsx("p",{className:"text-sm text-textTertiary bg-cardBackground border border-cardBorder rounded-lg px-4 py-2",children:r.articles.englishOnly}),u.image&&v.jsx("img",{src:u.image,alt:u.title,className:"w-full rounded-lg object-contain max-h-130",style:{aspectRatio:"3/2"}}),v.jsxs("div",{className:"flex items-center gap-3",children:[u.date&&v.jsx("span",{className:"text-textTertiary text-sm",children:u.date}),u.tags.map(o=>v.jsx("span",{className:"text-xs bg-cardBackground border border-cardBorder text-textSecondary px-2 py-0.5 rounded-full",children:o},o))]}),v.jsx(tv,{remarkPlugins:[jv],components:{h1:({children:o})=>v.jsx("h1",{className:"text-3xl font-bold text-textPrimary mt-8 mb-4",children:o}),h2:({children:o})=>v.jsx("h2",{className:"text-2xl font-semibold text-textPrimary mt-8 mb-3",children:o}),h3:({children:o})=>v.jsx("h3",{className:"text-xl font-semibold text-textPrimary mt-6 mb-2",children:o}),p:({children:o})=>v.jsx("p",{className:"text-textSecondary leading-7 mb-4",children:o}),a:({href:o,children:c})=>v.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:c}),pre:({children:o})=>v.jsx("pre",{className:"bg-cardBackground border border-cardBorder rounded-lg p-4 mb-4 overflow-x-auto",children:o}),code:({children:o,className:c})=>String(o).includes(`
`)||!!c?v.jsx("code",{className:`text-sm font-mono text-textSecondary ${c??""}`,children:o}):v.jsx("code",{className:"bg-cardBackground border border-cardBorder text-accent px-1.5 py-0.5 rounded text-sm font-mono",children:o}),ul:({children:o})=>v.jsx("ul",{className:"list-disc list-inside text-textSecondary space-y-1 mb-4 ml-4",children:o}),ol:({children:o})=>v.jsx("ol",{className:"list-decimal list-inside text-textSecondary space-y-1 mb-4 ml-4",children:o}),li:({children:o})=>v.jsx("li",{className:"leading-7",children:o}),blockquote:({children:o})=>v.jsx("blockquote",{className:"border-l-4 border-accent pl-4 text-textSecondary italic my-4",children:o}),img:({src:o,alt:c})=>v.jsx("img",{src:o,alt:c,className:"rounded-lg max-w-full my-4"}),hr:()=>v.jsx("hr",{className:"border-cardBorder my-8"})},children:u.content})]}):v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-4",children:[v.jsx("p",{className:"text-textSecondary",children:r.articles.notFound}),v.jsx(st,{to:l("/articles"),className:"text-accent hover:underline",children:r.articles.backShort})]})}const Oy=Array.from(new Set(ld.flatMap(t=>t.tags))).sort();function _C(){const{locale:t,t:i,path:r}=Qt(),[l,u]=X.useState(null),o=Md(t),c=l?o.filter(m=>m.tags.includes(l)):o;function p(m){u(h=>h===m?null:m)}return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-6",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`${i.articles.title} · ${Qe}`}),v.jsx("meta",{name:"description",content:i.articles.metaDescription}),v.jsx("meta",{property:"og:title",content:`${i.articles.title} · ${Qe}`}),v.jsx("meta",{property:"og:description",content:i.articles.metaDescription}),v.jsx("meta",{property:"og:type",content:"website"}),v.jsx("meta",{name:"twitter:card",content:"summary"}),v.jsx("meta",{name:"twitter:title",content:`${i.articles.title} · ${Qe}`}),v.jsx("meta",{name:"twitter:description",content:i.articles.metaDescription})]}),v.jsx("h1",{className:"text-3xl font-bold",children:i.articles.title}),Oy.length>0&&v.jsx("div",{className:"flex flex-wrap gap-2",children:Oy.map(m=>v.jsx("button",{onClick:()=>p(m),className:`text-xs px-3 py-1 rounded-full border transition-colors cursor-pointer ${l===m?"bg-accent text-white border-accent":"bg-cardBackground border-cardBorder text-textSecondary hover:border-accent hover:text-accent"}`,children:m},m))}),c.length===0&&v.jsx("p",{className:"text-textSecondary",children:i.articles.noArticlesForTag}),v.jsx("ul",{className:"space-y-4",children:c.map(m=>v.jsx("li",{children:v.jsx(st,{to:r(`/articles/${m.slug}`),className:"group block",children:v.jsxs("div",{className:"bg-cardBackground border border-cardBorder rounded-lg overflow-hidden hover:border-accent transition-colors flex flex-col sm:flex-row",children:[m.image&&v.jsx("img",{src:m.image,alt:m.title,className:"w-full sm:w-50 shrink-0 object-contain",style:{aspectRatio:"3/2"}}),v.jsxs("div",{className:"p-4 flex flex-col justify-center",children:[v.jsx("h2",{className:"font-semibold text-textPrimary group-hover:text-accent transition-colors",children:m.title}),m.description&&v.jsx("p",{className:"text-textSecondary text-sm mt-1 line-clamp-2",children:m.description}),v.jsxs("div",{className:"flex items-center gap-3 mt-2 flex-wrap",children:[m.date&&v.jsx("span",{className:"text-textTertiary text-sm",children:m.date}),m.tags.length>0&&v.jsx("div",{className:"flex gap-2 flex-wrap",children:m.tags.map(h=>v.jsx("button",{onClick:g=>{g.preventDefault(),p(h)},className:`text-xs px-2 py-0.5 rounded-full border transition-colors cursor-pointer ${l===h?"bg-accent text-white border-accent":"bg-cardBackground border-cardBorder text-textSecondary hover:border-accent hover:text-accent"}`,children:h},h))})]})]})]})})},m.slug))})]})}const DC=`---
name: Gym Timer: Workout Interval
subtitle: HIIT, Strength & Cardio Timer
appStoreUrl: https://apps.apple.com/us/app/gym-timer-workout-interval/id6759486626
---

# **Gym Timer: Workout Interval**

A precise workout timer for HIIT, strength, and interval training — with sound or silent vibration alerts to match your focus.

This workout timer is designed for focused HIIT, strength, and interval training. Whether you prefer audible alerts or silent vibration, the experience adapts to your environment so you can stay fully engaged in every session.

The interface is clean and distraction-free, with clear work and rest timing that supports consistent performance. Create custom intervals, save routines, and repeat workouts effortlessly.

### Features

- Sound or vibration training alerts
- Work and rest interval timing
- Quick-start workout presets
- Custom routine builder
- Large, readable timer display
- Save and reuse workouts
- Clean, focused interface

---

### Pro Upgrade

Unlock advanced flexibility:

- Unlimited custom presets
- Expanded interval options
- Persistent workout storage
- Additional visual themes

A single upgrade — no subscription required.

---

Built for HIIT sessions, strength training, circuit workouts, and cardio intervals. Designed to support focus, consistency, and progress.

## TERMS & CONDITIONS

## 1. Acceptance of Terms

By downloading or using this application ("App"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the App.

---

## 2. Use of the App

The App is designed to provide workout interval timing features for personal fitness use.

You agree:

- To use the App for lawful purposes only
- Not to misuse, reverse engineer, or attempt to disrupt the App
- Not to copy or redistribute the App without permission

The App is intended for general fitness timing assistance only and does not provide medical or professional fitness advice.

---

## 3. Health Disclaimer

The App does not provide medical advice. Always consult a qualified healthcare professional before starting any fitness program.

Use of the App is at your own risk.

---

## 4. In-App Purchases

The App may offer a one-time Pro upgrade through Apple In-App Purchase.

- Payments are processed securely by Apple.
- The developer does not store payment information.
- Purchases are non-refundable except as required by Apple's policies.

---

## 5. Intellectual Property

All content, design, interface elements, and branding within the App are the property of the developer and protected by applicable intellectual property laws.

---

## 6. Limitation of Liability

The App is provided "as is" without warranties of any kind.

The developer shall not be liable for:

- Injuries related to workouts
- Data loss
- Service interruptions
- Any indirect or consequential damages

---

## 7. Changes to Terms

We may update these Terms from time to time. Continued use of the App constitutes acceptance of any changes.

---

## 8. Contact

For questions about these Terms, contact:

agustiyaninfo@gmail.com

## PRIVACY POLICY

## 1. Overview

Your privacy is important to us.

This App is designed to collect minimal personal data.

---

## 2. Information We Collect

### a) Personal Information

We do not require account creation and do not directly collect personal information such as:

- Name
- Email address
- Phone number

Unless you voluntarily contact us.

---

### b) Usage Data (Optional – if using analytics)

The App may collect anonymous usage data such as:

- App interactions
- Feature usage
- Crash reports
- Device type
- iOS version

This data is used solely to improve the App experience.

> We may use third-party analytics services to help improve performance and stability.

---

### c) In-App Purchases

All payments are processed by Apple.

We do not receive or store payment details.

---

## 3. Data Storage

Workout presets and settings are stored locally on your device unless otherwise stated.

We do not sell or share your personal data.

---

## 4. Third-Party Services

The App may use:

- Apple In-App Purchase services
- Apple analytics

These services may collect information in accordance with their own privacy policies.

---

## 5. Children's Privacy

The App is not directed at children under 13.

We do not knowingly collect data from children.

---

## 6. Data Security

We take reasonable measures to protect data; however, no method of electronic storage is 100% secure.

---

## 7. Changes to This Policy

We may update this Privacy Policy from time to time. Continued use of the App after changes constitutes acceptance.

## 8. Contact

If you have questions about this Privacy Policy, contact:

agustiyaninfo@gmail.com
`;function NC(t){const i=t.match(/^---\r?\n([\s\S]*?)\r?\n---/);if(!i)return{meta:{},content:t};const r={};for(const l of i[1].split(`
`)){const u=l.indexOf(":");if(u===-1)continue;const o=l.slice(0,u).trim(),c=l.slice(u+1).trim();o&&(r[o]=c)}return{meta:r,content:t.slice(i[0].length).trim()}}const LC=Object.assign({"../apps/gym-timer.md":DC});function _y(t,i){const{meta:r,content:l}=NC(i);return{slug:t,name:r.name??t,subtitle:r.subtitle??"",appStoreUrl:r.appStoreUrl??"",content:l}}const Tv=new Map,Zd=[];for(const[t,i]of Object.entries(LC)){const r=t.split("/").pop();if(r.endsWith(".id.md")){const l=r.replace(".id.md","");Tv.set(l,_y(l,i))}else Zd.push(_y(r.replace(".md",""),i))}Zd.map(t=>t.slug);function MC(t,i){const r=Zd.find(l=>l.slug===t);return!r||i==="en"?r:Tv.get(r.slug)??{...r,isFallback:!0}}function zC(){const{id:t}=Yi(),{locale:i,t:r,path:l}=Qt(),u=MC(t,i);return u?v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-6 pb-12",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`${u.name} · ${Qe}`}),v.jsx("meta",{name:"description",content:u.subtitle}),v.jsx("meta",{property:"og:title",content:`${u.name} · ${Qe}`}),v.jsx("meta",{property:"og:description",content:u.subtitle}),v.jsx("meta",{property:"og:type",content:"website"}),v.jsx("meta",{name:"twitter:card",content:"summary"}),v.jsx("meta",{name:"twitter:title",content:`${u.name} · ${Qe}`}),v.jsx("meta",{name:"twitter:description",content:u.subtitle})]}),v.jsx("div",{className:"mb-4",children:v.jsx(st,{to:l("/"),className:"text-textTertiary hover:text-textPrimary text-sm transition-colors",children:r.apps.back})}),u.isFallback&&v.jsx("p",{className:"text-sm text-textTertiary bg-cardBackground border border-cardBorder rounded-lg px-4 py-2",children:r.apps.englishOnly}),u.appStoreUrl&&v.jsxs("a",{href:u.appStoreUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-cardBackground border border-cardBorder text-textSecondary hover:text-textPrimary text-sm px-4 py-2 rounded-lg transition-colors",children:[v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"})}),r.apps.viewOnAppStore]}),v.jsx(tv,{remarkPlugins:[jv],components:{h1:({children:o})=>v.jsx("h1",{className:"text-3xl font-bold text-textPrimary mt-8 mb-4",children:o}),h2:({children:o})=>v.jsx("h2",{className:"text-2xl font-semibold text-textPrimary mt-8 mb-3",children:o}),h3:({children:o})=>v.jsx("h3",{className:"text-xl font-semibold text-textPrimary mt-6 mb-2",children:o}),p:({children:o})=>v.jsx("p",{className:"text-textSecondary leading-7 mb-4",children:o}),a:({href:o,children:c})=>v.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:c}),pre:({children:o})=>v.jsx("pre",{className:"bg-cardBackground border border-cardBorder rounded-lg p-4 mb-4 overflow-x-auto",children:o}),code:({children:o,className:c})=>String(o).includes(`
`)||!!c?v.jsx("code",{className:`text-sm font-mono text-textSecondary ${c??""}`,children:o}):v.jsx("code",{className:"bg-cardBackground border border-cardBorder text-accent px-1.5 py-0.5 rounded text-sm font-mono",children:o}),ul:({children:o})=>v.jsx("ul",{className:"list-disc list-inside text-textSecondary space-y-1 mb-4 ml-4",children:o}),ol:({children:o})=>v.jsx("ol",{className:"list-decimal list-inside text-textSecondary space-y-1 mb-4 ml-4",children:o}),li:({children:o})=>v.jsx("li",{className:"leading-7",children:o}),blockquote:({children:o})=>v.jsx("blockquote",{className:"border-l-4 border-accent pl-4 text-textSecondary italic my-4",children:o}),img:({src:o,alt:c})=>v.jsx("img",{src:o,alt:c,className:"rounded-lg max-w-full my-4"}),hr:()=>v.jsx("hr",{className:"border-cardBorder my-8"})},children:u.content})]}):v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-4",children:[v.jsx("p",{className:"text-textSecondary",children:r.apps.notFound}),v.jsx(st,{to:l("/"),className:"text-accent hover:underline",children:r.apps.backShort})]})}function Qi(t,i,r){if(i==="en")return t;const l=r[t.slug];if(!l)return t;const{realWorldExamples:u,...o}=l,c={...t,...o};return u&&t.realWorldExamples&&(c.realWorldExamples=t.realWorldExamples.map((p,m)=>({...p,example:u[m]??p.example}))),c}function Cv(t,i,r){return i==="en"?t:r[t]??t}const Ev={"Data Structures":"Struktur Data",Sorting:"Sorting (Pengurutan)",Searching:"Searching (Pencarian)","Graph Algorithms":"Algoritma Graph"},Ov={array:{description:"Blok memori yang bersebelahan untuk menyimpan elemen bertipe sama, yang bisa diakses lewat index dalam waktu O(1).",keyPoints:["Akses acak O(1): elemen mana pun bisa langsung diambil lewat index","Ramah cache: elemen disimpan berurutan di memori","Insert/delete di bagian depan butuh O(n) karena semua elemen harus digeser","Dynamic array (ArrayList, Vec) menggandakan kapasitas saat penuh, sehingga append rata-rata O(1) (amortized)","Pilihan terbaik saat operasi utamanya adalah akses berdasarkan index"]},"linked-list":{description:"Rangkaian node, di mana setiap node menyimpan sebuah nilai dan pointer ke node berikutnya.",keyPoints:["Insert/delete O(1) di head (atau di node mana pun yang pointer-nya sudah dipegang)","Pencarian O(n) karena harus ditelusuri dari head, tidak ada akses acak","Butuh memori lebih banyak per elemen dibanding array (ada pointer tambahan di setiap node)","Insert/delete tidak perlu menggeser elemen, cukup sambungkan ulang pointer-nya","Doubly linked list menambahkan pointer prev agar bisa menelusuri mundur dalam O(1)"]},stack:{description:"Struktur LIFO (Last In, First Out): elemen ditambahkan dan diambil dari ujung yang sama (top).",keyPoints:["LIFO: elemen yang terakhir di-push adalah yang pertama di-pop","Push, Pop, dan Peek semuanya O(1)","Biasanya diimplementasikan dengan dynamic array atau linked list","Menjadi dasar call stack fungsi, fitur undo/redo, dan evaluasi ekspresi","Banyak masalah rekursif bisa ditulis ulang secara iteratif dengan stack eksplisit"]},queue:{description:"Struktur FIFO (First In, First Out): elemen ditambahkan di belakang dan diambil dari depan.",keyPoints:["FIFO: elemen yang pertama di-enqueue adalah yang pertama di-dequeue","Enqueue (tambah di belakang) dan Dequeue (ambil dari depan) bernilai O(1)","Gunakan deque (double-ended queue) agar kedua ujung bisa diakses dalam O(1)","Queue berbasis array punya dequeue O(n), kecuali memakai circular buffer atau deque","Penting untuk BFS, penjadwalan tugas, dan buffering"]},"hash-table":{description:"Penyimpanan key-value yang memakai hash function untuk memetakan key ke index bucket, sehingga pencarian rata-rata O(1).",keyPoints:["Rata-rata O(1) untuk insert, delete, dan lookup","Hash collision (dua key masuk ke bucket yang sama) bisa menurunkan performa hingga O(n) di kasus terburuk","Strategi umum menangani collision: chaining (linked list per bucket) atau open addressing","Load factor (n/kapasitas) yang terlalu tinggi (biasanya > 0.75) memicu resize","Key harus bisa di-hash; urutannya tidak dijamin (gunakan LinkedHashMap jika butuh urutan penyisipan)"]},"bubble-sort":{description:'Berulang kali menukar elemen bersebelahan yang urutannya salah, sehingga elemen terbesar yang belum terurut "menggelembung" ke posisinya di setiap putaran.',keyPoints:["Mudah diimplementasikan, tetapi tidak efisien untuk data besar","Setiap satu putaran penuh menempatkan satu elemen lagi di posisi akhirnya","Bisa dioptimalkan: jika tidak ada pertukaran dalam satu putaran, array sudah terurut dan proses bisa berhenti","Stable sort: urutan relatif elemen yang nilainya sama tetap terjaga","In-place: hanya butuh ruang tambahan O(1)"]},"selection-sort":{description:"Berulang kali mencari elemen terkecil dari bagian yang belum terurut, lalu memindahkannya ke batas bagian yang sudah terurut.",keyPoints:["Selalu melakukan tepat n−1 pertukaran apa pun input-nya, berguna saat operasi tulis itu mahal","Selalu O(n²), tidak lebih cepat meskipun data sudah terurut","In-place dan mudah diimplementasikan","Secara default tidak stable (pertukaran bisa mengubah urutan relatif elemen yang sama)","Paling cocok untuk array kecil atau saat jumlah pertukaran perlu ditekan"]},"insertion-sort":{description:"Membangun sub-array terurut satu elemen demi satu, dengan menyisipkan setiap elemen baru ke posisi yang tepat.",keyPoints:["Kasus terbaik O(n) pada data yang hampir terurut, sangat praktis","Algoritma online: bisa mengurutkan elemen satu per satu saat datang","Stable sort: elemen yang sama tetap pada urutan aslinya","Dipakai sebagai tahap akhir pada hybrid sort seperti Timsort (Python, Java) untuk subarray kecil","Efisien untuk input kecil (n < 20) karena overhead-nya rendah"]},"merge-sort":{description:"Algoritma divide-and-conquer yang membagi array menjadi dua secara rekursif, mengurutkan tiap bagian, lalu menggabungkannya kembali.",keyPoints:["Dijamin O(n log n) di semua kasus, tanpa penurunan performa di kasus terburuk","Stable sort: urutan relatif elemen yang sama tetap terjaga","Butuh ruang tambahan O(n) untuk tahap merge","Pilihan utama untuk mengurutkan linked list (tidak butuh akses acak)","Menjadi dasar external sorting (mengurutkan data yang terlalu besar untuk RAM)"]},"quick-sort":{description:"Algoritma divide-and-conquer yang memilih pivot, mempartisi elemen di sekitarnya, lalu mengurutkan setiap partisi secara rekursif.",keyPoints:["Rata-rata O(n log n) dengan konstanta sangat kecil, paling cepat dalam praktik untuk sebagian besar input","Kasus terburuk O(n²) terjadi pada input yang sudah terurut atau terbalik dengan pilihan pivot yang buruk","Pivot acak atau strategi median-of-three mencegah kasus terburuk","In-place: hanya butuh ruang stack O(log n) dari rekursi","Secara default tidak stable; dipakai di sebagian besar implementasi sort pada standard library"]},"linear-search":{description:"Memeriksa setiap elemen dari awal sampai target ditemukan atau sampai akhir. Bisa dipakai pada koleksi yang belum terurut.",keyPoints:["Bekerja pada data yang belum terurut, tanpa perlu pemrosesan awal","Ruang O(1), tidak butuh memori tambahan","Sederhana dan andal, tetapi lambat untuk data besar","Paling cocok saat list-nya kecil atau elemen yang dicari kemungkinan ada di depan","Wajib dipakai saat koleksinya tidak bisa diurutkan"]},"binary-search":{description:"Membagi dua ruang pencarian di setiap langkah dengan membandingkan target dengan elemen tengah. Koleksinya harus sudah terurut.",keyPoints:["Input harus terurut; tidak bisa dipakai pada data yang belum terurut","Setiap perbandingan membuang setengah dari sisa ruang pencarian","O(log n) jauh lebih cepat dibanding O(n) untuk input besar","Hitung mid dengan low + (high - low) / 2 untuk menghindari integer overflow","Polanya berlaku untuk banyak soal: mencari kemunculan pertama/terakhir, kondisi batas"]},bfs:{description:"Menjelajahi semua tetangga di kedalaman saat ini sebelum turun lebih dalam, memakai queue untuk memproses node level demi level.",keyPoints:["Memproses node level demi level, sehingga menjamin jalur terpendek pada graph tanpa bobot","Memakai queue (FIFO) untuk menyimpan frontier","Tandai node sebagai visited sebelum di-enqueue agar tidak diproses dua kali","Ruang O(V): di kasus terburuk queue bisa menampung semua vertex","Penerapan: jalur terpendek, level-order traversal, tetangga terdekat, pengecekan bipartite"]},dfs:{description:"Menjelajahi setiap cabang sedalam mungkin sebelum mundur (backtracking), memakai rekursi atau stack eksplisit.",keyPoints:["Menelusuri satu jalur sampai habis sebelum mencoba alternatif lain","Bisa diimplementasikan secara rekursif (call stack) atau dengan stack eksplisit","Ruang O(V) untuk stack rekursi di kasus terburuk (graph berbentuk garis)","Tidak menjamin jalur terpendek; gunakan BFS untuk itu","Penerapan: topological sort, deteksi cycle, connected components, menyelesaikan labirin"]}},RC={"Data Structures":"bg-blue/10 text-blue border-blue/30",Sorting:"bg-purple/10 text-purple border-purple/30",Searching:"bg-green/10 text-green border-green/30","Graph Algorithms":"bg-gold/10 text-gold border-gold/30"};function BC(){const{locale:t,t:i,path:r}=Qt(),l=Qs.map(o=>Qi(o,t,Ov)),u=o=>Cv(o,t,Ev);return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-10 pb-16",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`DSA · ${Qe}`}),v.jsx("meta",{name:"description",content:i.dsa.metaDescription}),v.jsx("meta",{property:"og:title",content:`DSA · ${Qe}`}),v.jsx("meta",{property:"og:description",content:i.dsa.ogDescription}),v.jsx("meta",{property:"og:type",content:"website"})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h1",{className:"text-3xl font-bold",children:i.dsa.title}),v.jsx("p",{className:"text-textSecondary leading-relaxed",children:i.dsa.intro}),v.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:Lg.map(o=>v.jsx("span",{className:`text-xs px-2.5 py-1 rounded-full border ${RC[o]??"bg-cardBackground border-cardBorder text-textSecondary"}`,children:u(o)},o))})]}),Lg.map(o=>v.jsxs("section",{children:[v.jsx("h2",{className:"text-xl font-semibold mb-4",children:u(o)}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:l.filter(c=>c.category===o).map(c=>v.jsx(st,{to:r(`/dsa/${c.slug}`),className:"group",children:v.jsxs("div",{className:"bg-cardBackground border border-cardBorder rounded-xl p-4 hover:border-accent transition-colors space-y-2",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-xl",children:c.emoji}),v.jsx("span",{className:"font-semibold text-textPrimary group-hover:text-accent transition-colors",children:c.title})]}),c.hasVisualizer&&v.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full border bg-accent/10 text-accent border-accent/30",children:i.dsa.visualizerBadge})]}),v.jsx("p",{className:"text-textSecondary text-sm leading-relaxed line-clamp-2",children:c.description}),c.complexity&&v.jsxs("div",{className:"flex gap-3 text-xs text-textTertiary",children:[v.jsxs("span",{children:[i.dsa.time,": ",v.jsx("span",{className:"text-textSecondary font-mono",children:c.complexity.time.worst})]}),v.jsxs("span",{children:[i.dsa.space,": ",v.jsx("span",{className:"text-textSecondary font-mono",children:c.complexity.space})]})]})]})},c.slug))})]},o))]})}function UC(t,i){if(t==null)return{};var r={};for(var l in t)if({}.hasOwnProperty.call(t,l)){if(i.indexOf(l)!==-1)continue;r[l]=t[l]}return r}function IC(t,i){if(t==null)return{};var r,l,u=UC(t,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)r=o[l],i.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(u[r]=t[r])}return u}function yd(t,i){(i==null||i>t.length)&&(i=t.length);for(var r=0,l=Array(i);r<i;r++)l[r]=t[r];return l}function PC(t){if(Array.isArray(t))return yd(t)}function qC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function HC(t,i){if(t){if(typeof t=="string")return yd(t,i);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?yd(t,i):void 0}}function FC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bd(t){return PC(t)||qC(t)||HC(t)||FC()}function sl(t){"@babel/helpers - typeof";return sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},sl(t)}function VC(t,i){if(sl(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var l=r.call(t,i);if(sl(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function GC(t){var i=VC(t,"string");return sl(i)=="symbol"?i:i+""}function _v(t,i,r){return(i=GC(i))in t?Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[i]=r,t}function vd(){return vd=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var l in r)({}).hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},vd.apply(null,arguments)}function Dy(t,i){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);i&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),r.push.apply(r,l)}return r}function Ui(t){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?Dy(Object(r),!0).forEach(function(l){_v(t,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Dy(Object(r)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(r,l))})}return t}function YC(t){var i=t.length;if(i===0||i===1)return t;if(i===2)return[t[0],t[1],"".concat(t[0],".").concat(t[1]),"".concat(t[1],".").concat(t[0])];if(i===3)return[t[0],t[1],t[2],"".concat(t[0],".").concat(t[1]),"".concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[0]),"".concat(t[1],".").concat(t[2]),"".concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[1],".").concat(t[0])];if(i>=4)return[t[0],t[1],t[2],t[3],"".concat(t[0],".").concat(t[1]),"".concat(t[0],".").concat(t[2]),"".concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[0]),"".concat(t[1],".").concat(t[2]),"".concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[1]),"".concat(t[2],".").concat(t[3]),"".concat(t[3],".").concat(t[0]),"".concat(t[3],".").concat(t[1]),"".concat(t[3],".").concat(t[2]),"".concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[1],".").concat(t[3]),"".concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[2],".").concat(t[3]),"".concat(t[0],".").concat(t[3],".").concat(t[1]),"".concat(t[0],".").concat(t[3],".").concat(t[2]),"".concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[1],".").concat(t[2],".").concat(t[3]),"".concat(t[1],".").concat(t[3],".").concat(t[0]),"".concat(t[1],".").concat(t[3],".").concat(t[2]),"".concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[0],".").concat(t[3]),"".concat(t[2],".").concat(t[1],".").concat(t[0]),"".concat(t[2],".").concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[3],".").concat(t[0]),"".concat(t[2],".").concat(t[3],".").concat(t[1]),"".concat(t[3],".").concat(t[0],".").concat(t[1]),"".concat(t[3],".").concat(t[0],".").concat(t[2]),"".concat(t[3],".").concat(t[1],".").concat(t[0]),"".concat(t[3],".").concat(t[1],".").concat(t[2]),"".concat(t[3],".").concat(t[2],".").concat(t[0]),"".concat(t[3],".").concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[1],".").concat(t[2],".").concat(t[3]),"".concat(t[0],".").concat(t[1],".").concat(t[3],".").concat(t[2]),"".concat(t[0],".").concat(t[2],".").concat(t[1],".").concat(t[3]),"".concat(t[0],".").concat(t[2],".").concat(t[3],".").concat(t[1]),"".concat(t[0],".").concat(t[3],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[3],".").concat(t[2],".").concat(t[1]),"".concat(t[1],".").concat(t[0],".").concat(t[2],".").concat(t[3]),"".concat(t[1],".").concat(t[0],".").concat(t[3],".").concat(t[2]),"".concat(t[1],".").concat(t[2],".").concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[2],".").concat(t[3],".").concat(t[0]),"".concat(t[1],".").concat(t[3],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[3],".").concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[0],".").concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[0],".").concat(t[3],".").concat(t[1]),"".concat(t[2],".").concat(t[1],".").concat(t[0],".").concat(t[3]),"".concat(t[2],".").concat(t[1],".").concat(t[3],".").concat(t[0]),"".concat(t[2],".").concat(t[3],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[3],".").concat(t[1],".").concat(t[0]),"".concat(t[3],".").concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[3],".").concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[3],".").concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[3],".").concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[3],".").concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[3],".").concat(t[2],".").concat(t[1],".").concat(t[0])]}var Xc={};function $C(t){if(t.length===0||t.length===1)return t;var i=t.join(".");return Xc[i]||(Xc[i]=YC(t)),Xc[i]}function KC(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,l=t.filter(function(o){return o!=="token"}),u=$C(l);return u.reduce(function(o,c){return Ui(Ui({},o),r[c])},i)}function Ny(t){return t.join(" ")}function QC(t,i){var r=0;return function(l){return r+=1,l.map(function(u,o){return Dv({node:u,stylesheet:t,useInlineStyles:i,key:"code-segment-".concat(r,"-").concat(o)})})}}function Dv(t){var i=t.node,r=t.stylesheet,l=t.style,u=l===void 0?{}:l,o=t.useInlineStyles,c=t.key,p=i.properties,m=i.type,h=i.tagName,g=i.value;if(m==="text")return g;if(h){var y=QC(r,o),S;if(!o)S=Ui(Ui({},p),{},{className:Ny(p.className)});else{var x=Object.keys(r).reduce(function(E,q){return q.split(".").forEach(function(U){E.includes(U)||E.push(U)}),E},[]),A=p.className&&p.className.includes("token")?["token"]:[],L=p.className&&A.concat(p.className.filter(function(E){return!x.includes(E)}));S=Ui(Ui({},p),{},{className:Ny(L)||void 0,style:KC(p.className,Object.assign({},p.style,u),r)})}var _=y(i.children);return Re.createElement(h,vd({key:c},S),_)}}const XC=(function(t,i){var r=t.listLanguages();return r.indexOf(i)!==-1});var ZC=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Ly(t,i){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);i&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),r.push.apply(r,l)}return r}function ba(t){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?Ly(Object(r),!0).forEach(function(l){_v(t,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ly(Object(r)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(r,l))})}return t}var WC=/\n/g;function JC(t){return t.match(WC)}function eE(t){var i=t.lines,r=t.startingLineNumber,l=t.style;return i.map(function(u,o){var c=o+r;return Re.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof l=="function"?l(c):l},"".concat(c,`
`))})}function tE(t){var i=t.codeString,r=t.codeStyle,l=t.containerStyle,u=l===void 0?{float:"left",paddingRight:"10px"}:l,o=t.numberStyle,c=o===void 0?{}:o,p=t.startingLineNumber;return Re.createElement("code",{style:Object.assign({},r,u)},eE({lines:i.replace(/\n$/,"").split(`
`),style:c,startingLineNumber:p}))}function nE(t){return"".concat(t.toString().length,".25em")}function Nv(t,i){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(t),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:i},children:[{type:"text",value:t}]}}function Lv(t,i,r){var l={display:"inline-block",minWidth:nE(r),paddingRight:"1em",textAlign:"right",userSelect:"none"},u=typeof t=="function"?t(i):t,o=ba(ba({},l),u);return o}function Ps(t){var i=t.children,r=t.lineNumber,l=t.lineNumberStyle,u=t.largestLineNumber,o=t.showInlineLineNumbers,c=t.lineProps,p=c===void 0?{}:c,m=t.className,h=m===void 0?[]:m,g=t.showLineNumbers,y=t.wrapLongLines,S=t.wrapLines,x=S===void 0?!1:S,A=x?ba({},typeof p=="function"?p(r):p):{};if(A.className=A.className?[].concat(bd(A.className.trim().split(/\s+/)),bd(h)):h,r&&o){var L=Lv(l,r,u);i.unshift(Nv(r,L))}return y&g&&(A.style=ba({display:"flex"},A.style)),{type:"element",tagName:"span",properties:A,children:i}}function Mv(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];t.length===void 0&&(t=[t]);for(var l=0;l<t.length;l++){var u=t[l];if(u.type==="text")r.push(Ps({children:[u],className:bd(new Set(i))}));else if(u.children){var o,c=i.concat(((o=u.properties)===null||o===void 0?void 0:o.className)||[]);Mv(u.children,c).forEach(function(p){return r.push(p)})}}return r}function aE(t,i,r,l,u,o,c,p,m){var h,g=Mv(t.value),y=[],S=-1,x=0;function A(te,D){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Ps({children:te,lineNumber:D,lineNumberStyle:p,largestLineNumber:c,showInlineLineNumbers:u,lineProps:r,className:$,showLineNumbers:l,wrapLongLines:m,wrapLines:i})}function L(te,D){if(l&&D&&u){var $=Lv(p,D,c);te.unshift(Nv(D,$))}return te}function _(te,D){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return i||$.length>0?A(te,D,$):L(te,D)}for(var E=function(){var D=g[x],$=D.children[0].value,le=JC($);if(le){var de=$.split(`
`);de.forEach(function(R,ee){var J=l&&y.length+o,re={type:"text",value:"".concat(R,`
`)};if(ee===0){var ae=g.slice(S+1,x).concat(Ps({children:[re],className:D.properties.className})),Z=_(ae,J);y.push(Z)}else if(ee===de.length-1){var B=g[x+1]&&g[x+1].children&&g[x+1].children[0],Q={type:"text",value:"".concat(R)};if(B){var se=Ps({children:[Q],className:D.properties.className});g.splice(x+1,0,se)}else{var be=[Q],j=_(be,J,D.properties.className);y.push(j)}}else{var C=[re],H=_(C,J,D.properties.className);y.push(H)}}),S=x}x++};x<g.length;)E();if(S!==g.length-1){var q=g.slice(S+1,g.length);if(q&&q.length){var U=l&&y.length+o,K=_(q,U);y.push(K)}}return i?y:(h=[]).concat.apply(h,y)}function iE(t){var i=t.rows,r=t.stylesheet,l=t.useInlineStyles;return i.map(function(u,o){return Dv({node:u,stylesheet:r,useInlineStyles:l,key:"code-segment-".concat(o)})})}function zv(t){return t&&typeof t.highlightAuto<"u"}function rE(t){var i=t.astGenerator,r=t.language,l=t.code,u=t.defaultCodeValue;if(zv(i)){var o=XC(i,r);return r==="text"?{value:u,language:"text"}:o?i.highlight(r,l):i.highlightAuto(l)}try{return r&&r!=="text"?{value:i.highlight(l,r)}:{value:u}}catch{return{value:u}}}function lE(t,i){return function(l){var u,o,c=l.language,p=l.children,m=l.style,h=m===void 0?i:m,g=l.customStyle,y=g===void 0?{}:g,S=l.codeTagProps,x=S===void 0?{className:c?"language-".concat(c):void 0,style:ba(ba({},h['code[class*="language-"]']),h['code[class*="language-'.concat(c,'"]')])}:S,A=l.useInlineStyles,L=A===void 0?!0:A,_=l.showLineNumbers,E=_===void 0?!1:_,q=l.showInlineLineNumbers,U=q===void 0?!0:q,K=l.startingLineNumber,te=K===void 0?1:K,D=l.lineNumberContainerStyle,$=l.lineNumberStyle,le=$===void 0?{}:$,de=l.wrapLines,R=l.wrapLongLines,ee=R===void 0?!1:R,J=l.lineProps,re=J===void 0?{}:J,ae=l.renderer,Z=l.PreTag,B=Z===void 0?"pre":Z,Q=l.CodeTag,se=Q===void 0?"code":Q,be=l.code,j=be===void 0?(Array.isArray(p)?p[0]:p)||"":be,C=l.astGenerator,H=IC(l,ZC);C=C||t;var w=E?Re.createElement(tE,{containerStyle:D,codeStyle:x.style||{},numberStyle:le,startingLineNumber:te,codeString:j}):null,ie=h.hljs||h['pre[class*="language-"]']||{backgroundColor:"#fff"},pe=zv(C)?"hljs":"prismjs",ce=L?Object.assign({},H,{style:Object.assign({},ie,y)}):Object.assign({},H,{className:H.className?"".concat(pe," ").concat(H.className):pe,style:Object.assign({},y)});if(ee?x.style=ba({whiteSpace:"pre-wrap"},x.style):x.style=ba({whiteSpace:"pre"},x.style),!C)return Re.createElement(B,ce,w,Re.createElement(se,x,j));(de===void 0&&ae||ee)&&(de=!0),ae=ae||iE;var ke=[{type:"text",value:j}],Ie=rE({astGenerator:C,language:c,code:j,defaultCodeValue:ke});Ie.language===null&&(Ie.value=ke);var Me=(u=(o=j.match(/\n/g))===null||o===void 0?void 0:o.length)!==null&&u!==void 0?u:0,Et=te+Me,un=aE(Ie,de,re,E,U,te,Et,le,ee);return Re.createElement(B,ce,Re.createElement(se,x,!U&&w,ae({rows:un,stylesheet:h,useInlineStyles:L})))}}const My=/[#.]/g;function sE(t,i){const r=t||"",l={};let u=0,o,c;for(;u<r.length;){My.lastIndex=u;const p=My.exec(r),m=r.slice(u,p?p.index:r.length);m&&(o?o==="#"?l.id=m:Array.isArray(l.className)?l.className.push(m):l.className=[m]:c=m,u+=m.length),p&&(o=p[0],u++)}return{type:"element",tagName:c||i||"div",properties:l,children:[]}}function Rv(t,i,r){const l=r?dE(r):void 0;function u(o,c,...p){let m;if(o==null){m={type:"root",children:[]};const h=c;p.unshift(h)}else{m=sE(o,i);const h=m.tagName.toLowerCase(),g=l?l.get(h):void 0;if(m.tagName=g||h,oE(c))p.unshift(c);else for(const[y,S]of Object.entries(c))uE(t,m.properties,y,S)}for(const h of p)xd(m.children,h);return m.type==="element"&&m.tagName==="template"&&(m.content={type:"root",children:m.children},m.children=[]),m}return u}function oE(t){if(t===null||typeof t!="object"||Array.isArray(t))return!0;if(typeof t.type!="string")return!1;const i=t,r=Object.keys(t);for(const l of r){const u=i[l];if(u&&typeof u=="object"){if(!Array.isArray(u))return!0;const o=u;for(const c of o)if(typeof c!="number"&&typeof c!="string")return!0}}return!!("children"in t&&Array.isArray(t.children))}function uE(t,i,r,l){const u=jb(t,r);let o;if(l!=null){if(typeof l=="number"){if(Number.isNaN(l))return;o=l}else typeof l=="boolean"?o=l:typeof l=="string"?u.spaceSeparated?o=Fg(l):u.commaSeparated?o=Ug(l):u.commaOrSpaceSeparated?o=Fg(Ug(l).join(" ")):o=zy(u,u.property,l):Array.isArray(l)?o=[...l]:o=u.property==="style"?cE(l):String(l);if(Array.isArray(o)){const c=[];for(const p of o)c.push(zy(u,u.property,p));o=c}u.property==="className"&&Array.isArray(i.className)&&(o=i.className.concat(o)),i[u.property]=o}}function xd(t,i){if(i!=null)if(typeof i=="number"||typeof i=="string")t.push({type:"text",value:String(i)});else if(Array.isArray(i))for(const r of i)xd(t,r);else if(typeof i=="object"&&"type"in i)i.type==="root"?xd(t,i.children):t.push(i);else throw new Error("Expected node, nodes, or string, got `"+i+"`")}function zy(t,i,r){if(typeof r=="string"){if(t.number&&r&&!Number.isNaN(Number(r)))return Number(r);if((t.boolean||t.overloadedBoolean)&&(r===""||al(r)===al(i)))return!0}return r}function cE(t){const i=[];for(const[r,l]of Object.entries(t))i.push([r,l].join(": "));return i.join("; ")}function dE(t){const i=new Map;for(const r of t)i.set(r.toLowerCase(),r);return i}const fE=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],pE=Rv(Tb,"div");Rv(Xs,"g",fE);const mE=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],Ry={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};function Bv(t){const i=typeof t=="string"?t.charCodeAt(0):t;return i>=48&&i<=57}function hE(t){const i=typeof t=="string"?t.charCodeAt(0):t;return i>=97&&i<=102||i>=65&&i<=70||i>=48&&i<=57}function gE(t){const i=typeof t=="string"?t.charCodeAt(0):t;return i>=97&&i<=122||i>=65&&i<=90}function By(t){return gE(t)||Bv(t)}const yE=["","Named character references must be terminated by a semicolon","Numeric character references must be terminated by a semicolon","Named character references cannot be empty","Numeric character references cannot be empty","Named character references must be known","Numeric character references cannot be disallowed","Numeric character references cannot be outside the permissible Unicode range"];function bE(t,i){const r={},l=typeof r.additional=="string"?r.additional.charCodeAt(0):r.additional,u=[];let o=0,c=-1,p="",m,h;r.position&&("start"in r.position||"indent"in r.position?(h=r.position.indent,m=r.position.start):m=r.position);let g=(m?m.line:0)||1,y=(m?m.column:0)||1,S=A(),x;for(o--;++o<=t.length;)if(x===10&&(y=(h?h[c]:0)||1),x=t.charCodeAt(o),x===38){const E=t.charCodeAt(o+1);if(E===9||E===10||E===12||E===32||E===38||E===60||Number.isNaN(E)||l&&E===l){p+=String.fromCharCode(x),y++;continue}const q=o+1;let U=q,K=q,te;if(E===35){K=++U;const re=t.charCodeAt(K);re===88||re===120?(te="hexadecimal",K=++U):te="decimal"}else te="named";let D="",$="",le="";const de=te==="named"?By:te==="decimal"?Bv:hE;for(K--;++K<=t.length;){const re=t.charCodeAt(K);if(!de(re))break;le+=String.fromCharCode(re),te==="named"&&mE.includes(le)&&(D=le,$=rl(le))}let R=t.charCodeAt(K)===59;if(R){K++;const re=te==="named"?rl(le):!1;re&&(D=le,$=re)}let ee=1+K-q,J="";if(!(!R&&r.nonTerminated===!1))if(!le)te!=="named"&&L(4,ee);else if(te==="named"){if(R&&!$)L(5,1);else if(D!==le&&(K=U+D.length,ee=1+K-U,R=!1),!R){const re=D?1:3;if(r.attribute){const ae=t.charCodeAt(K);ae===61?(L(re,ee),$=""):By(ae)?$="":L(re,ee)}else L(re,ee)}J=$}else{R||L(2,ee);let re=Number.parseInt(le,te==="hexadecimal"?16:10);if(vE(re))L(7,ee),J="�";else if(re in Ry)L(6,ee),J=Ry[re];else{let ae="";xE(re)&&L(6,ee),re>65535&&(re-=65536,ae+=String.fromCharCode(re>>>10|55296),re=56320|re&1023),J=ae+String.fromCharCode(re)}}if(J){_(),S=A(),o=K-1,y+=K-q+1,u.push(J);const re=A();re.offset++,r.reference&&r.reference.call(r.referenceContext||void 0,J,{start:S,end:re},t.slice(q-1,K)),S=re}else le=t.slice(q-1,K),p+=le,y+=le.length,o=K-1}else x===10&&(g++,c++,y=0),Number.isNaN(x)?_():(p+=String.fromCharCode(x),y++);return u.join("");function A(){return{line:g,column:y,offset:o+((m?m.offset:0)||0)}}function L(E,q){let U;r.warning&&(U=A(),U.column+=q,U.offset+=q,r.warning.call(r.warningContext||void 0,yE[E],U,E))}function _(){p&&(u.push(p),r.text&&r.text.call(r.textContext||void 0,p,{start:S,end:A()}),p="")}}function vE(t){return t>=55296&&t<=57343||t>1114111}function xE(t){return t>=1&&t<=8||t===11||t>=13&&t<=31||t>=127&&t<=159||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534}var SE=0,Rs={},pt={util:{type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++SE}),t.__id},clone:function t(i,r){r=r||{};var l,u;switch(pt.util.type(i)){case"Object":if(u=pt.util.objId(i),r[u])return r[u];l={},r[u]=l;for(var o in i)i.hasOwnProperty(o)&&(l[o]=t(i[o],r));return l;case"Array":return u=pt.util.objId(i),r[u]?r[u]:(l=[],r[u]=l,i.forEach(function(c,p){l[p]=t(c,r)}),l);default:return i}}},languages:{plain:Rs,plaintext:Rs,text:Rs,txt:Rs,extend:function(t,i){var r=pt.util.clone(pt.languages[t]);for(var l in i)r[l]=i[l];return r},insertBefore:function(t,i,r,l){l=l||pt.languages;var u=l[t],o={};for(var c in u)if(u.hasOwnProperty(c)){if(c==i)for(var p in r)r.hasOwnProperty(p)&&(o[p]=r[p]);r.hasOwnProperty(c)||(o[c]=u[c])}var m=l[t];return l[t]=o,pt.languages.DFS(pt.languages,function(h,g){g===m&&h!=t&&(this[h]=o)}),o},DFS:function t(i,r,l,u){u=u||{};var o=pt.util.objId;for(var c in i)if(i.hasOwnProperty(c)){r.call(i,c,i[c],l||c);var p=i[c],m=pt.util.type(p);m==="Object"&&!u[o(p)]?(u[o(p)]=!0,t(p,r,null,u)):m==="Array"&&!u[o(p)]&&(u[o(p)]=!0,t(p,r,c,u))}}},plugins:{},highlight:function(t,i,r){var l={code:t,grammar:i,language:r};if(pt.hooks.run("before-tokenize",l),!l.grammar)throw new Error('The language "'+l.language+'" has no grammar.');return l.tokens=pt.tokenize(l.code,l.grammar),pt.hooks.run("after-tokenize",l),el.stringify(pt.util.encode(l.tokens),l.language)},tokenize:function(t,i){var r=i.rest;if(r){for(var l in r)i[l]=r[l];delete i.rest}var u=new kE;return qs(u,u.head,t),Uv(t,u,i,u.head,0),AE(u)},hooks:{all:{},add:function(t,i){var r=pt.hooks.all;r[t]=r[t]||[],r[t].push(i)},run:function(t,i){var r=pt.hooks.all[t];if(!(!r||!r.length))for(var l=0,u;u=r[l++];)u(i)}},Token:el};function el(t,i,r,l){this.type=t,this.content=i,this.alias=r,this.length=(l||"").length|0}function Uy(t,i,r,l){t.lastIndex=i;var u=t.exec(r);if(u&&l&&u[1]){var o=u[1].length;u.index+=o,u[0]=u[0].slice(o)}return u}function Uv(t,i,r,l,u,o){for(var c in r)if(!(!r.hasOwnProperty(c)||!r[c])){var p=r[c];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(o&&o.cause==c+","+m)return;var h=p[m],g=h.inside,y=!!h.lookbehind,S=!!h.greedy,x=h.alias;if(S&&!h.pattern.global){var A=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,A+"g")}for(var L=h.pattern||h,_=l.next,E=u;_!==i.tail&&!(o&&E>=o.reach);E+=_.value.length,_=_.next){var q=_.value;if(i.length>t.length)return;if(!(q instanceof el)){var U=1,K;if(S){if(K=Uy(L,E,t,y),!K||K.index>=t.length)break;var le=K.index,te=K.index+K[0].length,D=E;for(D+=_.value.length;le>=D;)_=_.next,D+=_.value.length;if(D-=_.value.length,E=D,_.value instanceof el)continue;for(var $=_;$!==i.tail&&(D<te||typeof $.value=="string");$=$.next)U++,D+=$.value.length;U--,q=t.slice(E,D),K.index-=E}else if(K=Uy(L,0,q,y),!K)continue;var le=K.index,de=K[0],R=q.slice(0,le),ee=q.slice(le+de.length),J=E+q.length;o&&J>o.reach&&(o.reach=J);var re=_.prev;R&&(re=qs(i,re,R),E+=R.length),wE(i,re,U);var ae=new el(c,g?pt.tokenize(de,g):de,x,de);if(_=qs(i,re,ae),ee&&qs(i,_,ee),U>1){var Z={cause:c+","+m,reach:J};Uv(t,i,r,_.prev,E,Z),o&&Z.reach>o.reach&&(o.reach=Z.reach)}}}}}}function kE(){var t={value:null,prev:null,next:null},i={value:null,prev:t,next:null};t.next=i,this.head=t,this.tail=i,this.length=0}function qs(t,i,r){var l=i.next,u={value:r,prev:i,next:l};return i.next=u,l.prev=u,t.length++,u}function wE(t,i,r){for(var l=i.next,u=0;u<r&&l!==t.tail;u++)l=l.next;i.next=l,l.prev=i,t.length-=u}function AE(t){for(var i=[],r=t.head.next;r!==t.tail;)i.push(r.value),r=r.next;return i}const Iv=pt;function Pv(){}Pv.prototype=Iv;const ct=new Pv;ct.highlight=jE;ct.register=TE;ct.alias=CE;ct.registered=EE;ct.listLanguages=OE;ct.util.encode=_E;ct.Token.stringify=Sd;function jE(t,i){if(typeof t!="string")throw new TypeError("Expected `string` for `value`, got `"+t+"`");let r,l;if(i&&typeof i=="object")r=i;else{if(l=i,typeof l!="string")throw new TypeError("Expected `string` for `name`, got `"+l+"`");if(Object.hasOwn(ct.languages,l))r=ct.languages[l];else throw new Error("Unknown language: `"+l+"` is not registered")}return{type:"root",children:Iv.highlight.call(ct,t,r,l)}}function TE(t){if(typeof t!="function"||!t.displayName)throw new Error("Expected `function` for `syntax`, got `"+t+"`");Object.hasOwn(ct.languages,t.displayName)||t(ct)}function CE(t,i){const r=ct.languages;let l={};typeof t=="string"?i&&(l[t]=i):l=t;let u;for(u in l)if(Object.hasOwn(l,u)){const o=l[u],c=typeof o=="string"?[o]:o;let p=-1;for(;++p<c.length;)r[c[p]]=r[u]}}function EE(t){if(typeof t!="string")throw new TypeError("Expected `string` for `aliasOrLanguage`, got `"+t+"`");return Object.hasOwn(ct.languages,t)}function OE(){const t=ct.languages,i=[];let r;for(r in t)Object.hasOwn(t,r)&&typeof t[r]=="object"&&i.push(r);return i}function Sd(t,i){if(typeof t=="string")return{type:"text",value:t};if(Array.isArray(t)){const l=[];let u=-1;for(;++u<t.length;)t[u]!==null&&t[u]!==void 0&&t[u]!==""&&l.push(Sd(t[u],i));return l}const r={attributes:{},classes:["token",t.type],content:Sd(t.content,i),language:i,tag:"span",type:t.type};return t.alias&&r.classes.push(...typeof t.alias=="string"?[t.alias]:t.alias),ct.hooks.run("wrap",r),pE(r.tag+"."+r.classes.join("."),DE(r.attributes),r.content)}function _E(t){return t}function DE(t){let i;for(i in t)Object.hasOwn(t,i)&&(t[i]=bE(t[i]));return t}var Ga=lE(ct,{});Ga.registerLanguage=function(t,i){return ct.register(i)};Ga.alias=function(t,i){return ct.alias(t,i)};dl.displayName="clike";dl.aliases=[];function dl(t){t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}Wd.displayName="regex";Wd.aliases=[];function Wd(t){(function(i){var r={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},l=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,u={pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},o={pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},c="(?:[^\\\\-]|"+l.source+")",p=RegExp(c+"-"+c),m={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};i.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:p,inside:{escape:l,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":r,"char-set":o,escape:l}},"special-escape":r,"char-set":u,backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":m}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:l,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":m}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(t)}Jd.displayName="javascript";Jd.aliases=["js"];function Jd(t){t.register(dl),t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript}ef.displayName="java";ef.aliases=[];function ef(t){t.register(dl),(function(i){var r=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,l=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,u={pattern:RegExp(/(^|[^\w.])/.source+l+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};i.languages.java=i.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[u,{pattern:RegExp(/(^|[^\w.])/.source+l+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:u.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+l+/[A-Z]\w*\b/.source),lookbehind:!0,inside:u.inside}],keyword:r,function:[i.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),i.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),i.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":u,keyword:r,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+l+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:u.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+l+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:u.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return r.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(t)}tf.displayName="typescript";tf.aliases=["ts"];function tf(t){t.register(Jd),(function(i){i.languages.typescript=i.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),i.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete i.languages.typescript.parameter,delete i.languages.typescript["literal-property"];var r=i.languages.extend("typescript",{});delete r["class-name"],i.languages.typescript["class-name"].inside=r,i.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r}}}}),i.languages.ts=i.languages.typescript})(t)}nf.displayName="kotlin";nf.aliases=["kt","kts"];function nf(t){t.register(dl),(function(i){i.languages.kotlin=i.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete i.languages.kotlin["class-name"];var r={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:i.languages.kotlin}};i.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:r},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:r},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete i.languages.kotlin.string,i.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),i.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),i.languages.kt=i.languages.kotlin,i.languages.kts=i.languages.kotlin})(t)}af.displayName="python";af.aliases=["py"];function af(t){t.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},t.languages.python["string-interpolation"].inside.interpolation.inside.rest=t.languages.python,t.languages.py=t.languages.python}rf.displayName="swift";rf.aliases=[];function rf(t){t.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+(/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+")+"|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},t.languages.swift["string-literal"].forEach(function(i){i.inside.interpolation.inside=t.languages.swift})}const NE={swift:rf,kotlin:nf,typescript:tf,python:af,java:ef};for(const[t,i]of Object.entries(NE))Ga.registerLanguage(t,i);Ga.registerLanguage("regex",Wd);const LE=[{id:"bubble",name:"Bubble Sort"},{id:"selection",name:"Selection Sort"},{id:"insertion",name:"Insertion Sort"},{id:"merge",name:"Merge Sort"},{id:"quick",name:"Quick Sort"}],ME={default:"bg-blue",comparing:"bg-gold",swapping:"bg-accent",sorted:"bg-green"},zE=[42,17,88,63,29,75,11,54,92,36,68,23,81,47,14,70,33,95,58,26,84,39,61,19];function RE(t){return Array.from({length:t},()=>Math.floor(Math.random()*88)+8)}function vt(t,i){return{bars:[...t],statuses:[...i]}}function BE(t){const i=[],r=[...t],l=r.length;for(let u=0;u<l-1;u++){let o=!1;for(let c=0;c<l-u-1;c++)i.push(vt(r,r.map((p,m)=>m>=l-u?"sorted":m===c||m===c+1?"comparing":"default"))),r[c]>r[c+1]&&([r[c],r[c+1]]=[r[c+1],r[c]],i.push(vt(r,r.map((p,m)=>m>=l-u?"sorted":m===c||m===c+1?"swapping":"default"))),o=!0);if(!o)break}return i.push(vt(r,r.map(()=>"sorted"))),i}function UE(t){const i=[],r=[...t],l=r.length;for(let u=0;u<l-1;u++){let o=u;for(let c=u+1;c<l;c++)i.push(vt(r,r.map((p,m)=>m<u?"sorted":m===o||m===c?"comparing":"default"))),r[c]<r[o]&&(o=c);o!==u&&([r[u],r[o]]=[r[o],r[u]],i.push(vt(r,r.map((c,p)=>p<u?"sorted":p===u||p===o?"swapping":"default"))))}return i.push(vt(r,r.map(()=>"sorted"))),i}function IE(t){const i=[],r=[...t],l=r.length;for(let u=1;u<l;u++){let o=u;for(;o>0&&r[o-1]>r[o];)i.push(vt(r,r.map((c,p)=>p===o||p===o-1?"comparing":(p<o,"default")))),[r[o],r[o-1]]=[r[o-1],r[o]],i.push(vt(r,r.map((c,p)=>p===o||p===o-1?"swapping":"default"))),o--;i.push(vt(r,r.map((c,p)=>p<=u?"sorted":"default")))}return i.push(vt(r,r.map(()=>"sorted"))),i}function PE(t){const i=[],r=[...t],l=r.length;function u(c,p,m,h){const g=c.slice(p,m+1),y=c.slice(m+1,h+1);let S=0,x=0,A=p;for(;S<g.length&&x<y.length;)i.push(vt(c,c.map((L,_)=>_===p+S||_===m+1+x?"comparing":"default"))),g[S]<=y[x]?c[A++]=g[S++]:c[A++]=y[x++];for(;S<g.length;)c[A++]=g[S++];for(;x<y.length;)c[A++]=y[x++];i.push(vt(c,c.map((L,_)=>_>=p&&_<=h?"swapping":"default")))}function o(c,p,m){if(p<m){const h=Math.floor((p+m)/2);o(c,p,h),o(c,h+1,m),u(c,p,h,m)}}return o(r,0,l-1),i.push(vt(r,r.map(()=>"sorted"))),i}function qE(t){const i=[],r=[...t],l=r.length;function u(c,p,m){const h=c[m];let g=p-1;for(let y=p;y<m;y++)i.push(vt(c,c.map((S,x)=>x===m||x===y?"comparing":"default"))),c[y]<=h&&(g++,g!==y&&([c[g],c[y]]=[c[y],c[g]],i.push(vt(c,c.map((S,x)=>x===g||x===y?"swapping":"default")))));return[c[g+1],c[m]]=[c[m],c[g+1]],i.push(vt(c,c.map((y,S)=>S===g+1?"swapping":"default"))),g+1}function o(c,p,m){if(p<m){const h=u(c,p,m);o(c,p,h-1),o(c,h+1,m)}}return o(r,0,l-1),i.push(vt(r,r.map(()=>"sorted"))),i}function HE(t,i){switch(t){case"bubble":return BE(i);case"selection":return UE(i);case"insertion":return IE(i);case"merge":return PE(i);case"quick":return qE(i)}}function FE({initialAlgo:t}){const{t:i}=Qt(),[r,l]=X.useState(t??"bubble"),[u,o]=X.useState(zE),[c,p]=X.useState([]),[m,h]=X.useState(0),[g,y]=X.useState(!1),[S,x]=X.useState(5),A=X.useRef(null);X.useEffect(()=>{const D=HE(r,u);p(D),h(0),y(!1)},[r,u]);const L=c[m]??{bars:u,statuses:u.map(()=>"default")},_=m>=c.length-1,E=Math.max(...L.bars,1),q=X.useCallback(()=>h(D=>Math.min(D+1,c.length-1)),[c.length]),U=X.useCallback(()=>h(D=>Math.max(D-1,0)),[]),K=X.useCallback(()=>{h(0),y(!1)},[]),te=X.useCallback(()=>o(RE(24)),[]);return X.useEffect(()=>{if(A.current&&clearInterval(A.current),!g)return;const D=Math.round(1050-S*100);return A.current=setInterval(()=>{h($=>$>=c.length-1?(y(!1),$):$+1)},D),()=>{A.current&&clearInterval(A.current)}},[g,S,c.length]),v.jsxs("div",{className:"bg-cardBackground border border-cardBorder rounded-xl p-5 space-y-5",children:[v.jsx("div",{className:"flex flex-wrap gap-2",children:LE.map(({id:D,name:$})=>v.jsx("button",{onClick:()=>l(D),className:`text-xs sm:text-sm px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${r===D?"bg-accent text-white border-accent":"bg-cardBackground border-cardBorder text-textSecondary hover:border-accent hover:text-accent"}`,children:$},D))}),v.jsx("div",{className:"flex items-end gap-0.5 h-40 bg-backgroundTop rounded-lg px-2 pt-2 border border-cardBorder",children:L.bars.map((D,$)=>v.jsx("div",{className:`flex-1 rounded-t-sm transition-all duration-75 ${ME[L.statuses[$]]}`,style:{height:`${D/E*100}%`}},$))}),v.jsxs("div",{className:"flex items-center justify-between text-xs text-textTertiary",children:[v.jsxs("span",{children:[i.visualizer.step," ",Math.min(m+1,c.length)," / ",c.length]}),_&&v.jsx("span",{className:"text-green font-medium",children:i.visualizer.sorted})]}),v.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[v.jsx("button",{onClick:K,className:"px-3 py-1.5 text-sm rounded-lg border border-cardBorder bg-cardBackground text-textSecondary hover:border-accent hover:text-accent transition-colors cursor-pointer",children:i.visualizer.reset}),v.jsx("button",{onClick:U,disabled:m===0,className:"px-3 py-1.5 text-sm rounded-lg border border-cardBorder bg-cardBackground text-textSecondary hover:border-accent hover:text-accent transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"◀"}),v.jsx("button",{onClick:()=>y(D=>!D),disabled:_,className:`px-4 py-1.5 text-sm rounded-lg border transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${g?"bg-accent text-white border-accent":"border-cardBorder bg-cardBackground text-textSecondary hover:border-accent hover:text-accent"}`,children:g?i.visualizer.pause:i.visualizer.play}),v.jsx("button",{onClick:q,disabled:_,className:"px-3 py-1.5 text-sm rounded-lg border border-cardBorder bg-cardBackground text-textSecondary hover:border-accent hover:text-accent transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"▶"}),v.jsx("button",{onClick:te,className:"px-3 py-1.5 text-sm rounded-lg border border-cardBorder bg-cardBackground text-textSecondary hover:border-accent hover:text-accent transition-colors cursor-pointer",children:i.visualizer.newArray}),v.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[v.jsx("span",{className:"text-xs text-textTertiary",children:i.visualizer.slow}),v.jsx("input",{type:"range",min:"1",max:"10",value:S,onChange:D=>x(Number(D.target.value)),className:"w-20 accent-accent cursor-pointer"}),v.jsx("span",{className:"text-xs text-textTertiary",children:i.visualizer.fast})]})]}),v.jsxs("div",{className:"flex flex-wrap gap-4 text-xs text-textTertiary",children:[v.jsxs("span",{className:"flex items-center gap-1.5",children:[v.jsx("span",{className:"inline-block w-3 h-3 rounded-sm bg-blue"}),i.visualizer.legendDefault]}),v.jsxs("span",{className:"flex items-center gap-1.5",children:[v.jsx("span",{className:"inline-block w-3 h-3 rounded-sm bg-gold"}),i.visualizer.legendComparing]}),v.jsxs("span",{className:"flex items-center gap-1.5",children:[v.jsx("span",{className:"inline-block w-3 h-3 rounded-sm bg-accent"}),i.visualizer.legendSwapping]}),v.jsxs("span",{className:"flex items-center gap-1.5",children:[v.jsx("span",{className:"inline-block w-3 h-3 rounded-sm bg-green"}),i.visualizer.legendSorted]})]})]})}const qv="codeLanguage",Hv="swift",VE={swift:!0,kotlin:!0,typescript:!0,python:!0,java:!0},kd=new Set;let wd=null;function GE(){try{const t=localStorage.getItem(qv);return t!==null&&Object.hasOwn(VE,t)?t:null}catch{return null}}function YE(){return wd??=GE()??Hv,wd}function $E(t){return kd.add(t),()=>kd.delete(t)}function KE(t){wd=t;try{localStorage.setItem(qv,t)}catch{}kd.forEach(i=>i())}function lf(){return[X.useSyncExternalStore($E,YE,()=>Hv),KE]}const QE={"bubble-sort":"bubble","selection-sort":"selection","insertion-sort":"insertion","merge-sort":"merge","quick-sort":"quick"},Iy={swift:"Swift",kotlin:"Kotlin",typescript:"TypeScript",python:"Python",java:"Java"},XE={swift:"swift",kotlin:"kotlin",typescript:"typescript",python:"python",java:"java"},ZE={easy:"bg-green/10 text-green border-green/30",medium:"bg-gold/10 text-gold border-gold/30",hard:"bg-accent/10 text-accent border-accent/30"};function WE(){const{slug:t}=Yi(),{locale:i,t:r,path:l}=Qt(),u=Qs.find(g=>g.slug===t),o=u&&Qi(u,i,Ov),[c,p]=lf();if(!o)return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-4",children:[v.jsx("p",{className:"text-textSecondary",children:r.dsa.notFound}),v.jsx(st,{to:l("/dsa"),className:"text-accent hover:underline text-sm",children:r.dsa.back})]});const m=o.codeExamples.map(g=>g.language),h=o.codeExamples.find(g=>g.language===c)??o.codeExamples[0];return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-8 pb-16",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`${o.title} · DSA · ${Qe}`}),v.jsx("meta",{name:"description",content:o.description})]}),v.jsx(st,{to:l("/dsa"),className:"text-textTertiary hover:text-textPrimary text-sm transition-colors inline-block",children:r.dsa.back}),v.jsxs("header",{className:"space-y-2",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"text-4xl",children:o.emoji}),v.jsxs("div",{children:[v.jsx("p",{className:"text-xs text-textTertiary uppercase tracking-wider",children:Cv(o.category,i,Ev)}),v.jsx("h1",{className:"text-3xl font-bold",children:o.title})]})]}),v.jsx("p",{className:"text-textSecondary leading-relaxed",children:o.description})]}),o.complexity&&v.jsxs("section",{className:"bg-cardBackground border border-cardBorder rounded-xl overflow-hidden",children:[v.jsx("div",{className:"px-4 py-3 border-b border-cardBorder",children:v.jsx("h2",{className:"font-semibold text-sm uppercase tracking-wider text-textTertiary",children:r.dsa.complexity})}),v.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-cardBorder",children:[o.complexity.time.best&&v.jsxs("div",{className:"px-4 py-3 text-center",children:[v.jsx("p",{className:"text-xs text-textTertiary mb-1",children:r.dsa.timeBest}),v.jsx("p",{className:"font-mono font-semibold text-green",children:o.complexity.time.best})]}),o.complexity.time.average&&v.jsxs("div",{className:"px-4 py-3 text-center",children:[v.jsx("p",{className:"text-xs text-textTertiary mb-1",children:r.dsa.timeAvg}),v.jsx("p",{className:"font-mono font-semibold text-gold",children:o.complexity.time.average})]}),v.jsxs("div",{className:"px-4 py-3 text-center",children:[v.jsx("p",{className:"text-xs text-textTertiary mb-1",children:r.dsa.timeWorst}),v.jsx("p",{className:"font-mono font-semibold text-accent",children:o.complexity.time.worst})]}),v.jsxs("div",{className:"px-4 py-3 text-center",children:[v.jsx("p",{className:"text-xs text-textTertiary mb-1",children:r.dsa.space}),v.jsx("p",{className:"font-mono font-semibold text-blue",children:o.complexity.space})]})]})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.dsa.keyPoints}),v.jsx("ul",{className:"space-y-2",children:o.keyPoints.map((g,y)=>v.jsxs("li",{className:"flex items-start gap-3 text-textSecondary",children:[v.jsx("span",{className:"text-accent mt-0.5 shrink-0",children:"›"}),v.jsx("span",{className:"leading-relaxed",children:g})]},y))})]}),o.hasVisualizer&&v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.dsa.interactiveVisualizer}),v.jsx(FE,{initialAlgo:QE[o.slug]})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.codeExamples}),v.jsx("div",{className:"flex flex-wrap gap-2",children:m.map(g=>v.jsx("button",{onClick:()=>p(g),className:`px-3 py-1.5 text-sm rounded-lg border transition-colors cursor-pointer ${c===g?"bg-accent text-white border-accent":"bg-cardBackground border-cardBorder text-textSecondary hover:border-accent hover:text-accent"}`,children:Iy[g]},g))}),v.jsxs("div",{className:"rounded-xl overflow-hidden border border-cardBorder",children:[v.jsx("div",{className:"flex items-center justify-between px-4 py-2 bg-cardBackground border-b border-cardBorder",children:v.jsx("span",{className:"text-xs text-textTertiary font-mono",children:Iy[h.language]})}),v.jsx(Ga,{language:XE[h.language],useInlineStyles:!1,customStyle:{margin:0,borderRadius:0,fontSize:"0.8rem",lineHeight:"1.6",background:"transparent",padding:"1.25rem"},codeTagProps:{style:{fontFamily:"ui-monospace, monospace"}},children:h.code})]})]}),o.problems.length>0&&v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.dsa.practiceProblems}),v.jsx("div",{className:"space-y-2",children:o.problems.map(g=>v.jsxs("div",{className:"flex items-center justify-between bg-cardBackground border border-cardBorder rounded-xl px-4 py-3 hover:border-accent transition-colors group",children:[v.jsx("span",{className:"text-textPrimary group-hover:text-accent transition-colors text-sm",children:g.title}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:`text-xs px-2.5 py-0.5 rounded-full border ${ZE[g.difficulty]}`,children:r.dsa.difficulty[g.difficulty]}),g.link&&v.jsx("a",{href:g.link,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-textTertiary hover:text-accent transition-colors",onClick:y=>y.stopPropagation(),children:"LeetCode ↗"})]})]},g.title))})]})]})}const JE={Creational:"Mengatur cara objek dibuat",Structural:"Mengatur cara objek disusun",Behavioral:"Mengatur cara objek berkomunikasi"},Fv={singleton:{intent:"Memastikan sebuah class hanya punya satu instance dan menyediakan satu titik akses global ke instance tersebut.",problem:"Beberapa resource, seperti koneksi database, konfigurasi, atau cache, seharusnya hanya ada satu. Tanpa Singleton, memanggil `new Manager()` di banyak tempat akan membuat instance terpisah yang bisa saling tidak sinkron.",keyPoints:["Hanya ada satu instance selama aplikasi berjalan","Lazy initialization: instance baru dibuat saat pertama kali diakses","Di lingkungan concurrent perlu thread safety; gunakan dispatch queue atau blok synchronized","Sulit di-unit-test karena membawa state global antar test","Utamakan dependency injection dibanding Singleton jika testability itu penting"],whenToUse:["Resource bersama seperti koneksi database, logger, atau analytics tracker","Configuration manager yang cukup membaca pengaturan satu kali","Cache in-memory yang dipakai bersama di seluruh aplikasi","Wrapper untuk antarmuka hardware (serial port, Bluetooth manager)"]},"factory-method":{intent:"Mendefinisikan interface untuk membuat objek, tetapi membiarkan subclass atau factory function menentukan class mana yang dibuat.",problem:"Kode client butuh objek, tetapi tidak seharusnya terikat ke class konkretnya. Menulis `new ConcreteType()` di mana-mana membuat penggantian implementasi jadi merepotkan.",keyPoints:["Memisahkan kode client dari implementasi class konkret","Open/Closed: tipe produk baru bisa ditambahkan tanpa mengubah kode yang sudah ada","Factory menyimpan semua pengetahuan tentang class mana yang harus dibuat","Bisa mengembalikan subclass berbeda berdasarkan parameter input","Abstract Factory memperluas ide ini dengan membuat keluarga objek yang saling terkait"],whenToUse:["Saat kamu belum tahu sebelumnya class mana yang akan dibuat","Saat logika pembuatan objek perlu dipusatkan dan dikontrol","Saat subclass yang seharusnya menentukan objek apa yang dibuat","Saat membuat objek dengan tipe berbeda berdasarkan konfigurasi runtime atau environment"]},builder:{intent:"Membangun objek kompleks langkah demi langkah lewat fluent interface, memisahkan proses pembuatan dari representasinya.",problem:"Class dengan banyak parameter opsional berujung pada telescoping constructor atau pemanggilan init panjang yang sulit dibaca. Kamu butuh cara rapi untuk membangun objek secara bertahap.",keyPoints:["Method chaining (fluent interface) membuat proses pembuatan mudah dibaca","Builder yang sama bisa menghasilkan representasi yang berbeda","Field wajib baru divalidasi saat build() dipanggil","Hasilnya immutable: setelah di-build, objeknya sudah lengkap",'Menghindari anti-pattern "telescoping constructor"'],whenToUse:["Objek dengan banyak field opsional atau yang bisa dikonfigurasi","Saat objek perlu dibuat melalui beberapa langkah","Saat kamu ingin membuat beberapa konfigurasi berbeda dari tipe objek yang sama","Builder untuk HTTP request, query, atau payload notifikasi"]},prototype:{intent:"Membuat objek baru dengan meng-clone instance yang sudah ada, bukan membangunnya dari nol.",problem:"Membuat objek baru itu mahal atau rumit. Kamu butuh salinan yang awalnya persis sama dengan objek yang sudah ada, hanya dengan sedikit perbedaan.",keyPoints:["Cloning sering lebih cepat dibanding membangun dari nol","Deep copy menduplikasi objek bersarang, sedangkan shallow copy memakainya bersama; pahami perbedaannya","Clone mempertahankan state internal yang mungkin sulit dibangun ulang dari luar","Client tidak perlu tahu class konkret dari objek tersebut",'Berguna untuk membuat objek "template" dengan nilai default yang sudah diatur'],whenToUse:["Pembuatan objek mahal dan objek serupa sudah tersedia","Objek konfigurasi atau template yang dipakai sebagai titik awal dengan sedikit variasi","Saat kamu perlu menyalin objek tanpa bergantung pada class konkretnya","Undo/redo: simpan snapshot state dengan meng-clone sebelum diubah"]},adapter:{intent:"Membungkus interface yang tidak kompatibel agar bisa bekerja dengan kode yang sudah ada tanpa perlu diubah.",problem:"Kamu ingin memakai library pihak ketiga atau class lama, tetapi interface-nya tidak sesuai dengan yang diharapkan kodemu. Kamu tidak bisa (atau tidak mau) mengubah salah satu sisinya.",keyPoints:["Menjembatani dua interface yang tidak kompatibel tanpa mengubah source code-nya","Object adapter membungkus instance (composition); class adapter memakai inheritance","Client hanya melihat target interface, bukan class yang di-adapt","Umum dipakai saat mengintegrasikan SDK pihak ketiga atau kode lama","Bisa meng-adapt beberapa adaptee sekaligus jika perlu (multi-adapter)"],whenToUse:["Memakai library pihak ketiga yang interface-nya berbeda dari yang diharapkan kodemu","Memakai ulang kode lama yang tidak bisa diubah","Beberapa class dengan interface yang tidak kompatibel perlu bekerja sama","Menyediakan interface yang stabil saat implementasi di baliknya berubah"]},decorator:{intent:"Membungkus sebuah objek untuk menambahkan perilaku baru secara dinamis, tanpa subclassing.",problem:"Kamu perlu menambahkan tanggung jawab ke objek tertentu saja, bukan ke seluruh class. Subclassing menyebabkan ledakan kombinasi class saat fitur dicampur (misalnya teks bold + italic + underline).",keyPoints:["Setiap decorator membungkus komponen dan mendelegasikan pemanggilan utamanya ke komponen tersebut","Decorator bisa ditumpuk dalam urutan apa pun, sangat mudah dikomposisikan","Mengikuti Open/Closed Principle: perilaku bisa diperluas tanpa mengubah kode yang ada","Lebih fleksibel dari inheritance karena diterapkan saat runtime per objek, bukan per class","Hati-hati dengan nesting yang terlalu dalam, terlalu banyak lapisan bisa menyulitkan debugging"],whenToUse:["Menambahkan perilaku ke objek tertentu saat runtime tanpa memengaruhi objek lain","Saat subclassing akan menghasilkan ledakan class untuk setiap kombinasi","Saat perluasan lewat inheritance tidak memungkinkan (class sealed/final)","Wrapper untuk logging, validasi, caching, dan kompresi"]},facade:{intent:"Menyediakan interface sederhana untuk subsistem yang kompleks, sambil menyembunyikan detail di dalamnya.",problem:"Library atau kumpulan service yang kompleks punya banyak class, konfigurasi, dan titik masuk. Kode client jadi kusut karena harus mengelola semuanya secara langsung.",keyPoints:["Mengurangi keterikatan antara client dan subsistem yang kompleks","Tidak mengunci subsistem; pengguna tingkat lanjut tetap bisa melewati facade bila perlu","Satu titik masuk membuat subsistem lebih mudah dipakai dengan benar","Mempermudah testing karena cukup me-mock facade, bukan setiap class di subsistem","Umum dipakai untuk membungkus SDK pihak ketiga agar paparannya ke aplikasi terbatas"],whenToUse:["Menyederhanakan library atau kumpulan service yang kompleks di balik satu interface yang rapi","Membuat lapisan antar subsistem untuk mengurangi ketergantungan di antaranya","Menyediakan default yang masuk akal untuk kasus umum","Membungkus SDK pihak ketiga agar aplikasimu tidak terlalu terikat padanya"]},proxy:{intent:"Menyediakan pengganti (placeholder) yang mengontrol akses ke objek lain, untuk menambahkan lazy loading, caching, atau pengecekan akses.",problem:"Objek yang berat (panggilan jaringan, database, file besar) tidak seharusnya dibuat atau diakses sebelum benar-benar dibutuhkan. Kamu ingin menambahkan kontrol akses atau caching tanpa menyentuh class aslinya.",keyPoints:["Client berinteraksi dengan proxy melalui interface yang sama dengan objek aslinya","Virtual proxy: menunda pembuatan objek yang mahal sampai pertama kali dipakai (lazy initialization)","Caching proxy: mengingat hasil dan mengembalikan salinan dari cache","Protection proxy: memeriksa izin sebelum mendelegasikan","Remote proxy: merepresentasikan objek yang berada di address space lain"],whenToUse:["Lazy initialization untuk objek yang boros resource","Caching untuk menghindari operasi mahal yang berulang","Kontrol akses: verifikasi izin sebelum sebuah operasi diizinkan","Logging atau monitoring akses ke objek yang sensitif"]},composite:{intent:"Menyusun objek menjadi struktur tree dan membuat client bisa memperlakukan objek tunggal maupun gabungannya dengan cara yang sama.",problem:"Kamu punya hierarki tree (komponen UI, file system, bagan organisasi) di mana operasi harus bekerja sama persis pada leaf maupun container, tanpa kasus khusus di kode client.",keyPoints:["Leaf dan Composite berbagi interface yang sama, client tidak perlu pengecekan instanceof","Struktur rekursif: container bisa berisi leaf maupun container lain","Menyederhanakan kode client yang bekerja dengan struktur tree","Mudah menambahkan jenis komponen baru tanpa mengubah kode client","Bisa terlalu umum saat kamu butuh batasan tentang apa yang boleh menyusun apa"],whenToUse:["Tree komponen UI, tree file system, bagan organisasi, hierarki menu","Saat kode client harus memperlakukan item tunggal dan grup secara identik","Hierarki part-whole apa pun yang bersifat rekursif","Me-render komponen bersarang secara seragam"]},observer:{intent:"Mendefinisikan ketergantungan one-to-many sehingga saat state satu objek berubah, semua objek yang bergantung padanya otomatis diberi tahu.",problem:"Beberapa bagian aplikasi perlu bereaksi saat data bersama berubah, tetapi kamu tidak ingin sumber datanya mengenal atau terikat erat dengan para konsumennya.",keyPoints:["Subject (publisher) menyimpan daftar observer (subscriber)","Loose coupling: subject tidak mengenal class observer yang konkret","Model push mengirim data bersama notifikasi; model pull membiarkan observer mengambilnya sendiri","Berisiko memory leak jika observer tidak di-unsubscribe (gunakan weak reference)","Dikenal juga sebagai pattern Publish/Subscribe atau Event Listener"],whenToUse:["UI yang harus diperbarui saat data di baliknya berubah (data binding)","Sistem event di mana beberapa komponen bereaksi terhadap event yang sama","Sistem notifikasi, analytics tracking, logging ke banyak target","Fondasi reactive programming (Combine, RxSwift, LiveData)"]},strategy:{intent:"Mendefinisikan sekumpulan algoritma yang bisa saling dipertukarkan dan memungkinkan penggantiannya saat runtime.",problem:"Sebuah class punya beberapa varian algoritma yang dipilih lewat if/else atau switch yang besar. Menambah varian baru berarti harus mengubah class itu sendiri.",keyPoints:["Setiap algoritma dibungkus di balik interface yang sama","Algoritma bisa diganti saat runtime tanpa mengubah class context","Menghilangkan blok kondisional besar untuk memilih algoritma","Context mendelegasikan pekerjaan ke strategy dan tidak menjalankan algoritmanya sendiri","Sangat dekat dengan dependency injection: strategy di-inject dari luar"],whenToUse:["Beberapa algoritma terkait yang hanya berbeda dalam perilakunya","Perilaku yang bisa ditukar: sorting, kompresi, pembayaran, validasi","Mengganti rantai if/else panjang yang memilih algoritma","Saat kamu ingin pengguna bisa mengonfigurasi atau memperluas perilaku"]},command:{intent:"Membungkus sebuah request sebagai objek, sehingga operasi bisa di-undo/redo, dimasukkan ke antrean, dan dicatat.",problem:"Kamu perlu mengirim request tanpa tahu operasi apa yang dijalankan, siapa yang menjalankannya, atau kapan. Kamu juga ingin mendukung undo/redo.",keyPoints:["Request dibungkus sebagai objek dengan method execute() dan undo()","Memisahkan invoker (pengirim command) dari receiver (yang menanganinya)","Command bisa dimasukkan ke antrean, dicatat, atau diputar ulang","undo() membalikkan efek execute(), memungkinkan pengelolaan riwayat secara penuh","Macro command menggabungkan beberapa command menjadi satu"],whenToUse:["Fitur undo/redo (text editor, aplikasi menggambar)","Sistem berbasis transaksi yang butuh rollback","Mengantrekan atau menjadwalkan aksi untuk dijalankan nanti","Mencatat dan mengaudit semua operasi yang dilakukan"]},state:{intent:"Memungkinkan sebuah objek mengubah perilakunya saat state internalnya berubah, seolah-olah class-nya ikut berubah.",problem:"Perilaku sebuah objek bergantung pada state-nya saat ini, sehingga muncul if/else atau switch besar yang tersebar di banyak method, semuanya memeriksa state saat ini.",keyPoints:["Setiap state adalah class terpisah yang membungkus perilaku untuk state tersebut","Transisi state dilakukan dengan mengganti objek state saat ini","Menghilangkan logika kondisional rumit yang tersebar di banyak method","State baru bisa ditambahkan tanpa mengubah class state yang sudah ada (Open/Closed)","Context mendelegasikan semua perilaku yang bergantung pada state ke objek state saat ini"],whenToUse:["Perilaku objek harus berubah berdasarkan state-nya saat runtime","Finite state machine: siklus hidup pesanan, status koneksi, status player","Saat kode khusus state terduplikasi di banyak cabang kondisional","Saat transisi antar state perlu eksplisit dan terdefinisi dengan jelas"]},"chain-of-responsibility":{intent:"Meneruskan request melalui rantai handler; setiap handler memutuskan apakah akan menanganinya atau meneruskannya.",problem:"Beberapa objek mungkin bisa menangani sebuah request, tetapi kamu tidak tahu yang mana sebelumnya. Kamu ingin menghindari keterikatan pengirim dengan satu penerima tertentu.",keyPoints:["Setiap handler menyimpan referensi ke handler berikutnya dalam rantai","Handler menangani request itu sendiri atau meneruskannya ke handler berikutnya","Pengirim tidak perlu tahu handler mana yang akan memproses request","Handler bisa ditambah, dihapus, atau diurutkan ulang saat runtime","Request bisa saja tidak tertangani jika tidak ada handler yang memprosesnya; tentukan perilaku default"],whenToUse:["Lebih dari satu handler bisa memproses request (pipeline middleware)","Handler yang dipakai harus ditentukan saat runtime","Pengecekan izin, rantai validasi, event bubbling","Pipeline logging, request interceptor"]},"template-method":{intent:"Mendefinisikan kerangka algoritma di base class, sementara langkah-langkah tertentu diserahkan ke subclass.",problem:"Beberapa class mengimplementasikan algoritma yang strukturnya sama tetapi langkahnya berbeda. Kode kerangka yang sama terduplikasi di setiap class.",keyPoints:["Base class mendefinisikan kerangka algoritma, yaitu urutan langkah secara keseluruhan","Subclass meng-override langkah tertentu tanpa mengubah struktur keseluruhan","final pada template method mencegah subclass mengubah urutannya","Hook method adalah override opsional yang menyediakan titik perluasan",`Hollywood Principle: "Don't call us, we'll call you", base class yang mengendalikan alurnya`],whenToUse:["Beberapa class berbagi struktur algoritma yang sama dan hanya beberapa langkahnya berbeda","Kode framework yang memanggil langkah buatan pengguna di titik tertentu","Menghilangkan duplikasi kode di antara class yang mirip","Pipeline pemrosesan data: fetch → parse → format → store"]},iterator:{intent:"Menyediakan cara untuk mengakses elemen koleksi secara berurutan tanpa membuka representasi internalnya.",problem:"Sebuah koleksi punya struktur internal yang rumit (tree, graph, ring buffer). Kamu ingin melakukan iterasi tanpa membuka cara data itu disimpan.",keyPoints:["Memisahkan logika traversal dari class koleksi","Mendukung beberapa traversal independen sekaligus pada koleksi yang sama","Memungkinkan interface for-in / for-of yang seragam untuk semua koleksi","Lazy iterator (Kotlin Sequences, Python generator) menghitung elemen hanya saat dibutuhkan","Internal iterator menyembunyikan loop-nya; external iterator memberi kendali ke pemanggil"],whenToUse:["Koleksi custom yang perlu mendukung loop for-in/for-of","Saat kamu butuh beberapa strategi traversal untuk koleksi yang sama","Menyembunyikan logika traversal yang rumit (traversal tree, pagination)","Lazy sequence di mana menghitung semua elemen di awal itu mahal"]}},Py={Creational:"bg-blue/10 text-blue border-blue/30",Structural:"bg-purple/10 text-purple border-purple/30",Behavioral:"bg-green/10 text-green border-green/30"},e3={Creational:"Control how objects are created",Structural:"Define how objects are composed",Behavioral:"Define how objects communicate"};function t3(){const{locale:t,t:i,path:r}=Qt(),l=Nd.map(o=>Qi(o,t,Fv)),u=o=>t==="en"?e3[o]:JE[o];return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-10 pb-16",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`${i.patterns.title} · ${Qe}`}),v.jsx("meta",{name:"description",content:i.patterns.metaDescription}),v.jsx("meta",{property:"og:title",content:`${i.patterns.title} · ${Qe}`}),v.jsx("meta",{property:"og:description",content:i.patterns.ogDescription}),v.jsx("meta",{property:"og:type",content:"website"})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h1",{className:"text-3xl font-bold",children:i.patterns.title}),v.jsx("p",{className:"text-textSecondary leading-relaxed",children:i.patterns.intro}),v.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:Mg.map(o=>v.jsxs("span",{className:`text-xs px-2.5 py-1 rounded-full border ${Py[o]}`,children:[o," · ",u(o)]},o))})]}),Mg.map(o=>v.jsxs("section",{children:[v.jsxs("div",{className:"flex items-baseline gap-3 mb-4",children:[v.jsx("h2",{className:"text-xl font-semibold",children:o}),v.jsx("span",{className:"text-textTertiary text-sm",children:u(o)})]}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:l.filter(c=>c.category===o).map(c=>v.jsx(st,{to:r(`/patterns/${c.slug}`),className:"group",children:v.jsxs("div",{className:"bg-cardBackground border border-cardBorder rounded-xl p-4 hover:border-accent transition-colors space-y-2 h-full",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-xl",children:c.emoji}),v.jsx("span",{className:"font-semibold text-textPrimary group-hover:text-accent transition-colors",children:c.title}),v.jsx("span",{className:`ml-auto text-xs px-2 py-0.5 rounded-full border ${Py[o]}`,children:o})]}),v.jsx("p",{className:"text-textSecondary text-sm leading-relaxed line-clamp-2",children:c.intent}),v.jsx("div",{className:"flex flex-wrap gap-1 pt-1",children:c.whenToUse.slice(0,2).map((p,m)=>v.jsx("span",{className:"text-xs text-textTertiary bg-cardBackground border border-cardBorder px-2 py-0.5 rounded-full line-clamp-1",children:p.length>40?p.slice(0,40)+"…":p},m))})]})},c.slug))})]},o))]})}const qy={swift:"Swift",kotlin:"Kotlin",typescript:"TypeScript",python:"Python",java:"Java"},n3={swift:"swift",kotlin:"kotlin",typescript:"typescript",python:"python",java:"java"},a3={Creational:"bg-blue/10 text-blue border-blue/30",Structural:"bg-purple/10 text-purple border-purple/30",Behavioral:"bg-green/10 text-green border-green/30"},i3={iOS:"🍎",Android:"🤖",Web:"🌐"};function r3(){const{slug:t}=Yi(),{locale:i,t:r,path:l}=Qt(),u=Nd.find(g=>g.slug===t),o=u&&Qi(u,i,Fv),[c,p]=lf();if(!o)return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-4",children:[v.jsx("p",{className:"text-textSecondary",children:r.patterns.notFound}),v.jsx(st,{to:l("/patterns"),className:"text-accent hover:underline text-sm",children:r.patterns.back})]});const m=o.codeExamples.map(g=>g.language),h=o.codeExamples.find(g=>g.language===c)??o.codeExamples[0];return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-8 pb-16",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`${o.title} ${r.patterns.titleSuffix} · ${Qe}`}),v.jsx("meta",{name:"description",content:o.intent})]}),v.jsx(st,{to:l("/patterns"),className:"text-textTertiary hover:text-textPrimary text-sm transition-colors inline-block",children:r.patterns.back}),v.jsxs("header",{className:"space-y-3",children:[v.jsxs("div",{className:"flex items-start gap-3",children:[v.jsx("span",{className:"text-4xl mt-1",children:o.emoji}),v.jsxs("div",{children:[v.jsx("div",{className:"flex items-center gap-2 mb-1",children:v.jsx("span",{className:`text-xs px-2.5 py-0.5 rounded-full border ${a3[o.category]}`,children:o.category})}),v.jsx("h1",{className:"text-3xl font-bold",children:o.title})]})]}),v.jsx("p",{className:"text-textSecondary leading-relaxed italic",children:o.intent})]}),v.jsxs("section",{className:"space-y-2",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.problem}),v.jsx("p",{className:"text-textSecondary leading-relaxed",children:o.problem})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.howItWorks}),v.jsx("ul",{className:"space-y-2",children:o.keyPoints.map((g,y)=>v.jsxs("li",{className:"flex items-start gap-3 text-textSecondary",children:[v.jsx("span",{className:"text-accent mt-0.5 shrink-0",children:"›"}),v.jsx("span",{className:"leading-relaxed",children:g})]},y))})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.whenToUse}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:o.whenToUse.map((g,y)=>v.jsxs("div",{className:"flex items-start gap-2 bg-cardBackground border border-cardBorder rounded-lg px-3 py-2.5",children:[v.jsx("span",{className:"text-accent shrink-0 mt-0.5",children:"✓"}),v.jsx("span",{className:"text-textSecondary text-sm leading-relaxed",children:g})]},y))})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.realWorldExamples}),v.jsx("div",{className:"space-y-2",children:o.realWorldExamples.map(g=>v.jsxs("div",{className:"flex items-start gap-3 bg-cardBackground border border-cardBorder rounded-xl px-4 py-3",children:[v.jsx("span",{className:"text-lg shrink-0",children:i3[g.platform]??"💻"}),v.jsxs("div",{children:[v.jsx("span",{className:"text-xs font-semibold text-textTertiary uppercase tracking-wider",children:g.platform}),v.jsx("p",{className:"text-textSecondary text-sm mt-0.5 leading-relaxed font-mono",children:g.example})]})]},g.platform))})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.codeExamples}),v.jsx("div",{className:"flex flex-wrap gap-2",children:m.map(g=>v.jsx("button",{onClick:()=>p(g),className:`px-3 py-1.5 text-sm rounded-lg border transition-colors cursor-pointer ${c===g?"bg-accent text-white border-accent":"bg-cardBackground border-cardBorder text-textSecondary hover:border-accent hover:text-accent"}`,children:qy[g]},g))}),v.jsxs("div",{className:"rounded-xl overflow-hidden border border-cardBorder",children:[v.jsx("div",{className:"flex items-center justify-between px-4 py-2 bg-cardBackground border-b border-cardBorder",children:v.jsx("span",{className:"text-xs text-textTertiary font-mono",children:qy[h.language]})}),v.jsx(Ga,{language:n3[h.language],useInlineStyles:!1,customStyle:{margin:0,borderRadius:0,fontSize:"0.8rem",lineHeight:"1.6",background:"transparent",padding:"1.25rem"},codeTagProps:{style:{fontFamily:"ui-monospace, monospace"}},children:h.code})]})]})]})}const Vv={Pillars:"Pilar",Relationships:"Relasi",Principles:"Prinsip"},l3={Pillars:"Empat fondasi desain berorientasi objek",Relationships:"Bagaimana objek saling terhubung dan bergantung",Principles:"Prinsip SOLID untuk kode OO yang mudah dirawat"},Gv={encapsulation:{title:"Encapsulation (Enkapsulasi)",intent:"Menyatukan data dan method yang mengolah data tersebut dalam satu unit, serta membatasi akses langsung ke state internal objek.",problem:"Tanpa encapsulation, kode dari luar bisa langsung membaca dan mengubah field sebuah objek. Akibatnya muncul state yang tidak valid, invariant yang rusak, dan keterikatan erat antara pemanggil dengan detail implementasi internal.",keyPoints:["Field dibuat private; akses dilakukan melalui method public atau computed property","Representasi internal bisa berubah tanpa merusak kode di luar","Logika validasi dan pengecekan invariant berada di satu tempat; setter yang menegakkan aturannya","Mengurangi keterikatan: pemanggil bergantung pada perilaku, bukan struktur internal"],whenToUse:["Menjaga invariant (misalnya saldo tidak boleh negatif)","Menyembunyikan detail implementasi yang mungkin berubah nanti","Menyediakan API yang terkontrol dan seminimal mungkin untuk sebuah class"],realWorldExamples:["Property private(set) dan computed property dengan setter custom","Field private di Kotlin yang diakses lewat getter/setter custom atau validasi di data class","Private class field JavaScript (#balance) yang hanya bisa diakses lewat method"]},abstraction:{title:"Abstraction (Abstraksi)",intent:"Menyembunyikan detail implementasi yang rumit di balik interface yang sederhana dan jelas, hanya menampilkan yang dibutuhkan pemanggil.",problem:"Tanpa abstraksi, pemanggil harus memahami dan bergantung pada setiap detail implementasi sebuah sistem. Kode jadi lebih sulit dipakai, diubah, dan dites, serta implementasinya tidak mungkin ditukar.",keyPoints:["Abstract class/protocol/interface menjelaskan *apa* yang dilakukan objek, bukan *bagaimana*",'Implementasi konkret mengisi bagian "bagaimana" di balik abstraksi',"Pemanggil memprogram terhadap abstraksi, sehingga implementasinya bisa ditukar","Mengurangi beban pikiran dengan hanya menampilkan operasi yang relevan"],whenToUse:["Merancang API publik atau library","Mendukung beberapa implementasi di balik satu interface (misalnya penyedia pembayaran)","Mengisolasi subsistem yang sering berubah di balik batas yang stabil"],realWorldExamples:["Protocol seperti Codable dan Equatable menyembunyikan detail conformance dari pemanggil","Interface Repository menyembunyikan apakah data berasal dari Room atau panggilan jaringan","Interface Storage yang mengabstraksi localStorage, sessionStorage, atau IndexedDB"]},inheritance:{title:"Inheritance (Pewarisan)",intent:'Memungkinkan sebuah class mewarisi state dan perilaku dari class induknya, membentuk relasi "is-a".',problem:"Menduplikasi field dan method di class-class yang mirip bikin perawatan jadi repot: perbaikan atau fitur yang ditambahkan di satu tempat harus disalin manual ke tempat lain.",keyPoints:["Subclass mewarisi field dan method dari superclass dan bisa meng-override perilakunya",'Memodelkan relasi "is-a", misalnya Dog adalah Animal','Hierarki yang terlalu dalam bisa kaku dan rapuh; pilih composition jika relasinya bukan benar-benar "is-a"',"Abstract base class mendefinisikan kontrak bersama yang wajib dipenuhi subclass"],whenToUse:["Beberapa tipe berbagi field/perilaku yang sama dengan spesialisasi (Shape → Circle, Square)","Base class dari framework yang menyediakan perilaku default (UIViewController, Activity)",'Memodelkan taksonomi alami dengan relasi "is-a" yang jelas'],realWorldExamples:["UIButton mewarisi UIControl, yang mewarisi UIView","AppCompatActivity extends FragmentActivity extends Activity","HTMLInputElement dan HTMLButtonElement sama-sama extends HTMLElement"]},polymorphism:{title:"Polymorphism (Polimorfisme)",intent:"Memungkinkan objek dengan tipe berbeda diperlakukan melalui interface yang sama, dengan setiap tipe punya perilakunya sendiri untuk pemanggilan yang sama.",problem:"Tanpa polimorfisme, kode harus memakai pengecekan tipe dan percabangan (if/else atau switch berdasarkan tipe) untuk menangani tipe objek yang berbeda. Logika ini terus membesar dan rawan error setiap kali tipe baru ditambahkan.",keyPoints:["Pemanggilan method yang sama menghasilkan perilaku berbeda tergantung tipe objek saat runtime","Dicapai lewat method overriding (subtype polymorphism) atau interface/protocol","Menghilangkan kondisional pengecekan tipe; implementasi yang tepat dipanggil otomatis","Memungkinkan penulisan kode generik yang bekerja dengan tipe apa pun yang memenuhi kontraknya"],whenToUse:["Memproses koleksi heterogen secara seragam (misalnya array berisi Shape)","Sistem plugin atau strategy di mana perilaku berbeda per tipe","Mengganti logika switch berdasarkan tipe dengan dynamic dispatch"],realWorldExamples:["draw() yang dipanggil pada subclass UIView mana pun akan menggambar tampilan subclass itu sendiri","onClick() berperilaku berbeda tergantung listener pada subclass View","toString() di-override per class untuk menghasilkan representasi string sendiri"]},association:{title:"Association (Asosiasi)",intent:"Relasi umum di mana satu objek memakai atau berinteraksi dengan objek lain tanpa kepemilikan; keduanya bisa ada secara mandiri.",problem:"Memodelkan interaksi dunia nyata, seperti Guru yang mengajar Murid, membutuhkan cara merepresentasikan relasi antar objek tanpa menyiratkan bahwa satu objek mengendalikan siklus hidup objek lainnya.",keyPoints:["Objek saling menyimpan referensi, tetapi masing-masing punya siklus hidup sendiri","Bisa one-to-one, one-to-many, atau many-to-many","Bisa satu arah (hanya satu objek yang mengenal yang lain) atau dua arah",'Bentuk relasi paling lemah, sekadar "mengenal" atau "memakai"'],whenToUse:["Memodelkan kolaborasi antar entitas yang mandiri (Driver dan Car)","Saat tidak ada objek yang memiliki atau mengendalikan siklus hidup objek lain","Merepresentasikan referensi/tautan antar objek domain"],realWorldExamples:["Property delegate yang menunjuk ke objek mandiri yang tidak dimiliki","ViewModel yang menyimpan referensi ke Repository yang bukan miliknya","Objek User yang mereferensikan Department lewat ID, keduanya disimpan terpisah"]},aggregation:{title:"Aggregation (Agregasi)",intent:'Relasi "has-a" di mana container menyimpan referensi ke objek yang bisa ada tanpa container tersebut; relasi whole-part tanpa kepemilikan.',problem:"Beberapa objek secara logis menjadi bagian dari sebuah grup, tetapi tidak boleh ikut terhapus saat grupnya dihapus. Menghapus Playlist tidak seharusnya menghapus Song di dalamnya.",keyPoints:['"Part" bisa ada tanpa "whole" dan bisa dipakai bersama oleh beberapa whole',"Direpresentasikan sebagai kumpulan referensi, bukan instance yang dimiliki","Menghapus container tidak ikut menghapus bagian-bagiannya","Bentuk kepemilikan yang lebih lemah dibanding composition"],whenToUse:["Playlist berisi Song yang juga ada di luar playlist","Department berisi Employee yang bisa pindah ke department lain","Team yang mereferensikan Player yang tetap ada tanpa team tersebut"],realWorldExamples:["Array berisi objek model bersama yang direferensikan oleh beberapa view controller","Entitas Playlist yang mereferensikan ID Song yang disimpan di database Room","Keranjang belanja yang menyimpan referensi ke objek Product dari katalog"]},composition:{title:"Composition (Komposisi)",intent:'Relasi "has-a" yang kuat di mana siklus hidup bagian terikat pada keseluruhannya; saat container dihapus, bagian-bagiannya ikut terhapus.',problem:"Beberapa objek tidak bermakna tanpa pemiliknya; sebuah Engine tidak masuk akal jika terlepas dari Car-nya. Memodelkannya dengan referensi bersama biasa tidak menggambarkan ketergantungan siklus hidup tersebut.",keyPoints:["Objek yang dimiliki dibuat dan dihapus bersama pemiliknya","Bagian biasanya tidak punya identitas mandiri di luar keseluruhannya","Utamakan composition dibanding inheritance untuk desain yang fleksibel dan loosely-coupled","Biasanya diimplementasikan dengan membuat instance bagian langsung di constructor pemiliknya"],whenToUse:["Sebuah objek memiliki komponen yang menjadi bagian integral darinya (Car → Engine, House → Rooms)","Membangun perilaku kompleks dengan menggabungkan objek-objek kecil, bukan subclassing",'Saat "part" tidak boleh dipakai bersama oleh beberapa "whole"'],realWorldExamples:["View controller yang memiliki dan mengelola siklus hidup child view-nya","Activity yang memiliki Fragment yang dibuat dan dihapus bersamanya","Class Car yang membuat instance Engine-nya sendiri di constructor"]},"single-responsibility":{intent:"Sebuah class seharusnya hanya punya satu alasan untuk berubah; lakukan satu hal dan lakukan dengan baik.",problem:"Class yang menangani banyak tanggung jawab (misalnya business logic, persistence, dan formatting sekaligus) jadi rapuh: perubahan kecil pada satu tanggung jawab berisiko merusak yang lain, dan class itu terus menarik perubahan lain yang tidak berkaitan.",keyPoints:["Setiap class atau module membungkus satu fungsionalitas saja","Tanggung jawab dipecah ke class terpisah, masing-masing dengan tujuan yang fokus","Meningkatkan testability: class kecil dengan sedikit dependency lebih mudah dites secara terisolasi",'Patokan utamanya adalah "alasan untuk berubah", bukan "jumlah method"'],whenToUse:["Sebuah class mencampur akses data, aturan bisnis, dan logika tampilan",'Refactoring "god class" yang sudah tumbuh mengerjakan segalanya','Merancang class baru: tanyakan "apa satu tugas class ini?"'],realWorldExamples:["Memisahkan networking (APIClient), persistence (Storage), dan presentation (ViewModel)","Memecah Activity yang gemuk menjadi lapisan ViewModel, Repository, dan UI","Memisahkan route handler, logika bisnis/service, dan lapisan akses data"]},"open-closed":{intent:"Entitas software seharusnya terbuka untuk perluasan tetapi tertutup untuk modifikasi; tambahkan perilaku baru tanpa mengubah kode yang sudah ada dan sudah dites.",problem:"Saat kebutuhan baru ditangani dengan mengedit class yang sudah ada, misalnya menambah cabang `if` untuk setiap tipe baru, setiap perubahan berisiko merusak fungsionalitas yang ada dan menuntut seluruh class dites ulang.",keyPoints:["Perilaku baru ditambahkan dengan membuat class/implementasi baru, bukan mengedit yang lama","Dicapai lewat abstraksi: interface atau protocol yang menjadi sandaran kode yang ada","Kode lama yang sudah dites tetap utuh dan stabil","Sering diwujudkan lewat Strategy pattern, polimorfisme, atau arsitektur plugin"],whenToUse:["Sistem yang sering butuh varian baru (metode pembayaran, exporter file, aturan diskon)","Menghindari rantai if/else atau switch panjang yang terus bertambah setiap ada tipe baru","Merancang arsitektur berbasis plugin"],realWorldExamples:["Menambahkan subclass UIView baru tanpa mengubah UIKit itu sendiri","Menambahkan implementasi PaymentMethod baru tanpa menyentuh alur checkout","Menambahkan format ekspor baru dengan mengimplementasikan interface Exporter"]},"liskov-substitution":{intent:"Subtype harus bisa menggantikan base type-nya tanpa mengubah kebenaran program.",problem:"Jika subclass meng-override perilaku dengan cara yang melanggar ekspektasi base class-nya, misalnya melempar error untuk operasi yang didukung base class atau mengembalikan hasil yang tak terduga, kode yang mengandalkan base type akan rusak saat diberi subtype tersebut.",keyPoints:["Subclass harus menghormati kontrak (precondition, postcondition, invariant) dari superclass-nya","Method yang di-override harus menerima input setidaknya seluas method dasarnya dan mengembalikan output yang tidak lebih longgar","Contoh pelanggaran klasik: Square extends Rectangle tetapi merusak independensi setWidth/setHeight","Jika subtype tidak bisa sepenuhnya memenuhi kontrak base type, pertimbangkan ulang relasi inheritance-nya"],whenToUse:["Merancang hierarki class di mana subclass harus bisa langsung menggantikan induknya","Meninjau inheritance untuk mencari perilaku override yang mengejutkan",'Memilih antara inheritance dan composition untuk relasi yang "hampir is-a"'],realWorldExamples:["Subclass UIView mana pun harus bekerja dengan benar di mana pun UIView diharapkan","Subclass RecyclerView.ViewHolder mana pun harus berperilaku benar di dalam adapter","Implementasi Storage mana pun (localStorage/sessionStorage) harus mendukung kontrak get/set/remove yang sama"]},"interface-segregation":{intent:"Client tidak boleh dipaksa bergantung pada interface atau method yang tidak dipakainya; lebih baik banyak interface kecil yang fokus daripada satu interface besar serbaguna.",problem:'Interface "gemuk" dengan banyak method yang tidak berkaitan memaksa setiap class yang mengimplementasikannya menyediakan (atau membuat stub) method yang tidak dibutuhkan. Hasilnya implementasi kosong atau yang melempar error, serta keterikatan erat antar client yang tidak berhubungan.',keyPoints:["Pecah interface besar menjadi interface kecil sesuai peran (misalnya Printable dan Scannable, bukan satu interface Machine)","Class hanya mengimplementasikan interface yang relevan dengan perilakunya","Client hanya bergantung pada method yang benar-benar dipanggilnya","Mengurangi efek berantai: perubahan pada method yang tidak dipakai tidak lagi memaksa perubahan di class yang tidak berkaitan"],whenToUse:["Sebuah interface punya method yang hanya dibutuhkan sebagian implementer",'Class yang mengimplementasikan melempar "not supported" untuk sebagian method interface',"Merancang sistem plugin/kapabilitas (misalnya printer yang bisa mencetak tetapi tidak bisa memindai)"],realWorldExamples:["Protocol terpisah seperti UITableViewDataSource dan UITableViewDelegate, bukan satu protocol raksasa","Interface listener terpisah seperti OnClickListener dan OnLongClickListener","Memecah interface Repository generik menjadi interface Readable dan Writable yang terpisah"]},"dependency-inversion":{intent:"Module tingkat tinggi tidak boleh bergantung langsung pada module tingkat rendah; keduanya harus bergantung pada abstraksi.",problem:"Saat business logic tingkat tinggi langsung membuat dan bergantung pada class konkret tingkat rendah (misalnya email client tertentu), kodenya jadi kaku, sulit dites, dan terikat erat pada detail implementasi yang bisa berubah.",keyPoints:["Module tingkat tinggi dan rendah sama-sama bergantung pada abstraksi bersama (interface/protocol)",'Implementasi konkret "di-inject" ke module tingkat tinggi lewat constructor atau property injection',"Memungkinkan pertukaran implementasi (misalnya sender asli vs. mock) tanpa mengubah business logic","Menjadi dasar framework dependency injection serta arsitektur berlapis yang mudah dites"],whenToUse:["Business logic perlu bisa dites dengan dependency yang di-mock","Mengganti infrastruktur (database, network client, file system) tanpa menyentuh logika domain","Memisahkan lapisan dalam clean architecture atau hexagonal architecture"],realWorldExamples:["Meng-inject NetworkServiceProtocol ke ViewModel alih-alih memakai URLSession secara langsung","Hilt/Dagger meng-inject implementasi interface Repository ke dalam ViewModel","Mengoper interface database ke constructor service, yang bisa ditukar dengan implementasi in-memory saat testing"]}},Hy={Pillars:"bg-blue/10 text-blue border-blue/30",Relationships:"bg-purple/10 text-purple border-purple/30",Principles:"bg-green/10 text-green border-green/30"},s3={Pillars:"The four foundations of object-oriented design",Relationships:"How objects relate to and depend on each other",Principles:"The SOLID principles for maintainable OO code"};function o3(){const{locale:t,t:i,path:r}=Qt(),l=Ld.map(c=>Qi(c,t,Gv)),u=c=>t==="en"?c:Vv[c],o=c=>t==="en"?s3[c]:l3[c];return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-10 pb-16",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`${i.oop.title} · ${Qe}`}),v.jsx("meta",{name:"description",content:i.oop.metaDescription}),v.jsx("meta",{property:"og:title",content:`${i.oop.title} · ${Qe}`}),v.jsx("meta",{property:"og:description",content:i.oop.ogDescription}),v.jsx("meta",{property:"og:type",content:"website"})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h1",{className:"text-3xl font-bold",children:i.oop.title}),v.jsx("p",{className:"text-textSecondary leading-relaxed",children:i.oop.intro}),v.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:zg.map(c=>v.jsxs("span",{className:`text-xs px-2.5 py-1 rounded-full border ${Hy[c]}`,children:[u(c)," · ",o(c)]},c))})]}),zg.map(c=>v.jsxs("section",{children:[v.jsxs("div",{className:"flex items-baseline gap-3 mb-4",children:[v.jsx("h2",{className:"text-xl font-semibold",children:u(c)}),v.jsx("span",{className:"text-textTertiary text-sm",children:o(c)})]}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:l.filter(p=>p.category===c).map(p=>v.jsx(st,{to:r(`/oop/${p.slug}`),className:"group",children:v.jsxs("div",{className:"bg-cardBackground border border-cardBorder rounded-xl p-4 hover:border-accent transition-colors space-y-2 h-full",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-xl",children:p.emoji}),v.jsx("span",{className:"font-semibold text-textPrimary group-hover:text-accent transition-colors",children:p.title}),v.jsx("span",{className:`ml-auto text-xs px-2 py-0.5 rounded-full border ${Hy[c]}`,children:u(c)})]}),v.jsx("p",{className:"text-textSecondary text-sm leading-relaxed line-clamp-2",children:p.intent}),v.jsx("div",{className:"flex flex-wrap gap-1 pt-1",children:p.whenToUse.slice(0,2).map((m,h)=>v.jsx("span",{className:"text-xs text-textTertiary bg-cardBackground border border-cardBorder px-2 py-0.5 rounded-full line-clamp-1",children:m.length>40?m.slice(0,40)+"…":m},h))})]})},p.slug))})]},c))]})}const Fy={swift:"Swift",kotlin:"Kotlin",typescript:"TypeScript",python:"Python",java:"Java"},u3={swift:"swift",kotlin:"kotlin",typescript:"typescript",python:"python",java:"java"},c3={Pillars:"bg-blue/10 text-blue border-blue/30",Relationships:"bg-purple/10 text-purple border-purple/30",Principles:"bg-green/10 text-green border-green/30"},d3={iOS:"🍎",Android:"🤖",Web:"🌐"};function f3(){const{slug:t}=Yi(),{locale:i,t:r,path:l}=Qt(),u=Ld.find(g=>g.slug===t),o=u&&Qi(u,i,Gv),[c,p]=lf();if(!o)return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-4",children:[v.jsx("p",{className:"text-textSecondary",children:r.oop.notFound}),v.jsx(st,{to:l("/oop"),className:"text-accent hover:underline text-sm",children:r.oop.back})]});const m=o.codeExamples.map(g=>g.language),h=o.codeExamples.find(g=>g.language===c)??o.codeExamples[0];return v.jsxs("div",{className:"pt-20 max-w-3xl mx-auto space-y-8 pb-16",children:[v.jsxs(gn,{children:[v.jsx("title",{children:`${o.title} · OOP · ${Qe}`}),v.jsx("meta",{name:"description",content:o.intent})]}),v.jsx(st,{to:l("/oop"),className:"text-textTertiary hover:text-textPrimary text-sm transition-colors inline-block",children:r.oop.back}),v.jsxs("header",{className:"space-y-3",children:[v.jsxs("div",{className:"flex items-start gap-3",children:[v.jsx("span",{className:"text-4xl mt-1",children:o.emoji}),v.jsxs("div",{children:[v.jsx("div",{className:"flex items-center gap-2 mb-1",children:v.jsx("span",{className:`text-xs px-2.5 py-0.5 rounded-full border ${c3[o.category]}`,children:i==="en"?o.category:Vv[o.category]})}),v.jsx("h1",{className:"text-3xl font-bold",children:o.title})]})]}),v.jsx("p",{className:"text-textSecondary leading-relaxed italic",children:o.intent})]}),v.jsxs("section",{className:"space-y-2",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.problem}),v.jsx("p",{className:"text-textSecondary leading-relaxed",children:o.problem})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.howItWorks}),v.jsx("ul",{className:"space-y-2",children:o.keyPoints.map((g,y)=>v.jsxs("li",{className:"flex items-start gap-3 text-textSecondary",children:[v.jsx("span",{className:"text-accent mt-0.5 shrink-0",children:"›"}),v.jsx("span",{className:"leading-relaxed",children:g})]},y))})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.whenToUse}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:o.whenToUse.map((g,y)=>v.jsxs("div",{className:"flex items-start gap-2 bg-cardBackground border border-cardBorder rounded-lg px-3 py-2.5",children:[v.jsx("span",{className:"text-accent shrink-0 mt-0.5",children:"✓"}),v.jsx("span",{className:"text-textSecondary text-sm leading-relaxed",children:g})]},y))})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.realWorldExamples}),v.jsx("div",{className:"space-y-2",children:o.realWorldExamples.map(g=>v.jsxs("div",{className:"flex items-start gap-3 bg-cardBackground border border-cardBorder rounded-xl px-4 py-3",children:[v.jsx("span",{className:"text-lg shrink-0",children:d3[g.platform]??"💻"}),v.jsxs("div",{children:[v.jsx("span",{className:"text-xs font-semibold text-textTertiary uppercase tracking-wider",children:g.platform}),v.jsx("p",{className:"text-textSecondary text-sm mt-0.5 leading-relaxed font-mono",children:g.example})]})]},g.platform))})]}),v.jsxs("section",{className:"space-y-3",children:[v.jsx("h2",{className:"text-xl font-semibold",children:r.concept.codeExamples}),v.jsx("div",{className:"flex flex-wrap gap-2",children:m.map(g=>v.jsx("button",{onClick:()=>p(g),className:`px-3 py-1.5 text-sm rounded-lg border transition-colors cursor-pointer ${c===g?"bg-accent text-white border-accent":"bg-cardBackground border-cardBorder text-textSecondary hover:border-accent hover:text-accent"}`,children:Fy[g]},g))}),v.jsxs("div",{className:"rounded-xl overflow-hidden border border-cardBorder",children:[v.jsx("div",{className:"flex items-center justify-between px-4 py-2 bg-cardBackground border-b border-cardBorder",children:v.jsx("span",{className:"text-xs text-textTertiary font-mono",children:Fy[h.language]})}),v.jsx(Ga,{language:u3[h.language],useInlineStyles:!1,customStyle:{margin:0,borderRadius:0,fontSize:"0.8rem",lineHeight:"1.6",background:"transparent",padding:"1.25rem"},codeTagProps:{style:{fontFamily:"ui-monospace, monospace"}},children:h.code})]})]})]})}function p3(){const[t,i]=X.useState(()=>typeof document<"u"&&document.documentElement.classList.contains("dark"));return X.useEffect(()=>{document.documentElement.classList.toggle("dark",t),localStorage.setItem("theme",t?"dark":"light")},[t]),{isDark:t,toggle:()=>i(r=>!r)}}const m3={en:"en_US",id:"id_ID"};function h3(){const{pathname:t}=Sa();return X.useEffect(()=>{window.scrollTo(0,0)},[t]),null}function g3(){const{id:t}=Yi();return v.jsx(ib,{to:`/articles/${t}`,replace:!0})}function Vy({locale:t,onToggle:i}){const{pathname:r}=Sa(),l=hb(r);return v.jsxs(mb.Provider,{value:t,children:[v.jsxs(gn,{htmlAttributes:{lang:t},children:[v.jsx("meta",{property:"og:locale",content:m3[t]}),v.jsx("link",{rel:"canonical",href:Nc+r}),pb.map(u=>v.jsx("link",{rel:"alternate",hrefLang:u,href:Nc+Dd(l,u)},u)),v.jsx("link",{rel:"alternate",hrefLang:"x-default",href:Nc+l})]}),v.jsx(J1,{onToggle:i}),v.jsx("main",{className:"p-4",children:v.jsx(o1,{})}),v.jsx(ew,{})]})}function Gy(){return v.jsxs(v.Fragment,{children:[v.jsx(St,{path:"articles",element:v.jsx(_C,{})}),v.jsx(St,{path:"articles/:id",element:v.jsx(OC,{})}),v.jsx(St,{path:"apps/:id",element:v.jsx(zC,{})}),v.jsx(St,{path:"dsa",element:v.jsx(BC,{})}),v.jsx(St,{path:"dsa/:slug",element:v.jsx(WE,{})}),v.jsx(St,{path:"patterns",element:v.jsx(t3,{})}),v.jsx(St,{path:"patterns/:slug",element:v.jsx(r3,{})}),v.jsx(St,{path:"oop",element:v.jsx(o3,{})}),v.jsx(St,{path:"oop/:slug",element:v.jsx(f3,{})})]})}function y3(){const{toggle:t}=p3();return v.jsxs(db,{children:[v.jsx(h3,{}),v.jsx("div",{className:"min-h-screen bg-backgroundTop text-textPrimary",children:v.jsxs(c1,{children:[v.jsxs(St,{path:"/",element:v.jsx(Vy,{locale:"en",onToggle:t}),children:[v.jsx(St,{index:!0,element:v.jsx(Bg,{})}),Gy(),v.jsx(St,{path:"blog",element:v.jsx(ib,{to:"/articles",replace:!0})}),v.jsx(St,{path:"blog/:id",element:v.jsx(g3,{})})]}),v.jsxs(St,{path:"/id",element:v.jsx(Vy,{locale:"id",onToggle:t}),children:[v.jsx(St,{index:!0,element:v.jsx(Bg,{})}),Gy()]})]})})]})}const Zc=document.getElementById("root"),Yy=v.jsx(X.StrictMode,{children:v.jsx(y1,{children:v.jsx(y3,{})})});Zc.hasChildNodes()?pg.hydrateRoot(Zc,Yy):pg.createRoot(Zc).render(Yy);
