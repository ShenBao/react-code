import { fetchData, fetchData1, fetchData2 } from './fetchData';

test('测试 10 与 10 相等 test', () => {
    expect(10).toBe(10);
});

// beforeAll(() => {
//     console.log('beforeAll');
// })
// // 回调类型异步函数的测试
// test('fetchData 返回结果测试', (done) => {
//     var resData = {
//         "code": 200,
//         "data": true
//     }
//     fetchData((data) => {
//         expect(data).toEqual(resData);
//         // 如果不写 done()，当接口404会导致用例不执行
//         done();
//     })
// })

// test('fetchData1 返回结果测试', () => {
//     var resData = {
//         "code": 200,
//         "data": true
//     }
//     // 指定执行返回的 expect 数量
//     expect.assertions(1);
//     return fetchData1().then((res) => {
//         expect(res.data).toEqual(resData);
//     });
// })

// test('fetchData2 返回结果 404', () => {
//     // 指定执行返回的 expect 数量
//     expect.assertions(1);
//     return fetchData2().catch((e) => {
//         console.log(e.toString());
//         expect(e.toString().indexOf('404') > -1).toBe(true);
//     });
// })


// test('fetchData1 返回结果测试 toMatchObject', () => {
//     var resData = {
//         "code": 200,
//         "data": true
//     }
//     // fetchData1().then((res) => {
//     //     console.log(res);
//     // })
//     return expect(fetchData1()).resolves.toMatchObject({
//         data: resData
//     })
// })

// describe('测试代码分组归类', () => {
//     beforeAll(() => {
//         console.log('beforeAll');
//     })
// });
