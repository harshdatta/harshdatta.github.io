$.getJSON("js/data.json").then((jsonData)=>{
    var portfolio = new Vue({
        el: '#harsh-portfolio',
        data: jsonData
    });
})