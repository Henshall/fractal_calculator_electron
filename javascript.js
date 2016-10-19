
var a = 2
  var a = ['1']
  a.push($("a").val())
   number_fractal_dimensions = 1

//   Fractal dimension calculator script:

   var fd =0;
    var ta = 0;
     var tb = 0;
      var tc = 0;
       var td = 0;

       function calc2(){
        //  console.log("you clicked calc2")
             ta  = Number(document.getElementById("ta").value);
               tb  = Number(document.getElementById("tb").value);
               tc  = Number(document.getElementById("tc").value);
              td  = Number(document.getElementById("td").value);
           tctd = tc.value / td.value;
           fd = (Number(Math.log10(tb/td)))  / (Number(Math.log10(ta/tc))) ;
               //(math.log(tc / td) ) / (math.log(ta / tb) );
           fdbox.innerHTML = fd * -1;
       }

function calculate(a,b,c,d,e) {
      // console.log(a);
      // console.log(b);
      // console.log(c);
      // console.log(d);
      // console.log(e);
      ta  = Number(document.getElementById(a).value);
        tb  = Number(document.getElementById(b).value);
        tc  = Number(document.getElementById(c).value);
       td  = Number(document.getElementById(d).value);
    tctd = tc / td;
    fd = (Number(Math.log10(tb/td)))  / (Number(Math.log10(ta/tc))) ;
        //(math.log(tc / td) ) / (math.log(ta / tb) );
    $("#" + e  ).val(fd * -1)
    console.log('you clicked and everything executed')
}





function clearTable() {
    var tableRef = document.getElementById('tables');

    if (tableRef) {
        while (tableRef.rows.length > 0) {
            tableRef.deleteRow(0);
        }
    }
}



    function clearTable2() {
    var tableRef = document.getElementById('tables2');

    if (tableRef) {
        while (tableRef.rows.length > 0) {
            tableRef.deleteRow(0);
        }
    }
}


    function generate_table2() {
  // get the reference for the body
  var body = document.getElementsByTagName("tablediv")[0];

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

tbl.setAttribute("id", "tables2");
  // creating all cells
  for (var i = 0; i < 1; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");

      var stuff = "Measurement Length_";

        if (j === 1) {

              stuff =   "_# of times it fits in_";
      }

        if (j === 2) {
            stuff =   "____Scale Ratio____"  ;
        }

          if (j === 3) {
            stuff =  "_Perimeter of Shape_";



          }

      var cellText = document.createTextNode(stuff);

        cell.appendChild(cellText);
      row.appendChild(cell);
    }



    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  tablediv.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("tablediv")[0];

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tbl.setAttribute("id", "tables");
  // creating all cells




    for (var i = 0; i < 50; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");

      var stuff = ((1 / Math.pow(Math.E, (Math.log((1/tb) ) ) /fdbox.innerHTML )) / (1 / Math.pow(Math.E, (Math.log((1/tb * (i * .1)) ) ) /fdbox.innerHTML ))) * ta  ;

        if (j === 1) {
              stuff =    tb * (i * .1);

      }

        if (j === 2) {
            stuff =  (1 / Math.pow(Math.E, (Math.log((1/tb * (i * .1)) ) ) /fdbox.innerHTML ) ) ;
        }

          if (j === 3) {
            stuff =   (((1 / Math.pow(Math.E, (Math.log((1/tb * (i * .1)) ) ) /fdbox.innerHTML )) / (1 / Math.pow(Math.E, (Math.log((1/tb * (i * .1)) ) ) /fdbox.innerHTML ))) * ta) * tb * (i * .1);

          // chagne 19.85 to some variable to make it work! its not working yet!
          }

      var cellText = document.createTextNode(stuff);

        cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
 tablediv.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}


// linear interpolation function: calculates equation for all given fractal dimension (for first 10 iterations)

function generatefractal(){
  var one = document.getElementById('1').value
  var two = document.getElementById('2').value
  var three = document.getElementById('3').value
  var four = document.getElementById('4').value
  var five = document.getElementById('5').value
  var six = document.getElementById('6').value
  var seven = document.getElementById('7').value
  var eight = document.getElementById('8').value
  var nine = document.getElementById('9').value
  var ten = document.getElementById('10').value
  var eleven = document.getElementById('11').value
  var twelve = document.getElementById('12').value
}

function find_dimension(){
    x = document.getElementById('coordinate').value;
   upper_x = parseFloat(Math.ceil(x));
   lower_x = parseFloat(Math.floor(x));
   upper_y = parseFloat(document.getElementById( "_" + upper_x).value);
   lower_y = parseFloat(document.getElementById( "_" + lower_x).value);
// equation of coordinates given between two points
  //
  m =  (upper_y - lower_y) / (upper_x - lower_x)
  b =   lower_y + (-Math.abs(m * lower_x))
  y = (m * x) + b
   x_value.innerHTML = y;



      console.log ('Ux =' + upper_x)
      console.log ('Lx =' + lower_x)
      console.log (document.getElementById( "_" + upper_x).value)
      console.log(   (document.getElementById( "_" + lower_x).value))
      console.log ('m =' + m)
      console.log ('b =' + b)

}





// apend to table
$('.add').on('click', function() {
  $('.large_table').append('<tr><td>my data</td><td>more data</td></tr>');
  });
