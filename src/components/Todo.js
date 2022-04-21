import React  from "react";
const Todo = (props) => {

  
  
    // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updated todo object
    // otherwise just use old todo
    
    // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
    // props.setEditable(false);
    // update the todos state with the updated todo
    
  
  const userTodos = props.list.map((toDo, i) => (
  
    <li key={i} className="todo">
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
//to check or not
// call function from parent send values to parent
//here i pass to the parent id which users click on when the user click the function will be created
//or remove bd id
      />
      {/* {toDo.title} */}
      {/* {contextObject.store.updateditem.title} */}
      
    
      {toDo.id === props.updatedTodo.id? props.updatedTodo.title: toDo.title} 
      <button className="Icon"
        onClick={() => {
          console.log(toDo.id);
          props.remove(toDo.id);
        }}
      >
        Delete
      </button>
      <button className="Icon"
        onClick={()=>{
        props.edit(toDo)
        }}
      >
        Edit
      </button>
    
    </li>
     
  ));
  return <ul>{userTodos}</ul>;
};

export default Todo;