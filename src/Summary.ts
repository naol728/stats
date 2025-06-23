import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndReport(matchs: MatchData[]): void {
    const analysis = this.analyzer.run(matchs);
    this.outputTarget.print(analysis);
  }
}
