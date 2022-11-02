export {}
import split from "../../.syntest/instrumented/benchmark/top10npm/lodash/split.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('split', () => {
	it('test for split', async () => {
		const _stringXwFRDW5 = "GWjco857o6emwkxo85UZNFq9sLQi7CMO8Fe4hu2byt4xD1KqcUfTKsWXVvcRnJpH1o1en1rcoC";
		const _separatorbf6WgA0 = null;
		const _limitFrGnN5o = {
		
	}
		const _returnValuexlubC74 = await split(_stringXwFRDW5, _separatorbf6WgA0, _limitFrGnN5o)
	});

	it('test for split', async () => {
		const _stringeXvjmO9 = "5WrBacOX1WR5Euv6DzRtt9A1bAvXUmMLS3cnycIVbvMTRGg";
		const _separatorPhLGHy = false;
		const _limitee4fCUp = true;
		const _returnValueAgCl1FS = await split(_stringeXvjmO9, _separatorPhLGHy, _limitee4fCUp)
	});

	it('test for split', async () => {
		const _stringf5KD3AF = {
		
	}
		const _separatorqYtBpMz = null;
		const _limitLQ4IbT0 = 6.290684029309542;
		const _returnValuetsqHjyt = await split(_stringf5KD3AF, _separatorqYtBpMz, _limitLQ4IbT0)
	});

	it('test for split', async () => {
		const _stringEkNjFM = "6c9uq2pT3J";
		const _arrayValuecURyAl4 = undefined;
		const _separatorlFTWBMJ = [_arrayValuecURyAl4]
		const _limitxukz9ze = undefined;
		const _returnValueqo9PE9T = await split(_stringEkNjFM, _separatorlFTWBMJ, _limitxukz9ze)
	});
})