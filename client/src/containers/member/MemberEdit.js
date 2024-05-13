import React, { Component } from "react";
import { connect } from "react-redux";
import { memberCreate, memberUpdate, memberFetch } from "../../actions/MemberActions";
import Footer from "../../components/Footer";
import MemberForm from "../../components/member/MemberForm";
import Header from "../../components/Header";

class MemberEdit extends Component {
    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.memberFetch(this.props.match.params.id);
        }
    }
    render () {
        const { formValues, match, members, memberCreate, memberUpdate } = this.props;
        return (
            <div className="header">
                <Header />
                <div className="contaioner col-5">
                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h1 className="menu">Add Personal Information</h1>
                         <div className="text-light" >
                        <MemberForm onMemberSubmit={() => memberCreate(formValues)}/> 

                        {members.saved && (
                                <div className="message-text text-center" >
                                {members.msg}
                                </div>
                        )}  
                        </div>
                        </div>
                    )}
                    
                    {match.path.indexOf("edit") > 0 && (
                        <div >
                        <h2 className="menu">Edit Personal Information</h2>
                        <div className="text-light" >
                        <MemberForm onMemberSubmit={() => memberUpdate( members.id, formValues)}/>

                        {members.saved && (
                                <div className="message-text text-center" >
                                {members.msg}
                                </div>
                        )} 

                        </div>
                    </div>
                )}
                </div>
                <Footer Company= "DATA " Email= "phanit.su@ku.th"/>
             </div>
        );
    }
}

function mapStateToProps( {form, members} ) {
    return{ formValues: form.memberForm ? form.memberForm.values : null, members };
}

export default connect(mapStateToProps, {memberCreate, memberUpdate, memberFetch})(MemberEdit);