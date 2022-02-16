// first product 

//add element 

//compteur ajout +1 

let plusBtn = document.getElementsByClassName('btn-plus');


for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
    calculateAmount()
  });

}


//diminuer 

let minusBtn = document.getElementsByClassName('btn-mns');
for (let minus of minusBtn) {

  minus.addEventListener('click', function () {

    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--;
      calculateAmount()
    }

  })

};
//btn delete

let deletebtn = document.querySelectorAll('.btn-delete');

for (let i = 0; i < deletebtn.length; i++) {
  deletebtn[i].addEventListener('click', function () {
    deletebtn[i].parentElement.parentElement.parentElement.remove();
    calculateAmount();
  })

}

//second product






//calcul

let prx = document.getElementsByClassName('prx');
let quantity = document.getElementsByClassName('quantity');
 let prixtotal = document.getElementById('prixtotal');


function calculateAmount() {
  let s = 0    
  let quantity = Array.from(document.getElementsByClassName('quantity'));
  let prx = Array.from(document.getElementsByClassName('prx'));
  let prixtotal = document.getElementById('prixtotal');




  for (let i = 0; i < quantity.length; i++) {
    s  = s + Number(quantity[i].innerHTML) * Number(prx[i].innerHTML)

  }
  return document.getElementById('prixtotal').innerHTML = s


}

//btn like


let btnsLIke = Array.from(document.getElementsByClassName("like"));

for (let like of btnsLIke) {
  like.addEventListener("click", function () {
    like.classList.toggle("red");
});
}



