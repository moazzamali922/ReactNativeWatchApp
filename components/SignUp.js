import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);
  const [isFullNameFocused, setFullNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require('../assests/bg.png')}
          style={styles.imageBackground}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.backButton}
              source={require('../assests/back.png')}
            />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <View style={styles.createAccount}>
              <Text style={styles.textCreate}>Create Account</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                label="FULL NAME"
                style={[styles.input, isFullNameFocused && styles.focusedInput]}
                onFocus={() => setFullNameFocused(true)}
                onBlur={() => setFullNameFocused(false)}
                left={<TextInput.Icon icon="account" />}
              />
              <TextInput
                label="EMAIL"
                style={[styles.input, isEmailFocused && styles.focusedInput]}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                left={<TextInput.Icon icon="email" />}
              />

              <TextInput
                label="PASSWORD"
                style={[styles.input, isPasswordFocused && styles.focusedInput]}
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
              <TextInput
                label="CONFIRM PASSWORD"
                style={[
                  styles.input,
                  isConfirmPasswordFocused && styles.focusedInput,
                ]}
                secureTextEntry={secureConfirmTextEntry}
                onFocus={() => setConfirmPasswordFocused(true)}
                onBlur={() => setConfirmPasswordFocused(false)}
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={secureConfirmTextEntry ? 'eye-off' : 'eye'}
                    onPress={() => {
                      setSecureConfirmTextEntry(!secureConfirmTextEntry);
                    }}
                  />
                }
              />
            </View>

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Sign Up</Text>
              <Image
                source={require('../assests/right.png')}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signInText}>Sign In</Text>
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

  backButton: {
    width: 30,
    height: 20,
    margin: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
  createAccount: {
    marginBottom: 20,
  },
  textCreate: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
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
  signUpButton: {
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
  signInText: {
    fontSize: 18,
    color: '#edc314',
    textDecorationLine: 'underline',
  },
  focusedInput: {
    borderColor: '#fff',
    borderWidth: 2,
  },
});

export default SignUp;
