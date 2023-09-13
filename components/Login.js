import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isEmailFocused, setEmailFocused] = useState(false); // New state for email input
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require('../assests/bg.png')}
          style={styles.imageBackground}>
          <View style={styles.contentContainer}>
            <View style={styles.createAccount}>
              <Text style={styles.textCreate}>Login</Text>
            </View>
            <View style={styles.smallTextContainer}>
              <Text style={styles.smallText}>Please Sign In to Continue</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                label="EMAIL"
                style={[
                  styles.input,
                  isEmailFocused && styles.focusedInput, // Apply focused style when isEmailFocused is true
                ]}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                left={<TextInput.Icon icon="email" />}
              />
              <TextInput
                label="PASSWORD"
                style={[
                  styles.input,
                  isPasswordFocused && styles.focusedInput, // Apply focused style when isPasswordFocused is true
                ]}
                secureTextEntry={secureTextEntry}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={secureTextEntry ? 'eye-off' : 'eye'}
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                  />
                }
              />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Root',{screen:'Screen1'})}>
              <Text style={styles.buttonText}>Login</Text>
              <Image
                source={require('../assests/right.png')}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Don't have an Account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: Platform.OS === 'ios' ? 100 : 0,
  },
  createAccount: {
    marginBottom: 20,
  },
  textCreate: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
  },
  smallTextContainer: {
    marginBottom: 20,
  },
  smallText: {
    fontSize: 22,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: '45%',
    borderRadius: 30,
    backgroundColor: '#edc314',
    marginLeft: 'auto',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginLeft: 5,
    marginTop: 6,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    textAlign: 'center',
  },
  signUpText: {
    fontSize: 18,
    color: '#edc314',
    textDecorationLine: 'underline',
  },
  focusedInput: {
    borderColor: '#fff', 
    borderWidth: 2,
  },
});

export default Login;
