tombeo-react-countdown
===

React component to render countdown timer including number of days toward a specified time in future.

## Install 

> npm install tombeo-react-countdown

## Usage

```jsx
import {TombeoReactCountdown} from 'tombeo-react-countdown'

renderCountdown = () => {
	return (
		<div>
			<TombeoReactCountdown 
				completeAt={Date.now() + 14*24*60*60*1000} 
				dayLabel='Day' 
				dayLabelPlural='Days' />
		</div>
	);
}
```

This will render a dynamic countdown text like below:

> 13 days + 23:59:59 

And it will countdown & update every seconds.

### Props

**Required props are marked with `*`.**

Name | Type | Default | Description
--- | --- | --- | ---
`completeAt`* | `numeric` | `Date.now() + 10000` | Unix Time when you want countdown complete in miliseconds.
`dayLabel` | `string` | `Day` | Label of word 'Day' depend on your country language.
`dayLabelPlural` | `string` | `Days` | Label of word 'Day' in plural depend on your country language.
`onComplete` | `function` | `null` | Function to execute when countdown complete.
`completedText` | `string` | `Countdown completed!` | The text displayed when countdown completed. You can use empty string.