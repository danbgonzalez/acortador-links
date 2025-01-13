const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
    }).catch(error => {
        shortenedUrlTextarea.value = "Error : no fue posible acortar el link";
    });

}

reloadBtn.addEventListener('click', () => {
    location.reload();
});

let button = document.getElementById("copy-btn");
button.addEventListener("click", (e) => {
    e.preventDefault();
    document.execCommand(
        "copy",
        false,
        document.getElementById("shortenedUrl").select()
    );
})
