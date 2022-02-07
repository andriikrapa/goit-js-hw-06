const listCategoriesEl = document.querySelectorAll('li.item');
console.log('Number of categories: ', listCategoriesEl.length);

listCategoriesEl.forEach(elem => {
    console.log('Category: ', elem.firstElementChild.textContent);
    console.log('Elements: ', elem.lastElementChild.children.length);
    //first version
    //console.log('Elements: ', el.firstElementChild.nextElementSibling.querySelectorAll('li').length);
});
    
