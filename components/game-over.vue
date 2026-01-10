<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import { useRiddleStore } from '@/store/riddle'
	const riddleStore = useRiddleStore()

	// 游戏模式
	const getModeText = (mode : string) => {
		const map : Record<string, string> = {
			easy: '简单模式',
			normal: '普通模式',
			hard: '困难模式',
			challenge: '挑战模式',
		}
		return map[mode] || '普通模式'
	}

	// 结果
	const result = [
		{ name: '灯谜模式', value: getModeText(riddleStore.gameMode) },
		{ name: '最终得分', value: `${Math.round(riddleStore.score * 10)/10}/${riddleStore.totalScore}` },
		{ name: '答对题数', value: `${riddleStore.correctCount}/${riddleStore.totalQuestions}` },
		{ name: '准确率', value: `${riddleStore.accuracy}%` },
	]

	// 评分
	const getScoreText = (score : number) => {
		const rate = riddleStore.score / riddleStore.totalScore
		if (rate > 0.9) {
			return '✨ 顶尖，继续冲！'
		} else if (rate > 0.8) {
			return '🔥 潜力无限，突破在即！'
		} else if (rate > 0.6) {
			return '🌱 每步成长，皆是勋章！'
		} else {
			return '🌈 未完待续，终将辉煌！'
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
			<text>乐学结果</text>
		</view>

		<view class="result-stats">
			<view class="stat-row" v-for="(r, index) in result" :key="index">
				<text class="stat-label">{{ r.name }}: </text>
				<text class="stat-value">{{ r.value }}</text>
			</view>
		</view>
		<view class="flex-center over-tip">
			<text>{{getScoreText()}}</text>
		</view>
		<view class="flex-between">
			<button @click="goBack('review')">灯谜回顾</button>
			<button type="primary" @click="goBack('game')">再来一次</button>
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
		margin: 80rpx 60rpx;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 30rpx;
		transform: rotateZ(-10deg);
		text-align: center;
		font-size: 36rpx;

		.stat-row {
			padding: 25rpx 30rpx;
			border-bottom: 2rpx dashed #f1f2f6;

			&:last-child {
				border-bottom: none;
			}

			.stat-label {
				color: #FFC107;
				text-shadow: 0 5rpx 10rpx #000;
				margin-right: 20rpx;
			}

			.stat-value {
				font-weight: bold;
				color: #FF5722;
				text-shadow: 0 2rpx 10rpx #fff;
			}
		}
	}

	.over-tip {
		font-size: 46rpx;
		height: 10vh;
		color: #FFEB3B;
		text-shadow: 0 2rpx 15rpx #fff;
	}
</style>