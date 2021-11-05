import React from "react";
import { CTableRow } from "./HomeElements";
import { amountFormatter } from "../../util/amountFormatter";
import TimeAgo from "timeago-react";

const CustomerRow = ({ e, key }) => {
  return (
    <CTableRow id={key} key={key}>
      <div width="2.5rem">
        <span className="customer-profile">
          {/* Initials generator */}
          {e.name.split(" ")[0][0] +
            (e.name.split(" ")[1] && e.name.split(" ")[1][0])}
        </span>
      </div>
      <div className="customer-name">
        <h2>{e.name}</h2>
        {/* <p>{new Date(e.lastTransactionDate).toLocaleDateString()}</p> */}
        <p>
          <TimeAgo datetime={e.lastTransactionDate} locale="en" />
        </p>
      </div>
      <div className="customer-amount-wrap">
        <h2
          style={{
            color: e.amount >= 0 ? "var(--get-color)" : "var(--give-color)",
          }}
        >
          ₹ {amountFormatter(Math.abs(e.amount))}
        </h2>
        <p>You will {e.amount >= 0 ? "get" : "give"}</p>
      </div>
    </CTableRow>
  );
};

export default CustomerRow;
