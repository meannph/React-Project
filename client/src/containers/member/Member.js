import React, { Component } from "react";
import Footer from "../../components/Footer";
import MemberList from "../../components/member/MemberList";
import { withRouter } from "react-router-dom";
import{ connect } from "react-redux";
import { membersFetch, memberDelete } from "../../actions/MemberActions";
import Header from "../../components/Header";

class Member extends Component {

    constructor(props) {
        super(props);
        this.delMember=this.delMember.bind(this);
        this.editMember=this.editMember.bind(this);
    }
    
componentDidMount() {
    this.props.membersFetch();
}

delMember(member){
    this.props.memberDelete(member.id);
}

editMember(member) {
    this.props.history.push('members/edit/' + member.id);

}
render () {
        return (
            <div className="header">
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="menu">Personal Information</div>
                    </div>

                    {this.props.members && Array.isArray(this.props.members) &&
                    (<MemberList members={this.props.members}
                        onDelMember={this.delMember} onEditMember={this.editMember}
                    /> )}
                    </div>
                    
                <Footer Company= "DATA" Email= "phanit.su@ku.th"/>
               </div>
        )
    }
}

function mapStateToProps({members}) {
    return { members };
}

export default withRouter( connect(mapStateToProps, { membersFetch, memberDelete})(Member));