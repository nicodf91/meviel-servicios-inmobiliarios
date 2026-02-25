import Image from "next/image";

interface PropertyGalleryProps {
  title: string;
  images: string[];
}

export function PropertyGallery({ title, images }: PropertyGalleryProps) {
  const [mainImage, ...restImages] = images;
  const secondaryImages = restImages.slice(0, 3);
  const hiddenImagesCount = Math.max(images.length - 4, 0);

  return (
    <section className="panel overflow-hidden p-3 sm:p-4">
      <div className="grid gap-3 lg:grid-cols-[1.7fr_1fr]">
        <div className="relative overflow-hidden rounded-xl2">
          <Image
            src={mainImage}
            alt={title}
            width={1400}
            height={900}
            className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[540px]"
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/68 via-brand-charcoal/18 to-transparent p-4 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-white/85">
              Galeria de imagenes
            </p>
            <h2 className="mt-2 text-lg font-semibold leading-tight text-brand-white sm:text-2xl">
              {title}
            </h2>
          </div>
          <span className="absolute right-3 top-3 rounded-full border border-brand-white/30 bg-brand-charcoal/45 px-3 py-1 text-xs font-semibold text-brand-white backdrop-blur">
            {images.length} fotos
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {secondaryImages.map((image, index) => {
            const showExtraCount = hiddenImagesCount > 0 && index === secondaryImages.length - 1;

            return (
              <div key={`${image}-${index}`} className="relative overflow-hidden rounded-xl2">
                <Image
                  src={image}
                  alt={`${title} - Imagen ${index + 2}`}
                  width={700}
                  height={460}
                  className="h-[135px] w-full object-cover sm:h-[170px] lg:h-[174px]"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                {showExtraCount ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/55">
                    <span className="rounded-full border border-brand-white/35 bg-brand-charcoal/30 px-3 py-1 text-sm font-semibold text-brand-white backdrop-blur">
                      +{hiddenImagesCount} fotos
                    </span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
