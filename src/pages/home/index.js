import React , {PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight,BackTop}  from './style'
import Writer from './component/Writer';
import Topic from './component/Topic';
import Recommend from './component/Recommend';
import List from './component/List';
// import axios from 'axios';
import {connect} from 'react-redux';
import {actionCreators} from './store';



class Home extends  PureComponent {

  
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img  alt='' className = 'banner-img' src = "https://show2019.oss-ap-southeast-1.aliyuncs.com/jianshuIMG/banner.jpg" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll?<BackTop onClick = {this.handleScrollTop}>回到顶部</BackTop>:''}
      </HomeWrapper>
    )
  }

  handleScrollTop(){
    window.scrollTo(0,0);
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvents()
}
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)

  }
}

const mapStateToProps = (state)=>({
  showScroll:state.home.get('showScroll')
})

const mapDispatchToProps = (dispatch)=>({
  changeHomeData(){
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow(e){
    if(document.documentElement.scrollTop > 100){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})



export default connect(mapStateToProps,mapDispatchToProps)(Home);