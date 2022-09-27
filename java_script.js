let bar = document.querySelector('#bar')
let nav = document.querySelector('.navbar')

bar.onclick = () =>
{
    bar.classList.toggle('fa-times')
    nav.classList.toggle('active')
}


