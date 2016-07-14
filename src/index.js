var isNative = require("@nathanfaucett/is_native"),
    emptyFunction = require("@nathanfaucett/empty_function");


var nativeFreeze = Object.freeze;


if (isNative(nativeFreeze) && (function isValidFreeze() {
        "use strict";
        var a = {
            key: "value"
        };

        try {
            nativeFreeze(a);
            a.key = "change";
            delete a.key;
        } catch (e) {
            return true;
        }
        return false;
    }())) {
    module.exports = nativeFreeze;
} else {
    module.exports = emptyFunction.thatReturnsArgument;
}
