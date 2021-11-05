import React, { useState } from "react";
import { CTable, TableTop } from "./HomeElements";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose, VscFilePdf } from "react-icons/vsc";
import CustomerRow from "./CustomerRow";
import FilterDialog from "./FilterDialog";
import { FcEmptyFilter, FcFilledFilter } from "react-icons/fc";

const CustomerTable = ({ customerData }) => {
  const [inputActive, setInputActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterDialogOpen, setFilterDialogOpen] = React.useState(false);
  const [filterValue, setFilterValue] = useState("All");
  const [sortValue, setSortValue] = useState("Most Recent");

  const customerFilter = (name) => {
    if (name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
      return true;
  };

  const customerFilterByOption = (element) => {
    if (filterValue === "You will get") {
      return element.amount > 0 && true;
    } else if (filterValue === "You will give") {
      return element.amount < 0 && true;
    } else if (filterValue === "Settled") {
      return element.amount === 0 && true;
    } else {
      return true;
    }
  };

  const customerSortByOption = (element1, element2) => {
    if (sortValue === "Highest Amount") {
      return element2.amount - element1.amount;
    } else if (sortValue === "By Name (A-Z)") {
      let name1 = element1.name.toLowerCase();
      let name2 = element2.name.toLowerCase();

      if (name1 < name2) {
        return -1;
      }
      if (name1 > name2) {
        return 1;
      }
      return 0;
    } else if (sortValue === "Oldest") {
      let time1 = element1.lastTransactionDate;
      let time2 = element2.lastTransactionDate;

      if (time1 < time2) {
        return -1;
      }
      if (time1 > time2) {
        return 1;
      }
      return 0;
    } else if (sortValue === "Least Amount") {
      return Math.abs(element1.amount) - Math.abs(element2.amount);
    } else {
      return 0;
    }
  };

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
            {filterValue === "All" && sortValue === "Most Recent" ? (
              <FcEmptyFilter onClick={() => setFilterDialogOpen(true)} />
            ) : (
              <>
                <FcFilledFilter onClick={() => setFilterDialogOpen(true)} />
              </>
            )}
          </div>
          <div className="customer-pdf">
            <VscFilePdf />
          </div>
        </TableTop>
        {customerData
          .filter((e) => customerFilter(e.name))
          .filter((e) => customerFilterByOption(e))
          .sort((a, b) => customerSortByOption(a, b))
          .map((e) => (
            <CustomerRow e={e} />
          ))}
      </CTable>
      <FilterDialog
        filterDialogOpen={filterDialogOpen}
        setFilterDialogOpen={setFilterDialogOpen}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
    </>
  );
};

export default CustomerTable;
