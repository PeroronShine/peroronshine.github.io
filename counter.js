document.addEventListener('DOMContentLoaded', function () {
    let cnt = localStorage.getItem('visitCount');
    if (cnt === null) { cnt = 0; };
    cnt++;
    localStorage.setItem('visitCount', cnt);
    document.getElementById('counter').innerText = cnt;
});
