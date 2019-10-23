import { runCallBackFn } from './demo';

test('测试 runCallBackFn', () => {
    const func = jest.fn();
    runCallBackFn(func);
    expect(func).toBeCalled();
    // console.log(func.mock)
})

test('测试 runCallBackFn 2', () => {
    const func = jest.fn();
    runCallBackFn(func);
    runCallBackFn(func);
    expect(func.mock.calls.length).toBe(8);
})


test('测试 runCallBackFn 3', () => {
    const func = jest.fn(()=>{
        return 8888
    });
    runCallBackFn(func);
    // console.log(func.mock);
})

test('测试 runCallBackFn 4', () => {
    const func = jest.fn();
    func.mockReturnValueOnce('test opts')
    runCallBackFn(func);
    // console.log(func.mock);
})

test('测试 runCallBackFn 5', () => {
    const func = jest.fn();
    func.mockReturnValue('test opts')
    runCallBackFn(func);
    runCallBackFn(func);
    expect(func.mock.calls.length).toBe(2);
    expect(func.mock.results[0].value).toBe('test opts');
    console.log(func.mock);
})