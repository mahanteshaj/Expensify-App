import React from 'react'
import { connect } from 'react-redux'
import {DateRangePicker} from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate } from '../actions/filters'
export class ExpenseListFilters extends React.Component{
state={
    calendarFocused:null
}
    onDatesChange=({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)

    }
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({
            calendarFocused
        }))         
    }
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value)

    }
    onSelectChange = (e) => {
    console.log("clicked")
    e.target.value === 'Date' ? this.props.sortByDate() : this.props.sortByAmount()
}
    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}
                />
                <select onChange={this.onSelectChange}>
                    <option value="Date">Date </option>
                    <option value="Amount">Amount </option>
                </select>
                 <DateRangePicker 
                 startDate={this.props.filters.startDate}
                 endDate={this.props.filters.endDate}
                 onDatesChange={this.onDatesChange}
                 focusedInput={this.state.calendarFocused}
                 onFocusChange={this.onFocusChange}
                 isOutsideRange={()=>false}
                 numberOfMonths={1}
                 showClearDates={true}
                 >
                 </DateRangePicker>   

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters

    }
}
const mapDispatchToProps=(dispatch)=>({
    setTextFilter:(text)=>dispatch(setTextFilter(text)),
    sortByAmount:()=>dispatch(sortByAmount()),
    sortByDate:()=>dispatch(sortByDate()),
    setStartDate:()=>dispatch(setStartDate(startDate)),
    setEndDate:()=>dispatch(setEndDate(endDate))

})
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters); 