function changePetImage(petName) {
    document.getElementById('petImage').src="assets/"+petName+".jpeg";
    document.getElementById('message').innerHTML="Animal is " + petName + "!";
}


