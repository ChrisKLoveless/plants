import * as plantScript from "./js/plant.js";
import * as $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


const plantBuilder = plantScript.createPlant();
window.onload = function() {
  $("#new-plant").on("click", ()=> {
    addNewPlant();
  });
};

function addNewPlant() {
  const thisPlant = plantBuilder();
  const thisState = plantScript.storeState();
  createPlantElements(thisPlant, thisState);
}

function createPlantElements(plantObject, thisState){
  // create jquery elements
  const thisPlant = $(`
      <div id=${plantObject.id}>      
        <button id="feed-${plantObject.id}">Add soil</button>
        <button id="show-state-${plantObject.id}">Current Stats</button>
        <h1>Your Plant's Values</h1>
        <h3><div id="soil-value-${plantObject.id}">0</div></h3>
      </div>
  `);

  // Add elements to dom
  $("#plants").append(thisPlant);
  setTimeout(() => {
    // Add feed event listener
    $(`#feed-${plantObject.id}`).on("click", () => {
      const incState = plantScript.changeState("soil")(5);
      const newState = thisState(incState);
      $(`#soil-value-${plantObject.id}`).text(`Soil: ${newState.soil}`);
    });
  
    // Add show state event listener
    $(`show-state-${plantObject.id}`).on("click", () => {
      const currentState = plantScript.stateControl();
      $(`soil-value-${plantObject.id}`).text(`Soil: ${currentState.soil}`);
    });
  }, 500);

}
