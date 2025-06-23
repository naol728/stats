"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResults_1 = require("./MatchResults");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
let ManUnitedScore = 0;
for (let match of reader.data) {
    if (match[1] == "Man United" && match[5] == MatchResults_1.MatchResults.AwayWin) {
        ManUnitedScore++;
    }
    else if (match[2] == "Man United" && match[5] == MatchResults_1.MatchResults.HomeWin) {
        ManUnitedScore++;
    }
}
console.log(reader.data);
