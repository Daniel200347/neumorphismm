const inputSize = document.querySelector('[data-input-range-size]')
const divisionExample = document.querySelector('[data-name-box]')
const inputColor = document.querySelector('[data-input-color]')
const inputTextColor = document.querySelector('[data-input-text-color]')
const body = document.body
const inputRadius = document.querySelector('[data-input-range-radius]')
const inputDistance = document.querySelector('[data-input-range-distance]')
const inputDistanceValue = document.querySelector('[data-input-range-distance]')
const inputIntensity = document.querySelector('[data-input-range-intensity]')
const configuration = document.querySelector('[data-name-configuration]')

inputRadius.addEventListener('input', (event) => {
    const value = event.target.value
    divisionExample.style.borderRadius = `${value}px`;
})


function inputSizeHandler() {
    const value = inputSize.value
    divisionExample.style.width = `${value}px`;
    divisionExample.style.height = `${value}px`;
    inputRadius.setAttribute('max', Math.round(`${value / 2}`))
    inputDistanceValue.value = `${value / 20}`;
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
    configuration.style.boxShadow = `${value}px ${value}px ${value * 2}px #45556c, ${-value}px ${-value}px ${value * 2}px #7591b8`
}

inputDistance.addEventListener('input', outputDistanceHandler)

outputDistanceHandler()

function outputIntensityHandler() {
    const value = inputIntensity.value
    divisionExample.style.opacity = `${value - 0.01}`
}

outputIntensityHandler()

inputIntensity.addEventListener('input', outputIntensityHandler)

inputDistance.addEventListener('click')
inputDistance.addEventListener('mousemove')
