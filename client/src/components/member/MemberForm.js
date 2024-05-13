import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { memberFormField } from "./formFields";

class MemberForm extends Component {
    renderFields (formFields) {
        return formFields.map(({ label, name , type , required }) => {
            return (
                
                <Field
                component ={FormField}
                key={name}
                name={name} 
                label={label}
                type={type}
                required={required} 
                />
            );
        } );
    }

    render() {
        const { onMemberSubmit } =this.props;
        return (
            <div className="font-form">
                <form onSubmit={ this.props.handleSubmit(onMemberSubmit) }>
                    <div >{this.renderFields(memberFormField)}
                    <div>
                    <button className="btn btn-outline-success col-12" type="submit">
                        submit
                    </button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate (values){
   const errors = {};
   memberFormField.forEach(({ name, required }) => {
       if(!values[name] && required) {
         errors[name] = '**';
    }
});
    return errors;
}

function mapStateToProps({members}) {
    if(members && members.id) {
        return {initialValues : members};
    } else{
        return {};
    }
}

MemberForm = reduxForm({ validate, form : "memberForm"})(MemberForm);

export default connect(mapStateToProps)(MemberForm);