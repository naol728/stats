import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./MatchResults";
const reader = new CsvFileReader("football.csv");
reader.read();

let ManUnitedScore = 0;
for (let match of reader.data) {
  if (match[1] == "Man United" && match[5] == MatchResults.AwayWin) {
    ManUnitedScore++;
  } else if (match[2] == "Man United" && match[5] == MatchResults.HomeWin) {
    ManUnitedScore++;
  }
}
console.log(reader.data);
