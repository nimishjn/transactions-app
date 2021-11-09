import React from "react";
import { amountFormatter } from "../../util/amountFormatter";
import { dateTimeFormatter } from "../../util/dateTimeFormatter";
import {
  TCard,
  TCardEntry,
  TCardGet,
  TCardGive,
  TTable,
  TTableTop,
} from "./TransactionsElements";

const TransactionsTable = ({ transactions }) => {
  return (
    <>
      <TTableTop>
        <p className="t-entries">ENTRIES</p>
        <p>YOU GAVE</p>
        <p>YOU GOT</p>
      </TTableTop>
      <TTable>
        {transactions.map((transaction, index) => (
          <TCard key={`transaction${index}`}>
            <TCardEntry>
              <p className="t-date-time">
                {dateTimeFormatter(transaction.date)}
              </p>
              <p className="t-balance">Bal. ₹ 1,90,234</p>
            </TCardEntry>
            <TCardGet>{transaction.amount > 0 && "₹ " + amountFormatter(transaction.amount)}</TCardGet>
            <TCardGive>{transaction.amount < 0 && "₹ " + amountFormatter(Math.abs(transaction.amount))}</TCardGive>
          </TCard>
        ))}
      </TTable>
    </>
  );
};

export default TransactionsTable;
