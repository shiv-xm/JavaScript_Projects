console.log('CV SCANNER');

const data = [
    {
        name: 'Jack Escobar',
        age: 18,
        city: 'Spain',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Tom Chris',
        age: 28,
        city: 'West Indies',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Canada',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Sophia turner',
        age: 45,
        city: 'London',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Ganesh Gaytonde',
        age: 34,
        city: 'Poland',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]


function DataItratore(profiles) {
    let nextStep=0;
    return{
        next: function () {
            if(nextStep<profiles.length){
                return{
                    value:profiles[nextStep++],
                    done:false
                }
            }
            else{
                nextStep=0;
               return {done: true}
            }

        }
    }
}

const candidate=DataItratore(data);
cvMaker();

let next=document.getElementById('next');
next.addEventListener('click',cvMaker);

function cvMaker() {
    const currentCandidate=candidate.next().value;
    console.log(currentCandidate);
    
let image=document.getElementById('image');
let profile=document.getElementById('profile');

if(currentCandidate != undefined){
    image.innerHTML=` <img src="${currentCandidate.image}" >`
    profile.innerHTML=`  <ul class="list-group">
    <li class="list-group-item">Name:${currentCandidate.name}</li>
    <li class="list-group-item">I Am Year${currentCandidate.age} Old</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
  </ul>`
}
else{
    alert('End of candidate applications');
    window.location.reload();
}
}

