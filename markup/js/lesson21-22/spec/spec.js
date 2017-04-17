var pow =  require('../js/powfunction');


describe("pow", function() {
    it("pow() to positive degree", function() {
        // prepare
        let result = pow(2,2);
        // assert
        expect(result).toBe(4);
    });
    it("pow() to negative degree", function() {
        // prepare
        let result = pow(2,-3);
        // assert
        expect(result).toBe(0.125);
    });
    it("pow() to 0", function() {
        // prepare
        let result = pow(2,0);
        // assert
        expect(result).toBe(1);
    });
    it("pow() with not an integer number", function() {
        expect(function(){pow(2.43,-3)}).toThrow(new Error("x не целое число, введите целое число"));
    });
});
