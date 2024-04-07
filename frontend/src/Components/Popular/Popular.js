import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = (props) => {

  const [popular_in_men, setPopular_in_men] = useState([]);

  const [popular_in_women,setPopular_in_women] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinmen')
    .then((response)=>response.json())
    .then((data)=>setPopular_in_men(data));
  },[])

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopular_in_women(data));
  },[])

  let popular = props.category==='men'?popular_in_men:popular_in_women

  return (
    <div className='popular'>
        <h1>POPULAR IN {props.category.toUpperCase()}</h1>
        <div className="popular-item">
            {popular.map((item,i)=>{
              if(props.category === item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else
              return null;
            })}
        </div>
      
    </div>
  )
}

export default Popular
