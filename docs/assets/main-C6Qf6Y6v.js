const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BlogPost-CCHoVEPX.js","assets/rolldown-runtime-CpWojdLp.js","assets/styled-components-D-X338SB.js","assets/@radix-ui/react-icons-DoJMcfKb.js","assets/react-markdown-yAIc5ENR.js"])))=>i.map(i=>d[i]);
import{n as e,r as t}from"./rolldown-runtime-CpWojdLp.js";import{a as n,i as r,n as i,r as a,t as o}from"./@radix-ui/react-icons-DoJMcfKb.js";import{a as s,c as ee,i as te,n as c,o as ne,r as l,s as re,t as ie}from"./vendor-DOhqIQf-.js";import{n as ae,t as u}from"./styled-components-D-X338SB.js";import{N as oe,t as se}from"./react-markdown-yAIc5ENR.js";import{t as ce}from"./remark-gfm-dADzoraz.js";import{t as le}from"./rehype-raw-Cbv2OEDm.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var d=t(n(),1),ue=ee();function de(){let{pathname:e}=s();return(0,d.useEffect)(()=>{window.scrollTo(0,0)},[e]),null}var fe=ae` 
  /* colours */
  :root {
    --desk-gray-300: 234, 236, 236;
    --desk-gray-500: 187, 189, 191;
    --desk-gray-700: 52, 53, 53;
    --desk-blue: 46, 89, 169;
    --desk-brown: 87, 74, 67;
    --desk-orange: 227, 108, 42;
    --desk-white: 255, 255, 255;
    --desk-black: 5, 5, 5;
  }

  /* font sizes */
  :root {
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.375rem;
    --text-3xl: 1.5rem;
  }

  /* others */
  :root {
    --max-w: 600px;
  }

  /* global styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *:focus-visible {
    outline: 2px solid rgba(var(--desk-gray-500));
    outline-offset: 4px;
    border-radius: 1px;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }
  
  body {
    background-color: #ffffff;
    overflow-y: scroll;
    scrollbar-gutter: stable;
  }

  a {
    color: black;
  }

  p,
  li {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: var(--text-xl);
    color: rgba(var(--desk-gray-700));
    line-height: 1.333;
    letter-spacing: -0.025em;

    @media (width <= 768px) {
      font-size: var(--text-base);
    }
  }

  main {
    padding: 0 16px;
  }

  /* scrollbar */
  body::-webkit-scrollbar {
    width: 0.8vw;
  }

  body::-webkit-scrollbar-track {
    background-color: rgb(var(--desk-gray-300));
  }

  body::-webkit-scrollbar-thumb {
    background-color: rgba(var(--desk-gray-500), 0.8);
    border-radius: 1em;

    &:hover {
      background-color: rgba(var(--desk-gray-500), 1);
    }
  }
`,f=u.main`
  padding: 16px 16px 32px;
`;u.div`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 32px;
`;var p=u.section`
  max-width: var(--max-w);
  width: 100%;
  margin: 0px auto 32px;

  @media (width <= 768px) {
    margin: 0px auto 24px;
  }
`,m=u.h1`
  font-family: "EB Garamond", serif;
  font-weight: 500;
  font-style: oblique;
  font-size: 4.375rem;
  letter-spacing: -0.06em;
  margin-bottom: 16px;

  @media (width <= 768px) {
    font-size: 3.125rem;
    margin-bottom: 16px;
  }
`,h=u.hr`
  border: 1px solid rgba(var(--desk-gray-500), 0.6);
`,g=u.h2`
  font-family: "DM Sans", sans-serif;
  font-size: var(--text-base);
  font-weight: 300;
  padding: 4px 0;

  @media (width <= 768px) {
    font-size: var(--text-sm);
  }
`,_=u.p`
  font-size: var(--text-2xl);
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  letter-spacing: -0.025em;
  padding: 8px 0;

  @media (width <= 768px) {
    padding: 4px 0;
    font-size: var(--text-xl);
  }
