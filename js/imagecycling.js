

document.addEventListener('DOMContentLoaded', function(){
i = 0;

function incrementNum(){
  i++;
}

function photoCycle(){
        let topArr = ["daniel-frank-357258.jpg","demi-deherrera-15139.jpg","felicia-birloi-42677.jpg","francesco-gallarotti-2730.jpg","gabriel-garcia-marengo-19291.jpg","jamie-street-100013.jpg","mikhail-vasilyev-17211.jpg","nikita-burdin-1085.jpg","sergio-rola-39245.jpg","tim-easley-319740.jpg","espen-willersrud-28566.jpg"]
        let bottomArr=["antonin-allegre-315524.jpg","brandon-morgan-16635.jpg","casey-horner-339150.jpg","darryl-222961.jpg","gabriele-motter-227215.jpg","luke-pamer-26747.jpg","matthew-kane-162961.jpg","michael-hull-12842.jpg","quentin-dr-178888.jpg","toby-wong-85747.jpg","varun-almaula-71168.jpg"]  //create array with image urls
        let bottomLayer = document.getElementsByClassName("content-wrap")[0]
        let topLayer = document.getElementsByClassName("content-wrap")[1]//Ihad to delete this and forgot the name lol);  //grab id of div background you want to change
        	
        	bottomLayer.style.opacity ="0";
            bottomLayer.style.backgroundImage = "url(images/nighttime/" + bottomArr[i] + ")"; 
            bottomLayer.style.opacity ="1";

            topLayer.style.opacity ="0";
            topLayer.style.backgroundImage = "url(images/daytime/" + topArr[i] + ")";
            topLayer.style.opacity ="1";

            incrementNum();//increment index or i by one
            if(i > (bottomArr.length - 1)){i = 0}  //when site reaches end of slideshow reset to 0 inde
            setTimeout(photoCycle,10000);  //setTimeout to rerun function every 8 secs
        }


        
photoCycle();

})