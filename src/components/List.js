import { useState} from "react";
import { v4 as uuidv4 } from "uuid";
const List = (props) => {
  const [userInput, setUserInput] = useState("");
  
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    // prevState holds on the value of state before any update on the state
  
    if (userInput.length) {//input.length inorder to dont have array for emty input when its 0 its false
  props.setList((prevState)=>
  [...prevState,{id: uuidv4(), title: userInput.trim(),  done: false
  },]);
        //another way to add id is to userinput.length but its not perfect delet and add it will add number 
        //2 twtimes and we will not deletid it transform for another place    
      setUserInput("");
    }
  }
// this function to hold the state of edit button
function handleEditInputChange(e) {
  props.setUpdatedTodo({...props.currentTodo,title: e.target.value});

}
function handleUpdateTodo(id, updatedTodo){
  // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
  // if the id's match, use the second parameter to pass in the updated todo object
  // otherwise just use old todo
   const updateditem = props.list.map((toDo) => {
    return toDo.id === id ? updatedTodo : toDo.title;
  });
  props.setEditable(false);
  // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
  // setIsEditing(false);
  // update the todos state with the updated todo
}
  function handleEditFormSubmit(e) {
      e.preventDefault();
      handleUpdateTodo(props.updatedTodo.id ,props.updatedTodo)
      }
      

  return(
    <div>
      {props.editable? (
        <div>      
        <form className="formMain" onSubmit={handleEditFormSubmit}>
          {/* we've added an h2 element */}
          {/* also added a label for the input */}
          {/* notice that the value for the update input is set to the currentTodo state */}
          {/* also notice the handleEditInputChange is being used */}
          <input
          className="textedit"
            name="editTodo"
            type="text"
            placeholder="Edit"
            value={props.updatedTodo.title}
            onChange={handleEditInputChange}
          />
          {/* here we added an "update" button element - use the type="submit" on the button which will still submit the form when clicked using the handleEditFormSubmit function */}
          <input className="add" type="submit" value="Update"/>
          {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
          <input className="cancel" onClick={() => props.setEditable(false)} value="Cancel" />
        </form>
        </div>  
      ):
    (<form className="formMain" onSubmit={submitHandle}>
      <input className="text" type="text" placeholder="write here your list"
       value={userInput} onChange={changeHandle} />
      <input className="add" type="submit" value="Add"/>
    </form>)
}
    </div>
  );
};
export default List;