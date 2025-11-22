// Define which lines to highlight for each step in each category
// Line numbers are 1-indexed

export const highlightRanges = {
    'api-streams': {
        trigger: [5, 6, 7, 8], // Config object lines
        handler: [11, 12, 13, 14, 15, 16, 17, 18], // Handler signature and destructuring
        state: [14], // state operations
        streams: [15], // streams operation
        logger: [16], // logger call
        emit: [17] // emit call
    },
    'event-streams': {
        trigger: [3, 4, 5, 6, 7], // Config object
        handler: [10, 11], // Handler signature
        state: [12], // state operations
        logger: [13], // logger call
        emit: [14], // emit call
        streams: [15] // streams operation
    },
    'cron-streams': {
        trigger: [3, 4, 5], // Config object
        handler: [8, 9], // Handler signature
        state: [10], // state operations
        logger: [11], // logger call
        emit: [12], // emit call
        streams: [13] // streams operation
    }
};
