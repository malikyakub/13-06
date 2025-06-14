const code = `// To run this code you need to install the following dependencies:\n// npm install @google/genai mime\n// npm install -D @types/node\n\nimport { GoogleGenAI } from \"@google/genai\";\n\nexport async function annotateCode(code: string) {\n  const ai = new GoogleGenAI({\n    apiKey:\n      process.env.GEMINI_API_KEY || \"AIzaSyDOTdEqYBmIMFUe3c8cpwk7HdeV7V2bSeA\",\n  });\n  const config = {\n    responseMimeType: \"text/code\",\n    systemInstruction: [\n      {\n        text: 'You are a code annotation assistant...',\n      },\n    ],\n  };\n  const model = \"gemini-2.0-flash\";\n  const contents = [\n    {\n      role: \"user\",\n      parts: [\n        {\n          text: code,\n        },\n      ],\n    },\n  ];\n\n  const response = await ai.models.generateContentStream({\n    model,\n    config,\n    contents,\n  });\n\n  let annotatedCode = \"\";\n  for await (const chunk of response) {\n    annotatedCode += chunk.text;\n  }\n\n  return annotatedCode;\n}\n\nexport default annotateCode;`;

async function main() {
  try {
    const { annotateCode } = await import("./annotateCode.ts");
    const annotated = await annotateCode(code);
    console.log(annotated);
  } catch (error) {
    console.error("Error annotating code:", error);
  }
}

main();
