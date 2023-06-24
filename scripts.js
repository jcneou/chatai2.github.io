document.getElementById("text-generation-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputText = document.getElementById("input-text").value;
    generateText(inputText);
});

function generateText(inputText) {
    // 在这里添加与后端服务器的通信代码，例如使用AJAX或Fetch API
    // 假设我们已经与后端通信并获取到了响应
    const response = "稍等，谢谢！";
    document.getElementById("generated-text").innerText = response;
}
