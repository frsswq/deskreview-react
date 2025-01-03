import styled from "styled-components";

interface WorkItemDetailProps {
  isClicked: boolean;
}

export const WorkItemDetailStyled = styled.div<WorkItemDetailProps>`
  display: ${(props) => (props.isClicked ? "grid" : "none")};
  grid-template-columns: 1fr 2fr;
  font-size: var(--text-xl);
  font-weight: 300;
  margin-top: 16px;

  & > * {
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 24px;
    }
  }

  & > ul > li {
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  li {
    list-style-type: none;
  }
`;
