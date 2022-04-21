import React, { useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Todo from "./components/Todo";
function App() {
  const [list, setList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState([]);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [editable , setEditable] = useState(false);


  //we create state here we update in list and manipulate in todo
  const remove = (itemToRemove) => {
    // itemToRemove has the id for that specific item
    const newArr = list.filter((item) => item.id !== itemToRemove);
    // send all items unless who has the same id with itemtoremov id user which click on
    setList(newArr);
  };
  const check = (itemToCheck) => {
    // itemToCheck has the id for that specific item
    setList((prevState) => {
      return prevState.filter((item) => {
        if (item.id === itemToCheck) item.done = !item.done;
        return item;
      });
    });
  };

    // function to handle when the "Edit" button is clicked

  
    const  edit = (todo)=> {
      console.log(todo);
      // set editing to true
      setEditable(true);
      // set the currentTodo to the todo item that was clicked
      setCurrentTodo({...todo})
    }
  console.log(currentTodo);
  

  return (
    <React.Fragment>
      <Header />
      
       {/* <CurrentTodo list={list}  setUpdatedTodo={setUpdatedTodo} updatedTodo={updatedTodo}editable={editable} setEditable={setEditable} currentTodo={currentTodo}  setCurrentTodo ={setCurrentTodo}/>: */}
        
        <List  editable={editable} setEditable={setEditable}    list={list} setList={setList} 
        updatedTodo={updatedTodo} setUpdatedTodo={setUpdatedTodo} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}  />
      

      
      
      <Todo edit={edit} editable={editable}  list={list}   remove={remove}check={check} updatedTodo={updatedTodo}  />
      <Footer />
      </React.Fragment>
  );
}

export default App;