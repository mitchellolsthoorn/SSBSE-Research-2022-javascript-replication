export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValueczrt3Lz = "ADEMoBGULdwiuTCl";
		const _graphw8wvgaJ = () => { return _returnValueczrt3Lz };
		const _returnValueZsP3BEl = await kruskal(_graphw8wvgaJ)
	});
})