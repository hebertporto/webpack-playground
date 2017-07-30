import './../styles/image_viewer.css';
import big from './../assets/big.jpg'
import small from './../assets/small.jpg'

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const BigImage = document.createElement('img');
BigImage.src = big;

document.body.appendChild(BigImage);