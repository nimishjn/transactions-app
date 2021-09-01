import React from "react";
import { CTable, CTableRow } from "./HomeElements";

const CustomerTable = () => {
  return (
    <>
      <CTable>
        <CTableRow>
          <td width="2.5rem">
            <span className="customer-profile">NJ</span>
          </td>
          <td className="customer-name">
            <h2>Nimish Jain</h2>
            <p>4 weeks ago</p>
          </td>
          <td className="customer-amount-wrap">
            <h2
              style={{
                color: "var(--get-color)",
              }}
            >
              ₹ 10,00,000
            </h2>
            <p>You will get</p>
          </td>
        </CTableRow>
        <CTableRow>
          <td width="2.5rem">
            <span className="customer-profile">NJ</span>
          </td>
          <td className="customer-name">
            <h2>Nimish Jain</h2>
            <p>4 weeks ago</p>
          </td>
          <td className="customer-amount-wrap">
            <h2
              style={{
                color: "var(--get-color)",
              }}
            >
              ₹ 10,00,000
            </h2>
            <p>You will get</p>
          </td>
        </CTableRow>
      </CTable>
    </>
  );
};

export default CustomerTable;
