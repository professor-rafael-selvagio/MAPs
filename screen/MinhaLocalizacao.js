import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Requisição assíncrona
    (async () => {
      try {
        // Solicita permissões de localização ao usuário
        

        // Se as permissões não forem concedidas, exibe um erro e retorna
        

        // Obtém as coordenadas da localização atual do dispositivo
        

        // Define a região do mapa com base nas coordenadas obtidas e ajusta o zoom
        

        // Anima o mapa para a nova região com uma duração de 1000 ms
        
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    })();
  }, []);
  // O array de dependências vazio indica que este efeito só será executado uma vez durante o ciclo de vida do componente


  return (
    <View style={styles.container}>
      {/* Componente MapView para exibir o mapa */}
      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true} // Exibe a localização do usuário no mapa
      />
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