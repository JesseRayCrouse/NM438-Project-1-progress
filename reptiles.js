const messages = [
    "Owen Says: The Eastern Fence Lizard has keeled scales!",
    "Owen Says: The Six-Lined Racerunner is known for it's speed!",
    "Owen Says: Snapping Turtles can flip themselves over!",
    "Owen Says: The Softshelled Turtle loves to sunbathe! ",
    "Owen Says: The Corn Snake wraps itself around it's prey!",
    "Owen Says: Queen Snakes are good swimmers!"
    
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