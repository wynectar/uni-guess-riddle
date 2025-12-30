<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import { useRiddleStore } from '@/store/riddle'
	const riddleStore = useRiddleStore()
	console.log(riddleStore)

	// 格式时间
	const formatTime = (seconds : number) => {
		const mins = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
	}

	// 游戏模式
	const getModeText = (mode : string) => {
		const map : Record<string, string> = {
			easy: '简单模式',
			normal: '普通模式',
			hard: '困难模式'
		}
		return map[mode] || '普通模式'
	}

	// 结果
	const result = [
		{ name: '游戏模式', value: getModeText(riddleStore.gameMode) },
		{ name: '最终得分', value: riddleStore.score },
		{ name: '用时', value: formatTime(riddleStore.gameTime) },
		{ name: '答对题数', value: `${riddleStore.solvedCount}/${riddleStore.totalQuestions}` },
		{ name: '准确率', value: `${riddleStore.accuracy}%` },
	]

	// 评分
	const getScoreText = (score : number) => {
		const rate = score / riddleStore.normalScore
		if (rate > 1) {
			return '超级棒，为你竖起👍'
		} else if (rate > 0.8) {
			return '非常棒 🎉'
		} else if (rate >= 0.6) {
			return '哎哟，不错哦🎆'
		} else {
			return '继续加油吧！💪'
		}
	}

	const goBack = (page : string) => {
		if (page ==='game') riddleStore.startNewGame(riddleStore.gameMode)
		// 跳转到游戏页面
		uni.navigateTo({
			url: `/pages/${page}/${page}`
		})
	}
</script>

<template>
	<view class="page-container">
		<view class="flex-center over-title">
			<text>游戏结束</text>
		</view>

		<view class="result-stats">
			<view class="stat-row flex-between" v-for="(r, index) in result" :key="index">
				<text class="stat-label">{{r.name}}</text>
				<text class="stat-value">{{ r.value }}</text>
			</view>
		</view>
		<view class="flex-center over-tip">
			<text>{{getScoreText(riddleStore.score)}}</text>
		</view>
		<view class="flex-between">
			<button @click="goBack('review')">题目回顾</button>
			<button type="primary" @click="goBack('game')">再来一局</button>
			<button @click="goBack('index')">返回首页</button>
		</view>
	</view>
</template>

<style scoped lang="scss">
	.over-title {
		font-size: 66rpx;
		height: 20vh;
		color: #fff;
	}

	.result-stats {
		margin-bottom: 40rpx;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 30rpx;

		.stat-row {
			padding: 25rpx 30rpx;
			border-bottom: 2rpx dashed #f1f2f6;

			&:last-child {
				border-bottom: none;
			}

			.stat-label {
				font-size: 30rpx;
				color: #FFC107;
				text-shadow: 0 5rpx 10rpx #000;
			}

			.stat-value {
				font-size: 32rpx;
				font-weight: bold;
				color: #d63031;
				text-shadow: 0 2rpx 10rpx #000;
			}
		}
	}

	.over-tip {
		font-size: 46rpx;
		height: 10vh;
		color: #E91E63;
		text-shadow: 0 2rpx 15rpx #fff;
	}
</style>