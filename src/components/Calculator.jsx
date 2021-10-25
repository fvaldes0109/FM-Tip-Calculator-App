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
            totalTip: 0.00,
            totalBill: 0.00,
        }

        this.onBillChange = this.onBillChange.bind(this);
        this.onPeopleChange = this.onPeopleChange.bind(this);
        this.onTipChange = this.onTipChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { bill: prevBill, tip: prevTip, people: prevPeople } = prevState;
        const { bill, tip, people } = this.state;

        if (bill !== prevBill || tip !== prevTip || people !== prevPeople) {
            let totalTip = bill * tip / 100 / people;
            let totalBill = bill / people + totalTip;
            
            totalTip = Number.isFinite(totalTip) ? totalTip : 0.00;
            totalBill = Number.isFinite(totalBill) ? totalBill : 0.00;
            
            console.log(this.state, prevState);
            this.setState({ totalTip, totalBill });
        }
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
        const { totalTip, totalBill } = this.state;
        return (
            <>
                <div className="left">
                    <div className="bill area">
                        <p>Bill</p>
                        <Input
                            name="bill"
                            onFinish={this.onBillChange}
                        />
                    </div>
                    <TipArea onTipChange={this.onTipChange} />
                    <div className="people area">
                        <p>Number of People</p>
                        <Input
                            name="people"
                            onFinish={this.onPeopleChange}
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="output-field">
                        <div className="texts">
                            <p className="amount">Tip Amount</p>
                            <p className="person">/ person</p>
                        </div>
                        <div className="price">
                            ${totalTip}
                        </div>
                    </div>
                    <div className="output-field">
                        <div className="texts">
                            <p className="amount">Tip Amount</p>
                            <p className="person">/ person</p>
                        </div>
                        <div className="price">
                            ${totalBill}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
