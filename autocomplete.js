var availableKeywords = [
   'Iron Ore',
    'Iron Ingot',
    'Redstone',
    'Diamond',
    'Emerald',
    'Gold Ore',
    'Gold Ingot',
    'Iron Nugget',
    'Apple',
    'Wooden Hoe',
    'Wooden Pickaxe'
];

var resultsBox = document.querySelector(".result-box");
var inputBox = document.getElementById("search-box-input");

inputBox.onkeyup = function() {
    var result = [];
    var input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result) {
    const content = result.map((list)=>{
        console.log("V1: " + list);
        let data = list.toLowerCase().replace(" ", "-");
        console.log("V2: " + list);
        console.log("V3: " + "<li><a href=\"" + data + "-page.html\">" + list + "</a></li>");
        return "<li>" + list + "</li>";
    });
    
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    
}