import styled from "styled-components";

export const ContactButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(var(--desk-gray-300), 0.5);
  color: rgba(var(--text-black));
  text-decoration: none;
  width: 100%;
  padding: 24px 24px;
  border: 1px solid rgba(var(--desk-gray-300));
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border: 1px solid rgba(var(--desk-gray-500), 0.5);

    p {
      color: rgba(var(--desk-black));
    }

    svg {
      color: rgba(var(--desk-gray-700), 0.5);
    }
  }

  p {
    color: rgba(var(--desk-gray-700));
    font-family: "DM Sans", sans-serif;
    font-size: var(--text-lg);
    font-weight: 400;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.025em;
  }

  svg {
    scale: 2;
    color: rgba(var(--desk-gray-500));
    transform: translate(-25%, 0);
  }

  @media (width <= 768px) {
    padding: 16px 16px;

    p {
      font-size: var(--text-sm);
    }

    svg {
      scale: 1.5;
      transform: translate(-25%, 0);
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  padding-top: 8px;

  @media (width <= 768px) {
    gap: 12px 0;
  }
`;
