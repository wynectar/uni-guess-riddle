<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import GameOver from '@/components/game-over.vue'
	import { useRiddleStore } from '@/store/riddle'
	const riddleStore = useRiddleStore()

	// 难度文本
	const getDifficultyText = (difficulty : number) => {
		const texts = ['简单', '中等', '困难']
		return texts[difficulty - 1] || texts[0]
	}

	// 选择问题
	const radioChange = (e : object) => {
		riddleStore.selectCurrentAnswer(e.detail.value)
	}

	// 提交提示
	const alertDialog = ref()
	const alertData = ref({
		type: '',
		tip: ''
	})
	const showFeedbackMessage = (tip : string, type : string) => {
		alertData.value = { tip, type }
		alertDialog?.value.open()
	}

	const dialogConfirm = () => {
		if (riddleStore.currentRiddle.userAnswer) {
			riddleStore.nextQuestion()
		} else {
			skipRiddle()
		}
	}

	// 提交答案
	const submitAnswer = () => {
		const isCorrect = riddleStore.submitAnswer()

		if (isCorrect) {
			showFeedbackMessage('回答正确！', 'success')
		} else {
			showFeedbackMessage('答案错误', 'error')
		}
	}

	// 跳过次题
	const skipRiddle = () => {
		riddleStore.skipQuestion()
	}
</script>

<template>
	<view class="page-container">
		<view v-if="riddleStore.gameStarted">
			<!-- 游戏头部 -->
			<view class="game-header flex-between">
				<view>
					<text>第 </text>
					<text class="progress-current">{{ riddleStore.currentIndex + 1 }}</text>
					<text>/</text>
					<text>{{ riddleStore.totalQuestions }}</text>
					<text> 题</text>
				</view>
				<text class="time">{{ riddleStore.gameTimeLimit }} s</text>
			</view>

			<!-- 灯谜内容 -->
			<view class="riddle-content">
				<view class="category-tag">
					{{ riddleStore.currentRiddle.category }} ·
					{{ getDifficultyText(riddleStore.currentRiddle.difficulty) }}
				</view>

				<!-- 问题 -->
				<view class="question">
					<text>{{ riddleStore.currentRiddle.question }}</text>
				</view>

				<!-- 选项区域 -->
				<view class="select">
					<radio-group @change="radioChange">
						<label v-for="opt in Object.entries(riddleStore.currentRiddle.options)" :key="opt[0] + opt[1]">
							<radio :value="opt[0]" style="transform:scale(0.8)" />
							<text> {{ opt[0] }}: {{ opt[1] }}</text>
						</label>
					</radio-group>
				</view>
			</view>

			<!-- 答案输入 -->
			<view class="answer-section flex-between">
				<button class="hint-btn" @click="riddleStore.toggleHint" :disabled="riddleStore.currentRiddle.showHint">
					{{ riddleStore.currentRiddle.showHint ? '已提示' : '提示' }}
				</button>

				<button type="primary" @click="submitAnswer">提交答案</button>

				<button class="skip-btn" @click="skipRiddle">跳过</button>
			</view>

			<!-- 提示区域 -->
			<view v-if="riddleStore.currentRiddle.showHint" class="hint-section">
				<text class="hint-label">提示：</text>
				<text>{{ riddleStore.currentRiddle.hint || '暂无提示' }}</text>
			</view>

			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="alertData.type" :showClose="false" confirmText="下一题" :content="alertData.tip"
					@confirm="dialogConfirm">
				</uni-popup-dialog>
			</uni-popup>
		</view>
		<game-over v-else></game-over>
	</view>
</template>

<style scoped lang="scss">
	.game-header {
		background: rgba(255, 255, 255, 0.2);
		padding: 20rpx;
		height: 10vh;
		box-sizing: border-box;
		color: #fff;

		.progress-current {
			color: #FF9800;
		}

		.time {
			font-size: 36rpx;
			color: #FF9800;
		}

	}

	.riddle-content {
		background: rgb(255, 235, 59, 0.3);
		border-radius: 20rpx;
		padding: 40rpx;
		margin: 15vh 0 5vh;

		.category-tag {
			display: inline-block;
			background: #ffeaa7;
			color: #d63031;
			padding: 10rpx 20rpx;
			border-radius: 20rpx;
			font-size: 24rpx;
			margin-bottom: 30rpx;
		}

		.question {
			font-size: 36rpx;
			line-height: 1.6;
			color: #FFEB3B;
			margin-bottom: 30rpx;
			text-shadow: 0 5rpx 10rpx #000;
		}

		.select label {
			display: block;
			color: #fff;
			margin-top: 10rpx;
		}
	}



	.hint-section {
		background: rgb(255, 87, 34, 0.8);
		border-radius: 20rpx;
		padding: 40rpx;
		color: #fff;

		.hint-label {
			font-weight: bold;
			color: #FFEB3B;
			margin-right: 10rpx;
		}
	}

	.answer-section {
		padding: 40rpx;

		button {
			border-radius: 40rpx;
			font-size: 32rpx;
			border: none;
			width: 180rpx;
			margin: 0;

			&.hint-btn {
				background: #FF5722;
				color: #fff;

				&[disabled] {
					background: #ccc;
					color: #666;
				}
			}

			&.skip-btn {
				background: #dfe6e9;
				color: #666;
			}
		}
	}
</style>