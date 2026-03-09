"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=n(function(h,v){
var g=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-ln/dist'),l=require('@stdlib/constants-float64-ninf/dist');function y(e,r){var i;return a(e)||a(r)?NaN:r<0||r>1?NaN:g(e)?(i=1-r,u(r)+e*u(i)):l}v.exports=y
});var q=n(function(j,f){
var I=require('@stdlib/utils-constant-function/dist'),m=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ninf/dist');function d(e){if(o(e)||e<0||e>1)return I(NaN);return r;function r(i){var t;return o(i)?NaN:m(i)?(t=1-e,s(e)+i*s(t)):F}}f.exports=d
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=N(),R=q();O(c,"factory",R);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
