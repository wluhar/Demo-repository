const Jokes=document.querySelector('.jokes');
const Jokesbtn=document.querySelector('.joke-btn');


//something
Jokesbtn.addEventListener('click',generateJokes);

generateJokes()

async function generateJokes(){
    const config = {
        headers : {
            'Accept' : 'application/json'
        }
    }
    const fetched=await fetch('https://icanhazdadjoke.com/',config)
    const data=await fetched.json()
    Jokes.innerText =data.joke ;
}

// function generateJokes(){
//  const config={
//      headers : {
//          'Accept':'application/json'
//      }
//  }

//     fetch('https://icanhazdadjoke.com',config)
//     .then((response) => response.json())
//     .then((data)=>{
//         Jokes.innerText = data.joke;
//     })
// }
