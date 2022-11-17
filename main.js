function createGame(player1, hour, player2) {
  return `
      <li>
        <img src="assets/icon_${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="assets/icon_${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>  
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", 
      createGame("brazil", "16:00", "serbia") +
      createGame("switzerland", "07:00", "cameroon") +
      createGame("portugal", "13:00", "ghana")) +
  createCard("28/11", "segunda", 
      createGame("brazil", "13:00", "switzerland") +
      createGame("south_corea", "10:00", "ghana") + 
      createGame("portugal", "10:00", "uruguay")) +
  createCard("29/11", "terça", 
      createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") + 
      createGame("england", "16:00", "wales")) +
  createCard("02/12", "sexta", 
      createGame("brazil", "16:00", "cameroon") +
      createGame("south_corea", "10:00", "portugal") + 
      createGame("ghana", "16:00", "uruguay")) 

