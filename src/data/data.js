import image1 from '../assets/gallery-images-assets/mobilecar.jpg';
import image2 from '../assets/gallery-images-assets/vanillaJsImage1.jpg';
import image3 from '../assets/gallery-images-assets/vanillaJsImage3.jpg';
import image4 from '../assets/gallery-images-assets/vanillaJsImage4.jpg';

/* eslint-disable */
export const data = {
    gallery: {
        type: 'gallery',
        headerData: {
            type: 'header',
            subtitleSecond: 'Images Gallerys',
            subtitleThird: 'Images Gallerys Subtitle',
            configuration: {
                subtitleSecondAligment: 'desktop-center',
                mobileSubtitleSecondAligment: 'mobile-center',
                subtitleThirdAligment: 'desktop-center',
                mobileSubtitleThirdAligment: 'mobile-center',
            },
        },
        galleryContent: {
            type: 'images',
            content: [
                {
                    isImageActive: true,
                    image: {
                        type: 'image',
                        media: {
                            desktop: image1,
                            mobile: image1,
                            alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                            ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                        },
                        configuration: {
                            slideTimer: 30,
                        },
                    },
                },
                {
                    isImageActive: true,
                    image: {
                        type: 'image',
                        media: {
                            desktop: image2,
                            mobile: image2,
                            alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                            ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                        },
                        configuration: {
                            slideTimer: 30,
                        },
                    },
                },
                {
                    isImageActive: true,
                    image: {
                        type: 'image',
                        media: {
                            desktop: image3,
                            mobile: image3,
                            alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                            ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                        },
                        configuration: {
                            slideTimer: 30,
                        },
                    },
                },
                {
                    isImageActive: true,
                    image: {
                        type: 'image',
                        media: {
                            desktop: image4,
                            mobile: image4,
                            alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                            ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                        },
                        configuration: {
                            slideTimer: 30,
                        },
                    },
                },
            ],
            // content: [
            //     {
            //         type: 'descriptive-card',
            //         isDescriptiveTextActive: true,
            //         media: {
            //             desktop: 'imageDesktop1.jpg',
            //             mobile: 'imageMobile1.jpg',
            //         },
            //         headerData: {
            //             title: 'title',
            //             subtitle: 'subTitle',
            //             configuration: {
            //                 titleAligment: 'titleAligment',
            //                 mobileTitleAligment: 'mobileTitleAligment',
            //                 subtitleAligment: 'subtitle',
            //                 mobilesubtitleAligment: 'mobileTitleAligment',
            //             },
            //         },
            //         description: 'description',
            //         configuration: {
            //             imagePlacementDesktop: 'imagePlacementDesktop',
            //             imagePlacementMobile: 'imagePlacementMobile',
            //             slideTimer: 30,
            //         },
            //     },
            //     {
            //         type: 'descriptive-card',
            //         isDescriptiveTextActive: true,
            //         media: {
            //             desktop: 'imageDesktop2.jpg',
            //             mobile: 'imageMobile2.jpg',
            //         },
            //         headerData: {
            //             title: 'title',
            //             subtitle: 'subTitle',
            //             configuration: {
            //                 titleAligment: 'titleAligment',
            //                 mobileTitleAligment: 'mobileTitleAligment',
            //                 subtitleAligment: 'subtitle',
            //                 mobilesubtitleAligment: 'mobileTitleAligment',
            //             },
            //         },
            //         description: 'description',
            //         configuration: {
            //             imagePlacementDesktop: 'imagePlacementDesktop',
            //             imagePlacementMobile: 'imagePlacementMobile',
            //             slideTimer: 30,
            //         },
            //     },
            //     {
            //         type: 'descriptive-card',
            //         isDescriptiveTextActive: true,
            //         media: {
            //             desktop: 'imageDesktop3.jpg',
            //             mobile: 'imageMobile3.jpg',
            //         },
            //         headerData: {
            //             title: 'title',
            //             subtitle: 'subTitle',
            //             configuration: {
            //                 titleAligment: 'titleAligment',
            //                 mobileTitleAligment: 'mobileTitleAligment',
            //                 subtitleAligment: 'subtitle',
            //                 mobilesubtitleAligment: 'mobileTitleAligment',
            //             },
            //         },
            //         description: 'description',
            //         configuration: {
            //             imagePlacementDesktop: 'imagePlacementDesktop',
            //             imagePlacementMobile: 'imagePlacementMobile',
            //             slideTimer: 30,
            //         },
            //     },
            //     {
            //         type: 'descriptive-card',
            //         isDescriptiveTextActive: true,
            //         media: {
            //             desktop: 'imageDesktop4.jpg',
            //             mobile: 'imageMobile4.jpg',
            //         },
            //         headerData: {
            //             title: 'title',
            //             subtitle: 'subTitle',
            //             configuration: {
            //                 titleAligment: 'titleAligment',
            //                 mobileTitleAligment: 'mobileTitleAligment',
            //                 subtitleAligment: 'subtitle',
            //                 mobilesubtitleAligment: 'mobileTitleAligment',
            //             },
            //         },
            //         description: 'description',
            //         configuration: {
            //             imagePlacementDesktop: 'imagePlacementDesktop',
            //             imagePlacementMobile: 'imagePlacementMobile',
            //             slideTimer: 30,
            //         },
            //     },
            // ],
        },
        buttons: {
            type: 'button',
            buttonLeft: {
                ariaLabel: 'Previous image',
                ariaHidden: 'true',
                icon: '&larr;',
            },
            buttonRight: {
                ariaLabel: 'Next image',
                ariaHidden: 'true',
                icon: '&rarr;',
            },
        },
    },
};
