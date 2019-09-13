'use strict'

import React, { Component } from 'react'
// import Title from './title'
// import Button from './button'
// import Square from './square'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
// import Timer from './timer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }
  render() {
    return (
      <div>
        <label>
          <input type='checkbox' 
            checked={this.state.checked}
            onChange={() => {
              this.setState({ 
                checked: !this.state.checked 
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          />
          Mostrar conteúdo
        </label>
        {this.state.showContent && <div> Olha eu aqui! </div> }
      </div>
    )
  }
}

export default App

// // setState é assíncrono, passando um valor de callback para setState para alterar o valor de showContent baseado na marcação ou não do checkBox
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       checked: false,
//       showContent: false
//     }
//   }
//   render() {
//     return (
//       <div>
//         <label>
//           <input type='checkbox' 
//             checked={this.state.checked}
//             onChange={() => {
//               this.setState({ 
//                 checked: !this.state.checked 
//               }, () => {
//                 this.setState({
//                   showContent: this.state.checked
//                 })
//               })
//             }}
//           />
//           Mostrar conteúdo
//         </label>
//         {this.state.showContent && <div> Olha eu aqui! </div> }
//       </div>
//     )
//   }
// }

// // Trabalhando com eventos em formulário
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <form onSubmit={(e) => {
//             e.preventDefault()
//             console.log('event', e)
//           }}
//           onChange={(e) => {
//             console.log('name', e.target.name)
//             console.log('value', e.target.value)
//           }}
//         >       

//         <input type='name' name='name' />
//         <input type='email' name='email' />
//         <button type='submit'> Enviar </button>
//         </form>
//       </div>
//     )
//   }
// }

// // Trabalhando com Select
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       value: '2'
//     }
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <select value={this.state.value} onChange={(e) => {
//             this.setState({
//               value: e.target.value
//             })
//           }}>
//             <option value='1'> Opção 1 </option>
//             <option value='2'> Opção 2 </option>
//             <option value='3'> Opção 3 </option>
//           </select>
//         </form>
//       </div>
//     )
//   }
// }

// // Trabalhando com formulários: input text, radio e checkbox
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       value: 'Valor inicial',
//       checked: false
//     }
//   }
//     render() {
//     return (
//       <div>
//         <form>
//           <input type='text' value={this.state.value} onChange={(e) => {
//             this.setState({
//               value: e.target.value
//             })
//           }} />
//           <label>
//             <input 
//               type='checkbox'
//               checked={this.state.checked}
//               onChange={(e) => {
//                 this.setState({ checked: e.target.checked })
//               }}
//             />
//             Checkbox
//           </label>
//           <input type='radio' name='rd' value='1' /> Radio 1
//           <input type='radio' name='rd' value='2' /> Radio 2
//         </form>
//       </div>
//     )
//   }
// }

// // Trabalhando com propTypes
// class App extends Component {
//     render() {
//     return (
//       <div>
//         <Button handleClick={() => console.log('clicou')}>
//           Clique em mim
//         </Button>
//       </div>
//     )
//   }
// }

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
