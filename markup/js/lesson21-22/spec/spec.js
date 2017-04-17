var app =  require('../js/script');


describe("app", function() {
    it("sayHello()", function() {
        // prepare
        var result;

        // act
        result = app.sayHello('Vasya2');

        // assert
        expect(result).toBe('Hello, Vasya');
    });
});
