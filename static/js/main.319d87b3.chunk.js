(this["webpackJsonpcapture-screen"]=this["webpackJsonpcapture-screen"]||[]).push([[0],{12:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(13),r=a.n(n),c=a(26),l=a(27),i=function(t,a,n,i){return function(){var o=Object(c.a)(r.a.mark((function c(o){var s,u;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.get("/capture",{params:{access_key:"d119240e4e1d2a24ef2701ede060c37c",url:t,fullpage:1,format:a,viewport:n,user_agent:"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",delay:i}});case 2:return s=r.sent,r.next=5,e.from(s.data,"binary").toString("base64");case 5:u=r.sent,o({type:"CAPTURE",payload:u});case 7:case"end":return r.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}()},o=function(e){return{type:"UPDATE_FORMAT",payload:e}}}).call(this,a(39).Buffer)},27:function(e,t,a){"use strict";var n=a(28),r=a.n(n);t.a=r.a.create({baseURL:"https://api.screenshotlayer.com/api",responseType:"arraybuffer"})},29:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=a(2),o=a(3),s=a(25),u=a(5),m=a(6),p=a(8),d=a(7),f=a(12),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:"",format:"PNG",viewport:"1440x900",delay:0},e.onFormSubmit=function(t){t.preventDefault(),e.props.captureScreen(e.state.term,e.state.format,e.state.viewport,e.state.delay),e.props.formatUpdate(e.state.format)},e.onClickCapture=function(){e.props.captureScreen(e.state.term,e.state.format,e.state.viewport,e.state.delay),e.props.formatUpdate(e.state.format)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui center aligned basic segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"ui left icon action input"},r.a.createElement("i",{className:"search icon"}),r.a.createElement("input",{type:"text",placeholder:"http://www.apple.com",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})}}),r.a.createElement("div",{className:"ui blue submit button",onClick:this.onClickCapture},"Capture"))),r.a.createElement("div",{className:"ui horizontal segments"},r.a.createElement("div",{className:"ui segment form",style:{width:"20%"}},r.a.createElement("div",{className:"field"},r.a.createElement("h3",null,"Format"),r.a.createElement("select",{onChange:function(t){e.setState({format:t.target.value})}},r.a.createElement("option",{value:"PNG"},"PNG"),r.a.createElement("option",{value:"JPEG"},"JPEG"),r.a.createElement("option",{value:"GIF"},"GIF"),r.a.createElement("option",{value:"JPG"},"JPG")))),r.a.createElement("div",{className:"ui segment form",style:{width:"20%"}},r.a.createElement("div",{className:"field"},r.a.createElement("h3",null,"Size"),r.a.createElement("select",{onChange:function(t){e.setState({viewport:t.target.value})}},r.a.createElement("option",{value:"1440x900"},"Macbook 13"),r.a.createElement("option",{value:"320x480"},"iPhone 4 S"),r.a.createElement("option",{value:"320x568"},"iPhone 5 "),r.a.createElement("option",{value:"375x667"},"iPhone 6"),r.a.createElement("option",{value:"414x736"},"iPhone 6 Plus"),r.a.createElement("option",{value:"1024x768"},"iPad"),r.a.createElement("option",{value:"2560x1440"},"iMac 27")))),r.a.createElement("div",{className:"ui segment form",style:{width:"20%"}},r.a.createElement("div",{className:"field"},r.a.createElement("h4",null,"Delay in s"),r.a.createElement("div",{className:"ui input focus"},r.a.createElement("input",{type:"number",min:"0",value:this.state.delay,onChange:function(t){e.setState({delay:t.target.value})}})),r.a.createElement("div",{className:"ui mini message"},"For slow loading website")))))}}]),a}(r.a.Component),E=Object(o.b)(null,{captureScreen:f.a,formatUpdate:f.b})(v),h=Object(o.b)((function(e){return{capture:e.capture,format:e.format}}))((function(e){return e.capture.length>0?r.a.createElement("div",null,r.a.createElement("div",{className:"ui segment"},r.a.createElement("img",{className:"ui fluid image",src:"data:image/".concat(e.format,";base64,")+e.capture,alt:"no-img"}),r.a.createElement("a",{className:"ui primary button",href:"data:image/".concat(e.format,";base64,")+e.capture,download:"img"},"Download | ",r.a.createElement("i",{className:"download icon"})))):r.a.createElement("div",null,r.a.createElement("div",{className:"ui medium header"},"This may take some time!!!"),r.a.createElement("div",{className:"ui segment"},r.a.createElement("p",null),r.a.createElement("div",{className:"ui active dimmer"},r.a.createElement("div",{className:"ui loader"}))))})),b=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("h2",{className:"ui center aligned icon header",style:{margin:"5%"}},r.a.createElement("i",{className:"circular file image icon"}),"Capture Website"),r.a.createElement(E,null),r.a.createElement(h,null))}}]),a}(r.a.Component),g=Object(i.c)({capture:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CAPTURE":return t.payload;default:return e}},format:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"png",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FORMAT":return t.payload;default:return e}}}),y=Object(i.d)(g,Object(i.a)(s.a));l.a.render(r.a.createElement(o.a,{store:y},r.a.createElement(b,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.319d87b3.chunk.js.map