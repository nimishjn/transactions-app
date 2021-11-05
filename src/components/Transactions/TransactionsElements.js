import styled from "styled-components";

export const TransactionsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(223, 223, 223);
  padding: 10px;
`;

export const CustomerCard = styled.div`
  display: flex;
  align-items: center;

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
    color: gray;
  }

  a {
    text-decoration: none;
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
`;

export const TransactionsTable = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100px;
`;
