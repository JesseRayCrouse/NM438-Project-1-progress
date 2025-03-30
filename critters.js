const messages = [
    "Owen Says: The Isabella Tiger Moth is attracted to bright lights!",
    "Owen Says: The Spotted Tiger Beetle can run over 5MPH!",
    "Owen Says: The Carpenter Ant can lift 10 to 50 times its body weight!",
    "Owen Says: The Stink Bug loves to sun bathe to attract others!",
    "Owen Says: The Coppery Leafhopper is very skiddish!",
    "Owen Says: The Monarch Butterfly is poisonous to predators!",
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