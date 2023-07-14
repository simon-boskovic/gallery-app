"use client";
export default function FooterLink({
  imgUrl,
  redirectUrl,
  description,
}: {
  imgUrl: string;
  redirectUrl: string;
  description: string;
}) {
  return (
    <img
      src={imgUrl}
      alt={description}
      onClick={() => window.open(redirectUrl, "_blank")}
    />
  );
}
