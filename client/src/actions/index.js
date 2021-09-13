import streams from '../apis/streams';
import history from '../history';
import { Create_Stream, Delete_Stream, Edit_Stream, Fetch_Stream, Fetch_Streams, SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) =>{
  return {
      type:SIGN_IN,
      payload:userId
  }
};


export const signOut = () =>{
    return{
        type:SIGN_OUT
    }
}

export const createStream = formValues =>async(dispatch,getState) =>{
   const {userId}= getState().auth;
   const response = await streams.post('/streams',{...formValues,userId}); 
   dispatch({type:Create_Stream,payload:response.data})
   history.push('/');
};
export const fetchStreams = () =>async  dispatch =>{
  
    const response = await streams.get('/streams');

     dispatch({type:Fetch_Streams,payload:response.data})  
 };
 export const fetchStream = (id) =>async  dispatch =>{
  
     const response = await streams.get(`/streams/${id}`);

     dispatch({type:Fetch_Stream,payload:response.data})  
 };
 export const editStream = (id,formValues) =>async  dispatch =>{
  
    const response = await streams.patch(`/streams/${id}`,formValues); 
     dispatch({type:Edit_Stream,payload:response.data})
     history.push('/');  
 };
 export const deleteStream = (id) =>async  dispatch =>{

      await streams.delete(`/streams/${id}`);
     dispatch({type:Delete_Stream,payload:id})
     history.push('/')  
 };
