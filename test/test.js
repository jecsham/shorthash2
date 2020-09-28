const shortHash = require("../dist");
const test = require("tape");

test("shortHash", t => {

    /* shortHash  */
    t.equal(shortHash("foobar@example.com"), "Z1bL2tE");
    t.equal(shortHash("my name is really big big and big..."), "Z1TirWS");
    t.equal(shortHash("万里长城永不倒。。。"), "2r6EFF");
    t.equal(shortHash("和平"), "33NM");
    t.equal(shortHash(""), "");
    t.equal(shortHash(2233), "6LEj");
    t.throws(function () { shortHash([]) });
    t.end();
})