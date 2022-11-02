export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthJ7tXziW = true;
		const _objectpGkXXuj = {
			"length": _lengthJ7tXziW
	}
		const _pathWy8WjXm = {
		
	}
		const _returnValueOOIXILw = await hasPath(_objectpGkXXuj, _pathWy8WjXm)
	});

	it('test for hasPath', async () => {
		const _lengthPhyTgVw = null;
		const _objecttmh1ex = {
			"length": _lengthPhyTgVw
	}
		const _path6P51rn = true;
		const _returnValuewpXgBf8 = await hasPath(_objecttmh1ex, _path6P51rn)
	});

	it('test for hasPath', async () => {
		const _objectVIrGMMU = null;
		const _pathPnum8I9 = -1.6356771832003876;
		const _returnValueMmhGLqv = await hasPath(_objectVIrGMMU, _pathPnum8I9)
	});
})