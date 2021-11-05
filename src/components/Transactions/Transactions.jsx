import React, { useState } from "react";
import {
  CustomerCard,
  CustomerTotalCard,
  TransactionsContainer,
  TransactionsTable,
} from "./TransactionsElements";
import { customerSampleData } from "../../assets/SampleData";
import { Fab } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { amountFormatter } from "../../util/amountFormatter";

function fetchCustomerData(customerName) {
  return customerSampleData.find((e) => e.name === customerName);
}

const phoneFabStyle = {
  position: "absolute",
  bottom: 10,
  right: 10,
};

const backFabStyle = {
  position: "absolute",
  top: 10,
  left: 10,
  fontSize: "1.5rem",
};

const Transactions = (props) => {
  const customerName = props.match.params.customerName.replace("_", " ");

  const [customerData, setCustomerData] = useState(
    fetchCustomerData(customerName)
  );

  return (
    <>
      <TransactionsContainer>
        <CustomerCard>
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

        <CustomerTotalCard>
          <h2>You will get</h2>
          <h1>₹ {amountFormatter(customerData.amount)}</h1>
        </CustomerTotalCard>

        <TransactionsTable></TransactionsTable>

        <a href="/home">
          <Fab sx={backFabStyle} color="secondary" aria-label="add">
            <IoMdArrowRoundBack />
          </Fab>
        </a>
        
        <a href={`tel:${customerData.phoneNumber}`}>
          <Fab sx={phoneFabStyle} color="primary" aria-label="add">
            <FaPhoneAlt />
          </Fab>
        </a>
      </TransactionsContainer>
    </>
  );
};

export default Transactions;
