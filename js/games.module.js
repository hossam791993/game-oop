import { Ui } from "./ui.module.js";

export class Games {
  constructor() {
    this.ui = new Ui();
    this.linkWrapper = document.querySelector(".navbar-nav");
    this.links = document.querySelectorAll(".nav-link");
  }

  async fetchApiRec(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "86e797ad88msh0a4e3a15e2ca251p1132bbjsn4f0259b53317",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      document.querySelector(".loading").classList.remove("d-none");
      const response = await fetch(url, options);
      const result = await response.json();
      this.ui.displayGame(result);
      document.querySelector(".loading").classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
  }
  async fetchApiSen(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "86e797ad88msh0a4e3a15e2ca251p1132bbjsn4f0259b53317",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      document.querySelector(".loading").classList.remove("d-none");
      const response = await fetch(url, options);
      const result = await response.json();
      this.ui.displayDetails(result);
      document.querySelector(".loading").classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
  }
  displayGames() {
    let category = "mmorpg";
    this.fetchApiRec(category);
    this.linkWrapper.addEventListener("click", (e) => {
      const link = e.target;
      if (link.classList.contains("nav-link")) {
        category = link.dataset.category;
        this.links.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
        this.fetchApiRec(category);
      }
    });
  }
  displayDetails() {
    const gameCards = document.querySelector(".games-container");
    const details = document.querySelector(".details-wrapper");
    const page = document.querySelector(".page");
    const btnClose = document.getElementById("btnClose");

    gameCards.addEventListener("click", (e) => {
      const card = e.target.closest(".game-card");
      if (card.classList.contains("game-card")) {
        const id = card.id;
        this.fetchApiSen(id);
        details.classList.remove("d-none");
        page.classList.add("d-none");
      }
    });
    btnClose.addEventListener("click", () => {
      details.classList.add("d-none");
      page.classList.remove("d-none");
    });
  }
}
