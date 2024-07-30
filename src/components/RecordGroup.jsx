import React, { useContext } from 'react'
import EmptyRow from './EmptyRow'
import RecordRow from './RecordRow'
import { GeneralContext } from '../context/GeneralContextProvider'

const RecordGroup = ({deleteRecord,updateRecord}) => {
  const {records} = useContext(GeneralContext)

  return (
    <tbody>
        {records.length === 0 && <EmptyRow/> } 
        {records.map((record,index) => <RecordRow key={record.id} record={record} deleteRecord={deleteRecord} updateRecord={updateRecord} index={index}/> )}
        {records.length > 0 && <tr className=" text-xs lg:text-base font-semibold text-neutral-800  border-b border-b-neutral-800">
          <td colSpan={4} className="px-1 py-1.5  lg:px-3 lg:py-2 text-center">Total</td>
          <td className="px-1 py-1.5  lg:px-3 lg:py-2 text-end">{records.reduce((pv,cv) => pv + parseFloat(cv.cost),0).toFixed(2)} $</td>
          <td className=" ">
          </td>
        </tr>}
      </tbody>
  )
}

export default RecordGroup