import styled from "styled-components";

export const BlogPostContent = styled.article`
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
    font-family: "EB Garamond", serif;
    font-style: italic;
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
`;

export const BlogPostContentImageModal = styled.div`
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
`;