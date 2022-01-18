import Slider from 'rc-slider';

const ZOOM_MIN = 1;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.01;

export default function ZoomSlider({ onChange, zoom }) {
  return (
    <div className="zoom-slider  mb-12">
      <h1 className="text-sm text-black font-medium">Image zoom</h1>
      <div className="w-auto px-2 py-2 mx-auto">
        <Slider
          value={10}
          handleStyle={{
            backgroundColor: '#02A8B2',
            borderColor: '#02A8B2',
          }}
          min={ZOOM_MIN}
          max={ZOOM_MAX}
          onChange={onChange}
          trackStyle={{
            backgroundColor: '#5FDCE3',
          }}
          step={ZOOM_STEP}
        >
        </Slider>
      </div>
    </div>
  );
}