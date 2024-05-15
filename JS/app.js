document.getElementById("contactForm").addEventListener("submit" , function(e) {
    e.preventDefault();  // prevent the default form submission

    // display the confirmation message
    document.getElementById("message").style.display = "block";

    //after submission , reset the form
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phnumber").value = "";
    document.getElementById("password").value = "";
    })