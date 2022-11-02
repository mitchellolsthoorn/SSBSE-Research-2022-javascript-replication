export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphJA4gLHn = "Wx8Z";
		const _returnValueuMA5TvI = await floydWarshall(_graphJA4gLHn)
	});

	it('test for floydWarshall', async () => {
		const _returnValueG7jBqIL = "Oaw5DuhTyzV8zqRBuxhgOq37okOGqiDeh9MpSw7pBbS1ISgHoeredB8xW6iAvaKTA8nj0DJnmqz0zAX9xfqR6BBi5s";
		const _returnValueBxgKHt = () => { return _returnValueG7jBqIL };
		const _getAllVerticesAcNjtzR = () => { return _returnValueBxgKHt };
		const _arrayValue5iJ4Ro = false;
		const _returnValueg0u3qmc = [_arrayValue5iJ4Ro]
		const _findEdgenV9ONjS = () => { return _returnValueg0u3qmc };
		const _graphue6BbBy = {
			"getAllVertices": _getAllVerticesAcNjtzR,
		"findEdge": _findEdgenV9ONjS
	}
		const _returnValueEZpJtau = await floydWarshall(_graphue6BbBy)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueoPTKcTm = {
		
	}
		const _arrayValueOlK6fbu = undefined;
		const _arrayValueeGw4tQ = "MeGuxVVL2sbBuxKXNruIgMrT3";
		const _returnValuecuve47J = [_arrayValueoPTKcTm, _arrayValueOlK6fbu, _arrayValueeGw4tQ]
		const _getAllVerticesbaMd3zd = () => { return _returnValuecuve47J };
		const _returnValueLbCeQ7x = null;
		const _findEdgeLfes9Uy = () => { return _returnValueLbCeQ7x };
		const _graphSh1ZttJ = {
			"getAllVertices": _getAllVerticesbaMd3zd,
		"findEdge": _findEdgeLfes9Uy
	}
		const _returnValueLxBgdV5 = await floydWarshall(_graphSh1ZttJ)
	});
})