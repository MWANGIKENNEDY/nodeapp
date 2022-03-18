const dataSection = document.querySelector('.data');
const myForm = document.querySelector('#myForm');
const myInput = document.querySelector('#myInput');

const getPeople = async () => {

    try{
        const data  = await fetch('http://localhost:3000/api/v1/users');
        const kennedy = await data.json();
        const people = kennedy.data.map((person)=>{
            return `<h5>${person.name}</h5>`
        });
        dataSection.innerHTML=people.join('  ');     
    }
    catch(error){
        dataSection.innerHTML='<h5 style="display:block;background:red;color:white">Error: Users not found</h5>';
    }

}

getPeople();

const createPerson = async () => {
    try{
        const val = myInput.value;

        const data = await fetch('http://localhost:3000/api/v1/users',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:val})
        });
      
        const kennedy = await data.json();
        const h5 = document.createElement('h5');
        h5.setAttribute('style','color:blue;display:inline-block;padding: 1rem;')
        h5.textContent=kennedy.person;
        dataSection.appendChild(h5);
    }
    catch(error){
        console.log(error);
    }
}



myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    createPerson();
})