import React, { useState, useEffect } from "react";
import axios from "axios";


const Display = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const alldata = async () => {
      let res = await axios.get(`http://localhost:8080/data`);
      console.log(res.data)
      setList(res.data);
    };
    alldata();
  }, []);
  return (
    <div style={{display:"flex" , padding:"50px"}}>
  {list.map((e)=>(
    <>
    <div key={e.id} > 
      {e.id} {e.first_name}:{e.last_name}</div>
      <img style={{width:"200px"}} src={e.avatar} alt="" />
       </>
 ))}
    </div>
  );
};

export default Display;