import { fromJS, setIn } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    form: {
        name: {
            valid: false,
            value: 'ame',
            error: ''
        },
        age: {
            valid: false,
            value: 0,
            error: ''
        },
        gender: {
            valid: false,
            value: '',
            error: ''
        }
    }
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.REGISTER_CHNAGE_INPUT_VALUE:
            console.log(action);

            const { field, value } = action.value;
            const newFieldObj = { value, valid: true, error: '' };

            switch (field) {
                case 'name': {
                    if (value.length >= 5) {
                        newFieldObj.error = '用户名最多4个字符';
                        newFieldObj.valid = false;
                    } else if (value.length === 0) {
                        newFieldObj.error = '请输入用户名';
                        newFieldObj.valid = false;
                    }
                    break;
                }
                case 'age': {
                    if (value > 100 || value <= 0) {
                        newFieldObj.error = '请输入1~100之间的数字';
                        newFieldObj.valid = false;
                    }
                    break;
                }
                case 'gender': {
                    if (!value) {
                        newFieldObj.error = '请选择性别';
                        newFieldObj.valid = false;
                    }
                    break;
                }
            }

            // const form = state.get('form');
            // form.merge({field: newFieldObj});
            // console.log(form);

            // return state.get('form', form);
            return state.updateIn(['form', field], newFieldObj);
            // return setIn(state, ['form', field], newFieldObj);

        default:
            return state;
    }
}