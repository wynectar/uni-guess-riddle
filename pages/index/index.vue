<script setup lang="ts">
	import { ref } from 'vue'
	import { useRiddleStore } from '@/store/riddle'
	import { GAME_MODES } from '@/store/mega-riddle-library'
	const title = '寓教于乐谜'
	const modes = ref(Object.keys(GAME_MODES).map(key=>({...GAME_MODES[key],mode:key})))
	const modeActive = ref('normal')

	// 游戏规则
	const alertDialog = ref()
	const dialogToggle = () => {
		alertDialog?.value.open()
	}
	const dialogClose = () => {
		console.log('点击关闭')
	}

	// 开始游戏
	const riddleStore = useRiddleStore()
	const startGame = () => {
		const mode = modeActive.value
		riddleStore.startNewGame(mode)
		// 跳转到游戏页面
		uni.navigateTo({
			url: `/pages/game/game`
		})
	}
</script>

<template>
	<view class="page-container">
		<view class="flex-center">
			<text class="title">{{title}}</text>
		</view>
		<view class="mode-selection">
			<view :class="['mode-card', {active: modeActive === m.mode}]" @click="modeActive = m.mode"
				v-for="(m,index) in modes" :key="m.mode">
				<text :style="{opacity:`${0.2 * (index + 2)}` }">🔥</text>
				<text class="mode-name">{{m.name}}</text>
			</view>
		</view>
		<button type="primary" class="button" @click="startGame">开始答题</button>
		<button type="default" class="button" @click="dialogToggle">答题规则</button>
		<!-- 提示窗示例 -->
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="success" :showClose="false" confirmText="关闭" title="答题规则"
				@close="dialogClose">
				<view>
					<text>🔥 1. 灯谜难度:</text>
					<view v-for="m in modes" :key="m.mode" style="margin-left:10rpx">
						<radio style="transform:scale(0.7)" :checked="true" />
						<text>{{m.name}}: 共{{m.questionCount}}题，每题{{m.scoreMultiplier}}分，限时{{m.timeLimit}}秒。</text>
					</view>
					<text>🔥 2. 灯谜难度: 提示扣0.5分</text>
				</view>
				</uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<style scoped>
	.flex-center {
		height: 30vh;
		align-items: center;
	}
	.title {
		font-size: 72rpx;
		color: #FF9800;
		letter-spacing: 10rpx;
	}

	.mode-selection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 36vh;
	}

	.mode-card {
		background-color: rgba(255, 87, 34, 0.2);
		width: 50vw;
		padding: 20rpx;
		border-radius: 20rpx;
		text-align: center;
		margin-bottom: 24rpx;
		color: rgba(255, 235, 59, 0.5);
		box-sizing: border-box;
	}

	.mode-card.active {
		background-color: rgba(255, 87, 34, 0.7);
		color: rgba(255, 235, 59, 1);
	}

	.mode-name {
		font-size: 36rpx;
		margin-left: 10rpx;
	}

	.mode-desc {
		font-size: 36rpx;
	}

	.button {
		width: 50vw;
		margin-bottom: 20rpx;
	}
</style>