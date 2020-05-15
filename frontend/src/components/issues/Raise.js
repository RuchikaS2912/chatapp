import React, { Component } from 'react'
import FormDrop from './FormDrop'

export default class Raise extends Component {
    render() {
        return (
            <div>
                <p><b>Please select category before selecting sub-category</b></p>
                <FormDrop/>
                
            </div>
        )
    }
}
