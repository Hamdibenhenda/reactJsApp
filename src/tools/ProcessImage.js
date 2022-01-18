/**
 * Process an image at a given `url` to match a set of output `dimensions`
 * at a given `focalPoint` (x and y whole numbers, as percentages) and zoom factor (between 1..3). Done in-memory using `<canvas>`.
 */
 function processImage({ url, focalPoint, dimensions, fileType, zoom }) {
    return new Promise(resolve => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = document.createElement('img');
      const isExternalUrl = url.startsWith('https');
  
      // Only apply crossOrigin status if it's an external URL (and not an in-memory blob)
      if (isExternalUrl) img.crossOrigin = 'anonymous';
  
      img.onload = () => {
        const inputDimensions = { width: img.naturalWidth, height: img.naturalHeight };
        const outputDimensions = dimensions;
        canvas.width = outputDimensions.width;
        canvas.height = outputDimensions.height;
  
        const { top, left, width, height } = getTransformCoordinates({
          inputDimensions,
          outputDimensions,
          focalPoint,
          zoom,
        });
  
        ctx.drawImage(img, left, top, width, height);
        canvas.toBlob(blob => resolve(blob), fileType);
      };
  
      /**
       * If the image is cross-origin (e.g. coming from an S3 bucket), we need to add a cache-busting
       * timestamp to the end of the URL. Otherwise, the browser attempts to use the in-memory version
       * of the image asset which it has loaded *without* CORS information for the canvas operation above,
       * which requires an image *with* CORS information.
       */
      const src = isExternalUrl ? url + '?timestamp=' + Date.now() : url;
  
      img.src = src;
    });
  }