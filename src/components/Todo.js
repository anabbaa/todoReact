const Todo = (props) => {
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
      {toDo.title}
      <button className="Icon"
        onClick={() => {
          console.log(toDo.id);
          props.remove(toDo.id);
        }}
      >
        Delete
      </button>
    
    </li>
     
  ));
  return <ul>{userTodos}</ul>;
};

export default Todo;