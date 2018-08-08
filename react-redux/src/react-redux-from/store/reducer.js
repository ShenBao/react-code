
import {
    CHNAGE_INPUT_VALUE,
} from './actionTypes'

const defaultState = {
    form: {
        name: {
            valid: false,
            value: '',
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
}

export default (state = defaultState, action) => {

    if (action.type === CHNAGE_INPUT_VALUE) {

        const { field, value } = action.value;

        const newState = JSON.parse(JSON.stringify(state));

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

        newState.form[field] = newFieldObj;
        return newState;

    }

    return state;
}