import React, {Component} from 'react';
import './errorMessage.css';
import img from './errorImg.jpg'


export default class ErrorMessage extends Component{

    render() {
        return(
            <>
                <img src={img} alt="error"></img>
            </>
        )
    }
}
