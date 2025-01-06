import{d as s,r as o,j as e}from"./main-s3WgPMsc.js";import{N as k}from"./Navbar-BfVqFuhc.js";import{F as I}from"./Footer-CV90e5Tq.js";const S=s.main`
  padding: 32px 16px;
`;s.div`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;
`;const h=s.section`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 40px;

  @media (width <= 768px) {
    margin: 0px auto 30px;
  }
`,p=s.h1`
  font-family: "EB Garamond", serif;
  font-weight: 500;
  font-style: oblique;
  font-size: 70px;
  letter-spacing: -0.06em;
  margin-bottom: 16px;

  @media (width <= 768px) {
    font-size: 50px;
    margin-bottom: 8px;
  }
`,m=s.hr`
  border: 1px solid rgba(var(--desk-gray-500), 0.6);
`,v=s.h2`
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-base);
  font-weight: 300;
  padding: 4px 0;

  @media (width <= 768px) {
    font-size: var(--text-xs);
  }
`,C=s.p`
  font-size: var(--text-2xl);
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  letter-spacing: -0.025em;
  padding: 8px 0;

  @media (width <= 768px) {
    padding: 4px 0;
    font-size: var(--text-base);
  }
`,M=[{companyName:"Astra Honda",servicesItems:["Content Research & Analytic","Digital Trend Analytic"],year:"2023",industry:"Vehicle Manufacture",detail:"As their effort to gain trust with local wisdom and the spirit of #OneHeart, Honda aims to reach more trust and connection withing Indonesia market.",images:["img/home/work/astra_1.webp","img/home/work/astra_2.webp","img/home/work/astra_3.webp"]},{companyName:"Telkomsel",servicesItems:["Campaign Strategy & Development","Social Media Strategy","Online Activation Development"],year:"2023",industry:"Telecommunication",detail:"After their merger with IndiHome, Telkomsel aimed to create a nationwide corporate messaging campaign under #BersatuLebihMaju, resulting in +1 million impression, 20% increase of Engagement Rate, and more than 3000 followers.",images:["img/home/work/telkomsel_1.webp","img/home/work/telkomsel_2.webp","img/home/work/telkomsel_3.webp"]},{companyName:"Salam Ganesha Academy",servicesItems:["Campaign Strategy & Development","Social Media Development","Kol Management"],year:"2024",industry:"Education Tech",detail:"As an education startup, Salam Ganesha Academy transitioned to targeting a more mature senior executive market. Several digital strategies were executed to ensure a smooth transition.",images:["img/home/work/ganesha_1.webp","img/home/work/ganesha_2.webp","img/home/work/ganesha_3.webp"]},{companyName:"Rococo Group Indonesia",servicesItems:["Campaign Strategy & Development","Social Media Development","Kol Management"],year:"2023",industry:"Luxury Fashion Retail",detail:"Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong.",images:["img/home/work/rococo_1.webp","img/home/work/rococo_2.webp","img/home/work/rococo_3.webp"]},{companyName:"Hayati Karya Lestari",servicesItems:["Branding Strategy","Social Media & Website","Brand Architecture"],year:"2023",industry:"NGO",detail:"Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia."}],L=s.button`
  display: grid;
  cursor: pointer;
  grid-template-columns: 8fr 2fr;
  padding-right: 8px;
  align-items: center;
  text-align: left;
  width: 100%;
  background-color: transparent;
  border: none;

  svg {
    margin-left: auto;
    transform: ${({isOpen:t})=>t?"rotate(180deg)":"rotate(0deg)"};
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
    transition-duration: 300ms;
  }
`,z=s.div`
  max-height: ${({isOpen:t})=>t?"3000px":"0"};
  visibility: ${({isOpen:t})=>t?"visible":"hidden"};
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  transition-duration: 300ms;
  display: flex;
  flex-direction: column;
  gap: 12px 0;

  img {
    object-fit: contain;
    cursor: pointer;
    max-width: 85%;
    height: auto;
    max-height: 100%;
    margin-right: auto;
    border: 1.5px solid rgb(var(--desk-gray-700));
    border-radius: 8px;
  }

  @media (width <= 768px) {
    gap: 8px 0;

    img {
      max-width: 95%;
    }
  }
`,d=s.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  ul {
    display: grid;
    gap: 4px 0;
  }

  &:first-of-type {
    margin-top: 16px;
  }

  &:last-of-type {
    margin-bottom: 24px;
  }

  &:nth-of-type(5) {
    margin: 8px 0 32px;
  }

  .text,
  .title {
    font-size: var(--text-lg);
  }

  .title {
    font-weight: 400;
  }

  .text {
    overflow-wrap: break-word;
    max-width: 27ch;
  }

  @media (width <= 768px) {
    ul {
      gap: 2px 0;
    }

    &:first-of-type {
      margin-top: 8px;
    }

    &:last-of-type {
      margin-bottom: 16px;
    }

    &:nth-of-type(5) {
      margin: 8px 0 24px;
    }

    .text,
    .title {
      font-size: var(--text-sm);
    }
  }
