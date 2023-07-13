function download(URL, cb){
    console.log("download starts")
    setTimeout(() => {
        console.log("download finish")
        let file = URL.split('/').pop(); //file name extract krne k lia 
        cb(file, upload);
    }, 2000);
}

function compress(file, cb){
    console.log("compression starts")
    setTimeout(() => {
        console.log("compression finish")
        let cfile = file.split('.')[0] + '.zip' // Ye uska last extension name extract krke change krdega
        cb(cfile, allDone);
    }, 2000);
}

function upload(cfile, cb){
    console.log("upload starts")
    setTimeout(() => {
        console.log("upload finish")
        let newURL = "http://muysongs/" + cfile; 
        cb(newURL);
    }, 2000);
}

function allDone(newURL){
    console.log("Sab kuch badhiya ho gaya");
    console.log(newURL);
}

download("https://songs/file.mp3", compress) 
//ab yaha se CB mein compress pass hoga fir upse se download function m uploard paas
// taaki upload as a argument compress m paas hojaye
