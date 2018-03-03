import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

    //1º
    constructor(props) {
        super(props);
        //console.log('Construindo a aplicação');

        this.state = { listaItens: [] };
    }

    //2º
    componentWillMount() {
        //console.log('Fazer alguma coisa antes de renderizar');

        //requisição HTTP
        //retorna uma promise
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState({ listaItens: response.data }); })
            .catch(() => console.log('erro'));
    }

    //4º
    // componentDidMount() {
    //     console.log('Fazer alguma coisa depois da renderização');
    // }

    //3º
    render() {
        //console.log('Objeto é renderizado');
        return (
            <ScrollView style={{ backgroundColor: '#DDD' }}>
                {this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
            </ScrollView>
        );
    }
}
