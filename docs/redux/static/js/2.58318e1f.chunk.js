(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,n){"use strict";n.r(t);var r=n(104),a=n.n(r),i=n(105),c=n(73),s=n(74),u=n(76),o=n(75),l=n(77),f=n(72),p=n.n(f),m=n(34),h=n.n(m),d=n(102),v=n(111),b=n(106),y=n.n(b),A=n(115),j=n(117);var O=Object(d.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.a.List(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.a.SYNC:return y.a.List().withMutations(function(e){t.items.map(function(t){return e.push(new A.a(t))})});default:return e}}}),g=n(112),T=n(78),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"news-item"},h.a.createElement("h3",{className:"title"},h.a.createElement("a",{href:this.props.item.getUrl()},this.props.item.title)),h.a.createElement("div",null,h.a.createElement("ul",{className:"list-inline"},h.a.createElement("li",{className:"score"},this.props.item.score," points"),h.a.createElement("li",{className:"by"},"by"," ",h.a.createElement(T.Link,{to:T.URL.name("UserPage",{userId:this.props.item.by})},this.props.item.by)),h.a.createElement("li",{className:"time"},this.props.item.getTimeAgo()),h.a.createElement("li",{className:"comments-link"},h.a.createElement(T.Link,{to:T.URL.name("ItemPage",{itemId:this.props.item.id})},this.props.item.descendants," comments")))))}}]),t}(h.a.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.items.map(function(e){return h.a.createElement(w,{key:e.id,item:e})});return h.a.createElement("div",{className:"container"},e,h.a.createElement("h3",null,h.a.createElement(T.Link,{to:T.URL.name("NewsPage",{page:2})},"more")))}}]),t}(h.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement(g.a,null),h.a.createElement(_,{items:this.props.items}))}}]),t}(h.a.Component),E=Object(v.b)(function(e){return{items:e.items}})(k),x=n(110),I=n(79),R=n(122);n.d(t,"default",function(){return D});var D=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.items.length)return h.a.createElement(I.a,null);return h.a.createElement(function(){var t=Object(d.c)(O),n={items:Object(d.a)(R.a,t.dispatch)};return n.items.sync(e.props.items),h.a.createElement(v.a,{store:t},h.a.createElement(E,{actions:n}))},null)}}],[{key:"initialPropsWillGet",value:function(){p.a.start()}},{key:"getInitialProps",value:function(){var e=Object(i.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getTopStoryItems();case 2:return e.t0=e.sent,e.abrupt("return",{items:e.t0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"initialPropsDidGet",value:function(){p.a.done()}}]),t}(h.a.Component)},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.IndexMapEn="second_minute_hour_day_week_month_year".split("_"),t.IndexMapZH="\u79d2_\u5206\u949f_\u5c0f\u65f6_\u5929_\u5468_\u6708_\u5e74".split("_"),t.ATTR_DATA_TID="data-tid",t.SEC_ARRAY=[60,60,24,7,365/7/12,12],t.ATTR_TIMEAGO="data-timeago",t.ATTR_DATETIME="datetime"},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTidAttr=t.getDateAttr=t.getAttr=t.nextInterval=t.diffSec=t.formatDiff=t.toDate=t.toInt=void 0;var r=n(103),a=n(108),i=t.toInt=function(e){return parseInt(e)},c=t.toDate=function(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(i(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e))},s=(t.formatDiff=function(e,t,n){t=a.Locales[t]?t:a.Locales[n]?n:"en";for(var c=0,s=e<0?1:0,u=e=Math.abs(e);e>=r.SEC_ARRAY[c]&&c<r.SEC_ARRAY.length;c++)e/=r.SEC_ARRAY[c];return(e=i(e))>(0===(c*=2)?9:1)&&(c+=1),a.Locales[t](e,c,u)[s].replace("%s",e)},t.diffSec=function(e,t){return((t=t?c(t):new Date)-c(e))/1e3},t.nextInterval=function(e){for(var t=1,n=0,a=Math.abs(e);e>=r.SEC_ARRAY[n]&&n<r.SEC_ARRAY.length;n++)e/=r.SEC_ARRAY[n],t*=r.SEC_ARRAY[n];return a=(a%=t)?t-a:t,Math.ceil(a)},t.getAttr=function(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0});t.getDateAttr=function(e){return s(e,r.ATTR_TIMEAGO)||s(e,r.ATTR_DATETIME)},t.setTidAttr=function(e,t){return e.setAttribute?e.setAttribute(r.ATTR_DATA_TID,t):e.attr?e.attr(r.ATTR_DATA_TID,t):void 0}},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.Locales=void 0;var r=n(103),a=t.Locales={en:function(e,t){if(0===t)return["just now","right now"];var n=r.IndexMapEn[parseInt(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]},zh_CN:function(e,t){if(0===t)return["\u521a\u521a","\u7247\u523b\u540e"];var n=r.IndexMapZH[parseInt(t/2)];return[e+" "+n+"\u524d",e+" "+n+"\u540e"]}};t.register=function(e,t){a[e]=t}},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.run=t.cancel=t.Timers=void 0;var r=n(107),a=n(103),i=t.Timers=[],c=function(e){e&&(clearTimeout(e),delete i[e])};t.cancel=function(e){if(e)c((0,r.getAttr)(e,a.ATTR_DATA_TID));else for(var t in i)c(t)},t.run=function(e,t){var n=setTimeout(function(){c(n),e()},t);return i[n]=0,n}},110:function(e,t,n){"use strict";var r=n(104),a=n.n(r),i=n(105),c=n(73),s=n(74),u=n(118),o=n.n(u),l=(n(119),n(120)),f=n.n(l),p=new(function(){function e(){Object(c.a)(this,e),this.displayNumber=20,o.a.apps.length||o.a.initializeApp({databaseURL:"https://hacker-news.firebaseio.com"}),this.api=o.a.database().ref("/v0"),this.cache=f()({max:500,maxAge:36e5})}return Object(s.a)(e,[{key:"getTopStoryItems",value:function(){var e=Object(i.a)(a.a.mark(function e(){var t,n,r,c,s=this,u=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,e.next=3,this.getTopStoryItemIds();case 3:return n=e.sent,r=this.displayNumber*(t-1),c=r+this.displayNumber,e.next=8,Promise.all(n.slice(r,c).map(function(){var e=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.findItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getTopStoryItemIds",value:function(){var e=Object(i.a)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cache.has("topstories")){e.next=2;break}return e.abrupt("return",this.cache.get("topstories"));case 2:return e.next=4,this.api.child("/topstories").once("value");case 4:return t=e.sent,n=t.val(),this.cache.set("topstories",n),e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"findItem",value:function(){var e=Object(i.a)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cache.has("item/".concat(t))){e.next=2;break}return e.abrupt("return",this.cache.get("item/".concat(t)));case 2:return e.next=4,this.api.child("/item/".concat(t)).once("value");case 4:return n=e.sent,r=n.val(),this.cache.set("item/".concat(t),r),e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getComments",value:function(){var e=Object(i.a)(a.a.mark(function e(t){var n,r=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,Promise.all(t.map(function(){var e=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.findItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 4:return n=e.sent,e.next=7,Promise.all(n.map(function(){var e=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getComments(t.kids);case 2:return t.comments=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"findUser",value:function(){var e=Object(i.a)(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cache.has("/user/".concat(t))){e.next=2;break}return e.abrupt("return",this.cache.get("/user/".concat(t)));case 2:return e.next=4,this.api.child("/user/".concat(t)).once("value");case 4:return n=e.sent,r=n.val(),this.cache.set("/user/".concat(t),r),e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}());t.a=p},112:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(73),a=n(74),i=n(76),c=n(75),s=n(77),u=n(34),o=n.n(u),l=n(78),f=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"navbar navbar-default"},o.a.createElement("nav",{className:"container"},o.a.createElement("div",{className:"d-flex justify-content-between hidden-lg-up"},o.a.createElement(l.Link,{to:l.URL.name("IndexPage"),className:"navbar-brand"},"Redux Example - Hacker News"))))}}]),t}(o.a.Component)},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(116),a=n(108),i=n(109),c=function(e,t){return new r.TimeAgo(e,t)};c.register=a.register,c.cancel=i.cancel,t.default=c,e.exports=t.default},115:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(73),a=n(74),i=n(76),c=n(75),s=n(77),u=n(106),o=n.n(u),l=n(78),f=n(114),p=n.n(f),m=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"getUrl",value:function(){return this.url?this.url:l.URL.name("ItemPage",{itemId:this.id})}},{key:"getTimeAgo",value:function(){return p()().format(new Date(1e3*this.time))}}]),t}(o.a.Record({by:"",descendants:0,id:null,score:0,time:null,title:"",type:"",url:"",kids:null}))},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimeAgo=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(107),i=n(109);t.TimeAgo=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nowDate=t,this.defaultLocale=n||"en"}return r(e,[{key:"setLocale",value:function(e){this.defaultLocale=e}},{key:"doRender",value:function(e,t,n){var r=this,c=(0,a.diffSec)(t,this.nowDate);e.innerHTML=(0,a.formatDiff)(c,n,this.defaultLocale);var s=(0,i.run)(function(){r.doRender(e,t,n)},Math.min(1e3*(0,a.nextInterval)(c),2147483647));(0,a.setTidAttr)(e,s)}},{key:"render",value:function(e,t){void 0===e.length&&(e=[e]);for(var n=void 0,r=0,c=e.length;r<c;r++)n=e[r],(0,i.cancel)(n),this.doRender(n,(0,a.getDateAttr)(n),t)}},{key:"format",value:function(e,t){return(0,a.formatDiff)((0,a.diffSec)(e,this.nowDate),t,this.defaultLocale)}}]),e}()},117:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={SYNC:Symbol("items/sync")}},122:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(117),a={sync:function(e){return{type:r.a.SYNC,items:e}}}}}]);
//# sourceMappingURL=2.58318e1f.chunk.js.map