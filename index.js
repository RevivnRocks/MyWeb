const mydimond =document.getElementById("dimond");
let dimondrotate = 77;
console.log(`1`);
window.addEventListener('scroll', function(event) {
    dimondrotate++;
    mydimond.style.transform = `rotate(${dimondrotate}deg)`;
});



