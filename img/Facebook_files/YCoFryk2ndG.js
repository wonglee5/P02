if (self.CavalryLogger) { CavalryLogger.start_js(["k8jO9"]); }

__d('StickyPlaceholderInput',['Event','CSS','DOM','Input','Parent','emptyFunction','getElementText'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l){return c('Parent').byClass(l,'uiStickyPlaceholderInput');}function i(l){return c('DOM').scry(l,'.placeholder')[0];}function j(l){l=l||window.event;var m=l.target||l.srcElement;if(c('DOM').isNodeOfType(m,['input','textarea'])){var n=h(m);if(n)setTimeout(function(){c('CSS').conditionClass(n,'uiStickyPlaceholderEmptyInput',!m.value.length);},0);}}var k={init:function l(){k.init=c('emptyFunction');c('Event').listen(document.documentElement,{keydown:j,keyup:j,paste:j,focusout:j});},registerInput:function l(m){k.init();var n=m.getAttribute('placeholder')||'';if(n.length)if(document.activeElement===m){var o=c('Event').listen(m,'blur',function(){k.manipulateInput(m,n);o.remove();});}else k.manipulateInput(m,n);},manipulateInput:function l(m,n){var o=c('DOM').create('div',{className:'placeholder','aria-hidden':'true'},n),p=c('DOM').create('div',{className:'uiStickyPlaceholderInput'},o);if(c('DOM').isNodeOfType(m,'textarea'))c('CSS').addClass(p,'uiStickyPlaceholderTextarea');c('Event').listen(o,'click',function(){m.focus();});if(m.value===n)m.value='';m.setAttribute('placeholder','');c('DOM').replace(m,p);c('DOM').appendContent(p,m);c('CSS').conditionClass(p,'uiStickyPlaceholderEmptyInput',!m.value.length);},setPlaceholderText:function l(m,n){var o=h(m);if(!o){c('Input').setPlaceholder(m,n);}else{var p=i(o);p&&c('DOM').setContent(p,n);}},getPlaceholderText:function l(m){var n=h(m),o=i(n);return o&&c('getElementText')(o);},update:function l(m){var n=h(m);if(n)c('CSS').conditionClass(n,'uiStickyPlaceholderEmptyInput',!m.value.length);},getVisibleText:function l(m){var n=h(m);if(c('CSS').hasClass(n,'uiStickyPlaceholderEmptyInput')){var o=i(n);return o&&c('getElementText')(o);}else return m.value;}};f.exports=k;}),null);
__d('TypeaheadPreventSubmitOnEnter',['Event','Keys'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';var i=this._typeahead.getCore().getElement();this._listener=c('Event').listen(i,'keypress',function(j){if(c('Event').getKeyCode(j)==c('Keys').RETURN)j.kill();});};h.prototype.disable=function(){'use strict';this._listener.remove();this._listener=null;};Object.assign(h.prototype,{_listener:null});f.exports=h;}),null);
__d('TypeaheadShowLoadingIndicator',['CSS'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';this._subscription=this._typeahead.subscribe('loading',function(i,j){c('CSS').conditionClass(this._typeahead.getElement(),'typeaheadLoading',j.loading);c('CSS').conditionClass(this._typeahead.getView().getElement(),'typeaheadViewLoading',j.loading);}.bind(this));};h.prototype.disable=function(){'use strict';this._typeahead.unsubscribe(this._subscription);this._subscription=null;};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);