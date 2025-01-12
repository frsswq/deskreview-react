import{G as e}from"./react-markdown-CdbJyoHg.js";import{f as d,M as h,S as x,a as g}from"./main-BEfqIl2S.js";import{d as s}from"./styled-components-BOF5XIQs.js";import{r as m}from"./vendor-CvfCuUZz.js";import"./@radix-ui/react-icons-T6wVLuVb.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-RXI-vKoo.js";import"./rehype-raw-B3D9AqIt.js";const p=s.article`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 24px 0;

  h1 {
    font-family: "EB Garamond", sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 3.125rem;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    line-height: 1.2;
  }

  @media (width <= 768px) {
    margin-top: 10px;

    h1 {
      font-size: 2.25rem;
      line-height: 1;
    }
  }
`,u=s.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--text-base);
  }

  .tag {
    font-family: "EB Garamond", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .author {
    font-weight: 500;
  }

  .date {
  }

  @media (width <= 768px) {
  }
`,y=s.article`
  margin-top: 2rem;
  min-width: 100%;

  p,
  li {
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.6;
    color: black;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "EB Garamond", serif;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  h1 {
    font-size: 50px;
    margin-bottom: 25px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  blockquote {
    quotes: none;
    font-style: italic;
  }

  img {
    cursor: zoom-in;
  }

  table {
    font-family: "DM Sans", sans-serif;
  }

  .text-center {
    font-family: "DM Sans", sans-serif;
    text-align: center;
    font-size: var(--text-sm);
    color: rgba(var(--desk-gray-700), 0.8);
    transform: translateY(-100%);
    margin-bottom: 0;

    a {
      color: rgba(var(--desk-gray-700), 0.8);

      &:hover {
        color: rgba(var(--desk-gray-700), 1);
      }
    }
  }

  h1.indent-fix,
  h2.indent-fix {
    text-indent: -0.15em;
  }

  h3.indent-fix,
  h4.indent-fix,
  h5.indent-fix,
  h6.indent-fix {
    text-indent: -0.1em;
  }

  @media (width <= 768px) {
    p,
    li {
      font-size: var(--text-xl);
    }

    h1 {
      font-size: 30px;
    }

    .text-center {
      transform: translateY(-50%);
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`,b=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--desk-black), 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    cursor: zoom-out;
    max-width: 90%;
    max-height: 90%;
  }
`,z=i=>{const[o,n]=m.useState(null);return m.useEffect(()=>{document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(t=>{(t.textContent&&t.textContent.startsWith("W")||t.textContent&&t.textContent.startsWith("T"))&&t.classList.add("indent-fix")}),document.querySelectorAll("p").forEach(t=>{t.style.textAlign==="center"&&t.classList.add("text-center")});const a=document.querySelectorAll("img");return a.forEach(t=>{t.addEventListener("click",()=>{n(t.src)})}),()=>{a.forEach(t=>{t.removeEventListener("click",()=>{n(t.src)})})}},[i]),{selectedImage:o,closeModal:()=>{n(null)}}};function j({frontmatter:i,children:o}){const{title:n,date:r,tag:l,author:c}=i,a=r?d(r):null,{selectedImage:t,closeModal:f}=z(o);return e.jsxs(h,{children:[e.jsxs(x,{children:[e.jsxs(p,{children:[n&&e.jsx("h1",{children:n}),e.jsxs(u,{children:[l&&e.jsx("p",{className:"tag",children:l}),c&&e.jsx("p",{className:"capitalize author",children:c}),a&&e.jsx("p",{className:"date",children:a})]})]}),e.jsx(y,{className:"prose",children:o})]}),t&&e.jsx(b,{onClick:f,children:e.jsx("img",{src:t,alt:"Full sized image"})})]})}function P({frontmatter:i,children:o}){return e.jsx(g,{children:e.jsx(j,{frontmatter:i,children:o})})}export{P as default};
