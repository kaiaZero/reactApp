import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  z-index:1;
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.div`
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
&.slide-enter{
  width:160px;
  transition: all 0.2s ease-out;
}
&.slide-enter-active{
  width:240px;
}
&.slide-exit{
  transition: all 0.2s ease-out;
}
&.slide-exit-active{
  width:160px;
}

  box-sizing:border-box;
  width:160px;
  height:38px;
  padding: 0 30px 0 20px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  margin-top:9px;
  margin-left:20px;
  padding:0 20px;
  font-size:14px;
  color:#666;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`

export const Addition = styled.div`
  position:absolute;
  top:0;
  right:0;
  height:56px;
`
export const Button = styled.div`
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding:0 20px;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }

`

export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .zoom{
    &.focused{
      background:#777;
      color:#fff;
    }
    position:absolute;
    width:30px;
    height:30px;
    border-radius:15px;
    line-height:30px;
    text-align:center;
    right:5px;
    bottom:5px;
  }
`

export const SearchInfo = styled.div`
  position:absolute;
  left:0
  top:56px;
  padding:0 20px;
  width:240px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  background:#fff;
`
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`
export const SearchInfoSwitch = styled.div`
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin{
    float:left;
    display:block;
    font-size:12px;
    margin-right:2px;
    transition:all 0.2s ease-in;
    transform-origin:center center;
  }
`
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  margin-right:10px;
  margin-bottom:10px;
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#777;
  border-radius:3px;
`




