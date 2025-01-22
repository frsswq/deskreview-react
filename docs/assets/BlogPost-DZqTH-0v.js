import{G as e}from"./react-markdown-maCznKtX.js";import{f as p,M as f,S as h}from"./main-C3HvrP1X.js";import{d as c}from"./styled-components-CgetkSgC.js";import{r as d}from"./vendor-C-q9OyUs.js";import"./@radix-ui/react-icons-88m-rOiV.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-BYX8R0Us.js";import"./rehype-raw-CHXFhoZm.js";const u=c.article`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 32px;
  gap: 24px 0;

  h1 {
    font-family: "EB Garamond", sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 52px;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    line-height: 1.2;
  }

  @media (width <= 768px) {
    gap: 16px 0;
    margin-top: 8px;
    margin-bottom: 24px;

    h1 {
      font-size: 36px;
    }
  }
`,b=c.div`
  display: flex;

  flex-direction: column;

  p {
    font-size: var(--text-base);
  }

  .tag {
    color: rgb(var(--desk-gray-700));
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
    font-weight: 400;
  }

  @media (width <= 768px) {
    p {
      font-size: var(--text-lg);
    }
  }
`,k=c.article`
  // Text and paragraph

  p:not(:has(img)),
  li {
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.5;
    color: black;
    word-break: normal;
    word-wrap: break-word;
    margin: 16px auto;
  }

  li {
    margin: 8px auto;
  }

  p:has(img) {
    height: min-content;
    margin: 0 auto;
  }

  a {
    text-decoration: underline;
    text-decoration-color: rgba(var(--desk-gray-500));
    font-size: var(--text-xl);

    &:hover {
      text-decoration-color: rgba(var(--desk-gray-700));
    }
  }

  strong {
    font-weight: 600;
  }

  // Headings

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "EB Garamond", serif;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.025em;
    margin-top: 32px;
    margin-bottom: 16px;

    code {
      font-size: 24px;
    }
  }

  h1 {
    font-size: 52px;
  }

  h2 {
    font-size: 44px;
  }

  h3 {
    font-size: 36px;
  }

  h4 {
    font-size: 32px;
  }

  h5 {
    font-size: 28px;
  }

  h6 {
    font-size: 24px;
  }

  // Lists

  ul,
  ol {
    padding-inline-start: 20px;
  }

  ul > li,
  ol > li {
    padding-inline-start: 8px;
  }

  ul {
    list-style-type: none;
  }

  ol {
    list-style-type: decimal;
  }

  ul > li::marker {
    content: "–";
    color: rgb(var(--desk-gray-700));
  }

  // Code and preformatted text

  pre {
    font-size: var(--text-sm);
    color: black;
    background-color: rgba(var(--desk-gray-300));
    padding: 24px;
    margin: 24px auto;
    border-radius: 8px;
    overflow-x: auto;

    /* Scrollbar Styling */
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
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

  code {
    font-size: var(--text-sm);
    font-family: "JetBrains Mono", sans-serif;
  }

  // Blockquotes

  blockquote {
    quotes: none;
    border-left: 4px solid rgba(var(--desk-gray-300));
    font-style: normal;
    margin: 24px auto;

    p {
      font-size: var(--text-xl);
      margin-left: 16px;
      line-height: 1.6;
    }
  }

  // Tables

  table {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-base);
    width: 100%;
    margin: 24px 0;
    border-collapse: collapse;
  }

  td,
  th {
    border-bottom: 1px solid rgba(var(--desk-gray-500));
    padding: 12px 0;
    text-align: left;
  }

  th {
    border-bottom: 2px solid rgba(var(--desk-gray-700), 0.5);
    font-weight: 600;
  }

  // Images

  img {
    width: 100%;
    height: 100%;
    margin: 24px auto;
    cursor: zoom-in;
  }

  // Horizontal rule

  hr {
    margin: 32px 0;
  }

  // Responsive styles

  @media (width <= 768px) {
    li,
    ol {
      margin: 8px auto;

      p {
        margin: 8px auto;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 24px;
      margin-bottom: 16px;

      code {
        font-size: 16px;
      }
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 28px;
    }

    h4 {
      font-size: 26px;
    }

    h5 {
      font-size: 24px;
    }

    h6 {
      font-size: 22px;
    }

    table {
      font-size: var(--text-sm);
    }

    .text-center {
      width: 90%;
    }
  }

  // Margin fixes

  & > *:first-child {
    margin-top: 0;

    img {
      margin-top: 0;
    }
  }

  h1 + *,
  h2 + *,
  h3 + * {
    margin-top: 0;
  }

  hr + * {
    margin-top: 0;
  }

  // Conditional Classes
  .text-center {
    font-family: "DM Sans", sans-serif;
    text-align: center;
    font-size: var(--text-sm);
    color: rgba(var(--desk-gray-700), 0.8);
    margin: -16px auto 24px;
    width: 95%;

    a {
      font-size: var(--text-sm);
      color: rgba(var(--desk-gray-700), 0.8);

      &:hover {
        color: rgba(var(--desk-gray-700), 1);
      }

      u {
        text-decoration-color: rgba(var(--desk-gray-500), 0.8);

        &:hover {
          text-decoration-color: rgba(var(--desk-gray-700), 1);
        }
      }
    }

    & + * {
      margin-top: 0px;
    }
  }

  // Indentation fixes for headings

  h1.indent-fix-big {
    text-indent: -0.15em;
  }

  h2.indent-fix-big {
    text-indent: -0.1em;
  }

  h3.indent-fix-big {
    text-indent: -0.05em;
  }

  h1.indent-fix-small {
    text-indent: -0.075em;
  }

  h2.indent-fix-small {
    text-indent: -0.05em;
  }

  h3.indent-fix-small {
    text-indent: -0.025em;
  }
`,y=c.div`
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
`,v=o=>{const[n,t]=d.useState(null),l=d.useCallback(()=>{t(null)},[]);return d.useEffect(()=>{if(!o.current)return;const r=s=>{const i=s.target;i.tagName.toLowerCase()==="img"&&t(i.src)},a=o.current;return a.addEventListener("click",r),()=>{a.removeEventListener("click",r)}},[o]),{selectedImage:n,closeModal:l}},z=o=>{d.useEffect(()=>{if(!o.current)return;document.querySelectorAll("h1, h2, h3").forEach(t=>{var l,r,a,s,i;((l=t.textContent)!=null&&l.startsWith("T")||(r=t.textContent)!=null&&r.startsWith("V")||(a=t.textContent)!=null&&a.startsWith("W"))&&t.classList.add("indent-fix-big"),((s=t.textContent)!=null&&s.startsWith("Y")||(i=t.textContent)!=null&&i.startsWith("U"))&&t.classList.add("indent-fix-small")})},[o])},w=()=>{d.useEffect(()=>{document.querySelectorAll("p").forEach(n=>{n.style.textAlign==="center"&&n.classList.add("text-center")})})};function j({frontmatter:o,children:n}){const{title:t,date:l,tag:r,author:a}=o,s=l?p(l):null,i=d.useRef(null),{selectedImage:x,closeModal:g}=v(i);z(i),w();const m=r&&a&&s;return d.useEffect(()=>{document.title=`${t} | Deskreview`},[t]),e.jsxs(f,{children:[e.jsx("meta",{name:"author",content:a}),e.jsx("meta",{name:"keywords",content:r}),e.jsxs(h,{children:[e.jsxs(u,{children:[t&&e.jsx("h1",{children:t}),m&&e.jsxs(b,{children:[r&&e.jsx("p",{className:"tag",children:r}),a&&e.jsx("p",{className:"author",children:a}),s&&e.jsx("p",{className:"date",children:s})]})]}),e.jsx(k,{ref:i,children:n})]}),x&&e.jsx(y,{onClick:g,children:e.jsx("img",{src:x,alt:"Full sized image"})})]})}function L({frontmatter:o,children:n}){return e.jsx(j,{frontmatter:o,children:n})}export{L as default};
