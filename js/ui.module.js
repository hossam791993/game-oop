export class Ui {
  displayGame(result) {
    let addGame = "";
    result.forEach((game) => {
      const {
        id,
        title,
        thumbnail,
        short_description: des,
        genre,
        platform,
      } = game;
      document.querySelector(".loading").classList.add("d-none");
      addGame += `<div class="col-md-6 col-lg-4 col-xlg-3">
                  <div class="game-card" id="${id}">
                    <div class="card" style="width: 18rem">
                      <div class="img p-2">
                        <img
                          src="${thumbnail}"
                          class="card-img-top"
                          alt="game"
                        />
                      </div>
                      <div class="card-body p-2">
                        <div
                          class="card-des d-flex align-items-center justify-content-between"
                        >
                          <h5 class="card-title text-white">${title}</h5>
                          <p class="btn btn-primary">Free</p>
                        </div>
                        <p class="card-text text-center">
                         ${des}
                        </p>
                      </div>
                      <div
                        class="card-footer d-flex align-items-center justify-content-between"
                      >
                        <p class="btn btn-secondary m-0 p-1">${genre}</p>
                        <p class="btn btn-secondary m-0 p-1">${platform}</p>
                      </div>
                    </div>
                  </div>
                </div>`;
      document.querySelector(".games").innerHTML = addGame;
    });
  }
  displayDetails(data) {
    const { title, thumbnail, description, genre, platform, status, game_url } =
      data;

    const content = `
           <div class="col-md-4">
           <img src="${thumbnail}" class="w-100" alt="image details" />
        </div>
        <div class="col-md-8">
           <h3>Title: ${title}</h3>
           <p>Category: <span class="badge text-bg-info"> ${genre}</span> </p>
           <p>Platform: <span class="badge text-bg-info"> ${platform}</span> </p>
           <p>Status: <span class="badge text-bg-info"> ${status}</span> </p>
           <p class="small">${description}</p>
           <a class="btn btn-outline-warning" target="_blank" href="${game_url}">Show Game</a>
        </div>
    
           `;

    document.querySelector(".details").innerHTML = content;
  }
}
