
console.log("project 3");
//bd72df8d957442b9877754014949bdfa


let accordionExample = document.getElementById('accordionExample');

const xhr = new XMLHttpRequest();

xhr.open('GET', `data.json`, true);
//xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if(this.status === 200){

        let json=JSON.parse(this.responseText);
        console.log(json);
        let articles=json.articles;
        console.log(articles);
        let i=0;
        for (key in articles) {
            console.log(articles[key]);
            let news;
            if(i===0)
            {
                news = ` <div class="card">
                                    <div class="card-header" id="heading${i}">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
                                                <strong>${i+1}.</strong> ${articles[key].title}
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapse${i}" class="collapse show" aria-labelledby="heading${i}"
                                        data-parent="#accordionExample">
                                        <div class="card-body">
                                            ${articles[key].content}<br>  
                                            <a href="${articles[key].url}" target="__blank"> For More Info Click</a>
                                        </div>
                                    </div>
                                    </div>`
             }
             else{
                 news = ` <div class="card">
                <div class="card-header" id="heading${i}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
                            <strong>${i+1}.</strong> ${articles[key].title}
                        </button>
                    </h2>
                </div>

                <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        ${articles[key].content}<br>  
                        <a href="${articles[key].url}" target="__blank"> For More Info Click</a>
                    </div>
                </div>
                </div>`
             }
        
                                    i++;

        accordionExample.innerHTML+=news;
        }

    }
    else{
        console.log("Some error occured")
    }

}

xhr.send();




