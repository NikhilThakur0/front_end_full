import React,{useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './create.css';
const Create = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [company, setComapny] = useState("");
    const history=useNavigate();
    const header={'Access-Control-Allow-Origin':'*'};
    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.post(
            'https://63ebe45f32a081172393adeb.mockapi.io/dashboard-client-info',
             {
                firstname:firstname,
                lastname:lastname,
                email:email,
                phone:phone,
                city:city,
                state:state,
                address:address,
                company:company,
                header
             }
        ).then(
            ()=>{
                history('/read');
            }
        )
        
    }
  return (
    <>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <div className="login rounded">
      <h4 className='mb-3 text-center'>Add a new Client</h4>
      <form action="">
       {/* <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Client Name' className='form-control'
        name="name"
        onChange={(e)=>{
            setName(e.target.value);
        }
       }
        />
      </div> */}
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='First Name' className='form-control'
        name="firstname"
        onChange={(e)=>{
        setFirstName(e.target.value);
      }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Last Name' className='form-control'
        name="lastname"
        onChange={(e)=>{
          setLastName(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="email" placeholder='Email' className='form-control client-create-email'
        name='email'
        onChange={(e)=>{
          setEmail(e.target.value);
      }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Phone' className='form-control'
        name="phone"
        onChange={(e)=>{
            setPhone(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='City' className='form-control'
        name="city"
        onChange={(e)=>{
          setCity(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='State' className='form-control'
        name="state"
        onChange={(e)=>{
          setState(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Address' className='form-control'
        name="address"
        onChange={(e)=>{
          setAddress(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Company Name' className='form-control'
        name="company"
        onChange={(e)=>{
          setComapny(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4 d-flex justify-content-around">
         <button className='btn btn-primary' onClick={handleSubmit}>Add Client</button>
         <Link to="/read">
         <button className='btn btn-primary'>Show Client List</button>
         </Link>
      </div>
      
      </form>
    </div>
    </div>
    </>
    )
}
 export default Create 
