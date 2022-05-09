const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        const students = JSON.parse(rawdata);
        return students;
    }
}

module.exports = Reader;