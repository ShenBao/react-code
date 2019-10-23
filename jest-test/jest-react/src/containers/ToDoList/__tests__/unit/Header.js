import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

import { findTestWrapper } from './../../../../utils/testUtils';

describe('Header 组件', () => {
    it('渲染正常', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
    it('组件包含一个 input 框', () => {
        const wrapper = shallow(<Header />);
        // const inputElem = wrapper.find('[data-test="input"]');
        const inputElem = findTestWrapper(wrapper, 'input');
        expect(inputElem.length).toBe(1);
    });

    it('组件 input 框, 初始化应该为空', () => {
        const wrapper = shallow(<Header />);
        // const inputElem = wrapper.find('[data-test="input"]');
        const inputElem = findTestWrapper(wrapper, 'input');
        expect(inputElem.prop('value')).toEqual('');
    });

    it('input 框, 用户输入时，会跟随变化', () => {
        const wrapper = shallow(<Header />);
        // const inputElem = wrapper.find('[data-test="input"]');
        const inputElem = findTestWrapper(wrapper, 'input');
        const uesrInput = 'Jest test input';
        inputElem.simulate('change', {
            target: {
                value: uesrInput
            }
        })
        expect(wrapper.state('value')).toEqual(uesrInput);
        // const newInputElem = wrapper.find('[data-test="input"]');
        // expect(newInputElem.prop('value')).toEqual(uesrInput);
    });
    it('input 框按回车，如果 input 无内容，无操作', () => {
        const fn = jest.fn();
        const wrapper = shallow(<Header addUndoItem={fn} />);
        // const inputElem = wrapper.find('[data-test="input"]');
        const inputElem = findTestWrapper(wrapper, 'input');
        wrapper.setState({
            value: ''
        });
        inputElem.simulate('keyUp', {
            keyCode: 13
        });
        expect(fn).not.toHaveBeenCalled();
    });

    it('input 框按回车是，如果 input 有内容，函数被调用有操作', () => {
        const fn = jest.fn();
        const wrapper = shallow(<Header addUndoItem={fn} />);
        // const inputElem = wrapper.find('[data-test="input"]');
        const inputElem = findTestWrapper(wrapper, 'input');
        wrapper.setState({
            value: '学习 React Jest'
        });
        inputElem.simulate('keyUp', {
            keyCode: 13
        });
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith('学习 React Jest');
    });

    it('input 框按回车，如果 input 有内容，应该被清空', () => {
        const fn = jest.fn();
        const wrapper = shallow(<Header addUndoItem={fn} />);
        // const inputElem = wrapper.find('[data-test="input"]');
        const inputElem = findTestWrapper(wrapper, 'input');
        wrapper.setState({
            value: '学习 React Jest'
        });
        inputElem.simulate('keyUp', {
            keyCode: 13
        });
        // const newInputElem = wrapper.find('[data-test="input"]');
        const newInputElem = findTestWrapper(wrapper, 'input');
        expect(newInputElem.prop('value')).toBe('');
    });
});
