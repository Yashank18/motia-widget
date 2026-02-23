// Code snippets for each category and language
// Paste your actual code here for each combination

export const codeSnippets = {
  'api-streams': {
    typescript: `import { StepConfig, Handlers } from 'motia'

export const config: StepConfig = {
  name: 'SendMessage',
  triggers: [{ type: 'http' }],
  path: '/messages',
  method: 'POST',
  enqueues: ['message.sent'],
  flows: ['messaging']
}

export const handler: Handlers<typeof config> = async (req, { enqueue, logger, state, streams }) => {
  const { text, userId } = req.body
  const message = { text, userId, status: 'sent' }
  await state.set('messages', userId, message)
  await streams.messages.set(userId, message)
  logger.info('Message sent', { userId })
  await enqueue({ topic: 'message.sent', data: message })
  return { status: 201, body: message }
}`,
    python: `config = {
    "name": "SendMessage",
    "triggers": [{"type": "http"}],
    "path": "/messages",
    "method": "POST",
    "enqueues": ["message.sent"],
    "flows": ["messaging"]
}

async def handler(req, context):
    text = req.get("body", {}).get("text")
    user_id = req.get("body", {}).get("userId")
    message = {"text": text, "userId": user_id, "status": "sent"}
    await context.state.set("messages", user_id, message)
    await context.streams.messages.set(user_id, message)
    context.logger.info("Message sent", {"userId": user_id})
    await context.enqueue({"topic": "message.sent", "data": message})
    return {"status": 201, "body": message}`,
    javascript: `exports.config = {
  name: 'SendMessage',
  triggers: [{ type: 'http' }],
  path: '/messages',
  method: 'POST',
  enqueues: ['message.sent'],
  flows: ['messaging']
}

exports.handler = async (req, { enqueue, logger, state, streams }) => {
  const { text, userId } = req.body
  const message = { text, userId, status: 'sent' }
  await state.set('messages', userId, message)
  await streams.messages.set(userId, message)
  logger.info('Message sent', { userId })
  await enqueue({ topic: 'message.sent', data: message })
  return { status: 201, body: message }
}`
  },
  'event-streams': {
    typescript: `import { StepConfig, Handlers } from 'motia'

export const config: StepConfig = {
  name: 'ProcessMessage',
  triggers: [{ type: 'queue', topic: 'message.sent' }],
  enqueues: ['message.processed'],
  flows: ['messaging']
}

export const handler: Handlers<typeof config> = async (input, { enqueue, logger, state, streams }) => {
  const { text, userId, status } = input
  const processedMessage = { text, userId, status: 'processed' }
  await state.set('processed', userId, processedMessage)
  await streams.processed.set(userId, processedMessage)
  logger.info('Message processed', { userId })
  await enqueue({ topic: 'message.processed', data: processedMessage })
}`,
    python: `config = {
    "name": "ProcessMessage",
    "triggers": [{"type": "queue", "topic": "message.sent"}],
    "enqueues": ["message.processed"],
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
    await context.enqueue({"topic": "message.processed", "data": processed_message})`,
    javascript: `exports.config = {
  name: 'ProcessMessage',
  triggers: [{ type: 'queue', topic: 'message.sent' }],
  enqueues: ['message.processed'],
  flows: ['messaging']
}

exports.handler = async (input, { enqueue, logger, state, streams }) => {
  const { text, userId, status } = input
  const processedMessage = { text, userId, status: 'processed' }
  await state.set('processed', userId, processedMessage)
  await streams.processed.set(userId, processedMessage)
  logger.info('Message processed', { userId })
  await enqueue({ topic: 'message.processed', data: processedMessage })
}`
  },
  'cron-streams': {
    typescript: `import { StepConfig, Handlers } from 'motia'

export const config: StepConfig = {
  name: 'DailySummary',
  triggers: [{ type: 'cron', expression: '0 9 * * *' }],
  enqueues: ['summary.generated'],
  flows: ['messaging']
}

export const handler: Handlers<typeof config> = async ({ enqueue, state, logger, streams }) => {
  const messages = await state.getGroup('messages')
  const summary = { total: messages.length, status: 'completed' }
  await state.set('summaries', 'daily', summary)
  await streams.summary.set('latest', summary)
  logger.info('Daily summary generated', { total: summary.total })
  await enqueue({ topic: 'summary.generated', data: summary })
}`,
    python: `config = {
    "name": "DailySummary",
    "triggers": [{"type": "cron", "expression": "0 9 * * *"}],
    "enqueues": ["summary.generated"],
    "flows": ["messaging"]
}

async def handler(context):
    messages = await context.state.get_group("messages")
    summary = {"total": len(messages), "status": "completed"}
    await context.state.set("summaries", "daily", summary)
    await context.streams.summary.set("latest", summary)
    context.logger.info("Daily summary generated", {"total": summary["total"]})
    await context.enqueue({"topic": "summary.generated", "data": summary})`,
    javascript: `exports.config = {
  name: 'DailySummary',
  triggers: [{ type: 'cron', expression: '0 9 * * *' }],
  enqueues: ['summary.generated'],
  flows: ['messaging']
}

exports.handler = async ({ enqueue, state, logger, streams }) => {
  const messages = await state.getGroup('messages')
  const summary = { total: messages.length, status: 'completed' }
  await state.set('summaries', 'daily', summary)
  await streams.summary.set('latest', summary)
  logger.info('Daily summary generated', { total: summary.total })
  await enqueue({ topic: 'summary.generated', data: summary })
}`
  }
};
