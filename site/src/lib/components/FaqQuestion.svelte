<script>
    import { PlusIcon } from 'phosphor-svelte';

    let { question = '', answer = '' } = $props();

    let isOpen = $state(false);

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<div class="flex flex-col">
    <button
        type="button"
        onclick={toggle}
        aria-expanded={isOpen}
        class="flex w-full items-center justify-between text-left cursor-pointer"
    >
        <span class="text-2xl nunito-bold">{question}</span>
        <PlusIcon size={32} class="shrink-0 transition-transform duration-300 ease-in-out {isOpen ? 'rotate-45' : 'rotate-0'}"/>
    </button>

    {#if isOpen}
        <div class="nunito-body text-xl">
            {@html answer}
        </div>
    {/if}
</div>
