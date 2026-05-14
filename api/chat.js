// api/chat.js — Vercel Serverless Function

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const key = process.env.GROQ_API_KEY;
  if (!key) {
    console.error("GROQ_API_KEY is not set");
    return res.status(500).json({ error: "GROQ_API_KEY not configured on server" });
  }

  const { messages, systemPrompt } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages array" });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: systemPrompt || "You are ENOVA Dev AI — a concise coding tutor for HTML, CSS and JavaScript beginners. Guide with hints, never give full solutions. Keep responses under 150 words."
          },
          ...messages
        ],
        max_tokens: 800,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", err);
      return res.status(500).json({ error: `Groq error: ${err}` });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No response from AI";
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Handler error:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
