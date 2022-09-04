import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default function Home() {
  const [selectedAlbum, setSelectedAlbum] = useState();

  const router = useRouter()

  const cardImages = [
    {
      album: "24 Hours",
      relativeDirectory: "24Hours",
      originalName: "01.jpg",
      src: "/albums/24Hours/04.Midnight.jpg"
    },
    {
      album: "Childhood Spaces",
      relativeDirectory: "childhood-spaces",
      originalName: "case.jpg",
      src: "/albums/childhood-spaces/01.Fairy_Tale_City_I.jpg"
    },
    {
      album: "Hidden Places",
      relativeDirectory: "hidden-places",
      originalName: "02.The_Trip.jpg",
      src: "/albums/hidden-places/02.The_Trip.jpg"
    },
    {
      album: "Hypnotic",
      relativeDirectory: "hypnotic",
      originalName: "04.The_Magic_Flute.jpg",
      src: "/albums/hypnotic/04.The_Magic_Flute.jpg"
    },
    {
      album: "Oneiric Trip",
      relativeDirectory: "oneiric-trip",
      originalName: "01.The_Sign_Of_The_Astronauts_I.jpg",
      src: "/albums/oneiric-trip/01.The_Sign_Of_The_Astronauts_I.jpg"
    },
    {
      album: "The Realm Of Fairy Tales",
      relativeDirectory: "the-realm-of-fairy-tales",
      originalName: "01.Midnight_I.jpg",
      src: "/albums/24Hours/01.Midnight_II.jpg"
    },
    {
      album: "Digital Prints",
      relativeDirectory: "digital-prints",
      originalName: "04.A_Night_of_chimeras.jpg",
      src: "/albums/digital-prints/04.A_Night_of_chimeras.jpg"
    },
    {
      album: "Illustrations",
      relativeDirectory: "ilustrations",
      originalName: "04.jpg",
      src: "/albums/ilustrations/02.jpg"
    },
    {
      album: "Amanita",
      relativeDirectory: "amanita",
      originalName: "02.jpg",
      src: "/albums/amanita/02.jpg"
    }
  ]

  const handleRedirectToGalery = (album) => {
    setSelectedAlbum(album)
    setTimeout(() => {
      router.push(`/portofolio/${album}`);
      setSelectedAlbum(undefined)
    }, 1000)
  }


  return (
    <>
        <div className="d-flex flex-wrap justify-content-center align-items-center p-3">
          {cardImages.map((imageObj) => (
              <div key={imageObj.relativeDirectory} className="home-card-album" onClick={() => handleRedirectToGalery(imageObj.relativeDirectory)}>
                <img
                  src={imageObj?.src}
                  alt="..."
                  className="home-card-image"
                  style={imageObj.relativeDirectory === selectedAlbum ? {
                    opacity: 0.2,
                    transform: 'rotateY(180deg)'
                  } : {}}
                />
                <div className="home-card-text-image">{imageObj.album}</div>
              </div>
          ))}
        </div>
    </>
  );
}
