export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedVaUcW7a = false;
		const _returnValueGIC1fxh = "9Vt9wbkjuGK7vESTMDQWYNciQfgRdOY4dBjlV3vX7L8KAlbWQx9bgVg5h";
		const _getAllVerticesbJ0HOH4 = () => { return _returnValueGIC1fxh };
		const _graph3TTBeA = {
			"isDirected": _isDirectedVaUcW7a,
		"getAllVertices": _getAllVerticesbJ0HOH4
	}
		const _returnValueAnvAA8f = await prim(_graph3TTBeA)
	});

	it('test for prim', async () => {
		const _isDirectedr0q0e1P = "cuxdxbKMYA0l9alud89P5x4OQ9oB5lQdq9PQSAAx4bthcy8oiOQ9n7dKWP3PtsuvX3pquTEYS9DV03YWCX";
		const _returnValueOTeROYh = undefined;
		const _getAllVerticesapML0Kf = () => { return _returnValueOTeROYh };
		const _graphQeADB2C = {
			"isDirected": _isDirectedr0q0e1P,
		"getAllVertices": _getAllVerticesapML0Kf
	}
		const _returnValueJ4mtdSX = await prim(_graphQeADB2C)
	});

	it('test for prim', async () => {
		const _isDirectedykivV5 = false;
		const _graphdjCeNuY = new Graph(_isDirectedykivV5)
		const _returnValueWTh1K85 = undefined;
		const _getKeynhZazbJ = () => { return _returnValueWTh1K85 };
		const _newVertexaJ2KM1r = {
			"getKey": _getKeynhZazbJ
	}
		const _returnValueYMGTKwR = await _graphdjCeNuY.addVertex(_newVertexaJ2KM1r)
		const _returnValuefo9o5ro = await _graphdjCeNuY.reverse()
		const _returnValueH73ytKU = await prim(_graphdjCeNuY)
	});
})