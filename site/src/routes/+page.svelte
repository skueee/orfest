<script>
	import Line from '#lib/components/Line.svelte';
	import FaqQuestion from '#lib/components/FaqQuestion.svelte';
	import { ArrowDownIcon } from 'phosphor-svelte'
	import Logo from '#lib/assets/images/logo.png'
	import smartDinosaurDocs from '#lib/assets/images/smartDinosaurDocs.png'
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

    <div class="snap-start min-h-screen w-full flex items-center justify-start flex-col pt-15 gap-7">
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
        <div class="flex flex-col gap-10">
            <div class="flex flex-col items-center justify-center gap-5">
                <h1 class="nunito-title text-6xl">Build</h1>
                <div class="flex flex-row w-full items-center justify-center gap-10">
                    <div class="w-1/2 flex justify-end items-center">
                        <img src={smartDinosaurDocs} alt="Orpheus reading docs" class="max-w-full h-auto object-contain" />
                    </div>
                    <div class="w-0.5 self-stretch bg-current my-2"></div>
                    <div class="w-1/2 flex flex-col items-start justify-center gap-5">
                        <p class="nunito-bold text-3xl">Anything about Hack Club !<br/>That could be:</p>
                        <div class="w-full flex flex-col gap-4">
                            <div class="flex border-2 w-full py-3 items-center justify-center nunito-body text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">A game about Orpheus</div>
                            <div class="flex border-2 w-full py-3 items-center justify-center nunito-body text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">A bot for Slack</div>
                            <div class="flex border-2 w-full py-3 items-center justify-center nunito-body text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">A tool for other Hack Clubers</div>
                        </div>
                        <p class="nunito-note text-2xl">Checkout our guides !</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-5">
                <h1 class="nunito-title text-6xl">Ship</h1>
                <div class="flex flex-row w-full items-center justify-center gap-10">
                    <div class="w-1/2 flex flex-col justify-end items-end text-end gap-5">
                        <p class="nunito-bold text-3xl">Send us your project,<br/> and get rated!</p>
                        <p class="nunito-body text-2xl">Link your Hackatime, get points,<br/> and then shop for merch!</p>
                    </div>
                    <div class="w-0.5 h-70 bg-current my-2"></div>
                    <div class="w-1/2 flex flex-col items-start justify-center gap-5">
                        <p class="nunito-bold text-3xl">Get special titles</p>
                        <p class="nunito-body text-2xl">Add a constraint, or just make a<br/> project that peoples love, and get more points !
                            <br/><br/>Check the titles here</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-10">
            <Line />
            <div class="flex flex-col justify-start gap-7">
                <h1 class="nunito-title text-6xl">FAQ</h1>
                <div class="flex flex-col w-full gap-3">
                    <FaqQuestion question="Is this legit?" answer='<p>Of course it is! It&apos;s ran by <a class="underline" href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">Hack Club</a>, a nonprofit that is helping teens acquire technical competencies.</p>'/>
                    <FaqQuestion question="Who can join?" answer="<p>Everyone that is between 13 and 18 years old</p>"/>
                    <FaqQuestion question="Can I use AI?" answer="<p>You can use AI as a tool, but AI coding time should not exceed 30% of your total coding time.<br/> Sloppy submissions will not be approved.</p>"/>
                    <FaqQuestion question="How was this website made?" answer='<p>I started by using <a"class="underline" href="https://figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> for prototyping, then I used <a class="underline" href="https://deno.com/" target="_blank" rel="noopener noreferrer">Deno</a>, <a class="underline" href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Sveltekit</a> and <a class="underline" href="https://steno.gxbs.dev/" target="_blank" rel="noopener noreferrer">Steno</a> for the website.'/>
                    <FaqQuestion question="I have more questions!" answer='<p>Ask them in <a class="underline" href="https://hackclub.enterprise.slack.com/archives/C0CECQF2AT0" target="_blank" rel="noopener noreferrer">#orfest</a>! I read everything :)</p>'/>
                </div>
            </div>
            <Line />
        </div>
    </div>
</div>
