import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const RecordRow = ({
  record: { id,productId, name, price, quantity, cost },
  index,
  deleteRecord,
  updateRecord
}) => {
  const delBtnHandler = () => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
      deleteRecord(id);
      toast.success("successfully deleted")
      }
    });
  };
  const addQuantityBtnHandler = () => {
    updateRecord(productId,1)
  }
  const subQuantityBtnHandler = () => {
   quantity > 1 && updateRecord(productId,-1)
  }
  return (
    <tr className=" text-xs lg:text-base font-semibold text-neutral-800 hover:bg-[#dde7c7] group border-b border-b-neutral-800 select-none">
      <td className="px-1 py-1.5  lg:px-3 lg:py-2 text-center">{index + 1}</td>
      <td className="px-1 py-1.5  lg:px-3 lg:py-2 text-start">{name}</td>
      <td className="px-1 py-1.5  lg:px-3 lg:py-2 text-end">{price} $</td>
      <td className="px-1 py-1.5  lg:px-3 lg:py-2  lg:text-end flex justify-center lg:justify-end items-center ">
        <button onClick={subQuantityBtnHandler} className="p-0.5 lg:p-1 bg-neutral-300 border border-neutral-400 rounded-full active:scale-75 duration-300 -translate-x-8 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="size-2 lg:size-3 pointer-events-none "
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <span className=" w-1/4 text-center">{quantity}</span>
        <button  onClick={addQuantityBtnHandler} className="p-0.5 lg:p-1 bg-neutral-300 border border-neutral-400 rounded-full  active:scale-75 duration-300 translate-x-8 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="size-2 lg:size-3 pointer-events-none "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </td>
      <td className="px-1 py-1.5  lg:px-3 lg:py-2 text-end">{cost} $</td>
      <td className=" text-center">
        <button
          onClick={delBtnHandler}
          className=" p-0.5 lg:p-1 lg:border lg:border-neutral-900 hover:bg-neutral-200   duration-300 translate-x-8 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="size-[10px] lg:size-4 text-neutral-800 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default RecordRow;
