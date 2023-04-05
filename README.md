# ULID CLI

A simple CLI to output a [ULID](https://github.com/ulid/spec/blob/master/README.md) (Universally-Unique Lexicographically-Sortable Identifier). This simply wraps [ulidx](https://github.com/perry-mitchell/ulidx) in a CLI.

## Usage

Output a ULID, e.g. `01GX9C573DTWKWB10HTFBN6RVF`

```sh
ulid
```

Output the time portion of a ULID, e.g. `01GX9C573D`, i.e. the Unix timestamp in milliseconds encoded in Crockford Base32.

```sh
ulid -t
```

It does not support any other options.
