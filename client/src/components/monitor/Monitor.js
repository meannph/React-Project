import React, { Component } from "react";
import MemberList from "../member/MemberList";
class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = { lists: [] , msg: ''} ;
        this.addList = this.addList.bind(this);
        this.delList = this.delList.bind(this);
    }

    addList(member) {
        let FindList = this.state.lists.find(list => list.member.id == member.id);
        if(FindList) {
            FindList.quantity++;
        } else {
            this.state.lists.push({member: member, quantity: 1});
        }
        this.setState({ list: this.state.lists});
    }

    delList(member){
        let resultList = this.state.lists.filter(list => list.member.id != member.id);
        this.setState({ lists: resultList});
    }
   
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <MemberList members = {this.props.members} onAddList={this.addList} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Monitor;