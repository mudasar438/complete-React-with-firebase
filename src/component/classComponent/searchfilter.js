import React from 'react'
import { useState } from 'react'

const Searchfilter = () => {
const array=[
    {name:"Sir Wajid"},
    {name:"Mudassar"},
    {name:"Habib"},
    {name:"ali"},
    {name:"aleem"}
    

    
]
const [show, setShow]=useState(array)
const handlechange =(e)=>{
    setShow(array.filter(item=>item.name.includes(e.target.value)))
}
  return (

    <>
    <div>searchfilter in Function base component</div>
    <input type="search" placeholder='search name' onChange={(e)=>handlechange(e)} />
    {show.map((item)=>{
        return(
            <div>{item.name}</div>
        )
    })


    }
    </>
  )
}

export default Searchfilter