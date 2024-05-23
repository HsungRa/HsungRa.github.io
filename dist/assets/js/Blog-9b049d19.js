var R=Object.defineProperty;var x=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var v=(e,t,r)=>(x(e,typeof t!="symbol"?t+"":t,r),r);import{h as buffer,i as getDefaultExportFromCjs,_ as _global$1,j as defineComponent,r as resolveComponent,o as openBlock,c as createBlock,p as process,k as ref,l as watch,a as createElementBlock,F as Fragment,b as renderList,d as createVNode,w as withCtx,e as createBaseVNode,f as createTextVNode,t as toDisplayString,m as createCommentVNode,n as onMounted,u as useRouter,q as pushScopeId,s as popScopeId}from"./index-7462c30e.js";import{_ as _export_sfc}from"./_plugin-vue_export-helper-c27b6911.js";var empty=null,empty_1=empty,toString$1=Object.prototype.toString,kindOf$1=function(t){if(t===void 0)return"undefined";if(t===null)return"null";var r=typeof t;if(r==="boolean")return"boolean";if(r==="string")return"string";if(r==="number")return"number";if(r==="symbol")return"symbol";if(r==="function")return isGeneratorFn(t)?"generatorfunction":"function";if(isArray$1(t))return"array";if(isBuffer$2(t))return"buffer";if(isArguments(t))return"arguments";if(isDate$1(t))return"date";if(isError(t))return"error";if(isRegexp(t))return"regexp";switch(ctorName(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(isGeneratorObj(t))return"generator";switch(r=toString$1.call(t),r){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return r.slice(8,-1).toLowerCase().replace(/\s/g,"")};function ctorName(e){return typeof e.constructor=="function"?e.constructor.name:null}function isArray$1(e){return Array.isArray?Array.isArray(e):e instanceof Array}function isError(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}function isDate$1(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}function isRegexp(e){return e instanceof RegExp?!0:typeof e.flags=="string"&&typeof e.ignoreCase=="boolean"&&typeof e.multiline=="boolean"&&typeof e.global=="boolean"}function isGeneratorFn(e,t){return ctorName(e)==="GeneratorFunction"}function isGeneratorObj(e){return typeof e.throw=="function"&&typeof e.return=="function"&&typeof e.next=="function"}function isArguments(e){try{if(typeof e.length=="number"&&typeof e.callee=="function")return!0}catch(t){if(t.message.indexOf("callee")!==-1)return!0}return!1}function isBuffer$2(e){return e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var isExtendable=function(t){return typeof t<"u"&&t!==null&&(typeof t=="object"||typeof t=="function")},isObject$3=isExtendable,extendShallow=function(t){isObject$3(t)||(t={});for(var r=arguments.length,n=1;n<r;n++){var o=arguments[n];isObject$3(o)&&assign(t,o)}return t};function assign(e,t){for(var r in t)hasOwn(t,r)&&(e[r]=t[r])}function hasOwn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var typeOf$2=kindOf$1,extend$2=extendShallow,sectionMatter=function(e,t){typeof t=="function"&&(t={parse:t});var r=toObject(e),n={section_delimiter:"---",parse:identity},o=extend$2({},n,t),s=o.section_delimiter,a=r.content.split(/\r?\n/),c=null,l=createSection(),u=[],f=[];function d(E){r.content=E,c=[],u=[]}function m(E){f.length&&(l.key=getKey(f[0],s),l.content=E,o.parse(l,c),c.push(l),l=createSection(),u=[],f=[])}for(var g=0;g<a.length;g++){var h=a[g],p=f.length,_=h.trim();if(isDelimiter(_,s)){if(_.length===3&&g!==0){if(p===0||p===2){u.push(h);continue}f.push(_),l.data=u.join(`
`),u=[];continue}c===null&&d(u.join(`
`)),p===2&&m(u.join(`
`)),f.push(_);continue}u.push(h)}return c===null?d(u.join(`
`)):m(u.join(`
`)),r.sections=c,r};function isDelimiter(e,t){return!(e.slice(0,t.length)!==t||e.charAt(t.length+1)===t.slice(-1))}function toObject(e){if(typeOf$2(e)!=="object"&&(e={content:e}),typeof e.content!="string"&&!isBuffer$1(e.content))throw new TypeError("expected a buffer or string");return e.content=e.content.toString(),e.sections=[],e}function getKey(e,t){return e?e.slice(t.length).trim():""}function createSection(){return{key:"",data:"",content:""}}function identity(e){return e}function isBuffer$1(e){return e&&e.constructor&&typeof e.constructor.isBuffer=="function"?e.constructor.isBuffer(e):!1}var engines$2={exports:{}},jsYaml$1={},loader$1={},common$6={};function isNothing(e){return typeof e>"u"||e===null}function isObject$2(e){return typeof e=="object"&&e!==null}function toArray$1(e){return Array.isArray(e)?e:isNothing(e)?[]:[e]}function extend$1(e,t){var r,n,o,s;if(t)for(s=Object.keys(t),r=0,n=s.length;r<n;r+=1)o=s[r],e[o]=t[o];return e}function repeat(e,t){var r="",n;for(n=0;n<t;n+=1)r+=e;return r}function isNegativeZero(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}common$6.isNothing=isNothing;common$6.isObject=isObject$2;common$6.toArray=toArray$1;common$6.repeat=repeat;common$6.isNegativeZero=isNegativeZero;common$6.extend=extend$1;function YAMLException$4(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}YAMLException$4.prototype=Object.create(Error.prototype);YAMLException$4.prototype.constructor=YAMLException$4;YAMLException$4.prototype.toString=function(t){var r=this.name+": ";return r+=this.reason||"(unknown reason)",!t&&this.mark&&(r+=" "+this.mark.toString()),r};var exception=YAMLException$4,common$5=common$6;function Mark$1(e,t,r,n,o){this.name=e,this.buffer=t,this.position=r,this.line=n,this.column=o}Mark$1.prototype.getSnippet=function(t,r){var n,o,s,a,c;if(!this.buffer)return null;for(t=t||4,r=r||75,n="",o=this.position;o>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(o-1))===-1;)if(o-=1,this.position-o>r/2-1){n=" ... ",o+=5;break}for(s="",a=this.position;a<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(a))===-1;)if(a+=1,a-this.position>r/2-1){s=" ... ",a-=5;break}return c=this.buffer.slice(o,a),common$5.repeat(" ",t)+n+c+s+`
`+common$5.repeat(" ",t+this.position-o+n.length)+"^"};Mark$1.prototype.toString=function(t){var r,n="";return this.name&&(n+='in "'+this.name+'" '),n+="at line "+(this.line+1)+", column "+(this.column+1),t||(r=this.getSnippet(),r&&(n+=`:
`+r)),n};var mark=Mark$1,YAMLException$3=exception,TYPE_CONSTRUCTOR_OPTIONS=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],YAML_NODE_KINDS=["scalar","sequence","mapping"];function compileStyleAliases(e){var t={};return e!==null&&Object.keys(e).forEach(function(r){e[r].forEach(function(n){t[String(n)]=r})}),t}function Type$h(e,t){if(t=t||{},Object.keys(t).forEach(function(r){if(TYPE_CONSTRUCTOR_OPTIONS.indexOf(r)===-1)throw new YAMLException$3('Unknown option "'+r+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(r){return r},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.defaultStyle=t.defaultStyle||null,this.styleAliases=compileStyleAliases(t.styleAliases||null),YAML_NODE_KINDS.indexOf(this.kind)===-1)throw new YAMLException$3('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var type=Type$h,common$4=common$6,YAMLException$2=exception,Type$g=type;function compileList(e,t,r){var n=[];return e.include.forEach(function(o){r=compileList(o,t,r)}),e[t].forEach(function(o){r.forEach(function(s,a){s.tag===o.tag&&s.kind===o.kind&&n.push(a)}),r.push(o)}),r.filter(function(o,s){return n.indexOf(s)===-1})}function compileMap(){var e={scalar:{},sequence:{},mapping:{},fallback:{}},t,r;function n(o){e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,r=arguments.length;t<r;t+=1)arguments[t].forEach(n);return e}function Schema$5(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(t){if(t.loadKind&&t.loadKind!=="scalar")throw new YAMLException$2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=compileList(this,"implicit",[]),this.compiledExplicit=compileList(this,"explicit",[]),this.compiledTypeMap=compileMap(this.compiledImplicit,this.compiledExplicit)}Schema$5.DEFAULT=null;Schema$5.create=function(){var t,r;switch(arguments.length){case 1:t=Schema$5.DEFAULT,r=arguments[0];break;case 2:t=arguments[0],r=arguments[1];break;default:throw new YAMLException$2("Wrong number of arguments for Schema.create function")}if(t=common$4.toArray(t),r=common$4.toArray(r),!t.every(function(n){return n instanceof Schema$5}))throw new YAMLException$2("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!r.every(function(n){return n instanceof Type$g}))throw new YAMLException$2("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new Schema$5({include:t,explicit:r})};var schema=Schema$5,Type$f=type,str=new Type$f("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Type$e=type,seq=new Type$e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Type$d=type,map=new Type$d("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Schema$4=schema,failsafe=new Schema$4({explicit:[str,seq,map]}),Type$c=type;function resolveYamlNull(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function constructYamlNull(){return null}function isNull(e){return e===null}var _null=new Type$c("tag:yaml.org,2002:null",{kind:"scalar",resolve:resolveYamlNull,construct:constructYamlNull,predicate:isNull,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),Type$b=type;function resolveYamlBoolean(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function constructYamlBoolean(e){return e==="true"||e==="True"||e==="TRUE"}function isBoolean$1(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var bool=new Type$b("tag:yaml.org,2002:bool",{kind:"scalar",resolve:resolveYamlBoolean,construct:constructYamlBoolean,predicate:isBoolean$1,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),common$3=common$6,Type$a=type;function isHexCode(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function isOctCode(e){return 48<=e&&e<=55}function isDecCode(e){return 48<=e&&e<=57}function resolveYamlInteger(e){if(e===null)return!1;var t=e.length,r=0,n=!1,o;if(!t)return!1;if(o=e[r],(o==="-"||o==="+")&&(o=e[++r]),o==="0"){if(r+1===t)return!0;if(o=e[++r],o==="b"){for(r++;r<t;r++)if(o=e[r],o!=="_"){if(o!=="0"&&o!=="1")return!1;n=!0}return n&&o!=="_"}if(o==="x"){for(r++;r<t;r++)if(o=e[r],o!=="_"){if(!isHexCode(e.charCodeAt(r)))return!1;n=!0}return n&&o!=="_"}for(;r<t;r++)if(o=e[r],o!=="_"){if(!isOctCode(e.charCodeAt(r)))return!1;n=!0}return n&&o!=="_"}if(o==="_")return!1;for(;r<t;r++)if(o=e[r],o!=="_"){if(o===":")break;if(!isDecCode(e.charCodeAt(r)))return!1;n=!0}return!n||o==="_"?!1:o!==":"?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(r))}function constructYamlInteger(e){var t=e,r=1,n,o,s=[];return t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),n=t[0],(n==="-"||n==="+")&&(n==="-"&&(r=-1),t=t.slice(1),n=t[0]),t==="0"?0:n==="0"?t[1]==="b"?r*parseInt(t.slice(2),2):t[1]==="x"?r*parseInt(t,16):r*parseInt(t,8):t.indexOf(":")!==-1?(t.split(":").forEach(function(a){s.unshift(parseInt(a,10))}),t=0,o=1,s.forEach(function(a){t+=a*o,o*=60}),r*t):r*parseInt(t,10)}function isInteger(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!common$3.isNegativeZero(e)}var int=new Type$a("tag:yaml.org,2002:int",{kind:"scalar",resolve:resolveYamlInteger,construct:constructYamlInteger,predicate:isInteger,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),common$2=common$6,Type$9=type,YAML_FLOAT_PATTERN=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function resolveYamlFloat(e){return!(e===null||!YAML_FLOAT_PATTERN.test(e)||e[e.length-1]==="_")}function constructYamlFloat(e){var t,r,n,o;return t=e.replace(/_/g,"").toLowerCase(),r=t[0]==="-"?-1:1,o=[],"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:t.indexOf(":")>=0?(t.split(":").forEach(function(s){o.unshift(parseFloat(s,10))}),t=0,n=1,o.forEach(function(s){t+=s*n,n*=60}),r*t):r*parseFloat(t,10)}var SCIENTIFIC_WITHOUT_DOT=/^[-+]?[0-9]+e/;function representYamlFloat(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(common$2.isNegativeZero(e))return"-0.0";return r=e.toString(10),SCIENTIFIC_WITHOUT_DOT.test(r)?r.replace("e",".e"):r}function isFloat(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||common$2.isNegativeZero(e))}var float=new Type$9("tag:yaml.org,2002:float",{kind:"scalar",resolve:resolveYamlFloat,construct:constructYamlFloat,predicate:isFloat,represent:representYamlFloat,defaultStyle:"lowercase"}),Schema$3=schema,json=new Schema$3({include:[failsafe],implicit:[_null,bool,int,float]}),Schema$2=schema,core=new Schema$2({include:[json]}),Type$8=type,YAML_DATE_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),YAML_TIMESTAMP_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function resolveYamlTimestamp(e){return e===null?!1:YAML_DATE_REGEXP.exec(e)!==null||YAML_TIMESTAMP_REGEXP.exec(e)!==null}function constructYamlTimestamp(e){var t,r,n,o,s,a,c,l=0,u=null,f,d,m;if(t=YAML_DATE_REGEXP.exec(e),t===null&&(t=YAML_TIMESTAMP_REGEXP.exec(e)),t===null)throw new Error("Date resolve error");if(r=+t[1],n=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(r,n,o));if(s=+t[4],a=+t[5],c=+t[6],t[7]){for(l=t[7].slice(0,3);l.length<3;)l+="0";l=+l}return t[9]&&(f=+t[10],d=+(t[11]||0),u=(f*60+d)*6e4,t[9]==="-"&&(u=-u)),m=new Date(Date.UTC(r,n,o,s,a,c,l)),u&&m.setTime(m.getTime()-u),m}function representYamlTimestamp(e){return e.toISOString()}var timestamp=new Type$8("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:resolveYamlTimestamp,construct:constructYamlTimestamp,instanceOf:Date,represent:representYamlTimestamp}),Type$7=type;function resolveYamlMerge(e){return e==="<<"||e===null}var merge$1=new Type$7("tag:yaml.org,2002:merge",{kind:"scalar",resolve:resolveYamlMerge});function commonjsRequire(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var NodeBuffer;try{var _require$1=commonjsRequire;NodeBuffer=_require$1("buffer").Buffer}catch{}var Type$6=type,BASE64_MAP=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function resolveYamlBinary(e){if(e===null)return!1;var t,r,n=0,o=e.length,s=BASE64_MAP;for(r=0;r<o;r++)if(t=s.indexOf(e.charAt(r)),!(t>64)){if(t<0)return!1;n+=6}return n%8===0}function constructYamlBinary(e){var t,r,n=e.replace(/[\r\n=]/g,""),o=n.length,s=BASE64_MAP,a=0,c=[];for(t=0;t<o;t++)t%4===0&&t&&(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)),a=a<<6|s.indexOf(n.charAt(t));return r=o%4*6,r===0?(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)):r===18?(c.push(a>>10&255),c.push(a>>2&255)):r===12&&c.push(a>>4&255),NodeBuffer?NodeBuffer.from?NodeBuffer.from(c):new NodeBuffer(c):c}function representYamlBinary(e){var t="",r=0,n,o,s=e.length,a=BASE64_MAP;for(n=0;n<s;n++)n%3===0&&n&&(t+=a[r>>18&63],t+=a[r>>12&63],t+=a[r>>6&63],t+=a[r&63]),r=(r<<8)+e[n];return o=s%3,o===0?(t+=a[r>>18&63],t+=a[r>>12&63],t+=a[r>>6&63],t+=a[r&63]):o===2?(t+=a[r>>10&63],t+=a[r>>4&63],t+=a[r<<2&63],t+=a[64]):o===1&&(t+=a[r>>2&63],t+=a[r<<4&63],t+=a[64],t+=a[64]),t}function isBinary(e){return NodeBuffer&&NodeBuffer.isBuffer(e)}var binary=new Type$6("tag:yaml.org,2002:binary",{kind:"scalar",resolve:resolveYamlBinary,construct:constructYamlBinary,predicate:isBinary,represent:representYamlBinary}),Type$5=type,_hasOwnProperty$3=Object.prototype.hasOwnProperty,_toString$2=Object.prototype.toString;function resolveYamlOmap(e){if(e===null)return!0;var t=[],r,n,o,s,a,c=e;for(r=0,n=c.length;r<n;r+=1){if(o=c[r],a=!1,_toString$2.call(o)!=="[object Object]")return!1;for(s in o)if(_hasOwnProperty$3.call(o,s))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(s)===-1)t.push(s);else return!1}return!0}function constructYamlOmap(e){return e!==null?e:[]}var omap=new Type$5("tag:yaml.org,2002:omap",{kind:"sequence",resolve:resolveYamlOmap,construct:constructYamlOmap}),Type$4=type,_toString$1=Object.prototype.toString;function resolveYamlPairs(e){if(e===null)return!0;var t,r,n,o,s,a=e;for(s=new Array(a.length),t=0,r=a.length;t<r;t+=1){if(n=a[t],_toString$1.call(n)!=="[object Object]"||(o=Object.keys(n),o.length!==1))return!1;s[t]=[o[0],n[o[0]]]}return!0}function constructYamlPairs(e){if(e===null)return[];var t,r,n,o,s,a=e;for(s=new Array(a.length),t=0,r=a.length;t<r;t+=1)n=a[t],o=Object.keys(n),s[t]=[o[0],n[o[0]]];return s}var pairs=new Type$4("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:resolveYamlPairs,construct:constructYamlPairs}),Type$3=type,_hasOwnProperty$2=Object.prototype.hasOwnProperty;function resolveYamlSet(e){if(e===null)return!0;var t,r=e;for(t in r)if(_hasOwnProperty$2.call(r,t)&&r[t]!==null)return!1;return!0}function constructYamlSet(e){return e!==null?e:{}}var set=new Type$3("tag:yaml.org,2002:set",{kind:"mapping",resolve:resolveYamlSet,construct:constructYamlSet}),Schema$1=schema,default_safe=new Schema$1({include:[core],implicit:[timestamp,merge$1],explicit:[binary,omap,pairs,set]}),Type$2=type;function resolveJavascriptUndefined(){return!0}function constructJavascriptUndefined(){}function representJavascriptUndefined(){return""}function isUndefined$1(e){return typeof e>"u"}var _undefined=new Type$2("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:resolveJavascriptUndefined,construct:constructJavascriptUndefined,predicate:isUndefined$1,represent:representJavascriptUndefined}),Type$1=type;function resolveJavascriptRegExp(e){if(e===null||e.length===0)return!1;var t=e,r=/\/([gim]*)$/.exec(e),n="";return!(t[0]==="/"&&(r&&(n=r[1]),n.length>3||t[t.length-n.length-1]!=="/"))}function constructJavascriptRegExp(e){var t=e,r=/\/([gim]*)$/.exec(e),n="";return t[0]==="/"&&(r&&(n=r[1]),t=t.slice(1,t.length-n.length-1)),new RegExp(t,n)}function representJavascriptRegExp(e){var t="/"+e.source+"/";return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}function isRegExp$1(e){return Object.prototype.toString.call(e)==="[object RegExp]"}var regexp=new Type$1("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:resolveJavascriptRegExp,construct:constructJavascriptRegExp,predicate:isRegExp$1,represent:representJavascriptRegExp}),esprima;try{var _require=commonjsRequire;esprima=_require("esprima")}catch{typeof window<"u"&&(esprima=window.esprima)}var Type=type;function resolveJavascriptFunction(e){if(e===null)return!1;try{var t="("+e+")",r=esprima.parse(t,{range:!0});return!(r.type!=="Program"||r.body.length!==1||r.body[0].type!=="ExpressionStatement"||r.body[0].expression.type!=="ArrowFunctionExpression"&&r.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function constructJavascriptFunction(e){var t="("+e+")",r=esprima.parse(t,{range:!0}),n=[],o;if(r.type!=="Program"||r.body.length!==1||r.body[0].type!=="ExpressionStatement"||r.body[0].expression.type!=="ArrowFunctionExpression"&&r.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return r.body[0].expression.params.forEach(function(s){n.push(s.name)}),o=r.body[0].expression.body.range,r.body[0].expression.body.type==="BlockStatement"?new Function(n,t.slice(o[0]+1,o[1]-1)):new Function(n,"return "+t.slice(o[0],o[1]))}function representJavascriptFunction(e){return e.toString()}function isFunction$1(e){return Object.prototype.toString.call(e)==="[object Function]"}var _function=new Type("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:resolveJavascriptFunction,construct:constructJavascriptFunction,predicate:isFunction$1,represent:representJavascriptFunction}),Schema=schema,default_full=Schema.DEFAULT=new Schema({include:[default_safe],explicit:[_undefined,regexp,_function]}),common$1=common$6,YAMLException$1=exception,Mark=mark,DEFAULT_SAFE_SCHEMA$1=default_safe,DEFAULT_FULL_SCHEMA$1=default_full,_hasOwnProperty$1=Object.prototype.hasOwnProperty,CONTEXT_FLOW_IN=1,CONTEXT_FLOW_OUT=2,CONTEXT_BLOCK_IN=3,CONTEXT_BLOCK_OUT=4,CHOMPING_CLIP=1,CHOMPING_STRIP=2,CHOMPING_KEEP=3,PATTERN_NON_PRINTABLE=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,PATTERN_NON_ASCII_LINE_BREAKS=/[\x85\u2028\u2029]/,PATTERN_FLOW_INDICATORS=/[,\[\]\{\}]/,PATTERN_TAG_HANDLE=/^(?:!|!!|![a-z\-]+!)$/i,PATTERN_TAG_URI=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function _class(e){return Object.prototype.toString.call(e)}function is_EOL(e){return e===10||e===13}function is_WHITE_SPACE(e){return e===9||e===32}function is_WS_OR_EOL(e){return e===9||e===32||e===10||e===13}function is_FLOW_INDICATOR(e){return e===44||e===91||e===93||e===123||e===125}function fromHexCode(e){var t;return 48<=e&&e<=57?e-48:(t=e|32,97<=t&&t<=102?t-97+10:-1)}function escapedHexLen(e){return e===120?2:e===117?4:e===85?8:0}function fromDecimalCode(e){return 48<=e&&e<=57?e-48:-1}function simpleEscapeSequence(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function charFromCodepoint(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var simpleEscapeCheck=new Array(256),simpleEscapeMap=new Array(256);for(var i=0;i<256;i++)simpleEscapeCheck[i]=simpleEscapeSequence(i)?1:0,simpleEscapeMap[i]=simpleEscapeSequence(i);function State$1(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||DEFAULT_FULL_SCHEMA$1,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function generateError(e,t){return new YAMLException$1(t,new Mark(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function throwError(e,t){throw generateError(e,t)}function throwWarning(e,t){e.onWarning&&e.onWarning.call(null,generateError(e,t))}var directiveHandlers={YAML:function(t,r,n){var o,s,a;t.version!==null&&throwError(t,"duplication of %YAML directive"),n.length!==1&&throwError(t,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),o===null&&throwError(t,"ill-formed argument of the YAML directive"),s=parseInt(o[1],10),a=parseInt(o[2],10),s!==1&&throwError(t,"unacceptable YAML version of the document"),t.version=n[0],t.checkLineBreaks=a<2,a!==1&&a!==2&&throwWarning(t,"unsupported YAML version of the document")},TAG:function(t,r,n){var o,s;n.length!==2&&throwError(t,"TAG directive accepts exactly two arguments"),o=n[0],s=n[1],PATTERN_TAG_HANDLE.test(o)||throwError(t,"ill-formed tag handle (first argument) of the TAG directive"),_hasOwnProperty$1.call(t.tagMap,o)&&throwError(t,'there is a previously declared suffix for "'+o+'" tag handle'),PATTERN_TAG_URI.test(s)||throwError(t,"ill-formed tag prefix (second argument) of the TAG directive"),t.tagMap[o]=s}};function captureSegment(e,t,r,n){var o,s,a,c;if(t<r){if(c=e.input.slice(t,r),n)for(o=0,s=c.length;o<s;o+=1)a=c.charCodeAt(o),a===9||32<=a&&a<=1114111||throwError(e,"expected valid JSON character");else PATTERN_NON_PRINTABLE.test(c)&&throwError(e,"the stream contains non-printable characters");e.result+=c}}function mergeMappings(e,t,r,n){var o,s,a,c;for(common$1.isObject(r)||throwError(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(r),a=0,c=o.length;a<c;a+=1)s=o[a],_hasOwnProperty$1.call(t,s)||(t[s]=r[s],n[s]=!0)}function storeMappingPair(e,t,r,n,o,s,a,c){var l,u;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),l=0,u=o.length;l<u;l+=1)Array.isArray(o[l])&&throwError(e,"nested arrays are not supported inside keys"),typeof o=="object"&&_class(o[l])==="[object Object]"&&(o[l]="[object Object]");if(typeof o=="object"&&_class(o)==="[object Object]"&&(o="[object Object]"),o=String(o),t===null&&(t={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(s))for(l=0,u=s.length;l<u;l+=1)mergeMappings(e,t,s[l],r);else mergeMappings(e,t,s,r);else!e.json&&!_hasOwnProperty$1.call(r,o)&&_hasOwnProperty$1.call(t,o)&&(e.line=a||e.line,e.position=c||e.position,throwError(e,"duplicated mapping key")),t[o]=s,delete r[o];return t}function readLineBreak(e){var t;t=e.input.charCodeAt(e.position),t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):throwError(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function skipSeparationSpace(e,t,r){for(var n=0,o=e.input.charCodeAt(e.position);o!==0;){for(;is_WHITE_SPACE(o);)o=e.input.charCodeAt(++e.position);if(t&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(is_EOL(o))for(readLineBreak(e),o=e.input.charCodeAt(e.position),n++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return r!==-1&&n!==0&&e.lineIndent<r&&throwWarning(e,"deficient indentation"),n}function testDocumentSeparator(e){var t=e.position,r;return r=e.input.charCodeAt(t),!!((r===45||r===46)&&r===e.input.charCodeAt(t+1)&&r===e.input.charCodeAt(t+2)&&(t+=3,r=e.input.charCodeAt(t),r===0||is_WS_OR_EOL(r)))}function writeFoldedLines(e,t){t===1?e.result+=" ":t>1&&(e.result+=common$1.repeat(`
`,t-1))}function readPlainScalar(e,t,r){var n,o,s,a,c,l,u,f,d=e.kind,m=e.result,g;if(g=e.input.charCodeAt(e.position),is_WS_OR_EOL(g)||is_FLOW_INDICATOR(g)||g===35||g===38||g===42||g===33||g===124||g===62||g===39||g===34||g===37||g===64||g===96||(g===63||g===45)&&(o=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(o)||r&&is_FLOW_INDICATOR(o)))return!1;for(e.kind="scalar",e.result="",s=a=e.position,c=!1;g!==0;){if(g===58){if(o=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(o)||r&&is_FLOW_INDICATOR(o))break}else if(g===35){if(n=e.input.charCodeAt(e.position-1),is_WS_OR_EOL(n))break}else{if(e.position===e.lineStart&&testDocumentSeparator(e)||r&&is_FLOW_INDICATOR(g))break;if(is_EOL(g))if(l=e.line,u=e.lineStart,f=e.lineIndent,skipSeparationSpace(e,!1,-1),e.lineIndent>=t){c=!0,g=e.input.charCodeAt(e.position);continue}else{e.position=a,e.line=l,e.lineStart=u,e.lineIndent=f;break}}c&&(captureSegment(e,s,a,!1),writeFoldedLines(e,e.line-l),s=a=e.position,c=!1),is_WHITE_SPACE(g)||(a=e.position+1),g=e.input.charCodeAt(++e.position)}return captureSegment(e,s,a,!1),e.result?!0:(e.kind=d,e.result=m,!1)}function readSingleQuotedScalar(e,t){var r,n,o;if(r=e.input.charCodeAt(e.position),r!==39)return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;(r=e.input.charCodeAt(e.position))!==0;)if(r===39)if(captureSegment(e,n,e.position,!0),r=e.input.charCodeAt(++e.position),r===39)n=e.position,e.position++,o=e.position;else return!0;else is_EOL(r)?(captureSegment(e,n,o,!0),writeFoldedLines(e,skipSeparationSpace(e,!1,t)),n=o=e.position):e.position===e.lineStart&&testDocumentSeparator(e)?throwError(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);throwError(e,"unexpected end of the stream within a single quoted scalar")}function readDoubleQuotedScalar(e,t){var r,n,o,s,a,c;if(c=e.input.charCodeAt(e.position),c!==34)return!1;for(e.kind="scalar",e.result="",e.position++,r=n=e.position;(c=e.input.charCodeAt(e.position))!==0;){if(c===34)return captureSegment(e,r,e.position,!0),e.position++,!0;if(c===92){if(captureSegment(e,r,e.position,!0),c=e.input.charCodeAt(++e.position),is_EOL(c))skipSeparationSpace(e,!1,t);else if(c<256&&simpleEscapeCheck[c])e.result+=simpleEscapeMap[c],e.position++;else if((a=escapedHexLen(c))>0){for(o=a,s=0;o>0;o--)c=e.input.charCodeAt(++e.position),(a=fromHexCode(c))>=0?s=(s<<4)+a:throwError(e,"expected hexadecimal character");e.result+=charFromCodepoint(s),e.position++}else throwError(e,"unknown escape sequence");r=n=e.position}else is_EOL(c)?(captureSegment(e,r,n,!0),writeFoldedLines(e,skipSeparationSpace(e,!1,t)),r=n=e.position):e.position===e.lineStart&&testDocumentSeparator(e)?throwError(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}throwError(e,"unexpected end of the stream within a double quoted scalar")}function readFlowCollection(e,t){var r=!0,n,o=e.tag,s,a=e.anchor,c,l,u,f,d,m={},g,h,p,_;if(_=e.input.charCodeAt(e.position),_===91)l=93,d=!1,s=[];else if(_===123)l=125,d=!0,s={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),_=e.input.charCodeAt(++e.position);_!==0;){if(skipSeparationSpace(e,!0,t),_=e.input.charCodeAt(e.position),_===l)return e.position++,e.tag=o,e.anchor=a,e.kind=d?"mapping":"sequence",e.result=s,!0;r||throwError(e,"missed comma between flow collection entries"),h=g=p=null,u=f=!1,_===63&&(c=e.input.charCodeAt(e.position+1),is_WS_OR_EOL(c)&&(u=f=!0,e.position++,skipSeparationSpace(e,!0,t))),n=e.line,composeNode(e,t,CONTEXT_FLOW_IN,!1,!0),h=e.tag,g=e.result,skipSeparationSpace(e,!0,t),_=e.input.charCodeAt(e.position),(f||e.line===n)&&_===58&&(u=!0,_=e.input.charCodeAt(++e.position),skipSeparationSpace(e,!0,t),composeNode(e,t,CONTEXT_FLOW_IN,!1,!0),p=e.result),d?storeMappingPair(e,s,m,h,g,p):u?s.push(storeMappingPair(e,null,m,h,g,p)):s.push(g),skipSeparationSpace(e,!0,t),_=e.input.charCodeAt(e.position),_===44?(r=!0,_=e.input.charCodeAt(++e.position)):r=!1}throwError(e,"unexpected end of the stream within a flow collection")}function readBlockScalar(e,t){var r,n,o=CHOMPING_CLIP,s=!1,a=!1,c=t,l=0,u=!1,f,d;if(d=e.input.charCodeAt(e.position),d===124)n=!1;else if(d===62)n=!0;else return!1;for(e.kind="scalar",e.result="";d!==0;)if(d=e.input.charCodeAt(++e.position),d===43||d===45)CHOMPING_CLIP===o?o=d===43?CHOMPING_KEEP:CHOMPING_STRIP:throwError(e,"repeat of a chomping mode identifier");else if((f=fromDecimalCode(d))>=0)f===0?throwError(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):a?throwError(e,"repeat of an indentation width identifier"):(c=t+f-1,a=!0);else break;if(is_WHITE_SPACE(d)){do d=e.input.charCodeAt(++e.position);while(is_WHITE_SPACE(d));if(d===35)do d=e.input.charCodeAt(++e.position);while(!is_EOL(d)&&d!==0)}for(;d!==0;){for(readLineBreak(e),e.lineIndent=0,d=e.input.charCodeAt(e.position);(!a||e.lineIndent<c)&&d===32;)e.lineIndent++,d=e.input.charCodeAt(++e.position);if(!a&&e.lineIndent>c&&(c=e.lineIndent),is_EOL(d)){l++;continue}if(e.lineIndent<c){o===CHOMPING_KEEP?e.result+=common$1.repeat(`
`,s?1+l:l):o===CHOMPING_CLIP&&s&&(e.result+=`
`);break}for(n?is_WHITE_SPACE(d)?(u=!0,e.result+=common$1.repeat(`
`,s?1+l:l)):u?(u=!1,e.result+=common$1.repeat(`
`,l+1)):l===0?s&&(e.result+=" "):e.result+=common$1.repeat(`
`,l):e.result+=common$1.repeat(`
`,s?1+l:l),s=!0,a=!0,l=0,r=e.position;!is_EOL(d)&&d!==0;)d=e.input.charCodeAt(++e.position);captureSegment(e,r,e.position,!1)}return!0}function readBlockSequence(e,t){var r,n=e.tag,o=e.anchor,s=[],a,c=!1,l;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),l=e.input.charCodeAt(e.position);l!==0&&!(l!==45||(a=e.input.charCodeAt(e.position+1),!is_WS_OR_EOL(a)));){if(c=!0,e.position++,skipSeparationSpace(e,!0,-1)&&e.lineIndent<=t){s.push(null),l=e.input.charCodeAt(e.position);continue}if(r=e.line,composeNode(e,t,CONTEXT_BLOCK_IN,!1,!0),s.push(e.result),skipSeparationSpace(e,!0,-1),l=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&l!==0)throwError(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return c?(e.tag=n,e.anchor=o,e.kind="sequence",e.result=s,!0):!1}function readBlockMapping(e,t,r){var n,o,s,a,c=e.tag,l=e.anchor,u={},f={},d=null,m=null,g=null,h=!1,p=!1,_;for(e.anchor!==null&&(e.anchorMap[e.anchor]=u),_=e.input.charCodeAt(e.position);_!==0;){if(n=e.input.charCodeAt(e.position+1),s=e.line,a=e.position,(_===63||_===58)&&is_WS_OR_EOL(n))_===63?(h&&(storeMappingPair(e,u,f,d,m,null),d=m=g=null),p=!0,h=!0,o=!0):h?(h=!1,o=!0):throwError(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,_=n;else if(composeNode(e,r,CONTEXT_FLOW_OUT,!1,!0))if(e.line===s){for(_=e.input.charCodeAt(e.position);is_WHITE_SPACE(_);)_=e.input.charCodeAt(++e.position);if(_===58)_=e.input.charCodeAt(++e.position),is_WS_OR_EOL(_)||throwError(e,"a whitespace character is expected after the key-value separator within a block mapping"),h&&(storeMappingPair(e,u,f,d,m,null),d=m=g=null),p=!0,h=!1,o=!1,d=e.tag,m=e.result;else if(p)throwError(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=l,!0}else if(p)throwError(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=l,!0;else break;if((e.line===s||e.lineIndent>t)&&(composeNode(e,t,CONTEXT_BLOCK_OUT,!0,o)&&(h?m=e.result:g=e.result),h||(storeMappingPair(e,u,f,d,m,g,s,a),d=m=g=null),skipSeparationSpace(e,!0,-1),_=e.input.charCodeAt(e.position)),e.lineIndent>t&&_!==0)throwError(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return h&&storeMappingPair(e,u,f,d,m,null),p&&(e.tag=c,e.anchor=l,e.kind="mapping",e.result=u),p}function readTagProperty(e){var t,r=!1,n=!1,o,s,a;if(a=e.input.charCodeAt(e.position),a!==33)return!1;if(e.tag!==null&&throwError(e,"duplication of a tag property"),a=e.input.charCodeAt(++e.position),a===60?(r=!0,a=e.input.charCodeAt(++e.position)):a===33?(n=!0,o="!!",a=e.input.charCodeAt(++e.position)):o="!",t=e.position,r){do a=e.input.charCodeAt(++e.position);while(a!==0&&a!==62);e.position<e.length?(s=e.input.slice(t,e.position),a=e.input.charCodeAt(++e.position)):throwError(e,"unexpected end of the stream within a verbatim tag")}else{for(;a!==0&&!is_WS_OR_EOL(a);)a===33&&(n?throwError(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(t-1,e.position+1),PATTERN_TAG_HANDLE.test(o)||throwError(e,"named tag handle cannot contain such characters"),n=!0,t=e.position+1)),a=e.input.charCodeAt(++e.position);s=e.input.slice(t,e.position),PATTERN_FLOW_INDICATORS.test(s)&&throwError(e,"tag suffix cannot contain flow indicator characters")}return s&&!PATTERN_TAG_URI.test(s)&&throwError(e,"tag name cannot contain such characters: "+s),r?e.tag=s:_hasOwnProperty$1.call(e.tagMap,o)?e.tag=e.tagMap[o]+s:o==="!"?e.tag="!"+s:o==="!!"?e.tag="tag:yaml.org,2002:"+s:throwError(e,'undeclared tag handle "'+o+'"'),!0}function readAnchorProperty(e){var t,r;if(r=e.input.charCodeAt(e.position),r!==38)return!1;for(e.anchor!==null&&throwError(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;r!==0&&!is_WS_OR_EOL(r)&&!is_FLOW_INDICATOR(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&throwError(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function readAlias(e){var t,r,n;if(n=e.input.charCodeAt(e.position),n!==42)return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;n!==0&&!is_WS_OR_EOL(n)&&!is_FLOW_INDICATOR(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&throwError(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),_hasOwnProperty$1.call(e.anchorMap,r)||throwError(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],skipSeparationSpace(e,!0,-1),!0}function composeNode(e,t,r,n,o){var s,a,c,l=1,u=!1,f=!1,d,m,g,h,p;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,s=a=c=CONTEXT_BLOCK_OUT===r||CONTEXT_BLOCK_IN===r,n&&skipSeparationSpace(e,!0,-1)&&(u=!0,e.lineIndent>t?l=1:e.lineIndent===t?l=0:e.lineIndent<t&&(l=-1)),l===1)for(;readTagProperty(e)||readAnchorProperty(e);)skipSeparationSpace(e,!0,-1)?(u=!0,c=s,e.lineIndent>t?l=1:e.lineIndent===t?l=0:e.lineIndent<t&&(l=-1)):c=!1;if(c&&(c=u||o),(l===1||CONTEXT_BLOCK_OUT===r)&&(CONTEXT_FLOW_IN===r||CONTEXT_FLOW_OUT===r?h=t:h=t+1,p=e.position-e.lineStart,l===1?c&&(readBlockSequence(e,p)||readBlockMapping(e,p,h))||readFlowCollection(e,h)?f=!0:(a&&readBlockScalar(e,h)||readSingleQuotedScalar(e,h)||readDoubleQuotedScalar(e,h)?f=!0:readAlias(e)?(f=!0,(e.tag!==null||e.anchor!==null)&&throwError(e,"alias node should not have any properties")):readPlainScalar(e,h,CONTEXT_FLOW_IN===r)&&(f=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):l===0&&(f=c&&readBlockSequence(e,p))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&throwError(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),d=0,m=e.implicitTypes.length;d<m;d+=1)if(g=e.implicitTypes[d],g.resolve(e.result)){e.result=g.construct(e.result),e.tag=g.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else _hasOwnProperty$1.call(e.typeMap[e.kind||"fallback"],e.tag)?(g=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&g.kind!==e.kind&&throwError(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+g.kind+'", not "'+e.kind+'"'),g.resolve(e.result)?(e.result=g.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):throwError(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):throwError(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||f}function readDocument(e){var t=e.position,r,n,o,s=!1,a;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(a=e.input.charCodeAt(e.position))!==0&&(skipSeparationSpace(e,!0,-1),a=e.input.charCodeAt(e.position),!(e.lineIndent>0||a!==37));){for(s=!0,a=e.input.charCodeAt(++e.position),r=e.position;a!==0&&!is_WS_OR_EOL(a);)a=e.input.charCodeAt(++e.position);for(n=e.input.slice(r,e.position),o=[],n.length<1&&throwError(e,"directive name must not be less than one character in length");a!==0;){for(;is_WHITE_SPACE(a);)a=e.input.charCodeAt(++e.position);if(a===35){do a=e.input.charCodeAt(++e.position);while(a!==0&&!is_EOL(a));break}if(is_EOL(a))break;for(r=e.position;a!==0&&!is_WS_OR_EOL(a);)a=e.input.charCodeAt(++e.position);o.push(e.input.slice(r,e.position))}a!==0&&readLineBreak(e),_hasOwnProperty$1.call(directiveHandlers,n)?directiveHandlers[n](e,n,o):throwWarning(e,'unknown document directive "'+n+'"')}if(skipSeparationSpace(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,skipSeparationSpace(e,!0,-1)):s&&throwError(e,"directives end mark is expected"),composeNode(e,e.lineIndent-1,CONTEXT_BLOCK_OUT,!1,!0),skipSeparationSpace(e,!0,-1),e.checkLineBreaks&&PATTERN_NON_ASCII_LINE_BREAKS.test(e.input.slice(t,e.position))&&throwWarning(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&testDocumentSeparator(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,skipSeparationSpace(e,!0,-1));return}if(e.position<e.length-1)throwError(e,"end of the stream or a document separator is expected");else return}function loadDocuments(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var r=new State$1(e,t),n=e.indexOf("\0");for(n!==-1&&(r.position=n,throwError(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)readDocument(r);return r.documents}function loadAll(e,t,r){t!==null&&typeof t=="object"&&typeof r>"u"&&(r=t,t=null);var n=loadDocuments(e,r);if(typeof t!="function")return n;for(var o=0,s=n.length;o<s;o+=1)t(n[o])}function load(e,t){var r=loadDocuments(e,t);if(r.length!==0){if(r.length===1)return r[0];throw new YAMLException$1("expected a single document in the stream, but found more")}}function safeLoadAll(e,t,r){return typeof t=="object"&&t!==null&&typeof r>"u"&&(r=t,t=null),loadAll(e,t,common$1.extend({schema:DEFAULT_SAFE_SCHEMA$1},r))}function safeLoad(e,t){return load(e,common$1.extend({schema:DEFAULT_SAFE_SCHEMA$1},t))}loader$1.loadAll=loadAll;loader$1.load=load;loader$1.safeLoadAll=safeLoadAll;loader$1.safeLoad=safeLoad;var dumper$1={},common=common$6,YAMLException=exception,DEFAULT_FULL_SCHEMA=default_full,DEFAULT_SAFE_SCHEMA=default_safe,_toString=Object.prototype.toString,_hasOwnProperty=Object.prototype.hasOwnProperty,CHAR_TAB=9,CHAR_LINE_FEED=10,CHAR_CARRIAGE_RETURN=13,CHAR_SPACE=32,CHAR_EXCLAMATION=33,CHAR_DOUBLE_QUOTE=34,CHAR_SHARP=35,CHAR_PERCENT=37,CHAR_AMPERSAND=38,CHAR_SINGLE_QUOTE=39,CHAR_ASTERISK=42,CHAR_COMMA=44,CHAR_MINUS=45,CHAR_COLON=58,CHAR_EQUALS=61,CHAR_GREATER_THAN=62,CHAR_QUESTION=63,CHAR_COMMERCIAL_AT=64,CHAR_LEFT_SQUARE_BRACKET=91,CHAR_RIGHT_SQUARE_BRACKET=93,CHAR_GRAVE_ACCENT=96,CHAR_LEFT_CURLY_BRACKET=123,CHAR_VERTICAL_LINE=124,CHAR_RIGHT_CURLY_BRACKET=125,ESCAPE_SEQUENCES={};ESCAPE_SEQUENCES[0]="\\0";ESCAPE_SEQUENCES[7]="\\a";ESCAPE_SEQUENCES[8]="\\b";ESCAPE_SEQUENCES[9]="\\t";ESCAPE_SEQUENCES[10]="\\n";ESCAPE_SEQUENCES[11]="\\v";ESCAPE_SEQUENCES[12]="\\f";ESCAPE_SEQUENCES[13]="\\r";ESCAPE_SEQUENCES[27]="\\e";ESCAPE_SEQUENCES[34]='\\"';ESCAPE_SEQUENCES[92]="\\\\";ESCAPE_SEQUENCES[133]="\\N";ESCAPE_SEQUENCES[160]="\\_";ESCAPE_SEQUENCES[8232]="\\L";ESCAPE_SEQUENCES[8233]="\\P";var DEPRECATED_BOOLEANS_SYNTAX=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function compileStyleMap(e,t){var r,n,o,s,a,c,l;if(t===null)return{};for(r={},n=Object.keys(t),o=0,s=n.length;o<s;o+=1)a=n[o],c=String(t[a]),a.slice(0,2)==="!!"&&(a="tag:yaml.org,2002:"+a.slice(2)),l=e.compiledTypeMap.fallback[a],l&&_hasOwnProperty.call(l.styleAliases,c)&&(c=l.styleAliases[c]),r[a]=c;return r}function encodeHex(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else if(e<=4294967295)r="U",n=8;else throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+r+common.repeat("0",n-t.length)+t}function State(e){this.schema=e.schema||DEFAULT_FULL_SCHEMA,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=common.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=compileStyleMap(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function indentString(e,t){for(var r=common.repeat(" ",t),n=0,o=-1,s="",a,c=e.length;n<c;)o=e.indexOf(`
`,n),o===-1?(a=e.slice(n),n=c):(a=e.slice(n,o+1),n=o+1),a.length&&a!==`
`&&(s+=r),s+=a;return s}function generateNextLine(e,t){return`
`+common.repeat(" ",e.indent*t)}function testImplicitResolving(e,t){var r,n,o;for(r=0,n=e.implicitTypes.length;r<n;r+=1)if(o=e.implicitTypes[r],o.resolve(t))return!0;return!1}function isWhitespace(e){return e===CHAR_SPACE||e===CHAR_TAB}function isPrintable(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function isNsChar(e){return isPrintable(e)&&!isWhitespace(e)&&e!==65279&&e!==CHAR_CARRIAGE_RETURN&&e!==CHAR_LINE_FEED}function isPlainSafe(e,t){return isPrintable(e)&&e!==65279&&e!==CHAR_COMMA&&e!==CHAR_LEFT_SQUARE_BRACKET&&e!==CHAR_RIGHT_SQUARE_BRACKET&&e!==CHAR_LEFT_CURLY_BRACKET&&e!==CHAR_RIGHT_CURLY_BRACKET&&e!==CHAR_COLON&&(e!==CHAR_SHARP||t&&isNsChar(t))}function isPlainSafeFirst(e){return isPrintable(e)&&e!==65279&&!isWhitespace(e)&&e!==CHAR_MINUS&&e!==CHAR_QUESTION&&e!==CHAR_COLON&&e!==CHAR_COMMA&&e!==CHAR_LEFT_SQUARE_BRACKET&&e!==CHAR_RIGHT_SQUARE_BRACKET&&e!==CHAR_LEFT_CURLY_BRACKET&&e!==CHAR_RIGHT_CURLY_BRACKET&&e!==CHAR_SHARP&&e!==CHAR_AMPERSAND&&e!==CHAR_ASTERISK&&e!==CHAR_EXCLAMATION&&e!==CHAR_VERTICAL_LINE&&e!==CHAR_EQUALS&&e!==CHAR_GREATER_THAN&&e!==CHAR_SINGLE_QUOTE&&e!==CHAR_DOUBLE_QUOTE&&e!==CHAR_PERCENT&&e!==CHAR_COMMERCIAL_AT&&e!==CHAR_GRAVE_ACCENT}function needIndentIndicator(e){var t=/^\n* /;return t.test(e)}var STYLE_PLAIN=1,STYLE_SINGLE=2,STYLE_LITERAL=3,STYLE_FOLDED=4,STYLE_DOUBLE=5;function chooseScalarStyle(e,t,r,n,o){var s,a,c,l=!1,u=!1,f=n!==-1,d=-1,m=isPlainSafeFirst(e.charCodeAt(0))&&!isWhitespace(e.charCodeAt(e.length-1));if(t)for(s=0;s<e.length;s++){if(a=e.charCodeAt(s),!isPrintable(a))return STYLE_DOUBLE;c=s>0?e.charCodeAt(s-1):null,m=m&&isPlainSafe(a,c)}else{for(s=0;s<e.length;s++){if(a=e.charCodeAt(s),a===CHAR_LINE_FEED)l=!0,f&&(u=u||s-d-1>n&&e[d+1]!==" ",d=s);else if(!isPrintable(a))return STYLE_DOUBLE;c=s>0?e.charCodeAt(s-1):null,m=m&&isPlainSafe(a,c)}u=u||f&&s-d-1>n&&e[d+1]!==" "}return!l&&!u?m&&!o(e)?STYLE_PLAIN:STYLE_SINGLE:r>9&&needIndentIndicator(e)?STYLE_DOUBLE:u?STYLE_FOLDED:STYLE_LITERAL}function writeScalar(e,t,r,n){e.dump=function(){if(t.length===0)return"''";if(!e.noCompatMode&&DEPRECATED_BOOLEANS_SYNTAX.indexOf(t)!==-1)return"'"+t+"'";var o=e.indent*Math.max(1,r),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),a=n||e.flowLevel>-1&&r>=e.flowLevel;function c(l){return testImplicitResolving(e,l)}switch(chooseScalarStyle(t,a,e.indent,s,c)){case STYLE_PLAIN:return t;case STYLE_SINGLE:return"'"+t.replace(/'/g,"''")+"'";case STYLE_LITERAL:return"|"+blockHeader(t,e.indent)+dropEndingNewline(indentString(t,o));case STYLE_FOLDED:return">"+blockHeader(t,e.indent)+dropEndingNewline(indentString(foldString(t,s),o));case STYLE_DOUBLE:return'"'+escapeString(t)+'"';default:throw new YAMLException("impossible error: invalid scalar style")}}()}function blockHeader(e,t){var r=needIndentIndicator(e)?String(t):"",n=e[e.length-1]===`
`,o=n&&(e[e.length-2]===`
`||e===`
`),s=o?"+":n?"":"-";return r+s+`
`}function dropEndingNewline(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function foldString(e,t){for(var r=/(\n+)([^\n]*)/g,n=function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,r.lastIndex=u,foldLine(e.slice(0,u),t)}(),o=e[0]===`
`||e[0]===" ",s,a;a=r.exec(e);){var c=a[1],l=a[2];s=l[0]===" ",n+=c+(!o&&!s&&l!==""?`
`:"")+foldLine(l,t),o=s}return n}function foldLine(e,t){if(e===""||e[0]===" ")return e;for(var r=/ [^ ]/g,n,o=0,s,a=0,c=0,l="";n=r.exec(e);)c=n.index,c-o>t&&(s=a>o?a:c,l+=`
`+e.slice(o,s),o=s+1),a=c;return l+=`
`,e.length-o>t&&a>o?l+=e.slice(o,a)+`
`+e.slice(a+1):l+=e.slice(o),l.slice(1)}function escapeString(e){for(var t="",r,n,o,s=0;s<e.length;s++){if(r=e.charCodeAt(s),r>=55296&&r<=56319&&(n=e.charCodeAt(s+1),n>=56320&&n<=57343)){t+=encodeHex((r-55296)*1024+n-56320+65536),s++;continue}o=ESCAPE_SEQUENCES[r],t+=!o&&isPrintable(r)?e[s]:o||encodeHex(r)}return t}function writeFlowSequence(e,t,r){var n="",o=e.tag,s,a;for(s=0,a=r.length;s<a;s+=1)writeNode(e,t,r[s],!1,!1)&&(s!==0&&(n+=","+(e.condenseFlow?"":" ")),n+=e.dump);e.tag=o,e.dump="["+n+"]"}function writeBlockSequence(e,t,r,n){var o="",s=e.tag,a,c;for(a=0,c=r.length;a<c;a+=1)writeNode(e,t+1,r[a],!0,!0)&&((!n||a!==0)&&(o+=generateNextLine(e,t)),e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=s,e.dump=o||"[]"}function writeFlowMapping(e,t,r){var n="",o=e.tag,s=Object.keys(r),a,c,l,u,f;for(a=0,c=s.length;a<c;a+=1)f="",a!==0&&(f+=", "),e.condenseFlow&&(f+='"'),l=s[a],u=r[l],writeNode(e,t,l,!1,!1)&&(e.dump.length>1024&&(f+="? "),f+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),writeNode(e,t,u,!1,!1)&&(f+=e.dump,n+=f));e.tag=o,e.dump="{"+n+"}"}function writeBlockMapping(e,t,r,n){var o="",s=e.tag,a=Object.keys(r),c,l,u,f,d,m;if(e.sortKeys===!0)a.sort();else if(typeof e.sortKeys=="function")a.sort(e.sortKeys);else if(e.sortKeys)throw new YAMLException("sortKeys must be a boolean or a function");for(c=0,l=a.length;c<l;c+=1)m="",(!n||c!==0)&&(m+=generateNextLine(e,t)),u=a[c],f=r[u],writeNode(e,t+1,u,!0,!0,!0)&&(d=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,d&&(e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,d&&(m+=generateNextLine(e,t)),writeNode(e,t+1,f,!0,d)&&(e.dump&&CHAR_LINE_FEED===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,o+=m));e.tag=s,e.dump=o||"{}"}function detectType(e,t,r){var n,o,s,a,c,l;for(o=r?e.explicitTypes:e.implicitTypes,s=0,a=o.length;s<a;s+=1)if(c=o[s],(c.instanceOf||c.predicate)&&(!c.instanceOf||typeof t=="object"&&t instanceof c.instanceOf)&&(!c.predicate||c.predicate(t))){if(e.tag=r?c.tag:"?",c.represent){if(l=e.styleMap[c.tag]||c.defaultStyle,_toString.call(c.represent)==="[object Function]")n=c.represent(t,l);else if(_hasOwnProperty.call(c.represent,l))n=c.represent[l](t,l);else throw new YAMLException("!<"+c.tag+'> tag resolver accepts not "'+l+'" style');e.dump=n}return!0}return!1}function writeNode(e,t,r,n,o,s){e.tag=null,e.dump=r,detectType(e,r,!1)||detectType(e,r,!0);var a=_toString.call(e.dump);n&&(n=e.flowLevel<0||e.flowLevel>t);var c=a==="[object Object]"||a==="[object Array]",l,u;if(c&&(l=e.duplicates.indexOf(r),u=l!==-1),(e.tag!==null&&e.tag!=="?"||u||e.indent!==2&&t>0)&&(o=!1),u&&e.usedDuplicates[l])e.dump="*ref_"+l;else{if(c&&u&&!e.usedDuplicates[l]&&(e.usedDuplicates[l]=!0),a==="[object Object]")n&&Object.keys(e.dump).length!==0?(writeBlockMapping(e,t,e.dump,o),u&&(e.dump="&ref_"+l+e.dump)):(writeFlowMapping(e,t,e.dump),u&&(e.dump="&ref_"+l+" "+e.dump));else if(a==="[object Array]"){var f=e.noArrayIndent&&t>0?t-1:t;n&&e.dump.length!==0?(writeBlockSequence(e,f,e.dump,o),u&&(e.dump="&ref_"+l+e.dump)):(writeFlowSequence(e,f,e.dump),u&&(e.dump="&ref_"+l+" "+e.dump))}else if(a==="[object String]")e.tag!=="?"&&writeScalar(e,e.dump,t,s);else{if(e.skipInvalid)return!1;throw new YAMLException("unacceptable kind of an object to dump "+a)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function getDuplicateReferences(e,t){var r=[],n=[],o,s;for(inspectNode(e,r,n),o=0,s=n.length;o<s;o+=1)t.duplicates.push(r[n[o]]);t.usedDuplicates=new Array(s)}function inspectNode(e,t,r){var n,o,s;if(e!==null&&typeof e=="object")if(o=t.indexOf(e),o!==-1)r.indexOf(o)===-1&&r.push(o);else if(t.push(e),Array.isArray(e))for(o=0,s=e.length;o<s;o+=1)inspectNode(e[o],t,r);else for(n=Object.keys(e),o=0,s=n.length;o<s;o+=1)inspectNode(e[n[o]],t,r)}function dump(e,t){t=t||{};var r=new State(t);return r.noRefs||getDuplicateReferences(e,r),writeNode(r,0,e,!0,!0)?r.dump+`
`:""}function safeDump(e,t){return dump(e,common.extend({schema:DEFAULT_SAFE_SCHEMA},t))}dumper$1.dump=dump;dumper$1.safeDump=safeDump;var loader=loader$1,dumper=dumper$1;function deprecated(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}jsYaml$1.Type=type;jsYaml$1.Schema=schema;jsYaml$1.FAILSAFE_SCHEMA=failsafe;jsYaml$1.JSON_SCHEMA=json;jsYaml$1.CORE_SCHEMA=core;jsYaml$1.DEFAULT_SAFE_SCHEMA=default_safe;jsYaml$1.DEFAULT_FULL_SCHEMA=default_full;jsYaml$1.load=loader.load;jsYaml$1.loadAll=loader.loadAll;jsYaml$1.safeLoad=loader.safeLoad;jsYaml$1.safeLoadAll=loader.safeLoadAll;jsYaml$1.dump=dumper.dump;jsYaml$1.safeDump=dumper.safeDump;jsYaml$1.YAMLException=exception;jsYaml$1.MINIMAL_SCHEMA=failsafe;jsYaml$1.SAFE_SCHEMA=default_safe;jsYaml$1.DEFAULT_SCHEMA=default_full;jsYaml$1.scan=deprecated("scan");jsYaml$1.parse=deprecated("parse");jsYaml$1.compose=deprecated("compose");jsYaml$1.addConstructor=deprecated("addConstructor");var yaml=jsYaml$1,jsYaml=yaml;(function(module,exports){const yaml=jsYaml,engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(e,t){const r=Object.assign({replacer:null,space:2},t);return JSON.stringify(e,r.replacer,r.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(e){if(wrap!==!1&&/(unexpected|identifier)/i.test(e.message))return parse(str,options,!1);throw new SyntaxError(e)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines$2);var enginesExports=engines$2.exports,utils$5={};/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var stripBomString=function(e){return typeof e=="string"&&e.charAt(0)==="\uFEFF"?e.slice(1):e};(function(e){const t=stripBomString,r=kindOf$1;e.define=function(n,o,s){Reflect.defineProperty(n,o,{enumerable:!1,configurable:!0,writable:!0,value:s})},e.isBuffer=function(n){return r(n)==="buffer"},e.isObject=function(n){return r(n)==="object"},e.toBuffer=function(n){return typeof n=="string"?buffer.Buffer.from(n):n},e.toString=function(n){if(e.isBuffer(n))return t(String(n));if(typeof n!="string")throw new TypeError("expected input to be a string or buffer");return t(n)},e.arrayify=function(n){return n?Array.isArray(n)?n:[n]:[]},e.startsWith=function(n,o,s){return typeof s!="number"&&(s=o.length),n.slice(0,s)===o}})(utils$5);const engines$1=enginesExports,utils$4=utils$5;var defaults$6=function(e){const t=Object.assign({},e);return t.delimiters=utils$4.arrayify(t.delims||t.delimiters||"---"),t.delimiters.length===1&&t.delimiters.push(t.delimiters[0]),t.language=(t.language||t.lang||"yaml").toLowerCase(),t.engines=Object.assign({},engines$1,t.parsers,t.engines),t},engine=function(e,t){let r=t.engines[e]||t.engines[aliase(e)];if(typeof r>"u")throw new Error('gray-matter engine "'+e+'" is not registered');return typeof r=="function"&&(r={parse:r}),r};function aliase(e){switch(e.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return e}}const typeOf$1=kindOf$1,getEngine$1=engine,defaults$5=defaults$6;var stringify$2=function(e,t,r){if(t==null&&r==null)switch(typeOf$1(e)){case"object":t=e.data,r={};break;case"string":return e;default:throw new TypeError("expected file to be a string or object")}const n=e.content,o=defaults$5(r);if(t==null){if(!o.data)return e;t=o.data}const s=e.language||o.language,a=getEngine$1(s,o);if(typeof a.stringify!="function")throw new TypeError('expected "'+s+'.stringify" to be a function');t=Object.assign({},e.data,t);const c=o.delimiters[0],l=o.delimiters[1],u=a.stringify(t,r).trim();let f="";return u!=="{}"&&(f=newline(c)+newline(u)+newline(l)),typeof e.excerpt=="string"&&e.excerpt!==""&&n.indexOf(e.excerpt.trim())===-1&&(f+=newline(e.excerpt)+newline(l)),f+newline(n)};function newline(e){return e.slice(-1)!==`
`?e+`
`:e}const defaults$4=defaults$6;var excerpt$1=function(e,t){const r=defaults$4(t);if(e.data==null&&(e.data={}),typeof r.excerpt=="function")return r.excerpt(e,r);const n=e.data.excerpt_separator||r.excerpt_separator;if(n==null&&(r.excerpt===!1||r.excerpt==null))return e;const o=typeof r.excerpt=="string"?r.excerpt:n||r.delimiters[0],s=e.content.indexOf(o);return s!==-1&&(e.excerpt=e.content.slice(0,s)),e};const typeOf=kindOf$1,stringify$1=stringify$2,utils$3=utils$5;var toFile$1=function(e){return typeOf(e)!=="object"&&(e={content:e}),typeOf(e.data)!=="object"&&(e.data={}),e.contents&&e.content==null&&(e.content=e.contents),utils$3.define(e,"orig",utils$3.toBuffer(e.content)),utils$3.define(e,"language",e.language||""),utils$3.define(e,"matter",e.matter||""),utils$3.define(e,"stringify",function(t,r){return r&&r.language&&(e.language=r.language),stringify$1(e,t,r)}),e.content=utils$3.toString(e.content),e.isEmpty=!1,e.excerpt="",e};const getEngine=engine,defaults$3=defaults$6;var parse$1=function(e,t,r){const n=defaults$3(r),o=getEngine(e,n);if(typeof o.parse!="function")throw new TypeError('expected "'+e+'.parse" to be a function');return o.parse(t,n)};const fs=empty_1,sections=sectionMatter,defaults$2=defaults$6,stringify=stringify$2,excerpt=excerpt$1,engines=enginesExports,toFile=toFile$1,parse=parse$1,utils$2=utils$5;function matter(e,t){if(e==="")return{data:{},content:e,excerpt:"",orig:e};let r=toFile(e);const n=matter.cache[r.content];if(!t){if(n)return r=Object.assign({},n),r.orig=n.orig,r;matter.cache[r.content]=r}return parseMatter(r,t)}function parseMatter(e,t){const r=defaults$2(t),n=r.delimiters[0],o=`
`+r.delimiters[1];let s=e.content;r.language&&(e.language=r.language);const a=n.length;if(!utils$2.startsWith(s,n,a))return excerpt(e,r),e;if(s.charAt(a)===n.slice(-1))return e;s=s.slice(a);const c=s.length,l=matter.language(s,r);l.name&&(e.language=l.name,s=s.slice(l.raw.length));let u=s.indexOf(o);return u===-1&&(u=c),e.matter=s.slice(0,u),e.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(e.isEmpty=!0,e.empty=e.content,e.data={}):e.data=parse(e.language,e.matter,r),u===c?e.content="":(e.content=s.slice(u+o.length),e.content[0]==="\r"&&(e.content=e.content.slice(1)),e.content[0]===`
`&&(e.content=e.content.slice(1))),excerpt(e,r),(r.sections===!0||typeof r.section=="function")&&sections(e,r.section),e}matter.engines=engines;matter.stringify=function(e,t,r){return typeof e=="string"&&(e=matter(e,r)),stringify(e,t,r)};matter.read=function(e,t){const r=fs.readFileSync(e,"utf8"),n=matter(r,t);return n.path=e,n};matter.test=function(e,t){return utils$2.startsWith(e,defaults$2(t).delimiters[0])};matter.language=function(e,t){const n=defaults$2(t).delimiters[0];matter.test(e)&&(e=e.slice(n.length));const o=e.slice(0,e.search(/\r?\n/));return{raw:o,name:o?o.trim():""}};matter.cache={};matter.clearCache=function(){matter.cache={}};var grayMatter=matter;const matter$1=getDefaultExportFromCjs(grayMatter);function bind(e,t){return function(){return e.apply(t,arguments)}}const{toString}=Object.prototype,{getPrototypeOf}=Object,kindOf=(e=>t=>{const r=toString.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),kindOfTest=e=>(e=e.toLowerCase(),t=>kindOf(t)===e),typeOfTest=e=>t=>typeof t===e,{isArray}=Array,isUndefined=typeOfTest("undefined");function isBuffer(e){return e!==null&&!isUndefined(e)&&e.constructor!==null&&!isUndefined(e.constructor)&&isFunction(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const isArrayBuffer=kindOfTest("ArrayBuffer");function isArrayBufferView(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&isArrayBuffer(e.buffer),t}const isString=typeOfTest("string"),isFunction=typeOfTest("function"),isNumber=typeOfTest("number"),isObject$1=e=>e!==null&&typeof e=="object",isBoolean=e=>e===!0||e===!1,isPlainObject=e=>{if(kindOf(e)!=="object")return!1;const t=getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isDate=kindOfTest("Date"),isFile=kindOfTest("File"),isBlob=kindOfTest("Blob"),isFileList=kindOfTest("FileList"),isStream=e=>isObject$1(e)&&isFunction(e.pipe),isFormData=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||isFunction(e.append)&&((t=kindOf(e))==="formdata"||t==="object"&&isFunction(e.toString)&&e.toString()==="[object FormData]"))},isURLSearchParams=kindOfTest("URLSearchParams"),trim=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function forEach(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),isArray(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),a=s.length;let c;for(n=0;n<a;n++)c=s[n],t.call(null,e[c],c,e)}}function findKey(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const _global=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:_global$1)(),isContextDefined=e=>!isUndefined(e)&&e!==_global;function merge(){const{caseless:e}=isContextDefined(this)&&this||{},t={},r=(n,o)=>{const s=e&&findKey(t,o)||o;isPlainObject(t[s])&&isPlainObject(n)?t[s]=merge(t[s],n):isPlainObject(n)?t[s]=merge({},n):isArray(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&forEach(arguments[n],r);return t}const extend=(e,t,r,{allOwnKeys:n}={})=>(forEach(t,(o,s)=>{r&&isFunction(o)?e[s]=bind(o,r):e[s]=o},{allOwnKeys:n}),e),stripBOM=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),inherits=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject=(e,t,r,n)=>{let o,s,a;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],(!n||n(a,e,t))&&!c[a]&&(t[a]=e[a],c[a]=!0);e=r!==!1&&getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},endsWith=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},toArray=e=>{if(!e)return null;if(isArray(e))return e;let t=e.length;if(!isNumber(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},isTypedArray=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&getPrototypeOf(Uint8Array)),forEachEntry=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},matchAll=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},isHTMLForm=kindOfTest("HTMLFormElement"),toCamelCase=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),hasOwnProperty=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),isRegExp=kindOfTest("RegExp"),reduceDescriptors=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};forEach(r,(o,s)=>{let a;(a=t(o,s,e))!==!1&&(n[s]=a||o)}),Object.defineProperties(e,n)},freezeMethods=e=>{reduceDescriptors(e,(t,r)=>{if(isFunction(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(isFunction(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet=(e,t)=>{const r={},n=o=>{o.forEach(s=>{r[s]=!0})};return isArray(e)?n(e):n(String(e).split(t)),r},noop$1=()=>{},toFiniteNumber=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ALPHA="abcdefghijklmnopqrstuvwxyz",DIGIT="0123456789",ALPHABET={DIGIT,ALPHA,ALPHA_DIGIT:ALPHA+ALPHA.toUpperCase()+DIGIT},generateString=(e=16,t=ALPHABET.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function isSpecCompliantForm(e){return!!(e&&isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const toJSONObject=e=>{const t=new Array(10),r=(n,o)=>{if(isObject$1(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const s=isArray(n)?[]:{};return forEach(n,(a,c)=>{const l=r(a,o+1);!isUndefined(l)&&(s[c]=l)}),t[o]=void 0,s}}return n};return r(e,0)},isAsyncFn=kindOfTest("AsyncFunction"),isThenable=e=>e&&(isObject$1(e)||isFunction(e))&&isFunction(e.then)&&isFunction(e.catch),utils$1={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isBoolean,isObject:isObject$1,isPlainObject,isUndefined,isDate,isFile,isBlob,isRegExp,isFunction,isStream,isURLSearchParams,isTypedArray,isFileList,forEach,merge,extend,trim,stripBOM,inherits,toFlatObject,kindOf,kindOfTest,endsWith,toArray,forEachEntry,matchAll,isHTMLForm,hasOwnProperty,hasOwnProp:hasOwnProperty,reduceDescriptors,freezeMethods,toObjectSet,toCamelCase,noop:noop$1,toFiniteNumber,findKey,global:_global,isContextDefined,ALPHABET,generateString,isSpecCompliantForm,toJSONObject,isAsyncFn,isThenable};function AxiosError(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}utils$1.inherits(AxiosError,Error,{toJSON:function e(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:utils$1.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const prototype$1=AxiosError.prototype,descriptors={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{descriptors[e]={value:e}});Object.defineProperties(AxiosError,descriptors);Object.defineProperty(prototype$1,"isAxiosError",{value:!0});AxiosError.from=(e,t,r,n,o,s)=>{const a=Object.create(prototype$1);return utils$1.toFlatObject(e,a,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),AxiosError.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,s&&Object.assign(a,s),a};const httpAdapter=null;function isVisitable(e){return utils$1.isPlainObject(e)||utils$1.isArray(e)}function removeBrackets(e){return utils$1.endsWith(e,"[]")?e.slice(0,-2):e}function renderKey(e,t,r){return e?e.concat(t).map(function(o,s){return o=removeBrackets(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function isFlatArray(e){return utils$1.isArray(e)&&!e.some(isVisitable)}const predicates=utils$1.toFlatObject(utils$1,{},null,function e(t){return/^is[A-Z]/.test(t)});function toFormData(e,t,r){if(!utils$1.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=utils$1.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,_){return!utils$1.isUndefined(_[p])});const n=r.metaTokens,o=r.visitor||f,s=r.dots,a=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&utils$1.isSpecCompliantForm(t);if(!utils$1.isFunction(o))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(utils$1.isDate(h))return h.toISOString();if(!l&&utils$1.isBlob(h))throw new AxiosError("Blob is not supported. Use a Buffer instead.");return utils$1.isArrayBuffer(h)||utils$1.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):buffer.Buffer.from(h):h}function f(h,p,_){let E=h;if(h&&!_&&typeof h=="object"){if(utils$1.endsWith(p,"{}"))p=n?p:p.slice(0,-2),h=JSON.stringify(h);else if(utils$1.isArray(h)&&isFlatArray(h)||(utils$1.isFileList(h)||utils$1.endsWith(p,"[]"))&&(E=utils$1.toArray(h)))return p=removeBrackets(p),E.forEach(function(y,S){!(utils$1.isUndefined(y)||y===null)&&t.append(a===!0?renderKey([p],S,s):a===null?p:p+"[]",u(y))}),!1}return isVisitable(h)?!0:(t.append(renderKey(_,p,s),u(h)),!1)}const d=[],m=Object.assign(predicates,{defaultVisitor:f,convertValue:u,isVisitable});function g(h,p){if(!utils$1.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+p.join("."));d.push(h),utils$1.forEach(h,function(E,A){(!(utils$1.isUndefined(E)||E===null)&&o.call(t,E,utils$1.isString(A)?A.trim():A,p,m))===!0&&g(E,p?p.concat(A):[A])}),d.pop()}}if(!utils$1.isObject(e))throw new TypeError("data must be an object");return g(e),t}function encode$1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function AxiosURLSearchParams(e,t){this._pairs=[],e&&toFormData(e,this,t)}const prototype=AxiosURLSearchParams.prototype;prototype.append=function e(t,r){this._pairs.push([t,r])};prototype.toString=function e(t){const r=t?function(n){return t.call(this,n,encode$1)}:encode$1;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function encode(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function buildURL(e,t,r){if(!t)return e;const n=r&&r.encode||encode,o=r&&r.serialize;let s;if(o?s=o(t,r):s=utils$1.isURLSearchParams(t)?t.toString():new AxiosURLSearchParams(t,r).toString(n),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class InterceptorManager{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){utils$1.forEach(this.handlers,function(n){n!==null&&t(n)})}}const InterceptorManager$1=InterceptorManager,transitionalDefaults={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},URLSearchParams$1=typeof URLSearchParams<"u"?URLSearchParams:AxiosURLSearchParams,FormData$1=typeof FormData<"u"?FormData:null,Blob$1=typeof Blob<"u"?Blob:null,platform$1={isBrowser:!0,classes:{URLSearchParams:URLSearchParams$1,FormData:FormData$1,Blob:Blob$1},protocols:["http","https","file","blob","url","data"]},hasBrowserEnv=typeof window<"u"&&typeof document<"u",hasStandardBrowserEnv=(e=>hasBrowserEnv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),hasStandardBrowserWebWorkerEnv=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),utils=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv,hasStandardBrowserEnv,hasStandardBrowserWebWorkerEnv},Symbol.toStringTag,{value:"Module"})),platform={...utils,...platform$1};function toURLEncodedForm(e,t){return toFormData(e,new platform.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return platform.isNode&&utils$1.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function parsePropPath(e){return utils$1.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function arrayToObject(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function formDataToJSON(e){function t(r,n,o,s){let a=r[s++];if(a==="__proto__")return!0;const c=Number.isFinite(+a),l=s>=r.length;return a=!a&&utils$1.isArray(o)?o.length:a,l?(utils$1.hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!c):((!o[a]||!utils$1.isObject(o[a]))&&(o[a]=[]),t(r,n,o[a],s)&&utils$1.isArray(o[a])&&(o[a]=arrayToObject(o[a])),!c)}if(utils$1.isFormData(e)&&utils$1.isFunction(e.entries)){const r={};return utils$1.forEachEntry(e,(n,o)=>{t(parsePropPath(n),o,r,0)}),r}return null}function stringifySafely(e,t,r){if(utils$1.isString(e))try{return(t||JSON.parse)(e),utils$1.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const defaults={transitional:transitionalDefaults,adapter:["xhr","http"],transformRequest:[function e(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=utils$1.isObject(t);if(s&&utils$1.isHTMLForm(t)&&(t=new FormData(t)),utils$1.isFormData(t))return o?JSON.stringify(formDataToJSON(t)):t;if(utils$1.isArrayBuffer(t)||utils$1.isBuffer(t)||utils$1.isStream(t)||utils$1.isFile(t)||utils$1.isBlob(t))return t;if(utils$1.isArrayBufferView(t))return t.buffer;if(utils$1.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return toURLEncodedForm(t,this.formSerializer).toString();if((c=utils$1.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return toFormData(c?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),stringifySafely(t)):t}],transformResponse:[function e(t){const r=this.transitional||defaults.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&utils$1.isString(t)&&(n&&!this.responseType||o)){const a=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(a)throw c.name==="SyntaxError"?AxiosError.from(c,AxiosError.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:platform.classes.FormData,Blob:platform.classes.Blob},validateStatus:function e(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};utils$1.forEach(["delete","get","head","post","put","patch"],e=>{defaults.headers[e]={}});const defaults$1=defaults,ignoreDuplicateOf=utils$1.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),parseHeaders=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),r=a.substring(0,o).trim().toLowerCase(),n=a.substring(o+1).trim(),!(!r||t[r]&&ignoreDuplicateOf[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},$internals=Symbol("internals");function normalizeHeader(e){return e&&String(e).trim().toLowerCase()}function normalizeValue(e){return e===!1||e==null?e:utils$1.isArray(e)?e.map(normalizeValue):String(e)}function parseTokens(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const isValidHeaderName=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function matchHeaderValue(e,t,r,n,o){if(utils$1.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!utils$1.isString(t)){if(utils$1.isString(n))return t.indexOf(n)!==-1;if(utils$1.isRegExp(n))return n.test(t)}}function formatHeader(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function buildAccessors(e,t){const r=utils$1.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,a){return this[n].call(this,t,o,s,a)},configurable:!0})})}class AxiosHeaders{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function s(c,l,u){const f=normalizeHeader(l);if(!f)throw new Error("header name must be a non-empty string");const d=utils$1.findKey(o,f);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||l]=normalizeValue(c))}const a=(c,l)=>utils$1.forEach(c,(u,f)=>s(u,f,l));return utils$1.isPlainObject(t)||t instanceof this.constructor?a(t,r):utils$1.isString(t)&&(t=t.trim())&&!isValidHeaderName(t)?a(parseHeaders(t),r):t!=null&&s(r,t,n),this}get(t,r){if(t=normalizeHeader(t),t){const n=utils$1.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return parseTokens(o);if(utils$1.isFunction(r))return r.call(this,o,n);if(utils$1.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=normalizeHeader(t),t){const n=utils$1.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||matchHeaderValue(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function s(a){if(a=normalizeHeader(a),a){const c=utils$1.findKey(n,a);c&&(!r||matchHeaderValue(n,n[c],c,r))&&(delete n[c],o=!0)}}return utils$1.isArray(t)?t.forEach(s):s(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const s=r[n];(!t||matchHeaderValue(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const r=this,n={};return utils$1.forEach(this,(o,s)=>{const a=utils$1.findKey(n,s);if(a){r[a]=normalizeValue(o),delete r[s];return}const c=t?formatHeader(s):String(s).trim();c!==s&&delete r[s],r[c]=normalizeValue(o),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return utils$1.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&utils$1.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[$internals]=this[$internals]={accessors:{}}).accessors,o=this.prototype;function s(a){const c=normalizeHeader(a);n[c]||(buildAccessors(o,a),n[c]=!0)}return utils$1.isArray(t)?t.forEach(s):s(t),this}}AxiosHeaders.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);utils$1.reduceDescriptors(AxiosHeaders.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});utils$1.freezeMethods(AxiosHeaders);const AxiosHeaders$1=AxiosHeaders;function transformData(e,t){const r=this||defaults$1,n=t||r,o=AxiosHeaders$1.from(n.headers);let s=n.data;return utils$1.forEach(e,function(c){s=c.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function isCancel(e){return!!(e&&e.__CANCEL__)}function CanceledError(e,t,r){AxiosError.call(this,e??"canceled",AxiosError.ERR_CANCELED,t,r),this.name="CanceledError"}utils$1.inherits(CanceledError,AxiosError,{__CANCEL__:!0});function settle(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new AxiosError("Request failed with status code "+r.status,[AxiosError.ERR_BAD_REQUEST,AxiosError.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const cookies=platform.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const a=[e+"="+encodeURIComponent(t)];utils$1.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),utils$1.isString(n)&&a.push("path="+n),utils$1.isString(o)&&a.push("domain="+o),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function isAbsoluteURL(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function combineURLs(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function buildFullPath(e,t){return e&&!isAbsoluteURL(t)?combineURLs(e,t):t}const isURLSameOrigin=platform.hasStandardBrowserEnv?function e(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(s){let a=s;return t&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(a){const c=utils$1.isString(a)?o(a):a;return c.protocol===n.protocol&&c.host===n.host}}():function e(){return function(){return!0}}();function parseProtocol(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function speedometer(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,s=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),f=n[s];a||(a=u),r[o]=l,n[o]=u;let d=s,m=0;for(;d!==o;)m+=r[d++],d=d%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-a<t)return;const g=f&&u-f;return g?Math.round(m*1e3/g):void 0}}function progressEventReducer(e,t){let r=0;const n=speedometer(50,250);return o=>{const s=o.loaded,a=o.lengthComputable?o.total:void 0,c=s-r,l=n(c),u=s<=a;r=s;const f={loaded:s,total:a,progress:a?s/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-s)/l:void 0,event:o};f[t?"download":"upload"]=!0,e(f)}}const isXHRAdapterSupported=typeof XMLHttpRequest<"u",xhrAdapter=isXHRAdapterSupported&&function(e){return new Promise(function(r,n){let o=e.data;const s=AxiosHeaders$1.from(e.headers).normalize();let{responseType:a,withXSRFToken:c}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(utils$1.isFormData(o)){if(platform.hasStandardBrowserEnv||platform.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((f=s.getContentType())!==!1){const[p,..._]=f?f.split(";").map(E=>E.trim()).filter(Boolean):[];s.setContentType([p||"multipart/form-data",..._].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+_))}const m=buildFullPath(e.baseURL,e.url);d.open(e.method.toUpperCase(),buildURL(m,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function g(){if(!d)return;const p=AxiosHeaders$1.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:p,config:e,request:d};settle(function(y){r(y),u()},function(y){n(y),u()},E),d=null}if("onloadend"in d?d.onloadend=g:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(g)},d.onabort=function(){d&&(n(new AxiosError("Request aborted",AxiosError.ECONNABORTED,e,d)),d=null)},d.onerror=function(){n(new AxiosError("Network Error",AxiosError.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||transitionalDefaults;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),n(new AxiosError(_,E.clarifyTimeoutError?AxiosError.ETIMEDOUT:AxiosError.ECONNABORTED,e,d)),d=null},platform.hasStandardBrowserEnv&&(c&&utils$1.isFunction(c)&&(c=c(e)),c||c!==!1&&isURLSameOrigin(m))){const p=e.xsrfHeaderName&&e.xsrfCookieName&&cookies.read(e.xsrfCookieName);p&&s.set(e.xsrfHeaderName,p)}o===void 0&&s.setContentType(null),"setRequestHeader"in d&&utils$1.forEach(s.toJSON(),function(_,E){d.setRequestHeader(E,_)}),utils$1.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),a&&a!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",progressEventReducer(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",progressEventReducer(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=p=>{d&&(n(!p||p.type?new CanceledError(null,e,d):p),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const h=parseProtocol(m);if(h&&platform.protocols.indexOf(h)===-1){n(new AxiosError("Unsupported protocol "+h+":",AxiosError.ERR_BAD_REQUEST,e));return}d.send(o||null)})},knownAdapters={http:httpAdapter,xhr:xhrAdapter};utils$1.forEach(knownAdapters,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const renderReason=e=>`- ${e}`,isResolvedHandle=e=>utils$1.isFunction(e)||e===null||e===!1,adapters={getAdapter:e=>{e=utils$1.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let s=0;s<t;s++){r=e[s];let a;if(n=r,!isResolvedHandle(r)&&(n=knownAdapters[(a=String(r)).toLowerCase()],n===void 0))throw new AxiosError(`Unknown adapter '${a}'`);if(n)break;o[a||"#"+s]=n}if(!n){const s=Object.entries(o).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?s.length>1?`since :
`+s.map(renderReason).join(`
`):" "+renderReason(s[0]):"as no adapter specified";throw new AxiosError("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return n},adapters:knownAdapters};function throwIfCancellationRequested(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new CanceledError(null,e)}function dispatchRequest(e){return throwIfCancellationRequested(e),e.headers=AxiosHeaders$1.from(e.headers),e.data=transformData.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),adapters.getAdapter(e.adapter||defaults$1.adapter)(e).then(function(n){return throwIfCancellationRequested(e),n.data=transformData.call(e,e.transformResponse,n),n.headers=AxiosHeaders$1.from(n.headers),n},function(n){return isCancel(n)||(throwIfCancellationRequested(e),n&&n.response&&(n.response.data=transformData.call(e,e.transformResponse,n.response),n.response.headers=AxiosHeaders$1.from(n.response.headers))),Promise.reject(n)})}const headersToObject=e=>e instanceof AxiosHeaders$1?{...e}:e;function mergeConfig(e,t){t=t||{};const r={};function n(u,f,d){return utils$1.isPlainObject(u)&&utils$1.isPlainObject(f)?utils$1.merge.call({caseless:d},u,f):utils$1.isPlainObject(f)?utils$1.merge({},f):utils$1.isArray(f)?f.slice():f}function o(u,f,d){if(utils$1.isUndefined(f)){if(!utils$1.isUndefined(u))return n(void 0,u,d)}else return n(u,f,d)}function s(u,f){if(!utils$1.isUndefined(f))return n(void 0,f)}function a(u,f){if(utils$1.isUndefined(f)){if(!utils$1.isUndefined(u))return n(void 0,u)}else return n(void 0,f)}function c(u,f,d){if(d in t)return n(u,f);if(d in e)return n(void 0,u)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c,headers:(u,f)=>o(headersToObject(u),headersToObject(f),!0)};return utils$1.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=l[f]||o,m=d(e[f],t[f],f);utils$1.isUndefined(m)&&d!==c||(r[f]=m)}),r}const VERSION="1.6.8",validators$1={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{validators$1[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const deprecatedWarnings={};validators$1.transitional=function e(t,r,n){function o(s,a){return"[Axios v"+VERSION+"] Transitional option '"+s+"'"+a+(n?". "+n:"")}return(s,a,c)=>{if(t===!1)throw new AxiosError(o(a," has been removed"+(r?" in "+r:"")),AxiosError.ERR_DEPRECATED);return r&&!deprecatedWarnings[a]&&(deprecatedWarnings[a]=!0,console.warn(o(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,a,c):!0}};function assertOptions(e,t,r){if(typeof e!="object")throw new AxiosError("options must be an object",AxiosError.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],a=t[s];if(a){const c=e[s],l=c===void 0||a(c,s,e);if(l!==!0)throw new AxiosError("option "+s+" must be "+l,AxiosError.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new AxiosError("Unknown option "+s,AxiosError.ERR_BAD_OPTION)}}const validator={assertOptions,validators:validators$1},validators=validator.validators;class Axios{constructor(t){this.defaults=t,this.interceptors={request:new InterceptorManager$1,response:new InterceptorManager$1}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=mergeConfig(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&validator.assertOptions(n,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},!1),o!=null&&(utils$1.isFunction(o)?r.paramsSerializer={serialize:o}:validator.assertOptions(o,{encode:validators.function,serialize:validators.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let a=s&&utils$1.merge(s.common,s[r.method]);s&&utils$1.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),r.headers=AxiosHeaders$1.concat(a,s);const c=[];let l=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(l=l&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const u=[];this.interceptors.response.forEach(function(p){u.push(p.fulfilled,p.rejected)});let f,d=0,m;if(!l){const h=[dispatchRequest.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,u),m=h.length,f=Promise.resolve(r);d<m;)f=f.then(h[d++],h[d++]);return f}m=c.length;let g=r;for(d=0;d<m;){const h=c[d++],p=c[d++];try{g=h(g)}catch(_){p.call(this,_);break}}try{f=dispatchRequest.call(this,g)}catch(h){return Promise.reject(h)}for(d=0,m=u.length;d<m;)f=f.then(u[d++],u[d++]);return f}getUri(t){t=mergeConfig(this.defaults,t);const r=buildFullPath(t.baseURL,t.url);return buildURL(r,t.params,t.paramsSerializer)}}utils$1.forEach(["delete","get","head","options"],function e(t){Axios.prototype[t]=function(r,n){return this.request(mergeConfig(n||{},{method:t,url:r,data:(n||{}).data}))}});utils$1.forEach(["post","put","patch"],function e(t){function r(n){return function(s,a,c){return this.request(mergeConfig(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Axios.prototype[t]=r(),Axios.prototype[t+"Form"]=r(!0)});const Axios$1=Axios;class CancelToken{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s;const a=new Promise(c=>{n.subscribe(c),s=c}).then(o);return a.cancel=function(){n.unsubscribe(s)},a},t(function(s,a,c){n.reason||(n.reason=new CanceledError(s,a,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new CancelToken(function(o){t=o}),cancel:t}}}const CancelToken$1=CancelToken;function spread(e){return function(r){return e.apply(null,r)}}function isAxiosError(e){return utils$1.isObject(e)&&e.isAxiosError===!0}const HttpStatusCode={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(HttpStatusCode).forEach(([e,t])=>{HttpStatusCode[t]=e});const HttpStatusCode$1=HttpStatusCode;function createInstance(e){const t=new Axios$1(e),r=bind(Axios$1.prototype.request,t);return utils$1.extend(r,Axios$1.prototype,t,{allOwnKeys:!0}),utils$1.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return createInstance(mergeConfig(e,o))},r}const axios=createInstance(defaults$1);axios.Axios=Axios$1;axios.CanceledError=CanceledError;axios.CancelToken=CancelToken$1;axios.isCancel=isCancel;axios.VERSION=VERSION;axios.toFormData=toFormData;axios.AxiosError=AxiosError;axios.Cancel=axios.CanceledError;axios.all=function e(t){return Promise.all(t)};axios.spread=spread;axios.isAxiosError=isAxiosError;axios.mergeConfig=mergeConfig;axios.AxiosHeaders=AxiosHeaders$1;axios.formToJSON=e=>formDataToJSON(utils$1.isHTMLForm(e)?new FormData(e):e);axios.getAdapter=adapters.getAdapter;axios.HttpStatusCode=HttpStatusCode$1;axios.default=axios;const axios$1=axios,githubMarkdown="",atomOneLight="",_sfc_main$2=defineComponent({name:"MDRender",props:{markdown:{type:String,required:!0}}});function _sfc_render$1(e,t,r,n,o,s){const a=resolveComponent("v-md-preview");return openBlock(),createBlock(a,{text:e.markdown},null,8,["text"])}const MDRender=_export_sfc(_sfc_main$2,[["render",_sfc_render$1]]),put=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},get=e=>localStorage.getItem(e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const stringToByteArray$1=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},byteArrayToString=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[r++];t[n++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[r++],a=e[r++],c=e[r++],l=((o&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const s=e[r++],a=e[r++];t[n++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<e.length;o+=3){const s=e[o],a=o+1<e.length,c=a?e[o+1]:0,l=o+2<e.length,u=l?e[o+2]:0,f=s>>2,d=(s&3)<<4|c>>4;let m=(c&15)<<2|u>>6,g=u&63;l||(g=64,a||(m=64)),n.push(r[f],r[d],r[m],r[g])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(stringToByteArray$1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):byteArrayToString(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<e.length;){const s=r[e.charAt(o++)],c=o<e.length?r[e.charAt(o)]:0;++o;const u=o<e.length?r[e.charAt(o)]:64;++o;const d=o<e.length?r[e.charAt(o)]:64;if(++o,s==null||c==null||u==null||d==null)throw new DecodeBase64StringError;const m=s<<2|c>>4;if(n.push(m),u!==64){const g=c<<4&240|u>>2;if(n.push(g),d!==64){const h=u<<6&192|d;n.push(h)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const base64Encode=function(e){const t=stringToByteArray$1(e);return base64.encodeByteArray(t,!0)},base64urlEncodeWithoutPadding=function(e){return base64Encode(e).replace(/\./g,"")},base64Decode=function(e){try{return base64.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getGlobal(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof _global$1<"u")return _global$1;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const getDefaultsFromGlobal=()=>getGlobal().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},getDefaultsFromCookie=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&base64Decode(e[1]);return t&&JSON.parse(t)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},getDefaultEmulatorHost=e=>{var t,r;return(r=(t=getDefaults())===null||t===void 0?void 0:t.emulatorHosts)===null||r===void 0?void 0:r[e]},getDefaultAppConfig=()=>{var e;return(e=getDefaults())===null||e===void 0?void 0:e.config},getExperimentalSetting=e=>{var t;return(t=getDefaults())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function isMobileCordova(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isBrowserExtension(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function isReactNative(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function isIE(){const e=getUA();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function isIndexedDBAvailable(){try{return typeof indexedDB=="object"}catch{return!1}}function validateIndexedDBOpenable(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERROR_NAME="FirebaseError";class FirebaseError extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=ERROR_NAME,Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}}class ErrorFactory{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?replaceTemplate(s,n):"Error",c=`${this.serviceName}: ${a} (${o}).`;return new FirebaseError(o,c,n)}}function replaceTemplate(e,t){return e.replace(PATTERN,(r,n)=>{const o=t[n];return o!=null?String(o):`<${n}?>`})}const PATTERN=/\{\$([^}]+)}/g;function isEmpty(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function deepEqual(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const o of r){if(!n.includes(o))return!1;const s=e[o],a=t[o];if(isObject(s)&&isObject(a)){if(!deepEqual(s,a))return!1}else if(s!==a)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function isObject(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(o=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function createSubscribe(e,t){const r=new ObserverProxy(e,t);return r.subscribe.bind(r)}class ObserverProxy{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,n){let o;if(t===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");implementsAnyMethods(t,["next","error","complete"])?o=t:o={next:t,error:r,complete:n},o.next===void 0&&(o.next=noop),o.error===void 0&&(o.error=noop),o.complete===void 0&&(o.complete=noop);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function implementsAnyMethods(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function noop(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(e){return e&&e._delegate?e._delegate:e}class Component{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME$1="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Provider{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new Deferred;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&n.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(isComponentEager(t))try{this.getOrInitializeService({instanceIdentifier:DEFAULT_ENTRY_NAME$1})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const s=this.getOrInitializeService({instanceIdentifier:o});n.resolve(s)}catch{}}}}clearInstance(t=DEFAULT_ENTRY_NAME$1){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=DEFAULT_ENTRY_NAME$1){return this.instances.has(t)}getOptions(t=DEFAULT_ENTRY_NAME$1){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&a.resolve(o)}return o}onInit(t,r){var n;const o=this.normalizeInstanceIdentifier(r),s=(n=this.onInitCallbacks.get(o))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&t(a,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(n)for(const o of n)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=DEFAULT_ENTRY_NAME$1){return this.component?this.component.multipleInstances?t:DEFAULT_ENTRY_NAME$1:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function normalizeIdentifierForFactory(e){return e===DEFAULT_ENTRY_NAME$1?void 0:e}function isComponentEager(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ComponentContainer{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new Provider(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var LogLevel;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(LogLevel||(LogLevel={}));const levelStringToEnum={debug:LogLevel.DEBUG,verbose:LogLevel.VERBOSE,info:LogLevel.INFO,warn:LogLevel.WARN,error:LogLevel.ERROR,silent:LogLevel.SILENT},defaultLogLevel=LogLevel.INFO,ConsoleMethod={[LogLevel.DEBUG]:"log",[LogLevel.VERBOSE]:"log",[LogLevel.INFO]:"info",[LogLevel.WARN]:"warn",[LogLevel.ERROR]:"error"},defaultLogHandler=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),o=ConsoleMethod[t];if(o)console[o](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Logger{constructor(t){this.name=t,this._logLevel=defaultLogLevel,this._logHandler=defaultLogHandler,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in LogLevel))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?levelStringToEnum[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,LogLevel.DEBUG,...t),this._logHandler(this,LogLevel.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,LogLevel.VERBOSE,...t),this._logHandler(this,LogLevel.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,LogLevel.INFO,...t),this._logHandler(this,LogLevel.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,LogLevel.WARN,...t),this._logHandler(this,LogLevel.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,LogLevel.ERROR,...t),this._logHandler(this,LogLevel.ERROR,...t)}}const instanceOfAny=(e,t)=>t.some(r=>e instanceof r);let idbProxyableTypes,cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes||(idbProxyableTypes=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return cursorAdvanceMethods||(cursorAdvanceMethods=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cursorRequestMap=new WeakMap,transactionDoneMap=new WeakMap,transactionStoreNamesMap=new WeakMap,transformCache=new WeakMap,reverseTransformCache=new WeakMap;function promisifyRequest(e){const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{r(wrap(e.result)),o()},a=()=>{n(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&cursorRequestMap.set(r,e)}).catch(()=>{}),reverseTransformCache.set(t,e),t}function cacheDonePromiseForTransaction(e){if(transactionDoneMap.has(e))return;const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{r(),o()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});transactionDoneMap.set(e,t)}let idbProxyTraps={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return transactionDoneMap.get(e);if(t==="objectStoreNames")return e.objectStoreNames||transactionStoreNamesMap.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wrap(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function replaceTraps(e){idbProxyTraps=e(idbProxyTraps)}function wrapFunction(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(unwrap(this),t,...r);return transactionStoreNamesMap.set(n,t.sort?t.sort():[t]),wrap(n)}:getCursorAdvanceMethods().includes(e)?function(...t){return e.apply(unwrap(this),t),wrap(cursorRequestMap.get(this))}:function(...t){return wrap(e.apply(unwrap(this),t))}}function transformCachableValue(e){return typeof e=="function"?wrapFunction(e):(e instanceof IDBTransaction&&cacheDonePromiseForTransaction(e),instanceOfAny(e,getIdbProxyableTypes())?new Proxy(e,idbProxyTraps):e)}function wrap(e){if(e instanceof IDBRequest)return promisifyRequest(e);if(transformCache.has(e))return transformCache.get(e);const t=transformCachableValue(e);return t!==e&&(transformCache.set(e,t),reverseTransformCache.set(t,e)),t}const unwrap=e=>reverseTransformCache.get(e);function openDB(e,t,{blocked:r,upgrade:n,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),c=wrap(a);return n&&a.addEventListener("upgradeneeded",l=>{n(wrap(a.result),l.oldVersion,l.newVersion,wrap(a.transaction),l)}),r&&a.addEventListener("blocked",l=>r(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),o&&l.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const readMethods=["get","getKey","getAll","getAllKeys","count"],writeMethods=["put","add","delete","clear"],cachedMethods=new Map;function getMethod(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cachedMethods.get(t))return cachedMethods.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,o=writeMethods.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(o||readMethods.includes(r)))return;const s=async function(a,...c){const l=this.transaction(a,o?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(c.shift())),(await Promise.all([u[r](...c),o&&l.done]))[0]};return cachedMethods.set(t,s),s}replaceTraps(e=>({...e,get:(t,r,n)=>getMethod(t,r)||e.get(t,r,n),has:(t,r)=>!!getMethod(t,r)||e.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PlatformLoggerServiceImpl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(isVersionServiceProvider(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function isVersionServiceProvider(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const name$p="@firebase/app",version$1$1="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logger=new Logger("@firebase/app"),name$o="@firebase/app-compat",name$n="@firebase/analytics-compat",name$m="@firebase/analytics",name$l="@firebase/app-check-compat",name$k="@firebase/app-check",name$j="@firebase/auth",name$i="@firebase/auth-compat",name$h="@firebase/database",name$g="@firebase/database-compat",name$f="@firebase/functions",name$e="@firebase/functions-compat",name$d="@firebase/installations",name$c="@firebase/installations-compat",name$b="@firebase/messaging",name$a="@firebase/messaging-compat",name$9="@firebase/performance",name$8="@firebase/performance-compat",name$7="@firebase/remote-config",name$6="@firebase/remote-config-compat",name$5="@firebase/storage",name$4="@firebase/storage-compat",name$3="@firebase/firestore",name$2="@firebase/vertexai-preview",name$1$1="@firebase/firestore-compat",name$q="firebase",version$2="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME="[DEFAULT]",PLATFORM_LOG_STRING={[name$p]:"fire-core",[name$o]:"fire-core-compat",[name$m]:"fire-analytics",[name$n]:"fire-analytics-compat",[name$k]:"fire-app-check",[name$l]:"fire-app-check-compat",[name$j]:"fire-auth",[name$i]:"fire-auth-compat",[name$h]:"fire-rtdb",[name$g]:"fire-rtdb-compat",[name$f]:"fire-fn",[name$e]:"fire-fn-compat",[name$d]:"fire-iid",[name$c]:"fire-iid-compat",[name$b]:"fire-fcm",[name$a]:"fire-fcm-compat",[name$9]:"fire-perf",[name$8]:"fire-perf-compat",[name$7]:"fire-rc",[name$6]:"fire-rc-compat",[name$5]:"fire-gcs",[name$4]:"fire-gcs-compat",[name$3]:"fire-fst",[name$1$1]:"fire-fst-compat",[name$2]:"fire-vertex","fire-js":"fire-js",[name$q]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _apps=new Map,_serverApps=new Map,_components=new Map;function _addComponent(e,t){try{e.container.addComponent(t)}catch(r){logger.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function _registerComponent(e){const t=e.name;if(_components.has(t))return logger.debug(`There were multiple attempts to register component ${t}.`),!1;_components.set(t,e);for(const r of _apps.values())_addComponent(r,e);for(const r of _serverApps.values())_addComponent(r,e);return!0}function _getProvider(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function _isFirebaseServerApp(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERRORS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ERROR_FACTORY=new ErrorFactory("app","Firebase",ERRORS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirebaseAppImpl{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ERROR_FACTORY.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SDK_VERSION=version$2;function initializeApp(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const n=Object.assign({name:DEFAULT_ENTRY_NAME,automaticDataCollectionEnabled:!1},t),o=n.name;if(typeof o!="string"||!o)throw ERROR_FACTORY.create("bad-app-name",{appName:String(o)});if(r||(r=getDefaultAppConfig()),!r)throw ERROR_FACTORY.create("no-options");const s=_apps.get(o);if(s){if(deepEqual(r,s.options)&&deepEqual(n,s.config))return s;throw ERROR_FACTORY.create("duplicate-app",{appName:o})}const a=new ComponentContainer(o);for(const l of _components.values())a.addComponent(l);const c=new FirebaseAppImpl(r,n,a);return _apps.set(o,c),c}function getApp(e=DEFAULT_ENTRY_NAME){const t=_apps.get(e);if(!t&&e===DEFAULT_ENTRY_NAME&&getDefaultAppConfig())return initializeApp();if(!t)throw ERROR_FACTORY.create("no-app",{appName:e});return t}function registerVersion(e,t,r){var n;let o=(n=PLATFORM_LOG_STRING[e])!==null&&n!==void 0?n:e;r&&(o+=`-${r}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const c=[`Unable to register library "${o}" with version "${t}":`];s&&c.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),logger.warn(c.join(" "));return}_registerComponent(new Component(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB_NAME$1="firebase-heartbeat-database",DB_VERSION$1=1,STORE_NAME="firebase-heartbeat-store";let dbPromise=null;function getDbPromise(){return dbPromise||(dbPromise=openDB(DB_NAME$1,DB_VERSION$1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(STORE_NAME)}catch(r){console.warn(r)}}}}).catch(e=>{throw ERROR_FACTORY.create("idb-open",{originalErrorMessage:e.message})})),dbPromise}async function readHeartbeatsFromIndexedDB(e){try{const r=(await getDbPromise()).transaction(STORE_NAME),n=await r.objectStore(STORE_NAME).get(computeKey(e));return await r.done,n}catch(t){if(t instanceof FirebaseError)logger.warn(t.message);else{const r=ERROR_FACTORY.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});logger.warn(r.message)}}}async function writeHeartbeatsToIndexedDB(e,t){try{const n=(await getDbPromise()).transaction(STORE_NAME,"readwrite");await n.objectStore(STORE_NAME).put(t,computeKey(e)),await n.done}catch(r){if(r instanceof FirebaseError)logger.warn(r.message);else{const n=ERROR_FACTORY.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});logger.warn(n.message)}}}function computeKey(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MAX_HEADER_BYTES=1024,STORED_HEARTBEAT_RETENTION_MAX_MILLIS=30*24*60*60*1e3;class HeartbeatServiceImpl{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,r;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=getUTCDateString();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=STORED_HEARTBEAT_RETENTION_MAX_MILLIS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=getUTCDateString(),{heartbeatsToSend:n,unsentEntries:o}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),s=base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function getUTCDateString(){return new Date().toISOString().substring(0,10)}function extractHeartbeatsForHeader(e,t=MAX_HEADER_BYTES){const r=[];let n=e.slice();for(const o of e){const s=r.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),countBytes(r)>t){s.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),countBytes(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class HeartbeatStorageImpl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return isIndexedDBAvailable()?validateIndexedDBOpenable().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await readHeartbeatsFromIndexedDB(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function countBytes(e){return base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function registerCoreComponents(e){_registerComponent(new Component("platform-logger",t=>new PlatformLoggerServiceImpl(t),"PRIVATE")),_registerComponent(new Component("heartbeat",t=>new HeartbeatServiceImpl(t),"PRIVATE")),registerVersion(name$p,version$1$1,e),registerVersion(name$p,version$1$1,"esm2017"),registerVersion("fire-js","")}registerCoreComponents("");var name$1="firebase",version$1="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */registerVersion(name$1,version$1,"app");function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}typeof SuppressedError=="function"&&SuppressedError;function _prodErrorMap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const prodErrorMap=_prodErrorMap,_DEFAULT_AUTH_ERROR_FACTORY=new ErrorFactory("auth","Firebase",_prodErrorMap());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logClient=new Logger("@firebase/auth");function _logWarn(e,...t){logClient.logLevel<=LogLevel.WARN&&logClient.warn(`Auth (${SDK_VERSION}): ${e}`,...t)}function _logError(e,...t){logClient.logLevel<=LogLevel.ERROR&&logClient.error(`Auth (${SDK_VERSION}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _fail(e,...t){throw createErrorInternal(e,...t)}function _createError(e,...t){return createErrorInternal(e,...t)}function _errorWithCustomMessage(e,t,r){const n=Object.assign(Object.assign({},prodErrorMap()),{[t]:r});return new ErrorFactory("auth","Firebase",n).create(t,{appName:e.name})}function _serverAppCurrentUserOperationNotSupportedError(e){return _errorWithCustomMessage(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _assertInstanceOf(e,t,r){const n=r;if(!(t instanceof n))throw n.name!==t.constructor.name&&_fail(e,"argument-error"),_errorWithCustomMessage(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function createErrorInternal(e,...t){if(typeof e!="string"){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return _DEFAULT_AUTH_ERROR_FACTORY.create(e,...t)}function _assert(e,t,...r){if(!e)throw createErrorInternal(t,...r)}function debugFail(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _logError(t),new Error(t)}function debugAssert(e,t){e||debugFail(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getCurrentUrl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function _isHttpOrHttps(){return _getCurrentScheme()==="http:"||_getCurrentScheme()==="https:"}function _getCurrentScheme(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isOnline(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_isHttpOrHttps()||isBrowserExtension()||"connection"in navigator)?navigator.onLine:!0}function _getUserLanguage(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Delay{constructor(t,r){this.shortDelay=t,this.longDelay=r,debugAssert(r>t,"Short delay should be less than long delay!"),this.isMobile=isMobileCordova()||isReactNative()}get(){return _isOnline()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _emulatorUrl(e,t){debugAssert(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FetchProvider{static initialize(t,r,n){this.fetchImpl=t,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SERVER_ERROR_MAP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_API_TIMEOUT_MS=new Delay(3e4,6e4);function _addTidIfNecessary(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _performApiRequest(e,t,r,n,o={}){return _performFetchWithErrorHandling(e,o,async()=>{let s={},a={};n&&(t==="GET"?a=n:s={body:JSON.stringify(n)});const c=querystring(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),FetchProvider.fetch()(_getFinalTarget(e,e.config.apiHost,r,c),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function _performFetchWithErrorHandling(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},SERVER_ERROR_MAP),t);try{const o=new NetworkTimeout(e),s=await Promise.race([r(),o.promise]);o.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw _makeTaggedError(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _makeTaggedError(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw _makeTaggedError(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw _makeTaggedError(e,"user-disabled",a);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _errorWithCustomMessage(e,f,u);_fail(e,f)}}catch(o){if(o instanceof FirebaseError)throw o;_fail(e,"network-request-failed",{message:String(o)})}}async function _performSignInRequest(e,t,r,n,o={}){const s=await _performApiRequest(e,t,r,n,o);return"mfaPendingCredential"in s&&_fail(e,"multi-factor-auth-required",{_serverResponse:s}),s}function _getFinalTarget(e,t,r,n){const o=`${t}${r}?${n}`;return e.config.emulator?_emulatorUrl(e.config,o):`${e.config.apiScheme}://${o}`}class NetworkTimeout{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(_createError(this.auth,"network-request-failed")),DEFAULT_API_TIMEOUT_MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _makeTaggedError(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const o=_createError(e,t,n);return o.customData._tokenResponse=r,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function deleteAccount(e,t){return _performApiRequest(e,"POST","/v1/accounts:delete",t)}async function getAccountInfo(e,t){return _performApiRequest(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function utcTimestampToDateString(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function getIdTokenResult(e,t=!1){const r=getModularInstance(e),n=await r.getIdToken(t),o=_parseToken(n);_assert(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const s=typeof o.firebase=="object"?o.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:o,token:n,authTime:utcTimestampToDateString(secondsStringToMilliseconds(o.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(o.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(o.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function secondsStringToMilliseconds(e){return Number(e)*1e3}function _parseToken(e){const[t,r,n]=e.split(".");if(t===void 0||r===void 0||n===void 0)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{const o=base64Decode(r);return o?JSON.parse(o):(_logError("Failed to decode base64 JWT payload"),null)}catch(o){return _logError("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function _tokenExpiresIn(e){const t=_parseToken(e);return _assert(t,"internal-error"),_assert(typeof t.exp<"u","internal-error"),_assert(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _logoutIfInvalidated(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof FirebaseError&&isUserInvalidated(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function isUserInvalidated({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ProactiveRefresh{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const o=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UserMetadata{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reloadWithoutSaving(e){var t;const r=e.auth,n=await e.getIdToken(),o=await _logoutIfInvalidated(e,getAccountInfo(r,{idToken:n}));_assert(o==null?void 0:o.users.length,r,"internal-error");const s=o.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?extractProviderData(s.providerUserInfo):[],c=mergeProviderData(e.providerData,a),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new UserMetadata(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,d)}async function reload(e){const t=getModularInstance(e);await _reloadWithoutSaving(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function mergeProviderData(e,t){return[...e.filter(n=>!t.some(o=>o.providerId===n.providerId)),...t]}function extractProviderData(e){return e.map(t=>{var{providerId:r}=t,n=__rest(t,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function requestStsToken(e,t){const r=await _performFetchWithErrorHandling(e,{},async()=>{const n=querystring({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:s}=e.config,a=_getFinalTarget(e,o,"/v1/token",`key=${s}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(a,{method:"POST",headers:c,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function revokeToken(e,t){return _performApiRequest(e,"POST","/v2/accounts:revokeToken",_addTidIfNecessary(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_assert(t.idToken,"internal-error"),_assert(typeof t.idToken<"u","internal-error"),_assert(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_tokenExpiresIn(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){_assert(t.length!==0,"internal-error");const r=_tokenExpiresIn(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(_assert(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:n,refreshToken:o,expiresIn:s}=await requestStsToken(t,r);this.updateTokensAndExpiration(n,o,Number(s))}updateTokensAndExpiration(t,r,n){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,r){const{refreshToken:n,accessToken:o,expirationTime:s}=r,a=new StsTokenManager;return n&&(_assert(typeof n=="string","internal-error",{appName:t}),a.refreshToken=n),o&&(_assert(typeof o=="string","internal-error",{appName:t}),a.accessToken=o),s&&(_assert(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function assertStringOrUndefined(e,t){_assert(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class UserImpl{constructor(t){var{uid:r,auth:n,stsTokenManager:o}=t,s=__rest(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new UserMetadata(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const r=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,t));return _assert(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return getIdTokenResult(this,t)}reload(){return reload(this)}_assign(t){this!==t&&(_assert(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new UserImpl(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),r&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_isFirebaseServerApp(this.auth.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));const t=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var n,o,s,a,c,l,u,f;const d=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(o=r.email)!==null&&o!==void 0?o:void 0,g=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,h=(a=r.photoURL)!==null&&a!==void 0?a:void 0,p=(c=r.tenantId)!==null&&c!==void 0?c:void 0,_=(l=r._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=r.createdAt)!==null&&u!==void 0?u:void 0,A=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:y,emailVerified:S,isAnonymous:T,providerData:w,stsTokenManager:I}=r;_assert(y&&I,t,"internal-error");const C=StsTokenManager.fromJSON(this.name,I);_assert(typeof y=="string",t,"internal-error"),assertStringOrUndefined(d,t.name),assertStringOrUndefined(m,t.name),_assert(typeof S=="boolean",t,"internal-error"),_assert(typeof T=="boolean",t,"internal-error"),assertStringOrUndefined(g,t.name),assertStringOrUndefined(h,t.name),assertStringOrUndefined(p,t.name),assertStringOrUndefined(_,t.name),assertStringOrUndefined(E,t.name),assertStringOrUndefined(A,t.name);const b=new UserImpl({uid:y,auth:t,email:m,emailVerified:S,displayName:d,isAnonymous:T,photoURL:h,phoneNumber:g,tenantId:p,stsTokenManager:C,createdAt:E,lastLoginAt:A});return w&&Array.isArray(w)&&(b.providerData=w.map(O=>Object.assign({},O))),_&&(b._redirectEventId=_),b}static async _fromIdTokenResponse(t,r,n=!1){const o=new StsTokenManager;o.updateFromServerResponse(r);const s=new UserImpl({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:n});return await _reloadWithoutSaving(s),s}static async _fromGetAccountInfoResponse(t,r,n){const o=r.users[0];_assert(o.localId!==void 0,"internal-error");const s=o.providerUserInfo!==void 0?extractProviderData(o.providerUserInfo):[],a=!(o.email&&o.passwordHash)&&!(s!=null&&s.length),c=new StsTokenManager;c.updateFromIdToken(n);const l=new UserImpl({uid:o.localId,auth:t,stsTokenManager:c,isAnonymous:a}),u={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new UserMetadata(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const instanceCache=new Map;function _getInstance(e){debugAssert(e instanceof Function,"Expected a class definition");let t=instanceCache.get(e);return t?(debugAssert(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,instanceCache.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}InMemoryPersistence.type="NONE";const inMemoryPersistence=InMemoryPersistence;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _persistenceKeyName(e,t,r){return`firebase:${e}:${t}:${r}`}class PersistenceUserManager{constructor(t,r,n){this.persistence=t,this.auth=r,this.userKey=n;const{config:o,name:s}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,o.apiKey,s),this.fullPersistenceKey=_persistenceKeyName("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?UserImpl._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,n="authUser"){if(!r.length)return new PersistenceUserManager(_getInstance(inMemoryPersistence),t,n);const o=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=o[0]||_getInstance(inMemoryPersistence);const a=_persistenceKeyName(n,t.config.apiKey,t.name);let c=null;for(const u of r)try{const f=await u._get(a);if(f){const d=UserImpl._fromJSON(t,f);u!==s&&(c=d),s=u;break}}catch{}const l=o.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new PersistenceUserManager(s,t,n):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(r.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new PersistenceUserManager(s,t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getBrowserName(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_isIEMobile(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_isFirefox(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_isBlackBerry(t))return"Blackberry";if(_isWebOS(t))return"Webos";if(_isSafari(t))return"Safari";if((t.includes("chrome/")||_isChromeIOS(t))&&!t.includes("edge/"))return"Chrome";if(_isAndroid(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function _isFirefox(e=getUA()){return/firefox\//i.test(e)}function _isSafari(e=getUA()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _isChromeIOS(e=getUA()){return/crios\//i.test(e)}function _isIEMobile(e=getUA()){return/iemobile/i.test(e)}function _isAndroid(e=getUA()){return/android/i.test(e)}function _isBlackBerry(e=getUA()){return/blackberry/i.test(e)}function _isWebOS(e=getUA()){return/webos/i.test(e)}function _isIOS(e=getUA()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _isIOSStandalone(e=getUA()){var t;return _isIOS(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function _isIE10(){return isIE()&&document.documentMode===10}function _isMobileBrowser(e=getUA()){return _isIOS(e)||_isAndroid(e)||_isWebOS(e)||_isBlackBerry(e)||/windows phone/i.test(e)||_isIEMobile(e)}function _isIframe(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getClientVersion(e,t=[]){let r;switch(e){case"Browser":r=_getBrowserName(getUA());break;case"Worker":r=`${_getBrowserName(getUA())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${SDK_VERSION}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthMiddlewareQueue{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const n=s=>new Promise((a,c)=>{try{const l=t(s);a(l)}catch(l){c(l)}});n.onAbort=r,this.queue.push(n);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const n of this.queue)await n(t),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getPasswordPolicy(e,t={}){return _performApiRequest(e,"GET","/v2/passwordPolicy",_addTidIfNecessary(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MINIMUM_MIN_PASSWORD_LENGTH=6;class PasswordPolicyImpl{constructor(t){var r,n,o,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=a.minPasswordLength)!==null&&r!==void 0?r:MINIMUM_MIN_PASSWORD_LENGTH,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(n=t.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,n,o,s,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(r=l.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(o=l.containsLowercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(t,r){const n=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=t.length>=n),o&&(r.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let o=0;o<t.length;o++)n=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,r,n,o,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthImpl{constructor(t,r,n,o){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_DEFAULT_AUTH_ERROR_FACTORY,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=_getInstance(r)),this._initializationPromise=this.queue(async()=>{var n,o;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,t),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await getAccountInfo(this,{idToken:t}),n=await UserImpl._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(_isFirebaseServerApp(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let o=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,c=o==null?void 0:o._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===c)&&(l!=null&&l.user)&&(o=l.user,s=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(o)}catch(a){o=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await _reloadWithoutSaving(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=_getUserLanguage()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(_isFirebaseServerApp(this.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));const r=t?getModularInstance(t):null;return r&&_assert(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&_assert(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return _isFirebaseServerApp(this.app)?Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return _isFirebaseServerApp(this.app)?Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _getPasswordPolicy(this),r=new PasswordPolicyImpl(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ErrorFactory("auth","Firebase",t())}onAuthStateChanged(t,r,n){return this.registerStateListener(this.authStateSubscription,t,r,n)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,n){return this.registerStateListener(this.idTokenSubscription,t,r,n)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged(()=>{n(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await revokeToken(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const n=await this.getOrInitRedirectPersistenceManager(r);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&_getInstance(t)||this._popupRedirectResolver;_assert(r,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,n,o){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(_assert(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof r=="function"){const l=t.addObserver(r,n,o);return()=>{a=!0,l()}}else{const l=t.addObserver(r);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const o=await this._getAppCheckToken();return o&&(r["X-Firebase-AppCheck"]=o),r}async _getAppCheckToken(){var t;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r!=null&&r.error&&_logWarn(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function _castAuth(e){return getModularInstance(e)}class Subscription{constructor(t){this.auth=t,this.observer=null,this.addObserver=createSubscribe(r=>this.observer=r)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let externalJSProvider={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _setExternalJSProvider(e){externalJSProvider=e}function _loadJS(e){return externalJSProvider.loadJS(e)}function _gapiScriptUrl(){return externalJSProvider.gapiScript}function _generateCallbackName(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function initializeAuth(e,t){const r=_getProvider(e,"auth");if(r.isInitialized()){const o=r.getImmediate(),s=r.getOptions();if(deepEqual(s,t??{}))return o;_fail(o,"already-initialized")}return r.initialize({options:t})}function _initializeAuthInstance(e,t){const r=(t==null?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(_getInstance);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}function connectAuthEmulator(e,t,r){const n=_castAuth(e);_assert(n._canInitEmulator,n,"emulator-config-failed"),_assert(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const o=!!(r!=null&&r.disableWarnings),s=extractProtocol(t),{host:a,port:c}=extractHostAndPort(t),l=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||emitEmulatorWarning()}function extractProtocol(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function extractHostAndPort(e){const t=extractProtocol(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(n);if(o){const s=o[1];return{host:s,port:parsePort(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:parsePort(a)}}}function parsePort(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function emitEmulatorWarning(){function e(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthCredential{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(t){return debugFail("not implemented")}_linkToIdToken(t,r){return debugFail("not implemented")}_getReauthenticationResolver(t){return debugFail("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithIdp(e,t){return _performSignInRequest(e,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IDP_REQUEST_URI$1="http://localhost";class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new OAuthCredential(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):_fail("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:o}=r,s=__rest(r,["providerId","signInMethod"]);if(!n||!o)return null;const a=new OAuthCredential(n,o);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const r=this.buildRequest();return signInWithIdp(t,r)}_linkToIdToken(t,r){const n=this.buildRequest();return n.idToken=r,signInWithIdp(t,n)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,signInWithIdp(t,r)}buildRequest(){const t={requestUri:IDP_REQUEST_URI$1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=querystring(r)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FederatedAuthProvider{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(t){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return FacebookAuthProvider.credentialFromTaggedObject(t)}static credentialFromError(t){return FacebookAuthProvider.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(t.oauthAccessToken)}catch{return null}}}FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com";FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return GoogleAuthProvider.credentialFromTaggedObject(t)}static credentialFromError(t){return GoogleAuthProvider.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n}=t;if(!r&&!n)return null;try{return GoogleAuthProvider.credential(r,n)}catch{return null}}}GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com";GoogleAuthProvider.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(t){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return GithubAuthProvider.credentialFromTaggedObject(t)}static credentialFromError(t){return GithubAuthProvider.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return GithubAuthProvider.credential(t.oauthAccessToken)}catch{return null}}}GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com";GithubAuthProvider.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(t,r){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return TwitterAuthProvider.credentialFromTaggedObject(t)}static credentialFromError(t){return TwitterAuthProvider.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=t;if(!r||!n)return null;try{return TwitterAuthProvider.credential(r,n)}catch{return null}}}TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com";TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UserCredentialImpl{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,n,o=!1){const s=await UserImpl._fromIdTokenResponse(t,n,o),a=providerIdForResponse(n);return new UserCredentialImpl({user:s,providerId:a,_tokenResponse:n,operationType:r})}static async _forOperation(t,r,n){await t._updateTokensIfNecessary(n,!0);const o=providerIdForResponse(n);return new UserCredentialImpl({user:t,providerId:o,_tokenResponse:n,operationType:r})}}function providerIdForResponse(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MultiFactorError extends FirebaseError{constructor(t,r,n,o){var s;super(r.code,r.message),this.operationType=n,this.user=o,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,r,n,o){return new MultiFactorError(t,r,n,o)}}function _processCredentialSavingMfaContextIfNecessary(e,t,r,n){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?MultiFactorError._fromErrorAndOperation(e,s,t,n):s})}async function _link$1(e,t,r=!1){const n=await _logoutIfInvalidated(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return UserCredentialImpl._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reauthenticate(e,t,r=!1){const{auth:n}=e;if(_isFirebaseServerApp(n.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(n));const o="reauthenticate";try{const s=await _logoutIfInvalidated(e,_processCredentialSavingMfaContextIfNecessary(n,o,t,e),r);_assert(s.idToken,n,"internal-error");const a=_parseToken(s.idToken);_assert(a,n,"internal-error");const{sub:c}=a;return _assert(e.uid===c,n,"user-mismatch"),UserCredentialImpl._forOperation(e,o,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_fail(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _signInWithCredential(e,t,r=!1){if(_isFirebaseServerApp(e.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e));const n="signIn",o=await _processCredentialSavingMfaContextIfNecessary(e,n,t),s=await UserCredentialImpl._fromIdTokenResponse(e,n,o);return r||await e._updateCurrentUser(s.user),s}function onIdTokenChanged(e,t,r,n){return getModularInstance(e).onIdTokenChanged(t,r,n)}function beforeAuthStateChanged(e,t,r){return getModularInstance(e).beforeAuthStateChanged(t,r)}const STORAGE_AVAILABLE_KEY="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BrowserPersistenceClass{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(STORAGE_AVAILABLE_KEY,"1"),this.storage.removeItem(STORAGE_AVAILABLE_KEY),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _iframeCannotSyncWebStorage(){const e=getUA();return _isSafari(e)||_isIOS(e)}const _POLLING_INTERVAL_MS$1=1e3,IE10_LOCAL_STORAGE_SYNC_DELAY=10;class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_iframeCannotSyncWebStorage()&&_isIframe(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),o=this.localCache[r];n!==o&&t(r,o,n)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const n=t.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!r)return}const o=()=>{const a=this.storage.getItem(n);!r&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);_isIE10()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,IE10_LOCAL_STORAGE_SYNC_DELAY):o()}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const o of Array.from(n))o(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)})},_POLLING_INTERVAL_MS$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}BrowserLocalPersistence.type="LOCAL";const browserLocalPersistence=BrowserLocalPersistence;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}BrowserSessionPersistence.type="SESSION";const browserSessionPersistence=BrowserSessionPersistence;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _allSettled(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Receiver{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(o=>o.isListeningto(t));if(r)return r;const n=new Receiver(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:n,eventType:o,data:s}=r.data,a=this.handlersMap[o];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:o});const c=Array.from(a).map(async u=>u(r.origin,s)),l=await _allSettled(c);r.ports[0].postMessage({status:"done",eventId:n,eventType:o,response:l})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Receiver.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _generateEventId(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(Math.random()*10);return e+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sender{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,n=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const u=_generateEventId("",20);o.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:o,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(m.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),o.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:r},[o.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _window(){return window}function _setWindowLocation(e){_window().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isWorker(){return typeof _window().WorkerGlobalScope<"u"&&typeof _window().importScripts=="function"}async function _getActiveServiceWorker(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _getServiceWorkerController(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function _getWorkerGlobalScope(){return _isWorker()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB_NAME="firebaseLocalStorageDb",DB_VERSION=1,DB_OBJECTSTORE_NAME="firebaseLocalStorage",DB_DATA_KEYPATH="fbase_key";class DBPromise{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function getObjectStore(e,t){return e.transaction([DB_OBJECTSTORE_NAME],t?"readwrite":"readonly").objectStore(DB_OBJECTSTORE_NAME)}function _deleteDatabase(){const e=indexedDB.deleteDatabase(DB_NAME);return new DBPromise(e).toPromise()}function _openDatabase(){const e=indexedDB.open(DB_NAME,DB_VERSION);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(DB_OBJECTSTORE_NAME,{keyPath:DB_DATA_KEYPATH})}catch(o){r(o)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(DB_OBJECTSTORE_NAME)?t(n):(n.close(),await _deleteDatabase(),t(await _openDatabase()))})})}async function _putObject(e,t,r){const n=getObjectStore(e,!0).put({[DB_DATA_KEYPATH]:t,value:r});return new DBPromise(n).toPromise()}async function getObject(e,t){const r=getObjectStore(e,!1).get(t),n=await new DBPromise(r).toPromise();return n===void 0?null:n.value}function _deleteObject(e,t){const r=getObjectStore(e,!0).delete(t);return new DBPromise(r).toPromise()}const _POLLING_INTERVAL_MS=800,_TRANSACTION_RETRY_COUNT=3;class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _openDatabase(),this.db)}async _withRetries(t){let r=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(r++>_TRANSACTION_RETRY_COUNT)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_getWorkerGlobalScope()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((t=n[0])===null||t===void 0)&&t.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_getServiceWorkerController()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _openDatabase();return await _putObject(t,STORAGE_AVAILABLE_KEY,"1"),await _deleteObject(t,STORAGE_AVAILABLE_KEY),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>_putObject(n,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(n=>getObject(n,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>_deleteObject(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const s=getObjectStore(o,!1).getAll();return new DBPromise(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(t.length!==0)for(const{fbase_key:o,value:s}of t)n.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(s)&&(this.notifyListeners(o,s),r.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!n.has(o)&&(this.notifyListeners(o,null),r.push(o));return r}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const o of Array.from(n))o(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_POLLING_INTERVAL_MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IndexedDBLocalPersistence.type="LOCAL";const indexedDBLocalPersistence=IndexedDBLocalPersistence;new Delay(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _withDefaultResolver(e,t){return t?_getInstance(t):(_assert(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IdpCredential extends AuthCredential{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return signInWithIdp(t,this._buildIdpRequest())}_linkToIdToken(t,r){return signInWithIdp(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return signInWithIdp(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function _signIn(e){return _signInWithCredential(e.auth,new IdpCredential(e),e.bypassAuthState)}function _reauth(e){const{auth:t,user:r}=e;return _assert(r,t,"internal-error"),_reauthenticate(r,new IdpCredential(e),e.bypassAuthState)}async function _link(e){const{auth:t,user:r}=e;return _assert(r,t,"internal-error"),_link$1(r,new IdpCredential(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AbstractPopupRedirectOperation{constructor(t,r,n,o,s=!1){this.auth=t,this.resolver=n,this.user=o,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:n,postBody:o,tenantId:s,error:a,type:c}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:r,sessionId:n,tenantId:s||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(t){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _POLL_WINDOW_CLOSE_TIMEOUT=new Delay(2e3,1e4);async function signInWithPopup(e,t,r){if(_isFirebaseServerApp(e.app))return Promise.reject(_createError(e,"operation-not-supported-in-this-environment"));const n=_castAuth(e);_assertInstanceOf(e,t,FederatedAuthProvider);const o=_withDefaultResolver(n,r);return new PopupOperation(n,"signInViaPopup",t,o).executeNotNull()}class PopupOperation extends AbstractPopupRedirectOperation{constructor(t,r,n,o,s){super(t,r,o,s),this.provider=n,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _assert(t,this.auth,"internal-error"),t}async onExecution(){debugAssert(this.filter.length===1,"Popup operations only handle one event");const t=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_POLL_WINDOW_CLOSE_TIMEOUT.get())};t()}}PopupOperation.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PENDING_REDIRECT_KEY="pendingRedirect",redirectOutcomeMap=new Map;class RedirectAction extends AbstractPopupRedirectOperation{constructor(t,r,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let t=redirectOutcomeMap.get(this.auth._key());if(!t){try{const n=await _getAndClearPendingRedirectStatus(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(r){t=()=>Promise.reject(r)}redirectOutcomeMap.set(this.auth._key(),t)}return this.bypassAuthState||redirectOutcomeMap.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _getAndClearPendingRedirectStatus(e,t){const r=pendingRedirectKey(t),n=resolverPersistence(e);if(!await n._isAvailable())return!1;const o=await n._get(r)==="true";return await n._remove(r),o}function _overrideRedirectResult(e,t){redirectOutcomeMap.set(e._key(),t)}function resolverPersistence(e){return _getInstance(e._redirectPersistence)}function pendingRedirectKey(e){return _persistenceKeyName(PENDING_REDIRECT_KEY,e.config.apiKey,e.name)}async function _getRedirectResult(e,t,r=!1){if(_isFirebaseServerApp(e.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e));const n=_castAuth(e),o=_withDefaultResolver(n,t),a=await new RedirectAction(n,o,r).execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EVENT_DUPLICATION_CACHE_DURATION_MS=10*60*1e3;class AuthEventManager{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(r=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!isRedirectEvent(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var n;if(t.error&&!isNullRedirectEvent(t)){const o=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(_createError(this.auth,o))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const n=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=EVENT_DUPLICATION_CACHE_DURATION_MS&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(t))}saveEventToCache(t){this.cachedEventUids.add(eventUid(t)),this.lastProcessedEventTime=Date.now()}}function eventUid(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function isNullRedirectEvent({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function isRedirectEvent(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getProjectConfig(e,t={}){return _performApiRequest(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP_ADDRESS_REGEX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HTTP_REGEX=/^https?/;async function _validateOrigin(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _getProjectConfig(e);for(const r of t)try{if(matchDomain(r))return}catch{}_fail(e,"unauthorized-domain")}function matchDomain(e){const t=_getCurrentUrl(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&n===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===n}if(!HTTP_REGEX.test(r))return!1;if(IP_ADDRESS_REGEX.test(e))return n===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NETWORK_TIMEOUT=new Delay(3e4,6e4);function resetUnloadedGapiModules(){const e=_window().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function loadGapi(e){return new Promise((t,r)=>{var n,o,s;function a(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),r(_createError(e,"network-request-failed"))},timeout:NETWORK_TIMEOUT.get()})}if(!((o=(n=_window().gapi)===null||n===void 0?void 0:n.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((s=_window().gapi)===null||s===void 0)&&s.load)a();else{const c=_generateCallbackName("iframefcb");return _window()[c]=()=>{gapi.load?a():r(_createError(e,"network-request-failed"))},_loadJS(`${_gapiScriptUrl()}?onload=${c}`).catch(l=>r(l))}}).catch(t=>{throw cachedGApiLoader=null,t})}let cachedGApiLoader=null;function _loadGapi(e){return cachedGApiLoader=cachedGApiLoader||loadGapi(e),cachedGApiLoader}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PING_TIMEOUT=new Delay(5e3,15e3),IFRAME_PATH="__/auth/iframe",EMULATED_IFRAME_PATH="emulator/auth/iframe",IFRAME_ATTRIBUTES={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EID_FROM_APIHOST=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function getIframeUrl(e){const t=e.config;_assert(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?_emulatorUrl(t,EMULATED_IFRAME_PATH):`https://${e.config.authDomain}/${IFRAME_PATH}`,n={apiKey:t.apiKey,appName:e.name,v:SDK_VERSION},o=EID_FROM_APIHOST.get(e.config.apiHost);o&&(n.eid=o);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${querystring(n).slice(1)}`}async function _openIframe(e){const t=await _loadGapi(e),r=_window().gapi;return _assert(r,e,"internal-error"),t.open({where:document.body,url:getIframeUrl(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IFRAME_ATTRIBUTES,dontclear:!0},n=>new Promise(async(o,s)=>{await n.restyle({setHideOnLeave:!1});const a=_createError(e,"network-request-failed"),c=_window().setTimeout(()=>{s(a)},PING_TIMEOUT.get());function l(){_window().clearTimeout(c),o(n)}n.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BASE_POPUP_OPTIONS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DEFAULT_WIDTH=500,DEFAULT_HEIGHT=600,TARGET_BLANK="_blank",FIREFOX_EMPTY_URL="http://localhost";class AuthPopup{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _open(e,t,r,n=DEFAULT_WIDTH,o=DEFAULT_HEIGHT){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},BASE_POPUP_OPTIONS),{width:n.toString(),height:o.toString(),top:s,left:a}),u=getUA().toLowerCase();r&&(c=_isChromeIOS(u)?TARGET_BLANK:r),_isFirefox(u)&&(t=t||FIREFOX_EMPTY_URL,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[g,h])=>`${m}${g}=${h},`,"");if(_isIOSStandalone(u)&&c!=="_self")return openAsNewWindowIOS(t||"",c),new AuthPopup(null);const d=window.open(t||"",c,f);_assert(d,e,"popup-blocked");try{d.focus()}catch{}return new AuthPopup(d)}function openAsNewWindowIOS(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WIDGET_PATH="__/auth/handler",EMULATOR_WIDGET_PATH="emulator/auth/handler",FIREBASE_APP_CHECK_FRAGMENT_ID=encodeURIComponent("fac");async function _getRedirectUrl(e,t,r,n,o,s){_assert(e.config.authDomain,e,"auth-domain-config-required"),_assert(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:SDK_VERSION,eventId:o};if(t instanceof FederatedAuthProvider){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",isEmpty(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,d]of Object.entries(s||{}))a[f]=d}if(t instanceof BaseOAuthProvider){const f=t.getScopes().filter(d=>d!=="");f.length>0&&(a.scopes=f.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await e._getAppCheckToken(),u=l?`#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(l)}`:"";return`${getHandlerBase(e)}?${querystring(c).slice(1)}${u}`}function getHandlerBase({config:e}){return e.emulator?_emulatorUrl(e,EMULATOR_WIDGET_PATH):`https://${e.authDomain}/${WIDGET_PATH}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WEB_STORAGE_SUPPORT_KEY="webStorageSupport";class BrowserPopupRedirectResolver{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=browserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(t,r,n,o){var s;debugAssert((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await _getRedirectUrl(t,r,n,_getCurrentUrl(),o);return _open(t,a,_generateEventId())}async _openRedirect(t,r,n,o){await this._originValidation(t);const s=await _getRedirectUrl(t,r,n,_getCurrentUrl(),o);return _setWindowLocation(s),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:o,promise:s}=this.eventManagers[r];return o?Promise.resolve(o):(debugAssert(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(t);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(t){const r=await _openIframe(t),n=new AuthEventManager(t);return r.register("authEvent",o=>(_assert(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:n.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=r,n}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(WEB_STORAGE_SUPPORT_KEY,{type:WEB_STORAGE_SUPPORT_KEY},o=>{var s;const a=(s=o==null?void 0:o[0])===null||s===void 0?void 0:s[WEB_STORAGE_SUPPORT_KEY];a!==void 0&&r(!!a),_fail(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=_validateOrigin(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}}const browserPopupRedirectResolver=BrowserPopupRedirectResolver;var name="@firebase/auth",version="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthInterop{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(n=>{t((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getVersionForPlatform(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function registerAuth(e){_registerComponent(new Component("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;_assert(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(e)},u=new AuthImpl(n,o,s,l);return _initializeAuthInstance(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,n)=>{t.getProvider("auth-internal").initialize()})),_registerComponent(new Component("auth-internal",t=>{const r=_castAuth(t.getProvider("auth").getImmediate());return(n=>new AuthInterop(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),registerVersion(name,version,getVersionForPlatform(e)),registerVersion(name,version,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ID_TOKEN_MAX_AGE=5*60,authIdTokenMaxAge=getExperimentalSetting("authIdTokenMaxAge")||DEFAULT_ID_TOKEN_MAX_AGE;let lastPostedIdToken=null;const mintCookieFactory=e=>async t=>{const r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>authIdTokenMaxAge)return;const o=r==null?void 0:r.token;lastPostedIdToken!==o&&(lastPostedIdToken=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function getAuth(e=getApp()){const t=_getProvider(e,"auth");if(t.isInitialized())return t.getImmediate();const r=initializeAuth(e,{popupRedirectResolver:browserPopupRedirectResolver,persistence:[indexedDBLocalPersistence,browserLocalPersistence,browserSessionPersistence]}),n=getExperimentalSetting("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=mintCookieFactory(s.toString());beforeAuthStateChanged(r,a,()=>a(r.currentUser)),onIdTokenChanged(r,c=>a(c))}}const o=getDefaultEmulatorHost("auth");return o&&connectAuthEmulator(r,`http://${o}`),r}function getScriptParentElement(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}_setExternalJSProvider({loadJS(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=o=>{const s=_createError("internal-error");s.customData=o,r(s)},n.type="text/javascript",n.charset="UTF-8",getScriptParentElement().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});registerAuth("Browser");const firebaseConfig={apiKey:"AIzaSyArZ8rP2pFW_tyx43UELbJ1aw7Mo30QXzE",authDomain:"rey-firebase-9527.firebaseapp.com",projectId:"rey-firebase-9527",storageBucket:"rey-firebase-9527.appspot.com",messagingSenderId:"701286567818",appId:"1:701286567818:web:e12837d38a5614df694273",measurementId:"G-PQ4ZMJM56D"},app=initializeApp(firebaseConfig),provider=new GithubAuthProvider,auth=getAuth(app),AUTH_KEY="AUTH_INFO_88",signInWithGitHub=()=>{signInWithPopup(auth,provider).then(e=>{const t=GithubAuthProvider.credentialFromResult(e),r=e.user;put(AUTH_KEY,{email:r.email,name:r.displayName,photoURL:r.photoURL,accessToken:t.accessToken})}).catch(e=>{const t=e.code,r=e.message,n=e.customData.email,o=GithubAuthProvider.credentialFromError(e);alert(r),console.log("####################GitHub auth error:[errorCode:",t,"errorMessage",r,"email:",n,"credential:",o,"]")})};class AuthInfo{constructor(t,r,n,o){this._email=t,this._userName=r,this._userAvatar=n,this._accessToken=o}static fromJSON(t){let r,n,o,s;return JSON.parse(get(AUTH_KEY),(a,c)=>{switch(a){case"email":r=c;break;case"userName":n=c;break;case"userAvatar":o=c;break;case"accessToken":s=c;break}}),new AuthInfo(r,n,o,s)}get email(){return this._email}get userName(){return this._userName}get userAvatar(){return this._userAvatar}get accessToken(){return this._accessToken}toJSON(){return JSON.stringify(this)}}class Authenticator{constructor(t){v(this,"getAuthInfo",()=>((get(AUTH_KEY)==null||get(AUTH_KEY)===void 0)&&this._authCall(),AuthInfo.fromJSON(get(AUTH_KEY))));this._authCall=t}}class GithubAuthenticator extends Authenticator{constructor(){super(()=>{signInWithPopup(this._auth,this._provider).then(r=>{const n=GithubAuthProvider.credentialFromResult(r),o=r.user;put(AUTH_KEY,new AuthInfo(o.email,o.displayName,o.photoURL,n.accessToken).toJSON())}).catch(r=>{const n=r.code,o=r.message;alert(o),console.log("####################GitHub auth error:[errorCode:",n,"errorMessage",o,"]")})});v(this,"_firebaseConfig",{apiKey:"AIzaSyArZ8rP2pFW_tyx43UELbJ1aw7Mo30QXzE",authDomain:"rey-firebase-9527.firebaseapp.com",projectId:"rey-firebase-9527",storageBucket:"rey-firebase-9527.appspot.com",messagingSenderId:"701286567818",appId:"1:701286567818:web:e12837d38a5614df694273",measurementId:"G-PQ4ZMJM56D"});v(this,"_app",initializeApp(this._firebaseConfig));v(this,"_provider",new GithubAuthProvider);v(this,"_auth",getAuth(this._app))}}new GithubAuthenticator;const TOKEN="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",COMMENT_API_PRE_PATH="https://api.github.com/repos/HsungRa/blog_comments",config=e=>({headers:{Authorization:`Bearer ${e??TOKEN}`}}),blogKey=(e,t)=>e+"%23"+t,loadComment=(e,t)=>{let r=blogKey(e,t),n=`${COMMENT_API_PRE_PATH}/issues?labels=${r}`;return axios$1.get(n,config(null))},createComment=(e,t,r)=>{let n=get(AUTH_KEY);if(n==null){alert("未登录用户");return}return axios$1.post(`${COMMENT_API_PRE_PATH}/issues`,{title:"Comment",body:r,labels:[e+"#"+t]},config(n.accessToken))},feedbackComment=(e,t,r,n)=>{let o=get(AUTH_KEY);if(o==null){alert("未登录用户");return}return axios$1.post(`${COMMENT_API_PRE_PATH}/issues`,{title:"@"+n.userName+' "'+n.body.substring(0,20)+'"',body:r,labels:[e+"#"+t]},config(o.accessToken))},getBlogComment=async(e,t)=>{let n=(await loadComment(e,t)).data.sort((s,a)=>s.id-a.id),o=[];for(let s of n){const a=parseCommentRsp(s);o.push(a)}return o},parseCommentRsp=e=>{let t=e.user;return{userName:t.login,userAvatar:t.avatar_url==null?"/logo.jpg":t.avatar_url,id:e.id,title:e.title,number:e.number,body:e.body,time:e.updated_at,isReply:e.title!=="Comment"}},CommentModule_vue_vue_type_style_index_0_lang="",_sfc_main$1={props:{blogInfo:{required:!0}},setup(e){const t=ref(""),r=ref(""),n=ref([]),o=ref(-1),s=c=>{o.value!==c?o.value=c:o.value=-1},a=async c=>{(get(AUTH_KEY)==null||get(AUTH_KEY)===void 0)&&signInWithGitHub();let l;if(c!=null){let u=await feedbackComment(e.blogInfo.category,e.blogInfo.title,r.value.trim(),c);l=parseCommentRsp(u.data),r.value=""}else if(t.value.trim()){let u=await createComment(e.blogInfo.category,e.blogInfo.title,t.value.trim());l=parseCommentRsp(u.data),t.value=""}n.value.push(l)};return watch(()=>e.blogInfo,async c=>{n.value=await getBlogComment(c.category,c.title)}),{newComment:t,replyText:r,comments:n,addComment:a,toggleReplyForm:s,showReplyForm:o}}},_hoisted_1$1={class:"comment-box"},_hoisted_2$1=["src"],_hoisted_3$1={class:"meta"},_hoisted_4$1={class:"line"},_hoisted_5$1={key:0,class:"reply-form"},_hoisted_6$1={class:"comment-footer"},_hoisted_7$1={class:"comment-actions"};function _sfc_render(e,t,r,n,o,s){const a=resolveComponent("VaAvatar"),c=resolveComponent("VaListItemSection"),l=resolveComponent("VaListItemLabel"),u=resolveComponent("VaIcon"),f=resolveComponent("VaListItem"),d=resolveComponent("VaCardContent"),m=resolveComponent("VaCard"),g=resolveComponent("el-input"),h=resolveComponent("el-button");return openBlock(),createElementBlock("div",_hoisted_1$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.comments,p=>(openBlock(),createElementBlock("div",{key:p.id},[createVNode(m,{square:""},{default:withCtx(()=>[createVNode(d,null,{default:withCtx(()=>[createVNode(f,null,{default:withCtx(()=>[createVNode(c,{avatar:"",style:{"margin-top":"-1.5%"}},{default:withCtx(()=>[createVNode(a,{size:"28px"},{default:withCtx(()=>[createBaseVNode("img",{src:p.userAvatar,alt:""},null,8,_hoisted_2$1)]),_:2},1024)]),_:2},1024),createVNode(c,{style:{"margin-left":"-0.7%"}},{default:withCtx(()=>[createVNode(l,{caption:""},{default:withCtx(()=>[createTextVNode(toDisplayString(p.userName)+" "+toDisplayString(p.time),1)]),_:2},1024),p.isReply?(openBlock(),createBlock(l,{key:0,caption:""},{default:withCtx(()=>[createBaseVNode("div",_hoisted_3$1,[createBaseVNode("div",_hoisted_4$1,toDisplayString(p.title),1)])]),_:2},1024)):createCommentVNode("",!0),createVNode(l,null,{default:withCtx(()=>[createTextVNode(toDisplayString(p.body),1)]),_:2},1024)]),_:2},1024),createVNode(c,{icon:""},{default:withCtx(()=>[createVNode(u,{name:"comment",onClick:_=>n.toggleReplyForm(p.number)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),n.showReplyForm===p.number?(openBlock(),createElementBlock("div",_hoisted_5$1,[createVNode(g,{type:"textarea",modelValue:n.replyText,"onUpdate:modelValue":t[0]||(t[0]=_=>n.replyText=_),placeholder:"回复评论",rows:"2"},null,8,["modelValue"]),createVNode(h,{type:"primary",onClick:_=>n.addComment(p)},{default:withCtx(()=>[createTextVNode("提交")]),_:2},1032,["onClick"])])):createCommentVNode("",!0)]))),128)),createVNode(g,{type:"textarea",modelValue:n.newComment,"onUpdate:modelValue":t[1]||(t[1]=p=>n.newComment=p),placeholder:"和谐评论，友善评论...",maxlength:"1000","show-word-limit":"",class:"comment-input"},null,8,["modelValue"]),createBaseVNode("div",_hoisted_6$1,[createBaseVNode("div",_hoisted_7$1,[createVNode(h,{type:"primary",onClick:t[2]||(t[2]=p=>n.addComment(null))},{default:withCtx(()=>[createTextVNode("评论")]),_:1})])])])}const CommentModule=_export_sfc(_sfc_main$1,[["render",_sfc_render]]),Blog_vue_vue_type_style_index_0_scoped_fe878d45_lang="",_withScopeId=e=>(pushScopeId("data-v-fe878d45"),e=e(),popScopeId(),e),_hoisted_1={class:"page-container"},_hoisted_2={class:"title"},_hoisted_3={class:"meta"},_hoisted_4={class:"line"},_hoisted_5=_withScopeId(()=>createBaseVNode("strong",null,"category: ",-1)),_hoisted_6=_withScopeId(()=>createBaseVNode("strong",null,"date: ",-1)),_hoisted_7=_withScopeId(()=>createBaseVNode("strong",null,"description: ",-1)),_hoisted_8=_withScopeId(()=>createBaseVNode("strong",null,"tags: ",-1)),_hoisted_9={class:"content"},_sfc_main={__name:"Blog",setup(e){const t=ref(""),r=ref({}),{currentRoute:n}=useRouter(),o=n.value,s=o.params.category,a=o.params.name,c=ref({});return onMounted(async()=>{c.value={category:s,title:a},axios$1.get(`/posts/${a}.md`).then(l=>{if(l.headers["content-type"]==="text/markdown"){const{content:u,data:f}=matter$1(l.data);r.value=f,t.value=u}})}),(l,u)=>{const f=resolveComponent("el-tag"),d=resolveComponent("el-card"),m=resolveComponent("el-backtop");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("div",_hoisted_1,[createVNode(d,{style:{width:"100%"}},{default:withCtx(()=>[createBaseVNode("h1",_hoisted_2,toDisplayString(r.value.title),1),createBaseVNode("div",_hoisted_3,[createBaseVNode("div",_hoisted_4,[createBaseVNode("div",null,[_hoisted_5,createTextVNode(" "+toDisplayString(r.value.category),1)]),createBaseVNode("div",null,[_hoisted_6,createTextVNode(" "+toDisplayString(r.value.date),1)]),createBaseVNode("div",null,[_hoisted_7,createTextVNode(" "+toDisplayString(r.value.description),1)]),createBaseVNode("div",null,[_hoisted_8,(openBlock(!0),createElementBlock(Fragment,null,renderList(r.value.tags,g=>(openBlock(),createBlock(f,{size:"small",key:g},{default:withCtx(()=>[createTextVNode(toDisplayString(g),1)]),_:2},1024))),128))])])]),createBaseVNode("div",_hoisted_9,[createVNode(MDRender,{markdown:t.value},null,8,["markdown"])])]),_:1}),createVNode(CommentModule,{blogInfo:c.value},null,8,["blogInfo"])]),createVNode(m,{right:18,bottom:100})],64)}}},Blog=_export_sfc(_sfc_main,[["__scopeId","data-v-fe878d45"]]);export{Blog as default};
