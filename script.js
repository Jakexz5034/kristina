  function checkPassword() {
      var password = document.getElementById('password').value.trim();
      console.log("Input Password: " + password);  // Debugging line
      var hashedPassword1 = "07d41c8876f7db1af59cf2e172b998d9c1cdc0ce7b1db76dced1fa460a500620"; 
      var hashedPassword2 = "6cf615d5bcaac778352a8f1f3360d23f02f34ec182e259897fd6ce485d7870d4"; 

      var inputHash = CryptoJS.SHA256(password).toString();
      console.log("Hashed Input: " + inputHash);  // Debugging line

      if (inputHash === hashedPassword1) {
        window.location.href = 'sike.html'; 
      } else if (inputHash === hashedPassword2) {
        window.location.href = 'sike.html'; // Congrats if you got here earlier than the timer, however, you're not finding out the password through the code 😛
      } else {
        alert('Incorrect password!');
      }
    }
    // BAHAHAHAHA couldn't find it?
    var countDownDate = new Date("Jan 1, 2025 23:59:59").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
