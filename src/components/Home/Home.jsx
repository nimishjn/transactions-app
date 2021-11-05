import React, { useState } from "react";
import "./home.css";
import {
  GiveGetCard,
  HomeContainer,
  TotalCard,
  ViewReport,
} from "./HomeElements";
import { AiFillCaretRight } from "react-icons/ai";
import CustomerTable from "./CustomerTable";
import AddCustomer from "./AddCustomer";
import { customerSampleData } from "../../assets/SampleData";
import { amountFormatter } from "../../util/amountFormatter";

const Home = () => {
  const [customerData, setCustomerData] = useState(customerSampleData);

  const calculateTotalGetAmount = () => {
    let amt = 0;
    for (let i = 0; i < customerData.length; i++) {
      if (customerData[i].amount > 0) {
        amt += customerData[i].amount;
      }
    }
    return amountFormatter(amt);
  };

  const calculateTotalGiveAmount = () => {
    let amt = 0;
    for (let i = 0; i < customerData.length; i++) {
      if (customerData[i].amount < 0) {
        amt += customerData[i].amount;
      }
    }
    return amountFormatter(Math.abs(amt));
  };

  return (
    <>
      <HomeContainer>
        <GiveGetCard>
          <TotalCard>
            <h1
              style={{
                color: "var(--give-color)",
              }}
            >
              ₹ {calculateTotalGiveAmount()}
            </h1>
            <p>You will give</p>
          </TotalCard>
          <TotalCard>
            <h1
              style={{
                color: "var(--get-color)",
              }}
            >
              ₹ {calculateTotalGetAmount()}
            </h1>
            <p>You will get</p>
          </TotalCard>
          <ViewReport>
            View Report <AiFillCaretRight />
          </ViewReport>
        </GiveGetCard>
        <CustomerTable customerData={customerData} />
      </HomeContainer>
      <AddCustomer
        customerData={customerData}
        setCustomerData={setCustomerData}
      />
    </>
  );
};

export default Home;
