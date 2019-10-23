import { generateConfig1, generateConfig2 } from "./11-snapshot";
test("测试 generateConfig1 函数", () => {
    expect(generateConfig1()).toMatchSnapshot();
});
test("测试 generateConfig2 函数", () => {
    expect(generateConfig2()).toMatchSnapshot({
        // 用于匹配时间类变化的值
        time: expect.any(Date)
    });
});