// Copyright 2013-2021, University of Colorado Boulder

/**
 * MagnetsControlPanel is a panel that contains controls for magnets.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Text } from '../../../../scenery/js/imports.js';
import { VBox } from '../../../../scenery/js/imports.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Panel from '../../../../sun/js/Panel.js';
import exampleSim from '../../exampleSim.js';
import exampleSimStrings from '../../exampleSimStrings.js';

class MagnetsControlPanel extends Panel {

  /**
   * @param {MagnetsModel} model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor( model, options ) {

    // Demonstrate a common pattern for specifying options and providing default values
    options = merge( {

      // Panel options
      xMargin: 10,
      yMargin: 10,
      stroke: 'orange',
      lineWidth: 3
    }, options );
    
    // 'Magnet Controls' title
    const magnetControlsTitleNode = new Text( exampleSimStrings.magnetControls, {
      font: new PhetFont( {
        size: 18,
        weight: 'bold'
      } )
    } );

    // 'Flip Polarity' button
    const flipPolarityButton = new RectangularPushButton( {
      content: new Text( exampleSimStrings.flipPolarity, {
        font: new PhetFont( 16 )
      } ),
      baseColor: 'yellow',
      xMargin: 10,
      listener: () => {
        const orientation = model.barMagnet.orientationProperty.get() + Math.PI;
        model.barMagnet.orientationProperty.set( orientation );
      }
    } );

    // 'Move Magnet' button
    const moveMagnetButton = new RectangularPushButton( {
      content: new Text( 'Move Magnet', {
        font: new PhetFont( 16 )
      } ),
      baseColor: 'yellow',
      xMargin: 10,
      listener: () => {
        const x = ( Math.random() * options.xBound ) - options.xBound / 2;
        const y = ( Math.random() * options.yBound ) - options.yBound / 2;
        model.barMagnet.positionProperty.set( new Vector2( x, y ) );
      }
    } );

    // 'Add Magnet' button
    const addMagnetButton = new RectangularPushButton( {
      content: new Text( 'Add Magnet', {
        font: new PhetFont( 16 )
        } ),
        baseColor: 'yellow',
        xMargin: 10
    } );

    // The contents of the control panel
    const content = new VBox( {
      align: 'center',
      spacing: 10,
      children: [
        magnetControlsTitleNode,
        flipPolarityButton,
        moveMagnetButton,
        addMagnetButton
      ]
    } );

    super( content, options );
    
    // adds listener that affects parent view
    addMagnetButton.addListener( () => {
      const x = ( Math.random() * options.xBound ) - options.xBound / 2;
      const y = ( Math.random() * options.yBound ) - options.yBound / 2;
      model.addMagnet( x, y );
      this.parent.addMagnetListener( model );
    } );
  }
}

exampleSim.register( 'MagnetsControlPanel', MagnetsControlPanel );
export default MagnetsControlPanel;