# World-Cup-Group-Stage-master

## **Overview**

The code moves site API information to a function. The function is responsible for allocating teams randomly to 4 chunks of a group stage and displaying charts.

### **Random Allocation Function**

The function **`randomAllocate()`** allocates teams randomly to 4 chunks of a group stage. The teams are stored in an array and the groups are stored in a separate array. The function then shuffles the teams and assigns each team to a group.

The following steps are taken in the function:

- Retrieve the text content of each team's card using **`document.getElementById()`**.
- Store each team's text content in an array called **`array`**.
- Store each group's ID in an array called **`array2`**.
- Shuffle the teams using the **`shuffleArray()`** function.
- Assign each team to a group by iterating over the **`array`** and **`array2`** arrays simultaneously.
- Call the **`shuffleArray()`** and **`randomTeam()`** functions to randomize the allocation of teams.

### **Display Charts Function**

The function **`displayData()`** is responsible for displaying charts. The function retrieves the input values for each group from the HTML document and stores them in an array called **`array3`**. The function then uses the **`Highcharts`** library to display a variable pie chart.

The following steps are taken in the function:

- Retrieve the input values for each group using **`document.getElementById()`**.
- Store each input value in an array called **`array3`**.
- Create an array called **`array2`** to store the group IDs.
- Use the **`Highcharts`** library to create a variable pie chart.

## **Bar Chart**

The bar chart shows the points of the top 4 teams in the World Cup. The chart has the following properties:

- Chart type: Column
- Title: Bar Chart
- X-Axis type: Category
- Y-Axis title: Points
- Legend: Disabled
- Data Labels: Enabled

### **Data**

The data used to create the bar chart comes from arrays **`array2`** and **`array3`**. The arrays contain the following information:

- **`array2`**: an array of the top 16 teams in the World Cup
- **`array3`**: an array of the points for each of the top 16 teams in the World Cup

## **Variable Pie Chart**

The variable pie chart shows the points of four specific teams in the World Cup. The chart has the following properties:

- Chart type: Variable pie
- Title: Pie Chart

### **Data**

The data used to create the variable pie chart comes from arrays **`array2`** and **`array3`**. The arrays contain the following information:

- **`array2`**: an array of the top 16 teams in the World Cup
- **`array3`**: an array of the points for each of the top 16 teams in the World Cup
The chart displays four specific teams, with their names and points:
- Team 1: **`array2[8]`** with **`array3[8]`** points
- Team 2: **`array2[9]`** with **`array3[9]`** points
- Team 3: **`array2[10]`** with **`array3[10]`** points
- Team 4: **`array2[11]`** with **`array3[11]`** points.

### **Link to Live Demo**

The live demo for this code World-Cup-Group can be accessed at [Click here](https://mikiyaas.github.io/World-Cup-Group-Stage-master/).
