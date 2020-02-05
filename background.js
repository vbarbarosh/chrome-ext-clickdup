// Based on "Test Screenshot Extension" from
// https://developer.chrome.com/extensions/samples

let url;
let counter = 0;
let timer = null;

function duplicate()
{
    const tmp = counter;
    counter = 0;
    timer = null;
    for (let i = 0; i < tmp; ++i) {
        chrome.tabs.create({url}, function (tab) {});
    }
}

chrome.browserAction.onClicked.addListener(function () {

    chrome.tabs.query({active: true, lastFocusedWindow: true}, function (tabs) {
        url = tabs[0].url;
    });

    counter++;
    clearTimeout(timer);
    timer = setTimeout(duplicate, 500);

});
