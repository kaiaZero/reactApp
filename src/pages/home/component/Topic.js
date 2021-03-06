import React , {PureComponent} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';

class Topic extends  PureComponent {
  render(){
    const {list} = this.props
    return (
      <TopicWrapper>
        {list.map((item)=>{
          return (
            <TopicItem key={item.get('id')}>
            <img className='topic-img' src={item.get('imgUrl')} alt='' />
            {item.get('title')}
          </TopicItem>
          )
        })}

      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state)=>({
  list:state.home.get('topicList')
})

export default connect(mapStateToProps,null)(Topic);