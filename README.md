# Svelte ScrollProgress
A scroll progress indicator component for Svelte



## Installing
* pnpm  
  `pnpm add -D svelte-scrollprogress`
* npm  
   `npm install -D svelte-scrollprogress`
* yarn  
	`yarn add -D svelte-scrollprogress`

## Usage

Using this component is very easy. Just import it and you are good to go

```svelte
<script>
	import Progress from "svelte-scrollprogress"
</script>

<!-- Just make sure your content is long enough to overflow the screen.
Am gonna add some lorem to make the screen overflow

-->

<Progress/>

<!-- In order to customize, just fill in the props with values -->

<Progress color="orange" background="green" zIndex={9999} height="10px" debounceTime={20}/>
```

<Progress {color} {position} {height} {background}/>

## Customisation

This component is very customizable, almost everything can be changed

<div>
	<div>
		<label for="color">Color</label>
		<input id="color" type="color"  bind:value={color}>
	</div>
	<div>
		<label for="height">Height</label>
		<input type="text" bind:value={height}>
	</div>
	<div>
		<label for="background">Background</label>
		<input type="color" bind:value={background}>
	</div>
	<div>
		<label for="position">Position</label>
		<select id="position" bind:value={position}>
			<option value="top">Top</option>
			<option value="bottom">Bottom</option>
			<option value="left">Left</option>
			<option value="right">Right</option>
		</select>
	</div>
	<span>+ many more</span>
</div>


## Props

| Property | Type | Description | Default |
| ---------|-----| ------------| ---------|
| color | String | The color of the scrollbar component. Any valid CSS background property is allowed. Including images too | tomato |
| position | String | The position of the scrollbar component. Valid values are "top", "bottom", "left" and right" | bottom |
| zIndex | Integer | The order of overlapping elements | 999 |
| height | String | The height or width of the scrollbar component. Any valid CSS size value is allowed | 5px |
| debounceTime | Integer | Since we use the scroll event to calculate the percentage, we only need to calculate when the user has finished scrolling. We use a debounce to repeat the rate at which the function is fired. Time is calculated in milliseconds | 10 |
| background | String | The background color of the scroll bar component. Any valid CSS background property is accepted | transparent |


## Events 

The component does fire some events

| Event Name | Description |
| -----------| ------------|
| change | This is called whenever the scroll value changes |
