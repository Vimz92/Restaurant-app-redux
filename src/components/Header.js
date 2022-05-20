import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Badge from "@material-ui/core/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import cart from '../images/cart.gif'
import { useSelector, useDispatch } from "react-redux";
import {DLT} from '../redux/actions/action'

const Header = () => {
const getdata = useSelector((state) => state.cartreducer.carts);
const [price, setPrice] = useState(0)

const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dlt = (id) => {
    dispatch(DLT(id))
  }

const total = () => {
  let price= 0;
  getdata.map((ele,k)=> {
    price = ele.price + price
  })
  setPrice(price);
}

useEffect(() => {
  total();
},[total])

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 30, cursor: 'pointer'}}
            >
              {" "}
            </i>
          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {
         getdata.length ? 
         <div className="card_details" style={{width:"24rem", padding: 10}}>
         <Table>
           <thead>
             <tr>
               <th> Photo </th>
               <th> Restaurant Name </th>
             </tr>
           </thead>
           <tbody>
             {
               getdata.map((e) =>{
                 return(
                   <>
                   <tr>
                     <td>
                      <NavLink to={`/cart/${e.id}`} onClick={handleClose}> <img src={e.imgdata} height={220} width={180}/>  </NavLink>
                      
                     </td>
                     <td>
                       <p>{e.rname} </p>
                     </td>
                     <td>
                      <p> Price: AED {e.price} </p>
                      <p> Quantity: AED {e.qnty} </p>
                      <p style={{color:"red", fontSize:20, cursor:"pointer"}} onClick={()=>dlt(e.id)}> <i className='fas fa-trash'> </i></p>
                     </td>

                     <td className='mt-5'>
                      <p style={{color:"red", fontSize:20, cursor:"pointer"}}  onClick={()=>dlt(e.id)}> <i className='fas fa-trash'> </i></p>
                     </td>

                   </tr>
                   </>
                 )
               })
             }
             <p className="text-center"> Total: AED {price} </p>
           </tbody>
         </Table>
         </div>:
          <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem", padding:10, position: "relative"}}>
          <i className="fas fa-close smallclose" 
          onClick={handleClose} style={{position:"absolute", top:2, right: 20, fontSize:23,cursor:"pointer"}}> </i>
          <p style={{fontSize:22}}> Your Cart is Empty </p>
          <img src={cart} width={180} height={220} alt="" />
      </div>
         
       }

       
      </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
