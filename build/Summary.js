"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndReport(matchs) {
        const analysis = this.analyzer.run(matchs);
        this.outputTarget.print(analysis);
    }
}
exports.Summary = Summary;
