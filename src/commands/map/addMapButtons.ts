import * as L from 'leaflet';

export const addMapButtons = (map: any): void => {
    const NewLineControl = L.Control.extend({
        options: {
            position: 'topleft'
        },
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container) as HTMLLinkElement

            link.href = '#'
            link.title = 'Create a new line'
            link.innerHTML = '/\\/'
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                .on(link, 'click', function () {
                    map.editTools.startPolyline()
                })

            return container
        }
    })
    map.addControl(new NewLineControl())

    const NewCircleControl = L.Control.extend({
        options: {
            position: 'topleft'
        },
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container) as HTMLLinkElement

            link.href = '#'
            link.title = 'Create a new circle'
            link.innerHTML = '⬤'
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                .on(link, 'click', function () {
                    map.editTools.startCircle()
                });
            return container
        }
    });
    map.addControl(new NewCircleControl())

    const NewTextControl = L.Control.extend({
        options: {
            position: 'topleft'
        },
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container) as HTMLLinkElement

            link.href = '#'
            link.title = 'Create a new Text'
            link.innerHTML = 'A'
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                .on(link, 'click', function () {
                    // get map center
                    var textLatLng = map.getCenter()
                    L.marker(textLatLng, {
                        icon: L.divIcon({
                            className: 'text-labels', // Set class for CSS styling
                            html: 'A Text Label'
                        }),
                        zIndexOffset: 1000, // Make appear above other map features
                        draggable: true
                    }).addTo(map)
                })
            return container
        }
    })
    map.addControl(new NewTextControl())
}