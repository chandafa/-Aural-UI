#!/usr/bin/env node
"use strict";
var AuralixUI = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var __privateWrapper = (obj, member, setter, getter) => ({
    set _(value) {
      __privateSet(obj, member, value, setter);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  });

  // node_modules/commander/lib/error.js
  var require_error = __commonJS({
    "node_modules/commander/lib/error.js"(exports) {
      "use strict";
      var CommanderError2 = class extends Error {
        /**
         * Constructs the CommanderError class
         * @param {number} exitCode suggested exit code which could be used with process.exit
         * @param {string} code an id string representing the error
         * @param {string} message human-readable description of the error
         */
        constructor(exitCode, code, message) {
          super(message);
          Error.captureStackTrace(this, this.constructor);
          this.name = this.constructor.name;
          this.code = code;
          this.exitCode = exitCode;
          this.nestedError = void 0;
        }
      };
      var InvalidArgumentError2 = class extends CommanderError2 {
        /**
         * Constructs the InvalidArgumentError class
         * @param {string} [message] explanation of why argument is invalid
         */
        constructor(message) {
          super(1, "commander.invalidArgument", message);
          Error.captureStackTrace(this, this.constructor);
          this.name = this.constructor.name;
        }
      };
      exports.CommanderError = CommanderError2;
      exports.InvalidArgumentError = InvalidArgumentError2;
    }
  });

  // node_modules/commander/lib/argument.js
  var require_argument = __commonJS({
    "node_modules/commander/lib/argument.js"(exports) {
      "use strict";
      var { InvalidArgumentError: InvalidArgumentError2 } = require_error();
      var Argument2 = class {
        /**
         * Initialize a new command argument with the given name and description.
         * The default is that the argument is required, and you can explicitly
         * indicate this with <> around the name. Put [] around the name for an optional argument.
         *
         * @param {string} name
         * @param {string} [description]
         */
        constructor(name, description) {
          this.description = description || "";
          this.variadic = false;
          this.parseArg = void 0;
          this.defaultValue = void 0;
          this.defaultValueDescription = void 0;
          this.argChoices = void 0;
          switch (name[0]) {
            case "<":
              this.required = true;
              this._name = name.slice(1, -1);
              break;
            case "[":
              this.required = false;
              this._name = name.slice(1, -1);
              break;
            default:
              this.required = true;
              this._name = name;
              break;
          }
          if (this._name.endsWith("...")) {
            this.variadic = true;
            this._name = this._name.slice(0, -3);
          }
        }
        /**
         * Return argument name.
         *
         * @return {string}
         */
        name() {
          return this._name;
        }
        /**
         * @package
         */
        _collectValue(value, previous) {
          if (previous === this.defaultValue || !Array.isArray(previous)) {
            return [value];
          }
          previous.push(value);
          return previous;
        }
        /**
         * Set the default value, and optionally supply the description to be displayed in the help.
         *
         * @param {*} value
         * @param {string} [description]
         * @return {Argument}
         */
        default(value, description) {
          this.defaultValue = value;
          this.defaultValueDescription = description;
          return this;
        }
        /**
         * Set the custom handler for processing CLI command arguments into argument values.
         *
         * @param {Function} [fn]
         * @return {Argument}
         */
        argParser(fn) {
          this.parseArg = fn;
          return this;
        }
        /**
         * Only allow argument value to be one of choices.
         *
         * @param {string[]} values
         * @return {Argument}
         */
        choices(values) {
          this.argChoices = values.slice();
          this.parseArg = (arg, previous) => {
            if (!this.argChoices.includes(arg)) {
              throw new InvalidArgumentError2(
                `Allowed choices are ${this.argChoices.join(", ")}.`
              );
            }
            if (this.variadic) {
              return this._collectValue(arg, previous);
            }
            return arg;
          };
          return this;
        }
        /**
         * Make argument required.
         *
         * @returns {Argument}
         */
        argRequired() {
          this.required = true;
          return this;
        }
        /**
         * Make argument optional.
         *
         * @returns {Argument}
         */
        argOptional() {
          this.required = false;
          return this;
        }
      };
      function humanReadableArgName(arg) {
        const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");
        return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
      }
      exports.Argument = Argument2;
      exports.humanReadableArgName = humanReadableArgName;
    }
  });

  // node_modules/commander/lib/help.js
  var require_help = __commonJS({
    "node_modules/commander/lib/help.js"(exports) {
      "use strict";
      var { humanReadableArgName } = require_argument();
      var Help2 = class {
        constructor() {
          this.helpWidth = void 0;
          this.minWidthToWrap = 40;
          this.sortSubcommands = false;
          this.sortOptions = false;
          this.showGlobalOptions = false;
        }
        /**
         * prepareContext is called by Commander after applying overrides from `Command.configureHelp()`
         * and just before calling `formatHelp()`.
         *
         * Commander just uses the helpWidth and the rest is provided for optional use by more complex subclasses.
         *
         * @param {{ error?: boolean, helpWidth?: number, outputHasColors?: boolean }} contextOptions
         */
        prepareContext(contextOptions) {
          this.helpWidth = this.helpWidth ?? contextOptions.helpWidth ?? 80;
        }
        /**
         * Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
         *
         * @param {Command} cmd
         * @returns {Command[]}
         */
        visibleCommands(cmd) {
          const visibleCommands = cmd.commands.filter((cmd2) => !cmd2._hidden);
          const helpCommand = cmd._getHelpCommand();
          if (helpCommand && !helpCommand._hidden) {
            visibleCommands.push(helpCommand);
          }
          if (this.sortSubcommands) {
            visibleCommands.sort((a, b) => {
              return a.name().localeCompare(b.name());
            });
          }
          return visibleCommands;
        }
        /**
         * Compare options for sort.
         *
         * @param {Option} a
         * @param {Option} b
         * @returns {number}
         */
        compareOptions(a, b) {
          const getSortKey = (option) => {
            return option.short ? option.short.replace(/^-/, "") : option.long.replace(/^--/, "");
          };
          return getSortKey(a).localeCompare(getSortKey(b));
        }
        /**
         * Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
         *
         * @param {Command} cmd
         * @returns {Option[]}
         */
        visibleOptions(cmd) {
          const visibleOptions = cmd.options.filter((option) => !option.hidden);
          const helpOption = cmd._getHelpOption();
          if (helpOption && !helpOption.hidden) {
            const removeShort = helpOption.short && cmd._findOption(helpOption.short);
            const removeLong = helpOption.long && cmd._findOption(helpOption.long);
            if (!removeShort && !removeLong) {
              visibleOptions.push(helpOption);
            } else if (helpOption.long && !removeLong) {
              visibleOptions.push(
                cmd.createOption(helpOption.long, helpOption.description)
              );
            } else if (helpOption.short && !removeShort) {
              visibleOptions.push(
                cmd.createOption(helpOption.short, helpOption.description)
              );
            }
          }
          if (this.sortOptions) {
            visibleOptions.sort(this.compareOptions);
          }
          return visibleOptions;
        }
        /**
         * Get an array of the visible global options. (Not including help.)
         *
         * @param {Command} cmd
         * @returns {Option[]}
         */
        visibleGlobalOptions(cmd) {
          if (!this.showGlobalOptions) return [];
          const globalOptions = [];
          for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
            const visibleOptions = ancestorCmd.options.filter(
              (option) => !option.hidden
            );
            globalOptions.push(...visibleOptions);
          }
          if (this.sortOptions) {
            globalOptions.sort(this.compareOptions);
          }
          return globalOptions;
        }
        /**
         * Get an array of the arguments if any have a description.
         *
         * @param {Command} cmd
         * @returns {Argument[]}
         */
        visibleArguments(cmd) {
          if (cmd._argsDescription) {
            cmd.registeredArguments.forEach((argument) => {
              argument.description = argument.description || cmd._argsDescription[argument.name()] || "";
            });
          }
          if (cmd.registeredArguments.find((argument) => argument.description)) {
            return cmd.registeredArguments;
          }
          return [];
        }
        /**
         * Get the command term to show in the list of subcommands.
         *
         * @param {Command} cmd
         * @returns {string}
         */
        subcommandTerm(cmd) {
          const args = cmd.registeredArguments.map((arg) => humanReadableArgName(arg)).join(" ");
          return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (cmd.options.length ? " [options]" : "") + // simplistic check for non-help option
          (args ? " " + args : "");
        }
        /**
         * Get the option term to show in the list of options.
         *
         * @param {Option} option
         * @returns {string}
         */
        optionTerm(option) {
          return option.flags;
        }
        /**
         * Get the argument term to show in the list of arguments.
         *
         * @param {Argument} argument
         * @returns {string}
         */
        argumentTerm(argument) {
          return argument.name();
        }
        /**
         * Get the longest command term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        longestSubcommandTermLength(cmd, helper) {
          return helper.visibleCommands(cmd).reduce((max, command) => {
            return Math.max(
              max,
              this.displayWidth(
                helper.styleSubcommandTerm(helper.subcommandTerm(command))
              )
            );
          }, 0);
        }
        /**
         * Get the longest option term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        longestOptionTermLength(cmd, helper) {
          return helper.visibleOptions(cmd).reduce((max, option) => {
            return Math.max(
              max,
              this.displayWidth(helper.styleOptionTerm(helper.optionTerm(option)))
            );
          }, 0);
        }
        /**
         * Get the longest global option term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        longestGlobalOptionTermLength(cmd, helper) {
          return helper.visibleGlobalOptions(cmd).reduce((max, option) => {
            return Math.max(
              max,
              this.displayWidth(helper.styleOptionTerm(helper.optionTerm(option)))
            );
          }, 0);
        }
        /**
         * Get the longest argument term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        longestArgumentTermLength(cmd, helper) {
          return helper.visibleArguments(cmd).reduce((max, argument) => {
            return Math.max(
              max,
              this.displayWidth(
                helper.styleArgumentTerm(helper.argumentTerm(argument))
              )
            );
          }, 0);
        }
        /**
         * Get the command usage to be displayed at the top of the built-in help.
         *
         * @param {Command} cmd
         * @returns {string}
         */
        commandUsage(cmd) {
          let cmdName = cmd._name;
          if (cmd._aliases[0]) {
            cmdName = cmdName + "|" + cmd._aliases[0];
          }
          let ancestorCmdNames = "";
          for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
            ancestorCmdNames = ancestorCmd.name() + " " + ancestorCmdNames;
          }
          return ancestorCmdNames + cmdName + " " + cmd.usage();
        }
        /**
         * Get the description for the command.
         *
         * @param {Command} cmd
         * @returns {string}
         */
        commandDescription(cmd) {
          return cmd.description();
        }
        /**
         * Get the subcommand summary to show in the list of subcommands.
         * (Fallback to description for backwards compatibility.)
         *
         * @param {Command} cmd
         * @returns {string}
         */
        subcommandDescription(cmd) {
          return cmd.summary() || cmd.description();
        }
        /**
         * Get the option description to show in the list of options.
         *
         * @param {Option} option
         * @return {string}
         */
        optionDescription(option) {
          const extraInfo = [];
          if (option.argChoices) {
            extraInfo.push(
              // use stringify to match the display of the default value
              `choices: ${option.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
            );
          }
          if (option.defaultValue !== void 0) {
            const showDefault = option.required || option.optional || option.isBoolean() && typeof option.defaultValue === "boolean";
            if (showDefault) {
              extraInfo.push(
                `default: ${option.defaultValueDescription || JSON.stringify(option.defaultValue)}`
              );
            }
          }
          if (option.presetArg !== void 0 && option.optional) {
            extraInfo.push(`preset: ${JSON.stringify(option.presetArg)}`);
          }
          if (option.envVar !== void 0) {
            extraInfo.push(`env: ${option.envVar}`);
          }
          if (extraInfo.length > 0) {
            const extraDescription = `(${extraInfo.join(", ")})`;
            if (option.description) {
              return `${option.description} ${extraDescription}`;
            }
            return extraDescription;
          }
          return option.description;
        }
        /**
         * Get the argument description to show in the list of arguments.
         *
         * @param {Argument} argument
         * @return {string}
         */
        argumentDescription(argument) {
          const extraInfo = [];
          if (argument.argChoices) {
            extraInfo.push(
              // use stringify to match the display of the default value
              `choices: ${argument.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
            );
          }
          if (argument.defaultValue !== void 0) {
            extraInfo.push(
              `default: ${argument.defaultValueDescription || JSON.stringify(argument.defaultValue)}`
            );
          }
          if (extraInfo.length > 0) {
            const extraDescription = `(${extraInfo.join(", ")})`;
            if (argument.description) {
              return `${argument.description} ${extraDescription}`;
            }
            return extraDescription;
          }
          return argument.description;
        }
        /**
         * Format a list of items, given a heading and an array of formatted items.
         *
         * @param {string} heading
         * @param {string[]} items
         * @param {Help} helper
         * @returns string[]
         */
        formatItemList(heading, items, helper) {
          if (items.length === 0) return [];
          return [helper.styleTitle(heading), ...items, ""];
        }
        /**
         * Group items by their help group heading.
         *
         * @param {Command[] | Option[]} unsortedItems
         * @param {Command[] | Option[]} visibleItems
         * @param {Function} getGroup
         * @returns {Map<string, Command[] | Option[]>}
         */
        groupItems(unsortedItems, visibleItems, getGroup) {
          const result = /* @__PURE__ */ new Map();
          unsortedItems.forEach((item) => {
            const group = getGroup(item);
            if (!result.has(group)) result.set(group, []);
          });
          visibleItems.forEach((item) => {
            const group = getGroup(item);
            if (!result.has(group)) {
              result.set(group, []);
            }
            result.get(group).push(item);
          });
          return result;
        }
        /**
         * Generate the built-in help text.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {string}
         */
        formatHelp(cmd, helper) {
          const termWidth = helper.padWidth(cmd, helper);
          const helpWidth = helper.helpWidth ?? 80;
          function callFormatItem(term, description) {
            return helper.formatItem(term, termWidth, description, helper);
          }
          let output = [
            `${helper.styleTitle("Usage:")} ${helper.styleUsage(helper.commandUsage(cmd))}`,
            ""
          ];
          const commandDescription = helper.commandDescription(cmd);
          if (commandDescription.length > 0) {
            output = output.concat([
              helper.boxWrap(
                helper.styleCommandDescription(commandDescription),
                helpWidth
              ),
              ""
            ]);
          }
          const argumentList = helper.visibleArguments(cmd).map((argument) => {
            return callFormatItem(
              helper.styleArgumentTerm(helper.argumentTerm(argument)),
              helper.styleArgumentDescription(helper.argumentDescription(argument))
            );
          });
          output = output.concat(
            this.formatItemList("Arguments:", argumentList, helper)
          );
          const optionGroups = this.groupItems(
            cmd.options,
            helper.visibleOptions(cmd),
            (option) => option.helpGroupHeading ?? "Options:"
          );
          optionGroups.forEach((options, group) => {
            const optionList = options.map((option) => {
              return callFormatItem(
                helper.styleOptionTerm(helper.optionTerm(option)),
                helper.styleOptionDescription(helper.optionDescription(option))
              );
            });
            output = output.concat(this.formatItemList(group, optionList, helper));
          });
          if (helper.showGlobalOptions) {
            const globalOptionList = helper.visibleGlobalOptions(cmd).map((option) => {
              return callFormatItem(
                helper.styleOptionTerm(helper.optionTerm(option)),
                helper.styleOptionDescription(helper.optionDescription(option))
              );
            });
            output = output.concat(
              this.formatItemList("Global Options:", globalOptionList, helper)
            );
          }
          const commandGroups = this.groupItems(
            cmd.commands,
            helper.visibleCommands(cmd),
            (sub) => sub.helpGroup() || "Commands:"
          );
          commandGroups.forEach((commands, group) => {
            const commandList = commands.map((sub) => {
              return callFormatItem(
                helper.styleSubcommandTerm(helper.subcommandTerm(sub)),
                helper.styleSubcommandDescription(helper.subcommandDescription(sub))
              );
            });
            output = output.concat(this.formatItemList(group, commandList, helper));
          });
          return output.join("\n");
        }
        /**
         * Return display width of string, ignoring ANSI escape sequences. Used in padding and wrapping calculations.
         *
         * @param {string} str
         * @returns {number}
         */
        displayWidth(str) {
          return stripColor(str).length;
        }
        /**
         * Style the title for displaying in the help. Called with 'Usage:', 'Options:', etc.
         *
         * @param {string} str
         * @returns {string}
         */
        styleTitle(str) {
          return str;
        }
        styleUsage(str) {
          return str.split(" ").map((word) => {
            if (word === "[options]") return this.styleOptionText(word);
            if (word === "[command]") return this.styleSubcommandText(word);
            if (word[0] === "[" || word[0] === "<")
              return this.styleArgumentText(word);
            return this.styleCommandText(word);
          }).join(" ");
        }
        styleCommandDescription(str) {
          return this.styleDescriptionText(str);
        }
        styleOptionDescription(str) {
          return this.styleDescriptionText(str);
        }
        styleSubcommandDescription(str) {
          return this.styleDescriptionText(str);
        }
        styleArgumentDescription(str) {
          return this.styleDescriptionText(str);
        }
        styleDescriptionText(str) {
          return str;
        }
        styleOptionTerm(str) {
          return this.styleOptionText(str);
        }
        styleSubcommandTerm(str) {
          return str.split(" ").map((word) => {
            if (word === "[options]") return this.styleOptionText(word);
            if (word[0] === "[" || word[0] === "<")
              return this.styleArgumentText(word);
            return this.styleSubcommandText(word);
          }).join(" ");
        }
        styleArgumentTerm(str) {
          return this.styleArgumentText(str);
        }
        styleOptionText(str) {
          return str;
        }
        styleArgumentText(str) {
          return str;
        }
        styleSubcommandText(str) {
          return str;
        }
        styleCommandText(str) {
          return str;
        }
        /**
         * Calculate the pad width from the maximum term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        padWidth(cmd, helper) {
          return Math.max(
            helper.longestOptionTermLength(cmd, helper),
            helper.longestGlobalOptionTermLength(cmd, helper),
            helper.longestSubcommandTermLength(cmd, helper),
            helper.longestArgumentTermLength(cmd, helper)
          );
        }
        /**
         * Detect manually wrapped and indented strings by checking for line break followed by whitespace.
         *
         * @param {string} str
         * @returns {boolean}
         */
        preformatted(str) {
          return /\n[^\S\r\n]/.test(str);
        }
        /**
         * Format the "item", which consists of a term and description. Pad the term and wrap the description, indenting the following lines.
         *
         * So "TTT", 5, "DDD DDDD DD DDD" might be formatted for this.helpWidth=17 like so:
         *   TTT  DDD DDDD
         *        DD DDD
         *
         * @param {string} term
         * @param {number} termWidth
         * @param {string} description
         * @param {Help} helper
         * @returns {string}
         */
        formatItem(term, termWidth, description, helper) {
          const itemIndent = 2;
          const itemIndentStr = " ".repeat(itemIndent);
          if (!description) return itemIndentStr + term;
          const paddedTerm = term.padEnd(
            termWidth + term.length - helper.displayWidth(term)
          );
          const spacerWidth = 2;
          const helpWidth = this.helpWidth ?? 80;
          const remainingWidth = helpWidth - termWidth - spacerWidth - itemIndent;
          let formattedDescription;
          if (remainingWidth < this.minWidthToWrap || helper.preformatted(description)) {
            formattedDescription = description;
          } else {
            const wrappedDescription = helper.boxWrap(description, remainingWidth);
            formattedDescription = wrappedDescription.replace(
              /\n/g,
              "\n" + " ".repeat(termWidth + spacerWidth)
            );
          }
          return itemIndentStr + paddedTerm + " ".repeat(spacerWidth) + formattedDescription.replace(/\n/g, `
${itemIndentStr}`);
        }
        /**
         * Wrap a string at whitespace, preserving existing line breaks.
         * Wrapping is skipped if the width is less than `minWidthToWrap`.
         *
         * @param {string} str
         * @param {number} width
         * @returns {string}
         */
        boxWrap(str, width) {
          if (width < this.minWidthToWrap) return str;
          const rawLines = str.split(/\r\n|\n/);
          const chunkPattern = /[\s]*[^\s]+/g;
          const wrappedLines = [];
          rawLines.forEach((line) => {
            const chunks = line.match(chunkPattern);
            if (chunks === null) {
              wrappedLines.push("");
              return;
            }
            let sumChunks = [chunks.shift()];
            let sumWidth = this.displayWidth(sumChunks[0]);
            chunks.forEach((chunk) => {
              const visibleWidth = this.displayWidth(chunk);
              if (sumWidth + visibleWidth <= width) {
                sumChunks.push(chunk);
                sumWidth += visibleWidth;
                return;
              }
              wrappedLines.push(sumChunks.join(""));
              const nextChunk = chunk.trimStart();
              sumChunks = [nextChunk];
              sumWidth = this.displayWidth(nextChunk);
            });
            wrappedLines.push(sumChunks.join(""));
          });
          return wrappedLines.join("\n");
        }
      };
      function stripColor(str) {
        const sgrPattern = /\x1b\[\d*(;\d*)*m/g;
        return str.replace(sgrPattern, "");
      }
      exports.Help = Help2;
      exports.stripColor = stripColor;
    }
  });

  // node_modules/commander/lib/option.js
  var require_option = __commonJS({
    "node_modules/commander/lib/option.js"(exports) {
      "use strict";
      var { InvalidArgumentError: InvalidArgumentError2 } = require_error();
      var Option2 = class {
        /**
         * Initialize a new `Option` with the given `flags` and `description`.
         *
         * @param {string} flags
         * @param {string} [description]
         */
        constructor(flags, description) {
          this.flags = flags;
          this.description = description || "";
          this.required = flags.includes("<");
          this.optional = flags.includes("[");
          this.variadic = /\w\.\.\.[>\]]$/.test(flags);
          this.mandatory = false;
          const optionFlags = splitOptionFlags(flags);
          this.short = optionFlags.shortFlag;
          this.long = optionFlags.longFlag;
          this.negate = false;
          if (this.long) {
            this.negate = this.long.startsWith("--no-");
          }
          this.defaultValue = void 0;
          this.defaultValueDescription = void 0;
          this.presetArg = void 0;
          this.envVar = void 0;
          this.parseArg = void 0;
          this.hidden = false;
          this.argChoices = void 0;
          this.conflictsWith = [];
          this.implied = void 0;
          this.helpGroupHeading = void 0;
        }
        /**
         * Set the default value, and optionally supply the description to be displayed in the help.
         *
         * @param {*} value
         * @param {string} [description]
         * @return {Option}
         */
        default(value, description) {
          this.defaultValue = value;
          this.defaultValueDescription = description;
          return this;
        }
        /**
         * Preset to use when option used without option-argument, especially optional but also boolean and negated.
         * The custom processing (parseArg) is called.
         *
         * @example
         * new Option('--color').default('GREYSCALE').preset('RGB');
         * new Option('--donate [amount]').preset('20').argParser(parseFloat);
         *
         * @param {*} arg
         * @return {Option}
         */
        preset(arg) {
          this.presetArg = arg;
          return this;
        }
        /**
         * Add option name(s) that conflict with this option.
         * An error will be displayed if conflicting options are found during parsing.
         *
         * @example
         * new Option('--rgb').conflicts('cmyk');
         * new Option('--js').conflicts(['ts', 'jsx']);
         *
         * @param {(string | string[])} names
         * @return {Option}
         */
        conflicts(names) {
          this.conflictsWith = this.conflictsWith.concat(names);
          return this;
        }
        /**
         * Specify implied option values for when this option is set and the implied options are not.
         *
         * The custom processing (parseArg) is not called on the implied values.
         *
         * @example
         * program
         *   .addOption(new Option('--log', 'write logging information to file'))
         *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
         *
         * @param {object} impliedOptionValues
         * @return {Option}
         */
        implies(impliedOptionValues) {
          let newImplied = impliedOptionValues;
          if (typeof impliedOptionValues === "string") {
            newImplied = { [impliedOptionValues]: true };
          }
          this.implied = Object.assign(this.implied || {}, newImplied);
          return this;
        }
        /**
         * Set environment variable to check for option value.
         *
         * An environment variable is only used if when processed the current option value is
         * undefined, or the source of the current value is 'default' or 'config' or 'env'.
         *
         * @param {string} name
         * @return {Option}
         */
        env(name) {
          this.envVar = name;
          return this;
        }
        /**
         * Set the custom handler for processing CLI option arguments into option values.
         *
         * @param {Function} [fn]
         * @return {Option}
         */
        argParser(fn) {
          this.parseArg = fn;
          return this;
        }
        /**
         * Whether the option is mandatory and must have a value after parsing.
         *
         * @param {boolean} [mandatory=true]
         * @return {Option}
         */
        makeOptionMandatory(mandatory = true) {
          this.mandatory = !!mandatory;
          return this;
        }
        /**
         * Hide option in help.
         *
         * @param {boolean} [hide=true]
         * @return {Option}
         */
        hideHelp(hide = true) {
          this.hidden = !!hide;
          return this;
        }
        /**
         * @package
         */
        _collectValue(value, previous) {
          if (previous === this.defaultValue || !Array.isArray(previous)) {
            return [value];
          }
          previous.push(value);
          return previous;
        }
        /**
         * Only allow option value to be one of choices.
         *
         * @param {string[]} values
         * @return {Option}
         */
        choices(values) {
          this.argChoices = values.slice();
          this.parseArg = (arg, previous) => {
            if (!this.argChoices.includes(arg)) {
              throw new InvalidArgumentError2(
                `Allowed choices are ${this.argChoices.join(", ")}.`
              );
            }
            if (this.variadic) {
              return this._collectValue(arg, previous);
            }
            return arg;
          };
          return this;
        }
        /**
         * Return option name.
         *
         * @return {string}
         */
        name() {
          if (this.long) {
            return this.long.replace(/^--/, "");
          }
          return this.short.replace(/^-/, "");
        }
        /**
         * Return option name, in a camelcase format that can be used
         * as an object attribute key.
         *
         * @return {string}
         */
        attributeName() {
          if (this.negate) {
            return camelcase(this.name().replace(/^no-/, ""));
          }
          return camelcase(this.name());
        }
        /**
         * Set the help group heading.
         *
         * @param {string} heading
         * @return {Option}
         */
        helpGroup(heading) {
          this.helpGroupHeading = heading;
          return this;
        }
        /**
         * Check if `arg` matches the short or long flag.
         *
         * @param {string} arg
         * @return {boolean}
         * @package
         */
        is(arg) {
          return this.short === arg || this.long === arg;
        }
        /**
         * Return whether a boolean option.
         *
         * Options are one of boolean, negated, required argument, or optional argument.
         *
         * @return {boolean}
         * @package
         */
        isBoolean() {
          return !this.required && !this.optional && !this.negate;
        }
      };
      var DualOptions = class {
        /**
         * @param {Option[]} options
         */
        constructor(options) {
          this.positiveOptions = /* @__PURE__ */ new Map();
          this.negativeOptions = /* @__PURE__ */ new Map();
          this.dualOptions = /* @__PURE__ */ new Set();
          options.forEach((option) => {
            if (option.negate) {
              this.negativeOptions.set(option.attributeName(), option);
            } else {
              this.positiveOptions.set(option.attributeName(), option);
            }
          });
          this.negativeOptions.forEach((value, key) => {
            if (this.positiveOptions.has(key)) {
              this.dualOptions.add(key);
            }
          });
        }
        /**
         * Did the value come from the option, and not from possible matching dual option?
         *
         * @param {*} value
         * @param {Option} option
         * @returns {boolean}
         */
        valueFromOption(value, option) {
          const optionKey = option.attributeName();
          if (!this.dualOptions.has(optionKey)) return true;
          const preset = this.negativeOptions.get(optionKey).presetArg;
          const negativeValue = preset !== void 0 ? preset : false;
          return option.negate === (negativeValue === value);
        }
      };
      function camelcase(str) {
        return str.split("-").reduce((str2, word) => {
          return str2 + word[0].toUpperCase() + word.slice(1);
        });
      }
      function splitOptionFlags(flags) {
        let shortFlag;
        let longFlag;
        const shortFlagExp = /^-[^-]$/;
        const longFlagExp = /^--[^-]/;
        const flagParts = flags.split(/[ |,]+/).concat("guard");
        if (shortFlagExp.test(flagParts[0])) shortFlag = flagParts.shift();
        if (longFlagExp.test(flagParts[0])) longFlag = flagParts.shift();
        if (!shortFlag && shortFlagExp.test(flagParts[0]))
          shortFlag = flagParts.shift();
        if (!shortFlag && longFlagExp.test(flagParts[0])) {
          shortFlag = longFlag;
          longFlag = flagParts.shift();
        }
        if (flagParts[0].startsWith("-")) {
          const unsupportedFlag = flagParts[0];
          const baseError = `option creation failed due to '${unsupportedFlag}' in option flags '${flags}'`;
          if (/^-[^-][^-]/.test(unsupportedFlag))
            throw new Error(
              `${baseError}
- a short flag is a single dash and a single character
  - either use a single dash and a single character (for a short flag)
  - or use a double dash for a long option (and can have two, like '--ws, --workspace')`
            );
          if (shortFlagExp.test(unsupportedFlag))
            throw new Error(`${baseError}
- too many short flags`);
          if (longFlagExp.test(unsupportedFlag))
            throw new Error(`${baseError}
- too many long flags`);
          throw new Error(`${baseError}
- unrecognised flag format`);
        }
        if (shortFlag === void 0 && longFlag === void 0)
          throw new Error(
            `option creation failed due to no flags found in '${flags}'.`
          );
        return { shortFlag, longFlag };
      }
      exports.Option = Option2;
      exports.DualOptions = DualOptions;
    }
  });

  // node_modules/commander/lib/suggestSimilar.js
  var require_suggestSimilar = __commonJS({
    "node_modules/commander/lib/suggestSimilar.js"(exports) {
      "use strict";
      var maxDistance = 3;
      function editDistance(a, b) {
        if (Math.abs(a.length - b.length) > maxDistance)
          return Math.max(a.length, b.length);
        const d = [];
        for (let i = 0; i <= a.length; i++) {
          d[i] = [i];
        }
        for (let j = 0; j <= b.length; j++) {
          d[0][j] = j;
        }
        for (let j = 1; j <= b.length; j++) {
          for (let i = 1; i <= a.length; i++) {
            let cost = 1;
            if (a[i - 1] === b[j - 1]) {
              cost = 0;
            } else {
              cost = 1;
            }
            d[i][j] = Math.min(
              d[i - 1][j] + 1,
              // deletion
              d[i][j - 1] + 1,
              // insertion
              d[i - 1][j - 1] + cost
              // substitution
            );
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
              d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
            }
          }
        }
        return d[a.length][b.length];
      }
      function suggestSimilar(word, candidates) {
        if (!candidates || candidates.length === 0) return "";
        candidates = Array.from(new Set(candidates));
        const searchingOptions = word.startsWith("--");
        if (searchingOptions) {
          word = word.slice(2);
          candidates = candidates.map((candidate) => candidate.slice(2));
        }
        let similar = [];
        let bestDistance = maxDistance;
        const minSimilarity = 0.4;
        candidates.forEach((candidate) => {
          if (candidate.length <= 1) return;
          const distance = editDistance(word, candidate);
          const length = Math.max(word.length, candidate.length);
          const similarity = (length - distance) / length;
          if (similarity > minSimilarity) {
            if (distance < bestDistance) {
              bestDistance = distance;
              similar = [candidate];
            } else if (distance === bestDistance) {
              similar.push(candidate);
            }
          }
        });
        similar.sort((a, b) => a.localeCompare(b));
        if (searchingOptions) {
          similar = similar.map((candidate) => `--${candidate}`);
        }
        if (similar.length > 1) {
          return `
(Did you mean one of ${similar.join(", ")}?)`;
        }
        if (similar.length === 1) {
          return `
(Did you mean ${similar[0]}?)`;
        }
        return "";
      }
      exports.suggestSimilar = suggestSimilar;
    }
  });

  // node_modules/commander/lib/command.js
  var require_command = __commonJS({
    "node_modules/commander/lib/command.js"(exports) {
      "use strict";
      var EventEmitter = __require("events").EventEmitter;
      var childProcess = __require("child_process");
      var path4 = __require("path");
      var fs4 = __require("fs");
      var process9 = __require("process");
      var { Argument: Argument2, humanReadableArgName } = require_argument();
      var { CommanderError: CommanderError2 } = require_error();
      var { Help: Help2, stripColor } = require_help();
      var { Option: Option2, DualOptions } = require_option();
      var { suggestSimilar } = require_suggestSimilar();
      var Command2 = class _Command extends EventEmitter {
        /**
         * Initialize a new `Command`.
         *
         * @param {string} [name]
         */
        constructor(name) {
          super();
          this.commands = [];
          this.options = [];
          this.parent = null;
          this._allowUnknownOption = false;
          this._allowExcessArguments = false;
          this.registeredArguments = [];
          this._args = this.registeredArguments;
          this.args = [];
          this.rawArgs = [];
          this.processedArgs = [];
          this._scriptPath = null;
          this._name = name || "";
          this._optionValues = {};
          this._optionValueSources = {};
          this._storeOptionsAsProperties = false;
          this._actionHandler = null;
          this._executableHandler = false;
          this._executableFile = null;
          this._executableDir = null;
          this._defaultCommandName = null;
          this._exitCallback = null;
          this._aliases = [];
          this._combineFlagAndOptionalValue = true;
          this._description = "";
          this._summary = "";
          this._argsDescription = void 0;
          this._enablePositionalOptions = false;
          this._passThroughOptions = false;
          this._lifeCycleHooks = {};
          this._showHelpAfterError = false;
          this._showSuggestionAfterError = true;
          this._savedState = null;
          this._outputConfiguration = {
            writeOut: (str) => process9.stdout.write(str),
            writeErr: (str) => process9.stderr.write(str),
            outputError: (str, write) => write(str),
            getOutHelpWidth: () => process9.stdout.isTTY ? process9.stdout.columns : void 0,
            getErrHelpWidth: () => process9.stderr.isTTY ? process9.stderr.columns : void 0,
            getOutHasColors: () => useColor() ?? (process9.stdout.isTTY && process9.stdout.hasColors?.()),
            getErrHasColors: () => useColor() ?? (process9.stderr.isTTY && process9.stderr.hasColors?.()),
            stripColor: (str) => stripColor(str)
          };
          this._hidden = false;
          this._helpOption = void 0;
          this._addImplicitHelpCommand = void 0;
          this._helpCommand = void 0;
          this._helpConfiguration = {};
          this._helpGroupHeading = void 0;
          this._defaultCommandGroup = void 0;
          this._defaultOptionGroup = void 0;
        }
        /**
         * Copy settings that are useful to have in common across root command and subcommands.
         *
         * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
         *
         * @param {Command} sourceCommand
         * @return {Command} `this` command for chaining
         */
        copyInheritedSettings(sourceCommand) {
          this._outputConfiguration = sourceCommand._outputConfiguration;
          this._helpOption = sourceCommand._helpOption;
          this._helpCommand = sourceCommand._helpCommand;
          this._helpConfiguration = sourceCommand._helpConfiguration;
          this._exitCallback = sourceCommand._exitCallback;
          this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
          this._combineFlagAndOptionalValue = sourceCommand._combineFlagAndOptionalValue;
          this._allowExcessArguments = sourceCommand._allowExcessArguments;
          this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
          this._showHelpAfterError = sourceCommand._showHelpAfterError;
          this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;
          return this;
        }
        /**
         * @returns {Command[]}
         * @private
         */
        _getCommandAndAncestors() {
          const result = [];
          for (let command = this; command; command = command.parent) {
            result.push(command);
          }
          return result;
        }
        /**
         * Define a command.
         *
         * There are two styles of command: pay attention to where to put the description.
         *
         * @example
         * // Command implemented using action handler (description is supplied separately to `.command`)
         * program
         *   .command('clone <source> [destination]')
         *   .description('clone a repository into a newly created directory')
         *   .action((source, destination) => {
         *     console.log('clone command called');
         *   });
         *
         * // Command implemented using separate executable file (description is second parameter to `.command`)
         * program
         *   .command('start <service>', 'start named service')
         *   .command('stop [service]', 'stop named service, or all if no name supplied');
         *
         * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
         * @param {(object | string)} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
         * @param {object} [execOpts] - configuration options (for executable)
         * @return {Command} returns new command for action handler, or `this` for executable command
         */
        command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
          let desc = actionOptsOrExecDesc;
          let opts = execOpts;
          if (typeof desc === "object" && desc !== null) {
            opts = desc;
            desc = null;
          }
          opts = opts || {};
          const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);
          const cmd = this.createCommand(name);
          if (desc) {
            cmd.description(desc);
            cmd._executableHandler = true;
          }
          if (opts.isDefault) this._defaultCommandName = cmd._name;
          cmd._hidden = !!(opts.noHelp || opts.hidden);
          cmd._executableFile = opts.executableFile || null;
          if (args) cmd.arguments(args);
          this._registerCommand(cmd);
          cmd.parent = this;
          cmd.copyInheritedSettings(this);
          if (desc) return this;
          return cmd;
        }
        /**
         * Factory routine to create a new unattached command.
         *
         * See .command() for creating an attached subcommand, which uses this routine to
         * create the command. You can override createCommand to customise subcommands.
         *
         * @param {string} [name]
         * @return {Command} new command
         */
        createCommand(name) {
          return new _Command(name);
        }
        /**
         * You can customise the help with a subclass of Help by overriding createHelp,
         * or by overriding Help properties using configureHelp().
         *
         * @return {Help}
         */
        createHelp() {
          return Object.assign(new Help2(), this.configureHelp());
        }
        /**
         * You can customise the help by overriding Help properties using configureHelp(),
         * or with a subclass of Help by overriding createHelp().
         *
         * @param {object} [configuration] - configuration options
         * @return {(Command | object)} `this` command for chaining, or stored configuration
         */
        configureHelp(configuration) {
          if (configuration === void 0) return this._helpConfiguration;
          this._helpConfiguration = configuration;
          return this;
        }
        /**
         * The default output goes to stdout and stderr. You can customise this for special
         * applications. You can also customise the display of errors by overriding outputError.
         *
         * The configuration properties are all functions:
         *
         *     // change how output being written, defaults to stdout and stderr
         *     writeOut(str)
         *     writeErr(str)
         *     // change how output being written for errors, defaults to writeErr
         *     outputError(str, write) // used for displaying errors and not used for displaying help
         *     // specify width for wrapping help
         *     getOutHelpWidth()
         *     getErrHelpWidth()
         *     // color support, currently only used with Help
         *     getOutHasColors()
         *     getErrHasColors()
         *     stripColor() // used to remove ANSI escape codes if output does not have colors
         *
         * @param {object} [configuration] - configuration options
         * @return {(Command | object)} `this` command for chaining, or stored configuration
         */
        configureOutput(configuration) {
          if (configuration === void 0) return this._outputConfiguration;
          this._outputConfiguration = {
            ...this._outputConfiguration,
            ...configuration
          };
          return this;
        }
        /**
         * Display the help or a custom message after an error occurs.
         *
         * @param {(boolean|string)} [displayHelp]
         * @return {Command} `this` command for chaining
         */
        showHelpAfterError(displayHelp = true) {
          if (typeof displayHelp !== "string") displayHelp = !!displayHelp;
          this._showHelpAfterError = displayHelp;
          return this;
        }
        /**
         * Display suggestion of similar commands for unknown commands, or options for unknown options.
         *
         * @param {boolean} [displaySuggestion]
         * @return {Command} `this` command for chaining
         */
        showSuggestionAfterError(displaySuggestion = true) {
          this._showSuggestionAfterError = !!displaySuggestion;
          return this;
        }
        /**
         * Add a prepared subcommand.
         *
         * See .command() for creating an attached subcommand which inherits settings from its parent.
         *
         * @param {Command} cmd - new subcommand
         * @param {object} [opts] - configuration options
         * @return {Command} `this` command for chaining
         */
        addCommand(cmd, opts) {
          if (!cmd._name) {
            throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
          }
          opts = opts || {};
          if (opts.isDefault) this._defaultCommandName = cmd._name;
          if (opts.noHelp || opts.hidden) cmd._hidden = true;
          this._registerCommand(cmd);
          cmd.parent = this;
          cmd._checkForBrokenPassThrough();
          return this;
        }
        /**
         * Factory routine to create a new unattached argument.
         *
         * See .argument() for creating an attached argument, which uses this routine to
         * create the argument. You can override createArgument to return a custom argument.
         *
         * @param {string} name
         * @param {string} [description]
         * @return {Argument} new argument
         */
        createArgument(name, description) {
          return new Argument2(name, description);
        }
        /**
         * Define argument syntax for command.
         *
         * The default is that the argument is required, and you can explicitly
         * indicate this with <> around the name. Put [] around the name for an optional argument.
         *
         * @example
         * program.argument('<input-file>');
         * program.argument('[output-file]');
         *
         * @param {string} name
         * @param {string} [description]
         * @param {(Function|*)} [parseArg] - custom argument processing function or default value
         * @param {*} [defaultValue]
         * @return {Command} `this` command for chaining
         */
        argument(name, description, parseArg, defaultValue) {
          const argument = this.createArgument(name, description);
          if (typeof parseArg === "function") {
            argument.default(defaultValue).argParser(parseArg);
          } else {
            argument.default(parseArg);
          }
          this.addArgument(argument);
          return this;
        }
        /**
         * Define argument syntax for command, adding multiple at once (without descriptions).
         *
         * See also .argument().
         *
         * @example
         * program.arguments('<cmd> [env]');
         *
         * @param {string} names
         * @return {Command} `this` command for chaining
         */
        arguments(names) {
          names.trim().split(/ +/).forEach((detail) => {
            this.argument(detail);
          });
          return this;
        }
        /**
         * Define argument syntax for command, adding a prepared argument.
         *
         * @param {Argument} argument
         * @return {Command} `this` command for chaining
         */
        addArgument(argument) {
          const previousArgument = this.registeredArguments.slice(-1)[0];
          if (previousArgument?.variadic) {
            throw new Error(
              `only the last argument can be variadic '${previousArgument.name()}'`
            );
          }
          if (argument.required && argument.defaultValue !== void 0 && argument.parseArg === void 0) {
            throw new Error(
              `a default value for a required argument is never used: '${argument.name()}'`
            );
          }
          this.registeredArguments.push(argument);
          return this;
        }
        /**
         * Customise or override default help command. By default a help command is automatically added if your command has subcommands.
         *
         * @example
         *    program.helpCommand('help [cmd]');
         *    program.helpCommand('help [cmd]', 'show help');
         *    program.helpCommand(false); // suppress default help command
         *    program.helpCommand(true); // add help command even if no subcommands
         *
         * @param {string|boolean} enableOrNameAndArgs - enable with custom name and/or arguments, or boolean to override whether added
         * @param {string} [description] - custom description
         * @return {Command} `this` command for chaining
         */
        helpCommand(enableOrNameAndArgs, description) {
          if (typeof enableOrNameAndArgs === "boolean") {
            this._addImplicitHelpCommand = enableOrNameAndArgs;
            if (enableOrNameAndArgs && this._defaultCommandGroup) {
              this._initCommandGroup(this._getHelpCommand());
            }
            return this;
          }
          const nameAndArgs = enableOrNameAndArgs ?? "help [command]";
          const [, helpName, helpArgs] = nameAndArgs.match(/([^ ]+) *(.*)/);
          const helpDescription = description ?? "display help for command";
          const helpCommand = this.createCommand(helpName);
          helpCommand.helpOption(false);
          if (helpArgs) helpCommand.arguments(helpArgs);
          if (helpDescription) helpCommand.description(helpDescription);
          this._addImplicitHelpCommand = true;
          this._helpCommand = helpCommand;
          if (enableOrNameAndArgs || description) this._initCommandGroup(helpCommand);
          return this;
        }
        /**
         * Add prepared custom help command.
         *
         * @param {(Command|string|boolean)} helpCommand - custom help command, or deprecated enableOrNameAndArgs as for `.helpCommand()`
         * @param {string} [deprecatedDescription] - deprecated custom description used with custom name only
         * @return {Command} `this` command for chaining
         */
        addHelpCommand(helpCommand, deprecatedDescription) {
          if (typeof helpCommand !== "object") {
            this.helpCommand(helpCommand, deprecatedDescription);
            return this;
          }
          this._addImplicitHelpCommand = true;
          this._helpCommand = helpCommand;
          this._initCommandGroup(helpCommand);
          return this;
        }
        /**
         * Lazy create help command.
         *
         * @return {(Command|null)}
         * @package
         */
        _getHelpCommand() {
          const hasImplicitHelpCommand = this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"));
          if (hasImplicitHelpCommand) {
            if (this._helpCommand === void 0) {
              this.helpCommand(void 0, void 0);
            }
            return this._helpCommand;
          }
          return null;
        }
        /**
         * Add hook for life cycle event.
         *
         * @param {string} event
         * @param {Function} listener
         * @return {Command} `this` command for chaining
         */
        hook(event, listener) {
          const allowedValues = ["preSubcommand", "preAction", "postAction"];
          if (!allowedValues.includes(event)) {
            throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
          }
          if (this._lifeCycleHooks[event]) {
            this._lifeCycleHooks[event].push(listener);
          } else {
            this._lifeCycleHooks[event] = [listener];
          }
          return this;
        }
        /**
         * Register callback to use as replacement for calling process.exit.
         *
         * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
         * @return {Command} `this` command for chaining
         */
        exitOverride(fn) {
          if (fn) {
            this._exitCallback = fn;
          } else {
            this._exitCallback = (err) => {
              if (err.code !== "commander.executeSubCommandAsync") {
                throw err;
              } else {
              }
            };
          }
          return this;
        }
        /**
         * Call process.exit, and _exitCallback if defined.
         *
         * @param {number} exitCode exit code for using with process.exit
         * @param {string} code an id string representing the error
         * @param {string} message human-readable description of the error
         * @return never
         * @private
         */
        _exit(exitCode, code, message) {
          if (this._exitCallback) {
            this._exitCallback(new CommanderError2(exitCode, code, message));
          }
          process9.exit(exitCode);
        }
        /**
         * Register callback `fn` for the command.
         *
         * @example
         * program
         *   .command('serve')
         *   .description('start service')
         *   .action(function() {
         *      // do work here
         *   });
         *
         * @param {Function} fn
         * @return {Command} `this` command for chaining
         */
        action(fn) {
          const listener = (args) => {
            const expectedArgsCount = this.registeredArguments.length;
            const actionArgs = args.slice(0, expectedArgsCount);
            if (this._storeOptionsAsProperties) {
              actionArgs[expectedArgsCount] = this;
            } else {
              actionArgs[expectedArgsCount] = this.opts();
            }
            actionArgs.push(this);
            return fn.apply(this, actionArgs);
          };
          this._actionHandler = listener;
          return this;
        }
        /**
         * Factory routine to create a new unattached option.
         *
         * See .option() for creating an attached option, which uses this routine to
         * create the option. You can override createOption to return a custom option.
         *
         * @param {string} flags
         * @param {string} [description]
         * @return {Option} new option
         */
        createOption(flags, description) {
          return new Option2(flags, description);
        }
        /**
         * Wrap parseArgs to catch 'commander.invalidArgument'.
         *
         * @param {(Option | Argument)} target
         * @param {string} value
         * @param {*} previous
         * @param {string} invalidArgumentMessage
         * @private
         */
        _callParseArg(target, value, previous, invalidArgumentMessage) {
          try {
            return target.parseArg(value, previous);
          } catch (err) {
            if (err.code === "commander.invalidArgument") {
              const message = `${invalidArgumentMessage} ${err.message}`;
              this.error(message, { exitCode: err.exitCode, code: err.code });
            }
            throw err;
          }
        }
        /**
         * Check for option flag conflicts.
         * Register option if no conflicts found, or throw on conflict.
         *
         * @param {Option} option
         * @private
         */
        _registerOption(option) {
          const matchingOption = option.short && this._findOption(option.short) || option.long && this._findOption(option.long);
          if (matchingOption) {
            const matchingFlag = option.long && this._findOption(option.long) ? option.long : option.short;
            throw new Error(`Cannot add option '${option.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${matchingFlag}'
-  already used by option '${matchingOption.flags}'`);
          }
          this._initOptionGroup(option);
          this.options.push(option);
        }
        /**
         * Check for command name and alias conflicts with existing commands.
         * Register command if no conflicts found, or throw on conflict.
         *
         * @param {Command} command
         * @private
         */
        _registerCommand(command) {
          const knownBy = (cmd) => {
            return [cmd.name()].concat(cmd.aliases());
          };
          const alreadyUsed = knownBy(command).find(
            (name) => this._findCommand(name)
          );
          if (alreadyUsed) {
            const existingCmd = knownBy(this._findCommand(alreadyUsed)).join("|");
            const newCmd = knownBy(command).join("|");
            throw new Error(
              `cannot add command '${newCmd}' as already have command '${existingCmd}'`
            );
          }
          this._initCommandGroup(command);
          this.commands.push(command);
        }
        /**
         * Add an option.
         *
         * @param {Option} option
         * @return {Command} `this` command for chaining
         */
        addOption(option) {
          this._registerOption(option);
          const oname = option.name();
          const name = option.attributeName();
          if (option.negate) {
            const positiveLongFlag = option.long.replace(/^--no-/, "--");
            if (!this._findOption(positiveLongFlag)) {
              this.setOptionValueWithSource(
                name,
                option.defaultValue === void 0 ? true : option.defaultValue,
                "default"
              );
            }
          } else if (option.defaultValue !== void 0) {
            this.setOptionValueWithSource(name, option.defaultValue, "default");
          }
          const handleOptionValue = (val, invalidValueMessage, valueSource) => {
            if (val == null && option.presetArg !== void 0) {
              val = option.presetArg;
            }
            const oldValue = this.getOptionValue(name);
            if (val !== null && option.parseArg) {
              val = this._callParseArg(option, val, oldValue, invalidValueMessage);
            } else if (val !== null && option.variadic) {
              val = option._collectValue(val, oldValue);
            }
            if (val == null) {
              if (option.negate) {
                val = false;
              } else if (option.isBoolean() || option.optional) {
                val = true;
              } else {
                val = "";
              }
            }
            this.setOptionValueWithSource(name, val, valueSource);
          };
          this.on("option:" + oname, (val) => {
            const invalidValueMessage = `error: option '${option.flags}' argument '${val}' is invalid.`;
            handleOptionValue(val, invalidValueMessage, "cli");
          });
          if (option.envVar) {
            this.on("optionEnv:" + oname, (val) => {
              const invalidValueMessage = `error: option '${option.flags}' value '${val}' from env '${option.envVar}' is invalid.`;
              handleOptionValue(val, invalidValueMessage, "env");
            });
          }
          return this;
        }
        /**
         * Internal implementation shared by .option() and .requiredOption()
         *
         * @return {Command} `this` command for chaining
         * @private
         */
        _optionEx(config, flags, description, fn, defaultValue) {
          if (typeof flags === "object" && flags instanceof Option2) {
            throw new Error(
              "To add an Option object use addOption() instead of option() or requiredOption()"
            );
          }
          const option = this.createOption(flags, description);
          option.makeOptionMandatory(!!config.mandatory);
          if (typeof fn === "function") {
            option.default(defaultValue).argParser(fn);
          } else if (fn instanceof RegExp) {
            const regex2 = fn;
            fn = (val, def) => {
              const m = regex2.exec(val);
              return m ? m[0] : def;
            };
            option.default(defaultValue).argParser(fn);
          } else {
            option.default(fn);
          }
          return this.addOption(option);
        }
        /**
         * Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.
         *
         * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
         * option-argument is indicated by `<>` and an optional option-argument by `[]`.
         *
         * See the README for more details, and see also addOption() and requiredOption().
         *
         * @example
         * program
         *     .option('-p, --pepper', 'add pepper')
         *     .option('--pt, --pizza-type <TYPE>', 'type of pizza') // required option-argument
         *     .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
         *     .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) // custom parse function
         *
         * @param {string} flags
         * @param {string} [description]
         * @param {(Function|*)} [parseArg] - custom option processing function or default value
         * @param {*} [defaultValue]
         * @return {Command} `this` command for chaining
         */
        option(flags, description, parseArg, defaultValue) {
          return this._optionEx({}, flags, description, parseArg, defaultValue);
        }
        /**
         * Add a required option which must have a value after parsing. This usually means
         * the option must be specified on the command line. (Otherwise the same as .option().)
         *
         * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
         *
         * @param {string} flags
         * @param {string} [description]
         * @param {(Function|*)} [parseArg] - custom option processing function or default value
         * @param {*} [defaultValue]
         * @return {Command} `this` command for chaining
         */
        requiredOption(flags, description, parseArg, defaultValue) {
          return this._optionEx(
            { mandatory: true },
            flags,
            description,
            parseArg,
            defaultValue
          );
        }
        /**
         * Alter parsing of short flags with optional values.
         *
         * @example
         * // for `.option('-f,--flag [value]'):
         * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
         * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
         *
         * @param {boolean} [combine] - if `true` or omitted, an optional value can be specified directly after the flag.
         * @return {Command} `this` command for chaining
         */
        combineFlagAndOptionalValue(combine = true) {
          this._combineFlagAndOptionalValue = !!combine;
          return this;
        }
        /**
         * Allow unknown options on the command line.
         *
         * @param {boolean} [allowUnknown] - if `true` or omitted, no error will be thrown for unknown options.
         * @return {Command} `this` command for chaining
         */
        allowUnknownOption(allowUnknown = true) {
          this._allowUnknownOption = !!allowUnknown;
          return this;
        }
        /**
         * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
         *
         * @param {boolean} [allowExcess] - if `true` or omitted, no error will be thrown for excess arguments.
         * @return {Command} `this` command for chaining
         */
        allowExcessArguments(allowExcess = true) {
          this._allowExcessArguments = !!allowExcess;
          return this;
        }
        /**
         * Enable positional options. Positional means global options are specified before subcommands which lets
         * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
         * The default behaviour is non-positional and global options may appear anywhere on the command line.
         *
         * @param {boolean} [positional]
         * @return {Command} `this` command for chaining
         */
        enablePositionalOptions(positional = true) {
          this._enablePositionalOptions = !!positional;
          return this;
        }
        /**
         * Pass through options that come after command-arguments rather than treat them as command-options,
         * so actual command-options come before command-arguments. Turning this on for a subcommand requires
         * positional options to have been enabled on the program (parent commands).
         * The default behaviour is non-positional and options may appear before or after command-arguments.
         *
         * @param {boolean} [passThrough] for unknown options.
         * @return {Command} `this` command for chaining
         */
        passThroughOptions(passThrough = true) {
          this._passThroughOptions = !!passThrough;
          this._checkForBrokenPassThrough();
          return this;
        }
        /**
         * @private
         */
        _checkForBrokenPassThrough() {
          if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) {
            throw new Error(
              `passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`
            );
          }
        }
        /**
         * Whether to store option values as properties on command object,
         * or store separately (specify false). In both cases the option values can be accessed using .opts().
         *
         * @param {boolean} [storeAsProperties=true]
         * @return {Command} `this` command for chaining
         */
        storeOptionsAsProperties(storeAsProperties = true) {
          if (this.options.length) {
            throw new Error("call .storeOptionsAsProperties() before adding options");
          }
          if (Object.keys(this._optionValues).length) {
            throw new Error(
              "call .storeOptionsAsProperties() before setting option values"
            );
          }
          this._storeOptionsAsProperties = !!storeAsProperties;
          return this;
        }
        /**
         * Retrieve option value.
         *
         * @param {string} key
         * @return {object} value
         */
        getOptionValue(key) {
          if (this._storeOptionsAsProperties) {
            return this[key];
          }
          return this._optionValues[key];
        }
        /**
         * Store option value.
         *
         * @param {string} key
         * @param {object} value
         * @return {Command} `this` command for chaining
         */
        setOptionValue(key, value) {
          return this.setOptionValueWithSource(key, value, void 0);
        }
        /**
         * Store option value and where the value came from.
         *
         * @param {string} key
         * @param {object} value
         * @param {string} source - expected values are default/config/env/cli/implied
         * @return {Command} `this` command for chaining
         */
        setOptionValueWithSource(key, value, source) {
          if (this._storeOptionsAsProperties) {
            this[key] = value;
          } else {
            this._optionValues[key] = value;
          }
          this._optionValueSources[key] = source;
          return this;
        }
        /**
         * Get source of option value.
         * Expected values are default | config | env | cli | implied
         *
         * @param {string} key
         * @return {string}
         */
        getOptionValueSource(key) {
          return this._optionValueSources[key];
        }
        /**
         * Get source of option value. See also .optsWithGlobals().
         * Expected values are default | config | env | cli | implied
         *
         * @param {string} key
         * @return {string}
         */
        getOptionValueSourceWithGlobals(key) {
          let source;
          this._getCommandAndAncestors().forEach((cmd) => {
            if (cmd.getOptionValueSource(key) !== void 0) {
              source = cmd.getOptionValueSource(key);
            }
          });
          return source;
        }
        /**
         * Get user arguments from implied or explicit arguments.
         * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
         *
         * @private
         */
        _prepareUserArgs(argv, parseOptions) {
          if (argv !== void 0 && !Array.isArray(argv)) {
            throw new Error("first parameter to parse must be array or undefined");
          }
          parseOptions = parseOptions || {};
          if (argv === void 0 && parseOptions.from === void 0) {
            if (process9.versions?.electron) {
              parseOptions.from = "electron";
            }
            const execArgv = process9.execArgv ?? [];
            if (execArgv.includes("-e") || execArgv.includes("--eval") || execArgv.includes("-p") || execArgv.includes("--print")) {
              parseOptions.from = "eval";
            }
          }
          if (argv === void 0) {
            argv = process9.argv;
          }
          this.rawArgs = argv.slice();
          let userArgs;
          switch (parseOptions.from) {
            case void 0:
            case "node":
              this._scriptPath = argv[1];
              userArgs = argv.slice(2);
              break;
            case "electron":
              if (process9.defaultApp) {
                this._scriptPath = argv[1];
                userArgs = argv.slice(2);
              } else {
                userArgs = argv.slice(1);
              }
              break;
            case "user":
              userArgs = argv.slice(0);
              break;
            case "eval":
              userArgs = argv.slice(1);
              break;
            default:
              throw new Error(
                `unexpected parse option { from: '${parseOptions.from}' }`
              );
          }
          if (!this._name && this._scriptPath)
            this.nameFromFilename(this._scriptPath);
          this._name = this._name || "program";
          return userArgs;
        }
        /**
         * Parse `argv`, setting options and invoking commands when defined.
         *
         * Use parseAsync instead of parse if any of your action handlers are async.
         *
         * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
         *
         * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
         * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
         * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
         * - `'user'`: just user arguments
         *
         * @example
         * program.parse(); // parse process.argv and auto-detect electron and special node flags
         * program.parse(process.argv); // assume argv[0] is app and argv[1] is script
         * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
         *
         * @param {string[]} [argv] - optional, defaults to process.argv
         * @param {object} [parseOptions] - optionally specify style of options with from: node/user/electron
         * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
         * @return {Command} `this` command for chaining
         */
        parse(argv, parseOptions) {
          this._prepareForParse();
          const userArgs = this._prepareUserArgs(argv, parseOptions);
          this._parseCommand([], userArgs);
          return this;
        }
        /**
         * Parse `argv`, setting options and invoking commands when defined.
         *
         * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
         *
         * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
         * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
         * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
         * - `'user'`: just user arguments
         *
         * @example
         * await program.parseAsync(); // parse process.argv and auto-detect electron and special node flags
         * await program.parseAsync(process.argv); // assume argv[0] is app and argv[1] is script
         * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
         *
         * @param {string[]} [argv]
         * @param {object} [parseOptions]
         * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
         * @return {Promise}
         */
        async parseAsync(argv, parseOptions) {
          this._prepareForParse();
          const userArgs = this._prepareUserArgs(argv, parseOptions);
          await this._parseCommand([], userArgs);
          return this;
        }
        _prepareForParse() {
          if (this._savedState === null) {
            this.saveStateBeforeParse();
          } else {
            this.restoreStateBeforeParse();
          }
        }
        /**
         * Called the first time parse is called to save state and allow a restore before subsequent calls to parse.
         * Not usually called directly, but available for subclasses to save their custom state.
         *
         * This is called in a lazy way. Only commands used in parsing chain will have state saved.
         */
        saveStateBeforeParse() {
          this._savedState = {
            // name is stable if supplied by author, but may be unspecified for root command and deduced during parsing
            _name: this._name,
            // option values before parse have default values (including false for negated options)
            // shallow clones
            _optionValues: { ...this._optionValues },
            _optionValueSources: { ...this._optionValueSources }
          };
        }
        /**
         * Restore state before parse for calls after the first.
         * Not usually called directly, but available for subclasses to save their custom state.
         *
         * This is called in a lazy way. Only commands used in parsing chain will have state restored.
         */
        restoreStateBeforeParse() {
          if (this._storeOptionsAsProperties)
            throw new Error(`Can not call parse again when storeOptionsAsProperties is true.
- either make a new Command for each call to parse, or stop storing options as properties`);
          this._name = this._savedState._name;
          this._scriptPath = null;
          this.rawArgs = [];
          this._optionValues = { ...this._savedState._optionValues };
          this._optionValueSources = { ...this._savedState._optionValueSources };
          this.args = [];
          this.processedArgs = [];
        }
        /**
         * Throw if expected executable is missing. Add lots of help for author.
         *
         * @param {string} executableFile
         * @param {string} executableDir
         * @param {string} subcommandName
         */
        _checkForMissingExecutable(executableFile, executableDir, subcommandName) {
          if (fs4.existsSync(executableFile)) return;
          const executableDirMessage = executableDir ? `searched for local subcommand relative to directory '${executableDir}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
          const executableMissing = `'${executableFile}' does not exist
 - if '${subcommandName}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
          throw new Error(executableMissing);
        }
        /**
         * Execute a sub-command executable.
         *
         * @private
         */
        _executeSubCommand(subcommand, args) {
          args = args.slice();
          let launchWithNode = false;
          const sourceExt = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
          function findFile(baseDir, baseName) {
            const localBin = path4.resolve(baseDir, baseName);
            if (fs4.existsSync(localBin)) return localBin;
            if (sourceExt.includes(path4.extname(baseName))) return void 0;
            const foundExt = sourceExt.find(
              (ext) => fs4.existsSync(`${localBin}${ext}`)
            );
            if (foundExt) return `${localBin}${foundExt}`;
            return void 0;
          }
          this._checkForMissingMandatoryOptions();
          this._checkForConflictingOptions();
          let executableFile = subcommand._executableFile || `${this._name}-${subcommand._name}`;
          let executableDir = this._executableDir || "";
          if (this._scriptPath) {
            let resolvedScriptPath;
            try {
              resolvedScriptPath = fs4.realpathSync(this._scriptPath);
            } catch {
              resolvedScriptPath = this._scriptPath;
            }
            executableDir = path4.resolve(
              path4.dirname(resolvedScriptPath),
              executableDir
            );
          }
          if (executableDir) {
            let localFile = findFile(executableDir, executableFile);
            if (!localFile && !subcommand._executableFile && this._scriptPath) {
              const legacyName = path4.basename(
                this._scriptPath,
                path4.extname(this._scriptPath)
              );
              if (legacyName !== this._name) {
                localFile = findFile(
                  executableDir,
                  `${legacyName}-${subcommand._name}`
                );
              }
            }
            executableFile = localFile || executableFile;
          }
          launchWithNode = sourceExt.includes(path4.extname(executableFile));
          let proc;
          if (process9.platform !== "win32") {
            if (launchWithNode) {
              args.unshift(executableFile);
              args = incrementNodeInspectorPort(process9.execArgv).concat(args);
              proc = childProcess.spawn(process9.argv[0], args, { stdio: "inherit" });
            } else {
              proc = childProcess.spawn(executableFile, args, { stdio: "inherit" });
            }
          } else {
            this._checkForMissingExecutable(
              executableFile,
              executableDir,
              subcommand._name
            );
            args.unshift(executableFile);
            args = incrementNodeInspectorPort(process9.execArgv).concat(args);
            proc = childProcess.spawn(process9.execPath, args, { stdio: "inherit" });
          }
          if (!proc.killed) {
            const signals2 = ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"];
            signals2.forEach((signal) => {
              process9.on(signal, () => {
                if (proc.killed === false && proc.exitCode === null) {
                  proc.kill(signal);
                }
              });
            });
          }
          const exitCallback = this._exitCallback;
          proc.on("close", (code) => {
            code = code ?? 1;
            if (!exitCallback) {
              process9.exit(code);
            } else {
              exitCallback(
                new CommanderError2(
                  code,
                  "commander.executeSubCommandAsync",
                  "(close)"
                )
              );
            }
          });
          proc.on("error", (err) => {
            if (err.code === "ENOENT") {
              this._checkForMissingExecutable(
                executableFile,
                executableDir,
                subcommand._name
              );
            } else if (err.code === "EACCES") {
              throw new Error(`'${executableFile}' not executable`);
            }
            if (!exitCallback) {
              process9.exit(1);
            } else {
              const wrappedError = new CommanderError2(
                1,
                "commander.executeSubCommandAsync",
                "(error)"
              );
              wrappedError.nestedError = err;
              exitCallback(wrappedError);
            }
          });
          this.runningCommand = proc;
        }
        /**
         * @private
         */
        _dispatchSubcommand(commandName, operands, unknown) {
          const subCommand = this._findCommand(commandName);
          if (!subCommand) this.help({ error: true });
          subCommand._prepareForParse();
          let promiseChain;
          promiseChain = this._chainOrCallSubCommandHook(
            promiseChain,
            subCommand,
            "preSubcommand"
          );
          promiseChain = this._chainOrCall(promiseChain, () => {
            if (subCommand._executableHandler) {
              this._executeSubCommand(subCommand, operands.concat(unknown));
            } else {
              return subCommand._parseCommand(operands, unknown);
            }
          });
          return promiseChain;
        }
        /**
         * Invoke help directly if possible, or dispatch if necessary.
         * e.g. help foo
         *
         * @private
         */
        _dispatchHelpCommand(subcommandName) {
          if (!subcommandName) {
            this.help();
          }
          const subCommand = this._findCommand(subcommandName);
          if (subCommand && !subCommand._executableHandler) {
            subCommand.help();
          }
          return this._dispatchSubcommand(
            subcommandName,
            [],
            [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help"]
          );
        }
        /**
         * Check this.args against expected this.registeredArguments.
         *
         * @private
         */
        _checkNumberOfArguments() {
          this.registeredArguments.forEach((arg, i) => {
            if (arg.required && this.args[i] == null) {
              this.missingArgument(arg.name());
            }
          });
          if (this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) {
            return;
          }
          if (this.args.length > this.registeredArguments.length) {
            this._excessArguments(this.args);
          }
        }
        /**
         * Process this.args using this.registeredArguments and save as this.processedArgs!
         *
         * @private
         */
        _processArguments() {
          const myParseArg = (argument, value, previous) => {
            let parsedValue = value;
            if (value !== null && argument.parseArg) {
              const invalidValueMessage = `error: command-argument value '${value}' is invalid for argument '${argument.name()}'.`;
              parsedValue = this._callParseArg(
                argument,
                value,
                previous,
                invalidValueMessage
              );
            }
            return parsedValue;
          };
          this._checkNumberOfArguments();
          const processedArgs = [];
          this.registeredArguments.forEach((declaredArg, index) => {
            let value = declaredArg.defaultValue;
            if (declaredArg.variadic) {
              if (index < this.args.length) {
                value = this.args.slice(index);
                if (declaredArg.parseArg) {
                  value = value.reduce((processed, v) => {
                    return myParseArg(declaredArg, v, processed);
                  }, declaredArg.defaultValue);
                }
              } else if (value === void 0) {
                value = [];
              }
            } else if (index < this.args.length) {
              value = this.args[index];
              if (declaredArg.parseArg) {
                value = myParseArg(declaredArg, value, declaredArg.defaultValue);
              }
            }
            processedArgs[index] = value;
          });
          this.processedArgs = processedArgs;
        }
        /**
         * Once we have a promise we chain, but call synchronously until then.
         *
         * @param {(Promise|undefined)} promise
         * @param {Function} fn
         * @return {(Promise|undefined)}
         * @private
         */
        _chainOrCall(promise, fn) {
          if (promise?.then && typeof promise.then === "function") {
            return promise.then(() => fn());
          }
          return fn();
        }
        /**
         *
         * @param {(Promise|undefined)} promise
         * @param {string} event
         * @return {(Promise|undefined)}
         * @private
         */
        _chainOrCallHooks(promise, event) {
          let result = promise;
          const hooks = [];
          this._getCommandAndAncestors().reverse().filter((cmd) => cmd._lifeCycleHooks[event] !== void 0).forEach((hookedCommand) => {
            hookedCommand._lifeCycleHooks[event].forEach((callback) => {
              hooks.push({ hookedCommand, callback });
            });
          });
          if (event === "postAction") {
            hooks.reverse();
          }
          hooks.forEach((hookDetail) => {
            result = this._chainOrCall(result, () => {
              return hookDetail.callback(hookDetail.hookedCommand, this);
            });
          });
          return result;
        }
        /**
         *
         * @param {(Promise|undefined)} promise
         * @param {Command} subCommand
         * @param {string} event
         * @return {(Promise|undefined)}
         * @private
         */
        _chainOrCallSubCommandHook(promise, subCommand, event) {
          let result = promise;
          if (this._lifeCycleHooks[event] !== void 0) {
            this._lifeCycleHooks[event].forEach((hook) => {
              result = this._chainOrCall(result, () => {
                return hook(this, subCommand);
              });
            });
          }
          return result;
        }
        /**
         * Process arguments in context of this command.
         * Returns action result, in case it is a promise.
         *
         * @private
         */
        _parseCommand(operands, unknown) {
          const parsed = this.parseOptions(unknown);
          this._parseOptionsEnv();
          this._parseOptionsImplied();
          operands = operands.concat(parsed.operands);
          unknown = parsed.unknown;
          this.args = operands.concat(unknown);
          if (operands && this._findCommand(operands[0])) {
            return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
          }
          if (this._getHelpCommand() && operands[0] === this._getHelpCommand().name()) {
            return this._dispatchHelpCommand(operands[1]);
          }
          if (this._defaultCommandName) {
            this._outputHelpIfRequested(unknown);
            return this._dispatchSubcommand(
              this._defaultCommandName,
              operands,
              unknown
            );
          }
          if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
            this.help({ error: true });
          }
          this._outputHelpIfRequested(parsed.unknown);
          this._checkForMissingMandatoryOptions();
          this._checkForConflictingOptions();
          const checkForUnknownOptions = () => {
            if (parsed.unknown.length > 0) {
              this.unknownOption(parsed.unknown[0]);
            }
          };
          const commandEvent = `command:${this.name()}`;
          if (this._actionHandler) {
            checkForUnknownOptions();
            this._processArguments();
            let promiseChain;
            promiseChain = this._chainOrCallHooks(promiseChain, "preAction");
            promiseChain = this._chainOrCall(
              promiseChain,
              () => this._actionHandler(this.processedArgs)
            );
            if (this.parent) {
              promiseChain = this._chainOrCall(promiseChain, () => {
                this.parent.emit(commandEvent, operands, unknown);
              });
            }
            promiseChain = this._chainOrCallHooks(promiseChain, "postAction");
            return promiseChain;
          }
          if (this.parent?.listenerCount(commandEvent)) {
            checkForUnknownOptions();
            this._processArguments();
            this.parent.emit(commandEvent, operands, unknown);
          } else if (operands.length) {
            if (this._findCommand("*")) {
              return this._dispatchSubcommand("*", operands, unknown);
            }
            if (this.listenerCount("command:*")) {
              this.emit("command:*", operands, unknown);
            } else if (this.commands.length) {
              this.unknownCommand();
            } else {
              checkForUnknownOptions();
              this._processArguments();
            }
          } else if (this.commands.length) {
            checkForUnknownOptions();
            this.help({ error: true });
          } else {
            checkForUnknownOptions();
            this._processArguments();
          }
        }
        /**
         * Find matching command.
         *
         * @private
         * @return {Command | undefined}
         */
        _findCommand(name) {
          if (!name) return void 0;
          return this.commands.find(
            (cmd) => cmd._name === name || cmd._aliases.includes(name)
          );
        }
        /**
         * Return an option matching `arg` if any.
         *
         * @param {string} arg
         * @return {Option}
         * @package
         */
        _findOption(arg) {
          return this.options.find((option) => option.is(arg));
        }
        /**
         * Display an error message if a mandatory option does not have a value.
         * Called after checking for help flags in leaf subcommand.
         *
         * @private
         */
        _checkForMissingMandatoryOptions() {
          this._getCommandAndAncestors().forEach((cmd) => {
            cmd.options.forEach((anOption) => {
              if (anOption.mandatory && cmd.getOptionValue(anOption.attributeName()) === void 0) {
                cmd.missingMandatoryOptionValue(anOption);
              }
            });
          });
        }
        /**
         * Display an error message if conflicting options are used together in this.
         *
         * @private
         */
        _checkForConflictingLocalOptions() {
          const definedNonDefaultOptions = this.options.filter((option) => {
            const optionKey = option.attributeName();
            if (this.getOptionValue(optionKey) === void 0) {
              return false;
            }
            return this.getOptionValueSource(optionKey) !== "default";
          });
          const optionsWithConflicting = definedNonDefaultOptions.filter(
            (option) => option.conflictsWith.length > 0
          );
          optionsWithConflicting.forEach((option) => {
            const conflictingAndDefined = definedNonDefaultOptions.find(
              (defined) => option.conflictsWith.includes(defined.attributeName())
            );
            if (conflictingAndDefined) {
              this._conflictingOption(option, conflictingAndDefined);
            }
          });
        }
        /**
         * Display an error message if conflicting options are used together.
         * Called after checking for help flags in leaf subcommand.
         *
         * @private
         */
        _checkForConflictingOptions() {
          this._getCommandAndAncestors().forEach((cmd) => {
            cmd._checkForConflictingLocalOptions();
          });
        }
        /**
         * Parse options from `argv` removing known options,
         * and return argv split into operands and unknown arguments.
         *
         * Side effects: modifies command by storing options. Does not reset state if called again.
         *
         * Examples:
         *
         *     argv => operands, unknown
         *     --known kkk op => [op], []
         *     op --known kkk => [op], []
         *     sub --unknown uuu op => [sub], [--unknown uuu op]
         *     sub -- --unknown uuu op => [sub --unknown uuu op], []
         *
         * @param {string[]} args
         * @return {{operands: string[], unknown: string[]}}
         */
        parseOptions(args) {
          const operands = [];
          const unknown = [];
          let dest = operands;
          function maybeOption(arg) {
            return arg.length > 1 && arg[0] === "-";
          }
          const negativeNumberArg = (arg) => {
            if (!/^-(\d+|\d*\.\d+)(e[+-]?\d+)?$/.test(arg)) return false;
            return !this._getCommandAndAncestors().some(
              (cmd) => cmd.options.map((opt) => opt.short).some((short) => /^-\d$/.test(short))
            );
          };
          let activeVariadicOption = null;
          let activeGroup = null;
          let i = 0;
          while (i < args.length || activeGroup) {
            const arg = activeGroup ?? args[i++];
            activeGroup = null;
            if (arg === "--") {
              if (dest === unknown) dest.push(arg);
              dest.push(...args.slice(i));
              break;
            }
            if (activeVariadicOption && (!maybeOption(arg) || negativeNumberArg(arg))) {
              this.emit(`option:${activeVariadicOption.name()}`, arg);
              continue;
            }
            activeVariadicOption = null;
            if (maybeOption(arg)) {
              const option = this._findOption(arg);
              if (option) {
                if (option.required) {
                  const value = args[i++];
                  if (value === void 0) this.optionMissingArgument(option);
                  this.emit(`option:${option.name()}`, value);
                } else if (option.optional) {
                  let value = null;
                  if (i < args.length && (!maybeOption(args[i]) || negativeNumberArg(args[i]))) {
                    value = args[i++];
                  }
                  this.emit(`option:${option.name()}`, value);
                } else {
                  this.emit(`option:${option.name()}`);
                }
                activeVariadicOption = option.variadic ? option : null;
                continue;
              }
            }
            if (arg.length > 2 && arg[0] === "-" && arg[1] !== "-") {
              const option = this._findOption(`-${arg[1]}`);
              if (option) {
                if (option.required || option.optional && this._combineFlagAndOptionalValue) {
                  this.emit(`option:${option.name()}`, arg.slice(2));
                } else {
                  this.emit(`option:${option.name()}`);
                  activeGroup = `-${arg.slice(2)}`;
                }
                continue;
              }
            }
            if (/^--[^=]+=/.test(arg)) {
              const index = arg.indexOf("=");
              const option = this._findOption(arg.slice(0, index));
              if (option && (option.required || option.optional)) {
                this.emit(`option:${option.name()}`, arg.slice(index + 1));
                continue;
              }
            }
            if (dest === operands && maybeOption(arg) && !(this.commands.length === 0 && negativeNumberArg(arg))) {
              dest = unknown;
            }
            if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
              if (this._findCommand(arg)) {
                operands.push(arg);
                unknown.push(...args.slice(i));
                break;
              } else if (this._getHelpCommand() && arg === this._getHelpCommand().name()) {
                operands.push(arg, ...args.slice(i));
                break;
              } else if (this._defaultCommandName) {
                unknown.push(arg, ...args.slice(i));
                break;
              }
            }
            if (this._passThroughOptions) {
              dest.push(arg, ...args.slice(i));
              break;
            }
            dest.push(arg);
          }
          return { operands, unknown };
        }
        /**
         * Return an object containing local option values as key-value pairs.
         *
         * @return {object}
         */
        opts() {
          if (this._storeOptionsAsProperties) {
            const result = {};
            const len = this.options.length;
            for (let i = 0; i < len; i++) {
              const key = this.options[i].attributeName();
              result[key] = key === this._versionOptionName ? this._version : this[key];
            }
            return result;
          }
          return this._optionValues;
        }
        /**
         * Return an object containing merged local and global option values as key-value pairs.
         *
         * @return {object}
         */
        optsWithGlobals() {
          return this._getCommandAndAncestors().reduce(
            (combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()),
            {}
          );
        }
        /**
         * Display error message and exit (or call exitOverride).
         *
         * @param {string} message
         * @param {object} [errorOptions]
         * @param {string} [errorOptions.code] - an id string representing the error
         * @param {number} [errorOptions.exitCode] - used with process.exit
         */
        error(message, errorOptions) {
          this._outputConfiguration.outputError(
            `${message}
`,
            this._outputConfiguration.writeErr
          );
          if (typeof this._showHelpAfterError === "string") {
            this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
          } else if (this._showHelpAfterError) {
            this._outputConfiguration.writeErr("\n");
            this.outputHelp({ error: true });
          }
          const config = errorOptions || {};
          const exitCode = config.exitCode || 1;
          const code = config.code || "commander.error";
          this._exit(exitCode, code, message);
        }
        /**
         * Apply any option related environment variables, if option does
         * not have a value from cli or client code.
         *
         * @private
         */
        _parseOptionsEnv() {
          this.options.forEach((option) => {
            if (option.envVar && option.envVar in process9.env) {
              const optionKey = option.attributeName();
              if (this.getOptionValue(optionKey) === void 0 || ["default", "config", "env"].includes(
                this.getOptionValueSource(optionKey)
              )) {
                if (option.required || option.optional) {
                  this.emit(`optionEnv:${option.name()}`, process9.env[option.envVar]);
                } else {
                  this.emit(`optionEnv:${option.name()}`);
                }
              }
            }
          });
        }
        /**
         * Apply any implied option values, if option is undefined or default value.
         *
         * @private
         */
        _parseOptionsImplied() {
          const dualHelper = new DualOptions(this.options);
          const hasCustomOptionValue = (optionKey) => {
            return this.getOptionValue(optionKey) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(optionKey));
          };
          this.options.filter(
            (option) => option.implied !== void 0 && hasCustomOptionValue(option.attributeName()) && dualHelper.valueFromOption(
              this.getOptionValue(option.attributeName()),
              option
            )
          ).forEach((option) => {
            Object.keys(option.implied).filter((impliedKey) => !hasCustomOptionValue(impliedKey)).forEach((impliedKey) => {
              this.setOptionValueWithSource(
                impliedKey,
                option.implied[impliedKey],
                "implied"
              );
            });
          });
        }
        /**
         * Argument `name` is missing.
         *
         * @param {string} name
         * @private
         */
        missingArgument(name) {
          const message = `error: missing required argument '${name}'`;
          this.error(message, { code: "commander.missingArgument" });
        }
        /**
         * `Option` is missing an argument.
         *
         * @param {Option} option
         * @private
         */
        optionMissingArgument(option) {
          const message = `error: option '${option.flags}' argument missing`;
          this.error(message, { code: "commander.optionMissingArgument" });
        }
        /**
         * `Option` does not have a value, and is a mandatory option.
         *
         * @param {Option} option
         * @private
         */
        missingMandatoryOptionValue(option) {
          const message = `error: required option '${option.flags}' not specified`;
          this.error(message, { code: "commander.missingMandatoryOptionValue" });
        }
        /**
         * `Option` conflicts with another option.
         *
         * @param {Option} option
         * @param {Option} conflictingOption
         * @private
         */
        _conflictingOption(option, conflictingOption) {
          const findBestOptionFromValue = (option2) => {
            const optionKey = option2.attributeName();
            const optionValue = this.getOptionValue(optionKey);
            const negativeOption = this.options.find(
              (target) => target.negate && optionKey === target.attributeName()
            );
            const positiveOption = this.options.find(
              (target) => !target.negate && optionKey === target.attributeName()
            );
            if (negativeOption && (negativeOption.presetArg === void 0 && optionValue === false || negativeOption.presetArg !== void 0 && optionValue === negativeOption.presetArg)) {
              return negativeOption;
            }
            return positiveOption || option2;
          };
          const getErrorMessage = (option2) => {
            const bestOption = findBestOptionFromValue(option2);
            const optionKey = bestOption.attributeName();
            const source = this.getOptionValueSource(optionKey);
            if (source === "env") {
              return `environment variable '${bestOption.envVar}'`;
            }
            return `option '${bestOption.flags}'`;
          };
          const message = `error: ${getErrorMessage(option)} cannot be used with ${getErrorMessage(conflictingOption)}`;
          this.error(message, { code: "commander.conflictingOption" });
        }
        /**
         * Unknown option `flag`.
         *
         * @param {string} flag
         * @private
         */
        unknownOption(flag) {
          if (this._allowUnknownOption) return;
          let suggestion = "";
          if (flag.startsWith("--") && this._showSuggestionAfterError) {
            let candidateFlags = [];
            let command = this;
            do {
              const moreFlags = command.createHelp().visibleOptions(command).filter((option) => option.long).map((option) => option.long);
              candidateFlags = candidateFlags.concat(moreFlags);
              command = command.parent;
            } while (command && !command._enablePositionalOptions);
            suggestion = suggestSimilar(flag, candidateFlags);
          }
          const message = `error: unknown option '${flag}'${suggestion}`;
          this.error(message, { code: "commander.unknownOption" });
        }
        /**
         * Excess arguments, more than expected.
         *
         * @param {string[]} receivedArgs
         * @private
         */
        _excessArguments(receivedArgs) {
          if (this._allowExcessArguments) return;
          const expected = this.registeredArguments.length;
          const s = expected === 1 ? "" : "s";
          const forSubcommand = this.parent ? ` for '${this.name()}'` : "";
          const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
          this.error(message, { code: "commander.excessArguments" });
        }
        /**
         * Unknown command.
         *
         * @private
         */
        unknownCommand() {
          const unknownName = this.args[0];
          let suggestion = "";
          if (this._showSuggestionAfterError) {
            const candidateNames = [];
            this.createHelp().visibleCommands(this).forEach((command) => {
              candidateNames.push(command.name());
              if (command.alias()) candidateNames.push(command.alias());
            });
            suggestion = suggestSimilar(unknownName, candidateNames);
          }
          const message = `error: unknown command '${unknownName}'${suggestion}`;
          this.error(message, { code: "commander.unknownCommand" });
        }
        /**
         * Get or set the program version.
         *
         * This method auto-registers the "-V, --version" option which will print the version number.
         *
         * You can optionally supply the flags and description to override the defaults.
         *
         * @param {string} [str]
         * @param {string} [flags]
         * @param {string} [description]
         * @return {(this | string | undefined)} `this` command for chaining, or version string if no arguments
         */
        version(str, flags, description) {
          if (str === void 0) return this._version;
          this._version = str;
          flags = flags || "-V, --version";
          description = description || "output the version number";
          const versionOption = this.createOption(flags, description);
          this._versionOptionName = versionOption.attributeName();
          this._registerOption(versionOption);
          this.on("option:" + versionOption.name(), () => {
            this._outputConfiguration.writeOut(`${str}
`);
            this._exit(0, "commander.version", str);
          });
          return this;
        }
        /**
         * Set the description.
         *
         * @param {string} [str]
         * @param {object} [argsDescription]
         * @return {(string|Command)}
         */
        description(str, argsDescription) {
          if (str === void 0 && argsDescription === void 0)
            return this._description;
          this._description = str;
          if (argsDescription) {
            this._argsDescription = argsDescription;
          }
          return this;
        }
        /**
         * Set the summary. Used when listed as subcommand of parent.
         *
         * @param {string} [str]
         * @return {(string|Command)}
         */
        summary(str) {
          if (str === void 0) return this._summary;
          this._summary = str;
          return this;
        }
        /**
         * Set an alias for the command.
         *
         * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
         *
         * @param {string} [alias]
         * @return {(string|Command)}
         */
        alias(alias) {
          if (alias === void 0) return this._aliases[0];
          let command = this;
          if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
            command = this.commands[this.commands.length - 1];
          }
          if (alias === command._name)
            throw new Error("Command alias can't be the same as its name");
          const matchingCommand = this.parent?._findCommand(alias);
          if (matchingCommand) {
            const existingCmd = [matchingCommand.name()].concat(matchingCommand.aliases()).join("|");
            throw new Error(
              `cannot add alias '${alias}' to command '${this.name()}' as already have command '${existingCmd}'`
            );
          }
          command._aliases.push(alias);
          return this;
        }
        /**
         * Set aliases for the command.
         *
         * Only the first alias is shown in the auto-generated help.
         *
         * @param {string[]} [aliases]
         * @return {(string[]|Command)}
         */
        aliases(aliases) {
          if (aliases === void 0) return this._aliases;
          aliases.forEach((alias) => this.alias(alias));
          return this;
        }
        /**
         * Set / get the command usage `str`.
         *
         * @param {string} [str]
         * @return {(string|Command)}
         */
        usage(str) {
          if (str === void 0) {
            if (this._usage) return this._usage;
            const args = this.registeredArguments.map((arg) => {
              return humanReadableArgName(arg);
            });
            return [].concat(
              this.options.length || this._helpOption !== null ? "[options]" : [],
              this.commands.length ? "[command]" : [],
              this.registeredArguments.length ? args : []
            ).join(" ");
          }
          this._usage = str;
          return this;
        }
        /**
         * Get or set the name of the command.
         *
         * @param {string} [str]
         * @return {(string|Command)}
         */
        name(str) {
          if (str === void 0) return this._name;
          this._name = str;
          return this;
        }
        /**
         * Set/get the help group heading for this subcommand in parent command's help.
         *
         * @param {string} [heading]
         * @return {Command | string}
         */
        helpGroup(heading) {
          if (heading === void 0) return this._helpGroupHeading ?? "";
          this._helpGroupHeading = heading;
          return this;
        }
        /**
         * Set/get the default help group heading for subcommands added to this command.
         * (This does not override a group set directly on the subcommand using .helpGroup().)
         *
         * @example
         * program.commandsGroup('Development Commands:);
         * program.command('watch')...
         * program.command('lint')...
         * ...
         *
         * @param {string} [heading]
         * @returns {Command | string}
         */
        commandsGroup(heading) {
          if (heading === void 0) return this._defaultCommandGroup ?? "";
          this._defaultCommandGroup = heading;
          return this;
        }
        /**
         * Set/get the default help group heading for options added to this command.
         * (This does not override a group set directly on the option using .helpGroup().)
         *
         * @example
         * program
         *   .optionsGroup('Development Options:')
         *   .option('-d, --debug', 'output extra debugging')
         *   .option('-p, --profile', 'output profiling information')
         *
         * @param {string} [heading]
         * @returns {Command | string}
         */
        optionsGroup(heading) {
          if (heading === void 0) return this._defaultOptionGroup ?? "";
          this._defaultOptionGroup = heading;
          return this;
        }
        /**
         * @param {Option} option
         * @private
         */
        _initOptionGroup(option) {
          if (this._defaultOptionGroup && !option.helpGroupHeading)
            option.helpGroup(this._defaultOptionGroup);
        }
        /**
         * @param {Command} cmd
         * @private
         */
        _initCommandGroup(cmd) {
          if (this._defaultCommandGroup && !cmd.helpGroup())
            cmd.helpGroup(this._defaultCommandGroup);
        }
        /**
         * Set the name of the command from script filename, such as process.argv[1],
         * or require.main.filename, or __filename.
         *
         * (Used internally and public although not documented in README.)
         *
         * @example
         * program.nameFromFilename(require.main.filename);
         *
         * @param {string} filename
         * @return {Command}
         */
        nameFromFilename(filename) {
          this._name = path4.basename(filename, path4.extname(filename));
          return this;
        }
        /**
         * Get or set the directory for searching for executable subcommands of this command.
         *
         * @example
         * program.executableDir(__dirname);
         * // or
         * program.executableDir('subcommands');
         *
         * @param {string} [path]
         * @return {(string|null|Command)}
         */
        executableDir(path5) {
          if (path5 === void 0) return this._executableDir;
          this._executableDir = path5;
          return this;
        }
        /**
         * Return program help documentation.
         *
         * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
         * @return {string}
         */
        helpInformation(contextOptions) {
          const helper = this.createHelp();
          const context = this._getOutputContext(contextOptions);
          helper.prepareContext({
            error: context.error,
            helpWidth: context.helpWidth,
            outputHasColors: context.hasColors
          });
          const text = helper.formatHelp(this, helper);
          if (context.hasColors) return text;
          return this._outputConfiguration.stripColor(text);
        }
        /**
         * @typedef HelpContext
         * @type {object}
         * @property {boolean} error
         * @property {number} helpWidth
         * @property {boolean} hasColors
         * @property {function} write - includes stripColor if needed
         *
         * @returns {HelpContext}
         * @private
         */
        _getOutputContext(contextOptions) {
          contextOptions = contextOptions || {};
          const error2 = !!contextOptions.error;
          let baseWrite;
          let hasColors2;
          let helpWidth;
          if (error2) {
            baseWrite = (str) => this._outputConfiguration.writeErr(str);
            hasColors2 = this._outputConfiguration.getErrHasColors();
            helpWidth = this._outputConfiguration.getErrHelpWidth();
          } else {
            baseWrite = (str) => this._outputConfiguration.writeOut(str);
            hasColors2 = this._outputConfiguration.getOutHasColors();
            helpWidth = this._outputConfiguration.getOutHelpWidth();
          }
          const write = (str) => {
            if (!hasColors2) str = this._outputConfiguration.stripColor(str);
            return baseWrite(str);
          };
          return { error: error2, write, hasColors: hasColors2, helpWidth };
        }
        /**
         * Output help information for this command.
         *
         * Outputs built-in help, and custom text added using `.addHelpText()`.
         *
         * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
         */
        outputHelp(contextOptions) {
          let deprecatedCallback;
          if (typeof contextOptions === "function") {
            deprecatedCallback = contextOptions;
            contextOptions = void 0;
          }
          const outputContext = this._getOutputContext(contextOptions);
          const eventContext = {
            error: outputContext.error,
            write: outputContext.write,
            command: this
          };
          this._getCommandAndAncestors().reverse().forEach((command) => command.emit("beforeAllHelp", eventContext));
          this.emit("beforeHelp", eventContext);
          let helpInformation = this.helpInformation({ error: outputContext.error });
          if (deprecatedCallback) {
            helpInformation = deprecatedCallback(helpInformation);
            if (typeof helpInformation !== "string" && !Buffer.isBuffer(helpInformation)) {
              throw new Error("outputHelp callback must return a string or a Buffer");
            }
          }
          outputContext.write(helpInformation);
          if (this._getHelpOption()?.long) {
            this.emit(this._getHelpOption().long);
          }
          this.emit("afterHelp", eventContext);
          this._getCommandAndAncestors().forEach(
            (command) => command.emit("afterAllHelp", eventContext)
          );
        }
        /**
         * You can pass in flags and a description to customise the built-in help option.
         * Pass in false to disable the built-in help option.
         *
         * @example
         * program.helpOption('-?, --help' 'show help'); // customise
         * program.helpOption(false); // disable
         *
         * @param {(string | boolean)} flags
         * @param {string} [description]
         * @return {Command} `this` command for chaining
         */
        helpOption(flags, description) {
          if (typeof flags === "boolean") {
            if (flags) {
              if (this._helpOption === null) this._helpOption = void 0;
              if (this._defaultOptionGroup) {
                this._initOptionGroup(this._getHelpOption());
              }
            } else {
              this._helpOption = null;
            }
            return this;
          }
          this._helpOption = this.createOption(
            flags ?? "-h, --help",
            description ?? "display help for command"
          );
          if (flags || description) this._initOptionGroup(this._helpOption);
          return this;
        }
        /**
         * Lazy create help option.
         * Returns null if has been disabled with .helpOption(false).
         *
         * @returns {(Option | null)} the help option
         * @package
         */
        _getHelpOption() {
          if (this._helpOption === void 0) {
            this.helpOption(void 0, void 0);
          }
          return this._helpOption;
        }
        /**
         * Supply your own option to use for the built-in help option.
         * This is an alternative to using helpOption() to customise the flags and description etc.
         *
         * @param {Option} option
         * @return {Command} `this` command for chaining
         */
        addHelpOption(option) {
          this._helpOption = option;
          this._initOptionGroup(option);
          return this;
        }
        /**
         * Output help information and exit.
         *
         * Outputs built-in help, and custom text added using `.addHelpText()`.
         *
         * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
         */
        help(contextOptions) {
          this.outputHelp(contextOptions);
          let exitCode = Number(process9.exitCode ?? 0);
          if (exitCode === 0 && contextOptions && typeof contextOptions !== "function" && contextOptions.error) {
            exitCode = 1;
          }
          this._exit(exitCode, "commander.help", "(outputHelp)");
        }
        /**
         * // Do a little typing to coordinate emit and listener for the help text events.
         * @typedef HelpTextEventContext
         * @type {object}
         * @property {boolean} error
         * @property {Command} command
         * @property {function} write
         */
        /**
         * Add additional text to be displayed with the built-in help.
         *
         * Position is 'before' or 'after' to affect just this command,
         * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
         *
         * @param {string} position - before or after built-in help
         * @param {(string | Function)} text - string to add, or a function returning a string
         * @return {Command} `this` command for chaining
         */
        addHelpText(position, text) {
          const allowedValues = ["beforeAll", "before", "after", "afterAll"];
          if (!allowedValues.includes(position)) {
            throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
          }
          const helpEvent = `${position}Help`;
          this.on(helpEvent, (context) => {
            let helpStr;
            if (typeof text === "function") {
              helpStr = text({ error: context.error, command: context.command });
            } else {
              helpStr = text;
            }
            if (helpStr) {
              context.write(`${helpStr}
`);
            }
          });
          return this;
        }
        /**
         * Output help information if help flags specified
         *
         * @param {Array} args - array of options to search for help flags
         * @private
         */
        _outputHelpIfRequested(args) {
          const helpOption = this._getHelpOption();
          const helpRequested = helpOption && args.find((arg) => helpOption.is(arg));
          if (helpRequested) {
            this.outputHelp();
            this._exit(0, "commander.helpDisplayed", "(outputHelp)");
          }
        }
      };
      function incrementNodeInspectorPort(args) {
        return args.map((arg) => {
          if (!arg.startsWith("--inspect")) {
            return arg;
          }
          let debugOption;
          let debugHost = "127.0.0.1";
          let debugPort = "9229";
          let match;
          if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
            debugOption = match[1];
          } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
            debugOption = match[1];
            if (/^\d+$/.test(match[3])) {
              debugPort = match[3];
            } else {
              debugHost = match[3];
            }
          } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
            debugOption = match[1];
            debugHost = match[3];
            debugPort = match[4];
          }
          if (debugOption && debugPort !== "0") {
            return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
          }
          return arg;
        });
      }
      function useColor() {
        if (process9.env.NO_COLOR || process9.env.FORCE_COLOR === "0" || process9.env.FORCE_COLOR === "false")
          return false;
        if (process9.env.FORCE_COLOR || process9.env.CLICOLOR_FORCE !== void 0)
          return true;
        return void 0;
      }
      exports.Command = Command2;
      exports.useColor = useColor;
    }
  });

  // node_modules/commander/index.js
  var require_commander = __commonJS({
    "node_modules/commander/index.js"(exports) {
      "use strict";
      var { Argument: Argument2 } = require_argument();
      var { Command: Command2 } = require_command();
      var { CommanderError: CommanderError2, InvalidArgumentError: InvalidArgumentError2 } = require_error();
      var { Help: Help2 } = require_help();
      var { Option: Option2 } = require_option();
      exports.program = new Command2();
      exports.createCommand = (name) => new Command2(name);
      exports.createOption = (flags, description) => new Option2(flags, description);
      exports.createArgument = (name, description) => new Argument2(name, description);
      exports.Command = Command2;
      exports.Option = Option2;
      exports.Argument = Argument2;
      exports.Help = Help2;
      exports.CommanderError = CommanderError2;
      exports.InvalidArgumentError = InvalidArgumentError2;
      exports.InvalidOptionArgumentError = InvalidArgumentError2;
    }
  });

  // node_modules/universalify/index.js
  var require_universalify = __commonJS({
    "node_modules/universalify/index.js"(exports) {
      "use strict";
      exports.fromCallback = function(fn) {
        return Object.defineProperty(function(...args) {
          if (typeof args[args.length - 1] === "function") fn.apply(this, args);
          else {
            return new Promise((resolve, reject) => {
              args.push((err, res) => err != null ? reject(err) : resolve(res));
              fn.apply(this, args);
            });
          }
        }, "name", { value: fn.name });
      };
      exports.fromPromise = function(fn) {
        return Object.defineProperty(function(...args) {
          const cb = args[args.length - 1];
          if (typeof cb !== "function") return fn.apply(this, args);
          else {
            args.pop();
            fn.apply(this, args).then((r) => cb(null, r), cb);
          }
        }, "name", { value: fn.name });
      };
    }
  });

  // node_modules/graceful-fs/polyfills.js
  var require_polyfills = __commonJS({
    "node_modules/graceful-fs/polyfills.js"(exports, module) {
      "use strict";
      var constants = __require("constants");
      var origCwd = process.cwd;
      var cwd = null;
      var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
      process.cwd = function() {
        if (!cwd)
          cwd = origCwd.call(process);
        return cwd;
      };
      try {
        process.cwd();
      } catch (er) {
      }
      if (typeof process.chdir === "function") {
        chdir = process.chdir;
        process.chdir = function(d) {
          cwd = null;
          chdir.call(process, d);
        };
        if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
      }
      var chdir;
      module.exports = patch;
      function patch(fs4) {
        if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
          patchLchmod(fs4);
        }
        if (!fs4.lutimes) {
          patchLutimes(fs4);
        }
        fs4.chown = chownFix(fs4.chown);
        fs4.fchown = chownFix(fs4.fchown);
        fs4.lchown = chownFix(fs4.lchown);
        fs4.chmod = chmodFix(fs4.chmod);
        fs4.fchmod = chmodFix(fs4.fchmod);
        fs4.lchmod = chmodFix(fs4.lchmod);
        fs4.chownSync = chownFixSync(fs4.chownSync);
        fs4.fchownSync = chownFixSync(fs4.fchownSync);
        fs4.lchownSync = chownFixSync(fs4.lchownSync);
        fs4.chmodSync = chmodFixSync(fs4.chmodSync);
        fs4.fchmodSync = chmodFixSync(fs4.fchmodSync);
        fs4.lchmodSync = chmodFixSync(fs4.lchmodSync);
        fs4.stat = statFix(fs4.stat);
        fs4.fstat = statFix(fs4.fstat);
        fs4.lstat = statFix(fs4.lstat);
        fs4.statSync = statFixSync(fs4.statSync);
        fs4.fstatSync = statFixSync(fs4.fstatSync);
        fs4.lstatSync = statFixSync(fs4.lstatSync);
        if (fs4.chmod && !fs4.lchmod) {
          fs4.lchmod = function(path4, mode, cb) {
            if (cb) process.nextTick(cb);
          };
          fs4.lchmodSync = function() {
          };
        }
        if (fs4.chown && !fs4.lchown) {
          fs4.lchown = function(path4, uid, gid, cb) {
            if (cb) process.nextTick(cb);
          };
          fs4.lchownSync = function() {
          };
        }
        if (platform === "win32") {
          fs4.rename = typeof fs4.rename !== "function" ? fs4.rename : (function(fs$rename) {
            function rename(from, to, cb) {
              var start = Date.now();
              var backoff = 0;
              fs$rename(from, to, function CB(er) {
                if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 6e4) {
                  setTimeout(function() {
                    fs4.stat(to, function(stater, st) {
                      if (stater && stater.code === "ENOENT")
                        fs$rename(from, to, CB);
                      else
                        cb(er);
                    });
                  }, backoff);
                  if (backoff < 100)
                    backoff += 10;
                  return;
                }
                if (cb) cb(er);
              });
            }
            if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
            return rename;
          })(fs4.rename);
        }
        fs4.read = typeof fs4.read !== "function" ? fs4.read : (function(fs$read) {
          function read(fd, buffer, offset, length, position, callback_) {
            var callback;
            if (callback_ && typeof callback_ === "function") {
              var eagCounter = 0;
              callback = function(er, _, __) {
                if (er && er.code === "EAGAIN" && eagCounter < 10) {
                  eagCounter++;
                  return fs$read.call(fs4, fd, buffer, offset, length, position, callback);
                }
                callback_.apply(this, arguments);
              };
            }
            return fs$read.call(fs4, fd, buffer, offset, length, position, callback);
          }
          if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
          return read;
        })(fs4.read);
        fs4.readSync = typeof fs4.readSync !== "function" ? fs4.readSync : /* @__PURE__ */ (function(fs$readSync) {
          return function(fd, buffer, offset, length, position) {
            var eagCounter = 0;
            while (true) {
              try {
                return fs$readSync.call(fs4, fd, buffer, offset, length, position);
              } catch (er) {
                if (er.code === "EAGAIN" && eagCounter < 10) {
                  eagCounter++;
                  continue;
                }
                throw er;
              }
            }
          };
        })(fs4.readSync);
        function patchLchmod(fs5) {
          fs5.lchmod = function(path4, mode, callback) {
            fs5.open(
              path4,
              constants.O_WRONLY | constants.O_SYMLINK,
              mode,
              function(err, fd) {
                if (err) {
                  if (callback) callback(err);
                  return;
                }
                fs5.fchmod(fd, mode, function(err2) {
                  fs5.close(fd, function(err22) {
                    if (callback) callback(err2 || err22);
                  });
                });
              }
            );
          };
          fs5.lchmodSync = function(path4, mode) {
            var fd = fs5.openSync(path4, constants.O_WRONLY | constants.O_SYMLINK, mode);
            var threw = true;
            var ret;
            try {
              ret = fs5.fchmodSync(fd, mode);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs5.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs5.closeSync(fd);
              }
            }
            return ret;
          };
        }
        function patchLutimes(fs5) {
          if (constants.hasOwnProperty("O_SYMLINK") && fs5.futimes) {
            fs5.lutimes = function(path4, at, mt, cb) {
              fs5.open(path4, constants.O_SYMLINK, function(er, fd) {
                if (er) {
                  if (cb) cb(er);
                  return;
                }
                fs5.futimes(fd, at, mt, function(er2) {
                  fs5.close(fd, function(er22) {
                    if (cb) cb(er2 || er22);
                  });
                });
              });
            };
            fs5.lutimesSync = function(path4, at, mt) {
              var fd = fs5.openSync(path4, constants.O_SYMLINK);
              var ret;
              var threw = true;
              try {
                ret = fs5.futimesSync(fd, at, mt);
                threw = false;
              } finally {
                if (threw) {
                  try {
                    fs5.closeSync(fd);
                  } catch (er) {
                  }
                } else {
                  fs5.closeSync(fd);
                }
              }
              return ret;
            };
          } else if (fs5.futimes) {
            fs5.lutimes = function(_a, _b, _c, cb) {
              if (cb) process.nextTick(cb);
            };
            fs5.lutimesSync = function() {
            };
          }
        }
        function chmodFix(orig) {
          if (!orig) return orig;
          return function(target, mode, cb) {
            return orig.call(fs4, target, mode, function(er) {
              if (chownErOk(er)) er = null;
              if (cb) cb.apply(this, arguments);
            });
          };
        }
        function chmodFixSync(orig) {
          if (!orig) return orig;
          return function(target, mode) {
            try {
              return orig.call(fs4, target, mode);
            } catch (er) {
              if (!chownErOk(er)) throw er;
            }
          };
        }
        function chownFix(orig) {
          if (!orig) return orig;
          return function(target, uid, gid, cb) {
            return orig.call(fs4, target, uid, gid, function(er) {
              if (chownErOk(er)) er = null;
              if (cb) cb.apply(this, arguments);
            });
          };
        }
        function chownFixSync(orig) {
          if (!orig) return orig;
          return function(target, uid, gid) {
            try {
              return orig.call(fs4, target, uid, gid);
            } catch (er) {
              if (!chownErOk(er)) throw er;
            }
          };
        }
        function statFix(orig) {
          if (!orig) return orig;
          return function(target, options, cb) {
            if (typeof options === "function") {
              cb = options;
              options = null;
            }
            function callback(er, stats) {
              if (stats) {
                if (stats.uid < 0) stats.uid += 4294967296;
                if (stats.gid < 0) stats.gid += 4294967296;
              }
              if (cb) cb.apply(this, arguments);
            }
            return options ? orig.call(fs4, target, options, callback) : orig.call(fs4, target, callback);
          };
        }
        function statFixSync(orig) {
          if (!orig) return orig;
          return function(target, options) {
            var stats = options ? orig.call(fs4, target, options) : orig.call(fs4, target);
            if (stats) {
              if (stats.uid < 0) stats.uid += 4294967296;
              if (stats.gid < 0) stats.gid += 4294967296;
            }
            return stats;
          };
        }
        function chownErOk(er) {
          if (!er)
            return true;
          if (er.code === "ENOSYS")
            return true;
          var nonroot = !process.getuid || process.getuid() !== 0;
          if (nonroot) {
            if (er.code === "EINVAL" || er.code === "EPERM")
              return true;
          }
          return false;
        }
      }
    }
  });

  // node_modules/graceful-fs/legacy-streams.js
  var require_legacy_streams = __commonJS({
    "node_modules/graceful-fs/legacy-streams.js"(exports, module) {
      "use strict";
      var Stream = __require("stream").Stream;
      module.exports = legacy;
      function legacy(fs4) {
        return {
          ReadStream,
          WriteStream
        };
        function ReadStream(path4, options) {
          if (!(this instanceof ReadStream)) return new ReadStream(path4, options);
          Stream.call(this);
          var self = this;
          this.path = path4;
          this.fd = null;
          this.readable = true;
          this.paused = false;
          this.flags = "r";
          this.mode = 438;
          this.bufferSize = 64 * 1024;
          options = options || {};
          var keys = Object.keys(options);
          for (var index = 0, length = keys.length; index < length; index++) {
            var key = keys[index];
            this[key] = options[key];
          }
          if (this.encoding) this.setEncoding(this.encoding);
          if (this.start !== void 0) {
            if ("number" !== typeof this.start) {
              throw TypeError("start must be a Number");
            }
            if (this.end === void 0) {
              this.end = Infinity;
            } else if ("number" !== typeof this.end) {
              throw TypeError("end must be a Number");
            }
            if (this.start > this.end) {
              throw new Error("start must be <= end");
            }
            this.pos = this.start;
          }
          if (this.fd !== null) {
            process.nextTick(function() {
              self._read();
            });
            return;
          }
          fs4.open(this.path, this.flags, this.mode, function(err, fd) {
            if (err) {
              self.emit("error", err);
              self.readable = false;
              return;
            }
            self.fd = fd;
            self.emit("open", fd);
            self._read();
          });
        }
        function WriteStream(path4, options) {
          if (!(this instanceof WriteStream)) return new WriteStream(path4, options);
          Stream.call(this);
          this.path = path4;
          this.fd = null;
          this.writable = true;
          this.flags = "w";
          this.encoding = "binary";
          this.mode = 438;
          this.bytesWritten = 0;
          options = options || {};
          var keys = Object.keys(options);
          for (var index = 0, length = keys.length; index < length; index++) {
            var key = keys[index];
            this[key] = options[key];
          }
          if (this.start !== void 0) {
            if ("number" !== typeof this.start) {
              throw TypeError("start must be a Number");
            }
            if (this.start < 0) {
              throw new Error("start must be >= zero");
            }
            this.pos = this.start;
          }
          this.busy = false;
          this._queue = [];
          if (this.fd === null) {
            this._open = fs4.open;
            this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
            this.flush();
          }
        }
      }
    }
  });

  // node_modules/graceful-fs/clone.js
  var require_clone = __commonJS({
    "node_modules/graceful-fs/clone.js"(exports, module) {
      "use strict";
      module.exports = clone;
      var getPrototypeOf = Object.getPrototypeOf || function(obj) {
        return obj.__proto__;
      };
      function clone(obj) {
        if (obj === null || typeof obj !== "object")
          return obj;
        if (obj instanceof Object)
          var copy = { __proto__: getPrototypeOf(obj) };
        else
          var copy = /* @__PURE__ */ Object.create(null);
        Object.getOwnPropertyNames(obj).forEach(function(key) {
          Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
        });
        return copy;
      }
    }
  });

  // node_modules/graceful-fs/graceful-fs.js
  var require_graceful_fs = __commonJS({
    "node_modules/graceful-fs/graceful-fs.js"(exports, module) {
      "use strict";
      var fs4 = __require("fs");
      var polyfills = require_polyfills();
      var legacy = require_legacy_streams();
      var clone = require_clone();
      var util = __require("util");
      var gracefulQueue;
      var previousSymbol;
      if (typeof Symbol === "function" && typeof Symbol.for === "function") {
        gracefulQueue = /* @__PURE__ */ Symbol.for("graceful-fs.queue");
        previousSymbol = /* @__PURE__ */ Symbol.for("graceful-fs.previous");
      } else {
        gracefulQueue = "___graceful-fs.queue";
        previousSymbol = "___graceful-fs.previous";
      }
      function noop() {
      }
      function publishQueue(context, queue2) {
        Object.defineProperty(context, gracefulQueue, {
          get: function() {
            return queue2;
          }
        });
      }
      var debug = noop;
      if (util.debuglog)
        debug = util.debuglog("gfs4");
      else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
        debug = function() {
          var m = util.format.apply(util, arguments);
          m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
          console.error(m);
        };
      if (!fs4[gracefulQueue]) {
        queue = global[gracefulQueue] || [];
        publishQueue(fs4, queue);
        fs4.close = (function(fs$close) {
          function close(fd, cb) {
            return fs$close.call(fs4, fd, function(err) {
              if (!err) {
                resetQueue();
              }
              if (typeof cb === "function")
                cb.apply(this, arguments);
            });
          }
          Object.defineProperty(close, previousSymbol, {
            value: fs$close
          });
          return close;
        })(fs4.close);
        fs4.closeSync = (function(fs$closeSync) {
          function closeSync(fd) {
            fs$closeSync.apply(fs4, arguments);
            resetQueue();
          }
          Object.defineProperty(closeSync, previousSymbol, {
            value: fs$closeSync
          });
          return closeSync;
        })(fs4.closeSync);
        if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
          process.on("exit", function() {
            debug(fs4[gracefulQueue]);
            __require("assert").equal(fs4[gracefulQueue].length, 0);
          });
        }
      }
      var queue;
      if (!global[gracefulQueue]) {
        publishQueue(global, fs4[gracefulQueue]);
      }
      module.exports = patch(clone(fs4));
      if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs4.__patched) {
        module.exports = patch(fs4);
        fs4.__patched = true;
      }
      function patch(fs5) {
        polyfills(fs5);
        fs5.gracefulify = patch;
        fs5.createReadStream = createReadStream;
        fs5.createWriteStream = createWriteStream;
        var fs$readFile = fs5.readFile;
        fs5.readFile = readFile;
        function readFile(path4, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$readFile(path4, options, cb);
          function go$readFile(path5, options2, cb2, startTime) {
            return fs$readFile(path5, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$readFile, [path5, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$writeFile = fs5.writeFile;
        fs5.writeFile = writeFile;
        function writeFile(path4, data, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$writeFile(path4, data, options, cb);
          function go$writeFile(path5, data2, options2, cb2, startTime) {
            return fs$writeFile(path5, data2, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$writeFile, [path5, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$appendFile = fs5.appendFile;
        if (fs$appendFile)
          fs5.appendFile = appendFile;
        function appendFile(path4, data, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$appendFile(path4, data, options, cb);
          function go$appendFile(path5, data2, options2, cb2, startTime) {
            return fs$appendFile(path5, data2, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$appendFile, [path5, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$copyFile = fs5.copyFile;
        if (fs$copyFile)
          fs5.copyFile = copyFile;
        function copyFile(src, dest, flags, cb) {
          if (typeof flags === "function") {
            cb = flags;
            flags = 0;
          }
          return go$copyFile(src, dest, flags, cb);
          function go$copyFile(src2, dest2, flags2, cb2, startTime) {
            return fs$copyFile(src2, dest2, flags2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$readdir = fs5.readdir;
        fs5.readdir = readdir;
        var noReaddirOptionVersions = /^v[0-5]\./;
        function readdir(path4, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path5, options2, cb2, startTime) {
            return fs$readdir(path5, fs$readdirCallback(
              path5,
              options2,
              cb2,
              startTime
            ));
          } : function go$readdir2(path5, options2, cb2, startTime) {
            return fs$readdir(path5, options2, fs$readdirCallback(
              path5,
              options2,
              cb2,
              startTime
            ));
          };
          return go$readdir(path4, options, cb);
          function fs$readdirCallback(path5, options2, cb2, startTime) {
            return function(err, files) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([
                  go$readdir,
                  [path5, options2, cb2],
                  err,
                  startTime || Date.now(),
                  Date.now()
                ]);
              else {
                if (files && files.sort)
                  files.sort();
                if (typeof cb2 === "function")
                  cb2.call(this, err, files);
              }
            };
          }
        }
        if (process.version.substr(0, 4) === "v0.8") {
          var legStreams = legacy(fs5);
          ReadStream = legStreams.ReadStream;
          WriteStream = legStreams.WriteStream;
        }
        var fs$ReadStream = fs5.ReadStream;
        if (fs$ReadStream) {
          ReadStream.prototype = Object.create(fs$ReadStream.prototype);
          ReadStream.prototype.open = ReadStream$open;
        }
        var fs$WriteStream = fs5.WriteStream;
        if (fs$WriteStream) {
          WriteStream.prototype = Object.create(fs$WriteStream.prototype);
          WriteStream.prototype.open = WriteStream$open;
        }
        Object.defineProperty(fs5, "ReadStream", {
          get: function() {
            return ReadStream;
          },
          set: function(val) {
            ReadStream = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(fs5, "WriteStream", {
          get: function() {
            return WriteStream;
          },
          set: function(val) {
            WriteStream = val;
          },
          enumerable: true,
          configurable: true
        });
        var FileReadStream = ReadStream;
        Object.defineProperty(fs5, "FileReadStream", {
          get: function() {
            return FileReadStream;
          },
          set: function(val) {
            FileReadStream = val;
          },
          enumerable: true,
          configurable: true
        });
        var FileWriteStream = WriteStream;
        Object.defineProperty(fs5, "FileWriteStream", {
          get: function() {
            return FileWriteStream;
          },
          set: function(val) {
            FileWriteStream = val;
          },
          enumerable: true,
          configurable: true
        });
        function ReadStream(path4, options) {
          if (this instanceof ReadStream)
            return fs$ReadStream.apply(this, arguments), this;
          else
            return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
        }
        function ReadStream$open() {
          var that = this;
          open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
              if (that.autoClose)
                that.destroy();
              that.emit("error", err);
            } else {
              that.fd = fd;
              that.emit("open", fd);
              that.read();
            }
          });
        }
        function WriteStream(path4, options) {
          if (this instanceof WriteStream)
            return fs$WriteStream.apply(this, arguments), this;
          else
            return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
        }
        function WriteStream$open() {
          var that = this;
          open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
              that.destroy();
              that.emit("error", err);
            } else {
              that.fd = fd;
              that.emit("open", fd);
            }
          });
        }
        function createReadStream(path4, options) {
          return new fs5.ReadStream(path4, options);
        }
        function createWriteStream(path4, options) {
          return new fs5.WriteStream(path4, options);
        }
        var fs$open = fs5.open;
        fs5.open = open;
        function open(path4, flags, mode, cb) {
          if (typeof mode === "function")
            cb = mode, mode = null;
          return go$open(path4, flags, mode, cb);
          function go$open(path5, flags2, mode2, cb2, startTime) {
            return fs$open(path5, flags2, mode2, function(err, fd) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$open, [path5, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        return fs5;
      }
      function enqueue(elem) {
        debug("ENQUEUE", elem[0].name, elem[1]);
        fs4[gracefulQueue].push(elem);
        retry();
      }
      var retryTimer;
      function resetQueue() {
        var now = Date.now();
        for (var i = 0; i < fs4[gracefulQueue].length; ++i) {
          if (fs4[gracefulQueue][i].length > 2) {
            fs4[gracefulQueue][i][3] = now;
            fs4[gracefulQueue][i][4] = now;
          }
        }
        retry();
      }
      function retry() {
        clearTimeout(retryTimer);
        retryTimer = void 0;
        if (fs4[gracefulQueue].length === 0)
          return;
        var elem = fs4[gracefulQueue].shift();
        var fn = elem[0];
        var args = elem[1];
        var err = elem[2];
        var startTime = elem[3];
        var lastTime = elem[4];
        if (startTime === void 0) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args);
        } else if (Date.now() - startTime >= 6e4) {
          debug("TIMEOUT", fn.name, args);
          var cb = args.pop();
          if (typeof cb === "function")
            cb.call(null, err);
        } else {
          var sinceAttempt = Date.now() - lastTime;
          var sinceStart = Math.max(lastTime - startTime, 1);
          var desiredDelay = Math.min(sinceStart * 1.2, 100);
          if (sinceAttempt >= desiredDelay) {
            debug("RETRY", fn.name, args);
            fn.apply(null, args.concat([startTime]));
          } else {
            fs4[gracefulQueue].push(elem);
          }
        }
        if (retryTimer === void 0) {
          retryTimer = setTimeout(retry, 0);
        }
      }
    }
  });

  // node_modules/fs-extra/lib/fs/index.js
  var require_fs = __commonJS({
    "node_modules/fs-extra/lib/fs/index.js"(exports) {
      "use strict";
      var u = require_universalify().fromCallback;
      var fs4 = require_graceful_fs();
      var api = [
        "access",
        "appendFile",
        "chmod",
        "chown",
        "close",
        "copyFile",
        "cp",
        "fchmod",
        "fchown",
        "fdatasync",
        "fstat",
        "fsync",
        "ftruncate",
        "futimes",
        "glob",
        "lchmod",
        "lchown",
        "lutimes",
        "link",
        "lstat",
        "mkdir",
        "mkdtemp",
        "open",
        "opendir",
        "readdir",
        "readFile",
        "readlink",
        "realpath",
        "rename",
        "rm",
        "rmdir",
        "stat",
        "statfs",
        "symlink",
        "truncate",
        "unlink",
        "utimes",
        "writeFile"
      ].filter((key) => {
        return typeof fs4[key] === "function";
      });
      Object.assign(exports, fs4);
      api.forEach((method) => {
        exports[method] = u(fs4[method]);
      });
      exports.exists = function(filename, callback) {
        if (typeof callback === "function") {
          return fs4.exists(filename, callback);
        }
        return new Promise((resolve) => {
          return fs4.exists(filename, resolve);
        });
      };
      exports.read = function(fd, buffer, offset, length, position, callback) {
        if (typeof callback === "function") {
          return fs4.read(fd, buffer, offset, length, position, callback);
        }
        return new Promise((resolve, reject) => {
          fs4.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
            if (err) return reject(err);
            resolve({ bytesRead, buffer: buffer2 });
          });
        });
      };
      exports.write = function(fd, buffer, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs4.write(fd, buffer, ...args);
        }
        return new Promise((resolve, reject) => {
          fs4.write(fd, buffer, ...args, (err, bytesWritten, buffer2) => {
            if (err) return reject(err);
            resolve({ bytesWritten, buffer: buffer2 });
          });
        });
      };
      exports.readv = function(fd, buffers, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs4.readv(fd, buffers, ...args);
        }
        return new Promise((resolve, reject) => {
          fs4.readv(fd, buffers, ...args, (err, bytesRead, buffers2) => {
            if (err) return reject(err);
            resolve({ bytesRead, buffers: buffers2 });
          });
        });
      };
      exports.writev = function(fd, buffers, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs4.writev(fd, buffers, ...args);
        }
        return new Promise((resolve, reject) => {
          fs4.writev(fd, buffers, ...args, (err, bytesWritten, buffers2) => {
            if (err) return reject(err);
            resolve({ bytesWritten, buffers: buffers2 });
          });
        });
      };
      if (typeof fs4.realpath.native === "function") {
        exports.realpath.native = u(fs4.realpath.native);
      } else {
        process.emitWarning(
          "fs.realpath.native is not a function. Is fs being monkey-patched?",
          "Warning",
          "fs-extra-WARN0003"
        );
      }
    }
  });

  // node_modules/fs-extra/lib/mkdirs/utils.js
  var require_utils = __commonJS({
    "node_modules/fs-extra/lib/mkdirs/utils.js"(exports, module) {
      "use strict";
      var path4 = __require("path");
      module.exports.checkPath = function checkPath(pth) {
        if (process.platform === "win32") {
          const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path4.parse(pth).root, ""));
          if (pathHasInvalidWinCharacters) {
            const error2 = new Error(`Path contains invalid characters: ${pth}`);
            error2.code = "EINVAL";
            throw error2;
          }
        }
      };
    }
  });

  // node_modules/fs-extra/lib/mkdirs/make-dir.js
  var require_make_dir = __commonJS({
    "node_modules/fs-extra/lib/mkdirs/make-dir.js"(exports, module) {
      "use strict";
      var fs4 = require_fs();
      var { checkPath } = require_utils();
      var getMode = (options) => {
        const defaults = { mode: 511 };
        if (typeof options === "number") return options;
        return { ...defaults, ...options }.mode;
      };
      module.exports.makeDir = async (dir, options) => {
        checkPath(dir);
        return fs4.mkdir(dir, {
          mode: getMode(options),
          recursive: true
        });
      };
      module.exports.makeDirSync = (dir, options) => {
        checkPath(dir);
        return fs4.mkdirSync(dir, {
          mode: getMode(options),
          recursive: true
        });
      };
    }
  });

  // node_modules/fs-extra/lib/mkdirs/index.js
  var require_mkdirs = __commonJS({
    "node_modules/fs-extra/lib/mkdirs/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var { makeDir: _makeDir, makeDirSync } = require_make_dir();
      var makeDir = u(_makeDir);
      module.exports = {
        mkdirs: makeDir,
        mkdirsSync: makeDirSync,
        // alias
        mkdirp: makeDir,
        mkdirpSync: makeDirSync,
        ensureDir: makeDir,
        ensureDirSync: makeDirSync
      };
    }
  });

  // node_modules/fs-extra/lib/path-exists/index.js
  var require_path_exists = __commonJS({
    "node_modules/fs-extra/lib/path-exists/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var fs4 = require_fs();
      function pathExists(path4) {
        return fs4.access(path4).then(() => true).catch(() => false);
      }
      module.exports = {
        pathExists: u(pathExists),
        pathExistsSync: fs4.existsSync
      };
    }
  });

  // node_modules/fs-extra/lib/util/utimes.js
  var require_utimes = __commonJS({
    "node_modules/fs-extra/lib/util/utimes.js"(exports, module) {
      "use strict";
      var fs4 = require_fs();
      var u = require_universalify().fromPromise;
      async function utimesMillis(path4, atime, mtime) {
        const fd = await fs4.open(path4, "r+");
        let closeErr = null;
        try {
          await fs4.futimes(fd, atime, mtime);
        } finally {
          try {
            await fs4.close(fd);
          } catch (e) {
            closeErr = e;
          }
        }
        if (closeErr) {
          throw closeErr;
        }
      }
      function utimesMillisSync(path4, atime, mtime) {
        const fd = fs4.openSync(path4, "r+");
        fs4.futimesSync(fd, atime, mtime);
        return fs4.closeSync(fd);
      }
      module.exports = {
        utimesMillis: u(utimesMillis),
        utimesMillisSync
      };
    }
  });

  // node_modules/fs-extra/lib/util/stat.js
  var require_stat = __commonJS({
    "node_modules/fs-extra/lib/util/stat.js"(exports, module) {
      "use strict";
      var fs4 = require_fs();
      var path4 = __require("path");
      var u = require_universalify().fromPromise;
      function getStats(src, dest, opts) {
        const statFunc = opts.dereference ? (file) => fs4.stat(file, { bigint: true }) : (file) => fs4.lstat(file, { bigint: true });
        return Promise.all([
          statFunc(src),
          statFunc(dest).catch((err) => {
            if (err.code === "ENOENT") return null;
            throw err;
          })
        ]).then(([srcStat, destStat]) => ({ srcStat, destStat }));
      }
      function getStatsSync(src, dest, opts) {
        let destStat;
        const statFunc = opts.dereference ? (file) => fs4.statSync(file, { bigint: true }) : (file) => fs4.lstatSync(file, { bigint: true });
        const srcStat = statFunc(src);
        try {
          destStat = statFunc(dest);
        } catch (err) {
          if (err.code === "ENOENT") return { srcStat, destStat: null };
          throw err;
        }
        return { srcStat, destStat };
      }
      async function checkPaths(src, dest, funcName, opts) {
        const { srcStat, destStat } = await getStats(src, dest, opts);
        if (destStat) {
          if (areIdentical(srcStat, destStat)) {
            const srcBaseName = path4.basename(src);
            const destBaseName = path4.basename(dest);
            if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
              return { srcStat, destStat, isChangingCase: true };
            }
            throw new Error("Source and destination must not be the same.");
          }
          if (srcStat.isDirectory() && !destStat.isDirectory()) {
            throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
          }
          if (!srcStat.isDirectory() && destStat.isDirectory()) {
            throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
          }
        }
        if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
          throw new Error(errMsg(src, dest, funcName));
        }
        return { srcStat, destStat };
      }
      function checkPathsSync(src, dest, funcName, opts) {
        const { srcStat, destStat } = getStatsSync(src, dest, opts);
        if (destStat) {
          if (areIdentical(srcStat, destStat)) {
            const srcBaseName = path4.basename(src);
            const destBaseName = path4.basename(dest);
            if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
              return { srcStat, destStat, isChangingCase: true };
            }
            throw new Error("Source and destination must not be the same.");
          }
          if (srcStat.isDirectory() && !destStat.isDirectory()) {
            throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
          }
          if (!srcStat.isDirectory() && destStat.isDirectory()) {
            throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
          }
        }
        if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
          throw new Error(errMsg(src, dest, funcName));
        }
        return { srcStat, destStat };
      }
      async function checkParentPaths(src, srcStat, dest, funcName) {
        const srcParent = path4.resolve(path4.dirname(src));
        const destParent = path4.resolve(path4.dirname(dest));
        if (destParent === srcParent || destParent === path4.parse(destParent).root) return;
        let destStat;
        try {
          destStat = await fs4.stat(destParent, { bigint: true });
        } catch (err) {
          if (err.code === "ENOENT") return;
          throw err;
        }
        if (areIdentical(srcStat, destStat)) {
          throw new Error(errMsg(src, dest, funcName));
        }
        return checkParentPaths(src, srcStat, destParent, funcName);
      }
      function checkParentPathsSync(src, srcStat, dest, funcName) {
        const srcParent = path4.resolve(path4.dirname(src));
        const destParent = path4.resolve(path4.dirname(dest));
        if (destParent === srcParent || destParent === path4.parse(destParent).root) return;
        let destStat;
        try {
          destStat = fs4.statSync(destParent, { bigint: true });
        } catch (err) {
          if (err.code === "ENOENT") return;
          throw err;
        }
        if (areIdentical(srcStat, destStat)) {
          throw new Error(errMsg(src, dest, funcName));
        }
        return checkParentPathsSync(src, srcStat, destParent, funcName);
      }
      function areIdentical(srcStat, destStat) {
        return destStat.ino !== void 0 && destStat.dev !== void 0 && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
      }
      function isSrcSubdir(src, dest) {
        const srcArr = path4.resolve(src).split(path4.sep).filter((i) => i);
        const destArr = path4.resolve(dest).split(path4.sep).filter((i) => i);
        return srcArr.every((cur, i) => destArr[i] === cur);
      }
      function errMsg(src, dest, funcName) {
        return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
      }
      module.exports = {
        // checkPaths
        checkPaths: u(checkPaths),
        checkPathsSync,
        // checkParent
        checkParentPaths: u(checkParentPaths),
        checkParentPathsSync,
        // Misc
        isSrcSubdir,
        areIdentical
      };
    }
  });

  // node_modules/fs-extra/lib/util/async.js
  var require_async = __commonJS({
    "node_modules/fs-extra/lib/util/async.js"(exports, module) {
      "use strict";
      async function asyncIteratorConcurrentProcess(iterator, fn) {
        const promises = [];
        for await (const item of iterator) {
          promises.push(
            fn(item).then(
              () => null,
              (err) => err ?? new Error("unknown error")
            )
          );
        }
        await Promise.all(
          promises.map(
            (promise) => promise.then((possibleErr) => {
              if (possibleErr !== null) throw possibleErr;
            })
          )
        );
      }
      module.exports = {
        asyncIteratorConcurrentProcess
      };
    }
  });

  // node_modules/fs-extra/lib/copy/copy.js
  var require_copy = __commonJS({
    "node_modules/fs-extra/lib/copy/copy.js"(exports, module) {
      "use strict";
      var fs4 = require_fs();
      var path4 = __require("path");
      var { mkdirs } = require_mkdirs();
      var { pathExists } = require_path_exists();
      var { utimesMillis } = require_utimes();
      var stat = require_stat();
      var { asyncIteratorConcurrentProcess } = require_async();
      async function copy(src, dest, opts = {}) {
        if (typeof opts === "function") {
          opts = { filter: opts };
        }
        opts.clobber = "clobber" in opts ? !!opts.clobber : true;
        opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
        if (opts.preserveTimestamps && process.arch === "ia32") {
          process.emitWarning(
            "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n	see https://github.com/jprichardson/node-fs-extra/issues/269",
            "Warning",
            "fs-extra-WARN0001"
          );
        }
        const { srcStat, destStat } = await stat.checkPaths(src, dest, "copy", opts);
        await stat.checkParentPaths(src, srcStat, dest, "copy");
        const include = await runFilter(src, dest, opts);
        if (!include) return;
        const destParent = path4.dirname(dest);
        const dirExists = await pathExists(destParent);
        if (!dirExists) {
          await mkdirs(destParent);
        }
        await getStatsAndPerformCopy(destStat, src, dest, opts);
      }
      async function runFilter(src, dest, opts) {
        if (!opts.filter) return true;
        return opts.filter(src, dest);
      }
      async function getStatsAndPerformCopy(destStat, src, dest, opts) {
        const statFn = opts.dereference ? fs4.stat : fs4.lstat;
        const srcStat = await statFn(src);
        if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);
        if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);
        if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);
        if (srcStat.isSocket()) throw new Error(`Cannot copy a socket file: ${src}`);
        if (srcStat.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${src}`);
        throw new Error(`Unknown file: ${src}`);
      }
      async function onFile(srcStat, destStat, src, dest, opts) {
        if (!destStat) return copyFile(srcStat, src, dest, opts);
        if (opts.overwrite) {
          await fs4.unlink(dest);
          return copyFile(srcStat, src, dest, opts);
        }
        if (opts.errorOnExist) {
          throw new Error(`'${dest}' already exists`);
        }
      }
      async function copyFile(srcStat, src, dest, opts) {
        await fs4.copyFile(src, dest);
        if (opts.preserveTimestamps) {
          if (fileIsNotWritable(srcStat.mode)) {
            await makeFileWritable(dest, srcStat.mode);
          }
          const updatedSrcStat = await fs4.stat(src);
          await utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
        }
        return fs4.chmod(dest, srcStat.mode);
      }
      function fileIsNotWritable(srcMode) {
        return (srcMode & 128) === 0;
      }
      function makeFileWritable(dest, srcMode) {
        return fs4.chmod(dest, srcMode | 128);
      }
      async function onDir(srcStat, destStat, src, dest, opts) {
        if (!destStat) {
          await fs4.mkdir(dest);
        }
        await asyncIteratorConcurrentProcess(await fs4.opendir(src), async (item) => {
          const srcItem = path4.join(src, item.name);
          const destItem = path4.join(dest, item.name);
          const include = await runFilter(srcItem, destItem, opts);
          if (include) {
            const { destStat: destStat2 } = await stat.checkPaths(srcItem, destItem, "copy", opts);
            await getStatsAndPerformCopy(destStat2, srcItem, destItem, opts);
          }
        });
        if (!destStat) {
          await fs4.chmod(dest, srcStat.mode);
        }
      }
      async function onLink(destStat, src, dest, opts) {
        let resolvedSrc = await fs4.readlink(src);
        if (opts.dereference) {
          resolvedSrc = path4.resolve(process.cwd(), resolvedSrc);
        }
        if (!destStat) {
          return fs4.symlink(resolvedSrc, dest);
        }
        let resolvedDest = null;
        try {
          resolvedDest = await fs4.readlink(dest);
        } catch (e) {
          if (e.code === "EINVAL" || e.code === "UNKNOWN") return fs4.symlink(resolvedSrc, dest);
          throw e;
        }
        if (opts.dereference) {
          resolvedDest = path4.resolve(process.cwd(), resolvedDest);
        }
        if (resolvedSrc !== resolvedDest) {
          if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
            throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
          }
          if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
            throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
          }
        }
        await fs4.unlink(dest);
        return fs4.symlink(resolvedSrc, dest);
      }
      module.exports = copy;
    }
  });

  // node_modules/fs-extra/lib/copy/copy-sync.js
  var require_copy_sync = __commonJS({
    "node_modules/fs-extra/lib/copy/copy-sync.js"(exports, module) {
      "use strict";
      var fs4 = require_graceful_fs();
      var path4 = __require("path");
      var mkdirsSync = require_mkdirs().mkdirsSync;
      var utimesMillisSync = require_utimes().utimesMillisSync;
      var stat = require_stat();
      function copySync(src, dest, opts) {
        if (typeof opts === "function") {
          opts = { filter: opts };
        }
        opts = opts || {};
        opts.clobber = "clobber" in opts ? !!opts.clobber : true;
        opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
        if (opts.preserveTimestamps && process.arch === "ia32") {
          process.emitWarning(
            "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n	see https://github.com/jprichardson/node-fs-extra/issues/269",
            "Warning",
            "fs-extra-WARN0002"
          );
        }
        const { srcStat, destStat } = stat.checkPathsSync(src, dest, "copy", opts);
        stat.checkParentPathsSync(src, srcStat, dest, "copy");
        if (opts.filter && !opts.filter(src, dest)) return;
        const destParent = path4.dirname(dest);
        if (!fs4.existsSync(destParent)) mkdirsSync(destParent);
        return getStats(destStat, src, dest, opts);
      }
      function getStats(destStat, src, dest, opts) {
        const statSync = opts.dereference ? fs4.statSync : fs4.lstatSync;
        const srcStat = statSync(src);
        if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);
        else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);
        else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);
        else if (srcStat.isSocket()) throw new Error(`Cannot copy a socket file: ${src}`);
        else if (srcStat.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${src}`);
        throw new Error(`Unknown file: ${src}`);
      }
      function onFile(srcStat, destStat, src, dest, opts) {
        if (!destStat) return copyFile(srcStat, src, dest, opts);
        return mayCopyFile(srcStat, src, dest, opts);
      }
      function mayCopyFile(srcStat, src, dest, opts) {
        if (opts.overwrite) {
          fs4.unlinkSync(dest);
          return copyFile(srcStat, src, dest, opts);
        } else if (opts.errorOnExist) {
          throw new Error(`'${dest}' already exists`);
        }
      }
      function copyFile(srcStat, src, dest, opts) {
        fs4.copyFileSync(src, dest);
        if (opts.preserveTimestamps) handleTimestamps(srcStat.mode, src, dest);
        return setDestMode(dest, srcStat.mode);
      }
      function handleTimestamps(srcMode, src, dest) {
        if (fileIsNotWritable(srcMode)) makeFileWritable(dest, srcMode);
        return setDestTimestamps(src, dest);
      }
      function fileIsNotWritable(srcMode) {
        return (srcMode & 128) === 0;
      }
      function makeFileWritable(dest, srcMode) {
        return setDestMode(dest, srcMode | 128);
      }
      function setDestMode(dest, srcMode) {
        return fs4.chmodSync(dest, srcMode);
      }
      function setDestTimestamps(src, dest) {
        const updatedSrcStat = fs4.statSync(src);
        return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
      }
      function onDir(srcStat, destStat, src, dest, opts) {
        if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts);
        return copyDir(src, dest, opts);
      }
      function mkDirAndCopy(srcMode, src, dest, opts) {
        fs4.mkdirSync(dest);
        copyDir(src, dest, opts);
        return setDestMode(dest, srcMode);
      }
      function copyDir(src, dest, opts) {
        const dir = fs4.opendirSync(src);
        try {
          let dirent;
          while ((dirent = dir.readSync()) !== null) {
            copyDirItem(dirent.name, src, dest, opts);
          }
        } finally {
          dir.closeSync();
        }
      }
      function copyDirItem(item, src, dest, opts) {
        const srcItem = path4.join(src, item);
        const destItem = path4.join(dest, item);
        if (opts.filter && !opts.filter(srcItem, destItem)) return;
        const { destStat } = stat.checkPathsSync(srcItem, destItem, "copy", opts);
        return getStats(destStat, srcItem, destItem, opts);
      }
      function onLink(destStat, src, dest, opts) {
        let resolvedSrc = fs4.readlinkSync(src);
        if (opts.dereference) {
          resolvedSrc = path4.resolve(process.cwd(), resolvedSrc);
        }
        if (!destStat) {
          return fs4.symlinkSync(resolvedSrc, dest);
        } else {
          let resolvedDest;
          try {
            resolvedDest = fs4.readlinkSync(dest);
          } catch (err) {
            if (err.code === "EINVAL" || err.code === "UNKNOWN") return fs4.symlinkSync(resolvedSrc, dest);
            throw err;
          }
          if (opts.dereference) {
            resolvedDest = path4.resolve(process.cwd(), resolvedDest);
          }
          if (resolvedSrc !== resolvedDest) {
            if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
              throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
            }
            if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
              throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
            }
          }
          return copyLink(resolvedSrc, dest);
        }
      }
      function copyLink(resolvedSrc, dest) {
        fs4.unlinkSync(dest);
        return fs4.symlinkSync(resolvedSrc, dest);
      }
      module.exports = copySync;
    }
  });

  // node_modules/fs-extra/lib/copy/index.js
  var require_copy2 = __commonJS({
    "node_modules/fs-extra/lib/copy/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      module.exports = {
        copy: u(require_copy()),
        copySync: require_copy_sync()
      };
    }
  });

  // node_modules/fs-extra/lib/remove/index.js
  var require_remove = __commonJS({
    "node_modules/fs-extra/lib/remove/index.js"(exports, module) {
      "use strict";
      var fs4 = require_graceful_fs();
      var u = require_universalify().fromCallback;
      function remove(path4, callback) {
        fs4.rm(path4, { recursive: true, force: true }, callback);
      }
      function removeSync(path4) {
        fs4.rmSync(path4, { recursive: true, force: true });
      }
      module.exports = {
        remove: u(remove),
        removeSync
      };
    }
  });

  // node_modules/fs-extra/lib/empty/index.js
  var require_empty = __commonJS({
    "node_modules/fs-extra/lib/empty/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var fs4 = require_fs();
      var path4 = __require("path");
      var mkdir = require_mkdirs();
      var remove = require_remove();
      var emptyDir = u(async function emptyDir2(dir) {
        let items;
        try {
          items = await fs4.readdir(dir);
        } catch {
          return mkdir.mkdirs(dir);
        }
        return Promise.all(items.map((item) => remove.remove(path4.join(dir, item))));
      });
      function emptyDirSync(dir) {
        let items;
        try {
          items = fs4.readdirSync(dir);
        } catch {
          return mkdir.mkdirsSync(dir);
        }
        items.forEach((item) => {
          item = path4.join(dir, item);
          remove.removeSync(item);
        });
      }
      module.exports = {
        emptyDirSync,
        emptydirSync: emptyDirSync,
        emptyDir,
        emptydir: emptyDir
      };
    }
  });

  // node_modules/fs-extra/lib/ensure/file.js
  var require_file = __commonJS({
    "node_modules/fs-extra/lib/ensure/file.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var path4 = __require("path");
      var fs4 = require_fs();
      var mkdir = require_mkdirs();
      async function createFile(file) {
        let stats;
        try {
          stats = await fs4.stat(file);
        } catch {
        }
        if (stats && stats.isFile()) return;
        const dir = path4.dirname(file);
        let dirStats = null;
        try {
          dirStats = await fs4.stat(dir);
        } catch (err) {
          if (err.code === "ENOENT") {
            await mkdir.mkdirs(dir);
            await fs4.writeFile(file, "");
            return;
          } else {
            throw err;
          }
        }
        if (dirStats.isDirectory()) {
          await fs4.writeFile(file, "");
        } else {
          await fs4.readdir(dir);
        }
      }
      function createFileSync(file) {
        let stats;
        try {
          stats = fs4.statSync(file);
        } catch {
        }
        if (stats && stats.isFile()) return;
        const dir = path4.dirname(file);
        try {
          if (!fs4.statSync(dir).isDirectory()) {
            fs4.readdirSync(dir);
          }
        } catch (err) {
          if (err && err.code === "ENOENT") mkdir.mkdirsSync(dir);
          else throw err;
        }
        fs4.writeFileSync(file, "");
      }
      module.exports = {
        createFile: u(createFile),
        createFileSync
      };
    }
  });

  // node_modules/fs-extra/lib/ensure/link.js
  var require_link = __commonJS({
    "node_modules/fs-extra/lib/ensure/link.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var path4 = __require("path");
      var fs4 = require_fs();
      var mkdir = require_mkdirs();
      var { pathExists } = require_path_exists();
      var { areIdentical } = require_stat();
      async function createLink(srcpath, dstpath) {
        let dstStat;
        try {
          dstStat = await fs4.lstat(dstpath);
        } catch {
        }
        let srcStat;
        try {
          srcStat = await fs4.lstat(srcpath);
        } catch (err) {
          err.message = err.message.replace("lstat", "ensureLink");
          throw err;
        }
        if (dstStat && areIdentical(srcStat, dstStat)) return;
        const dir = path4.dirname(dstpath);
        const dirExists = await pathExists(dir);
        if (!dirExists) {
          await mkdir.mkdirs(dir);
        }
        await fs4.link(srcpath, dstpath);
      }
      function createLinkSync(srcpath, dstpath) {
        let dstStat;
        try {
          dstStat = fs4.lstatSync(dstpath);
        } catch {
        }
        try {
          const srcStat = fs4.lstatSync(srcpath);
          if (dstStat && areIdentical(srcStat, dstStat)) return;
        } catch (err) {
          err.message = err.message.replace("lstat", "ensureLink");
          throw err;
        }
        const dir = path4.dirname(dstpath);
        const dirExists = fs4.existsSync(dir);
        if (dirExists) return fs4.linkSync(srcpath, dstpath);
        mkdir.mkdirsSync(dir);
        return fs4.linkSync(srcpath, dstpath);
      }
      module.exports = {
        createLink: u(createLink),
        createLinkSync
      };
    }
  });

  // node_modules/fs-extra/lib/ensure/symlink-paths.js
  var require_symlink_paths = __commonJS({
    "node_modules/fs-extra/lib/ensure/symlink-paths.js"(exports, module) {
      "use strict";
      var path4 = __require("path");
      var fs4 = require_fs();
      var { pathExists } = require_path_exists();
      var u = require_universalify().fromPromise;
      async function symlinkPaths(srcpath, dstpath) {
        if (path4.isAbsolute(srcpath)) {
          try {
            await fs4.lstat(srcpath);
          } catch (err) {
            err.message = err.message.replace("lstat", "ensureSymlink");
            throw err;
          }
          return {
            toCwd: srcpath,
            toDst: srcpath
          };
        }
        const dstdir = path4.dirname(dstpath);
        const relativeToDst = path4.join(dstdir, srcpath);
        const exists = await pathExists(relativeToDst);
        if (exists) {
          return {
            toCwd: relativeToDst,
            toDst: srcpath
          };
        }
        try {
          await fs4.lstat(srcpath);
        } catch (err) {
          err.message = err.message.replace("lstat", "ensureSymlink");
          throw err;
        }
        return {
          toCwd: srcpath,
          toDst: path4.relative(dstdir, srcpath)
        };
      }
      function symlinkPathsSync(srcpath, dstpath) {
        if (path4.isAbsolute(srcpath)) {
          const exists2 = fs4.existsSync(srcpath);
          if (!exists2) throw new Error("absolute srcpath does not exist");
          return {
            toCwd: srcpath,
            toDst: srcpath
          };
        }
        const dstdir = path4.dirname(dstpath);
        const relativeToDst = path4.join(dstdir, srcpath);
        const exists = fs4.existsSync(relativeToDst);
        if (exists) {
          return {
            toCwd: relativeToDst,
            toDst: srcpath
          };
        }
        const srcExists = fs4.existsSync(srcpath);
        if (!srcExists) throw new Error("relative srcpath does not exist");
        return {
          toCwd: srcpath,
          toDst: path4.relative(dstdir, srcpath)
        };
      }
      module.exports = {
        symlinkPaths: u(symlinkPaths),
        symlinkPathsSync
      };
    }
  });

  // node_modules/fs-extra/lib/ensure/symlink-type.js
  var require_symlink_type = __commonJS({
    "node_modules/fs-extra/lib/ensure/symlink-type.js"(exports, module) {
      "use strict";
      var fs4 = require_fs();
      var u = require_universalify().fromPromise;
      async function symlinkType(srcpath, type) {
        if (type) return type;
        let stats;
        try {
          stats = await fs4.lstat(srcpath);
        } catch {
          return "file";
        }
        return stats && stats.isDirectory() ? "dir" : "file";
      }
      function symlinkTypeSync(srcpath, type) {
        if (type) return type;
        let stats;
        try {
          stats = fs4.lstatSync(srcpath);
        } catch {
          return "file";
        }
        return stats && stats.isDirectory() ? "dir" : "file";
      }
      module.exports = {
        symlinkType: u(symlinkType),
        symlinkTypeSync
      };
    }
  });

  // node_modules/fs-extra/lib/ensure/symlink.js
  var require_symlink = __commonJS({
    "node_modules/fs-extra/lib/ensure/symlink.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var path4 = __require("path");
      var fs4 = require_fs();
      var { mkdirs, mkdirsSync } = require_mkdirs();
      var { symlinkPaths, symlinkPathsSync } = require_symlink_paths();
      var { symlinkType, symlinkTypeSync } = require_symlink_type();
      var { pathExists } = require_path_exists();
      var { areIdentical } = require_stat();
      async function createSymlink(srcpath, dstpath, type) {
        let stats;
        try {
          stats = await fs4.lstat(dstpath);
        } catch {
        }
        if (stats && stats.isSymbolicLink()) {
          const [srcStat, dstStat] = await Promise.all([
            fs4.stat(srcpath),
            fs4.stat(dstpath)
          ]);
          if (areIdentical(srcStat, dstStat)) return;
        }
        const relative = await symlinkPaths(srcpath, dstpath);
        srcpath = relative.toDst;
        const toType = await symlinkType(relative.toCwd, type);
        const dir = path4.dirname(dstpath);
        if (!await pathExists(dir)) {
          await mkdirs(dir);
        }
        return fs4.symlink(srcpath, dstpath, toType);
      }
      function createSymlinkSync(srcpath, dstpath, type) {
        let stats;
        try {
          stats = fs4.lstatSync(dstpath);
        } catch {
        }
        if (stats && stats.isSymbolicLink()) {
          const srcStat = fs4.statSync(srcpath);
          const dstStat = fs4.statSync(dstpath);
          if (areIdentical(srcStat, dstStat)) return;
        }
        const relative = symlinkPathsSync(srcpath, dstpath);
        srcpath = relative.toDst;
        type = symlinkTypeSync(relative.toCwd, type);
        const dir = path4.dirname(dstpath);
        const exists = fs4.existsSync(dir);
        if (exists) return fs4.symlinkSync(srcpath, dstpath, type);
        mkdirsSync(dir);
        return fs4.symlinkSync(srcpath, dstpath, type);
      }
      module.exports = {
        createSymlink: u(createSymlink),
        createSymlinkSync
      };
    }
  });

  // node_modules/fs-extra/lib/ensure/index.js
  var require_ensure = __commonJS({
    "node_modules/fs-extra/lib/ensure/index.js"(exports, module) {
      "use strict";
      var { createFile, createFileSync } = require_file();
      var { createLink, createLinkSync } = require_link();
      var { createSymlink, createSymlinkSync } = require_symlink();
      module.exports = {
        // file
        createFile,
        createFileSync,
        ensureFile: createFile,
        ensureFileSync: createFileSync,
        // link
        createLink,
        createLinkSync,
        ensureLink: createLink,
        ensureLinkSync: createLinkSync,
        // symlink
        createSymlink,
        createSymlinkSync,
        ensureSymlink: createSymlink,
        ensureSymlinkSync: createSymlinkSync
      };
    }
  });

  // node_modules/jsonfile/utils.js
  var require_utils2 = __commonJS({
    "node_modules/jsonfile/utils.js"(exports, module) {
      "use strict";
      function stringify(obj, { EOL = "\n", finalEOL = true, replacer = null, spaces } = {}) {
        const EOF = finalEOL ? EOL : "";
        const str = JSON.stringify(obj, replacer, spaces);
        return str.replace(/\n/g, EOL) + EOF;
      }
      function stripBom(content) {
        if (Buffer.isBuffer(content)) content = content.toString("utf8");
        return content.replace(/^\uFEFF/, "");
      }
      module.exports = { stringify, stripBom };
    }
  });

  // node_modules/jsonfile/index.js
  var require_jsonfile = __commonJS({
    "node_modules/jsonfile/index.js"(exports, module) {
      "use strict";
      var _fs;
      try {
        _fs = require_graceful_fs();
      } catch (_) {
        _fs = __require("fs");
      }
      var universalify = require_universalify();
      var { stringify, stripBom } = require_utils2();
      async function _readFile(file, options = {}) {
        if (typeof options === "string") {
          options = { encoding: options };
        }
        const fs4 = options.fs || _fs;
        const shouldThrow = "throws" in options ? options.throws : true;
        let data = await universalify.fromCallback(fs4.readFile)(file, options);
        data = stripBom(data);
        let obj;
        try {
          obj = JSON.parse(data, options ? options.reviver : null);
        } catch (err) {
          if (shouldThrow) {
            err.message = `${file}: ${err.message}`;
            throw err;
          } else {
            return null;
          }
        }
        return obj;
      }
      var readFile = universalify.fromPromise(_readFile);
      function readFileSync(file, options = {}) {
        if (typeof options === "string") {
          options = { encoding: options };
        }
        const fs4 = options.fs || _fs;
        const shouldThrow = "throws" in options ? options.throws : true;
        try {
          let content = fs4.readFileSync(file, options);
          content = stripBom(content);
          return JSON.parse(content, options.reviver);
        } catch (err) {
          if (shouldThrow) {
            err.message = `${file}: ${err.message}`;
            throw err;
          } else {
            return null;
          }
        }
      }
      async function _writeFile(file, obj, options = {}) {
        const fs4 = options.fs || _fs;
        const str = stringify(obj, options);
        await universalify.fromCallback(fs4.writeFile)(file, str, options);
      }
      var writeFile = universalify.fromPromise(_writeFile);
      function writeFileSync(file, obj, options = {}) {
        const fs4 = options.fs || _fs;
        const str = stringify(obj, options);
        return fs4.writeFileSync(file, str, options);
      }
      module.exports = {
        readFile,
        readFileSync,
        writeFile,
        writeFileSync
      };
    }
  });

  // node_modules/fs-extra/lib/json/jsonfile.js
  var require_jsonfile2 = __commonJS({
    "node_modules/fs-extra/lib/json/jsonfile.js"(exports, module) {
      "use strict";
      var jsonFile = require_jsonfile();
      module.exports = {
        // jsonfile exports
        readJson: jsonFile.readFile,
        readJsonSync: jsonFile.readFileSync,
        writeJson: jsonFile.writeFile,
        writeJsonSync: jsonFile.writeFileSync
      };
    }
  });

  // node_modules/fs-extra/lib/output-file/index.js
  var require_output_file = __commonJS({
    "node_modules/fs-extra/lib/output-file/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var fs4 = require_fs();
      var path4 = __require("path");
      var mkdir = require_mkdirs();
      var pathExists = require_path_exists().pathExists;
      async function outputFile(file, data, encoding = "utf-8") {
        const dir = path4.dirname(file);
        if (!await pathExists(dir)) {
          await mkdir.mkdirs(dir);
        }
        return fs4.writeFile(file, data, encoding);
      }
      function outputFileSync(file, ...args) {
        const dir = path4.dirname(file);
        if (!fs4.existsSync(dir)) {
          mkdir.mkdirsSync(dir);
        }
        fs4.writeFileSync(file, ...args);
      }
      module.exports = {
        outputFile: u(outputFile),
        outputFileSync
      };
    }
  });

  // node_modules/fs-extra/lib/json/output-json.js
  var require_output_json = __commonJS({
    "node_modules/fs-extra/lib/json/output-json.js"(exports, module) {
      "use strict";
      var { stringify } = require_utils2();
      var { outputFile } = require_output_file();
      async function outputJson(file, data, options = {}) {
        const str = stringify(data, options);
        await outputFile(file, str, options);
      }
      module.exports = outputJson;
    }
  });

  // node_modules/fs-extra/lib/json/output-json-sync.js
  var require_output_json_sync = __commonJS({
    "node_modules/fs-extra/lib/json/output-json-sync.js"(exports, module) {
      "use strict";
      var { stringify } = require_utils2();
      var { outputFileSync } = require_output_file();
      function outputJsonSync(file, data, options) {
        const str = stringify(data, options);
        outputFileSync(file, str, options);
      }
      module.exports = outputJsonSync;
    }
  });

  // node_modules/fs-extra/lib/json/index.js
  var require_json = __commonJS({
    "node_modules/fs-extra/lib/json/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var jsonFile = require_jsonfile2();
      jsonFile.outputJson = u(require_output_json());
      jsonFile.outputJsonSync = require_output_json_sync();
      jsonFile.outputJSON = jsonFile.outputJson;
      jsonFile.outputJSONSync = jsonFile.outputJsonSync;
      jsonFile.writeJSON = jsonFile.writeJson;
      jsonFile.writeJSONSync = jsonFile.writeJsonSync;
      jsonFile.readJSON = jsonFile.readJson;
      jsonFile.readJSONSync = jsonFile.readJsonSync;
      module.exports = jsonFile;
    }
  });

  // node_modules/fs-extra/lib/move/move.js
  var require_move = __commonJS({
    "node_modules/fs-extra/lib/move/move.js"(exports, module) {
      "use strict";
      var fs4 = require_fs();
      var path4 = __require("path");
      var { copy } = require_copy2();
      var { remove } = require_remove();
      var { mkdirp } = require_mkdirs();
      var { pathExists } = require_path_exists();
      var stat = require_stat();
      async function move(src, dest, opts = {}) {
        const overwrite = opts.overwrite || opts.clobber || false;
        const { srcStat, isChangingCase = false } = await stat.checkPaths(src, dest, "move", opts);
        await stat.checkParentPaths(src, srcStat, dest, "move");
        const destParent = path4.dirname(dest);
        const parsedParentPath = path4.parse(destParent);
        if (parsedParentPath.root !== destParent) {
          await mkdirp(destParent);
        }
        return doRename(src, dest, overwrite, isChangingCase);
      }
      async function doRename(src, dest, overwrite, isChangingCase) {
        if (!isChangingCase) {
          if (overwrite) {
            await remove(dest);
          } else if (await pathExists(dest)) {
            throw new Error("dest already exists.");
          }
        }
        try {
          await fs4.rename(src, dest);
        } catch (err) {
          if (err.code !== "EXDEV") {
            throw err;
          }
          await moveAcrossDevice(src, dest, overwrite);
        }
      }
      async function moveAcrossDevice(src, dest, overwrite) {
        const opts = {
          overwrite,
          errorOnExist: true,
          preserveTimestamps: true
        };
        await copy(src, dest, opts);
        return remove(src);
      }
      module.exports = move;
    }
  });

  // node_modules/fs-extra/lib/move/move-sync.js
  var require_move_sync = __commonJS({
    "node_modules/fs-extra/lib/move/move-sync.js"(exports, module) {
      "use strict";
      var fs4 = require_graceful_fs();
      var path4 = __require("path");
      var copySync = require_copy2().copySync;
      var removeSync = require_remove().removeSync;
      var mkdirpSync = require_mkdirs().mkdirpSync;
      var stat = require_stat();
      function moveSync(src, dest, opts) {
        opts = opts || {};
        const overwrite = opts.overwrite || opts.clobber || false;
        const { srcStat, isChangingCase = false } = stat.checkPathsSync(src, dest, "move", opts);
        stat.checkParentPathsSync(src, srcStat, dest, "move");
        if (!isParentRoot(dest)) mkdirpSync(path4.dirname(dest));
        return doRename(src, dest, overwrite, isChangingCase);
      }
      function isParentRoot(dest) {
        const parent = path4.dirname(dest);
        const parsedPath = path4.parse(parent);
        return parsedPath.root === parent;
      }
      function doRename(src, dest, overwrite, isChangingCase) {
        if (isChangingCase) return rename(src, dest, overwrite);
        if (overwrite) {
          removeSync(dest);
          return rename(src, dest, overwrite);
        }
        if (fs4.existsSync(dest)) throw new Error("dest already exists.");
        return rename(src, dest, overwrite);
      }
      function rename(src, dest, overwrite) {
        try {
          fs4.renameSync(src, dest);
        } catch (err) {
          if (err.code !== "EXDEV") throw err;
          return moveAcrossDevice(src, dest, overwrite);
        }
      }
      function moveAcrossDevice(src, dest, overwrite) {
        const opts = {
          overwrite,
          errorOnExist: true,
          preserveTimestamps: true
        };
        copySync(src, dest, opts);
        return removeSync(src);
      }
      module.exports = moveSync;
    }
  });

  // node_modules/fs-extra/lib/move/index.js
  var require_move2 = __commonJS({
    "node_modules/fs-extra/lib/move/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      module.exports = {
        move: u(require_move()),
        moveSync: require_move_sync()
      };
    }
  });

  // node_modules/fs-extra/lib/index.js
  var require_lib = __commonJS({
    "node_modules/fs-extra/lib/index.js"(exports, module) {
      "use strict";
      module.exports = {
        // Export promiseified graceful-fs:
        ...require_fs(),
        // Export extra methods:
        ...require_copy2(),
        ...require_empty(),
        ...require_ensure(),
        ...require_json(),
        ...require_mkdirs(),
        ...require_move2(),
        ...require_output_file(),
        ...require_path_exists(),
        ...require_remove()
      };
    }
  });

  // node_modules/kleur/index.js
  var require_kleur = __commonJS({
    "node_modules/kleur/index.js"(exports, module) {
      "use strict";
      var { FORCE_COLOR, NODE_DISABLE_COLORS, TERM } = process.env;
      var $ = {
        enabled: !NODE_DISABLE_COLORS && TERM !== "dumb" && FORCE_COLOR !== "0",
        // modifiers
        reset: init2(0, 0),
        bold: init2(1, 22),
        dim: init2(2, 22),
        italic: init2(3, 23),
        underline: init2(4, 24),
        inverse: init2(7, 27),
        hidden: init2(8, 28),
        strikethrough: init2(9, 29),
        // colors
        black: init2(30, 39),
        red: init2(31, 39),
        green: init2(32, 39),
        yellow: init2(33, 39),
        blue: init2(34, 39),
        magenta: init2(35, 39),
        cyan: init2(36, 39),
        white: init2(37, 39),
        gray: init2(90, 39),
        grey: init2(90, 39),
        // background colors
        bgBlack: init2(40, 49),
        bgRed: init2(41, 49),
        bgGreen: init2(42, 49),
        bgYellow: init2(43, 49),
        bgBlue: init2(44, 49),
        bgMagenta: init2(45, 49),
        bgCyan: init2(46, 49),
        bgWhite: init2(47, 49)
      };
      function run(arr, str) {
        let i = 0, tmp, beg = "", end = "";
        for (; i < arr.length; i++) {
          tmp = arr[i];
          beg += tmp.open;
          end += tmp.close;
          if (str.includes(tmp.close)) {
            str = str.replace(tmp.rgx, tmp.close + tmp.open);
          }
        }
        return beg + str + end;
      }
      function chain(has, keys) {
        let ctx = { has, keys };
        ctx.reset = $.reset.bind(ctx);
        ctx.bold = $.bold.bind(ctx);
        ctx.dim = $.dim.bind(ctx);
        ctx.italic = $.italic.bind(ctx);
        ctx.underline = $.underline.bind(ctx);
        ctx.inverse = $.inverse.bind(ctx);
        ctx.hidden = $.hidden.bind(ctx);
        ctx.strikethrough = $.strikethrough.bind(ctx);
        ctx.black = $.black.bind(ctx);
        ctx.red = $.red.bind(ctx);
        ctx.green = $.green.bind(ctx);
        ctx.yellow = $.yellow.bind(ctx);
        ctx.blue = $.blue.bind(ctx);
        ctx.magenta = $.magenta.bind(ctx);
        ctx.cyan = $.cyan.bind(ctx);
        ctx.white = $.white.bind(ctx);
        ctx.gray = $.gray.bind(ctx);
        ctx.grey = $.grey.bind(ctx);
        ctx.bgBlack = $.bgBlack.bind(ctx);
        ctx.bgRed = $.bgRed.bind(ctx);
        ctx.bgGreen = $.bgGreen.bind(ctx);
        ctx.bgYellow = $.bgYellow.bind(ctx);
        ctx.bgBlue = $.bgBlue.bind(ctx);
        ctx.bgMagenta = $.bgMagenta.bind(ctx);
        ctx.bgCyan = $.bgCyan.bind(ctx);
        ctx.bgWhite = $.bgWhite.bind(ctx);
        return ctx;
      }
      function init2(open, close) {
        let blk = {
          open: `\x1B[${open}m`,
          close: `\x1B[${close}m`,
          rgx: new RegExp(`\\x1b\\[${close}m`, "g")
        };
        return function(txt) {
          if (this !== void 0 && this.has !== void 0) {
            this.has.includes(open) || (this.has.push(open), this.keys.push(blk));
            return txt === void 0 ? this : $.enabled ? run(this.keys, txt + "") : txt + "";
          }
          return txt === void 0 ? chain([open], [blk]) : $.enabled ? run([blk], txt + "") : txt + "";
        };
      }
      module.exports = $;
    }
  });

  // node_modules/prompts/dist/util/action.js
  var require_action = __commonJS({
    "node_modules/prompts/dist/util/action.js"(exports, module) {
      "use strict";
      module.exports = (key, isSelect) => {
        if (key.meta && key.name !== "escape") return;
        if (key.ctrl) {
          if (key.name === "a") return "first";
          if (key.name === "c") return "abort";
          if (key.name === "d") return "abort";
          if (key.name === "e") return "last";
          if (key.name === "g") return "reset";
        }
        if (isSelect) {
          if (key.name === "j") return "down";
          if (key.name === "k") return "up";
        }
        if (key.name === "return") return "submit";
        if (key.name === "enter") return "submit";
        if (key.name === "backspace") return "delete";
        if (key.name === "delete") return "deleteForward";
        if (key.name === "abort") return "abort";
        if (key.name === "escape") return "exit";
        if (key.name === "tab") return "next";
        if (key.name === "pagedown") return "nextPage";
        if (key.name === "pageup") return "prevPage";
        if (key.name === "home") return "home";
        if (key.name === "end") return "end";
        if (key.name === "up") return "up";
        if (key.name === "down") return "down";
        if (key.name === "right") return "right";
        if (key.name === "left") return "left";
        return false;
      };
    }
  });

  // node_modules/prompts/dist/util/strip.js
  var require_strip = __commonJS({
    "node_modules/prompts/dist/util/strip.js"(exports, module) {
      "use strict";
      module.exports = (str) => {
        const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");
        const RGX = new RegExp(pattern, "g");
        return typeof str === "string" ? str.replace(RGX, "") : str;
      };
    }
  });

  // node_modules/sisteransi/src/index.js
  var require_src = __commonJS({
    "node_modules/sisteransi/src/index.js"(exports, module) {
      "use strict";
      var ESC = "\x1B";
      var CSI = `${ESC}[`;
      var beep = "\x07";
      var cursor = {
        to(x, y) {
          if (!y) return `${CSI}${x + 1}G`;
          return `${CSI}${y + 1};${x + 1}H`;
        },
        move(x, y) {
          let ret = "";
          if (x < 0) ret += `${CSI}${-x}D`;
          else if (x > 0) ret += `${CSI}${x}C`;
          if (y < 0) ret += `${CSI}${-y}A`;
          else if (y > 0) ret += `${CSI}${y}B`;
          return ret;
        },
        up: (count = 1) => `${CSI}${count}A`,
        down: (count = 1) => `${CSI}${count}B`,
        forward: (count = 1) => `${CSI}${count}C`,
        backward: (count = 1) => `${CSI}${count}D`,
        nextLine: (count = 1) => `${CSI}E`.repeat(count),
        prevLine: (count = 1) => `${CSI}F`.repeat(count),
        left: `${CSI}G`,
        hide: `${CSI}?25l`,
        show: `${CSI}?25h`,
        save: `${ESC}7`,
        restore: `${ESC}8`
      };
      var scroll = {
        up: (count = 1) => `${CSI}S`.repeat(count),
        down: (count = 1) => `${CSI}T`.repeat(count)
      };
      var erase = {
        screen: `${CSI}2J`,
        up: (count = 1) => `${CSI}1J`.repeat(count),
        down: (count = 1) => `${CSI}J`.repeat(count),
        line: `${CSI}2K`,
        lineEnd: `${CSI}K`,
        lineStart: `${CSI}1K`,
        lines(count) {
          let clear = "";
          for (let i = 0; i < count; i++)
            clear += this.line + (i < count - 1 ? cursor.up() : "");
          if (count)
            clear += cursor.left;
          return clear;
        }
      };
      module.exports = { cursor, scroll, erase, beep };
    }
  });

  // node_modules/prompts/dist/util/clear.js
  var require_clear = __commonJS({
    "node_modules/prompts/dist/util/clear.js"(exports, module) {
      "use strict";
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length) return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var strip = require_strip();
      var _require = require_src();
      var erase = _require.erase;
      var cursor = _require.cursor;
      var width = (str) => [...strip(str)].length;
      module.exports = function(prompt, perLine) {
        if (!perLine) return erase.line + cursor.to(0);
        let rows = 0;
        const lines = prompt.split(/\r?\n/);
        var _iterator = _createForOfIteratorHelper(lines), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            let line = _step.value;
            rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return erase.lines(rows);
      };
    }
  });

  // node_modules/prompts/dist/util/figures.js
  var require_figures = __commonJS({
    "node_modules/prompts/dist/util/figures.js"(exports, module) {
      "use strict";
      var main2 = {
        arrowUp: "\u2191",
        arrowDown: "\u2193",
        arrowLeft: "\u2190",
        arrowRight: "\u2192",
        radioOn: "\u25C9",
        radioOff: "\u25EF",
        tick: "\u2714",
        cross: "\u2716",
        ellipsis: "\u2026",
        pointerSmall: "\u203A",
        line: "\u2500",
        pointer: "\u276F"
      };
      var win = {
        arrowUp: main2.arrowUp,
        arrowDown: main2.arrowDown,
        arrowLeft: main2.arrowLeft,
        arrowRight: main2.arrowRight,
        radioOn: "(*)",
        radioOff: "( )",
        tick: "\u221A",
        cross: "\xD7",
        ellipsis: "...",
        pointerSmall: "\xBB",
        line: "\u2500",
        pointer: ">"
      };
      var figures = process.platform === "win32" ? win : main2;
      module.exports = figures;
    }
  });

  // node_modules/prompts/dist/util/style.js
  var require_style = __commonJS({
    "node_modules/prompts/dist/util/style.js"(exports, module) {
      "use strict";
      var c = require_kleur();
      var figures = require_figures();
      var styles3 = Object.freeze({
        password: {
          scale: 1,
          render: (input) => "*".repeat(input.length)
        },
        emoji: {
          scale: 2,
          render: (input) => "\u{1F603}".repeat(input.length)
        },
        invisible: {
          scale: 0,
          render: (input) => ""
        },
        default: {
          scale: 1,
          render: (input) => `${input}`
        }
      });
      var render = (type) => styles3[type] || styles3.default;
      var symbols = Object.freeze({
        aborted: c.red(figures.cross),
        done: c.green(figures.tick),
        exited: c.yellow(figures.cross),
        default: c.cyan("?")
      });
      var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
      var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
      var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
      module.exports = {
        styles: styles3,
        render,
        symbols,
        symbol,
        delimiter,
        item
      };
    }
  });

  // node_modules/prompts/dist/util/lines.js
  var require_lines = __commonJS({
    "node_modules/prompts/dist/util/lines.js"(exports, module) {
      "use strict";
      var strip = require_strip();
      module.exports = function(msg, perLine) {
        let lines = String(strip(msg) || "").split(/\r?\n/);
        if (!perLine) return lines.length;
        return lines.map((l) => Math.ceil(l.length / perLine)).reduce((a, b) => a + b);
      };
    }
  });

  // node_modules/prompts/dist/util/wrap.js
  var require_wrap = __commonJS({
    "node_modules/prompts/dist/util/wrap.js"(exports, module) {
      "use strict";
      module.exports = (msg, opts = {}) => {
        const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
        const width = opts.width;
        return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
          if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width) arr[arr.length - 1] += ` ${w}`;
          else arr.push(`${tab}${w}`);
          return arr;
        }, [tab]).join("\n")).join("\n");
      };
    }
  });

  // node_modules/prompts/dist/util/entriesToDisplay.js
  var require_entriesToDisplay = __commonJS({
    "node_modules/prompts/dist/util/entriesToDisplay.js"(exports, module) {
      "use strict";
      module.exports = (cursor, total, maxVisible) => {
        maxVisible = maxVisible || total;
        let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
        if (startIndex < 0) startIndex = 0;
        let endIndex = Math.min(startIndex + maxVisible, total);
        return {
          startIndex,
          endIndex
        };
      };
    }
  });

  // node_modules/prompts/dist/util/index.js
  var require_util = __commonJS({
    "node_modules/prompts/dist/util/index.js"(exports, module) {
      "use strict";
      module.exports = {
        action: require_action(),
        clear: require_clear(),
        style: require_style(),
        strip: require_strip(),
        figures: require_figures(),
        lines: require_lines(),
        wrap: require_wrap(),
        entriesToDisplay: require_entriesToDisplay()
      };
    }
  });

  // node_modules/prompts/dist/elements/prompt.js
  var require_prompt = __commonJS({
    "node_modules/prompts/dist/elements/prompt.js"(exports, module) {
      "use strict";
      var readline = __require("readline");
      var _require = require_util();
      var action = _require.action;
      var EventEmitter = __require("events");
      var _require2 = require_src();
      var beep = _require2.beep;
      var cursor = _require2.cursor;
      var color = require_kleur();
      var Prompt = class extends EventEmitter {
        constructor(opts = {}) {
          super();
          this.firstRender = true;
          this.in = opts.stdin || process.stdin;
          this.out = opts.stdout || process.stdout;
          this.onRender = (opts.onRender || (() => void 0)).bind(this);
          const rl = readline.createInterface({
            input: this.in,
            escapeCodeTimeout: 50
          });
          readline.emitKeypressEvents(this.in, rl);
          if (this.in.isTTY) this.in.setRawMode(true);
          const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
          const keypress = (str, key) => {
            let a = action(key, isSelect);
            if (a === false) {
              this._ && this._(str, key);
            } else if (typeof this[a] === "function") {
              this[a](key);
            } else {
              this.bell();
            }
          };
          this.close = () => {
            this.out.write(cursor.show);
            this.in.removeListener("keypress", keypress);
            if (this.in.isTTY) this.in.setRawMode(false);
            rl.close();
            this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
            this.closed = true;
          };
          this.in.on("keypress", keypress);
        }
        fire() {
          this.emit("state", {
            value: this.value,
            aborted: !!this.aborted,
            exited: !!this.exited
          });
        }
        bell() {
          this.out.write(beep);
        }
        render() {
          this.onRender(color);
          if (this.firstRender) this.firstRender = false;
        }
      };
      module.exports = Prompt;
    }
  });

  // node_modules/prompts/dist/elements/text.js
  var require_text = __commonJS({
    "node_modules/prompts/dist/elements/text.js"(exports, module) {
      "use strict";
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info2 = gen[key](arg);
          var value = info2.value;
        } catch (error2) {
          reject(error2);
          return;
        }
        if (info2.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      var color = require_kleur();
      var Prompt = require_prompt();
      var _require = require_src();
      var erase = _require.erase;
      var cursor = _require.cursor;
      var _require2 = require_util();
      var style = _require2.style;
      var clear = _require2.clear;
      var lines = _require2.lines;
      var figures = _require2.figures;
      var TextPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.transform = style.render(opts.style);
          this.scale = this.transform.scale;
          this.msg = opts.message;
          this.initial = opts.initial || ``;
          this.validator = opts.validate || (() => true);
          this.value = ``;
          this.errorMsg = opts.error || `Please Enter A Valid Value`;
          this.cursor = Number(!!this.initial);
          this.cursorOffset = 0;
          this.clear = clear(``, this.out.columns);
          this.render();
        }
        set value(v) {
          if (!v && this.initial) {
            this.placeholder = true;
            this.rendered = color.gray(this.transform.render(this.initial));
          } else {
            this.placeholder = false;
            this.rendered = this.transform.render(v);
          }
          this._value = v;
          this.fire();
        }
        get value() {
          return this._value;
        }
        reset() {
          this.value = ``;
          this.cursor = Number(!!this.initial);
          this.cursorOffset = 0;
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.value = this.value || this.initial;
          this.done = this.aborted = true;
          this.error = false;
          this.red = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        validate() {
          var _this = this;
          return _asyncToGenerator(function* () {
            let valid = yield _this.validator(_this.value);
            if (typeof valid === `string`) {
              _this.errorMsg = valid;
              valid = false;
            }
            _this.error = !valid;
          })();
        }
        submit() {
          var _this2 = this;
          return _asyncToGenerator(function* () {
            _this2.value = _this2.value || _this2.initial;
            _this2.cursorOffset = 0;
            _this2.cursor = _this2.rendered.length;
            yield _this2.validate();
            if (_this2.error) {
              _this2.red = true;
              _this2.fire();
              _this2.render();
              return;
            }
            _this2.done = true;
            _this2.aborted = false;
            _this2.fire();
            _this2.render();
            _this2.out.write("\n");
            _this2.close();
          })();
        }
        next() {
          if (!this.placeholder) return this.bell();
          this.value = this.initial;
          this.cursor = this.rendered.length;
          this.fire();
          this.render();
        }
        moveCursor(n) {
          if (this.placeholder) return;
          this.cursor = this.cursor + n;
          this.cursorOffset += n;
        }
        _(c, key) {
          let s1 = this.value.slice(0, this.cursor);
          let s2 = this.value.slice(this.cursor);
          this.value = `${s1}${c}${s2}`;
          this.red = false;
          this.cursor = this.placeholder ? 0 : s1.length + 1;
          this.render();
        }
        delete() {
          if (this.isCursorAtStart()) return this.bell();
          let s1 = this.value.slice(0, this.cursor - 1);
          let s2 = this.value.slice(this.cursor);
          this.value = `${s1}${s2}`;
          this.red = false;
          if (this.isCursorAtStart()) {
            this.cursorOffset = 0;
          } else {
            this.cursorOffset++;
            this.moveCursor(-1);
          }
          this.render();
        }
        deleteForward() {
          if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
          let s1 = this.value.slice(0, this.cursor);
          let s2 = this.value.slice(this.cursor + 1);
          this.value = `${s1}${s2}`;
          this.red = false;
          if (this.isCursorAtEnd()) {
            this.cursorOffset = 0;
          } else {
            this.cursorOffset++;
          }
          this.render();
        }
        first() {
          this.cursor = 0;
          this.render();
        }
        last() {
          this.cursor = this.value.length;
          this.render();
        }
        left() {
          if (this.cursor <= 0 || this.placeholder) return this.bell();
          this.moveCursor(-1);
          this.render();
        }
        right() {
          if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
          this.moveCursor(1);
          this.render();
        }
        isCursorAtStart() {
          return this.cursor === 0 || this.placeholder && this.cursor === 1;
        }
        isCursorAtEnd() {
          return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
        }
        render() {
          if (this.closed) return;
          if (!this.firstRender) {
            if (this.outputError) this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
            this.out.write(clear(this.outputText, this.out.columns));
          }
          super.render();
          this.outputError = "";
          this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.red ? color.red(this.rendered) : this.rendered].join(` `);
          if (this.error) {
            this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
          }
          this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
        }
      };
      module.exports = TextPrompt;
    }
  });

  // node_modules/prompts/dist/elements/select.js
  var require_select = __commonJS({
    "node_modules/prompts/dist/elements/select.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt();
      var _require = require_util();
      var style = _require.style;
      var clear = _require.clear;
      var figures = _require.figures;
      var wrap = _require.wrap;
      var entriesToDisplay = _require.entriesToDisplay;
      var _require2 = require_src();
      var cursor = _require2.cursor;
      var SelectPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
          this.warn = opts.warn || "- This option is disabled";
          this.cursor = opts.initial || 0;
          this.choices = opts.choices.map((ch, idx) => {
            if (typeof ch === "string") ch = {
              title: ch,
              value: idx
            };
            return {
              title: ch && (ch.title || ch.value || ch),
              value: ch && (ch.value === void 0 ? idx : ch.value),
              description: ch && ch.description,
              selected: ch && ch.selected,
              disabled: ch && ch.disabled
            };
          });
          this.optionsPerPage = opts.optionsPerPage || 10;
          this.value = (this.choices[this.cursor] || {}).value;
          this.clear = clear("", this.out.columns);
          this.render();
        }
        moveCursor(n) {
          this.cursor = n;
          this.value = this.choices[n].value;
          this.fire();
        }
        reset() {
          this.moveCursor(0);
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          if (!this.selection.disabled) {
            this.done = true;
            this.aborted = false;
            this.fire();
            this.render();
            this.out.write("\n");
            this.close();
          } else this.bell();
        }
        first() {
          this.moveCursor(0);
          this.render();
        }
        last() {
          this.moveCursor(this.choices.length - 1);
          this.render();
        }
        up() {
          if (this.cursor === 0) {
            this.moveCursor(this.choices.length - 1);
          } else {
            this.moveCursor(this.cursor - 1);
          }
          this.render();
        }
        down() {
          if (this.cursor === this.choices.length - 1) {
            this.moveCursor(0);
          } else {
            this.moveCursor(this.cursor + 1);
          }
          this.render();
        }
        next() {
          this.moveCursor((this.cursor + 1) % this.choices.length);
          this.render();
        }
        _(c, key) {
          if (c === " ") return this.submit();
        }
        get selection() {
          return this.choices[this.cursor];
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          let _entriesToDisplay = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
          this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)].join(" ");
          if (!this.done) {
            this.outputText += "\n";
            for (let i = startIndex; i < endIndex; i++) {
              let title, prefix, desc = "", v = this.choices[i];
              if (i === startIndex && startIndex > 0) {
                prefix = figures.arrowUp;
              } else if (i === endIndex - 1 && endIndex < this.choices.length) {
                prefix = figures.arrowDown;
              } else {
                prefix = " ";
              }
              if (v.disabled) {
                title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
                prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
              } else {
                title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
                prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
                if (v.description && this.cursor === i) {
                  desc = ` - ${v.description}`;
                  if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                    desc = "\n" + wrap(v.description, {
                      margin: 3,
                      width: this.out.columns
                    });
                  }
                }
              }
              this.outputText += `${prefix} ${title}${color.gray(desc)}
`;
            }
          }
          this.out.write(this.outputText);
        }
      };
      module.exports = SelectPrompt;
    }
  });

  // node_modules/prompts/dist/elements/toggle.js
  var require_toggle = __commonJS({
    "node_modules/prompts/dist/elements/toggle.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt();
      var _require = require_util();
      var style = _require.style;
      var clear = _require.clear;
      var _require2 = require_src();
      var cursor = _require2.cursor;
      var erase = _require2.erase;
      var TogglePrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.value = !!opts.initial;
          this.active = opts.active || "on";
          this.inactive = opts.inactive || "off";
          this.initialValue = this.value;
          this.render();
        }
        reset() {
          this.value = this.initialValue;
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        deactivate() {
          if (this.value === false) return this.bell();
          this.value = false;
          this.render();
        }
        activate() {
          if (this.value === true) return this.bell();
          this.value = true;
          this.render();
        }
        delete() {
          this.deactivate();
        }
        left() {
          this.deactivate();
        }
        right() {
          this.activate();
        }
        down() {
          this.deactivate();
        }
        up() {
          this.activate();
        }
        next() {
          this.value = !this.value;
          this.fire();
          this.render();
        }
        _(c, key) {
          if (c === " ") {
            this.value = !this.value;
          } else if (c === "1") {
            this.value = true;
          } else if (c === "0") {
            this.value = false;
          } else return this.bell();
          this.render();
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.value ? this.inactive : color.cyan().underline(this.inactive), color.gray("/"), this.value ? color.cyan().underline(this.active) : this.active].join(" ");
          this.out.write(erase.line + cursor.to(0) + this.outputText);
        }
      };
      module.exports = TogglePrompt;
    }
  });

  // node_modules/prompts/dist/dateparts/datepart.js
  var require_datepart = __commonJS({
    "node_modules/prompts/dist/dateparts/datepart.js"(exports, module) {
      "use strict";
      var DatePart = class _DatePart {
        constructor({
          token,
          date,
          parts,
          locales
        }) {
          this.token = token;
          this.date = date || /* @__PURE__ */ new Date();
          this.parts = parts || [this];
          this.locales = locales || {};
        }
        up() {
        }
        down() {
        }
        next() {
          const currentIdx = this.parts.indexOf(this);
          return this.parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
        }
        setTo(val) {
        }
        prev() {
          let parts = [].concat(this.parts).reverse();
          const currentIdx = parts.indexOf(this);
          return parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
        }
        toString() {
          return String(this.date);
        }
      };
      module.exports = DatePart;
    }
  });

  // node_modules/prompts/dist/dateparts/meridiem.js
  var require_meridiem = __commonJS({
    "node_modules/prompts/dist/dateparts/meridiem.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart();
      var Meridiem = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setHours((this.date.getHours() + 12) % 24);
        }
        down() {
          this.up();
        }
        toString() {
          let meridiem = this.date.getHours() > 12 ? "pm" : "am";
          return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
        }
      };
      module.exports = Meridiem;
    }
  });

  // node_modules/prompts/dist/dateparts/day.js
  var require_day = __commonJS({
    "node_modules/prompts/dist/dateparts/day.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart();
      var pos = (n) => {
        n = n % 10;
        return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
      };
      var Day = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setDate(this.date.getDate() + 1);
        }
        down() {
          this.date.setDate(this.date.getDate() - 1);
        }
        setTo(val) {
          this.date.setDate(parseInt(val.substr(-2)));
        }
        toString() {
          let date = this.date.getDate();
          let day = this.date.getDay();
          return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
        }
      };
      module.exports = Day;
    }
  });

  // node_modules/prompts/dist/dateparts/hours.js
  var require_hours = __commonJS({
    "node_modules/prompts/dist/dateparts/hours.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart();
      var Hours = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setHours(this.date.getHours() + 1);
        }
        down() {
          this.date.setHours(this.date.getHours() - 1);
        }
        setTo(val) {
          this.date.setHours(parseInt(val.substr(-2)));
        }
        toString() {
          let hours = this.date.getHours();
          if (/h/.test(this.token)) hours = hours % 12 || 12;
          return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
        }
      };
      module.exports = Hours;
    }
  });

  // node_modules/prompts/dist/dateparts/milliseconds.js
  var require_milliseconds = __commonJS({
    "node_modules/prompts/dist/dateparts/milliseconds.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart();
      var Milliseconds = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setMilliseconds(this.date.getMilliseconds() + 1);
        }
        down() {
          this.date.setMilliseconds(this.date.getMilliseconds() - 1);
        }
        setTo(val) {
          this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
        }
        toString() {
          return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
        }
      };
      module.exports = Milliseconds;
    }
  });

  // node_modules/prompts/dist/dateparts/minutes.js
  var require_minutes = __commonJS({
    "node_modules/prompts/dist/dateparts/minutes.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart();
      var Minutes = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setMinutes(this.date.getMinutes() + 1);
        }
        down() {
          this.date.setMinutes(this.date.getMinutes() - 1);
        }
        setTo(val) {
          this.date.setMinutes(parseInt(val.substr(-2)));
        }
        toString() {
          let m = this.date.getMinutes();
          return this.token.length > 1 ? String(m).padStart(2, "0") : m;
        }
      };
      module.exports = Minutes;
    }
  });

  // node_modules/prompts/dist/dateparts/month.js
  var require_month = __commonJS({
    "node_modules/prompts/dist/dateparts/month.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart();
      var Month = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setMonth(this.date.getMonth() + 1);
        }
        down() {
          this.date.setMonth(this.date.getMonth() - 1);
        }
        setTo(val) {
          val = parseInt(val.substr(-2)) - 1;
          this.date.setMonth(val < 0 ? 0 : val);
        }
        toString() {
          let month = this.date.getMonth();
          let tl = this.token.length;
          return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
        }
      };
      module.exports = Month;
    }
  });

  // node_modules/prompts/dist/dateparts/seconds.js
  var require_seconds = __commonJS({
    "node_modules/prompts/dist/dateparts/seconds.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart();
      var Seconds = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setSeconds(this.date.getSeconds() + 1);
        }
        down() {
          this.date.setSeconds(this.date.getSeconds() - 1);
        }
        setTo(val) {
          this.date.setSeconds(parseInt(val.substr(-2)));
        }
        toString() {
          let s = this.date.getSeconds();
          return this.token.length > 1 ? String(s).padStart(2, "0") : s;
        }
      };
      module.exports = Seconds;
    }
  });

  // node_modules/prompts/dist/dateparts/year.js
  var require_year = __commonJS({
    "node_modules/prompts/dist/dateparts/year.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart();
      var Year = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setFullYear(this.date.getFullYear() + 1);
        }
        down() {
          this.date.setFullYear(this.date.getFullYear() - 1);
        }
        setTo(val) {
          this.date.setFullYear(val.substr(-4));
        }
        toString() {
          let year = String(this.date.getFullYear()).padStart(4, "0");
          return this.token.length === 2 ? year.substr(-2) : year;
        }
      };
      module.exports = Year;
    }
  });

  // node_modules/prompts/dist/dateparts/index.js
  var require_dateparts = __commonJS({
    "node_modules/prompts/dist/dateparts/index.js"(exports, module) {
      "use strict";
      module.exports = {
        DatePart: require_datepart(),
        Meridiem: require_meridiem(),
        Day: require_day(),
        Hours: require_hours(),
        Milliseconds: require_milliseconds(),
        Minutes: require_minutes(),
        Month: require_month(),
        Seconds: require_seconds(),
        Year: require_year()
      };
    }
  });

  // node_modules/prompts/dist/elements/date.js
  var require_date = __commonJS({
    "node_modules/prompts/dist/elements/date.js"(exports, module) {
      "use strict";
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info2 = gen[key](arg);
          var value = info2.value;
        } catch (error2) {
          reject(error2);
          return;
        }
        if (info2.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      var color = require_kleur();
      var Prompt = require_prompt();
      var _require = require_util();
      var style = _require.style;
      var clear = _require.clear;
      var figures = _require.figures;
      var _require2 = require_src();
      var erase = _require2.erase;
      var cursor = _require2.cursor;
      var _require3 = require_dateparts();
      var DatePart = _require3.DatePart;
      var Meridiem = _require3.Meridiem;
      var Day = _require3.Day;
      var Hours = _require3.Hours;
      var Milliseconds = _require3.Milliseconds;
      var Minutes = _require3.Minutes;
      var Month = _require3.Month;
      var Seconds = _require3.Seconds;
      var Year = _require3.Year;
      var regex2 = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
      var regexGroups = {
        1: ({
          token
        }) => token.replace(/\\(.)/g, "$1"),
        2: (opts) => new Day(opts),
        // Day // TODO
        3: (opts) => new Month(opts),
        // Month
        4: (opts) => new Year(opts),
        // Year
        5: (opts) => new Meridiem(opts),
        // AM/PM // TODO (special)
        6: (opts) => new Hours(opts),
        // Hours
        7: (opts) => new Minutes(opts),
        // Minutes
        8: (opts) => new Seconds(opts),
        // Seconds
        9: (opts) => new Milliseconds(opts)
        // Fractional seconds
      };
      var dfltLocales = {
        months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
        monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
        weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
        weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
      };
      var DatePrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.cursor = 0;
          this.typed = "";
          this.locales = Object.assign(dfltLocales, opts.locales);
          this._date = opts.initial || /* @__PURE__ */ new Date();
          this.errorMsg = opts.error || "Please Enter A Valid Value";
          this.validator = opts.validate || (() => true);
          this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
          this.clear = clear("", this.out.columns);
          this.render();
        }
        get value() {
          return this.date;
        }
        get date() {
          return this._date;
        }
        set date(date) {
          if (date) this._date.setTime(date.getTime());
        }
        set mask(mask) {
          let result;
          this.parts = [];
          while (result = regex2.exec(mask)) {
            let match = result.shift();
            let idx = result.findIndex((gr) => gr != null);
            this.parts.push(idx in regexGroups ? regexGroups[idx]({
              token: result[idx] || match,
              date: this.date,
              parts: this.parts,
              locales: this.locales
            }) : result[idx] || match);
          }
          let parts = this.parts.reduce((arr, i) => {
            if (typeof i === "string" && typeof arr[arr.length - 1] === "string") arr[arr.length - 1] += i;
            else arr.push(i);
            return arr;
          }, []);
          this.parts.splice(0);
          this.parts.push(...parts);
          this.reset();
        }
        moveCursor(n) {
          this.typed = "";
          this.cursor = n;
          this.fire();
        }
        reset() {
          this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.error = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        validate() {
          var _this = this;
          return _asyncToGenerator(function* () {
            let valid = yield _this.validator(_this.value);
            if (typeof valid === "string") {
              _this.errorMsg = valid;
              valid = false;
            }
            _this.error = !valid;
          })();
        }
        submit() {
          var _this2 = this;
          return _asyncToGenerator(function* () {
            yield _this2.validate();
            if (_this2.error) {
              _this2.color = "red";
              _this2.fire();
              _this2.render();
              return;
            }
            _this2.done = true;
            _this2.aborted = false;
            _this2.fire();
            _this2.render();
            _this2.out.write("\n");
            _this2.close();
          })();
        }
        up() {
          this.typed = "";
          this.parts[this.cursor].up();
          this.render();
        }
        down() {
          this.typed = "";
          this.parts[this.cursor].down();
          this.render();
        }
        left() {
          let prev = this.parts[this.cursor].prev();
          if (prev == null) return this.bell();
          this.moveCursor(this.parts.indexOf(prev));
          this.render();
        }
        right() {
          let next = this.parts[this.cursor].next();
          if (next == null) return this.bell();
          this.moveCursor(this.parts.indexOf(next));
          this.render();
        }
        next() {
          let next = this.parts[this.cursor].next();
          this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
          this.render();
        }
        _(c) {
          if (/\d/.test(c)) {
            this.typed += c;
            this.parts[this.cursor].setTo(this.typed);
            this.render();
          }
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")].join(" ");
          if (this.error) {
            this.outputText += this.errorMsg.split("\n").reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
          }
          this.out.write(erase.line + cursor.to(0) + this.outputText);
        }
      };
      module.exports = DatePrompt;
    }
  });

  // node_modules/prompts/dist/elements/number.js
  var require_number = __commonJS({
    "node_modules/prompts/dist/elements/number.js"(exports, module) {
      "use strict";
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info2 = gen[key](arg);
          var value = info2.value;
        } catch (error2) {
          reject(error2);
          return;
        }
        if (info2.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      var color = require_kleur();
      var Prompt = require_prompt();
      var _require = require_src();
      var cursor = _require.cursor;
      var erase = _require.erase;
      var _require2 = require_util();
      var style = _require2.style;
      var figures = _require2.figures;
      var clear = _require2.clear;
      var lines = _require2.lines;
      var isNumber = /[0-9]/;
      var isDef = (any) => any !== void 0;
      var round = (number, precision) => {
        let factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      };
      var NumberPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.transform = style.render(opts.style);
          this.msg = opts.message;
          this.initial = isDef(opts.initial) ? opts.initial : "";
          this.float = !!opts.float;
          this.round = opts.round || 2;
          this.inc = opts.increment || 1;
          this.min = isDef(opts.min) ? opts.min : -Infinity;
          this.max = isDef(opts.max) ? opts.max : Infinity;
          this.errorMsg = opts.error || `Please Enter A Valid Value`;
          this.validator = opts.validate || (() => true);
          this.color = `cyan`;
          this.value = ``;
          this.typed = ``;
          this.lastHit = 0;
          this.render();
        }
        set value(v) {
          if (!v && v !== 0) {
            this.placeholder = true;
            this.rendered = color.gray(this.transform.render(`${this.initial}`));
            this._value = ``;
          } else {
            this.placeholder = false;
            this.rendered = this.transform.render(`${round(v, this.round)}`);
            this._value = round(v, this.round);
          }
          this.fire();
        }
        get value() {
          return this._value;
        }
        parse(x) {
          return this.float ? parseFloat(x) : parseInt(x);
        }
        valid(c) {
          return c === `-` || c === `.` && this.float || isNumber.test(c);
        }
        reset() {
          this.typed = ``;
          this.value = ``;
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          let x = this.value;
          this.value = x !== `` ? x : this.initial;
          this.done = this.aborted = true;
          this.error = false;
          this.fire();
          this.render();
          this.out.write(`
`);
          this.close();
        }
        validate() {
          var _this = this;
          return _asyncToGenerator(function* () {
            let valid = yield _this.validator(_this.value);
            if (typeof valid === `string`) {
              _this.errorMsg = valid;
              valid = false;
            }
            _this.error = !valid;
          })();
        }
        submit() {
          var _this2 = this;
          return _asyncToGenerator(function* () {
            yield _this2.validate();
            if (_this2.error) {
              _this2.color = `red`;
              _this2.fire();
              _this2.render();
              return;
            }
            let x = _this2.value;
            _this2.value = x !== `` ? x : _this2.initial;
            _this2.done = true;
            _this2.aborted = false;
            _this2.error = false;
            _this2.fire();
            _this2.render();
            _this2.out.write(`
`);
            _this2.close();
          })();
        }
        up() {
          this.typed = ``;
          if (this.value === "") {
            this.value = this.min - this.inc;
          }
          if (this.value >= this.max) return this.bell();
          this.value += this.inc;
          this.color = `cyan`;
          this.fire();
          this.render();
        }
        down() {
          this.typed = ``;
          if (this.value === "") {
            this.value = this.min + this.inc;
          }
          if (this.value <= this.min) return this.bell();
          this.value -= this.inc;
          this.color = `cyan`;
          this.fire();
          this.render();
        }
        delete() {
          let val = this.value.toString();
          if (val.length === 0) return this.bell();
          this.value = this.parse(val = val.slice(0, -1)) || ``;
          if (this.value !== "" && this.value < this.min) {
            this.value = this.min;
          }
          this.color = `cyan`;
          this.fire();
          this.render();
        }
        next() {
          this.value = this.initial;
          this.fire();
          this.render();
        }
        _(c, key) {
          if (!this.valid(c)) return this.bell();
          const now = Date.now();
          if (now - this.lastHit > 1e3) this.typed = ``;
          this.typed += c;
          this.lastHit = now;
          this.color = `cyan`;
          if (c === `.`) return this.fire();
          this.value = Math.min(this.parse(this.typed), this.max);
          if (this.value > this.max) this.value = this.max;
          if (this.value < this.min) this.value = this.min;
          this.fire();
          this.render();
        }
        render() {
          if (this.closed) return;
          if (!this.firstRender) {
            if (this.outputError) this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
            this.out.write(clear(this.outputText, this.out.columns));
          }
          super.render();
          this.outputError = "";
          this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered].join(` `);
          if (this.error) {
            this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
          }
          this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
        }
      };
      module.exports = NumberPrompt;
    }
  });

  // node_modules/prompts/dist/elements/multiselect.js
  var require_multiselect = __commonJS({
    "node_modules/prompts/dist/elements/multiselect.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var _require = require_src();
      var cursor = _require.cursor;
      var Prompt = require_prompt();
      var _require2 = require_util();
      var clear = _require2.clear;
      var figures = _require2.figures;
      var style = _require2.style;
      var wrap = _require2.wrap;
      var entriesToDisplay = _require2.entriesToDisplay;
      var MultiselectPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.cursor = opts.cursor || 0;
          this.scrollIndex = opts.cursor || 0;
          this.hint = opts.hint || "";
          this.warn = opts.warn || "- This option is disabled -";
          this.minSelected = opts.min;
          this.showMinError = false;
          this.maxChoices = opts.max;
          this.instructions = opts.instructions;
          this.optionsPerPage = opts.optionsPerPage || 10;
          this.value = opts.choices.map((ch, idx) => {
            if (typeof ch === "string") ch = {
              title: ch,
              value: idx
            };
            return {
              title: ch && (ch.title || ch.value || ch),
              description: ch && ch.description,
              value: ch && (ch.value === void 0 ? idx : ch.value),
              selected: ch && ch.selected,
              disabled: ch && ch.disabled
            };
          });
          this.clear = clear("", this.out.columns);
          if (!opts.overrideRender) {
            this.render();
          }
        }
        reset() {
          this.value.map((v) => !v.selected);
          this.cursor = 0;
          this.fire();
          this.render();
        }
        selected() {
          return this.value.filter((v) => v.selected);
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          const selected = this.value.filter((e) => e.selected);
          if (this.minSelected && selected.length < this.minSelected) {
            this.showMinError = true;
            this.render();
          } else {
            this.done = true;
            this.aborted = false;
            this.fire();
            this.render();
            this.out.write("\n");
            this.close();
          }
        }
        first() {
          this.cursor = 0;
          this.render();
        }
        last() {
          this.cursor = this.value.length - 1;
          this.render();
        }
        next() {
          this.cursor = (this.cursor + 1) % this.value.length;
          this.render();
        }
        up() {
          if (this.cursor === 0) {
            this.cursor = this.value.length - 1;
          } else {
            this.cursor--;
          }
          this.render();
        }
        down() {
          if (this.cursor === this.value.length - 1) {
            this.cursor = 0;
          } else {
            this.cursor++;
          }
          this.render();
        }
        left() {
          this.value[this.cursor].selected = false;
          this.render();
        }
        right() {
          if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
          this.value[this.cursor].selected = true;
          this.render();
        }
        handleSpaceToggle() {
          const v = this.value[this.cursor];
          if (v.selected) {
            v.selected = false;
            this.render();
          } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
            return this.bell();
          } else {
            v.selected = true;
            this.render();
          }
        }
        toggleAll() {
          if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
            return this.bell();
          }
          const newSelected = !this.value[this.cursor].selected;
          this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
          this.render();
        }
        _(c, key) {
          if (c === " ") {
            this.handleSpaceToggle();
          } else if (c === "a") {
            this.toggleAll();
          } else {
            return this.bell();
          }
        }
        renderInstructions() {
          if (this.instructions === void 0 || this.instructions) {
            if (typeof this.instructions === "string") {
              return this.instructions;
            }
            return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + `    enter/return: Complete answer`;
          }
          return "";
        }
        renderOption(cursor2, v, i, arrowIndicator) {
          const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
          let title, desc;
          if (v.disabled) {
            title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
          } else {
            title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
            if (cursor2 === i && v.description) {
              desc = ` - ${v.description}`;
              if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                desc = "\n" + wrap(v.description, {
                  margin: prefix.length,
                  width: this.out.columns
                });
              }
            }
          }
          return prefix + title + color.gray(desc || "");
        }
        // shared with autocompleteMultiselect
        paginateOptions(options) {
          if (options.length === 0) {
            return color.red("No matches for this query.");
          }
          let _entriesToDisplay = entriesToDisplay(this.cursor, options.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
          let prefix, styledOptions = [];
          for (let i = startIndex; i < endIndex; i++) {
            if (i === startIndex && startIndex > 0) {
              prefix = figures.arrowUp;
            } else if (i === endIndex - 1 && endIndex < options.length) {
              prefix = figures.arrowDown;
            } else {
              prefix = " ";
            }
            styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
          }
          return "\n" + styledOptions.join("\n");
        }
        // shared with autocomleteMultiselect
        renderOptions(options) {
          if (!this.done) {
            return this.paginateOptions(options);
          }
          return "";
        }
        renderDoneOrInstructions() {
          if (this.done) {
            return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
          }
          const output = [color.gray(this.hint), this.renderInstructions()];
          if (this.value[this.cursor].disabled) {
            output.push(color.yellow(this.warn));
          }
          return output.join(" ");
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          super.render();
          let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(" ");
          if (this.showMinError) {
            prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
            this.showMinError = false;
          }
          prompt += this.renderOptions(this.value);
          this.out.write(this.clear + prompt);
          this.clear = clear(prompt, this.out.columns);
        }
      };
      module.exports = MultiselectPrompt;
    }
  });

  // node_modules/prompts/dist/elements/autocomplete.js
  var require_autocomplete = __commonJS({
    "node_modules/prompts/dist/elements/autocomplete.js"(exports, module) {
      "use strict";
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info2 = gen[key](arg);
          var value = info2.value;
        } catch (error2) {
          reject(error2);
          return;
        }
        if (info2.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      var color = require_kleur();
      var Prompt = require_prompt();
      var _require = require_src();
      var erase = _require.erase;
      var cursor = _require.cursor;
      var _require2 = require_util();
      var style = _require2.style;
      var clear = _require2.clear;
      var figures = _require2.figures;
      var wrap = _require2.wrap;
      var entriesToDisplay = _require2.entriesToDisplay;
      var getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
      var getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
      var getIndex = (arr, valOrTitle) => {
        const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
        return index > -1 ? index : void 0;
      };
      var AutocompletePrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.suggest = opts.suggest;
          this.choices = opts.choices;
          this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
          this.select = this.initial || opts.cursor || 0;
          this.i18n = {
            noMatches: opts.noMatches || "no matches found"
          };
          this.fallback = opts.fallback || this.initial;
          this.clearFirst = opts.clearFirst || false;
          this.suggestions = [];
          this.input = "";
          this.limit = opts.limit || 10;
          this.cursor = 0;
          this.transform = style.render(opts.style);
          this.scale = this.transform.scale;
          this.render = this.render.bind(this);
          this.complete = this.complete.bind(this);
          this.clear = clear("", this.out.columns);
          this.complete(this.render);
          this.render();
        }
        set fallback(fb) {
          this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
        }
        get fallback() {
          let choice;
          if (typeof this._fb === "number") choice = this.choices[this._fb];
          else if (typeof this._fb === "string") choice = {
            title: this._fb
          };
          return choice || this._fb || {
            title: this.i18n.noMatches
          };
        }
        moveSelect(i) {
          this.select = i;
          if (this.suggestions.length > 0) this.value = getVal(this.suggestions, i);
          else this.value = this.fallback.value;
          this.fire();
        }
        complete(cb) {
          var _this = this;
          return _asyncToGenerator(function* () {
            const p = _this.completing = _this.suggest(_this.input, _this.choices);
            const suggestions = yield p;
            if (_this.completing !== p) return;
            _this.suggestions = suggestions.map((s, i, arr) => ({
              title: getTitle(arr, i),
              value: getVal(arr, i),
              description: s.description
            }));
            _this.completing = false;
            const l = Math.max(suggestions.length - 1, 0);
            _this.moveSelect(Math.min(l, _this.select));
            cb && cb();
          })();
        }
        reset() {
          this.input = "";
          this.complete(() => {
            this.moveSelect(this.initial !== void 0 ? this.initial : 0);
            this.render();
          });
          this.render();
        }
        exit() {
          if (this.clearFirst && this.input.length > 0) {
            this.reset();
          } else {
            this.done = this.exited = true;
            this.aborted = false;
            this.fire();
            this.render();
            this.out.write("\n");
            this.close();
          }
        }
        abort() {
          this.done = this.aborted = true;
          this.exited = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          this.done = true;
          this.aborted = this.exited = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        _(c, key) {
          let s1 = this.input.slice(0, this.cursor);
          let s2 = this.input.slice(this.cursor);
          this.input = `${s1}${c}${s2}`;
          this.cursor = s1.length + 1;
          this.complete(this.render);
          this.render();
        }
        delete() {
          if (this.cursor === 0) return this.bell();
          let s1 = this.input.slice(0, this.cursor - 1);
          let s2 = this.input.slice(this.cursor);
          this.input = `${s1}${s2}`;
          this.complete(this.render);
          this.cursor = this.cursor - 1;
          this.render();
        }
        deleteForward() {
          if (this.cursor * this.scale >= this.rendered.length) return this.bell();
          let s1 = this.input.slice(0, this.cursor);
          let s2 = this.input.slice(this.cursor + 1);
          this.input = `${s1}${s2}`;
          this.complete(this.render);
          this.render();
        }
        first() {
          this.moveSelect(0);
          this.render();
        }
        last() {
          this.moveSelect(this.suggestions.length - 1);
          this.render();
        }
        up() {
          if (this.select === 0) {
            this.moveSelect(this.suggestions.length - 1);
          } else {
            this.moveSelect(this.select - 1);
          }
          this.render();
        }
        down() {
          if (this.select === this.suggestions.length - 1) {
            this.moveSelect(0);
          } else {
            this.moveSelect(this.select + 1);
          }
          this.render();
        }
        next() {
          if (this.select === this.suggestions.length - 1) {
            this.moveSelect(0);
          } else this.moveSelect(this.select + 1);
          this.render();
        }
        nextPage() {
          this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
          this.render();
        }
        prevPage() {
          this.moveSelect(Math.max(this.select - this.limit, 0));
          this.render();
        }
        left() {
          if (this.cursor <= 0) return this.bell();
          this.cursor = this.cursor - 1;
          this.render();
        }
        right() {
          if (this.cursor * this.scale >= this.rendered.length) return this.bell();
          this.cursor = this.cursor + 1;
          this.render();
        }
        renderOption(v, hovered, isStart, isEnd) {
          let desc;
          let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
          let title = hovered ? color.cyan().underline(v.title) : v.title;
          prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
          if (v.description) {
            desc = ` - ${v.description}`;
            if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
              desc = "\n" + wrap(v.description, {
                margin: 3,
                width: this.out.columns
              });
            }
          }
          return prefix + " " + title + color.gray(desc || "");
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          let _entriesToDisplay = entriesToDisplay(this.select, this.choices.length, this.limit), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
          this.outputText = [style.symbol(this.done, this.aborted, this.exited), color.bold(this.msg), style.delimiter(this.completing), this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)].join(" ");
          if (!this.done) {
            const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(item, this.select === i + startIndex, i === 0 && startIndex > 0, i + startIndex === endIndex - 1 && endIndex < this.choices.length)).join("\n");
            this.outputText += `
` + (suggestions || color.gray(this.fallback.title));
          }
          this.out.write(erase.line + cursor.to(0) + this.outputText);
        }
      };
      module.exports = AutocompletePrompt;
    }
  });

  // node_modules/prompts/dist/elements/autocompleteMultiselect.js
  var require_autocompleteMultiselect = __commonJS({
    "node_modules/prompts/dist/elements/autocompleteMultiselect.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var _require = require_src();
      var cursor = _require.cursor;
      var MultiselectPrompt = require_multiselect();
      var _require2 = require_util();
      var clear = _require2.clear;
      var style = _require2.style;
      var figures = _require2.figures;
      var AutocompleteMultiselectPrompt = class extends MultiselectPrompt {
        constructor(opts = {}) {
          opts.overrideRender = true;
          super(opts);
          this.inputValue = "";
          this.clear = clear("", this.out.columns);
          this.filteredOptions = this.value;
          this.render();
        }
        last() {
          this.cursor = this.filteredOptions.length - 1;
          this.render();
        }
        next() {
          this.cursor = (this.cursor + 1) % this.filteredOptions.length;
          this.render();
        }
        up() {
          if (this.cursor === 0) {
            this.cursor = this.filteredOptions.length - 1;
          } else {
            this.cursor--;
          }
          this.render();
        }
        down() {
          if (this.cursor === this.filteredOptions.length - 1) {
            this.cursor = 0;
          } else {
            this.cursor++;
          }
          this.render();
        }
        left() {
          this.filteredOptions[this.cursor].selected = false;
          this.render();
        }
        right() {
          if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
          this.filteredOptions[this.cursor].selected = true;
          this.render();
        }
        delete() {
          if (this.inputValue.length) {
            this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
            this.updateFilteredOptions();
          }
        }
        updateFilteredOptions() {
          const currentHighlight = this.filteredOptions[this.cursor];
          this.filteredOptions = this.value.filter((v) => {
            if (this.inputValue) {
              if (typeof v.title === "string") {
                if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
                  return true;
                }
              }
              if (typeof v.value === "string") {
                if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
                  return true;
                }
              }
              return false;
            }
            return true;
          });
          const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
          this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
          this.render();
        }
        handleSpaceToggle() {
          const v = this.filteredOptions[this.cursor];
          if (v.selected) {
            v.selected = false;
            this.render();
          } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
            return this.bell();
          } else {
            v.selected = true;
            this.render();
          }
        }
        handleInputChange(c) {
          this.inputValue = this.inputValue + c;
          this.updateFilteredOptions();
        }
        _(c, key) {
          if (c === " ") {
            this.handleSpaceToggle();
          } else {
            this.handleInputChange(c);
          }
        }
        renderInstructions() {
          if (this.instructions === void 0 || this.instructions) {
            if (typeof this.instructions === "string") {
              return this.instructions;
            }
            return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
          }
          return "";
        }
        renderCurrentInput() {
          return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}
`;
        }
        renderOption(cursor2, v, i) {
          let title;
          if (v.disabled) title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
          else title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
          return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
        }
        renderDoneOrInstructions() {
          if (this.done) {
            return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
          }
          const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
          if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
            output.push(color.yellow(this.warn));
          }
          return output.join(" ");
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          super.render();
          let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(" ");
          if (this.showMinError) {
            prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
            this.showMinError = false;
          }
          prompt += this.renderOptions(this.filteredOptions);
          this.out.write(this.clear + prompt);
          this.clear = clear(prompt, this.out.columns);
        }
      };
      module.exports = AutocompleteMultiselectPrompt;
    }
  });

  // node_modules/prompts/dist/elements/confirm.js
  var require_confirm = __commonJS({
    "node_modules/prompts/dist/elements/confirm.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt();
      var _require = require_util();
      var style = _require.style;
      var clear = _require.clear;
      var _require2 = require_src();
      var erase = _require2.erase;
      var cursor = _require2.cursor;
      var ConfirmPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.value = opts.initial;
          this.initialValue = !!opts.initial;
          this.yesMsg = opts.yes || "yes";
          this.yesOption = opts.yesOption || "(Y/n)";
          this.noMsg = opts.no || "no";
          this.noOption = opts.noOption || "(y/N)";
          this.render();
        }
        reset() {
          this.value = this.initialValue;
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          this.value = this.value || false;
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        _(c, key) {
          if (c.toLowerCase() === "y") {
            this.value = true;
            return this.submit();
          }
          if (c.toLowerCase() === "n") {
            this.value = false;
            return this.submit();
          }
          return this.bell();
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)].join(" ");
          this.out.write(erase.line + cursor.to(0) + this.outputText);
        }
      };
      module.exports = ConfirmPrompt;
    }
  });

  // node_modules/prompts/dist/elements/index.js
  var require_elements = __commonJS({
    "node_modules/prompts/dist/elements/index.js"(exports, module) {
      "use strict";
      module.exports = {
        TextPrompt: require_text(),
        SelectPrompt: require_select(),
        TogglePrompt: require_toggle(),
        DatePrompt: require_date(),
        NumberPrompt: require_number(),
        MultiselectPrompt: require_multiselect(),
        AutocompletePrompt: require_autocomplete(),
        AutocompleteMultiselectPrompt: require_autocompleteMultiselect(),
        ConfirmPrompt: require_confirm()
      };
    }
  });

  // node_modules/prompts/dist/prompts.js
  var require_prompts = __commonJS({
    "node_modules/prompts/dist/prompts.js"(exports) {
      "use strict";
      var $ = exports;
      var el = require_elements();
      var noop = (v) => v;
      function toPrompt(type, args, opts = {}) {
        return new Promise((res, rej) => {
          const p = new el[type](args);
          const onAbort = opts.onAbort || noop;
          const onSubmit = opts.onSubmit || noop;
          const onExit2 = opts.onExit || noop;
          p.on("state", args.onState || noop);
          p.on("submit", (x) => res(onSubmit(x)));
          p.on("exit", (x) => res(onExit2(x)));
          p.on("abort", (x) => rej(onAbort(x)));
        });
      }
      $.text = (args) => toPrompt("TextPrompt", args);
      $.password = (args) => {
        args.style = "password";
        return $.text(args);
      };
      $.invisible = (args) => {
        args.style = "invisible";
        return $.text(args);
      };
      $.number = (args) => toPrompt("NumberPrompt", args);
      $.date = (args) => toPrompt("DatePrompt", args);
      $.confirm = (args) => toPrompt("ConfirmPrompt", args);
      $.list = (args) => {
        const sep = args.separator || ",";
        return toPrompt("TextPrompt", args, {
          onSubmit: (str) => str.split(sep).map((s) => s.trim())
        });
      };
      $.toggle = (args) => toPrompt("TogglePrompt", args);
      $.select = (args) => toPrompt("SelectPrompt", args);
      $.multiselect = (args) => {
        args.choices = [].concat(args.choices || []);
        const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
        return toPrompt("MultiselectPrompt", args, {
          onAbort: toSelected,
          onSubmit: toSelected
        });
      };
      $.autocompleteMultiselect = (args) => {
        args.choices = [].concat(args.choices || []);
        const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
        return toPrompt("AutocompleteMultiselectPrompt", args, {
          onAbort: toSelected,
          onSubmit: toSelected
        });
      };
      var byTitle = (input, choices) => Promise.resolve(choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase()));
      $.autocomplete = (args) => {
        args.suggest = args.suggest || byTitle;
        args.choices = [].concat(args.choices || []);
        return toPrompt("AutocompletePrompt", args);
      };
    }
  });

  // node_modules/prompts/dist/index.js
  var require_dist = __commonJS({
    "node_modules/prompts/dist/index.js"(exports, module) {
      "use strict";
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length) return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info2 = gen[key](arg);
          var value = info2.value;
        } catch (error2) {
          reject(error2);
          return;
        }
        if (info2.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      var prompts2 = require_prompts();
      var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
      var noop = () => {
      };
      function prompt() {
        return _prompt.apply(this, arguments);
      }
      function _prompt() {
        _prompt = _asyncToGenerator(function* (questions = [], {
          onSubmit = noop,
          onCancel = noop
        } = {}) {
          const answers = {};
          const override2 = prompt._override || {};
          questions = [].concat(questions);
          let answer, question, quit, name, type, lastPrompt;
          const getFormattedAnswer = /* @__PURE__ */ (function() {
            var _ref = _asyncToGenerator(function* (question2, answer2, skipValidation = false) {
              if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
                return;
              }
              return question2.format ? yield question2.format(answer2, answers) : answer2;
            });
            return function getFormattedAnswer2(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })();
          var _iterator = _createForOfIteratorHelper(questions), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              question = _step.value;
              var _question = question;
              name = _question.name;
              type = _question.type;
              if (typeof type === "function") {
                type = yield type(answer, _objectSpread({}, answers), question);
                question["type"] = type;
              }
              if (!type) continue;
              for (let key in question) {
                if (passOn.includes(key)) continue;
                let value = question[key];
                question[key] = typeof value === "function" ? yield value(answer, _objectSpread({}, answers), lastPrompt) : value;
              }
              lastPrompt = question;
              if (typeof question.message !== "string") {
                throw new Error("prompt message is required");
              }
              var _question2 = question;
              name = _question2.name;
              type = _question2.type;
              if (prompts2[type] === void 0) {
                throw new Error(`prompt type (${type}) is not defined`);
              }
              if (override2[question.name] !== void 0) {
                answer = yield getFormattedAnswer(question, override2[question.name]);
                if (answer !== void 0) {
                  answers[name] = answer;
                  continue;
                }
              }
              try {
                answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : yield prompts2[type](question);
                answers[name] = answer = yield getFormattedAnswer(question, answer, true);
                quit = yield onSubmit(question, answer, answers);
              } catch (err) {
                quit = !(yield onCancel(question, answers));
              }
              if (quit) return answers;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return answers;
        });
        return _prompt.apply(this, arguments);
      }
      function getInjectedAnswer(injected, deafultValue) {
        const answer = injected.shift();
        if (answer instanceof Error) {
          throw answer;
        }
        return answer === void 0 ? deafultValue : answer;
      }
      function inject(answers) {
        prompt._injected = (prompt._injected || []).concat(answers);
      }
      function override(answers) {
        prompt._override = Object.assign({}, answers);
      }
      module.exports = Object.assign(prompt, {
        prompt,
        prompts: prompts2,
        inject,
        override
      });
    }
  });

  // node_modules/prompts/lib/util/action.js
  var require_action2 = __commonJS({
    "node_modules/prompts/lib/util/action.js"(exports, module) {
      "use strict";
      module.exports = (key, isSelect) => {
        if (key.meta && key.name !== "escape") return;
        if (key.ctrl) {
          if (key.name === "a") return "first";
          if (key.name === "c") return "abort";
          if (key.name === "d") return "abort";
          if (key.name === "e") return "last";
          if (key.name === "g") return "reset";
        }
        if (isSelect) {
          if (key.name === "j") return "down";
          if (key.name === "k") return "up";
        }
        if (key.name === "return") return "submit";
        if (key.name === "enter") return "submit";
        if (key.name === "backspace") return "delete";
        if (key.name === "delete") return "deleteForward";
        if (key.name === "abort") return "abort";
        if (key.name === "escape") return "exit";
        if (key.name === "tab") return "next";
        if (key.name === "pagedown") return "nextPage";
        if (key.name === "pageup") return "prevPage";
        if (key.name === "home") return "home";
        if (key.name === "end") return "end";
        if (key.name === "up") return "up";
        if (key.name === "down") return "down";
        if (key.name === "right") return "right";
        if (key.name === "left") return "left";
        return false;
      };
    }
  });

  // node_modules/prompts/lib/util/strip.js
  var require_strip2 = __commonJS({
    "node_modules/prompts/lib/util/strip.js"(exports, module) {
      "use strict";
      module.exports = (str) => {
        const pattern = [
          "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
          "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
        ].join("|");
        const RGX = new RegExp(pattern, "g");
        return typeof str === "string" ? str.replace(RGX, "") : str;
      };
    }
  });

  // node_modules/prompts/lib/util/clear.js
  var require_clear2 = __commonJS({
    "node_modules/prompts/lib/util/clear.js"(exports, module) {
      "use strict";
      var strip = require_strip2();
      var { erase, cursor } = require_src();
      var width = (str) => [...strip(str)].length;
      module.exports = function(prompt, perLine) {
        if (!perLine) return erase.line + cursor.to(0);
        let rows = 0;
        const lines = prompt.split(/\r?\n/);
        for (let line of lines) {
          rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
        }
        return erase.lines(rows);
      };
    }
  });

  // node_modules/prompts/lib/util/figures.js
  var require_figures2 = __commonJS({
    "node_modules/prompts/lib/util/figures.js"(exports, module) {
      "use strict";
      var main2 = {
        arrowUp: "\u2191",
        arrowDown: "\u2193",
        arrowLeft: "\u2190",
        arrowRight: "\u2192",
        radioOn: "\u25C9",
        radioOff: "\u25EF",
        tick: "\u2714",
        cross: "\u2716",
        ellipsis: "\u2026",
        pointerSmall: "\u203A",
        line: "\u2500",
        pointer: "\u276F"
      };
      var win = {
        arrowUp: main2.arrowUp,
        arrowDown: main2.arrowDown,
        arrowLeft: main2.arrowLeft,
        arrowRight: main2.arrowRight,
        radioOn: "(*)",
        radioOff: "( )",
        tick: "\u221A",
        cross: "\xD7",
        ellipsis: "...",
        pointerSmall: "\xBB",
        line: "\u2500",
        pointer: ">"
      };
      var figures = process.platform === "win32" ? win : main2;
      module.exports = figures;
    }
  });

  // node_modules/prompts/lib/util/style.js
  var require_style2 = __commonJS({
    "node_modules/prompts/lib/util/style.js"(exports, module) {
      "use strict";
      var c = require_kleur();
      var figures = require_figures2();
      var styles3 = Object.freeze({
        password: { scale: 1, render: (input) => "*".repeat(input.length) },
        emoji: { scale: 2, render: (input) => "\u{1F603}".repeat(input.length) },
        invisible: { scale: 0, render: (input) => "" },
        default: { scale: 1, render: (input) => `${input}` }
      });
      var render = (type) => styles3[type] || styles3.default;
      var symbols = Object.freeze({
        aborted: c.red(figures.cross),
        done: c.green(figures.tick),
        exited: c.yellow(figures.cross),
        default: c.cyan("?")
      });
      var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
      var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
      var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
      module.exports = {
        styles: styles3,
        render,
        symbols,
        symbol,
        delimiter,
        item
      };
    }
  });

  // node_modules/prompts/lib/util/lines.js
  var require_lines2 = __commonJS({
    "node_modules/prompts/lib/util/lines.js"(exports, module) {
      "use strict";
      var strip = require_strip2();
      module.exports = function(msg, perLine) {
        let lines = String(strip(msg) || "").split(/\r?\n/);
        if (!perLine) return lines.length;
        return lines.map((l) => Math.ceil(l.length / perLine)).reduce((a, b) => a + b);
      };
    }
  });

  // node_modules/prompts/lib/util/wrap.js
  var require_wrap2 = __commonJS({
    "node_modules/prompts/lib/util/wrap.js"(exports, module) {
      "use strict";
      module.exports = (msg, opts = {}) => {
        const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
        const width = opts.width;
        return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
          if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width)
            arr[arr.length - 1] += ` ${w}`;
          else arr.push(`${tab}${w}`);
          return arr;
        }, [tab]).join("\n")).join("\n");
      };
    }
  });

  // node_modules/prompts/lib/util/entriesToDisplay.js
  var require_entriesToDisplay2 = __commonJS({
    "node_modules/prompts/lib/util/entriesToDisplay.js"(exports, module) {
      "use strict";
      module.exports = (cursor, total, maxVisible) => {
        maxVisible = maxVisible || total;
        let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
        if (startIndex < 0) startIndex = 0;
        let endIndex = Math.min(startIndex + maxVisible, total);
        return { startIndex, endIndex };
      };
    }
  });

  // node_modules/prompts/lib/util/index.js
  var require_util2 = __commonJS({
    "node_modules/prompts/lib/util/index.js"(exports, module) {
      "use strict";
      module.exports = {
        action: require_action2(),
        clear: require_clear2(),
        style: require_style2(),
        strip: require_strip2(),
        figures: require_figures2(),
        lines: require_lines2(),
        wrap: require_wrap2(),
        entriesToDisplay: require_entriesToDisplay2()
      };
    }
  });

  // node_modules/prompts/lib/elements/prompt.js
  var require_prompt2 = __commonJS({
    "node_modules/prompts/lib/elements/prompt.js"(exports, module) {
      "use strict";
      var readline = __require("readline");
      var { action } = require_util2();
      var EventEmitter = __require("events");
      var { beep, cursor } = require_src();
      var color = require_kleur();
      var Prompt = class extends EventEmitter {
        constructor(opts = {}) {
          super();
          this.firstRender = true;
          this.in = opts.stdin || process.stdin;
          this.out = opts.stdout || process.stdout;
          this.onRender = (opts.onRender || (() => void 0)).bind(this);
          const rl = readline.createInterface({ input: this.in, escapeCodeTimeout: 50 });
          readline.emitKeypressEvents(this.in, rl);
          if (this.in.isTTY) this.in.setRawMode(true);
          const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
          const keypress = (str, key) => {
            let a = action(key, isSelect);
            if (a === false) {
              this._ && this._(str, key);
            } else if (typeof this[a] === "function") {
              this[a](key);
            } else {
              this.bell();
            }
          };
          this.close = () => {
            this.out.write(cursor.show);
            this.in.removeListener("keypress", keypress);
            if (this.in.isTTY) this.in.setRawMode(false);
            rl.close();
            this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
            this.closed = true;
          };
          this.in.on("keypress", keypress);
        }
        fire() {
          this.emit("state", {
            value: this.value,
            aborted: !!this.aborted,
            exited: !!this.exited
          });
        }
        bell() {
          this.out.write(beep);
        }
        render() {
          this.onRender(color);
          if (this.firstRender) this.firstRender = false;
        }
      };
      module.exports = Prompt;
    }
  });

  // node_modules/prompts/lib/elements/text.js
  var require_text2 = __commonJS({
    "node_modules/prompts/lib/elements/text.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt2();
      var { erase, cursor } = require_src();
      var { style, clear, lines, figures } = require_util2();
      var TextPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.transform = style.render(opts.style);
          this.scale = this.transform.scale;
          this.msg = opts.message;
          this.initial = opts.initial || ``;
          this.validator = opts.validate || (() => true);
          this.value = ``;
          this.errorMsg = opts.error || `Please Enter A Valid Value`;
          this.cursor = Number(!!this.initial);
          this.cursorOffset = 0;
          this.clear = clear(``, this.out.columns);
          this.render();
        }
        set value(v) {
          if (!v && this.initial) {
            this.placeholder = true;
            this.rendered = color.gray(this.transform.render(this.initial));
          } else {
            this.placeholder = false;
            this.rendered = this.transform.render(v);
          }
          this._value = v;
          this.fire();
        }
        get value() {
          return this._value;
        }
        reset() {
          this.value = ``;
          this.cursor = Number(!!this.initial);
          this.cursorOffset = 0;
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.value = this.value || this.initial;
          this.done = this.aborted = true;
          this.error = false;
          this.red = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        async validate() {
          let valid = await this.validator(this.value);
          if (typeof valid === `string`) {
            this.errorMsg = valid;
            valid = false;
          }
          this.error = !valid;
        }
        async submit() {
          this.value = this.value || this.initial;
          this.cursorOffset = 0;
          this.cursor = this.rendered.length;
          await this.validate();
          if (this.error) {
            this.red = true;
            this.fire();
            this.render();
            return;
          }
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        next() {
          if (!this.placeholder) return this.bell();
          this.value = this.initial;
          this.cursor = this.rendered.length;
          this.fire();
          this.render();
        }
        moveCursor(n) {
          if (this.placeholder) return;
          this.cursor = this.cursor + n;
          this.cursorOffset += n;
        }
        _(c, key) {
          let s1 = this.value.slice(0, this.cursor);
          let s2 = this.value.slice(this.cursor);
          this.value = `${s1}${c}${s2}`;
          this.red = false;
          this.cursor = this.placeholder ? 0 : s1.length + 1;
          this.render();
        }
        delete() {
          if (this.isCursorAtStart()) return this.bell();
          let s1 = this.value.slice(0, this.cursor - 1);
          let s2 = this.value.slice(this.cursor);
          this.value = `${s1}${s2}`;
          this.red = false;
          if (this.isCursorAtStart()) {
            this.cursorOffset = 0;
          } else {
            this.cursorOffset++;
            this.moveCursor(-1);
          }
          this.render();
        }
        deleteForward() {
          if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
          let s1 = this.value.slice(0, this.cursor);
          let s2 = this.value.slice(this.cursor + 1);
          this.value = `${s1}${s2}`;
          this.red = false;
          if (this.isCursorAtEnd()) {
            this.cursorOffset = 0;
          } else {
            this.cursorOffset++;
          }
          this.render();
        }
        first() {
          this.cursor = 0;
          this.render();
        }
        last() {
          this.cursor = this.value.length;
          this.render();
        }
        left() {
          if (this.cursor <= 0 || this.placeholder) return this.bell();
          this.moveCursor(-1);
          this.render();
        }
        right() {
          if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
          this.moveCursor(1);
          this.render();
        }
        isCursorAtStart() {
          return this.cursor === 0 || this.placeholder && this.cursor === 1;
        }
        isCursorAtEnd() {
          return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
        }
        render() {
          if (this.closed) return;
          if (!this.firstRender) {
            if (this.outputError)
              this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
            this.out.write(clear(this.outputText, this.out.columns));
          }
          super.render();
          this.outputError = "";
          this.outputText = [
            style.symbol(this.done, this.aborted),
            color.bold(this.msg),
            style.delimiter(this.done),
            this.red ? color.red(this.rendered) : this.rendered
          ].join(` `);
          if (this.error) {
            this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
          }
          this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
        }
      };
      module.exports = TextPrompt;
    }
  });

  // node_modules/prompts/lib/elements/select.js
  var require_select2 = __commonJS({
    "node_modules/prompts/lib/elements/select.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt2();
      var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
      var { cursor } = require_src();
      var SelectPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
          this.warn = opts.warn || "- This option is disabled";
          this.cursor = opts.initial || 0;
          this.choices = opts.choices.map((ch, idx) => {
            if (typeof ch === "string")
              ch = { title: ch, value: idx };
            return {
              title: ch && (ch.title || ch.value || ch),
              value: ch && (ch.value === void 0 ? idx : ch.value),
              description: ch && ch.description,
              selected: ch && ch.selected,
              disabled: ch && ch.disabled
            };
          });
          this.optionsPerPage = opts.optionsPerPage || 10;
          this.value = (this.choices[this.cursor] || {}).value;
          this.clear = clear("", this.out.columns);
          this.render();
        }
        moveCursor(n) {
          this.cursor = n;
          this.value = this.choices[n].value;
          this.fire();
        }
        reset() {
          this.moveCursor(0);
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          if (!this.selection.disabled) {
            this.done = true;
            this.aborted = false;
            this.fire();
            this.render();
            this.out.write("\n");
            this.close();
          } else
            this.bell();
        }
        first() {
          this.moveCursor(0);
          this.render();
        }
        last() {
          this.moveCursor(this.choices.length - 1);
          this.render();
        }
        up() {
          if (this.cursor === 0) {
            this.moveCursor(this.choices.length - 1);
          } else {
            this.moveCursor(this.cursor - 1);
          }
          this.render();
        }
        down() {
          if (this.cursor === this.choices.length - 1) {
            this.moveCursor(0);
          } else {
            this.moveCursor(this.cursor + 1);
          }
          this.render();
        }
        next() {
          this.moveCursor((this.cursor + 1) % this.choices.length);
          this.render();
        }
        _(c, key) {
          if (c === " ") return this.submit();
        }
        get selection() {
          return this.choices[this.cursor];
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          let { startIndex, endIndex } = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage);
          this.outputText = [
            style.symbol(this.done, this.aborted),
            color.bold(this.msg),
            style.delimiter(false),
            this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)
          ].join(" ");
          if (!this.done) {
            this.outputText += "\n";
            for (let i = startIndex; i < endIndex; i++) {
              let title, prefix, desc = "", v = this.choices[i];
              if (i === startIndex && startIndex > 0) {
                prefix = figures.arrowUp;
              } else if (i === endIndex - 1 && endIndex < this.choices.length) {
                prefix = figures.arrowDown;
              } else {
                prefix = " ";
              }
              if (v.disabled) {
                title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
                prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
              } else {
                title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
                prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
                if (v.description && this.cursor === i) {
                  desc = ` - ${v.description}`;
                  if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                    desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
                  }
                }
              }
              this.outputText += `${prefix} ${title}${color.gray(desc)}
`;
            }
          }
          this.out.write(this.outputText);
        }
      };
      module.exports = SelectPrompt;
    }
  });

  // node_modules/prompts/lib/elements/toggle.js
  var require_toggle2 = __commonJS({
    "node_modules/prompts/lib/elements/toggle.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt2();
      var { style, clear } = require_util2();
      var { cursor, erase } = require_src();
      var TogglePrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.value = !!opts.initial;
          this.active = opts.active || "on";
          this.inactive = opts.inactive || "off";
          this.initialValue = this.value;
          this.render();
        }
        reset() {
          this.value = this.initialValue;
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        deactivate() {
          if (this.value === false) return this.bell();
          this.value = false;
          this.render();
        }
        activate() {
          if (this.value === true) return this.bell();
          this.value = true;
          this.render();
        }
        delete() {
          this.deactivate();
        }
        left() {
          this.deactivate();
        }
        right() {
          this.activate();
        }
        down() {
          this.deactivate();
        }
        up() {
          this.activate();
        }
        next() {
          this.value = !this.value;
          this.fire();
          this.render();
        }
        _(c, key) {
          if (c === " ") {
            this.value = !this.value;
          } else if (c === "1") {
            this.value = true;
          } else if (c === "0") {
            this.value = false;
          } else return this.bell();
          this.render();
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          this.outputText = [
            style.symbol(this.done, this.aborted),
            color.bold(this.msg),
            style.delimiter(this.done),
            this.value ? this.inactive : color.cyan().underline(this.inactive),
            color.gray("/"),
            this.value ? color.cyan().underline(this.active) : this.active
          ].join(" ");
          this.out.write(erase.line + cursor.to(0) + this.outputText);
        }
      };
      module.exports = TogglePrompt;
    }
  });

  // node_modules/prompts/lib/dateparts/datepart.js
  var require_datepart2 = __commonJS({
    "node_modules/prompts/lib/dateparts/datepart.js"(exports, module) {
      "use strict";
      var DatePart = class _DatePart {
        constructor({ token, date, parts, locales }) {
          this.token = token;
          this.date = date || /* @__PURE__ */ new Date();
          this.parts = parts || [this];
          this.locales = locales || {};
        }
        up() {
        }
        down() {
        }
        next() {
          const currentIdx = this.parts.indexOf(this);
          return this.parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
        }
        setTo(val) {
        }
        prev() {
          let parts = [].concat(this.parts).reverse();
          const currentIdx = parts.indexOf(this);
          return parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
        }
        toString() {
          return String(this.date);
        }
      };
      module.exports = DatePart;
    }
  });

  // node_modules/prompts/lib/dateparts/meridiem.js
  var require_meridiem2 = __commonJS({
    "node_modules/prompts/lib/dateparts/meridiem.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart2();
      var Meridiem = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setHours((this.date.getHours() + 12) % 24);
        }
        down() {
          this.up();
        }
        toString() {
          let meridiem = this.date.getHours() > 12 ? "pm" : "am";
          return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
        }
      };
      module.exports = Meridiem;
    }
  });

  // node_modules/prompts/lib/dateparts/day.js
  var require_day2 = __commonJS({
    "node_modules/prompts/lib/dateparts/day.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart2();
      var pos = (n) => {
        n = n % 10;
        return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
      };
      var Day = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setDate(this.date.getDate() + 1);
        }
        down() {
          this.date.setDate(this.date.getDate() - 1);
        }
        setTo(val) {
          this.date.setDate(parseInt(val.substr(-2)));
        }
        toString() {
          let date = this.date.getDate();
          let day = this.date.getDay();
          return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
        }
      };
      module.exports = Day;
    }
  });

  // node_modules/prompts/lib/dateparts/hours.js
  var require_hours2 = __commonJS({
    "node_modules/prompts/lib/dateparts/hours.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart2();
      var Hours = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setHours(this.date.getHours() + 1);
        }
        down() {
          this.date.setHours(this.date.getHours() - 1);
        }
        setTo(val) {
          this.date.setHours(parseInt(val.substr(-2)));
        }
        toString() {
          let hours = this.date.getHours();
          if (/h/.test(this.token))
            hours = hours % 12 || 12;
          return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
        }
      };
      module.exports = Hours;
    }
  });

  // node_modules/prompts/lib/dateparts/milliseconds.js
  var require_milliseconds2 = __commonJS({
    "node_modules/prompts/lib/dateparts/milliseconds.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart2();
      var Milliseconds = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setMilliseconds(this.date.getMilliseconds() + 1);
        }
        down() {
          this.date.setMilliseconds(this.date.getMilliseconds() - 1);
        }
        setTo(val) {
          this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
        }
        toString() {
          return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
        }
      };
      module.exports = Milliseconds;
    }
  });

  // node_modules/prompts/lib/dateparts/minutes.js
  var require_minutes2 = __commonJS({
    "node_modules/prompts/lib/dateparts/minutes.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart2();
      var Minutes = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setMinutes(this.date.getMinutes() + 1);
        }
        down() {
          this.date.setMinutes(this.date.getMinutes() - 1);
        }
        setTo(val) {
          this.date.setMinutes(parseInt(val.substr(-2)));
        }
        toString() {
          let m = this.date.getMinutes();
          return this.token.length > 1 ? String(m).padStart(2, "0") : m;
        }
      };
      module.exports = Minutes;
    }
  });

  // node_modules/prompts/lib/dateparts/month.js
  var require_month2 = __commonJS({
    "node_modules/prompts/lib/dateparts/month.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart2();
      var Month = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setMonth(this.date.getMonth() + 1);
        }
        down() {
          this.date.setMonth(this.date.getMonth() - 1);
        }
        setTo(val) {
          val = parseInt(val.substr(-2)) - 1;
          this.date.setMonth(val < 0 ? 0 : val);
        }
        toString() {
          let month = this.date.getMonth();
          let tl = this.token.length;
          return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
        }
      };
      module.exports = Month;
    }
  });

  // node_modules/prompts/lib/dateparts/seconds.js
  var require_seconds2 = __commonJS({
    "node_modules/prompts/lib/dateparts/seconds.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart2();
      var Seconds = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setSeconds(this.date.getSeconds() + 1);
        }
        down() {
          this.date.setSeconds(this.date.getSeconds() - 1);
        }
        setTo(val) {
          this.date.setSeconds(parseInt(val.substr(-2)));
        }
        toString() {
          let s = this.date.getSeconds();
          return this.token.length > 1 ? String(s).padStart(2, "0") : s;
        }
      };
      module.exports = Seconds;
    }
  });

  // node_modules/prompts/lib/dateparts/year.js
  var require_year2 = __commonJS({
    "node_modules/prompts/lib/dateparts/year.js"(exports, module) {
      "use strict";
      var DatePart = require_datepart2();
      var Year = class extends DatePart {
        constructor(opts = {}) {
          super(opts);
        }
        up() {
          this.date.setFullYear(this.date.getFullYear() + 1);
        }
        down() {
          this.date.setFullYear(this.date.getFullYear() - 1);
        }
        setTo(val) {
          this.date.setFullYear(val.substr(-4));
        }
        toString() {
          let year = String(this.date.getFullYear()).padStart(4, "0");
          return this.token.length === 2 ? year.substr(-2) : year;
        }
      };
      module.exports = Year;
    }
  });

  // node_modules/prompts/lib/dateparts/index.js
  var require_dateparts2 = __commonJS({
    "node_modules/prompts/lib/dateparts/index.js"(exports, module) {
      "use strict";
      module.exports = {
        DatePart: require_datepart2(),
        Meridiem: require_meridiem2(),
        Day: require_day2(),
        Hours: require_hours2(),
        Milliseconds: require_milliseconds2(),
        Minutes: require_minutes2(),
        Month: require_month2(),
        Seconds: require_seconds2(),
        Year: require_year2()
      };
    }
  });

  // node_modules/prompts/lib/elements/date.js
  var require_date2 = __commonJS({
    "node_modules/prompts/lib/elements/date.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt2();
      var { style, clear, figures } = require_util2();
      var { erase, cursor } = require_src();
      var { DatePart, Meridiem, Day, Hours, Milliseconds, Minutes, Month, Seconds, Year } = require_dateparts2();
      var regex2 = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
      var regexGroups = {
        1: ({ token }) => token.replace(/\\(.)/g, "$1"),
        2: (opts) => new Day(opts),
        // Day // TODO
        3: (opts) => new Month(opts),
        // Month
        4: (opts) => new Year(opts),
        // Year
        5: (opts) => new Meridiem(opts),
        // AM/PM // TODO (special)
        6: (opts) => new Hours(opts),
        // Hours
        7: (opts) => new Minutes(opts),
        // Minutes
        8: (opts) => new Seconds(opts),
        // Seconds
        9: (opts) => new Milliseconds(opts)
        // Fractional seconds
      };
      var dfltLocales = {
        months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
        monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
        weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
        weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
      };
      var DatePrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.cursor = 0;
          this.typed = "";
          this.locales = Object.assign(dfltLocales, opts.locales);
          this._date = opts.initial || /* @__PURE__ */ new Date();
          this.errorMsg = opts.error || "Please Enter A Valid Value";
          this.validator = opts.validate || (() => true);
          this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
          this.clear = clear("", this.out.columns);
          this.render();
        }
        get value() {
          return this.date;
        }
        get date() {
          return this._date;
        }
        set date(date) {
          if (date) this._date.setTime(date.getTime());
        }
        set mask(mask) {
          let result;
          this.parts = [];
          while (result = regex2.exec(mask)) {
            let match = result.shift();
            let idx = result.findIndex((gr) => gr != null);
            this.parts.push(idx in regexGroups ? regexGroups[idx]({ token: result[idx] || match, date: this.date, parts: this.parts, locales: this.locales }) : result[idx] || match);
          }
          let parts = this.parts.reduce((arr, i) => {
            if (typeof i === "string" && typeof arr[arr.length - 1] === "string")
              arr[arr.length - 1] += i;
            else arr.push(i);
            return arr;
          }, []);
          this.parts.splice(0);
          this.parts.push(...parts);
          this.reset();
        }
        moveCursor(n) {
          this.typed = "";
          this.cursor = n;
          this.fire();
        }
        reset() {
          this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.error = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        async validate() {
          let valid = await this.validator(this.value);
          if (typeof valid === "string") {
            this.errorMsg = valid;
            valid = false;
          }
          this.error = !valid;
        }
        async submit() {
          await this.validate();
          if (this.error) {
            this.color = "red";
            this.fire();
            this.render();
            return;
          }
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        up() {
          this.typed = "";
          this.parts[this.cursor].up();
          this.render();
        }
        down() {
          this.typed = "";
          this.parts[this.cursor].down();
          this.render();
        }
        left() {
          let prev = this.parts[this.cursor].prev();
          if (prev == null) return this.bell();
          this.moveCursor(this.parts.indexOf(prev));
          this.render();
        }
        right() {
          let next = this.parts[this.cursor].next();
          if (next == null) return this.bell();
          this.moveCursor(this.parts.indexOf(next));
          this.render();
        }
        next() {
          let next = this.parts[this.cursor].next();
          this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
          this.render();
        }
        _(c) {
          if (/\d/.test(c)) {
            this.typed += c;
            this.parts[this.cursor].setTo(this.typed);
            this.render();
          }
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          this.outputText = [
            style.symbol(this.done, this.aborted),
            color.bold(this.msg),
            style.delimiter(false),
            this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")
          ].join(" ");
          if (this.error) {
            this.outputText += this.errorMsg.split("\n").reduce(
              (a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`,
              ``
            );
          }
          this.out.write(erase.line + cursor.to(0) + this.outputText);
        }
      };
      module.exports = DatePrompt;
    }
  });

  // node_modules/prompts/lib/elements/number.js
  var require_number2 = __commonJS({
    "node_modules/prompts/lib/elements/number.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt2();
      var { cursor, erase } = require_src();
      var { style, figures, clear, lines } = require_util2();
      var isNumber = /[0-9]/;
      var isDef = (any) => any !== void 0;
      var round = (number, precision) => {
        let factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      };
      var NumberPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.transform = style.render(opts.style);
          this.msg = opts.message;
          this.initial = isDef(opts.initial) ? opts.initial : "";
          this.float = !!opts.float;
          this.round = opts.round || 2;
          this.inc = opts.increment || 1;
          this.min = isDef(opts.min) ? opts.min : -Infinity;
          this.max = isDef(opts.max) ? opts.max : Infinity;
          this.errorMsg = opts.error || `Please Enter A Valid Value`;
          this.validator = opts.validate || (() => true);
          this.color = `cyan`;
          this.value = ``;
          this.typed = ``;
          this.lastHit = 0;
          this.render();
        }
        set value(v) {
          if (!v && v !== 0) {
            this.placeholder = true;
            this.rendered = color.gray(this.transform.render(`${this.initial}`));
            this._value = ``;
          } else {
            this.placeholder = false;
            this.rendered = this.transform.render(`${round(v, this.round)}`);
            this._value = round(v, this.round);
          }
          this.fire();
        }
        get value() {
          return this._value;
        }
        parse(x) {
          return this.float ? parseFloat(x) : parseInt(x);
        }
        valid(c) {
          return c === `-` || c === `.` && this.float || isNumber.test(c);
        }
        reset() {
          this.typed = ``;
          this.value = ``;
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          let x = this.value;
          this.value = x !== `` ? x : this.initial;
          this.done = this.aborted = true;
          this.error = false;
          this.fire();
          this.render();
          this.out.write(`
`);
          this.close();
        }
        async validate() {
          let valid = await this.validator(this.value);
          if (typeof valid === `string`) {
            this.errorMsg = valid;
            valid = false;
          }
          this.error = !valid;
        }
        async submit() {
          await this.validate();
          if (this.error) {
            this.color = `red`;
            this.fire();
            this.render();
            return;
          }
          let x = this.value;
          this.value = x !== `` ? x : this.initial;
          this.done = true;
          this.aborted = false;
          this.error = false;
          this.fire();
          this.render();
          this.out.write(`
`);
          this.close();
        }
        up() {
          this.typed = ``;
          if (this.value === "") {
            this.value = this.min - this.inc;
          }
          if (this.value >= this.max) return this.bell();
          this.value += this.inc;
          this.color = `cyan`;
          this.fire();
          this.render();
        }
        down() {
          this.typed = ``;
          if (this.value === "") {
            this.value = this.min + this.inc;
          }
          if (this.value <= this.min) return this.bell();
          this.value -= this.inc;
          this.color = `cyan`;
          this.fire();
          this.render();
        }
        delete() {
          let val = this.value.toString();
          if (val.length === 0) return this.bell();
          this.value = this.parse(val = val.slice(0, -1)) || ``;
          if (this.value !== "" && this.value < this.min) {
            this.value = this.min;
          }
          this.color = `cyan`;
          this.fire();
          this.render();
        }
        next() {
          this.value = this.initial;
          this.fire();
          this.render();
        }
        _(c, key) {
          if (!this.valid(c)) return this.bell();
          const now = Date.now();
          if (now - this.lastHit > 1e3) this.typed = ``;
          this.typed += c;
          this.lastHit = now;
          this.color = `cyan`;
          if (c === `.`) return this.fire();
          this.value = Math.min(this.parse(this.typed), this.max);
          if (this.value > this.max) this.value = this.max;
          if (this.value < this.min) this.value = this.min;
          this.fire();
          this.render();
        }
        render() {
          if (this.closed) return;
          if (!this.firstRender) {
            if (this.outputError)
              this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
            this.out.write(clear(this.outputText, this.out.columns));
          }
          super.render();
          this.outputError = "";
          this.outputText = [
            style.symbol(this.done, this.aborted),
            color.bold(this.msg),
            style.delimiter(this.done),
            !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered
          ].join(` `);
          if (this.error) {
            this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
          }
          this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
        }
      };
      module.exports = NumberPrompt;
    }
  });

  // node_modules/prompts/lib/elements/multiselect.js
  var require_multiselect2 = __commonJS({
    "node_modules/prompts/lib/elements/multiselect.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var { cursor } = require_src();
      var Prompt = require_prompt2();
      var { clear, figures, style, wrap, entriesToDisplay } = require_util2();
      var MultiselectPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.cursor = opts.cursor || 0;
          this.scrollIndex = opts.cursor || 0;
          this.hint = opts.hint || "";
          this.warn = opts.warn || "- This option is disabled -";
          this.minSelected = opts.min;
          this.showMinError = false;
          this.maxChoices = opts.max;
          this.instructions = opts.instructions;
          this.optionsPerPage = opts.optionsPerPage || 10;
          this.value = opts.choices.map((ch, idx) => {
            if (typeof ch === "string")
              ch = { title: ch, value: idx };
            return {
              title: ch && (ch.title || ch.value || ch),
              description: ch && ch.description,
              value: ch && (ch.value === void 0 ? idx : ch.value),
              selected: ch && ch.selected,
              disabled: ch && ch.disabled
            };
          });
          this.clear = clear("", this.out.columns);
          if (!opts.overrideRender) {
            this.render();
          }
        }
        reset() {
          this.value.map((v) => !v.selected);
          this.cursor = 0;
          this.fire();
          this.render();
        }
        selected() {
          return this.value.filter((v) => v.selected);
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          const selected = this.value.filter((e) => e.selected);
          if (this.minSelected && selected.length < this.minSelected) {
            this.showMinError = true;
            this.render();
          } else {
            this.done = true;
            this.aborted = false;
            this.fire();
            this.render();
            this.out.write("\n");
            this.close();
          }
        }
        first() {
          this.cursor = 0;
          this.render();
        }
        last() {
          this.cursor = this.value.length - 1;
          this.render();
        }
        next() {
          this.cursor = (this.cursor + 1) % this.value.length;
          this.render();
        }
        up() {
          if (this.cursor === 0) {
            this.cursor = this.value.length - 1;
          } else {
            this.cursor--;
          }
          this.render();
        }
        down() {
          if (this.cursor === this.value.length - 1) {
            this.cursor = 0;
          } else {
            this.cursor++;
          }
          this.render();
        }
        left() {
          this.value[this.cursor].selected = false;
          this.render();
        }
        right() {
          if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
          this.value[this.cursor].selected = true;
          this.render();
        }
        handleSpaceToggle() {
          const v = this.value[this.cursor];
          if (v.selected) {
            v.selected = false;
            this.render();
          } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
            return this.bell();
          } else {
            v.selected = true;
            this.render();
          }
        }
        toggleAll() {
          if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
            return this.bell();
          }
          const newSelected = !this.value[this.cursor].selected;
          this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
          this.render();
        }
        _(c, key) {
          if (c === " ") {
            this.handleSpaceToggle();
          } else if (c === "a") {
            this.toggleAll();
          } else {
            return this.bell();
          }
        }
        renderInstructions() {
          if (this.instructions === void 0 || this.instructions) {
            if (typeof this.instructions === "string") {
              return this.instructions;
            }
            return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + `    enter/return: Complete answer`;
          }
          return "";
        }
        renderOption(cursor2, v, i, arrowIndicator) {
          const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
          let title, desc;
          if (v.disabled) {
            title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
          } else {
            title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
            if (cursor2 === i && v.description) {
              desc = ` - ${v.description}`;
              if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                desc = "\n" + wrap(v.description, { margin: prefix.length, width: this.out.columns });
              }
            }
          }
          return prefix + title + color.gray(desc || "");
        }
        // shared with autocompleteMultiselect
        paginateOptions(options) {
          if (options.length === 0) {
            return color.red("No matches for this query.");
          }
          let { startIndex, endIndex } = entriesToDisplay(this.cursor, options.length, this.optionsPerPage);
          let prefix, styledOptions = [];
          for (let i = startIndex; i < endIndex; i++) {
            if (i === startIndex && startIndex > 0) {
              prefix = figures.arrowUp;
            } else if (i === endIndex - 1 && endIndex < options.length) {
              prefix = figures.arrowDown;
            } else {
              prefix = " ";
            }
            styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
          }
          return "\n" + styledOptions.join("\n");
        }
        // shared with autocomleteMultiselect
        renderOptions(options) {
          if (!this.done) {
            return this.paginateOptions(options);
          }
          return "";
        }
        renderDoneOrInstructions() {
          if (this.done) {
            return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
          }
          const output = [color.gray(this.hint), this.renderInstructions()];
          if (this.value[this.cursor].disabled) {
            output.push(color.yellow(this.warn));
          }
          return output.join(" ");
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          super.render();
          let prompt = [
            style.symbol(this.done, this.aborted),
            color.bold(this.msg),
            style.delimiter(false),
            this.renderDoneOrInstructions()
          ].join(" ");
          if (this.showMinError) {
            prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
            this.showMinError = false;
          }
          prompt += this.renderOptions(this.value);
          this.out.write(this.clear + prompt);
          this.clear = clear(prompt, this.out.columns);
        }
      };
      module.exports = MultiselectPrompt;
    }
  });

  // node_modules/prompts/lib/elements/autocomplete.js
  var require_autocomplete2 = __commonJS({
    "node_modules/prompts/lib/elements/autocomplete.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt2();
      var { erase, cursor } = require_src();
      var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
      var getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
      var getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
      var getIndex = (arr, valOrTitle) => {
        const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
        return index > -1 ? index : void 0;
      };
      var AutocompletePrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.suggest = opts.suggest;
          this.choices = opts.choices;
          this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
          this.select = this.initial || opts.cursor || 0;
          this.i18n = { noMatches: opts.noMatches || "no matches found" };
          this.fallback = opts.fallback || this.initial;
          this.clearFirst = opts.clearFirst || false;
          this.suggestions = [];
          this.input = "";
          this.limit = opts.limit || 10;
          this.cursor = 0;
          this.transform = style.render(opts.style);
          this.scale = this.transform.scale;
          this.render = this.render.bind(this);
          this.complete = this.complete.bind(this);
          this.clear = clear("", this.out.columns);
          this.complete(this.render);
          this.render();
        }
        set fallback(fb) {
          this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
        }
        get fallback() {
          let choice;
          if (typeof this._fb === "number")
            choice = this.choices[this._fb];
          else if (typeof this._fb === "string")
            choice = { title: this._fb };
          return choice || this._fb || { title: this.i18n.noMatches };
        }
        moveSelect(i) {
          this.select = i;
          if (this.suggestions.length > 0)
            this.value = getVal(this.suggestions, i);
          else this.value = this.fallback.value;
          this.fire();
        }
        async complete(cb) {
          const p = this.completing = this.suggest(this.input, this.choices);
          const suggestions = await p;
          if (this.completing !== p) return;
          this.suggestions = suggestions.map((s, i, arr) => ({ title: getTitle(arr, i), value: getVal(arr, i), description: s.description }));
          this.completing = false;
          const l = Math.max(suggestions.length - 1, 0);
          this.moveSelect(Math.min(l, this.select));
          cb && cb();
        }
        reset() {
          this.input = "";
          this.complete(() => {
            this.moveSelect(this.initial !== void 0 ? this.initial : 0);
            this.render();
          });
          this.render();
        }
        exit() {
          if (this.clearFirst && this.input.length > 0) {
            this.reset();
          } else {
            this.done = this.exited = true;
            this.aborted = false;
            this.fire();
            this.render();
            this.out.write("\n");
            this.close();
          }
        }
        abort() {
          this.done = this.aborted = true;
          this.exited = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          this.done = true;
          this.aborted = this.exited = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        _(c, key) {
          let s1 = this.input.slice(0, this.cursor);
          let s2 = this.input.slice(this.cursor);
          this.input = `${s1}${c}${s2}`;
          this.cursor = s1.length + 1;
          this.complete(this.render);
          this.render();
        }
        delete() {
          if (this.cursor === 0) return this.bell();
          let s1 = this.input.slice(0, this.cursor - 1);
          let s2 = this.input.slice(this.cursor);
          this.input = `${s1}${s2}`;
          this.complete(this.render);
          this.cursor = this.cursor - 1;
          this.render();
        }
        deleteForward() {
          if (this.cursor * this.scale >= this.rendered.length) return this.bell();
          let s1 = this.input.slice(0, this.cursor);
          let s2 = this.input.slice(this.cursor + 1);
          this.input = `${s1}${s2}`;
          this.complete(this.render);
          this.render();
        }
        first() {
          this.moveSelect(0);
          this.render();
        }
        last() {
          this.moveSelect(this.suggestions.length - 1);
          this.render();
        }
        up() {
          if (this.select === 0) {
            this.moveSelect(this.suggestions.length - 1);
          } else {
            this.moveSelect(this.select - 1);
          }
          this.render();
        }
        down() {
          if (this.select === this.suggestions.length - 1) {
            this.moveSelect(0);
          } else {
            this.moveSelect(this.select + 1);
          }
          this.render();
        }
        next() {
          if (this.select === this.suggestions.length - 1) {
            this.moveSelect(0);
          } else this.moveSelect(this.select + 1);
          this.render();
        }
        nextPage() {
          this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
          this.render();
        }
        prevPage() {
          this.moveSelect(Math.max(this.select - this.limit, 0));
          this.render();
        }
        left() {
          if (this.cursor <= 0) return this.bell();
          this.cursor = this.cursor - 1;
          this.render();
        }
        right() {
          if (this.cursor * this.scale >= this.rendered.length) return this.bell();
          this.cursor = this.cursor + 1;
          this.render();
        }
        renderOption(v, hovered, isStart, isEnd) {
          let desc;
          let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
          let title = hovered ? color.cyan().underline(v.title) : v.title;
          prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
          if (v.description) {
            desc = ` - ${v.description}`;
            if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
              desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
            }
          }
          return prefix + " " + title + color.gray(desc || "");
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          let { startIndex, endIndex } = entriesToDisplay(this.select, this.choices.length, this.limit);
          this.outputText = [
            style.symbol(this.done, this.aborted, this.exited),
            color.bold(this.msg),
            style.delimiter(this.completing),
            this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)
          ].join(" ");
          if (!this.done) {
            const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(
              item,
              this.select === i + startIndex,
              i === 0 && startIndex > 0,
              i + startIndex === endIndex - 1 && endIndex < this.choices.length
            )).join("\n");
            this.outputText += `
` + (suggestions || color.gray(this.fallback.title));
          }
          this.out.write(erase.line + cursor.to(0) + this.outputText);
        }
      };
      module.exports = AutocompletePrompt;
    }
  });

  // node_modules/prompts/lib/elements/autocompleteMultiselect.js
  var require_autocompleteMultiselect2 = __commonJS({
    "node_modules/prompts/lib/elements/autocompleteMultiselect.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var { cursor } = require_src();
      var MultiselectPrompt = require_multiselect2();
      var { clear, style, figures } = require_util2();
      var AutocompleteMultiselectPrompt = class extends MultiselectPrompt {
        constructor(opts = {}) {
          opts.overrideRender = true;
          super(opts);
          this.inputValue = "";
          this.clear = clear("", this.out.columns);
          this.filteredOptions = this.value;
          this.render();
        }
        last() {
          this.cursor = this.filteredOptions.length - 1;
          this.render();
        }
        next() {
          this.cursor = (this.cursor + 1) % this.filteredOptions.length;
          this.render();
        }
        up() {
          if (this.cursor === 0) {
            this.cursor = this.filteredOptions.length - 1;
          } else {
            this.cursor--;
          }
          this.render();
        }
        down() {
          if (this.cursor === this.filteredOptions.length - 1) {
            this.cursor = 0;
          } else {
            this.cursor++;
          }
          this.render();
        }
        left() {
          this.filteredOptions[this.cursor].selected = false;
          this.render();
        }
        right() {
          if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
          this.filteredOptions[this.cursor].selected = true;
          this.render();
        }
        delete() {
          if (this.inputValue.length) {
            this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
            this.updateFilteredOptions();
          }
        }
        updateFilteredOptions() {
          const currentHighlight = this.filteredOptions[this.cursor];
          this.filteredOptions = this.value.filter((v) => {
            if (this.inputValue) {
              if (typeof v.title === "string") {
                if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
                  return true;
                }
              }
              if (typeof v.value === "string") {
                if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
                  return true;
                }
              }
              return false;
            }
            return true;
          });
          const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
          this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
          this.render();
        }
        handleSpaceToggle() {
          const v = this.filteredOptions[this.cursor];
          if (v.selected) {
            v.selected = false;
            this.render();
          } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
            return this.bell();
          } else {
            v.selected = true;
            this.render();
          }
        }
        handleInputChange(c) {
          this.inputValue = this.inputValue + c;
          this.updateFilteredOptions();
        }
        _(c, key) {
          if (c === " ") {
            this.handleSpaceToggle();
          } else {
            this.handleInputChange(c);
          }
        }
        renderInstructions() {
          if (this.instructions === void 0 || this.instructions) {
            if (typeof this.instructions === "string") {
              return this.instructions;
            }
            return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
          }
          return "";
        }
        renderCurrentInput() {
          return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}
`;
        }
        renderOption(cursor2, v, i) {
          let title;
          if (v.disabled) title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
          else title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
          return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
        }
        renderDoneOrInstructions() {
          if (this.done) {
            return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
          }
          const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
          if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
            output.push(color.yellow(this.warn));
          }
          return output.join(" ");
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          super.render();
          let prompt = [
            style.symbol(this.done, this.aborted),
            color.bold(this.msg),
            style.delimiter(false),
            this.renderDoneOrInstructions()
          ].join(" ");
          if (this.showMinError) {
            prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
            this.showMinError = false;
          }
          prompt += this.renderOptions(this.filteredOptions);
          this.out.write(this.clear + prompt);
          this.clear = clear(prompt, this.out.columns);
        }
      };
      module.exports = AutocompleteMultiselectPrompt;
    }
  });

  // node_modules/prompts/lib/elements/confirm.js
  var require_confirm2 = __commonJS({
    "node_modules/prompts/lib/elements/confirm.js"(exports, module) {
      "use strict";
      var color = require_kleur();
      var Prompt = require_prompt2();
      var { style, clear } = require_util2();
      var { erase, cursor } = require_src();
      var ConfirmPrompt = class extends Prompt {
        constructor(opts = {}) {
          super(opts);
          this.msg = opts.message;
          this.value = opts.initial;
          this.initialValue = !!opts.initial;
          this.yesMsg = opts.yes || "yes";
          this.yesOption = opts.yesOption || "(Y/n)";
          this.noMsg = opts.no || "no";
          this.noOption = opts.noOption || "(y/N)";
          this.render();
        }
        reset() {
          this.value = this.initialValue;
          this.fire();
          this.render();
        }
        exit() {
          this.abort();
        }
        abort() {
          this.done = this.aborted = true;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        submit() {
          this.value = this.value || false;
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
        _(c, key) {
          if (c.toLowerCase() === "y") {
            this.value = true;
            return this.submit();
          }
          if (c.toLowerCase() === "n") {
            this.value = false;
            return this.submit();
          }
          return this.bell();
        }
        render() {
          if (this.closed) return;
          if (this.firstRender) this.out.write(cursor.hide);
          else this.out.write(clear(this.outputText, this.out.columns));
          super.render();
          this.outputText = [
            style.symbol(this.done, this.aborted),
            color.bold(this.msg),
            style.delimiter(this.done),
            this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)
          ].join(" ");
          this.out.write(erase.line + cursor.to(0) + this.outputText);
        }
      };
      module.exports = ConfirmPrompt;
    }
  });

  // node_modules/prompts/lib/elements/index.js
  var require_elements2 = __commonJS({
    "node_modules/prompts/lib/elements/index.js"(exports, module) {
      "use strict";
      module.exports = {
        TextPrompt: require_text2(),
        SelectPrompt: require_select2(),
        TogglePrompt: require_toggle2(),
        DatePrompt: require_date2(),
        NumberPrompt: require_number2(),
        MultiselectPrompt: require_multiselect2(),
        AutocompletePrompt: require_autocomplete2(),
        AutocompleteMultiselectPrompt: require_autocompleteMultiselect2(),
        ConfirmPrompt: require_confirm2()
      };
    }
  });

  // node_modules/prompts/lib/prompts.js
  var require_prompts2 = __commonJS({
    "node_modules/prompts/lib/prompts.js"(exports) {
      "use strict";
      var $ = exports;
      var el = require_elements2();
      var noop = (v) => v;
      function toPrompt(type, args, opts = {}) {
        return new Promise((res, rej) => {
          const p = new el[type](args);
          const onAbort = opts.onAbort || noop;
          const onSubmit = opts.onSubmit || noop;
          const onExit2 = opts.onExit || noop;
          p.on("state", args.onState || noop);
          p.on("submit", (x) => res(onSubmit(x)));
          p.on("exit", (x) => res(onExit2(x)));
          p.on("abort", (x) => rej(onAbort(x)));
        });
      }
      $.text = (args) => toPrompt("TextPrompt", args);
      $.password = (args) => {
        args.style = "password";
        return $.text(args);
      };
      $.invisible = (args) => {
        args.style = "invisible";
        return $.text(args);
      };
      $.number = (args) => toPrompt("NumberPrompt", args);
      $.date = (args) => toPrompt("DatePrompt", args);
      $.confirm = (args) => toPrompt("ConfirmPrompt", args);
      $.list = (args) => {
        const sep = args.separator || ",";
        return toPrompt("TextPrompt", args, {
          onSubmit: (str) => str.split(sep).map((s) => s.trim())
        });
      };
      $.toggle = (args) => toPrompt("TogglePrompt", args);
      $.select = (args) => toPrompt("SelectPrompt", args);
      $.multiselect = (args) => {
        args.choices = [].concat(args.choices || []);
        const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
        return toPrompt("MultiselectPrompt", args, {
          onAbort: toSelected,
          onSubmit: toSelected
        });
      };
      $.autocompleteMultiselect = (args) => {
        args.choices = [].concat(args.choices || []);
        const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
        return toPrompt("AutocompleteMultiselectPrompt", args, {
          onAbort: toSelected,
          onSubmit: toSelected
        });
      };
      var byTitle = (input, choices) => Promise.resolve(
        choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase())
      );
      $.autocomplete = (args) => {
        args.suggest = args.suggest || byTitle;
        args.choices = [].concat(args.choices || []);
        return toPrompt("AutocompletePrompt", args);
      };
    }
  });

  // node_modules/prompts/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/prompts/lib/index.js"(exports, module) {
      "use strict";
      var prompts2 = require_prompts2();
      var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
      var noop = () => {
      };
      async function prompt(questions = [], { onSubmit = noop, onCancel = noop } = {}) {
        const answers = {};
        const override2 = prompt._override || {};
        questions = [].concat(questions);
        let answer, question, quit, name, type, lastPrompt;
        const getFormattedAnswer = async (question2, answer2, skipValidation = false) => {
          if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
            return;
          }
          return question2.format ? await question2.format(answer2, answers) : answer2;
        };
        for (question of questions) {
          ({ name, type } = question);
          if (typeof type === "function") {
            type = await type(answer, { ...answers }, question);
            question["type"] = type;
          }
          if (!type) continue;
          for (let key in question) {
            if (passOn.includes(key)) continue;
            let value = question[key];
            question[key] = typeof value === "function" ? await value(answer, { ...answers }, lastPrompt) : value;
          }
          lastPrompt = question;
          if (typeof question.message !== "string") {
            throw new Error("prompt message is required");
          }
          ({ name, type } = question);
          if (prompts2[type] === void 0) {
            throw new Error(`prompt type (${type}) is not defined`);
          }
          if (override2[question.name] !== void 0) {
            answer = await getFormattedAnswer(question, override2[question.name]);
            if (answer !== void 0) {
              answers[name] = answer;
              continue;
            }
          }
          try {
            answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : await prompts2[type](question);
            answers[name] = answer = await getFormattedAnswer(question, answer, true);
            quit = await onSubmit(question, answer, answers);
          } catch (err) {
            quit = !await onCancel(question, answers);
          }
          if (quit) return answers;
        }
        return answers;
      }
      function getInjectedAnswer(injected, deafultValue) {
        const answer = injected.shift();
        if (answer instanceof Error) {
          throw answer;
        }
        return answer === void 0 ? deafultValue : answer;
      }
      function inject(answers) {
        prompt._injected = (prompt._injected || []).concat(answers);
      }
      function override(answers) {
        prompt._override = Object.assign({}, answers);
      }
      module.exports = Object.assign(prompt, { prompt, prompts: prompts2, inject, override });
    }
  });

  // node_modules/prompts/index.js
  var require_prompts3 = __commonJS({
    "node_modules/prompts/index.js"(exports, module) {
      "use strict";
      function isNodeLT(tar) {
        tar = (Array.isArray(tar) ? tar : tar.split(".")).map(Number);
        let i = 0, src = process.versions.node.split(".").map(Number);
        for (; i < tar.length; i++) {
          if (src[i] > tar[i]) return false;
          if (tar[i] > src[i]) return true;
        }
        return false;
      }
      module.exports = isNodeLT("8.6.0") ? require_dist() : require_lib2();
    }
  });

  // node_modules/commander/esm.mjs
  var import_index = __toESM(require_commander(), 1);
  var {
    program,
    createCommand,
    createArgument,
    createOption,
    CommanderError,
    InvalidArgumentError,
    InvalidOptionArgumentError,
    // deprecated old name
    Command,
    Argument,
    Option,
    Help
  } = import_index.default;

  // src/utils/get-package-info.ts
  var import_path = __toESM(__require("path"));
  var import_fs_extra = __toESM(require_lib());
  async function getPackageInfo() {
    const packageJsonPath = import_path.default.join(__dirname, "..", "package.json");
    return await import_fs_extra.default.readJSON(packageJsonPath);
  }

  // src/commands/add.ts
  var import_fs_extra2 = __toESM(require_lib());
  var import_path2 = __toESM(__require("path"));

  // node_modules/chalk/source/vendor/ansi-styles/index.js
  var ANSI_BACKGROUND_OFFSET = 10;
  var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
  var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
  var wrapAnsi16m = (offset = 0) => (red2, green2, blue2) => `\x1B[${38 + offset};2;${red2};${green2};${blue2}m`;
  var styles = {
    modifier: {
      reset: [0, 0],
      // 21 isn't widely supported and 22 does the same thing
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      // Bright color
      blackBright: [90, 39],
      gray: [90, 39],
      // Alias of `blackBright`
      grey: [90, 39],
      // Alias of `blackBright`
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      // Bright color
      bgBlackBright: [100, 49],
      bgGray: [100, 49],
      // Alias of `bgBlackBright`
      bgGrey: [100, 49],
      // Alias of `bgBlackBright`
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  };
  var modifierNames = Object.keys(styles.modifier);
  var foregroundColorNames = Object.keys(styles.color);
  var backgroundColorNames = Object.keys(styles.bgColor);
  var colorNames = [...foregroundColorNames, ...backgroundColorNames];
  function assembleStyles() {
    const codes = /* @__PURE__ */ new Map();
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `\x1B[${style[0]}m`,
          close: `\x1B[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "\x1B[39m";
    styles.bgColor.close = "\x1B[49m";
    styles.color.ansi = wrapAnsi16();
    styles.color.ansi256 = wrapAnsi256();
    styles.color.ansi16m = wrapAnsi16m();
    styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
    Object.defineProperties(styles, {
      rgbToAnsi256: {
        value(red2, green2, blue2) {
          if (red2 === green2 && green2 === blue2) {
            if (red2 < 8) {
              return 16;
            }
            if (red2 > 248) {
              return 231;
            }
            return Math.round((red2 - 8) / 247 * 24) + 232;
          }
          return 16 + 36 * Math.round(red2 / 255 * 5) + 6 * Math.round(green2 / 255 * 5) + Math.round(blue2 / 255 * 5);
        },
        enumerable: false
      },
      hexToRgb: {
        value(hex) {
          const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
          if (!matches) {
            return [0, 0, 0];
          }
          let [colorString] = matches;
          if (colorString.length === 3) {
            colorString = [...colorString].map((character) => character + character).join("");
          }
          const integer = Number.parseInt(colorString, 16);
          return [
            /* eslint-disable no-bitwise */
            integer >> 16 & 255,
            integer >> 8 & 255,
            integer & 255
            /* eslint-enable no-bitwise */
          ];
        },
        enumerable: false
      },
      hexToAnsi256: {
        value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
        enumerable: false
      },
      ansi256ToAnsi: {
        value(code) {
          if (code < 8) {
            return 30 + code;
          }
          if (code < 16) {
            return 90 + (code - 8);
          }
          let red2;
          let green2;
          let blue2;
          if (code >= 232) {
            red2 = ((code - 232) * 10 + 8) / 255;
            green2 = red2;
            blue2 = red2;
          } else {
            code -= 16;
            const remainder = code % 36;
            red2 = Math.floor(code / 36) / 5;
            green2 = Math.floor(remainder / 6) / 5;
            blue2 = remainder % 6 / 5;
          }
          const value = Math.max(red2, green2, blue2) * 2;
          if (value === 0) {
            return 30;
          }
          let result = 30 + (Math.round(blue2) << 2 | Math.round(green2) << 1 | Math.round(red2));
          if (value === 2) {
            result += 60;
          }
          return result;
        },
        enumerable: false
      },
      rgbToAnsi: {
        value: (red2, green2, blue2) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red2, green2, blue2)),
        enumerable: false
      },
      hexToAnsi: {
        value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
        enumerable: false
      }
    });
    return styles;
  }
  var ansiStyles = assembleStyles();
  var ansi_styles_default = ansiStyles;

  // node_modules/chalk/source/vendor/supports-color/index.js
  var import_node_process = __toESM(__require("process"), 1);
  var import_node_os = __toESM(__require("os"), 1);
  var import_node_tty = __toESM(__require("tty"), 1);
  function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process.default.argv) {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  }
  var { env } = import_node_process.default;
  var flagForceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    flagForceColor = 0;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    flagForceColor = 1;
  }
  function envForceColor() {
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        return 1;
      }
      if (env.FORCE_COLOR === "false") {
        return 0;
      }
      return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
    const noFlagForceColor = envForceColor();
    if (noFlagForceColor !== void 0) {
      flagForceColor = noFlagForceColor;
    }
    const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
    if (forceColor === 0) {
      return 0;
    }
    if (sniffFlags) {
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
    }
    if ("TF_BUILD" in env && "AGENT_NAME" in env) {
      return 1;
    }
    if (haveStream && !streamIsTTY && forceColor === void 0) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (import_node_process.default.platform === "win32") {
      const osRelease = import_node_os.default.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((key) => key in env)) {
        return 3;
      }
      if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if (env.TERM === "xterm-kitty") {
      return 3;
    }
    if (env.TERM === "xterm-ghostty") {
      return 3;
    }
    if (env.TERM === "wezterm") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app": {
          return version >= 3 ? 3 : 2;
        }
        case "Apple_Terminal": {
          return 2;
        }
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  }
  function createSupportsColor(stream, options = {}) {
    const level = _supportsColor(stream, {
      streamIsTTY: stream && stream.isTTY,
      ...options
    });
    return translateLevel(level);
  }
  var supportsColor = {
    stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
    stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
  };
  var supports_color_default = supportsColor;

  // node_modules/chalk/source/utilities.js
  function stringReplaceAll(string, substring, replacer) {
    let index = string.indexOf(substring);
    if (index === -1) {
      return string;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = "";
    do {
      returnValue += string.slice(endIndex, index) + substring + replacer;
      endIndex = index + substringLength;
      index = string.indexOf(substring, endIndex);
    } while (index !== -1);
    returnValue += string.slice(endIndex);
    return returnValue;
  }
  function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
    let endIndex = 0;
    let returnValue = "";
    do {
      const gotCR = string[index - 1] === "\r";
      returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
      endIndex = index + 1;
      index = string.indexOf("\n", endIndex);
    } while (index !== -1);
    returnValue += string.slice(endIndex);
    return returnValue;
  }

  // node_modules/chalk/source/index.js
  var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
  var GENERATOR = /* @__PURE__ */ Symbol("GENERATOR");
  var STYLER = /* @__PURE__ */ Symbol("STYLER");
  var IS_EMPTY = /* @__PURE__ */ Symbol("IS_EMPTY");
  var levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ];
  var styles2 = /* @__PURE__ */ Object.create(null);
  var applyOptions = (object, options = {}) => {
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
      throw new Error("The `level` option should be an integer from 0 to 3");
    }
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === void 0 ? colorLevel : options.level;
  };
  var chalkFactory = (options) => {
    const chalk2 = (...strings) => strings.join(" ");
    applyOptions(chalk2, options);
    Object.setPrototypeOf(chalk2, createChalk.prototype);
    return chalk2;
  };
  function createChalk(options) {
    return chalkFactory(options);
  }
  Object.setPrototypeOf(createChalk.prototype, Function.prototype);
  for (const [styleName, style] of Object.entries(ansi_styles_default)) {
    styles2[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
        Object.defineProperty(this, styleName, { value: builder });
        return builder;
      }
    };
  }
  styles2.visible = {
    get() {
      const builder = createBuilder(this, this[STYLER], true);
      Object.defineProperty(this, "visible", { value: builder });
      return builder;
    }
  };
  var getModelAnsi = (model, level, type, ...arguments_) => {
    if (model === "rgb") {
      if (level === "ansi16m") {
        return ansi_styles_default[type].ansi16m(...arguments_);
      }
      if (level === "ansi256") {
        return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
      }
      return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
    }
    if (model === "hex") {
      return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
    }
    return ansi_styles_default[type][model](...arguments_);
  };
  var usedModels = ["rgb", "hex", "ansi256"];
  for (const model of usedModels) {
    styles2[model] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles2[bgModel] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {
  }, {
    ...styles2,
    level: {
      enumerable: true,
      get() {
        return this[GENERATOR].level;
      },
      set(level) {
        this[GENERATOR].level = level;
      }
    }
  });
  var createStyler = (open, close, parent) => {
    let openAll;
    let closeAll;
    if (parent === void 0) {
      openAll = open;
      closeAll = close;
    } else {
      openAll = parent.openAll + open;
      closeAll = close + parent.closeAll;
    }
    return {
      open,
      close,
      openAll,
      closeAll,
      parent
    };
  };
  var createBuilder = (self, _styler, _isEmpty) => {
    const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
    Object.setPrototypeOf(builder, proto);
    builder[GENERATOR] = self;
    builder[STYLER] = _styler;
    builder[IS_EMPTY] = _isEmpty;
    return builder;
  };
  var applyStyle = (self, string) => {
    if (self.level <= 0 || !string) {
      return self[IS_EMPTY] ? "" : string;
    }
    let styler = self[STYLER];
    if (styler === void 0) {
      return string;
    }
    const { openAll, closeAll } = styler;
    if (string.includes("\x1B")) {
      while (styler !== void 0) {
        string = stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
      }
    }
    const lfIndex = string.indexOf("\n");
    if (lfIndex !== -1) {
      string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    }
    return openAll + string + closeAll;
  };
  Object.defineProperties(createChalk.prototype, styles2);
  var chalk = createChalk();
  var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
  var source_default = chalk;

  // node_modules/ora/index.js
  var import_node_process6 = __toESM(__require("process"), 1);

  // node_modules/cli-cursor/index.js
  var import_node_process3 = __toESM(__require("process"), 1);

  // node_modules/restore-cursor/index.js
  var import_node_process2 = __toESM(__require("process"), 1);

  // node_modules/mimic-function/index.js
  var copyProperty = (to, from, property, ignoreNonConfigurable) => {
    if (property === "length" || property === "prototype") {
      return;
    }
    if (property === "arguments" || property === "caller") {
      return;
    }
    const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
    const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
    if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
      return;
    }
    Object.defineProperty(to, property, fromDescriptor);
  };
  var canCopyProperty = function(toDescriptor, fromDescriptor) {
    return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
  };
  var changePrototype = (to, from) => {
    const fromPrototype = Object.getPrototypeOf(from);
    if (fromPrototype === Object.getPrototypeOf(to)) {
      return;
    }
    Object.setPrototypeOf(to, fromPrototype);
  };
  var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
  var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
  var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
  var changeToString = (to, from, name) => {
    const withName = name === "" ? "" : `with ${name.trim()}() `;
    const newToString = wrappedToString.bind(null, withName, from.toString());
    Object.defineProperty(newToString, "name", toStringName);
    const { writable, enumerable, configurable } = toStringDescriptor;
    Object.defineProperty(to, "toString", { value: newToString, writable, enumerable, configurable });
  };
  function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
    const { name } = to;
    for (const property of Reflect.ownKeys(from)) {
      copyProperty(to, from, property, ignoreNonConfigurable);
    }
    changePrototype(to, from);
    changeToString(to, from, name);
    return to;
  }

  // node_modules/onetime/index.js
  var calledFunctions = /* @__PURE__ */ new WeakMap();
  var onetime = (function_, options = {}) => {
    if (typeof function_ !== "function") {
      throw new TypeError("Expected a function");
    }
    let returnValue;
    let callCount = 0;
    const functionName = function_.displayName || function_.name || "<anonymous>";
    const onetime2 = function(...arguments_) {
      calledFunctions.set(onetime2, ++callCount);
      if (callCount === 1) {
        returnValue = function_.apply(this, arguments_);
        function_ = void 0;
      } else if (options.throw === true) {
        throw new Error(`Function \`${functionName}\` can only be called once`);
      }
      return returnValue;
    };
    mimicFunction(onetime2, function_);
    calledFunctions.set(onetime2, callCount);
    return onetime2;
  };
  onetime.callCount = (function_) => {
    if (!calledFunctions.has(function_)) {
      throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
    }
    return calledFunctions.get(function_);
  };
  var onetime_default = onetime;

  // node_modules/signal-exit/dist/mjs/signals.js
  var signals = [];
  signals.push("SIGHUP", "SIGINT", "SIGTERM");
  if (process.platform !== "win32") {
    signals.push(
      "SIGALRM",
      "SIGABRT",
      "SIGVTALRM",
      "SIGXCPU",
      "SIGXFSZ",
      "SIGUSR2",
      "SIGTRAP",
      "SIGSYS",
      "SIGQUIT",
      "SIGIOT"
      // should detect profiler and enable/disable accordingly.
      // see #21
      // 'SIGPROF'
    );
  }
  if (process.platform === "linux") {
    signals.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
  }

  // node_modules/signal-exit/dist/mjs/index.js
  var processOk = (process9) => !!process9 && typeof process9 === "object" && typeof process9.removeListener === "function" && typeof process9.emit === "function" && typeof process9.reallyExit === "function" && typeof process9.listeners === "function" && typeof process9.kill === "function" && typeof process9.pid === "number" && typeof process9.on === "function";
  var kExitEmitter = /* @__PURE__ */ Symbol.for("signal-exit emitter");
  var global2 = globalThis;
  var ObjectDefineProperty = Object.defineProperty.bind(Object);
  var Emitter = class {
    constructor() {
      __publicField(this, "emitted", {
        afterExit: false,
        exit: false
      });
      __publicField(this, "listeners", {
        afterExit: [],
        exit: []
      });
      __publicField(this, "count", 0);
      __publicField(this, "id", Math.random());
      if (global2[kExitEmitter]) {
        return global2[kExitEmitter];
      }
      ObjectDefineProperty(global2, kExitEmitter, {
        value: this,
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
    on(ev, fn) {
      this.listeners[ev].push(fn);
    }
    removeListener(ev, fn) {
      const list = this.listeners[ev];
      const i = list.indexOf(fn);
      if (i === -1) {
        return;
      }
      if (i === 0 && list.length === 1) {
        list.length = 0;
      } else {
        list.splice(i, 1);
      }
    }
    emit(ev, code, signal) {
      if (this.emitted[ev]) {
        return false;
      }
      this.emitted[ev] = true;
      let ret = false;
      for (const fn of this.listeners[ev]) {
        ret = fn(code, signal) === true || ret;
      }
      if (ev === "exit") {
        ret = this.emit("afterExit", code, signal) || ret;
      }
      return ret;
    }
  };
  var SignalExitBase = class {
  };
  var signalExitWrap = (handler) => {
    return {
      onExit(cb, opts) {
        return handler.onExit(cb, opts);
      },
      load() {
        return handler.load();
      },
      unload() {
        return handler.unload();
      }
    };
  };
  var SignalExitFallback = class extends SignalExitBase {
    onExit() {
      return () => {
      };
    }
    load() {
    }
    unload() {
    }
  };
  var _hupSig, _emitter, _process, _originalProcessEmit, _originalProcessReallyExit, _sigListeners, _loaded, _SignalExit_instances, processReallyExit_fn, processEmit_fn;
  var SignalExit = class extends SignalExitBase {
    constructor(process9) {
      super();
      __privateAdd(this, _SignalExit_instances);
      // "SIGHUP" throws an `ENOSYS` error on Windows,
      // so use a supported signal instead
      /* c8 ignore start */
      __privateAdd(this, _hupSig, process3.platform === "win32" ? "SIGINT" : "SIGHUP");
      /* c8 ignore stop */
      __privateAdd(this, _emitter, new Emitter());
      __privateAdd(this, _process);
      __privateAdd(this, _originalProcessEmit);
      __privateAdd(this, _originalProcessReallyExit);
      __privateAdd(this, _sigListeners, {});
      __privateAdd(this, _loaded, false);
      __privateSet(this, _process, process9);
      __privateSet(this, _sigListeners, {});
      for (const sig of signals) {
        __privateGet(this, _sigListeners)[sig] = () => {
          const listeners = __privateGet(this, _process).listeners(sig);
          let { count } = __privateGet(this, _emitter);
          const p = process9;
          if (typeof p.__signal_exit_emitter__ === "object" && typeof p.__signal_exit_emitter__.count === "number") {
            count += p.__signal_exit_emitter__.count;
          }
          if (listeners.length === count) {
            this.unload();
            const ret = __privateGet(this, _emitter).emit("exit", null, sig);
            const s = sig === "SIGHUP" ? __privateGet(this, _hupSig) : sig;
            if (!ret)
              process9.kill(process9.pid, s);
          }
        };
      }
      __privateSet(this, _originalProcessReallyExit, process9.reallyExit);
      __privateSet(this, _originalProcessEmit, process9.emit);
    }
    onExit(cb, opts) {
      if (!processOk(__privateGet(this, _process))) {
        return () => {
        };
      }
      if (__privateGet(this, _loaded) === false) {
        this.load();
      }
      const ev = opts?.alwaysLast ? "afterExit" : "exit";
      __privateGet(this, _emitter).on(ev, cb);
      return () => {
        __privateGet(this, _emitter).removeListener(ev, cb);
        if (__privateGet(this, _emitter).listeners["exit"].length === 0 && __privateGet(this, _emitter).listeners["afterExit"].length === 0) {
          this.unload();
        }
      };
    }
    load() {
      if (__privateGet(this, _loaded)) {
        return;
      }
      __privateSet(this, _loaded, true);
      __privateGet(this, _emitter).count += 1;
      for (const sig of signals) {
        try {
          const fn = __privateGet(this, _sigListeners)[sig];
          if (fn)
            __privateGet(this, _process).on(sig, fn);
        } catch (_) {
        }
      }
      __privateGet(this, _process).emit = (ev, ...a) => {
        return __privateMethod(this, _SignalExit_instances, processEmit_fn).call(this, ev, ...a);
      };
      __privateGet(this, _process).reallyExit = (code) => {
        return __privateMethod(this, _SignalExit_instances, processReallyExit_fn).call(this, code);
      };
    }
    unload() {
      if (!__privateGet(this, _loaded)) {
        return;
      }
      __privateSet(this, _loaded, false);
      signals.forEach((sig) => {
        const listener = __privateGet(this, _sigListeners)[sig];
        if (!listener) {
          throw new Error("Listener not defined for signal: " + sig);
        }
        try {
          __privateGet(this, _process).removeListener(sig, listener);
        } catch (_) {
        }
      });
      __privateGet(this, _process).emit = __privateGet(this, _originalProcessEmit);
      __privateGet(this, _process).reallyExit = __privateGet(this, _originalProcessReallyExit);
      __privateGet(this, _emitter).count -= 1;
    }
  };
  _hupSig = new WeakMap();
  _emitter = new WeakMap();
  _process = new WeakMap();
  _originalProcessEmit = new WeakMap();
  _originalProcessReallyExit = new WeakMap();
  _sigListeners = new WeakMap();
  _loaded = new WeakMap();
  _SignalExit_instances = new WeakSet();
  processReallyExit_fn = function(code) {
    if (!processOk(__privateGet(this, _process))) {
      return 0;
    }
    __privateGet(this, _process).exitCode = code || 0;
    __privateGet(this, _emitter).emit("exit", __privateGet(this, _process).exitCode, null);
    return __privateGet(this, _originalProcessReallyExit).call(__privateGet(this, _process), __privateGet(this, _process).exitCode);
  };
  processEmit_fn = function(ev, ...args) {
    const og = __privateGet(this, _originalProcessEmit);
    if (ev === "exit" && processOk(__privateGet(this, _process))) {
      if (typeof args[0] === "number") {
        __privateGet(this, _process).exitCode = args[0];
      }
      const ret = og.call(__privateGet(this, _process), ev, ...args);
      __privateGet(this, _emitter).emit("exit", __privateGet(this, _process).exitCode, null);
      return ret;
    } else {
      return og.call(__privateGet(this, _process), ev, ...args);
    }
  };
  var process3 = globalThis.process;
  var {
    /**
     * Called when the process is exiting, whether via signal, explicit
     * exit, or running out of stuff to do.
     *
     * If the global process object is not suitable for instrumentation,
     * then this will be a no-op.
     *
     * Returns a function that may be used to unload signal-exit.
     */
    onExit,
    /**
     * Load the listeners.  Likely you never need to call this, unless
     * doing a rather deep integration with signal-exit functionality.
     * Mostly exposed for the benefit of testing.
     *
     * @internal
     */
    load,
    /**
     * Unload the listeners.  Likely you never need to call this, unless
     * doing a rather deep integration with signal-exit functionality.
     * Mostly exposed for the benefit of testing.
     *
     * @internal
     */
    unload
  } = signalExitWrap(processOk(process3) ? new SignalExit(process3) : new SignalExitFallback());

  // node_modules/restore-cursor/index.js
  var terminal = import_node_process2.default.stderr.isTTY ? import_node_process2.default.stderr : import_node_process2.default.stdout.isTTY ? import_node_process2.default.stdout : void 0;
  var restoreCursor = terminal ? onetime_default(() => {
    onExit(() => {
      terminal.write("\x1B[?25h");
    }, { alwaysLast: true });
  }) : () => {
  };
  var restore_cursor_default = restoreCursor;

  // node_modules/cli-cursor/index.js
  var isHidden = false;
  var cliCursor = {};
  cliCursor.show = (writableStream = import_node_process3.default.stderr) => {
    if (!writableStream.isTTY) {
      return;
    }
    isHidden = false;
    writableStream.write("\x1B[?25h");
  };
  cliCursor.hide = (writableStream = import_node_process3.default.stderr) => {
    if (!writableStream.isTTY) {
      return;
    }
    restore_cursor_default();
    isHidden = true;
    writableStream.write("\x1B[?25l");
  };
  cliCursor.toggle = (force, writableStream) => {
    if (force !== void 0) {
      isHidden = force;
    }
    if (isHidden) {
      cliCursor.show(writableStream);
    } else {
      cliCursor.hide(writableStream);
    }
  };
  var cli_cursor_default = cliCursor;

  // node_modules/cli-spinners/spinners.json
  var spinners_default = {
    dots: {
      interval: 80,
      frames: [
        "\u280B",
        "\u2819",
        "\u2839",
        "\u2838",
        "\u283C",
        "\u2834",
        "\u2826",
        "\u2827",
        "\u2807",
        "\u280F"
      ]
    },
    dots2: {
      interval: 80,
      frames: [
        "\u28FE",
        "\u28FD",
        "\u28FB",
        "\u28BF",
        "\u287F",
        "\u28DF",
        "\u28EF",
        "\u28F7"
      ]
    },
    dots3: {
      interval: 80,
      frames: [
        "\u280B",
        "\u2819",
        "\u281A",
        "\u281E",
        "\u2816",
        "\u2826",
        "\u2834",
        "\u2832",
        "\u2833",
        "\u2813"
      ]
    },
    dots4: {
      interval: 80,
      frames: [
        "\u2804",
        "\u2806",
        "\u2807",
        "\u280B",
        "\u2819",
        "\u2838",
        "\u2830",
        "\u2820",
        "\u2830",
        "\u2838",
        "\u2819",
        "\u280B",
        "\u2807",
        "\u2806"
      ]
    },
    dots5: {
      interval: 80,
      frames: [
        "\u280B",
        "\u2819",
        "\u281A",
        "\u2812",
        "\u2802",
        "\u2802",
        "\u2812",
        "\u2832",
        "\u2834",
        "\u2826",
        "\u2816",
        "\u2812",
        "\u2810",
        "\u2810",
        "\u2812",
        "\u2813",
        "\u280B"
      ]
    },
    dots6: {
      interval: 80,
      frames: [
        "\u2801",
        "\u2809",
        "\u2819",
        "\u281A",
        "\u2812",
        "\u2802",
        "\u2802",
        "\u2812",
        "\u2832",
        "\u2834",
        "\u2824",
        "\u2804",
        "\u2804",
        "\u2824",
        "\u2834",
        "\u2832",
        "\u2812",
        "\u2802",
        "\u2802",
        "\u2812",
        "\u281A",
        "\u2819",
        "\u2809",
        "\u2801"
      ]
    },
    dots7: {
      interval: 80,
      frames: [
        "\u2808",
        "\u2809",
        "\u280B",
        "\u2813",
        "\u2812",
        "\u2810",
        "\u2810",
        "\u2812",
        "\u2816",
        "\u2826",
        "\u2824",
        "\u2820",
        "\u2820",
        "\u2824",
        "\u2826",
        "\u2816",
        "\u2812",
        "\u2810",
        "\u2810",
        "\u2812",
        "\u2813",
        "\u280B",
        "\u2809",
        "\u2808"
      ]
    },
    dots8: {
      interval: 80,
      frames: [
        "\u2801",
        "\u2801",
        "\u2809",
        "\u2819",
        "\u281A",
        "\u2812",
        "\u2802",
        "\u2802",
        "\u2812",
        "\u2832",
        "\u2834",
        "\u2824",
        "\u2804",
        "\u2804",
        "\u2824",
        "\u2820",
        "\u2820",
        "\u2824",
        "\u2826",
        "\u2816",
        "\u2812",
        "\u2810",
        "\u2810",
        "\u2812",
        "\u2813",
        "\u280B",
        "\u2809",
        "\u2808",
        "\u2808"
      ]
    },
    dots9: {
      interval: 80,
      frames: [
        "\u28B9",
        "\u28BA",
        "\u28BC",
        "\u28F8",
        "\u28C7",
        "\u2867",
        "\u2857",
        "\u284F"
      ]
    },
    dots10: {
      interval: 80,
      frames: [
        "\u2884",
        "\u2882",
        "\u2881",
        "\u2841",
        "\u2848",
        "\u2850",
        "\u2860"
      ]
    },
    dots11: {
      interval: 100,
      frames: [
        "\u2801",
        "\u2802",
        "\u2804",
        "\u2840",
        "\u2880",
        "\u2820",
        "\u2810",
        "\u2808"
      ]
    },
    dots12: {
      interval: 80,
      frames: [
        "\u2880\u2800",
        "\u2840\u2800",
        "\u2804\u2800",
        "\u2882\u2800",
        "\u2842\u2800",
        "\u2805\u2800",
        "\u2883\u2800",
        "\u2843\u2800",
        "\u280D\u2800",
        "\u288B\u2800",
        "\u284B\u2800",
        "\u280D\u2801",
        "\u288B\u2801",
        "\u284B\u2801",
        "\u280D\u2809",
        "\u280B\u2809",
        "\u280B\u2809",
        "\u2809\u2819",
        "\u2809\u2819",
        "\u2809\u2829",
        "\u2808\u2899",
        "\u2808\u2859",
        "\u2888\u2829",
        "\u2840\u2899",
        "\u2804\u2859",
        "\u2882\u2829",
        "\u2842\u2898",
        "\u2805\u2858",
        "\u2883\u2828",
        "\u2843\u2890",
        "\u280D\u2850",
        "\u288B\u2820",
        "\u284B\u2880",
        "\u280D\u2841",
        "\u288B\u2801",
        "\u284B\u2801",
        "\u280D\u2809",
        "\u280B\u2809",
        "\u280B\u2809",
        "\u2809\u2819",
        "\u2809\u2819",
        "\u2809\u2829",
        "\u2808\u2899",
        "\u2808\u2859",
        "\u2808\u2829",
        "\u2800\u2899",
        "\u2800\u2859",
        "\u2800\u2829",
        "\u2800\u2898",
        "\u2800\u2858",
        "\u2800\u2828",
        "\u2800\u2890",
        "\u2800\u2850",
        "\u2800\u2820",
        "\u2800\u2880",
        "\u2800\u2840"
      ]
    },
    dots13: {
      interval: 80,
      frames: [
        "\u28FC",
        "\u28F9",
        "\u28BB",
        "\u283F",
        "\u285F",
        "\u28CF",
        "\u28E7",
        "\u28F6"
      ]
    },
    dots14: {
      interval: 80,
      frames: [
        "\u2809\u2809",
        "\u2808\u2819",
        "\u2800\u2839",
        "\u2800\u28B8",
        "\u2800\u28F0",
        "\u2880\u28E0",
        "\u28C0\u28C0",
        "\u28C4\u2840",
        "\u28C6\u2800",
        "\u2847\u2800",
        "\u280F\u2800",
        "\u280B\u2801"
      ]
    },
    dots8Bit: {
      interval: 80,
      frames: [
        "\u2800",
        "\u2801",
        "\u2802",
        "\u2803",
        "\u2804",
        "\u2805",
        "\u2806",
        "\u2807",
        "\u2840",
        "\u2841",
        "\u2842",
        "\u2843",
        "\u2844",
        "\u2845",
        "\u2846",
        "\u2847",
        "\u2808",
        "\u2809",
        "\u280A",
        "\u280B",
        "\u280C",
        "\u280D",
        "\u280E",
        "\u280F",
        "\u2848",
        "\u2849",
        "\u284A",
        "\u284B",
        "\u284C",
        "\u284D",
        "\u284E",
        "\u284F",
        "\u2810",
        "\u2811",
        "\u2812",
        "\u2813",
        "\u2814",
        "\u2815",
        "\u2816",
        "\u2817",
        "\u2850",
        "\u2851",
        "\u2852",
        "\u2853",
        "\u2854",
        "\u2855",
        "\u2856",
        "\u2857",
        "\u2818",
        "\u2819",
        "\u281A",
        "\u281B",
        "\u281C",
        "\u281D",
        "\u281E",
        "\u281F",
        "\u2858",
        "\u2859",
        "\u285A",
        "\u285B",
        "\u285C",
        "\u285D",
        "\u285E",
        "\u285F",
        "\u2820",
        "\u2821",
        "\u2822",
        "\u2823",
        "\u2824",
        "\u2825",
        "\u2826",
        "\u2827",
        "\u2860",
        "\u2861",
        "\u2862",
        "\u2863",
        "\u2864",
        "\u2865",
        "\u2866",
        "\u2867",
        "\u2828",
        "\u2829",
        "\u282A",
        "\u282B",
        "\u282C",
        "\u282D",
        "\u282E",
        "\u282F",
        "\u2868",
        "\u2869",
        "\u286A",
        "\u286B",
        "\u286C",
        "\u286D",
        "\u286E",
        "\u286F",
        "\u2830",
        "\u2831",
        "\u2832",
        "\u2833",
        "\u2834",
        "\u2835",
        "\u2836",
        "\u2837",
        "\u2870",
        "\u2871",
        "\u2872",
        "\u2873",
        "\u2874",
        "\u2875",
        "\u2876",
        "\u2877",
        "\u2838",
        "\u2839",
        "\u283A",
        "\u283B",
        "\u283C",
        "\u283D",
        "\u283E",
        "\u283F",
        "\u2878",
        "\u2879",
        "\u287A",
        "\u287B",
        "\u287C",
        "\u287D",
        "\u287E",
        "\u287F",
        "\u2880",
        "\u2881",
        "\u2882",
        "\u2883",
        "\u2884",
        "\u2885",
        "\u2886",
        "\u2887",
        "\u28C0",
        "\u28C1",
        "\u28C2",
        "\u28C3",
        "\u28C4",
        "\u28C5",
        "\u28C6",
        "\u28C7",
        "\u2888",
        "\u2889",
        "\u288A",
        "\u288B",
        "\u288C",
        "\u288D",
        "\u288E",
        "\u288F",
        "\u28C8",
        "\u28C9",
        "\u28CA",
        "\u28CB",
        "\u28CC",
        "\u28CD",
        "\u28CE",
        "\u28CF",
        "\u2890",
        "\u2891",
        "\u2892",
        "\u2893",
        "\u2894",
        "\u2895",
        "\u2896",
        "\u2897",
        "\u28D0",
        "\u28D1",
        "\u28D2",
        "\u28D3",
        "\u28D4",
        "\u28D5",
        "\u28D6",
        "\u28D7",
        "\u2898",
        "\u2899",
        "\u289A",
        "\u289B",
        "\u289C",
        "\u289D",
        "\u289E",
        "\u289F",
        "\u28D8",
        "\u28D9",
        "\u28DA",
        "\u28DB",
        "\u28DC",
        "\u28DD",
        "\u28DE",
        "\u28DF",
        "\u28A0",
        "\u28A1",
        "\u28A2",
        "\u28A3",
        "\u28A4",
        "\u28A5",
        "\u28A6",
        "\u28A7",
        "\u28E0",
        "\u28E1",
        "\u28E2",
        "\u28E3",
        "\u28E4",
        "\u28E5",
        "\u28E6",
        "\u28E7",
        "\u28A8",
        "\u28A9",
        "\u28AA",
        "\u28AB",
        "\u28AC",
        "\u28AD",
        "\u28AE",
        "\u28AF",
        "\u28E8",
        "\u28E9",
        "\u28EA",
        "\u28EB",
        "\u28EC",
        "\u28ED",
        "\u28EE",
        "\u28EF",
        "\u28B0",
        "\u28B1",
        "\u28B2",
        "\u28B3",
        "\u28B4",
        "\u28B5",
        "\u28B6",
        "\u28B7",
        "\u28F0",
        "\u28F1",
        "\u28F2",
        "\u28F3",
        "\u28F4",
        "\u28F5",
        "\u28F6",
        "\u28F7",
        "\u28B8",
        "\u28B9",
        "\u28BA",
        "\u28BB",
        "\u28BC",
        "\u28BD",
        "\u28BE",
        "\u28BF",
        "\u28F8",
        "\u28F9",
        "\u28FA",
        "\u28FB",
        "\u28FC",
        "\u28FD",
        "\u28FE",
        "\u28FF"
      ]
    },
    dotsCircle: {
      interval: 80,
      frames: [
        "\u288E ",
        "\u280E\u2801",
        "\u280A\u2811",
        "\u2808\u2831",
        " \u2871",
        "\u2880\u2870",
        "\u2884\u2860",
        "\u2886\u2840"
      ]
    },
    sand: {
      interval: 80,
      frames: [
        "\u2801",
        "\u2802",
        "\u2804",
        "\u2840",
        "\u2848",
        "\u2850",
        "\u2860",
        "\u28C0",
        "\u28C1",
        "\u28C2",
        "\u28C4",
        "\u28CC",
        "\u28D4",
        "\u28E4",
        "\u28E5",
        "\u28E6",
        "\u28EE",
        "\u28F6",
        "\u28F7",
        "\u28FF",
        "\u287F",
        "\u283F",
        "\u289F",
        "\u281F",
        "\u285B",
        "\u281B",
        "\u282B",
        "\u288B",
        "\u280B",
        "\u280D",
        "\u2849",
        "\u2809",
        "\u2811",
        "\u2821",
        "\u2881"
      ]
    },
    line: {
      interval: 130,
      frames: [
        "-",
        "\\",
        "|",
        "/"
      ]
    },
    line2: {
      interval: 100,
      frames: [
        "\u2802",
        "-",
        "\u2013",
        "\u2014",
        "\u2013",
        "-"
      ]
    },
    rollingLine: {
      interval: 80,
      frames: [
        "/  ",
        " - ",
        " \\ ",
        "  |",
        "  |",
        " \\ ",
        " - ",
        "/  "
      ]
    },
    pipe: {
      interval: 100,
      frames: [
        "\u2524",
        "\u2518",
        "\u2534",
        "\u2514",
        "\u251C",
        "\u250C",
        "\u252C",
        "\u2510"
      ]
    },
    simpleDots: {
      interval: 400,
      frames: [
        ".  ",
        ".. ",
        "...",
        "   "
      ]
    },
    simpleDotsScrolling: {
      interval: 200,
      frames: [
        ".  ",
        ".. ",
        "...",
        " ..",
        "  .",
        "   "
      ]
    },
    star: {
      interval: 70,
      frames: [
        "\u2736",
        "\u2738",
        "\u2739",
        "\u273A",
        "\u2739",
        "\u2737"
      ]
    },
    star2: {
      interval: 80,
      frames: [
        "+",
        "x",
        "*"
      ]
    },
    flip: {
      interval: 70,
      frames: [
        "_",
        "_",
        "_",
        "-",
        "`",
        "`",
        "'",
        "\xB4",
        "-",
        "_",
        "_",
        "_"
      ]
    },
    hamburger: {
      interval: 100,
      frames: [
        "\u2631",
        "\u2632",
        "\u2634"
      ]
    },
    growVertical: {
      interval: 120,
      frames: [
        "\u2581",
        "\u2583",
        "\u2584",
        "\u2585",
        "\u2586",
        "\u2587",
        "\u2586",
        "\u2585",
        "\u2584",
        "\u2583"
      ]
    },
    growHorizontal: {
      interval: 120,
      frames: [
        "\u258F",
        "\u258E",
        "\u258D",
        "\u258C",
        "\u258B",
        "\u258A",
        "\u2589",
        "\u258A",
        "\u258B",
        "\u258C",
        "\u258D",
        "\u258E"
      ]
    },
    balloon: {
      interval: 140,
      frames: [
        " ",
        ".",
        "o",
        "O",
        "@",
        "*",
        " "
      ]
    },
    balloon2: {
      interval: 120,
      frames: [
        ".",
        "o",
        "O",
        "\xB0",
        "O",
        "o",
        "."
      ]
    },
    noise: {
      interval: 100,
      frames: [
        "\u2593",
        "\u2592",
        "\u2591"
      ]
    },
    bounce: {
      interval: 120,
      frames: [
        "\u2801",
        "\u2802",
        "\u2804",
        "\u2802"
      ]
    },
    boxBounce: {
      interval: 120,
      frames: [
        "\u2596",
        "\u2598",
        "\u259D",
        "\u2597"
      ]
    },
    boxBounce2: {
      interval: 100,
      frames: [
        "\u258C",
        "\u2580",
        "\u2590",
        "\u2584"
      ]
    },
    triangle: {
      interval: 50,
      frames: [
        "\u25E2",
        "\u25E3",
        "\u25E4",
        "\u25E5"
      ]
    },
    binary: {
      interval: 80,
      frames: [
        "010010",
        "001100",
        "100101",
        "111010",
        "111101",
        "010111",
        "101011",
        "111000",
        "110011",
        "110101"
      ]
    },
    arc: {
      interval: 100,
      frames: [
        "\u25DC",
        "\u25E0",
        "\u25DD",
        "\u25DE",
        "\u25E1",
        "\u25DF"
      ]
    },
    circle: {
      interval: 120,
      frames: [
        "\u25E1",
        "\u2299",
        "\u25E0"
      ]
    },
    squareCorners: {
      interval: 180,
      frames: [
        "\u25F0",
        "\u25F3",
        "\u25F2",
        "\u25F1"
      ]
    },
    circleQuarters: {
      interval: 120,
      frames: [
        "\u25F4",
        "\u25F7",
        "\u25F6",
        "\u25F5"
      ]
    },
    circleHalves: {
      interval: 50,
      frames: [
        "\u25D0",
        "\u25D3",
        "\u25D1",
        "\u25D2"
      ]
    },
    squish: {
      interval: 100,
      frames: [
        "\u256B",
        "\u256A"
      ]
    },
    toggle: {
      interval: 250,
      frames: [
        "\u22B6",
        "\u22B7"
      ]
    },
    toggle2: {
      interval: 80,
      frames: [
        "\u25AB",
        "\u25AA"
      ]
    },
    toggle3: {
      interval: 120,
      frames: [
        "\u25A1",
        "\u25A0"
      ]
    },
    toggle4: {
      interval: 100,
      frames: [
        "\u25A0",
        "\u25A1",
        "\u25AA",
        "\u25AB"
      ]
    },
    toggle5: {
      interval: 100,
      frames: [
        "\u25AE",
        "\u25AF"
      ]
    },
    toggle6: {
      interval: 300,
      frames: [
        "\u101D",
        "\u1040"
      ]
    },
    toggle7: {
      interval: 80,
      frames: [
        "\u29BE",
        "\u29BF"
      ]
    },
    toggle8: {
      interval: 100,
      frames: [
        "\u25CD",
        "\u25CC"
      ]
    },
    toggle9: {
      interval: 100,
      frames: [
        "\u25C9",
        "\u25CE"
      ]
    },
    toggle10: {
      interval: 100,
      frames: [
        "\u3282",
        "\u3280",
        "\u3281"
      ]
    },
    toggle11: {
      interval: 50,
      frames: [
        "\u29C7",
        "\u29C6"
      ]
    },
    toggle12: {
      interval: 120,
      frames: [
        "\u2617",
        "\u2616"
      ]
    },
    toggle13: {
      interval: 80,
      frames: [
        "=",
        "*",
        "-"
      ]
    },
    arrow: {
      interval: 100,
      frames: [
        "\u2190",
        "\u2196",
        "\u2191",
        "\u2197",
        "\u2192",
        "\u2198",
        "\u2193",
        "\u2199"
      ]
    },
    arrow2: {
      interval: 80,
      frames: [
        "\u2B06\uFE0F ",
        "\u2197\uFE0F ",
        "\u27A1\uFE0F ",
        "\u2198\uFE0F ",
        "\u2B07\uFE0F ",
        "\u2199\uFE0F ",
        "\u2B05\uFE0F ",
        "\u2196\uFE0F "
      ]
    },
    arrow3: {
      interval: 120,
      frames: [
        "\u25B9\u25B9\u25B9\u25B9\u25B9",
        "\u25B8\u25B9\u25B9\u25B9\u25B9",
        "\u25B9\u25B8\u25B9\u25B9\u25B9",
        "\u25B9\u25B9\u25B8\u25B9\u25B9",
        "\u25B9\u25B9\u25B9\u25B8\u25B9",
        "\u25B9\u25B9\u25B9\u25B9\u25B8"
      ]
    },
    bouncingBar: {
      interval: 80,
      frames: [
        "[    ]",
        "[=   ]",
        "[==  ]",
        "[=== ]",
        "[====]",
        "[ ===]",
        "[  ==]",
        "[   =]",
        "[    ]",
        "[   =]",
        "[  ==]",
        "[ ===]",
        "[====]",
        "[=== ]",
        "[==  ]",
        "[=   ]"
      ]
    },
    bouncingBall: {
      interval: 80,
      frames: [
        "( \u25CF    )",
        "(  \u25CF   )",
        "(   \u25CF  )",
        "(    \u25CF )",
        "(     \u25CF)",
        "(    \u25CF )",
        "(   \u25CF  )",
        "(  \u25CF   )",
        "( \u25CF    )",
        "(\u25CF     )"
      ]
    },
    smiley: {
      interval: 200,
      frames: [
        "\u{1F604} ",
        "\u{1F61D} "
      ]
    },
    monkey: {
      interval: 300,
      frames: [
        "\u{1F648} ",
        "\u{1F648} ",
        "\u{1F649} ",
        "\u{1F64A} "
      ]
    },
    hearts: {
      interval: 100,
      frames: [
        "\u{1F49B} ",
        "\u{1F499} ",
        "\u{1F49C} ",
        "\u{1F49A} ",
        "\u{1F497} "
      ]
    },
    clock: {
      interval: 100,
      frames: [
        "\u{1F55B} ",
        "\u{1F550} ",
        "\u{1F551} ",
        "\u{1F552} ",
        "\u{1F553} ",
        "\u{1F554} ",
        "\u{1F555} ",
        "\u{1F556} ",
        "\u{1F557} ",
        "\u{1F558} ",
        "\u{1F559} ",
        "\u{1F55A} "
      ]
    },
    earth: {
      interval: 180,
      frames: [
        "\u{1F30D} ",
        "\u{1F30E} ",
        "\u{1F30F} "
      ]
    },
    material: {
      interval: 17,
      frames: [
        "\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
        "\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
        "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
        "\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581"
      ]
    },
    moon: {
      interval: 80,
      frames: [
        "\u{1F311} ",
        "\u{1F312} ",
        "\u{1F313} ",
        "\u{1F314} ",
        "\u{1F315} ",
        "\u{1F316} ",
        "\u{1F317} ",
        "\u{1F318} "
      ]
    },
    runner: {
      interval: 140,
      frames: [
        "\u{1F6B6} ",
        "\u{1F3C3} "
      ]
    },
    pong: {
      interval: 80,
      frames: [
        "\u2590\u2802       \u258C",
        "\u2590\u2808       \u258C",
        "\u2590 \u2802      \u258C",
        "\u2590 \u2820      \u258C",
        "\u2590  \u2840     \u258C",
        "\u2590  \u2820     \u258C",
        "\u2590   \u2802    \u258C",
        "\u2590   \u2808    \u258C",
        "\u2590    \u2802   \u258C",
        "\u2590    \u2820   \u258C",
        "\u2590     \u2840  \u258C",
        "\u2590     \u2820  \u258C",
        "\u2590      \u2802 \u258C",
        "\u2590      \u2808 \u258C",
        "\u2590       \u2802\u258C",
        "\u2590       \u2820\u258C",
        "\u2590       \u2840\u258C",
        "\u2590      \u2820 \u258C",
        "\u2590      \u2802 \u258C",
        "\u2590     \u2808  \u258C",
        "\u2590     \u2802  \u258C",
        "\u2590    \u2820   \u258C",
        "\u2590    \u2840   \u258C",
        "\u2590   \u2820    \u258C",
        "\u2590   \u2802    \u258C",
        "\u2590  \u2808     \u258C",
        "\u2590  \u2802     \u258C",
        "\u2590 \u2820      \u258C",
        "\u2590 \u2840      \u258C",
        "\u2590\u2820       \u258C"
      ]
    },
    shark: {
      interval: 120,
      frames: [
        "\u2590|\\____________\u258C",
        "\u2590_|\\___________\u258C",
        "\u2590__|\\__________\u258C",
        "\u2590___|\\_________\u258C",
        "\u2590____|\\________\u258C",
        "\u2590_____|\\_______\u258C",
        "\u2590______|\\______\u258C",
        "\u2590_______|\\_____\u258C",
        "\u2590________|\\____\u258C",
        "\u2590_________|\\___\u258C",
        "\u2590__________|\\__\u258C",
        "\u2590___________|\\_\u258C",
        "\u2590____________|\\\u258C",
        "\u2590____________/|\u258C",
        "\u2590___________/|_\u258C",
        "\u2590__________/|__\u258C",
        "\u2590_________/|___\u258C",
        "\u2590________/|____\u258C",
        "\u2590_______/|_____\u258C",
        "\u2590______/|______\u258C",
        "\u2590_____/|_______\u258C",
        "\u2590____/|________\u258C",
        "\u2590___/|_________\u258C",
        "\u2590__/|__________\u258C",
        "\u2590_/|___________\u258C",
        "\u2590/|____________\u258C"
      ]
    },
    dqpb: {
      interval: 100,
      frames: [
        "d",
        "q",
        "p",
        "b"
      ]
    },
    weather: {
      interval: 100,
      frames: [
        "\u2600\uFE0F ",
        "\u2600\uFE0F ",
        "\u2600\uFE0F ",
        "\u{1F324} ",
        "\u26C5\uFE0F ",
        "\u{1F325} ",
        "\u2601\uFE0F ",
        "\u{1F327} ",
        "\u{1F328} ",
        "\u{1F327} ",
        "\u{1F328} ",
        "\u{1F327} ",
        "\u{1F328} ",
        "\u26C8 ",
        "\u{1F328} ",
        "\u{1F327} ",
        "\u{1F328} ",
        "\u2601\uFE0F ",
        "\u{1F325} ",
        "\u26C5\uFE0F ",
        "\u{1F324} ",
        "\u2600\uFE0F ",
        "\u2600\uFE0F "
      ]
    },
    christmas: {
      interval: 400,
      frames: [
        "\u{1F332}",
        "\u{1F384}"
      ]
    },
    grenade: {
      interval: 80,
      frames: [
        "\u060C  ",
        "\u2032  ",
        " \xB4 ",
        " \u203E ",
        "  \u2E0C",
        "  \u2E0A",
        "  |",
        "  \u204E",
        "  \u2055",
        " \u0DF4 ",
        "  \u2053",
        "   ",
        "   ",
        "   "
      ]
    },
    point: {
      interval: 125,
      frames: [
        "\u2219\u2219\u2219",
        "\u25CF\u2219\u2219",
        "\u2219\u25CF\u2219",
        "\u2219\u2219\u25CF",
        "\u2219\u2219\u2219"
      ]
    },
    layer: {
      interval: 150,
      frames: [
        "-",
        "=",
        "\u2261"
      ]
    },
    betaWave: {
      interval: 80,
      frames: [
        "\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2",
        "\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2",
        "\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2",
        "\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2",
        "\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2",
        "\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2",
        "\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1"
      ]
    },
    fingerDance: {
      interval: 160,
      frames: [
        "\u{1F918} ",
        "\u{1F91F} ",
        "\u{1F596} ",
        "\u270B ",
        "\u{1F91A} ",
        "\u{1F446} "
      ]
    },
    fistBump: {
      interval: 80,
      frames: [
        "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
        "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
        "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
        "\u3000\u{1F91C}\u3000\u3000\u{1F91B}\u3000 ",
        "\u3000\u3000\u{1F91C}\u{1F91B}\u3000\u3000 ",
        "\u3000\u{1F91C}\u2728\u{1F91B}\u3000\u3000 ",
        "\u{1F91C}\u3000\u2728\u3000\u{1F91B}\u3000 "
      ]
    },
    soccerHeader: {
      interval: 80,
      frames: [
        " \u{1F9D1}\u26BD\uFE0F       \u{1F9D1} ",
        "\u{1F9D1}  \u26BD\uFE0F      \u{1F9D1} ",
        "\u{1F9D1}   \u26BD\uFE0F     \u{1F9D1} ",
        "\u{1F9D1}    \u26BD\uFE0F    \u{1F9D1} ",
        "\u{1F9D1}     \u26BD\uFE0F   \u{1F9D1} ",
        "\u{1F9D1}      \u26BD\uFE0F  \u{1F9D1} ",
        "\u{1F9D1}       \u26BD\uFE0F\u{1F9D1}  ",
        "\u{1F9D1}      \u26BD\uFE0F  \u{1F9D1} ",
        "\u{1F9D1}     \u26BD\uFE0F   \u{1F9D1} ",
        "\u{1F9D1}    \u26BD\uFE0F    \u{1F9D1} ",
        "\u{1F9D1}   \u26BD\uFE0F     \u{1F9D1} ",
        "\u{1F9D1}  \u26BD\uFE0F      \u{1F9D1} "
      ]
    },
    mindblown: {
      interval: 160,
      frames: [
        "\u{1F610} ",
        "\u{1F610} ",
        "\u{1F62E} ",
        "\u{1F62E} ",
        "\u{1F626} ",
        "\u{1F626} ",
        "\u{1F627} ",
        "\u{1F627} ",
        "\u{1F92F} ",
        "\u{1F4A5} ",
        "\u2728 ",
        "\u3000 ",
        "\u3000 ",
        "\u3000 "
      ]
    },
    speaker: {
      interval: 160,
      frames: [
        "\u{1F508} ",
        "\u{1F509} ",
        "\u{1F50A} ",
        "\u{1F509} "
      ]
    },
    orangePulse: {
      interval: 100,
      frames: [
        "\u{1F538} ",
        "\u{1F536} ",
        "\u{1F7E0} ",
        "\u{1F7E0} ",
        "\u{1F536} "
      ]
    },
    bluePulse: {
      interval: 100,
      frames: [
        "\u{1F539} ",
        "\u{1F537} ",
        "\u{1F535} ",
        "\u{1F535} ",
        "\u{1F537} "
      ]
    },
    orangeBluePulse: {
      interval: 100,
      frames: [
        "\u{1F538} ",
        "\u{1F536} ",
        "\u{1F7E0} ",
        "\u{1F7E0} ",
        "\u{1F536} ",
        "\u{1F539} ",
        "\u{1F537} ",
        "\u{1F535} ",
        "\u{1F535} ",
        "\u{1F537} "
      ]
    },
    timeTravel: {
      interval: 100,
      frames: [
        "\u{1F55B} ",
        "\u{1F55A} ",
        "\u{1F559} ",
        "\u{1F558} ",
        "\u{1F557} ",
        "\u{1F556} ",
        "\u{1F555} ",
        "\u{1F554} ",
        "\u{1F553} ",
        "\u{1F552} ",
        "\u{1F551} ",
        "\u{1F550} "
      ]
    },
    aesthetic: {
      interval: 80,
      frames: [
        "\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1",
        "\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1",
        "\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1",
        "\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1",
        "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1",
        "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1",
        "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0",
        "\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1"
      ]
    },
    dwarfFortress: {
      interval: 80,
      frames: [
        " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A \u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A \u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A \u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2593\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2593\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2592\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2592\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2591\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2591\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A \u2588\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2588\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2588\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2593\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2593\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2592\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2592\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2591\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2591\u2588\xA3\xA3\xA3  ",
        "    \u263A \u2588\xA3\xA3\xA3  ",
        "     \u263A\u2588\xA3\xA3\xA3  ",
        "     \u263A\u2588\xA3\xA3\xA3  ",
        "     \u263A\u2593\xA3\xA3\xA3  ",
        "     \u263A\u2593\xA3\xA3\xA3  ",
        "     \u263A\u2592\xA3\xA3\xA3  ",
        "     \u263A\u2592\xA3\xA3\xA3  ",
        "     \u263A\u2591\xA3\xA3\xA3  ",
        "     \u263A\u2591\xA3\xA3\xA3  ",
        "     \u263A \xA3\xA3\xA3  ",
        "      \u263A\xA3\xA3\xA3  ",
        "      \u263A\xA3\xA3\xA3  ",
        "      \u263A\u2593\xA3\xA3  ",
        "      \u263A\u2593\xA3\xA3  ",
        "      \u263A\u2592\xA3\xA3  ",
        "      \u263A\u2592\xA3\xA3  ",
        "      \u263A\u2591\xA3\xA3  ",
        "      \u263A\u2591\xA3\xA3  ",
        "      \u263A \xA3\xA3  ",
        "       \u263A\xA3\xA3  ",
        "       \u263A\xA3\xA3  ",
        "       \u263A\u2593\xA3  ",
        "       \u263A\u2593\xA3  ",
        "       \u263A\u2592\xA3  ",
        "       \u263A\u2592\xA3  ",
        "       \u263A\u2591\xA3  ",
        "       \u263A\u2591\xA3  ",
        "       \u263A \xA3  ",
        "        \u263A\xA3  ",
        "        \u263A\xA3  ",
        "        \u263A\u2593  ",
        "        \u263A\u2593  ",
        "        \u263A\u2592  ",
        "        \u263A\u2592  ",
        "        \u263A\u2591  ",
        "        \u263A\u2591  ",
        "        \u263A   ",
        "        \u263A  &",
        "        \u263A \u263C&",
        "       \u263A \u263C &",
        "       \u263A\u263C  &",
        "      \u263A\u263C  & ",
        "      \u203C   & ",
        "     \u263A   &  ",
        "    \u203C    &  ",
        "   \u263A    &   ",
        "  \u203C     &   ",
        " \u263A     &    ",
        "\u203C      &    ",
        "      &     ",
        "      &     ",
        "     &   \u2591  ",
        "     &   \u2592  ",
        "    &    \u2593  ",
        "    &    \xA3  ",
        "   &    \u2591\xA3  ",
        "   &    \u2592\xA3  ",
        "  &     \u2593\xA3  ",
        "  &     \xA3\xA3  ",
        " &     \u2591\xA3\xA3  ",
        " &     \u2592\xA3\xA3  ",
        "&      \u2593\xA3\xA3  ",
        "&      \xA3\xA3\xA3  ",
        "      \u2591\xA3\xA3\xA3  ",
        "      \u2592\xA3\xA3\xA3  ",
        "      \u2593\xA3\xA3\xA3  ",
        "      \u2588\xA3\xA3\xA3  ",
        "     \u2591\u2588\xA3\xA3\xA3  ",
        "     \u2592\u2588\xA3\xA3\xA3  ",
        "     \u2593\u2588\xA3\xA3\xA3  ",
        "     \u2588\u2588\xA3\xA3\xA3  ",
        "    \u2591\u2588\u2588\xA3\xA3\xA3  ",
        "    \u2592\u2588\u2588\xA3\xA3\xA3  ",
        "    \u2593\u2588\u2588\xA3\xA3\xA3  ",
        "    \u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  "
      ]
    }
  };

  // node_modules/cli-spinners/index.js
  var cli_spinners_default = spinners_default;
  var spinnersList = Object.keys(spinners_default);

  // node_modules/log-symbols/symbols.js
  var symbols_exports = {};
  __export(symbols_exports, {
    error: () => error,
    info: () => info,
    success: () => success,
    warning: () => warning
  });

  // node_modules/yoctocolors/base.js
  var import_node_tty2 = __toESM(__require("tty"), 1);
  var hasColors = import_node_tty2.default?.WriteStream?.prototype?.hasColors?.() ?? false;
  var format = (open, close) => {
    if (!hasColors) {
      return (input) => input;
    }
    const openCode = `\x1B[${open}m`;
    const closeCode = `\x1B[${close}m`;
    return (input) => {
      const string = input + "";
      let index = string.indexOf(closeCode);
      if (index === -1) {
        return openCode + string + closeCode;
      }
      let result = openCode;
      let lastIndex = 0;
      const reopenOnNestedClose = close === 22;
      const replaceCode = (reopenOnNestedClose ? closeCode : "") + openCode;
      while (index !== -1) {
        result += string.slice(lastIndex, index) + replaceCode;
        lastIndex = index + closeCode.length;
        index = string.indexOf(closeCode, lastIndex);
      }
      result += string.slice(lastIndex) + closeCode;
      return result;
    };
  };
  var reset = format(0, 0);
  var bold = format(1, 22);
  var dim = format(2, 22);
  var italic = format(3, 23);
  var underline = format(4, 24);
  var overline = format(53, 55);
  var inverse = format(7, 27);
  var hidden = format(8, 28);
  var strikethrough = format(9, 29);
  var black = format(30, 39);
  var red = format(31, 39);
  var green = format(32, 39);
  var yellow = format(33, 39);
  var blue = format(34, 39);
  var magenta = format(35, 39);
  var cyan = format(36, 39);
  var white = format(37, 39);
  var gray = format(90, 39);
  var bgBlack = format(40, 49);
  var bgRed = format(41, 49);
  var bgGreen = format(42, 49);
  var bgYellow = format(43, 49);
  var bgBlue = format(44, 49);
  var bgMagenta = format(45, 49);
  var bgCyan = format(46, 49);
  var bgWhite = format(47, 49);
  var bgGray = format(100, 49);
  var redBright = format(91, 39);
  var greenBright = format(92, 39);
  var yellowBright = format(93, 39);
  var blueBright = format(94, 39);
  var magentaBright = format(95, 39);
  var cyanBright = format(96, 39);
  var whiteBright = format(97, 39);
  var bgRedBright = format(101, 49);
  var bgGreenBright = format(102, 49);
  var bgYellowBright = format(103, 49);
  var bgBlueBright = format(104, 49);
  var bgMagentaBright = format(105, 49);
  var bgCyanBright = format(106, 49);
  var bgWhiteBright = format(107, 49);

  // node_modules/is-unicode-supported/index.js
  var import_node_process4 = __toESM(__require("process"), 1);
  function isUnicodeSupported() {
    const { env: env2 } = import_node_process4.default;
    const { TERM, TERM_PROGRAM } = env2;
    if (import_node_process4.default.platform !== "win32") {
      return TERM !== "linux";
    }
    return Boolean(env2.WT_SESSION) || Boolean(env2.TERMINUS_SUBLIME) || env2.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env2.TERMINAL_EMULATOR === "JetBrains-JediTerm";
  }

  // node_modules/log-symbols/symbols.js
  var _isUnicodeSupported = isUnicodeSupported();
  var info = blue(_isUnicodeSupported ? "\u2139" : "i");
  var success = green(_isUnicodeSupported ? "\u2714" : "\u221A");
  var warning = yellow(_isUnicodeSupported ? "\u26A0" : "\u203C");
  var error = red(_isUnicodeSupported ? "\u2716" : "\xD7");

  // node_modules/ansi-regex/index.js
  function ansiRegex({ onlyFirst = false } = {}) {
    const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
    const osc = `(?:\\u001B\\][\\s\\S]*?${ST})`;
    const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
    const pattern = `${osc}|${csi}`;
    return new RegExp(pattern, onlyFirst ? void 0 : "g");
  }

  // node_modules/strip-ansi/index.js
  var regex = ansiRegex();
  function stripAnsi(string) {
    if (typeof string !== "string") {
      throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
    }
    return string.replace(regex, "");
  }

  // node_modules/get-east-asian-width/lookup.js
  function isAmbiguous(x) {
    return x === 161 || x === 164 || x === 167 || x === 168 || x === 170 || x === 173 || x === 174 || x >= 176 && x <= 180 || x >= 182 && x <= 186 || x >= 188 && x <= 191 || x === 198 || x === 208 || x === 215 || x === 216 || x >= 222 && x <= 225 || x === 230 || x >= 232 && x <= 234 || x === 236 || x === 237 || x === 240 || x === 242 || x === 243 || x >= 247 && x <= 250 || x === 252 || x === 254 || x === 257 || x === 273 || x === 275 || x === 283 || x === 294 || x === 295 || x === 299 || x >= 305 && x <= 307 || x === 312 || x >= 319 && x <= 322 || x === 324 || x >= 328 && x <= 331 || x === 333 || x === 338 || x === 339 || x === 358 || x === 359 || x === 363 || x === 462 || x === 464 || x === 466 || x === 468 || x === 470 || x === 472 || x === 474 || x === 476 || x === 593 || x === 609 || x === 708 || x === 711 || x >= 713 && x <= 715 || x === 717 || x === 720 || x >= 728 && x <= 731 || x === 733 || x === 735 || x >= 768 && x <= 879 || x >= 913 && x <= 929 || x >= 931 && x <= 937 || x >= 945 && x <= 961 || x >= 963 && x <= 969 || x === 1025 || x >= 1040 && x <= 1103 || x === 1105 || x === 8208 || x >= 8211 && x <= 8214 || x === 8216 || x === 8217 || x === 8220 || x === 8221 || x >= 8224 && x <= 8226 || x >= 8228 && x <= 8231 || x === 8240 || x === 8242 || x === 8243 || x === 8245 || x === 8251 || x === 8254 || x === 8308 || x === 8319 || x >= 8321 && x <= 8324 || x === 8364 || x === 8451 || x === 8453 || x === 8457 || x === 8467 || x === 8470 || x === 8481 || x === 8482 || x === 8486 || x === 8491 || x === 8531 || x === 8532 || x >= 8539 && x <= 8542 || x >= 8544 && x <= 8555 || x >= 8560 && x <= 8569 || x === 8585 || x >= 8592 && x <= 8601 || x === 8632 || x === 8633 || x === 8658 || x === 8660 || x === 8679 || x === 8704 || x === 8706 || x === 8707 || x === 8711 || x === 8712 || x === 8715 || x === 8719 || x === 8721 || x === 8725 || x === 8730 || x >= 8733 && x <= 8736 || x === 8739 || x === 8741 || x >= 8743 && x <= 8748 || x === 8750 || x >= 8756 && x <= 8759 || x === 8764 || x === 8765 || x === 8776 || x === 8780 || x === 8786 || x === 8800 || x === 8801 || x >= 8804 && x <= 8807 || x === 8810 || x === 8811 || x === 8814 || x === 8815 || x === 8834 || x === 8835 || x === 8838 || x === 8839 || x === 8853 || x === 8857 || x === 8869 || x === 8895 || x === 8978 || x >= 9312 && x <= 9449 || x >= 9451 && x <= 9547 || x >= 9552 && x <= 9587 || x >= 9600 && x <= 9615 || x >= 9618 && x <= 9621 || x === 9632 || x === 9633 || x >= 9635 && x <= 9641 || x === 9650 || x === 9651 || x === 9654 || x === 9655 || x === 9660 || x === 9661 || x === 9664 || x === 9665 || x >= 9670 && x <= 9672 || x === 9675 || x >= 9678 && x <= 9681 || x >= 9698 && x <= 9701 || x === 9711 || x === 9733 || x === 9734 || x === 9737 || x === 9742 || x === 9743 || x === 9756 || x === 9758 || x === 9792 || x === 9794 || x === 9824 || x === 9825 || x >= 9827 && x <= 9829 || x >= 9831 && x <= 9834 || x === 9836 || x === 9837 || x === 9839 || x === 9886 || x === 9887 || x === 9919 || x >= 9926 && x <= 9933 || x >= 9935 && x <= 9939 || x >= 9941 && x <= 9953 || x === 9955 || x === 9960 || x === 9961 || x >= 9963 && x <= 9969 || x === 9972 || x >= 9974 && x <= 9977 || x === 9979 || x === 9980 || x === 9982 || x === 9983 || x === 10045 || x >= 10102 && x <= 10111 || x >= 11094 && x <= 11097 || x >= 12872 && x <= 12879 || x >= 57344 && x <= 63743 || x >= 65024 && x <= 65039 || x === 65533 || x >= 127232 && x <= 127242 || x >= 127248 && x <= 127277 || x >= 127280 && x <= 127337 || x >= 127344 && x <= 127373 || x === 127375 || x === 127376 || x >= 127387 && x <= 127404 || x >= 917760 && x <= 917999 || x >= 983040 && x <= 1048573 || x >= 1048576 && x <= 1114109;
  }
  function isFullWidth(x) {
    return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
  }
  function isWide(x) {
    return x >= 4352 && x <= 4447 || x === 8986 || x === 8987 || x === 9001 || x === 9002 || x >= 9193 && x <= 9196 || x === 9200 || x === 9203 || x === 9725 || x === 9726 || x === 9748 || x === 9749 || x >= 9776 && x <= 9783 || x >= 9800 && x <= 9811 || x === 9855 || x >= 9866 && x <= 9871 || x === 9875 || x === 9889 || x === 9898 || x === 9899 || x === 9917 || x === 9918 || x === 9924 || x === 9925 || x === 9934 || x === 9940 || x === 9962 || x === 9970 || x === 9971 || x === 9973 || x === 9978 || x === 9981 || x === 9989 || x === 9994 || x === 9995 || x === 10024 || x === 10060 || x === 10062 || x >= 10067 && x <= 10069 || x === 10071 || x >= 10133 && x <= 10135 || x === 10160 || x === 10175 || x === 11035 || x === 11036 || x === 11088 || x === 11093 || x >= 11904 && x <= 11929 || x >= 11931 && x <= 12019 || x >= 12032 && x <= 12245 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12353 && x <= 12438 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12773 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 42124 || x >= 42128 && x <= 42182 || x >= 43360 && x <= 43388 || x >= 44032 && x <= 55203 || x >= 63744 && x <= 64255 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 94176 && x <= 94180 || x >= 94192 && x <= 94198 || x >= 94208 && x <= 101589 || x >= 101631 && x <= 101662 || x >= 101760 && x <= 101874 || x >= 110576 && x <= 110579 || x >= 110581 && x <= 110587 || x === 110589 || x === 110590 || x >= 110592 && x <= 110882 || x === 110898 || x >= 110928 && x <= 110930 || x === 110933 || x >= 110948 && x <= 110951 || x >= 110960 && x <= 111355 || x >= 119552 && x <= 119638 || x >= 119648 && x <= 119670 || x === 126980 || x === 127183 || x === 127374 || x >= 127377 && x <= 127386 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x === 127568 || x === 127569 || x >= 127584 && x <= 127589 || x >= 127744 && x <= 127776 || x >= 127789 && x <= 127797 || x >= 127799 && x <= 127868 || x >= 127870 && x <= 127891 || x >= 127904 && x <= 127946 || x >= 127951 && x <= 127955 || x >= 127968 && x <= 127984 || x === 127988 || x >= 127992 && x <= 128062 || x === 128064 || x >= 128066 && x <= 128252 || x >= 128255 && x <= 128317 || x >= 128331 && x <= 128334 || x >= 128336 && x <= 128359 || x === 128378 || x === 128405 || x === 128406 || x === 128420 || x >= 128507 && x <= 128591 || x >= 128640 && x <= 128709 || x === 128716 || x >= 128720 && x <= 128722 || x >= 128725 && x <= 128728 || x >= 128732 && x <= 128735 || x === 128747 || x === 128748 || x >= 128756 && x <= 128764 || x >= 128992 && x <= 129003 || x === 129008 || x >= 129292 && x <= 129338 || x >= 129340 && x <= 129349 || x >= 129351 && x <= 129535 || x >= 129648 && x <= 129660 || x >= 129664 && x <= 129674 || x >= 129678 && x <= 129734 || x === 129736 || x >= 129741 && x <= 129756 || x >= 129759 && x <= 129770 || x >= 129775 && x <= 129784 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
  }

  // node_modules/get-east-asian-width/index.js
  function validate(codePoint) {
    if (!Number.isSafeInteger(codePoint)) {
      throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
    }
  }
  function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
    validate(codePoint);
    if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
      return 2;
    }
    return 1;
  }

  // node_modules/ora/node_modules/string-width/index.js
  var segmenter = new Intl.Segmenter();
  var zeroWidthClusterRegex = new RegExp("^(?:\\p{Default_Ignorable_Code_Point}|\\p{Control}|\\p{Mark}|\\p{Surrogate})+$", "v");
  var leadingNonPrintingRegex = new RegExp("^[\\p{Default_Ignorable_Code_Point}\\p{Control}\\p{Format}\\p{Mark}\\p{Surrogate}]+", "v");
  var rgiEmojiRegex = new RegExp("^\\p{RGI_Emoji}$", "v");
  function baseVisible(segment) {
    return segment.replace(leadingNonPrintingRegex, "");
  }
  function isZeroWidthCluster(segment) {
    return zeroWidthClusterRegex.test(segment);
  }
  function trailingHalfwidthWidth(segment, eastAsianWidthOptions) {
    let extra = 0;
    if (segment.length > 1) {
      for (const char of segment.slice(1)) {
        if (char >= "\uFF00" && char <= "\uFFEF") {
          extra += eastAsianWidth(char.codePointAt(0), eastAsianWidthOptions);
        }
      }
    }
    return extra;
  }
  function stringWidth(input, options = {}) {
    if (typeof input !== "string" || input.length === 0) {
      return 0;
    }
    const {
      ambiguousIsNarrow = true,
      countAnsiEscapeCodes = false
    } = options;
    let string = input;
    if (!countAnsiEscapeCodes) {
      string = stripAnsi(string);
    }
    if (string.length === 0) {
      return 0;
    }
    let width = 0;
    const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
    for (const { segment } of segmenter.segment(string)) {
      if (isZeroWidthCluster(segment)) {
        continue;
      }
      if (rgiEmojiRegex.test(segment)) {
        width += 2;
        continue;
      }
      const codePoint = baseVisible(segment).codePointAt(0);
      width += eastAsianWidth(codePoint, eastAsianWidthOptions);
      width += trailingHalfwidthWidth(segment, eastAsianWidthOptions);
    }
    return width;
  }

  // node_modules/is-interactive/index.js
  function isInteractive({ stream = process.stdout } = {}) {
    return Boolean(
      stream && stream.isTTY && process.env.TERM !== "dumb" && !("CI" in process.env)
    );
  }

  // node_modules/stdin-discarder/index.js
  var import_node_process5 = __toESM(__require("process"), 1);
  var ASCII_ETX_CODE = 3;
  var _activeCount, _StdinDiscarder_instances, realStart_fn, realStop_fn, handleInput_fn;
  var StdinDiscarder = class {
    constructor() {
      __privateAdd(this, _StdinDiscarder_instances);
      __privateAdd(this, _activeCount, 0);
    }
    start() {
      __privateWrapper(this, _activeCount)._++;
      if (__privateGet(this, _activeCount) === 1) {
        __privateMethod(this, _StdinDiscarder_instances, realStart_fn).call(this);
      }
    }
    stop() {
      if (__privateGet(this, _activeCount) <= 0) {
        throw new Error("`stop` called more times than `start`");
      }
      __privateWrapper(this, _activeCount)._--;
      if (__privateGet(this, _activeCount) === 0) {
        __privateMethod(this, _StdinDiscarder_instances, realStop_fn).call(this);
      }
    }
  };
  _activeCount = new WeakMap();
  _StdinDiscarder_instances = new WeakSet();
  realStart_fn = function() {
    if (import_node_process5.default.platform === "win32" || !import_node_process5.default.stdin.isTTY) {
      return;
    }
    import_node_process5.default.stdin.setRawMode(true);
    import_node_process5.default.stdin.on("data", __privateMethod(this, _StdinDiscarder_instances, handleInput_fn));
    import_node_process5.default.stdin.resume();
  };
  realStop_fn = function() {
    if (!import_node_process5.default.stdin.isTTY) {
      return;
    }
    import_node_process5.default.stdin.off("data", __privateMethod(this, _StdinDiscarder_instances, handleInput_fn));
    import_node_process5.default.stdin.pause();
    import_node_process5.default.stdin.setRawMode(false);
  };
  handleInput_fn = function(chunk) {
    if (chunk[0] === ASCII_ETX_CODE) {
      import_node_process5.default.emit("SIGINT");
    }
  };
  var stdinDiscarder = new StdinDiscarder();
  var stdin_discarder_default = stdinDiscarder;

  // node_modules/ora/index.js
  var _linesToClear, _isDiscardingStdin, _lineCount, _frameIndex, _lastSpinnerFrameTime, _lastIndent, _options, _spinner, _stream, _id, _initialInterval, _isEnabled, _isSilent, _indent, _text, _prefixText, _suffixText, _Ora_instances, formatAffix_fn, getFullPrefixText_fn, getFullSuffixText_fn, computeLineCountFrom_fn, updateLineCount_fn;
  var Ora = class {
    constructor(options) {
      __privateAdd(this, _Ora_instances);
      __privateAdd(this, _linesToClear, 0);
      __privateAdd(this, _isDiscardingStdin, false);
      __privateAdd(this, _lineCount, 0);
      __privateAdd(this, _frameIndex, -1);
      __privateAdd(this, _lastSpinnerFrameTime, 0);
      __privateAdd(this, _lastIndent, 0);
      __privateAdd(this, _options);
      __privateAdd(this, _spinner);
      __privateAdd(this, _stream);
      __privateAdd(this, _id);
      __privateAdd(this, _initialInterval);
      __privateAdd(this, _isEnabled);
      __privateAdd(this, _isSilent);
      __privateAdd(this, _indent);
      __privateAdd(this, _text);
      __privateAdd(this, _prefixText);
      __privateAdd(this, _suffixText);
      __publicField(this, "color");
      if (typeof options === "string") {
        options = {
          text: options
        };
      }
      __privateSet(this, _options, {
        color: "cyan",
        stream: import_node_process6.default.stderr,
        discardStdin: true,
        hideCursor: true,
        ...options
      });
      this.color = __privateGet(this, _options).color;
      this.spinner = __privateGet(this, _options).spinner;
      __privateSet(this, _initialInterval, __privateGet(this, _options).interval);
      __privateSet(this, _stream, __privateGet(this, _options).stream);
      __privateSet(this, _isEnabled, typeof __privateGet(this, _options).isEnabled === "boolean" ? __privateGet(this, _options).isEnabled : isInteractive({ stream: __privateGet(this, _stream) }));
      __privateSet(this, _isSilent, typeof __privateGet(this, _options).isSilent === "boolean" ? __privateGet(this, _options).isSilent : false);
      this.text = __privateGet(this, _options).text;
      this.prefixText = __privateGet(this, _options).prefixText;
      this.suffixText = __privateGet(this, _options).suffixText;
      this.indent = __privateGet(this, _options).indent;
      if (import_node_process6.default.env.NODE_ENV === "test") {
        this._stream = __privateGet(this, _stream);
        this._isEnabled = __privateGet(this, _isEnabled);
        Object.defineProperty(this, "_linesToClear", {
          get() {
            return __privateGet(this, _linesToClear);
          },
          set(newValue) {
            __privateSet(this, _linesToClear, newValue);
          }
        });
        Object.defineProperty(this, "_frameIndex", {
          get() {
            return __privateGet(this, _frameIndex);
          }
        });
        Object.defineProperty(this, "_lineCount", {
          get() {
            return __privateGet(this, _lineCount);
          }
        });
      }
    }
    get indent() {
      return __privateGet(this, _indent);
    }
    set indent(indent = 0) {
      if (!(indent >= 0 && Number.isInteger(indent))) {
        throw new Error("The `indent` option must be an integer from 0 and up");
      }
      __privateSet(this, _indent, indent);
      __privateMethod(this, _Ora_instances, updateLineCount_fn).call(this);
    }
    get interval() {
      return __privateGet(this, _initialInterval) ?? __privateGet(this, _spinner).interval ?? 100;
    }
    get spinner() {
      return __privateGet(this, _spinner);
    }
    set spinner(spinner) {
      __privateSet(this, _frameIndex, -1);
      __privateSet(this, _initialInterval, void 0);
      if (typeof spinner === "object") {
        if (!Array.isArray(spinner.frames) || spinner.frames.length === 0 || spinner.frames.some((frame) => typeof frame !== "string")) {
          throw new Error("The given spinner must have a non-empty `frames` array of strings");
        }
        if (spinner.interval !== void 0 && !(Number.isInteger(spinner.interval) && spinner.interval > 0)) {
          throw new Error("`spinner.interval` must be a positive integer if provided");
        }
        __privateSet(this, _spinner, spinner);
      } else if (!isUnicodeSupported()) {
        __privateSet(this, _spinner, cli_spinners_default.line);
      } else if (spinner === void 0) {
        __privateSet(this, _spinner, cli_spinners_default.dots);
      } else if (spinner !== "default" && cli_spinners_default[spinner]) {
        __privateSet(this, _spinner, cli_spinners_default[spinner]);
      } else {
        throw new Error(`There is no built-in spinner named '${spinner}'. See https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json for a full list.`);
      }
    }
    get text() {
      return __privateGet(this, _text);
    }
    set text(value = "") {
      __privateSet(this, _text, value);
      __privateMethod(this, _Ora_instances, updateLineCount_fn).call(this);
    }
    get prefixText() {
      return __privateGet(this, _prefixText);
    }
    set prefixText(value = "") {
      __privateSet(this, _prefixText, value);
      __privateMethod(this, _Ora_instances, updateLineCount_fn).call(this);
    }
    get suffixText() {
      return __privateGet(this, _suffixText);
    }
    set suffixText(value = "") {
      __privateSet(this, _suffixText, value);
      __privateMethod(this, _Ora_instances, updateLineCount_fn).call(this);
    }
    get isSpinning() {
      return __privateGet(this, _id) !== void 0;
    }
    get isEnabled() {
      return __privateGet(this, _isEnabled) && !__privateGet(this, _isSilent);
    }
    set isEnabled(value) {
      if (typeof value !== "boolean") {
        throw new TypeError("The `isEnabled` option must be a boolean");
      }
      __privateSet(this, _isEnabled, value);
    }
    get isSilent() {
      return __privateGet(this, _isSilent);
    }
    set isSilent(value) {
      if (typeof value !== "boolean") {
        throw new TypeError("The `isSilent` option must be a boolean");
      }
      __privateSet(this, _isSilent, value);
    }
    frame() {
      const now = Date.now();
      if (__privateGet(this, _frameIndex) === -1 || now - __privateGet(this, _lastSpinnerFrameTime) >= this.interval) {
        __privateSet(this, _frameIndex, ++__privateWrapper(this, _frameIndex)._ % __privateGet(this, _spinner).frames.length);
        __privateSet(this, _lastSpinnerFrameTime, now);
      }
      const { frames } = __privateGet(this, _spinner);
      let frame = frames[__privateGet(this, _frameIndex)];
      if (this.color) {
        frame = source_default[this.color](frame);
      }
      const fullPrefixText = __privateMethod(this, _Ora_instances, getFullPrefixText_fn).call(this, __privateGet(this, _prefixText), " ");
      const fullText = typeof this.text === "string" ? " " + this.text : "";
      const fullSuffixText = __privateMethod(this, _Ora_instances, getFullSuffixText_fn).call(this, __privateGet(this, _suffixText), " ");
      return fullPrefixText + frame + fullText + fullSuffixText;
    }
    clear() {
      if (!__privateGet(this, _isEnabled) || !__privateGet(this, _stream).isTTY) {
        return this;
      }
      __privateGet(this, _stream).cursorTo(0);
      for (let index = 0; index < __privateGet(this, _linesToClear); index++) {
        if (index > 0) {
          __privateGet(this, _stream).moveCursor(0, -1);
        }
        __privateGet(this, _stream).clearLine(1);
      }
      if (__privateGet(this, _indent) || __privateGet(this, _lastIndent) !== __privateGet(this, _indent)) {
        __privateGet(this, _stream).cursorTo(__privateGet(this, _indent));
      }
      __privateSet(this, _lastIndent, __privateGet(this, _indent));
      __privateSet(this, _linesToClear, 0);
      return this;
    }
    render() {
      if (!__privateGet(this, _isEnabled) || __privateGet(this, _isSilent)) {
        return this;
      }
      this.clear();
      let frameContent = this.frame();
      const columns = __privateGet(this, _stream).columns ?? 80;
      const actualLineCount = __privateMethod(this, _Ora_instances, computeLineCountFrom_fn).call(this, frameContent, columns);
      const consoleHeight = __privateGet(this, _stream).rows;
      if (consoleHeight && consoleHeight > 1 && actualLineCount > consoleHeight) {
        const lines = frameContent.split("\n");
        const maxLines = consoleHeight - 1;
        frameContent = [...lines.slice(0, maxLines), "... (content truncated to fit terminal)"].join("\n");
      }
      __privateGet(this, _stream).write(frameContent);
      __privateSet(this, _linesToClear, __privateMethod(this, _Ora_instances, computeLineCountFrom_fn).call(this, frameContent, columns));
      return this;
    }
    start(text) {
      if (text) {
        this.text = text;
      }
      if (__privateGet(this, _isSilent)) {
        return this;
      }
      if (!__privateGet(this, _isEnabled)) {
        const line = " ".repeat(__privateGet(this, _indent)) + __privateMethod(this, _Ora_instances, getFullPrefixText_fn).call(this, __privateGet(this, _prefixText), " ") + (this.text ? `- ${this.text}` : "") + __privateMethod(this, _Ora_instances, getFullSuffixText_fn).call(this, __privateGet(this, _suffixText), " ");
        if (line.trim() !== "") {
          __privateGet(this, _stream).write(line + "\n");
        }
        return this;
      }
      if (this.isSpinning) {
        return this;
      }
      if (__privateGet(this, _options).hideCursor) {
        cli_cursor_default.hide(__privateGet(this, _stream));
      }
      if (__privateGet(this, _options).discardStdin && import_node_process6.default.stdin.isTTY) {
        __privateSet(this, _isDiscardingStdin, true);
        stdin_discarder_default.start();
      }
      this.render();
      __privateSet(this, _id, setInterval(this.render.bind(this), this.interval));
      return this;
    }
    stop() {
      clearInterval(__privateGet(this, _id));
      __privateSet(this, _id, void 0);
      __privateSet(this, _frameIndex, 0);
      if (__privateGet(this, _isEnabled)) {
        this.clear();
        if (__privateGet(this, _options).hideCursor) {
          cli_cursor_default.show(__privateGet(this, _stream));
        }
      }
      if (__privateGet(this, _options).discardStdin && import_node_process6.default.stdin.isTTY && __privateGet(this, _isDiscardingStdin)) {
        stdin_discarder_default.stop();
        __privateSet(this, _isDiscardingStdin, false);
      }
      return this;
    }
    succeed(text) {
      return this.stopAndPersist({ symbol: symbols_exports.success, text });
    }
    fail(text) {
      return this.stopAndPersist({ symbol: symbols_exports.error, text });
    }
    warn(text) {
      return this.stopAndPersist({ symbol: symbols_exports.warning, text });
    }
    info(text) {
      return this.stopAndPersist({ symbol: symbols_exports.info, text });
    }
    stopAndPersist(options = {}) {
      if (__privateGet(this, _isSilent)) {
        return this;
      }
      const prefixText = options.prefixText ?? __privateGet(this, _prefixText);
      const fullPrefixText = __privateMethod(this, _Ora_instances, getFullPrefixText_fn).call(this, prefixText, " ");
      const symbolText = options.symbol ?? " ";
      const text = options.text ?? this.text;
      const separatorText = symbolText ? " " : "";
      const fullText = typeof text === "string" ? separatorText + text : "";
      const suffixText = options.suffixText ?? __privateGet(this, _suffixText);
      const fullSuffixText = __privateMethod(this, _Ora_instances, getFullSuffixText_fn).call(this, suffixText, " ");
      const textToWrite = fullPrefixText + symbolText + fullText + fullSuffixText + "\n";
      this.stop();
      __privateGet(this, _stream).write(textToWrite);
      return this;
    }
  };
  _linesToClear = new WeakMap();
  _isDiscardingStdin = new WeakMap();
  _lineCount = new WeakMap();
  _frameIndex = new WeakMap();
  _lastSpinnerFrameTime = new WeakMap();
  _lastIndent = new WeakMap();
  _options = new WeakMap();
  _spinner = new WeakMap();
  _stream = new WeakMap();
  _id = new WeakMap();
  _initialInterval = new WeakMap();
  _isEnabled = new WeakMap();
  _isSilent = new WeakMap();
  _indent = new WeakMap();
  _text = new WeakMap();
  _prefixText = new WeakMap();
  _suffixText = new WeakMap();
  _Ora_instances = new WeakSet();
  formatAffix_fn = function(value, separator, placeBefore = false) {
    const resolved = typeof value === "function" ? value() : value;
    if (typeof resolved === "string" && resolved !== "") {
      return placeBefore ? separator + resolved : resolved + separator;
    }
    return "";
  };
  getFullPrefixText_fn = function(prefixText = __privateGet(this, _prefixText), postfix = " ") {
    return __privateMethod(this, _Ora_instances, formatAffix_fn).call(this, prefixText, postfix, false);
  };
  getFullSuffixText_fn = function(suffixText = __privateGet(this, _suffixText), prefix = " ") {
    return __privateMethod(this, _Ora_instances, formatAffix_fn).call(this, suffixText, prefix, true);
  };
  computeLineCountFrom_fn = function(text, columns) {
    let count = 0;
    for (const line of stripAnsi(text).split("\n")) {
      count += Math.max(1, Math.ceil(stringWidth(line) / columns));
    }
    return count;
  };
  updateLineCount_fn = function() {
    const columns = __privateGet(this, _stream).columns ?? 80;
    const prefixText = typeof __privateGet(this, _prefixText) === "function" ? "" : __privateGet(this, _prefixText);
    const suffixText = typeof __privateGet(this, _suffixText) === "function" ? "" : __privateGet(this, _suffixText);
    const fullPrefixText = typeof prefixText === "string" && prefixText !== "" ? prefixText + " " : "";
    const fullSuffixText = typeof suffixText === "string" && suffixText !== "" ? " " + suffixText : "";
    const spinnerChar = "-";
    const fullText = " ".repeat(__privateGet(this, _indent)) + fullPrefixText + spinnerChar + (typeof __privateGet(this, _text) === "string" ? " " + __privateGet(this, _text) : "") + fullSuffixText;
    __privateSet(this, _lineCount, __privateMethod(this, _Ora_instances, computeLineCountFrom_fn).call(this, fullText, columns));
  };
  function ora(options) {
    return new Ora(options);
  }

  // src/commands/add.ts
  var import_prompts = __toESM(require_prompts3());
  var add = new Command().name("add").description("Add a component to your project").argument("[components...]", "The components to add").option("-y, --yes", "Skip confirmation prompt", false).option("-o, --overwrite", "Overwrite existing files", false).action(async (components, options) => {
    const spinner = ora("Checking components...").start();
    try {
      if (!components || components.length === 0) {
        spinner.stop();
        const response = await (0, import_prompts.default)({
          type: "text",
          name: "component",
          message: "Enter the component name:"
        });
        if (!response.component) {
          console.log(source_default.yellow("No component specified. Exiting."));
          process.exit(0);
        }
        components = [response.component];
        spinner.start();
      }
      const cwd = process.cwd();
      const targeDir = import_path2.default.resolve(cwd, "src/components/ui");
      if (!import_fs_extra2.default.existsSync(targeDir)) {
        await import_fs_extra2.default.ensureDir(targeDir);
      }
      const componentsSourceDir = import_path2.default.join(__dirname, "..", "src", "components");
      for (const component of components) {
        spinner.text = `Installing ${component}...`;
        const files = await import_fs_extra2.default.readdir(componentsSourceDir);
        const componentFile = files.find((f) => f.toLowerCase() === component.toLowerCase() + ".tsx");
        if (!componentFile) {
          spinner.warn(source_default.yellow(`Component "${component}" not found.`));
          continue;
        }
        const sourcePath = import_path2.default.join(componentsSourceDir, componentFile);
        const targetPath = import_path2.default.join(targeDir, componentFile);
        if (import_fs_extra2.default.existsSync(targetPath) && !options.overwrite) {
          spinner.stop();
          const response = await (0, import_prompts.default)({
            type: "confirm",
            name: "overwrite",
            message: `Component "${component}" already exists. Overwrite?`,
            initial: false
          });
          spinner.start();
          if (!response.overwrite) {
            spinner.info(source_default.blue(`Skipped ${component}`));
            continue;
          }
        }
        let content = await import_fs_extra2.default.readFile(sourcePath, "utf-8");
        content = content.replace(/from "\.\.\/utils"/g, 'from "@/lib/utils"');
        await import_fs_extra2.default.writeFile(targetPath, content);
        spinner.succeed(source_default.green(`Installed ${component}`));
      }
      spinner.stop();
      console.log(source_default.green("\nSuccess! Components installed."));
    } catch (error2) {
      spinner.fail(source_default.red("Failed to add components."));
      console.error(error2);
      process.exit(1);
    }
  });

  // src/commands/init.ts
  var import_fs_extra3 = __toESM(require_lib());
  var import_path3 = __toESM(__require("path"));
  var init = new Command().name("init").description("Initialize Auralix UI in your project").action(async () => {
    const spinner = ora("Initializing Auralix UI...").start();
    try {
      const cwd = process.cwd();
      const libPath = import_path3.default.resolve(cwd, "src/lib");
      const utilsPath = import_path3.default.join(libPath, "utils.ts");
      if (!import_fs_extra3.default.existsSync(libPath)) {
        await import_fs_extra3.default.ensureDir(libPath);
      }
      if (!import_fs_extra3.default.existsSync(utilsPath)) {
        await import_fs_extra3.default.writeFile(
          utilsPath,
          `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
        );
        spinner.succeed(source_default.green("Created src/lib/utils.ts"));
      } else {
        spinner.info(source_default.blue("src/lib/utils.ts already exists. Skliping..."));
      }
      spinner.succeed(source_default.green("Initialization complete!"));
      console.log(source_default.yellow("\nMake sure you have the following dependencies installed:"));
      console.log(source_default.cyan("npm install framer-motion"));
    } catch (error2) {
      spinner.fail(source_default.red("Failed to initialize Auralix UI."));
      console.error(error2);
      process.exit(1);
    }
  });

  // src/bin.ts
  async function main() {
    const packageInfo = await getPackageInfo();
    const program2 = new Command().name("auralix-ui").description("Add Auralix UI components to your project").version(packageInfo.version || "1.0.0", "-v, --version", "display the version number");
    program2.addCommand(init);
    program2.addCommand(add);
    program2.parse();
  }
  main();
})();
//# sourceMappingURL=bin.global.js.map