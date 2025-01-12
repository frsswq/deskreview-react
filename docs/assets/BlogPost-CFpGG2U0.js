import{G as t}from"./react-markdown-CdbJyoHg.js";import{f as h,M as x,S as g,a as p}from"./main-D3pis6bM.js";import{d as m}from"./styled-components-BOF5XIQs.js";import{r as c}from"./vendor-CvfCuUZz.js";import"./@radix-ui/react-icons-T6wVLuVb.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-RXI-vKoo.js";import"./rehype-raw-B3D9AqIt.js";const u=m.article`
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
`,y=m.div`
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
`,b=m.article`
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
`,z=m.div`
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
`,j=n=>{const[a,e]=c.useState(null);return c.useEffect(()=>{if(!n.current)return;const o=i=>{const l=i.target;e(l.src)},r=n.current.querySelectorAll("img");return r.forEach(i=>{i.addEventListener("click",o)}),()=>{r.forEach(i=>{i.removeEventListener("click",o)})}},[n]),{selectedImage:a,closeModal:()=>{e(null)}}},v=()=>{c.useEffect(()=>{document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(e=>{var s,o;((s=e.textContent)!=null&&s.startsWith("W")||(o=e.textContent)!=null&&o.startsWith("T"))&&e.classList.add("indent-fix")}),document.querySelectorAll("p").forEach(e=>{e.style.textAlign==="center"&&e.classList.add("text-center")})},[])};function w({frontmatter:n,children:a}){const{title:e,date:s,tag:o,author:r}=n,i=s?h(s):null,l=c.useRef(null),{selectedImage:f,closeModal:d}=j(l);return v(),t.jsxs(x,{children:[t.jsxs(g,{children:[t.jsxs(u,{children:[e&&t.jsx("h1",{children:e}),t.jsxs(y,{children:[o&&t.jsx("p",{className:"tag",children:o}),r&&t.jsx("p",{className:"capitalize author",children:r}),i&&t.jsx("p",{className:"date",children:i})]})]}),t.jsx(b,{ref:l,className:"prose",children:a})]}),f&&t.jsx(z,{onClick:d,children:t.jsx("img",{src:f,alt:"Full sized image"})})]})}function q({frontmatter:n,children:a}){return t.jsx(p,{children:t.jsx(w,{frontmatter:n,children:a})})}export{q as default};
