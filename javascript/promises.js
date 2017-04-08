function getImg(src){
    return new Promise(function(resolve) {
        const img = new Image();
        img.src = src;
        img.onload = function(){
            resolve(img);
        };
    });
}

export {getImg};
