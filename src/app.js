'use strict'

import React, { Component } from 'react'
// import Title from './title'
import Button from './button'
// import Square from './square'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
// import Timer from './timer'

class App extends Component {
    render() {
    return (
      <div>
        <Button handleClick={() => console.log('clicou')}>
          Clique em mim
        </Button>
      </div>
    )
  }
}

export default App

// // Trabalhando com Lifecycle
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       time: 0,
//       showTimer: true
//     }
//   }

//   componentWillMount () {
//     console.log('componentWillMount')
//   }

//   componentDidMount () {
//     console.log('componentDidMount')
//   }

//   render() {
//     return (
//       <div>
//         <Timer time={this.state.time}/>

//         <button onClick={() => {
//           this.setState({ time: this.state.time + 10 })
//         }}>Change props</button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       color: 'green'
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Square color={this.state.color} />
//         {['red', 'green', 'blue'].map((color) => (
//           <Button 
//             key={color}
//             handleClick={() => this.setState({color})}>
//             {color}
//           </Button>
//         ))}
//       </div>
//     )
//   }
// }

// // Usando constructor
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       text: 'Bruno'
//     }  
//   }
//   render() {
//     return (
//       <div className='container' onClick={() => this.setState({
//         text: 'Outro Bruno'
//       })}>
//         {this.state.text}
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <LikeButton />
//         <SearchButton />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className='container' onClick={(e) =>{
//         alert('clicou');
//       }}>
//            <Square />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className='container'>
//          {['blue', 'red', 'blue'].map((square, index) => (
//            <Square key={index} color={square}/>
//          ))}
//       </div>
//     )
//   }
// }

// // Usando class e para renderizar um elemento, passando React.Component para isso acontecer
// class App extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <Title name='Bruno' saudacao='tudo bem?'/>
//       </div>
//     )
//   }
// }

// // Criando com React.createClass
// const App = React.createClass({ 
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Bruno' saudacao='tudo bem?'/>
//       </div>
//     )
//   }
// })
