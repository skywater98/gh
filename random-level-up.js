const levelp = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
const cl = document.getElementById('current-level');
const at = document.getElementById('attempts');
const bar = document.getElementById('gauge-bar');
let level = 0;
let att = 0;

const getRandomBinaryResult = (p) => {
    const x = Math.floor(Math.random() * 100);
    if (x < p) {
        return true;
    }
    else {
        return false;
    }
};

const tryLevelUp = () => {
    const interval = setInterval(() => {
        if (getRandomBinaryResult(levelp[level])) {
            level++;
        }
        att++;
        cl.innerText = level;
        at.innerText = att;
        bar.style.width = level*10 + '%';

        if(level >= 10) clearInterval(interval);
        
    }, 50);

  
};

