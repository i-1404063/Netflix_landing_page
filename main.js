const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');



function removeBorder(event) {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(event) {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// adding eventListener to every tabitem
tabItems.forEach(item => item.addEventListener('click', (event) => {
    removeBorder(event);
    removeShow(event);

    //add tab-border class to the current tab
    item.classList.add('tab-border');

    //Grab the current tab-content
    // console.log(item.id);
    const tabContentItem = document.querySelector(`#${item.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}))