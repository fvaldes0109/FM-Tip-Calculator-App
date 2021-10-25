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

        this.onBillChange = this.onBillChange.bind(this);
    }

    calculate() {

    }

    onBillChange(value) {
        this.setState({ bill: value });
    }

    onPeopleChange(value) {
        this.setState({ people: value });
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
                <div className="tips area">
                    <p>Select Tip %</p>
                    
                </div>
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
