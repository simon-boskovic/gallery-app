import MasonryLayout from "../../../../components/gallery/masonry-layout";

export function generateStaticParams() {
  return ["interior_photography", "real_estate", "corporate_photography"].map(
    (gallery) => ({ gallery: gallery })
  );
}

export default async function GalleryPage({ params: { gallery } }) {
  return (
    <section style={{ maxWidth: "1060px", margin: "auto" }}>
      <MasonryLayout></MasonryLayout>
    </section>
  );
}
