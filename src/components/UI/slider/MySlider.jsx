import React , {memo} from 'react'
import ReactSlider from 'react-slider'

function MySlider({max, min, step, value, setValue}) {
    
  return (
    <ReactSlider
    value={value}
    onChange={(value) => setValue(value)}
    step={step}
    max={max}
    min={min}
    className="horizontal-slider"
    thumbClassName="thumb"
    trackClassName="track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  )
}

export default memo(MySlider);