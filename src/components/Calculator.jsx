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
            inputPeople: null,
            totalTip: Number(0.00).toFixed(2),
            totalBill: Number(0.00).toFixed(2),
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
            
            totalTip = Number(totalTip).toFixed(2);
            totalBill = Number(totalBill).toFixed(2);

            this.setState({ totalTip, totalBill });
        }
    }

    resetData() {
        this.setState({
            bill: null, tip: null, people: null, activeTip: -1, inputBill: null, inputPeople: null,
        });
    }

    onBillChange(value) {
        this.setState({ bill: value ? parseFloat(value) : null, inputBill: value });
    }

    onPeopleChange(value) {
        this.setState({ people: value ? parseInt(value) : null, inputPeople: value});
    }

    onTipChange(value, index) {
        this.setState({ tip: value, activeTip: index });
    }

    render() {
        const { activeTip, totalTip, totalBill, tip, inputBill, inputPeople } = this.state;
        const buttonDisabled = !inputPeople && !tip && !inputBill ? true : false;
        return (
            <>
                <div className="left">
                    <div className="bill area">
                        <p className="fieldname">Bill</p>
                        <Input
                            value={inputBill ? inputBill : ''}
                            name="bill"
                            onFinish={this.onBillChange}
                        />
                    </div>
                    <div className="tip area">
                        <p className="fieldname">Select Tip %</p>
                        <TipArea
                            activeTip={activeTip}
                            inputValue={tip && activeTip === 6 ? tip : ''}
                            onTipChange={(value, index) => this.onTipChange(value, index)}
                        />
                    </div>
                    <div className="people area">
                        <div className="upper-text">
                            <p className="fieldname">Number of People</p>
                            <p className={inputPeople === '0' ? 'error-message' : 'invisible'}>
                                Can't be zero
                            </p>
                        </div>
                        <Input
                            name="people"
                            value={inputPeople ? inputPeople : ''}
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
                        <p className="price">
                            ${totalTip}
                        </p>
                    </div>
                    <div className="output-field">
                        <div className="texts">
                            <p className="amount">Total</p>
                            <p className="person">/ person</p>
                        </div>
                        <p className="price">
                            ${totalBill}
                        </p>
                    </div>
                    <button className="reset" onClick={this.resetData} disabled={buttonDisabled}>
                        RESET
                    </button>
                </div>
            </>
        );
    }
}
