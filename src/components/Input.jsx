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
                    ? /^[\d.]*$/
                    : /^[\d]*$/;

        if (value.match(re) && !Number.isNaN(value)) {
            this.setState({ value });
        }
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <input
                    value={value}
                    onChange={(event) => {this.checkField(this.props.name, event.target.value)}}
                />
            </div>
        )
    }
}
