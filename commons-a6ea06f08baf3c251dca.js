(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{5761:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}r.d(t,{Z:function(){return n}})},6203:function(e,t,r){"use strict";r.d(t,{iv:function(){return we}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,i=String.fromCharCode;function o(e){return e.trim()}function c(e,t,r){return e.replace(t,r)}function s(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function l(e,t,r){return e.slice(t,r)}function f(e){return e.length}function d(e){return e.length}function p(e,t){return t.push(e),e}var h=1,m=1,y=0,v=0,g=0,b="";function w(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:h,column:m,length:o,return:""}}function T(e,t,r){return w(e,t.root,t.parent,r,t.props,t.children,0)}function A(){return g=v>0?u(b,--v):0,m--,10===g&&(m=1,h--),g}function C(){return g=v<y?u(b,v++):0,m++,10===g&&(m=1,h++),g}function k(){return u(b,v)}function S(){return v}function E(e,t){return l(b,e,t)}function x(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(e){return h=m=1,y=f(b=e),v=0,[]}function j(e){return b="",e}function P(e){return o(E(v-1,L(91===e?e+2:40===e?e+1:e)))}function I(e){for(;(g=k())&&g<33;)C();return x(e)>2||x(g)>3?"":" "}function $(e,t){for(;--t&&C()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return E(e,S()+(t<6&&32==k()&&32==C()))}function L(e){for(;C();)switch(g){case e:return v;case 34:case 39:return L(34===e||39===e?e:g);case 40:41===e&&L(e);break;case 92:C()}return v}function N(e,t){for(;C()&&e+g!==57&&(e+g!==84||47!==k()););return"/*"+E(t,v-1)+"*"+i(47===e?e:C())}function M(e){for(;!x(k());)C();return E(e,v)}var _="-ms-",R="-moz-",z="-webkit-",B="comm",D="rule",H="decl";function q(e,t){for(var r="",n=d(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function F(e,t,r,n){switch(e.type){case"@import":case H:return e.return=e.return||e.value;case B:return"";case D:e.value=e.props.join(",")}return f(r=q(e.children,n))?e.return=e.value+"{"+r+"}":""}function G(e,t){switch(function(e,t){return(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3)}(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+R+e+_+e+e;case 6828:case 4268:return z+e+_+e+e;case 6165:return z+e+_+"flex-"+e+e;case 5187:return z+e+c(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return z+e+_+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return z+e+_+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return z+e+_+c(e,"shrink","negative")+e;case 5292:return z+e+_+c(e,"basis","preferred-size")+e;case 6060:return z+"box-"+c(e,"-grow","")+z+e+_+c(e,"grow","positive")+e;case 4554:return z+c(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(f(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+R+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~s(e,"stretch")?G(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,f(e)-3-(~s(e,"!important")&&10))){case 107:return c(e,":",":"+z)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+z+(45===u(e,14)?"inline-":"")+"box$3$1"+z+"$2$3$1"+_+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return z+e+_+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+_+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+_+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return z+e+_+e+e}return e}function Y(e){return j(U("",null,null,null,[""],e=O(e),0,[0],e))}function U(e,t,r,n,a,o,s,u,l){for(var d=0,h=0,m=s,y=0,v=0,g=0,b=1,w=1,T=1,E=0,x="",O=a,j=o,L=n,_=x;w;)switch(g=E,E=C()){case 34:case 39:case 91:case 40:_+=P(E);break;case 9:case 10:case 13:case 32:_+=I(g);break;case 92:_+=$(S()-1,7);continue;case 47:switch(k()){case 42:case 47:p(W(N(C(),S()),t,r),l);break;default:_+="/"}break;case 123*b:u[d++]=f(_)*T;case 125*b:case 59:case 0:switch(E){case 0:case 125:w=0;case 59+h:v>0&&f(_)-m&&p(v>32?K(_+";",n,r,m-1):K(c(_," ","")+";",n,r,m-2),l);break;case 59:_+=";";default:if(p(L=Z(_,t,r,d,h,a,u,x,O=[],j=[],m),o),123===E)if(0===h)U(_,t,L,L,O,o,m,u,j);else switch(y){case 100:case 109:case 115:U(e,L,L,n&&p(Z(e,L,L,0,0,a,u,x,a,O=[],m),j),a,j,m,u,n?O:j);break;default:U(_,L,L,L,[""],j,m,u,j)}}d=h=v=0,b=T=1,x=_="",m=s;break;case 58:m=1+f(_),v=g;default:if(b<1)if(123==E)--b;else if(125==E&&0==b++&&125==A())continue;switch(_+=i(E),E*b){case 38:T=h>0?1:(_+="\f",-1);break;case 44:u[d++]=(f(_)-1)*T,T=1;break;case 64:45===k()&&(_+=P(C())),y=k(),h=f(x=_+=M(S())),E++;break;case 45:45===g&&2==f(_)&&(b=0)}}return o}function Z(e,t,r,n,i,s,u,f,p,h,m){for(var y=i-1,v=0===i?s:[""],g=d(v),b=0,T=0,A=0;b<n;++b)for(var C=0,k=l(e,y+1,y=a(T=u[b])),S=e;C<g;++C)(S=o(T>0?v[C]+" "+k:c(k,/&\f/g,v[C])))&&(p[A++]=S);return w(e,t,r,0===i?D:f,p,h,m)}function W(e,t,r){return w(e,t,r,B,i(g),l(e,2,-2),0)}function K(e,t,r,n){return w(e,t,r,H,l(e,0,n),l(e,n+1,-1),n)}var V=function(e,t){return j(function(e,t){var r=-1,n=44;do{switch(x(n)){case 0:38===n&&12===k()&&(t[r]=1),e[r]+=M(v-1);break;case 2:e[r]+=P(n);break;case 4:if(44===n){e[++r]=58===k()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(n)}}while(n=C());return e}(O(e),t))},Q=new WeakMap,J=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(r))&&!n){Q.set(e,!0);for(var a=[],i=V(t,a),o=r.props,c=0,s=0;c<i.length;c++)for(var u=0;u<o.length;u++,s++)e.props[s]=a[c]?i[c].replace(/&\f/g,o[u]):o[u]+" "+i[c]}}},X=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ee=[function(e,t,r,n){if(!e.return)switch(e.type){case H:e.return=G(e.value,e.length);break;case"@keyframes":return q([T(c(e.value,"@","@"+z),e,"")],n);case D:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return q([T(c(t,/:(read-\w+)/,":-moz-$1"),e,"")],n);case"::placeholder":return q([T(c(t,/:(plac\w+)/,":-webkit-input-$1"),e,""),T(c(t,/:(plac\w+)/,":-moz-$1"),e,""),T(c(t,/:(plac\w+)/,_+"input-$1"),e,"")],n)}return""}))}}],te=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){document.head.appendChild(e),e.setAttribute("data-s","")}))}var a=e.stylisPlugins||ee;var i,o,c={},s=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"),(function(e){var r=e.getAttribute("data-emotion").split(" ");if(r[0]===t){for(var n=1;n<r.length;n++)c[r[n]]=!0;s.push(e)}}));var u,l,f,p,h=[F,(p=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&p(e)})],m=(l=[J,X].concat(a,h),f=d(l),function(e,t,r,n){for(var a="",i=0;i<f;i++)a+=l[i](e,t,r,n)||"";return a});o=function(e,t,r,n){u=r,q(Y(e?e+"{"+t.styles+"}":t.styles),m),n&&(y.inserted[t.name]=!0)};var y={key:t,sheet:new n({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:c,registered:{},insert:o};return y.sheet.hydrate(s),y};var re=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},ne={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ae=/[A-Z]|^ms/g,ie=/_EMO_([^_]+?)_([^]*?)_EMO_/g,oe=function(e){return 45===e.charCodeAt(1)},ce=function(e){return null!=e&&"boolean"!=typeof e},se=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return oe(e)?e:e.replace(ae,"-$&").toLowerCase()})),ue=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ie,(function(e,t,r){return fe={name:t,styles:r,next:fe},t}))}return 1===ne[e]||oe(e)||"number"!=typeof t||0===t?t:t+"px"};function le(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return fe={name:r.name,styles:r.styles,next:fe},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)fe={name:n.name,styles:n.styles,next:fe},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=le(e,t,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":ce(o)&&(n+=se(i)+":"+ue(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var c=le(e,t,o);switch(i){case"animation":case"animationName":n+=se(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var s=0;s<o.length;s++)ce(o[s])&&(n+=se(i)+":"+ue(i,o[s])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=fe,i=r(e);return fe=a,le(e,t,i)}break;case"string":}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var fe,de=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var pe=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";fe=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=le(r,t,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=le(r,t,e[o]),n&&(a+=i[o]);de.lastIndex=0;for(var c,s="";null!==(c=de.exec(a));)s+="-"+c[1];return{name:re(a)+s,styles:a,next:fe}};function he(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var me=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}};function ye(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function ve(e,t,r){var n=[],a=he(e,n,r);return n.length<2?r:a+t(n)}var ge=function e(t){for(var r="",n=0;n<t.length;n++){var a=t[n];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var o in i="",a)a[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=a}i&&(r&&(r+=" "),r+=i)}}return r},be=function(e){var t=te(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var r=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=pe(r,t.registered,void 0);return me(t,a,!1),t.key+"-"+a.name};return{css:r,cx:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return ve(t.registered,r,ge(n))},injectGlobal:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=pe(r,t.registered);ye(t,a)},keyframes:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=pe(r,t.registered),i="animation-"+a.name;return ye(t,{name:a.name,styles:"@keyframes "+i+"{"+a.styles+"}"}),i},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:he.bind(null,t.registered),merge:ve.bind(null,t.registered,r)}}({key:"css"}),we=(be.flush,be.hydrate,be.cx,be.merge,be.getRegisteredStyles,be.injectGlobal,be.keyframes,be.css);be.sheet,be.cache},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!i(e[s],o[s]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!o.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!i(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!i(e[u[s]],o[u[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",c),f}}},2755:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n,a,i,o,c,s=r(5761),u=r(7294),l=r(5444),f=r(6203),d=function(e){var t=e.siteTitle,r=e.path;return u.createElement("header",{className:h.root},u.createElement("div",null,u.createElement("h1",{className:h.title},t),u.createElement("div",{className:h.links},u.createElement(p,{path:"/",currentPath:r},"Home"),u.createElement(p,{path:"/skills/",currentPath:r},"Skills"),u.createElement(p,{path:"/experience/",currentPath:r},"Experience"))))},p=function(e){var t=e.children,r=e.path,n=e.currentPath,a=e.className;return r===n?u.createElement("span",{className:a},t):u.createElement(l.Link,{to:r,className:a},t)},h={root:(0,f.iv)(n||(n=(0,s.Z)(["\n    background-image: linear-gradient(\n      var(--lighting-angle), \n      var(--color-secondary) 60%, \n      var(--color-primary) 150%\n    );\n    \n    border-bottom: 1px solid var(--color-primary);\n    margin-bottom: 1rem;\n    & > div {\n      margin: 0 auto;\n      max-width: 960px;\n      padding: .5rem 1rem;\n    }\n  "]))),title:(0,f.iv)(a||(a=(0,s.Z)(["\n    margin: 0;\n    color: var(--color-primary);\n    text-decoration: none;\n    font-size: 1.8rem;\n    user-select: none;\n  "]))),links:(0,f.iv)(i||(i=(0,s.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 1em;\n    span {\n      color: var(--color-primary);\n      text-decoration: underline;\n      user-select: none;\n    }\n    a {\n      color: var(--color-primary);\n      text-decoration: none;\n      filter: brightness(80%);\n    }\n    a:hover,\n    a:active,\n    a:focus {\n      filter: unset;\n    }\n  "])))},m=function(e){var t,r=e.children,n=e.path,a=(0,l.useStaticQuery)("3649515864");return u.createElement(u.Fragment,null,u.createElement(d,{siteTitle:(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",path:n}),u.createElement("div",{className:y.container},u.createElement("main",null,r),u.createElement("footer",{className:y.footer},"Built with ",u.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")," - a popular Static Site Generator utilising ",u.createElement("a",{href:"https://reactjs.org/"},"React"),".")))},y={container:(0,f.iv)(o||(o=(0,s.Z)(["\n    margin: 0 auto;\n    max-width: 960px;\n    padding: 0 1.0875rem 1.45rem;\n  "]))),footer:(0,f.iv)(c||(c=(0,s.Z)(["\n    margin-top: 1rem;\n    border-top: 1px solid white;\n    padding-top: 0.5rem;\n    text-align: center;\n  "])))}},9470:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,a,i,o,c=r(7294),s=r(5697),u=r.n(s),l=r(4839),f=r.n(l),d=r(2993),p=r.n(d),h=r(6494),m=r.n(h),y="bodyAttributes",v="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",A="href",C="http-equiv",k="innerHTML",S="itemprop",E="name",x="property",O="rel",j="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},$="defaultTitle",L="defer",N="encodeSpecialCharacters",M="onChangeClientState",_="titleTemplate",R=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),z=[b.NOSCRIPT,b.SCRIPT,b.STYLE],B="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=J(e,b.TITLE),r=J(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,$);return t||n||void 0},W=function(e){return J(e,M)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||r===O&&"canonical"===e[r].toLowerCase()||s===O&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==k&&c!==T&&c!==S||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=m()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;se(b.BODY,n),se(b.HTML,a),ce(f,d);var p={baseTag:ue(b.BASE,r),linkTags:ue(b.LINK,i),metaTags:ue(b.META,o),noscriptTags:ue(b.NOSCRIPT,c),scriptTags:ue(b.SCRIPT,u),styleTags:ue(b.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),s(e,h,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(b.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(B),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(B):r.getAttribute(B)!==o.join(",")&&r.setAttribute(B,o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(B,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[B]=!0,a=fe(r,n),[c.createElement(b.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[B]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===k||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(b.BASE,t,n),bodyAttributes:de(y,r,n),htmlAttributes:de(v,a,n),link:de(b.LINK,i,n),meta:de(b.META,o,n),noscript:de(b.NOSCRIPT,c,n),script:de(b.SCRIPT,s,n),style:de(b.STYLE,u,n),title:de(b.TITLE,{title:f,titleAttributes:d},n)}},he=f()((function(e){return{baseTag:V([A,P],e),bodyAttributes:K(y,e),defer:J(e,L),encode:J(e,N),htmlAttributes:K(v,e),linkTags:Q(b.LINK,[O,A],e),metaTags:Q(b.META,[E,w,C,x,S],e),noscriptTags:Q(b.NOSCRIPT,[k],e),onChangeClientState:W(e),scriptTags:Q(b.SCRIPT,[j,k],e),styleTags:Q(b.STYLE,[T],e),title:Z(e),titleAttributes:K(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),me=(a=he,o=i=function(e){function t(){return H(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case b.TITLE:return F({},a,((t={})[n.type]=o,t.titleAttributes=F({},i),t));case b.BODY:return F({},a,{bodyAttributes:F({},i)});case b.HTML:return F({},a,{htmlAttributes:F({},i)})}return F({},a,((r={})[n.type]=F({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(G(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=G(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind;var ye=r(5444);var ve=function(e){var t,r,n=e.title,a=e.description,i=void 0===a?"":a,o=e.lang,s=void 0===o?"en":o,u=e.meta,l=void 0===u?[]:u,f=(0,ye.useStaticQuery)("63159454").site,d=i||f.siteMetadata.description,p=null===(t=f.siteMetadata)||void 0===t?void 0:t.title,h=[{name:"description",content:d},{property:"og:title",content:n},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=f.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:n},{name:"twitter:description",content:d}];return c.createElement(me,{htmlAttributes:{lang:s},title:n,titleTemplate:p?"%s | "+p:void 0,meta:h.concat(l)})}}}]);
//# sourceMappingURL=commons-a6ea06f08baf3c251dca.js.map