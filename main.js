// js untuk animasi scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    //else{
    //     entry.target.classList.remove('show');
    // }

    // uncommen else untuk animasi scroll lebih dari 1 kali
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Transition
document.getElementById('hideButton').addEventListener('click', function () {
  let elementsToHide = document.querySelectorAll('#hide');
  let elementsToShow = document.querySelectorAll('.hidden');
  let totalElementsToHide = elementsToHide.length;
  let elementsHidden = 0;
  let backgroundMusic = document.getElementById('backgroundMusic');
  


  elementsToHide.forEach(function (element) {
    element.classList.add('vanish');
    document.getElementById('hideButton').style.display = 'none';
    element.addEventListener('animationend', function () {
      // Set display: none after the transition is complete
      element.style.display = 'none';

      // Check if all elements have finished hiding
      elementsHidden++;
      if (elementsHidden === totalElementsToHide) {
        // All elements have finished hiding, now show the new elements
        elementsToShow.forEach(function (element) {
          element.classList.toggle('show');
          element.classList.toggle('hidden');
        });
      }
    }, { once: true });
  });

  var cutTime = 10; // Adjust this value based on your requirement
  backgroundMusic.currentTime = cutTime;
  backgroundMusic.play();

});

document.getElementById('copyBRI').addEventListener('click', function () {
  // Get the text you want to copy
  var textToCopy = "0007 0112 1958 504";

  // Create a temporary input element
  var tempInput = document.createElement('input');
  tempInput.value = textToCopy;

  // Append the input element to the body
  document.body.appendChild(tempInput);

  // Select the text inside the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);
});

document.getElementById('copyBNI').addEventListener('click', function () {
  // Get the text you want to copy
  var textToCopy = "0482966654";

  // Create a temporary input element
  var tempInput = document.createElement('input');
  tempInput.value = textToCopy;

  // Append the input element to the body
  document.body.appendChild(tempInput);

  // Select the text inside the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);
});


document.getElementById('whatsappButton').addEventListener('click', function () {
  let phoneNumber = '6289681000225';

  // You can customize the message by appending it to the URL
  let message = encodeURIComponent('Saya ingin mengirim bukti transfer (foto)');

  // Create the WhatsApp link
  let whatsappLink = 'whatsapp://send?phone=' + phoneNumber + '&text=' + message;

  // Open the link in a new tab or the same tab, depending on your requirements
  window.location.href = whatsappLink;
});


let backgroundMusic = document.getElementById('backgroundMusic');
let toggleMusicButton = document.getElementById('toggleMusicButton');

toggleMusicButton.addEventListener('click', function () {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    toggleMusicButton.textContent = 'Pause Music';
  } else {
    backgroundMusic.pause();
    toggleMusicButton.textContent = 'Play Music';
  }
});
