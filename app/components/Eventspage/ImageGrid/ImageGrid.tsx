import React from 'react';


interface ImageProps {
  src: string;
  alt: string;
}


interface ImageGridProps {
  images: ImageProps[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="flex flex-col justify-center mt-3 sm:mt-4">
      <div className="grid w-full grid-cols-4 gap-2 sm:gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              className="object-cover w-full h-full"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
