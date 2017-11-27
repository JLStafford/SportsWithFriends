import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginTop:125,
    marginBottom: 175
  },
  logoReg: {
    alignItems: 'center',
    marginTop: 125,
    marginBottom: 165
  },
  inputButtons: {
    marginBottom: 60
  },
  login: {
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 40
  },
  loginButton: {
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center'
  },
  loginButtonText: {
    padding: 11
  },
  register: {
    alignItems: 'center'
  },
  registerButtonText: {

  },
  textInput: {
    height: 20,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 12
  },
  hairline: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40
  },
  profilePicture: {
    alignItems: 'center',
    marginTop: 80
  },
  profilePictureBorder: {
    borderWidth: 1,
    borderColor: '#2C0F66',
    height: 93,
    width: 93,
    borderRadius:55,
    overflow: 'hidden'
  },
  name: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 24,
  },
  nameText: {
    fontSize: 24,
    color: '#2C0F66'
  },
  playersDescription: {
    alignItems: 'center',
    marginBottom: 100,
    paddingLeft: 35,
    paddingRight: 35
  },
  playersDescriptionText: {
    fontSize: 12
  },
  personalDescription: {
    flex: 1,
    flexDirection: 'row'
  },
  personalDescriptionText: {
    fontSize: 12,
    marginBottom: 40
  },
  columnOne: {
    flex: 1,
    paddingLeft: 70
  },
  columnTwo: {
    flex: 1,
    paddingLeft: 70
  }
})