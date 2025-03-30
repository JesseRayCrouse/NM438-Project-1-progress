const messages = [
    "Owen Says: The Spotted Bass swim in schools, unlike other Bass!",
    "Owen Says: The Sicklefin Redhorse can weigh up to 18 pounds!",
    "Owen Says: The White Crappie hatches faster in warmer water!",
    "Owen Says: The Rainbow Trout can jump up to 10 feet high!",
    "Owen Says: The Tangerine Darter is a non-game fish species",
    "Owen Says: The Muskellunge can live to be 30 years old!"
    
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