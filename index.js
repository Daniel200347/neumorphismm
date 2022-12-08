const inputSize = document.querySelector('[data-input-range-size]')
const divisionExample = document.querySelector('[data-name-box]')
const inputColor = document.querySelector('[data-input-color]')
const inputTextColor = document.querySelector('[data-input-text-color]')
const body = document.body
const inputRadius = document.querySelector('[data-input-range-radius]')
const inputDistance = document.querySelector('[data-input-range-distance]')
const inputDistanceValue = document.querySelector('[data-input-range-distance]')
const inputIntensity = document.querySelector('[data-input-range-intensity]')
const inputBlur = document.querySelector('[data-input-range-blur]')
const outputSize = document.querySelector('[data-name-output-size]')
const outputRadius = document.querySelector('[data-name-output-radius]')
const outputDistance = document.querySelector('[data-name-output-distance]')
const outputIntensity = document.querySelector('[data-name-output-intensity]')
const configuration = document.querySelector('[data-name-configuration]')

class RangeItem {
    constructor(min, max, initialValue) {
        this.min = min
        this.max = max
        this.value = initialValue
    }


    setValue(value) {
        this.value = value
    }

}

class NeomorphismModel {
    constructor() {

    }
}

inputRadius.addEventListener('input', (event) => {
    const value = event.target.value
    divisionExample.style.borderRadius = `${value}px`;
    outputRadius.innerHTML = `${value}px`
})

function inputSizeHandler() {
    const value = inputSize.value
    divisionExample.style.width = `${value}px`;
    divisionExample.style.height = `${value}px`;
    inputRadius.setAttribute('max', Math.round(`${value / 2}`))
    inputDistanceValue.value = `${value / 10}`;
    inputBlur.value = value / 5
    outputSize.innerHTML = `${value}px`
    outputRadius.innerHTML = Math.round(value / 2) + "px"
    outputDistance.innerHTML = Math.round(value / 10) + "px"

}

inputSizeHandler();

inputSize.addEventListener('input', inputSizeHandler)

inputColor.addEventListener('input', (event) => {
    const value = event.target.value
    inputTextColor.value = value
    body.style.backgroundColor = value;
})

function outputDistanceHandler() {
    const value = inputDistance.value
    divisionExample.style.boxShadow = `${value}px ${value}px ${value * 2}px #45556c, ${-value}px ${-value}px ${value * 2}px #7591b8`
    outputDistance.innerHTML = value
    configuration.style.boxShadow = `${value}px ${value}px ${value * 2}px #45556c, ${-value}px ${-value}px ${value * 2}px #7591b8`
}

inputDistance.addEventListener('input', outputDistanceHandler)

outputDistanceHandler()

function outputIntensityHandler() {
    const value = inputIntensity.value
    divisionExample.style.opacity = `${value - 0.01}`
    outputIntensity.innerHTML = `${value}px`
    configuration.style.opacity = `${value}`
}

outputIntensityHandler()

inputIntensity.addEventListener('input', outputIntensityHandler)

inputDistance.addEventListener('click', displayOutput)
inputDistance.addEventListener('mousemove', displayOutput)


function displayOutput() {
    const inner = outputDistance
    console.log('sadasfa')
    if (inner.style.display == "none") inner.style.display = "";
    else inner.style.display = "none";
}

displayOutput()
