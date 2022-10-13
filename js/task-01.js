const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((item) => {
   
    const titleRef = item.firstElementChild;
    console.log(`Category:  ${titleRef.textContent}`);
  
     console.log(`Elements:  ${item.lastElementChild.children.length}`);
});

