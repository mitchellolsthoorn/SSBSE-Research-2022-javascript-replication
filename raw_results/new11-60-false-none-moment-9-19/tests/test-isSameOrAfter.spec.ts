export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputKfSOdJy = "6nd19R3GOcYfvKXtqHoCE4x";
		const _unitsyqG6FYm = "kWY8KQaMWtjHrpdRI4xOlG1fmJfkcwK5r2zv2FEjMxKIHJbqThwmYWPMejj4nubzTLs80zF8FqJAusLccWqASFt";
		const _returnValueprqIdMe = await isSameOrAfter(_inputKfSOdJy, _unitsyqG6FYm)
	});
})