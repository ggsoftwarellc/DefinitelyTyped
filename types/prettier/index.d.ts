// Type definitions for prettier 1.5
// Project: https://github.com/prettier/prettier
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { File } from 'babel-types';

export type AST = File;

export type BuiltInParser = (text: string, options?: any) => AST;
export type BuiltInParserName = 'babylon' | 'flow' | 'typescript' | 'postcss' | 'json' | 'graphql';

export type CustomParser = (text: string, parsers: Record<BuiltInParserName, BuiltInParser>, options: Options) => AST;

export interface Options {
    /**
     * Specify the line length that the printer will wrap on.
     */
    printWidth?: number;
    /**
     * Specify the number of spaces per indentation-level.
     */
    tabWidth?: number;
    /**
     * Indent lines with tabs instead of spaces
     */
    useTabs?: boolean;
    /**
     * Print semicolons at the ends of statements.
     */
    semi?: boolean;
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote?: boolean;
    /**
     * Print trailing commas wherever possible.
     */
    trailingComma?: 'none' | 'es5' | 'all';
    /**
     * Print spaces between brackets in object literals.
     */
    bracketSpacing?: boolean;
    /**
     * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
     */
    jsxBracketSameLine?: boolean;
    /**
     * Format only a segment of a file.
     */
    rangeStart?: number;
    /**
     * Format only a segment of a file.
     */
    rangeEnd?: number;
    /**
     * Specify which parser to use.
     */
    parser?: BuiltInParserName | CustomParser;
    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    filepath?: string;
}

export interface CursorOptions extends Options {
    /**
     * Specify where the cursor is.
     */
    cursorOffset: number;
    rangeStart?: never;
    rangeEnd?: never;
}

export interface CursorResult {
    formatted: string;
    cursorOffset: number;
}

/**
 * `format` is used to format text using Prettier. [Options](https://github.com/prettier/prettier#options) may be provided to override the defaults.
 */
export function format(source: string, options?: Options): string;

/**
 * `check` checks to see if the file has been formatted with Prettier given those options and returns a `Boolean`.
 * This is similar to the `--list-different` parameter in the CLI and is useful for running Prettier in CI scenarios.
 */
export function check(source: string, options?: Options): boolean;

/**
 * `formatWithCursor` both formats the code, and translates a cursor position from unformatted code to formatted code.
 * This is useful for editor integrations, to prevent the cursor from moving when code is formatted.
 *
 * The `cursorOffset` option should be provided, to specify where the cursor is. This option cannot be used with `rangeStart` and `rangeEnd`.
 */
export function formatWithCursor(source: string, options: CursorOptions): CursorResult;

/**
 * `version` field in `package.json`
 */
export const version: string;
