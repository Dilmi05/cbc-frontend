 import{userState} from "react";
 export default function ImageSlider(props) {
  const images = props.images;
  const [activeImage,setActiveImage]=userState(0);
  return (
    <>
      <div className="w-full h-96 flex items-center aspect-square flex-col">
        <img src={images[activeImage]} className="w-full object-cover aspect-square" />
      </div>

      <div className="absolute bottom-0 w-full h-[100px] bg-red-900"></div>
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      className="h-16 w-16  cursor-pointer object-cover mx-2"
      alt={`Slide ${index}`}
    />
  ))}
</div>

    </>
  );
}
