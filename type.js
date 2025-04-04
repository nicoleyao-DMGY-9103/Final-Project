const text = "It was the summer of 1953, and I was 18 years old. The county fair was the biggest event of the year in our small town. I remember wearing my favorite blue dress that my mother had made for me. My friends and I were watching the tractor pull...";
const textElement = document.getElementById('transcriptionText');
let index = 0;
let isTyping = false;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // 调整这个数值可以改变打字速度
    } else {
        isTyping = false;
    }
}

function startTranscription() {
    if (!isTyping) {
        // 显示文本区域
        textElement.style.display = 'inline';
        // 重置文本和索引
        textElement.textContent = '';
        index = 0;
        isTyping = true;
        // 开始打字效果
        typeWriter();
    }
}

// 当页面加载完成后开始打字效果
window.onload = function() {
    typeWriter();
};
