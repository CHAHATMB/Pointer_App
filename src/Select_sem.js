import React from 'react';
import './Select_sem.css';
import {Link} from 'react-router-dom';

const items=[
    { sem:"Sem 1"},
    { sem:"Sem 2"},
    { sem:"Sem 3"},
    { sem:"Sem 4"},
    { sem:"Sem 5"},
    { sem:"Sem 6"},
    { sem:"Sem 7"},
    { sem:"Sem 8"}
  ];



function listItem(){

return (
  <div className="sem">
  <h1 id='title'><p id='heading'>VJTI Pointer Finder</p></h1>
    {items.map(item=>(
      <Link to={`/sem/${item.sem}`}>
      <h1 id="sem">{item.sem}</h1>
      </Link>
    ))}
    <p id="result_tab">Choose a Sem .... </p>
  </div>
)










}

export default listItem;
