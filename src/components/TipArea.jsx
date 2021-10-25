import React from 'react';

import TipButton from './TipButton.jsx';

export default class TipArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTip: null,
        }

        this.tipSelect = this.tipSelect.bind(this);
    }

    tipSelect(index, value) {
        this.setState({ activeTip: index });
        this.props.onTipChange(value);
    }

    render() {
        const { activeTip } = this.state;
        return(
            <div className="area tips">
                <p>Select Tip %</p>
                <TipButton isActive={activeTip === 1 ? "true" : "false"} pcvalue={5} onFinish={() => this.tipSelect(1, 5)} />
                <TipButton isActive={activeTip === 2 ? "true" : "false"} pcvalue={10} onFinish={() => this.tipSelect(2, 10)} />
                <TipButton isActive={activeTip === 3 ? "true" : "false"} pcvalue={15} onFinish={() => this.tipSelect(3, 15)} />
                <TipButton isActive={activeTip === 4 ? "true" : "false"} pcvalue={25} onFinish={() => this.tipSelect(4, 25)} />
                <TipButton isActive={activeTip === 5 ? "true" : "false"} pcvalue={50} onFinish={() => this.tipSelect(5, 50)} />
            </div>
        );
    }
}