import video2 from "../assets/videos/washing2.mp4";

const icons = [
  "fa-broom",
  "fa-stopwatch",
  "fa-shield-halved",
  "fa-handshake",
  "fa-screwdriver-wrench",
  "fa-lightbulb",
];
function Benfits({ secTitle, benfitsList }) {
  return (
    <section id="benfits" className="py-3 my-4">
      <div class="container">
        <h2 class="sec-title">{secTitle}</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div class="row g-3 my-3">
              {benfitsList.map((benfit, index) => (
                <div class="col-md-4">
                  <div class="card text-center p-3">
                    <div class="card-img">
                      <div class="icon-holder">
                        <i class={`fa-solid ${icons[index]} fa-2x`}></i>
                      </div>
                    </div>
                    <div class="card-body">{benfit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <video
                src={video2}
                loop="true"
                autoPlay
                muted
                type="video/mp4"
                controls
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benfits;
