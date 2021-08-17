<script lang="ts">
    import SelectedPlan from './SelectedPlan.svelte'
    import ActionButton from './ActionButton.svelte'
    import { onMount } from 'svelte';

    const BREAKPOINT = 768
    
    let isMD = false
    onMount(() => {
        isMD = window.innerWidth >= BREAKPOINT
        window.onresize = () => isMD = window.innerWidth >= BREAKPOINT
    })
</script>

<div 
    class="w-full h-full place-items-center"
    p="x-24px"
    grid="~ cols-1 auto-rows-min"
    font="red medium"
>
    <h1 
        font="bold" 
        text="center grey-800 22px md:28px" 
        m="t-32px md:t-45px" 
        transition="all duration-200"
    >Order Summary</h1>
    <p 
        w="26ch" 
        text="15px md:16px grey-300 center" 
        font="leading-25px md:leading-26px" 
        m="t-16px md:17px"
        transition="all duration-200"
    >You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
    
    <SelectedPlan --m-top={ isMD ? '20px': '24px' }/>
    <ActionButton --m-top={ isMD ? '32px': '24px' }>Proceed to Payement</ActionButton>

    <button 
        text="grey-300 15px hover:grey-800" 
        font="bold" 
        m="t-24px md:32px"
        transition="colors duration-200"    
    >Cancel Order</button>
</div>