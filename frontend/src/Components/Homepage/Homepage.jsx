import React from 'react'
import Card from '../Card/Card'
import './Homepage.css'
import Banner from '../Banner/Banner'
function Homepage(props) {
  const data = props.data
  return (
    <div>
    <h1>Homepage</h1>
    <Banner />
    <div id="cards">{data.map((d,index)=>{
      return(
        <Card key={index} data={d}/>
      )
      
      })}</div>
    </div>
  )
}

export default Homepage