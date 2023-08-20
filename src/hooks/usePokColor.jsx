// import { useEffect, useState } from "react";
// import Vibrant from "vibrant";

// export default function usePokColor(imageUrl) {
//   const [dominantColor, setDominantColor] = useState("");

//   useEffect(() => {
//     const image = new Image();
//     image.crossOrigin = "Anonymous"; // Important for CORS-enabled images

//     const handleImageLoad = () => {
//       const vibrant = new Vibrant(image);
//       const swatch = vibrant.VibrantSwatch; // You can choose different swatches

//       if (swatch) {
//         const color = swatch.getHex();
//         setDominantColor(color);
//       }
//     };

//     image.onload = handleImageLoad;

//     image.src = imageUrl;

//     // Cleanup the effect when the component unmounts
//     return () => {
//       image.onload = null;
//     };
//   }, [imageUrl]);

//   return dominantColor;
// }
