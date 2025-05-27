/* eslint-disable */
export const data = {
    gallery: {
        type: 'gallery',
        headerData: {
            type: 'header',
            subtitleSecond: 'Images Galleries',
            subtitleThird: 'Car Gallery',
            configuration: {
                alignment: {
                    subtitleSecond: {
                        desktop: 'desktop-center',
                        mobile: 'mobile-center',
                    },
                    subtitleThird: {
                        desktop: 'desktop-center',
                        mobile: 'mobile-center',
                    },
                },
            },
        },
        galleryContent: {
            type: 'galleryContent',
            mediaType: 'images',
            isImageType: true,
            items: [
                {
                    isActive: true,
                    mediaItem: {
                        type: 'image',
                        sources: {
                            mobile: {
                                media: '(max-width: 767px)',
                                sizes: '(max-width: 767px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_200/v1748262104/volkswagen_oii4gg.webp 200w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_425/v1748262104/volkswagen_oii4gg.webp 425w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_560/v1748262104/volkswagen_oii4gg.webp 560w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_586/v1748262104/volkswagen_oii4gg.webp 586w',
                            },
                            tablet: {
                                media: '(min-width: 768px) and (max-width: 991px)',
                                sizes: '(max-width: 991px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_4:3,c_fill,g_auto/c_scale,w_782/v1748352035/volkswagen_wafpsy.webp 782w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_4:3,c_fill,g_auto/c_scale,w_905/v1748352035/volkswagen_wafpsy.webp 905w',
                            },
                            desktopSmall: {
                                media: '(min-width: 992px) and (max-width: 1199px)',
                                sizes: '(max-width: 1199px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1039/v1748352035/volkswagen_wafpsy.webp 1039w',
                            },
                            desktopLarge: {
                                media: '(min-width: 1200px)',
                                sizes: '(min-width: 1200px) 80vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1389/v1748352035/volkswagen_wafpsy.webp 1389w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1422/v1748352035/volkswagen_wafpsy.webp 1422w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1440/v1748352035/volkswagen_wafpsy.webp 1440w',
                            },
                            default: {
                                url: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1440/v1748352035/volkswagen_wafpsy.webp',
                            },
                        },
                        alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                        ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                    },
                },
                {
                    isActive: true,
                    mediaItem: {
                        type: 'image',
                        sources: {
                            mobile: {
                                media: '(max-width: 767px)',
                                sizes: '(max-width: 767px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_200/v1748348205/lambo_qmgs6n.webp 200w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_585/v1748348205/lambo_qmgs6n.webp 585w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_798/v1748348205/lambo_qmgs6n.webp 798w',
                            },
                            tablet: {
                                media: '(min-width: 768px) and (max-width: 991px)',
                                sizes: '(max-width: 991px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_4:3,c_fill,g_auto/c_scale,w_978/v1748354296/lambo_llnkpj.webp 978w',
                            },
                            desktopSmall: {
                                media: '(min-width: 992px) and (max-width: 1199px)',
                                sizes: '(max-width: 1199px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1379/v1748354296/lambo_llnkpj.webp',
                            },
                            desktopLarge: {
                                media: '(min-width: 1200px)',
                                sizes: '(min-width: 1200px) 80vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1455/v1748354296/lambo_llnkpj.webp 1455w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1920/v1748354296/lambo_llnkpj.webp 1920w',
                            },
                            default: {
                                url: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_1:1,c_fill,g_auto/c_scale,w_808/v1748262104/volkswagen_oii4gg.webp',
                            },
                        },
                        alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                        ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                    },
                },
                {
                    isActive: true,
                    mediaItem: {
                        type: 'image',
                        sources: {
                            mobile: {
                                media: '(max-width: 767px)',
                                sizes: '(max-width: 767px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_200/v1748349412/MercedesCar2_u07isf.avif 200w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_480/v1748349412/MercedesCar2_u07isf.avif 480w',
                            },
                            tablet: {
                                media: '(min-width: 768px) and (max-width: 991px)',
                                sizes: '(max-width: 991px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_4:3,c_fill,g_auto/c_scale,w_960/v1748354937/MercedesCar2_ceiuiv.avif 960w',
                            },
                            desktopSmall: {
                                media: '(min-width: 992px) and (max-width: 1199px)',
                                sizes: '(max-width: 1199px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1280/v1748354937/MercedesCar2_ceiuiv.avif 1280w',
                            },
                            desktopLarge: {
                                media: '(min-width: 1200px)',
                                sizes: '(min-width: 1200px) 80vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1280/v1748354937/MercedesCar2_ceiuiv.avif 1280w',
                            },
                            default: {
                                url: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1280/v1748354937/MercedesCar2_ceiuiv.avif',
                            },
                        },
                        alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                        ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                    },
                },
                {
                    isActive: true,
                    mediaItem: {
                        type: 'image',
                        sources: {
                            mobile: {
                                media: '(max-width: 767px)',
                                sizes: '(max-width: 767px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_200/v1748262104/volkswagen_oii4gg.webp 200w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_425/v1748262104/volkswagen_oii4gg.webp 425w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_560/v1748262104/volkswagen_oii4gg.webp 560w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_586/v1748262104/volkswagen_oii4gg.webp 586w',
                            },
                            tablet: {
                                media: '(min-width: 768px) and (max-width: 991px)',
                                sizes: '(max-width: 991px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_4:3,c_fill,g_auto/c_scale,w_782/v1748352035/volkswagen_wafpsy.webp 782w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_4:3,c_fill,g_auto/c_scale,w_905/v1748352035/volkswagen_wafpsy.webp 905w',
                            },
                            desktopSmall: {
                                media: '(min-width: 992px) and (max-width: 1199px)',
                                sizes: '(max-width: 1199px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1039/v1748352035/volkswagen_wafpsy.webp 1039w',
                            },
                            desktopLarge: {
                                media: '(min-width: 1200px)',
                                sizes: '(min-width: 1200px) 80vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1389/v1748352035/volkswagen_wafpsy.webp 1389w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1422/v1748352035/volkswagen_wafpsy.webp 1422w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1440/v1748352035/volkswagen_wafpsy.webp 1440w',
                            },
                            default: {
                                url: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1440/v1748352035/volkswagen_wafpsy.webp',
                            },
                        },
                        alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                        ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                    },
                },
                {
                    isActive: true,
                    mediaItem: {
                        type: 'image',
                        sources: {
                            mobile: {
                                media: '(max-width: 767px)',
                                sizes: '(max-width: 767px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_200/v1748348205/lambo_qmgs6n.webp 200w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_585/v1748348205/lambo_qmgs6n.webp 585w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_798/v1748348205/lambo_qmgs6n.webp 798w',
                            },
                            tablet: {
                                media: '(min-width: 768px) and (max-width: 991px)',
                                sizes: '(max-width: 991px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_4:3,c_fill,g_auto/c_scale,w_978/v1748354296/lambo_llnkpj.webp 978w',
                            },
                            desktopSmall: {
                                media: '(min-width: 992px) and (max-width: 1199px)',
                                sizes: '(max-width: 1199px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1379/v1748354296/lambo_llnkpj.webp',
                            },
                            desktopLarge: {
                                media: '(min-width: 1200px)',
                                sizes: '(min-width: 1200px) 80vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1455/v1748354296/lambo_llnkpj.webp 1455w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1920/v1748354296/lambo_llnkpj.webp 1920w',
                            },
                            default: {
                                url: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_1:1,c_fill,g_auto/c_scale,w_808/v1748262104/volkswagen_oii4gg.webp',
                            },
                        },
                        alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                        ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                    },
                },
                {
                    isActive: true,
                    mediaItem: {
                        type: 'image',
                        sources: {
                            mobile: {
                                media: '(max-width: 767px)',
                                sizes: '(max-width: 767px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_200/v1748349412/MercedesCar2_u07isf.avif 200w, https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_2:3,c_fill,g_auto/c_scale,w_480/v1748349412/MercedesCar2_u07isf.avif 480w',
                            },
                            tablet: {
                                media: '(min-width: 768px) and (max-width: 991px)',
                                sizes: '(max-width: 991px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_4:3,c_fill,g_auto/c_scale,w_960/v1748354937/MercedesCar2_ceiuiv.avif 960w',
                            },
                            desktopSmall: {
                                media: '(min-width: 992px) and (max-width: 1199px)',
                                sizes: '(max-width: 1199px) 100vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1280/v1748354937/MercedesCar2_ceiuiv.avif 1280w',
                            },
                            desktopLarge: {
                                media: '(min-width: 1200px)',
                                sizes: '(min-width: 1200px) 80vw',
                                srcset: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1280/v1748354937/MercedesCar2_ceiuiv.avif 1280w',
                            },
                            default: {
                                url: 'https://res.cloudinary.com/responsivebreakpoints/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1280/v1748354937/MercedesCar2_ceiuiv.avif',
                            },
                        },
                        alt: 'Mockup of a simple image gallery layout featuring placeholder images, navigation arrows, and index dots for practicing web development',
                        ariaLabel: 'Image gallery mockup with navigation arrows and index dots',
                    },
                },
            ],
            // content: [
            //     {
            //         type: 'descriptive-card',
            //         isDescriptiveTextType: true,
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
                ariaHidden: 'false',
                icon: '&larr;',
            },
            buttonRight: {
                ariaLabel: 'Next image',
                ariaHidden: 'false',
                icon: '&rarr;',
            },
        },
        configuration: {
            slideTimer: 30,
        },
    },
};
