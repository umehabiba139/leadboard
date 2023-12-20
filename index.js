function getScores(){
    urlg = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gi8jQCUhcxqA2as0y3XP/scores/';

        fetch(urlg, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data)=>{
            const sc = document.getElementById('table');
            sc.innerHTML = `<tr>
                                <td class = "bold">Name</td>
                                <td class = "bold">Score</td>
                            </tr>`;
            data.result.forEach(element => {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = element.user;
                td2.innerHTML = element.score;
                tr.appendChild(td1);
                tr.appendChild(td2);
                sc.appendChild(tr);
            });
        })
        
}


document.getElementById('post').addEventListener('click',()=>{
    const name =document.getElementById('name').value;
    const score = document.getElementById('score').value;    
    fetch(urlg, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
        },
        body: JSON.stringify({ user: name, score: score }),
    })
    document.getElementById('name').value = "";
    document.getElementById('score').value = "";
    getScores();
})
getScores();