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

        HTML += `<div class="card m-4" style="width: 18rem;">
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
    let ID = document.getElementById("ID").value;

    // console.log(HTML)

    // for (let i = 0; i < HTML.length; i++) {

    //     if (HTML[i].id === ID) {
    //         HTML.splice(i, 1);

    //     } else {
    //         console.warn("No data Found")
    //     }

    // };

}

function ModifyRecord() {

}