var deps = {

    DGCore: {
        desc: 'Main module',
        src: [
            'DGCore/DGCore.js',
            '../vendors/polyfills/json2.js'
        ],
        css: {
            all: [
                '../vendors/leaflet/dist/leaflet.css'
            ],
            ie: ['../vendors/leaflet/dist/leaflet.ie.css']
        },
        heading: '2GIS modules',
        deps: [ 'Core',
                'EPSG3395',
                'TileLayer',
                'TileLayerWMS',
                'TileLayerCanvas',
                'ImageOverlay',
                'Marker',
                'DivIcon',
                'Popup',
                'LayerGroup',
                'FeatureGroup',
                'Path',
                'PathVML',
                'PathCanvas',
                'Polyline',
                'Polygon',
                'MultiPoly',
                'Rectangle',
                'Circle',
                'CircleMarker',
                'VectorsCanvas',
                'GeoJSON',
                'MapDrag',
                'MouseZoom',
                'TouchZoom',
                'BoxZoom',
                'Keyboard',
                'MarkerDrag',
                'ControlZoom',
                'ControlAttrib',
                'ControlScale',
                'ControlLayers',
                'AnimationPan',
                'AnimationTimer',
                'AnimationZoom',
                'Geolocation']
    },

    DGWhen: {
        desc: 'Promise/Deffered object module',
        src: [ 'DGWhen/src/DGWhen.js' ],
        deps: ['DGCore']
    },

    DGAjax: {
        desc: '2GIS Ajax module',
        src: ['DGAjax/src/DGAjax.js'],
        deps: ['DGCore', 'DGWhen']
    },

    DGDivIcon: {
        desc: '2GIS DivIcon module',
        src: ['DGDivIcon/src/DGDivIcon.js'],
        deps: ['DGCore']
    },

    DGLabel: {
        desc: '2GIS Label module',
        src: [
            'DGLabel/src/DGLabel.js',
            'DGLabel/src/Marker.DGLabel.js',
            'DGLabel/src/Path.DGLabel.js'
        ],
        css: {
            all: ['DGLabel/skin/{skin}/css/DGLabel.css']
        },
        deps: ['DGCore']
    },

    DGWkt: {
        desc: 'WKT parser module.',
        src: ['DGWkt/Wkt.js',
              'DGWkt/DGWkt.js'
        ],
        deps: ['DGCore']
    },

    DGCustomization: {
        desc: 'LeafLet customization module',
        src: [
            'DGCustomization/skin/{skin}/theme.config.js',
            '../vendors/baron/baron.js',
            '../vendors/baron/js/bonzo.js',
            '../vendors/baron/js/bean.js',
            '../vendors/baron/js/qwery.js',
            'DGCustomization/DGCustomization.js'
        ],
        css: {
            all: [
                'DGCustomization/skin/basic/css/leaflet-reset.css',
                '../vendors/baron/baron.css',
                'DGCustomization/skin/{skin}/css/zoom.css',
                'DGCustomization/skin/{skin}/css/callout.css',
                'DGCustomization/skin/{skin}/css/baron.css',
                'DGCustomization/skin/{skin}/css/marker.css'
            ],
            ie: ['DGCustomization/skin/{skin}/css/baron.ie.css']
        },
        deps: ['DGCore', 'DGDivIcon']
    },

    DGLocale: {
        desc: 'Localization module',
        src: ['DGLocale/src/DGDictionary.js', 'DGLocale/src/DGLocale.js'],
        deps: ['DGCore']
    },

    DGFullScreen: {
        desc: 'Full screen module',
        src: ['DGFullScreen/src/DGFullScreen.js',
              'DGFullScreen/lang/ru.js',
              'DGFullScreen/lang/it.js',
              'DGFullScreen/lang/en.js'
        ],
        css: {
            all: ['DGFullScreen/skin/{skin}/css/DGFullScreen.css'],
            ie: ['DGFullScreen/skin/{skin}/css/DGFullScreen.ie.css']
        },
        deps: ['DGCore', 'DGLocale']
    },

    DGJsonp: {
        desc: 'JSONP module',
        src: ['DGJsonp/src/DGJsonp.js'],
        deps: ['DGCore']
    },

    DGTileLayer: {
        desc: '2GIS tile layer module',
        src: ['DGTileLayer/src/DGTileLayer.js'],
        css: {
            all: ['DGTileLayer/skin/{skin}/css/style.css'],
            ie: ['DGTileLayer/skin/{skin}/css/ie.css']
        },
        deps: ['DGCore']
    },

    DGProjectDetector: {
        desc: '2GIS project detector module.',
        src: ['DGProjectDetector/src/DGProjectDetector.js'],
        deps: ['DGCore', 'DGJsonp']
    },

    DGPoi: {
        desc: '2GIS POI module.',
        src: [
            'DGPoi/src/DGPoi.js',
            'DGPoi/src/PoiStorage.js',
            'DGPoi/src/PolyUtilContains.js'
        ],
        deps: ['DGJsonp', 'DGCore', 'DGTileLayer', 'DGWkt']
    },

    DGGeoclicker: {
        desc: '2GIS Geoclicker.',
        css: {
            all: [
                'DGGeoclicker/skin/{skin}/css/DGGeoclicker.css'
            ]
        },
        src: [
            'DGGeoclicker/src/DGGeoclicker.js',
            'DGGeoclicker/src/provider/Provider.js',
            'DGGeoclicker/src/provider/CatalogApi.js',
            'DGGeoclicker/src/handler/Handler.js',
            'DGGeoclicker/src/handler/Default.js',
            'DGGeoclicker/lang/it/handler/Default.js',
            'DGGeoclicker/lang/ru/handler/Default.js',
            'DGGeoclicker/lang/en/handler/Default.js',
            'DGGeoclicker/src/handler/CityArea.js',
            'DGGeoclicker/lang/it/handler/CityArea.js',
            'DGGeoclicker/lang/ru/handler/CityArea.js',
            'DGGeoclicker/lang/en/handler/CityArea.js',
            'DGGeoclicker/src/handler/House.js',
            'DGGeoclicker/lang/it/handler/House.js',
            'DGGeoclicker/lang/ru/handler/House.js',
            'DGGeoclicker/lang/en/handler/House.js',
            'DGGeoclicker/src/View.js',
            'DGGeoclicker/src/Controller.js',

            '../vendors/firmcard/src/FirmCard.js',
            '../vendors/firmcard/src/FirmCard.DataHelper.js',
            '../vendors/firmcard/src/FirmList.js',
            '../vendors/firmcard/src/vendors/underscore1.5.1.js',
            '../vendors/firmcard/src/vendors/momentjs/moment.min.js',
            '../vendors/firmcard/src/vendors/momentjs/lang/moment.ru.js',
            '../vendors/firmcard/src/vendors/momentjs/lang/moment.cs.js',
            '../vendors/firmcard/src/vendors/momentjs/lang/moment.it.js',
            '../vendors/firmcard/src/Schedule.js',
            '../vendors/firmcard/src/Dictionary.js',

        ],
        deps: ['DGJsonp', 'DGCore', 'DGTemplate', 'DGLocale', 'DGPoi', 'DGLabel']
    },

    DGTemplate: {
        desc: '2GIS Template',
        src: [
            'DGTemplate/src/DGTemplate.js'
        ]
    },

    DGEntrance: {
        desc: '2GIS Entrances.',
        src: [
            'DGEntrance/src/DGEntrance.js',
            'DGEntrance/src/PathAnimation.js',
            'DGEntrance/src/Arrow.js',
            'DGEntrance/src/ArrowSvg.js',
            'DGEntrance/src/ArrowVml.js',
            'DGEntrance/src/ArrowSvgAnimationOptions.js',
            'DGEntrance/src/EventHandler.js'
        ],
        deps: ['DGCore', 'DGWkt', 'DGProjectDetector']
    },

    DGLocationControl: {
        desc: 'Location control module',
        src: [
            'DGLocationControl/src/DGLocationControl.js',
            'DGLocationControl/lang/ru.js',
            'DGLocationControl/lang/it.js',
            'DGLocationControl/lang/en.js'
        ],
        css: {
            all: [
                'DGLocationControl/skin/{skin}/css/DGLocationControl.css'
            ],
        },
        deps: ['DGCore', 'DGLocale']
    }
};

if (typeof exports !== 'undefined') {
    exports.deps = deps;
}
