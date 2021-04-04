/*class Question1 {
    constructor() {
      this.question = createElement('h3');
       this.option1 = createElement('h2');
       this.option2 = createElement('h2');
       this.option3 = createElement('h2');
       this.option4 = createElement('h2');
       this.submitButton = createButton('SUBMIT');
       this.nameInput = createInput("User");
       this.answerInput = createInput("Enter your answer here");
       

    }

    hideElements() {
        this.question.hide();
        this.option1.hide(); 
        this.option2.hide(); 
        this.option3.hide(); 
        this.option4.hide(); 
        this.submitButton.hide();
        this.answerInput.hide();
    }

    display() {
       
        this.question.html("On which planet can pink snow be found ? ");
        //answer = neptune.
        this.question.position(600,150);

        this.option1.html("1 : Neptune");
        this.option1.position(650,180);

        this.option2.html("2 : Mercury");
        this.option2.position(650,210);

        this.option3.html("3 : Saturn");
        this.option3.position(650,240);

        this.option4.html("4 : Mars");
        this.option4.position(650,270);

        this.answerInput.position(700,320);

        this.submitButton.position(750,320);

       this.answer = this.answerInput.value();

        this.submitButton.mousePressed(()=>{
            this.question.hide();
            this.option1.hide(); 
            this.option2.hide(); 
            this.option3.hide(); 
            this.option4.hide(); 
            this.submitButton.hide();
     

            database.ref('/').update({
                answer : this.answer
              });
      
            

      
            
           
          });

    }

    
    
}*/

class Question1 {
    //delete the already made contestant node and all nested data in database, may fix bug
    constructor(x,y) {
        this.x = x;
        this.y = y;


        this.question = createElement('h1');

        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
        this.option4 = createElement('h2');
        this.title = createElement('h1');
        this.greeting = createElement('h1');

        this.submitButton = createButton('SUBMIT');
        this.loginButton = createButton('LOGIN');

        this.nameInput = createInput("User");
        this.answerInput = createInput("Enter your answer here");
        
    }

    hideAllElements() {
       this.question.hide();
       this.option1.hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
       this.title.hide();
       this.greeting.hide();
       this.submitButton.hide();
       this.loginButton.hide();
       this.nameInput.hide();
       this.answerInput.hide();

    }

    display() {
        

        this.question.html("Q1. On which planet can pink snow be found ?");
        this.question.position(this.x,this.y);


        this.option1.html("1 : Venus");
        this.option1.position(this.x-20+50,this.y+100);

        this.option2.html("2 : Saturn");
        this.option2.position(this.x-19+50,this.y+200);

        this.option3.html("3 : Neptune");
        this.option3.position(this.x-18+50,this.y+300);

        this.option4.html("4 : None of the above");
        this.option4.position(this.x-8+50,this.y+400);

       

        

       this.title.html("My Quiz Game");
       this.title.position(this.x+175,35);

       
       

       this.nameInput.position(this.x-400+50+200,this.y+800);
       this.answerInput.position(this.x+400-50+200,this.y+800);

       this.submitButton.position(this.x+725,this.y+800);
      
       this.loginButton.position(this.x-200+175-200+50+200,this.y+800);

       this.loginButton.mousePressed(()=>{
           //this.title.hide();
           this.nameInput.hide();
           this.loginButton.hide();
           this.namee = this.nameInput.value();
           playerCount+=1;

           /*database.ref('/').update({
            
            contestantCount : playerCount //otherwise contestantcount : allContestants
            
            
          });*/

          database.ref('/').update({
            
            'contestants/contestanter/Name' : this.namee
            
          });

           contestant.index = playerCount;
           contestant.update();
           contestant.updateCount(playerCount);
           this.greeting.html("Hello "+this.namee);
       this.greeting.position(700,400);
       });

       this.submitButton.mousePressed(()=>{
           this.answerInput.hide();
           this.submitButton.hide();
           this.answer = this.answerInput.value();

           database.ref('/').update({
            
            'contestants/contestanter/answer' : this.answer
          });

       });

    }
}

//once question1 class works, create other question classes from 1 to 10





