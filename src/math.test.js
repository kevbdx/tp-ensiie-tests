const Util = require("./math");
test("Test factoriel de 0 => 1", () => {
  expect(Util.factorial(0)).toBe(1);
});

test("Test factoriel de 2 => 2", () => {
  expect(Util.factorial(3)).toBe(6);
});

test("Test factoriel de 3 => 6", () => {
  expect(Util.factorial(3)).toBe(6);
});

test("Test factoriel de 3000", () => {
  expect(() => {
    Util.factorial(3000);
  }).toThrow();
});

test("Test factoriel -10", () => {
  expect(() => {
    Util.factorial(-10);
  }).toThrow(/negative/);
});

/*
 * isPrime retourne true si le paramètre est un nombre premier, false sinon
 */
describe("isPrime", function() {
  test("Test prime de 1 => false", () => {
    expect(Util.isPrime(1)).toBe(false);
  });
  test("Test prime de 0 => false", () => {
    expect(Util.isPrime(0)).toBe(false);
  });
  test("Test prime < 0 => throw exception", () => {
    expect(() => {
      Util.isPrime(-10);
    }).toThrow("Unable to compute prime for n < 0");
  });

  test.each([
    [2, true],
    [5, true],
    [17, true],
    [18, false],
    [53, true],
    [55, false]
  ])("isPrime %i equals to %i", (n, expected) => {
    expect(Util.isPrime(n)).toBe(expected);
  });
});

/*
 * sumPrime retourne la somme des nombres premiers entre 0 et n (paramètre)
 */
describe("sumPrime", function() {
  test("Test si une chaine de caractères est traitée => throw exception", () => {
    expect(Util.sumPrime(0)).toBe(0);
  });
  test("Test si 0 est un nombre premier => false", () => {
    expect(Util.sumPrime(0)).toBe(0);
  });
  test("Test si 1 est un nombre premier => false", () => {
    expect(Util.sumPrime(1)).toBe(0);
  });
  test("Test si un nombre inférieur strict à 0 est premier => throw exception", () => {
    expect(() => {
      Util.sumPrime(-3);
    }).toThrow("Unable to compute sumPrime for n < 0");
  });
  test.each([[2, 2], [5, 10], [8, 17], [6, 10]])(
    "sumPrime %i equals to %i",
    (n, expected) => {
      expect(Util.sumPrime(n)).toBe(expected);
    }
  );
});
