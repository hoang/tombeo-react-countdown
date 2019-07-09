import React, {Component} from "react";
import CountDown from 'react-countdown-now'

class TombeoReactCountdown extends Component {
  
  onComplete = () => {
    // default complete handler
    console.log('Countdown completed!')
  }
  
  render() {
    let countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
      let content = ''
      if (completed) {
        content = this.props.completedText || 'Countdown completed!'
      } else {
        let dayPart = ''
        let dayLabel = this.props.dayLabel || 'Day'
        let dayLabelPlural = this.props.dayLabelPlural || dayLabel + 's'
        if (days == 1) {
          dayPart = days + ' ' + dayLabel + ' + '
        }
        if (days > 1) {
          dayPart = days + ' ' + dayLabelPlural + ' + '
        }
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
        if (seconds < 10) {
          seconds = '0' + seconds
        }
        content = dayPart + hours + ':' + minutes + ':' + seconds
      }
      return (
        <span className='tombeo-react-countdown'>
          {content}
        </span>
      )
    }
    
    return (
      <CountDown onComplete={this.props.onComplete || this.onComplete}
                 renderer={countdownRenderer}
                 date={this.props.completeAt || (Date.now() + 10000)} />
    )
  }
  
}

export default TombeoReactCountdown;