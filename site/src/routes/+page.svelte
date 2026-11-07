<script>
	import Line from '#lib/components/Line.svelte';
	import FaqQuestion from '#lib/components/FaqQuestion.svelte';
	import Sticker from '#lib/components/Sticker.svelte'
	import { getRandomImages } from '#lib/RandomStickers.ts'
	import { ArrowDownIcon, ArrowUpIcon } from 'phosphor-svelte'
	import Logo from '#lib/assets/images/logo.png'
	import smartDinosaurDocs from '#lib/assets/images/smartDinosaurDocs.png'
	import { onMount } from 'svelte';

	const gotoTop = () => {
	     document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
    };

	const goToContent = () => {
	    document.getElementById('next')?.scrollIntoView({ behavior: 'smooth' })
	}

	let mounted = $state(false);
	let stickersList = $state([]);
	onMount(() => {
      stickersList = getRandomImages();
      mounted = true;
	});


	// Lil helper so i can do it easily
	function getRandomInt(min, max) {
	    min = Math.ceil(min);
		max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
	}
</script>

<main>
    <div class="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
        <div id="top" class="h-screen w-full snap-start flex items-center justify-center relative">
            {#if mounted}
                <div class="absolute h-screen w-full pointer-events-none hidden lg:block">
                    <div class="absolute" style="top: {getRandomInt(5, 15)}%; right: {getRandomInt(5, 15)}%;">
                        <Sticker src={stickersList[0]} movable rotate={-10} width={200} />
                    </div>
                    <div class="absolute" style="top: {getRandomInt(35, 45)}%; right: {getRandomInt(5, 15)}%;">
                        <Sticker src={stickersList[1]} movable rotate={0} width={200}/>
                    </div>
                    <div class="absolute" style="bottom: {getRandomInt(5, 15)}%; right: {getRandomInt(5, 15)}%;">
                        <Sticker src={stickersList[2]} movable rotate={10} width={200} />
                    </div>

                    <div class="absolute" style="top: {getRandomInt(5, 15)}%; left: {getRandomInt(5, 15)}%;">
                        <Sticker src={stickersList[3]} movable rotate={-10} width={200} />
                    </div>
                    <div class="absolute" style="top: {getRandomInt(35, 45)}%; left: {getRandomInt(5, 15)}%;">
                        <Sticker src={stickersList[4]} movable rotate={0} width={200}/>
                    </div>
                    <div class="absolute" style="bottom: {getRandomInt(5, 15)}%; left: {getRandomInt(5, 15)}%;">
                        <Sticker src={stickersList[5]} movable rotate={10} width={200} />
                    </div>
                </div>
            {/if}
            <header class="absolute top-0">
                <div class="py-5 flex flex-row gap-5 items-center justify-center">
                    <a href="/" class="nunito-bold text-4xl py-1 px-3 rounded-xl transition-colors duration-300 hover:bg-black hover:text-white">Home</a>
                    <a href="/docs"  rel="external" class="nunito-bold text-4xl py-1 px-3 rounded-xl transition-colors duration-300 hover:bg-black hover:text-white">Docs</a>
                </div>
            </header>
            <div class="flex flex-col items-center gap-5">
                <div class="flex flex-col items-center gap-3">
                    <img src={Logo} alt="Orfest logo" width="600" class="-mb-10"/>
                    <p class="nunito-body text-lg sm:text-xl">Build something Hack Club related - Get Hack Club merch</p>
                </div>
                <a class="text-4xl nunito-title-alt btn-primary cursor-pointer" href="https://rsvp.soon.it/orfest" target="_blank" rel="noopener noreferrer">RSVP NOW!!!</a>
            </div>
            <div class="absolute bottom-8"><ArrowDownIcon onclick={goToContent} size={64} class="transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"/></div>
            </div>

        <div id="next" class="snap-start min-h-screen w-full flex items-center justify-start flex-col pt-15 gap-7">
            <div class="flex flex-col gap-5">
                <Line />
                <div class="flex flex-col items-center gap-4">
                    <div class="flex flex-col items-center gap-1">
                        <h1 class="nunito-title-alt text-2xl md:text-3xl lg:text-4xl">1. Sign up</h1>
                        <p class="nunito-body-alt text-base md:text-2xl opacity-80">Sign up with your Hack Club account !</p>
                    </div>
                    <ArrowDownIcon size={46}/>
                    <div class="flex flex-col items-center">
                        <h1 class="nunito-title-alt text-2xl md:text-3xl lg:text-4xl">2. Make something Hack Club related</h1>
                        <p class="nunito-body-alt text-base md:text-2xl opacity-80">A game about Orpheus, a bot for the Slack... Be creative !</p>
                    </div>
                    <ArrowDownIcon size={46}/>
                    <div class="flex flex-col items-center">
                        <h1 class="nunito-title-alt text-2xl md:text-3xl lg:text-4xl">3. Ship and get reviewed</h1>
                        <p class="nunito-body-alt text-base md:text-2xl opacity-80">You give us your project, and we check it !</p>
                    </div>
                    <ArrowDownIcon size={46}/>
                    <div class="flex flex-col items-center">
                        <h1 class="nunito-title-alt text-2xl md:text-3xl lg:text-4xl">4. Get merch!</h1>
                        <p class="nunito-body-alt text-base md:text-2xl opacity-80">Cool stickers, t-shirts... Anything you every wished !</p>
                    </div>
                </div>
                <Line />
            </div>
            <div class="flex flex-col gap-10">
                <div class="flex flex-col items-center justify-center gap-5">
                    <h1 class="nunito-title text-6xl">Build</h1>
                    <div class="flex flex-row w-full items-center justify-center gap-10">
                        <div class="w-1/2 flex justify-end items-center hidden md:block">
                            <img src={smartDinosaurDocs} alt="Orpheus reading docs" class="max-w-full h-auto object-contain" />
                        </div>
                        <div class="w-0.5 self-stretch bg-current my-2 hidden md:block"></div>
                        <div class="w-1/2 flex flex-col items-start justify-center gap-5 text-center md:text-start">
                            <p class="nunito-bold text-3xl">Anything about Hack Club !<br/>That could be:</p>
                            <div class="w-full flex flex-col gap-4">
                                <div class="flex border-2 w-full py-3 items-center justify-center nunito-body text-center text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">A game about Orpheus</div>
                                <div class="flex border-2 w-full py-3 items-center justify-center nunito-body text-center text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">A bot for Slack</div>
                                <div class="flex border-2 w-full py-3 items-center justify-center nunito-body text-center text-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]">A tool for other Hack Clubers</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center gap-5">
                    <h1 class="nunito-title text-6xl">Ship</h1>
                    <div class="flex flex-col md:flex-row w-full items-center justify-center gap-10">
                        <div class="w-1/2 flex flex-col justify-end items-end text-center md:text-end gap-5">
                            <p class="nunito-bold text-3xl">Send us your project,<br/> and get rated!</p>
                            <p class="nunito-body text-2xl">Link your Hackatime, get points,<br/> and then shop for merch!</p>
                        </div>
                        <div class="w-50 h-0.5 md:w-0.5 md:h-70 bg-current my-2"></div>
                        <div class="w-1/2 flex flex-col items-start text-center md:text-start justify-center gap-5">
                            <p class="nunito-bold text-3xl">Get special titles</p>
                            <p class="nunito-body text-2xl">Add a constraint, or just make a<br/> project that peoples love, and get more points !
                                <br/><br/>Check the titles here</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-10 w-full max-w-[958px] px-10">
                <Line />
                <div class="flex flex-col justify-center md:justify-start gap-7">
                    <h1 class="nunito-title text-6xl text-center lg:text-start">FAQ</h1>
                    <div class="flex flex-col w-full gap-3">
                        <FaqQuestion question="Is this legit?" answer='<p>Of course it is! It&apos;s ran by <a class="underline" href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">Hack Club</a>, a nonprofit that is helping teens acquire technical competencies.</p>'/>
                        <FaqQuestion question="Who can join?" answer="<p>Everyone that is between 13 and 18 years old</p>"/>
                        <FaqQuestion question="Can I use AI?" answer="<p>You can use AI as a tool, but AI coding time should not exceed 30% of your total coding time.<br/> Sloppy submissions will not be approved.</p>"/>
                        <FaqQuestion question="How was this website made?" answer='<p>I started by using <a class="underline" href="https://figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> for prototyping, then I used <a class="underline" href="https://deno.com/" target="_blank" rel="noopener noreferrer">Deno</a>, <a class="underline" href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Sveltekit</a> and <a class="underline" href="https://steno.gxbs.dev/" target="_blank" rel="noopener noreferrer">Steno</a> for the website.'/>
                        <FaqQuestion question="I have more questions!" answer='<p>Ask them in <a class="underline" href="https://hackclub.enterprise.slack.com/archives/C0CECQF2AT0" target="_blank" rel="noopener noreferrer">#orfest</a>! I read everything :)</p>'/>
                    </div>
                </div>
                <Line />
            </div>
            <div class="flex flex-row items-center justify-center ">
                <button onclick={gotoTop} class="hover:underline gap-2 items-center justify-center flex flex-row cursor-pointer nunito-title-alt text-3xl"><ArrowUpIcon weight={"bold"} size={32}/>Back to top<ArrowUpIcon weight={"bold"} size={32}/></button>
            </div>
            <footer class="bg-black text-white w-full flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center py-5 gap-1">
                    <p class="nunito-body-alt text-3xl">For teens, by teens &lt;3</p>
                    <p class="nunito-body text-xl"><a class="hover:underline cursor-pointer" href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">Hack Club</a> • <a class="hover:underline cursor-pointer" href="https://github.com/skueee/orfest" target="_blank" rel="noopener noreferrer">Source</a></p>
                </div>
            </footer>
        </div>
    </div>
</main>
