import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/library/**/*.spec.ts'],
    // Specs run in a different order each time, so one cannot come to depend on another.
    sequence: { shuffle: true },
    // Type-checks the specs as part of the run. The plain data types have no
    // behaviour, so their specs assert types with expectTypeOf and @ts-expect-error.
    typecheck: {
      enabled: true,
      include: ['src/library/**/*.spec.ts'],
      tsconfig: './tsconfig.json',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      include: ['src/index.ts', 'src/library/**/*.ts'],
      exclude: ['src/library/**/*.spec.ts'],
    },
  },
});
