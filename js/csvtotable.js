
        // help from
        
        // http://bl.ocks.org/syntagmatic/3687826
        // http://stackoverflow.com/questions/23747945/how-to-add-header-row-to-d3-csv-generated-table
        // http://stackoverflow.com/questions/9268645/creating-a-table-linked-to-a-csv-file
        // https://vis4.net/blog/posts/making-html-tables-in-d3-doesnt-need-to-be-a-pain/
        // https://github.com/mbostock/d3/wiki/CSV
        // http://stackoverflow.com/questions/16102505/d3-js-how-to-apply-multiple-classes-when-using-a-function

        // AND THEN I FINALLY REALIZED: [][]
        
        // orginated from

        // http://bl.ocks.org/ndarville/7075823

            d3.text("data.csv", function(data) {
                var rows = d3.csv.parseRows(data);

                var container = d3.select("body")
                    .append("table");
                    
                 // headers
                 
                 container.append("thead").append("tr")
                    .selectAll("th")
                        .data(rows[0]).enter() //grabs first row (which we know as header)
                        .append("th")
                        .attr("class", function(d){
                        return d; // return name as class name as well
                    })
                        .text(function(column) {
                            return column; // return text in each element back as the header cell
                        }
                    );
                
                // data
                
                container.append("tbody")
                    .selectAll("tr")
                        .data(rows.slice(1)).enter() // skip past the header
                        .append("tr")

                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        
                        // return value to td element from element in array
                        .text(function(d) { return d; })
                        
                        // append class information based on information from header row at index i
                        .attr('class', function(d, i){ return rows[0][i]; }); 
                        
            });