function main() {
    // declare an Array of objects and store the images.
       const data = [
        { url: "./image/1.jpeg" },
        { url: "./image/2.jpeg" },
        { url: "./image/3.jpeg" },
        { url: "./image/4.jpeg" },
        { url: "./image/5.jpeg" },
        { url: "./image/6.jpeg" },
        { url: "./image/7.jpeg" },
        { url: "./image/8.jpeg" },
        { url: "./image/9.jpeg" },
        { url: "./image/10.jpeg" },
      ];
    
      
      const finalData = async () => {
        const rendData = await fetch(`https://swapi.dev/api/people/`);
    
        const newData1 = await rendData.json();
    
        const newData = newData1.results;
    
        let html = "";
        let modal = "";
    
        //loop over array object to display character card
        newData.forEach((element, index) => {
          let htmlSeg = `
                        <div class="card">
                            <img src=${data[index].url} class="img-rounded image-shadow position-absolute shadow" alt="star-wars"/>
                            <div class="card-body">
                               <button class="open mdl-btn"> <h5 class="card-title">${element.name}</h5> </button>  
                            </div>
                 </div>
                        </div>
                      `;
          html += htmlSeg;
        });
        let container = document.querySelector(".container");
        container.innerHTML = html;
    
        // create a modal and the modal contents.
        modal += `<div class=" modal2"> 
                            <h3>Character</h3>
                           <div> <p class="name">Name: name</p> </div>
                           <div><p class="gender">Gender: gender</p></div>
                           <div><p class="height">Height: height</p></div>
                            <br>
                            <br>
                            <div> <button class="close cls-modal">Close</button></div>
                       </div>`;
    
        // attach the created modal to the body of the DOM
        let displayModal = document.querySelector(".modal-container");
        displayModal.innerHTML = modal;
    
        // Target specific elements in the DOM using css selectors and Id
        const buttonEl = document.querySelectorAll(".mdl-btn");
        const modalContainerEl = document.getElementById("modal_container");
        const closeBtn = document.querySelector(".cls-modal");
    
        // Target elements in the modal using css selectors and Id
        let nameEl = document.querySelector(".name");
        let genderEl = document.querySelector(".gender");
        let heightEl = document.querySelector(".height");
    
        // loop over the node list gotten from selecting the buttons and modifying the text
        buttonEl.forEach((element, i) =>
          element.addEventListener("click", () => {
            modalContainerEl.classList.add("show");
            nameEl.textContent = "Name:" + " " + newData[i].name;
            genderEl.textContent = "Gender:" + " " + newData[i].gender;
            heightEl.textContent = "Height:" + " " + newData[i].height + "cm";
          })
        );
    
        // close modal funtionality
        closeBtn.addEventListener("click", () => {
          modalContainerEl.classList.remove("show");
        });
      };
      finalData();
    }
    
    main();
    