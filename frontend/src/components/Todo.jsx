import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
const Todo = (props) => {

  return (
    <>
      <div className='flex pb-1 px-2'>
        <button onClick={() =>{
          props.onSelect(props.id)
          }}
          ><CancelIcon className=' text-red-500'/></button>
        <li className='px-2'>{props.item} </li>
      </div>
     
    </>
  )
}

export default Todo
