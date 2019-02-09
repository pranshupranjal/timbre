var myJSON = '{"title":["JSON","CSS","Microsoft","Apple","Pranshu"], "url":["https://www.json.org/","wow","mi.com"],"snippet":["JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999.","hello","mirror"]}';
var myObj = JSON.parse(myJSON);
var i;

for(var i = 0; i < myObj.title.length; i++) {
    document.getElementById("results").innerHTML += `
    <div class="g">
    <h3 class="r">Title</h3>
    <div class="lt">
        Link
    </div>
    <span class="st">
        Snippet
    </span>
</div>`;
}


for(i = 0; i < myObj.title.length; i++)
{
    document.getElementsByClassName("r")[i].innerHTML = myObj.title[i];
    document.getElementsByClassName("lt")[i].innerHTML = myObj.url[i];
    document.getElementsByClassName("st")[i].innerHTML = myObj.snippet[i];
}



function mainsubmit() {
    event.preventDefault();
    document.getElementById("results").setAttribute("style","display: grid;");
  }