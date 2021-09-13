import React, { Component } from 'react';
import { Field,reduxForm } from 'redux-form';


class StreamForm extends Component {

   onSubmit =(formValues) =>{
       this.props.onSubmit(formValues)
   }
   
    renderError = ({touch,error}) =>{
       if(touch && error){
          return(
             <div className="ui error message">
               <div className="header">
                   {error}
               </div>
             </div> 
          ) 
       }
    }

    renderInput = ({input,label,meta}) =>{
       return(
          <div className="field">
             <label>{label}</label> 
            <input {...input} / > 
             {this.renderError(meta)}
          </div>  
     
       )    
    }
    render() {
        return (
            <form
            onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className="ui form">
               <Field name="title" label="Enter title" component={this.renderInput}/>
               <Field name="description" label="Enter description" component={this.renderInput}/>
              <button className="ui button primary">Submit</button> 
            </form>
        );
    }
}

const validate = formValues =>{
    const errors ={};

    if(!formValues.title){
      errors.title = "You must enter a title"; 
    }
    if(!formValues.description){
        errors.description ="You must enter a description";
    }

   return errors; 
}


export default reduxForm({
   form:'streamForm',
   validate 
})(StreamForm);

