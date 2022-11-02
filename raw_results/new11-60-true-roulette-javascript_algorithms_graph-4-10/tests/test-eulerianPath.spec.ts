export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueOHHcD7 = null;
		const _returnValueAIB8xhs = () => { return _returnValueOHHcD7 };
		const _graphYSBSO0g = () => { return _returnValueAIB8xhs };
		const _returnValueQAsoYkc = await eulerianPath(_graphYSBSO0g)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedhYtYZtQ = true;
		const _graphoNT7kzJ = new Graph(_isDirectedhYtYZtQ)
		const _returnValueInXR9f8 = await _graphoNT7kzJ.getWeight()
		const _returnValueKSGei9e = await _graphoNT7kzJ.getAllVertices()
		const _returnValueb2cYlFA = await _graphoNT7kzJ.getVerticesIndices()
		const _returnValueeGjkG0 = await eulerianPath(_graphoNT7kzJ)
	});
})