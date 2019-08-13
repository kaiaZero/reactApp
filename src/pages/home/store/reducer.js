import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  articlePage:1,
  showScroll:false
});

export default (state = defaultState, action )=>{
  switch(action.type){
    case constant.CHANGE_HOME_DATA:
    return state.merge({'topicList':fromJS(action.topicList),
                 'articleList':fromJS(action.articleList),
                 'recommendList':fromJS(action.recommendList)
                });
    case constant.ADD_ARTICAL_LIST:
      return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextPage
      });
    case constant.TOGGLE_SHOW_TOP:
      return state.set('showScroll',action.show)
    default:
      return state;
  }

}