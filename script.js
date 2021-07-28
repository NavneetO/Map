function updateMap(){
    fetch("data.json")
    .then(res=>res.json())
    .then(res =>{
        res.data.forEach(element => {
            var longitude=element.longitude;
            var latitude=element.latitude;
            var cases = element.infected
            
            
            console.log(longitude,latitude)


            if(cases>255){
                col="rgb(255,0,0)"
            }else{
                col=`rgb(${cases},${cases},0)`
            }

            
            new mapboxgl.Marker({
                color: "#FFFFFF",
                draggable: false
                }).setLngLat([longitude,latitude ])
                .addTo(map);

            
        });
    })
}
updateMap();