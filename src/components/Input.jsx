import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.checkField = this.checkField.bind(this);
    }

    checkField(name, value) {
        const re = name === 'bill'
                    ? /^\d+\.?\d*$/
                    : /^[\d]+$/;

        if (value.match(re)) {
            this.setState({ value });
            this.props.onFinish(parseFloat(value));
        } else if (value === '') {
            this.setState({ value });
            this.props.onFinish(null);
        }
    }

    render() {
        const { value } = this.state;
        return (
            <div className={`input-area ${this.props.name}`}>
                <input
                    placeholder="0"
                    value={value}
                    onChange={(event) => {this.checkField(this.props.name, event.target.value)}}
                />
            </div>
        )
    }
}
