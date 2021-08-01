// index.js
function init(){
    const elDiv = document.querySelector('.product');
    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','data_best.json');
    xhr.send(null);
    xhr.onload = function(){

        res = JSON.parse(xhr.responseText);
        
        res.work.forEach(function(v){
            tagList += `<figure>
                            <a href="#">
                                <figcaption>${v.detail}</figcaption>
                                    <img src="${v.photo}">
                            </a>
                        </figure>`;
        });        
        elDiv.innerHTML = tagList;
    }    
}
    


