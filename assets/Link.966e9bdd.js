import{_ as i}from"./examloading.f66f2dcc.js";import{u as d,s as _,r as m,e as s,o as a,c as r,a as t,t as c,g as o,d as u,w as h,j as p}from"./index.5dc4d263.js";const x={key:0,class:"p-5 mx-auto my-10 text-center bg-gray-100 border border-gray-300 md:w-1/2"},f=t("div",null," \u098F\u0995\u09AC\u09BE\u09B0 \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09BF\u09A4\u09C7 \u09A2\u09C1\u0995\u09B2\u09C7\u0987 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09B8\u09AE\u09DF \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964 \u09AD\u09C1\u09B2\u09C7 \u09AC\u09BE \u09A8\u09C7\u099F\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u09AC\u09BE \u0985\u09A8\u09CD\u09AF \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u0995\u09BE\u09B0\u09A3\u09C7 \u098F\u0995\u09BE\u09A7\u09BF\u0995\u09AC\u09BE\u09B0 \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09C7\u09DF\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09B2\u09C7 \u09B0\u200D\u09CD\u09AF\u09BE\u0982\u0995\u09BF\u0982 \u098F \u09A4\u09CB\u09AE\u09BE\u09B0 \u09A8\u09BE\u09AE \u09B8\u09AC\u09BE\u09B0 \u09A8\u09BF\u099A\u09C7 \u099A\u09B2\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964 ",-1),v={class:"text-2xl font-semibold"},g=o(" \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09B6\u09C1\u09B0\u09C1 \u09B9\u09AC\u09C7: "),w=t("br",null,null,-1),y={class:"mt-3"},b=o("Start"),k={key:1,class:"flex flex-col items-center justify-center w-full h-screen"},B=p('<img src="'+i+'" alt="" class="h-56"><div class="flex items-center justify-center space-x-1 text-sm text-gray-700"><svg fill="none" class="w-10 h-10 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fill-rule="evenodd"></path></svg><div class="text-lg">Please wait ...</div></div>',2),N=[B],T={setup(S){const l=d(),{curexam:e}=_(l);return(V,j)=>{const n=m("router-link");return s(e)&&s(e).id?(a(),r("div",x,[f,t("div",null,[t("h1",v,c(s(e).topic),1),t("h1",null,[g,w,o(" "+c(s(e).start_time),1)])]),t("div",y,[u(n,{to:`/exam/${s(e).id}`,class:"btn btn-primary"},{default:h(()=>[b]),_:1},8,["to"])])])):(a(),r("div",k,N))}}};export{T as default};
