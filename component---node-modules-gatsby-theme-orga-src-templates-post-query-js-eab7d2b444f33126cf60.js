(self.webpackChunkgatsby_starter_blorg=self.webpackChunkgatsby_starter_blorg||[]).push([[164],{1496:function(e,t,r){"use strict";var a=r(5318);t.Z=void 0;var i,n=a(r(1506)),s=a(r(5354)),o=a(r(7316)),l=a(r(7154)),d=a(r(7294)),u=a(r(5697)),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=Z([].concat(t.fluid))),t.fixed&&(t.fixed=Z([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed,a=h(t||r||[]);return a&&a.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},p=Object.create({}),m=function(e){var t=c(e),r=g(t);return p[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,x=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),r&&d.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function Z(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function w(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var E=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),x.set(e,t)),function(){r.unobserve(e),x.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+d+s+o+r+a+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=d.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(k,(0,l.default)({ref:t,src:r},n,{ariaHidden:s}));return a.length>1?d.default.createElement("picture",null,i(a),o):o})),k=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,h=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:r,srcSet:a,src:i},h,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var z=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=g(t))&&(p[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,x=e.itemProp,Z=e.loading,R=e.draggable,E=p||m;if(!E)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,l.default)({opacity:z?1:0,transition:O?"opacity "+v+"ms":"none"},o),V="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&T,o,f),W={title:t,alt:this.state.isVisible?"":r,style:j,className:g,itemProp:x},P=this.state.isHydrated?h(E):E[0];if(p)return d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),V&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&T)}),P.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:E,generateSources:I}),P.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:E,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(E),d.default.createElement(k,{alt:r,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:Z,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:r,title:t,loading:Z},P,{imageVariants:E}))}}));if(m){var N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete N.display,d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},V&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},O&&T)}),P.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:E,generateSources:I}),P.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:E,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(E),d.default.createElement(k,{alt:r,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:Z,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:r,title:t,loading:Z},P,{imageVariants:E}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),H=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function V(e){return function(t,r,a){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[r]=e,i),t,"prop",a)}}z.propTypes={resolutions:O,sizes:H,fixed:V(u.default.oneOfType([O,u.default.arrayOf(O)])),fluid:V(u.default.oneOfType([H,u.default.arrayOf(H)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=z;t.Z=T},3918:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var a=r(18),i=r(5444),n=r(9226),s=r(7363),o=r(1496),l=function(e){var t=e.width,r=void 0===t?[80,120]:t,a=(0,i.K2)("3233986221").avatar;return(0,n.tZ)(o.Z,{fluid:a.childImageSharp.fluid,sx:{width:r,borderRadius:"50%",borderWidth:1,borderStyle:"solid",borderColor:"text",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s","&:hover":{transform:"scale(1.1)"}}})},d=(r(7294),r(3431)),u=function(){return(0,d.tZ)("p",null,"If you like orgajs and want to find out more about it, check out the ",(0,d.tZ)("a",{href:"https://github.com/orgapp/orgajs"},"project"),", give is a star to show support. You can ",(0,d.tZ)("a",{href:"https://twitter.com/xiaoxinghu"},"tell me your thoughts")," and help shape the features.")},c=r(3201),f=r(612),g=function(){var e=(0,f.$)().social;return(0,n.tZ)(s.kC,null,e.map((function(e){var t=e.name,r=e.url;return(0,n.tZ)("a",{key:"social-"+t,href:r},(0,n.tZ)(s.hU,{sx:{mx:1,"&:hover":{bg:"highlight"}}},function(e){switch(e.toLowerCase()){case"twitter":return(0,n.tZ)(c.fWC,{size:"1.5em"});case"email":return(0,n.tZ)(c.SRX,{size:"1.5em"});case"github":return(0,n.tZ)(c.hJX,{size:"1.5em"});case"website":return(0,n.tZ)(c.ssk,{size:"1.5em"});default:return(0,n.tZ)(s.xv,null,e)}}(t)))})))},h=function(){return(0,n.tZ)(s.kC,null,(0,n.tZ)(s.xu,{sx:{p:2,flex:"0 0 auto",justifyContent:"flex-start"}},(0,n.tZ)(l,null)),(0,n.tZ)(s.kC,{sx:{flexDirection:"column"}},(0,n.tZ)("div",null,(0,n.tZ)(u,null)),(0,n.tZ)(g,null)))};function p(e){var t=e.raw;return(0,n.tZ)(s.xu,{sx:{img:{maxWidth:"100%",borderRadius:2,maxHeight:500}}},(0,n.tZ)("div",{dangerouslySetInnerHTML:{__html:t}}))}var m=r(3172),b=r(1046),v=function(e){var t=e.children;return(0,n.tZ)(s.kC,{sx:{alignItems:"center"}},t.icon,(0,n.tZ)(s.xu,{sx:{px:2}},t.info))},y=function(e){var t=e.post;return(0,n.tZ)(s.kC,{sx:{color:"gray",alignItems:"center",flexWrap:"wrap",pt:2}},(0,n.tZ)(b.Pd.Provider,{value:{style:{verticalAlign:"middle"}}},(0,n.tZ)(v,null,{icon:(0,n.tZ)(c.XdU,null),info:t.date}),(0,n.tZ)(v,null,{icon:(0,n.tZ)(c.KHI,null),info:t.wordCount+" words"}),(0,n.tZ)(v,null,{icon:(0,n.tZ)(c.qyc,null),info:t.timeToRead+" minutes"})))},x=function(e){var t,r=e.post;return(0,d.tZ)("div",null,(null==r||null===(t=r.image)||void 0===t?void 0:t.childImageSharp)&&(0,d.tZ)(o.Z,{fluid:r.image.childImageSharp.fluid,alt:r.imageAlt?r.imageAlt:r.excerpt}))},S=function(e){var t=e.post,r=t.title,a=t.slug,i=(0,f.$)(),o=i.siteUrl,l=i.twitter;if(!l||0===l.length)return null;var d,u="https://twitter.com/intent/tweet"+(d={text:r,url:""+o+a,via:l},"?"+Object.keys(d).filter((function(e){return!!d[e]})).map((function(e){return e+"="+encodeURIComponent(d[e])})).join("&"));return(0,n.tZ)("a",{href:u},(0,n.tZ)(s.zx,{sx:{width:"100%",px:2}},(0,n.tZ)(s.X6,{as:"h3"},"Tweet this.")))},Z=function(e){var t=e.post;return(0,n.tZ)("div",null,(0,n.tZ)(S,{post:t}))},w=r(9866),I=function(e){return(0,d.tZ)(w.RQ.h1,e)},R=r(5914),E=r(3614),L=function(e){var t,r,o=e.data.orgPost;return(0,n.tZ)(m.Z,null,(0,n.tZ)(R.Z,{title:o.title,description:o.excerpt,imageSource:null===(t=o.image)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.fluid.src,keywords:[o.category].concat((0,a.Z)(o.tags||[]))}),(0,n.tZ)(s.W2,{variant:"content"},(0,n.tZ)("main",{sx:{flex:1,pb:4,mx:"auto"}},(0,n.tZ)("article",null,(0,n.tZ)("header",{sx:{pb:1}},(0,n.tZ)(x,{post:o}),(0,n.tZ)(I,null,o.title),(0,n.tZ)(s.kC,{sx:{alignItems:"center",mt:-4,mb:3}},(0,n.tZ)(s.xu,{sx:{pr:3}},(0,n.tZ)(y,{post:o})))),(0,n.tZ)("section",null,(0,n.tZ)(p,{raw:o.html})))),(0,n.tZ)(s.xu,null,(0,n.tZ)(s.kC,{sx:{alignItems:"center",justifyContent:"flex-end"}},(0,n.tZ)(c.YxP,{sx:{mr:2}}),(0,n.tZ)(E.Z,{tags:o.tags})),(0,n.tZ)(i.rU,{to:"/"+o.category},(0,n.tZ)(s.xv,{sx:{p:2,textAlign:"right"}},'Read more stories about "',o.category,'" ->')),(0,n.tZ)(Z,{post:o}),(0,n.tZ)(s.iz,null),(0,n.tZ)(h,null))))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-orga-src-templates-post-query-js-eab7d2b444f33126cf60.js.map