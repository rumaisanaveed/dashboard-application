import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 border-none rounded-3xl bg-white">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="empcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        className="dark:bg-secondary-dark-bg"
      >
        <ColumnsDirective className="dark:bg-secondary-dark-bg">
          {employeesGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
              className="dark:bg-secondary-dark-bg"
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
