import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Image, View, StyleSheet, useWindowDimensions, ToastAndroid } from 'react-native'
import { TextInput, Button, Text, TextInputProps } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

function Login() {
  const [show, setShow] = useState(false);


  const navigation = useNavigation();

  const { height, width } = useWindowDimensions();

  const toggleShow = () => {
		setShow((show) => !show);
	};


  interface LoginData {
    username: string;
    password: string;
  }

  const theme = {
		roundness: 12,
	};

	const textInputProps: TextInputProps = {
		theme: theme,
		style: styles.input,
		outlineColor: '#f9f9f9',
		activeOutlineColor: '#0789F4',
	};

  const { control, handleSubmit, formState: {errors, isValid}} = useForm();

  const onSubmit = (data: LoginData) => {
    if( data.username || data.password != null ) {
      ToastAndroid.show("Successful ", ToastAndroid.SHORT)
      navigation.navigate('Home');
     }else{
      ToastAndroid.show("Invalid Credential", ToastAndroid.SHORT)
      navigation.navigate('Home');
     }
     return data
    console.log(data)
  }
  return (
    <SafeAreaView style={styles.container}>
       
      <View style={styles.authWrapper}>
        <Image source={require('../../assets/nb.png')} style={styles.logo} />
        <Controller        
         control={control}        
         name="username"        
         render={({field: {onChange, value, onBlur}}) => (            
          <TextInput
          mode='outlined'
          label='Username'
          style={styles.input}
          value={value}
          onChangeText={value => onChange(value)}
          onBlur={onBlur}
          {...textInputProps}
        />      
         )} 
      />
      <Controller        
         control={control}        
         name="password"        
         render={({field: {onChange, value, onBlur}}) => (            
          <TextInput
          mode='outlined'
          label='Password'
          style={styles.input}
          right={
            <TextInput.Icon
              icon={show ? 'eye-off-outline' : 'eye-outline'}
              onPress={toggleShow}
            />
          }
          onChangeText={value => onChange(value)}
          value={value}
          onBlur={onBlur}
          {...textInputProps}
        />     
         )} 
      />
        
        <Button
          mode='contained'
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          Sign In
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  authWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 100,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 5,
    width: "85%"
  },
  button: {
    backgroundColor: '#0789F4',
    borderRadius: 12,
    padding: 3,
    width: 300,
    marginTop: 20,
    color: '#fff'
  },
})

export default Login
