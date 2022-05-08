const StudentController = require("./lib/controllers/StudentController");
const express = require("express");
//const { request, response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Iniciando API code challenge"});
});

app.listen(port, () => {
    console.log(`CodeChallenge API in localhost:${port}`);
});

app.get("/v1/students/", (request, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});

app.get("/v1/students/email/", (request, response) => {
    const mails = StudentController.certificatedStudents(true);
    response.json(mails);
});
app.get("/v1/students/credits/:number", (request, response) => {
    const number = request.params.number;
    const credits = StudentController.acreditedStudents(number);
    response.json(credits);
});