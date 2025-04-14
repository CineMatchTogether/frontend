import { useInView } from "react-intersection-observer";
import { Image, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

type LazyImageProps = {
  src: string;
  alt?: string;
  height?: string; 
};

export const LazyImage = ({ src, alt = "", height = "500px" }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: inView ? "auto" : height,
        minHeight: height,
      }}
    >
      {inView && !isLoaded && <Skeleton height={height} />}
      {inView && (
        <Image
          src={src}
          alt={alt}
          borderTopRadius="2xl"
          w="100%"
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      )}
    </div>
  );
};

export default LazyImage;