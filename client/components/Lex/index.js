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
        var particleAlphabet = {
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
            particleAlphabet.canvas = document.getElementById('canvasParticles');
            particleAlphabet.ctx = particleAlphabet.canvas.getContext('2d');
            particleAlphabet.W = 800;
            particleAlphabet.H = 165;
            particleAlphabet.particlePositions = [];
            particleAlphabet.particles = [];
            particleAlphabet.tmpCanvas = document.createElement('canvas');
            particleAlphabet.tmpCtx = particleAlphabet.tmpCanvas.getContext('2d');

            particleAlphabet.canvas.width = particleAlphabet.W;
            particleAlphabet.canvas.height = particleAlphabet.H;

            setInterval(function(){
                particleAlphabet.changeLetter();
                particleAlphabet.getPixels(particleAlphabet.tmpCanvas, particleAlphabet.tmpCtx);
            }, 1200);

            particleAlphabet.makeParticles(1000);
            particleAlphabet.animate();
        }, 
        currentPos: 0,
        changeLetter: function() {
            var letters = 'GET A COIN, BUY A COIN, SELL A COIN',
                letters = letters.split(', ');
            particleAlphabet.time = letters[particleAlphabet.currentPos];
            particleAlphabet.currentPos++;
            if (particleAlphabet.currentPos >= letters.length) {
                particleAlphabet.currentPos = 0;
            }
        },
        makeParticles: function(num) {
            for (var i = 0; i <= num; i++) {
                particleAlphabet.particles.push(new particleAlphabet.Particle(particleAlphabet.W / 2 + Math.random() * 400 - 200, particleAlphabet.H / 2 + Math.random() * 400 -200));
            }
        },
        getPixels: function(canvas, ctx) {
            var keyword = particleAlphabet.time,
                gridX = 6,
                gridY = 6;
            canvas.width = 800;
            canvas.height = 165;
            ctx.fillStyle = 'red';
            ctx.font = 'bold 115px Arial';
            ctx.fillText(keyword, canvas.width / 2 - ctx.measureText(keyword).width / 2, canvas.height / 2);
            var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var buffer32 = new Uint32Array(idata.data.buffer);
            if (particleAlphabet.particlePositions.length > 0) particleAlphabet.particlePositions = [];
            for (var y = 0; y < canvas.height; y += gridY) {
                for (var x = 0; x < canvas.width; x += gridX) {
                    if (buffer32[y * canvas.width + x]) {
                        particleAlphabet.particlePositions.push({x: x, y: y});
                    }
                }
            }
        },
        animateParticles: function() {
            var p, pPos;
            for (var i = 0, num = particleAlphabet.particles.length; i < num; i++) {
                p = particleAlphabet.particles[i];
                pPos = particleAlphabet.particlePositions[i];
                if (particleAlphabet.particles.indexOf(p) === particleAlphabet.particlePositions.indexOf(pPos)) {
                p.x += (pPos.x - p.x) * .3;
                p.y += (pPos.y - p.y) * .3;
                p.draw(particleAlphabet.ctx);
            }
            }
        },
        animate: function() {
            requestAnimationFrame(particleAlphabet.animate);
            particleAlphabet.ctx.fillStyle = 'rgba(255, 255, 255, .8)';
            console.log(particleAlphabet.ctx.fillStyle);
            particleAlphabet.ctx.fillRect(0, 0, particleAlphabet.W, particleAlphabet.H);
            particleAlphabet.animateParticles();
        }
    };
    
    window.onload = particleAlphabet.init;

    return (
      <div id="CoinBot">
        <canvas id="canvasParticles"></canvas>
        <div className="audio-control">
          <p>
            <h3>Click on microphone to active!</h3>
            <br />
          </p>
          <p id="audio-control" className="white-circle">
            <img
              onClick={awscall}
              src="http://chittagongit.com//images/microphone-icon-png/microphone-icon-png-11.jpg"
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
