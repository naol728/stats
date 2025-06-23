import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinAnalaysis } from "./analysis/WinAnalaysis";
import { ConsoleReport } from "./reportTarget/ConsoleReport";
import { HtmlReport } from "./analysis/HtmlReport";
const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const winAnalysis = new WinAnalaysis("Man United");
const consolereport = new ConsoleReport();
const htmlreport = new HtmlReport();
const summery = new Summary(winAnalysis, consolereport);
summery.buildAndReport(matchReader.matches);
