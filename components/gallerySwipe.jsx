import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

import { Spinner } from "react-bootstrap";

const GallerySwipe = ({ imageList }) => {
  const [imgLoad, setImgLoad] = React.useState(['1', '2']);

  console.log(imageList)
  const localList = imageList?.map((o, index) => ({
    original: o.img,
    thumbnail: o.img,
    width: "1024",
    height: "768",
    aspectRatio: o.aspectRatio,
    index: index,
    title: o.name,
  }));

  const addLoaddedImgToList = (loadedImg) => {
    const temp = [...imgLoad, loadedImg];
    setImgLoad(temp);
  };

  return (
    <>
      <div
        className="gallery-swipe-container"
      >
        <Gallery shareButton={false}>
          {localList
            ?.sort((a, b) => (a.index > b.index ? 1 : -1))
            .map((imgObj, index) => (
              <Item
                key={imgObj.id + "gallery-swipe" + index}
                original={imgObj.original}
                thumbnail={imgObj.thumbnail}
                width={imgObj.width}
                height={Number(imgObj.width)/Number(imgObj.aspectRatio)}
                style={{ margin: "1rem" }}
                title={imgObj.title.replace(/_/g, " ").split(".jpg")[0]}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    onKeyDown={open}
                    src={imgObj.original}
                    alt={imgObj.original}
                    onLoad={() => addLoaddedImgToList(imgObj.title)}
                  />
                )}
              </Item>
            ))}
        </Gallery>
      </div>
      
    </>
  );
};

export default GallerySwipe;
