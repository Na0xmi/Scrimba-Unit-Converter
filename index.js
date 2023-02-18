let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const convertBtn = document.getElementById("convert-btn")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function(){
    let base = inputEl.value
    lengthEl.textContent = `${base} meter = ${(base* meterToFeet).toFixed(3)} feet | ${base} feet = ${(base/meterToFeet).toFixed(3)} meter`
    volumeEl.textContent = `${base} liter = ${(base * literToGallon).toFixed(3)} gallon | ${base} gallon = ${(base/literToGallon).toFixed(3)} liter`
    massEl.textContent = `${base} kilo = ${(base*kiloToPound).toFixed(3)} pounds | ${base} pounds = ${(base/kiloToPound).toFixed(3)} kilo`
})
