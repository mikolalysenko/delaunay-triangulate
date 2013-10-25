delaunay-triangulate
====================
Triangulates a set of points into a Delaunay triangulation.  This is a wrapper over [incremental-delaunay](https://npmjs.org/package/incremental-delaunay) which is more user-friendly.  This code works in arbitrary dimensions, and both in the server and in the browser.

## Example

```javascript
var triangulate = require("delaunay-triangulate")

var points = [
  [0, 1],
  [1, 0],
  [1, 1],
  [0, 0],
  [0.5, 0.5]
]

var triangles = triangulate(points)

console.log(triangles)
```

## Install

    npm install delaunay-triangulate

## API

### `require("delaunay-triangulate")(points)`
Constructs a Delaunay triangulation over `points`

* `points` is a collection of points in Euclidean space.

**Returns** A list of cells representing the faces of the triangulation.  These are triangles in 2D or tetrahedra in 3D.

## Credits
(c) 2013 Mikola Lysenko. MIT License