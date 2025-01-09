import{p as t}from"./react-markdown-Cg8YTe_c.js";import{f as a,M as r,S as m,N as l,F as p}from"./main-DxTlQyRQ.js";import{d as x}from"./styled-components-BKmSLaRA.js";import"./vendor-D8cRFDWZ.js";import"./@radix-ui/react-icons-BULlyilc.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-BQxQwK4t.js";function f({frontmatter:o,children:i}){const{title:s,date:n}=o,e=n?a(n):null;return t.jsx(r,{children:t.jsx(m,{children:t.jsxs(h,{className:"prose",children:[s&&t.jsx("h1",{children:s}),e&&t.jsxs("p",{children:["Published on: ",e]}),i]})})})}const h=x.article`
  margin-top: 16px;

  p,
  li {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "EB Garamond", "DM Sans", sans-serif;
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

  @media (width <= 768px) {
    p,
    li {
      font-size: var(--text-base);
    }

    h1 {
      font-size: 30px;
    }
  }
`;function M({frontmatter:o,children:i}){return t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsx(f,{frontmatter:o,children:i}),t.jsx(p,{})]})}export{M as default};
