const changeBoxColor = () => {

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    const boxx = document.getElementsByClassName('box')[1];
    boxx.style.backgroundColor = 'rgb('+ r +',' + g + ',' + b + ')';
};