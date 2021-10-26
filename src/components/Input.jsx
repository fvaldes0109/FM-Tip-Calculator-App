import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false,
        }

        this.checkField = this.checkField.bind(this);
        this.setFocus = this.setFocus.bind(this)
    }

    setFocus(flag) {
        this.setState({ focused: flag })
    }

    checkField(name, value) {
        const re = name === 'bill'
                    ? /^\d+\.?\d*$/
                    : /^[\d]+$/;

        if (value.match(re)) {
            this.props.onFinish(value);
        } else if (value === '') {
            this.props.onFinish(null);
        }
    }

    render() {
        const { value, name } = this.props;
        const { focused } = this.state;
        return (
            <div className={`input-area ${name} ${focused ? 'focused' : ''} ${value === '0' ? 'error-input' : ''} `}>
                <img
                    aria-hidden="true"
                    alt=""
                    src={`./images/icon-${name === 'bill' ? 'dollar' : 'person'}.svg`}
                />
                <input
                    size="3"
                    placeholder="0"
                    value={value}
                    onChange={(event) => {this.checkField(name, event.target.value)}}
                    onFocus={() => this.setFocus(true)}
                    onBlur={() => this.setFocus(false)}
                />
            </div>
        )
    }
}
