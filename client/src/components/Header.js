import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="container-fluid">
            <div className="row ">
               <div >
                <h1 className="header-text"><img src="/images/logo/logo.png" alt="" width="120" height="110" />phanit</h1> 
                </div>
                <div className="col-md-12">
                    <ul className= "list-inline text-right">
                            <li className="list-inline-item"><Link className="text-light font" to ="/" >Home</Link></li>
                            <li className="list-inline-item"><Link className="text-light font" to ="/members">Information</Link></li>
                            <li className="list-inline-item"><Link className="text-light font" to="/members/add">AddInformation</Link></li>
                            <li className="list-inline-item"><Link className="text-light font" to="/About">About</Link></li>
                           
                </ul>
                </div>
                <hr />         
             </div>
             </div>

        );
    }
}
export default Header;