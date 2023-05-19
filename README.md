# Svelte ScrollProgress

Shows your scroll progress, as you scroll

## Installing

- pnpm  
   `pnpm add -D svelte-scrollprogress`
- npm  
   `npm install -D svelte-scrollprogress`
- yarn  
   `yarn add -D svelte-scrollprogress`

## Usage

Using this component is very easy. Just import it and you are good to go

```svelte
<script>
	import Progress from "svelte-scrollprogress";
</script>

s
<Progress color="orange" background="green" zIndex="9999" height="10px" />
```

## Customization

This component is very customizable, almost everything can be changed

<table><thead><tr><th>Property</th> <th>Type</th> <th>Description</th> <th>Default</th></tr></thead> <tbody><tr><td>color</td> <td>String</td> <td>The color of the scrollbar component. Any valid CSS background property is allowed.
      Including images too</td> <td>tomato</td></tr> <tr><td>position</td> <td>String</td> <td>The position of the scrollbar component. Valid values are "top", "bottom", "left" and
      right"</td> <td>bottom</td></tr> <tr><td>zIndex</td> <td>Integer</td> <td>The order of overlapping elements</td> <td>999</td></tr> <tr><td>height</td> <td>String</td> <td>The height or width of the scrollbar component. Any valid CSS size value is allowed</td> <td>5px</td></tr> <tr><td>background</td> <td>String</td> <td>The background color of the scroll bar component. Any valid CSS background property is
      accepted</td> <td>transparent</td></tr></tbody></table>

## Events

The component does fire some events

<table><thead><tr><th>Event Name</th> <th>Description</th></tr></thead> <tbody><tr><td>change</td> <td>This is called whenever the scroll value changes</td></tr></tbody></table>