import { lerpFFFFFF, randFFFFFF } from './common_resources/color-utils.js'

const container = document.querySelector('.art-bg')
const arrowUpSource = container.querySelector('.arrow.up')
const arrowDownSource = container.querySelector('.arrow.down')

// Les "sources" ne sont plus nécessaires, on peut les retirer de l'écran:
arrowUpSource.remove()
arrowDownSource.remove()

const colorA = '#CFEED0'
const colorB = '#C2A8F1'

const randomColorAorB = () => {
  const colors = [colorA, colorB]
  const index = Math.floor(colors.length * Math.random())
  return colors[index]
}

const randomLerpColor = () => {
  return lerpFFFFFF(colorA, colorB, Math.random())
}



function addArrowUp(y) {
  const clone = arrowUpSource.cloneNode(true)
  clone.style.top = `${100 - y}%`
  container.append(clone)

  // random gradient color
  const color = randomLerpColor()
  const linearGradient = `linear-gradient(${color}, ${color}00)`
  clone.querySelector('.right').style.backgroundImage = linearGradient
  clone.querySelector('.left').style.backgroundImage = linearGradient
}

function addArrowDown(y) {
  const clone = arrowDownSource.cloneNode(true)
  clone.style.bottom = `${100 - y}%`
  container.append(clone)

  // random gradient color
  const color = randomLerpColor()
  const linearGradient = `linear-gradient(${color}, ${color}00)`
  clone.querySelector('.right').style.backgroundImage = linearGradient
  clone.querySelector('.left').style.backgroundImage = linearGradient
}


function makeArt(){
    for (let i = 0; i < 20; i++) {
        addArrowDown(i * 9)
        addArrowUp(i * 9)
    }
    
}

makeArt()