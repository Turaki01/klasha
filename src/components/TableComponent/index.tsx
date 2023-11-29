import React from "react";
import "./styles.scss";

interface TableComponentProps {
  children: React.ReactNode;
}

const TableComponent: React.FC<TableComponentProps> = ({ children }) => {
  return (
    <div>
      <table className="table w-full">{children}</table>
    </div>
  );
};

export default TableComponent;
