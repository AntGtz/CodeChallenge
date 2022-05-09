describe("Unidad de pruebas para service", () => {
    test("1)Verifica que se envien todos los students", () => {
        const StudentController = require("./../lib/controllers/StudentController");
        expect(StudentController.getStudents()).not.toBe("[]");
    });
    test("2)Envia mails de students que tengan certificacion", () =>{
        const StudentController = require("./../lib/controllers/StudentController");
        let array = "Haynes@visualpartnership.xyz";
        expect(StudentController.certificatedStudents(true)[4]).toStrictEqual(array);
    });
    test("3)Recibir students que tengan mas de 500 creditos", () => {
        const StudentController = require("./../lib/controllers/StudentController");
        let array = {"credits": 652, "email": "Haynes@visualpartnership.xyz", "enrollments": ["Visual Thinking Avanzado"], "haveCertification": true, "id": "6264d5d8dd01ab97ddedbba5", "name": "Taylor", "previousCourses": 5};
        expect(StudentController.acreditedStudents(500)[3]).toStrictEqual(array);
    });
});