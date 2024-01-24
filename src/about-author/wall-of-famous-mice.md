<script setup lang="ts">
	interface Mouse {
		name: string
		imgUrl: string
		traits?: string
	}
	const miceList: Mouse[] = [
		{
			name: 'Haley',
			imgUrl: '/img/avatars/haley.jpg',
			traits: 'lief en dapper',
		},
		{
			name: 'Lizzy',
			imgUrl: '/img/avatars/lizzy.jpg',
			traits: 'grote en sterke zus',
		},
		{
			name: 'Amy',
			imgUrl: '/img/avatars/amy.jpg',
			traits: 'klein, loyaal en sterk',
		},
		{
			name: 'Aloy',
			imgUrl: '/img/avatars/aloy.jpg',
			traits: 'stoer en nieuwsgierig',
		},
		{
			name: 'Lara',
			imgUrl: '/img/avatars/lara.jpg',
			traits: 'voorzichtig en ondeugend',
		},
		{
			name: 'Chell',
			imgUrl: '/img/avatars/chell.jpg',
			traits: 'energiek en uitdagend',
		},
		{
			name: 'Lily',
			imgUrl: '/img/avatars/lily.jpg',
			traits: 'zorgzaam maatje',
		},
		{
			name: 'Daisy',
			imgUrl: '/img/avatars/daisy.jpg',
			traits: 'sterke alfa',
		},
		{
			name: 'Poppy',
			imgUrl: '/img/avatars/poppy.jpg',
			traits: 'kleine free runner',
		},
		{
			name: 'Jenny',
			imgUrl: '/img/avatars/jenny.jpg',
			traits: 'toegewijde en zorgzame moeder',
		},
		{
			name: 'Joy',
			imgUrl: '/img/avatars/joy.jpg',
			traits: 'zonnetje in huis',
		},
	];
</script>

# Wall of fame

<div :class="$style.wall">
	<div :class="$style.mouse" v-for="mouse in miceList">
		<img :class="$style.avatar" v-bind:src="mouse.imgUrl" v-bind:alt="mouse.name" />
		<div :class="$style.details">
			<div :class="$style.name">{{mouse.name}}</div>
			<div>{{mouse.traits}}</div>
		</div>
	</div>
</div>

<style module>
.wall {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 30px;
}

.mouse {}

.avatar {
  border-radius: 50%;
  margin: 0 auto;
}

.name {
  font-weight: bold;
}

.details {
  text-align: center;
}
</style>