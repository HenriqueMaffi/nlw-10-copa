function createGame(player1, group, hour, player2) {
  return `
      <li class="game">
        <div class="game-card">
        <div class="player-description">
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" class="icon"/>
          <p class="player">${player1}</p>
        </div>
        <div>
          <p class="group">${group}</p>
          <strong>${hour}</strong>
        </div>
        <div class="player-description">
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" class="icon"/>
          <p class="player">${player2}</p>
        </div>
        </div>
      </li>
    `
}

let delay = -0.3

function createCard(date, day, games) {
  delay = delay + 0.3
  return `
      <div class="card" style = "animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}    
          </ul>
      </div>
    `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "sunday", createGame("qatar", "group a", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "monday",
    createGame("england", "group b", "10:00", "iran") +
      createGame("senegal", "group a", "13:00", "netherlands") +
      createGame("united-states", "group b", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "tuesday",
    createGame("argentina", "group c", "07:00", "saudi-arabia") +
      createGame("denmark", "group d", "10:00", "tunisia") +
      createGame("mexico", "group c", "13:00", "poland") +
      createGame("france", "group d", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "wednesday",
    createGame("morocco", "group f", "07:00", "croatia") +
      createGame("germany", "group e", "10:00", "japan") +
      createGame("spain", "group e", "13:00", "costa-rica") +
      createGame("belgium", "group f", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "thursday",
    createGame("switzerland", "group g", "07:00", "cameroon") +
      createGame("uruguay", "group h", "10:00", "south-korea") +
      createGame("portugal", "group h", "13:00", "ghana") +
      createGame("brazil", "group g", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "friday",
    createGame("wales", "group b", "07:00", "iran") +
      createGame("qatar", "group a", "10:00", "senegal") +
      createGame("netherlands", "group a", "13:00", "ecuador") +
      createGame("england", "group b", "16:00", "united-states")
  ) +
  createCard(
    "26/11",
    "saturday",
    createGame("tunisia", "group d", "07:00", "australia") +
      createGame("poland", "group c", "10:00", "saudi-arabia") +
      createGame("france", "group d", "13:00", "denmark") +
      createGame("argentina", "group c", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "sunday",
    createGame("japan", "group e", "07:00", "costa-rica") +
      createGame("belgium", "group f", "10:00", "morocco") +
      createGame("croatia", "group f", "13:00", "canada") +
      createGame("spain", "group e", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "monday",
    createGame("cameroon", "group g", "07:00", "serbia") +
      createGame("south-korea", "group h", "10:00", "ghana") +
      createGame("brazil", "group g", "13:00", "switzerland") +
      createGame("portugal", "group h", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "tuesday",
    createGame("ecuador", "group a", "12:00", "senegal") +
      createGame("netherlands", "group a", "12:00", "qatar") +
      createGame("iran", "group b", "16:00", "united-states") +
      createGame("wales", "group b", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "wednesday",
    createGame("tunisia", "group d", "12:00", "france") +
      createGame("australia", "group d", "12:00", "denmark") +
      createGame("poland", "group c", "16:00", "argentina") +
      createGame("saudi-arabia", "group c", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "thursday",
    createGame("croatia", "group f", "12:00", "belgium") +
      createGame("canada", "group f", "12:00", "morocco") +
      createGame("japan", "group e", "16:00", "spain") +
      createGame("costa-rica", "group e", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "friday",
    createGame("south-korea", "group h", "12:00", "portugal") +
      createGame("ghana", "group h", "12:00", "uruguay") +
      createGame("serbia", "group g", "16:00", "switzerland") +
      createGame("brazil", "group g", "16:00", "cameroon")
  )
