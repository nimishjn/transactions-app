import React, { useState } from "react";
import { CTable, TableTop } from "./HomeElements";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose, VscFilter, VscFilePdf } from "react-icons/vsc";
import CustomerRow from "./CustomerRow";

const CustomerTable = () => {
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
        {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((e) => (
          <CustomerRow e={e} />
        ))}
      </CTable>
    </>
  );
};

export default CustomerTable;
