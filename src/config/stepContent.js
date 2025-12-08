// Left panel text content for each step

export const stepDescriptions = {
    trigger: {
        title: 'Trigger - How Execution Begins',
        description: 'Every Step has a type that defines how it triggers. Change the type, and the same pattern works for different use cases. A Step file contains two parts.',
        details: '**Config** → defines when and how the Step runs, and gives it a unique name\n**Handler** → the function that executes your business logic',
        docsLink: 'https://www.motia.dev/docs/concepts/steps#triggers',
        autoDiscovery: 'Motia automatically discovers any file ending in `.step.ts`, `.step.js`, or `.step.py`. The filename tells Motia to load it, and the name in the config uniquely identifies the Step inside your system.'
    },
    handler: {
        title: 'Handler - How It Performs Logic',
        description: '',
        details: 'This is where your business logic lives. The `handler` function receives input data and a context object with everything you need: `logger` for tracking, `emit` for triggering other Steps, `state` for storing data, and `streams` for real-time updates',
        docsLink: 'https://www.motia.dev/docs/concepts/steps#handler-configuration',
        autoDiscovery: 'Motia automatically discovers any file ending in `.step.ts`, `.step.js`, or `.step.py`. The filename tells Motia to load it, and the name in the config uniquely identifies the Step inside your system.'
    },
    emit: {
        title: 'Emit - How It Outputs Data',
        description: '',
        details: 'Send data to other Steps using `await emit({ topic: event.name, data: {...} })`. Any Step that subscribes to that topic will receive your data and run automatically. This is how Steps talk to each other.',
        docsLink: 'https://www.motia.dev/docs/concepts/steps#steps-work-together-emit--subscribe',
        autoDiscovery: 'Motia automatically discovers any file ending in `.step.ts`, `.step.js`, or `.step.py`. The filename tells Motia to load it, and the name in the config uniquely identifies the Step inside your system.'
    },
    state: {
        title: 'State - How It Stores Data',
        description: '',
        details: 'Store and retrieve data across Steps using `await state.set(key, value)` and `await state.get(key)`. Perfect for tracking workflow progress, caching results, or sharing data between Steps without setting up a database.',
        docsLink: 'https://www.motia.dev/docs/development-guide/state-management',
        autoDiscovery: 'Motia automatically discovers any file ending in `.step.ts`, `.step.js`, or `.step.py`. The filename tells Motia to load it, and the name in the config uniquely identifies the Step inside your system.'
    },
    logger: {
        title: 'Logger - How it tracks execution',
        description: '',
        details: 'Every handler gets a `logger` object. Call `logger.info()`, `logger.warn()`, or `logger.error()` with your message and data. All logs automatically include your Step name, trace ID, and timestamp - making it easy to debug workflows in the Workbench.',
        docsLink: 'https://www.motia.dev/docs/development-guide/observability',
        autoDiscovery: 'Motia automatically discovers any file ending in `.step.ts`, `.step.js`, or `.step.py`. The filename tells Motia to load it, and the name in the config uniquely identifies the Step inside your system.'
    },
    streams: {
        title: 'Streams - How It Broadcasts Live Data',
        description: '',
        details: 'Push updates directly to connected clients with `await streams.mystream.set(key, value)`. When you update stream data from any Step, all subscribed frontend clients receive the changes instantly - no extra setup needed.',
        docsLink: 'https://www.motia.dev/docs/development-guide/streams',
        autoDiscovery: 'Motia automatically discovers any file ending in `.step.ts`, `.step.js`, or `.step.py`. The filename tells Motia to load it, and the name in the config uniquely identifies the Step inside your system.'
    }
};
