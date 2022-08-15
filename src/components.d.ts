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
    interface UxTestimonials {
        "description": string;
        "testimonialsList": string;
        "title": string;
    }
    interface UxTextImage {
        "dataButtonHref": string;
        "dataButtonLabel": string;
        "dataDescription": string;
        "dataImage": string;
        "dataTitle": string;
        "side": sideType;
    }
    interface UxVideo {
        "description": string;
        "src": string;
        "title": string;
    }
}
declare global {
    interface HTMLUxBannersElement extends Components.UxBanners, HTMLStencilElement {
    }
    var HTMLUxBannersElement: {
        prototype: HTMLUxBannersElement;
        new (): HTMLUxBannersElement;
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
    interface HTMLUxVideoElement extends Components.UxVideo, HTMLStencilElement {
    }
    var HTMLUxVideoElement: {
        prototype: HTMLUxVideoElement;
        new (): HTMLUxVideoElement;
    };
    interface HTMLElementTagNameMap {
        "ux-banners": HTMLUxBannersElement;
        "ux-testimonials": HTMLUxTestimonialsElement;
        "ux-text-image": HTMLUxTextImageElement;
        "ux-video": HTMLUxVideoElement;
    }
}
declare namespace LocalJSX {
    interface UxBanners {
        "dataImages"?: string;
    }
    interface UxTestimonials {
        "description"?: string;
        "testimonialsList"?: string;
        "title"?: string;
    }
    interface UxTextImage {
        "dataButtonHref"?: string;
        "dataButtonLabel"?: string;
        "dataDescription"?: string;
        "dataImage"?: string;
        "dataTitle"?: string;
        "side"?: sideType;
    }
    interface UxVideo {
        "description"?: string;
        "src"?: string;
        "title"?: string;
    }
    interface IntrinsicElements {
        "ux-banners": UxBanners;
        "ux-testimonials": UxTestimonials;
        "ux-text-image": UxTextImage;
        "ux-video": UxVideo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ux-banners": LocalJSX.UxBanners & JSXBase.HTMLAttributes<HTMLUxBannersElement>;
            "ux-testimonials": LocalJSX.UxTestimonials & JSXBase.HTMLAttributes<HTMLUxTestimonialsElement>;
            "ux-text-image": LocalJSX.UxTextImage & JSXBase.HTMLAttributes<HTMLUxTextImageElement>;
            "ux-video": LocalJSX.UxVideo & JSXBase.HTMLAttributes<HTMLUxVideoElement>;
        }
    }
}
