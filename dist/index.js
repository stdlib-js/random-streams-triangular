"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=d(function(je,z){z.exports={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308}});var _=d(function(Me,w){
var B=require('@stdlib/assert-is-plain-object/dist'),a=require('@stdlib/assert-has-own-property/dist'),D=require('@stdlib/assert-is-boolean/dist').isPrimitive,U=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,q=require('@stdlib/assert-is-string/dist').isPrimitive,H=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,K=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,g=require('@stdlib/error-tools-fmtprodmsg/dist');function Q(r,e){return B(e)?a(e,"sep")&&(r.sep=e.sep,!q(r.sep))?new TypeError(g('0rx2W',"sep",r.sep)):a(e,"objectMode")&&(r.objectMode=e.objectMode,!D(r.objectMode))?new TypeError(g('0rx2o',"objectMode",r.objectMode)):a(e,"encoding")&&(r.encoding=e.encoding,!q(r.encoding)&&r.encoding!==null)?new TypeError(g('0rx7n',"encoding",r.encoding)):a(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!U(r.highWaterMark))?new TypeError(g('0rx4k',"highWaterMark",r.highWaterMark)):a(e,"iter")&&(r.iter=e.iter,!K(r.iter))?new TypeError(g('0rx2t',"iter",r.iter)):a(e,"siter")&&(r.siter=e.siter,!H(r.siter))?new TypeError(g('0rx3P',"siter",r.siter)):(a(e,"prng")&&(r.prng=e.prng),a(e,"seed")&&(r.seed=e.seed),a(e,"state")&&(r.state=e.state),a(e,"copy")&&(r.copy=e.copy),null):new TypeError(g('0rx2V',e));}w.exports=Q
});var M=d(function(Ee,j){
var X=require("debug"),Y=X("random:streams:triangular");j.exports=Y
});var m=d(function(Oe,N){
var S=require("readable-stream").Readable,c=require('@stdlib/assert-is-number/dist').isPrimitive,b=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/assert-is-error/dist'),$=require('@stdlib/object-assign/dist'),ee=require('@stdlib/utils-inherit/dist'),E=require('@stdlib/utils-define-nonenumerable-property/dist'),o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/utils-define-read-only-accessor/dist'),re=require('@stdlib/utils-define-read-write-accessor/dist'),te=require('@stdlib/random-base-triangular/dist').factory,O=require('@stdlib/buffer-from-string/dist'),ie=require('@stdlib/utils-next-tick/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),ne=p(),ae=_(),h=M();function se(){return this._prng.seed}function ue(){return this._prng.seedLength}function oe(){return this._prng.stateLength}function ge(){return this._prng.byteLength}function de(){return this._prng.state}function he(r){this._prng.state=r}function fe(){var r,e;if(!this._destroyed)for(r=!0;r;){if(this._i+=1,this._i>this._iter)return h("Finished generating pseudorandom numbers."),this.push(null);e=this._prng(),h("Generated a new pseudorandom number. Value: %d. Iter: %d.",e,this._i),this._objectMode===!1&&(e=e.toString(),this._i===1?e=O(e):e=O(this._sep+e)),r=this.push(e),this._i%this._siter===0&&this.emit("state",this.state)}}function ve(r){var e;if(this._destroyed)return h("Attempted to destroy an already destroyed stream."),this;return e=this,this._destroyed=!0,ie(i),this;function i(){r&&(h("Stream was destroyed due to an error. Error: %s.",Z(r)?r.message:JSON.stringify(r)),e.emit("error",r)),h("Closing the stream..."),e.emit("close")}}function n(r,e,i,s){var t,u;if(!(this instanceof n))return arguments.length>3?new n(r,e,i,s):new n(r,e,i);if(!c(r)||b(r))throw new TypeError(f('0rx6v',r));if(!c(e)||b(e))throw new TypeError(f('0rx6w',e));if(!c(i)||b(i))throw new TypeError(f('0rx7C',i));if(!(r<=i&&i<=e))throw new RangeError(f('0rx9C',"a <= c <= b",r,e,i));if(t=$({},ne),arguments.length>3&&(u=ae(t,s),u))throw u;return h("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),S.call(this,t),E(this,"_destroyed",!1),o(this,"_objectMode",t.objectMode),o(this,"_sep",t.sep),o(this,"_iter",t.iter),o(this,"_siter",t.siter),E(this,"_i",0),o(this,"_prng",te(r,e,i,t)),o(this,"PRNG",this._prng.PRNG),this}ee(n,S);v(n.prototype,"seed",se);v(n.prototype,"seedLength",ue);re(n.prototype,"state",de,he);v(n.prototype,"stateLength",oe);v(n.prototype,"byteLength",ge);o(n.prototype,"_read",fe);o(n.prototype,"destroy",ve);N.exports=n
});var P=d(function(Se,T){
var me=require('@stdlib/assert-is-plain-object/dist'),le=require('@stdlib/object-assign/dist'),ce=require('@stdlib/error-tools-fmtprodmsg/dist'),be=m();function ye(r,e,i,s){var t;if(arguments.length>3){if(t=s,!me(t))throw new TypeError(ce('0rx2V',t));t=le({},s)}else t={};return t.objectMode=!0,new be(r,e,i,t)}T.exports=ye
});var W=d(function(Ne,x){
var R=require('@stdlib/assert-is-plain-object/dist'),L=require('@stdlib/object-assign/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),k=m();function pe(r,e,i,s){var t,u,l;if(t=arguments.length,t===1){if(!R(r))throw new TypeError(V('0rx2V',r));u=L({},r)}else if(t>3){if(!R(s))throw new TypeError(V('0rx2V',s));u=L({},s)}else u={};return t<3?l=F:l=G,l;function F(I,C,J){return new k(I,C,J,u)}function G(){return new k(r,e,i,u)}}x.exports=pe
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=m(),qe=P(),we=W();A(y,"objectMode",qe);A(y,"factory",we);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
