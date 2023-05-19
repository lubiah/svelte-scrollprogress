<script lang="ts">
    import { debounce } from "./utils.js";
    import { createEventDispatcher } from "svelte";

    let width: string = "0%";
    export let zIndex: number = 999;
    export let color: string = "tomato";
    export let background: string  = "transparent";
    export let height: string = "5px";
    export let position: "bottom" | "top" | "left" | "right" = "bottom";

  

    const dispatch = createEventDispatcher();

	dispatch("change",{
		width: width
	})

    const watchScroll = ()=>{
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
        const height = scrollHeight - clientHeight;
        const scroll = `${(scrollTop / height) * 100}%`;
		width = scroll;
     
	}
</script>


<div class="svelte-scrollprogress-container {position}" style:--ssp-background={background}>
	<div
		class="svelte-scrollprogress {position}"
		style:--ssp-color={color}
		style:--ssp-height={height}
		style:--ssp-width={width}
		style:--ssp-z-index={zIndex}
	/>
</div>
<svelte:window on:scroll={debounce(watchScroll)} on:load={debounce(watchScroll)} />

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
		bottom: 0;
		top: 0;
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