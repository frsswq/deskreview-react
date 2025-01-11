import{p as t}from"./react-markdown-CR5Xb4Lj.js";import{f as m,M as h,S as p,N as d,F as c}from"./main-B9xdGSKE.js";import{r as g}from"./vendor-CvfCuUZz.js";import{d as s}from"./styled-components-BOF5XIQs.js";import"./@radix-ui/react-icons-T6wVLuVb.js";import"./date-fns-B4QYC8g5.js";import"./remark-gfm-DhOrmXei.js";function u({frontmatter:n,children:i}){const{title:o,date:a,tag:r,author:l,description:f}=n,x=a?m(a):null;return g.useEffect(()=>{document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(e=>{(e.textContent&&e.textContent.startsWith("W")||e.textContent&&e.textContent.startsWith("T"))&&e.classList.add("indent-fix")})},[i]),t.jsx(h,{children:t.jsxs(p,{children:[t.jsxs(j,{children:[o&&t.jsx("h1",{children:o}),f&&t.jsx("p",{className:"desc",children:f}),t.jsxs(z,{children:[r&&t.jsx("p",{className:"tag",children:r}),l&&t.jsx("p",{className:"capitalize author",children:l}),x&&t.jsx("p",{className:"date",children:x})]})]}),t.jsx(b,{className:"prose",children:i})]})})}const j=s.article`
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
`,z=s.div`
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
`,b=s.article`
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
      font-size: var(--text-base);
    }

    h1 {
      font-size: 30px;
    }
  }
`;function D({frontmatter:n,children:i}){return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),t.jsx(u,{frontmatter:n,children:i}),t.jsx(c,{})]})}export{D as default};
