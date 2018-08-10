console.log('hello tsc');
import * as d3 from 'd3';
d3.select("body").append("div").text("새로운 문장");
var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
d3.select("body").selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("height", function (d) {
    return d + "px";
})
    .style("width", function (d) {
    return "20px";
})
    .attr("class", "bar-chart");
var w = 200, h = 100, d = 5;
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
    console.log(i * (w / data.length));
    return i * (w / data.length);
})
    .attr("y", function (d) {
    console.log('d', d);
    return h - d;
})
    .attr("width", w / data.length - 1) // 너비 설정
    .attr("height", function (d) {
    return d;
})
    .attr("fill", function (d) {
    return "red";
});
//# sourceMappingURL=app.js.map