//recuperer la balise dont l'identifiant est #resultat
const divResultat = document.querySelector('#resultat')


//Generer un tableau multidimensionnel qui contient nos 4 lignes et colonnes

var tableJeu=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

afficherTableau()

function afficherTableau(){
    var txt=""
    for(var i=0; i < tableJeu.length; i++){
        txt +="<div>"        
        for(var j=0; j<tableJeu[i].length; j++){
            console.log("i",i,"j",j);
            if(tableJeu[i][j]===0){
                txt +="<button type='button' class='btn btn-primary m-2' style='width:100px;height:100px' >Aficher</button>"
            }
            else{
                txt +="<img src='"+getImage(tableJeu[i][j])+"' style='width:100px;height:100px' class='m-2'>"
            }
            
        }
        txt +="</div>"
    }
    divResultat.innerHTML=txt
}

function getImage(valeur){
    var imgTxt=""
    switch(valeur){
        case 1: imgTxt +="images/demon_slayer.jpg"
        break
        case 2: imgTxt +="images/dragon_ball.webp"
        break
        case 3: imgTxt +="images/hunter_x_henter.webp"
        break
        case 4: imgTxt +="images/kenshin.jpg"
        break
        case 5: imgTxt +="images/my_hero_academy.jpg"
        break
        case 6: imgTxt +="images/naruto.jpg"
        break
        case 7: imgTxt +="images/tsubasa.webp"
        break
        case 8: imgTxt +="images/lufy.jpg"
        break
        default  : console.log('Cas non determiné')      
    }
    return imgTxt
}
