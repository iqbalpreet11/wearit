import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
       <header class="header-area header-sticky">
          <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                    
                        <a href="index.html" class="logo">
                            <img src="assets/images/wearitlogo.png" alt=''/>
                        </a>
                        
                        <ul class="nav">
                            <li class="scroll-to-section"><Link to="/home" >Home</Link></li>
                            <li class="scroll-to-section"><Link to="/mens">Men's</Link></li>
                            <li class="scroll-to-section"><Link to="/womens">Women's</Link></li>
                            <li class="scroll-to-section"><Link to="/kids">Kid's</Link></li>
                            <li class="submenu">
                                <a href="javascript">Pages</a>
                                <ul>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/single-product">Single Product</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/loginsignup">LoginSignUp</Link></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript">Features</a>
                                <ul>
                                    <li><a href="/">Features Page 1</a></li>
                                    <li><a href="/">Features Page 2</a></li>
                                    <li><a href="/">Features Page 3</a></li>
                                    <li><a rel="nofollow" href="/https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section"><Link to="/explore">Explore</Link></li>
                        </ul>
                        <a href='menu-trigger'>
                            
                        </a>        
                     </nav>
                </div>
            </div>
        </div>
    </header>
    
   
   
    </>
            
           
                
            
        )
    }
}
export default Header;