import React from 'react';
import ReactDom from 'react-dom';
import 'styles/index.css'
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    _hanleClick(){
        this.setState({
            count: ++this.state.count
        })
    }
    render(){
        return (
            <div className='page-box'>
                I'm home!
                当前计数: {this.state.count}<br/>
                <button onClick={()=> this._hanleClick()}>计数：自增</button>
            </div>
        )
    }
}
