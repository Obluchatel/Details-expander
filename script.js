function open_close(){
    const all_details = document.getElementsByTagName('details')
    for (let i = 0; i < all_details.length; i++){
    if (all_details[i].hasAttribute('open')){
            all_details[i].removeAttribute('open')
        } else {{
            all_details[i].setAttribute('open', 'open')
}
    }
}}


chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: open_close
      });
    }
  });