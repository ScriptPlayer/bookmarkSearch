document.addEventListener('DOMContentLoaded', function() {
    chrome.bookmarks.getTree(function(bookmarkTree) {
        init(JSON.stringify(bookmarkTree[0].children, null, 4));
    });
});
