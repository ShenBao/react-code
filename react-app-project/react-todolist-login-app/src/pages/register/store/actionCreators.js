
import {
    REGISTER_CHNAGE_INPUT_VALUE,
} from './constants'

import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: REGISTER_CHNAGE_INPUT_VALUE,
    value
})
