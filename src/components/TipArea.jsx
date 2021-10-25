import React from 'react';

import TipButton from './TipButton.jsx';

export default class TipArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTip: null,
            inputValue: '',
        }

        this.tipSelect = this.tipSelect.bind(this);
        this.checkField = this.checkField.bind(this);
    }

    tipSelect(index, value) {
        this.setState({ activeTip: index, inputValue: '' });
        this.props.onTipChange(value);
    }
    
    checkField(event) {
        const value = event.target.value;
        if (value.match(/^\d+.?\d*$/)) {
            this.setState({ inputValue: value, activeTip: null });
            this.props.onTipChange(parseFloat(value));
        } else if (value === '') {
            this.setState({ inputValue: value, activeTip: null });
            this.props.onTipChange(null);
        }
    }

    render() {
        const { activeTip, inputValue } = this.state;
        return(
            <div className="area tips">
                <p>Select Tip %</p>
                <TipButton isActive={activeTip === 1 ? "true" : "false"} pcvalue={5} onFinish={() => this.tipSelect(1, 5)} />
                <TipButton isActive={activeTip === 2 ? "true" : "false"} pcvalue={10} onFinish={() => this.tipSelect(2, 10)} />
                <TipButton isActive={activeTip === 3 ? "true" : "false"} pcvalue={15} onFinish={() => this.tipSelect(3, 15)} />
                <TipButton isActive={activeTip === 4 ? "true" : "false"} pcvalue={25} onFinish={() => this.tipSelect(4, 25)} />
                <TipButton isActive={activeTip === 5 ? "true" : "false"} pcvalue={50} onFinish={() => this.tipSelect(5, 50)} />
                <input
                    className="tip-input"
                    placeholder="CUSTOM"
                    value={inputValue}
                    onChange={this.checkField}
                />
            </div>
        );
    }
}
