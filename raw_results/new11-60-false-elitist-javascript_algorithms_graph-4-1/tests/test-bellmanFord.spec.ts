export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueSnoCjY5 = null;
		const _getAllVerticespCcuu05 = () => { return _returnValueSnoCjY5 };
		const _returnValueA37eeD1 = null;
		const _getVertexByKeyyfeZNwl = () => { return _returnValueA37eeD1 };
		const _returnValueil7jnAu = undefined;
		const _returnValueVbKMAWV = () => { return _returnValueil7jnAu };
		const _getNeighborst9WzSkj = () => { return _returnValueVbKMAWV };
		const _findEdgeCKxho0c = undefined;
		const _graphbYEE8Sm = {
			"getAllVertices": _getAllVerticespCcuu05,
		"getVertexByKey": _getVertexByKeyyfeZNwl,
		"getNeighbors": _getNeighborst9WzSkj,
		"findEdge": _findEdgeCKxho0c
	}
		const _returnValuet5kb114 = null;
		const _getKeynnWS05U = () => { return _returnValuet5kb114 };
		const _startVertexfNJqWA8 = {
			"getKey": _getKeynnWS05U
	}
		const _returnValueSYIcrx2 = await bellmanFord(_graphbYEE8Sm, _startVertexfNJqWA8)
	});

	it('test for bellmanFord', async () => {
		const _returnValueX6qaHbB = []
		const _getAllVerticesyz2hzvr = () => { return _returnValueX6qaHbB };
		const _returnValueCdNQStY = false;
		const _getVertexByKeyhXv37s = () => { return _returnValueCdNQStY };
		const _getNeighborsnAbmBZV = "4WFUmxB0FUvlHEQbydSFp8YeGHvxVL9KmbDwx9JhuouupNeVzfWtfo";
		const _returnValueiMzFIG = true;
		const _findEdgeGxj9cGz = () => { return _returnValueiMzFIG };
		const _graphCJuhWtg = {
			"getAllVertices": _getAllVerticesyz2hzvr,
		"getVertexByKey": _getVertexByKeyhXv37s,
		"getNeighbors": _getNeighborsnAbmBZV,
		"findEdge": _findEdgeGxj9cGz
	}
		const _returnValueyqll2jr = true;
		const _getKey15ILRY = () => { return _returnValueyqll2jr };
		const _startVertexQiXXObM = {
			"getKey": _getKey15ILRY
	}
		const _returnValueSsNIWFF = await bellmanFord(_graphCJuhWtg, _startVertexQiXXObM)
	});
})