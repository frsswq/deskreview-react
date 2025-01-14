import styled from "styled-components";

export const BlogPostContent = styled.article`
  * {
    margin: 16px auto;
  }

  p:not(:has(img)),
  li {
    font-family: "EB Garamond", sans-serif;
    font-size: var(--text-xl);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.6;
    color: black;
    word-break: normal;
    word-wrap: break-word;
  }

  p:has(img) {
    height: min-content;
    margin: 0 auto;
  }

  & > *:first-child {
    margin-top: 0;

    img {
      margin-top: 0;
    }
  }

  a {
    text-decoration: underline;
    font-size: var(--text-xl);
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
    margin: 30px auto;
    border-radius: 8px;
    overflow-x: auto;

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

  code {
    font-size: var(--text-sm);
    font-family: "JetBrains Mono", sans-serif;
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
    letter-spacing: 0em;
    margin-top: 40px;
    margin-bottom: 24px;
    letter-spacing: -0.025em;
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

  h4 {
    font-size: 32px;
  }

  h5 {
    font-size: 28px;
  }

  h6 {
    font-size: 24px;
  }

  blockquote {
    quotes: none;
    border-left: 4px solid rgba(var(--desk-gray-300));
    font-style: italic;
    margin: 30px auto;

    p {
      font-size: var(--text-2xl);
      margin-left: 16px;
      line-height: 2;
    }
  }

  table {
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-base);
    width: 100%;
    margin: 30px 0;
    border-collapse: collapse;
  }

  td,
  th {
    border-top: 1px solid rgba(var(--desk-gray-500));
    border-bottom: 1px solid rgba(var(--desk-gray-500));
    padding: 12px 0;
    text-align: left;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 40px auto;
    cursor: zoom-in;
  }

  strong {
    font-weight: 500;
  }

  // After margin fix

  h1 + *,
  h2 + *,
  h3 + * {
    margin-top: 0;
  }

  hr + * {
    margin-top: 0;
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
