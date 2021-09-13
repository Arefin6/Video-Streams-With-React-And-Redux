import _ from 'lodash';
import { Create_Stream, Delete_Stream, Edit_Stream, Fetch_Stream, Fetch_Streams } from "../actions/types"

const streamReducer = (state= {},action)=>{
  switch(action.type){
      case Fetch_Streams:
        return {...state,..._.mapKeys(action.payload,'id')};  
      case Fetch_Stream:
        return {...state,[action.payload.id]:action.payload }
      case Create_Stream:
          return {...state,[action.payload.id]:action.payload} 
      case Edit_Stream:
          return {...state,[action.payload.id]:action.payload}       
      case Delete_Stream:
          return _.omit(state,action.payload)    
      default:
         return state;   
   }
}

export default streamReducer;