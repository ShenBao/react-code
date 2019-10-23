import axios from "axios";

// 传入 callback 函数进行处理
export const fetchData = (fn) => {
    axios.get('http://192.168.1.105/src/data.json').then((res) => {
        fn(res.data);
    });
}

// 返回 promise 交给后续程序处理
export const fetchData1 = () => {
    return axios.get('http://192.168.1.105/src/data.json');
}

export const fetchData2 = () => {
    return axios.get('http://192.168.1.105/src/data404.json');
}
