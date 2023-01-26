import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  const [input, setInput] = useState('');
  const [listFlowers, setListFlowers] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateInput, setUpdateInput] = useState('');


  //Add
  const addFlower = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/new/flower', { flower: input });
      setListFlowers(prev => [...prev, res.data]);
      console.log(res);
      setInput('');
    } catch (error) {
      console.log(error);
    }
  };

  //Select
  useEffect(() => {
    const getFlowerList = async () => {
      try {
        const res = await axios.get('/get/flowers');
        setListFlowers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFlowerList();
  }, []);

  //Delete
  const deleteFlower = async (id) => {
    try {
      const res = await axios.delete(`/new/flower/${id}`);
      const newListFlowers = listFlowers.filter(input => input._id !== id);
      setListFlowers(newListFlowers);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  //Update
  const updateFlower = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/new/flower/${isUpdating}`, { flower: updateInput });
      console.log(res.data);
      const updateFlowerIndex = listFlowers.findIndex(input => input._id === isUpdating);
      const updatedFlower = listFlowers[updateFlowerIndex].flower = updateInput;
      setUpdateInput('');
      setIsUpdating('');
    } catch (error) {
        console.log(error);
    }
  }

  //RenderUpdate
  const renderUpdateForm = () => (
    <form onSubmit={(e)=>{updateFlower(e)}}>
        <input type="text" placeholder="Nueva Flor" onChange={e=>{setUpdateInput(e.target.value)}} value={updateInput}/>
        <button type='submit'>Actualizar</button>
    </form>
  )
  return (
    <div className='todo-todo'>
      <Header></Header>
      <h1>To Do List</h1>

      <div className="todo-app">

        <form onSubmit={e => addFlower(e)}>
          <input type="text" placeholder="Agrega una Flor" onChange={e => { setInput(e.target.value) }} value={input} />
          <button type='submit'>Agregar</button>
        </form>
        <div>
          {/*
            listFlowers.map(a => (
              <div>
                {
                  isUpdating === a._id
                  ? renderUpdateForm()
                  :<>
                  <p>{a.flower}</p>
                  <button onClick={()=>{setIsUpdating(a._id)}}>Modificar</button>
                  <button onClick={() => { deleteFlower(a._id) }}>Borrar</button>
                  </>
                }                
              </div>
            ))
          */}
        </div>

      </div>
      <Footer></Footer>
    </div>

  );
}

export default App;