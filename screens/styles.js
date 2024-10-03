import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5ECCE', // Cor de fundo leve
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#F5BCA9', // Fundo branco para campos de entrada
    width: "50%",
    alignSelf: 'center'
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 7, // Canto arredondado para botões
  },
  header: {
    backgroundColor: '#6200ee', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 100, // Foto circular
    backgroundColor: '#2A0A1B', // Cor de fundo para área de foto
  },
});

