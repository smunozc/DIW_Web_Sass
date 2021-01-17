const figure = document.getElementById('figImg');
var numImg = figure.childElementCount;
var initialCoordinate = null;
var i = 0;
var locked = false;

figure.style.setProperty('--n', numImg);

function unify(e){
    return e.changedTouches ? e.changedTouches[0] : e;
}

function lock(e) {
    initialCoordinate = unify(e).clientX;
    figure.classList.toggle('smooth', !(locked = true))
}

function move(e) {
    if(locked) {
        //La coma en esta variable indica que solo el ultimo elemento será retornado pero el resto de expresiones anteriores también se evaluarán.
        let diferenceX = unify(e).clientX - initialCoordinate, s = Math.sign(diferenceX);
      
        if((i > 0 || s < 0) && (i < numImg - 1 || s > 0)){
            figure.style.setProperty('--i', i -= s);
        }

        figure.style.setProperty('--tx', '0px');
        figure.classList.toggle('smooth', !(locked = false));
        initialCoordinate = null;
    }
}

function drag(e) { 
    e.preventDefault();

    if(locked){
        figure.style.setProperty('--tx', Math.round(unify(e).clientX - initialCoordinate) + 'px');
    }
}

figure.addEventListener('mousedown', lock, false);
figure.addEventListener('touchstart', lock, false);

figure.addEventListener('mouseup', move, false);
figure.addEventListener('touchend', move, false);

figure.addEventListener('mousemove', drag, false);
figure.addEventListener('touchmove', drag, false);