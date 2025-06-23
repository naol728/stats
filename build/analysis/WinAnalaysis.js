"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalaysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinAnalaysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let win = 0;
        for (let match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                win++;
            }
            else if (match[2] === "Man United" &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                win++;
            }
        }
        return `Man United won ${win} games`;
    }
}
exports.WinAnalaysis = WinAnalaysis;
