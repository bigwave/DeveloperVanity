/// <reference path="../Scripts/jquery-2.1.0.js" />
var mozillaData = {
    getAddonData: function getMozillaData(addonName) {
        var urlToCall = 'https://addons.mozilla.org/addon/' + addonName;
        alert('get data ' + addon);
        var jqxhr = $.ajax({
            url: urlToCall
        })
          .done(function (e) {
              console.log("success");
              //console.log(e);
              //<tr class="adu">
              //  <th>Users</th>
              //  <td>38</td>
              //</tr>
              //<tr class="downloads">
              //  <th>Weekly Downloads</th>
              //  <td>18</td>
              //</tr>
              aduHeader = $(e).find('tr[class="adu"] th')[0].innerText;
              aduValue = $(e).find('tr[class="adu"] td')[0].innerText;
              downloadsHeader = $(e).find('tr[class="downloads"] th')[0].innerText;
              downloadsValue = $(e).find('tr[class="downloads"] td')[0].innerText;
              console.log(addonName + ' ' + aduHeader + ' ' + aduValue);
              console.log(addonName + ' ' + downloadsHeader + ' ' + downloadsValue);
              var classesToAdd = $('#outputDiv li').first().class;
              var itemToAdd = $('<li>' +
                  '<span><strong>' +
                  addonName +
                  '</strong></span>' +
                  '<br/>' +
                  '<span style="float:left;">' +
                  aduHeader +
                  ' :</span>' +
                  '<span style="float:right;">' +
                  aduValue +
                  '</span>' +
                  '<br/>' +
                  '<span style="float:left;">' +
                  downloadsHeader +
                  ' :</span>' +
                  '<span style="float:right;">' +
                  downloadsValue +
                  '</span>' +
                  '</li>');
              itemToAdd
                  .hide()
                  .prependTo('#outputDiv');
              $('#outputDiv').listview('refresh');
              itemToAdd.slideDown('slow');
          })
          .fail(function (e) {
              console.log("error");
          })
          .always(function (e) {
              console.log("complete");
          });
    }
};

