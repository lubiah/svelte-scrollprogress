<script>
	import { createEventDispatcher } from "svelte";


	let width = '0%';

	export let zIndex = 999;
	export let color = 'tomato';
	export let background = "red";
	export let height = '5px';
	export let position = "bottom";
	export let debounceTime = 20;

	const dispatch = createEventDispatcher();

	const watchScrolling = () => {
		const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
		const winScroll = document.body.scrollTop || scrollTop;
		const winHeight = scrollHeight - clientHeight;
		const scrolled = `${(winScroll / winHeight) * 100}%`;
		if (winHeight > 0) {
			width = scrolled;
		} else {
			width = 0;
		}
		dispatch("change",{
			width: width
		});
	};

	let timer;
	const debounce = (fn) => {
		clearTimeout(timer);
		timer = setTimeout(fn, debounceTime);
	};

	const watchScrollingDebounce = () => debounce(watchScrolling);
</script>

<div class="svelte-scrollprogress-container {position}"
	style:--ssp-background={background}>
	<div class="svelte-scrollprogress {position}"
		style:--ssp-color={color} 
		style:--ssp-height={height}
		style:--ssp-width={width}
		style:--ssp-z-index={zIndex}
	/>
</div>
<svelte:window on:scroll={watchScrollingDebounce} on:load={watchScrollingDebounce} />

<style>
	.svelte-scrollprogress-container {
		position: fixed;
		background: var(--ssp-background);
		width: 100%;
		margin: 0;
		padding: 0;
		left: 0;
	}

	.top {
		top: 0;
	}

	.bottom {
		bottom: 0;
	}

	.left {
		height: var(--ssp-width) !important;
		width: var(--ssp-height) !important;
		left: 0;
		bottom:0;
		top:0;
	}

	.right {
		top: 0;
		height: var(--ssp-width) !important;
		width: var(--ssp-height) !important;
		right: 0;
		bottom: 0;
		left: initial !important;
	}

	.svelte-scrollprogress {

		z-index: var(--ssp-z-index);
		background: var(--ssp-color);
		height: var(--ssp-height);
		width: var(--ssp-width);
		transition: width 100ms ease-out;
	}
</style>