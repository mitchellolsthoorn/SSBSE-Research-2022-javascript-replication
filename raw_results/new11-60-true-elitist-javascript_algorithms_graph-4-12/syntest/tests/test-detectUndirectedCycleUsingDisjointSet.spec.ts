export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueSjy91kG = false;
		const _arrayValue9tfbnF = undefined;
		const _arrayValueOVDVKZ5 = [_arrayValue9tfbnF]
		const _arrayValuejEguihZ = undefined;
		const _arrayValuePdwjj2m = "86TMsfpKF3yVYc5SvvnkodH7fWJtay3AEH6efFO834QaOeiOMBnFgdbgpCxjzL3ir263l7DwdBluLKuwginiorAaYPqU9Bbbuy";
		const _arrayValueZFxwdk8 = "WGoGZ7LiF43yzNA806fTNWur0MMcG1y3nL9o9fJOEHgW7HuvX3AU";
		const _arrayValueqrUfdiF = [_arrayValueOVDVKZ5, _arrayValuejEguihZ, _arrayValuePdwjj2m, _arrayValueZFxwdk8]
		const _returnValueMWNJFKl = [_arrayValueSjy91kG, _arrayValueqrUfdiF]
		const _getAllVerticesw4rVuci = () => { return _returnValueMWNJFKl };
		const _arrayValuePbH1yEU = null;
		const _returnValueYfTXKNf = [_arrayValuePbH1yEU]
		const _arrayValueMp8yzv = () => { return _returnValueYfTXKNf };
		const _arrayValueswcI83j = undefined;
		const _arrayValued7s0irP = [_arrayValueswcI83j]
		const _returnValueZtSnLa8 = [_arrayValueMp8yzv, _arrayValued7s0irP]
		const _getAllEdgesJpQi55O = () => { return _returnValueZtSnLa8 };
		const _graphFk6VVMH = {
			"getAllVertices": _getAllVerticesw4rVuci,
		"getAllEdges": _getAllEdgesJpQi55O
	}
		const _returnValuevBvpfy = await detectUndirectedCycleUsingDisjointSet(_graphFk6VVMH)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueshnEmVY = []
		const _getAllVerticesF4lgPeo = () => { return _returnValueshnEmVY };
		const _returnValueE53L4Ga = {
		
	}
		const _getAllEdgeskUz7seT = () => { return _returnValueE53L4Ga };
		const _graphfSRgHbO = {
			"getAllVertices": _getAllVerticesF4lgPeo,
		"getAllEdges": _getAllEdgeskUz7seT
	}
		const _returnValueWsiH4T = await detectUndirectedCycleUsingDisjointSet(_graphfSRgHbO)
	});
})