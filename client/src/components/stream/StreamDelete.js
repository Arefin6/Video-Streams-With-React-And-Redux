import {React,useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams, withRouter } from 'react-router-dom';
import history from '../../history';
import {fetchStream,deleteStream} from '../../actions';
import Modal from '../Modal';


const StreamDelete = ({fetchStream,stream,deleteStream}) => {
    const{id}= useParams()

     useEffect(()=>{
        fetchStream(id) 
     },[fetchStream,id])


    const renderContent = ()=>{
        if(!stream){
            return <div>Are you want to Delete Stream?</div>
        }
        return <div>Are you want to delete the stream of title: {stream.title}</div>
    } 

    const actions =(
        <>
           <button onClick={()=>deleteStream(id)} className="ui button negative">Delete</button>
           <Link to="/" className="ui button">Cancel</Link>
        </>
    )
    return ( 
           <Modal
            title="Delete Streams"
            content={renderContent()}
            actions={actions}
            onDismiss={()=>history.push('/')} 
           />
        
    );
};

const mapStateToProps = (state,ownProps) =>{

    return {stream:state.streams[ownProps.match.params.id]}
  }

export default withRouter(connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete));