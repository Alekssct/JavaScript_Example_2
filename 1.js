var salads = ["Греческий", 350, "Цезарь", 380, "Тёплый салат", 430, "Оливье", 410, "Морской", 320];
var count = 0;

function addList2(salads) {
    var temp = $("<td id='head' colspan=3></td>").text("Салаты");
    $('table').html("<tr></tr>");
    $('tr').html(temp);
    for (var i = 0; i < (salads.length / 2); i++) {
        var temp0 = $("<tr id='new" + i + "'>");
        $("table").append(temp0);
        $("#new"+i).html("<td>" + salads[count++] + "</td><td class='red'>"+ salads[count++]+"</td>");
    }
}

addList2(salads);
