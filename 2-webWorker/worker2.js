this.onmessage = function(){
    let m = 0;
    for(let i=0;i<2000000000000;i++){
        m+= i;
    }
    this.postMessage(m)
}
