<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import GameOver from '@/compoents/game-over.vue'
import { useRiddleStore } from '@/store/riddle'
const riddleStore = useRiddleStore()
console.log(riddleStore)
// 格式时间
const formatTime = (seconds: number) => {
	const mins = Math.floor(seconds / 60)
	const secs = seconds % 60
	return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

// 难度文本
const getDifficultyText = (difficulty: number) => {
	const texts = ['简单', '中等', '困难']
	return texts[difficulty - 1] || texts[0]
}

// 显示提示
const toggleHint = () => {
	if (!riddleStore.showHint) {
		riddleStore.showHint = true
	}
}

// 提交提示
const alertDialog = ref()
const alertData = ref({
	type: '',
	tip: ''
})
const showFeedbackMessage = (tip: string, type: string) => {
	alertData.value = { tip, type }
	alertDialog?.value.open()
}
const dialogClose = () => {
	console.log('点击关闭')
}
const dialogConfirm = () => {
	riddleStore.nextQuestion()
}

// 提交答案
const submitAnswer = () => {
	if (!riddleStore.userAnswer.trim()) {
		showFeedbackMessage('请输入答案', 'error')
		return
	}

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
			<view class="game-header">
				<view class="flex-between">
					<view>
						<text>得分: </text>
						<text class="score">{{ riddleStore.score }}</text>
					</view>
					<text class="time">{{ formatTime(riddleStore.gameTime) }}</text>
				</view>

				<view class="flex-between">
					<slider min="0" :max="riddleStore.totalQuestions" :value="riddleStore.currentIndex + 1" disabled
						activeColor="#8A6DE9" backgroundColor="#FFCC33" block-color="#8A6DE9" block-size="12"
						style="flex:1" />
					<text class="progress-text">第 {{ riddleStore.currentIndex + 1 }}/{{ riddleStore.totalQuestions }}
						题</text>
				</view>
			</view>

			<!-- 灯谜内容 -->
			<view class="riddle-content">
				<view class="category-tag">
					{{ riddleStore.currentRiddle.category }} · {{
						getDifficultyText(riddleStore.currentRiddle.difficulty) }}
				</view>

				<view class="question">
					<text>{{ riddleStore.currentRiddle.question }}</text>
				</view>

				<!-- 提示区域 -->
				<view v-if="riddleStore.showHint" class="hint-section">
					<text class="hint-label">提示：</text>
					<text class="hint-content">{{ riddleStore.currentRiddle.hint || '暂无提示' }}</text>
				</view>
			</view>

			<!-- 答案输入 -->
			<view class="answer-section">
				<input v-model="riddleStore.userAnswer" class="answer-input" placeholder="请输入答案..."
					@confirm="submitAnswer" :focus="true" />

				<view class="buttons">
					<button class="hint-btn" @click="toggleHint" :disabled="riddleStore.showHint">
						{{ riddleStore.showHint ? '已提示' : '提示💡' }}
					</button>

					<button class="submit-btn" @click="submitAnswer">提交答案</button>

					<button class="skip-btn" @click="skipRiddle">跳过</button>
				</view>
			</view>

			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="alertData.type" :showClose="alertData.type === 'error'" concelText="关闭"
					confirmText="下一题" :content="alertData.tip" @close="dialogClose" @confirm="dialogConfirm">
				</uni-popup-dialog>
			</uni-popup>
		</view>
		<game-over v-else></game-over>
	</view>
</template>

<style scoped lang="scss">
.game-header {
	background: rgba(255, 255, 255, 0.5);
	border-radius: 0 0 20rpx 20rpx;
	padding: 20rpx;
	box-shadow: 0 5rpx 20rpx rgba(0, 0, 0, 0.1);
	height: 10vh;
	box-sizing: border-box;

	.score,
	.time {
		font-size: 32rpx;
		color: #FFEB3B;
	}

}

.riddle-content {
	background: rgb(255, 152, 0, 0.6);
	border-radius: 20rpx;
	padding: 40rpx;
	margin: 15vh 0 5vh;
	box-shadow: 0 5rpx 20rpx rgba(0, 0, 0, 0.1);

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
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 30rpx;
		text-shadow: 0 5rpx 10rpx #000;
	}

	.hint-section {
		background: rgba(255, 255, 255, 0.5);
		border-left: 6rpx solid #E91E63;
		padding: 20rpx;
		border-radius: 10rpx;

		.hint-label {
			font-weight: bold;
			color: #E91E63;
			margin-right: 10rpx;
		}

		.hint-content {
			color: #03A9F4;
		}
	}
}

.answer-section {
	.answer-input {
		background: rgba(255, 255, 255, 0.5);
		height: 100rpx;
		border-radius: 50rpx;
		padding: 0 40rpx;
		font-size: 32rpx;
		margin-bottom: 40rpx;
		box-shadow: 0 5rpx 20rpx rgba(0, 0, 0, 0.1);
	}

	.buttons {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		gap: 20rpx;

		button {
			border-radius: 40rpx;
			font-size: 32rpx;
			border: none;

			&.hint-btn {
				background: #fdcb6e;
				color: #333;

				&[disabled] {
					background: #ccc;
					color: #666;
				}
			}

			&.submit-btn {
				background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
				color: white;
			}

			&.skip-btn {
				background: #dfe6e9;
				color: #666;
			}
		}
	}
}
</style>