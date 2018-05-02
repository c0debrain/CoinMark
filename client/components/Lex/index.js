import React, { Component } from 'react';

import './index.css';

class Lex extends Component {
  render() {
    function awscall(e) {
      console.log('The link was clicked.');
      var config, conversation;
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:bd9ae5d2-4404-4ff1-9815-e946d2e3c9e8'
      });
      AWS.config.region = 'us-east-1';

      config = {
        lexConfig: { botName: 'CoinBot' }
      };

      conversation = new LexAudio.conversation(
        config,
        function(state) {
          message.textContent = state + '...';
          if (state === 'Listening') {
            document.getElementById('message').innerHTML = 'Listening';
          }
          if (state === 'Sending') {
            document.getElementById('message').innerHTML = 'Sending';
          }
        },
        function(data) {
          console.log(
            'Transcript: ',
            data.inputTranscript,
            ', Response: ',
            data.message
          );
        },
        function(error) {
          document.getElementById('message').innerHTML = error;
        },
        function(timeDomain, bufferLength) {
          console.log('old waveform stuff');
        }
      );
      conversation.advanceConversation();
    }

    return (
      <div id="CoinBot">
        <div className="audio-control">
          <p>
            <h3>Click on microphone to active!</h3>
            <br />
          </p>
          <p id="audio-control" className="white-circle">
            <img
              onClick={awscall}
              src="https://static1.squarespace.com/static/575e8c3c86db43d483834dc6/t/599c143e8fd4d24d1b11838d/1503401031161/The+Voice+Agency+Microphone.png"
            />
          </p>
          <p>
            <span id="message">Passive</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Lex;
