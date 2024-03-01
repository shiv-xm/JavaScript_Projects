console.log("Starts");
let parametersBox=document.getElementById('parametersBox');
let requestJsonBox=document.getElementById('requestJsonBox');

parametersBox.style.display='none';

let json=document.getElementById('json');
let parms=document.getElementById('parms');

// hidding or showing json box or params box

json.addEventListener('click',()=>{

    parametersBox.style.display='none';
    requestJsonBox.style.display='block';
})

parms.addEventListener('click',()=>{

    parametersBox.style.display='block';
    requestJsonBox.style.display='none';
})

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// addin parms boxes

let addedParamCount=2
let addParam=document.getElementById('addParam');
addParam.addEventListener('click', () => {

    let params = document.getElementById('params');
    let str=`<div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterKey${addedParamCount}" placeholder="Enter Parameter ${addedParamCount} Key">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue${addedParamCount}" placeholder="Enter Parameter ${addedParamCount} Value">
    </div>
    <button class="btn btn-primary deleteParam"> - </button>
    </div>`;

    let paramElement = getElementFromString(str);
    params.appendChild(paramElement);

    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    }

    addedParamCount++;

})

// main thing submit button


let submit=document.getElementById('submit');

submit.addEventListener('click',()=>{

    document.getElementById('responseJsonBox').value="Please Wait... Fatching response";


    let url=document.getElementById('url').value;
    let requestType=document.querySelector("input[name='requestType']:checked").value;
    let contentType=document.querySelector("input[name='contentType']:checked").value;

    if(contentType=='parms')
    {
       let data={};

       for(let i=0;i<addedParamCount;i++)
       {
            if(document.getElementById(`parameterKey${i+1}`) != undefined)
            {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value; 
            }
       }
       data=JSON.stringify(data);
    }
    else{
        data = document.getElementById('requestJsonText').value;
    }

    if (requestType=='GET'){
        console.log(url);
        fetch(url, {
            method: 'GET',   
        })
        .then(response=> response.text())
        .then((text) =>{
             document.getElementById('responseJsonText').value = text;
           
        });
    }
    else{
        fetch(url, {
            method: 'POST', 
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
            document.getElementById('responseJsonText').value = text;
           
        });
    }

});