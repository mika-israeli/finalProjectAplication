import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector,useDispatch } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import {logout} from "../redux/apiCalls"
import './Css/Navbar.css'


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const a_style = {
  'text-decoration': 'none',
  
}

const Navbar = () => {
  const dispatch = useDispatch();
  const onClicklogout = () => {
    logout(dispatch);
    alert("logged out successfully !")
    window.location.reload(false);
  }
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state=>state.cart.quantity)
  const [caturl,setCaturl] = useState('')
  let history = useHistory();
  const handleSearchClick = ()=>{
    history.push(caturl);
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" onChange={(e)=>{setCaturl("/products/"+e.target.value)}}/>
            <button onClick={handleSearchClick}><Search></Search></button>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MMJBS Team</Logo>
        </Center>
        <Right>
          {user ? <MenuItem /> : <MenuItem><Link to="/register" style={a_style}>REGISTER</Link></MenuItem>}
          {user ? <MenuItem /> : <MenuItem><Link to="/login" style={a_style}>SIGN IN</Link></MenuItem>}
          {!user ? <MenuItem /> : <MenuItem onClick={onClicklogout}>LOGOUT</MenuItem>}
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
