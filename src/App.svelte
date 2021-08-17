<script lang="ts">
  import SummaryHead from './lib/SummaryHead.svelte';
  import SummaryBody from './lib/SummaryBody.svelte'

</script>

<main
  class="grid w-screen h-screen"
  bg="blue-100 wave-mobile md:wave-desktop no-repeat contain"
  place="items-center"
>

  <section 
    class="rounded-20px shadow-container overflow-hidden"
    w="327px md:450px"
    h="567px md:697px"
    bg="[white]"
    grid="~ cols-1 rows-[28%_1fr] md:rows-[31%_1fr]"
    transition="all duration-200"
  >
    <SummaryHead/>
    <SummaryBody/>
  </section>

</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;900&display=swap');
  
  [bg~="wave-mobile"] {
    background-image: url('./assets/pattern-background-mobile.svg');
  }

  @media (min-width: 768px) {
    [bg~="md:wave-desktop"] {
      background-image: url('./assets/pattern-background-desktop.svg');
    }
  }
</style>