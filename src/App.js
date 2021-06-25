import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Todo from "./components/Todo";
function App() {
  const [list, setList] = useState([]);
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

  // React Fragments allow you to wrap multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.
  return (
    <React.Fragment>
      <Header />
      <List setList={setList} />
      <Todo list={list} remove={remove} check={check} />
      <Footer />
    </React.Fragment>
  );
}

export default App;