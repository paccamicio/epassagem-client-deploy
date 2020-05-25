function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=_superPropBase(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"S+S0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mrSG"),i=r("zVF4"),o=function(){function e(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]");var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new i.Deferred;this.instancesDeferred.set(t,r);try{var n=this.getOrInitializeService(t);n&&r.resolve(n)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=n.__assign({identifier:"[DEFAULT]",optional:!1},e),r=t.optional,i=this.normalizeInstanceIdentifier(t.identifier);try{var o=this.getOrInitializeService(i);if(!o){if(r)return null;throw Error("Service "+this.name+" is not available")}return o}catch(a){if(r)return null;throw a}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService("[DEFAULT]")}catch(l){}try{for(var i=n.__values(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=n.__read(o.value,2),s=a[1],c=this.normalizeInstanceIdentifier(a[0]);try{var u=this.getOrInitializeService(c);s.resolve(u)}catch(l){}}}catch(f){t={error:f}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return n.__awaiter(this,void 0,void 0,(function(){var e;return n.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return"[DEFAULT]"===e?void 0:e}(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e}(),s=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();t.Component=o,t.ComponentContainer=s,t.Provider=a},"S/Aq":function(e,t,r){"use strict";var n=r("fXoL"),i=r("Cfvw"),o=r("LRne"),a=r("D0XW"),s=r("HDdC"),c=r("lJxs");function u(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.a;return new s.a((function(r){var n;return null!=t?t.schedule((function(){n=e.onSnapshot(r)})):n=e.onSnapshot(r),function(){null!=n&&n()}}))}(e,t)}function l(e,t){return u(e,t).pipe(Object(c.a)((function(e){return{payload:e,type:"query"}})))}var f=r("pxpQ"),h=r("pLZG"),p=r("Kqap");function d(e,t){return l(e,t).pipe(Object(c.a)((function(e){return e.payload.docChanges().map((function(e){return{type:e.type,payload:e}}))})))}function v(e,t,r){return l(e,r).pipe(Object(c.a)((function(e){return e.payload.docChanges()})),Object(p.a)((function(e,r){return function(e,t,r){return t.forEach((function(t){r.indexOf(t.type)>-1&&(e=function(e,t){switch(t.type){case"added":e[t.newIndex]&&e[t.newIndex].doc.ref.isEqual(t.doc.ref)||e.splice(t.newIndex,0,t);break;case"modified":(null==e[t.oldIndex]||e[t.oldIndex].doc.ref.isEqual(t.doc.ref))&&(t.oldIndex!==t.newIndex?(e.splice(t.oldIndex,1),e.splice(t.newIndex,0,t)):e.splice(t.newIndex,1,t));break;case"removed":e[t.oldIndex]&&e[t.oldIndex].doc.ref.isEqual(t.doc.ref)&&e.splice(t.oldIndex,1)}return e}(e,t))})),e}(e,r,t)}),[]),Object(c.a)((function(e){return e.map((function(e){return{type:e.type,payload:e}}))})))}function y(e){return e&&0!==e.length||(e=["added","removed","modified"]),e}var b=function(){function e(t,r,n){_classCallCheck(this,e),this.ref=t,this.query=r,this.afs=n}return _createClass(e,[{key:"stateChanges",value:function(e){return e&&0!==e.length?d(this.query,this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst,Object(c.a)((function(t){return t.filter((function(t){return e.indexOf(t.type)>-1}))})),Object(h.a)((function(e){return e.length>0}))):d(this.query,this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst)}},{key:"auditTrail",value:function(e){return this.stateChanges(e).pipe(Object(p.a)((function(e,t){return[].concat(_toConsumableArray(e),_toConsumableArray(t))}),[]))}},{key:"snapshotChanges",value:function(e){var t=y(e);return v(this.query,t,this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst)}},{key:"valueChanges",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(this.query,this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst,Object(c.a)((function(t){return t.payload.docs.map((function(t){return e.idField?Object.assign({},t.data(),_defineProperty({},e.idField,t.id)):t.data()}))})))}},{key:"get",value:function(e){return Object(i.a)(this.query.get(e)).pipe(Object(f.b)(this.afs.schedulers.insideAngular))}},{key:"add",value:function(e){return this.ref.add(e)}},{key:"doc",value:function(e){return new g(this.ref.doc(e),this.afs)}}]),e}(),g=function(){function e(t,r){_classCallCheck(this,e),this.ref=t,this.afs=r}return _createClass(e,[{key:"set",value:function(e,t){return this.ref.set(e,t)}},{key:"update",value:function(e){return this.ref.update(e)}},{key:"delete",value:function(){return this.ref.delete()}},{key:"collection",value:function(e,t){var r=K(this.ref.collection(e),t),n=r.ref,i=r.query;return new b(n,i,this.afs)}},{key:"snapshotChanges",value:function(){return u(this.ref,this.afs.schedulers.outsideAngular).pipe(Object(c.a)((function(e){return{payload:e,type:"value"}}))).pipe(this.afs.keepUnstableUntilFirst)}},{key:"valueChanges",value:function(){return this.snapshotChanges().pipe(Object(c.a)((function(e){return e.payload.data()})))}},{key:"get",value:function(e){return Object(i.a)(this.ref.get(e)).pipe(Object(f.b)(this.afs.schedulers.insideAngular))}}]),e}(),m=function(){function e(t,r){_classCallCheck(this,e),this.query=t,this.afs=r}return _createClass(e,[{key:"stateChanges",value:function(e){return e&&0!==e.length?d(this.query,this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst,Object(c.a)((function(t){return t.filter((function(t){return e.indexOf(t.type)>-1}))})),Object(h.a)((function(e){return e.length>0}))):d(this.query,this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst)}},{key:"auditTrail",value:function(e){return this.stateChanges(e).pipe(Object(p.a)((function(e,t){return[].concat(_toConsumableArray(e),_toConsumableArray(t))}),[]))}},{key:"snapshotChanges",value:function(e){var t=y(e);return v(this.query,t,this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst)}},{key:"valueChanges",value:function(){return l(this.query,this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst,Object(c.a)((function(e){return e.payload.docs.map((function(e){return e.data()}))})))}},{key:"get",value:function(e){return Object(i.a)(this.query.get(e)).pipe(Object(f.b)(this.afs.schedulers.insideAngular))}}]),e}(),_=r("ofXK"),O=r("qgXg"),w=r("vkgz"),C=1,E=Promise.resolve(),A={};function S(e){return e in A&&(delete A[e],!0)}var k=function(e){var t=C++;return A[t]=!0,E.then((function(){return S(t)&&e()})),t},I=function(e){S(e)},j=function(e){function t(e,r){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,r))).scheduler=e,n.work=r,n}return _inherits(t,e),_createClass(t,[{key:"requestAsyncId",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==n&&n>0?_get(_getPrototypeOf(t.prototype),"requestAsyncId",this).call(this,e,r,n):(e.actions.push(this),e.scheduled||(e.scheduled=k(e.flush.bind(e,null))))}},{key:"recycleAsyncId",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==n&&n>0||null===n&&this.delay>0)return _get(_getPrototypeOf(t.prototype),"recycleAsyncId",this).call(this,e,r,n);0===e.actions.length&&(I(r),e.scheduled=void 0)}}]),t}(r("3N8a").a),N=new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"flush",value:function(e){this.active=!0,this.scheduled=void 0;var t,r=this.actions,n=-1,i=r.length;e=e||r.shift();do{if(t=e.execute(e.state,e.delay))break}while(++n<i&&(e=r.shift()));if(this.active=!1,t){for(;++n<i&&(e=r.shift());)e.unsubscribe();throw t}}}]),t}(r("IjjT").a))(j),P=r("Y7HM"),T=function(e){function t(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).source=e,r.delayTime=n,r.scheduler=i,(!Object(P.a)(n)||n<0)&&(r.delayTime=0),i&&"function"==typeof i.schedule||(r.scheduler=N),r}return _inherits(t,e),_createClass(t,[{key:"_subscribe",value:function(e){return this.scheduler.schedule(t.dispatch,this.delayTime,{source:this.source,subscriber:e})}}],[{key:"create",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N;return new t(e,r,n)}},{key:"dispatch",value:function(e){var t=e.source,r=e.subscriber;return this.add(t.subscribe(r))}}]),t}(s.a),D=function(){function e(t,r){_classCallCheck(this,e),this.scheduler=t,this.delay=r}return _createClass(e,[{key:"call",value:function(e,t){return new T(t,this.delay,this.scheduler).subscribe(e)}}]),e}();function F(){}var R=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.a;_classCallCheck(this,e),this.zone=t,this.delegate=r}return _createClass(e,[{key:"now",value:function(){return this.delegate.now()}},{key:"schedule",value:function(e,t,r){var n=this.zone;return this.delegate.schedule((function(t){var r=this;n.runGuarded((function(){e.apply(r,[t])}))}),t,r)}}]),e}(),L=function(){function e(t){_classCallCheck(this,e),this.zone=t,this.task=null}return _createClass(e,[{key:"call",value:function(e,t){var r=this.unscheduleTask.bind(this);return this.task=this.zone.run((function(){return Zone.current.scheduleMacroTask("firebaseZoneBlock",F,{},F,F)})),t.pipe(Object(w.a)(r,r,r)).subscribe(e).add(r)}},{key:"unscheduleTask",value:function(){null!=this.task&&"scheduled"===this.task.state&&(this.task.invoke(),this.task=null)}}]),e}(),x=function e(t){_classCallCheck(this,e),this.ngZone=t,this.outsideAngular=t.runOutsideAngular((function(){return new R(Zone.current)})),this.insideAngular=t.run((function(){return new R(Zone.current,a.a)}))},U=r("Wcq6"),M=r.n(U),B=new n.q("angularfire2.app.options"),z=new n.q("angularfire2.app.nameOrConfig");r.d(t,"b",(function(){return K})),r.d(t,"a",(function(){return J}));var V=new n.q("angularfire2.enableFirestorePersistence"),q=new n.q("angularfire2.firestore.persistenceSettings"),W=new n.q("angularfire2.firestore.settings"),H=parseInt(M.a.SDK_VERSION.split(".")[0]),G=H<5||5==H&&parseInt(M.a.SDK_VERSION.split(".")[1])<8?{timestampsInSnapshots:!0}:{};function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return{query:t(e),ref:e}}var Z,J=((Z=function(){function e(t,r,n,a,s,c,u){var l=this;_classCallCheck(this,e),this.schedulers=new x(c),this.keepUnstableUntilFirst=function(e,t){return function(r){return Object(_.G)(t)&&(r=r.lift(new L(e.ngZone))),r.pipe(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(r){return r.lift(new D(e,t))}}(e.outsideAngular),Object(f.b)(e.insideAngular))}}(this.schedulers,s),this.firestore=c.runOutsideAngular((function(){var e=function(e,t,r){var n="object"==typeof r&&r||{};return n.name=n.name||"string"==typeof r&&r||"[DEFAULT]",M.a.apps.filter((function(e){return e&&e.name===n.name}))[0]||t.runOutsideAngular((function(){return M.a.initializeApp(e,n)}))}(t,c,r).firestore();return e.settings(a||G),e})),this.persistenceEnabled$=n&&!Object(_.G)(s)?c.runOutsideAngular((function(){try{return Object(i.a)(l.firestore.enablePersistence(u||void 0).then((function(){return!0}),(function(){return!1})))}catch(e){return Object(o.a)(!1)}})):Object(o.a)(!1)}return _createClass(e,[{key:"collection",value:function(e,t){var r=K("string"==typeof e?this.firestore.collection(e):e,t),n=r.ref,i=r.query;return new b(n,i,this)}},{key:"collectionGroup",value:function(e,t){if(H<6)throw"collection group queries require Firebase JS SDK >= 6.0";var r=t||function(e){return e},n=this.firestore.collectionGroup(e);return new m(r(n),this)}},{key:"doc",value:function(e){var t;return t="string"==typeof e?this.firestore.doc(e):e,new g(t,this)}},{key:"createId",value:function(){return this.firestore.collection("_").doc().id}}]),e}()).\u0275fac=function(e){return new(e||Z)(n.fc(B),n.fc(z,8),n.fc(V,8),n.fc(W,8),n.fc(n.B),n.fc(n.z),n.fc(q,8))},Z.\u0275prov=n.Nb({token:Z,factory:Z.\u0275fac}),Z)},Wcq6:function(e,t,r){"use strict";var n,i=(n=r("wj3C"))&&"object"==typeof n&&"default"in n?n.default:n;i.registerVersion("firebase","7.8.1","app"),e.exports=i},"q/0M":function(e,t,r){"use strict";function n(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n}r.r(t),r.d(t,"LogLevel",(function(){return o})),r.d(t,"Logger",(function(){return c})),r.d(t,"setLogLevel",(function(){return u}));var i=[],o=function(e){return e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT",e}({}),a=o.INFO,s=function(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(!(t<e.logLevel)){var a=(new Date).toISOString();switch(t){case o.DEBUG:case o.VERBOSE:console.log.apply(console,n(["["+a+"]  "+e.name+":"],r));break;case o.INFO:console.info.apply(console,n(["["+a+"]  "+e.name+":"],r));break;case o.WARN:console.warn.apply(console,n(["["+a+"]  "+e.name+":"],r));break;case o.ERROR:console.error.apply(console,n(["["+a+"]  "+e.name+":"],r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}},c=function(){function e(e){this.name=e,this._logLevel=a,this._logHandler=s,i.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,n([this,o.ERROR],e))},e}();function u(e){i.forEach((function(t){t.logLevel=e}))}},wj3C:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i,o=r("mrSG"),a=r("zVF4"),s=r("S+S0"),c=r("q/0M"),u=((n={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$appName}",n["duplicate-app"]="Firebase App named '{$appName}' already exists",n["app-deleted"]="Firebase App named '{$appName}' already deleted",n["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",n),l=new a.ErrorFactory("app","Firebase",u),f="@firebase/app",h=((i={})[f]="fire-core",i["@firebase/analytics"]="fire-analytics",i["@firebase/auth"]="fire-auth",i["@firebase/database"]="fire-rtdb",i["@firebase/functions"]="fire-fn",i["@firebase/installations"]="fire-iid",i["@firebase/messaging"]="fire-fcm",i["@firebase/performance"]="fire-perf",i["@firebase/remote-config"]="fire-rc",i["@firebase/storage"]="fire-gcs",i["@firebase/firestore"]="fire-fst",i["fire-js"]="fire-js",i["firebase-wrapper"]="fire-js-all",i),p=new c.Logger("@firebase/app"),d=function(){function e(e,t,r){var n,i,c=this;this.firebase_=r,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=a.deepCopy(e),this.container=new s.ComponentContainer(t.name),this._addComponent(new s.Component("app",(function(){return c}),"PUBLIC"));try{for(var u=o.__values(this.firebase_.INTERNAL.components.values()),l=u.next();!l.done;l=u.next())this._addComponent(l.value)}catch(f){n={error:f}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t="[DEFAULT]"),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t="[DEFAULT]"),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){p.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw l.create("app-deleted",{appName:this.name_})},e}();d.prototype.name&&d.prototype.options||d.prototype.delete||console.log("dc");var v=function e(){var t=function(e){var t={},r=new Map,n={__esModule:!0,initializeApp:function(r,i){void 0===i&&(i={}),"object"==typeof i&&null!==i||(i={name:i});var o=i;void 0===o.name&&(o.name="[DEFAULT]");var s=o.name;if("string"!=typeof s||!s)throw l.create("bad-app-name",{appName:String(s)});if(a.contains(t,s))throw l.create("duplicate-app",{appName:s});var c=new e(r,o,n);return t[s]=c,c},app:i,registerVersion:function(e,t,r){var n,i=null!==(n=h[e])&&void 0!==n?n:e;r&&(i+="-"+r);var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var u=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&u.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&a&&u.push("and"),a&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void p.warn(u.join(" "))}c(new s.Component(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},apps:null,SDK_VERSION:"7.8.1",INTERNAL:{registerComponent:c,removeApp:function(e){delete t[e]},components:r,useAsService:function(e,t){return"serverAuth"===t?null:t}}};function i(e){if(!a.contains(t,e=e||"[DEFAULT]"))throw l.create("no-app",{appName:e});return t[e]}function c(s){var c,u,f=s.name;if(r.has(f))return p.debug("There were multiple attempts to register component "+f+"."),"PUBLIC"===s.type?n[f]:null;if(r.set(f,s),"PUBLIC"===s.type){var h=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[f])throw l.create("invalid-app-argument",{appName:f});return e[f]()};void 0!==s.serviceProps&&a.deepExtend(h,s.serviceProps),n[f]=h,e.prototype[f]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this._getService.bind(this,f);return r.apply(this,s.multipleInstances?e:[])}}try{for(var d=o.__values(Object.keys(t)),v=d.next();!v.done;v=d.next())t[v.value]._addComponent(s)}catch(y){c={error:y}}finally{try{v&&!v.done&&(u=d.return)&&u.call(d)}finally{if(c)throw c.error}}return"PUBLIC"===s.type?n[f]:null}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,n}(d);return t.INTERNAL=o.__assign(o.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){a.deepExtend(t,e)},createSubscribe:a.createSubscribe,ErrorFactory:a.ErrorFactory,deepExtend:a.deepExtend}),t}(),y=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t;return"VERSION"===(null===(t=e.getComponent())||void 0===t?void 0:t.type)}(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();if(a.isBrowser()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var b=self.firebase.SDK_VERSION;b&&b.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var g=v.initializeApp;v.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.isNode()&&p.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),g.apply(void 0,e)};var m=v;!function(e,t){e.INTERNAL.registerComponent(new s.Component("platform-logger",(function(e){return new y(e)}),"PRIVATE")),e.registerVersion(f,"0.5.4",void 0),e.registerVersion("fire-js","")}(m),t.default=m,t.firebase=m},zVF4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mrSG"),i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=(15&s)<<2|u>>6,f=63&u;c||(f=64,a||(l=64)),n.push(r[o>>2],r[(3&o)<<4|s>>4],r[l],r[f])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&(o=e[r++]))<<12|(63&(s=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{o=e[r++];var s=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var o=r[e.charAt(i++)],a=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,c=++i<e.length?r[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==c)throw Error();n.push(o<<2|a>>4),64!==s&&(n.push(a<<4&240|s>>2),64!==c&&n.push(s<<6&192|c))}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=l(e[r],t[r]));return e}var f=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}var p=function(e){function t(r,n){var i=e.call(this,n)||this;return i.code=r,i.name="FirebaseError",Object.setPrototypeOf(i,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,d.prototype.create),i}return n.__extends(t,e),t}(Error),d=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?v(o,n):"Error",s=this.serviceName+": "+a+" ("+i+").",c=new p(i,s),u=0,l=Object.keys(n);u<l.length;u++){var f=l[u];"_"!==f.slice(-1)&&(f in c&&console.warn('Overwriting FirebaseError base field "'+f+'" can cause unexpected behavior.'),c[f]=n[f])}return c},e}();function v(e,t){return e.replace(y,(function(e,r){var n=t[r];return null!=n?n.toString():"<"+r+"?>"}))}var y=/\{\$([^}]+)}/g;function b(e){return JSON.parse(e)}var g=function(e){var t={},r={},n={},i="";try{var o=e.split(".");t=b(u(o[0])||""),r=b(u(o[1])||""),i=o[2],n=r.d||{},delete r.d}catch(a){}return{header:t,claims:r,data:n,signature:i}},m=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++)r[n]=4294967295&((f=r[n-3]^r[n-8]^r[n-14]^r[n-16])<<1|f>>>31);var i,o,a=this.chain_[0],s=this.chain_[1],c=this.chain_[2],u=this.chain_[3],l=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=u^s&(c^u),o=1518500249):(i=s^c^u,o=1859775393):n<60?(i=s&c|u&(s|c),o=2400959708):(i=s^c^u,o=3395469782);var f=(a<<5|a>>>27)+i+l+o+r[n]&4294967295;l=u,u=c,c=4294967295&(s<<30|s>>>2),s=a,a=f}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,i=this.buf_,o=this.inbuf_;n<t;){if(0===o)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(i[o]=e.charCodeAt(n),++n,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;n<t;)if(i[o]=e[n],++n,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.update(this.pad_,this.inbuf_<56?56-this.inbuf_:this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var i=24;i>=0;i-=8)e[n]=this.chain_[r]>>i&255,++n;return e},e}(),_=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=["next","error","complete"];r<n.length;r++){var i=n[r];if(i in e&&"function"==typeof e[i])return!0}return!1}(e)?e:{next:e,error:t,complete:r}).next&&(n.next=O),void 0===n.error&&(n.error=O),void 0===n.complete&&(n.complete=O);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function O(){}function w(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}return e+" failed: "+n+" argument "}t.CONSTANTS=i,t.Deferred=f,t.ErrorFactory=d,t.FirebaseError=p,t.Sha1=m,t.assert=o,t.assertionError=a,t.async=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}},t.base64=c,t.base64Decode=u,t.base64Encode=function(e){var t=s(e);return c.encodeByteArray(t,!0)},t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var r=new _(e,t);return r.subscribe.bind(r)},t.decode=g,t.deepCopy=function(e){return l(void 0,e)},t.deepExtend=l,t.errorPrefix=w,t.getUA=h,t.isAdmin=function(e){var t=g(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isBrowserExtension=function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id},t.isElectron=function(){return h().indexOf("Electron/")>=0},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isIE=function(){var e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())},t.isNode=function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}},t.isNodeSdk=function(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isUWP=function(){return h().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){var t=g(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=g(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,i=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),i=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!i&&r>=n&&r<=i},t.issuedAtTime=function(e){var t=g(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=b,t.map=function(e,t,r){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=t.call(r,e[i],i,e));return n},t.querystring=function(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,i=Object.entries(e);n<i.length;n++){var o=i[n];r(o[0],o[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319){var a=i-55296;n++,o(n<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(n)-56320)}i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):i<65536?(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,r,n){var i;if(n<t?i="at least "+t:n>r&&(i=0===r?"none":"no more than "+r),i)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+i+".")},t.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(w(e,t,n)+"must be a valid function.")},t.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(w(e,t,n)+"must be a valid context object.")},t.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(w(e,t,n)+"must be a valid firebase namespace.")}}}]);