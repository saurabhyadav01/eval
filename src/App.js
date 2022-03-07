import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputList,setInputList]=useState();

const [data,dataItems]=useState([]);

  const itemsEvent=(el)=>
  {
  setInputList(el.target.value)
  }

 const lists=()=>{
  dataItems((olddata)=>{
   console.log(olddata)
  })
  
 } ;
 
  return (
    <div className="items">
     <h2>Inventry Management</h2>
     <input type="text" name="" id="" placeholder='Add items' onChange={itemsEvent}/>
     <button onClick={itemsEvent}>Add Items</button>  
     <ol>
       <li>{inputList}</li></ol> 
       {
         data.map((e)=>{
           return {e}
         })
       }  
       <div className='total'>1</div>
    </div>
  );
}

export default App;
