import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent()
{
    const navigate=useNavigate();
    const [txt,setText]=useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    })
    function submitHandler(e)
    {
        e.preventDefault();
        console.log(txt);
        setText(txt);
        axios.post("http://localhost:5000/create",txt); //post data from client to server to database
        navigate('/');

    }
    function txtHandler(e)
    {
        const name=e.target.name;   //fname   lname  email password
        const value=e.target.value; //Abhi  Aglawe abhi@123Gmail.com Abhi@123
       // console.log(name);
       // console.log(value);
       setText({...txt,[name]:value});
    }
    return(
        <>
        <div className="container w-25">
            <form onSubmit={submitHandler}>
                <input type="text" name="fname" onChange={txtHandler} placeholder="Enter the first name" className="mb-3" /><br/>
                <input type="text" name="lname" onChange={txtHandler} placeholder="Enter the last name" className="mb-3" /><br/>
                <input type="text" name="email" onChange={txtHandler} placeholder="Enter the email" className="mb-3" /><br/>
                <input type="text" name="password" onChange={txtHandler} placeholder="Enter the password" className="mb-3" /><br/>
                <input type="submit" value="Add new Student" className="btn btn-success" />
            </form>

        </div>
        </>
    )
}