let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
const convertBtn = document.getElementById("convert-btn")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function(){
    let base = inputEl.value
    lengthEl.textContent = `${base} meter = ${(base* meterToFeet).toFixed(3)} feet | ${base} feet = ${(base/meterToFeet).toFixed(3)} meter`
})
