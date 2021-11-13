import React, { useState } from "react";
import {
  CustomerCard,
  CustomerTotalCard,
  NoTransactionsContainer,
  TransactionsContainer,
} from "./TransactionsElements";
import { customerSampleData } from "../../assets/SampleData";
import { IoMdArrowRoundBack } from "react-icons/io";
import { amountFormatter } from "../../util/amountFormatter";
import TransactionsTable from "./TransactionsTable";
import GiveGotButtons from "./GiveGotButtons";
import addTransactionSvg from "../../assets/images/add_transactions.svg";
import { ArrowRight } from "iconsax-react";

function fetchCustomerData(customerName) {
  // supposed to fetch from backend
  return customerSampleData.find((e) => e.name === customerName);
}

const Transactions = (props) => {
  const customerName = props.match.params.customerName.replace("_", " ");

  const [customerData, setCustomerData] = useState(
    fetchCustomerData(customerName)
  );

  if (customerData === undefined) {
    window.location.href = "/home";
  }

  return (
    <>
      <CustomerCard>
        <a href="/home" className="t-back-button">
          <IoMdArrowRoundBack />
        </a>
        <div height="3rem" className="customer-details">
          <span className="customer-profile">
            {/* Initials generator */}
            {(
              customerData.name.split(" ")[0][0] +
              (customerData.name.split(" ")[1]
                ? customerData.name.split(" ")[1][0]
                : "")
            ).toUpperCase()}
          </span>
          <div className="customer-name">
            <h2>{customerData.name}</h2>
            {customerData.phoneNumber && <p>{customerData.phoneNumber}</p>}
          </div>
        </div>
      </CustomerCard>
      {!customerData.transactions.length ? (
        <NoTransactionsContainer>
          <img src={addTransactionSvg} alt="Add transactions" />
          <h2>Add transactions</h2>
          <ArrowRight
            className="arrow-pointer"
            size="32"
            color="var(--primary)"
          />
          <GiveGotButtons />
        </NoTransactionsContainer>
      ) : (
        <TransactionsContainer>
          <CustomerTotalCard>
            <h3>
              {customerData.amount === 0
                ? "Settled up"
                : customerData.amount > 0
                ? "You will get"
                : "You will give"}
            </h3>
            <h2
              style={{
                color:
                  customerData.amount === 0
                    ? "black"
                    : customerData.amount > 0
                    ? "var(--get-color)"
                    : "var(--give-color)",
              }}
            >
              ₹ {amountFormatter(customerData.amount)}
            </h2>
          </CustomerTotalCard>

          <TransactionsTable transactions={customerData.transactions} />

          <GiveGotButtons />
        </TransactionsContainer>
      )}
      {/* <AddTransactionsCard>
        <button
          style={{
            backgroundColor: "var(--get-color)",
          }}
        >
          YOU GAVE ₹
        </button>
        <button
          style={{
            backgroundColor: "var(--give-color)",
          }}
        >
          YOU GOT ₹
        </button>
      </AddTransactionsCard> */}
    </>
  );
};

export default Transactions;
