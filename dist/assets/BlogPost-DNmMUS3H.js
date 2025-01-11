import{p as t}from"./react-markdown-DL4AOBV-.js";import{f,M as p,S as c,N as x,F as h}from"./main-C-Ov9T7k.js";import{d as s}from"./styled-components-CgetkSgC.js";import"./vendor-C-q9OyUs.js";import"./@radix-ui/react-icons-88m-rOiV.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-ClnCoDhK.js";function d({frontmatter:e,children:a}){const{title:o,date:i,tag:n,author:r,description:l}=e,m=i?f(i):null;return t.jsx(p,{children:t.jsxs(c,{children:[t.jsxs(g,{children:[o&&t.jsx("h1",{children:o}),l&&t.jsx("p",{className:"desc",children:l}),t.jsxs(j,{children:[n&&t.jsx("p",{className:"tag",children:n}),r&&t.jsx("p",{className:"capitalize author",children:r}),m&&t.jsx("p",{className:"date",children:m})]})]}),t.jsx(u,{className:"prose",children:a})]})})}const g=s.article`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  gap: 1rem 0;

  h1 {
    font-family: "EB Garamond", sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 3rem;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    line-height: 1.2;
  }

  p {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
  }

  @media (width <= 768px) {
    margin-top: 0.625rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: var(--text-base);
    }
  }
`,j=s.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--text-base);
  }

  .tag {
    font-family: "EB Garamond", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .author {
    font-weight: 500;
  }

  .date {
  }
`,u=s.article`
  margin-top: 2rem;

  p,
  li {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
    color: black;
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
`;function D({frontmatter:e,children:a}){return t.jsxs(t.Fragment,{children:[t.jsx(x,{}),t.jsx(d,{frontmatter:e,children:a}),t.jsx(h,{})]})}export{D as default};
