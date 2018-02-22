import moment from 'moment'
import axios from 'axios'
const filterReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: moment().startOf('month'),
    endDate:moment().endOf('month')
}
const filterReducer = (state = filterReducerDefaultState, action) => {
   
    
    switch (action.type) {
        case 'SET_START_DATE': return {
            ...state, startDate: action.startDate
        }
        case 'SET_END_DATE': return {
            ...state, endDate: action.endDate
        }
        case 'SET_TEXT': return {
            ...state, text: action.text
        }
        case 'SORT_BY': 
        
            return {
            ...state, sortBy: action.sortBy
        }
        // case 'SORT_BY_DATE': return {
        //     ...state, sortBy: action.sortBy
        // }

        default:
            return state
    }
}
export default filterReducer;