import { defineNuxtModule } from '@nuxt/kit-edge';

export default defineNuxtModule({
	meta: {
		name: 'test-module',
		compatibility: {
			nuxt: '^3.0.0'
		}
	},
	// defaults: {},
	async setup({}, nuxt) { console.log('setup'); }
});

