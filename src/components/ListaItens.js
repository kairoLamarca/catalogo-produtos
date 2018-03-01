import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Itens from './Itens';

export default class ListaItens extends Component {

    //1º
    // constructor(props) {
    //     super(props);
    //     console.log('Construindo a aplicação');
    // }

    //2º
    // componentWillMount() {
    //     console.log('Fazer alguma coisa antes de renderizar');
    // }

    //4º
    // componentDidMount() {
    //     console.log('Fazer alguma coisa depois da renderização');
    // }

    //3º
    render() {
        //console.log('Objeto é renderizado');
        return (
            <View>
                <Itens />
                <Itens />
                <Itens />
            </View>
        );
    }
}
