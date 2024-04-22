<script setup lang="ts">
	interface Mouse {
		name: string
		type: string
		imgUrl: string
		traits?: string
		collageImgUrl?: string
	}
	const miceList: Mouse[] = [
		{
			name: 'Haley',
			type: '🥼',
			imgUrl: '/img/avatars/haley.jpg',
			traits: 'lief en dapper',
			collageImgUrl: '/img/collages/haley.jpg',
		},
		{
			name: 'Lizzy',
			type: '🥼',
			imgUrl: '/img/avatars/lizzy.jpg',
			traits: 'grote en sterke zus',
			collageImgUrl: '/img/collages/lizzy.jpg',
		},
		{
			name: 'Amy',
			type: '🥼',
			imgUrl: '/img/avatars/amy.jpg',
			traits: 'klein, loyaal en sterk tot het bittere eind',
			collageImgUrl: '/img/collages/amy.jpg',
		},
		{
			name: 'Aloy',
			type: '🥼',
			imgUrl: '/img/avatars/aloy.jpg',
			traits: 'stoer en nieuwsgierig',
			collageImgUrl: '/img/collages/aloy-chell-lara.jpg',
		},
		{
			name: 'Lara',
			type: '🥼',
			imgUrl: '/img/avatars/lara.jpg',
			traits: 'voorzichtig en ondeugend',
			collageImgUrl: '/img/collages/aloy-chell-lara.jpg',
		},
		{
			name: 'Chell',
			type: '🥼',
			imgUrl: '/img/avatars/chell.jpg',
			traits: 'energiek en uitdagend',
			collageImgUrl: '/img/collages/aloy-chell-lara.jpg',
		},
		{
			name: 'Lily',
			type: '🥼',
			imgUrl: '/img/avatars/lily.jpg',
			traits: 'zorgzaam maatje',
			collageImgUrl: '/img/collages/lily.jpg',
		},
		{
			name: 'Daisy',
			type: '🥼',
			imgUrl: '/img/avatars/daisy.jpg',
			traits: 'sterke alfa, stevige tante met flair',
			collageImgUrl: '/img/collages/daisy.jpg',
		},
		{
			name: 'Poppy',
			type: '🥼',
			imgUrl: '/img/avatars/poppy.jpg',
			traits: 'kleine free runner, ronddraaiende circus tante',
			collageImgUrl: '/img/collages/poppy.jpg',
		},
		{
			name: 'Jenny',
			type: '',
			imgUrl: '/img/avatars/jenny.jpg',
			traits: 'lieve, toegewijde en zorgzame moeder',
			collageImgUrl: '/img/collages/jenny.jpg',
		},
		{
			name: 'Joy',
			type: '',
			imgUrl: '/img/avatars/joy.jpg',
			traits: 'tante knorrepot, zonnetje in huis en kleine snurker',
			collageImgUrl: '/img/collages/joy.jpg',
		},
		{
			name: 'Clair',
			type: '',
			imgUrl: '/img/avatars/clair.jpg',
			traits: 'voorzichtige onderzoeker. Dochter van Jenny',
			collageImgUrl: '/img/collages/fallback.jpg',
		},
		{
			name: 'Misty',
			type: '',
			imgUrl: '/img/avatars/misty.jpg',
			traits: 'alleen wanneer het haar uitkomt. Dochter van Jenny',
			collageImgUrl: '/img/collages/fallback.jpg',
		},
		{
			name: 'Erika',
			type: '',
			imgUrl: '/img/avatars/erika.jpg',
			traits: 'verlegen muis. Dochter van Jenny',
			collageImgUrl: '/img/collages/fallback.jpg',
		},
		{
			name: 'Sabrina',
			type: '',
			imgUrl: '/img/avatars/sabrina.jpg',
			traits: 'wil graag stoer zijn, maar is ook weer zo weg. Dochter van Jenny',
			collageImgUrl: '/img/collages/fallback.jpg',
		},
	];

	import { ref } from 'vue';

	const dialog = ref<HTMLDialogElement>();
	const dialogImage = ref('');
	const dialogImageAlt = ref('');

	const showModal = (mouse: Mouse) => {
		dialogImage.value = mouse.collageImgUrl ?? mouse.imgUrl;
		dialogImageAlt.value = mouse.name;
		dialog.value?.showModal();
	};

	const closeModal = () => {
		dialog.value?.close();
	};
</script>

# Wall of fame

<div :class="$style.wall">
	<div :class="$style.mouse" v-for="mouse in miceList" @click="showModal(mouse)">
		<img :class="$style.avatar" v-bind:src="mouse.imgUrl" v-bind:alt="mouse.name" />
		<div :class="$style.details">
			<div :class="$style.name">{{mouse.name}} {{mouse.type}}</div>
			<div>{{mouse.traits}}</div>
		</div>
	</div>
	<dialog ref="dialog" :class="$style.collageDialog">
		<button type="button" @click="closeModal">Close</button>
		<img :class="$style.collageImg" ref="dialogContent" :src="dialogImage" :alt="dialogImageAlt" />
	</dialog>
</div>

<style module>
.wall {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	margin-top: 30px;
}

.mouse {
	cursor: pointer;
}

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

.collageDialog {
	width: 50vw;
	
	::backdrop {
		opacity: 0.50;
	}
}

.collageImg {
	margin: 0 auto;
	max-height: 80vh;
}
</style>