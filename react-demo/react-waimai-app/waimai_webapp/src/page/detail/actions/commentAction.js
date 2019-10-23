import {  COMMENT_LIST_DATA  } from './actionTypes';
import axios from 'axios';
// import qs from 'component/queryString';

export const getListData = () =>async(dispatch)=>{
    dispatch({
        type: 'SETLOADSTATE',
        obj: false
    });
    // let id = qs('id');
    // let token = window.Rohr_Opt.reload('/ajax/poi/comment');
    let resp = await axios({
      method: 'get',
      url: './json/comments.json',//'http://localhost:3000/api',
      // data: {
      //   url: encodeURIComponent('http://i.waimai.meituan.com/ajax/poi/comment?_token=' + token),
      //   params: {
      //     wmpoiid: id,
      //     uuid: 'NxAlVM4plX_ixoEsoR4KJSuHBLo944rRZK5hwXfdReHfnuBqqar92I-K5PvFYuvi',
      //     platform: 3,
      //     partner: 4,
      //     page_offset: 0,
      //     comment_score_type: 0,
      //     page_size: 20,
      //     filter_type: 0,
      //     label_id: 0,
      //     userid: 280770501,
      //     xforwith: window.xforwith
      //   }
      // }
    });


    dispatch({
        type: COMMENT_LIST_DATA,
        obj: resp.data
    });

    dispatch({
        type: 'SETLOADSTATE',
        obj: true
    });
}