import React from 'react';

import Input from './Input.jsx';
import TipArea from './TipArea.jsx';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bill: null,
            inputBill: null,
            tip: null,
            people: null,
            totalTip: 0.00,
            totalBill: 0.00,
            activeTip: -1,
        }

        this.onBillChange = this.onBillChange.bind(this);
        this.onPeopleChange = this.onPeopleChange.bind(this);
        this.onTipChange = this.onTipChange.bind(this);
        this.resetData = this.resetData.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { bill: prevBill, tip: prevTip, people: prevPeople } = prevState;
        const { bill, tip, people } = this.state;

        if (bill !== prevBill || tip !== prevTip || people !== prevPeople) {
            let totalTip = bill * tip / 100 / people;
            let totalBill = bill / people + totalTip;
            
            // console.log(bill, prevBill);
            totalTip = Number.isFinite(totalTip) ? totalTip : 0.00;
            totalBill = Number.isFinite(totalBill) ? totalBill : 0.00;
            
            this.setState({ totalTip, totalBill });
        }
    }

    resetData() {
        this.setState({ bill: null, tip: null, people: null, activeTip: -1, inputBill: null });
    }

    onBillChange(value) {
        this.setState({ bill: value ? parseFloat(value) : null, inputBill: value });
    }

    onPeopleChange(value) {
        this.setState({ people: value });
    }

    onTipChange(value, index) {
        this.setState({ tip: value, activeTip: index });
    }

    render() {
        const { bill, activeTip, people, totalTip, totalBill, tip, inputBill } = this.state;
        return (
            <>
                <div className="left">
                    <div className="bill area">
                        <p>Bill</p>
                        <Input
                            value={inputBill ? inputBill : ''}
                            name="bill"
                            onFinish={this.onBillChange}
                        />
                    </div>
                    <TipArea
                        activeTip={activeTip}
                        inputValue={tip && activeTip === 6 ? tip : ''}
                        onTipChange={(value, index) => this.onTipChange(value, index)}
                    />
                    <div className="people area">
                        <p>Number of People</p>
                        <Input
                            name="people"
                            value={people ? people : ''}
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
                    <button className="reset" onClick={this.resetData}>
                        RESET
                    </button>
                </div>
            </>
        );
    }
}
