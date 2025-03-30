const messages = [
    "Owen Says: Welcome to the Games page!",
    "Owen Says: Drawing can be so fun!",
    "Owen Says: Create a Creature is super cool!",
    "Owen Says: Click on one of the buttons above to get started!",
    
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