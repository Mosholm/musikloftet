const btn = document.querySelector('button');

btn.addEventListener('click', mode);

function mode(){
      
    document.documentElement.classList.toggle("dark");

}

