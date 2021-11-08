import React, { useState } from "react";
import {
  AddTransactionsCard,
  CustomerCard,
  CustomerTotalCard,
  TransactionsContainer,
} from "./TransactionsElements";
import { customerSampleData } from "../../assets/SampleData";
import { Fab } from "@mui/material";
import { IoMdArrowRoundBack } from "react-icons/io";
import { amountFormatter } from "../../util/amountFormatter";
import TransactionsTable from "./TransactionsTable";

function fetchCustomerData(customerName) {
  return customerSampleData.find((e) => e.name === customerName);
}

const backFabStyle = {
  position: "relative",
  fontSize: "1.2rem",
  width: 40,
  height: 40,
};

const Transactions = (props) => {
  const customerName = props.match.params.customerName.replace("_", " ");

  const [customerData, setCustomerData] = useState(
    fetchCustomerData(customerName)
  );

  return (
    <>
      <CustomerCard>
        <a href="/home" className="t-back-button">
          <Fab sx={backFabStyle} color="secondary" aria-label="add">
            <IoMdArrowRoundBack />
          </Fab>
        </a>
        <div width="3rem">
          <span className="customer-profile">
            {/* Initials generator */}
            {(
              customerData.name.split(" ")[0][0] +
              (customerData.name.split(" ")[1]
                ? customerData.name.split(" ")[1][0]
                : "")
            ).toUpperCase()}
          </span>
        </div>
        <div className="customer-name">
          <h2>{customerData.name}</h2>
          {customerData.phoneNumber && <p>{customerData.phoneNumber}</p>}
        </div>
      </CustomerCard>
      <TransactionsContainer>
        <CustomerTotalCard>
          <h3>{customerData.amount > 0 ? "You will get" : "You will give"}</h3>
          <h2
            style={{
              color:
                customerData.amount > 0
                  ? "var(--get-color)"
                  : "var(--give-color)",
            }}
          >
            ₹ {amountFormatter(customerData.amount)}
          </h2>
        </CustomerTotalCard>

        <TransactionsTable />

      </TransactionsContainer>
      <AddTransactionsCard>
        <button style={{
          backgroundColor: "var(--get-color)",
        }}>YOU GAVE ₹</button>
        <button style={{
          backgroundColor: "var(--give-color)",
        }}>YOU GOT ₹</button>
      </AddTransactionsCard>
    </>
  );
};

export default Transactions;
