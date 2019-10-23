import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from '../../index';

describe('ToDoList 组件', () => {
    it('初始化列表为空', () => {
        const wrapper = shallow(<ToDoList />);
        expect(wrapper.state('undoList')).toEqual([]);
    });

    it('给 Header 传递一个增加 undolist 内容的方法', () => {
        const wrapper = shallow(<ToDoList />);
        const Header = wrapper.find('Header');
        expect(Header.prop('addUndoItem')).toBeTruthy();
    });

    it('addUndoItem 执行时，undoList 应该新增内容', () => {
        const wrapper = shallow(<ToDoList />);
        wrapper.instance().addUndoItem('学习 React');
        expect(wrapper.state('undoList').length).toBe(1);
        expect(wrapper.state('undoList')[0]).toBe('学习 React');
        wrapper.instance().addUndoItem('学习 React 2');
        expect(wrapper.state('undoList').length).toBe(2);
    });

    it('undolist 传递 list 数据，及 deleteItem 方法', () => {
        const wrapper = shallow(<ToDoList />);
        const UndoList = wrapper.find('UndoList');
        expect(UndoList.prop('list')).toBeTruthy();
        expect(UndoList.prop('deleteItem')).toBeTruthy();
    });

    it('当 deleteItem 被执行的时候，UndoList 应该删除内容', () => {
        const listData = ["学习 React", '学习 TDD', '学习单元测试']
        const wrapper = shallow(<ToDoList />);
        wrapper.setState({
            undoList: listData
        })
        wrapper.instance().deleteItem(1);
        expect(wrapper.state('undoList')).toEqual(["学习 React", '学习单元测试']);
    });

})
