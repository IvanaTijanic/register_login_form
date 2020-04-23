
//Select between email and mobile
function openTab(e, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
}

// Promo offers
let getPromo, promoad, totalPromoad;

promoad = ['Register now and get 15% off!',
  'Only today 50% off your whole purchase!',
  'Register now and get 20% off!',
  'Special offer just for you, register and find out what it is!',
  'Best offer on the internet, register now!',
  'SALE  SALE  SALE  SALE  SALE'];

totalPromoad = promoad.length;


const promo = document.querySelector('.promo');
getPromo = function () {
  let activePromoad;
  activePromoad = promoad[Math.floor(Math.random() * totalPromoad)];
  promo.innerHTML = activePromoad;

};
getPromo();

// Validate email form
let formEmail = document.getElementById("form_email");
formEmail.onsubmit = function validateEmail(email) {
  let inputEmail = document.getElementById('input__email');
  let inputChecked = document.querySelector('#checkbox_email');
  const valEm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let loader = document.querySelector('.loader');

  if (inputEmail.value == "") {
    let emailAlert = document.querySelector('.email__small')
    emailAlert.innerHTML = "Please provide your Email."
    inputEmail.addEventListener('click', event => {
      emailAlert.remove();
    });
    return false;
  };

  if (!valEm.test(inputEmail.value)) {
    let emailAlert2 = document.querySelector('.email__small_corect')
    emailAlert2.innerHTML = "Please provide correct Email."
    inputEmail.addEventListener('click', event => {
      emailAlert2.remove();
    });
    return false;

  }
  if (!inputChecked.checked) {
    let checkboxAlertEm = document.querySelector('.email_checkbox_small')
    checkboxAlertEm.innerHTML = "You must agree to the terms first."
    inputChecked.addEventListener('click', event => {
      checkboxAlertEm.remove();
    });
    return false;
  }

  try {
    if (true) {
      loader.style.display = "block"
      window.location.reload();
    }
  }
  catch (error) {
    alert('Something went wrong, please try again.')
  }
  return;

}


// Validate phone number
let formMobile= document.getElementById("form_mobile");
formMobile.onsubmit=function validateMobile(mobile) {
  let inputMobile = document.getElementById('input_mobile');
  let inputMobileChecked = document.querySelector('#checkbox_mobile');
  const valMob = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let loader = document.querySelector('.loader');

  if (inputMobile.value == "") {
    let mobileAlert = document.querySelector('.mobile__small')
    mobileAlert.innerHTML = "Please provide your phone number."
    inputMobile.addEventListener('click', event => {
      mobileAlert.remove();
    });
    return false;
  };

  if (!valMob.test(inputMobile.value)) {
    let mobileAlert = document.querySelector('.mobile__small_correct')
    mobileAlert.innerHTML = "Please provide correct phone number."
    inputMobile.addEventListener('click', event => {
      mobileAlert.remove();
    });
    return false;

  }
  if (!inputMobileChecked.checked) {
    let checkboxAlert = document.querySelector('.mobile_checkbox_small')
    checkboxAlert.innerHTML = "You must agree to the terms first."
    inputMobileChecked.addEventListener('click', event => {
      checkboxAlert.remove();
    });
    return false;
  }

  try {
    if (true) {
      loader.style.display = "block"
      window.location.reload();
    }
  }
  catch (error) {
    alert('Something went wrong, please try again.')
  }
  return;
}