`,pe=u.button`
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
    transform: ${({$isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
    transition-duration: 300ms;
  }
`,v=oe();function me({clientName:e,isOpen:t,onClick:n}){return(0,v.jsxs)(pe,{onClick:n,$isOpen:t,children:[(0,v.jsx)(_,{children:e}),(0,v.jsx)(o,{})]})}var he=u.div`
  max-height: ${({$isOpen:e})=>e?`3000px`:`0`};
  visibility: ${({$isOpen:e})=>e?`visible`:`hidden`};
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  transition-duration: 300ms;
  display: flex;
  flex-direction: column;
  gap: 12px 0;

  @media (width <= 768px) {
    gap: 8px 0;
  }
`,y=u.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

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

  ul {
    display: grid;
    gap: 4px 0;
  }

  li {
    list-style-type: none;
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
    img {
      max-width: 95%;
    }

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
`;function ge(e){(0,d.useEffect)(()=>{e.forEach(e=>{let t=new Image;t.src=e})},[e])}function _e({servicesItems:e=[],projectYear:t,clientIndustry:n,projectDetail:r,projectImages:i=[],isOpen:a}){let[o,s]=(0,d.useState)(0);return ge(i),(0,v.jsxs)(he,{$isOpen:a,children:[(0,v.jsxs)(y,{children:[(0,v.jsx)(`p`,{className:`title`,children:`Services`}),(0,v.jsx)(`ul`,{children:e.map((e,t)=>(0,v.jsx)(`li`,{className:`text`,children:e},t))})]}),(0,v.jsxs)(y,{children:[(0,v.jsx)(`p`,{className:`title`,children:`Year`}),(0,v.jsx)(`p`,{className:`text`,children:t})]}),(0,v.jsxs)(y,{children:[(0,v.jsx)(`p`,{className:`title`,children:`Industry`}),(0,v.jsx)(`p`,{className:`text`,children:n})]}),(0,v.jsxs)(y,{children:[(0,v.jsx)(`p`,{className:`title`,children:`Description`}),(0,v.jsx)(`p`,{className:`text`,children:r})]}),i.length>0&&(0,v.jsxs)(y,{children:[(0,v.jsxs)(`p`,{className:`title`,children:[i.length===1?`Picture`:`Pictures`,` `,(0,v.jsx)(`br`,{}),o+1,` ⁄ `,i.length]}),(0,v.jsx)(`img`,{src:i[o],onClick:()=>{i.length>0&&s(e=>(e+1)%i.length)},width:`340`,height:`425`,loading:`eager`})]})]})}var ve=e({clientIndustry:()=>S,clientName:()=>ye,default:()=>xe,filename:()=>be,projectDetail:()=>C,projectImages:()=>w,projectYear:()=>x,servicesItems:()=>b}),ye=`Astra Honda`,be=`astra_honda`,b=[`Content Research & Analytic`,`Digital Trend Analytic`],x=`2023`,S=`Vehicle Manufacture`,C=`As their effort to gain trust with local wisdom and the spirit of #OneHeart, Honda aims to reach more trust and connection withing Indonesia market.`,w=[`img/home/astra_1.webp`,`img/home/astra_2.webp`,`img/home/astra_3.webp`],xe={clientName:ye,filename:be,servicesItems:b,projectYear:x,clientIndustry:S,projectDetail:C,projectImages:w},Se=e({clientIndustry:()=>`NGO`,clientName:()=>T,default:()=>Ce,filename:()=>E,projectDetail:()=>k,projectYear:()=>O,servicesItems:()=>D}),T=`Hayati Karya Lestari`,E=`hayati_karya_lestari`,D=[`Branding Strategy`,`Social Media & Website`,`Brand Architecture`],O=`2023`,k=`Hayati Karya Lestari is a global carbon trading corporation with various business line, launching in Indonesia with the vision to create sustainable future for Indonesia.`,Ce={clientName:T,filename:E,servicesItems:D,projectYear:O,clientIndustry:`NGO`,projectDetail:k},we=e({clientIndustry:()=>P,clientName:()=>A,default:()=>Ee,filename:()=>j,projectDetail:()=>F,projectImages:()=>Te,projectYear:()=>N,servicesItems:()=>M}),A=`Rococo Group Indonesia`,j=`rococo_group_indonesia`,M=[`Campaign Strategy & Development`,`Social Media Development`,`Kol Management`],N=`2023`,P=`Luxury Fashion Retail`,F=`Rococo Group Indonesia is a luxury fashion retailer established in 2000, focusing on high-end fashion brands with partners from Italy, UK, and Hongkong.`,Te=[`img/home/rococo_1.webp`,`img/home/rococo_2.webp`,`img/home/rococo_3.webp`],Ee={clientName:A,filename:j,servicesItems:M,projectYear:N,clientIndustry:P,projectDetail:F,projectImages:Te},De=e({clientIndustry:()=>B,clientName:()=>I,default:()=>Oe,filename:()=>L,projectDetail:()=>V,projectImages:()=>H,projectYear:()=>z,servicesItems:()=>R}),I=`Salam Ganesha Academy`,L=`salam_ganesha_academy`,R=[`Campaign Strategy & Development`,`Social Media Development`,`Kol Management`],z=`2024`,B=`Education Tech`,V=`As an education startup, Salam Ganesha Academy transitioned to targeting a more mature senior executive market. Several digital strategies were executed to ensure a smooth transition.`,H=[`img/home/ganesha_1.webp`,`img/home/ganesha_2.webp`,`img/home/ganesha_3.webp`],Oe={clientName:I,filename:L,servicesItems:R,projectYear:z,clientIndustry:B,projectDetail:V,projectImages:H},ke=e({clientIndustry:()=>q,clientName:()=>U,default:()=>Ae,filename:()=>W,projectDetail:()=>J,projectImages:()=>Y,projectYear:()=>K,servicesItems:()=>G}),U=`Telkomsel`,W=`telkomsel`,G=[`Campaign Strategy & Development`,`Social Media Strategy`,`Online Activation Development`],K=`2023`,q=`Telecommunication`,J=`After their merger with IndiHome, Telkomsel aimed to create a nationwide corporate messaging campaign under #BersatuLebihMaju, resulting in +1 million impression, 20% increase of Engagement Rate, and more than 3000 followers.`,Y=[`img/home/telkomsel_1.webp`,`img/home/telkomsel_2.webp`,`img/home/telkomsel_3.webp`],Ae={clientName:U,filename:W,servicesItems:G,projectYear:K,clientIndustry:q,projectDetail:J,projectImages:Y},je=Object.values(Object.assign({"./portfolio/astra_honda.json":ve,"./portfolio/hayati_karya_lestari.json":Se,"./portfolio/rococo_group_indonesia.json":we,"./portfolio/salam_ganesha_academy.json":De,"./portfolio/telkomsel.json":ke})).map(e=>e.default).sort((e,t)=>e.projectYear===t.projectYear?e.clientName.localeCompare(t.clientName):t.projectYear.localeCompare(e.projectYear));function Me(){let[e,t]=(0,d.useState)(null),n=e=>{t(t=>t===e?null:e)};return(0,v.jsxs)(p,{children:[(0,v.jsx)(m,{style:{textIndent:`-0.15em`},children:`Works`}),(0,v.jsx)(g,{children:`Company`}),(0,v.jsx)(h,{}),je.map((t,r)=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(me,{isOpen:e===r,onClick:()=>n(r),clientName:t.clientName}),(0,v.jsx)(_e,{servicesItems:t.servicesItems,projectYear:t.projectYear,clientIndustry:t.clientIndustry,projectDetail:t.projectDetail,projectImages:t.projectImages,isOpen:e===r}),(0,v.jsx)(h,{})]},r))]})}var X=u.p`
  font-size: var(--text-xl);
  overflow-wrap: break-word;
  margin-bottom: 16px;

  span {
    font-family: "EB Garamond", serif;
    font-style: oblique;
    font-size: var(--text-xl);
    font-weight: 500;
    line-height: 1;
  }

  @media (width <= 768px) {
    font-size: var(--text-base);

    span {
      font-size: var(--text-base);
    }
  }
`,Ne=u.blockquote`
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
`;function Pe(){return(0,v.jsxs)(p,{children:[(0,v.jsx)(m,{children:`Manifesto`}),(0,v.jsxs)(X,{children:[(0,v.jsx)(`span`,{children:`To Seek for The Sun`}),`–A commitment to constantly exploring innovative and emerging sciences in marketing and branding. We focus on crafting strategies that seamlessly position brands within the hearts and minds of society, ensuring they resonate deeply with their audience. Each project we undertake is a journey—an exploration for the`,` `,(0,v.jsx)(`span`,{children:`“ideal truth”`}),` : we are inspired by the understanding that the branding and marketing science is ever-evolving and dynamic.`]}),(0,v.jsxs)(X,{children:[`Our mission transcends traditional branding; we aim to harmonize the rationality of the left brain with the creativity of the right brain, empowering businesses to navigate the complexities of modern markets. In today’s fast-paced, information-rich, and time-poor world, a brand’s value is determined by how effortlessly it enables customers to say`,` `,(0,v.jsx)(`span`,{children:`“yes.”`})]}),(0,v.jsx)(X,{children:`Branding, as we see it, is the art of connecting sound strategy with brilliant creativity. A strong brand pairs these elements to create symbols and messages that resonate with customers, far beyond product features, benefits, or price.`}),(0,v.jsxs)(X,{children:[`Our ultimate goal is to help brands become charismatic entities that inspire belief in their uniqueness. A charismatic brand is irreplaceable in the eyes of its audience, and we firmly believe that with the right approach, any brand—`,(0,v.jsx)(`span`,{children:`yours included`}),`—can achieve this distinction.`]}),(0,v.jsxs)(Ne,{children:[(0,v.jsxs)(`p`,{children:[`A brand is not what you say it is; `,(0,v.jsx)(`br`,{}),`It's what they say it is`]}),(0,v.jsx)(`p`,{id:`work`,children:`- Marty Neumeier`})]})]})}var Fe=u.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`,Ie=[{type:`Digital Campaign`,service:[`Social Media Handling`,`Digital Campaign Set-up`,`Digital Ads Handling`,`Digital Trend Analysis & Research`]},{type:`Brand Strategy`,service:[`Visual Identity Development`,`Branding Communication Set-up`,`Branding Implementation Set-up`]}];function Le(){return(0,v.jsxs)(p,{children:[(0,v.jsx)(m,{children:`Services`}),(0,v.jsx)(Fe,{children:Ie.map(e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(g,{children:e.type}),(0,v.jsx)(h,{}),e.service.map(t=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(_,{children:t}),(0,v.jsx)(h,{})]},`${e.type}-${t}`))]},e.type))})]})}var Z=u.a`
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
`,Re=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  padding-top: 8px;

  @media (width <= 768px) {
    gap: 12px 0;
  }
`;function ze(){return(0,v.jsxs)(p,{children:[(0,v.jsx)(m,{id:`contact`,children:`Get in touch`}),(0,v.jsxs)(Re,{children:[(0,v.jsxs)(Z,{href:`mailto:dzaki.zaidan@gmail.com`,target:`_blank`,children:[(0,v.jsx)(`p`,{children:`Email us`}),(0,v.jsx)(a,{})]}),(0,v.jsxs)(Z,{href:`https://wa.me/+6285159177206`,target:`_blank`,children:[(0,v.jsx)(`p`,{children:`Chat with us`}),(0,v.jsx)(i,{})]}),(0,v.jsxs)(Z,{href:`https://www.instagram.com/deskreview/`,target:`_blank`,children:[(0,v.jsx)(`p`,{children:`Follow us`}),(0,v.jsx)(r,{})]})]})]})}function Be(){return(0,d.useEffect)(()=>{document.title=`Deskreview | Brand and Marketing Strategy Studies`}),(0,v.jsxs)(f,{children:[(0,v.jsx)(`meta`,{name:`author`,content:`Deskreview`}),(0,v.jsx)(Pe,{}),(0,v.jsx)(Me,{}),(0,v.jsx)(Le,{}),(0,v.jsx)(ze,{})]})}function Ve(){return(0,v.jsx)(Be,{})}var He=u.div`
  display: flex;
  flex-direction: column;

  gap: 8px 0;

  @media (width <= 768px) {
    margin-top: 16px;
  }
`,Ue=u(c)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;

  p {
    width: fit-content;
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);
    text-align: left;
    line-height: 1.6;
  }

  .blog-date {
    color: rgba(var(--desk-gray-700));
    font-size: var(--text-base);
    white-space: nowrap;
    margin-right: 12px;
  }

  .blog-title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    .blog-title {
      font-weight: 500;
      font-style: italic;
    }
  }

  @media (width <= 768px) {
    padding: 0px 0;

    .blog-date {
      font-size: var(--text-base);
      margin-right: 8px;
    }
  }
