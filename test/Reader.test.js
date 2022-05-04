describe("Unidad de pruebas para reader", () => {
    test("1)Verificar que se lea el json", () => {
        const Reader = require("./../lib/utils/Reader");
        expect(Reader.readJsonFile("./students.json")).not.toBe("[]");
    });
});