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
</svelte:head>

{@render children()}
