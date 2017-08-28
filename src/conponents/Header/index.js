import React from 'react';
import './index.less'
export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <p>
                    {this.props.title}
                </p>
            </div>
        )
    }
}