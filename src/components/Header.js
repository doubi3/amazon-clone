import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function Header() {
    return (
        <nav className="header">
            <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="" 
            className="header__logo"/> 
            </Link>
            <div className="header__search">
                <input type="text" 
                className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello User</span>
                        <span className="header__optionLineTwo">Sign In</span>  
                    </div>      
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>  
                    </div>      
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>  
                    </div>      
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                     <ShoppingCartIcon />               
                     <span className="header__basketCount">0</span>
                    </div>      
                </Link>


            </div> 
           
        </nav>
    )
   
}

export default Header;
