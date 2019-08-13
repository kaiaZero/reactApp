import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused:false,
  mouseIn:false,
  //immutable数组
  list:[],
  page:0,
  totalPage:1
});

export default (state = defaultState, action )=>{
  switch(action.type){
    case actionTypes.SEARCH_FOCUS :
        return state.set('focused',true);
    case actionTypes.SEARCH_BLUR:
        return state.set('focused',false);
    case actionTypes.CHANGE_LIST:
        return state.merge({
          list:action.data,
          totalPage:action.totalPage
        })
        // return state.set('list',action.data)
        //             .set('totalPage',action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case actionTypes.MOUSE_LEAVE:
        return state.set('mouseIn',false)
    case actionTypes.CHANGRE_PAGE:
        return state.set('page',action.page)
    
    default:
      return state;
  }
  // if(action.type === actionTypes.SEARCH_FOCUS){
  //   return state.set('focused',true)
  //   // {
  //   //   focused:true
  //   // }
  // }
  // if(action.type === actionTypes.SEARCH_BLUR){
  //   return state.set('focused',false)
  //   // return {
  //   //   focused:false
  //   // }
  // }
  // if(action.type === actionTypes.CHANGE_LIST){
  //   //要把action.data也变为immutable数组
  //   return state.set('list',action.data)
  // }


  return state;
}