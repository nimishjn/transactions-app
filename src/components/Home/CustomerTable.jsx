import React, { useState } from "react";
import { CTable, TableTop } from "./HomeElements";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose, VscFilter, VscFilePdf } from "react-icons/vsc";
import CustomerRow from "./CustomerRow";
import FilterDialog from "./FilterDialog";

const CustomerTable = ({ customerData }) => {
  const [inputActive, setInputActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <CTable>
        <TableTop>
          <div className="customer-filter-box">
            {inputActive ? (
              <VscChromeClose
                onClick={() => {
                  setSearchValue("");
                  setInputActive(false);
                }}
                className="search-close-button"
              />
            ) : (
              <FiSearch className="search-button" />
            )}
            <input
              className="customer-search"
              type="text"
              placeholder="Search Customer"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                e.target.value === ""
                  ? setInputActive(false)
                  : setInputActive(true);
              }}
            />
          </div>
          <div className="customer-filter">
            <VscFilter />
          </div>
          <div className="customer-pdf">
            <VscFilePdf />
          </div>
        </TableTop>
        {customerData.map((e, i) => (
          <CustomerRow e={e} key={`customer${i}`} />
        ))}
      </CTable>
      <FilterDialog />
    </>
  );
};

export default CustomerTable;
