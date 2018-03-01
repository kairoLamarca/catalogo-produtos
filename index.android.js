import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class catalogoProdutos extends Component {
  render() {    
    return (      
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('catalogoProdutos', () => catalogoProdutos);
