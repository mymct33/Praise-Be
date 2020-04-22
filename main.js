var credits = 0;
var cursors = 0;
var prestige = 0;

function creditClick(number){
    credits = credits + number;
    document.getElementById('credits').innerHTML = prettify(credits);
};

function buyCursor(){
    var cursorCost = Math.floor(10*Math.pow(1.1,cursors));
    if(credits >= cursorCost){
        cursors = cursors + 1;
        credits = credits - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;
        document.getElementById('credits').innerHTML = prettify(credits);
        var cursorCost = Math.floor(10*Math.pow(1.1,cursors));
        document.getElementById('cursorCost').innerHTML = cursorCost;
    };
};

function save(){
    var save = {
        credits: credits,
        cursors: cursors,
        prestige: prestige
    };
    localStorage.setItem("save",JSON.stringify(save));
};

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if(typeof savegame.credits !== "undefined") credits = savegame.credits;
    if(typeof savegame.cursors !== "undefined"){
        cursors = savegame.cursors;
        cursorCost = Math.floor(10*Math.pow(1.1,cursors));
        document.getElementById('cursorCost').innerHTML = cursorCost;
    };
    if(typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
};

function wipeSave(){
    localStorage.removeItem("save");
}

function prettify(input){
    var output = Math.round(input * 1000)/1000;
    return output;
}

window.setInterval(function(){
    creditClick(cursors);

    document.getElementById('credits').innerHTML = prettify(credits);
    document.getElementById('cursors').innerHTML = cursors;
}, 1000);