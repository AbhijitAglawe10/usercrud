import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AppComponent() {
    const [post,setPost] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:5000/list").then((Response) => {
    //         console.log(Response);
    //         setPost(Response.data);
    //     })
    // })
    const apiUrl="http://localhost:5000";
    const navigate=useNavigate();
    const fetchPosts=async()=>
    {
        const res=await axios.get(`${apiUrl}/list`);
        setPost(res.data);
    }
    useEffect(()=>
    {
        fetchPosts();
    },[]);
    const deleteHandler=async(stud)=>
        {
            setPost(post.filter((p)=>p._id!==stud._id))
            await axios.delete(`${apiUrl}/delete/${stud._id}`)
        }
    const updateHandler=async(stud)=>
    {
       navigate(`/update/${stud._id}`);
    }
    
    return (
        <>
           
            <table className="table-bordered p-3 w-50 m-30 " cellPadding={15}>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {
                    post.map((e) => {
                        return (
                            <>

                                <tr>
                                    <td>{e.fname}</td>
                                    <td>{e.lname}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>

                                    <td><button className='btn btn-primary'onClick={()=>updateHandler(e)}>Edit</button></td>
                                    <td><button className='btn btn-danger'onClick={()=>deleteHandler(e)}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })
                }

            </table>
            <a><Link to='/add'> Add new Student</Link></a>
        </>
    )
}






