import { photos } from './photos.js'

const panels = document.getElementById('panels');

panels.innerHTML = photos.map(function (photo) {
	return `<div class="panel" style="background-image:url(${photo.url})">
    <p>${photo.date}</p>
    <a href="https://en.wikipedia.org/wiki/${photo.city}" target="_blank">${photo.city}</a>
    <p>${photo.country}</p>
    </div>`;
}).join('');

const panel = document.querySelectorAll('.panel');

function addOpen() {
  this.classList.add('open')
}

function removeOpen (){
  this.classList.remove('open')
  this.classList.remove('open-active')
}

panel.forEach(panel => panel.addEventListener('mouseover', addOpen));
panel.forEach(panel => panel.addEventListener('mouseout', removeOpen));
