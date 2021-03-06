import React , {PureComponent} from 'react';
import {DetailWrapper,Header,Content} from './style';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {actionCreators} from './store';


class Detail extends  PureComponent {
  render(){
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
          {/* <img src='https://upload-images.jianshu.io/upload_images/14015702-237b86a24f99302e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700/format/webp' />
          <p>{'01. 3月8日，是校长王思聪微博停更的第48天。\n    这一天，他一手缔造的熊猫直播宣布破产。\n    校长的微博依旧沉默，但这则消息却震惊了朋友圈。背靠王思聪这棵大树，曾与斗鱼、虎牙三足鼎立，估值高达50亿，熊猫直播从一开始就像个优等生。谁会想到，占尽了天时地利，却依旧一败涂地。不幸是结局，不争是缘由，熊猫直播却是败给了自己。\n    破产原因很多，但和打鸡血、倡导狼性文化的同行不同，熊猫直播很佛。主播佛，每天只直播 4、5个小时，人气掉了领导也不在意。等到月底疯狂补时长，然后拿全额薪水。甚至，主播们还虚假“刷量”成风。员工佛，有游戏厂商员工说，熊猫员工很自负，认为“校长”的名字足够牛，是最厉害的推广方案，多余的PR毫无意义。\n    领导更佛：媒体报道说，熊猫直播曾几次遇到危机，领导层都集合开会。但实际上，都是边开会，边携妻带子找个度假村搞团建。相比对手，熊猫直播就是天堂，大家不用加班、不用熬夜、不用有危机感，就能舒舒服服的拿钱。\n    但直播行业白刃见红，全力以赴尚且困难重重，一味贪图安逸，想不死都难。用户下降、造血困难，熊猫直播节节败退，不仅无人愿意投资，最后连王思聪都撤了资。总认为大树底下好乘凉，却不知道大树不喜欢懒惰的你。如今，在直播间高呼“世界末日”的主播，在职场到处投简历的员工，一定感受到了行业的残酷，但这一切又能怪谁？\n    正如360创始人周鸿祎在《给那些仍旧在公司混日子的人》一文所写：“你混日子，就是日子混你，最后的输家是你自己。”你曾经贪图的舒适区，正在慢慢杀死你。'}
          </p> */}
        </Content>
      </DetailWrapper>
    )
  }

  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
    window.scrollTo(0,0);
  }
}

const mapState = (state)=>({
  title:state.detail.get('list').get('title'),
  content:state.detail.get('list').get('content')
});

const mapDispatch = (dispatch)=>({
  getDetail(id){
    dispatch(actionCreators.getDetail(id))
  }
});

export default connect(mapState,mapDispatch)(withRouter(Detail));