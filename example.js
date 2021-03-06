const res = [
    {
      code: 'function () { }',
      start: 3389,
      end: 3404,
      charLength: 15,
      type: 'function',
      startLine: 117,
      endLine: 117,
      stenographyResponse: {
        code: 'function () { }',
        pm: 'This code is creating a function that does nothing.\n',
        metadata: [Object]
      }
    },
    {
      code: 'function (response) {\n            // console.log(response);\n        }',
      start: 2825,
      end: 2894,
      charLength: 69,
      type: 'function',
      startLine: 92,
      endLine: 94,
      stenographyResponse: {
        code: 'function (response) {\n            // console.log(response);\n        }',
        pm: 'This code is sending a request to the server. The response from the server will be printed in the console.',
        metadata: [Object]
      }
    },
    {
      code: 'function (response) {\n' +
        '                // console.log(response);\n' +
        '            }',
      start: 1734,
      end: 1811,
      charLength: 77,
      type: 'function',
      startLine: 92,
      endLine: 94,
      stenographyResponse: {
        code: 'function (response) {\n' +
          '                // console.log(response);\n' +
          '            }',
        pm: 'This code is sending a request to the server. The response from the server will be printed in the console.',
        metadata: [Object]
      }
    },
    {
      code: '() => {\n' +
        '        dialog.close();\n' +
        '        document.body.removeChild(modal);\n' +
        '    }',
      start: 2006,
      end: 2085,
      charLength: 79,
      type: 'function',
      startLine: 68,
      endLine: 71,
      stenographyResponse: {
        code: '() => {\n' +
          '        dialog.close();\n' +
          '        document.body.removeChild(modal);\n' +
          '    }',
        pm: 'This code is closing the modal window.',
        metadata: [Object]
      }
    },
    {
      code: 'function (e) {\n' +
        '    var x = e.pageX;\n' +
        '    var y = e.pageY;\n' +
        '    pageX = x;\n' +
        '    pageY = y;\n' +
        '}',
      start: 220,
      end: 308,
      charLength: 88,
      type: 'function',
      startLine: 13,
      endLine: 18,
      stenographyResponse: {
        code: 'function (e) {\n' +
          '    var x = e.pageX;\n' +
          '    var y = e.pageY;\n' +
          '    pageX = x;\n' +
          '    pageY = y;\n' +
          '}',
        pm: 'This code is creating a function that will be called when the user clicks on the page.\n' +
          'It stores the x and y coordinates of where they clicked in two variables, which can then be used later.\n',
        metadata: [Object]
      }
    },
    {
      code: 'function (event) {\n' +
        '        dialog.close();\n' +
        '        document.body.removeChild(modal);\n' +
        '    }',
      start: 1853,
      end: 1943,
      charLength: 90,
      type: 'function',
      startLine: 63,
      endLine: 66,
      stenographyResponse: {
        code: 'function (event) {\n' +
          '        dialog.close();\n' +
          '        document.body.removeChild(modal);\n' +
          '    }',
        pm: 'This code is creating a modal window that will display the message.\n' +
          "It's also adding an event listener to close the modal when you click on it.\n",
        metadata: [Object]
      }
    },
    {
      code: 'function uuid() {\n' +
        '    return Date.now().toString(36) + Math.random().toString(36).substring(2);\n' +
        '}',
      start: 2505,
      end: 2602,
      charLength: 97,
      type: 'function',
      startLine: 84,
      endLine: 86,
      stenographyResponse: {
        code: 'function uuid() {\n' +
          '    return Date.now().toString(36) + Math.random().toString(36).substring(2);\n' +
          '}',
        pm: 'This code is generating a random UUID.',
        metadata: [Object]
      }
    },
    {
      code: "if (typeof data === 'object' && data !== null && !Array.isArray(data)) data = JSON.stringify(data, null, 2);",
      start: 417,
      end: 525,
      charLength: 108,
      type: 'conditional',
      startLine: 22,
      endLine: 22,
      stenographyResponse: {
        code: "if (typeof data === 'object' && data !== null && !Array.isArray(data)) data = JSON.stringify(data, null, 2);",
        pm: 'This code is checking if the data variable is an object, and then it checks to see if that object is null. If both of those are true, then we convert the data into a string using JSON.stringify().',
        metadata: [Object]
      }
    },
    {
      code: '() => {\n' +
        '            chrome.runtime.sendMessage({ "open-options": "open-options-val" }, function (response) {\n' +
        '                // console.log(response);\n' +
        '            });\n' +
        '        }',
      start: 1647,
      end: 1823,
      charLength: 176,
      type: 'function',
      startLine: 68,
      endLine: 72,
      stenographyResponse: {
        code: '() => {\n' +
          '            chrome.runtime.sendMessage({ "open-options": "open-options-val" }, function (response) {\n' +
          '                // console.log(response);\n' +
          '            });\n' +
          '        }',
        pm: 'This code is sending a message to the background script. The message is being sent with an object that contains\n' +
          `a property called "openoptions". This property's value is set to "openoptionsval" (which can be anything).\n` +
          'The response from the background script will be printed in the console.',
        metadata: [Object]
      }
    },
    {
      code: 'if (errorPage) {\n' +
        '        errorPage.addEventListener("click", () => {\n' +
        '            chrome.runtime.sendMessage({ "open-options": "open-options-val" }, function (response) {\n' +
        '                // console.log(response);\n' +
        '            });\n' +
        '        });\n' +
        '    }',
      start: 1586,
      end: 1831,
      charLength: 245,
      type: 'conditional',
      startLine: 56,
      endLine: 62,
      stenographyResponse: {
        code: 'if (errorPage) {\n' +
          '        errorPage.addEventListener("click", () => {\n' +
          '            chrome.runtime.sendMessage({ "open-options": "open-options-val" }, function (response) {\n' +
          '                // console.log(response);\n' +
          '            });\n' +
          '        });\n' +
          '    }',
        pm: 'This code is sending a message to the background script. The background script will then open up the options page for this extension.',
        metadata: [Object]
      }
    },
    {
      code: 'function share() {\n' +
        '        var markdown = turndownService.turndown(data)\n' +
        "        window.open(`https://carbon.now.sh/?l=javascript&code=${encodeURIComponent('/*\\n' + markdown + '\\n\\n- generated by [Stenography](https://www.stenography.dev/) ???? \\n*/\\n' + code)}`)\n" +
        '        dialog.close();\n' +
        '        document.body.removeChild(modal);\n' +
        '    }',
      start: 2093,
      end: 2426,
      charLength: 333,
      type: 'function',
      startLine: 73,
      endLine: 78,
      stenographyResponse: {
        code: 'function share() {\n' +
          '        var markdown = turndownService.turndown(data)\n' +
          "        window.open(`https://carbon.now.sh/?l=javascript&code=${encodeURIComponent('/*\\n' + markdown + '\\n\\n- generated by [Stenography](https://www.stenography.dev/) ???? \\n*/\\n' + code)}`)\n" +
          '        dialog.close();\n' +
          '        document.body.removeChild(modal);\n' +
          '    }',
        pm: 'This code is a JavaScript application that generates code from text.\n' +
          'It uses [Stenography](https://www.stenography.dev/) to convert the text into code and then it opens a new tab with the generated code in Carbon, which is an online compiler for Markdown and HTML files.',
        metadata: [Object]
      }
    },
    {
      code: 'if (result["explanations"] === undefined) {\n' +
        '                initExplanations.push({\n' +
        '                    explanation: request.data.trim(),\n' +
        '                    code: request.code.trim(),\n' +
        '                    metadata: {\n' +
        '                        id: uuid(),\n' +
        '                    }\n' +
        '                })\n' +
        '                chrome.storage.local.set({ "explanations": initExplanations }, function () { });\n' +
        '            } else {\n' +
        '                const explanations = result["explanations"];\n' +
        '                explanations.push({\n' +
        '                    explanation: request.data.trim(),\n' +
        '                    code: request.code.trim(),\n' +
        '                    metadata: {\n' +
        '                        id: uuid(),\n' +
        '                    }\n' +
        '                })\n' +
        '                chrome.storage.local.set({ "explanations": explanations }, function () { });\n' +
        '            }',
      start: 3016,
      end: 3841,
      charLength: 825,
      type: 'conditional',
      startLine: 99,
      endLine: 118,
      stenographyResponse: {
        code: 'if (result["explanations"] === undefined) {\n' +
          '                initExplanations.push({\n' +
          '                    explanation: request.data.trim(),\n' +
          '                    code: request.code.trim(),\n' +
          '                    metadata: {\n' +
          '                        id: uuid(),\n' +
          '                    }\n' +
          '                })\n' +
          '                chrome.storage.local.set({ "explanations": initExplanations }, function () { });\n' +
          '            } else {\n' +
          '                const explanations = result["explanations"];\n' +
          '                explanations.push({\n' +
          '                    explanation: request.data.trim(),\n' +
          '                    code: request.code.trim(),\n' +
          '                    metadata: {\n' +
          '                        id: uuid(),\n' +
          '                    }\n' +
          '                })\n' +
          '                chrome.storage.local.set({ "explanations": explanations }, function () { });\n' +
          '            }',
        pm: 'This code is adding a new explanation to the list of explanations.',
        metadata: [Object]
      }
    },
    {
      code: 'function (result) {\n' +
        '            if (result["explanations"] === undefined) {\n' +
        '                initExplanations.push({\n' +
        '                    explanation: request.data.trim(),\n' +
        '                    code: request.code.trim(),\n' +
        '                    metadata: {\n' +
        '                        id: uuid(),\n' +
        '                    }\n' +
        '                })\n' +
        '                chrome.storage.local.set({ "explanations": initExplanations }, function () { });\n' +
        '            } else {\n' +
        '                const explanations = result["explanations"];\n' +
        '                explanations.push({\n' +
        '                    explanation: request.data.trim(),\n' +
        '                    code: request.code.trim(),\n' +
        '                    metadata: {\n' +
        '                        id: uuid(),\n' +
        '                    }\n' +
        '                })\n' +
        '                chrome.storage.local.set({ "explanations": explanations }, function () { });\n' +
        '            }\n' +
        '        }',
      start: 2984,
      end: 3851,
      charLength: 867,
      type: 'function',
      startLine: 98,
      endLine: 119,
      stenographyResponse: {
        code: 'function (result) {\n' +
          '            if (result["explanations"] === undefined) {\n' +
          '                initExplanations.push({\n' +
          '                    explanation: request.data.trim(),\n' +
          '                    code: request.code.trim(),\n' +
          '                    metadata: {\n' +
          '                        id: uuid(),\n' +
          '                    }\n' +
          '                })\n' +
          '                chrome.storage.local.set({ "explanations": initExplanations }, function () { });\n' +
          '            } else {\n' +
          '                const explanations = result["explanations"];\n' +
          '                explanations.push({\n' +
          '                    explanation: request.data.trim(),\n' +
          '                    code: request.code.trim(),\n' +
          '                    metadata: {\n' +
          '                        id: uuid(),\n' +
          '                    }\n' +
          '                })\n' +
          '                chrome.storage.local.set({ "explanations": explanations }, function () { });\n' +
          '            }\n' +
          '        }',
        pm: 'This code is checking if the result of a function has an explanation. If it does, then do some code.\n' +
          'If not, do some other code.\n',
        metadata: [Object]
      }
    }
  ]

module.exports = { res }