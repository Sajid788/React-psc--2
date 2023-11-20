import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

let getUrl = (url,page,limit,filter) =>{
  if(page){
    url = url + `?_page=${page}&_limit=${limit}`
  }
if(filter){
  url = url + (page ? `&catogery=${filter}` :`?catogery=${filter}`);
}
return url;
}

const Product = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const limit = useState(6)
  const [filter, setFilter] = useState("")

  const fetchData = async()=>{
    try {
      let url = `https://cwproject-unit5.onrender.com/products`;
 
       url = getUrl (url,page,limit,filter);

        let res = await fetch (url)
        let jsonData = await res.json();
      setData(jsonData)
      console.log(jsonData);
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData(page,filter)
  },[page,filter])

  return (
    <div
    style={{display:"grid",
     gridTemplateColumns:"repeat(3, 1fr)",
      gridGap:"20px",
       margin: "20px"}}
    >
      <div>
    <h2>filtring</h2>
      <button onClick={()=>setFilter("face")}>face</button>
      <button onClick={()=>setFilter("Eyes")}>Eyes</button>
      <button onClick={()=>setFilter("Tools")}>Tools</button>
      <button onClick={()=>setFilter("")}>Reset</button>
    </div>
      {data?.map((item)=>{
        return<div key={item.id}>
          <img src={item.img2} alt='emage' width={200}/>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.catogery}</p>
          <p>{item.details}</p>
          <Link to={`/products/${item.id}`}>More details</Link>
        </div>
      })}
      <div>
        <button disabled = {page===1} onClick={()=>setPage(page - 1)}>prev</button>
        <button>{page}</button>
        <button onClick={()=>setPage(page + 1)}>next</button>
      </div>
    </div>
  )
}

export default Product
