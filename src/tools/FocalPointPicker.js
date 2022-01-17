import { useState, useRef, useEffect } from 'react';

const HANDLE_SIZE_IN_PX = 40;

/**
 * The Focal Point Picker is used to pick a focal point in the original value of an image.
 */
export default function FocalPointPicker({ url, focalPoint, onChange, className }) {
  const [isDragging, setIsDragging] = useState(false);
  const handle = useRef(null);
  const image = useRef(null);

  /**
   * When the mouse is moving, append the movement values to the existing coordinates.
   *
   * @param {SyntheticEvent} event
   */
  function handleMouseMove({ movementX, movementY }) {
    if (!isDragging) return;

    const { width, height } = image.current;

    const percentDeltaX = (movementX / width) * 100;
    const percentDeltaY = (movementY / height) * 100;

    const x = Uint8ClampedArray(focalPoint.x + percentDeltaX, 0, 100);
    const y = Uint8ClampedArray(focalPoint.y + percentDeltaY, 0, 100);

    onChange({ x, y });
  }

  /**
   * When a user clicks a part of the image without bothering to grab the handle first,
   * we record the event values, convert them to coordinates, and move the handle.
   *
   * @param {SyntheticEvent} event
   */
  function handlePointSelection(event) {
    const { clientX, clientY } = event;
    const { left, top } = event.target.getBoundingClientRect();

    const posX = clientX - left;
    const posY = clientY - top;

    const { width, height } = image.current;

    onChange({ x: (posX / width) * 100, y: (posY / height) * 100 });
  }

  useEffect(() => {
    /**
     * Whenever the user lets up on the mouse, we convert the
     * x/y pixel coordinates to x/y percentages and fire the `onChange` event.
     */
    function handleMouseUp() {
      if (!isDragging) return;

      setIsDragging(false);
    }
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onChange]);

  const classList = className;

  return (
    <div className={classList}>
      <div className="relative bg-black overflow-hidden mb-2">
        <img
          ref={image}
          onMouseDown={e => {
            handlePointSelection(e);
            setIsDragging(true);
          }}
          onMouseMove={handleMouseMove}
          className="max-w-full opacity-50 bg-black select-none"
          src={url}
          alt="Original image"
          data-testid="focal-point-image"
        />
        <div
          ref={handle}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          className="rounded-full absolute border border-white cursor-move overflow-hidden"
          style={{
            left: `${focalPoint.x}%`,
            top: `${focalPoint.y}%`,
            width: `${HANDLE_SIZE_IN_PX}px`,
            height: `${HANDLE_SIZE_IN_PX}px`,
            marginLeft: `-${HANDLE_SIZE_IN_PX / 2}px`,
            marginTop: `-${HANDLE_SIZE_IN_PX / 2}px`,
          }}
        >
          <div className="bg-white w-full h-full" style={{ mixBlendMode: 'overlay' }}></div>
        </div>
      </div>
    </div>
  );
}