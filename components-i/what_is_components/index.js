//Components
// 1. reuseable
// 2. modular (standalone)
// 3. DRY
// 4. composeable

// write a function that outputs a button element

const buttonComponent = (small, text, theme) => {
  const button = document.createElement('button')
  const twitterBlue = '#1da1f2'
  const isThemeBlue = theme === 'blue'

  button.textContent = options.text
  button.style.width = options.small ? '100px' : '200px'
  button.style.height = '45px'
  button.style.backgroundColor = isThemeBlue ? twitterBlue : 'white'
  button.style.borderRadius = '25px'
  button.style.color = isThemeBlue ? 'white' : twitterBlue

  return button
}

const bigButton = buttonComponent(false, 'Tweet', 'blue')
// const smallButton = buttonComponent({small: true, text: 'Tweet', theme: 'blue'})
// const signUpButton = buttonComponent({small: false, text: 'Sign Up', theme: 'blue'})
// const logInButton = buttonComponent({small: false, text: 'Log In', theme: 'white'})

document.querySelector('body').appendChild(bigButton)
document.querySelector('body').appendChild(smallButton)
document.querySelector('body').appendChild(signUpButton)
document.querySelector('body').appendChild(logInButton)