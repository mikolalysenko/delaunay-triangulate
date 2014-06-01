"use strict"

var ch = require("incremental-convex-hull")
var uniq = require("uniq")

module.exports = triangulate

function LiftedPoint(p, i) {
  this.point = p
  this.index = i
}

function compareLifted(a, b) {
  var ap = a.point
  var bp = b.point
  var d = ap.length
  for(var i=d-1; i>=0; --i) {
    var s = ap[i] - bp[i]
    if(s) {
      return s
    }
  }
  return 0
}

function triangulate(points) {
  var n = points.length
  if(n === 0) {
    return []
  }
  var d = points[0].length
  
  //Lift points, sort
  var lifted = new Array(n)
  var upper = 0.0
  for(var i=0; i<n; ++i) {
    var p = points[i]
    var x = new Array(d+1)
    var l = 0.0
    for(var j=0; j<d; ++j) {
      var v = p[j]
      x[j] = v
      l += v * v
    }
    x[d] = l
    lifted[i] = new LiftedPoint(x, i)
    upper = Math.max(l, upper)
  }
  uniq(lifted, compareLifted)
  
  //Create new list of points
  var dpoints = new Array(n + d + 1)
  var dindex = new Array(n + d + 1)

  //Add steiner points at top
  var u = (d+1) * (d+1) * upper
  var y = new Array(d+1)
  for(var i=0; i<=d; ++i) {
    y[i] = 0.0
  }
  y[d] = u

  dpoints[0] = y.slice()
  dindex[0] = -1

  for(var i=0; i<=d; ++i) {
    var x = y.slice()
    x[i] = 1
    dpoints[i+1] = x
    dindex[i+1] = -1
  }

  //Copy rest of the points over
  for(var i=0; i<n; ++i) {
    var h = lifted[i]
    dpoints[i + d + 1] = h.point
    dindex[i + d + 1] =  h.index
  }

  //Construct convex hull
  return ch(dpoints).filter(function(cell) {
    for(var i=0; i<=d; ++i) {
      var v = dindex[cell[i]]
      if(v < 0) {
        return false
      }
      cell[i] = v
    }
    return true
  })
}