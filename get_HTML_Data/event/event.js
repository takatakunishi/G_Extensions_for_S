chrome.runtime.onInstalled.addListener(() => {
    const body = document.body
    console.log(body.innerHTML);
})