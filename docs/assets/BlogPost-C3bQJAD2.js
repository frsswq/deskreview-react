import{G as t}from"./react-markdown-CdbJyoHg.js";import{f as g,M as p,S as u,N as y,F as b}from"./main-BNJI9LSq.js";import{r as h}from"./vendor-CvfCuUZz.js";import{d as i}from"./styled-components-BOF5XIQs.js";import"./@radix-ui/react-icons-T6wVLuVb.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-RXI-vKoo.js";import"./rehype-raw-B3D9AqIt.js";function j({frontmatter:o,children:n}){const{title:r,date:s,tag:l,author:c}=o,m=s?g(s):null,[f,a]=h.useState(null);h.useEffect(()=>{document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(e=>{(e.textContent&&e.textContent.startsWith("W")||e.textContent&&e.textContent.startsWith("T"))&&e.classList.add("indent-fix")}),document.querySelectorAll("p").forEach(e=>{e.style.textAlign==="center"&&e.classList.add("text-center")});const d=document.querySelectorAll("img");return d.forEach(e=>{e.addEventListener("click",()=>{a(e.src)})}),()=>{d.forEach(e=>{e.removeEventListener("click",()=>{a(e.src)})})}},[n]);const x=()=>{a(null)};return t.jsxs(p,{children:[t.jsxs(u,{children:[t.jsxs(v,{children:[r&&t.jsx("h1",{children:r}),t.jsxs(z,{children:[l&&t.jsx("p",{className:"tag",children:l}),c&&t.jsx("p",{className:"capitalize author",children:c}),m&&t.jsx("p",{className:"date",children:m})]})]}),t.jsx(w,{className:"prose",children:n})]}),f&&t.jsx(E,{onClick:x,children:t.jsx("img",{src:f,alt:"Full sized image"})})]})}const v=i.article`
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
`,z=i.div`
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
`,w=i.article`
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
`,E=i.div`
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
`;function A({frontmatter:o,children:n}){return t.jsxs(t.Fragment,{children:[t.jsx(y,{}),t.jsx(j,{frontmatter:o,children:n}),t.jsx(b,{})]})}export{A as default};
