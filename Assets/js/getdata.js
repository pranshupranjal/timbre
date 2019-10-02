var spData = null;
function doData(json) {
    spData = json.feed.entry;
}

// function drawRow(parent, rowData, r) {
//     parent.append($('<div class="col-md-3 card">'));
//         // if (rowData == null) return null;
//         // if (rowData.length == 0) return null;
//         parent.append($('<div class="songcard">'));
//             parent.append($('<div class="songname">'));
//                 parent.append(rowData[r]);
//             parent.append('</div>');
//             parent.append($('<div class="singer">'));
//                 parent.append(rowData[r+1]);
//             parent.append('</div>');
//             parent.append($('<div class="language">'));
//                 parent.append(rowData[r+2]);
//             parent.append('</div>');
//         parent.append('</div>');
//     parent.append('</div>');

//     return parent;
// }

function drawRow(parent, rowData, r) {
    parent.append($('<div class="col-md-3 card"><div class="songcard"><div class="songname">'+rowData[r]+'</div><div class="singer">'+rowData[r+1]+'</div><div class="language">'+rowData[r+2]+'</div></div></div>'));
    // return parent;
}


function readData(parent)
{
    var data = spData;
    var rowData = [];
    for(var r=0; r<data.length; r++)
    {
        var cell = data[r]["gs$cell"];
        var val = cell["$t"];
        // if (cell.col == 1) {
        //    drawRow(parent, rowData);
        //     rowData = [];
        // }
        rowData.push(val);
        console.log("Row:");
        console.log(rowData);
        // if(r%3==0)
        {
            drawRow(parent,rowData,r);
        }
    }
        
}

$(document).ready(function(){
    readData($("#songs_results"));
});