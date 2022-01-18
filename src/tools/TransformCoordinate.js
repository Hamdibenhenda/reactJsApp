/**
 * Get transform coordinates suitable for rendering an image inside a canvas using `ctx.drawImage()`
 */
 export function getTransformCoordinates({ inputDimensions, outputDimensions, focalPoint, zoom }) {
    // We aim to place the image's focal point in the visual center of the output image:
    const outputCenter = {
      x: outputDimensions.width * 0.5,
      y: outputDimensions.height * 0.5,
    };
  
    // Determine how much we need to scale the input image to fit into the output constraints.
    // Note: we're using Math.max to emulate CSS's `contain: cover` behavior.
    var scale = Math.max(
      outputDimensions.width / inputDimensions.width,
      outputDimensions.height / inputDimensions.height
    );
  
    // newDimensions will always (by construction) be equal-to-or-larger than their outputDimensions equivalent.
    // This means top & left values will be less-than-or-equal-to-zero.
    const newDimensions = {
      width: inputDimensions.width * scale * zoom,
      height: inputDimensions.height * scale * zoom,
    };
  
    // Find out, in natural pixels, the desired visual center of the original (scaled) image
    const idealCenter = {
      x: newDimensions.width * (focalPoint.x / 100),
      y: newDimensions.height * (focalPoint.y / 100),
    };
  
    // Determine the ideal top and left values (<= 0) to adjust the image in order to have
    // the *perfect* focal point match.
    const idealTop = 0 - (idealCenter.y - outputCenter.y);
    const idealLeft = 0 - (idealCenter.x - outputCenter.x);
  
    // See how much "wiggle room" we actuall have to move the scaled image outside the bounds
    // before we run out of image (and end up with black bars).
    const maxLeft = outputDimensions.width - newDimensions.width;
    const maxTop = outputDimensions.height - newDimensions.height;
  
    // Now calculate the realistic, usable top and left points, by moving the image as far as we can
    // (without running out of image, and getting black bars) to respect the focalPoint.
    // Where `max*` is the most we can move in a negative direction, and 0 is the max.
    const realisticLeft = clamp(idealLeft, maxLeft, 0);
    const realisticTop = clamp(idealTop, maxTop, 0);
  
    // Round everything to the nearest whole number
    const top = Math.floor(realisticTop);
    const left = Math.floor(realisticLeft);
    const width = Math.floor(newDimensions.width);
    const height = Math.floor(newDimensions.height);
  
    return {
      top,
      left,
      width,
      height,
    };
  }