import React, { useContext } from "react";
import RecordGroup from "./RecordGroup";
import { GeneralContext } from "../context/GeneralContextProvider";

const RecordTable = () => {
  const {deleteRecord,updateRecord} = useContext(GeneralContext)
  return (
    <table >
      <thead className=" text-xs lg:text-base bg-neutral-800 text-neutral-50 ">
        <tr>
          <th className=" px-1 py-1.5 lg:px-3 lg:py-2 text-center">#</th>
          <th className="px-1 py-1.5 lg:px-3 lg:py-2 text-start">Product</th>
          <th className="px-1 py-1.5 lg:px-3 lg:py-2 text-end">Price</th>
          <th className="px-1 py-1.5 lg:px-3 lg:py-2 text-center lg:text-end">Quantity</th>
          <th className="px-1 py-1.5 text-end lg:px-3 lg:py-2">Cost</th>
          <th className=" px-1 py-1.5 "></th>
        </tr>
        </thead>
      <RecordGroup deleteRecord={deleteRecord} updateRecord={updateRecord}/>
    </table>
  );
};

export default RecordTable;
