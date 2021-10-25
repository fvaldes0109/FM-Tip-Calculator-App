import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.checkField = this.checkField.bind(this);
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
        return (
            <div className={`input-area ${name}`}>
                <input
                    placeholder="0"
                    value={value}
                    onChange={(event) => {this.checkField(name, event.target.value)}}
                />
            </div>
        )
    }
}
