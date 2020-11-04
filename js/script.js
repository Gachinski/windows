window.onload = function () {
          
            document.getElementById('main').style.height = Math.round((window.innerHeight / 100) * 60) - 6 + 'px';
            document.getElementById('header').style.height = Math.round((window.innerHeight / 100) * 20)  + 'px';
            document.getElementById('footer').style.height = Math.round((window.innerHeight / 100) * 20)  + 'px';
    window.onresize = function res() {
        // if (window.screen.width <= 1280) {
        //     // document.getElementById('low-scrin').style.display = 'block';
        // } 
            // document.getElementById('low-scrin').style.display = 'none';
          
            document.getElementById('main').style.height = Math.round((window.innerHeight / 100) * 60) - 6 + 'px';
            document.getElementById('header').style.height = Math.round((window.innerHeight / 100) * 20)  + 'px';
            document.getElementById('footer').style.height = Math.round((window.innerHeight / 100) * 20)  + 'px';

        }

    }
// }