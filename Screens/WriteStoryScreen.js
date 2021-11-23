import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from "../config.js";

export default class WriteStoryScreen extends React.Component {
 constructor() {
  super();
    this.state = {
      title:'',
      author:'',
      story:''
    }
 }

  submitStory =() => {
     db.collection("Story").add({
        'Title':this.state.title,
        'author':this.state.author,
        'story':this.state.story,
      })
  }

  render() {
    return (
     <View>
      <View>
        <AppHeader/>
      </View>

      <View>
        <TextInput
        style={styles.inputBox}
          placeholder=" Title "
          onChangeText={text => {
            this.setState({
              title: text
            });
          }}
          value={this.state.title}
        />
      </View>

       <View>
        <TextInput
          style={styles.inputBox}
          placeholder="Author name"
          onChangeText={text => {
            this.setState({
              author: text
            });
          }}
          value={this.state.author}
        />
      </View>

       <View>
        <TextInput
        style={{marginTop:30,height:200, width:330, borderWidth: 2, borderRightWidth: 2,}}
          placeholder="Write your story here!"
          multiline= {true}
          onChangeText={text => {
            this.setState({
              story: text
            });
          }}
          value={this.state.story}
        />
      </View>

      <View>
        <TouchableOpacity 
            onPress={() => {
                this.submitStory();
                this.setState({
                  title:'',
                  author:'',
                  story:''
                })
              }}        
              style={styles.button}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
     </View>
  );
 }
}

const styles= StyleSheet.create({
  inputBox: {
    marginTop:40,
    width: 320,
    height: 30,
    borderWidth: 2,
    borderRightWidth: 2,
    fontSize: 20
  },
  button: {
    marginLeft:110,
    marginTop:30,
    backgroundColor:"cyan",
    width:120,
    borderWidth:2,
    height:50,
    alignItems:'center',
  }, 
  submitButtonText: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "blue"
  },
})