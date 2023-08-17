function randomDegreeGenerator() {
  let multiple = Math.floor(Math.random() * 10);
  let factor = 90;
  return 90 + multiple * factor;
}

function selectedTextFinder(degrees, direction){
  switch((degrees/90)%4) {
    case 0:
      return 1;
      break;
    case 1:
      if (direction === 'clockwise') {
        return 4;
      } else return 2;      
      break;
    case 2:
      return 3;
      break;
    case 3:
      if (direction === 'clockwise') {
        return 2;
      } else return 4;
      return 2;
      break;
  }
}

function resetOpacity() {
  let wheelText = document.getElementsByClassName('wheel-text');
    for (i = 0; i < wheelText.length; i++) {
      wheelText[i].style.opacity = 1;
    }
}

  function randomRotate() {
    console.log('random rotate function called');
    document.getElementById('final-selection').innerHTML = 'Please wait for your random selection...';
    resetOpacity();
    let idBig = null;
    let idMedium = null;
    let idSmall = null;
    const bigCircle = document.getElementById("big");
    const mediumCircle = document.getElementById("medium");
    const smallCircle = document.getElementById("small");
    let rotationDegreeBig = 0;
    let rotationDegreeMedium = 0;
    let rotationDegreeSmall = 0;
    let finalRotationDegreeBig = randomDegreeGenerator();
    let finalRotationDegreeMedium = randomDegreeGenerator();
    let finalRotationDegreeSmall = randomDegreeGenerator();
    clearInterval(idBig);
    idBig = setInterval(frame1, 5);
    function frame1() {
      if (rotationDegreeBig == finalRotationDegreeBig) {
        clearInterval(idBig);
      } else {
        rotationDegreeBig++;        
        bigCircle.style.transform = `rotate(${rotationDegreeBig}deg)`;        
      }
    }
    clearInterval(idMedium);
    idMedium = setInterval(frame2, 5);
    function frame2() {
      if (rotationDegreeMedium == finalRotationDegreeMedium) {
        clearInterval(idMedium);
      } else {
        rotationDegreeMedium++;                
        mediumCircle.style.transform = `rotate(${-rotationDegreeMedium}deg)`;        
      }
    }
    clearInterval(idSmall);
    idSmall = setInterval(frame3, 5);
    function frame3() {
      if (rotationDegreeSmall == finalRotationDegreeSmall) {
        clearInterval(idSmall);
      } else {
        rotationDegreeSmall++;
        smallCircle.style.transform = `rotate(${rotationDegreeSmall}deg)`;
      }
    }
    
    let bigFinalText = `${document.getElementById(`big-text${selectedTextFinder(finalRotationDegreeBig, 'clockwise')}`).innerText}`;
    let mediumFinalText = `${document.getElementById(`medium-text${selectedTextFinder(finalRotationDegreeMedium, 'anti-clockwise')}`).innerText}`; 
    let smallFinalText = `${document.getElementById(`small-text${selectedTextFinder(finalRotationDegreeSmall, 'clockwise')}`).innerText}`; 
    
    function largestDegreeToTime(){
      let largestDegree = Math.max(finalRotationDegreeBig, finalRotationDegreeMedium, finalRotationDegreeSmall);
      let timeTaken = largestDegree * 5;
      let withDelay = timeTaken + 1000;
      return withDelay;    
    }

    setTimeout(function(){
      let wheelText = document.getElementsByClassName('wheel-text');
    for (i = 0; i < wheelText.length; i++) {
      wheelText[i].style.opacity = 0.5;
    }
    document.getElementById(`big-text${selectedTextFinder(finalRotationDegreeBig, 'clockwise')}`).style.opacity = 1;
    document.getElementById(`medium-text${selectedTextFinder(finalRotationDegreeMedium, 'anti-clockwise')}`).style.opacity = 1;
    document.getElementById(`small-text${selectedTextFinder(finalRotationDegreeSmall, 'clockwise')}`).style.opacity = 1;
      document.getElementById('final-selection').innerHTML = `${bigFinalText}${mediumFinalText}${smallFinalText}`;      
    }, largestDegreeToTime());

  }

  