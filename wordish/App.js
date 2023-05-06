import * as React from 'react';
import { Button, Text, View, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput } from 'react-native';
import Constants from 'expo-constants';
import ConfettiCannon from 'react-native-confetti-cannon';

// You can import from local files
import { getRandomWord, isalpha, words } from './components/words';
import ShakeAnimation from './components/shake';


export default function App() {
  const input1Ref = React.useRef(null);
  const input2Ref = React.useRef(null);
  const input3Ref = React.useRef(null);
  const input4Ref = React.useRef(null);
  const input5Ref = React.useRef(null);
  const input6Ref = React.useRef(null);
  const [input1Editable, setInput1Editable] = React.useState(true);
  const [input2Editable, setInput2Editable] = React.useState(false);
  const [input3Editable, setInput3Editable] = React.useState(false);
  const [input4Editable, setInput4Editable] = React.useState(false);
  const [input5Editable, setInput5Editable] = React.useState(false);
  const [input6Editable, setInput6Editable] = React.useState(false);
  const [isFocused1, setIsFocused1] = React.useState(true);
  const [isFocused2, setIsFocused2] = React.useState(false);
  const [isFocused3, setIsFocused3] = React.useState(false);
  const [isFocused4, setIsFocused4] = React.useState(false);
  const [isFocused5, setIsFocused5] = React.useState(false);
  const [isFocused6, setIsFocused6] = React.useState(false);
  const [text1, setText1] = React.useState('');
  const [text2, setText2] = React.useState('');
  const [text3, setText3] = React.useState('');
  const [text4, setText4] = React.useState('');
  const [text5, setText5] = React.useState('');
  const [text6, setText6] = React.useState('');
  const [result, setResult] = React.useState("*  *  *  *  *");
  const [answer, setAnswer] = React.useState("*  *  *  *  *");
  const [letters, setLetters] = React.useState("");
  const [randomWord, setRandomWord] = React.useState(React.useEffect(() => setRandomWord(getRandomWord()), []));
  const dismissKeyboard = () => { Keyboard.dismiss();};
  const [showConfetti, setShowConfetti] = React.useState(false);
  const cannonRef = React.useRef(null);
  const [shouldShake, setShouldShake] = React.useState(false);

  const restart_game = () => {
    setInput1Editable(true);
    setInput2Editable(false);
    setInput3Editable(false);
    setInput4Editable(false);
    setInput5Editable(false);
    setInput6Editable(false);
    setIsFocused1(true);
    setIsFocused2(false);
    setIsFocused3(false);
    setIsFocused4(false);
    setIsFocused5(false);
    setIsFocused6(false);
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
    setText6("");
    setAnswer("*  *  *  *  *");
    setResult("*  *  *  *  *");
    setLetters("");
    setRandomWord(getRandomWord());
  }

  const handleInput1Submit = () => {

    if (text1.length < 5 || !isalpha(text1) || !words.includes(text1))
    {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 3000);
      return;
    }
  
    if (text1.toUpperCase() === randomWord) 
    {
      setResult(randomWord);
      setAnswer(randomWord);
      setInput1Editable(false);
      setShowConfetti(true);
      return;
    }
    let display_word1 = "";
    let display_letters1 = new Set();
    for (let i = 0; i < 5; i++)
    {
      if (text1[i].toUpperCase() === randomWord[i])
      {
        display_word1 += randomWord[i];
      }
      else
      {
        if (i < 4)
        {
          display_word1 += "*  ";
        }
        else
        {
          display_word1 += "*";
        }
      }
      if (text1[i] != randomWord[i])
      {
        for (let j = 0; j < 5;j++)
        {
          if (i === j)
          {
            continue;
          }
          if (text1[i] === randomWord[j])
          {
            display_letters1.add(randomWord[j]);
          }
        }
      }
    }
    setLetters(Array.from(display_letters1).join(' - '));
    setResult(display_word1);
    input2Ref.current.focus();
    setInput1Editable(false);
    setInput2Editable(true);
    setIsFocused2(true);
  };
  

  const handleInput2Submit = () => {
    if (text2.length < 5 || !isalpha(text2) || !words.includes(text2))
    {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 3000);
      return;
    }
    if (text2.toUpperCase() === randomWord) 
    {
      setResult(randomWord);
      setAnswer(randomWord);
      setInput2Editable(false);
      setShowConfetti(true);
      return;
    }
    let display_word2 = "";
    let display_letters2 = new Set();
    for (let i = 0; i < 5; i++)
    {
      if (text2[i].toUpperCase() === randomWord[i])
      {
        display_word2 += randomWord[i];
      }
      else
      {
        if (i < 4)
        {
          display_word2 += "*  ";
        }
        else
        {
          display_word2 += "*";
        }
      }
      if (text2[i] != randomWord[i])
      {
        for (let j = 0; j < 5;j++)
        {
          if (i === j)
          {
            continue;
          }
          if (text2[i] === randomWord[j])
          {
            display_letters2.add(randomWord[j]);
          }
        }
      }
    }
    setLetters(Array.from(display_letters2).join(' - '));
    setResult(display_word2);
    input3Ref.current.focus();
    setInput2Editable(false);
    setInput3Editable(true);
    setIsFocused3(true);
  };

  const handleInput3Submit = () => {
    if (text3.length < 5 || !isalpha(text3) || !words.includes(text3))
    {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 3000);
      return;
    }
    if (text3.toUpperCase() === randomWord) 
    {
      setResult(randomWord);
      setAnswer(randomWord);
      setInput3Editable(false);
      setShowConfetti(true);
      return;
    }
    let display_word3 = "";
    let display_letters3 = new Set();
    for (let i = 0; i < 5; i++)
    {
      if (text3[i].toUpperCase() === randomWord[i])
      {
        display_word3 += randomWord[i];
      }
      else
      {
        if (i < 4)
        {
          display_word3 += "*  ";
        }
        else
        {
          display_word3 += "*";
        }
      }
      if (text3[i] != randomWord[i])
      {
        for (let j = 0; j < 5;j++)
        {
          if (i === j)
          {
            continue;
          }
          if (text3[i] === randomWord[j])
          {
            display_letters3.add(randomWord[j]);
          }
        }
      }
    }
    setLetters(Array.from(display_letters3).join(' - '));
    setResult(display_word3);
    input4Ref.current.focus();
    setInput3Editable(false);
    setInput4Editable(true);
    setIsFocused4(true);
  };

  const handleInput4Submit = () => {
    if (text4.length < 5 || !isalpha(text4) || !words.includes(text4))
    {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 3000);
      return;
    }
    if (text4.toUpperCase() === randomWord) 
    {
      setResult(randomWord);
      setAnswer(randomWord);
      setInput4Editable(false);
      setShowConfetti(true);
      return;
    }
    let display_word4 = "";
    let display_letters4 = new Set();
    for (let i = 0; i < 5; i++)
    {
      if (text4[i].toUpperCase() === randomWord[i])
      {
        display_word4 += randomWord[i];
      }
      else
      {
        if (i < 4)
        {
          display_word4 += "*  ";
        }
        else
        {
          display_word4 += "*";
        }
      }
      if (text4[i] != randomWord[i])
      {
        for (let j = 0; j < 5;j++)
        {
          if (i === j)
          {
            continue;
          }
          if (text4[i] === randomWord[j])
          {
            display_letters4.add(randomWord[j]);
          }
        }
      }
    }
    setLetters(Array.from(display_letters4).join(' - '));
    setResult(display_word4);
    input5Ref.current.focus();
    setInput4Editable(false);
    setInput5Editable(true);
    setIsFocused5(true);
  };

  const handleInput5Submit = () => {
    if (text5.length < 5 || !isalpha(text5) || !words.includes(text5))
    {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 3000);
      return;
    }
    if (text5.toUpperCase() === randomWord) 
    {
      setResult(randomWord);
      setAnswer(randomWord);
      setInput5Editable(false);
      setShowConfetti(true);
      return;
    }
    let display_word5 = "";
    let display_letters5 = new Set();
    for (let i = 0; i < 5; i++)
    {
      if (text5[i].toUpperCase() === randomWord[i])
      {
        display_word5 += randomWord[i];
      }
      else
      {
        if (i < 4)
        {
          display_word5 += "*  ";
        }
        else
        {
          display_word5 += "*";
        }
      }
      if (text5[i] != randomWord[i])
      {
        for (let j = 0; j < 5;j++)
        {
          if (i === j)
          {
            continue;
          }
          if (text5[i] === randomWord[j])
          {
            display_letters5.add(randomWord[j]);
          }
        }
      }
    }
    setLetters(Array.from(display_letters5).join(' - '));
    setResult(display_word5);
    input6Ref.current.focus();
    setInput5Editable(false);
    setInput6Editable(true);
    setIsFocused6(true);
  };

  const handleInput6Submit = () => {
    if (text6.length < 5 || !isalpha(text6) || !words.includes(text6))
    {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 3000);
      return;
    }
    if (text6.toUpperCase() === randomWord) 
    {
      setResult(randomWord);
      setAnswer(randomWord);
      setInput6Editable(false);
      setShowConfetti(true);
      return;
    }
    setInput6Editable(false);
    setAnswer(randomWord);
  };

  const onChangeText1 = (newText) => {
    setText1(newText);
  };

  const onChangeText2 = (newText) => {
    setText2(newText);
  };

  const onChangeText3 = (newText) => {
    setText3(newText);
  };

  const onChangeText4 = (newText) => {
    setText4(newText);
  };

  const onChangeText5 = (newText) => {
    setText5(newText);
  };

  const onChangeText6 = (newText) => {
    setText6(newText);
  };

  

  React.useEffect(() => {
    if (showConfetti) 
    {
      cannonRef.current?.start();
      setTimeout(() => 
      {
        cannonRef.current?.stop();
        setShowConfetti(false);
      }, 5000);
    }
  }, [showConfetti]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Wordish
      </Text>
      <ScrollView style={styles.body}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.inputContainer}>
          <ShakeAnimation shouldShake={shouldShake}>
            <TextInput key="textInput1" 
                      ref={input1Ref}
                      style={[styles.inputs, {color: "textColor"}]}
                      placeholder={isFocused1 ? "Type Here" : ""}
                      autoCapitalize="characters"
                      autoCorrect={false}
                      maxLength={5}
                      onChangeText={onChangeText1}
                      value={text1}
                      onPaste={(event) => { event.preventDefault(); }}
                      editable={input1Editable}
                      onSubmitEditing={handleInput1Submit}
            />
          </ShakeAnimation>
          <TextInput key="textInput2" 
                    ref={input2Ref}
                    placeholder={isFocused2 ? "Type Here" : ""}
                    style={[styles.inputs, {color: "textColor"}]}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    maxLength={5}
                    onChangeText={onChangeText2}
                    value={text2}
                    onPaste={(event) => { event.preventDefault(); }}
                    editable={input2Editable}
                    onSubmitEditing={handleInput2Submit}
          />
          <TextInput key="textInput3" 
                    ref={input3Ref}
                    placeholder={isFocused3 ? "Type Here" : ""}
                    style={[styles.inputs, {color: "textColor"}]}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    maxLength={5}
                    onChangeText={onChangeText3}
                    value={text3}
                    onPaste={(event) => { event.preventDefault(); }}
                    editable={input3Editable}
                    onSubmitEditing={handleInput3Submit}
          />
          <TextInput key="textInput4" 
                    ref={input4Ref}
                    placeholder={isFocused4 ? "Type Here" : ""}
                    style={[styles.inputs, {color: "textColor"}]}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    maxLength={5}
                    onChangeText={onChangeText4}
                    value={text4}
                    onPaste={(event) => { event.preventDefault(); }}
                    editable={input4Editable}
                    onSubmitEditing={handleInput4Submit}
          />
          <TextInput key="textInput5" 
                    ref={input5Ref}
                    placeholder={isFocused5 ? "Type Here" : ""}
                    style={[styles.inputs, {color: "textColor"}]}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    maxLength={5}
                    onChangeText={onChangeText5}
                    value={text5}
                    onPaste={(event) => { event.preventDefault(); }}
                    editable={input5Editable}
                    onSubmitEditing={handleInput5Submit}
          />
          <TextInput key="textInput6" 
                    ref={input6Ref}
                    placeholder={isFocused6 ? "Type Here" : ""}
                    style={[styles.inputs, {color: "textColor"}]}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    maxLength={5}
                    onChangeText={onChangeText6}
                    value={text6}
                    onPaste={(event) => { event.preventDefault(); }}
                    editable={input6Editable}
                    onSubmitEditing={handleInput6Submit}
                    
          />
        </View>
        </TouchableWithoutFeedback>
        <Text style={styles.sofar}>{result}</Text>
        <Text style={styles.letters}>{letters}</Text>
        <Text style={styles.answer}>{answer}</Text>
        <View> 
          <Button style={styles.restart} color="red" title="Restart Game" onPress={restart_game} />
        </View>
      </ScrollView>
      <View>
          {showConfetti && (
            <ConfettiCannon
              ref={cannonRef}
              count={1000}
              origin={{ x: 0, y: 0 }}
              fallSpeed={3000}
              explosionSpeed={500}
              fadeOut={true}
            />
          )}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    paddingTop: Constants.statusBarHeight,
    
  },
  header: {
    //margin: 24,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'grey',
    padding: 8,
  },
  sofar: {
    //margin: 24,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'grey',
    padding: 0,
  },
  letters: {
    //margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'grey',
    padding: 0,
  },
  answer: {
    //margin: 24,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'grey',
    padding: 0,
  },
  body: {
    //margin: 24,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 0,
  },
  inputs: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    margin: 8,
    width: 300,
    height: 70,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  restart: {
    color: "red",
    fontWeight: "bold",
  }
});
