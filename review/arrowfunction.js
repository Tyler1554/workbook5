// const bob = (a) => a + 100;

// let result2 = bob(10);

// console.log(result2);


// function add(a,b){
//     return a + b;

// }
// console.log(add(2,2));


const add = (a,b) => a + b;

console.log(add(2,2));


    function buildTableRow(park){
        let tr = parksTableBody.insertRow();
      
        let td1 = tr.insertCell();
        td1.innerText = park.LocationName;
      
        let td2 = tr.insertCell();
        td2.innerText = park.State;
      
        let td3 = tr.insertCell();
        td3.innerText = park.Phone;
      }

      const buildTableRow = (park) => {
        let tr = parksTableBody.insertRow();
      
        let td1 = tr.insertCell();
        td1.innerText = park.LocationName;
      
        let td2 = tr.insertCell();
        td2.innerText = park.State;
      
        let td3 = tr.insertCell();
        td3.innerText = park.Phone;
      }

