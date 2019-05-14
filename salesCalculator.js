// source
https://stackoverflow.com/questions/39561372/auto-update-calculate-values-for-rows-in-html-table-with-javascript

function getValues()
  {
    // returns the value of the elements with the id "cost" and "sold"
    var cost = document.getElementById('cost').value;
    var sold = document.getElementById('sold').value;
    var profit = 0;
    // conditional statement when cost is blank  
    if (cost=="")
    {
      profit = sold - cost;
    }
    else
    {
      profit = sold - cost;
    }
    var value = profit;
    document.getElementById("profit").innerHTML = profit;
  }

//repeat for each line. need to change id's in html file there is probably a much more efficient way of doing this but I did not have time
function getValues1()
  {
    var cost = document.getElementById('cost1').value;
    var sold = document.getElementById('sold1').value;
    var profit = 0;
    if (cost=="")
    {
      profit = sold - cost;
    }
    else
    {
      profit = sold - cost;
    }
    var value = profit;
    document.getElementById("profit1").innerHTML = profit;
  }


