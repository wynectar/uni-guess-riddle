<script setup lang="ts">
	import { ref } from 'vue'
	import { useRiddleStore } from '@/store/riddle'
	// 开始游戏
	const riddleStore = useRiddleStore()
	const goBack = (page : string) => {
		if (page ==='game') riddleStore.startNewGame(riddleStore.gameMode)
		// 跳转到游戏页面
		uni.navigateTo({
			url: `/pages/${page}/${page}`
		})
	}
</script>

<template>
	<view class="review-section">
		<scroll-view class="review-list" scroll-y>
			<view v-for="(riddle, index) in riddleStore.riddles" :key="riddle.id" class="review-item"
				:class="{ correct: riddle.isCorrect, wrong: riddle.userAnswer && !riddle.isCorrect }">
				<text class="review-index">{{ index + 1 }}.</text>
				<view class="review-content">
					<text class="review-question">{{ riddle.question }}</text>
					<text class="review-answer">答案：{{ riddle.answer }}</text>
					<text class="review-user-answer">你的答案：{{ riddle.userAnswer }}</text>
				</view>
				<text class="review-status">
					{{ riddle.solved ? '✓' : riddle.userAnswer ? '✗' : '○' }}
				</text>
			</view>
			<view class="flex-between" style="margin: 20rpx 0 60rpx;">
				<button type="primary" @click="goBack('game')">再来一局</button>
				<button @click="goBack('index')">返回首页</button>
			</view>
		</scroll-view>
	</view>
</template>

<style scoped lang="scss">
	.review-section {
		background: #f8f9fa;
	
		.review-title {
			display: block;
			font-size: 32rpx;
			font-weight: bold;
			color: #2d3436;
			margin-bottom: 20rpx;
		}
	
		.review-list {
			background: #f8f9fa;
			border-radius: 15rpx;
			padding: 20rpx;
			box-sizing: border-box;
	
			.review-item {
				display: flex;
				align-items: flex-start;
				padding: 20rpx;
				background: white;
				border-radius: 10rpx;
				margin-bottom: 15rpx;
	
				&:last-child {
					margin-bottom: 0;
				}
	
				&.correct {
					border-left: 6rpx solid #4cd964;
				}
	
				&.wrong {
					border-left: 6rpx solid #ff3b30;
				}
	
				.review-index {
					font-size: 28rpx;
					font-weight: bold;
					color: #636e72;
					margin-right: 20rpx;
					min-width: 60rpx;
				}
	
				.review-content {
					flex: 1;
	
					.review-question {
						display: block;
						font-size: 28rpx;
						color: #2d3436;
						margin-bottom: 10rpx;
						line-height: 1.4;
					}
	
					.review-answer {
						display: block;
						font-size: 26rpx;
						color: #4cd964;
						margin-bottom: 5rpx;
					}
	
					.review-user-answer {
						display: block;
						font-size: 26rpx;
						color: #ff3b30;
					}
				}
	
				.review-status {
					font-size: 36rpx;
					margin-left: 20rpx;
					color: #4cd964;
	
					.review-item.wrong & {
						color: #ff3b30;
					}
				}
			}
		}
	}
</style>