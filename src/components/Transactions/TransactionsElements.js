import styled from "styled-components";

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

export const TransactionsContainer = styled.div`
  height: calc(100vh - 120px);
  padding: 0 10px 10px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(223, 223, 223);
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const CustomerTotalCard = styled.div`
  padding: 20px;
  margin: 10px;
  gap: 20px;
  width: 95%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 15px -13px #000000;

  h3 {
    font-weight: 500;
  }

  h2 {
    font-weight: 500;
  }
`;

export const TTableTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 100%;
  color: gray;
  font-size: 0.8rem;
  padding: 0 10px;
  justify-items: end;
  margin-bottom: 3px;

  .t-entries {
    justify-self: start;
  }
`;

export const TTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100px;
  gap: 10px;
`;

export const TCard = styled.div`
  height: 80px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  box-shadow: 0px 5px 15px -13px #000000;
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

  @media screen and (max-width: 450px) {
    .t-date-time {
      font-size: 0.8rem;
    }

    .t-balance {
      font-size: 0.7rem;
    }
  }
`;

export const TCardGet = styled.div`
  color: var(--get-color);
  background-color: var(--get-color-bg);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  white-space: nowrap;

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const TCardGive = styled.div`
  color: var(--give-color);
  background-color: var(--give-color-bg);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  white-space: nowrap;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const AddTransactionsCard = styled.div`
  height: 60px;
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 20px;

  button {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 5px 15px -13px #000000;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    box-shadow: -1px 10px 12px -11px #000000;
  }
`;
