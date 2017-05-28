// JavaScript Document

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([8, 16.5])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([20, 80])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(20)
   // .tickSize(-height)
    ;

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
   // .tickSize(-width)
    
    ;

var zoom = d3.behavior.zoom()
    .x(x)
    .y(y)
    .scaleExtent([1, 10])
    .on("zoom", zoomed);

var svg = d3.select(main).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom)
   .append("g");
   
   
   
var bg=svg.append("image")
    .attr("width", width)
    .attr("height", height)
	//.attr("xlink:href", "image/Caucasian Shepherd.jpg")
	//.attr("stroke","red")
	;

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
	.append("text")
	  .attr("dx", "820px")
	  .attr("dy", "3em")
      .text("Lifespan(year)")
	  .style({'font-weight': 'bold', 'fill': '#666'});

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
	.append("text")
	  .attr("dy", "-1em")
      .attr("dx", "-2em")
	  .style({'font-weight': 'bold', 'fill': '#666'})
      .text("Height(cm)");
	  


	
d3.select("button").on("click", reset);

function zoomed() {
  svg.select(".x.axis").call(xAxis);
  svg.select(".y.axis").call(yAxis);
  nodes.selectAll("circle").attr("transform", Transform);
}



function reset() {
  d3.transition().duration(750).tween("zoom", function() {
    var ix = d3.interpolate(x.domain(), [8, 16.5]),
        iy = d3.interpolate(y.domain(), [20, 80]);
    return function(t) {
      zoom.x(x.domain(ix(t))).y(y.domain(iy(t)));
      zoomed();
    };
  });
}
