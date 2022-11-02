export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectdk8ZQ8U = undefined;
		const _lengthK34Oqgs = 0.12864935795085408;
		const _pathqrHGtCz = {
			"length": _lengthK34Oqgs
	}
		const _defaultValueUxyoUYF = 3.251319742922254;
		const _returnValueHj5BQ9g = await result(_objectdk8ZQ8U, _pathqrHGtCz, _defaultValueUxyoUYF)
	});

	it('test for result', async () => {
		const _objectgePjHb = undefined;
		const _pathPuUSxs = "s426Ba64rne5VhgIsKDs9DBy18FJYkPToL9RvX5CS6zbLGaRiG5FgYWb";
		const _defaultValueiJa9hfO = {
		
	}
		const _returnValueCOr9c3a = await result(_objectgePjHb, _pathPuUSxs, _defaultValueiJa9hfO)
	});

	it('test for result', async () => {
		const _objectr9HXn2 = undefined;
		const _pathyoVcobJ = []
		const _defaultValuefhijbTO = {
		
	}
		const _returnValueYQvbd5 = await result(_objectr9HXn2, _pathyoVcobJ, _defaultValuefhijbTO)
	});

	it('test for result', async () => {
		const _objectBEI3Eqd = undefined;
		const _arrayValueSh71wmq = 1.038046129238472;
		const _arrayValueFyhLnfH = 3.2463947756245286;
		const _arrayValuequx1sbr = null;
		const _pathK65EYAu = [_arrayValueSh71wmq, _arrayValueFyhLnfH, _arrayValuequx1sbr]
		const _arrayValueaMw0yOK = -7.372162715336433;
		const _arrayValueRDPRhzJ = -7.908208895541964;
		const _returnValuemqw0bAS = [_arrayValueaMw0yOK, _arrayValueRDPRhzJ]
		const _defaultValueQGHB9VB = () => { return _returnValuemqw0bAS };
		const _returnValuewIb6Y4b = await result(_objectBEI3Eqd, _pathK65EYAu, _defaultValueQGHB9VB)
	});
})