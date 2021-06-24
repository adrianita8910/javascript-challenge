// Reference to the data file
var tableData = data;

// Create reference to the table body using d3.select
var tbody = d3.select("tbody");

// Function that build the html table
function buildTable(data)
{
    // Clear out the existing data
    tbody.html("");

    // take the table data and build the html table
    // loop through each object in the array
    // each object is going to be a row in the table
    data.forEach((dataRow) => {
        // Add a row to the html table
        var row = tbody.append("tr");

        // Use the object.value in order to get table data
        // Then add a table cell(td) for each value in the object
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
}

// Fuction taht will handle the filtering
function filterData()
{
    // Get the data time value from the form
    var date = d3.select("#datetime").property("value");
    // Variable that will be the filtered data
    var filtered = tableData;

    // Check to see if the date was entered
    if(date)
    {
        // If the date is a non-null / non-empty value, apply that filter to the dataset
        // To create the subset - filter out the rows where the datetime matches the filter
        filtered = filtered.filter(row => row.datetime == date);
    }

    // Rebuilt the html table
    buildTable(filtered);  
}

// Attach an event to the listen for the button click and pass in the data for the form
d3.selectAll("#filter-btn").on("click", filterData);


// Call function buildTable
buildTable(tableData);