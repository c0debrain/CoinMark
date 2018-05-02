import React, { Component } from 'react';

import './index.css';

class Lex extends Component {
  render() {
    
    function awscall(e) {
      console.log('The link was clicked.');
      var config,conversation
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:bd9ae5d2-4404-4ff1-9815-e946d2e3c9e8'
      });
        AWS.config.region = 'us-east-1';
        
        config = {
            lexConfig: { botName: 'CoinBot' }
        };

        conversation = new LexAudio.conversation(config, function (state) {
            message.textContent = state + '...';
            if (state === 'Listening') {
              document.getElementById('message').innerHTML = 'Listening';
            }
            if (state === 'Sending') {
              document.getElementById('message').innerHTML = 'Sending';
            }
        }, function (data) {
            console.log('Transcript: ', data.inputTranscript, ", Response: ", data.message);
        }, function (error) {
            document.getElementById('message').innerHTML = error;
        }, function (timeDomain, bufferLength) {
          console.log('old waveform stuff')
        });
        conversation.advanceConversation();
    }
    
    return (
    <div>
      <div className="audio-control">
        <p id="audio-control" className="white-circle">
          <img onClick={awscall} src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/avs/docs/ux/branding/mark1._TTH_.png"/>
        </p>
        <p><span id="message">Passive</span></p>
      </div>
    </div>);
  }
}

export default Lex;
