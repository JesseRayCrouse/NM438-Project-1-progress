const messages = [
    "Owen Says: Welcome to WNC's Creature Corner!",
    "Owen Says: Thank you for visiting our website!",
    "Owen Says: My name is Ranger Owen, and I am a River Otter!",
    "Owen Says: Hehe! That tickles!"
  ];

  let messageIndex = 0;

  function changeMessage() {

    document.getElementById("message").textContent = messages[messageIndex];
    
    // Move to the next message in the array
    messageIndex = (messageIndex + 1) % messages.length;
  }

  // Add click event listener to the image button
  document.getElementById("imageButton").addEventListener("click", changeMessage);

  const toggleButton = document.getElementById('toggleButton');
const owenImage = document.querySelector('.owenMain');
const buttonIcon = toggleButton.querySelector('img');

toggleButton.addEventListener('click', () => {
    if (owenImage.style.display === 'none' || owenImage.style.display === '') {
        owenImage.style.display = 'block'; 
        buttonIcon.src = 'sourceimages/eye.png'; 
      } else {
          owenImage.style.display = 'none'; 
          
          buttonIcon.src = 'sourceimages/openeye.png'; 
      }
  });


owenImage.style.display = 'block';