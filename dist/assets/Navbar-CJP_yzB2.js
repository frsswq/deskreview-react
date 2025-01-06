import{d as i,j as a,N as t}from"./main-oa4INqr8.js";const e=i.nav`
  background-color: rgb(var(--desk-white));
  padding: 16px 16px;
  border-bottom: 1px solid rgb(var(--desk-gray-300));
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 1000;
`,o=i.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;

  @media (width <= 768px) {
    padding: 0px;
  }
`,r=i.img`
  width: 120px;
  height: auto;
  display: block;
`,n=i.menu`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  a {
    display: flex;
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-base);
    color: rgb(var(--desk-gray-700));
    line-height: 1;
    text-decoration-line: none;
    padding-left: 12px;
    letter-spacing: -0.025em;

    &:hover {
      color: rgb(var(--desk-black));
      font-weight: 500;
    }
  }
`;function d(){return a.jsx(e,{children:a.jsxs(o,{children:[a.jsx(t,{to:"/",children:a.jsx(r,{src:"svg/logo_full_navbar.svg",alt:"Navbar_Logo",width:"120",height:"30"})}),a.jsx(n,{children:a.jsx(t,{to:"/blog",children:"Blog"})})]})})}export{d as N};
