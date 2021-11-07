import styled from "styled-components";

export const TransactionsContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(223, 223, 223);
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const CustomerCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: white;

  .t-back-button {
    position: absolute;
    left: 10px;
  }

  .customer-profile {
    text-align: center;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: blue;
    border-radius: 50%;
    font-size: 1.25rem;
    user-select: none;
    font-weight: 500;
  }

  .customer-name {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 0.8rem;
    color: lightgray;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 400px) {
    justify-content: flex-end;
  }
`;

export const CustomerTotalCard = styled.div`
  padding: 20px;
  margin: 10px;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;

  h3 {
    font-weight: 500;
  }

  h2 {
    font-weight: 500;
  }
`;

export const TTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100px;
  padding: 0 10px;
`;

export const TTableTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 100%;
  color: gray;
  font-size: 0.8rem;
  padding: 0 10px;
  justify-items: end;
  margin-bottom: 10px;

  .t-entries {
    justify-self: start;
  }
`;

export const TCard = styled.div`
  height: 80px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`;

export const TCardEntry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 5px;
  padding: 10px 15px;

  .t-date-time {
    font-size: 0.9rem;
    color: gray;
  }

  .t-balance {
    font-size: 0.8rem;
    color: gray;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: var(--get-color-bg);
  }
`;

export const TCardGet = styled.div`
  color: var(--get-color);
  background-color: var(--get-color-bg);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const TCardGive = styled.div`
  color: var(--give-color);
  background-color: var(--give-color-bg);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  font-size: 1.1rem;
  font-weight: 500;
`;
