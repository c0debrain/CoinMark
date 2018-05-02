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
        var particleWords = {
        Particle: function(x, y) {
            this.x = x;
            this.y = y;
            this.radius = 3.5;
            this.draw = function(ctx) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.fillStyle = '#4b0082';
                ctx.fillRect(0, 0, this.radius, this.radius);
                ctx.restore();
            };
        },
        init: function() {
            console.log('INIT');
            particleWords.canvas = document.getElementById('canvasParticles');
            particleWords.ctx = particleWords.canvas.getContext('2d');
            particleWords.W = window.innerWidth;
            particleWords.H = 85;
            particleWords.particlePositions = [];
            particleWords.particles = [];
            particleWords.tmpCanvas = document.createElement('canvas');
            particleWords.tmpCtx = particleWords.tmpCanvas.getContext('2d');

            particleWords.canvas.width = particleWords.W;
            particleWords.canvas.height = particleWords.H;

            setInterval(function(){
                particleWords.changeLetter();
                particleWords.getPixels(particleWords.tmpCanvas, particleWords.tmpCtx);
            }, 1200);

            particleWords.makeParticles(1000);
            particleWords.animate();
        }, 
        currentPos: 0,
        changeLetter: function() {
            var letters = 'GET A COIN, BUY A COIN, SELL A COIN',
                letters = letters.split(', ');
            particleWords.time = letters[particleWords.currentPos];
            particleWords.currentPos++;
            if (particleWords.currentPos >= letters.length) {
                particleWords.currentPos = 0;
            }
        },
        makeParticles: function(num) {
            for (var i = 0; i <= num; i++) {
                particleWords.particles.push(new particleWords.Particle(particleWords.W / 2 + Math.random() * 400 - 200, particleWords.H / 2 + Math.random() * 400 -200));
            }
        },
        getPixels: function(canvas, ctx) {
            var keyword = particleWords.time,
                gridX = 6,
                gridY = 6;
            canvas.width = window.innerWidth;
            canvas.height = 165;
            ctx.fillStyle = 'red';
            ctx.font = 'bold 115px Arial';
            ctx.fillText(keyword, canvas.width / 2 - ctx.measureText(keyword).width / 2, canvas.height / 2);
            var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var buffer32 = new Uint32Array(idata.data.buffer);
            if (particleWords.particlePositions.length > 0) particleWords.particlePositions = [];
            for (var y = 0; y < canvas.height; y += gridY) {
                for (var x = 0; x < canvas.width; x += gridX) {
                    if (buffer32[y * canvas.width + x]) {
                        particleWords.particlePositions.push({x: x, y: y});
                    }
                }
            }
        },
        animateParticles: function() {
            var p, pPos;
            for (var i = 0, num = particleWords.particles.length; i < num; i++) {
                p = particleWords.particles[i];
                pPos = particleWords.particlePositions[i];
                if (particleWords.particles.indexOf(p) === particleWords.particlePositions.indexOf(pPos)) {
                p.x += (pPos.x - p.x) * .3;
                p.y += (pPos.y - p.y) * .3;
                p.draw(particleWords.ctx);
            }
            }
        },
        animate: function() {
            requestAnimationFrame(particleWords.animate);
            particleWords.ctx.fillStyle = 'rgba(255, 255, 255, .8)';
            particleWords.ctx.fillRect(0, 0, particleWords.W, particleWords.H);
            particleWords.animateParticles();
        }
    };
    
    window.onload = particleWords.init;

    return (
      <div id="CoinBot">
        <canvas id="canvasParticles"></canvas>
        <div className="audio-control">
          <p className="lextext">
            <h3>Click on microphone to activate!</h3>
            <br />
          </p>
          <p id="audio-control" className="white-circle">
            <img
              role='button'
              tabindex='7'
              alt='Coin Bot Microphone Button'
              onClick={awscall}
              src='https://d30y9cdsu7xlg0.cloudfront.net/png/2313-200.png'
            />
          </p>
          <p className="lextext">
            <span id="message">Passive</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Lex;
