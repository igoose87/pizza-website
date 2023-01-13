window.addEventListener('click', function (event) {
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        // находим обертку счетчика
        const itemCounterLeftHalf = event.target.closest('.itemCounterLeftHalf');
        // находим div с числом счетчика
        counter = itemCounterLeftHalf.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus'){
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
})