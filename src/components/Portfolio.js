import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import { Image } from "./common/Image";

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const { id, title, subtitle, imageUrl, largeImageUrl, url } = props.content;

  const handleToggler = () => {
    setHasOpened(true);
    setToggler((v) => !v);
  };

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        <Image
          src={imageUrl}
          loader="/images/portfolio-image-placeholder.png"
          alt={title}
        />
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={handleToggler} type="button">
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl || !hasOpened ? null : (
        <FsLightbox key={`lightbox-${id}`} toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  );
}

export default Portfolio;
