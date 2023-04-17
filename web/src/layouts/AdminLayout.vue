<template>
	<HeaderAdmin />
	<router-view></router-view>
</template>
<script>
import HeaderAdmin from '@/components/HeaderAdmin.vue';
export default {
	name: 'AdminLayout',
	components: {
		HeaderAdmin,
	},
};
</script>
<style lang="scss" scoped>
header {
	nav {
		ul {
			li {
				display: inline-block;

				& + li {
					margin-inline-start: 1rem;
				}

				a {
					text-decoration: none;
				}
			}
		}
	}
}
</style>
