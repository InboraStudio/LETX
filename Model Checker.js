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
