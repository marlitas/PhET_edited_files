// Copyright 2002-2013, University of Colorado

/**
 * Model container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  "use strict";
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );
  var BarMagnet = require( 'model/BarMagnet' );
  var Fort = require( 'FORT/Fort' );

  var ExampleSimModel = Fort.Model.extend(
      {
        init: function() {
          // model elements
          this.barMagnet = new BarMagnet( {location: {x: 0, y: 0}, width: 375, height: 75, orientation: 0} );
        }} );

  //TODO: Make sure reset not replacing the entire bar magnet

  // Resets all model elements
  ExampleSimModel.prototype.reset = function() {
    this.barMagnet.reset();
  };

  // Called by the animation loop
  ExampleSimModel.prototype.step = function() {
    // Make model changes here.
  };

  return ExampleSimModel;
} );
