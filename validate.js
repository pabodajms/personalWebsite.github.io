function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    let y = document.getElementById("email").value;
    if(y == "") {
        alert("Email is required");
        return false;
    }
}