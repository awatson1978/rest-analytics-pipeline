// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "App Layout" : function (client) {
    client
    .url("http://localhost:3000")
    .waitForElementVisible("body", 1000)

    .verify.elementPresent("#navbarHeader")
    .verify.elementPresent("#navbarBrandLink")
    .verify.elementPresent("#getTheCodeLink")

    .verify.elementPresent("#appBody")
    .verify.elementPresent("#appLayout")

    .verify.elementPresent("#dashboardPage")

      .verify.elementPresent("#dataLineChartPanel")
      .verify.elementPresent("#dataLineChartTitle")
      .verify.elementPresent("#dataLineChart")
      .verify.elementPresent("#dataLineChartCanvas")


    .verify.elementPresent("#dataLineChartCanvas .nvd3")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g rect")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-x")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-y")

    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3")

    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-groups")

    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter")

    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups")

    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups .nv-group")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups .nv-series-0")

    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups .nv-series-0 circle")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups .nv-series-0 .nv-point-0")

    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups .nv-series-0 .nv-point-1")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups .nv-series-0 .nv-point-2")
    .verify.elementPresent("#dataLineChartCanvas .nv-lineChart g .nv-linesWrap .nvd3 g .nv-scatterWrap .nv-scatter g .nv-groups .nv-series-0 .nv-point-3")  

      .verify.elementPresent("#dataTabelPanel")
      .verify.elementPresent("#dataTable")
      .verify.elementPresent("#dataTableIdColumn")
      .verify.elementPresent("#dataTableTimestampColumn")
      .verify.elementPresent("#dataTableValueColumn")

    .verify.elementPresent("#navbarFooter")
    .verify.elementPresent("#addValueButton")

    .verify.elementPresent("#totalLabel")
    .verify.elementPresent("#totalText")
    .verify.elementPresent("#findLabel")
    .verify.elementPresent("#findText")
    .verify.elementPresent("#findOneLabel")
    .verify.elementPresent("#findOneText")
    .verify.elementPresent("#insertLabel")
    .verify.elementPresent("#insertText")
    .verify.elementPresent("#updateLabel")
    .verify.elementPresent("#updateText")
    .verify.elementPresent("#removeLabel")
    .verify.elementPresent("#removeText")

    .end();
  }
};
