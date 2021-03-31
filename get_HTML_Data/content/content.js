const getHTML = async () => {
    var body = document.body
    var bodyText = body.innerHTML
    var a_tag_name = "extension_a_tag"

    body.addEventListener("click", (event) => {
        console.log("mouseX:" + event.x)
        console.log("mouseY:" + event.y)
        console.log("tagetHTMLElements: x=> " + event.target.getBoundingClientRect().width + ": y=> " + event.target.getBoundingClientRect().height)
        console.log("windowHeight:" + window.innerHeight)
        console.log("windowWidth:" + window.innerWidth)
        console.log("currentHref:" + location.href)
    })

    // console.log(bodyText)
    // const reg = new RegExp(/(<a )/, "gi")
    // body.innerHTML = await bodyText.replace(reg, `<a class=\"${a_tag_name}\" `)

    var a_tag = document.getElementsByTagName("a")
    for (i = 0; i < a_tag.length; i++) {
        a_tag[i].addEventListener("click", (event) => {
            console.log("mouseX:" + event.x)
            console.log("mouseY:" + event.y)
            console.log("tagetHref:" + event.currentTarget.href)
            console.log("tagetHTMLElements: x=> " + event.currentTarget.getBoundingClientRect().width + ": y=> " + event.currentTarget.getBoundingClientRect().height)
            console.log("windowHeight:" + window.innerHeight)
            console.log("windowWidth:" + window.innerWidth)
            console.log("currentHref:" + location.href)
        })
        // console.log(a_tag[i].innerHTML);
    }
}

getHTML()

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let selection;
    console.log(request.message) // -> 選択範囲ちょうだい が出力される

    // 画面で選択されている部分を文字列で取得する
    if (window.getSelection) {
        selection = window.getSelection().toString()
    } else {
        selection = ''
    }
    sendResponse({ fromcontent: "This message is from content.js" })
    // return true
    // chrome.tabs.sendMessage(sender.tab.id, { type: 'sendResponse' });
})