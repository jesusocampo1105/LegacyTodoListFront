import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  

  const inputRef = useRef(null);
  
  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

   return (
    <div>
      <form>
          <input type="text" placeholder="Agrega una Flor"/>
          <button type='submit'>Agregar</button>
      </form>
      <div>
        <div>
          <p>Esta es la flor 1</p>
          <button>Actualizar</button>
          <button>Borrar</button>
        </div>
      </div>
    </div>

  );

    {/*<form onSubmit={e => addItem(e)} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Actualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Escribe algo para hacer ...'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button type='submit' onClick={e => addItem(e)} className='todo-button'>
            Añadir
          </button>
        </>
      )}
    </form>
      */}
}

export default Form;