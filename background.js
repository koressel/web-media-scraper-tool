
chrome.runtime.onInstalled.addListener(function () {
  // chrome.storage.sync.set({ keyword: '' }, function () {
  //   console.log("Keyword set to default");
  // });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostContains: '.' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


