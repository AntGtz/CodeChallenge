const StudentService = require("./../services/StudentService");
const Reader = require("./../utils/Reader");
let read = Reader.readJsonFile("./students.json");

class StudentController{
    static getStudents(){
        const array = StudentService.getAllStudents(read);
        return array;
    }
    static certificatedStudents(validation){
        const certificated = StudentService.getStudentsWithCertification(read, validation);
        return certificated;
    }
    static acreditedStudents(credits){
        const acredited = StudentService.getStudentsWithCredits(read, credits);
        return acredited;
    }
}

module.exports = StudentController;