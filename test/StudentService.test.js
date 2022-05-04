describe("Unidad de pruebas para service", () => {
    test("1)Verifica que se envien todos los students", () => {
        const StudentService = require("./../lib/services/StudentService");
        const Reader = require("./../lib/utils/Reader"); 
        const info = Reader.readJsonFile("./students.json");
        expect(StudentService.getAllStudents(info)).not.toBe("[]");
    });
    test("2)Envia students que tengan certificacion", () =>{
        const StudentService = require("./../lib/services/StudentService");
        const Reader = require("./../lib/utils/Reader"); 
        const info = Reader.readJsonFile("./students.json");
        const first = {"credits": 508, "email": "Todd@visualpartnership.xyz", "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Avanzado"], "haveCertification": true, "id": "6264d5d89f1df827eb84bb23", "name": "Warren", "previousCourses": 1}
        expect(StudentService.getStudentsWithCertification(info, true)[0]).toStrictEqual(first);
    });
    test("3)Recibir students que tengan mas de 500 creditos", () => {
        const StudentService = require("./../lib/services/StudentService");
        const Reader = require("./../lib/utils/Reader"); 
        const info = Reader.readJsonFile("./students.json");
        const first = {"credits": 508, "email": "Todd@visualpartnership.xyz", "enrollments": ["Visual Thinking Intermedio", "Visual Thinking Avanzado"], "haveCertification": true, "id": "6264d5d89f1df827eb84bb23", "name": "Warren", "previousCourses": 1}
        expect(StudentService.getStudentsWithCredits(info, "500")[0]).toStrictEqual(first);
    });
});