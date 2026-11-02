<script>
	import Line from '#lib/components/Line.svelte';
	import { ArrowDownIcon } from 'phosphor-svelte'
</script>

<div class="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
    <div class="h-screen w-full snap-start flex items-center justify-center">
        Screen 1
    </div>

    <div class="snap-start min-h-screen w-full flex items-center justify-start flex-col pt-15">
        <div class="flex flex-col gap-5">
            <Line />
            <div class="flex flex-col items-center gap-4">
                <div class="flex flex-col items-center gap-1">
                    <h1 class="nunito-title-alt text-4xl">1. Sign up</h1>
                    <p class="nunito-body-alt text-2xl opacity-80">Sign up with your Hack Club account !</p>
                </div>
                <ArrowDownIcon size={46}/>
                <div class="flex flex-col items-center">
                    <h1 class="nunito-title-alt text-4xl">2. Make something Hack Club related</h1>
                    <p class="nunito-body-alt text-2xl opacity-80">A game about Orpheus, a bot for the Slack... Be creative !</p>
                </div>
                <ArrowDownIcon size={46}/>
                <div class="flex flex-col items-center">
                    <h1 class="nunito-title-alt text-4xl">3. Ship and get reviewed</h1>
                    <p class="nunito-body-alt text-2xl opacity-80">You give us your project, and we check it !</p>
                </div>
                <ArrowDownIcon size={46}/>
                <div class="flex flex-col items-center">
                    <h1 class="nunito-title-alt text-4xl">4. Get merch!</h1>
                    <p class="nunito-body-alt text-2xl opacity-80">Cool stickers, t-shirts... Anything you every wished !</p>
                </div>
            </div>
            <Line />
        </div>
    </div>
</div>
