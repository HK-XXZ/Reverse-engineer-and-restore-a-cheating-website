<script>
function decodeUnicodeEntities(encodedStr){
return encodedStr.replace(/&#x([0-9a-fA-F]+);/g, function(match, hexValue){
return String.fromCharCode(parseInt(hexValue, 16));
});
}
let encodedString = "<!--我AI抄袭狗，我说让AI写的变成我的，你们谁都不要阻止我哦🤣 -->
let decodedString = decodeUnicodeEntities(encodedString);
document.write(decodedString);
        (function antiDebug() {
            // 1. 爪爪屏蔽右键菜单，并显示爪爪自定义警告弹窗 tips:二改盗用你亩必爆
            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                showToast('该官网Zhuazhua禁止源码二用二改，谢谢配合！');
                return false;
            });

            // 2. 爪爪屏蔽常用开发者工具快捷键
            document.addEventListener('keydown', function(e) {
                // F12干废
                if (e.key === 'F12') {
                    e.preventDefault();
                    return false;
                }
                // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C / Ctrl+U / Ctrl+O
                if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
                    e.preventDefault();
                    return false;
                }
                if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
                    e.preventDefault();
                    return false;
                }
                if (e.ctrlKey && (e.key === 'O' || e.key === 'o')) {
                    e.preventDefault();
                    return false;
                }
                // 屏蔽 Ctrl+Shift+Delete / Ctrl+Shift+N 等（后续可选，爪爪根据情况适当再补充就是啦，目前够够的了已经）
                if (e.ctrlKey && e.shiftKey && (e.key === 'Delete' || e.key === 'N' || e.key === 'n')) {
                    e.preventDefault();
                    return false;
                }
            });

            // 3. 爪爪检测开发者工具是否打开（多方案beta，2026.2.25午后再次更新移除debugger避免阻塞）
            let devtoolsOpen = false;
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            // 方法1: 检测窗口尺寸差异 (DevTools 通常会让窗口变窄)
            function checkSize() {
                const widthDiff = window.outerWidth - window.innerWidth;
                const heightDiff = window.outerHeight - window.innerHeight;
                // 根据设备设置不同阈值：PC端更严格 (195px(默认理论在200px)，移动端允许更大的差异 (425px 默认理论在200-300px合理)
                const sizeThreshold = isMobile ? 425 : 195;
                if (widthDiff > sizeThreshold || heightDiff > sizeThreshold) {
                    devtoolsOpen = true;
                }
            }

            // 方法2: 检测 console 是否被修改 (通过属性 getter)
            function checkConsole() {
                const element = document.createElement('div');
                Object.defineProperty(element, 'id', {
                    get: function() {
                        devtoolsOpen = true;
                    }
                });
                console.log(element); // 如果控制台打开，会尝试读取id属性
            }

            // 方法3: 使用 Function 原型检测
            function checkFunction() {
                if (console.log.toString().indexOf('[native code]') === -1) {
                    devtoolsOpen = true;
                }
            }

            // 综合检测函数
            function detectDevTools() {
                checkSize();
                checkConsole();
                checkFunction();

                if (devtoolsOpen) {
                    // 爪爪直接跳转百度，（跳转百度后页面自然消失）
                    window.location.href = 'https://www.baidu.com';
                }
            }

            // 爪爪根据设备设置检测间隔：PC端更频繁 (330ms)，移动端保持450ms
            const intervalTime = isMobile ? 450 : 330;
            setInterval(detectDevTools, intervalTime);

            // 爪爪额外额外：禁用选择文本等（针对移动端设备查看zhua书写的本官网源码）
            document.addEventListener('selectstart', function(e) {
                e.preventDefault(); // 禁止选择文本
            });
        })();

        // 爪爪自定义弹窗函数
        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'custom-toast';
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 2000);
        }
</script>