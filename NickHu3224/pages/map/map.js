// map.js
Page({
    data: {
        markers: [{
            iconPath: "images/placeholder.png",
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 20,
            height: 20
        }],
        polyline: [{
            points: [{
                longitude: 113.3245211,
                latitude: 23.10229
            }, {
                longitude: 113.324520,
                latitude: 23.21229
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true
        }],
        controls: [{
            id: 1,
            iconPath: 'images/abc_btn_radio_to_on_mtrl_015.png',
            position: {
                left: 20,
                top: 450,
                width: 30,
                height: 30
            },
            clickable: true
        }]
    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
    },
    getArea: function getArea () {
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
            }
        })
    },
})