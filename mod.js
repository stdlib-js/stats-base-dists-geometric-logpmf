// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,y=function(r,t,n){var c,y,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,v="set"in n,y&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r},l=t()?c:y;var v=function(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},p=Math.floor;var b=function(r){return p(r)===r&&r>=0};var A=function(r){return r!=r};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return _&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,d=m;var U=function(r){return d.call(r)},s=Object.prototype.hasOwnProperty;var h=function(r,t){return null!=r&&s.call(r,t)},j="function"==typeof Symbol?Symbol.toStringTag:"",N=h,g=j,S=m;var E=U,F=function(r){var t,n,e;if(null==r)return S.call(r);n=r[g],t=N(r,g);try{r[g]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[g]=n:delete r[g],e},O=w()?F:E,T=O,P="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null,x=function(r){return P&&r instanceof Uint32Array||"[object Uint32Array]"===T(r)},G=I;var V=function(){var r,t;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,4294967296,4294967297]),r=x(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var k="function"==typeof Uint32Array?Uint32Array:void 0,C=function(){throw new Error("not implemented")},M=V()?k:C,Y=O,q="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null,B=function(r){return q&&r instanceof Float64Array||"[object Float64Array]"===Y(r)},D=z;var H=function(){var r,t;if("function"!=typeof D)return!1;try{t=new D([1,3.14,-3.14,NaN]),r=B(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var J="function"==typeof Float64Array?Float64Array:void 0,K=function(){throw new Error("not implemented")},L=H()?J:K,Q=O,R="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null,X=function(r){return R&&r instanceof Uint8Array||"[object Uint8Array]"===Q(r)},Z=W;var $=function(){var r,t;if("function"!=typeof Z)return!1;try{t=new Z(t=[1,3.14,-3.14,256,257]),r=X(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var rr="function"==typeof Uint8Array?Uint8Array:void 0,tr=function(){throw new Error("not implemented")},nr=$()?rr:tr,er=O,or="function"==typeof Uint16Array;var ar="function"==typeof Uint16Array?Uint16Array:null,ir=function(r){return or&&r instanceof Uint16Array||"[object Uint16Array]"===er(r)},ur=ar;var fr=function(){var r,t;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,65536,65537]),r=ir(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var cr,yr="function"==typeof Uint16Array?Uint16Array:void 0,lr=function(){throw new Error("not implemented")},vr={uint16:fr()?yr:lr,uint8:nr};(cr=new vr.uint16(1))[0]=4660;var pr=52===new vr.uint8(cr.buffer)[0],br=M,Ar=!0===pr?1:0,_r=new L(1),wr=new br(_r.buffer);var mr=function(r){return _r[0]=r,wr[Ar]},dr=M,Ur=!0===pr?1:0,sr=new L(1),hr=new dr(sr.buffer);var jr=function(r,t){return sr[0]=r,hr[Ur]=t>>>0,sr[0]},Nr=jr,gr=Number.NEGATIVE_INFINITY;var Sr=mr,Er=Nr,Fr=A,Or=gr,Tr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Pr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Ir=.6931471803691238,xr=1.9082149292705877e-10;var Gr=function(r){var t,n,e,o,a,i,u,f,c,y,l;return 0===r?Or:Fr(r)||r<0?NaN:(o=0,(n=Sr(r))<1048576&&(o-=54,n=Sr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(u=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=Er(r,n|1072693248^u))-1,(1048575&2+n)<3?0===i?0===o?0:o*Ir+o*xr:(a=i*i*(.5-.3333333333333333*i),0===o?i-a:o*Ir-(a-o*xr-i)):(u=n-398458|0,f=440401-n|0,e=(y=(l=(c=i/(2+i))*c)*l)*Tr(y),a=l*Pr(y)+e,(u|=f)>0?(t=.5*i*i,0===o?i-(t-c*(t+a)):o*Ir-(t-(c*(t+a)+o*xr)-i)):0===o?i-c*(i-a):o*Ir-(c*(i-a)-o*xr-i))))},Vr=b,kr=A,Cr=Gr,Mr=gr;var Yr=function(r){return function(){return r}},qr=b,zr=A,Br=Gr,Dr=gr;var Hr=function(r,t){var n;return kr(r)||kr(t)||t<0||t>1?NaN:Vr(r)?(n=1-t,Cr(t)+r*Cr(n)):Mr},Jr=function(r){return zr(r)||r<0||r>1?Yr(NaN):function(t){var n;if(zr(t))return NaN;if(qr(t))return n=1-r,Br(r)+t*Br(n);return Dr}};v(Hr,"factory",Jr);var Kr=Hr;export{Kr as default,Jr as factory};
//# sourceMappingURL=mod.js.map
