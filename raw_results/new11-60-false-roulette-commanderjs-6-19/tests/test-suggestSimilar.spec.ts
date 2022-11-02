export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _worddegKgPP = "i8I89TnpSzSeD1UAqIJocbYSbKysxetYqdBZcp1vmu4sskGl3v5S8lwnzZTKzS1p60H9hOTkmwvUT";
		const _lengthincNf7w = null;
		const _returnValueEDu4GU = "wnetsigbRooMsuzmZFqkiDjy6PFTiRKz5Y";
		const _mapuFQn5jf = () => { return _returnValueEDu4GU };
		const _returnValueo5luUZW = 3.667499632078231;
		const _forEachfdC6DS4 = () => { return _returnValueo5luUZW };
		const _candidatestbyAxrp = {
			"length": _lengthincNf7w,
		"map": _mapuFQn5jf,
		"forEach": _forEachfdC6DS4
	}
		const _returnValueboBkqpP = await suggestSimilar(_worddegKgPP, _candidatestbyAxrp)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueDjGsiOJ = "8YD4ONbm6eDT3J7vMuhUySt1a3djpNw833nygmRGPsCw7iBRHq5FfuM";
		const _wordheCZEBQ = () => { return _returnValueDjGsiOJ };
		const _candidatesEYBBmh = []
		const _returnValueeY9WdOP = await suggestSimilar(_wordheCZEBQ, _candidatesEYBBmh)
	});

	it('test for suggestSimilar', async () => {
		const _wordiYOXPWN = "7V5zFKWd28lI8V52kg2HNj3UqHLg7MkiyLcuUYJsLyp2w6IHnkMLbCuUvaBfHm7osULei1WQPKoIHp";
		const _arrayValueATYu6Q = "KFEdW";
		const _arrayValueSK7kYdY = undefined;
		const _arrayValueJ92n1KC = [_arrayValueATYu6Q, _arrayValueSK7kYdY]
		const _arrayValuesgKHYrv = "byACDBN7";
		const _candidatesf6ltSOC = [_arrayValueJ92n1KC, _arrayValuesgKHYrv]
		const _returnValueY9sNncu = await suggestSimilar(_wordiYOXPWN, _candidatesf6ltSOC)
	});

	it('test for suggestSimilar', async () => {
		const _wordgag4Ch1 = "8vAjZSRhnZyxSH2MEWGrLOrOWxmx8Ql";
		const _arrayValueNt8TLgI = true;
		const _candidatesHFQn4G = [_arrayValueNt8TLgI]
		const _returnValuebrm7bQB = await suggestSimilar(_wordgag4Ch1, _candidatesHFQn4G)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuekUDuUqJ = true;
		const _startsWithGZelqAQ = () => { return _returnValuekUDuUqJ };
		const _returnValuemMOkapO = 3.4422180885990485;
		const _sliceRukfcZh = () => { return _returnValuemMOkapO };
		const _lengthRAsAXZW = -9.750724681837056;
		const _wordAokvmU = {
			"startsWith": _startsWithGZelqAQ,
		"slice": _sliceRukfcZh,
		"length": _lengthRAsAXZW
	}
		const _arrayValuel4BFvs = 0.9401273039990805;
		const _candidatest8xnJgb = [_arrayValuel4BFvs]
		const _returnValueBEtyN3N = await suggestSimilar(_wordAokvmU, _candidatest8xnJgb)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueFiMECaL = "YlaVOpm75dO2cURtsYgK2rSZ2iIpvBl";
		const _startsWithMNlGNkT = () => { return _returnValueFiMECaL };
		const _returnValueIFYlAtg = 6.99262557977422;
		const _sliceTmdFLMV = () => { return _returnValueIFYlAtg };
		const _lengthydUJMGp = -9.656274588638267;
		const _wordS61AHza = {
			"startsWith": _startsWithMNlGNkT,
		"slice": _sliceTmdFLMV,
		"length": _lengthydUJMGp
	}
		const _candidatestcJXJmN = "bUXy2VK6QyQqZzouNpD7KHqlD90QMQTUpCXl7W84CM7W43Nl7ENcEF4zRmRh3VF6x2g";
		const _returnValueFzhqWH4 = await suggestSimilar(_wordS61AHza, _candidatestcJXJmN)
	});

	it('test for suggestSimilar', async () => {
		const _wordTTRouk0 = "4FQ0mFkFHJDu4H6mv1cEVH02HJxeD1SXzfgYwuzDjs8cV32dzWBH";
		const _arrayValueRvbGNO3 = "ZaPDAYW2tArtdcwLbH8lnyERR7YspM8gshWaHlsN9LMZjkAXzaF";
		const _arrayValueEHBUJQT = undefined;
		const _candidates6LqjM2 = [_arrayValueRvbGNO3, _arrayValueEHBUJQT]
		const _returnValuecEAYcrP = await suggestSimilar(_wordTTRouk0, _candidates6LqjM2)
	});
})