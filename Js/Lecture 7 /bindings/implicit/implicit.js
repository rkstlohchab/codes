let vaibhav = {
    lastName: "Sharma",
    age:17,
    updatePlacementStatus: function(status){
        console.log(this);
        if(this.age>18){
            this.placement = status;
        }
        else{
            this.placement = "Not Applicable";
        }
    }
}
vaibhav.updatePlacementStatus("Adobe");
console.log(vaibhav)