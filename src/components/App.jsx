import React, { useState } from "react";
import InputArea from "./InputArea";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([]);

  //dos, agregamos el valor a el set de items,
  //revisamos si tiene valores anteriores, y los concatenamos
  function addValue(valor) {
    setItems((previousValue) => {
      return [...previousValue, valor];
    });
  }

  //funcion para borrar un item desde el hijo
  function borraItem(id) {
    //definimos un nuevo valor para los items, obtenemos los valores antiguos
    setItems((previousValue) => {
      //de los valores antiguos filtamos, recorriendo uno por uno
      return previousValue.filter((curretValue, index) => {
        //nos que sean != del id ejecutado, se guardan
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addValue={addValue} />
      <div>
        <ul>
          {items.map((bullet, index) => (
            <Item key={index} id={index} name={bullet} borraItem={borraItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
