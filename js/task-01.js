const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((item) => {
    const titleRef = item.querySelector("h2");
    console.log(`Category:  ${titleRef.textContent}`);
    const elements = item.querySelectorAll('li').length;
     console.log(`Elements:  ${elements}`);
});
