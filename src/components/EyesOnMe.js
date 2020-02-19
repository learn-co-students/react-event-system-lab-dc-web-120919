import React, {Component} from 'react';

class EyesOnMe extends Component {

    focusEvent = () => {
        console.log('Good!')
    }

    blurEvent = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return (
            <button onFocus={this.focusEvent} onBlur={this.blurEvent}>Eyes On Me!</button>
        )
    }
}

export default EyesOnMe;