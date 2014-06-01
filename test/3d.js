"use strict"

var tape = require("tape")
var compare = require("./util/normalize").compare
var triangulate = require("../triangulate")

tape("delaunay-2d", function(t) {
  var points = [
    [0,0,0],
    [0,0,1],
    [0,1,0],
    [0,1,1],
    [1,0,0],
    [1,0,1],
    [1,1,0],
    [1,1,1],
    [0.5,0.5,0.5]
  ]

  var triangles = triangulate(points)
  
  compare(t, triangles, [
    [ 8, 2, 4, 0 ],
    [ 8, 1, 0, 2 ],
    [ 8, 4, 0, 1 ],
    [ 8, 4, 6, 2 ],
    [ 8, 1, 4, 5 ],
    [ 8, 5, 4, 6 ],
    [ 8, 3, 5, 1 ],
    [ 8, 2, 1, 3 ],
    [ 8, 2, 3, 6 ],
    [ 8, 7, 6, 5 ],
    [ 8, 3, 7, 6 ],
    [ 8, 3, 5, 7 ] 
  ], "simple 3d")

  t.end()
})