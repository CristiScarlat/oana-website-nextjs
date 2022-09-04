import { useState } from 'react';
import Spinner from '../spinner/spinner';

const Image = ({
  src,
  width,
  height,
  alt,
  phantomWidth,
  phantomHeight
}) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <>
      <img
        style={imgLoaded ? {} : { display: 'none' }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setImgLoaded(true)}
      />
      <div
        style={{
          width: phantomWidth,
          height: phantomHeight,
          display: imgLoaded ? 'none' : 'flex'
        }}
      >
        <Spinner
        animation="grow"
        variant="secondary"
        className="spinner-fixed"
        style={
          imgLoad?.length === localList?.length
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      />
      </div>
    </>
  );
};

export default Image;