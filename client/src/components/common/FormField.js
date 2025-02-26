import React from "react";

export default ({ input, label ,type, required, meta : { error , touched}}) => {
   
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} required = {required} {...input} className="form-control" />
            {error && touched &&
            (
            <div className="mt-2 text-danger">{error}</div>
            )
        }
        </div>
    )
}