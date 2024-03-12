import { useEffect, useRef, useState } from "react";

const ImagePredicted = ({ image, predictions }) => {
  const imageRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setImageDimensions({
        width: imageRef.current?.clientWidth,
        height: imageRef.current?.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    if (imageRef.current?.complete) {
      handleResize();
    } else {
      imageRef.current?.addEventListener("load", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img
        ref={imageRef}
        className="w-full h-auto relative max-w-screen-md max-h-full object-cover"
        src={image.url}
        alt={image.filename}
      />
      {predictions.map((item) => {
        let top = (item.bbox.y1 * imageDimensions.height) / image.height;
        if (top < 0) {
          top = 0;
        }
        let left = (item.bbox.x1 * imageDimensions.width) / image.width;
        if (left < 0) {
          left = 0;
        }
        let width =
          ((item.bbox.x2 - item.bbox.x1) * imageDimensions.width) / image.width;

        if (width + left > imageDimensions.width) {
          width = imageDimensions.width - left;
        }

        let height =
          ((item.bbox.y2 - item.bbox.y1) * imageDimensions.height) /
          image.height;

        if (height + top > imageDimensions.height) {
          height = imageDimensions.height - top;
        }

        const surfaceCoverage = (width * height) / (image.width * image.height);
        let newOpacity = 0.3 - surfaceCoverage;
        if (newOpacity < 0.1) {
          newOpacity = 0.1;
        }

        return (
          <div
            key={item.id}
            className="absolute"
            style={{
              top,
              left,
              width,
              height,
              border: "2px solid rgb(75,0,130)",
              backgroundColor: `rgba(75,0,130, ${newOpacity})`,
            }}
          >
            <div className="absolute bg-purple-600 text-white text-xs rounded px-1 bottom-0 right-0">
              {item.label} ({(item.score * 100).toFixed(0)}%)
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImagePredicted;
