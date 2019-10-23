export function add(a, b) {
    return a + b;
}

export function minus(a, b) {
    return a - b;
}

// module.exports = {
//     add,
//     minus
// }

// if (result !== 10) {
//     throw Error(`3 + 7 应该等于 ${result}, 但结果是 ${expected}`)
// }

// var result = minus(9, 9);
// var expected = 0;

// if (result !== 0) {
//     throw Error(`9 - 9 应该等于 ${result}, 但结果是 ${expected}`)
// }

// function expext(result) {
//     return {
//         toBe: function (actual) {
//             if (result !== actual) {
//                 throw Error(`预期值与实际值不符`)
//             }
//         }
//     }
// }

// expect(add(3, 3)).toBe(6);
// expect(minus(3, 3)).toBe(0);
// expect(minus(6, 3)).toBe(3);

// function expect(result) {
//     return {
//         toBe: function (actual) {
//             if (result !== actual) {
//                 throw Error(`预期值与实际值不符，预期值是${actual}, 结果值是${result}`);
//             }
//         },
//     };
// }

// function test(desc, fn) {
//     try {
//         fn();
//         console.log(`${desc}, 通过测试`);
//     } catch (error) {
//         console.log(`${desc}, 没有通过测试; ${error}`);
//     }
// }

// test('测试 3 + 3', () => {
//     expect(add(3, 3)).toBe(6);
// });
// test('测试 3 - 3', () => {
//     expect(minus(3, 3)).toBe(0);
// });
