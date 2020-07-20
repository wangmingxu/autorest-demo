import React from 'react'
import Hammer from 'react-hammerjs'
import baseRel, {
  relBaseDefaultProps
} from 'widgets/iwx/base/baseRel/baseRel.jsx'
import $class from 'classnames'
import isPc from 'widgets/utils/isPc'
import '../../../style/slider.scss'

export default class IwxRelSlider extends baseRel {
  constructor(props) {
    super(props)
    this.state = {
      handlerStartPos: 0,
      sliderLeft: 0,
      sliderLength: 0,
      isMoving: false,
      instantValue: 0
    }

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  get percent() {
    const { value, min, max } = this.props
    if (value === undefined || value === null) {
      return 0
    }
    return Math.floor(((value - min) / (max - min)) * 100)
  }
  get stepWidth() {
    const { step, max, min } = this.props
    return (this.state.sliderLength * step) / (max - min)
  }
  get handlerStyle() {
    const { blockColor, blockSize } = this.props
    let style = {
      left: this.percent + '%',
      backgroundColor: blockColor,
      width: blockSize + 'px',
      height: blockSize + 'px',
      marginLeft: '-' + blockSize / 2 + 'px',
      marginTop: '-' + blockSize / 2 + 'px'
    }
    return style
  }

  get getStyle() {
    const { width, height, visible } = this.props
    let styleObj = {
      width,
      height,
      display: visible ? '' : 'none'
    }
    Object.assign(styleObj, this.baseStyle(), this.relStyle())
    return styleObj
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showValue !== this.props.showValue) {
      setTimeout(() => {
        this.setState({
          sliderLength: this.inner.getBoundingClientRect().width
        })
      })
    }
  }

  componentDidMount() {
    this.setState({
      sliderLeft: this.inner.offsetLeft,
      sliderLength: this.inner.getBoundingClientRect().width
    })
  }

  getHandlerStartPos() {
    const innerRect = this.inner.getBoundingClientRect()
    const handlerRect = this.handler.getBoundingClientRect()
    return handlerRect.left - innerRect.left
  }

  getX(obj) {
    let ParentObj = obj
    let left = obj.offsetLeft
    while ((ParentObj = ParentObj.offsetParent)) {
      left += ParentObj.offsetLeft
    }
    return left
  }
  getTouch(event) {
    return event.changedTouches[0] || event.touches[0]
  }
  setChange(value) {
    if (this.props._onChange) {
      this.props._onChange({ value: value })
    }
  }
  setChanging(value) {
    if (this.props._onChanging) {
      this.props._onChanging({ value: value })
    }
  }
  calValue(clientX) {
    // 距初始值的目标步数
    const { sliderLeft } = this.state
    const { max, min, step } = this.props
    const steps = Math.round((clientX - sliderLeft) / this.stepWidth)
    let value = min + step * steps
    value = value < min ? min : value > max ? max : value
    return value
  }
  onClick(e) {
    e.stopPropagation()
    this.emitClick(e)
    const { disabled, min, step } = this.props
    const { sliderLeft } = this.state
    if (disabled) return
    // 距初始值的目标步数
    let tx = e.clientX - this.getX(e.currentTarget) + document.body.scrollLeft
    const steps = Math.round((tx - sliderLeft) / this.stepWidth)
    const value = min + step * steps
    this.setChange(value)
  }
  onTouchStart(e) {
    const touch = this.getTouch(e)
    const { disabled } = this.props
    if (disabled) return
    this.setState({
      handlerStartPos: this.getHandlerStartPos()
    })
    if (this.props._onTouchstart) {
      this.props._onTouchstart(touch)
    }
  }
  onTouchMove(e) {
    const { disabled } = this.props
    if (disabled) return
    const touch = this.getTouch(e)
    let tx = touch.clientX - this.getX(touch.target) + document.body.scrollLeft
    const instantValue = this.calValue(tx)
    this.setState({
      instantValue
    })
    this.setChange(instantValue)
    if (this.props._onTouchmove) {
      this.props._onTouchmove(e)
    }
  }
  onTouchEnd(e) {
    const touch = this.getTouch(e)
    const { disabled } = this.props
    if (disabled) return
    this.setChange(this.state.instantValue)
    if (this.props._onTouchend) {
      this.props._onTouchend(touch)
    }
  }
  onMouseDown(e) {
    const { disabled } = this.props
    if (disabled) return
    this.setState({
      handlerStartPos: this.getHandlerStartPos(),
      isMoving: true
    })
    if (isPc()) {
      if (this.props._onTouchstart) {
        this.props._onTouchstart(e)
      }
    }
  }
  onMouseMove(e) {
    const { disabled } = this.props
    const { isMoving } = this.state
    if (disabled || !isMoving) return
    let tx = e.clientX - this.getX(e.currentTarget) + document.body.scrollLeft
    const instantValue = this.calValue(tx)
    this.setState({
      instantValue
    })
    this.setChanging(instantValue)
  }
  onMouseUp(e) {
    const { disabled } = this.props
    const { isMoving } = this.state
    if (disabled || !isMoving) return
    this.setState({
      isMoving: false
    })
    this.setChange(this.state.instantValue)
    if (isPc()) {
      if (this.props._onTouchend) {
        this.props._onTouchend(e)
      }
    }
  }

  render() {
    const { backgroundColor, activeColor, disabled, value } = this.props
    return (
      <div
        style={this.getStyle}
        className="iwx-slider"
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        onClick={this.onClick}>
        <div className="slider-wrap">
          <div
            ref={el => {
              this.inner = el
            }}
            style={{ backgroundColor }}
            className="slider-inner">
            <div
              style={{
                width: this.percent + '%',
                backgroundColor: activeColor
              }}
              className="slider-track"
            />
            <Hammer
              onTap={this.onTap}
              onPress={this.onLongpress}
              onSwipe={this.onSwipe}
              onSwipeLeft={this.onSwipeLeft}
              onSwipeRight={this.onSwipeRight}
              onSwipeUp={this.onSwipeUp}
              onSwipeDown={this.onSwipeDown}>
              <div
                ref={el => {
                  this.handler = el
                }}
                className={$class(['slider-handler', { disabled: disabled }])}
                style={this.handlerStyle}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onTouchStart={this.onTouchStart}
                onTouchMove={this.onTouchMove}
                onTouchEnd={this.onTouchEnd}
              />
            </Hammer>
          </div>
        </div>
        {this.props.showValue ? (
          <div className="slider-value">{value}</div>
        ) : null}
      </div>
    )
  }
}

let defaultProps = {
  width: '300px',
  height: '32px',
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  value: 0,
  activeColor: '#1AAD19',
  backgroundColor: '#E9E9E9',
  blockSize: 20,
  blockColor: '#FFFFFF',
  showValue: false,
  visible: true
}
IwxRelSlider.defaultProps = Object.assign({}, relBaseDefaultProps, defaultProps)
