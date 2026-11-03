<script>
	import Line from '#lib/components/Line.svelte';
	import { ArrowDownIcon } from 'phosphor-svelte'
	import Logo from '#lib/assets/images/logo.png'
</script>

<div class="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
    <div class="h-screen w-full snap-start flex items-center justify-center relative">
        <div class="flex flex-col items-center gap-5">
            <div class="flex flex-col items-center gap-3">
                <img src={Logo} alt="Orfest logo" width="600" class="-mb-10"/>
                <p class="nunito-body text-xl">Build something Hack Club related - Get Hack Club merch</p>
            </div>
            <a class="text-4xl nunito-title-alt btn-primary cursor-pointer" href="https://rsvp.soon.it/orfest" target="_blank" rel="noopener noreferrer">RSVP NOW!!!</a>
        </div>
        <div class="absolute bottom-8"><ArrowDownIcon size={64}/></div>
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
