// JavaScript Document

var nodes=svg.append("svg")
    .attr("width", width)
    .attr("height", height);
	
var dImage=svg.append("image");
  
	
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([0, 0])
  .direction("e")
  .html(function(d) {
    return "<span style='color:white;font-size:30px'>"+d.Name+"</span></br></br>Height: <strong><span style='color:lightgreen'>"+ d.Height +"</span></strong> cm, Weight: <strong><span style='color:lightgreen'>"+ d.Weight +"</span></strong> kg, Life Span: <strong><span style='color:lightgreen'>"+ d.LifeSpan +"</span></strong> year.</br></br>" +
	"<img  src='image/"+d.Name +".jpg' width='350' >";
  });
	
//d3.csv("data.csv",function(error,data){

nodes.call(tip);		
nodes.selectAll("circle")	
    .data(data)
	.enter().append("circle")
	.attr("class", "nodes")
	.attr("transform", Transform)
	.style("fill",function (d){return d.Color})
	.style('cursor', 'pointer')
       
	
	.on('mouseover', tip.show)
        .on('mouseout', tip.hide)

        .attr("r", 0)
	
        .transition().duration(function(d){return Math.sqrt(d.Weight)*400})
	.attr("r", function(d){return Math.sqrt(d.Weight)*3})
	;
	
	  
//	});	  
	  
function Transform(d,i) {
    var nx=x(d.LifeSpan);
	var ny=y(d.Height);
    return "translate(" + nx+ "," +  ny + ")";
}

