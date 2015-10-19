            d3.text("https://cfwstem-alexpawlowski.c9.io/csv/CFW_MemberList_Fall2015.csv", function(data) {
                var rows = d3.csv.parseRows(data);

                var container = d3.select("table") //d3.select("body")
                  //  .append("table");
                    
                 // headers
                 
                 container.append("thead").append("tr")
                    .selectAll("th")
                    .data(rows[0]) //grabs first row (which we know as header)
                    .enter().append("th")
                    .attr("class", function(d){
                        return d; // return name as class name as well
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
                        .text(function(d) { return d; })
                        .attr('class', function(d, i){ return rows[0][i]; });
            });