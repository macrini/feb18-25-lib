# File Hierarchy Management Problem

## Problem Statement

We need to manage a collection of Markdown files that follow a specific naming convention to represent a hierarchical structure. The files are named with a numeric prefix followed by a descriptive name, where the numeric prefix defines the file's position in a hierarchy.

## File Naming Convention

Files follow this pattern:

```
NUMBER-NAME.md
```

Where:

- `NUMBER` is an optional numeric prefix that can contain one or more integers separated by periods (e.g., `1`, `1.2`, `1.2.3`)
- `NAME` is a descriptive name for the file
- The extension is always `.md` (Markdown)

Examples of valid filenames:

```
1-Introduction.md
1.1-Overview.md
1.2-Key_Concepts.md
2-Implementation.md
2.1-Setup.md
2.1.1-Prerequisites.md
```

## Hierarchical Structure

The numeric prefix defines a hierarchical ordering:

- The first level of the hierarchy uses single numbers (`1`, `2`, `3`, etc.)
- Each subsequent level adds another number separated by a period (`1.1`, `1.2`, `2.1`, etc.)
- The hierarchy can be arbitrarily deep (`1.2.3.4.5`, etc.)

This creates a tree-like structure:

```
1-Introduction.md
├── 1.1-Overview.md
└── 1.2-Key_Concepts.md
2-Implementation.md
└── 2.1-Setup.md
    └── 2.1.1-Prerequisites.md
```

## Required Operations

We need to support the following operations while maintaining the correct hierarchical structure:

### 1. Creating Files

When creating a new file at a particular position in the hierarchy, we need to:

- Insert the file at the specified position
- If the position is already occupied, shift the existing file and all affected files
- The shift must cascade properly through the hierarchy

For example, if we already have:

```
1-Introduction.md
2-Implementation.md
2.1-Setup.md
```

And we want to insert `1.5-Examples.md`, no shifting is needed because the position is free.

But if we want to insert `2-Architecture.md`, we need to shift:

```
2-Implementation.md → 3-Implementation.md
2.1-Setup.md → 3.1-Setup.md
```

### 2. Deleting Files

When deleting a file, we need to:

- Remove the file from the filesystem
- Optionally shift the affected files to maintain continuous numbering
- Support a "no shift" mode where the position is left vacant for future use

For example, if we delete `2-Implementation.md` from:

```
1-Introduction.md
2-Implementation.md
3-Conclusion.md
```

With shift mode enabled:

```
3-Conclusion.md → 2-Conclusion.md
```

With shift mode disabled, the files remain unchanged, leaving a gap at position 2.

### 3. Moving Files

Moving a file involves:

- Relocating it to a new position in the hierarchy
- Potentially shifting files in both the source and destination positions
- Preserving the file content
- Supporting moves between different directories

## Key Constraints

1. **Minimal Disruption**: Only shift files when absolutely necessary
2. **Gap Utilization**: Use free slots in the hierarchy when available
3. **Hierarchical Integrity**: Properly handle cascading changes to child files
4. **Branch Independence**: Changes in one branch shouldn't affect unrelated branches
5. **Concurrent Levels**: Different levels of the hierarchy can use the same numbers (e.g., `1` and `1.1` can coexist)
6. **Atomic Operations**: All file operations must be atomic to avoid inconsistent states
7. **Cross-Directory Support**: Support moving files between different directories

## Edge Cases

The solution must handle various edge cases:

- Operating on files without numeric prefixes
- Dealing with inconsistent hierarchies (gaps, duplicates)
- Handling deep nested structures
- Managing files when their parent nodes don't exist as files
- Moving files across hierarchies with different structures
