export {}
import {format} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('format', () => {
	it('test for format', async () => {
		const _inputString7914QW = "So5tSP8yH6qylAWO8fA1BqGMy8FBHrS9ALCNPDGEfrB9hxqNfbcMtuAM28toyRnMGABAxegZ5MfLkDHovaCX8cA";
		const _returnValueTkh9IMq = await format(_inputString7914QW)
	});

	it('test for format', async () => {
		const _inputStringS1s2rv = null;
		const _returnValueweXZ494 = await format(_inputStringS1s2rv)
	});
})