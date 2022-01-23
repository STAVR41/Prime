
function initMap() {
   let pos = { lat: 53.05277364104803, lng: 158.63771735632184 };
   let opt = {
      center: pos,
      zoom: 17,
   };
   let map = new google.maps.Map(document.getElementById("map"), opt);
   let marker = new google.maps.Marker({
      position: pos,
      map: map,
   });
}