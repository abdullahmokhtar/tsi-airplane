import React from "react";

function TechData({ secTitle, tableData, tableHead }) {
  return (
    <section>
      <div className="container">
        <h2 className="text-center mt-3">{secTitle}</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover shadow fs-5">
            <thead>
              <tr>
                <th scope="col">{tableHead[0]}</th>
                <th scope="col">{tableHead[1]}</th>
                <th scope="col">{tableHead[2]}</th>
                <th scope="col">{tableHead[3]}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row}>
                  <th scope="row">({index + 1})</th>
                  <td>{tableData[index][0]}</td>
                  <td>{tableData[index][1]}</td>
                  <td>
                    {tableData[index][2] == null ? "" : tableData[index][2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TechData;
