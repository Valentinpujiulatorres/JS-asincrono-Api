let HTML = [];


async function getData(url) {
    const response = await fetch(url);
    const Data = await response.json();

    console.log(Data)
    printData(Data);
}
let myUrl = 'http://localhost:3000/Events'
let Content;

Content = getData(myUrl);



function printData(Data) {

    for (let i = 0; i < Data.length; i++) {

        if (Data[i].name === "") {

            Data.splice(i, 1);
        }

        HTML += `<div class="card m-4 mx-auto" style="width: 18rem;">
        <img src="${Data[i].img}" class="card-img-top " style="max-height:100% , min-height:400px" alt="...">
        <div class="card-body">
          <h5 class="card-title">${Data[i].name}</h5>
          <p class="card-text">${Data[i].body}</p>
          <a href="#" class="btn btn-primary">#ID : ${Data[i].id} </a>
        </div>
      </div>`

        document.getElementById('Events').innerHTML = HTML;
    }

}

function NewRecord() {
    let CardName = document.getElementById("CardName").value;
    let CardBody = document.getElementById("CardInfo").value;
    let CardImg = document.getElementById("CardImg").value;

    const data = { name: `${CardName}`, body: `${CardBody}`, img: `${CardImg}` };
    fetch('http://localhost:3000/Events', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

function DeleteRecord() {

    let ID = document.getElementById("ID").value
    fetch(`http://localhost:3000/Events/${ID}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },

        })
        .catch((error) => {
            console.error('Error:', error);
        });



    // console.log(HTML)

    // for (let i = 0; i < HTML.length; i++) {

    //     if (HTML[i].id === ID) {
    //         HTML.splice(i, 1);

    //     } else {
    //         console.warn("No data Found")
    //     }

    // };

}

function Edit() {

    let ID = document.getElementById("TargetID").value

    let name = document.getElementById("NewName").value

    let body = document.getElementById("NewBody").value

    let img = document.getElementById("NewImg").value

    let data1 = { name: `${name}`, body: `${body}`, img: `${img}` };

    fetch(`http://localhost:3000/Events/${ID}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
        .then(response => response.json())
        .then(data1 => {
            console.log('Success:', data1);
        })
        .catch((error) => {
            console.error('Error:', error);
        });



}

function Register() {
    let mail = document.getElementById("RegisterMail").value
    let passwd = document.getElementById("RegisterPassword").value

    let content = { email: `${mail}`, password: `${passwd}` }

    fetch(`http://localhost:3001/auth/register`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(content),

        })
        .then(response => response.json())
        .then(content => {
            console.log('Success:', content);
            alert("Usuario registrado correctamente")
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}