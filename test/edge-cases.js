"use strict"

var tape = require("tape")
var compare = require("./util/normalize").compare
var triangulate = require("../triangulate")

tape("edge-cases", function(t) {
  
  //Test triangulation with no points
  t.same(triangulate([]), [], "empty triangulation")
  t.same(triangulate([], true), [], "empty triangulation + infinity")

  t.same(triangulate([[0]]), [], "triangulation with 1 point")
  t.same(triangulate([[0]], true), [[-1,0]], "triangulation with 1 point + infinity")
  
  t.end()
})