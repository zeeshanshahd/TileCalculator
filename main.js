// resets all values to 0
function reset() {
  wall1 = document.getElementById("wall-1").value = 0;
  wall2 = document.getElementById("wall-2").value = 0;
  wall3 = document.getElementById("wall-3").value = 0;
  wall4 = document.getElementById("wall-4").value = 0;
  wallHeight1 = document.getElementById("wall-height1").value = 0;
  wallHeight2 = document.getElementById("wall-height2").value = 0;
  wallHeight3 = document.getElementById("wall-height3").value = 0;
  wallHeight4 = document.getElementById("wall-height4").value = 0;
  floorLength = document.getElementById("floor-length").value = 0;
  floorWidth = document.getElementById("floor-width").value = 0;
  tileLength = document.getElementById("tile-length").value = 0;
  tileWidth = document.getElementById("tile-width").value = 0;
  sumTotal = document.getElementById("total").value = 0;
  sumMeters = document.getElementById("total-meters").value = 0;
  sumTilesRequired = document.getElementById("total-inches").value = 0;

}

function total() {
  let wall1 = document.getElementById("wall-1").value;
  let wall2 = document.getElementById("wall-2").value;
  let wall3 = document.getElementById("wall-3").value;
  let wall4 = document.getElementById("wall-4").value;
  let wallHeight1 = document.getElementById("wall-height1").value;
  let wallHeight2 = document.getElementById("wall-height2").value;
  let wallHeight3 = document.getElementById("wall-height3").value;
  let wallHeight4 = document.getElementById("wall-height4").value;
  let floorLength = document.getElementById("floor-length").value;
  let floorWidth = document.getElementById("floor-width").value;

  let sumWall = (wall1 * wallHeight1) + (wall2 * wallHeight2) + (wall3 * wallHeight3) + (wall4 * wallHeight4);
  let sumFloor = floorLength * floorWidth;
  let sumTotal = sumWall + sumFloor;

  document.getElementById("total").value = sumTotal;

  //for storing data local storage
  localStorage.setItem("Is_wall1", wall1);
  localStorage.setItem("Is_wallHeight1", wallHeight1);
  localStorage.setItem("Is_wall2", wall2);
  localStorage.setItem("Is_wallHeight2", wallHeight2);
  localStorage.setItem("Is_wall3", wall3);
  localStorage.setItem("Is_wallHeight3", wallHeight3);
  localStorage.setItem("Is_wall4", wall4);
  localStorage.setItem("Is_wallHeight4", wallHeight4);
  localStorage.setItem("Is_floorLength", floorLength);
  localStorage.setItem("Is_floorWidth", floorWidth);

  localStorage.getItem("Is_wall1", wall1);
  localStorage.getItem("Is_wallHeight1", wallHeight1);
  localStorage.getItem("Is_wall2", wall2);
  localStorage.getItem("Is_wallHeight2", wallHeight2);
  localStorage.getItem("Is_wall3", wall3);
  localStorage.getItem("Is_wallHeight3", wallHeight3);
  localStorage.getItem("Is_wall4", wall4);
  localStorage.getItem("Is_wallHeight4", wallHeight4);
  localStorage.getItem("Is_floorLength", floorLength);
  localStorage.getItem("Is_floorWidth", floorWidth);
}

function meters() {
  let sumTotal= document.getElementById("total").value
  let sumMeters = (sumTotal / 10.764).toFixed(2);

  document.getElementById("total-meters").value = sumMeters;
  console.log(sumMeters);
}

function totalTilesRequired() {
  let sumTotal= document.getElementById("total").value
  let tileLength = document.getElementById("tile-length").value;
  let tileWidth = document.getElementById("tile-width").value;
  let sumTileSizes = tileLength * tileWidth;

  let sumTotalInches = sumTotal * 144;
  let sumTilesRequired = (sumTotalInches / sumTileSizes).toFixed(2);

  document.getElementById("total-inches").value = sumTilesRequired;

  localStorage.setItem("Is_tileLength", tileLength);
  localStorage.setItem("Is_tileWidth", tileWidth);  
  
  localStorage.getItem("Is_tileLength", tileLength);
  localStorage.getItem("Is_tileWidth", tileWidth);


}



