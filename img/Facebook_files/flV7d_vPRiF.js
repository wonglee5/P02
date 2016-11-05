if (self.CavalryLogger) { CavalryLogger.start_js(["ytlJM"]); }

__d('MercurySharePreview.react',['cx','invariant','AsyncRequest','LeftRight.react','MercuryFallbackShareAttachment.react','MercuryShareAttachmentRenderLocations','React','XUICloseButton.react','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.state={attachmentData:null,loading:false},this.getShareData=function(){return this.state.attachmentData&&this.state.attachmentData.share_data;}.bind(this),this.isLoading=function(){return this.state.loading;}.bind(this),this.$MercurySharePreview4=function(s){this.$MercurySharePreview2=new (c('AsyncRequest'))().setURI('/message_share_attachment/fromParams/').setData({image_height:this.props.imageSize.height,image_width:this.props.imageSize.width,share_params:s.params,share_type:s.type}).setHandler(this.$MercurySharePreview6.bind(this,this.$MercurySharePreview7()));this.$MercurySharePreview2.send();this.setState({loading:true,attachmentData:null});}.bind(this),this.$MercurySharePreview5=function(s){this.$MercurySharePreview2=new (c('AsyncRequest'))().setURI('/message_share_attachment/fromURI/').setData({image_height:this.props.imageSize.height,image_width:this.props.imageSize.width,uri:s}).setHandler(this.$MercurySharePreview6.bind(this,this.$MercurySharePreview7()));this.$MercurySharePreview2.send();this.setState({loading:true,attachmentData:null});}.bind(this),this.$MercurySharePreview7=function(){return ++this.$MercurySharePreview1;}.bind(this),this.$MercurySharePreview8=function(){return this.$MercurySharePreview1;}.bind(this),this.$MercurySharePreview6=function(s,t){if(this.$MercurySharePreview8()!==s)return;this.setState({loading:false,attachmentData:t.payload});}.bind(this),this.$MercurySharePreview9=function(){this.$MercurySharePreview3();this.props.onClose&&this.props.onClose();}.bind(this),this.$MercurySharePreview3=function(){this.$MercurySharePreview7();this.$MercurySharePreview2&&this.$MercurySharePreview2.abort();this.$MercurySharePreview2=null;this.setState({loading:false,attachmentData:null});}.bind(this),o;}m.prototype.componentWillMount=function(){'use strict';this.$MercurySharePreview1=1337;this.$MercurySharePreview2=null;};m.prototype.componentWillUnmount=function(){'use strict';this.$MercurySharePreview3();};m.prototype.componentWillReceiveProps=function(n){'use strict';!!(n.share&&n.uri)?i(0):void 0;if(!n.share&&!n.uri)return this.$MercurySharePreview3();var o=this.state.attachmentData||this.state.loading;if(n.share&&!o){this.$MercurySharePreview4(n.share);}else if(n.uri&&!(o&&this.props.uri==n.uri))this.$MercurySharePreview5(n.uri);};m.prototype.componentDidUpdate=function(n,o){'use strict';this.props.onUpdate&&this.props.onUpdate(this);};m.prototype.render=function(){'use strict';var n="_tig"+(' '+"_tih");if(this.state.loading)return (c('React').createElement(c('LeftRight.react'),{direction:c('LeftRight.react').DIRECTION.right,className:n},c('React').createElement(c('XUISpinner.react'),{className:"_tii",size:'large',background:'light'}),c('React').createElement(c('XUICloseButton.react'),{className:"_tij",shade:'dark',size:'small',onClick:this.$MercurySharePreview9})));var o=this.state.attachmentData;if(!o)return c('React').createElement('div',null);return (c('React').createElement('div',null,c('React').createElement(c('MercuryFallbackShareAttachment.react'),{attachment:o,location:c('MercuryShareAttachmentRenderLocations').CHAT_PREVIEW}),c('React').createElement(c('XUICloseButton.react'),{className:"_tij",shade:'dark',size:'small',onClick:this.$MercurySharePreview9})));};m.propTypes={imageSize:l.shape({width:l.number.isRequired,height:l.number.isRequired}).isRequired,location:l.oneOf(c('MercuryShareAttachmentRenderLocations').getValues()).isRequired,share:l.shape({params:l.array,type:l.number}),uri:l.string,onClose:l.func,onUpdate:l.func};f.exports=m;}),null);
__d('WebLoginApprovalsDoneController',['Event','Arbiter','PhoneSource'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){c('Event').listen(i,'click',function(){c('Arbiter').inform(c('PhoneSource').LOGIN_APPROVAL);});}f.exports=h;}),null);