"use strict"

var createTriangulation = require("incremental-delaunay")
var sc = require("simplicial-complex")

module.exports = triangulate

function triangulate(points) {
  if(points.length === 0) {
    return []
  }
  var dimension = points[0].length
  var triangulation = createTriangulation(dimension)
  for(var i=0; i<points.length; ++i) {
    triangulation.insert(points[i])
  }
  var cells = []
outer_loop:
  for(var cur=triangulation.prev; cur!==triangulation; cur=cur.prev) {
    var v = cur.vertices
    for(var i=0; i<v.length; ++i) {
      if(v[i] < dimension) {
        continue outer_loop
      }
      v[i] -= dimension
    }
    cells.push(v)
  }
  return sc.normalize(cells)
}