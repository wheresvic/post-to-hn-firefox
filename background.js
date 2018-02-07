const postToHn = async () => {
  const tabs = await browser.tabs.query({ currentWindow: true, active: true });

  if (tabs[0]) {
    const tab = tabs[0];
    const tabUrl = tab.url;
    const tabTitle = tab.title;

    const encodedTabUrl = encodeURIComponent(tabUrl);
    const encodedTabTitle = encodeURIComponent(tabTitle);

    const hnLink = `https://news.ycombinator.com/submitlink?u=${encodedTabUrl}&t=${encodedTabTitle}`;

    browser.tabs.create({
      url: hnLink
    });

    // browser.tabs.update(tab.id, { url: "https://developer.mozilla.org" });
  } else {
    console.error("No active tab found :(");
  }
};

browser.browserAction.onClicked.addListener(postToHn);
