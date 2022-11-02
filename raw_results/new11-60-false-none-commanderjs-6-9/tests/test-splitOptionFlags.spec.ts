export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuefPJrC4e = undefined;
		const _arrayValueB9OBgJP = [_arrayValuefPJrC4e]
		const _arrayValuetyxrUq3 = {
		
	}
		const _flagsquhrT4V = [_arrayValueB9OBgJP, _arrayValuetyxrUq3]
		const _returnValueO2i1CBg = await splitOptionFlags(_flagsquhrT4V)
	});

	it('test for splitOptionFlags', async () => {
		const _flags55Wa4b = "pUhT6LD1jlxK4bNzWvaY8Qlpduz6HVubBWdC5HqBn4dTGil23OGHDJn7u2bMpnQqWB";
		const _returnValuemo1RoLN = await splitOptionFlags(_flags55Wa4b)
	});
})