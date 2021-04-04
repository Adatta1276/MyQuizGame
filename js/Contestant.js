class Contestant {

//delete the already made contestant node and all nested data in database, may fix bug
  constructor(){
    this.index = null;
    this.distance = 0;
    this.naam = null;
  }




  getCount(){
    var playerCountRef = database.ref('contestantCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }




  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }




  update(){
    var playerIndex = "contestants/contestant" + this.index;
    database.ref(playerIndex).set({
      Name:this.naam,
      //distance : this.distance
    });
  }




  static getPlayerInfo() {
    var playerInfoRef = database.ref('contestants');
    playerInfoRef.on("value",(data) => {
      allContestants = data.val();
    })
  }



}
