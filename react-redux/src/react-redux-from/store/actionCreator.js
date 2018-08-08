
import {
    CHNAGE_INPUT_VALUE,
} from './actionTypes'

import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHNAGE_INPUT_VALUE,
    value
})
