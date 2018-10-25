//Dependencies 
const cheerio = require('cheerio');
const fs = require ('fs');

//HTML Files
let marchData = ['./data/2015-03-18/lot1.html', './data/2015-03-18/lot2.html','./data/2015-03-18/lot3.html','./data/2015-03-18/lot4.html','./data/2015-03-18/lot5.html'];
let decemberData = ['./data/2017-12-20/lot1.html','./data/2017-12-20/lot2.html','./data/2017-12-20/lot3.html','./data/2017-12-20/lot4.html','./data/2017-12-20/lot5.html'];
let parsedList = [];


//Reading initial HTML files
for (i=0; i< marchData.length; i++){
    let html = fs.readFileSync(marchData[i]).toString();
    let parse = cheerio.load(html);

   //Grabbing work title
    let workTitle = parse('h3').text().replace("Title:");
    let totalAmount = "";
    let currency = "";

   //TODO: Grab price data
    parse('div').map(function(i, price){
      price = cheerio(price);

  
    });

    //Grabing artist name
    parse('h2').map(function(i, artist){
     artist = cheerio(artist);
     artistName = artist.text();
     });
   
    let object = {
        "value": 0,
        "works": [
          {"title": workTitle,
          "currency": currency,
          "totalLifetimeValue": totalAmount},
        ],
        "artist": artistName
      };

    parsedList.push(object);
    console.log(JSON.stringify(object));

 }

