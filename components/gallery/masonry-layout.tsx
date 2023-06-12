"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function MasonryLayout() {
  const images = [
    "/images/portfolio/interior_photography/logo1.jpg",
    "/images/portfolio/interior_photography/logo2.jpg",
    "/images/portfolio/interior_photography/logo3.jpg",
    "/images/portfolio/interior_photography/logo4.jpg",
    "/images/portfolio/interior_photography/logo5.jpg",
    "/images/portfolio/interior_photography/logo6.jpg",
    "/images/portfolio/interior_photography/logo7.jpg",
  ];
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block", borderRadius: "4px" }}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
