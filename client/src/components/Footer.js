import React from "react";

const Footer =  (props) => {
          const {Company, Email} = props;
    return (
    <div className="container-fluid">
        <hr />
        <div className="text-center text-uppercase">
       <span className="text-light font-footer"> Powered By {Company}</span> <span className="text-light font-footer">| Contact By Email : {Email} </span>
        </div>
    </div>
    )
}

export default Footer;