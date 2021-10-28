"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[961],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,h=f["".concat(u,".").concat(p)]||f[p]||d[p]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7901:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:3,title:"Redux-Saga"},u="Use with Redux-Saga",l={unversionedId:"recepies/redux-saga",id:"recepies/redux-saga",isDocsHomePage:!1,title:"Redux-Saga",description:"Redux-Offline has partial support for Sagas.",source:"@site/docs/recepies/redux-saga.md",sourceDirName:"recepies",slug:"/recepies/redux-saga",permalink:"/redux-offline/docs/recepies/redux-saga",editUrl:"https://github.com/redux-offline/redux-offline/blob/develop/docs/recepies/redux-saga.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Redux-Saga"},sidebar:"tutorialSidebar",previous:{title:"Immutable",permalink:"/redux-offline/docs/recepies/immutable"},next:{title:"Empty Outbox",permalink:"/redux-offline/docs/recepies/empty-outbox"}},c=[{value:"What does this mean?",id:"what-does-this-mean",children:[],level:3},{value:"Why would you need Redux-Saga then?",id:"why-would-you-need-redux-saga-then",children:[],level:3},{value:"How to configure your store?",id:"how-to-configure-your-store",children:[],level:2}],d={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-with-redux-saga"},"Use with Redux-Saga"),(0,a.kt)("p",null,"Redux-Offline has partial support for Sagas."),(0,a.kt)("h3",{id:"what-does-this-mean"},"What does this mean?"),(0,a.kt)("p",null,"Well, when dispatching an offline enhanced action, the effect reconcilier will handle the API requests and responses.\nThis means that for offline actions you won't be able to manage the requests from within a saga. There's currently some discussions about changing the architecture to support sagas and other inside the effect reconcilier.\nUntil then however, support will be limited to non API effect sagas."),(0,a.kt)("h3",{id:"why-would-you-need-redux-saga-then"},"Why would you need Redux-Saga then?"),(0,a.kt)("p",null,"Besides the improvement in maintainability that sagas can bring to your application, a good use case for sagas is the ability to subscribe/listen to actions.\nThis allows us to listen for a particular action, and dispatch a new action/thunk/saga afterwards, thus chaining actions and side-effects."),(0,a.kt)("h2",{id:"how-to-configure-your-store"},"How to configure your store?"),(0,a.kt)("p",null,"In the past how to configure your Redux store so that Redux-Saga could listen to Redux-Offline actions was somewhat confusing. Now we hope to clear things up with the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore, compose, combineReducers, applyMiddleware } from 'redux';\nimport { createOffline } from '@redux-offline/redux-offline';\nimport offlineConfig from '@redux-offline/redux-offline/lib/defaults';\nimport * as reducers from './reducers';\nimport { helloSaga } from './sagas';\n\nconst sagaMiddleware = createSagaMiddleware();\nconst rootReducer = combineReducers(reducers);\nconst middlewareList = [\n  /* other middleware here */\n  sagaMiddleware\n];\n\nconst {\n    middleware: offlineMiddleware,\n    enhanceReducer,\n    enhanceStore\n  } = createOffline(offlineConfig);\nconst middleware = applyMiddleware(...middlewareList, offlineMiddleware);\n\nconst store = createStore(enhanceReducer(reducer), compose(enhanceStore, middleware));\nsagaMiddleware.run(helloSaga);\n")),(0,a.kt)("p",null,"For more info about integration between these 2 libraries, please check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redux-offline/redux-offline/issues/90"},"here")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redux-offline/redux-offline/issues/173"},"here"),"."))}f.isMDXComponent=!0}}]);