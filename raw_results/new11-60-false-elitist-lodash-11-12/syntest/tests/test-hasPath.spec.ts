export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthfA65uHb = []
		const _objectuKuG75I = {
			"length": _lengthfA65uHb
	}
		const _pathS9kC04c = {
		
	}
		const _returnValueA29N1ke = await hasPath(_objectuKuG75I, _pathS9kC04c)
	});

	it('test for hasPath', async () => {
		const _lengthy6EEZv = "xXmUCiSNQc4Yzxjgx8eOI1WEqIzGK2sZgoyUN9d1q";
		const _objectyyUlUnl = {
			"length": _lengthy6EEZv
	}
		const _pathKoGCQnn = "n02JG3trfpCYmLAISaL98VNzKA0KXHSMnPRHCN8WHO3E16kg382QChVxJDnMr";
		const _returnValuebBWQ8iJ = await hasPath(_objectyyUlUnl, _pathKoGCQnn)
	});

	it('test for hasPath', async () => {
		const _objectHFIszR = undefined;
		const _pathx3Gz9N2 = undefined;
		const _returnValueBIs5brz = await hasPath(_objectHFIszR, _pathx3Gz9N2)
	});
})