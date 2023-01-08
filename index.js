

const checkConditionsTeam = () => {
    let numberOfTeamsInput = document.querySelector("#numberOfTeams");
    if (numberOfTeamsInput.value.length > 0) {
        createTeams();
    } else {
        alert("Please put in the number of teams needed.")
    }
}

const checkConditionsName = () => {
    let nameOfMemberInput = document.querySelector("#nameInput");
    if (nameOfMemberInput.value.length > 0) {
        enterNameToWaitingList();
    } else {
        alert("Please put in the name of the team member.")
    }
}

const createTeams = () => {
    let numberOfTeamsInput = document.querySelector("#numberOfTeams");
    let submitTeamsButton = document.querySelector("#submitTeams");

    let i = 1;
    while (i <= numberOfTeamsInput.value) {
        //creating the container
        let teamContainer = document.createElement("div");
        teamContainer.classList.add("teamContainer");
        //creating team title
        let teamNumber = document.createElement("h3");
        teamNumber.classList.add("teamNumber");
        teamNumber.innerText = `Team ${i}:`;
        //creating container for the names
        let teamNameContainer = document.createElement("ol");
        teamNameContainer.classList.add("teamNameContainer");

        //appending children
        teamContainer.appendChild(teamNumber);
        teamContainer.appendChild(teamNameContainer);

        document.querySelector(".allTeamsContainer").appendChild(teamContainer);
        i++;
    }
    numberOfTeamsInput.value = "";
    numberOfTeamsInput.disabled = true;
    submitTeamsButton.disabled = true;

}

const enterNameToWaitingList = () => {
    let nameOfMemberInput = document.querySelector("#nameInput");
    
    let newNameOnList = document.createElement("li");
    newNameOnList.classList.add("newName");
    newNameOnList.innerText = nameOfMemberInput.value;
    document.querySelector(".waitingListContainer").appendChild(newNameOnList);
    nameOfMemberInput.value = "";
    
}

const addRandomNameToTeam = () => {
    let waitingListArr = document.querySelectorAll(".newName");
    if (waitingListArr.length > 0) {
        let randomNumber = Math.floor(Math.random() * waitingListArr.length);
        let randomNameFromList = waitingListArr[randomNumber];
        console.log(randomNameFromList);
    
        //removing from waiting list
        document.querySelector(".waitingListContainer").removeChild(randomNameFromList);
    
        //append to team
        // A)
        document.querySelectorAll(".teamNameContainer")[0].appendChild(randomNameFromList);
    } else {
        alert("Please choose how many lists are needed.")
    }
    
}