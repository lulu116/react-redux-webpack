//一个项目中可能 有很多的reducers，因此将他们整合到一起
//整合整个reducer
import counter from './reducers/counter';
import {combineReducers} from 'redux';


//组件reducer
import userInfo from './reducers/userInfo';

export default combineReducers({
    counter,
    userInfo
})


//自己封装的combineReducers
/*
export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo,action)
    }
}*/
