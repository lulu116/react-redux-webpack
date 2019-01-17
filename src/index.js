import React from 'react';
import ReactDom from 'react-dom';
import Hello from 'component/Hello';
import {Provider} from 'react-redux';
import getRouter from 'router/router';
import store from './redux/store'

/*if(module.hot) {
    module.hot.accept();
}*/
/*
* 包裹store
* */
ReactDom.render(<Provider store={store}>{getRouter()}</Provider>,document.getElementById('app'))
