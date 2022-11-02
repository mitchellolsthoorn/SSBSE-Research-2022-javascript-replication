export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valZytCs9 = "KJoz83M9hHCxOmfPy3kQBQt2uoSby4Lxg3cm5XL8Xt7kwWDs6CeHfrOC6HnSjG0hoiM3";
		const _returnValueA3R3OgR = await compileQueryParser(_valZytCs9)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuehIxfUT6 = {
		
	}
		const _valMhvhqsB = () => { return _returnValuehIxfUT6 };
		const _returnValueCzbG8ik = await compileQueryParser(_valMhvhqsB)
	});
})