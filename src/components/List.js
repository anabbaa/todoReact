import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const List = (props) => {
  
  const [userInput, setUserInput] = useState("");
  function changeHandle(e) {
    
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    // prevState holds on the value of state before any update on the state
    //console.log(uuidv4());
    if (userInput.length) {//input.length inorder to dont have array for emty input when its 0 its false
  props.setList((prevState)=>
  [...prevState,{id: uuidv4(), title: userInput.trim(),  done: false
  

  },]);

        //another way to add id is to userinput.length but its not perfect delet and add it will add number 
        //2 twtimes and we will not deletid it transform for another place
    
      setUserInput("");
    }
  }
  return (
    <form onSubmit={submitHandle}>
      <input className="text" type="text" placeholder="write here your list" value={userInput} onChange={changeHandle} />
      <input className="add" type="submit" value="Add" />
    </form>
  );
};

export default List;
