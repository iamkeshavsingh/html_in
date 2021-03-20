var ele = document.querySelector('#typed');
var qualified_link = document.querySelector('#qualified_link');

var infoContainer = document.querySelector('.info_container');
var qualificationsContainer = document.querySelector('.qualification_container');

qualified_link.addEventListener('click', function () {
    infoContainer.style.display = 'none';
    qualificationsContainer.style.display = 'block';
});

var start = "";

var end = "Keshav Singh";


var idx = 1;
var pointer = 0;
setInterval(function () {

    if (pointer == end.length || pointer == -1) {
        idx = idx * -1;
    }

    start = end.substring(0, pointer);
    ele.textContent = start;

    pointer = pointer + idx;
}, 100);
