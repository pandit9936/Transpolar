const allNsElem = document.querySelectorAll('.ns');

// console.log(allNsElem)

allNsElem.forEach(function (singleNsElem) {

    let time = 1000;

    let start = singleNsElem.dataset.start
    let end = singleNsElem.dataset.end
    singleNsElem.innerText = start;

    let modifideTime = time/end;

    let myCounter = setInterval(function () {
        singleNsElem.innerText = ++start

        if (start == end) {
            clearInterval(myCounter)
        }
    },modifideTime)
})