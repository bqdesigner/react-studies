'use strict'

import React from 'react'

const Button = ({children, handleClick}) => (
    <button onClick={handleClick}>
        {children}
    </button>
)
// Criando propTypes
Button.propTypes = {
    handleClick: React.PropTypes.func.isRequired
}

// const Button = ({children, handleClick}) => (
//     <button onClick={handleClick}>
//         {children}
//     </button>
// )


export default Button
