import{j as e,r,S as m,L as h}from"./index-fI494OBJ.js";import{d as l}from"./data-Bfeg_UrV.js";const p=({accident:t})=>e.jsxs("div",{className:"border rounded-lg p-4 shadow-md bg-white text-gray-600 dark:bg-gray-800 dark:text-white w-[250px] flex flex-col gap-2 mt-5",children:[e.jsxs("h2",{className:"text-lg font-bold ",children:["Accident ID: ",t.id]}),e.jsxs("p",{className:"text-sm truncate",children:["Location: ",t.location]}),e.jsxs("p",{className:"text-sm ",children:["Date: ",t.date]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Severity:"})," ",e.jsx("span",{className:`px-2 py-1 rounded ${t.severity==="High"?"bg-red-500 text-white":t.severity==="Moderate"?"bg-yellow-500 text-white":"bg-green-500 text-white"}`,children:t.severity})]}),e.jsxs("p",{className:"text-sm ",children:["Vehicles Involved: ",t.vehicles_involved]}),e.jsxs("p",{className:"text-sm ",children:["Cause: ",t.cause]})]}),j=()=>{const[t,a]=r.useState(l),[n,i]=r.useState(""),d=s=>{if(i(s.target.value),console.log(s.target.value),s.target.value==""){console.log("first"),a(l);return}const c=new RegExp(`^${s.target.value}`,"i"),o=t.filter(x=>c.test(x.location));a(o)};return e.jsxs("div",{className:"p-5 w-full",children:[e.jsx(m,{className:"",title:"Incidents"}),e.jsx("div",{className:"my-4",children:e.jsx("input",{type:"text",value:n,onChange:d,placeholder:"Search Incidents....",className:"px-3 py-1 rounded-md text-black border-current border-[1px]"})}),e.jsx("div",{className:"flex flex-wrap justify-between",children:t.map(s=>e.jsx(h,{to:`/incidents/${s.id}`,children:e.jsx(p,{accident:s})}))})]})};export{j as default};
