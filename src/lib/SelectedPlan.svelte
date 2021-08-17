<script lang="ts">
    import IconMusic from '../assets/icon-music.svg'
</script>

<div
    class="min-w-279px max-w-354px bg-[#F7F9FF] rounded-11px"
    grid="~ rows-2 cols-[max-content_3fr_1fr]"
    text="14px md:16px"
    m="t-$m-top"
    p="y-16px md:y-25px"
    transition="all duration-200"
>
    <img 
        src={IconMusic} 
        alt="music note"
        class="col-start-1 col-end-2 row-start-1 row-end-3 place-self-center"
        m="x-22px"
    />
    <h1
        class="col-start-2 col-end-3 row-start-1 row-end-2 self-center"
        text="grey-800 space-nowrap"
        font="bold"
    >Annual Plan</h1>
    <p 
        class="col-start-2 col-end-3 row-start-2 row-end-3 self-center"
        text="grey-300"
    >$59.99/year</p>
    <button 
        class="col-start-3 col-end-4 row-start-1 row-end-3"
        text="blue-500 13px underline hover:purple hover:no-underline md:14px"
        font="bold"
        m="r-16px"
        transition="all duration-200"
    >Change</button>
</div>