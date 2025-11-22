// Code snippets for each category and language
// Paste your actual code here for each combination

export const codeSnippets = {
  'api-streams': {
    typescript: `import { EventConfig, Handlers } from 'motia'

export const config: EventConfig = {
  name: 'ProcessMessage',
  type: 'event',
  subscribes: ['message.sent'],
  emits: ['message.processed'],
  flows: ['messaging']
}

export const handler: Handlers['ProcessMessage'] = async (input, { emit, logger, state, streams }) => {
  const { text, userId, status } = input
  const processedMessage = { text, userId, status: 'processed' }
  await state.set('processed', userId, processedMessage)
  await streams.processed.set(userId, processedMessage)
  logger.info('Message processed', { userId })
  await emit({ topic: 'message.processed', data: processedMessage })
}`,
    python: `from motia import EventConfig, handler

config = EventConfig(
    name="ProcessMessage",
    type="event",
    subscribes=["message.sent"],
    emits=["message.processed"],
    flows=["messaging"]
)

@handler("ProcessMessage")
async def process_message(input, emit, logger, state, streams):
    text = input["text"]
    user_id = input["userId"]
    status = input["status"]
    
    processed_message = {
        "text": text,
        "userId": user_id,
        "status": "processed"
    }
    
    await state.set("processed", user_id, processed_message)
    await streams.processed.set(user_id, processed_message)
    logger.info("Message processed", userId=user_id)
    await emit(topic="message.processed", data=processed_message)`,
    javascript: `import { EventConfig, Handlers } from 'motia'

export const config = {
  name: 'ProcessMessage',
  type: 'event',
  subscribes: ['message.sent'],
  emits: ['message.processed'],
  flows: ['messaging']
}

export const handler = async (input, { emit, logger, state, streams }) => {
  const { text, userId, status } = input
  const processedMessage = { text, userId, status: 'processed' }
  await state.set('processed', userId, processedMessage)
  await streams.processed.set(userId, processedMessage)
  logger.info('Message processed', { userId })
  await emit({ topic: 'message.processed', data: processedMessage })
}`
  },
  'event-streams': {
    typescript: `import { EventConfig, Handlers } from 'motia'

export const config: EventConfig = {
  name: 'UserNotification',
  type: 'event',
  subscribes: ['user.action'],
  emits: ['notification.sent']
}

export const handler: Handlers['UserNotification'] = async (input, { emit, logger, state, streams }) => {
  const notification = await createNotification(input)
  await state.set('notifications', input.userId, notification)
  logger.info('Notification created', { userId: input.userId })
  await emit({ topic: 'notification.sent', data: notification })
  await streams.notifications.set(input.userId, notification)
}`,
    python: `from motia import EventConfig, handler

config = EventConfig(
    name="UserNotification",
    type="event",
    subscribes=["user.action"],
    emits=["notification.sent"]
)

@handler("UserNotification")
async def user_notification(input, emit, logger, state, streams):
    notification = await create_notification(input)
    await state.set("notifications", input["userId"], notification)
    logger.info("Notification created", userId=input["userId"])
    await emit(topic="notification.sent", data=notification)
    await streams.notifications.set(input["userId"], notification)`,
    javascript: `import { EventConfig, Handlers } from 'motia'

export const config = {
  name: 'UserNotification',
  type: 'event',
  subscribes: ['user.action'],
  emits: ['notification.sent']
}

export const handler = async (input, { emit, logger, state, streams }) => {
  const notification = await createNotification(input)
  await state.set('notifications', input.userId, notification)
  logger.info('Notification created', { userId: input.userId })
  await emit({ topic: 'notification.sent', data: notification })
  await streams.notifications.set(input.userId, notification)
}`
  },
  'cron-streams': {
    typescript: `import { CronConfig, Handlers } from 'motia'

export const config: CronConfig = {
  name: 'DailyReport',
  schedule: '0 9 * * *'
}

export const handler: Handlers['DailyReport'] = async (input, { emit, logger, state, streams }) => {
  const report = await generateReport()
  await state.set('reports', 'daily', report)
  logger.info('Daily report generated')
  await emit({ topic: 'report.generated', data: report })
  await streams.reports.set('daily', report)
}`,
    python: `from motia import CronConfig, handler

config = CronConfig(
    name="DailyReport",
    schedule="0 9 * * *"
)

@handler("DailyReport")
async def daily_report(input, emit, logger, state, streams):
    report = await generate_report()
    await state.set("reports", "daily", report)
    logger.info("Daily report generated")
    await emit(topic="report.generated", data=report)
    await streams.reports.set("daily", report)`,
    javascript: `import { CronConfig, Handlers } from 'motia'

export const config = {
  name: 'DailyReport',
  schedule: '0 9 * * *'
}

export const handler = async (input, { emit, logger, state, streams }) => {
  const report = await generateReport()
  await state.set('reports', 'daily', report)
  logger.info('Daily report generated')
  await emit({ topic: 'report.generated', data: report })
  await streams.reports.set('daily', report)
}`
  }
};
