import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import GallerySwipe from "../../components/gallerySwipe";
import { UI_DESCRIPTION_TEXT } from "../../components/ui-large-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import db from '../../db/db.json';

const Portofolio = () => {
  const [showDescription, setShowDescription] = useState(false);

  const router = useRouter();
  const { albumName } = router.query;

  const handleShowDescription = () => {
    setShowDescription((state) => !state);
  };

  return (
    <>
      <div className="w-100">
        <div className="d-flex mt-2">
          <div className="p-2">
            <Button variant="dark" onClick={() => router.push("/")}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </Button>
          </div>
          {UI_DESCRIPTION_TEXT[albumName] && (
            <div className="p-2">
              <Button variant="dark" onClick={handleShowDescription}>
                {!showDescription ? `About ${albumName}` : "View the gallery"}
              </Button>
            </div>
          )}
        </div>
        <hr />
        {showDescription ? (
          <div
            dangerouslySetInnerHTML={UI_DESCRIPTION_TEXT[albumName]}
            className="p-3"
          />
        ) : (
          <GallerySwipe
            imageList={db[albumName]}
          />
        )}
      </div>
    </>
  );
};

export default Portofolio;
