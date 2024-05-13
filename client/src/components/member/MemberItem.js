import React, { Component } from "react";

class MemberItem extends Component {         
    constructor(props) {
        super(props) 
    }   

    render() {
        const {Name,surname, age,sex, email,Tel,address,addphoto,username,password} = this.props.member; 
        return (
            <div className="col-md-3">
             <div className="alert alert-info" role="alert">

                {(this.props.onDelMember || this.props.onEditMember) &&
                    <button className="btn btn-danger col-2 float-right" onClick={() => this.props.onDelMember(this.props.member)}>
                        X
                    </button>}
                    
                <img className="img-fluid img-thumbnail" src={addphoto}></img>
                <p className="texe-color mt-3">Name : {Name}</p>
                <p className="texe-color">Surname : {surname}</p>
                <p className="texe-color">Age : {age} </p>
                <p className="texe-color">Gender : {sex} </p>
                <p className="texe-color">Email : {email} </p>
                <p className="texe-color">Tel : {Tel} </p>
                <p className="texe-color">Address : {address} </p>
                <p className="texe-color">Username : {username} </p>
                <p className="texe-color">Password : {password} </p>
                <hr />

               {(this.props.onDelMember || this.props.onEditMember) &&
                    <button className="btn btn-outline-primary col-12" onClick={() => this.props.onEditMember(this.props.member)}>
                        edit
                    </button>}
                </div>
            </div>
        )
    }
}

export default MemberItem;