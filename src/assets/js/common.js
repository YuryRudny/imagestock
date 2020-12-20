import svg4everybody from 'svg4everybody';
import baguetteBox from 'baguettebox.js';


svg4everybody();

baguetteBox.run('.photo-maxsize');

let searchOpen = document.querySelector('.action__item--search button');
let searchBlock = document.querySelector('.pages .header-action__block--search');

searchOpen.onclick = () => {
	searchBlock.classList.toggle("active");
};

let gridList = document.querySelector(".grid-change__btn--list");
let gridTable = document.querySelector(".grid-change__btn--grid");
let photosWrapper = document.querySelector(".photos-wrapper");

gridList.onclick = function () {
	this.classList.add('active');
	gridTable.classList.remove('active');
	photosWrapper.classList.add("grid--list");
	photosWrapper.classList.remove("grid--table");

};
gridTable.onclick = function () {
	this.classList.add('active');
	gridList.classList.remove('active');
	photosWrapper.classList.remove("grid--list");
	photosWrapper.classList.add("grid--table");
};