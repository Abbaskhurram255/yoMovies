(this.webpackJsonpyoMovies=this.webpackJsonpyoMovies||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/no-image.5eb0b883.jpg"},,,,,,,,,,,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=a.n(r),i=(a(28),a(11)),l=a(1);a(29);var m=function(){return""},s=a(18),u=a(9),d=a(10),v=a(14),h=a(13),f="https://api.themoviedb.org/3/",g="0fa964c211ec97fbdb3483b5075d2825",p="https://image.tmdb.org/t/p/",b=(a(30),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n    39%,rgba(0,0,0,0)\n    41%,rgba(0,0,0,0.65)\n    100%),\n    url('".concat(e.image,"'), #1C1C1C")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),E=(a(31),a(6)),N=a.n(E),k=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.timeout=null,e.doSearch=function(t){e.setState({value:t.target.value}),clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.props.callback(e.state.value)}),500)},e}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(N.a,{className:"rmdb-fa-search",name:"search",icon:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search",onChange:this.doSearch,value:this.state.value})))}}]),a}(n.Component),y=(a(34),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,c.a.createElement("div",{className:"rmdb-grid-content"},e.children.map((function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element",id:"actor"},e)}))))}),w=(a(35),function(e){return c.a.createElement("div",{className:"rmdb-moviethumb"},e.clickable?c.a.createElement(i.b,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement("img",{src:e.image,alt:"moviethumb",id:"movie-search"})):c.a.createElement("img",{src:e.image,alt:"moviethumb"}))}),I=(a(39),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))});a(40);var S=function(){return c.a.createElement("div",{className:"loader"})},j=(a(41),a(12)),_=a.n(j),x=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},e.searchItems=function(t){console.log(t);var a="";e.setState({movies:[],loading:!0,searchTerm:t}),a=""===t?"".concat(f,"movie/popular?api_key=").concat(g,"&language=en-US&page=1"):"".concat(f,"search/movie?api_key=").concat(g,"&language=en-US&query=").concat(t),e.fetchItems(a)},e.loadMoreItems=function(){var t="";e.setState({loading:!0}),t=""===e.state.searchTerm?"".concat(f,"movie/popular?api_key=").concat(g,"&language=en-US&page=").concat(e.state.currentPage+1):"".concat(f,"search/movie?api_key=").concat(g,"&language=en-US&query=").concat(e.state.searchTerm,"$page=").concat(e.state.currentPage+1),e.fetchItems(t)},e.fetchItems=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({movies:[].concat(Object(s.a)(e.state.movies),Object(s.a)(t.results)),heroImage:e.state.heroImage||t.results[0],loading:!1,currentPage:t.page,totalPages:t.total_pages},(function(){localStorage.setItem("HomeState",JSON.stringify(e.state))}))}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(f,"movie/popular?api_key=").concat(g,"&language=en-US&page=1");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(b,{image:"".concat(p).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.title,text:this.state.heroImage.overview}),c.a.createElement(k,{callback:this.searchItems})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(y,{header:this.state.searchTerm?"Search Result":"Popular Movies",loading:this.state.loading},this.state.movies.map((function(e,t){return c.a.createElement(w,{key:t,clickable:!0,image:e.poster_path?"".concat(p).concat("w500").concat(e.poster_path):"".concat(_.a),movieId:e.id,movieName:e.title})}))),this.state.loading?c.a.createElement(S,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading?c.a.createElement(I,{text:"Load More",onClick:this.loadMoreItems}):null))}}]),a}(n.Component);var O=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Whoooops. This page doesn't exist."))};a(42);var C=function(e){return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(i.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movie)))};a(43);var T=function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url('".concat(p).concat("w1280").concat(e.movie.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(w,{image:e.movie.poster_path?"".concat(p).concat("w500").concat(e.movie.poster_path):"".concat(_.a),clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_average}),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),e.directors.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),e.directors.map((function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)}))),c.a.createElement(N.a,{className:"fa-film",name:"film",size:"5x"})))},P=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},M=(a(44),function(e){return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(N.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running Time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(e.time))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(N.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",P(e.budget))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(N.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",P(e.revenue)))))});var R=function(e){return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(p).concat("w154").concat(e.actor.profile_path):"".concat(_.a),alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),c.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))},U=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movie:null,actors:null,directors:[],loading:!1},e.fetchItems=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),t.status_code?e.setState({loading:!1}):e.setState({movie:t},(function(){var t="".concat(f,"movie/").concat(e.props.match.params.movieId,"/credits?api_key=").concat(g);fetch(t).then((function(e){return e.json()})).then((function(t){var a=t.crew.filter((function(e){return"Director"===e.job}));e.setState({actors:t.cast,directors:a,loading:!1})}))}))}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(f,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(g,"&language=en-US");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(C,{movie:this.props.location.movieName}),c.a.createElement(T,{movie:this.state.movie,directors:this.state.directors}),c.a.createElement(M,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.movie.revenue})):null,this.state.actors?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(y,{header:"Actors"},this.state.actors.map((function(e,t){return c.a.createElement(R,{key:t,actor:e})})))):null,this.state.actors||this.state.loading?null:c.a.createElement("h1",null,"No Movie Found!"),this.state.loading?c.a.createElement(S,null):null,"}")}}]),a}(n.Component);var A=function(){return c.a.createElement(i.a,{basename:"/movie-app/"},c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:x,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:U,exact:!0}),c.a.createElement(l.a,{component:O}))))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(c.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/movie-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/movie-app","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}],[[23,1,2]]]);
//# sourceMappingURL=main.8182e6be.chunk.js.map