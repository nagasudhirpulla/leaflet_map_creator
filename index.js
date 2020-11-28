var startPoint = [19.064551590666486, 72.89548873901369];
var map = L.map('map', {
        editable: true
    }).setView(startPoint, 13),
    tilelayer = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
    }).addTo(map);

L.NewLineControl = L.Control.extend({

    options: {
        position: 'topleft'
    },

    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
            link = L.DomUtil.create('a', '', container);

        link.href = '#';
        link.title = 'Create a new line';
        link.innerHTML = '/\\/';
        L.DomEvent.on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', function() {
                map.editTools.startPolyline();
            });

        return container;
    }
});
map.addControl(new L.NewLineControl());

L.NewCircleControl = L.Control.extend({
    options: {
        position: 'topleft'
    },
    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
            link = L.DomUtil.create('a', '', container);

        link.href = '#';
        link.title = 'Create a new circle';
        link.innerHTML = '⬤';
        L.DomEvent.on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', function() {
                map.editTools.startCircle();
            });
        return container;
    }
});
map.addControl(new L.NewCircleControl());

L.NewTextControl = L.Control.extend({
    options: {
        position: 'topleft'
    },
    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
            link = L.DomUtil.create('a', '', container);

        link.href = '#';
        link.title = 'Create a new Text';
        link.innerHTML = 'A';
        L.DomEvent.on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', function() {
                // get map center
                var textLatLng = map.getCenter();
                L.marker(textLatLng, {
                    icon: L.divIcon({
                        className: 'text-labels', // Set class for CSS styling
                        html: 'A Text Label'
                    }),
                    zIndexOffset: 1000, // Make appear above other map features
                    draggable: true
                }).addTo(map);
            });
        return container;
    }
});
map.addControl(new L.NewTextControl());

var deleteShape = function(e) {
    if ((e.originalEvent.ctrlKey || e.originalEvent.metaKey) && this.editEnabled()) {
        this.editor.deleteShapeAt(e.latlng);
        // https://gist.github.com/scottopolis/6e35cf0d53bae81e6161662e6374da04
        delete layersData_g[e.target._leaflet_id]
    } else {
        // layer is clicked, make this layer as the active layer
        setActiveLayer(e.target._leaflet_id)
    }
};

var deleteText = function(e) {
    if ((e.originalEvent.ctrlKey || e.originalEvent.metaKey) && this.editEnabled()) {
        delete layersData_g[e.target._leaflet_id];
        map.removeLayer(e.target);
    } else {
        // layer is clicked, make this layer as the active layer
        setActiveLayer(e.target._leaflet_id)
    }
};

map.on('layeradd', function(e) {
    if (e.layer instanceof L.Path) e.layer.on('click', L.DomEvent.stop).on('click', deleteShape, e.layer);
    if (e.layer instanceof L.Path) e.layer.on('dblclick', L.DomEvent.stop).on('dblclick', e.layer.toggleEdit);
    if (e.layer instanceof L.Path) {
        var layerType = "NA";
        if (e.layer instanceof L.Circle) {
            layerType = "circle";
            e.layer.setStyle({
                stroke: false,
                color: settings_g.circleClr,
                fillOpacity: 1
            });
        } else if (e.layer instanceof L.Polyline) {
            layerType = "polyline";
            e.layer.setStyle({
                color: settings_g.lineClr
            });
        }
        layersData_g[e.layer._leaflet_id] = {
            meta: { name: "NA" },
            type: layerType
        };
    } else if (e.layer instanceof L.Marker) {
        if (e.layer._icon instanceof HTMLDivElement) {
            e.layer.on('click', L.DomEvent.stop).on('click', deleteText, e.layer);
            layerType = "text";
            var shapeName = e.layer._icon.innerText;
            layersData_g[e.layer._leaflet_id] = {
                meta: { name: shapeName },
                type: layerType
            };
        }
    }
});