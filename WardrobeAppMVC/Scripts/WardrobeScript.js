// Used on all headers and header buttons. Changes the color of the button or text to a certain color
//and then changes back to the original color when no longer moused over
function mouseOver(x) {
    x.style.backgroundColor = "rgb(0,82,136)";
    x.style.color = "white";
    x.style.fontSize = "xx-large";
}
function mouseOut(x) {
    x.style.backgroundColor = "white";
    x.style.color = "black";
    x.style.fontSize = "initial";
}
//Used in layout page to change the message of the footer to who the application was created by and then back to the copyright using the onmouseover event
function swapCopyright() {
    document.getElementById("footer").innerHTML = "Created by: Peter Dunipace";
}
function returnCopyright() {
    document.getElementById("footer").innerHTML = " &copy; @DateTime.Now.Year - My ASP.NET Application";
}
function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    if (userResponse) {
        var win = window.open("https://www.nike.com", '_blank');
        win.focus();
    }
}
//used only on index page for the home page
function Greeting() {
    var x = document.getElementById("jumbotron");
    var userResponse = prompt('Welcome to your closet. What is your name?');
    x.getElementsByTagName('h1')[0].innerText = userResponse + "'s Closet";
}
// Used in Clothes edit page for all of the fields except for photo
function editChoice() {
    var y = document.getElementsByClassName("form-group");
    alert("You changed: " + y)
}

function filterMeWardrobe(c) {
    var x, y, input
    //var input, filter, ul, li, a, i;
    input = document.getElementById("searchText");
    if (c == "") {
        c = input.value;
    }
    x = document.getElementsByClassName("thumbnail");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        if (c == "") {
            x[i].style.display = "block";
        }
        else {
            y = x[i].innerHTML;
            if (y.toUpperCase().includes(c.toUpperCase())) {
                x[i].style.display = "block";
            }
            else {
                x[i].style.display = "none";
            }
        }
    }
}

// When the user clicks the button, open the modal
function outfitsModalOnClick() {
    // Get the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function outfitsSpanOnClick() {
    // Get the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

