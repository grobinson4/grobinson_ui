import React from "react";
import './NavBar.css';
import {
    Nav,
    NavTop,
    NavLink,
    Bars,
    NavMenu,
    Brand
    // NavBtn,
    // NavBtnLink,
  } from './NavBar';

  const Navigation = () => {
    return class extends React.Component {
      render() {
        return (
      <>
        <Nav>
          <Brand>
        <header className='G-logo'>Gary D. Robinson
        </header>
        </Brand>
        <Bars />
          <NavMenu className='m-auto'>
           {/* <NavLink href='/about.js' activeStyle>
              About
            </NavLink>
            <NavLink href='/about.js' activeStyle>
              Code
            </NavLink>
            <NavLink href='/about.js' activeStyle>
              Store
            </NavLink>
            <NavLink href='/about.js' activeStyle>
              Video
            </NavLink> 
             <NavLink href='/about.js' activeStyle>
              Podcast
            </NavLink>  */}
            
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
            {/* <NavBtnLink >Sign In</NavBtnLink> */}
        </Nav>
      </>
        )
        };
      }
        
  };


  export default Navigation;