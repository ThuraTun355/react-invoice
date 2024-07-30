import React from 'react'

const EmptyRow = () => {
  return (
    <tr className=" text-xs lg:text-base font-semibold text-neutral-800 ">
          <td colSpan={6} className="px-1 py-1.5 lg:px-3 lg:py-2 text-center ">
            There is no records...
          </td>
        </tr>
  )
}

export default EmptyRow