var tape = require("tape"),
    freeze = require("..");


tape("freeze(value: Object)", function(assert) {
    var a = {
        key: "value"
    };

    if (Object.freeze) {
        (function freezeTest() {
            "use strict";
            var error;

            freeze(a);

            try {
                a.key = "change";
                delete a.key;
            } catch (e) {
                error = e;
            }

            assert.equals(!!error, true);
        }());
    } else {
        assert.equals(freeze(a), a);
    }

    assert.end();
});
