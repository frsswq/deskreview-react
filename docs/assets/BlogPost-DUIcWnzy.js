import{p as t}from"./react-markdown-CR5Xb4Lj.js";import{f as p,M as f,S as x,N as c,F as h}from"./main-CdOf36Pe.js";import{d as a}from"./styled-components-BOF5XIQs.js";import"./vendor-CvfCuUZz.js";import"./@radix-ui/react-icons-T6wVLuVb.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-DhOrmXei.js";function d({frontmatter:e,children:i}){const{title:o,date:s,tag:n,author:r,description:l}=e,m=s?p(s):null;return t.jsx(f,{children:t.jsxs(x,{children:[t.jsxs(g,{children:[o&&t.jsx("h1",{children:o}),l&&t.jsx("p",{className:"desc",children:l}),t.jsxs(j,{children:[n&&t.jsx("p",{className:"tag",children:n}),r&&t.jsx("p",{className:"capitalize author",children:r}),m&&t.jsx("p",{className:"date",children:m})]})]}),t.jsx(u,{className:"prose",children:i})]})})}const g=a.article`
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

  .desc {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
  }

  @media (width <= 768px) {
    margin-top: 10px;
    gap: 16px 0;

    h1 {
      font-size: 2.25rem;
      line-height: 1;
    }

    .desc {
      font-size: var(--text-base);
    }
  }
`,j=a.div`
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
    .tag {
      margin-bottom: 4px;
    }
  }
`,u=a.article`
  margin-top: 2rem;
  min-width: 100%;

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

  @media (width <= 768px) {
    p,
    li {
      font-size: var(--text-base);
    }

    h1 {
      font-size: 30px;
    }
  }
`;function D({frontmatter:e,children:i}){return t.jsxs(t.Fragment,{children:[t.jsx(c,{}),t.jsx(d,{frontmatter:e,children:i}),t.jsx(h,{})]})}export{D as default};
