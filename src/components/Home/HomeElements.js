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

export const CTable = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TableTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem;
  border-bottom: 1px solid lightgray;

  .customer-filter-box {
    display: flex;
    flex-grow: 1;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid lightgray;
    padding: 5px;
    border-radius: 10px;
  }

  .search-button {
    font-size: 1.5rem;
    color: gray;
  }

  .search-close-button {
    font-size: 1.5rem;
    color: gray;
    font-weight: 100;
    cursor: pointer;
  }

  .customer-search {
    width: 100%;
    border: none;
    outline: none;
    font-size: 0.9rem;
  }

  .customer-filter,
  .customer-pdf {
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--primary);
    line-height: 0%;
  }
`;

export const CTableRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border-bottom: 1px solid var(--gray);
  padding: 0.7rem;

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
    color: gray;
  }

  .customer-profile {
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: blue;
    border-radius: 50%;
  }

  .customer-name {
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    min-width: 1rem;
  }

  .customer-amount-wrap {
    width: fit-content;
    justify-self: flex-end;
    text-align: end;
    min-width: fit-content;
  }
`;

export const AddCustomerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #a63651;
  color: white;
  font-size: 1.2rem;
  position: fixed;
  bottom: 10px;
  right: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;

  span {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;