DG.Entrance.Arrow = DG.Polyline.extend({

    // _markers: [],
    
    initialize: function (latlngs, options) { // (Array, Object)
        this._setLatLngs(latlngs);
        /*jshint shadow: true */
        var options = options || {};
        /*jshint shadow: false */
        options.animation = this.getArrowAnimation(this._convertLatLngs(latlngs));

        this._markers = [];
        // this._markersPath = [];
        // this._markersPolygons = [];

        L.setOptions(this, options);
        // console.log(this);
    },

    projectLatlngs: function () {
        this._project();
        this._offsetLastPathPoint();
    },

    getContainer: function () {
        return this._renderer._container;
    },

    onAdd: function (map) { // (DG.Map)
        // DG.Polyline.prototype.onAdd.call(this, map);
        var renderer = this._renderer = map.getArrowRenderer();
        renderer._initPath(this);

        // defined in children classes
        this._project();
        this._update();
        this._updateStyleByZoom();

        renderer._addPath(this);
        renderer._initMarkers(this);
    },

    onRemove: function (map) { // (DG.Map)
        DG.Polyline.prototype.onRemove.call(this, map);

        this._renderer._removeMarkers(this);
    },

    getEvents: function () {
        return {
            viewreset: this._project,
            move: this._update,
            zoomend: this._updateStyleByZoom
        };
    },

    // setStyle: function (style) {
    //     L.setOptions(this, style);
    //     this._updateStyle(this);
    //     return this;
    // },

    _update: function () {
        DG.Polyline.prototype._update.call(this);

        this._renderer._updateMarker(this);
    },

    _offsetLastPathPoint: function () {
        var lastSegmentInPercents,
            offsetVector,
            offsetTo = {},
            origPoints = this._rings[0],
            // origPoints = this._originalPoints,
            pointsLen = origPoints.length,
            byZoom = this.options.byZoom,
            zoom = this._map.getZoom(),

            lastPoint = origPoints[pointsLen - 1],
            lastByOnePoint = origPoints[pointsLen - 2],
            lastSegmentLen = lastPoint.distanceTo(lastByOnePoint);

        if (typeof byZoom[zoom] !== 'undefined') {
            lastSegmentInPercents = Math.abs((byZoom[zoom].lastPointOffset * 100) / lastSegmentLen);

            offsetVector = {
                x: origPoints[pointsLen - 1].x - origPoints[pointsLen - 2].x,
                y: origPoints[pointsLen - 1].y - origPoints[pointsLen - 2].y
            };

            offsetTo.x = Math.round(offsetVector.x * lastSegmentInPercents / 100);
            offsetTo.y = Math.round(offsetVector.y * lastSegmentInPercents / 100);

            // move last point forward/back by offsetVector direction
            if (byZoom[zoom].lastPointOffset > 0) {
                origPoints[pointsLen - 1].x += offsetTo.x;
                origPoints[pointsLen - 1].y += offsetTo.y;
            }
            else {
                origPoints[pointsLen - 1].x -= offsetTo.x;
                origPoints[pointsLen - 1].y -= offsetTo.y;
            }
        }
    },

    _updateStyleByZoom: function () {
        var optionsByZoom = this.options.byZoom,
            zoom = this._map.getZoom();

        this.setStyle(optionsByZoom[zoom]);
    }
});

DG.Entrance.arrow = function (latlngs, options) {
    return new DG.Entrance.Arrow(latlngs, options);
};
