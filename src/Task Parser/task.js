const dict = {
    'd': { status: 'Dev', value: 0.5 },
    'D': { status: 'Dev', value: 1.0 },
    'q': { status: 'QA', value: 0.5 },
    'Q': { status: 'QA', value: 1.0 },
    "b": { status: "Blocked", value: 0.5 },
}
const parse = c => dict[c] || { status: "Unknown", value: 0 };
const translate = (input) => {
    const result = {}
    input.split("").map((char) => {
        const { status, value } = parse(char);
        if (result[status]) result[status] += value;
        else result[status] = value;
    }, 0);
    return result;
};



module.exports = translate;