var x = documenbt.getElimentById("x");
function startStory() {
    
    //Images
    //document.getElementById("Image").style.visibility = "hidden";



    optionOne = document.getElementById("optionOne")
    optionTwo = document.getElementById("optionTwo")

    optionOne.innerHTML = "Feed the cat."
    optionTwo.innerHTML = "Don't feed the cat."

    optionOne.onclick = function() {
        startScene1A()
        
    }

    optionTwo.onclick = function() {
        startScene1B()
    }


}

function startScene1A(){
    
    optionOne.innerHTML = "Hello!"
    optionTwo.innerHTML = "No thanks"
    }

function startScene1B(){

}
