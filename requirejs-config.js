var config = {
    paths: {
        slick: 'js/slick.min',
        spinner: 'js/spinner',
        owlcarousel: 'js/owl.carousel'
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        owlcarousel: {
            deps: ['jquery']
        }
    }
};

// var config = {
//     paths: {
//         'owlcarousel': "js/owl.carousel.min"
//     },
//     shim: {
//         'owlcarousel': {
//             deps: ['jquery']
//         }
//     }
// };