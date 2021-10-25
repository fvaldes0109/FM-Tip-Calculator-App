import React from 'react';

import Input from './Input.jsx';
import TipArea from './TipArea.jsx';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bill: null,
            tip: null,
            people: null,
        }

        this.onBillChange = this.onBillChange.bind(this);
        this.onPeopleChange = this.onPeopleChange.bind(this);
        this.onTipChange = this.onTipChange.bind(this);
    }

    calculate() {

    }

    onBillChange(value) {
        this.setState({ bill: value });
    }

    onPeopleChange(value) {
        this.setState({ people: value });
    }

    onTipChange(value) {
        this.setState({ tip: value });
    }

    render() {
        return (
            <>
                <div className="bill area">
                    <p>Bill</p>
                    <Input
                        name="bill"
                        onFinish={(value) => this.onBillChange(value)}
                    />
                </div>
                <TipArea onTipChange={(value) => this.onTipChange(value)} />
                <div className="people area">
                    <p>Number of People</p>
                    <Input
                        name="people"
                        onFinish={(value) => this.onBillChange(value)}
                    />
                </div>
            </>
        );
    }
}
