chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
        'url': 'https://netaccess.iitm.ac.in/login.php',
        'selected': true
    });
 
  window.close();
});




