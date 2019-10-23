import React from 'react';
import { shallow } from 'enzyme';
import UndoList from '../../components/UndoList';

import { findTestWrapper } from '../../../../utils/testUtils';

// it('UndoList 组件包含一个 input 框', () => {
//     const wrapper = shallow(<UndoList />);
//     expect(wrapper).toMatchSnapshot();
// });

describe('ToDoList 组件', () => {
    it('count 为 0 时，列表无内容', () => {
        const wrapper = shallow(<UndoList list={[]} />);
        const countElem = findTestWrapper(wrapper, 'count');
        const listItems = findTestWrapper(wrapper, 'list-item');
        expect(countElem.text()).toEqual('0');
        expect(listItems.length).toEqual(0);
    });

    it('count 不为 0 时，列表展示内容', () => {
        const listData = ['学习 React', '学习 TDD', '学习单元测试'];
        const wrapper = shallow(<UndoList list={listData} />);
        const countElem = findTestWrapper(wrapper, 'count');
        const listItems = findTestWrapper(wrapper, 'list-item');
        expect(countElem.text()).toEqual('3');
        expect(listItems.length).toEqual(3);
    });

    it('列表展示内容, 要存在删除按钮', () => {
        const listData = ['学习 React', '学习 TDD', '学习单元测试'];
        const wrapper = shallow(<UndoList list={listData} />);
        const deleteItems = findTestWrapper(wrapper, 'delete-item');
        expect(deleteItems.length).toEqual(3);
    });

    it('列表展示内容, 要存在删除按钮，点击删除调用删除方法', () => {
        const listData = ['学习 React', '学习 TDD', '学习单元测试'];
        const index = 1;
        const fn = jest.fn();
        const wrapper = shallow(<UndoList list={listData} deleteItem={fn} />);
        const deleteItems = findTestWrapper(wrapper, 'delete-item');
        deleteItems.at(index).simulate('click');
        expect(fn).toHaveBeenLastCalledWith(index);
    });
});
