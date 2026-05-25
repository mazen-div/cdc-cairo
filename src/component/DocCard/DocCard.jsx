import React from 'react';

const DocCard = ({ state }) => {
  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="document-card">
        <div className="row">
          {/* Image Section */}
          <div className="col-lg-6 col-12 document-image">
            <img src={state?.secondImageUrl} className="responsive-img" alt="Document" />
          </div>

          {/* Biography Section */}
          <div className="col-lg-6 col-12 document-details">
            <h2>{state?.Name}</h2>
            <p>{state?.Title}</p>

            {state?.Biography && (
              <>
                <h3>Biography</h3>
                <p className="document-text">{state.Biography}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocCard;
