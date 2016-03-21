    // Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawSalesChart);
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawSalesChart( dataRows ) {

    var isArray = Array.isArray ||
        function isArray(value) {
            return {}.toString.call(value).indexOf('Array') >= 0;
        };

    var o = isArray( dataRows );
    if ( !o ) return;
    if ( dataRows == undefined ) return;
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Sales');

    var i = dataRows.length - 1;
    var heading = dataRows[0][0] + "-" + dataRows[i][0];


    data.addRows( dataRows );
    var options = {'title': "Sales " + heading,
        'width':310,
        'height':275};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
