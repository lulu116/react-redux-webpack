export const GET_USER_INFO_REQUEST = 'userInfo/GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'userInfo/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'userInfo/GET_USER_INFO_FAIL';

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}
function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}
function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}
export function getUserInfo() {
    return function (dispatch) {
        // dispatch(getUserInfoRequest());
        //http://localhost:8888 指的是output.path
        return fetch('http://localhost:8888/api/user1.json')
            .then((response => {
                console.log('response',response)
                return response.json()
            }))
            .then((json) => {
                console.log('=================>success')
                dispatch(getUserInfoSuccess(json))
            })
            .catch(() => {
                //console.log('=================>error')
                dispatch(getUserInfoFail())
            })
    }
    /*return {
        types: [GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL, GET_USER_INFO_REQUEST],
        promise: client => client.get('http://localhost:8888/api/user1.json'),
        /!*afterSuccess: (dispatch, getState, response) => {
            //请求成功后执行的函数
        },
        otherData: otherData*!/
    }*/
}