`;function D(t){o.useEffect(()=>{t.forEach(a=>{const i=new Image;i.src=a})},[t])}function g(t,a){if(t==null)return{};var i={},r=Object.keys(t),n,l;for(l=0;l<r.length;l++)n=r[l],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}var H=["color"],E=o.forwardRef(function(t,a){var i=t.color,r=i===void 0?"currentColor":i,n=g(t,H);return o.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:a}),o.createElement("path",{d:"M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),_=["color"],R=o.forwardRef(function(t,a){var i=t.color,r=i===void 0?"currentColor":i,n=g(t,_);return o.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:a}),o.createElement("path",{d:"M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),N=["color"],A=o.forwardRef(function(t,a){var i=t.color,r=i===void 0?"currentColor":i,n=g(t,N);return o.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:a}),o.createElement("path",{d:"M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),B=["color"],V=o.forwardRef(function(t,a){var i=t.color,r=i===void 0?"currentColor":i,n=g(t,B);return o.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:a}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z",fill:r}))});function $({companyName:t,servicesItems:a=[],year:i,industry:r,detail:n,images:l=[],isOpen:u,onClick:y}){const[w,b]=o.useState(0);D(l);const j=()=>{l.length>0&&b(x=>(x+1)%l.length)};return e.jsxs(e.Fragment,{children:[e.jsxs(L,{onClick:y,isOpen:u,children:[e.jsx(C,{children:t}),e.jsx(E,{})]}),e.jsxs(z,{isOpen:u,children:[e.jsxs(d,{children:[e.jsx("p",{className:"title",children:"Services"}),e.jsx("ul",{children:a.map(x=>e.jsx("li",{className:"text",children:x}))})]}),e.jsxs(d,{children:[e.jsx("p",{className:"title",children:"Year"}),e.jsx("p",{className:"text",children:i})]}),e.jsxs(d,{children:[e.jsx("p",{className:"title",children:"Industry"}),e.jsx("p",{className:"text",children:r})]}),e.jsxs(d,{children:[e.jsx("p",{className:"title",children:"Description"}),e.jsx("p",{className:"text",children:n})]}),l.length>0&&e.jsxs(d,{children:[e.jsxs("p",{className:"title",children:[l.length===1?"Picture":"Pictures"," ",e.jsx("br",{}),w+1," ⁄ ",l.length]}),e.jsx("img",{src:l[w],onClick:j,width:"340",height:"425",loading:"eager"})]})]})]})}function O(){const[t,a]=o.useState(null),i=r=>{a(n=>n===r?null:r)};return e.jsxs(h,{children:[e.jsx(p,{style:{textIndent:"-0.15em"},children:"Works"}),e.jsx(v,{children:"Company"}),e.jsx(m,{}),M.map((r,n)=>e.jsxs(e.Fragment,{children:[e.jsx($,{isOpen:t===n,onClick:()=>i(n),...r},n),e.jsx(m,{})]}))]})}const c=s.p`
  font-size: var(--text-xl);
  overflow-wrap: break-word;
  margin-bottom: 16px;

  span {
    font-family: "EB Garamond", serif;
    font-style: oblique;
    font-size: var(--text-xl);
    line-height: 1;
  }

  @media (width <= 768px) {
    font-size: var(--text-base);

    span {
      font-size: var(--text-base);
    }
  }
`,T=s.blockquote`
  margin-top: 20px;

  p {
    font-family: "EB Garamond", serif;
    line-height: 1.2;
    text-align: left;
    max-width: 100%;
    margin-bottom: 0;
    font-size: var(--text-3xl);

    &:last-of-type {
      font-style: italic;
      text-align: right;
    }
  }

  @media (width <= 768px) {
    p {
      font-size: var(--text-xl);
    }
  }
