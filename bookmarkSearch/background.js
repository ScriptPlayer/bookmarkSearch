//点击扩展程序图标时打开主页
chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.runtime.getURL('index.html')});
});

