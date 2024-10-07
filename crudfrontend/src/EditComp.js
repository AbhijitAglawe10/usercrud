import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


export default function EditComp() 
{
    const apiUrl="http://localhost:5000/list";
    const {id}=useParams();

    const navigate=useNavigate();
    
    const [txt,setText]=useState({
        'fname':'',
        'lname':''
    })
    const fetchPosts=async()=>
    {
        const res=await axios.get(`${apiUrl}/$id`);
        setText(res.data);
    }
     useEffect(()=>
    {
        fetchPosts();
    },[]);
    const updateHandler=async(e)=>
    {
        e.preventDefault();
        await axios.put(`${apiUrl}/${id}`,txt);
       return navigate('/')
    }
    function txtHandler(e)
    {
        const name=e.target.name;
        const value=e.target.value;
        setText({...txt,[name]:value});
        // console.log(name);
        // console.log(value);
    }
  return (
    <>
    

    <div className="container w-25">
    <form onSubmit={updateHandler}>
        <input type="text" name="fname" value={txt.fname} onChange={txtHandler} placeholder="Enter the first name" className="mb-3" /><br/>
        <input type="text" name="lname" value={txt.lname} onChange={txtHandler} placeholder="Enter the last name" className="mb-3" /><br/>
        {/* <input type="text" name="email" onChange={txtHandler} placeholder="Enter the email" className="mb-3" /><br/>
        <input type="text" name="password" onChange={txtHandler} placeholder="Enter the password" className="mb-3" /><br/> */}
        <input type="submit" value="UpdateStudent" className="btn btn-success" />
    </form>
    </div>
    </>
  )
}
