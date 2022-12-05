export default function TodoList({todos,handleToggle,handleDelete}) {
  return (
    <div>
      {
        todos.map((todo)=>
        <div key={todo.id}>
        {todo.title}-{todo.status ?'completed':'not completd'}
        <button onClick={()=>handleToggle(todo.id)}>Toggle</button>
        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
        </div>)
      }
    </div>
  )
}
