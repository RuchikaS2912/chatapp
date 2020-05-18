import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import React, { Component } from 'react'

export default class MyUploader extends Component {
    render() {
        return (
            <div>
                <FilePond allowMultiple={true} server="http://localhost:3000/issues"/>
            </div>
        )
    }
}


