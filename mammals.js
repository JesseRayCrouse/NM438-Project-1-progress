const messages = [
    "Owen Says: The Black Bear hibernates throughout the Winter!",
    "Owen Says: The Otter can stay underwater for over 8 minutes!!",
    "Owen Says: The Whitetail Deer sheds it's antlers in the Winter!",
    "Owen Says: Bats use echolocation to see in the dark!",
    "Owen Says: Feral pigs can run over 30MPH!",
    "Owen Says: When startled, the Armadillo can jump over 5 feet high!"
    
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