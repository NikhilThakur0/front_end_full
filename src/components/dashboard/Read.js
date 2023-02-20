import React, { useState,useEffect,useRef } from 'react'
import axios from 'axios';
import './Read.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import {FaBan} from "react-icons/fa";
import {FaUserPlus} from "react-icons/fa";
import user from '../img/user.png';
import inbox from '../img/envelope.png';
import settings from '../img/settings.png';
import logout from '../img/log-out.png';
import id from '../img/id.png';
import {FaPlus} from "react-icons/fa";
import {AiFillDelete} from 'react-icons/ai';
import {FaPlusCircle} from 'react-icons/fa';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
//import { FaArrowCircleDown } from "react-icons/fa";
// data-bs-toggle="collapse" className='accordian-toggle' data-bs-target="#r2"
const Read = () => {
  const [data,setData] = useState([]);
  //const [open, setOpen] =useState(false);
  const [open, setOpen] = useState({});
  const [openDrop, setOpenDrop] = useState(false);
  let menuRef = useRef();
  const handleClick = (id) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  function getData()
  {
    axios.get('https://63ebe45f32a081172393adeb.mockapi.io/dashboard-client-info')
    .then((res)=>{
      //console.log(res);
      setData(res.data);
    })
  }
  function handleDelete(id)
  {
    axios.delete(`https://63ebe45f32a081172393adeb.mockapi.io/dashboard-client-info/${id}`).then(()=>{
            getData();
           });
  }
  function setToLocalStorage(id,firstname,lastname,email,phone,city,state,address,company)
  {
      localStorage.setItem("id",id);
      localStorage.setItem("firstname",firstname);
      localStorage.setItem("lastname",lastname);
      localStorage.setItem("email",email);
      localStorage.setItem("phone",phone);
      localStorage.setItem("city",city);
      localStorage.setItem("state",state);
      localStorage.setItem("address",address);
      localStorage.setItem("company",company);
  }
   useEffect(()=>{
    getData();
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpenDrop(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  },[]);
  return (
    <>
      <div className='d-flex justify-content-between m-3'>
      {/* <h2>Client List</h2> */}

      <div className='Add-icon'>
      <Link to="/">
      <FaUserPlus size={20} className='black-color'></FaUserPlus>
      </Link>
      </div>
      <div className="dash-heading">
        <h2>Advisor DashBoard</h2>
      </div>
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger" onClick={()=>{setOpenDrop(!openDrop)}}>
        <img src={user} className="rounded-circle avatar" alt="avatar" />
        </div>
        <div className={`dropdown-menu-avatar ${openDrop? 'active' : 'inactive'}`}>
        <h3>The Kiet<br/><span>Asset Advisors</span></h3>
        <ul>
        <DropdownItem img = {user} text = {"Name"}/>
        <DropdownItem img = {id} text = {"Id"}/>
        <DropdownItem img = {inbox} text = {"Email"}/>
        <DropdownItem img = {settings}  text = {"Change Password"}/>
        <DropdownItem img = {logout} text = {"Logout"}/>
        </ul>
        </div>
      </div>
      
      </div>
      <table className="table accordian content-table table-striped">
  <thead>
    <tr>
      <th scope="col">Client_id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Phone</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Address</th>
      <th scope="col">Company</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {
    data.map((eachData,key)=>{
        return(
            <>
             <tbody key={eachData.id}>
   
     <tr>
     <th scope="row" >{eachData.id} <span onClick={() => handleClick(eachData.id)} data-bs-toggle="collapse" data-bs-target={`#collapseExample${eachData.id}`}>
     {open[eachData.id]? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
     </span>
     </th>
     <td>{eachData.firstname}</td>
     <td>{eachData.lastname}</td>
     <td>{eachData.email}</td>
     <td>{eachData.phone}</td>
     <td>{eachData.city}</td>
     <td>{eachData.state}</td>
     <td>{eachData.address}</td>
     <td>{eachData.company}</td>
     <td>
        <Link to="/update">
        <FaUserEdit size={20} className='black-color' onClick={
            ()=>{
                setToLocalStorage(eachData.id,eachData.firstname,eachData.lastname,eachData.email,eachData.phone,eachData.city,eachData.state,eachData.address,eachData.company);
            }
        }></FaUserEdit>
        </Link>
        &nbsp;
        &nbsp;
        &nbsp;
        
      <Link>
      <AiFillDelete size={20} className='black-color' onClick={
        ()=>{
            handleDelete(eachData.id);
        }
     }></AiFillDelete>
     </Link>
     </td>
  </tr>
  <tr>
     <td colSpan='12' className='hiddenRow'>
    <div className="accordian-body collapse accordian-collapse" id={`collapseExample${eachData.id}`}>
      <table className='table table-striped'>
         <thead>
         <tr className="info">
													<th>Investment Name</th>
													<th>Investment Type</th>
													<th>Investment Strategy Name</th>		
													<th>Account ID</th>	
													<th>ModelAPLId</th>
                          <th>Investment Amount</th>
													<th>Action</th>
				 </tr>
         </thead>
         <tbody>
         <tr>
         <td> Lorem</td>
													<td>Lorem</td>
													<td>Lorem</td>
													<td> Lorem</td>
													<td> Lorem</td>
                          <td>U$8.00000 </td>
													<td> 
                            <FaUserEdit size={20} className='black-color'/>
													</td>
          </tr>
          <tr>
          <td> Lorem</td>
													<td>Lorem</td>
													<td>Lorem</td>
													<td> Lorem</td>
													<td> Lorem</td>
                          <td>U$8.00000 </td>
													<td> 
                          <FaUserEdit size={20} className='black-color'/>
													</td>
          </tr>
          <tr>
          <td> Lorem</td>
													<td>Lorem</td>
													<td>Lorem</td>
													<td> Lorem</td>
													<td> Lorem</td>
                          <td>U$8.00000 </td>
													<td> 
                          <FaUserEdit size={20} className='black-color'/>
													</td>
          </tr>
            {/* Modal Code starting Here */}
 <FaPlusCircle size={20} className=".black-color plus my-2" data-bs-toggle="modal" data-bs-target={`#example${eachData.id}`
}/>
<div className="modal fade" id={`example${eachData.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  {console.log(eachData.id+"yaha")}
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Investment</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <input type="text" placeholder='Investment Name' className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
  <select className="form-select" aria-label="Default select example" id='exampletype1'>
  <option selected disabled>Investment Type</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='Investment Strategy Name' className="form-control" id="StrategyName1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='Account ID' className="form-control" id="AccountId" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='ModelAPLId'className="form-control" id="ModelAPLId" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='Investment Amount' className="form-control" id="InvestmentAmount" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 text-center">
  <button type="submit" className="btn btn-primary">Submit</button>
  <button type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
  </div>
  </form>
      </div>
    </div>
</div>
</div>
             {/* Modal Code Finishing Here */}
         </tbody>
      </table>
     
    </div>
    </td>
  </tr> 
 </tbody>
 </>
        );
       })
  }
</table>
</>
)
}
function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img} alt="tasveer"></img>
      <a href='/'> {props.text} </a>
    </li>
  );
}
export default Read;


