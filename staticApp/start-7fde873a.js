var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(e,s,r)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,o=(t,o)=>{for(var n in o||(o={}))e.call(o,n)&&a(t,n,o[n]);if(s)for(var n of s(o))r.call(o,n)&&a(t,n,o[n]);return t};import{S as n,i,s as c,e as l,t as h,c as u,a as p,b as f,d,f as g,g as m,h as v,j as y,k as $,l as E,n as w,m as _,o as b,p as x,q,r as L,u as C,v as R,w as S,x as k,y as P,z as j,A,B as I,C as O,D,E as V,F as N,G as T,H as M,I as U}from"./chunks/vendor-aee76599.js";import{c as B}from"./chunks/config-b3bde751.js";function z(t){let e,s,r=t[1].stack+"";return{c(){e=l("pre"),s=h(r)},l(t){e=u(t,"PRE",{});var a=p(e);s=f(a,r),a.forEach(d)},m(t,r){g(t,e,r),m(e,s)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&v(s,r)},d(t){t&&d(e)}}}function H(t){let e,s,r,a,o,n,i,c=t[1].message+"",_=t[1].stack&&z(t);return{c(){e=l("h1"),s=h(t[0]),r=y(),a=l("p"),o=h(c),n=y(),_&&_.c(),i=$()},l(l){e=u(l,"H1",{});var h=p(e);s=f(h,t[0]),h.forEach(d),r=E(l),a=u(l,"P",{});var g=p(a);o=f(g,c),g.forEach(d),n=E(l),_&&_.l(l),i=$()},m(t,c){g(t,e,c),m(e,s),g(t,r,c),g(t,a,c),m(a,o),g(t,n,c),_&&_.m(t,c),g(t,i,c)},p(t,[e]){1&e&&v(s,t[0]),2&e&&c!==(c=t[1].message+"")&&v(o,c),t[1].stack?_?_.p(t,e):(_=z(t),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i:w,o:w,d(t){t&&d(e),t&&d(r),t&&d(a),t&&d(n),_&&_.d(t),t&&d(i)}}}function K(t,e,s){let{status:r}=e,{error:a}=e;return t.$$set=t=>{"status"in t&&s(0,r=t.status),"error"in t&&s(1,a=t.error)},[r,a]}class Q extends n{constructor(t){super(),i(this,t,K,H,c,{status:0,error:1})}}function W(t){let e,s,r;const a=[t[4]||{}];var o=t[2][1];function n(t){let e={};for(let s=0;s<a.length;s+=1)e=_(e,a[s]);return{props:e}}return o&&(e=new o(n())),{c(){e&&x(e.$$.fragment),s=$()},l(t){e&&q(e.$$.fragment,t),s=$()},m(t,a){e&&L(e,t,a),g(t,s,a),r=!0},p(t,r){const i=16&r?C(a,[R(t[4]||{})]):{};if(o!==(o=t[2][1])){if(e){O();const t=e;k(t.$$.fragment,1,0,(()=>{P(t,1)})),D()}o?(e=new o(n()),x(e.$$.fragment),S(e.$$.fragment,1),L(e,s.parentNode,s)):e=null}else o&&e.$set(i)},i(t){r||(e&&S(e.$$.fragment,t),r=!0)},o(t){e&&k(e.$$.fragment,t),r=!1},d(t){t&&d(s),e&&P(e,t)}}}function F(t){let e,s;return e=new Q({props:{status:t[0],error:t[1]}}),{c(){x(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){L(e,t,r),s=!0},p(t,s){const r={};1&s&&(r.status=t[0]),2&s&&(r.error=t[1]),e.$set(r)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function G(t){let e,s,r,a;const o=[F,W],n=[];function i(t,e){return t[1]?0:1}return e=i(t),s=n[e]=o[e](t),{c(){s.c(),r=$()},l(t){s.l(t),r=$()},m(t,s){n[e].m(t,s),g(t,r,s),a=!0},p(t,a){let c=e;e=i(t),e===c?n[e].p(t,a):(O(),k(n[c],1,1,(()=>{n[c]=null})),D(),s=n[e],s?s.p(t,a):(s=n[e]=o[e](t),s.c()),S(s,1),s.m(r.parentNode,r))},i(t){a||(S(s),a=!0)},o(t){k(s),a=!1},d(t){n[e].d(t),t&&d(r)}}}function Y(t){let e,s=t[6]&&J(t);return{c(){e=l("div"),s&&s.c(),this.h()},l(t){e=u(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=p(e);s&&s.l(r),r.forEach(d),this.h()},h(){b(e,"id","svelte-announcer"),b(e,"aria-live","assertive"),b(e,"aria-atomic","true"),b(e,"class","svelte-1j55zn5")},m(t,r){g(t,e,r),s&&s.m(e,null)},p(t,r){t[6]?s?s.p(t,r):(s=J(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&d(e),s&&s.d()}}}function J(t){let e,s;return{c(){e=h("Navigated to "),s=h(t[7])},l(r){e=f(r,"Navigated to "),s=f(r,t[7])},m(t,r){g(t,e,r),g(t,s,r)},p(t,e){128&e&&v(s,t[7])},d(t){t&&d(e),t&&d(s)}}}function X(t){let e,s,r,a;const o=[t[3]||{}];let n={$$slots:{default:[G]},$$scope:{ctx:t}};for(let c=0;c<o.length;c+=1)n=_(n,o[c]);e=new t[8]({props:n});let i=t[5]&&Y(t);return{c(){x(e.$$.fragment),s=y(),i&&i.c(),r=$()},l(t){q(e.$$.fragment,t),s=E(t),i&&i.l(t),r=$()},m(t,o){L(e,t,o),g(t,s,o),i&&i.m(t,o),g(t,r,o),a=!0},p(t,[s]){const a=8&s?C(o,[R(t[3]||{})]):{};2071&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a),t[5]?i?i.p(t,s):(i=Y(t),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){P(e,t),t&&d(s),i&&i.d(t),t&&d(r)}}}function Z(t,e,s){let{status:r}=e,{error:a}=e,{stores:o}=e,{page:n}=e,{components:i}=e,{props_0:c=null}=e,{props_1:l=null}=e;const h=i[0];j("__svelte__",o),A(o.page.notify);let u=!1,p=!1,f=null;return I((()=>{const t=o.page.subscribe((()=>{u&&(s(6,p=!0),s(7,f=document.title))}));return s(5,u=!0),t})),t.$$set=t=>{"status"in t&&s(0,r=t.status),"error"in t&&s(1,a=t.error),"stores"in t&&s(9,o=t.stores),"page"in t&&s(10,n=t.page),"components"in t&&s(2,i=t.components),"props_0"in t&&s(3,c=t.props_0),"props_1"in t&&s(4,l=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&o.page.set(n)},[r,a,i,c,l,u,p,f,h,o,n]}class tt extends n{constructor(t){super(),i(this,t,Z,X,c,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}let et;const st={},rt=function(t,e){if(!e)return t();if(void 0===et){const t=document.createElement("link").relList;et=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in st)return;st[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const r=document.createElement("link");return r.rel=e?"stylesheet":et,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e?new Promise(((t,e)=>{r.addEventListener("load",t),r.addEventListener("error",e)})):void 0}))).then((()=>t()))};function at(t){let e,s,r,a,o,n,i,c,v,$,_,x,q,L,C,R,S,k,P,j=B.site.title+"",A=B.site.description+"",I=B.site.author.name+"",O=function(t){let e,s,r,a,o,n,i,c,v=B.site.github_username+"";return{c(){e=l("li"),s=l("a"),r=l("span"),a=V("svg"),o=V("path"),n=y(),i=l("span"),c=h(v),this.h()},l(t){e=u(t,"LI",{});var l=p(e);s=u(l,"A",{href:!0});var h=p(s);r=u(h,"SPAN",{class:!0});var g=p(r);a=u(g,"svg",{viewBox:!0},1);var m=p(a);o=u(m,"path",{fill:!0,d:!0},1),p(o).forEach(d),m.forEach(d),g.forEach(d),n=E(h),i=u(h,"SPAN",{class:!0});var y=p(i);c=f(y,v),y.forEach(d),h.forEach(d),l.forEach(d),this.h()},h(){b(o,"fill","#89b889"),b(o,"d","M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"),b(a,"viewBox","0 0 16 16"),b(r,"class","icon  icon--github"),b(i,"class","username"),b(s,"href","https://github.com/"+B.site.github_username)},m(t,l){g(t,e,l),m(e,s),m(s,r),m(r,a),m(a,o),m(s,n),m(s,i),m(i,c)},p:w,d(t){t&&d(e)}}}(),D=function(t){let e,s,r,a,o,n,i,c,v=B.site.twitter_username+"";return{c(){e=l("li"),s=l("a"),r=l("span"),a=V("svg"),o=V("path"),n=y(),i=l("span"),c=h(v),this.h()},l(t){e=u(t,"LI",{});var l=p(e);s=u(l,"A",{href:!0});var h=p(s);r=u(h,"SPAN",{class:!0});var g=p(r);a=u(g,"svg",{viewBox:!0},1);var m=p(a);o=u(m,"path",{fill:!0,d:!0},1),p(o).forEach(d),m.forEach(d),g.forEach(d),n=E(h),i=u(h,"SPAN",{class:!0});var y=p(i);c=f(y,v),y.forEach(d),h.forEach(d),l.forEach(d),this.h()},h(){b(o,"fill","#89b889"),b(o,"d","M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809\r\n                    c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"),b(a,"viewBox","0 0 16 16"),b(r,"class","icon  icon--twitter"),b(i,"class","username"),b(s,"href","https://twitter.com/"+B.site.twitter_username)},m(t,l){g(t,e,l),m(e,s),m(s,r),m(r,a),m(a,o),m(s,n),m(s,i),m(i,c)},p:w,d(t){t&&d(e)}}}(),N=function(t){let e,s,r,a,o,n,i,c,v=B.site.linkedin_username+"";return{c(){e=l("li"),s=l("a"),r=l("span"),a=V("svg"),o=V("path"),n=y(),i=l("span"),c=h(v),this.h()},l(t){e=u(t,"LI",{});var l=p(e);s=u(l,"A",{href:!0});var h=p(s);r=u(h,"SPAN",{class:!0});var g=p(r);a=u(g,"svg",{width:!0,height:!0},1);var m=p(a);o=u(m,"path",{d:!0},1),p(o).forEach(d),m.forEach(d),g.forEach(d),n=E(h),i=u(h,"SPAN",{class:!0});var y=p(i);c=f(y,v),y.forEach(d),h.forEach(d),l.forEach(d),this.h()},h(){b(o,"d","M 0,1.77606 Q 0,1.00386 0.54054,0.50193 1.08108,0 1.94595,0 2.79537,0 3.32047,0.49421 3.86101,1.00386 3.86101,1.8224 q 0,0.74131 -0.5251,1.23552 -0.54054,0.50965 -1.42085,0.50965 l -0.0154,0 q -0.84942,0 -1.37452,-0.50965 Q 4e-5,2.54827 4e-5,1.77606 Z m 0.20078,13.51352 0,-10.3166 3.42857,0 0,10.3166 -3.42857,0 z m 5.32818,0 3.42857,0 0,-5.76062 q 0,-0.54054 0.12355,-0.83398 0.21622,-0.52509 0.65638,-0.88803 0.44015,-0.36293 1.10424,-0.36293 1.72973,0 1.72973,2.33205 l 0,5.51351 3.42857,0 0,-5.91506 Q 16,7.08881 14.91892,5.90734 13.83784,4.72587 12.06178,4.72587 q -1.99228,0 -3.10425,1.71429 l 0,0.0309 -0.0154,0 0.0154,-0.0309 0,-1.46718 -3.42857,0 q 0.0309,0.49421 0.0309,3.07336 0,2.57915 -0.0309,7.24324 z"),b(a,"width","16"),b(a,"height","15.28958"),b(r,"class","icon  icon--twitter"),b(i,"class","username"),b(s,"href","https://www.linkedin.com/in/"+B.site.linkedin_username)},m(t,l){g(t,e,l),m(e,s),m(s,r),m(r,a),m(a,o),m(s,n),m(s,i),m(i,c)},p:w,d(t){t&&d(e)}}}();return{c(){e=l("footer"),s=l("div"),r=l("div"),a=l("div"),o=l("ul"),n=l("li"),i=h(j),c=y(),v=l("div"),$=l("ul"),O&&O.c(),_=y(),D&&D.c(),x=y(),N&&N.c(),q=y(),L=l("div"),C=l("p"),R=h(A),S=y(),k=l("p"),P=h(I),this.h()},l(t){e=u(t,"FOOTER",{class:!0});var l=p(e);s=u(l,"DIV",{class:!0});var h=p(s);r=u(h,"DIV",{class:!0});var g=p(r);a=u(g,"DIV",{class:!0});var m=p(a);o=u(m,"UL",{class:!0});var y=p(o);n=u(y,"LI",{});var w=p(n);i=f(w,j),w.forEach(d),y.forEach(d),m.forEach(d),c=E(g),v=u(g,"DIV",{class:!0});var b=p(v);$=u(b,"UL",{class:!0});var V=p($);O&&O.l(V),_=E(V),D&&D.l(V),x=E(V),N&&N.l(V),V.forEach(d),b.forEach(d),q=E(g),L=u(g,"DIV",{class:!0});var T=p(L);C=u(T,"P",{class:!0});var M=p(C);R=f(M,A),M.forEach(d),S=E(T),k=u(T,"P",{class:!0});var U=p(k);P=f(U,I),U.forEach(d),T.forEach(d),g.forEach(d),h.forEach(d),l.forEach(d),this.h()},h(){b(o,"class","contact-list"),b(a,"class","footer-col  footer-col-1"),b($,"class","social-media-list"),b(v,"class","footer-col  footer-col-2"),b(C,"class","text"),b(k,"class","text"),b(L,"class","footer-col  footer-col-3"),b(r,"class","footer-col-wrapper"),b(s,"class","wrapper"),b(e,"class","site-footer")},m(t,l){g(t,e,l),m(e,s),m(s,r),m(r,a),m(a,o),m(o,n),m(n,i),m(r,c),m(r,v),m(v,$),O&&O.m($,null),m($,_),D&&D.m($,null),m($,x),N&&N.m($,null),m(r,q),m(r,L),m(L,C),m(C,R),m(L,S),m(L,k),m(k,P)},p(t,[e]){O.p(t,e),D.p(t,e),N.p(t,e)},i:w,o:w,d(t){t&&d(e),O&&O.d(),D&&D.d(),N&&N.d()}}}class ot extends n{constructor(t){super(),i(this,t,null,at,c,{})}}function nt(t,e,s){const r=t.slice();return r[2]=e[s],r}function it(t){let e,s=!t[2].avoidMainMenu&&function(t){let e,s,r=t[2].title+"";return{c(){e=l("a"),s=h(r),this.h()},l(t){e=u(t,"A",{class:!0,href:!0});var a=p(e);s=f(a,r),a.forEach(d),this.h()},h(){b(e,"class","page-link"),b(e,"href",t[2].permalink)},m(t,r){g(t,e,r),m(e,s)},p:w,d(t){t&&d(e)}}}(t);return{c(){s&&s.c(),e=$()},l(t){s&&s.l(t),e=$()},m(t,r){s&&s.m(t,r),g(t,e,r)},p(t,e){t[2].avoidMainMenu||s.p(t,e)},d(t){s&&s.d(t),t&&d(e)}}}function ct(t){let e,s,r,a,o,n,i,c,v,$,_,x,q,L=B.site.title+"",C=t[0],R=[];for(let l=0;l<C.length;l+=1)R[l]=it(nt(t,C,l));return{c(){e=l("header"),s=l("div"),r=l("a"),a=h(L),o=y(),n=l("nav"),i=l("div"),c=V("svg"),v=V("path"),$=V("path"),_=V("path"),x=y(),q=l("div");for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){e=u(t,"HEADER",{class:!0});var l=p(e);s=u(l,"DIV",{class:!0});var h=p(s);r=u(h,"A",{class:!0,href:!0});var g=p(r);a=f(g,L),g.forEach(d),o=E(h),n=u(h,"NAV",{class:!0});var m=p(n);i=u(m,"DIV",{href:!0,class:!0});var y=p(i);c=u(y,"svg",{viewBox:!0},1);var w=p(c);v=u(w,"path",{fill:!0,d:!0},1),p(v).forEach(d),$=u(w,"path",{fill:!0,d:!0},1),p($).forEach(d),_=u(w,"path",{fill:!0,d:!0},1),p(_).forEach(d),w.forEach(d),y.forEach(d),x=E(m),q=u(m,"DIV",{class:!0});var b=p(q);for(let e=0;e<R.length;e+=1)R[e].l(b);b.forEach(d),m.forEach(d),h.forEach(d),l.forEach(d),this.h()},h(){b(r,"class","site-title"),b(r,"href","/"),b(v,"fill","#424242"),b(v,"d","M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"),b($,"fill","#424242"),b($,"d","M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"),b(_,"fill","#424242"),b(_,"d","M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"),b(c,"viewBox","0 0 18 15"),b(i,"href","#"),b(i,"class","menu-icon"),b(q,"class","trigger"),b(n,"class","site-nav"),b(s,"class","wrapper"),b(e,"class","site-header")},m(t,l){g(t,e,l),m(e,s),m(s,r),m(r,a),m(s,o),m(s,n),m(n,i),m(i,c),m(c,v),m(c,$),m(c,_),m(n,x),m(n,q);for(let e=0;e<R.length;e+=1)R[e].m(q,null)},p(t,[e]){if(1&e){let s;for(C=t[0],s=0;s<C.length;s+=1){const r=nt(t,C,s);R[s]?R[s].p(r,e):(R[s]=it(r),R[s].c(),R[s].m(q,null))}for(;s<R.length;s+=1)R[s].d(1);R.length=C.length}},i:w,o:w,d(t){t&&d(e),N(R,t)}}}function lt(t,e,s){let{pages:r=[]}=e;const a=[...r,{title:"Blog",permalink:"/blog"}].sort(((t,e)=>t.title.toLowerCase().localeCompare(e.title.toLowerCase())));return t.$$set=t=>{"pages"in t&&s(1,r=t.pages)},[a,r]}class ht extends n{constructor(t){super(),i(this,t,lt,ct,c,{pages:1})}}function ut(t){let e,s,r,a,o,n,i;e=new ht({props:{pages:t[0]}});const c=t[2].default,h=T(c,t,t[1],null);return n=new ot({}),{c(){x(e.$$.fragment),s=y(),r=l("main"),a=l("div"),h&&h.c(),o=y(),x(n.$$.fragment),this.h()},l(t){q(e.$$.fragment,t),s=E(t),r=u(t,"MAIN",{class:!0});var i=p(r);a=u(i,"DIV",{class:!0});var c=p(a);h&&h.l(c),c.forEach(d),i.forEach(d),o=E(t),q(n.$$.fragment,t),this.h()},h(){b(a,"class","wrapper"),b(r,"class","page-content")},m(t,c){L(e,t,c),g(t,s,c),g(t,r,c),m(r,a),h&&h.m(a,null),g(t,o,c),L(n,t,c),i=!0},p(t,[s]){const r={};1&s&&(r.pages=t[0]),e.$set(r),h&&h.p&&2&s&&M(h,c,t,t[1],s,null,null)},i(t){i||(S(e.$$.fragment,t),S(h,t),S(n.$$.fragment,t),i=!0)},o(t){k(e.$$.fragment,t),k(h,t),k(n.$$.fragment,t),i=!1},d(t){P(e,t),t&&d(s),t&&d(r),h&&h.d(t),t&&d(o),P(n,t)}}}var pt=function(t,e,s,r){return new(s||(s=Promise))((function(a,o){function n(t){try{c(r.next(t))}catch(e){o(e)}}function i(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,i)}c((r=r.apply(t,e||[])).next())}))};function ft(t,e,s){let{$$slots:r={},$$scope:a}=e,{pages:o=[]}=e;return t.$$set=t=>{"pages"in t&&s(0,o=t.pages),"$$scope"in t&&s(1,a=t.$$scope)},[o,a,r]}var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends n{constructor(t){super(),i(this,t,ft,ut,c,{pages:0})}},load:function({fetch:t}){return pt(this,void 0,void 0,(function*(){const e=yield t("/summary_pages.json");return{props:{pages:yield e.json()}}}))}});const gt=[()=>rt((()=>import("./pages/index.svelte-99072a94.js")),void 0),()=>rt((()=>import("./pages/categories/[slug].svelte-29e940c6.js")),void 0),()=>rt((()=>import("./pages/blog.svelte-3f091e22.js")),void 0),()=>rt((()=>import("./pages/tags/[slug].svelte-2ec4463e.js")),void 0),()=>rt((()=>import("./pages/[category]/[year]/[month]/[date]/[slug].svelte-a8f2e1c8.js")),void 0),()=>rt((()=>import("./pages/[slug].svelte-bb0f1fde.js")),void 0)],mt=decodeURIComponent,vt=[[/^\/$/,[gt[0]]],[/^\/tags-and-categories\.json$/],[/^\/summary_pages\.json$/],[/^\/summary\.json$/],[/^\/categories\/([^/]+?)\.json$/],[/^\/categories\/([^/]+?)\/?$/,[gt[1]],t=>({slug:mt(t[1])})],[/^\/blog\.json$/],[/^\/feed\.xml$/],[/^\/blog\/?$/,[gt[2]]],[/^\/tags\/([^/]+?)\.json$/],[/^\/tags\/([^/]+?)\/?$/,[gt[3]],t=>({slug:mt(t[1])})],[/^\/([^/]+?)\.json$/],[/^\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\.json$/],[/^\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,[gt[4]],t=>({category:mt(t[1]),year:mt(t[2]),month:mt(t[3]),date:mt(t[4]),slug:mt(t[5])})],[/^\/([^/]+?)\/?$/,[gt[5]],t=>({slug:mt(t[1])})]];function yt(){return{x:pageXOffset,y:pageYOffset}}function $t(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}class Et{constructor({base:t,routes:e}){this.base=t,this.routes=e}init(t){let e;this.renderer=t,t.router=this,this.enabled=!0,"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{history.scrollRestoration="auto"})),addEventListener("load",(()=>{history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=o(o({},history.state||{}),{"sveltekit:scroll":yt()});history.replaceState(t,document.title,window.location.href)}),50)}));const s=t=>{const e=$t(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let r;addEventListener("touchstart",s),addEventListener("mousemove",(t=>{clearTimeout(r),r=setTimeout((()=>{s(t)}),20)})),addEventListener("click",(t=>{if(!this.enabled)return;if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=$t(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(s?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const a=new URL(r);if(a.pathname===location.pathname&&a.search===location.search)return;const o=this.parse(a);if(o){const s=e.hasAttribute("sveltekit:noscroll");history.pushState({},"",a.href),this._navigate(o,s?yt():null,[],a.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state&&this.enabled){const e=new URL(location.href),s=this.parse(e);s?this._navigate(s,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}parse(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;const e=t.pathname.slice(this.base.length)||"/",s=this.routes.filter((([t])=>t.test(e)));if(s.length>0){const r=new URLSearchParams(t.search);return{id:`${e}?${r}`,routes:s,path:e,query:r}}}async goto(t,{noscroll:e=!1,replaceState:s=!1}={},r){if(this.enabled){const a=new URL(t,function(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}(document)),o=this.parse(a);if(o)return history[s?"replaceState":"pushState"]({},"",t),this._navigate(o,e?yt():null,r,a.hash)}return location.href=t,new Promise((()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(e)return this.renderer.load(e);throw new Error(`Could not prefetch ${t.href}`)}async _navigate(t,e,s,r){this.renderer.notify({path:t.path,query:t.query}),location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.update(t,s),document.body.focus();const a=r&&document.getElementById(r.slice(1));e?scrollTo(e.x,e.y):a?scrollTo(0,a.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function wt(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,s=t.status;return e instanceof Error?!s||s<400||s>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:s,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function _t(t){const e=U(t);let s=!0;return{notify:function(){s=!0,e.update((t=>t))},set:function(t){s=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||s&&e!==r)&&t(r=e)}))}}}function bt(t,a){const o="string"==typeof t?t:t.url,n=document.querySelector(`script[type="svelte-data"][url="${o}"]`);if(n){const t=JSON.parse(n.textContent),{body:a}=t,o=((t,a)=>{var o={};for(var n in t)e.call(t,n)&&a.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&s)for(var n of s(t))a.indexOf(n)<0&&r.call(t,n)&&(o[n]=t[n]);return o})(t,["body"]);return Promise.resolve(new Response(a,o))}return fetch(t,a)}class xt{constructor({Root:t,layout:e,target:s,session:r,host:a}){this.Root=t,this.layout=e,this.host=a,this.router=null,this.target=s,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.loading={id:null,promise:null},this.stores={page:_t({}),navigating:U(null),session:U(r)},this.$session=null,this.root=null;let o=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!o)return;this.current.session_changed=!0;const e=this.router.parse(new URL(location.href));this.update(e,[])})),o=!0}async start(t){const e=await this._load(t);e.redirect?location.href=new URL(e.redirect,location.href).href:this._init(e)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e){const s=this.token={},r=await this._get_navigation_result(t);if(s!==this.token)return;if(r.reload)location.reload();else if(r.redirect){if(!(e.length>10||e.includes(t.path)))return void(this.router?this.router.goto(r.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(r.redirect,location.href).href);this.root.$set({status:500,error:new Error("Redirect loop")})}else this.started?(this.current=r.state,this.root.$set(r.props),this.stores.navigating.set(null),await 0):this._init(r);dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null;!1===r.state.nodes[r.state.nodes.length-1].module.router?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t),this.loading.id=t.id,this.loading.promise}async _get_navigation_result(t){if(this.loading.id===t.id)return this.loading.promise;for(let e=0;e<t.routes.length;e+=1){const s=t.routes[e],[r,a,o]=s;if(1===s.length)return{reload:!0};let n=e+1;for(;n<t.routes.length;){const e=t.routes[n];if(e[0].toString()!==r.toString())break;1!==e.length&&e[1].forEach((t=>t())),n+=1}const i=a.map((t=>t())),c={host:this.host,path:t.path,params:o?o(s[0].exec(t.path)):{},query:t.query},l=await this._load({status:200,error:null,nodes:i,page:c});if(l)return l}return await this._load({status:404,error:new Error(`Not found: ${t.path}`),nodes:[],page:{host:this.host,path:t.path,query:t.query,params:{}}})}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:o({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _load({status:t,error:e,nodes:s,page:r}){const a=r.query.toString(),n={state:{page:r,query:a,session_changed:!1,nodes:[],contexts:[]},props:{status:t,error:e,components:[]}},i={path:!this.current.page||r.path!==this.current.page.path,params:Object.keys(r.params).filter((t=>!this.current.page||this.current.page.params[t]!==r.params[t])),query:a!==this.current.query,session:this.current.session_changed,context:!1};try{const t=[this.layout,...s],c=[];let l;for(let s=0;s<t.length;s+=1){const h=this.current.nodes[s],u=this.current.contexts[s],p=await t[s];if(n.props.components[s]=p.default,p.preload)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading");if(!h||p!==h.module||i.path&&h.uses.path||i.params.some((t=>h.uses.params.has(t)))||i.query&&h.uses.query||i.session&&h.uses.session||i.context&&h.uses.context){const h=r.path+a,u=this.caches.get(p),f=u&&u.get(h);let d,g;if(!f||i.context&&f.node.uses.context){d={module:p,uses:{params:new Set,path:!1,query:!1,session:!1,context:!1}};const a={};for(const t in r.params)Object.defineProperty(a,t,{get:()=>(d.uses.params.add(t),r.params[t]),enumerable:!0});const n=this.$session;if(p.load){g=await p.load.call(null,{page:{host:r.host,params:a,get path(){return d.uses.path=!0,r.path},get query(){return d.uses.query=!0,r.query}},get session(){return d.uses.session=!0,n},get context(){return d.uses.context=!0,o({},l)},fetch:this.started?fetch:bt});const i=s===t.length-1&&!e;if(!g&&i)return}}else({node:d,loaded:g}=f);if(g){if(g=wt(g),g.error){if(e)throw e;return await this._load({status:g.status||500,error:g.error,nodes:[],page:{host:r.host,path:r.path,query:r.query,params:{}}})}if(g.redirect)return{redirect:g.redirect};if(g.context&&(i.context=!0,l=o(o({},l),g.context)),g.maxage){this.caches.has(p)||this.caches.set(p,new Map);const t=this.caches.get(p),e={node:d,loaded:g};t.set(h,e);let s=!1;const r=setTimeout((()=>{a()}),1e3*g.maxage),a=()=>{t.get(h)===e&&t.delete(h),o(),clearTimeout(r)},o=this.stores.session.subscribe((()=>{s&&a()}));s=!0}c[s]=g.props}n.state.nodes[s]=d,n.state.contexts[s]=l}else n.state.nodes[s]=h,n.state.contexts[s]=l=u}return(await Promise.all(c)).forEach(((t,e)=>{t&&(n.props[`props_${e}`]=t)})),this.current.page&&r.path===this.current.page.path&&!i.query||(n.props.page=r),n}catch(c){if(e)throw e;return await this._load({status:500,error:c,nodes:[],page:{host:r.host,path:r.path,query:r.query,params:{}}})}}}async function qt({paths:t,target:e,session:s,host:r,route:a,hydrate:o}){const n=a&&new Et({base:t.base,routes:vt}),i=new xt({Root:tt,layout:dt,target:e,session:s,host:r});o&&await i.start(o),a&&n.init(i),dispatchEvent(new CustomEvent("sveltekit:start"))}export{qt as start};
