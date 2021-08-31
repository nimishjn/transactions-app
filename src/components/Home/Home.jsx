import React from "react";
import "./home.css";
import { GiveGetCard, HomeContainer, TotalCard, ViewReport } from "./HomeElements";
import { AiFillCaretRight } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <GiveGetCard>
          <TotalCard>
            <h1 style={{
                color: "#33691e",
            }}>₹ 10,000</h1>
            <p>You will give</p>
          </TotalCard>
          <TotalCard>
            <h1 style={{
                color: "#b71c1c",
            }}>₹ 10,000</h1>
            <p>You will get</p>
          </TotalCard>
          <ViewReport>
            View Report <AiFillCaretRight />
          </ViewReport>
        </GiveGetCard>
      </HomeContainer>
    </>
  );
};

export default Home;
