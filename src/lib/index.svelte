<script lang="ts">
    import { onMount } from "svelte";
    import { watch, useDebounce } from "runed";

    let width: string = $state("0%");
    interface Props {
        zIndex?: number;
        color?: string;
        background?: string;
        height?: string;
        position?: "bottom" | "top" | "left" | "right";
        onchange?: ({ width }: { width: string }) => void;
    }

    let {
        zIndex = 999,
        color = "tomato",
        background = "transparent",
        height = "5px",
        position = "bottom",
        ...props
    }: Props = $props();

    watch(
        () => width,
        () => props.onchange?.({ width }),
    );

    const watchScroll = () => {
        const { scrollHeight, clientHeight, scrollTop } =
            document.documentElement;
        const height = scrollHeight - clientHeight;
        const scroll = `${(scrollTop / height) * 100}%`;
        width = scroll;
        console.log(width);
    };

    const debounce = useDebounce(() => watchScroll(), 100);

    onMount(() => {
        watchScroll();
    });
</script>

<div
    class="svelte-scrollprogress-container {position}"
    style:--ssp-background={background}
>
    <div
        class="svelte-scrollprogress {position}"
        style:--ssp-color={color}
        style:--ssp-height={height}
        style:--ssp-width={width}
        style:--ssp-z-index={zIndex}
    ></div>
</div>
<svelte:window onload={() => debounce()} onscroll={debounce} />

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
