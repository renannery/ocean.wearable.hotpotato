window.onload = function() {
    // TODO:: Do your initialization job
    Parse.initialize("1YUyKkLv9N8FxHAp8ivS6WluD8JCbxYTm4JK8bgW", "7SDxfjnVqLUOPoAUlURxCvKIYfgSJTv2mosIqoKL");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName == "back")
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
    });

    document.getElementById('content_text')
        .addEventListener('click', function() {
            var potatoes = ["Batata", "Joelson", "Pafuncio", "Richarlyson", "Mr potato"];
            for (i = 0; i < potatoes.length; i++) {
                var Potato = Parse.Object.extend("Potato");
                var potato = new Potato();
                potato.set("name", potatoes[i]);
                potato.set("lastLocation", new Parse.GeoPoint(30, 30));
                potato.save(null, {
                    success: function(potato) {
                        // Execute any logic that should take place after the object is saved.
                        alert("Potato created");
                    },
                    error: function(potato, error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    }
                });
            }
        });
};
