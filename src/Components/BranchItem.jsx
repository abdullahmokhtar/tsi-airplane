import React from "react";

const BranchItem = ({
  img,
  countryName,
  address,
  addressLink,
  phone1,
  phone2,
}) => {
  return (
    <div class="col-md-4 col-sm-6">
      <div class="card text-center shadow">
        <div class="card-body">
          <img src={img} alt={countryName} />
          <h4>{countryName}</h4>
          <p>
            {addressLink != null ? (
              <a
                className="fw-bold text-info"
                href={addressLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-location-dot"></i> {address}
              </a>
            ) : (
              <p className="fw-bold text-info">
                <i class="fa-solid fa-location-dot"></i>
                {address != null ? address : "comming soon"}
              </p>
            )}
          </p>
          <p class="d-xl-flex justify-content-around">
            {phone1 != null ? (
              <a href={`tel:${phone1}`} class="d-block text-info">
                <i class="fa-solid fa-phone"></i> {phone1}
              </a>
            ) : (
              <p className="m-0 text-info">
                <i class="fa-solid fa-phone"></i> Coming Soon
              </p>
            )}
            {phone2 && (
              <a href={`tel:${phone2}`} className="text-info">
                <i class="fa-solid fa-phone"></i> {phone2}
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BranchItem;
