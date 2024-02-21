function Benfits({ secTitle, benfitsList }) {
  return (
    <section id="benfits" className="py-3 my-4">
      <div class="container">
        <h2 class="sec-title">{secTitle}</h2>
        <div class="row g-3 my-3">
          <div class="col-md-4">
            <div class="card text-center p-3">
              <div class="card-img">
                <div class="icon-holder">
                  <i class="fa-solid fa-broom fa-2x"></i>
                </div>
              </div>
              <div class="card-body">{benfitsList[0]}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center p-3">
              <div class="card-img">
                <div class="icon-holder">
                  <i class="fa-solid fa-stopwatch fa-2x"></i>
                </div>
              </div>
              <div class="card-body">{benfitsList[1]}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center p-3">
              <div class="card-img">
                <div class="icon-holder">
                  <i class="fa-solid fa-shield-halved fa-2x"></i>
                </div>
              </div>
              <div class="card-body">{benfitsList[2]}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center p-3">
              <div class="card-img">
                <div class="icon-holder">
                  <i class="fa-regular fa-handshake fa-2x"></i>
                </div>
              </div>
              <div class="card-body">{benfitsList[3]}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center p-3">
              <div class="card-img">
                <div class="icon-holder">
                  <i class="fa-solid fa-screwdriver-wrench fa-2x"></i>
                </div>
              </div>
              <div class="card-body">{benfitsList[4]}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center p-3">
              <div class="card-img">
                <div class="icon-holder">
                  <i class="fa-regular fa-lightbulb fa-2x"></i>
                </div>
              </div>
              <div class="card-body">{benfitsList[5]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benfits;
