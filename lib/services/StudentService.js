class StudentService{
    static getAllStudents(student){
        const array = student
        return array
    }
    static getStudentsWithCertification(student, certification){
        const studentCertificated = student.filter((student) => student.haveCertification == certification);
        return studentCertificated;
    }
    static getStudentsWithCredits(student, credits){
        const studentWithCredits = student.filter((student) => student.credits >= credits);
        return studentWithCredits;
    }
}

module.exports = StudentService