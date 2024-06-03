/**
 * Creates a date based on the input given
 */
function createDate(year, month, day) {
    return new Date(`${year}-${month}-${day} 00:00:00`);
}

/**
 * Prepares output to be displayed 
 */
function getOutput() {
    let currentYear = new Date().getFullYear();

    // constants for xmas
    const TODAY = new Date();
    const XMAS = createDate(currentYear, '12', '25');
    const NEWYEAR = createDate(currentYear, '01', '01');
    const SECONDJAN = createDate(currentYear, '01', '02');
    
    // Now test how many days to determine output
    let days = getDaysUntil(XMAS);
    let msg = "";
    if(TODAY >= NEWYEAR && TODAY <= SECONDJAN) {
        return 'Happy New Year!';
    } else if(days < 0 || days > 100) {
        // No output requried 
        return "";
    } else if(days === 0) {
        return 'Merry Christmas!';
    } else if(days <= 30) {
        msg = 'PANIC!';
    } else if(days <= 60) {
        msg = 'BEWARE!';
    } else {
        msg = 'Get Ready!';
    }

    return `${msg} Christmas is in ${days} days!`;
}


/**
 * Outputs a message when Xmas is within 100 days
 */
function getOutputMessage() {
    let ele = document.getElementById('xmasCountDown');
    ele.innerHTML = getOutput();
}

getOutputMessage();