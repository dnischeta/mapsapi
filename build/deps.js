var deps = {

    DGCore: {
        desc: 'Main DG module.',
        src: [
            'DGCore/skin/{skin}/theme.config.js',
            'DGCore/DGCore.js'
        ],
        css: {
            all: [
                '../vendors/leaflet/dist/leaflet.css',
                'DGCore/skin/basic/css/leaflet-reset.css',
                'DGCore/skin/{skin}/css/zoom.css'
            ],
            ie: ['../vendors/leaflet/dist/leaflet.ie.css']
        },
        heading: '2GIS modules'
    },

    DGLayer: {
        desc: '2GIS Tile Layer module.',
        src: ['DGLayer/src/DGLayer.js'],
        css: {
            all: ['DGLayer/skin/{skin}/css/style.css']
        },
        deps: ['TileLayer', 'DGCore']
    },

    JSONP: {
        src: ['Jsonp/src/Jsonp.js'],
        desc: 'JSONP module.'
    },

    ProjectDetector: {
        desc: 'ProjectDetector module.',
        src: ['ProjectDetector/src/ProjectDetector.js'],
        deps: ['JSONP']
    },

    Localization: {
        desc: 'Localization module.',
        src: ['Localization/src/Localization.js']
    }

};

if (typeof exports !== 'undefined') {
    exports.deps = deps;
}
