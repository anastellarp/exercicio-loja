import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ListaProdutosScreen({ navigation, route }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

    useEffect(() => {
            axios.get(`https://dummyjson.com/products/category/${categoria}`)
            .then(res => setProdutos(res.data.products))
            .catch(() => alert("Erro ao buscar produtos"));
        }, []);

        return (
            <FlatList
            data={produtos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <Card style={{ margin: 10 }} onPress={() => navigation.navigate('ProdutoScreen', { id: item.id })}>
                <Card.Content>
                    <Text variant='titleMedium'>{item.title}</Text>
                    <Text>{item.price} R$</Text>
                </Card.Content>
                </Card>
            )}
            />
        );
}
