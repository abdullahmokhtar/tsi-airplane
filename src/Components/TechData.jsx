import React from "react";

function TechData({secTitle, tableData}) {
  return (
    <section>
      <div className="container">
        <h2 class="text-center mt-3">{secTitle}</h2>
        <div class="table-responsive">
          <table class="table table-striped shadow fs-5">
            <thead>
              <tr>
                <th scope="col">{tableData[0][0]}</th>
                <th scope="col">{tableData[0][1]}</th>
                <th scope="col">{tableData[0][2]}</th>
                <th scope="col">{tableData[0][3]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">(1)</th>
                <td>
                  {tableData[1][0]}
                </td>
                <td>
                 {tableData[1][1]}
                </td>
                <td>{tableData[1][2]}</td>
              </tr>
              <tr>
                <th scope="row">(2)</th>
                <td>
                  To wash the entire surface of large and medium-sized aircraft
                  (including fuselage, aircraft wings, and aircraft tail oil
                  stains)
                </td>
                <td>the pump runs smoothly</td>
                <td>Japan NSK</td>
              </tr>
              <tr>
                <th scope="row">(3)</th>
                <td>To remove oil stains and dust</td>
                <td>This 5-outlets-pump is single stage Vertical pump,</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">(4)</th>
                <td>
                  Red and ultraviolet detection function, automatic tracking and
                  positioning, 24 hours automatic detection
                </td>
                <td>
                  The inlet of the pump is in the horizontal direction, and the
                  outlet is arranged vertically upwards simplify the pipeline
                </td>
                <td>Germany FUCHS</td>
              </tr>
              <tr>
                <th scope="row">(5)</th>
                <td>
                  Sensing aircraft enters, the water cannon system automatically
                  turn on,Scan from
                </td>
                <td>
                  The motor of the pump is horizontal structure, easy
                  maintenance
                </td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">(6)</th>
                <td>Horizontal, vertical, tilted orientation Directions.</td>
                <td>
                  There are 50, 75, 100, 125, 150 and other calibers to meet the
                  needs of
                </td>
                <td>France schneider</td>
              </tr>
              <tr>
                <th scope="row">(7)</th>
                <td>
                  The central controller issues instructions,Then pumps started
                  ,valve opened
                </td>
                <td>different flow rates and lifts</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">(8)</th>
                <td>
                  The high pressure water cannon ejaculates the target aircraft
                </td>
                <td>
                  After cleaning completed, the central controller will send
                  instructions to stop ejatulating.
                </td>
                <td>Taiwan Delta</td>
              </tr>
              <tr>
                <th scope="row">(9)</th>
                <td>
                  A.Aircraft enters cleaning area <br /> B.Device self-sense to
                  start <br />
                  A.Mix the cleaning detergent B.Spray the cleaning detergent
                </td>
                <td>
                  A.High -pressure water cannon Cleaning B.High -pressure water
                  Cleaning
                </td>
                <td>Cleaning Procedures</td>
              </tr>
              <tr>
                <th scope="row">(10)</th>
                <td>
                  Sensing aircraft enters, the water cannon system automatically
                  turn on,Scan from
                </td>
                <td>Drive away from the cleaning area, the cleaning is over</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TechData;
