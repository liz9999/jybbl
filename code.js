var bd = document.getElementsByClassName('border')
var ts = document.getElementsByClassName('translation')
var te = document.getElementById('te')

function translate() {
    for (i = 0; i < bd.length; i++) {
      if (bd[i].style.display !== 'block') {
            bd[i].style.display = 'block';
            ts[i].style.display = 'block';
    }
        else {
            bd[i].style.display = 'none';
            ts[i].style.display = 'none';
    }
    }
   }

window.addEventListener('load', function(){
    document.getElementById('te').addEventListener('click', translate);
});
