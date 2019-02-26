<template>
  <div id="map">
    <!-- <p style="width:200px;height:200px;background:blue">hello</p> -->
  </div>
</template>

<script>
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
// import 'ol/ol.css'
export default {
  name: 'FaceMap',
  mounted() {
    this.initMap()
  },
  methods: {
    zeroPad(num, len, radix) {
      let str = num.toString(radix || 10)
      while (str.length < len) {
        str = '0' + str
      }
      return str
    },
    initMap() {
      var _this = this
      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZ({
              tileUrlFunction: function(tileCoord) {
                console.info(tileCoord)
                var x = 'C' + _this.zeroPad(tileCoord[1], 8, 16)
                console.info(x)
                var y = 'R' + _this.zeroPad(-tileCoord[2] - 1, 8, 16)
                var z = 'L' + _this.zeroPad(tileCoord[0], 2, 10)
                return 'http://10.45.157.117:8090/MAP' + '/' + z + '/' + y + '/' + x + '.png'
              }, projection: 'EPSG:3857'
            })
          })
        ],
        view: new View({
          center: this.$ol.proj.transform([106.227256, 38.486691], 'EPSG:4326', 'EPSG:3857'),
          zoom: 11,
          minZoom: 5
        })
      })
    }
  }
}
</script>

