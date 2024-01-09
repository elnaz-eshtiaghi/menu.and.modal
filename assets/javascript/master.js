let x = document.getElementById('vertmenu')
let y = document.getElementsByTagName('a')[0]
let a = document.getElementsByClassName('opmodal')[0]
let b = document.getElementsByClassName('pmodal')[0]

function vertmenu() {
    x.style.visibility = 'visible'
    x.style.opacity = '100%'
    y.style.visibility = 'hidden'
}
function _close() {
    x.style.visibility = 'hidden'
    x.style.opacity = '0'
    y.style.visibility = 'visible'
}
function openmd() {
    a.style.visibility = 'visible'
    a.style.opacity = '100%'
}
function closemd() {
    a.style.visibility = 'hidden'
    a.style.opacity = '0'
    b.style.visibility = 'hidden'
    b.style.opacity = '0'
}