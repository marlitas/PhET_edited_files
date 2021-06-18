// Copyright 2021, University of Colorado Boulder

/**
 * ParticleNode is the view for a particle. It is responsible for the visual representation of a particle,
 * and keeping that visual representation synchronized with a Particle instance.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import merge from '../../../../phet-core/js/merge.js';
import ShadedSphereNode from '../../../../scenery-phet/js/ShadedSphereNode.js';
import ExampleSimConstants from '../../common/ExampleSimConstants.js';
import exampleSim from '../../exampleSim.js';

// constants
const PARTICLE_DIAMETER = 20;

class ParticleNode extends ShadedSphereNode {

  /**
   * @param {Particle} particle - the model of a particle
   * @param {ModelViewTransform2} modelViewTransform - transform between model and view coordinates
   * @param {Options} [options]
   */
  constructor( particle, modelViewTransform, options ) {

    options = merge( {

      // ShadedSphereNode options
      mainColor: ExampleSimConstants.PARTICLE_COLOR
    }, options );

    super( PARTICLE_DIAMETER, options );

    // @public (read-only)
    this.particle = particle;

    // Update the view position to match the model position.
    // Note that we're applying the transform from model to view coordinates.
    particle.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    // As a particle ages, reduce its opacity so that it fades out.
    particle.opacityProperty.link( opacity => {
      this.opacity = opacity;
    } );
  }
}

exampleSim.register( 'ParticleNode', ParticleNode );
export default ParticleNode;