import { GET_LIST_DATA, LEFT_CLICK,ADD_SELECTI_ITEM,MINUS_SELECTI_ITEM,SHOW_CHOOSE_CONTENT,CLEAR_CAR  } from './actionTypes';
import axios from 'axios';
import qs from 'component/queryString';
export const itemClick = (obj) =>{
    return {
        type: LEFT_CLICK,
        obj: obj
    }
}

export const getListData = () =>async(dispatch)=>{
    let id = qs('id');
    window.Rohr_Opt.Flag = 100011;
    let token = window.Rohr_Opt.reload('/ajax/v8/poi/food?wm_poi_id=' + id);
    let resp = await axios({
      method: 'get',
      url: './json/food.json',//'http://localhost:3000/api',
      data: {
        url: encodeURIComponent('http://i.waimai.meituan.com/ajax/v8/poi/food?_token=' + token),
        params: {
          wm_poi_id: id,
          uuid: "EY-OMKnhbOGz_6vx4if6a40YX74q6C5oAKCH06EaIMDRAi7FCTXgzITkm1jGsfxE",
          platform: '3',
          partner: '4',
          userid: '280770501',
          xforwith: window.xforwith
        }
      }
    });


    dispatch({
        type: GET_LIST_DATA,
        obj: resp.data
    });
}

export const addSelectItem = (obj) =>{
    return {
        type: ADD_SELECTI_ITEM,
        obj: obj
    }
}
export const minusSelectItem = (obj) =>{
    return {
        type: MINUS_SELECTI_ITEM,
        obj: obj
    }
}

export const showChoose = (obj) =>{
    return {
        type: SHOW_CHOOSE_CONTENT,
        obj: obj
    }
}
export const clearCar = (obj) =>{
    return {
        type: CLEAR_CAR,
        obj: obj
    }
}