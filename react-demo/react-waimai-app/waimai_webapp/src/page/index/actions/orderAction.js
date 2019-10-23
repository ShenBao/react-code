import { ORDER_DATA } from './actionTypes';
import { CHANGEREADYSTATE } from 'component/ScrollView/scrollViewActionsTypes.js';
import axios from 'axios';

export const getOrderData = (page)=> async (dispatch) =>{
    dispatch({
        type: CHANGEREADYSTATE,
        obj: false
    });
    let resp = await axios({
        method: 'get',
        url: './json/orders.json',
        // data: {
        //     url: 'http://i.waimai.meituan.com/order/ajax/list',
        //     params: {
        //         cursor: '',
        //         category: 0,
        //         type: 0,
        //         userid: 280770501,
        //     }
        // }
    });
    dispatch({
        type: ORDER_DATA,
        currentPage: page, 
        obj: resp.data
    });
    dispatch({
        type: CHANGEREADYSTATE,
        obj: true
    });


}