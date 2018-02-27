import { scaleLinear } from 'd3-scale';
import { range as d3Range, max as d3Max } from 'd3-array';

const getYScale = (data, width, height, margin) => {
  return scaleLinear()
    .domain([0, d3Max(data)])
    .range([height - margin.bottom, margin.top]);
}
export {getYScale}