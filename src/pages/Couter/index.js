import React from 'react';
import ReactDom from 'react-dom';
import image from '../../../public/image/106.jpg'
export default class Couter extends React.Component {
    render(){
        return (
            <div>
                I'm Couter!
                <img src={image} />
            </div>
        )
    }
}
