const tileDisplay = document.querySelector(`.tile-container`)
const keyboard = document.querySelector(`.keyboard-container`)


const keys = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'ENTER',
  'BACKSPACE',
]

const handleClick = () => {
  console.log('clicked')
}

keys.forEach(key => {
  const buttonElement = document.createElement('button')
  buttonElement.textContent = key
  buttonElement.setAttribute('id', key)
  buttonElement.addEventListener('click', handleClick)
  keyboard.append(buttonElement)
})