import{u as t,j as e}from"./index-DW96NFn9.js";import{d as r,S as i,F as c,a as d,b as m,c as x,e as n,f as o}from"./index-luwRJ7YA.js";const h="/assets/incident-DP6IP30S.jpg",p=()=>{const a=t(),s=r.find(l=>l.id==a.incidentID);return e.jsxs("div",{className:"w-full p-2 md:p-5 flex flex-col",children:[e.jsx("header",{className:" text-current text-center py-4 px-6",children:e.jsx(i,{title:"Incident Details",className:"text-5xl font-semibold"})}),e.jsx("main",{className:"flex-grow p-2 md:p-6 flex flex-col items-center",children:e.jsxs("div",{className:" shadow-md dark:shadow-[rgba(255,255,255,0.3)_6px_6px_208px] flex flex-col-reverse md:flex-row items-center md:items-start gap-3 rounded-lg max-w-3xl w-full p-8",children:[e.jsxs("div",{className:"left w-full md:w-[49%] whitespace-nowrap",children:[e.jsxs("h2",{className:"text-2xl font-bold  mb-4 flex items-center",children:[e.jsx(c,{className:"text-red-500 mr-2",size:20}),"Incident #",s.id]}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(d,{className:"text-blue-500 mr-2"}),e.jsx("p",{className:" text-lg",children:s.location})]}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(m,{className:"text-green-500 mr-2"}),e.jsx("p",{className:" text-lg",children:s.date})]}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(x,{className:`mr-2 ${s.severity==="High"?"text-red-500":s.severity==="Medium"?"text-yellow-500":"text-green-500"}`}),e.jsxs("p",{className:" text-lg",children:["Severity:"," ",e.jsx("span",{className:`font-bold ${s.severity==="High"?"text-red-500":s.severity==="Medium"?"text-yellow-500":"text-green-500"}`,children:s.severity})]})]}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(n,{className:" mr-2"}),e.jsxs("p",{className:" text-lg",children:["Vehicles Involved: ",s.vehicles_involved]})]}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(o,{className:"text-red-400 mr-2"}),e.jsxs("p",{className:" text-lg",children:["Cause: ",s.cause]})]})]}),e.jsx("div",{className:"right w-full md:w-[49%]",children:e.jsx("img",{src:h,alt:"",className:"w-full shadow-md rounded-md"})})]})})]})};export{p as default};