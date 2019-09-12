'use strict'

import React from 'react'

// Renderizando com funções puras, passando para a funçaõ shorthand notation
const Title = ({ name, saudacao}) => (
    <h1>Olá {`${name}, ${saudacao}`}!</h1> 
)
Title.defaultProps = {
    name: 'Mano jhow',
    saudacao: 'salve!'
}

// const Title = React.createClass({
//     getDefaultProps: function(){
//         return {
//             name: 'Desconhecido'
//         }
//     },
//     render: function() {
//         return (
//             <h1> Olá, {this.props.name + ', ' + this.props.saudacao}!</h1>
//         )
//     }
// })

export default Title
