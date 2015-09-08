(function(){
    var showButton = document.getElementById("showButton"),
        hideButton = document.getElementById("hideButton"),
        flowerContainer = document.getElementById("flowerContainer");
    showButton.addEventListener('click',function(){
        flowerContainer.style.display = "block";
    });
    hideButton.addEventListener('click',function(){
        flowerContainer.style.display = "none";
    })
})();