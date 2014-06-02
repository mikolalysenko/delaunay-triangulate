"use strict"

var tape = require("tape")
var dt = require("../triangulate")
var isDelaunay = require("./util/is-delaunay")

tape("fuzz-3d", function(t) {
  for(var i=0; i<5; ++i) {
    var points = new Array(40)
    for(var j=0; j<40; ++j) {
      points[j] = [ Math.random(), Math.random(), Math.random() ]
    }
    isDelaunay(t, dt(points), points)
  }
  t.end()
})