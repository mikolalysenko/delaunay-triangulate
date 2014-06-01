"use strict"

var tape = require("tape")
var compare = require("./util/normalize").compare
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

  compare(t, triangles, [
      [4,0,3],
      [4,2,0],
      [4,2,1],
      [4,3,1]
    ], "simple 2d")

  t.end()
})