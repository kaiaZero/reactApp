import axios from 'axios';
import * as constant from './constant';
import { fromJS } from 'immutable';

const changeHomeData = (result)=>({
  type:constant.CHANGE_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
});

const addHomeList = (list,nextPage)=>{
  return {
    type:constant.ADD_ARTICAL_LIST,
    list:fromJS(list),
    nextPage
  }
}


export const getHomeInfo = ()=>{
  return (dispatch)=>{
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      const action = changeHomeData(result)
      // const action = {
      //   type:'change_home_data',
      //   topicList:result.topicList,
      //   articleList:result.articleList,
      //   recommendList:result.recommendList
      // }
      dispatch(action);
    })
  }
}

export const getMoreList = (page)=>{
  return (dispatch)=>{
    axios.get('/api/homeList.json?page='+page).then((res)=>{
      const result = res.data.data;
      dispatch(addHomeList(result,page+1));
    })
  }
}

export const toggleTopShow = (show)=>{
  return {
    type:constant.TOGGLE_SHOW_TOP,
    show
  }
}