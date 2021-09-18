import React from "react";
import { CTable, TableTop } from "./HomeElements";
import { FiSearch } from "react-icons/fi";
import { VscFilter, VscFilePdf } from "react-icons/vsc";
import CustomerRow from "./CustomerRow";

const CustomerTable = () => {
  return (
    <>
      <CTable>
        <TableTop>
          <div className="customer-filter-box">
            <FiSearch className="search-button" />
            <input className="customer-search" type="text" />
          </div>
          <div className="customer-filter">
            <VscFilter />
          </div>
          <div className="customer-pdf">
            <VscFilePdf />
          </div>
        </TableTop>
        {[1, 2, 3].map((e) => (
          <CustomerRow e={e} />
        ))}
      </CTable>
    </>
  );
};

export default CustomerTable;
