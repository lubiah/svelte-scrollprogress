<script lang="ts">
    import Component from "$lib/index.ts";
    let color = $state("red");
    let background = $state("transparent");
    let height = $state("5px");
    let position = $state("bottom");
    let zIndex = 9999;
</script>

<svelte:head>
    <title>Svelte ScrollProgress</title>
    <meta
        name="description"
        content="A component which displays your progress as you scroll"
    />
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
    />
</svelte:head>

<Component {color} {background} {height} {position} />

<main>
    <section>
        <h1>Svelte ScrollProgress</h1>
        <p>Shows your scroll progress, as you scroll</p>
    </section>
    <div>
        <h2>Options</h2>
        <div>
            <label for="color">Colour (Enter any valid CSS color)</label>
            <input type="text" bind:value={color} />
        </div>
        <div>
            <label for="background"
                >Background (Enter any valid CSS colour)</label
            >
            <input type="text" bind:value={background} id="background" />
        </div>
        <div>
            <label for="height">Height (Enter any valid CSS sizing unit)</label>
            <input type="text" id="height" bind:value={height} />
        </div>
        <div>
            <label for="position">Position</label>
            <select id="position" bind:value={position}>
                <option value="bottom">Bottom</option>
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
            </select>
        </div>
    </div>
    <div>
        <h2>Installing</h2>
        <ul>
            <li>
                pnpm<br />
                <code>pnpm add -D svelte-scrollprogress</code>
            </li>
            <li>
                npm<br />
                <code>npm install -D svelte-scrollprogress</code>
            </li>
            <li>
                yarn<br />
                <code>yarn add -D svelte-scrollprogress</code>
            </li>
        </ul>
    </div>
    <div>
        <h2>Usage</h2>
        <p>
            Using this component is very easy. Just import it and you are good
            to go
        </p>
        <pre class="shiki" style="background-color: #0F111A"><code
                ><span class="line"
                    ><span style="color: #89DDFF">&lt;</span><span
                        style="color: #F07178">script</span
                    ><span style="color: #89DDFF">&gt;</span></span
                >
<span class="line"
                    ><span style="color: #A6ACCD"></span><span
                        style="color: #89DDFF; font-style: italic">import</span
                    ><span style="color: #A6ACCD"> Progress </span><span
                        style="color: #89DDFF; font-style: italic">from</span
                    ><span style="color: #A6ACCD"></span><span
                        style="color: #89DDFF">"</span
                    ><span style="color: #C3E88D">svelte-scrollprogress</span
                    ><span style="color: #89DDFF">"</span></span
                >
<span class="line"
                    ><span style="color: #89DDFF">&lt;/</span><span
                        style="color: #F07178">script</span
                    ><span style="color: #89DDFF">&gt;</span></span
                >
<span class="line"><span style="color: #A6ACCD"></span></span>
<span class="line"
                    ><span style="color: #89DDFF">&lt;</span><span
                        style="color: #FFCB6B">Progress</span
                    ><span style="color: #89DDFF"></span><span
                        style="color: #C792EA">color</span
                    ><span style="color: #89DDFF">="</span><span
                        style="color: #C792EA">{color}</span
                    ><span style="color: #89DDFF">" </span><span
                        style="color: #C792EA">background</span
                    ><span style="color: #89DDFF">="</span><span
                        style="color: #C792EA">{background}</span
                    ><span style="color: #89DDFF">" </span><span
                        style="color: #C792EA">zIndex</span
                    ><span style="color: #89DDFF">=</span><span
                        style="color: #F78C6C">{zIndex}</span
                    ><span style="color: #89DDFF"></span><span
                        style="color: #C792EA">height</span
                    ><span style="color: #89DDFF"
                        >="{height}" <span style="color: rgb(199, 146, 234);"
                            >position</span
                        ><span style="color: rgb(137, 221, 255);">="</span><span
                            style="color: rgb(199, 146, 234);">{position}</span
                        ><span style="color: rgb(137, 221, 255);"
                            >" </span>/&gt;</span
                    ></span
                >
