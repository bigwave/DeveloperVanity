/// <reference path="../Scripts/jquery-2.1.0.js" />
var mozillaData = {
    getAddonData: function getMozillaData(addonName) {
        var urlToCall = 'https://addons.mozilla.org/addon/' +
        addonName +
        '/statistics/overview-day-20140222-20140322.json';
        urlToCall = 'https://addons.mozilla.org/en-US/firefox/addon/remotelivereload/';
        var jqxhr = $.ajax(urlToCall)
          .done(function (e) {
              console.log("success");
              interactionCount = $(e).find('meta[itemprop=interactionCount]').first()[0].content;
              console.log(interactionCount);
              $('#outputDiv')
                  .append('<li>' + interactionCount + '</li>')
                  .listview('refresh');
          })
          .fail(function (e) {
              console.log("error");
          })
          .always(function (e) {
              console.log("complete");
          });
    }
};

