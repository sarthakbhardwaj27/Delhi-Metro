const csvFileURL = "W:\0CODING\4Projects\2023\Ideas\DelhiMetro\Delhi-Metro\DELHI_METRO_DATA.csv"

fetch(csvFileURL)
.then(response=>response.text)
.then(console.log(data))
.catch((e)=>{
   console.log(e)
})