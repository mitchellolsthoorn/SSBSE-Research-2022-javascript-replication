export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graph3iUKqU = "tP2YxOpywfTTQrX557TmulNdkcYiguWDKHqdeCWeEm";
		const _returnValueO92vrvV = await kruskal(_graph3iUKqU)
	});
})