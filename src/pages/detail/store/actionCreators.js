import axios from 'axios';
import * as constant from './constants';
import { fromJS } from 'immutable';

// const changeDetail = (title,content)=>({
const changeDetail = (id)=>({
  type:constant.CHANGE_DETAIL,
  id
  // title,
  // content
})

export const getDetail = (id)=>{
  return (dispatch)=>{
    // axios.get('/api/detail.json?id='+id).then((res)=>{
    //   const result = res.data.data
      // dispatch(changeDetail(result.title,result.content))
      dispatch(changeDetail(id))
    // })
  }
};
