const drop1 = document.querySelector('#drop1');
const a_tag = document.querySelector('#a_tag');
const b_tag = document.querySelector('#b_tag');
const c_tag = document.querySelector('#c_tag');



document.addEventListener('DOMContentLoaded', function () {

    drop1.addEventListener('change', function (e) {

        a_tag.classList.add('hidden');
        b_tag.classList.add('hidden');

        if (e.target.selectedIndex == 1) {
            a_tag.classList.remove('hidden');
        }

        if (e.target.selectedIndex == 2) {
            b_tag.classList.remove('hidden');
        }

        console.log(e.target.selectedIndex)

    });

    a_tag.addEventListener('change', function (ev) {

        c_tag.classList.add('hidden');

        if (ev.target.selectedIndex == 1) {
            c_tag.classList.remove('hidden');
        }

        console.log(ev.target.selectedIndex)

    });

});