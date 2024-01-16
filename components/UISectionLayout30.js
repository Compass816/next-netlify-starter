import React from "react";

class UISectionLayout30 extends React.Component {
  render() {
    return (
      <section className="ui-section_layout30">
        <div className="ui-page-padding">
          <div className="ui-container-large">
            <div className="ui-padding-vertical-xhuge">
              <div className="w-layout-grid ui-layout30_component">
                <div className="ui-layout30_content-left">
                  <div className="ui-heading-subheading">Dashboard</div>
                  <h2 className="ui-heading-medium">
                    Beautiful analytics to grow smarter
                  </h2>
                </div>
                <div className="ui-layout30_content-right">
                  <div className="ui-text-size-large">
                    Powerful, self-serve product and growth analytics to help
                    you convert, engage, and retain more users.
                  </div>
                  <div className="w-layout-grid ui-layout30_item-list">
                    <div className="ui-layout30_text-wrapper">
                      <div className="ui-layout30_number">10k</div>
                      <div className="ui-layout30_number-text">
                        Global downloads
                      </div>
                    </div>
                    <div className="ui-layout30_text-wrapper">
                      <div className="ui-layout30_number">600%</div>
                      <div className="ui-layout30_number-text">
                        Return on investment
                      </div>
                    </div>
                  </div>
                  <div className="ui-button-row is-reverse-mobile-landscape">
                    <div className="ui-button-wrapper max-width-full-mobile-landscape">
                      <a
                        className="ui-button-secondary-gray "
                        href="#"
                      >
                        <div>Get started</div>
                      </a>
                    </div>
                    <div className="ui-button-wrapper max-width-full-mobile-landscape">
                      <a className="ui-button " href="#">
                        <div>Learn more</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui-layout30_image-wrapper">
                <img
                  alt
                  className="ui-layout30_image"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 94vw"
                  src="images/night_bite_1920.png"
                  srcSet="images/night_bite_1920-p-500.png 500w, images/night_bite_1920-p-800.png 800w, images/night_bite_1920-p-1080.png 1080w, images/night_bite_1920-p-1600.png 1600w, images/night_bite_1920.png 1920w"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UISectionLayout30;