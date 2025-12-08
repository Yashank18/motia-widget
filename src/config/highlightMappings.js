// Define which lines to highlight for each step in each category and language
// Line numbers are 1-indexed

export const highlightRanges = {
    'api-streams': {
        trigger: {
            typescript: [5,6,7], // Config object lines (8-15 in template)
            javascript: [3,4,5], // Config object lines (44-51 in template)
            python: [3,4,5] // Config object lines (26-33 in template)
        },
        handler: {
            typescript: [12, 13, 14, 15, 16, 17, 18, 19, 20], // Handler signature and body (17-25 in template)
            javascript: [ 10, 11, 12, 13, 14, 15, 16, 17,18], // Handler signature and body (53-61 in template)
            python: [10, 11, 12, 13, 14, 15, 16, 17, 18] // Handler signature and body (35-43 in template)
        },
        state: {
            typescript: [15], // state.set operation (line 20 in template)
            javascript: [13], // state.set operation (line 56 in template)
            python: [14] // context.state.set operation (line 39 in template)
        },
        streams: {
            typescript: [16], // streams operation (line 21 in template)
            javascript: [14], // streams operation (line 57 in template)
            python: [15] // context.streams operation (line 40 in template)
        },
        logger: {
            typescript: [17], // logger call (line 22 in template)
            javascript: [15], // logger call (line 58 in template)
            python: [16] // logger call (line 41 in template)
        },
        emit: {
            typescript: [8, 18], // emit in config and handler (lines 13, 23 in template)
            javascript: [6, 16], // emit in config and handler (lines 49, 59 in template)
            python: [6, 17] // emit in config and handler (lines 31, 42 in template)
        }
    },
    'event-streams': {
        trigger: {
            typescript: [5,6], // Config object (66-72 in template)
            javascript: [3,4], // Config object (99-105 in template)
            python: [3,4] // Config object (82-88 in template)
        },
        handler: {
            typescript: [11, 12, 13, 14, 15, 16, 17, 18], // Handler signature and body (74-81 in template)
            javascript: [9, 10, 11, 12, 13, 14, 15, 16], // Handler signature and body (107-114 in template)
            python: [9, 10, 11, 12, 13, 14, 15, 16, 17] // Handler signature and body (90-98 in template)
        },
        state: {
            typescript: [14], // state operations (line 77 in template)
            javascript: [12], // state operations (line 110 in template)
            python: [14] // state operations (line 95 in template)
        },
        logger: {
            typescript: [16], // logger call (line 79 in template)
            javascript: [14], // logger call (line 112 in template)
            python: [16] // logger call (line 97 in template)
        },
        emit: {
            typescript: [7, 17], // emit in config and handler (lines 70, 80 in template)
            javascript: [5, 15], // emit in config and handler (lines 103, 113 in template)
            python: [5, 17] // emit in config and handler (lines 86, 98 in template)
        },
        streams: {
            typescript: [15], // streams operation (line 78 in template)
            javascript: [13], // streams operation (line 111 in template)
            python: [15] // streams operation (line 96 in template)
        }
    },
    'cron-streams': {
        trigger: {
            typescript: [5, 6], // Config object (119-125 in template)
            javascript: [3, 4], // Config object (150-156 in template)
            python: [3, 4] // Config object (135-141 in template)
        },
        handler: {
            typescript: [11, 12, 13, 14, 15, 16, 17, 18], // Handler signature and body (127-134 in template)
            javascript: [9, 10, 11, 12, 13, 14, 15, 16], // Handler signature and body (158-165 in template)
            python: [9, 10, 11, 12, 13, 14, 15] // Handler signature and body (143-149 in template)
        },
        state: {
            typescript: [14], // state operations (lines 128, 130 in template)
            javascript: [12], // state operations (lines 159, 161 in template)
            python: [12] // state operations (lines 144, 146 in template)
        },
        logger: {
            typescript: [16], // logger call (line 132 in template)
            javascript: [14], // logger call (line 163 in template)
            python: [14] // logger call (line 148 in template)
        },
        emit: {
            typescript: [7, 17], // emit in config and handler (lines 123, 133 in template)
            javascript: [5, 15], // emit in config and handler (lines 154, 164 in template)
            python: [5, 15] // emit in config and handler (lines 139, 149 in template)
        },
        streams: {
            typescript: [15], // streams operation (line 131 in template)
            javascript: [13], // streams operation (line 162 in template)
            python: [13] // streams operation (line 147 in template)
        }
    }
};
