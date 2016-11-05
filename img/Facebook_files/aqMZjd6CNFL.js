if (self.CavalryLogger) { CavalryLogger.start_js(["Dkcqw"]); }

__d("XConversationNubTogglePinController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/conversation\/nub_story\/toggle_pin\/",{ft_id:{type:"String"},pin:{type:"Bool",defaultValue:false},with_render:{type:"Bool",defaultValue:false}});}),null);
__d('ConversationNubUtils',['csx','Arbiter','AsyncRequest','DOM','Event','EventListener','Keys','XConversationNubTogglePinController'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i='ConversationNubUtils/closeTab',j='ConversationNubUtils/unpinnedFromHeader',k='ConversationNubUtils/recheckTabVisibility';function l(x,y,z){var aa=c('XConversationNubTogglePinController').getURIBuilder().setString('ft_id',x+'').setBool('pin',y).getURI(),ba=new (c('AsyncRequest'))().setURI(aa).setMethod('POST');if(z)ba.setAllowCrossPageTransition(true);ba.send();}function m(x,y){l(x,true,y);}function n(x,y){l(x,false,y);}function o(x){m(x);}function p(x){n(x);}function q(x){m(x,true);}function r(x){n(x,true);}function s(x){return c('DOM').scry(x,"._4iz6")[0];}function t(x,y,z){var aa=function ba(){z();};y.addSubscriptions(c('EventListener').listen(x,'click',aa),c('EventListener').listen(x,'keydown',function(ba){if(c('Event').getKeyCode(ba)===c('Keys').RETURN)aa();}));}function u(x){c('Arbiter').inform(i,{tabID:x});}function v(x){c('Arbiter').inform(j,{ftID:x});}function w(x){c('Arbiter').inform(k,{tab:x});}f.exports={CLOSE_TAB_EVENT:i,UNPIN_FROM_HEADER_EVENT:j,sendPinRequest:o,sendUnpinRequest:p,sendPinRequestAcrossTransitions:q,sendUnpinRequestAcrossTransitions:r,getCloseButtonElem:s,addCloseButtonListeners:t,informShouldCloseTab:u,informDidUnpinFromHeaderMenu:v,informShouldRecheckTabVisibility:w};}),null);
__d('ConversationNubHeader',['csx','ArbiterMixin','Bootloader','ConversationNubUtils','DOM','Event','EventListener','Keys','SubscriptionsHandler','ifRequired','mixin'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();function k(m,n){return c('EventListener').listen(m,'keydown',function(o){if(c('Event').getKeyCode(o)===c('Keys').RETURN)n(o);});}i=babelHelpers.inherits(l,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function l(m,n){j.constructor.call(this);this.$ConversationNubHeader1=m;this.$ConversationNubHeader3=n;this.$ConversationNubHeader4=null;this.$ConversationNubHeader5=false;this.$ConversationNubHeader2=new (c('SubscriptionsHandler'))();this.$ConversationNubHeader6();}l.prototype.$ConversationNubHeader6=function(){var m=this.$ConversationNubHeader1;this.$ConversationNubHeader2.addSubscriptions(c('EventListener').listen(m,'click',this.$ConversationNubHeader7.bind(this)));var n=c('ConversationNubUtils').getCloseButtonElem(m);if(n)c('ConversationNubUtils').addCloseButtonListeners(n,this.$ConversationNubHeader2,this.$ConversationNubHeader8.bind(this));var o=this.$ConversationNubHeader9();if(o)this.$ConversationNubHeader2.addSubscriptions(c('EventListener').listen(o,'click',this.$ConversationNubHeader10.bind(this)),k(o,this.$ConversationNubHeader10.bind(this)));var p=this.$ConversationNubHeader11();if(p)this.$ConversationNubHeader2.addSubscriptions(c('EventListener').listen(p,'click',this.$ConversationNubHeader12.bind(this)),c('EventListener').listen(p,'mouseover',this.$ConversationNubHeader13.bind(this)),c('EventListener').listen(p,'focus',this.$ConversationNubHeader14.bind(this)),k(p,this.$ConversationNubHeader15.bind(this)));};l.prototype.$ConversationNubHeader11=function(){return c('DOM').scry(this.$ConversationNubHeader1,"._1rf1")[0];};l.prototype.$ConversationNubHeader9=function(){return c('DOM').scry(this.$ConversationNubHeader1,"._4a56")[0];};l.prototype.$ConversationNubHeader16=function(){return c('ConversationNubUtils').getCloseButtonElem(this.$ConversationNubHeader1);};l.prototype.$ConversationNubHeader8=function(){this.inform('closeButton');};l.prototype.$ConversationNubHeader10=function(m){if(m.type==='click')m.kill();this.inform('minimizeButton');};l.prototype.$ConversationNubHeader7=function(){this.inform('clickHeader');};l.prototype.$ConversationNubHeader17=function(){this.inform('showMenu');};l.prototype.$ConversationNubHeader18=function(){this.inform('hideMenu');var m=this.$ConversationNubHeader11();m&&m.blur();};l.prototype.$ConversationNubHeader19=function(){this.inform('menuPermalinkClick');};l.prototype.$ConversationNubHeader20=function(m){if(this.$ConversationNubHeader4)return;var n=this.$ConversationNubHeader11();if(!n)return;if(m)this.$ConversationNubHeader5=true;c('Bootloader').loadModules(["React","ReactDOM","ConversationNubHeaderMenu.react"],function(o,p,q){var r=babelHelpers['extends']({},this.$ConversationNubHeader3(),{onMenuShow:this.$ConversationNubHeader17.bind(this),onMenuHide:this.$ConversationNubHeader18.bind(this),onPermalinkClick:this.$ConversationNubHeader19.bind(this),showOnMount:this.$ConversationNubHeader5});this.$ConversationNubHeader4=p.render(o.createElement(q,r),n);}.bind(this),'ConversationNubHeader');};l.prototype.$ConversationNubHeader12=function(m){m.kill();this.$ConversationNubHeader20(true);};l.prototype.$ConversationNubHeader13=function(){this.$ConversationNubHeader20(false);};l.prototype.$ConversationNubHeader14=function(){this.$ConversationNubHeader20(false);};l.prototype.$ConversationNubHeader15=function(){if(this.$ConversationNubHeader4){this.$ConversationNubHeader4.toggle();}else this.$ConversationNubHeader20(true);};l.prototype.hideMenu=function(){this.$ConversationNubHeader4&&this.$ConversationNubHeader4.hide();};l.prototype.destroy=function(){var m=this.$ConversationNubHeader11();if(m&&this.$ConversationNubHeader4)c('ifRequired')('ReactDOM',function(n){n.unmountComponentAtNode(m);});this.$ConversationNubHeader2.release();};f.exports=l;}),null);
__d('ConversationNubTabsUpdateEventController',['Arbiter'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h='ConversationNub/tabsUpdated',i=false;function j(n){if(!i)c('Arbiter').inform(h,n);}function k(n){return c('Arbiter').subscribe(h,function(o,p){i=true;n(p);i=false;});}function l(n){n.minimize();j();}function m(n){n.popOut();j();}f.exports={informTabsUpdated:j,subscribeToTabsUpdated:k,minimizeAndInformTabUpdate:l,popOutAndInformTabUpdate:m};}),null);
__d('ConversationNub',['csx','cx','Arbiter','CSS','ConversationNubHeader','ConversationNubTabsUpdateEventController','ConversationNubUtils','DOM','EventListener','SubscriptionsHandler','URI','debounce'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('ConversationNubTabsUpdateEventController').minimizeAndInformTabUpdate,k=c('ConversationNubTabsUpdateEventController').popOutAndInformTabUpdate,l=10,m=500,n=100;function o(p,q,r){this.$ConversationNub1=p;this.$ConversationNub5=q;var s=r.permalink_uri,t=r.ft_id,u=r.title,v=r.init_without_badge,w=r.should_show_nux;this.$ConversationNub7=s?new (c('URI'))(s):null;this.$ConversationNub6=t;this.$ConversationNub8=u;this.$ConversationNub19=w===true;this.$ConversationNub4=-1;this.$ConversationNub10=false;this.$ConversationNub12=null;this.$ConversationNub11=false;this.$ConversationNub13=false;this.$ConversationNub14=null;this.$ConversationNub18=0;this.$ConversationNub15={};this.$ConversationNub16={};this.$ConversationNub9=new (c('SubscriptionsHandler'))();this.$ConversationNub20();this.$ConversationNub21();if(v){this.$ConversationNub17=false;}else{this.$ConversationNub17=true;this.$ConversationNub22(1);this.$ConversationNub23(true);}}o.prototype.$ConversationNub20=function(){var p=this.$ConversationNub24();if(p){this.$ConversationNub9.addSubscriptions(c('EventListener').listen(p,'click',this.$ConversationNub25.bind(this)),c('EventListener').listen(p,'mouseenter',this.$ConversationNub26.bind(this)),c('EventListener').listen(p,'mouseleave',this.$ConversationNub27.bind(this)));var q=c('ConversationNubUtils').getCloseButtonElem(p);if(q)c('ConversationNubUtils').addCloseButtonListeners(q,this.$ConversationNub9,this.$ConversationNub28.bind(this));}var r=this.$ConversationNub29();if(r){this.$ConversationNub10=true;this.$ConversationNub9.addSubscriptions(c('EventListener').listen(r,'scroll',c('debounce')(this.$ConversationNub30.bind(this),n)),c('Arbiter').subscribe('reflow',this.$ConversationNub31.bind(this)));}};o.prototype.$ConversationNub21=function(){var p=this.$ConversationNub32();if(!p){this.$ConversationNub2=null;return;}var q=function(){return {permalinkURI:this.$ConversationNub7,ftID:this.$ConversationNub6,tabID:this.$ConversationNub5};}.bind(this),r=new (c('ConversationNubHeader'))(p,q),s=this.$ConversationNub33.bind(this);this.$ConversationNub9.addSubscriptions(r.subscribe('closeButton',this.$ConversationNub28.bind(this)),r.subscribe('showMenu',this.$ConversationNub34.bind(this)),r.subscribe('hideMenu',this.$ConversationNub35.bind(this)),r.subscribe('minimizeButton',s),r.subscribe('clickHeader',s),r.subscribe('menuPermalinkClick',s));this.$ConversationNub2=r;};o.prototype.$ConversationNub32=function(){return this.$ConversationNub1&&c('DOM').scry(this.$ConversationNub1,".fbNubFlyoutTitlebar")[0];};o.prototype.$ConversationNub24=function(){return this.$ConversationNub1&&c('DOM').scry(this.$ConversationNub1,".fbNubButton")[0];};o.prototype.$ConversationNub29=function(){if(!this.$ConversationNub3&&this.$ConversationNub1)this.$ConversationNub3=c('DOM').scry(this.$ConversationNub1,".uiScrollableAreaWrap")[0];return this.$ConversationNub3;};o.prototype.$ConversationNub36=function(){var p=this.$ConversationNub24();if(p)return c('DOM').scry(p,"._37op")[0];return null;};o.prototype.$ConversationNub28=function(){c('ConversationNubUtils').informShouldCloseTab(this.$ConversationNub5);};o.prototype.$ConversationNub33=function(){j(this);};o.prototype.$ConversationNub34=function(){this.$ConversationNub1&&c('CSS').addClass(this.$ConversationNub1,"_1uw3");};o.prototype.$ConversationNub35=function(){this.$ConversationNub1&&c('CSS').removeClass(this.$ConversationNub1,"_1uw3");};o.prototype.$ConversationNub25=function(){if(this.$ConversationNub11){j(this);}else k(this);};o.prototype.$ConversationNub26=function(){if(this.$ConversationNub13)this.$ConversationNub14=new Date();};o.prototype.$ConversationNub27=function(){var p=this.$ConversationNub14;if(p&&this.$ConversationNub13){var q=new Date();if(q-p>=m)this.$ConversationNub23(false);}this.$ConversationNub14=null;};o.prototype.$ConversationNub37=function(){var p=this.$ConversationNub29();if(p){var q=p.scrollHeight;if(q>0&&!this.$ConversationNub38(p))p.scrollTop=q;}};o.prototype.$ConversationNub38=function(p){p=p||this.$ConversationNub29();return !!(p&&p.scrollTop>=p.scrollHeight-p.clientHeight-l);};o.prototype.$ConversationNub30=function(){if(!this.$ConversationNub11)return;this.$ConversationNub10=this.$ConversationNub38();c('ConversationNubUtils').informShouldRecheckTabVisibility(this);};o.prototype.$ConversationNub31=function(){if(!this.$ConversationNub11)return;if(this.$ConversationNub10){this.$ConversationNub37();this.$ConversationNub12&&clearTimeout(this.$ConversationNub12);this.$ConversationNub12=setTimeout(function(){if(this.$ConversationNub10)this.$ConversationNub37();}.bind(this),100);}};o.prototype.$ConversationNub22=function(p){this.$ConversationNub18=p;var q=this.$ConversationNub36();if(!q)return;var r=p>0;if(r){c('DOM').setContent(q,p);c('CSS').show(q);}else{c('CSS').hide(q);c('DOM').setContent(q,p);}};o.prototype.$ConversationNub23=function(p){this.$ConversationNub13=p;if(this.$ConversationNub1)c('CSS').conditionClass(this.$ConversationNub1,"_53tf",p);};o.prototype.getRootDOM=function(){return this.$ConversationNub1;};o.prototype.getShouldShowNux=function(){return this.$ConversationNub19;};o.prototype.getTabID=function(){return this.$ConversationNub5;};o.prototype.getFeedbackTargetID=function(){return this.$ConversationNub6;};o.prototype.getPermalinkURI=function(){return this.$ConversationNub7;};o.prototype.getTitle=function(){return this.$ConversationNub8;};o.prototype.getBadgeCount=function(){return this.$ConversationNub18;};o.prototype.getIsRaised=function(){return this.$ConversationNub11;};o.prototype.markCommentsAsSeenWithoutBadging=function(p){p.forEach(function(q){this.$ConversationNub15[q]=true;}.bind(this));};o.prototype.attemptAddNewCommentsToBadge=function(p){p.forEach(function(s){if(this.$ConversationNub15[s])return;this.$ConversationNub15[s]=true;this.$ConversationNub16[s]=true;}.bind(this));var q=Object.keys(this.$ConversationNub16).length;if(this.$ConversationNub17)q+=1;var r=this.$ConversationNub18;this.$ConversationNub22(q);this.$ConversationNub23(q>0&&q>r);};o.prototype.clearBadge=function(){this.$ConversationNub16={};this.$ConversationNub17=false;this.$ConversationNub22(0);this.$ConversationNub23(false);};o.prototype.popOutAndInformTabUpdate=function(){this.popOut();c('ConversationNubTabsUpdateEventController').informTabsUpdated();};o.prototype.popOut=function(){if(this.$ConversationNub1)c('CSS').addClass(this.$ConversationNub1,"_5r93");this.$ConversationNub11=true;this.clearBadge();if(this.$ConversationNub10)this.$ConversationNub37();};o.prototype.minimize=function(){if(this.$ConversationNub1)c('CSS').removeClass(this.$ConversationNub1,"_5r93");this.$ConversationNub11=false;this.$ConversationNub2&&this.$ConversationNub2.hideMenu();this.clearBadge();};o.prototype.forceReflow=function(){this.$ConversationNub31();};o.prototype.destroy=function(){this.minimize();this.$ConversationNub9.release();this.$ConversationNub2&&this.$ConversationNub2.destroy();this.$ConversationNub2=null;this.$ConversationNub12&&clearTimeout(this.$ConversationNub12);if(this.$ConversationNub1){c('DOM').remove(this.$ConversationNub1);c('Arbiter').inform('ConversationNub/destroy',{root:this.$ConversationNub1});this.$ConversationNub1=null;}};f.exports=o;}),null);
__d('ConversationNubPermalinkUtils',['URI','isFacebookURI'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(l){return l.substr(-1)==='/'?l.slice(0,-1):l;}function i(l,m){var n=l.getPath(),o=m.getPath();return h(n)===h(o);}function j(l,m,n){var o=l.getQueryData(),p=m.getQueryData(),q=o[n],r=p[n];if(q==null&&r==null)return true;return q===r;}function k(l){var m=new (c('URI'))(window.location.href);return (m&&l&&c('isFacebookURI')(m)&&c('isFacebookURI')(l)&&i(m,l)&&j(m,l,'fbid')&&j(m,l,'story_fbid'));}f.exports={isOnPermalink:k};}),null);
__d('ConversationNubTabState',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.$ConversationNubTabState1={};this.$ConversationNubTabState2=[];this.$ConversationNubTabState3=Infinity;}h.prototype.setMaxDockTabs=function(i){this.$ConversationNubTabState3=i;};h.prototype.getNumDockTabs=function(){var i=this.$ConversationNubTabState3,j=this.getTotalTabCount();return Math.min(i,j);};h.prototype.addTab=function(i,j){var k=this.getTab(i);if(k)return;this.$ConversationNubTabState1[i]=j;this.$ConversationNubTabState2.push(j);};h.prototype.getTab=function(i){return this.$ConversationNubTabState1[i]||null;};h.prototype.isTabInDock=function(i){var j=this.getTab(i);if(!j)return false;var k=this.$ConversationNubTabState4(j);return 0<=k&&k<this.getNumDockTabs();};h.prototype.$ConversationNubTabState4=function(i){return this.$ConversationNubTabState2.indexOf(i);};h.prototype.deleteTab=function(i){var j=this.getTab(i);if(j){delete this.$ConversationNubTabState1[i];var k=this.$ConversationNubTabState4(j);if(k>-1)this.$ConversationNubTabState2.splice(k,1);j.destroy();return true;}return false;};h.prototype.moveTabToDockLeft=function(i){var j=this.getTab(i);if(!j)return;var k=this.$ConversationNubTabState4(j),l=this.$ConversationNubTabState2.length,m=this.getNumDockTabs();if(k<0||l===0){return;}else if(m===0){if(k!==0){this.$ConversationNubTabState2.splice(k,1);this.$ConversationNubTabState2.unshift(j);}return;}var n=m-1;if(k===n)return;this.$ConversationNubTabState2.splice(k,1);if(k<n)n-=1;this.$ConversationNubTabState2.splice(n,0,j);};h.prototype.getUnsortedTabs=function(){return this.$ConversationNubTabState2;};h.prototype.getSortedTabsFromRightToLeft=function(){return this.$ConversationNubTabState2;};h.prototype.getTotalTabCount=function(){return this.getUnsortedTabs().length;};h.prototype.getTabsForDock=function(){var i=this.getNumDockTabs();return this.$ConversationNubTabState2.slice(0,i).reverse();};h.prototype.getTabsForMenu=function(){var i=this.getNumDockTabs();return this.$ConversationNubTabState2.slice(i).reverse();};f.exports=h;}),null);
__d('ConversationNubViewportManager',['DockTabsViewportCalculator','DockTabsViewportPinnedConversationTabUtils'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('DockTabsViewportPinnedConversationTabUtils').getMinRequiredWidthForFirstConvoTab,i=c('DockTabsViewportPinnedConversationTabUtils').getPinnedConvoSelectorWidth;function j(k,l,m){this.$ConversationNubViewportManager1=k;this.$ConversationNubViewportManager3=l;this.$ConversationNubViewportManager2=c('DockTabsViewportCalculator').getInstance(this.$ConversationNubViewportManager1);this.$ConversationNubViewportManager2&&this.$ConversationNubViewportManager2.registerPinnedConvoTabCallbacks(babelHelpers['extends']({},m,{pinnedConvoTabStateGetter:function(){return this.$ConversationNubViewportManager3;}.bind(this)}));}j.prototype.getNumDockTabsToShow=function(k){return this.getCouldFitAtLeastOneDockTab(k)?1:0;};j.prototype.getCouldFitAtLeastOneDockTab=function(k){var l=h();return l<=k;};j.prototype.forceRecalculatePinnedConvoTabs=function(k){this.$ConversationNubViewportManager2&&this.$ConversationNubViewportManager2.forceRecalculatePinnedConvoTabs(k);};f.exports=j;}),null);
__d('ConversationNubVisibilityDedupeUtils',['Bootloader','emptyFunction','ifRequired'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(j){c('Bootloader').loadModules(["UFICommentVisibilityStore"],j,'ConversationNubVisibilityDedupeUtils');}function i(j){return c('ifRequired')('UFICommentVisibilityStore',function(k){return (k.isFeedbackTargetVisible(j));},c('emptyFunction').thatReturnsFalse);}f.exports={bootloadUFIVisibilityModule:h,isFeedbackTargetVisible:i};}),null);
__d("XNotificationNubStoryController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/conversation\/nub_story\/",{notif_id:{type:"Int",required:true},force_minimized:{type:"Bool",defaultValue:false}});}),null);
__d('NotificationConversationController',['csx','cx','Arbiter','AsyncRequest','Bootloader','ConversationNub','ConversationNubTabState','ConversationNubTabsUpdateEventController','ConversationNubPermalinkUtils','ConversationNubUtils','ConversationNubViewportManager','ConversationNubVisibilityDedupeUtils','CSS','DOM','NotificationConstants','NotificationUpdates','SubscriptionsHandler','URI','XNotificationNubStoryController','ge','goURI','ifRequired'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('NotificationConstants').PayloadSourceType,k=j.LIVE_SEND,l=j.OTHER_APPLICATION,m=c('ConversationNubVisibilityDedupeUtils').bootloadUFIVisibilityModule,n=c('ConversationNubVisibilityDedupeUtils').isFeedbackTargetVisible,o=1,p=new (c('ConversationNubTabState'))(),q={},r=null,s=null,t=null,u=null,v=null,w=null,x=false,y=null,z=null;function aa(){if(!s)s=c('DOM').scry(c('ge')('pagelet_dock'),"._1mw-")[0];return s;}function ba(){if(!t){var ea=aa();if(ea)t=c('DOM').scry(ea,"._1tvj")[0];}return t;}function ca(){if(!u){var ea=aa();if(ea)u=c('DOM').scry(ea,"._2ikx .fbNubButton")[0];}return u;}var da={init:function ea(){if(x)return;x=true;var fa='update-notifications',ga=new (c('SubscriptionsHandler'))();ga.addSubscriptions(c('NotificationUpdates').subscribe(fa,function(ha,ia){if(ia.payloadsource===k||ia.payloadsource===l){var ja=ia.nodes;if(ja&&ja.length)this._handleNewNotifications(ja);}}.bind(this)),c('ConversationNubTabsUpdateEventController').subscribeToTabsUpdated(this._onTabsUpdated.bind(this)),c('Arbiter').subscribe(c('ConversationNubUtils').CLOSE_TAB_EVENT,function(ha,ia){var ja=ia||{},ka=ja.tabID;if(ka)this._closeTab(ka);}.bind(this)));y=ga;m(function(ha){ga.addSubscriptions(ha.addListener(this._onUFICommentVisibilityStoreChanged.bind(this)));}.bind(this));},_recalculateDockSize:function ea(fa){var ga=r?r.getNumDockTabsToShow(fa):o;p.setMaxDockTabs(ga);},_onAvailableWidthChanged:function ea(fa,ga){this._recalculateDockSize(fa);if(ga){var ha=ga.tabToPromote,ia=ga.tabToOpenIfInDock;if(ha&&!p.isTabInDock(ha.getTabID()))p.moveTabToDockLeft(ha.getTabID());if(ia&&p.isTabInDock(ia.getTabID()))ia.popOut();}this._rerenderTabs(fa);},_onTabsUpdated:function ea(fa){r&&r.forceRecalculatePinnedConvoTabs(fa);},_rerenderTabs:function ea(fa){var ga=p.getTotalTabCount(),ha=p.getNumDockTabs(),ia=r&&r.getCouldFitAtLeastOneDockTab(fa),ja=ga>0&&ia,ka=ha<ga&&ja,la=aa();if(la){c('CSS').conditionClass(la,"_1tvf",ja);c('CSS').conditionClass(la,"_1dex",ka);c('CSS').conditionClass(la,"_1tvi",ka);}var ma=p.getTabsForDock();ma.forEach(function(oa){if(oa.getIsRaised())oa.clearBadge();});var na=p.getTabsForMenu();this._renderDockedTabGroup(ma);this._renderSelectorNubMenu(na);},_loadStoryFromNotif:function ea(fa,ga,ha,ia){if(!p.getTab(ga))this._requestStoryFromServer(fa,ha,ia);},_handleNewNotifications:function ea(fa){fa.forEach(function(ga){var ha=ga.pinnedConvoConfig,ia=ga.tracking;if(!ha)return;var ja=ha.enabled,ka=ha.tab_id,la=ha.ft_id,ma=ha.permalink_uri;if(!ja)return;var na=JSON.parse(ia),oa=ka||na.content_id,pa=ma?new (c('URI'))(ma):null;this._loadStoryFromNotif(na.alert_id,oa,la,pa);}.bind(this));},_requestStoryFromServer:function ea(fa,ga,ha){if(q[fa])return;var ia=c('XNotificationNubStoryController').getURIBuilder().setInt('notif_id',fa);if(c('ConversationNubPermalinkUtils').isOnPermalink(ha)||n(ga))ia.setBool('force_minimized',true);q[fa]=true;new (c('AsyncRequest'))().setURI(ia.getURI()).setAllowCrossPageTransition(true).setFinallyHandler(function(){delete q[fa];}).send();},_onUFICommentVisibilityStoreChanged:function ea(){var fa=false;p.getUnsortedTabs().forEach(function(ga){if(ga.getBadgeCount()>0&&n(ga.getFeedbackTargetID())){ga.clearBadge();fa=true;}});if(fa)c('ConversationNubTabsUpdateEventController').informTabsUpdated();},_onUFICommentsUpdated:function ea(fa){var ga=true;p.getUnsortedTabs().forEach(function(ha){var ia=ha.getFeedbackTargetID(),ja=fa[ia],ka=ja?Object.keys(ja):[];if(ka.length){var la=ha.getBadgeCount();if(n(ia)){ha.markCommentsAsSeenWithoutBadging(ka);ha.clearBadge();}else ha.attemptAddNewCommentsToBadge(ka);var ma=ha.getBadgeCount();if(la!==ma)ga=true;}});if(ga)c('ConversationNubTabsUpdateEventController').informTabsUpdated();},_bootloadUFIUpdateManager:function ea(){if(z)return;c('Bootloader').loadModules(["ConversationNubUFICentralUpdateManager"],function(fa){if(z)return;z=new fa(this._onUFICommentsUpdated.bind(this));}.bind(this),'NotificationConversationController');},_renderDockedTabGroup:function ea(fa){var ga=ba();if(!ga)return;c('Bootloader').loadModules(["React","ReactDOM","ConversationNubDockedTabGroup.react"],function(ha,ia,ja){w=ia.render(ha.createElement(ja,{dockTabs:fa}),ga);},'NotificationConversationController');},_onSelectCollapsedTab:function ea(fa){fa.popOut();c('ConversationNubTabsUpdateEventController').informTabsUpdated({tabToPromote:fa});},_renderSelectorNubMenu:function ea(fa){var ga=ca();if(!ga)return;c('Bootloader').loadModules(["React","ReactDOM","ConversationNubCollapsedSelectorMenu.react"],function(ha,ia,ja){v=ia.render(ha.createElement(ja,{menuTabs:fa,onTabSelected:this._onSelectCollapsedTab.bind(this)}),ga);}.bind(this),'NotificationConversationController');},_initViewportManager:function ea(){if(!r){var fa=aa();if(fa){var ga={onAvailableWidthChanged:this._onAvailableWidthChanged.bind(this)};r=new (c('ConversationNubViewportManager'))(fa,p,ga);}}},storyFromServer:function ea(fa,ga){if(!x)return;var ha=ga.tab_id,ia=ga.ft_id,ja=ga.promote_on_init,ka=ga.attempt_open_on_init,la=p.getTab(ha);if(la){if(ja||ka)c('ConversationNubTabsUpdateEventController').informTabsUpdated({tabToPromote:ja?la:null,tabToOpenIfInDock:ka?la:null});return;}ga.init_without_badge=ga.init_without_badge||n(ia);var ma=new (c('ConversationNub'))(fa,ha,ga);p.addTab(ha,ma);this._bootloadUFIUpdateManager();this._initViewportManager();c('ConversationNubTabsUpdateEventController').informTabsUpdated({tabToPromote:ja?ma:null,tabToOpenIfInDock:ka?ma:null});},_closeTab:function ea(fa){var ga=p.deleteTab(fa);if(ga)c('ConversationNubTabsUpdateEventController').informTabsUpdated();},unsubscribe:function ea(){y&&y.release();y=null;z&&z.destroy();z=null;c('ifRequired')('ReactDOM',function(fa){var ga=ca();if(v&&ga)fa.unmountComponentAtNode(ga);var ha=ba();if(w&&ha)fa.unmountComponentAtNode(ha);});}};f.exports=da;}),null);
__d("XPubcontentPymlFeedbackController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/pyml\/feedback\/",{ego_service:{type:"String",required:true},pageids:{type:"String",required:true},__asyncDialog:{type:"Int"}});}),null);
__d('PYMLEmployeeFeedbackHeaderLink',['csx','cx','DOM','URI','XPubcontentPymlFeedbackController'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={_isNullOrEmpty:function k(l){return l===null||typeof l==='undefined'||l.length===0;},setup:function k(l,m){if(this._isNullOrEmpty(l))return;var n=l.getAttribute('data-ego-fbid');if(this._isNullOrEmpty(n))return;var o=c('DOM').scry(l,'^.ego_section')[0];if(this._isNullOrEmpty(o))return;var p=c('DOM').scry(o,"._5x1_")[0];if(this._isNullOrEmpty(p)){var q=c('XPubcontentPymlFeedbackController').getURIBuilder().setString('pageids',n).setString('ego_service',m).getURI(),r=c('DOM').create('div',{className:"_z1u"});p=c('DOM').create('a',{rel:'dialog-post',className:"_5x1_ rfloat uiHeaderActions",href:q},'Feedback');var s=c('DOM').scry(o,"._ohf")[0];c('DOM').insertAfter(s.lastChild,r);c('DOM').appendContent(r,p);}else{var t=new (c('URI'))(p.getAttribute('href')),u=t.getQueryData().pageids+','+n;t.addQueryData({pageids:u});p.setAttribute('href',t);}}};f.exports=j;}),null);