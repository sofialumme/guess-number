import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [correctNo, setCorrectNo] = useState(0);
  const [guessedNo, setGuessedNo] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [message, setMessage] = useState('');

  const randomiseNo = () => {
    setCorrectNo(Math.floor(Math.random() * 100) + 1);
  }

  const buttonPressed = () => {
    setGuesses(guesses + 1);

    if (parseInt(guessedNo) == correctNo) {
      Alert.alert(`You guessed the number in ${guesses} guesses`);
      randomiseNo();
      setGuesses(0);
      setMessage('Guess a number between 1–100.');

    } else if (parseInt(guessedNo) > correctNo) {
      setMessage(`Your guess ${guessedNo} is too high`);

    } else if (parseInt(guessedNo) < correctNo) {
      setMessage(`Your guess ${guessedNo} is too low`);
    }
  }

  useEffect(() => {
    randomiseNo();
    setMessage('Guess a number between 1–100.');
  }, [])

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType='numeric'
        onChangeText={guessedNo => setGuessedNo(guessedNo)}
        value={guessedNo}
      />
      <Button title='Make guess' onPress={buttonPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
