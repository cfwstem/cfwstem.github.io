          function getRootUrl() {
	return window.location.origin?window.location.origin+'/':window.location.protocol+'/'+window.location.host+'/';
}
          // https://cfwstem-alexpawlowski.c9.io
          /*global d3*/
          /*global csvURL*/
            //d3.text(getRootUrl() + "/csv/CFW_MemberList_Fall2015.csv", function(data) {
            d3.text(getRootUrl() + csvURL, function(data) {
                var rows = d3.csv.parseRows(data);

                var container = d3.select("table") //d3.select("body")
                  //  .append("table");
                    
                 // headers
                 
                 container.append("thead").append("tr")
                    .selectAll("th")
                    .data(rows[0]) //grabs first row (which we know as header)
                    .enter().append("th")
                    .attr("class", function(d){
                        return d.replace(/\s+/g, ''); // return name as class name as well, remove spaces
                    })
                    .text(function(column) {
                        return column; // return text in each element back as the header cell
                    });
                
                // data
                
                container.append("tbody")
                        .attr('class', 'list')
                        .selectAll("tr")
                        .data(rows.slice(1)).enter() // skip past the header
                        .append("tr")

                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .html(function(d) { return d; })
                        .attr('class', function(d, i){ return rows[0][i].replace(/\s+/g, ''); });
            });