import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ProdutoScreen({ route }) {
  const { id } = route.params;
  const [produto, setProduto] = useState({});

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => setProduto(res.data))
        .catch(() => alert("Erro ao buscar produto"));
    }, []);

    return (
        <View>
        <Card>
            <Card.Cover source={{ uri: produto.thumbnail }} />
            <Card.Content>
            <Text variant='titleLarge'>{produto.title}</Text>
            <Text>{produto.description}</Text>
            <Text>Preço: {produto.price} R$</Text>
            <Text>Categoria: {produto.category}</Text>
            </Card.Content>
        </Card>
        </View>
    );
}
