import React from "react";
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

const Home = () => {
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
              ₹ 10,000
            </h1>
            <p>You will give</p>
          </TotalCard>
          <TotalCard>
            <h1
              style={{
                color: "var(--get-color)",
              }}
            >
              ₹ 10,000
            </h1>
            <p>You will get</p>
          </TotalCard>
          <ViewReport>
            View Report <AiFillCaretRight />
          </ViewReport>
        </GiveGetCard>
        <CustomerTable />
      </HomeContainer>
      <AddCustomer />
    </>
  );
};

export default Home;
