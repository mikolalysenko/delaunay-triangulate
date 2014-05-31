"use strict"

var tape = require("tape")
var triangulate = require("../triangulate")

tape("delaunay-2d", function(t) {
  var points = [
    [0, 1],
    [1, 0],
    [1, 1],
    [0, 0],
    [0.5, 0.5]
  ]

  var triangles = triangulate(points)

  t.same(triangles, )

  console.log(triangles)

  t.end()
})