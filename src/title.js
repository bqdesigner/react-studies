'use strict'

import React from 'react'

const Title = React.createClass({
    render: function() {
        return (
            <h1> Olá, {this.props.name}, {this.props.saudacao}!</h1>
        )
    }
})

export default Title