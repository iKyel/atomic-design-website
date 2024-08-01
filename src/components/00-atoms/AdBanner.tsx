import React from "react";
import { Box } from "@mui/material";

interface Image {
  src: string;
  alt: string;
  href: string;
}

interface AdBannerProps {
  images: Image[];
}

const AdBanner: React.FC<AdBannerProps> = ({ images }) => (
 
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" ,width: "100%" }}>
      {images.map((image, index) => (
        <Box
          component="a"
          href={image.href}
          key={index}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: "100%", maxHeight: "100%" }}
          />
        </Box>
      ))}
    </Box>
);

export default AdBanner;
