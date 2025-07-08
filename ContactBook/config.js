let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApikey();

function checkApikey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html");
    }
    return localStorage.getItem("apiKey");
}
