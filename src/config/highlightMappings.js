// Define which lines to highlight for each step in each category and language
// Line numbers are 1-indexed, aligned to current codeContent.js snippets

export const highlightRanges = {
    'api-streams': {
        trigger: {
            typescript: [5],   // config: name, triggers, enqueues, flows
            javascript: [3],
            python: [3]
        },
        handler: {
            typescript: [10, 11, 12, 13, 14, 15, 16, 17, 18],
            javascript: [8, 9, 10, 11, 12, 13, 14, 15, 16],
            python: [8, 9, 10, 11, 12, 13, 14, 15, 16]
        },
        state: {
            typescript: [13],
            javascript: [11],
            python: [12]
        },
        streams: {
            typescript: [14],
            javascript: [12],
            python: [13]
        },
        logger: {
            typescript: [15],
            javascript: [13],
            python: [14]
        },
        emit: {
            typescript: [6, 16],   // enqueues in config, enqueue() in handler
            javascript: [4, 14],
            python: [4, 15]
        }
    },
    'event-streams': {
        trigger: {
            typescript: [5],
            javascript: [3],
            python: [3]
        },
        handler: {
            typescript: [10, 11, 12, 13, 14, 15, 16, 17],
            javascript: [8, 9, 10, 11, 12, 13, 14, 15],
            python: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
        },
        state: {
            typescript: [13],
            javascript: [11],
            python: [13]
        },
        logger: {
            typescript: [15],
            javascript: [13],
            python: [15]
        },
        emit: {
            typescript: [6, 16],
            javascript: [4, 14],
            python: [4, 16]
        },
        streams: {
            typescript: [14],
            javascript: [12],
            python: [14]
        }
    },
    'cron-streams': {
        trigger: {
            typescript: [5],
            javascript: [3],
            python: [3]
        },
        handler: {
            typescript: [10, 11, 12, 13, 14, 15, 16, 17],
            javascript: [8, 9, 10, 11, 12, 13, 14, 15],
            python: [8, 9, 10, 11, 12, 13, 14, 15]
        },
        state: {
            typescript: [11, 13],
            javascript: [9, 11],
            python: [9, 11]
        },
        logger: {
            typescript: [15],
            javascript: [13],
            python: [13]
        },
        emit: {
            typescript: [6, 16],
            javascript: [4, 14],
            python: [4, 14]
        },
        streams: {
            typescript: [14],
            javascript: [12],
            python: [12]
        }
    }
};
