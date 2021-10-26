import React from 'react';

import TipButton from './TipButton.jsx';

export default class TipArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false,
        }

        this.tipSelect = this.tipSelect.bind(this);
        this.checkField = this.checkField.bind(this);
        this.setFocus = this.setFocus.bind(this);
    }

    tipSelect(index, value) {
        this.props.onTipChange(value, index);
    }
    
    checkField(event) {
        const value = event.target.value;
        if (value.match(/^\d+.?\d*$/)) {
            this.props.onTipChange(parseFloat(value), 6);
        } else if (value === '') {
            this.props.onTipChange(null, 6);
        }
    }

    setFocus(flag) {
        this.setState({ focused: flag })
    }

    render() {
        const { activeTip, inputValue } = this.props;
        const { focused } = this.state;
        return(
            <div className="grid-container">
                <TipButton isActive={activeTip === 1 ? "true" : "false"} pcvalue={5} onFinish={() => this.tipSelect(1, 5)} />
                <TipButton isActive={activeTip === 2 ? "true" : "false"} pcvalue={10} onFinish={() => this.tipSelect(2, 10)} />
                <TipButton isActive={activeTip === 3 ? "true" : "false"} pcvalue={15} onFinish={() => this.tipSelect(3, 15)} />
                <TipButton isActive={activeTip === 4 ? "true" : "false"} pcvalue={25} onFinish={() => this.tipSelect(4, 25)} />
                <TipButton isActive={activeTip === 5 ? "true" : "false"} pcvalue={50} onFinish={() => this.tipSelect(5, 50)} />
                <input
                    className={`tip-input ${focused ? 'focused' : ''}`}
                    placeholder="Custom"
                    value={inputValue}
                    onChange={this.checkField}
                    onFocus={() => this.setFocus(true)}
                    onBlur={() => this.setFocus(false)}
                />
            </div>
        );
    }
}
