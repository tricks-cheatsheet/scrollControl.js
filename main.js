import { preventScroll, recoverScroll } from './scrollControl'

document.querySelector('#prevent-scroll-btn').addEventListener('click', () => { preventScroll() })
document.querySelector('#recover-scroll-btn').addEventListener('click', () => { recoverScroll() })