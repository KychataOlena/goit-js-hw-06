const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const names = images.map((image) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  const imgEl = document.createElement('img')
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.style.width = '250px';
  itemEl.appendChild(imgEl);
  return itemEl;
});
const navListEl = document.querySelector(".gallery");
navListEl.append(...names);
 navListEl.style.display = "flex";
console.log(navListEl)