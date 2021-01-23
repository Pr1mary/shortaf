$(document).ready(() => {

    let domain, port, url;

    $.get("/api/hostdetails/", (data) => {
        domain = data.domain;
        port = data.port;
    });

    $("form").submit((e) => {
        let url = $("#inoutUrl").val();
    
        if(url.includes(domain)){
            alert("This link is already shortaf link");
            e.preventDefault();
        }
    });

});
