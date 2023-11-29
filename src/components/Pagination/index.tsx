import React from "react";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { PaginationOnChange } from "interfaces/util-interface";
import "./styles.scss";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  handlePaginationChange: Function;
}

const Pagination: React.FC<PaginationProps> = ({
  handlePaginationChange,
  pageCount,
  currentPage = 1
}) => {
  return (
    <div className="pagination-container">
      <div className="flex">
        <div className="pagination-el">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<MdKeyboardArrowRight />}
            onPageChange={(e: PaginationOnChange) => handlePaginationChange(e)}
            marginPagesDisplayed={2}
            forcePage={currentPage >= 1 ? currentPage - 1 : 0}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={<MdKeyboardArrowLeft />}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
