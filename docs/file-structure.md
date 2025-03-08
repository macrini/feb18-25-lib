# File Structure Documentation

## Overview
This document outlines the project's file structure conventions, particularly focusing on how it handles built assets, caching, and deployment. The setup is designed to support both local development and continuous deployment with partial builds.

## Directory Structure

```
├── src/                  # Source code
├── public/              # Static assets and templates
│   ├── index.html       # HTML template processed by webpack
│   └── images/          # Original, unprocessed images
├── dist/                # Committed builds for GitHub Pages
│   ├── module1/         
│   │   ├── v1-hash/     # Preserved previous build
│   │   └── v2-hash/     # Latest build
│   └── module2/
│       └── v1-hash/     
├── build/               # Local development builds (gitignored)
└── .cache/             # Build-time caching
    └── assets/         # Processed asset cache
        └── images/     # Sharp-processed images
```

## Key Directories Explained

### `dist/` Directory
- **Purpose**: Contains production builds deployed to GitHub Pages
- **Status**: Committed to git
- **Structure**: 
  - Organized by modules
  - Each module maintains version history in hash-based folders
  - New builds are added incrementally when module versions change
- **Deployment**: GitHub Actions commit new builds here
- **Rationale**: This approach supports:
  - Partial builds (only rebuild changed modules)
  - Version history preservation
  - Public accessibility via GitHub Pages
  - Incremental updates through CI/CD

### `build/` Directory
- **Purpose**: Local development builds
- **Status**: Gitignored
- **Usage**: Used during development and testing
- **Rationale**: Keeps local builds separate from production builds to avoid conflicts

### `public/` Directory
- **Purpose**: Source of truth for static assets
- **Status**: Committed to git
- **Contents**:
  - Original templates (e.g., index.html)
  - Source images and other static assets
- **Processing**: Contents are processed during build:
  - HTML files: Processed by webpack (injects necessary scripts and styles)
  - Images: Optimized by Sharp for different resolutions and formats
  - All processed files are copied to `dist/` or `build/` via webpack plugins
  - Webpack manages the entire asset pipeline and optimization process

### `.cache/` Directory
- **Purpose**: Build-time caching
- **Status**: Gitignored
- **Structure**:
  - `assets/`: Processed asset cache
    - `images/`: Sharp-processed images
- **Benefits**:
  - Improves build performance
  - Reduces unnecessary image processing
  - Clear separation of concerns

## Git Configuration

### `.gitignore`
```
/build
.cache
```

### What We Commit
- Source code (`/src`)
- Static asset sources (`/public`)
- Production builds (`/dist`)
- Configuration files

### What We Don't Commit
- Local builds (`/build`)
- Cached processed assets (`.cache`)
- Dependencies (`node_modules`)

## Module Versioning

Each module in the `dist` directory follows a versioning scheme:
- Version hashes are generated based on the module's content
- Multiple versions of the same module can coexist
- Old versions are preserved for backwards compatibility
- The module's path includes both name and version: `dist/{module-name}/{version-hash}/`

## Build Process

1. **Local Development**:
   - Builds output to `/build`
   - Uses `.cache/assets` for processed assets
   - Changes not committed to git

2. **Production Deployment**:
   - GitHub Actions process changed modules
   - Outputs to `/dist/{module}/{version-hash}`
   - Commits changes back to repository
   - Previous builds preserved for version history

## NPM Scripts

```json
{
  "scripts": {
    "build:local": "webpack --output-path build",
    "build:prod": "webpack --output-path dist",
    "clean:cache": "rm -rf .cache/assets/*",
    "clean:build": "rm -rf build/*",
    "clean:all": "rm -rf .cache/* build/* node_modules"
  }
}
```

## Rationale for This Structure

This structure solves several challenges:

1. **Partial Builds**: Only rebuilding changed modules saves CI/CD time
2. **Version History**: Keeping previous builds helps with debugging and rollbacks
3. **Local vs Production**: Clear separation prevents conflicts
4. **Build Caching**: Improves performance without cluttering git history
5. **GitHub Pages**: Direct serving of committed builds ensures reliability

## Best Practices

1. Always use appropriate npm scripts for cleaning and building
2. Don't manually modify files in `dist/`
3. Clear `.cache` if experiencing build issues
4. Document any new cache directories under `.cache/`
5. Review `dist/` changes before merging PRs

## Troubleshooting

1. **Build Cache Issues**
   - Clear `.cache/assets` if processed assets aren't updating: `npm run clean:cache`
   - For persistent issues, try a full clean: `npm run clean:all`

2. **Local vs Production Builds**
   - If local builds behave differently from production, ensure you're using the correct npm script
   - Check that your environment variables are properly set

3. **Module Version Conflicts**
   - If you see unexpected module versions in `dist/`, check that the version calculation is correct
   - Ensure your CI/CD pipeline is properly configured to handle partial builds

4. **Image Processing**
   - If images aren't being optimized, check the Sharp cache in `.cache/assets/images`
   - Verify that your image paths in `public/` are correct