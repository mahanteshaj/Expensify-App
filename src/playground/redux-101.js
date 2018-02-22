import { createStore } from 'redux'
console.log('101')
const incrementCount = ({value=1}={}) => {
    return ({
        type: 'INCREMENT',
        value
        
       })
}
const decrementCount = ({value=1} = {}) => {
    return ({
        type: 'DECREMENT',
        value
    })
}
const setValue = ({value=undefined}= {}) => {
    return ({
        type: 'SET',
        value
        })
}
 const reset=()=>{
     return({type:"RESET"})
 }
//Reducers
//Never change the state or action

const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT': return {
            count: state.count + action.value
        }
        case 'DECREMENT': return {
            count: state.count - action.value
        }
        case 'RESET': return {
            count: 0
        }
        case '@@redux/INIT': return {
            count: 24
        }
        case 'SET':
            if (action.value)
                return { count: action.value }

        default: return state;
    }

})


const store = createStore(countReducer)


const unsubscribe = store.subscribe(() => {
    console.log('count is ', store.getState())
})
// store.dispatch({
//     type: 'INCREMENT',
//     value: 5
// })
// //unsubscribe()
// store.dispatch({
//     type: 'DECREMENT',
//     value: 3
// })
// store.dispatch({
//     type: 'DECREMENT',
//     value: 3
// })
// store.dispatch({
//     type: 'RESET'
// })
// store.dispatch({
//     type: 'SET',
//     value: 54
// })
store.dispatch(decrementCount({ value: 2 }))
store.dispatch(incrementCount({ value: 2 }))
store.dispatch(incrementCount())
store.dispatch(setValue())
store.dispatch(reset())
console.log('count is ', store.getState())
