const messages = [
    "Owen Says: The Seal Salamander is nocturnal!",
    "Owen Says: The Mud Salamander doesn't migrate!",
    "Owen Says: The Red Spotted Newt loves to eat mosquitos! ",
    "Owen Says: Only male American Bullfrogs croak!",
    "Owen Says: The Pickerel Frog is poisonous!",
    "Owen Says: The Eastern Hellbender breathes through it's skin!"
  ];

  let messageIndex = 0;

  function changeMessage() {

    document.getElementById("mammalsmessage").textContent = messages[messageIndex];
    
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