import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SenaiSaoCaetanoDoSul() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Coordenadas do Senai São Caetano do Sul
    const latitude = -23.61512;
    const longitude = -46.57071;

    // Ajuste o zoom conforme necessário
   

    // Define a região do mapa ao montar o componente
    
  }, []);

  return (
    // Componente de contêiner que envolve o mapa
    <View style={styles.container}>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
