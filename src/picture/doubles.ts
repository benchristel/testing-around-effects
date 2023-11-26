const replacements: [any, any, any][] = [];

export const Doubles = {
  replace<O extends Object, P extends keyof O>(
    object: O,
    property: P,
    double: O[P],
  ) {
    replacements.push([object, property, object[property]]);
    object[property] = double;
  },

  reset() {
    replacements.forEach(([object, property, oldValue]) => {
      object[property] = oldValue;
    });
    replacements.length = 0; // empty the array
  },
};