<span class="line"><span style="color: #A6ACCD"></span></span></code
            ></pre>
    </div>
    <div>
        <h2>Customization</h2>
        <p>
            This component is very customizable, almost everything can be
            changed
        </p>
        <table>
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Default</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>color</td>
                    <td>String</td>
                    <td
                        >The color of the scrollbar component. Any valid CSS
                        background property is allowed. Including images too</td
                    >
                    <td>tomato</td>
                </tr>
                <tr>
                    <td>position</td>
                    <td>String</td>
                    <td
                        >The position of the scrollbar component. Valid values
                        are "top", "bottom", "left" and right"</td
                    >
                    <td>bottom</td>
                </tr>
                <tr>
                    <td>zIndex</td>
                    <td>Integer</td>
                    <td>The order of overlapping elements</td>
                    <td>999</td>
                </tr>
                <tr>
                    <td>height</td>
                    <td>String</td>
                    <td
                        >The height or width of the scrollbar component. Any
                        valid CSS size value is allowed</td
                    >
                    <td>5px</td>
                </tr>
                <tr>
                    <td>background</td>
                    <td>String</td>
                    <td
                        >The background color of the scroll bar component. Any
                        valid CSS background property is accepted</td
                    >
                    <td>transparent</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h2>Events</h2>
        <p>The component does fire some events</p>
        <table>
            <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>change</td>
                    <td>This is called whenever the scroll value changes</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h2>Dummy Text</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo sem
        erat, quis tincidunt libero gravida ut. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis dictum lobortis elit a consequat. Cras elementum tempor
        enim non pretium. Aliquam tempor fermentum tellus, fermentum aliquam felis
        viverra quis. Aliquam felis enim, tincidunt quis libero in, ultrices finibus
        ante. Sed eget nibh in orci congue vulputate. Nullam quis commodo risus. Ut
        cursus hendrerit odio, id elementum eros vestibulum eget. Mauris quis lacinia
        elit. Duis ut elit a orci pulvinar feugiat. Sed feugiat nunc ipsum, sed hendrerit
        nisl aliquam a. Mauris nulla sapien, auctor id porttitor at, consectetur vitae
        lectus. Donec lobortis arcu vel turpis tincidunt, at sollicitudin justo molestie.
        Praesent imperdiet bibendum libero, eget vehicula odio blandit feugiat. Etiam
        sem lorem, tristique quis eros vitae, porttitor porta purus. Nullam tristique
        egestas velit nec cursus. Quisque eu massa ut purus dictum venenatis. Aliquam
        aliquet posuere semper. Vivamus ac odio a purus porta malesuada id ut libero.
        Morbi consectetur diam in faucibus egestas. Quisque tempus quis diam in tincidunt.
        Vivamus blandit turpis nec semper sodales. Phasellus tempus fringilla ex,
        vel scelerisque libero suscipit ut. Cras laoreet lacinia orci, at dapibus
        arcu ultricies vel. Etiam nec laoreet tortor, ac tempus metus. Integer pretium
        finibus aliquet. Pellentesque rhoncus lobortis risus, vel aliquet mi ornare
        vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mattis
        sapien. Praesent et consectetur tortor. Integer finibus ac erat id bibendum.
        Vestibulum in neque convallis, lobortis nibh sit amet, vehicula neque. Quisque
        vehicula tincidunt turpis ut hendrerit. Fusce ullamcorper consequat augue,
        a euismod orci vestibulum ut. Suspendisse libero leo, aliquet sit amet facilisis
        ut, condimentum vitae sem. Fusce semper ligula nec ligula interdum porta non
        ac dolor. Ut ut ligula efficitur magna pretium sagittis. Sed egestas ex tortor,
        ac cursus quam facilisis vel. Fusce varius blandit ipsum quis pulvinar. Vestibulum
        eu eros a mauris malesuada vestibulum et ut dolor. Etiam massa sapien, interdum
        ac dignissim vel, commodo vel neque. Nunc porttitor eros hendrerit, imperdiet
        mi ac, tincidunt risus. Mauris quis condimentum velit. Nam ante urna, vehicula
        sed tortor vitae, iaculis condimentum nibh. Suspendisse potenti. Ut volutpat
        molestie tellus vitae suscipit. Phasellus ut tempus sapien. Sed dictum fermentum
        dui, et semper enim molestie et. Ut posuere sem sit amet ligula blandit, eu
        tempus nulla mattis. Morbi tempor nisl nec est lacinia posuere. Fusce quis
        nisi ac arcu sodales sollicitudin. Curabitur rhoncus volutpat erat, vel facilisis
        turpis mattis eget. Aliquam erat volutpat. Aenean magna est, consequat eget
        consectetur egestas, tempus suscipit lectus. Aenean leo massa, tempus vitae
        scelerisque quis, egestas vitae nisl. Sed laoreet massa sapien, a volutpat
        orci cursus eget. Fusce auctor cursus venenatis. Nam quis tempus nisl, eget
        imperdiet nulla. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Vestibulum cursus lorem sed urna molestie, sit amet
        feugiat orci sollicitudin. Vestibulum ac arcu ac nibh auctor dapibus at pellentesque
        mauris. Phasellus varius, nibh at maximus varius, sem nisl rhoncus massa,
        vitae scelerisque leo nibh ac tortor. Sed sollicitudin elementum efficitur.
        Quisque metus odio, lacinia at eleifend eu, pulvinar feugiat ligula. Aliquam
        consectetur, quam sit amet interdum ornare, urna enim tristique purus, id
        lobortis mauris nisl commodo enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
    </div>
</main>
