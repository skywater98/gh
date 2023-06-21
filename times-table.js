const displayTimes = () => {
    const num = parseInt(document.getElementById('number').value);
    if ((num < 1) || (num > 9)) {
        document.getElementById('times-result').innerText = 'Input Error!';
    }
    else {
        let text = '';
        for (let i = 1; i < 10; i++) {
            const temp = num * i;
            text += num + ' X ' + i + ' = ' + temp + '\n';
        }
        document.getElementById('times-result').innerText = text;
    }
};