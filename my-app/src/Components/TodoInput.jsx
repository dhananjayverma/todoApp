import { useState } from "react"
 const TodoInput=({handleAddTodo})=>{
    const [text,setText]=useState('');
    const handleChange=(e)=>{
        setText(e.target.value);
    }
    const handleAdd=()=>{
        handleAddTodo(text)
        setText('')
    }
return (
    <div>
    <h1>Enter something here</h1>
      <input type="text" value={text}onChange={handleChange}/>
      {/* {text} */}
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}
export default TodoInput;