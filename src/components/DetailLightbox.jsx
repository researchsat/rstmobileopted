import React from 'react';

const DetailLightbox = ({ id, image, title, content }) => {
  return (
    <div id={id} className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="container">
        <div className="row">
          <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
          <div className="col-lg-6">
            <div className="image-container">
              <img className="img-fluid" src={image} alt={title} />
            </div>
          </div>
          <div className="col-lg-6">
            <h3>{title}</h3>
            <hr />
            {content}
            <a className="btn-solid-reg mfp-close page-scroll" href="#contact">Contact</a>
            <a className="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLightbox;
