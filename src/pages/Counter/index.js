import React,{Component} from 'react';
import {increment,decrement,reset} from '../../redux/actions/counter';
//将counter组件及redux联合起来，才能获取redux的状态，并且能发射出action
//容器组件就是使用store.subscribe()从redux.state树中读取部分数据，并通过props来把这些数据提供给要渲染的组件。,你可以手工来开发容器组件，但建议使用
//react-redux库的connect()方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。

//connect接收两个参数，1 mapStateToProps，就是把redux 的state,转成组件 的props 2. mapDispatchToProps把发射的action方法，转成props属性函数
import {connect} from 'react-redux';
class Counter extends Component{
    render() {
        const {counter} = this.props;
        // console.log(counter.count)
        return (
            <div>
                <div>当前计数为(显示redux计数):{counter.count}</div>
                <button onClick={() => this.props.increment()}>自增</button>
                <button onClick={() => this.props.decrement()}>自减</button>
                <button onClick={() => this.props.reset()}>重置</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('1111111111111111111111',state)
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
