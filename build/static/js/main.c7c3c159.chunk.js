(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{349:function(e,t,a){},389:function(e,t,a){e.exports=a.p+"static/media/cloudbackground.c60be213.jpg"},392:function(e,t,a){e.exports=a.p+"static/media/Irrigationicon.c7cb200d.png"},393:function(e,t,a){e.exports=a.p+"static/media/iotcontroller.80905144.png"},394:function(e,t,a){e.exports=a(896)},690:function(e,t,a){},713:function(e,t,a){},715:function(e,t,a){},742:function(e,t){},745:function(e,t,a){},884:function(e,t,a){},886:function(e,t,a){},888:function(e,t,a){},896:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"signup",function(){return I}),a.d(n,"signout",function(){return A}),a.d(n,"signin",function(){return _});var r=a(1),l=a.n(r),c=a(26),o=a.n(c),i=(a(399),a(19)),s=a(22),m=a(20),u=a(16),d=a(21),p=a(130),h=a(4),f=a(239),E=a(36),g=(a(690),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={collapse:!1,isWideEnough:!1},a.onClick=a.onClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"showAlert",value:function(){alert("Successfully Signed Out")}},{key:"renderLinks",value:function(){return this.props.authenticated?l.a.createElement(h.NavbarNav,{right:!0},l.a.createElement(h.NavItem,null,l.a.createElement(h.Dropdown,null,l.a.createElement(h.DropdownToggle,{nav:!0,caret:!0},"Dropdown"),l.a.createElement(h.DropdownMenu,null,l.a.createElement(h.DropdownItem,null,l.a.createElement(f.a,{to:"/dashboard"},l.a.createElement(h.Fa,{icon:"line-chart"}),"Dashboard")),l.a.createElement(h.DropdownItem,{className:"about"},l.a.createElement(f.a,{to:"/about"},l.a.createElement(h.Fa,{icon:"info"}),"About")),l.a.createElement(h.DropdownItem,null,l.a.createElement(f.a,{to:"/controls"},l.a.createElement(h.Fa,{icon:"toggle-on"}),"MQTT Controls"))))),l.a.createElement(h.NavItem,null,l.a.createElement(f.a,{to:"/signout",onClick:this.showAlert},l.a.createElement(h.Fa,{icon:"sign-out"}),"Sign Out"))):l.a.createElement(h.NavbarNav,{right:!0},l.a.createElement(h.NavItem,null,l.a.createElement(f.a,{to:"/signup"},l.a.createElement(h.Fa,{icon:"user-plus"}),"Sign Up")),l.a.createElement(h.NavItem,null,l.a.createElement(f.a,{to:"/signin"},l.a.createElement(h.Fa,{icon:"user"}),"Sign In")))}}]),Object(u.a)(t,[{key:"onClick",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return l.a.createElement(h.Navbar,{style:{backgroundColor:"#212121"},dark:!0,expand:"md",fixed:"top",scrolling:!0},l.a.createElement(h.NavbarBrand,{style:{fontFamily:"GardenPartySans",fontSize:"20px",color:"#ffffff"}},"GardenHub 2.0"),!this.state.isWideEnough&&l.a.createElement(h.NavbarToggler,{onClick:this.onClick}),l.a.createElement(h.Collapse,{isOpen:this.state.collapse,navbar:!0},this.renderLinks()))}}]),t}(r.Component));var b=Object(E.b)(function(e){return{authenticated:e.auth.authenticated}})(g),y=a(238),v=a(77),w=a(27),N=a(54),x={authenticated:"",errorMessage:""},O=a(900),C=Object(w.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth_user":return Object(N.a)({},e,{authenticated:t.payload});case"auth_error":return Object(N.a)({},e,{errorMessage:t.payload});default:return e}},form:O.a}),k=a(387),j=a(899),S=a(898),M=a(81),T=a.n(M),B=a(133),D=a(241),F=a.n(D),I=function(e,t){return function(){var a=Object(B.a)(T.a.mark(function a(n){var r;return T.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F.a.post("http://localhost:3001/signup",e);case 3:r=a.sent,n({type:"auth_user",payload:r.data.token}),localStorage.setItem("token",r.data.token),t(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"auth_error",payload:"Email in use"});case 12:case"end":return a.stop()}},a,this,[[0,9]])}));return function(e){return a.apply(this,arguments)}}()},A=function(){return localStorage.removeItem("token"),{type:"auth_user",payload:""}},_=function(e,t){return function(){var a=Object(B.a)(T.a.mark(function a(n){var r;return T.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F.a.post("http://localhost:3001/signin",e);case 3:r=a.sent,n({type:"auth_user",payload:r.data.token}),localStorage.setItem("token",r.data.token),t(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"auth_error",payload:"Invalid login credentials"});case 12:case"end":return a.stop()}},a,this,[[0,9]])}));return function(e){return a.apply(this,arguments)}}()},Y=function(){return l.a.createElement("div",{className:"text-center d-flex justify-content-center white-label"},l.a.createElement("a",{className:"p-2 m-2"},l.a.createElement(h.Fa,{icon:"github",className:"white-text"})),l.a.createElement("a",{className:"p-2 m-2"},l.a.createElement(h.Fa,{icon:"linkedin",className:"white-text"})))},H=(a(349),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){console.log(e),a.props.signup(e,function(){a.props.history.push("/dashboard")})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return l.a.createElement("div",{id:"classicformpage"},l.a.createElement(h.View,null,l.a.createElement(h.Mask,{className:"d-flex justify-content-center align-items-center gradient"},l.a.createElement(h.Container,null,l.a.createElement("form",{className:"form-signup",onSubmit:e(this.onSubmit)},l.a.createElement(h.Row,null,l.a.createElement("div",{className:"white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"},l.a.createElement("h1",{className:"h1-responsive font-weight-bold"},"Sign up right now! "),l.a.createElement("hr",{className:"hr-light"}),l.a.createElement("h6",{className:"mb-4"},"Garden Hub is an IOT application that directly controls a user\u2019s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data.")),l.a.createElement(h.Col,{md:"6",xl:"5",className:"mb-4"},l.a.createElement(h.Card,{id:"classic-card",className:"signup-card"},l.a.createElement(h.CardBody,{className:"z-depth-2 white-text"},l.a.createElement("h3",{className:"text-center"},l.a.createElement(h.Fa,{icon:"user-plus"})," Register:"),l.a.createElement("hr",{className:"hr-light"}),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Email"),l.a.createElement("div",null,l.a.createElement(j.a,{className:"signup-input",name:"email",type:"text",component:"input",autoComplete:"none"}))),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Password"),l.a.createElement("div",null,l.a.createElement(j.a,{className:"signup-input",name:"password",type:"password",component:"input",autoComplete:"none"}))),l.a.createElement("div",null,this.props.errorMessage),l.a.createElement("div",{className:"text-center mt-4 black-text"},l.a.createElement(h.Button,{outline:!0,color:"white",type:"submit"},"Sign Up"),l.a.createElement("hr",{className:"hr-light"}),l.a.createElement(h.Col,{md:"12"},l.a.createElement("p",{className:"font-small white-text d-flex justify-content-end"},"Have an account? ",l.a.createElement("a",{href:"/Login",className:"green-text ml-1 font-weight-bold"}," Log in"))),l.a.createElement(Y,null)))))))))))}}]),t}(r.Component));var R=Object(w.d)(Object(E.b)(function(e){return{errorMessage:e.auth.errorMessage}},n),Object(S.a)({form:"signup"}))(H),G=a(134),z=(a(713),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{fontFamily:"Anton, sans-serif",fontSize:"30px"}}," Your Weather Forecast"),l.a.createElement("p",{style:{fontFamily:"Anton, sans-serif",fontSize:"15px"}},"Find out your weather conditions and more..."))}}]),t}(l.a.Component)),L=a(182),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={city:"",country:""},a.submitHandler=function(e){e.preventDefault(),e.target.className+=" was-validated"},a.changeHandler=function(e){a.setState(Object(N.a)({},a.state,Object(L.a)({},e.target.name,e.target.value)))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:this.props.getWeather},l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:this.state.city,onChange:this.changeHandler,name:"city",placeholder:"Enter your City...",required:!0}),l.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid state."),l.a.createElement("div",{className:"valid-feedback"},"Looks good!")),l.a.createElement("div",null,l.a.createElement("input",{value:this.state.country,onChange:this.changeHandler,type:"text",name:"country",placeholder:"Country...",required:!0}),l.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid country."),l.a.createElement("div",{className:"valid-feedback"},"Looks good!")),l.a.createElement(h.Button,{color:"yellow",type:"submit"},"Get Weather")))}}]),t}(l.a.Component),P=a(39),U=a.n(P),Z=(a(715),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=U()(this.props.date1),t=U()(this.props.date2),a=U()(this.props.date3),n=U()(this.props.date4),r=U()(this.props.date5);return l.a.createElement("div",null,l.a.createElement(h.Card,null,l.a.createElement(h.CardBody,{className:"forecast-header",style:{backgroundColor:"#ffbb33",fontFamily:"Anton, sans-serif",fontSize:"30px"}},"5 day Forecast")),l.a.createElement(h.CardGroup,{deck:!0},l.a.createElement(h.Card,null,l.a.createElement(h.CardImage,{className:"weather-icon",src:"http://openweathermap.org/img/w/".concat(this.props.icon1,".png"),alt:"weather icon",width:"200",height:"200"}),l.a.createElement(h.CardBody,null,l.a.createElement(h.CardTitle,{tag:"h5"},U.a.unix(e).format("MMM Do YYYY")),l.a.createElement(h.CardText,{style:{listStyle:"none"}},l.a.createElement("li",{className:"weather-list"},this.props.description1),l.a.createElement("li",{className:"weather-list"},this.props.mintemperature1),l.a.createElement("li",{className:"weather-list"},this.props.maxtemperature1)))),l.a.createElement(h.Card,null,l.a.createElement(h.CardImage,{className:"weather-icon",src:"http://openweathermap.org/img/w/".concat(this.props.icon2,".png"),alt:"weather icon",width:"200",height:"200"}),l.a.createElement(h.CardBody,null,l.a.createElement(h.CardTitle,{tag:"h5"},U.a.unix(t).format("MMM Do YYYY")),l.a.createElement(h.CardText,{style:{listStyle:"none"}},l.a.createElement("li",{className:"weather-list"},this.props.description2),l.a.createElement("li",{className:"weather-list"},this.props.mintemperature2),l.a.createElement("li",{className:"weather-list"},this.props.maxtemperature2)))),l.a.createElement(h.Card,null,l.a.createElement(h.CardImage,{className:"weather-icon",src:"http://openweathermap.org/img/w/".concat(this.props.icon3,".png"),alt:"weather icon",width:"200",height:"200"}),l.a.createElement(h.CardBody,null,l.a.createElement(h.CardTitle,{tag:"h5"},U.a.unix(a).format("MMM Do YYYY")),l.a.createElement(h.CardText,{style:{listStyle:"none"}},l.a.createElement("li",{className:"weather-list"},this.props.description3),l.a.createElement("li",{className:"weather-list"},this.props.mintemperature3),l.a.createElement("li",{className:"weather-list"},this.props.maxtemperature3)))),l.a.createElement(h.Card,null,l.a.createElement(h.CardImage,{className:"weather-icon",src:"http://openweathermap.org/img/w/".concat(this.props.icon4,".png"),alt:"weather icon",width:"200",height:"200"}),l.a.createElement(h.CardBody,null,l.a.createElement(h.CardTitle,{tag:"h5"},U.a.unix(n).format("MMM Do YYYY")),l.a.createElement(h.CardText,{style:{listStyle:"none"}},l.a.createElement("li",{className:"weather-list"},this.props.description4),l.a.createElement("li",{className:"weather-list"},this.props.mintemperature4),l.a.createElement("li",{className:"weather-list"},this.props.maxtemperature4)))),l.a.createElement(h.Card,null,l.a.createElement(h.CardImage,{className:"weather-icon",src:"http://openweathermap.org/img/w/".concat(this.props.icon5,".png"),alt:"weather icon",width:"200",height:"200"}),l.a.createElement(h.CardBody,null,l.a.createElement(h.CardTitle,{tag:"h5"},U.a.unix(r).format("MMM Do YYYY")),l.a.createElement(h.CardText,{style:{listStyle:"none"}},l.a.createElement("li",{className:"weather-list"},this.props.description5),l.a.createElement("li",{className:"weather-list"},this.props.maxtemperature5),l.a.createElement("li",{className:"weather-list"},this.props.mintemperature5))))))}}]),t}(l.a.Component)),J=a(389),q=a.n(J),Q="52a664e93f6772d14f7ca04eaa53a9c9",V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={temperature:"",maxtemp:"",mintemp:"",loading:!0,city:"",country:"",humidity:"",description:"",icon:"",err:"",date:""},a.getWeather=function(){var e=Object(B.a)(T.a.mark(function e(t){var n,r,l,c;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.city.value,r=t.target.elements.country.value,e.next=5,fetch("http://api.openweathermap.org/data/2.5/forecast/?q=".concat(n,",").concat(r,"&units=imperial&APPID=").concat(Q));case 5:return l=e.sent,e.next=8,l.json();case 8:c=e.sent,console.log(c),a.setState({loading:c.false,date1:c.list[0].dt,date2:c.list[9].dt,date3:c.list[16].dt,date4:c.list[24].dt,date5:c.list[32].dt,maxtemperature1:Math.round(c.list[5].main.temp_max),maxtemperature2:Math.round(c.list[12].main.temp_max),maxtemperature3:Math.round(c.list[20].main.temp_max),maxtemperature4:Math.round(c.list[28].main.temp_max),maxtemperature5:Math.round(c.list[32].main.temp_max),mintemperature1:Math.round(c.list[0].main.temp_min),mintemperature2:Math.round(c.list[10].main.temp_min),mintemperature3:Math.round(c.list[17].main.temp_min),mintemperature4:Math.round(c.list[25].main.temp_min),mintemperature5:Math.round(c.list[30].main.temp_min),city:c.city.name,country:c.city.country,description1:c.list[0].weather[0].description,description2:c.list[3].weather[0].description,description3:c.list[17].weather[0].description,description4:c.list[28].weather[0].description,description5:c.list[32].weather[0].description,icon1:c.list[0].weather[0].icon,icon2:c.list[11].weather[0].icon,icon3:c.list[17].weather[0].icon,icon4:c.list[28].weather[0].icon,icon5:c.list[32].weather[0].icon,err:"please enter values"});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(G.b,{fluid:!0,style:{backgroundImage:"url(".concat(q.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}},l.a.createElement(G.a,{fluid:!0,style:{textAlign:"center",marginTop:"47px"}},l.a.createElement(z,null),l.a.createElement(W,{getWeather:this.getWeather}),this.state.loading?"Loading....":l.a.createElement(Z,{date1:this.state.date1,date2:this.state.date2,date3:this.state.date3,date4:this.state.date4,date5:this.state.date5,icon1:this.state.icon1,icon2:this.state.icon2,icon3:this.state.icon3,icon4:this.state.icon4,icon5:this.state.icon5,mintemperature1:this.state.mintemperature1,maxtemperature1:this.state.maxtemperature1,mintemperature2:this.state.mintemperature2,maxtemperature2:this.state.maxtemperature2,mintemperature3:this.state.mintemperature3,maxtemperature3:this.state.maxtemperature3,mintemperature4:this.state.mintemperature4,maxtemperature4:this.state.maxtemperature4,mintemperature5:this.state.mintemperature5,maxtemperature5:this.state.maxtemperature5,description1:this.state.description1,description2:this.state.description2,description3:this.state.description3,description4:this.state.description4,description5:this.state.description5,error:this.state.error})))}}]),t}(l.a.Component),K=a(31),X=a.n(K),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).relayOn=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn","button clicked!!")},a.relayOff=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn2","button2 clicked!!")},a.state={response2:!1,tempGraph:!1,endpoint:"http://localhost:3001"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.endpoint,a=X()(t);a.on("moistures",function(t){return e.setState({response2:t})}),a.on("temperatures",function(t){return e.setState({tempGraph:t})})}},{key:"render",value:function(){var e=this.state.response2,t=this.state.tempGraph;return l.a.createElement("section",{className:"text-center my-5"},l.a.createElement(h.Row,null,l.a.createElement(h.Col,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement(h.Button,{color:"yellow",type:"button",onClick:this.relayOn},"Relay On"),l.a.createElement(h.Button,{color:"yellow",type:"button",onClick:this.relayOff},"Relay Off")),l.a.createElement(h.Col,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement(h.Card,{cascade:!0},l.a.createElement(h.CardImage,{cascade:!0,tag:"div"},l.a.createElement("div",{className:"heading2",style:{background:"#ffbb33"}},l.a.createElement("h2",{className:"h2-responsive"},"Temperature"),l.a.createElement("p",null))),l.a.createElement(h.CardBody,{cascade:!0},l.a.createElement(h.CardTitle,null,this.state.temp),l.a.createElement(h.CardText,{style:{fontSize:30}},l.a.createElement("span",null,t,"\xb0F"))))),l.a.createElement(h.Col,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement(h.Card,{cascade:!0},l.a.createElement(h.CardImage,{cascade:!0,tag:"div"},l.a.createElement("div",{className:"heading2",style:{background:"#ffbb33"}},l.a.createElement("h2",{className:"h2-responsive"},"Soil Moisture"))),l.a.createElement(h.CardBody,{cascade:!0},l.a.createElement(h.CardTitle,null,this.state.moist),l.a.createElement(h.CardText,{style:{fontSize:30}},l.a.createElement("span",null,e,"%")))))))}}]),t}(l.a.Component),ee=(a(745),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(h.Footer,{color:"blue-grey",className:"page-footer font-small lighten-5 pt-0"},l.a.createElement("div",{style:{backgroundColor:"#757575 "}},l.a.createElement(h.Container,null,l.a.createElement(h.Row,{className:"py-4 d-flex align-items-center"},l.a.createElement(h.Col,{md:"6",lg:"5",className:"text-center text-md-left mb-4 mb-md-0"},l.a.createElement("h6",{className:"mb-0 white-text"},"Get connected with us on social networks!")),l.a.createElement(h.Col,{md:"6",lg:"7",className:"text-center text-md-right"},l.a.createElement("a",{className:"fb-ic ml-0"},l.a.createElement("i",{className:"fa fa-facebook white-text mr-lg-4"}," ")),l.a.createElement("a",{className:"tw-ic"},l.a.createElement("i",{className:"fa fa-twitter white-text mr-lg-4"}," ")),l.a.createElement("a",{className:"gplus-ic"},l.a.createElement("i",{className:"fa fa-google-plus white-text mr-lg-4"}," ")),l.a.createElement("a",{className:"li-ic"},l.a.createElement("i",{className:"fa fa-linkedin white-text mr-lg-4"}," ")),l.a.createElement("a",{className:"ins-ic"},l.a.createElement("i",{className:"fa fa-instagram white-text mr-lg-4"}," ")))))),l.a.createElement(h.Container,{className:"mt-5 mb-4 text-center text-md-left"},l.a.createElement(h.Row,{className:"mt-3"},l.a.createElement(h.Col,{md:"3",lg:"4",xl:"3",className:"mb-4 dark-grey-text"}),l.a.createElement(h.Col,{md:"2",lg:"2",xl:"2",className:"mb-4 dark-grey-text"},l.a.createElement("h6",{className:"text-uppercase font-weight-bold"},l.a.createElement("strong",null,"Products")),l.a.createElement("hr",{className:"yellow-accent mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#ffbb33"}}),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.amazon.com/UTL-version-ESP-12E-ESP-12F-wireless/dp/B07F7H547B/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1538067496&sr=1-2&keywords=esp12e&dpID=41hxeZuQZSL&preST=_SY300_QL70_&dpSrc=srch",className:"dark-grey-text"},"esp8266 Wireless Module")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.dfrobot.com/product-599.html",className:"dark-grey-text"},"Gravity: Analog Soil Moisture Sensor For Arduino")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.dfrobot.com/product-164.html",className:"dark-grey-text"},"Gravity: DS18B20 Temperature Sensor"))),l.a.createElement(h.Col,{md:"3",lg:"2",xl:"2",className:"mb-4 dark-grey-text"},l.a.createElement("h6",{className:"text-uppercase font-weight-bold"},l.a.createElement("strong",null,"Useful links")),l.a.createElement("hr",{className:"yellow-accent mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#ffbb33"}}),l.a.createElement("p",null,l.a.createElement("a",{href:"#!",className:"dark-grey-text"},"Your Account")),l.a.createElement("p",null,l.a.createElement("a",{href:"#!",className:"dark-grey-text"},"Become an Affiliate"))),l.a.createElement(h.Col,{md:"4",lg:"3",xl:"3",className:"mb-4 dark-grey-text"},l.a.createElement("h6",{className:"text-uppercase font-weight-bold"},l.a.createElement("strong",null,"Contact")),l.a.createElement("hr",{className:"yellow-accent mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#ffbb33"}}),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-home mr-3"})," Orlando, FL 32801 US"),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-envelope mr-3"})," Iot_Guys@example.com"),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-phone mr-3"})," + 01 234 567 88")))),l.a.createElement("div",{className:"footer-copyright text-center py-3",style:{backgroundColor:"#212121"}},l.a.createElement(h.Container,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",l.a.createElement("span",{className:"copyright-style",style:{fontFamily:"GardenPartySans",fontSize:"20px",color:"#ffffff",fontWeight:"bolder"}}," GardenHub 2.0 "))))}}]),t}(l.a.Component)),te=a(188),ae=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={endpoint:"http://localhost:3001",chartData:{labels:[],datasets:[{type:"line",label:"Temperature",fill:!1,lineTension:.1,backgroundColor:"#ffbb33",borderColor:"#848484",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#848484",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#848484",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},chartOptions:{responsive:!0,maintainAspectRatio:!0}},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.endpoint;X()(t).on("temperatures",function(t){var a=t,n=e.state.chartData.datasets[0],r=Object(N.a)({},n);r.data.push(a);var l=Object(N.a)({},e.state.lineChartData,{datasets:[r],labels:e.state.chartData.labels.concat((new Date).toLocaleTimeString())});e.setState({chartData:l}),e.setState({tempGraph:a})})}},{key:"render",value:function(){return l.a.createElement(h.Container,{style:{backgroundColor:"white"}},l.a.createElement(te.a,{data:this.state.chartData,options:this.state.chartOptions}))}}]),t}(l.a.Component),ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={endpoint:"http://localhost:3001",chartData:{labels:[],datasets:[{type:"line",label:"Moisture",fill:!1,lineTension:.1,backgroundColor:"#ffbb33",borderColor:"#848484",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#848484",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#848484",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},chartOptions:{responsive:!0,maintainAspectRatio:!0}},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.endpoint;X()(t).on("moistures",function(t){var a=t,n=e.state.chartData.datasets[0],r=Object(N.a)({},n);r.data.push(a);var l=Object(N.a)({},e.state.lineChartData,{datasets:[r],labels:e.state.chartData.labels.concat((new Date).toLocaleTimeString())});e.setState({chartData:l}),e.setState({tempGraph:a})})}},{key:"render",value:function(){return l.a.createElement(h.Container,{style:{backgroundColor:"white"}},l.a.createElement(te.a,{data:this.state.chartData,options:this.state.chartOptions}))}}]),t}(l.a.Component),re=function(e){var t=function(t){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,t),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.shouldNavigateAway()}},{key:"componentDidUpdate",value:function(){this.shouldNavigateAway()}},{key:"shouldNavigateAway",value:function(){this.props.auth||this.props.history.push("/")}},{key:"render",value:function(){return l.a.createElement(e,this.props)}}]),a}(r.Component);return Object(E.b)(function(e){return{auth:e.auth.authenticated}})(t)}(function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={endpoint:"http://localhost:3001"},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,null),l.a.createElement(G.a,null,l.a.createElement($,null),l.a.createElement(ae,null),l.a.createElement("br",null),l.a.createElement(ne,null)),l.a.createElement(ee,null))}}]),t}(r.Component)),le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.signout(),this.props.history.push("/signin")}},{key:"render",value:function(){return l.a.createElement("div",null,"Sorry to see you go")}}]),t}(r.Component),ce=Object(E.b)(null,n)(le),oe=a(392),ie=a.n(oe),se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){console.log(e),a.props.signin(e,function(){a.props.history.push("/dashboard")})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return l.a.createElement("div",{id:"classicformpage"},l.a.createElement(h.View,null,l.a.createElement(h.Mask,{className:"d-flex justify-content-center align-items-center gradient"},l.a.createElement(h.Container,null,l.a.createElement("form",{className:"form-signin",onSubmit:e(this.onSubmit)},l.a.createElement(h.Row,null,l.a.createElement("div",{className:"white-text text-center   text-md-left col-md-6 mt-xl-5 mb-5"},l.a.createElement("img",{className:"login-pic",src:ie.a,width:"500",height:"400",alt:"logo"})),l.a.createElement(h.Col,{md:"6",xl:"5",className:"mb-4"},l.a.createElement(h.Card,{id:"classic-card",style:{marginTop:61}},l.a.createElement(h.CardBody,{className:"z-depth-2 white-text"},l.a.createElement("h3",{className:"text-center"},l.a.createElement(h.Fa,{icon:"user"})," Login:"),l.a.createElement("hr",{className:"hr-light"}),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Email"),l.a.createElement("div",null,l.a.createElement(j.a,{name:"email",type:"text",component:"input",autoComplete:"none"}))),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Password"),l.a.createElement("div",null,l.a.createElement(j.a,{name:"password",type:"password",component:"input",autoComplete:"none"}))),l.a.createElement("div",{className:"text-center mt-4 black-text"},l.a.createElement("div",null,this.props.errorMessage),l.a.createElement(h.Button,{outline:!0,color:"white",type:"submit"},"Sign In"),"       ",l.a.createElement("hr",{className:"hr-light"}),l.a.createElement(Y,null)))))))))))}}]),t}(r.Component);var me=Object(w.d)(Object(E.b)(function(e){return{errorMessage:e.auth.errorMessage}},n),Object(S.a)({form:"signin"}))(se),ue=function(){return l.a.createElement("div",null,l.a.createElement(h.Card,{className:"my-5 px-5 pb-1 text-center"},l.a.createElement(h.CardBody,null,l.a.createElement("h2",{className:"h1-responsive font-weight-bold my-5"},"The Team"),l.a.createElement("p",{className:"grey-text w-responsive mx-auto mb-5"}),l.a.createElement(h.Row,{className:"text-md-left"},l.a.createElement(h.Col,{lg:"6",md:"12",className:"mb-5"},l.a.createElement(h.Col,{md:"4",lg:"6",className:"float-left"},l.a.createElement(h.Avatar,{src:"https://i.postimg.cc/vTHnv10H/IMG_2722.jpg",className:"mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid",tag:"img",alt:"Sample avatar"})),l.a.createElement(h.Col,{md:"8",lg:"6",className:"float-right"},l.a.createElement("h4",{className:"font-weight-bold mb-3"},"Rocky Trice"),l.a.createElement("h6",{className:"font-weight-bold grey-text mb-3"},"Front End/Back End Developer"),l.a.createElement("p",{className:"grey-text"}),l.a.createElement("a",{className:"p-2 fa-lg fb-ic"},l.a.createElement(h.Fa,{icon:"linkedin"})),l.a.createElement("a",{className:"p-2 fa-lg tw-ic"},l.a.createElement(h.Fa,{icon:"github"})))),l.a.createElement(h.Col,{lg:"6",md:"12",className:"mb-5"},l.a.createElement(h.Col,{md:"4",lg:"6",className:"float-left"},l.a.createElement(h.Avatar,{src:"https://i.postimg.cc/MpZ2xzv2/FB_IMG_1529170697826.jpg",className:"mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid",tag:"img",alt:" avatar"})),l.a.createElement(h.Col,{md:"8",lg:"6",className:"float-right"},l.a.createElement("h4",{className:"font-weight-bold mb-3"},"Johathan Sells"),l.a.createElement("h6",{className:"font-weight-bold grey-text mb-3"},"Back End Developer/IOT Specialist"),l.a.createElement("p",{className:"grey-text"}),l.a.createElement("a",{className:"p-2 fa-lg fb-ic"},l.a.createElement(h.Fa,{icon:"linkedin"})),l.a.createElement("a",{className:"p-2 fa-lg yt-ic"},l.a.createElement(h.Fa,{icon:"github"}))))))))},de=(a(884),function(){return l.a.createElement(h.Container,{className:"mt-5"},l.a.createElement("p",{style:{fontFamily:"Libre Baskerville, serif",color:"white"}},"This application is designed  directly to control a user\u2019s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data. The user must follow a simple set of instructions for attaching the GardenHub-Controller to their previous irrigation controller, and they must also place the soil sensors throughout the `zones` of their lawn/garden. After installing the hardware the application will automatically switch the irrigation system on and off in response to measured soil moisture level of each zone. The user of course can select to manually switch their irrigation on/off or preset timers for their irrigation if they would like; however the core concept is that the automated mode relieves the chore of setting timers while also, most importantly, improves water use efficiency."),l.a.createElement("p",{style:{fontFamily:"Libre Baskerville, serif",color:"white"}},"Automation Method & Benefits:The user sets a moisture max and minimum level to regulate the cycle of adding or allowing water to drain from the soil. When the minimum level of moisture is reached the water is turned on till the maximum level is reached. Then the water is shut off until the minimum permitted moisture level is achieved again. The cyclical nature of the watering will ensure the roots are provided with the water they need as well as the oxygen need. The oxygen is pulled down to the roots by the evacuating water."))}),pe=a(393),he=a.n(pe),fe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.Container,null,l.a.createElement(h.Row,null,l.a.createElement(h.Col,{md:"12"},l.a.createElement(h.Card,{reverse:!0},l.a.createElement(h.View,{cascade:!0,hover:!0,waves:!0},l.a.createElement("img",{src:he.a,className:"img-fluid",alt:"iot controller"}),l.a.createElement(h.Mask,{overlay:"white-slight",className:"waves-light"})),l.a.createElement(h.CardBody,{cascade:!0,className:"text-center"},l.a.createElement("h2",{className:"font-weight-bold"},"Our Mission"))),l.a.createElement(de,null))),l.a.createElement(ue,null)),l.a.createElement(ee,null))},Ee=(a(886),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).autoToggle=function(){var e=a.state.endpoint;X()(e).emit("auto","toggle")},a.relay1On=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn","button1 clicked!!")},a.relay1Off=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn2","button2 clicked!!")},a.relay2On=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn3","button3 clicked!!")},a.relay2Off=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn4","button4 clicked!!")},a.relay3On=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn5","button5 clicked!!")},a.relay3Off=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn6","button6 clicked!!")},a.relay4On=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn7","button7 clicked!!")},a.relay4Off=function(){var e=a.state.endpoint,t=X()(e);console.log("button clicked"),t.emit("btn8","button8 clicked!!")},a.allOn=function(){var e=a.state.endpoint;X()(e).emit("allOn","all on")},a.allOff=function(){var e=a.state.endpoint;X()(e).emit("allOff","all off")},a.state={endpoint:"http://localhost:3001"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.Container,{className:"controls",style:{marginTop:300}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(h.Button,{type:"submit",color:"success",onClick:this.relay1On},"ZONE 1-ON"),l.a.createElement(h.Button,{type:"submit",color:"danger",onClick:this.relay1Off},"ZONE 1-OFF")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(h.Button,{type:"submit",color:"success",onClick:this.relay2On},"ZONE 2-ON"),l.a.createElement(h.Button,{type:"submit",color:"danger",onClick:this.relay2Off},"ZONE 2-OFF")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(h.Button,{className:"autoToggle",type:"submit",color:"yellow",onClick:this.autoToggle},"Toggle Auto-Mode")))))}}]),t}(l.a.Component)),ge=(a(888),a(890),a(892),a(894),Object(w.e)(C,{auth:{authenticated:localStorage.getItem("token")}},Object(w.a)(k.a)));o.a.render(l.a.createElement(E.a,{store:ge},l.a.createElement(y.a,null,l.a.createElement(function(e){var t=e.children;return l.a.createElement("div",null,l.a.createElement(b,null),t)},null,l.a.createElement(v.a,{exact:!0,path:"/",component:R}),l.a.createElement(v.a,{path:"/signup",component:R}),l.a.createElement(v.a,{path:"/signin",component:me}),l.a.createElement(v.a,{path:"/dashboard",component:re}),l.a.createElement(v.a,{path:"/signout",component:ce}),l.a.createElement(v.a,{path:"/about",component:fe}),l.a.createElement(v.a,{path:"/controls",component:Ee})))),document.getElementById("root"))}},[[394,2,1]]]);
//# sourceMappingURL=main.c7c3c159.chunk.js.map