$(document).ready(function()
{
  $.ajaxSetup({
          contentType: "application/json; charset=utf-8",
          dataType: "json"
      });
      /**
        Tomado de http://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery
      */
      function objectifyForm(formArray) {
        var returnArray = {};
        for (var i = 0; i < formArray.length; i++)
        {
          returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return returnArray;
}

      $(document).ready(function() {
          $('#formulario1').submit(function(e) {
              var send = JSON.stringify(objectifyForm($(this).serializeArray()));
              console.log(send);
              $.ajax({
                  url: "http://couchdb.contraslash.com/carlos_portela/",
                  type: "POST",
                  data: send,
                  success: function (sreg, status, jqXHR) {
                      alert("Muchas gracias por su contribución");
                  },
                  error: function (jqXHR, status) {
                      alert(JSON.stringify(jqXHR));
                  }
              });
              return false;
          });

          $('#formulario2').submit(function(e) {
              var send = JSON.stringify(objectifyForm($(this).serializeArray()));
              console.log(send);
              $.ajax({
                  url: "http://couchdb.contraslash.com/fauna_callejera/",
                  type: "POST",
                  data: send,
                  success: function (sreg, status, jqXHR) {
                      alert("Muchas gracias por su contribución");
                  },
                  error: function (jqXHR, status) {
                      alert(JSON.stringify(jqXHR));
                  }
              });
              return false;
          });

          $('#formulario3').submit(function(e) {
              var send = JSON.stringify(objectifyForm($(this).serializeArray()));
              console.log(send);
              $.ajax({
                  url: "http://couchdb.contraslash.com/peter_pan/",
                  type: "POST",
                  data: send,
                  success: function (sreg, status, jqXHR) {
                      alert("Muchas gracias por su contribución");
                  },
                  error: function (jqXHR, status) {
                      alert(JSON.stringify(jqXHR));
                  }
              });
              return false;
          });
      });

});
