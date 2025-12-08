// Code snippets for each category and language
// Paste your actual code here for each combination

export const codeSnippets = {
  'api-streams': {
    typescript: `import { ApiRouteConfig, Handlers } from 'motia'

export const config: ApiRouteConfig = {
  name: 'SendMessage',
  type: 'api',
  path: '/messages',
  method: 'POST', 
  emits: ['message.sent'],
  flows: ['messaging']
}

export const handler: Handlers['SendMessage'] = async (req, { emit, logger, state, streams }) => {
  const { text, userId } = req.body
  const message = { text, userId, status: 'sent' }
  await state.set('messages', userId, message)
  await streams.messages.set(userId, message)
  logger.info('Message sent', { userId })
  await emit({ topic: 'message.sent', data: message })
  return { status: 201, body: message }
}`,
    python: `config = {
    name: 'SendMessage',
    type: 'api',
    path: '/messages',
    "method": "POST",
    "emits": ["message.sent"],
    "flows": ["messaging"]
}

async def handler(req, context):
    text = req.get("body", {}).get("text")
    user_id = req.get("body", {}).get("userId")
    message = {"text": text, "userId": user_id, "status": "sent"}
    await context.state.set("messages", user_id, message)
    await context.streams.messages.set(user_id, message)
    context.logger.info("Message sent", {"userId": user_id})
    await context.emit({"topic": "message.sent", "data": message})
    return {"status": 201, "body": message}`,
    javascript: `exports.config = {
  name: 'SendMessage',
  type: 'api',
  path: '/messages',
  method: 'POST',
  emits: ['message.sent'],
  flows: ['messaging']
}

exports.handler = async (req, { emit, logger, state, streams }) => {
  const { text, userId } = req.body
  const message = { text, userId, status: 'sent' }
  await state.set('messages', userId, message)
  await streams.messages.set(userId, message)
  logger.info('Message sent', { userId })
  await emit({ topic: 'message.sent', data: message })
  return { status: 201, body: message }
}`
  },
  'event-streams': {
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
    python: `config = {
    "name": "ProcessMessage",
    type: 'event',
    "subscribes": ["message.sent"],
    "emits": ["message.processed"],
    "flows": ["messaging"]
}

async def handler(input_data, context):
    text = input_data.get("text")
    user_id = input_data.get("userId")
    status = input_data.get("status")
    processed_message = {"text": text, "userId": user_id, "status": "processed"}
    await context.state.set("processed", user_id, processed_message)
    await context.streams.processed.set(user_id, processed_message)
    context.logger.info("Message processed", {"userId": user_id})
    await context.emit({ "topic": "message.processed", "data": processed_message })`,
    javascript: `exports.config = {
  name: 'ProcessMessage',
  type: 'event',
  subscribes: ['message.sent'],
  emits: ['message.processed'],
  flows: ['messaging']
}

exports.handler = async (input, { emit, logger, state, streams }) => {
  const { text, userId, status } = input
  const processedMessage = { text, userId, status: 'processed' }
  await state.set('processed', userId, processedMessage)
  await streams.processed.set(userId, processedMessage)
  logger.info('Message processed', { userId })
  await emit({ topic: 'message.processed', data: processedMessage })
}`
  },
  'cron-streams': {
    typescript: `import { CronConfig, Handlers } from 'motia'

export const config: CronConfig = {
  name: 'DailySummary',
  type: 'cron',
  cron: '0 9 * * *',
  emits: ['summary.generated'],
  flows: ['messaging']
}

export const handler: Handlers['DailySummary'] = async ({ emit, state, logger, streams }) => {
  const messages = await state.getGroup('messages')
  const summary = { total: messages.length, status: 'completed' }
  await state.set('summaries', 'daily', summary)
  await streams.summary.set('latest', summary)
  logger.info('Daily summary generated', { total: summary.total })
  await emit({ topic: 'summary.generated', data: summary })
}`,
    python: `config = {
    "name": "DailySummary",
    type: 'cron',
    "cron": "0 9 * * *",
    "emits": ["summary.generated"],
    "flows": ["messaging"]
}

async def handler(context):
    messages = await context.state.get_group("messages")
    summary = {"total": len(messages), "status": "completed"}
    await context.state.set("summaries", "daily", summary)
    await context.streams.summary.set("latest", summary)
    context.logger.info("Daily summary generated", {"total": summary["total"]})
    await context.emit({  "topic": "summary.generated", "data": summary })`,
    javascript: `exports.config = {
  name: 'DailySummary',
  type: 'cron',
  cron: '0 9 * * *',
  emits: ['summary.generated'],
  flows: ['messaging']
}

exports.handler = async ({ emit, state, logger, streams }) => {
  const messages = await state.getGroup('messages')
  const summary = { total: messages.length, status: 'completed' }
  await state.set('summaries', 'daily', summary)
  await streams.summary.set('latest', summary)
  logger.info('Daily summary generated', { total: summary.total })
  await emit({ topic: 'summary.generated', data: summary })
}`
  }
};
