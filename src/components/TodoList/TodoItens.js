import React, { Component } from 'react'

class TodoItens extends Component{

    constructor(props){
        super(props)
        this.state={}

        this.delete = this.delete.bind(this)

    }

    delete(key) {
        this.props.delete(key)

    }

    dataAtualFormatada(){
        let data = new Date(),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'),
            ano  = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
    
    

    render() {
        return(
            <div>
                <h3>Lista de Tarefas</h3>

                <table className='tabela'>
                    <tr>
                        <th>Data</th>
                        <th>Descrição da Tarefa</th>
                        <th>Observação</th>
                    </tr>
                    {this.props.lista.map((item) => {
                        return(
                            <>
                                <tr>
                                    <td>{this.dataAtualFormatada()}</td>
                                    <td onClick={ () => this.delete(item.key) } key={item.key}>{item.text}</td>
                                    <td>Para deletar as tarefas basta clicar 2x sobre elas</td>
                                </tr>  

                            </>                                                                                
                        )
                    })}
                    
                    </table>
                
            </div>
        )
    }
}

export default TodoItens