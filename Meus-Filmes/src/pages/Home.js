import react from "react";

import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native" ;
  export default function Home(){
      return(
          <View style={styles.container}>
              <Text style={styles.titulo}> Meus filmes</Text>
              <Text style={styles.Subtitulo}> Ola Kauan, Boa Noite </Text>
              <TextInput style={styles.campo} placeholder = "Nome do filme"/>

              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
          </View>     

      );
  }

  // Criando estilo

  const styles = StyleSheet.create({
      container:{

          flex: 1,
          backgroundColor: '#30478C',
          paddingHorizontal: 20,
      },

      titulo:{
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 50, 
          alignSelf: 'center'       
      } ,

      Subtitulo:{
          color: '#FFF',
          fontSize: 20
      },

      campo:{
          backgroundColor: '#1F1E25',
          color: '#FFF',
          fontSize: 18,
          marginTop: 50,
          borderRadius: 7,
          padding: 15
      },

      greetings: {
          color: '#FFF'
      },
      
      button: {
          backgroundColor: '#A370F7',
          padding: 15,
          borderRadius: 7,
          alignItems: 'center',
          marginTop: 20
      },

      buttonText: {
          color: '#FFF',
          fontSize: 17,
          fontWeight: 'bold'
      },

  });  // Fim do Estilo