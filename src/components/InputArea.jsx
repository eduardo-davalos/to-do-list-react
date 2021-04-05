import React, { useState } from "react";

function InputArea(promps) {
  const [valor, setValor] = useState("");

  //Uno guardamos el valor del input
  function saveValue(event) {
    setValor(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={saveValue} type="text" value={valor} />
      <button
        onClick={() => {
          promps.addValue(valor);
          setValor("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
