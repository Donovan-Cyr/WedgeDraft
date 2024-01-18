const nav = document.getElementById("topNav");
  window.onscroll = function () {
    if (window.scrollY > 100) {
      nav.classList.add("sticky")
    } else {
      nav.classList.remove("sticky");
    }
  }


const navButton = document.querySelector('button[aria-expanded]');
  function toggleNav({ target }) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
  }
  
  navButton.addEventListener('click', toggleNav);

  function copyNumber() {
    var copyNumber = "3035654377";
    navigator.clipboard.writeText(copyNumber);
    alert("Phone Number Copied");
  }

  function copyEmail() {
    var copyEmail = "accounting@wedgecommunication.com";
    navigator.clipboard.writeText(copyEmail);
    alert("Email Address Copied");
  }
  