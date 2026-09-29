function loadComponent(elementId, filePath){
    fetch(filePath).then(response => {
        if (!response.ok) throw new Error('Kesalahan respon jaringan');
        return response.text();
    })
    .then(data => {
        document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error(`Gagal memuat ${filePath}`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header', '/components/header.html');
    loadComponent('footer', '/components/footer.html');
});