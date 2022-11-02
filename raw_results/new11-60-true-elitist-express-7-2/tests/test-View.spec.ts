export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameW9NmDy = 9.623762931632108;
		const _options5r3rlL = null;
		const _View5DTHT3 = new View(_nameW9NmDy, _options5r3rlL)
		const _nameDOorfbk = undefined;
		const _returnValueK4QIQGL = await _View5DTHT3.lookup(_nameDOorfbk)
		const _returnValuen0APhE = -8.840620754829779;
		const _arrayValueEgaTvH4 = () => { return _returnValuen0APhE };
		const _nameOZZMIBx = [_arrayValueEgaTvH4]
		const _returnValuegDGexiY = await _View5DTHT3.lookup(_nameOZZMIBx)
		const _dirpiIRwng = true;
		const _arrayValueJEtZXAz = 9.561884709708178;
		const _arrayValueAJso5Bw = false;
		const _arrayValuenBaxhlP = [_arrayValueJEtZXAz, _arrayValueAJso5Bw]
		const _fileNB65U63 = [_arrayValuenBaxhlP]
		const _returnValueGXhl03y = await _View5DTHT3.resolve(_dirpiIRwng, _fileNB65U63)
	});

	it('test for View', async () => {
		const _namegQ8j3Sy = "SMzAaPeWTd56PfknRlh3jIxoiBvh5TPz7codZsittAf6VruahdqufV6744zg3yt9xxld31ScS35xfZPpIqOxKJfMnerZ";
		const _returnValuefhRiWCW = "fzaQvqfikMfSdLcLT27bNFyorL6pzkPy6XgvGtnX3igE9ytHIPVaL38yxivo";
		const _optionsPlMszSD = () => { return _returnValuefhRiWCW };
		const _View65DCQh = new View(_namegQ8j3Sy, _optionsPlMszSD)
		const _arrayValueQUbDksS = "g4Nfzn7tgnGFWuUSJe72VddQWXxasq1ncFaeg8nT2474RH9I8z87CtVnzhcIFgMdAu7uJku8Wb9MBte";
		const _nameBTMYAYF = [_arrayValueQUbDksS]
		const _returnValueWhWWaSA = await _View65DCQh.lookup(_nameBTMYAYF)
	});
})