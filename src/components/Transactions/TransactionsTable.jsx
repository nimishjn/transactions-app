import React from "react";
import {
  TCard,
  TCardEntry,
  TCardGet,
  TCardGive,
  TTable,
  TTableTop,
} from "./TransactionsElements";

const TransactionsTable = () => {
  return (
    <>
      <TTableTop>
        <p className="t-entries">ENTRIES</p>
        <p>YOU GAVE</p>
        <p>YOU GOT</p>
      </TTableTop>
      {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((element) =>
      <TTable>
        <TCard>
          <TCardEntry>
            <p className="t-date-time">26 Jul 21 - 01:09 PM</p>
            <p className="t-balance">Bal. ₹ 1,90,234</p>
          </TCardEntry>
          <TCardGet>₹ 1,90,234</TCardGet>
          <TCardGive>₹ 1,90,234</TCardGive>
        </TCard>
      </TTable>
      )}
    </>
  );
};

export default TransactionsTable;
