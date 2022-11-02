export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValuempo0brx = undefined;
		const _graphU8pmHNa = () => { return _returnValuempo0brx };
		const _returnValueNozXEP5 = await kruskal(_graphU8pmHNa)
	});

	it('test for kruskal', async () => {
		const _isDirectedZOT8zQB = true;
		const _graphE9iKAlg = new Graph(_isDirectedZOT8zQB)
		const _returnValueQVseC9t = await _graphE9iKAlg.getVerticesIndices()
		const _returnValueMvumhY = await kruskal(_graphE9iKAlg)
	});

	it('test for kruskal', async () => {
		const _isDirectedsxizmnZ = false;
		const _graphJNDfQOo = new Graph(_isDirectedsxizmnZ)
		const _returnValueBwGWZIC = await _graphJNDfQOo.toString()
		const _returnValueuoLI7hs = await _graphJNDfQOo.getVerticesIndices()
		const _returnValuewG6I8U6 = await kruskal(_graphJNDfQOo)
	});
})