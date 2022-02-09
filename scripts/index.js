    function changePetImage(petImageNumber) {
        document.getElementById('petImage').src="assets/pet"+petImageNumber+".jpeg";
        switch (petImageNumber) {
        case 1: 
            document.getElementById('message').innerHTML="Animal is Cat!";
            break;

        case 2: 
            document.getElementById('message').innerHTML="Animal is Dog!";
            break;

        default:
            document.getElementById('message').innerHTML="Animal is Parrot!";
            break;    
        }
    }


