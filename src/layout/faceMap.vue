<template>
  <div id="map" @click="handleClick" @pointermove="handlePointMove">
  </div>
</template>

<script>

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import 'ol/ol.css'
// import Feature from 'ol/Feature.js'
export default {
  name: 'FaceMap',
  data() {
    return {
      map: '',
      position: [499, 166]
    }
  },
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
      var nanjing = this.$ol.proj.fromLonLat([118.792819, 32.053766])
      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZ({
              tileUrlFunction: function(tileCoord) {
                var x = 'C' + _this.zeroPad(tileCoord[1], 8, 16)
                var y = 'R' + _this.zeroPad(-tileCoord[2] - 1, 8, 16)
                var z = 'L' + _this.zeroPad(tileCoord[0], 2, 10)
                return 'http://10.45.157.117:8090/MAP' + '/' + z + '/' + y + '/' + x + '.png'
              }, projection: 'EPSG:3857'
            })
          })
        ],
        view: new View({
          center: nanjing,
          zoom: 11,
          minZoom: 5
        })
      })
      this.setIcon(this.position)
    },
    setIcon(position) {
      this.imgdiv = document.createElement('div')
      var img = document.createElement('img')
      img.style.width = '36px'
      img.style.height = '36px'
      img.src = 'dot.png'
      this.imgdiv.appendChild(img)
      new this.$ol.Overlay({
        position: this.position,
        positioning: 'map',
        element: this.imgdiv,
        stopEvent: false
      })
    },
    handleClick(evt) {
      var _this = this
      var pixel = _this.map.getEventPixel(evt)
      console.info(pixel)
    },
    handlePointMove(evt) {
      // var _this = this
      // var pixel = _this.map.getEventPixel(evt)
    }
  }
}
</script>

