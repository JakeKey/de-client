import React, { Component } from 'react';
import * as d3 from "d3";

export class PieChart extends Component {
  constructor(props) {
    super(props);

    this._pieChart = null;
  }
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {

    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3.select(this._pieChart).append("svg").attr("width", 700).attr("height", 300);
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", 0)
      .attr("width", 25)
      .attr("height", (d, i) => d*10)
      .attr("fill", "green");

  }

  render() {
    return (
      <div ref={ref => this._pieChart = ref}  >test</div>
    )
  }
};