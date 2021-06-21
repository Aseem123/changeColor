const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
console.log(color);

function getContrastYIQ(hexcolor) {
  const r = parseInt(hexcolor.substr(1, 2), 16);
  const g = parseInt(hexcolor.substr(3, 2), 16);
  const b = parseInt(hexcolor.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  if (r >= 200) {
    document.querySelector('span').style.color = 'black';
  }
  return yiq >= 128 ? 'black' : 'white';
}
console.log(getContrastYIQ(color));

document.body.style.backgroundColor = color;
document.body.style.color = getContrastYIQ(color);
