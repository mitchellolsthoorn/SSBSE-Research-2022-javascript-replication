export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthSKT1dkr = 3.718081207043511;
		const _typesg4Y3uuk = {
			"length": _lengthSKT1dkr
	}
		const _returnValuebmc7nIP = await normalizeTypes(_typesg4Y3uuk)
	});

	it('test for normalizeTypes', async () => {
		const _lengthbxjZHX = -0.4795375816090406;
		const _typesHt3LNsF = {
			"length": _lengthbxjZHX
	}
		const _returnValueBONphy9 = await normalizeTypes(_typesHt3LNsF)
	});

	it('test for normalizeTypes', async () => {
		const _typesrwRqPXc = "FeFDJYrAM1O0gfT8nCsFhre8CveDJOZ6vX7nkjZotUoXmnW8v6HKjVuqj2yPDpdCTWLB4DYzbrdDj1YM3QgMJR38H3doP";
		const _returnValuebEPycWq = await normalizeTypes(_typesrwRqPXc)
	});
})