const count = document.querySelector('.count');
let time = 10;

count.innerText = time--;
setTimeout(() => {
    count.innerText = time--;
    setTimeout(() => {
        count.innerText = time--;
        setTimeout(() => {
            count.innerText = time--;
            setTimeout(() => {
                count.innerText = time--;
                setTimeout(() => {
                    count.innerText = time--;
                    setTimeout(() => {
                        count.innerText = time--;
                        setTimeout(() => {
                            count.innerText = time--;
                            setTimeout(() => {
                                count.innerText = time--;
                                setTimeout(() => {
                                    count.innerText = time--;
                                    setTimeout(() => {
                                        count.innerText = 'Happy Independence Day!'
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);