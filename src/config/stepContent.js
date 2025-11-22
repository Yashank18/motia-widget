// Left panel text content for each step

export const stepDescriptions = {
    trigger: {
        title: 'Trigger - How It Starts',
        description: 'Define what triggers your workflow to start processing.',
        details: 'Configure the event type, subscriptions, and flow definitions that determine when your handler executes.',
        docsLink: '#'
    },
    handler: {
        title: 'Handler - Processing Logic',
        description: 'The main function that processes your data.',
        details: 'Access input data and use the provided utilities (emit, logger, state, streams) to implement your business logic.',
        docsLink: '#'
    },
    emit: {
        title: 'Emit - Send Events',
        description: 'Broadcast events to other parts of your system.',
        details: 'Use emit to send processed data to subscribers, enabling event-driven architecture.',
        docsLink: '#'
    },
    state: {
        title: 'State - Persist Data',
        description: 'Store and retrieve stateful data.',
        details: 'Use the state API to persist data across invocations and maintain application state.',
        docsLink: '#'
    },
    logger: {
        title: 'Logger - Track Activity',
        description: 'Log important events and debugging information.',
        details: 'Use structured logging to track execution flow and debug issues in production.',
        docsLink: '#'
    },
    streams: {
        title: 'Streams - Real-time Updates',
        description: 'Push updates directly to connected clients.',
        details: 'When you update stream data from any step, all subscribed frontend clients receive the changes instantly - no extra setup needed.',
        autoDiscovery: 'Motia automatically discovers any file ending in .step.ts, .step.js, or .step.py. The filename tells Motia to load it, and the name in the config uniquely identifies the Step inside your system.'
    }
};
