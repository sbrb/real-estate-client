import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SliderImages from './SliderImages'

export default function Slider() {
  return (
    <div className="slider">
      <ImageGallery
        items={SliderImages}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
      />
    </div>
  );
}
