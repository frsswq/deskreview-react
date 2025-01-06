import{j as e,d as t}from"./main-s3WgPMsc.js";import{N as i}from"./Navbar-BfVqFuhc.js";function f(){return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(i,{})}),e.jsxs(r,{children:[e.jsx("p",{children:"404"}),e.jsx("p",{children:"Not Found"})]})]})}const n=t.div`
  nav {
    position: fixed;
  }
`,r=t.main`
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
`;export{f as default};
