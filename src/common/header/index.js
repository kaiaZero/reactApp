import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
// import  * as actionCreators from './store/actionCreators';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem} from './style';

class Header extends Component {
  render(){
    const {focused,handleInputFocus,handleInputBlur,list,login,logout} = this.props
    return(
      <HeaderWrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <Nav>
        <NavItem className = 'left active'>首页</NavItem>
        <NavItem className = 'left'>下载App</NavItem>
        {login?
          <NavItem className = 'right' onClick = {logout}>退出</NavItem>
          :<Link to='/login'><NavItem className = 'right'>登陆</NavItem></Link>}
        
        <NavItem className = 'right'>
          <span className='iconfont'>&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout = {200}
            classNames = "slide"
            >
            <NavSearch 
              className = {focused ? 'focused' : ''}
              onFocus = {()=>handleInputFocus(list)}
              onBlur = {handleInputBlur}
              ></NavSearch>
          </CSSTransition>
        <span  className = {focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe617;</span>
        {this.getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Link to='/write'>
          <Button className = 'writting'>
          <span className='iconfont'>&#xe678;</span>
          写文章</Button>
          <Button className = 'reg'>注册</Button>
        </Link>
      </Addition>
    </HeaderWrapper>
    )
  }
  getListArea(){
    const {focused,list,page,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage,totalPage} = this.props;
    const jsList = list.toJS()
    const pageList = [];
    //list初始值为[],最开始渲染时jsList[i]为undefined
    if(jsList.length){
      for(let i = page * 10; i < Math.min((page +1) *10,jsList.length) ;i++){
        pageList.push(
          <SearchInfoItem key = {jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
  
    }
    if(focused||mouseIn){
      return (
        <SearchInfo onMouseEnter = {()=>{
          handleMouseEnter()
          }} 
          onMouseLeave = {()=>{
          handleMouseLeave()
          }} 
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={ ()=>{
              handleChangePage(page,totalPage,this.spinIcon)}
            }>
              <span className='iconfont spin'
              ref ={(icon)=>{this.spinIcon = icon}}>&#xe606;</span>
              换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <div>
              {pageList}
            </div>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
}

// const getListArea = (show)=>{
//   if(show){
//     return (
//       <SearchInfo>
//         <SearchInfoTitle>
//           热门搜索
//           <SearchInfoSwitch>换一批</SearchInfoSwitch>
//           </SearchInfoTitle>
//           <div>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//           </div>
//       </SearchInfo>
//     )
//   }
// }

// const Header = (props)=>{
//   return(
//     <HeaderWrapper>
//     <Logo href='/'/>
//     <Nav>
//       <NavItem className = 'left active'>首页</NavItem>
//       <NavItem className = 'left'>下载App</NavItem>
//       <NavItem className = 'right'>登陆</NavItem>
//       <NavItem className = 'right'>
//         <span className='iconfont'>&#xe636;</span>
//       </NavItem>
//       <SearchWrapper>
//         <CSSTransition
//           in={props.focused}
//           timeout = {200}
//           classNames = "slide"
//           >
//           <NavSearch 
//             className = {props.focused ? 'focused' : ''}
//             onFocus = {props.handleInputFocus}
//             onBlur = {props.handleInputBlur}
//             ></NavSearch>
//         </CSSTransition>
//       <span  className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</span>
//       {getListArea(props.focused)}
//       </SearchWrapper>
//     </Nav>
//     <Addition>
//       <Button className = 'writting'>
//       <span className='iconfont'>&#xe678;</span>
//       写文章</Button>
//       <Button className = 'reg'>注册</Button>
//     </Addition>
//   </HeaderWrapper>
  
//   )

// }


// class Header extends Component {
//   // constructor(props){
//   //   super(props);
//   //   // this.state = {
//   //   //   focused:false
//   //   // }
//   //   // this.handleInputFocus = this.handleInputFocus.bind(this)
//   //   // this.handleInputBlur = this.handleInputBlur.bind(this)
//   // }

//   render(){
//     return (
//       <HeaderWrapper>
//         <Logo href='/'/>
//         <Nav>
//           <NavItem className = 'left active'>首页</NavItem>
//           <NavItem className = 'left'>下载App</NavItem>
//           <NavItem className = 'right'>登陆</NavItem>
//           <NavItem className = 'right'>
//             <span className='iconfont'>&#xe636;</span>
//           </NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={this.props.focused}
//               timeout = {200}
//               classNames = "slide"
//               >
//               <NavSearch 
//                 className = {this.props.focused ? 'focused' : ''}
//                 onFocus = {this.props.handleInputFocus}
//                 onBlur = {this.props.handleInputBlur}
//                 ></NavSearch>
//             </CSSTransition>
//           <span  className = {this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</span>
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className = 'writting'>
//           <span className='iconfont'>&#xe678;</span>
//           写文章</Button>
//           <Button className = 'reg'>注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     )
//   }

//   // handleInputFocus(){
//   //   // this.setState({
//   //   //   focused:true
//   //   // })
//   // }
//   // handleInputBlur(){
//   //   // this.setState({
//   //   //   focused:false
//   //   // })
//   // }
// }

const mapStateToProps = (state)=>{
  return {
    // focused:state.header.focused
    focused:state.header.get('focused'),
    list:state.header.get('list'),
    page:state.header.get('page'),
    mouseIn:state.header.get('mouseIn'),
    totalPage:state.header.get('totalPage'),
    login:state.login.get('login')
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputFocus(list){
      // const action = {
        // type:'search_focus'
      // }
      if(list.size===0){
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      // const action = {
      //   type:'search_blur'
      // }
      dispatch(actionCreators.searchBlur())

    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if(originAngle ){
        originAngle = parseInt(originAngle)
      }else{
        originAngle =0
      }
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
      if(page<totalPage-1){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(0))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);