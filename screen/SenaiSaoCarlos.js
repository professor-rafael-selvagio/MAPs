import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SenaiSaoCarlos() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Coordenadas do Senai São Carlos
    const latitude = -22.02301;
    const longitude = -47.89740;

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
