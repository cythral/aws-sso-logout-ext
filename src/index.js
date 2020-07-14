const AMAZON_URL = "https://amazon.com";
const AMAZON_COOKIE_NAME = "aws-userInfo";
const START_URL_PATTERN = "https://sso.brigh.id/start/*";

chrome.webRequest.onBeforeRedirect.addListener(
    function() {
        chrome.cookies.remove({
            url: AMAZON_URL, 
            name: AMAZON_COOKIE_NAME
        });
    }, 
    {
        urls: [START_URL_PATTERN]
    },
    ["responseHeaders"]
);