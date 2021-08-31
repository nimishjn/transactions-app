import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(223, 223, 223);
`;

export const GiveGetCard = styled.div`
  width: 90%;
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const TotalCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  &:first-child {
    border-right: 1px solid lightgray;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const ViewReport = styled.div`
  grid-column: 1 / -1;
  width: 95%;
  font-size: 0.9rem;
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: var(--primary);
  cursor: pointer;
`;
