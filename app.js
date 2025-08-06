const nameInput = document.getElementById('name')
const messageTextArea = document.getElementById('message')

//addEventListener format
//element.addEventListener(eventType, callback)

//'click' only works for mouse, for keyboard inputs, use 'focus'
nameInput.addEventListener('focus', (e) => {
  e.target.className = 'highlight'
})

//use 'blur' for focus leaving element
nameInput.addEventListener('blur', (e) => {
  e.target.className = ''
})

//now do messageTextArea on my own
messageTextArea.addEventListener('focus', (e) => {
  e.target.className = 'highlight'
})

messageTextArea.addEventListener('blur', (e) => {
  e.target.className = ''
})