`;function Z(){return e.jsxs(h,{children:[e.jsx(p,{children:"Manifesto"}),e.jsxs(c,{children:[e.jsx("span",{children:"To Seek for The Sun"}),"–A commitment to constantly exploring innovative and emerging sciences in marketing and branding. We focus on crafting strategies that seamlessly position brands within the hearts and minds of society, ensuring they resonate deeply with their audience. Each project we undertake is a journey—an exploration for the"," ",e.jsx("span",{children:"“ideal truth”"})," : we are inspired by the understanding that the branding and marketing science is ever-evolving and dynamic."]}),e.jsxs(c,{children:["Our mission transcends traditional branding; we aim to harmonize the rationality of the left brain with the creativity of the right brain, empowering businesses to navigate the complexities of modern markets. In today’s fast-paced, information-rich, and time-poor world, a brand’s value is determined by how effortlessly it enables customers to say"," ",e.jsx("span",{children:"“yes.”"})]}),e.jsx(c,{children:"Branding, as we see it, is the art of connecting sound strategy with brilliant creativity. A strong brand pairs these elements to create symbols and messages that resonate with customers, far beyond product features, benefits, or price."}),e.jsxs(c,{children:["Our ultimate goal is to help brands become charismatic entities that inspire belief in their uniqueness. A charismatic brand is irreplaceable in the eyes of its audience, and we firmly believe that with the right approach, any brand—",e.jsx("span",{children:"yours included"}),"—can achieve this distinction."]}),e.jsxs(T,{children:[e.jsxs("p",{children:["A brand is not what you say it is; ",e.jsx("br",{}),"It's what they say it is"]}),e.jsx("p",{children:"- Marty Neumeier"})]})]})}const G=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`,W=[{type:"Digital Campaign",service:["Social Media Handling","Digital Campaign Set-up","Digital Ads Handling","Digital Trend Analysis & Research"]},{type:"Brand Strategy",service:["Visual Identity Development","Branding Communication Set-up","Branding Implementation Set-up"]}];function F(){return e.jsxs(h,{children:[e.jsx(p,{children:"Services"}),e.jsx(G,{children:W.map(t=>e.jsxs("div",{children:[e.jsx(v,{children:t.type}),e.jsx(m,{}),t.service.map(a=>e.jsxs("div",{children:[e.jsx(C,{children:a}),e.jsx(m,{})]},`${t.type}-${a}`))]},t.type))})]})}const f=s.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(var(--desk-gray-300), 0.5);
  color: rgba(var(--text-black));
  text-decoration: none;
  width: 100%;
  padding: 24px 24px;
  border: 1px solid rgba(var(--desk-gray-300));
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border: 1px solid rgba(var(--desk-gray-500), 0.5);

    p {
      color: rgba(var(--desk-black));
    }

    svg {
      color: rgba(var(--desk-gray-700), 0.5);
    }
  }

  p {
    color: rgba(var(--desk-gray-700));
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
    font-weight: 400;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.025em;
  }

  svg {
    scale: 2;
    color: rgba(var(--desk-gray-500));
    transform: translate(-25%, 0);
  }

  @media (width <= 768px) {
    padding: 16px 16px;

    p {
      font-size: var(--text-sm);
    }

    svg {
      scale: 1.5;
      transform: translate(-25%, 0);
    }
  }
`,K=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  padding-top: 8px;

  @media (width <= 768px) {
    gap: 12px 0;
  }
`;function q(){return e.jsxs(h,{children:[e.jsx(p,{children:"Get in touch"}),e.jsxs(K,{children:[e.jsxs(f,{href:"mailto:zaidandzaki@gmail.com",target:"_blank",children:[e.jsx("p",{children:"Email us"}),e.jsx(A,{})]}),e.jsxs(f,{href:"https://wa.me/+6285159177206",target:"_blank",children:[e.jsx("p",{children:"Chat with us"}),e.jsx(R,{})]}),e.jsxs(f,{href:"https://www.instagram.com/deskreview/",target:"_blank",children:[e.jsx("p",{children:"Follow us"}),e.jsx(V,{})]})]})]})}function P(){return e.jsxs(S,{children:[e.jsx(Z,{}),e.jsx(O,{}),e.jsx(F,{}),e.jsx(q,{})]})}function J(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(P,{}),e.jsx(I,{})]})}export{J as default};
