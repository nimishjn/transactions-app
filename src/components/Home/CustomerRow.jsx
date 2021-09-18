import React from "react";
import { CTableRow } from "./HomeElements";

const CustomerRow = ({ e }) => {
  return (
    <CTableRow id={`customer${e}`}>
      <div width="2.5rem">
        <span className="customer-profile">NJ</span>
      </div>
      <div className="customer-name">
        <h2>Nimish Jain</h2>
        <p>4 weeks ago</p>
      </div>
      <div className="customer-amount-wrap">
        <h2
          style={{
            color: "var(--get-color)",
          }}
        >
          ₹ 10,00,000
        </h2>
        <p>You will get</p>
      </div>
    </CTableRow>
  );
};

export default CustomerRow;
