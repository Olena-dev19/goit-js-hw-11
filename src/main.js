import axios from "axios";
import { getImagesByQuery } from './js/pixabay-api';


//======================================

const formEl = document.querySelector('.form');
const inputValue = document.querySelector('[type="text"]');


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let inpValue = inputValue.value;
    getImagesByQuery(inpValue);
    
})