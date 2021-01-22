let domain, port, url;

$.get("/api/hostdetails/", (data) => {
    domain = data.domain;
    port = data.port;
});

$("#inoutUrl").on("input", () => {
    url = $(this).val();

    if(url.includes("benjamin")) alert("say benjamin");
    // else $("#submitBtn").attr("disabled", false);
});
