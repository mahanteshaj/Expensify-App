import React from 'react'
import ReactDOM from 'react-dom'
class Check extends React.Component {
    buttonHandler(){
        console.log('the button is clicked');
        this.anotherFunction()
    }

    render() {
        return (<div><h1>
            Checking

        </h1>
        <button onClick={this.buttonHandler}>
        click here
        </button>
        
        </div>

        )
    }

}
anotherFunction=()=>{
    console.log('this is for additional')
    // Addtion:(number1,number2)=>{
        
    //         console.log("this is to print")
        

    // }
}

ReactDOM.render(<Check />, document.getElementById('app'))