async function insertion() {
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'green';
    for (let i = 1; i < ele.length; i++) {
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].innerHTML;
        // color
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while (j >= 0 && (parseInt(ele[j].innerHTML) > parseInt(key))) {
            console.log('In while loop');
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].innerHTML = ele[j].innerHTML;
            j--;

            await waitforme(delay);

            // color
            for (let k = i; k >= 0; k--) {
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].innerHTML = key;
        // color
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function() {
    disableSortingBtn();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableNewArrayBtn();
});