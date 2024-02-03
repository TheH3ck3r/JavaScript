// An orderly trail of ants is marching across the park picnic area.

// It looks something like this:

// ..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
// But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. The ants surge forward! Oh No, it's an ant stampede!!

// Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.

// The resulting carnage looks like this:

// ...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
// Can you find how many ants have died?

// Notes
// When in doubt, assume that the scattered bits are from the same ant. e.g. 2 heads and 1 body = 2 dead ants, not 3

const deadAntCount = (ants) =>
  !ants
    ? 0
    : Math.max(
        ...Object.values(
          [...ants.replace(/ant|[. $]/g, "")].reduce(
            (result, symbol) => {
              result[symbol] = (result[symbol] || 0) + 1;
              return result;
            },
            { a: 0, n: 0, t: 0 }
          )
        )
      );

// Smart solution V1:
// const deadAntCount = (ants) =>
//   (ants || "").replace(/ant|[^ant]/g, "").split``
//     .reduce((acc, ch) => (acc["ant".indexOf(ch)]++, acc), [0, 0, 0])
//     .reduce((acc, val) => Math.max(acc, val), 0);

// Smart solution V2:
// deadAntCount = function (ants) {
//   return ants
//     ? Math.max(
//         (ants.match(/a/g) || []).length,
//         (ants.match(/n/g) || []).length,
//         (ants.match(/t/g) || []).length
//       ) - (ants.match(/ant/g) || []).length
//     : 0;
// };
