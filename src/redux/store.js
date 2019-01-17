//触发 reducers,触发 action

import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers';
import thunkMiddleware from 'redux-thunk';
/*我们发现：别的action都是返回action对象 {type:xxx},但是我们现在这个action  getUserInfo返回函数

为了让action创建函数除了返回对象，还可以返回函数，则需要reudx-thunk


简单来说，中单件就是action在到达 reducer，先经过中间件处理，我们知道 reducer能处理的{type: xxx}，所以用中间件处理函数形式的action
再把他们转为标准的action给reducer，这就是redux-thunk的作用
* */
let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));
export default store;
