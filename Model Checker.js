const controller = new AbortController();

try {
  const llama3 = await client.llm.load("lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF", {
    signal: controller.signal,
  });
  // llama3.complete(...);
} catch (error) {
  console.error(error);
}

// Somewhere else in your code:
controller.abort();
import { LMStudioClient } from "@lmstudio/sdk";

async function main() {
  const client = new LMStudioClient();

  // Load a model
  const llama3 = await client.llm.load("lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF", {
    config: { gpuOffload: "max" },
  });

  // Create a text completion prediction
  const prediction = llama3.complete("The meaning of life is");

  // Stream the response
  for await (const text of prediction) {
    process.stdout.write(text);
  }
}

main();
