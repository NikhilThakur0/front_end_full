import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [company, setComapny] = useState("");
  const history=useNavigate();
  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstname"));
    setLastName(localStorage.getItem("lastname"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    setCity(localStorage.getItem("city"));
    setState(localStorage.getItem("state"));
    setAddress(localStorage.getItem("address"));
    setComapny(localStorage.getItem("company"));
    //console.log("haha");
   },[]);
   function handleUpdate(e)
   {
    e.preventDefault();
      axios.put(`https://63ebe45f32a081172393adeb.mockapi.io/dashboard-client-info/${id}`,
      {
                firstname:firstname,
                lastname:lastname,
                email:email,
                phone:phone,
                city:city,
                state:state,
                address:address,
                company:company
     }
      ).then( ()=>{
        history('/read');
    });
   }
  return (
   <>
   <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <div className="login rounded">
      <h4 className='mb-3 text-center'>Update Client Information</h4>
      <form action="">
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='First Name' className='form-control'
        name="firstname" value={firstname}
        onChange={(e)=>{
        setFirstName(e.target.value);
      }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Last Name' className='form-control'
        name="lastname" value={lastname}
        onChange={(e)=>{
          setLastName(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="email" placeholder='Email' className='form-control client-create-email'
        name='email' value={email}
        onChange={(e)=>{
          setEmail(e.target.value);
      }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Phone' className='form-control'
        name="phone" value={phone}
        onChange={(e)=>{
            setPhone(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='City' className='form-control'
        name="city" value={city}
        onChange={(e)=>{
          setCity(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='State' className='form-control'
        name="state" value={state}
        onChange={(e)=>{
          setState(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Address' className='form-control'
        name="address" value={address}
        onChange={(e)=>{
          setAddress(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Company Name' className='form-control'
        name="company" value={company}
        onChange={(e)=>{
          setComapny(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4 d-flex justify-content-around">
         <button className='btn btn-primary' onClick={handleUpdate}>
          Update
         </button>
         <Link to="/read">
         <button className='btn btn-primary'>Back</button>
         </Link>
      </div>
      
      </form>
    </div>
    </div>
   </>
  )
}

export default Update
