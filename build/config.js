/**
 * Build config
 */
var basePath = __dirname + '/..'; // Set root application path

var config = {

    mainAppConfig: basePath + '/config.main.json',
    localAppConfig: basePath + '/config.local.json',

    source: {
        leaflet: {
            deps: require(basePath + '/vendors/leaflet/build/deps.js').deps,
            path: basePath + '/vendors/leaflet/src/'
        },
        dg: {
            deps: require(basePath + '/build/deps.js').deps,
            path: basePath + '/src/'
        }
    },

    js: {
        public: {
            dir: basePath + '/public/js/',
            src: basePath + '/public/js/dg-map-src.js',
            min: basePath + '/public/js/dg-map.js'
        },

        copyrights: [basePath + '/vendors/leaflet/src/copyright.js'],

        intro: '(function (window, document, undefined) {\n',
        outro: '}(this, document));\n'
    },

    css: {
        public: {
            dir: basePath + '/public/css/',
            clean: basePath + '/public/css/dg-map-src.css',
            full: basePath + '/public/css/dg-map-src-full.css',
            ie: basePath + '/public/css/dg-map-src-ie.css',
            clean_min: basePath + '/public/css/dg-map.css',
            full_min: basePath + '/public/css/dg-map-full.css',
            ie_min: basePath + '/public/css/dg-map-ie.css'
        }
    },

    tmpl: {
        dir: 'templates',
        pattern: '*.tmpl',
        ext: '.tmpl',
        varPostfix: '_TMPL'
    },

    img: {
        pattern: 'src/**/img/*',
        dest: 'public/img/',
        patternLeaflet: 'vendors/leaflet/dist/images/*',
        destLeaflet: 'public/img/vendors/leaflet'
    },

    font: {
        pattern: 'src/**/fonts/**',
        dest: 'public/fonts'
    },

    svg: {
        pattern: 'src/**/svg/*',
        dest: 'public/svg'
    },

    skin: {
        dir: 'skin',
        var: '{skin}'
    },

    loader: {
        dir: basePath + '/public/',
        name: 'loader.js'
    },

    hint: [
        'src/*/src/**/*.js'
    ]

};

exports.config = config;
