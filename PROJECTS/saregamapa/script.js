// // Define audio sources for each musical note
// const audioSources = {
//     'Applause': './sounds/applause.mp3',
//     'Boo': './sounds/boo.mp3',
//     'Gasp': './sounds/gasp.mp3',
//     'Tada': './sounds/tada.mp3',
//     'Victory': './sounds/victory.mp3',
//     'Wrong': './sounds/wrong.mp3'
//   };
  
//   // Variable to hold the reference to the currently playing audio
//   let currentSound = null;
  
//   // Add event listeners to each button
//   document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.button');
//     buttons.forEach(button => {
//       button.addEventListener('click', function () {
//         const note = this.textContent.trim();
//         playSound(note);
//       });
//     });
//   });
  
//   // Function to play the sound of the corresponding note
//   function playSound(note) {
//     // If there's a currently playing sound, stop it
//     if (currentSound !== null) {
//       currentSound.pause();
//       currentSound.currentTime = 0;
//     }
  
//     // Create a new audio object and play the sound
//     const audio = new Audio(audioSources[note]);
//     audio.play();
  
//     // Assign the new audio object to the currentSound variable
//     currentSound = audio;
//   }
  

// Define audio sources for each musical note
const audioSources = {
    'Applause': './sounds/applause.mp3',
    'Boo': './sounds/boo.mp3',
    'Gasp': './sounds/gasp.mp3',
    'Tada': './sounds/tada.mp3',
    'Victory': './sounds/victory.mp3',
    'Wrong': './sounds/wrong.mp3'
  };
  
  // Variable to hold the reference to the currently playing audio
  let currentSound = null;
  
  // Function to set up event listeners for buttons
  function setupButtons() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('click', () => playSound(button.textContent.trim()));
    //   console.log(button.textContent.trim());
    });
  }
  
  // Add event listeners to each button
  setupButtons();
  
  // Function to play the sound of the corresponding note
  function playSound(note) {
    // If there's a currently playing sound, stop it
    if (currentSound !== null) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }
  
    // Create a new audio object and play the sound
    const audio = new Audio(audioSources[note]);
    audio.play();
  
    // Assign the new audio object to the currentSound variable
    currentSound = audio;
  }


  /*Certainly! Let me explain the code:

1. **Defining Audio Sources**: 
You have defined `audioSources` object which contains the paths to the audio files corresponding to each musical note.

2. **Current Sound Variable**:
 `currentSound` is a variable used to keep track of the currently playing sound.
  Initially, it's set to `null`.

3. **Setup Buttons Function**: 
The `setupButtons()` function is responsible for adding event listeners to the buttons. 
It selects all elements with the class `.button` and adds a click event listener to each of them. When a button is clicked, it calls the `playSound()` function with the text content of the clicked button (trimmed to remove any leading or trailing whitespace) as the argument.

4. **Calling setupButtons()**:
 In the original code, `setupButtons()` was called inside an event listener for the `DOMContentLoaded` event. 
 This ensured that the buttons were set up with event listeners after the DOM content had loaded. However, you requested to remove this specific line, so I moved the call to `setupButtons()` to the end of the script. This way, the buttons are set up after the entire script has been executed and the DOM content has been loaded.

5. **Play Sound Function**: 
The `playSound()` function is responsible for playing the sound corresponding to the clicked button. 
It first checks if there's a currently playing sound. If there is, it stops it by pausing and resetting its time. Then it creates a new `Audio` object for the selected sound and starts playing it. Finally, it updates the `currentSound` variable to refer to the newly playing sound, so that it can be stopped if another sound is played.*/