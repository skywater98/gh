const setRandomBgColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    
    const box = document.getElementById('color-box');
    box.style.backgroundColor =  'rgb(' + r + ',' + g + ',' + b + ')';
};