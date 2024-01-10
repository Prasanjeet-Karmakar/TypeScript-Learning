"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var connor = {
    _id: 24231,
    email: "h@h.com",
    userid: 123,
    startTrial: function () {
        return "trial started";
    },
    endTrial: function () {
        return "trial ended";
    },
    getCoupon: function (name) {
        return 10;
    },
    githubToken: "1234ssfdf",
};
var h = __assign(__assign({}, connor), { role: "admin" });
console.log(h);
