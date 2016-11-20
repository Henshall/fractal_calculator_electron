$(document).ready(function () {

  p = 0;
  found = false;

  $("#calculate_perimeter").on("click", function () {
    // set variables to be used in calcuations
    given_scale = $("#scale").val();
    var a0 = $("#a0").val();
    var b0 = $("#b0").val();
    var a1 = $("#a1").val();
    var b1 = $("#b1").val();
    var fd = $("#fdbox0").val();
    var n =  Math.pow((a0 / given_scale),fd ) * b0;
    var i = 0;
    sum = 0;
    p = 0;

    // create length array
    length_array = [];

    // takes each length and puts it into an array:
    var i = 0
    while (i < (number_fractal_dimensions + 1)){
      length_array.push($("#a" + i ).val() );
      i = i + 1;
    }

    // calculates fractal dimensions
    for (i = 0; i < (counter - 2); i++) {
      calculate('a' + (i) , 'b' + (i), 'a' + (i + 1), 'b' + (i + 1), 'fdbox' + (i)  );
    }

      // create length array
    dimensions_array = [];

    //takes each dimension, puts it in an array
    while (i < number_fractal_dimensions){
    dimensions_array.push($("#fdbox" + i ).val() );
    var i = i + 1;
    }


    // validates to make sure there are no blank spaces:
    var_length = $("#a0").val()
    length_array.some(function(length){
      console.log(length)
      if (length === " "){
        alert('you left something blank')
      }
      if (length === ""){
        alert('you left something blank')
      }
       if (length == 0) {
        alert('you have typed in a 0 value, length may not be correct');
      }

      if (parseFloat(length) > parseFloat(var_length)){
        console.log("length" +  length + "var_length" + var_length )
      alert('all of the measurement lengths must be from highest to lowest please change value ' + length);
      }
      var_length = length
    });

  // find closest value(s) of scale to our given values

    length_array.some(function(length){
    // value = p + 1;
      if (given_scale  === length){
        found = true;
        n = $("#b" + (p)).val();
        m = n;
        perimeter =   given_scale * n;
        $("#perimeter").val(perimeter);
        // console.log("equal");
        return true;
      }
      else if (parseFloat(given_scale) < parseFloat(length)) {
        value = (p + 1);
        // console.log("less")

      }
      else if (parseFloat(given_scale) > parseFloat(length) && (p) <= 1) {
         found = true;
         var last_fd = $("#fdbox0").val();
         var the_last_scale = $("#a0").val();
         var the_last_n = $("#b0").val();
         var r =  (Math.pow((the_last_scale / given_scale),  Math.abs(last_fd)) * the_last_n ); //(Math.pow((the_last_scale / given_scale), Math.abs(fd)) * the_last_n);
         perimeter = given_scale * r;
        //  console.log($("#perimeter").val());
         $("#perimeter").val(perimeter);
        //  console.log($("#perimeter").val());
         return true;
      }
      else if (parseFloat(given_scale) > parseFloat(length)){
        console.log('using 2 fds')
        found = true;
        upperboxa =  $("#a" + (value - 1)).val();
        lowerboxa =  $("#a" + (value)).val();
        upperfd = $("#fdbox" + (value - 1)).val();
        lowerfd = $("#fdbox" + (value - 2)).val();
        upperboxb =  $("#b" + (value - 1)).val();
        lowerboxb =  $("#b" + (value)).val();
        m = (lowerboxa - upperboxa ) / ((value) - (value - 1 ));
        b = Math.abs(m * value) + parseFloat(lowerboxa)
        x = (parseFloat(given_scale) - b) / m
        y = m * x + b
        m2 = (lowerfd - upperfd ) / 1;
        b2 = Math.abs(m2 * (value - 1)) + parseFloat(lowerfd);
        y2 = m2 * (x - 1) + b2;

        if (x > 1.5 ){
        new_n =  ((Math.pow((lowerboxa / given_scale), y2)) * lowerboxb);
        } else {
          new_n =  (Math.pow((upperboxa / given_scale), y2) * upperboxb);
        }

        perimeter = given_scale * new_n;
        $("#perimeter").val(perimeter);
        // console.log("greater then")
        return true;

      }
      else {
        console.log("There was a terrible error, you shouldnt be seeing this!");
      }
      sum = sum + parseFloat(length);
      p = p + 1;
    });


    if (found === false){
      var fd = $("#fdbox" + (value - 2)).val();
      var last_scale = $("#a" + (value - 1)).val();
      var last_n = $("#b" + (value - 1)).val();
      var new_false =  (Math.pow((last_scale / given_scale), fd) * last_n);
      perimeter = given_scale * new_false
      $("#perimeter").val(perimeter);
    }
    found = false;
  });

  counter =   $('#myTable tr').length - 1;
  $("#addrow").on("click", function () {

    var newRow = $("<tr>");
    var cols = "";
    cols += '<td class = "name measurement">Measurement ' + counter + ' </td>';
    cols += '<td><input class = "text_box" id = "a' + (counter - 1) + '" type="text" name="name' + (counter - 1) + '"/></td>';
    cols += '<td><input class = "text_box" id = "b' + (counter - 1) + '"  type="text" name="price' + (counter - 1) + '"/></td>';
    cols += '<td><input disabled="disabled" id = "fdbox' + (counter - 2) + '"  type="text" class=" fd_box calc_text"/></td>';
    cols += '<td><input type="button" class = "delete_button" id="ibtnDel' + (counter - 3) + '"  value="Delete"></td></tr>';
    newRow.append(cols);
    $("table.order-list").append(newRow);
    counter++;
    number_fractal_dimensions = counter - 2;
    if (counter == 100) $('#addrow').attr('disabled', true).prop('value', "You've reached the limit");
    $("#ibtnDel" + (counter - 5)).css('display', 'none')

  });

  $("table.order-list").on("change", 'input[name^="price"]', function (event) {
    calculateRow($(this).closest("tr"));
    calculateGrandTotal();
  });

  $("table.order-list").on("click", ".delete_button", function (event) {
    // console.log(counter);
      $("#ibtnDel" + (counter - 5)).css('display', 'initial')
      $(this).closest("tr").remove();
      calculateGrandTotal();
      counter --;
      if (counter < 5) $('#addrow').attr("disabled", false).prop('value', "Add Row");
  });

  var a = 2
  var a = ['1']
  a.push($("a").val())
  number_fractal_dimensions = 1

    //   Fractal dimension calculator script:

  var fd = 0;
  var ta = 0;
  var tb = 0;
  var tc = 0;
  var td = 0;

  function calc2(){
    ta  = Number(document.getElementById("ta").value);
    tb  = Number(document.getElementById("tb").value);
    tc  = Number(document.getElementById("tc").value);
    td  = Number(document.getElementById("td").value);
    tctd = tc.value / td.value;
    fd = (Number(Math.log10(tb/td)))  / (Number(Math.log10(ta/tc))) ;
    fdbox.innerHTML = fd * -1;
   }

   // calculates fractal dimensions

  function calculate(a,b,c,d,e) {

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
  }

    // apend to table
    $('.add').on('click', function() {
      $('.large_table').append('<tr><td>my data</td><td>more data</td></tr>');
      });

    function calculateRow(row) {
      var price = +row.find('input[name^="price"]').val();
    }

    function calculateGrandTotal() {
      var grandTotal = 0;
      $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
      });
      $("#grandtotal").text(grandTotal.toFixed(2));
    }











});
