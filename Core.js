onst downloadedModels = await client.system.listDownloadedModels();
const downloadedLLMs = downloadedModels.filter((model) => model.type === "llm");
