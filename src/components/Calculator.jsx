import React from 'react';

import Input from './Input.jsx';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bill: null,
            tip: null,
            people: null,
        }

        this.onFieldChange = this.onFieldChange.bind(this);
    }

    calculate() {

    }

    onFieldChange(name, value) {
        console.log("Cambio", name, value);
    }

    render() {
        return (
            <div>
                <p>Bill</p>
                <Input name="bill" onChange={(value) => this.onFieldChange('bill', value)} />
            </div>
        );
    }
}
