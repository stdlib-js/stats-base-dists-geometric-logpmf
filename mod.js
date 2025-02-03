// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,s,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,u,f,l,p,s,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-s.length)<0?s:s=g?s+m(d):m(d)+s)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){var e,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var N,I=Object.prototype,T=I.toString,V=I.__defineGetter__,$=I.__defineSetter__,O=I.__lookupGetter__,C=I.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(O.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};var P=N;var R=Math.floor;function G(r){return R(r)===r&&r>=0}function Z(r){return r!=r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var L=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var X,z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof z?z.toStringTag:"";X=W&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return L.call(r);t=r[Y],a=Y,e=null!=(i=r)&&M.call(i,a);try{r[Y]=void 0}catch(e){return L.call(r)}return n=L.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return L.call(r)};var q=X,B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null;var H,J="function"==typeof Uint32Array?Uint32Array:void 0;H=function(){var r,e,t;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(B&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=H,Q="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null;var er,tr="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),t=e,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr=er,ir="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null;var or,cr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),t=e,r=(ir&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var ur=or,fr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null;var pr,sr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(fr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var yr,gr={uint16:pr,uint8:ur};(yr=new gr.uint16(1))[0]=4660;var dr=52===new gr.uint8(yr.buffer)[0],vr=!0===dr?1:0,hr=new nr(1),wr=new K(hr.buffer);function br(r){return hr[0]=r,wr[vr]}var mr=!0===dr?1:0,Ar=new nr(1),_r=new K(Ar.buffer);var Er=1023,Ur=Number.NEGATIVE_INFINITY;var Sr=.6931471803691238,xr=1.9082149292705877e-10,kr=0x40000000000000,Fr=.3333333333333333,jr=1048575,Nr=2146435072,Ir=1048576,Tr=1072693248;function Vr(r){var e,t,n,i,a,o,c,u,f,l,p,s;return 0===r?Ur:Z(r)||r<0?NaN:(a=0,(t=br(r))<Ir&&(a-=54,t=br(r*=kr)),t>=Nr?r+r:(a+=(t>>20)-Er|0,a+=(u=(t&=jr)+614244&1048576|0)>>20|0,c=(r=function(r,e){return Ar[0]=r,_r[mr]=e>>>0,Ar[0]}(r,t|u^Tr))-1,(jr&2+t)<3?0===c?0===a?0:a*Sr+a*xr:(o=c*c*(.5-Fr*c),0===a?c-o:a*Sr-(o-a*xr-c)):(u=t-398458|0,f=440401-t|0,i=(p=(s=(l=c/(2+c))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-l*(e+o)):a*Sr-(e-(l*(e+o)+a*xr)-c)):0===a?c-l*(c-o):a*Sr-(l*(c-o)-a*xr-c))))}function $r(r,e){var t;return Z(r)||Z(e)||e<0||e>1?NaN:G(r)?(t=1-e,Vr(e)+r*Vr(t)):Ur}function Or(r){return Z(r)||r<0||r>1?(e=NaN,function(){return e}):function(e){var t;if(Z(e))return NaN;if(G(e))return t=1-r,Vr(r)+e*Vr(t);return Ur};var e}P($r,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Or});export{$r as default,Or as factory};
//# sourceMappingURL=mod.js.map
