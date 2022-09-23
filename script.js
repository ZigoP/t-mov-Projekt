const showPage = (id) => {
    console.log(id)
    if(id === "zadanie"){
        window.location.href = "zadanie.html";
    }else if(id === "ponuka"){
        window.location.href = "ponuka.html";
    }else if(id === "houseIcon"){
        window.location.href = "index.html";
    }
}