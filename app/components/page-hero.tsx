import HeroImage from "./hero-image";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageAlign?: "left" | "right";
  imageFallbackSrc?: string;
  imageFallbackRemotes?: string[];
};

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageAlign = "right",
  imageFallbackSrc = "/heroes/home.svg",
  imageFallbackRemotes,
}: Props) {
  const hasImage = Boolean(imageSrc);
  return (
    <section className="border-b border-black/10 dark:border-white/10">
      <div
        className={`mx-auto max-w-6xl px-4 py-6 md:py-8 ${
          hasImage ? "grid md:grid-cols-2 items-center gap-8" : ""
        }`}
      >
        {hasImage && imageAlign === "left" ? (
          <div className="order-0 md:order-none">
            <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
              {imageSrc ? (
                <HeroImage
                  src={imageSrc}
                  fallbackSrc={imageFallbackSrc}
                  fallbackRemotes={imageFallbackRemotes}
                  alt={imageAlt ?? ""}
                  className="object-contain"
                  priority
                />
              ) : null}
            </div>
          </div>
        ) : null}

        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? (
            <p className="mt-2 opacity-80 max-w-3xl">{subtitle}</p>
          ) : null}
        </div>

        {hasImage && imageAlign === "right" ? (
          <div className="mt-4 md:mt-0">
            <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
              {imageSrc ? (
                <HeroImage
                  src={imageSrc}
                  fallbackSrc={imageFallbackSrc}
                  fallbackRemotes={imageFallbackRemotes}
                  alt={imageAlt ?? ""}
                  fill
                  className="object-contain"
                  priority
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
