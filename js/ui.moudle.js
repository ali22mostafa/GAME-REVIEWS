import { showDetails } from "./details.module.js";



import { showGameHome } from "./game.module.js";

 export class displayGames{
    constructor(){ 
           

        this.currentData=Array.from( document.querySelectorAll(".nav-link"))
        this.currentData.forEach((el)=>{
            el.addEventListener("click",(e)=>{
              let changaData= e.target.getAttribute("csutom")
              this.showGame(changaData)
            

            })
        })
        this.showGame("mmorpg")
     

 
   

    }

    // function for fetch data of home page
    async showGame(getData){
        const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e9ba78ae1cmshf50cce8bc2ed0fdp1a74b7jsn1d6f9003027b',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        
        const api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${getData}`, options)
        const respose= await api.json()
        
        let show=new showGameHome(respose)
       
        loading.classList.add("d-none");
      
       

   
        

    }

 // function for fetch data of detailes page
  async  showDtails(id){
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e9ba78ae1cmshf50cce8bc2ed0fdp1a74b7jsn1d6f9003027b',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
         const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
         const response=await api.json()
         loading.classList.add("d-none");
         let show=new showDetails(response)
         
        //  console.log(response);
           
    }
    
}