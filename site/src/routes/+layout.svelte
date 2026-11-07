<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.png';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	import "../app.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Orfest</title>
	<meta name="description" content="Orfest is a Hack Club YSWS where you do something Hack Club related and get Hack Club merch!"/>
</svelte:head>

{@render children()}
