import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Clock from 'react-digital-clock';

function App() {
  const [input, setInput] = useState("");
  const [toItem,setToItem] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const handleClick = () => {
    setToItem((prev) => [...prev,input]);
    setInput("");
  }
  const deleteItem = (id) => {
    setToItem ( (prev)=>{
      return prev.filter((element,index)=>{ 
        return index != id
      })
    } )
  }
  return (
    <>
      <h1 className='bg-red-400'>
        <Clock />
      </h1> 
      <div className='rounded-md bg-white shadow-lg text-black shadow-transparent shadow-slate-500 pb-5'>

        <div>
          <br/>
            <h1 className='bg-zinc-500 text-white font-bold text-2xl'>ToDo List</h1>
          <br/>
            <div className='px-2'>
              <input type='text' placeholder='Add a items' onChange={handleChange} value={input}className='text-center placeholder-zinc-400 border-b border-zinc-600'/>
              <button onClick={handleClick} className='bg-zinc-500 hover:bg-green-500 custom-hover-after rounded-full w-8 h-8 text-white font-extrabold'>+</button>
            </div>
          <br/>
          <ol>
            {toItem.map((item,index)=>{
              return <Todo item={item} key={index} id={index} onSelect = {deleteItem}/>
            })}

          </ol>
        </div>
      </div>
    </>
  )
}

export default App
