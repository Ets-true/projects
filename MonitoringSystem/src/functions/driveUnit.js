export default function driver(getXhr, str, str2=""){
   
    // var getXhr = window.storage.getXhr;
    // getXhr.abort();
    var json = { [str]: "", [str2]: ""}
    var data = new FormData();
    data.append( "json", JSON.stringify( json ) );

    fetch("http://0meka0.hopto.org/",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })
        
        
      
    

    // var xhr1 = new XMLHttpRequest();
    // xhr1.open("POST", "http://0meka0.hopto.org/", true);
    // var json = { [str]: "", [str2]: ""}
    // console.log(json)
    // xhr1.send(JSON.stringify(json));
}