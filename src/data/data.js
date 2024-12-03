export const data = {
    gallery: {
        type: 'gallery',
        headerData: {
            type: 'header',
            title: 'title',
            subtitle: 'subTitle',
            configuration: {
                titleAligment: 'titleAligment',
                mobileTitleAligment: 'mobileTitleAligment',
                subtitleAligment: 'subtitle',
                mobilesubtitleAligment: 'mobileTitleAligment',
            },
        },
        galleryContent: {
            type: 'images',
            content: [
                {
                    type: 'image',
                    isImageActive: true,
                    image: {
                        media: {
                            desktop: 'imageDesktop1.jpg',
                            mobile: 'imageMobile1.jpg',
                        },
                        configuration: {
                            slideTimer: 30,
                        },
                    },
                },
                {
                    type: 'image',
                    isImageActive: true,
                    image: {
                        media: {
                            desktop: 'imageDesktop1.jpg',
                            mobile: 'imageMobile1.jpg',
                        },
                        configuration: {
                            slideTimer: 30,
                        },
                    },
                },
                {
                    type: 'image',
                    isImageActive: true,
                    image: {
                        media: {
                            desktop: 'imageDesktop1.jpg',
                            mobile: 'imageMobile1.jpg',
                        },
                        configuration: {
                            slideTimer: 30,
                        },
                    },
                },
                {
                    type: 'image',
                    isImageActive: true,
                    image: {
                        media: {
                            desktop: 'imageDesktop1.jpg',
                            mobile: 'imageMobile1.jpg',
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
