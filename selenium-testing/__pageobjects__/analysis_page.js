import { By } from "selenium-webdriver";
import { findElementBy } from "../utils";

class AnalysisPage {

  get routeName(){
    return By.css('.route-title > span')
  }

  get dataTable() {
    return By.css('#data-table');
  }

  get dataTableTitle(){
    return By.css('#data-table-title')
  }

  get lineChart() {
    return By.className(`.serie-chart`);
  }

  getLineChart() {
    return findElementBy(this.lineChart)
  }

  getDataTable() {
    return findElementBy(this.dataTable);
  }

  getRouteTitle(){
    return findElementBy(this.routeName).getText();
  }

  getDataTableTitle() {
    return findElementBy(this.dataTableTitle).getText();
  }
}

export default new AnalysisPage();