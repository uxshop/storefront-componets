/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { sideType } from "./components/ux-text-image/ux-text-image-type";
export namespace Components {
    interface UxBanners {
        "dataImages": string;
    }
    interface UxCarousel {
        "arrows": boolean;
        "autoplay": boolean;
        "pagination": boolean;
        "rewind": boolean;
    }
    interface UxCarouselItem {
        "dataButtonHref"?: string;
        "dataButtonLabel"?: string;
        "dataDescription"?: string;
        "dataDesktopImage"?: string;
        "dataMobileImage"?: string;
        "dataTitle"?: string;
    }
    interface UxShowcase {
    }
    interface UxShowcaseItem {
        "dataHasInterest"?: boolean;
        "dataHref": string;
        "dataImage": string;
        "dataName": string;
        "dataParcelPrice"?: number;
        "dataParcels"?: number;
        "dataPrice": number;
        "dataPriceCompare"?: number;
    }
    interface UxTestimonials {
        "dataDescription": string;
        "dataTestimonials": string;
        "dataTitle": string;
    }
    interface UxTextImage {
        "dataButtonHref": string;
        "dataButtonLabel": string;
        "dataDescription": string;
        "dataImage": string;
        "dataTitle": string;
        "side": sideType;
    }
}
declare global {
    interface HTMLUxBannersElement extends Components.UxBanners, HTMLStencilElement {
    }
    var HTMLUxBannersElement: {
        prototype: HTMLUxBannersElement;
        new (): HTMLUxBannersElement;
    };
    interface HTMLUxCarouselElement extends Components.UxCarousel, HTMLStencilElement {
    }
    var HTMLUxCarouselElement: {
        prototype: HTMLUxCarouselElement;
        new (): HTMLUxCarouselElement;
    };
    interface HTMLUxCarouselItemElement extends Components.UxCarouselItem, HTMLStencilElement {
    }
    var HTMLUxCarouselItemElement: {
        prototype: HTMLUxCarouselItemElement;
        new (): HTMLUxCarouselItemElement;
    };
    interface HTMLUxShowcaseElement extends Components.UxShowcase, HTMLStencilElement {
    }
    var HTMLUxShowcaseElement: {
        prototype: HTMLUxShowcaseElement;
        new (): HTMLUxShowcaseElement;
    };
    interface HTMLUxShowcaseItemElement extends Components.UxShowcaseItem, HTMLStencilElement {
    }
    var HTMLUxShowcaseItemElement: {
        prototype: HTMLUxShowcaseItemElement;
        new (): HTMLUxShowcaseItemElement;
    };
    interface HTMLUxTestimonialsElement extends Components.UxTestimonials, HTMLStencilElement {
    }
    var HTMLUxTestimonialsElement: {
        prototype: HTMLUxTestimonialsElement;
        new (): HTMLUxTestimonialsElement;
    };
    interface HTMLUxTextImageElement extends Components.UxTextImage, HTMLStencilElement {
    }
    var HTMLUxTextImageElement: {
        prototype: HTMLUxTextImageElement;
        new (): HTMLUxTextImageElement;
    };
    interface HTMLElementTagNameMap {
        "ux-banners": HTMLUxBannersElement;
        "ux-carousel": HTMLUxCarouselElement;
        "ux-carousel-item": HTMLUxCarouselItemElement;
        "ux-showcase": HTMLUxShowcaseElement;
        "ux-showcase-item": HTMLUxShowcaseItemElement;
        "ux-testimonials": HTMLUxTestimonialsElement;
        "ux-text-image": HTMLUxTextImageElement;
    }
}
declare namespace LocalJSX {
    interface UxBanners {
        "dataImages"?: string;
    }
    interface UxCarousel {
        "arrows"?: boolean;
        "autoplay"?: boolean;
        "pagination"?: boolean;
        "rewind"?: boolean;
    }
    interface UxCarouselItem {
        "dataButtonHref"?: string;
        "dataButtonLabel"?: string;
        "dataDescription"?: string;
        "dataDesktopImage"?: string;
        "dataMobileImage"?: string;
        "dataTitle"?: string;
    }
    interface UxShowcase {
    }
    interface UxShowcaseItem {
        "dataHasInterest"?: boolean;
        "dataHref"?: string;
        "dataImage"?: string;
        "dataName"?: string;
        "dataParcelPrice"?: number;
        "dataParcels"?: number;
        "dataPrice"?: number;
        "dataPriceCompare"?: number;
    }
    interface UxTestimonials {
        "dataDescription"?: string;
        "dataTestimonials"?: string;
        "dataTitle"?: string;
    }
    interface UxTextImage {
        "dataButtonHref"?: string;
        "dataButtonLabel"?: string;
        "dataDescription"?: string;
        "dataImage"?: string;
        "dataTitle"?: string;
        "side"?: sideType;
    }

    interface IntrinsicElements {
        "ux-banners": UxBanners;
        "ux-carousel": UxCarousel;
        "ux-carousel-item": UxCarouselItem;
        "ux-showcase": UxShowcase;
        "ux-showcase-item": UxShowcaseItem;
        "ux-testimonials": UxTestimonials;
        "ux-text-image": UxTextImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ux-banners": LocalJSX.UxBanners & JSXBase.HTMLAttributes<HTMLUxBannersElement>;
            "ux-carousel": LocalJSX.UxCarousel & JSXBase.HTMLAttributes<HTMLUxCarouselElement>;
            "ux-carousel-item": LocalJSX.UxCarouselItem & JSXBase.HTMLAttributes<HTMLUxCarouselItemElement>;
            "ux-showcase": LocalJSX.UxShowcase & JSXBase.HTMLAttributes<HTMLUxShowcaseElement>;
            "ux-showcase-item": LocalJSX.UxShowcaseItem & JSXBase.HTMLAttributes<HTMLUxShowcaseItemElement>;
            "ux-testimonials": LocalJSX.UxTestimonials & JSXBase.HTMLAttributes<HTMLUxTestimonialsElement>;
            "ux-text-image": LocalJSX.UxTextImage & JSXBase.HTMLAttributes<HTMLUxTextImageElement>;
        }
    }
}
