import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStream,editStream} from '../../actions/index';
import { withRouter } from "react-router";
import StreamForm from './StreamForm';


class StreamEdit extends Component {
 
    componentDidMount(){
       this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues)=>{
      this.props.editStream(this.props.match.params.id,formValues)
    }
    
    render() {
        if(!this.props.stream){
          return <div>Loading..</div>
        }
        const {title,description} = this.props.stream

        return (
            <div>
               <h3>Edit a Stream</h3>
                <StreamForm
                 initialValues={{title,description}}
                 onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) =>{

  return {stream:state.streams[ownProps.match.params.id]}
}

export default withRouter(connect(mapStateToProps,{fetchStream,editStream})(StreamEdit));

