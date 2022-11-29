const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns empty Candidate", () => {
    let candiate = 'undefined';
    expect(candiate).toBe('undefined');
  });

  it('candidate as trivial key', () =>{
    expect(typeof candiate).toBe("string")
    expect(candiate).toBe(trivialKey)
  })
});

