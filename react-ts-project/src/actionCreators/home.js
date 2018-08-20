import {
    homeActionTypes
} from '../actionTypes'

export const getHomeTitle = (value) => ({
    type: homeActionTypes.CHNAGE_INPUT_VALUE,
    value
})
