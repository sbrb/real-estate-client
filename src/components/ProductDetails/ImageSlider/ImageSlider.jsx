// import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SliderImages from './SliderImages'
import "./ImageSlider.css";

export default function Slider() {
  return (
    <div className="Slider">
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
