function chessboard1() {
    let newTable = document.createElement('table'),
        lets = ['','A','B','C','D','E','F','G','H',''],
        blackFigs1 = ['8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8'],
        whiteFigs1 = ['1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1'],
        blackFigs2 = ['7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7'],
        whiteFigs2 = ['2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2'];
    for (let i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        let newTr = newTable.insertRow(i);
        for (let j = 0; j < 10; j++) {
            let newTd = newTr.insertCell(j);
                        switch (i) {
                case 0:
                    newTd.innerText = lets[j];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs1[j];
                    break;
                case 2:
                    newTd.innerHTML = blackFigs2[j];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigs2[j];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs1[j];
                    break;
                case 9:
                    newTd.innerText = lets[j];
                    break;
                default:
                    if (j === 0 || j === 9) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    let elem = document.getElementsByClassName('task511');
    document.body.appendChild(newTable);
};
chessboard1();