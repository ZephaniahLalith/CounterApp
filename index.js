import {Component} from "react"
import "./index.css"
class Counter extends Component{
    state={count:0}
    onIncrement=()=>{
        this.setState(prevState=>{
          return {count:prevState.count+1}
        })
      }
    onDecrement=()=>{
        this.setState(prevState=>{
            return {count:prevState.count-1}
          })
    }
    render(){
        const {count}=this.state
       return <div className="container">
       <h1 className="title"> Counter </h1>
       <p class="countxt">{count}</p>
       <div className="buttons">
         <button onClick={this.onIncrement}>Increase</button>
         <button onClick={this.onDecrement}
         >Decrease</button>
       </div>
     </div>
    }
}

export  default Counter