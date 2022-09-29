var test = document.getElementById('test');

test.onclick = function() {
    var bd = document.getElementById('border');
    var ts = document.getElementById('translation')
    if (bd.style.display !== 'block') {
        bd.style.display = 'block';
}
    else {
        ts.style.display = 'none';
}
    if (ts.style.display !== 'block') {
        ts.style.display = 'block';
}
    else {
        ts.style.display = 'none';
}
};