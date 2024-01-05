const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// this line for left split landing page  move

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// right side landing page can move
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))