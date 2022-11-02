export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuek4Db7I2 = -1.0110490383581467;
		const _getAllEdgesM5alN7f = () => { return _returnValuek4Db7I2 };
		const _returnValuepjuGgaC = undefined;
		const _getAllVerticesd9wKdI = () => { return _returnValuepjuGgaC };
		const _returnValueA9HWMmd = "NuXW0Prgiv4XiuqO8OfiNW3EynFBVyxWc8RH30ONzXwDvb81OVqXClLRyFradUciKM5gmaoIl9DErwtlKzhqpVxIHOxEV";
		const _deleteEdgeoV9Lpaw = () => { return _returnValueA9HWMmd };
		const _graphYzHkHP = {
			"getAllEdges": _getAllEdgesM5alN7f,
		"getAllVertices": _getAllVerticesd9wKdI,
		"deleteEdge": _deleteEdgeoV9Lpaw
	}
		const _returnValueGpXofID = await eulerianPath(_graphYzHkHP)
	});

	it('test for eulerianPath', async () => {
		const _returnValueird0OYi = []
		const _getAllEdgessdzw9Bu = () => { return _returnValueird0OYi };
		const _returnValuelu67G0O = []
		const _getAllVerticest1zqO4G = () => { return _returnValuelu67G0O };
		const _deleteEdgejYj0KOR = null;
		const _graphhYdqZnY = {
			"getAllEdges": _getAllEdgessdzw9Bu,
		"getAllVertices": _getAllVerticest1zqO4G,
		"deleteEdge": _deleteEdgejYj0KOR
	}
		const _returnValueyTFPKa7 = await eulerianPath(_graphhYdqZnY)
	});
})