<script setup lang="ts">
	import { ref } from 'vue'
	import { useRiddleStore } from '@/store/riddle'
	const title = '寓乐猜灯谜'
	const modes = [
		{ name: '简单模式', mode: 'easy', icon: 'map-pin-ellipse', color: '#9c27b0', desc: '8道题，适合新手' },
		{ name: '普通模式', mode: 'normal', icon: 'map-filled', color: '#009688', desc: '10道题，随机难度' },
		{ name: '困难模式', mode: 'hard', icon: 'fire-filled', color: '#FFC107', desc: '12道题，挑战极限' },
	]
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
				v-for="m in modes" :key="m.mode">
				<uni-icons :type="m.icon" size="26" :color="m.color"></uni-icons>
				<text class="mode-name">{{m.name}}</text>
			</view>
		</view>
		<button type="primary" class="button" @click="startGame">开始游戏</button>
		<button type="default" class="button" @click="dialogToggle">游戏规则</button>
		<!-- 提示窗示例 -->
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="success" :showClose="false" confirmText="关闭" title="游戏规则"
				@close="dialogClose">
				<view>
					<view>
						<text>1. 游戏模式</text>
						<view v-for="m in modes" :key="m.mode" style="margin-left:10rpx">
							<radio style="transform:scale(0.7)" :checked="true" />
							<text>{{m.name}}: {{m.desc}}</text>
						</view>
					</view>
					<view>
						<text>2. 简单题每题10分，中等题每题20分，困难题每题30分</text>
					</view>
					<view>
						<text>3. 答对越快，额外加分越多</text>
					</view>
					
					<view>
						<text>4. 使用提示会扣除5分</text>
					</view>
					
					<view>
						<text>5. 根据谜面猜出正确答案</text>
					</view>
				</view>
				</uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<style scoped>
	.flex-center {
		height: 22vh;
		align-items: center;
	}
	.title {
		font-size: 72rpx;
		color: #FFEB3B;
	}

	.mode-selection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 40vh;
	}

	.mode-card {
		background-color: rgba(255, 87, 34, 0.6);
		width: 50vw;
		padding: 20rpx;
		border-radius: 20rpx;
		text-align: center;
		margin-bottom: 10px;
		color: rgba(255, 255, 255, 0.6);
		box-sizing: border-box;
	}

	.mode-card.active {
		background-color: rgba(255, 87, 34, 1);
		color: rgba(255, 255, 255, 1);
	}

	.mode-name {
		font-size: 36rpx;
		position: relative;
		top: -6rpx;
	}

	.mode-desc {
		font-size: 36rpx;
	}

	.button {
		width: 50vw;
		margin-bottom: 20rpx;
	}
</style>