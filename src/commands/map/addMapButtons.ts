declare var L;

export const addMapButtons = (map) => {
    L.NewLineControl = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container);

            link.href = '#';
            link.title = 'Create a new line';
            link.innerHTML = '/\\/';
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                .on(link, 'click', function () {
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
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container);

            link.href = '#';
            link.title = 'Create a new circle';
            link.innerHTML = '⬤';
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                .on(link, 'click', function () {
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
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container);

            link.href = '#';
            link.title = 'Create a new Text';
            link.innerHTML = 'A';
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                .on(link, 'click', function () {
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
}