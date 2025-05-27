import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories') 
        .then(response => {
            setCategorias(response.data);
        })
        .catch(error => {
            console.error(error);
            alert('Erro ao buscar categorias');
        });
    }, []);

    return (
        <View style={styles.container}>
        <FlatList
            data={categorias}
            keyExtractor={item => item.slug}
            renderItem={({ item }) => (
            <Card
                style={styles.card}
                onPress={() => navigation.navigate('ListaProdutosScreen', { categoria: item.slug })}
            >
                <Card.Content>
                <Text variant="titleMedium">{item.name}</Text>
                </Card.Content>
            </Card>
            )}
        />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginVertical: 5,
  },
});
