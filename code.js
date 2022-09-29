var test = document.getElementById('test');
var bd = document.getElementById('border');
var ts = document.getElementById('translation')

function translate() {
    if (bd.style.display !== 'block') {
        bd.style.display = 'block';
}
    else {
        bd.style.display = 'none';
}
    if (ts.style.display !== 'block') {
        ts.style.display = 'block';
}
    else {
        ts.style.display = 'none';
}
};
