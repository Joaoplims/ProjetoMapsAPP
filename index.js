let map;
let marker;
let markersData = [];
let palacioMarkerData = {
    nome: "Palacio das Artes",
    latLng: {lat: -19.925589480728085, lng:-43.93351700203721},
    dscEndereco : "Av. Afonso Pena 1537, Belo Horizonte, MG, 30130-004",
    pathImageLocal: "imgs/imgEspacos/PalacioDasArtes.jpg",
    programacao:[
      { 
        nomeApresentacao : "Uma Apresentação 1 ",
        horario : "13h",
        data : "25/07/2023"
      }, 
      { 
        nomeApresentacao : "Uma Apresentação 2 ",
        horario : "14h",
        data : "25/07/2023"
      },
      { 
        nomeApresentacao : "Uma Apresentação 3 ",
        horario : "9h",
        data : "26/07/2023"
      },
    ]
}

let teatroMariliaData = {
  nome: "Teatro Marilia",
  latLng: {lat: -19.926121605960258, lng:-43.93157548465868},
  dscEndereco : "Av. Rio Branco S/N, Marília, SP, 17500-000",
  pathImageLocal: "imgs/imgEspacos/TeatroMarília.jpg",
  programacao:[
    { 
      nomeApresentacao : "Uma Apresentação 1 ",
      horario : "13h",
      data : "28/07/2023"
    }, 
    { 
      nomeApresentacao : "Uma Apresentação 2 ",
      horario : "14h",
      data : "30/07/2023"
    }
  ]

}
markersData.push(palacioMarkerData);
markersData.push(teatroMariliaData);
console.log(markersData[0]);
let palacio;



function initMap() {


    palacio = {lat: -19.925589480728085, lng:-43.93351700203721};

    map = new google.maps.Map(document.getElementById("map"), {
      center: palacio,
      zoom: 18,
    });
    
    for (let index = 0; index < markersData.length; index++) {
      const element = markersData[index];
      console.log(element);
      marker = new google.maps.Marker({position: element.latLng,map:map});
      marker.addListener("click", () => ShowModal(markersData[index]));  
    }
  }



  window.initMap = initMap;

let modal = document.getElementById("modalInfo");
let btnClose = document.getElementById("clsModal");


function ShowModal(markerData)
{
  const chld = modal.children;
  console.log(chld.length);
  const tittle = chld[0];
  const adress = chld[1];
  const img = chld[2];
  const ul = chld [3];

  tittle.innerHTML = markerData.nome;
  adress.innerHTML = markerData.dscEndereco;
  img.src = markerData.pathImageLocal;
  markerData.programacao.forEach(prg => {
    const li = document.createElement("li");
    li.innerHTML = ProgramacaoToString(prg);
    ul.appendChild(li);
    
  });

  console.log("Abrindo");
  modal.showModal();
}

function CloseModal(){

  const chld = modal.children;
  while (chld[3].firstChild) {
    chld[3].removeChild(chld[3].firstChild);
  }
  console.log("Fechando");
  modal.close();
}

btnClose.addEventListener("click", CloseModal);

function ProgramacaoToString(programacao){
    const programacao2string = programacao.nomeApresentacao + " | " + programacao.horario + " | " +  programacao.data;
    return programacao2string;
}

