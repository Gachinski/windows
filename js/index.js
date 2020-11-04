window.onload = function () {
    setTimeout(function(){
        location.replace('./computer.html');
    }, (Math.random() * (12 - 4) + 4)*1000);
    let i = 1;
    1
    let text = 'Loading';
    setInterval(function () {
        if (i > 5) {
            i = 1;
        } else {
            i++;
        }
        document.title = text + '.'.repeat(i);
    }, 300);
    document.body.style.height = Math.round(window.innerHeight) + 'px';
    window.onresize = function res() {
        document.body.style.height = Math.round(window.innerHeight) + 'px';
    };
};
