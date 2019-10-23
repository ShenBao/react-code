import * as constants from './constants';

const defaultState = {
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
}

export default (state = defaultState, action) => {

    const newState = JSON.parse(JSON.stringify(state));

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

            newState.form[field] = newFieldObj;
            return newState;

        case constants.REGISTER_CHNAGE_INPUT_VALUE:

            console.log(action);

            const { form: { name, age, gender } } = state;

            if (!name.valid || !age.valid || !gender.valid) {
                alert('请填写正确的信息后重试');
                return;
            }
            
            return newState;
        default:
            return state;
    }
}