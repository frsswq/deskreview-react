import{G as t}from"./react-markdown-CdbJyoHg.js";import{f,M as h,S as x,a as p}from"./main-Bq1MqGA3.js";import{d}from"./styled-components-BOF5XIQs.js";import{r as l}from"./vendor-CvfCuUZz.js";import"./@radix-ui/react-icons-T6wVLuVb.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-RXI-vKoo.js";import"./rehype-raw-B3D9AqIt.js";const u=d.article`
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
`,b=d.div`
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
    text-transform: capitalize;
    font-weight: 500;
  }

  .date {
  }

  @media (width <= 768px) {
  }
`,y=d.article`
  margin-top: 2rem;
  min-width: 100%;

  * {
    margin: 16px auto;
  }

  p:not(:has(img)),
  li {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.5;
    color: black;
  }

  a {
    text-decoration: underline;
    font-size: var(--text-lg);
  }

  hr {
    margin: 40px 0;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }

  ul,
  ol {
    padding-inline-start: 20px;
  }

  ul > li,
  ol > li {
    padding-inline-start: 8px;
  }

  ul > li::marker {
    color: rgb(var(--desk-gray-700));
  }

  pre {
    font-size: var(--text-sm);
    color: black;
    background-color: rgba(var(--desk-gray-300));
    padding: 24px;
    margin: 32px auto;
    border-radius: 8px;
    overflow-x: auto;

    code {
      font-family: "JetBrains Mono", sans-serif;
    }

    /* scrollbar */
    &::-webkit-scrollbar {
      width: 1vw;
      height: 1vh;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(var(--desk-gray-300));
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(var(--desk-gray-500), 0.8);
      border-radius: 1em;

      &:hover {
        background-color: rgba(var(--desk-gray-500), 1);
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "DM Sans", serif;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0em;
    margin-top: 40px;
    margin-bottom: 8px;
    letter-spacing: -0.025em;
  }

  h1 + *,
  h2 + *,
  h3 + * {
    margin-top: 0;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 35px;
  }

  blockquote {
    quotes: none;
    font-style: italic;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 40px auto;
    cursor: zoom-in;
  }

  table {
    font-family: "DM Sans", sans-serif;
  }

  // Conditional

  .text-center {
    font-family: "DM Sans", sans-serif;
    text-align: center;
    font-size: var(--text-sm);
    color: rgba(var(--desk-gray-700), 0.8);
    margin-top: -20px;
    margin-bottom: 40px;

    a {
      font-size: var(--text-sm);
      color: rgba(var(--desk-gray-700), 0.8);

      &:hover {
        color: rgba(var(--desk-gray-700), 1);
      }
    }

    & + * {
      margin-top: 0px;
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
`,k=d.div`
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
`,v=r=>{const[i,n]=l.useState(null),e=l.useCallback(()=>{n(null)},[]);return l.useEffect(()=>{if(!r.current)return;const a=c=>{const s=c.target;s.tagName.toLowerCase()==="img"&&n(s.src)},o=r.current;return o.addEventListener("click",a),()=>{o.removeEventListener("click",a)}},[r]),{selectedImage:i,closeModal:e}},w=r=>{l.useEffect(()=>{if(!r.current)return;document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(e=>{var a,o;((a=e.textContent)!=null&&a.startsWith("W")||(o=e.textContent)!=null&&o.startsWith("T"))&&e.classList.add("indent-fix")}),document.querySelectorAll("p").forEach(e=>{e.style.textAlign==="center"&&e.classList.add("text-center")})},[r])};function z({frontmatter:r,children:i}){const{title:n,date:e,tag:a,author:o}=r,c=e?f(e):null,s=l.useRef(null),{selectedImage:m,closeModal:g}=v(s);return w(s),t.jsxs(h,{children:[t.jsxs(x,{children:[t.jsxs(u,{children:[n&&t.jsx("h1",{children:n}),t.jsxs(b,{children:[a&&t.jsx("p",{className:"tag",children:a}),o&&t.jsx("p",{className:"author",children:o}),c&&t.jsx("p",{className:"date",children:c})]})]}),t.jsx(y,{ref:s,children:i})]}),m&&t.jsx(k,{onClick:g,children:t.jsx("img",{src:m,alt:"Full sized image"})})]})}function I({frontmatter:r,children:i}){return t.jsx(p,{children:t.jsx(z,{frontmatter:r,children:i})})}export{I as default};
