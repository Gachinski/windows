window.onload = function () {
            document.getElementById('main').style.height = Math.round((window.innerHeight / 100) * 60) - 6 + 'px';
            document.getElementById('header').style.height = Math.round((window.innerHeight / 100) * 20)  + 'px';
            document.getElementById('footer').style.height = Math.round((window.innerHeight / 100) * 20)  + 'px';
    window.onresize = function res() {
            document.getElementById('main').style.height = Math.round((window.innerHeight / 100) * 60) - 6 + 'px';
            document.getElementById('header').style.height = Math.round((window.innerHeight / 100) * 20)  + 'px';
            document.getElementById('footer').style.height = Math.round((window.innerHeight / 100) * 20)  + 'px';
        }
    }