export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const key = process.env.GROQ_API_KEY;
  if (!key) return res.status(500).json({ error: "GROQ_API_KEY not set on server" });

  const { messages, systemPrompt, mode } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: "Invalid messages" });

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key}` },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "system", content: systemPrompt || "You are ENOVA Dev AI, a coding tutor." }, ...messages],
        max_tokens: mode === "score" ? 400 : 900,
        temperature: mode === "score" ? 0.3 : 0.7
      })
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ error: "Groq error: " + err });
    }

    const data = await response.json();
    return res.status(200).json({ reply: data.choices?.[0]?.message?.content || "No response" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
