import React, { Component } from 'react'
import TodoItens from './TodoItens';


class TodoList extends Component {

    constructor(props){
        super(props)
        this.state={
            tarefa: '',
            itens: []
        }

        this.addItem = this.addItem.bind(this)
        this.log = this.log.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(e) {
        let state = this.state
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            }
            this.setState({itens: [...state.itens, newItem] })
        }

        e.preventDefault()
        this.setState({ tarefa: ''})       
    }

    log(){
        console.log(this.state.itens)
    }

    deleteItem(key) {
        console.log('Item a ser deletado' + key)
        let filtro = this.state.itens.filter((item) =>{
            return(
                item.key !== key
            )
        })
        this.setState({itens: filtro})

    }

    render(){
        return (
            <div>
              <form onSubmit={this.addItem}>
                  <input className='text-input' type="text" name="tarefa" placeholder="Nova Tarefa" 
                    value={this.state.tarefa} onChange={ (ev) => this.setState({tarefa: ev.target.value})}
                    ref={ (event) => this._tarefaInput = event } />

                <button className='btn' type='submit'>Adicionar</button>
              </form>
            {/* <button onClick={this.log}>LOG</button> */}

            <TodoItens lista={this.state.itens} delete={this.deleteItem}/>

            </div>
          );
    }
  
}

export default TodoList
