{
    "editor.fontFamily": "'Cascadia Code', Consolas, 'Courier New', monospace",
    "editor.fontSize": 14,
    "editor.lineHeight": 23,
    "editor.letterSpacing": 0.1,
    "editor.tabCompletion": "on",
    "font_options": "no_italic",
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.donotVerifyTags": true,
    "explorer.confirmDragAndDrop": false,
    "diffEditor.renderSideBySide": true,
    "editor.wordWrap": "on",
    "editor.formatOnSave": true,
    "editor.autoClosingBrackets": "always",
    "[robot]": {
        "editor.defaultFormatter": "tumit.vscode-rf-formatter"
    },
    "debug.showInlineBreakpointCandidates": false,
    "debug.allowBreakpointsEverywhere": true,
    "terminal.integrated.cursorStyle": "block",
    "terminal.integrated.rightClickBehavior": "selectWord",
    "terminal.integrated.cursorBlinking": true,
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features",
    },
    "files.associations": {
        "*.js": "javascript"
    },
    "editor.detectIndentation": false,
    "grunt.autoDetect": "on",
    "code-runner.enableAppInsights": false,
    "workbench.editor.enablePreview": false,
    "breadcrumbs.enabled": false,
    "liveServer.settings.CustomBrowser": "chrome",
    "python.defaultInterpreterPath": "/usr/bin/python",
    "terminal.integrated.fontSize": 13,
    "terminal.integrated.fontFamily": "'Cascadia Code', Consolas, 'Courier New', monospace",
    "editor.colorDecorators": false,
    "editor.bracketPairColorization.enabled": true,
    "editor.minimap.enabled": false,
    "github.copilot.enable": {
        "*": true,
        "yaml": true,
        "plaintext": true,
        "markdown": true
    },
    "workbench.iconTheme": "material-icon-theme",
    "files.autoSave": "afterDelay",
    "[css]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "[javascriptreact]": {},
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.sortMembers": true
    },
    "workbench.colorTheme": "Dracula",

    "editor.tokenColorCustomizations": {
        "strings": "#e8d8bc", //#10aae8 #2CCBB0  #f1fa8c    TESTE
        "comments": "#636F78",
        // "keywords": "#ebaf71", //e3b07d   //e0954a  #fccfa2
        "numbers": "#00c932",
        "variables": "#ffbdff", //react //"#ebaf71", 9d68de roxo          // "#DA5A53", "#F07262" "#395569"
        // "types": "#54ffa3", // 54ffa3 //#00853E #f5cc00 #ed4b42 #54ffa3
        // "functions": "#19fff8", 
        "textMateRules": [ //tirar italico do tema
            {
              "scope": [
                "comment",
                "comment.block",
                "comment.block.documentation",
                "comment.line",
                "constant",
                "constant.character",
                "constant.character.escape",
                "constant.numeric",
                "constant.numeric.integer",
                "constant.numeric.float",
                "constant.numeric.hex",
                "constant.numeric.octal",
                "constant.other",
                "constant.regexp",
                "constant.rgb-value",
                "emphasis",
                "entity",
                "entity.name",
                "entity.name.class",
                "entity.name.function",
                "entity.name.method",
                "entity.name.section",
                "entity.name.selector",
                "entity.name.tag",
                "entity.name.type",
                "entity.other",
                "entity.other.attribute-name",
                "entity.other.inherited-class",
                "invalid",
                "invalid.deprecated",
                "invalid.illegal",
                "keyword",
                "keyword.control",
                "keyword.operator",
                "keyword.operator.new",
                "keyword.operator.assignment",
                "keyword.operator.arithmetic",
                "keyword.operator.logical",
                "keyword.other",
                "markup",
                "markup.bold",
                "markup.changed",
                "markup.deleted",
                "markup.heading",
                "markup.inline.raw",
                "markup.inserted",
                "markup.italic",
                "markup.list",
                "markup.list.numbered",
                "markup.list.unnumbered",
                "markup.other",
                "markup.quote",
                "markup.raw",
                "markup.underline",
                "markup.underline.link",
                "meta",
                "meta.block",
                "meta.cast",
                "meta.class",
                "meta.function",
                "meta.function-call",
                "meta.preprocessor",
                "meta.return-type",
                "meta.selector",
                "meta.tag",
                "meta.type.annotation",
                "meta.type",
                "punctuation.definition.string.begin",
                "punctuation.definition.string.end",
                "punctuation.separator",
                "punctuation.separator.continuation",
                "punctuation.terminator",
                "storage",
                "storage.modifier",
                "storage.type",
                "string",
                "string.interpolated",
                "string.other",
                "string.quoted",
                "string.quoted.double",
                "string.quoted.other",
                "string.quoted.single",
                "string.quoted.triple",
                "string.regexp",
                "string.unquoted",
                "strong",
                "support",
                "support.class",
                "support.constant",
                "support.function",
                "support.other",
                "support.type",
                "support.type.property-name",
                "support.variable",
                "variable",
                "variable.language",
                "variable.name",
                "variable.other",
                "variable.other.readwrite",
                "variable.parameter"
              ],
              "settings": {
                "fontStyle": "",
              }
            },
            {
              "scope": [
                "variable.other.object",
              ],
              "settings": {
                "foreground": "#dfc4ff" // #78d8ff  #ffbdff
              }
            },
            {
              "scope": [
                // "variable.other",
              ],
              "settings": {
                // "foreground": "#ed87f5"
              }
            },
            {
              "scope": [
                "constant.other.general.math.tex",
                "entity.name.function.call.cpp",
                "meta.method-call entity.name.function",
                "meta.object-literal.key",
                "entity.name.function",
              ],
              "settings": {
                "foreground": "#19fff8" // FFD204  19fff8
              }
            },
            {
              "scope": [
                "variable.other.property.js",
              ],
              "settings": {
                "foreground": "#FFFFFF" // #FFD204 #19fff8  #FFFF
              }
            },
            {
              "scope": [
                "entity.name.function",
              ],
              "settings": {
                "foreground": "#54ffa3" // #FFD204   #19fff8    Teste #78d8ff
              }
            },
            {
              "scope": [
                "variable.other",
                "variable.parameter",
                "variable.type.elm",
                "variable.other.constant",
              ],
              "settings": {
                // "foreground": "#78d8ff" //#ed87f5  #52c7f7   #78d8ff
              }
            },
            {
              "scope": [
                // "variable.other.readwrite.js",
              ],
              "settings": {
                "foreground": "#ff0090"
              }
            },
            {
              "scope": [
                // "constant.language.unit.haskell",
                // "markup.heading.block-attribute.asciidoc",
                // "meta.preprocessor.haskell",
                // "punctuation.definition.fenced.markdown",
                // "punctuation.definition",
                // "punctuation",
                // "text.asciidoc markup.code markup.heading"
              ],
              "settings": {
                "foreground": "#DA5A53" // e3807b      DA5A53
              }
            },
            {
              "scope": [],
              "settings": {
                "foreground": "#909" // e3807b      DA5A53
              }
            },
            {
              "scope": [
                "constant.asciidoc",
                "constant.character.asciidoc",
                "entity.other.attribute-name.class.css",
                "kewyword.operator.union.flowtype", // [sic]
                "keyword.control.newline.tex",
                "keyword",
                "markdown.heading",
                "markup.heading | markup.heading entity.name",
                "markup.heading.markdown punctuation.definition.heading.markdown",
                "markup.heading.marker.asciidoc",
                "markup.heading.setext",
                "markup.macro.inline.passthrough.asciidoc",
                "markup.other.url.asciidoc",
                "markup.quote punctuation.definition.blockquote.markdown",
                "markup.substitution.attribute-reference.asciidoc",
                "markup.table.delimiter.asciidoc",
                "meta.separator",
                "meta.structure.tuple.erlang",
                "meta.vector.clojure",
                "punctuation.accessor.cs",
                "punctuation.accessor.ts",
                "punctuation.definition.asciidoc",
                "punctuation.definition.constant.elixir",
                "punctuation.definition.constant.ruby",
                "punctuation.definition.list.begin.markdown",
                "punctuation.definition.quote.begin.markdown",
                "punctuation.definition.raw.markdown",
                "punctuation.dot.dart",
                "punctuation.other.colon.go",
                "punctuation.other.period.go",
                "punctuation.separator.asciidoc",
                "punctuation.separator.clause-head-body.erlang",
                "punctuation.separator.colon.python",
                "punctuation.separator.dict.python",
                "punctuation.separator.dictionary.key-value.json",
                "punctuation.separator.dot-access",
                "punctuation.separator.key-value",
                "punctuation.separator.method.crystal",
                "punctuation.separator.method.elixir",
                "punctuation.separator.method.ruby",
                "punctuation.separator.module-function.erlang",
                "punctuation.separator.namespace.access.cpp",
                "punctuation.separator.namespace.ruby",
                "punctuation.separator.other.crystal",
                "punctuation.separator.period.java",
                "punctuation.separator.period.python",
                "punctuation.separator.pointer-access.c",
                "punctuation.separator.pointer-access",
                "punctuation.separator.variable.crystal",
                "punctuation.separator.variable.ruby",
                "punctuation.type.flowtype",
                "source.cpp punctuation.separator.scope-resolution",
                "source.python punctuation.section",
                "source.rust storage.modifier",
                "storage.modifier.import.java punctuation.separator.java",
                "storage",
                "support.asciidoc",
                "support.function.be.latex",
                "support.function.section.latex",
                "support.function.textbf.latex",
                "support.function.textit.latex",
                "support.function.url.latex",
                "text.asciidoc constant.other.symbol",
                "text.asciidoc markup.code",
                "variable.line-break.asciidoc",
                "variable.other.anonymous.elixir punctuation.definition.variable.elixir"
              ],
              "settings": {
                "foreground": "#ebaf71" //"#ebaf71"   ede2c7 // fffff  #e3b07d
              }
            }
          ]
        },

        "workbench.colorCustomizations": {
            "editor.selectionBackground": "#0a424f",
            // "editor.selectionHighlightBackground": "#135564",
            "editor.findMatchBackground": "#98005D",
            "editor.findMatchHighlightBackground": "#191dff",
            "editor.lineHighlightBorder": "#03011a",
            "editor.selectionHighlightBorder": "#ffffff30",
            "editorCursor.foreground": "#00c932",
            "editorLineNumber.activeForeground": "#128a1b",
            "editorIndentGuide.activeBackground": "#48054a",
            "debugToolBar.background": "#4d3268",
            "tab.border": "#a58fa74d",
            "tab.activeBackground": "#032F62", // #8b4488a6"
            "tab.inactiveBackground": "#0000",
            "tab.lastPinnedBorder": "#FFD204",
            "sideBar.background": "#03011a", //#032F62      #05264C
            "editor.background": "#03011a", //#0D1117     #110221    
            "tab.hoverBackground": "#032F92",
            "titleBar.activeBackground": "#06000a",
            "sideBar.border": "#ffffff30",
            "activityBar.background": "#06000a",
            "editorGroupHeader.tabsBackground": "#03011a",
            "statusBar.background": "#06000a",
            //terminal
            // "terminalCursor.background": "#040429", //white background color
            "terminalCursor.foreground": "#032F92", //transparent effect  //"#040429",
            "terminal.background": "#040429",
            "terminal.ansiBlack": "#231F20",
            "terminal.ansiBlue": "#009DDC",
            "terminal.ansiBrightBlack": "#737171",
            "terminal.ansiBrightBlue": "#009DDC",
            "terminal.ansiBrightCyan": "#85CEBC",
            "terminal.ansiBrightGreen": "#00853E",
            "terminal.ansiBrightMagenta": "#98005D",
            "terminal.ansiBrightRed": "#EE2E24",
            "terminal.ansiBrightWhite": "#FFFFFF",
            "terminal.ansiBrightYellow": "#FFD204",
            "terminal.ansiCyan": "#85CEBC",
            "terminal.ansiGreen": "#00853E",
            "terminal.ansiMagenta": "#98005D",
            "terminal.ansiRed": "#EE2E24",
            "terminal.ansiWhite": "#D9D8D8",
            "terminal.ansiYellow": "#FFD204",
            "editor.ansiYellow": "#FFD204",
            // "editorBracketHighlight.foreground1": "#E6E6E6",
            // "editorBracketHighlight.foreground2": "#FF75B5",
            // "editorBracketHighlight.foreground3": "#19f9d8",
            // "editorBracketHighlight.foreground4": "#B084EB",
            // "editorBracketHighlight.foreground5": "#45A9F9",
            // "editorBracketHighlight.foreground6": "#FFB86C",
            "editorBracketHighlight.unexpectedBracket.foreground": "#FF2C6D"
        },
        "editor.inlineSuggest.enabled": true,
        

}