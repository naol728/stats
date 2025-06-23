import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinAnalaysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let win = 0;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        win++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        win++;
      }
    }
    return `Man United won ${win} games`;
  }
}
