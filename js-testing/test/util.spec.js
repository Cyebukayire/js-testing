const { generateText, createElement, validateInput } = require('../util');

describe("Generating text", () => {
    test("Should generate text", () => {
        expect(generateText("Peace", 18)).toBe("Peace (18 years old)");
        expect(generateText("Musa Fredson", 8)).toBe("Musa Fredson (8 years old)");
        expect(generateText("Kalisa Dobby", 90)).toBe("Kalisa Dobby (90 years old)");
        expect(generateText("Honorine Keza", 40)).toBe("Honorine Keza (40 years old)");
        expect(generateText("Mucyo Kaze Delphine", 32)).toBe("Mucyo Kaze Delphine (32 years old)");
    });

    test("Should output data-less text", () => {
        expect(generateText("", null)).toBe(" (null years old)");
        expect(generateText()).toBe("undefined (undefined years old)");
        expect(generateText(23, "", "input")).toBe("23 ( years old)");
        expect(generateText("", "")).toBe(" ( years old)");
        expect(generateText(15, 3, "input")).toBe("15 (3 years old)");
    })

});

    
// it("Can create element", () => {
//     expect(createElement('li', "Peace (18 years old)", 'user-item')).toBe("<li class='user-item'>Peace (18 years old)</li>");
// });
test.todo("Can validate input");