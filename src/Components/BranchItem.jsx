import React from "react";

const BranchItem = ({
  img,
  countryName,
  address,
  addressLink,
  phone1,
  phone2,
  commingSoon,
}) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card text-center shadow">
        <div className="card-body">
          <img src={img} alt={countryName} />
          <h4>{countryName}</h4>
          <div>
            {addressLink != null ? (
              <a
                className="fw-bold text-info"
                href={addressLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i> {address}
              </a>
            ) : (
              <p className="fw-bold text-info">
                <i className="fa-solid fa-location-dot"></i>
                {address != null ? address : ` ${commingSoon}`}
              </p>
            )}
          </div>
          <div className="d-xl-flex justify-content-around">
            {phone1 != null ? (
              <a href={`tel:${phone1}`} className="d-block text-info">
                <i className="fa-solid fa-phone"></i> {phone1}
              </a>
            ) : (
              <p className="m-0 text-info">
                <i className="fa-solid fa-phone"></i> {commingSoon}
              </p>
            )}
            {phone2 && (
              <a href={`tel:${phone2}`} className="text-info">
                <i className="fa-solid fa-phone"></i> {phone2}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchItem;
