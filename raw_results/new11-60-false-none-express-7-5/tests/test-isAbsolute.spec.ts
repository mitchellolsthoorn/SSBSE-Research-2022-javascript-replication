export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _arrayValueZC660H = null;
		const _arrayValueDQYJbYW = undefined;
		const _arrayValueFFqWk14 = null;
		const _arrayValuegdyqCt3 = 9.310164193644383;
		const _arrayValueclrLyeK = [_arrayValueFFqWk14, _arrayValuegdyqCt3]
		const _arrayValueeG629FZ = null;
		const _arrayValueCvsmYtV = "s7Cr2DhwjsFivZzBe5rG6xwYy7TiIvXPuYJFlTWBY3Dy4b9bkaA6seiy7KW90x0266B9UIToJUFYJwgNsD0Hi";
		const _arrayValuethHDsUF = true;
		const _arrayValuekIdUlJ7 = [_arrayValueCvsmYtV, _arrayValuethHDsUF]
		const _arrayValuezcgAquj = false;
		const _arrayValueQK2qbP7 = [_arrayValueeG629FZ, _arrayValuekIdUlJ7, _arrayValuezcgAquj]
		const _arrayValuexfMrlZv = [_arrayValueDQYJbYW, _arrayValueclrLyeK, _arrayValueQK2qbP7]
		const _arrayValueSWfzzbs = false;
		const _pathJQfL3O = [_arrayValueZC660H, _arrayValuexfMrlZv, _arrayValueSWfzzbs]
		const _returnValuehlHShM1 = await isAbsolute(_pathJQfL3O)
	});
})