`,Q=e({content:()=>Ge,frontmatter:()=>We}),We={title:`Fiction: Kau dan Aku jadi Jazz`,linkname:`kau-aku-jazz`,date:`10-05-2024`,tag:`Method Review`,author:`Dzaki Zaidan`},Ge=`kenapa hidup ini harus beraspek lain selain sonik musik dan romansa puan?

kenapa sih hidup kita harus _ngikutin_ hukum fisika dan harus _menuhin_ gizi untuk keperluan biologis organ tubuh? atau bahkan, kenapa sih jiwa kita perlu dipenjara dalam seonggok daging jelek yang kita sama-sama ingin keluar ini? Kenapa kau dan aku tak bisa langsung saja transenden menjadi sonik; kulit kita menyublim, kita pelan-pelan menguap, dan menyatu bersama arus frekuensi lagu jazz yang sekarang sedang kita putar dengan punggung telanjang yang menyentuh lantai kamarku yang dingin, dan asap kretek yang kita hembuskan bergantian.

kalau kita sudah menyatu bersama sonik musik, kan enak. kita bisa terlepas dari beban kerja kapitalisma jam 8 pagi itu, kita bisa sepanjang hari berlarian bersama lembaran partitur nada saxophone John Coltrane yang menjelma karpet ajaib – terbang meliuk berkejaran, kita bisa duduk-duduk santai sambil menunggangi awan nada suara Sarah Vaughan yang melayang lembut, atau bahkan sekalian saja kita bisa bercinta di dalam setiap track pertama dan terakhir album “Sketches of Spain” sambil terus mengingat bahwa hidup kita sudah abadi karena akan mengulang dari akhir ke awal lagi; on repeat. Dan aku bisa mengajakmu tidur berpelukan pasrah-terhanyut dalam frekuensi bunyi yang mencari reseptor indra pendengarannya, sambil berharap bahwa tidak pernah akan ada telinga yang mendengar suara cinta kita. Karena sebaiknya segala suara cinta itu aku tutup di dalam sebuah peredam yang bernama nyawa.`,Ke=e({content:()=>Je,frontmatter:()=>qe}),qe={title:`Media Review: Monster (2023) and Human Instinct`,linkname:`monster-and-human-instinct`,date:`01-02-2024`,tag:`Method Review`,author:`Dzaki Zaidan`},Je=`![](https://miro.medium.com/v2/resize:fit:1050/1*bMfostBlTBswS6WzPdSF-Q.jpeg)

<p style="text-align: center"><a href="https://mubi.com/en/id/films/monster-2023"><u>https://mubi.com/en/id/films/monster-2023</u></a></p>

As human behaviorist Dr. John Demartini stated about judgment, our minds have an urge to seek information as fast as possible by reflecting something to ourselves, as if something is blatantly more superior or inferior to us. “Monster” (2023), with its methodical POV-changing scenes, elegantly proves that avoiding judging behaviors is simply an attempt to live life and see things from others’ perspectives. But hold up there; we also need to feel the guilt of previously misunderstanding before eventually putting ourselves in their shoes. This guiltiness is crucial as the transitional point of judging-to-realizing cycles, making us aware of what matters in this movie.

It seems very natural for us to despise Mr. Hori (Eita Nagayama) in the first few minutes of the movie. We position ourselves to be more superior and “judge” Mr. Hori based on what Minato’s Mom (Sakura Ando) perceives, assuming that Mr. Hori is an unethical teacher caught walking with a “karaoke girl.” Morally, we and Minato’s Mom take a higher position to quickly judge the current condition. We judge and generalize Mr. Hori to be objectively bad and unethical. However, this perspective shifts when we switch to Mr. Hori’s POV and see life through his eyes; we feel a slight guilt for not knowing what’s on his side. This judging-realizing cycle repeats throughout the whole movie, leading to the central moral conflict of the story: the complex emotions of a couple of pre-teen boys.

It’s humbling and devastating to see how the judging method we usually employ as humans clearly fails to face the complex nature of human emotions, especially when it comes to understanding children as adults. The storytelling flow of the movie is like telling us that there’s an invisible upside-down pyramid of this conflict, and at the very bottom of it is a confused little boy dealing with his own emotions. He becomes so confused with himself that it confuses and messes with others’ perceptions about the people surrounding them — Minato’s Mom to Mr. Hori, Mr. Hori to Minato, and ultimately Minato to himself. Apparently, what Minato experiences emotionally not only confuses the character but also creates a sporadic buzz among its audience about who exactly the “monster” is and, specifically, whether it’s appropriate to even start a conversation about homosexuality in pre-teen age.

Lately, there have been online discourses in Indonesia about how Monster is basically a movie about everything other than homosexuality. Some argue that it is a movie about a family wrecking, and others argue that it is as simple as childhood friendship. When asked about the homosexuality theme, Hirokazu Kore-eda, the movie director, doesn’t want Monster to be viewed as a homosexual-romance genre simplicite. Rather, he wants to focus on the inner struggle that the children had in response to their surroundings. During the pre-production, Kore-eda even consulted with the LGBTQ community after reading the script written by Yuji Sakamoto. Seeing this discourse happening in the real-world situation, it becomes more surreal how the movie has successfully brought discussions and talks, at least by making the audience a little confused with themselves; just as confused as Minato did to himself. Seeing this, I am just very grateful that this coming-of-age drama film has finally reached a more mainstream audience.

Noticing the “monster” in the title, it’s worth noting that many audiences have cited the title to help them narrate the movie on how Yori Hoshikawa (Hinata Hiigari) was repeatedly called “pig brain.” This slur was initially conveyed by Yori’s alcoholic father before Yori innocently internalized the slur, believing that there was something terribly wrong with him caused by the pig brain in his head. Later, we find out that the slur was just Yori’s father’s desperate expression of how he found his son “abnormal” about his sexuality, not mentioning the violent marks on his hand. In many cases, Yori is also often seen being numb facing the various violence and bullying he receives every day. Seeing the emotional complexity happening to a kid has brought tears to my eyes, realizing that as adults, we are often judged for who we are and forced to adjust to normality.

This alienation of being ourselves apparently happens because of human brain judgment behavior, to rapidly respond by evaluating whether something is more superior or inferior. This behavior more accurately explains what is inside ourselves rather than what we are judging. We judge people based on our own reflection of our deficiencies and lack. We judge because we want to be superior, as a natural instinct to survive. In order to make ourselves more non-monster and more human, the sense of empathy is crucial. To empathize with others is to reject our primal instinct to instantly judge and degrade others, rather than taking some more time to be fully aware and at least trying to change our POV. Being patient and taking more time is, I think, the most humane thing possible. Other animals and living things rely on their spontaneous instinct to survive and think fast. When we take time and empathize, we have taken a step further towards humanity. Even if we can’t literally change our POV like the movie does, we can try to think and talk as our attempt to take more time.

Sources:

*   [https://timesofindia.indiatimes.com/readersblog/mycosmos/the-real-reason-we-judge-other-people-what-it-says-about-us-28804/](https://timesofindia.indiatimes.com/readersblog/mycosmos/the-real-reason-we-judge-other-people-what-it-says-about-us-28804/)
    
*   [https://www.reuters.com/lifestyle/japans-kore-eda-sexual-identity-not-focus-film-monster-2023-05-18/](https://www.reuters.com/lifestyle/japans-kore-eda-sexual-identity-not-focus-film-monster-2023-05-18/)
    
*   [https://deadline.com/2023/05/hirokazu-kore-eda-monster-lgbtq-themes-cannes-1235371202/](https://deadline.com/2023/05/hirokazu-kore-eda-monster-lgbtq-themes-cannes-1235371202/)`,Ye=e({content:()=>Ze,frontmatter:()=>Xe}),Xe={title:`Opinion: Aesthetica of (my) Human Experience at Kongsi 8`,linkname:`opinion-aesthetica`,date:`10-07-2024`,tag:`On-Review`,author:`Dzaki Zaidan`},Ze=`
![](https://miro.medium.com/v2/resize:fit:1050/1*pAzBw_LDYxRENlhXAMy0zg.jpeg)

<p style="text-align: center">Bottlesmokers performed their plant-sourced synth set at Irama Sunyi by Kongsi 8.</p>

Have you ever had a sudden, almost lightning-bolt-like existential crisis? Moments when you stand still on both of your feet, realizing that every muscle in your body is literally pulled and released by the order of your brain, and then realizing what a brain even is and what consciousness even is? Layer upon layer of that realization until it makes you nauseous (in the Sartrean sense) and dizzy from your own condition.

I was at a far-left cafe/communal space called Kongsi 8 in East Jakarta, wearing Silent Disco shiny green headphones and listening to weird “bio-sonic” synth music produced by plant electrical waves transmitted by sophisticated wires and machines when it happened. As quirky and unreal as it sounds, I felt like I was experiencing an absolute “human experience” in the most concrete way possible. Choreographed by the previously meditated affirmation of total human expression, I found myself dancing and jumping in a small sweaty dark room with ten other people. I gazed around the room and witnessed at least three people in a transcendental arm-swaying dance, two people standing still with their eyes closed, a mother and daughter dancing and laughing joyfully while holding hands, and three more dancing in more socially acceptable club-ready moves. Nobody was under the influence of substances (as written and announced in the house rules), but in many senses, it seemed too “liberalized” and too expressive for the mundane everyday Muslim-populated country norm I witnessed every day. At the end of my gaze, I already felt like ‘this is the exact photographic memory I’ll remember as my “human experience” milliseconds before I die.’ It’s hard to keep this writing objective when what I experienced was as chilling as what I just said.

Human culture, in general, is a very complicated topic. It is unfair to even start the notion of “which is better, STEM or Social Science?”. Anyone sensitive to social phenomena is equally blessed as anyone studying physics or AI. In a fully conscious mind: Aesthetica and the sensation of human beauty transcend beyond those boring academic debates. It is beyond good or bad, right or wrong, tasteful or disgusting, beautiful or ugly, stupid or smart, or any other dualism that has ever existed. Aesthetica itself was described etymologically as “stimulation of the five senses,” and primarily explained by Alexander Gottlieb as “study about good and bad ‘taste’”. Aesthetica defines the unexplainable sensory sensations a human can receive without any unnecessary rational process; you are supposed to just surrender to the beauty of it. “Surrender” is a beautiful word, isn’t it?

> “Surrender” is a beautiful word, isn’t it?

The aesthetic experience I had back at Kongsi 8 was highly triggered by the music, the method, the place, and the people I met there. It was hardly explainable and undeniably will never happen again in the exact same form. That’s the sort of beauty of Aesthetica, I suppose: every sensation is a complex stimulant produced by millions of almost-random stimulus variables miraculously happening at that very moment. It was purely a gift from God, which we have to embrace and celebrate as part of the daily chores of being a mortal human.

> Every sensation is a complex stimulant produced by millions of almost-random stimulus variables miraculously happening at that very moment
`,$=e=>{let[t,n,r]=e.split(`-`).map(Number);return new Date(r,n-1,t)},Qe=e=>{let t=$(e);return`${String(t.getDate()).padStart(2,`0`)}-${String(t.getMonth()+1).padStart(2,`0`)}-${t.getFullYear()}`},$e=e=>new Intl.DateTimeFormat(`en-US`,{month:`long`,day:`2-digit`,year:`numeric`}).format($(e)),et=e=>e.match(/\/([^/]+)\.md$/)?.[1]||``,tt=()=>Object.assign({"../contents/kau-aku-jazz.md":Q,"../contents/monster-and-human.md":Ke,"../contents/opinion-aesthetica.md":Ye}),nt=e=>Object.entries(e).sort(([,e],[,t])=>{let n=e.frontmatter.date?$(e.frontmatter.date):new Date(0);return(t.frontmatter.date?$(t.frontmatter.date):new Date(0)).getTime()-n.getTime()}),rt=e=>e.map(([e,t])=>{let n=et(e),{frontmatter:r}=t,i=r.title||`Untitled`,a=r.date?Qe(r.date):null;return{title:i,path:`/study/${n}`,date:a}});function it(){let e=rt(nt(tt()));return(0,d.useEffect)(()=>{document.title=`Study | Deskreview`}),(0,v.jsxs)(f,{children:[(0,v.jsx)(`meta`,{name:`author`,content:`Deskreview`}),(0,v.jsxs)(p,{children:[(0,v.jsx)(m,{children:`Study`}),e.length>0&&(0,v.jsxs)(He,{children:[(0,v.jsx)(h,{}),e.map(({title:e,path:t,date:n})=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Ue,{to:t,children:[n&&(0,v.jsx)(`p`,{className:`blog-date`,children:n}),(0,v.jsx)(`p`,{className:`blog-title`,children:e})]},t),(0,v.jsx)(h,{})]}))]})]})]})}function at(){return(0,v.jsx)(it,{})}var ot=u.nav`
  background-color: rgb(var(--desk-white));
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgb(var(--desk-gray-300));
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1000;

  @media (width <= 768px) {
    padding: 1rem;
  }
`,st=u.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`,ct=u.img`
  width: 120px;
  height: 22px;
  display: block;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,lt=u.menu`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  a {
    display: flex;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: var(--text-base);
    color: rgba(var(--desk-gray-700), 0.8);
    line-height: 1;
    text-decoration-line: none;
    margin-left: 0.75rem;
    letter-spacing: -0.025em;

    &:hover {
      color: rgba(var(--desk-black));
    }

    &:not(:nth-child(3)) {
      @media (width <= 768px) {
        display: none;
      }
    }
  }
`;function ut(){let e=ne(),t=s(),n=e=>{document.getElementById(e)?.scrollIntoView({behavior:`smooth`})},r=n=>{t.pathname===n?window.scrollTo({top:0,behavior:`smooth`}):e(n)};return(0,d.useEffect)(()=>{let e=t.state?.scrollTo;e&&n(e)},[t.state]),{handleClick:(i,a)=>{if(i.preventDefault(),a.startsWith(`#`)){let r=a.slice(1);t.pathname===`/`?n(r):e(`/`,{state:{scrollTo:r}})}else r(a)}}}var dt=`/svg/logo_full_navbar.svg`;function ft(){let{handleClick:e}=ut();return(0,v.jsx)(ot,{children:(0,v.jsxs)(st,{children:[(0,v.jsx)(ct,{src:dt,alt:`Navbar_Logo`,width:`120`,height:`22`,"aria-label":`Home`,onClick:t=>e(t,`/`)}),(0,v.jsx)(lt,{children:[{href:`#work`,label:`Work`},{href:`/`,label:`Home`},{href:`/study`,label:`Study`},{href:`#contact`,label:`Contact`}].map(t=>(0,v.jsx)(c,{to:t.href,onClick:n=>e(n,t.href),children:t.label},t.href))})]})})}function pt(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`meta`,{name:`author`,content:`Deskreview`}),(0,v.jsx)(`title`,{children:`Not Found | Deskreview`}),(0,v.jsx)(mt,{children:(0,v.jsx)(ft,{})}),(0,v.jsxs)(ht,{children:[(0,v.jsx)(`p`,{children:`404`}),(0,v.jsx)(`p`,{children:`Not Found`})]})]})}var mt=u.div`
  nav {
    position: fixed;
  }
`,ht=u.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    font-family: "DM Sans", sans-serif;
    font-weight: 300;
    letter-spacing: -0.025em;
    font-size: 4rem;
    line-height: 1;

    &:first-of-type {
      font-weight: 400;
      font-size: 5rem;
      margin-right: 30px;
    }
  }

  @media (width <= 768px) {
    flex-direction: column;
    p {
      font-size: 2rem;

      &:first-of-type {
        margin-right: 0;
        line-height: 1;
        font-size: 5rem;
      }
    }
  }
`,gt=u.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 48px auto;

  p {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-base);
    color: rgba(var(--desk-gray-700));
    text-align: center;
    line-height: 1;
  }

  @media (width <= 768px) {
    margin: 32px auto;

    p {
      font-size: var(--text-sm);
    }
  }
`;function _t(){return(0,v.jsx)(gt,{children:(0,v.jsxs)(`p`,{children:[`© 2025, Deskreview - `,new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`})]})})}function vt(){return Object.entries(Object.assign({"../contents/kau-aku-jazz.md":Q,"../contents/monster-and-human.md":Ke,"../contents/opinion-aesthetica.md":Ye})).map(([e,t])=>{let n=e.match(/\/([^/]+)\.md$/)?.[1]||``,{frontmatter:r,content:i}=t;return{path:n,frontmatter:r,content:i}})}var yt=(0,d.lazy)(()=>re(()=>import(`./BlogPost-CCHoVEPX.js`),__vite__mapDeps([0,1,2,3,4])));function bt(){return(0,v.jsx)(v.Fragment,{children:vt().map(({path:e,frontmatter:t,content:n})=>(0,v.jsx)(l,{path:e,element:(0,v.jsx)(yt,{frontmatter:t,children:(0,v.jsx)(se,{remarkPlugins:[ce],rehypePlugins:[le],children:n})})},e))})}function xt(){let e=bt(),t=s(),n=t.pathname!==`/`&&!t.pathname.startsWith(`/study`);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(fe,{}),!n&&(0,v.jsx)(ft,{}),(0,v.jsxs)(te,{children:[(0,v.jsx)(l,{path:`/`,element:(0,v.jsx)(Ve,{})}),(0,v.jsxs)(l,{path:`/study`,children:[(0,v.jsx)(l,{index:!0,element:(0,v.jsx)(at,{})}),e]}),(0,v.jsx)(l,{path:`*`,element:(0,v.jsx)(pt,{})})]}),!n&&(0,v.jsx)(_t,{})]})}(0,ue.createRoot)(document.getElementById(`root`)).render((0,v.jsx)(d.StrictMode,{children:(0,v.jsxs)(ie,{children:[(0,v.jsx)(de,{}),(0,v.jsx)(xt,{})]})}));export{f as n,p as r,$e as t};