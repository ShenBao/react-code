// // var math = require('./math');

// // var { add, minus } = math;

// import { add, minus } from './math'
// import { throws } from 'assert';

// test('测试 3 + 3', () => {
//     expect(add(3, 3)).toBe(6);
// });
// test('测试 3 - 3', () => {
//     expect(minus(3, 3)).toBe(0);
// });

test('测试 10 与 10 相等', () => {
    expect(10).toBe(18);
});

// test('测试对象内容相等', () => {
//     var obj = {
//         a: "test"
//     }
//     expect(obj).toEqual({ a: "test" });
// });

// test('toBeNull', () => {
//     var a = null
//     expect(a).toBeNull();
// });

// test('toBeUndefined', () => {
//     var a = undefined
//     expect(a).toBeUndefined();
// });

// test('toBeDefined', () => {
//     var a = 88
//     expect(a).toBeDefined();
// });

// test('toBeTruthy', () => {
//     var a = true;
//     expect(a).toBeTruthy();
// });

// test('toBeFalsy', () => {
//     var a = false;
//     expect(a).toBeFalsy();
// });

// test('not toBeFalsy', () => {
//     var a = true;
//     expect(a).not.toBeFalsy();
// });

// // 比这个数字大
// test('toBeGreaterThan', () => {
//     var a = 10;
//     expect(a).toBeGreaterThan(9);
// });

// // 比这个数字小
// test('toBeLessThan', () => {
//     var a = 10;
//     expect(a).toBeLessThan(99);
// });

// // 大于等于
// test('toBeGreaterThanOrEqual', () => {
//     var a = 10;
//     expect(a).toBeGreaterThanOrEqual(5);
// });

// // 小于等于
// test('toBeLessThanOrEqual', () => {
//     var a = 10;
//     expect(a).toBeLessThanOrEqual(88);
// });

// test('toBeCloseTo', () => {
//     var a = 0.1 + 0.2;
//     expect(a).toBeCloseTo(0.3);
// });

// // String
// test('toMatch', () => {
//     var a = "jest test case";
//     expect(a).toMatch('test');
// });

// // Array, Set
// test('toContain', () => {
//     var arr = ['jest', 'test', 'case'];
//     expect(arr).toContain('test');
// });

// test('toContain Set', () => {
//     var arr = ['jest', 'test', 'case'];
//     var data = new Set(arr);
//     expect(data).toContain('test');
// });


// // 异常
// function throwErrorFunc() {
//     throw new Error('this is new error');
// }
// test('toThrow', () => {
//     expect(throwErrorFunc).toThrow();
// });

// test('toThrow message', () => {
//     expect(throwErrorFunc).toThrow('this is new error');
// });

// function notThrowErrorFunc() {
// }
// test('toThrow not', () => {
//     expect(notThrowErrorFunc).not.toThrow();
// });


