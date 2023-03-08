
export class showDetails{


    constructor(respose){
        this.respose=respose;
        this.showDetailsAtModel(this.respose)

    }
// show data about detailes
    showDetailsAtModel(data){
        let src=data.thumbnail;
        let href=data.game_url;
        document.getElementById("photo").setAttribute("src",src);
        document.getElementById("shGame").setAttribute("href",href);
        document.getElementById("title").innerHTML=data.title;
        document.getElementById("category").innerHTML=data.genre;
        document.getElementById("platform").innerHTML=data.platform;
        document.getElementById("status").innerHTML=data.status;
        document.getElementById("desc").innerHTML=data.description;

        
    }
}